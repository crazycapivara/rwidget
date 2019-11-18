export default function(widgets) {
  // Uses 'div' tag in R instead of 'rwidget' tag
  return function (widgetElement) {
    const widgetData = JSON.parse(widgetElement.dataset.widgetData);
    const widgetName = widgetElement.classList[1];
    if (!Object.keys(widgets).includes(widgetName)) {
      console.log(`widget "${widgetName}" not registered`);
      return;
    }

    const makeWidget = widgets[widgetName].type;
    makeWidget(widgetElement).render(widgetData);
  };
}
