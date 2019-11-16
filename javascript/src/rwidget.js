import { addScript2Head } from "./utils";

const widgets = { };
const sources = {
  scripts: [ ],
  styles: [ ]
};

/**
 * Register a widget object
 * @param props properties
 * @param props.name widget name
 * @param props.type class or factory function
 * @param props.scripts (optional) external libs that should be loaded
 * @param props.styles (optional) extrnal stylesheets that should be loaded
 */
function register(props) {
  props.scripts = props.scripts || [ ];
  props.styles = props.styles || [ ];
  widgets[props.name] = props;
  /*
  scripts.forEach(script => {
    if (!sources.scripts.includes(script)) {
      sources.scripts.push(script);
    }
  });
  styles.forEach(style => {
    if (!sources.styles.includes(style)) {
      sources.styles.push(style);
    }
  });
  */
}

function make(scriptElement) {
  const data = JSON.parse(scriptElement.innerText);
  const widgetName = scriptElement.classList[1];
  if (!Object.keys(widgets).includes(widgetName)) {
    console.log(`widget "${widgetName}" not registered`);
    return;
  }

  Promise.all(
    widgets[widgetName].scripts.map(script => addScript2Head(script))
  ).then(values => {
    console.log(widgetName, values, "loaded");
    const widgetElement = document.createElement("div");
    widgetElement.id = scriptElement.id.replace("data-", "");
    document.body.appendChild(widgetElement);
    const makeWidget = widgets[widgetName].type;
    makeWidget(widgetElement).render(data);
  });
  /*
  const widgetElement = document.createElement("div");
  widgetElement.id = scriptElement.id.replace("data-", "");
  document.body.appendChild(widgetElement);
  const makeWidget = widgets[widgetName].type;
  makeWidget(widgetElement).render(data);
  */
}

export default {
  register: register,
  make: make,
  widgets: widgets,
  sources: sources
};
