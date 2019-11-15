#' @export
make_widget <- function(name, script, data, element_id, external_scripts = NULL) {
  structure(
    list(
      name = name,
      script = script,
      element_id = element_id,
      dataset = data,
      external_scripts = external_scripts
    ),
    class = "rwidget"
  )
}

#' @export
write_html <- function(widget, output_folder = tempdir()) {
  html <- readr::read_file(get_file(CONFIG$template)) %>%
    stringr::str_replace("<!-- head -->", make_head(widget)) %>%
    stringr::str_replace("\\{\\{ rwidget \\}\\}", make_widget_tag(widget))
  index_filename <- file.path(output_folder, "index.html")
  readr::write_file(html, index_filename)
  file.copy(c(get_file(CONFIG$lib), widget$script), output_folder, overwrite = TRUE)
  index_filename
}

make_head <- function(widget) {
  if (is.null(widget$external_scripts)) {
    return("")
  }

  lapply(widget$external_scripts, function(script) {
    htmltools::tags$script(src = script)
  }) %>% htmltools::tagList() %>%
    as.character()
}

make_widget_tag <- function(widget) {
  json_data <- jsonlite::toJSON(widget$dataset, auto_unbox = TRUE, force = TRUE)
  data_tag <- htmltools::tags$script(
    type = "rwidget",
    id = paste0("data-", widget$element_id),
    class = paste("rwidget", widget$name),
    json_data
  )
  lib_tag <- htmltools::tags$script(src = basename(widget$script))
  htmltools::tagList(
    data_tag,
    lib_tag
  ) %>% as.character()
}
