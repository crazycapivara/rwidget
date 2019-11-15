function helloWorld(widgetElement) {
  const widget = { };

  widget.render = function(widgetData) {
    widgetElement.innerHTML = widgetData.message;
  };

  return widget;
}

rwidget.register({
  name: "helloworld",
  type: helloWorld
});
