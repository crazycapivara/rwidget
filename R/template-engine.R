render_template <- function(template, data) {
  output <- readr::read_file(template)
  for (key in names(data)) {
    pattern <- sprintf("<!-- %s -->", key)
    output <- stringr::str_replace(output, pattern, data[[key]])
  }

  output
}
