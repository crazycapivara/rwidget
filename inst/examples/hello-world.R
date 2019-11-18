hello_world_widget <- function(msg, element_id = "hello") {
  make_widget(
    name = "helloworld",
    script = system.file("examples/widgets/hello-world.js", package = "rwidget"),
    element_id = element_id,
    data = list(
      message = msg
    ),
    external_scripts = c("https://unpkg.com/lodash@4.16.6")
  )
}
