.widget_lib <- system.file("dist/rwidget.js", package = utils::packageName())
.template <- system.file("templates/index.html", package = utils::packageName())

#' @export
make_widget <- function(name, data, element_id) {
  dataset <- list(
    data = data,
    elementId = element_id
  )
  json_data <- jsonlite::toJSON(dataset, auto_unbox = TRUE)
  tag <- sprintf(
    "<rwidget id='%s' class='rwidget-%s' data-widget-data='%s'></rwidget>\n",
    element_id,
    name,
    json_data
  )

  message(.widget_lib)
  tag
}

#' @export
write_html <- function(tag) {
  html <- readr::read_file(.template) %>%
    stringr::str_replace("\\{\\{ rwidget \\}\\}", tag)
  tmp_dir <- tempdir()
  index_filename <- file.path(tmp_dir, "index.html")
  readr::write_file(html, index_filename)
  file.copy(.widget_lib, tmp_dir, overwrite = TRUE)
  index_filename
}
