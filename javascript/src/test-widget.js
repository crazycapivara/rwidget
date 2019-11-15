export default function(widgetElement) {
  const widget = { };

  widget.render = function(widgetData) {
    console.log(widgetElement.id);
    console.log(widgetData);
    widgetElement.innerText = "Hello widget!";
  };

  return widget;

}
