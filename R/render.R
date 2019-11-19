#' @export
print.rwidget <- function(widget) {
  # print(as_html(widget))
  filename <- write_html(widget)
  print(filename)
  viewer <- getOption("viewer")
  if (is.null(viewer)) {
    utils::browseURL(filename)
  } else {
    viewer(filename)
  }
}
