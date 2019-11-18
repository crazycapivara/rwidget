CONFIG <- list(
  lib = "dist/rwidget.js",
  template = "templates/index.html"
)

get_file <- function(filename) {
  system.file(filename, package = utils::packageName())
}
