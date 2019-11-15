const widgets = { };

/**
 * Register a widget object
 * @param props properties
 * @param props.name class/widget name
 * @param props.type class or factory function
 * ...
 */
function register(props) {
  widgets[props.name] = props;
}

function make(scriptElement) {
  const data = JSON.parse(scriptElement.innerText);
  const widgetName = scriptElement.classList[1];
  if (!Object.keys(widgets).includes(widgetName)) {
    console.log(`widget "${widgetName}" not registered`);
    return;
  }

  const widgetElement = document.createElement("div");
  widgetElement.id = scriptElement.id.replace("data-", "");
  document.body.appendChild(widgetElement);
  const makeWidget = widgets[widgetName].type;
  makeWidget(widgetElement).render(data);
}

export default {
  register: register,
  make: make,
  widgets: widgets
};
