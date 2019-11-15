#' @export
make_widget <- function(name, data, element_id) {
  structure(
    list(
      name = name,
      element_id = element_id,
      dataset = data
    ),
    class = "rwidget"
  )
}

#' @export
write_html <- function(widget, output_folder = tempdir()) {
  html <- readr::read_file(get_file(CONFIG$template)) %>%
    stringr::str_replace("\\{\\{ rwidget \\}\\}", make_widget_tag(widget))
  index_filename <- file.path(output_folder, "index.html")
  readr::write_file(html, index_filename)
  file.copy(get_file(CONFIG$lib), output_folder, overwrite = TRUE)
  index_filename
}

make_widget_tag <- function(widget) {
  json_data <- jsonlite::toJSON(widget$dataset, auto_unbox = TRUE)
  sprintf(
    "<rwidget id='%s' class='rwidget-%s' data-widget-data='%s'></rwidget>",
    widget$element_id,
    widget$name,
    json_data
  )
}
