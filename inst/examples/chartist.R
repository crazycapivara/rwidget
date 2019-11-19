chartist <- function(x, y, type = "Line", element_id = NULL) {
  make_widget(
    name = "chartist",
    script = system.file("examples/widgets/chartist-widget.js", package = "rwidget"),
    data = list(
      x = x,
      y = y,
      type = type
    ),
    element_id = element_id
  )
}

