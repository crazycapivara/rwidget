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
write_html <- function(widget, template = NULL, output_folder = tempdir()) {
  #html <- render_template(
  #  get_file(CONFIG$template),
  #  list(
  #    head = make_head(widget),
  #    rwidget = make_widget_tag(widget)
  #  )
  #)
  html <- as_html(widget, template)
  index_filename <- file.path(output_folder, "index.html")
  readr::write_file(html, index_filename)
  file.copy(c(get_file(CONFIG$lib), widget$script), output_folder, overwrite = TRUE)
  index_filename
}

#' @export
as_html <- function(widget, template = NULL) {
  if (is.null(template)) template <- get_file(CONFIG$template)

  render_template(
    template,
    list(
      head = make_head(widget),
      rwidget = make_widget_tag(widget)
    )
  )
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
