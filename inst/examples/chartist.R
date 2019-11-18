chartist <- function(x, y, type = "Line", element_id = "chartist-chart") {
  make_widget(
    name = "chartist",
    script = "inst/examples/widgets/chartist-widget.js",
    data = list(
      x = x,
      y = y,
      type = type
    ),
    element_id = element_id
  )
}

