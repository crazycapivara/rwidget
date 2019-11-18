import { addSource2Head } from "./utils";

const widgets = { };
const cfg = { sources: [ ] };

/**
 * Register a widget object
 * @param props properties
 * @param props.name widget name
 * @param props.type class or factory function
 * @param props.sources (optional) external libs and stylesheets that should be loaded
 */
function register(props) {
  props.sources = props.sources || [ ];
  cfg.sources = cfg.sources.concat(props.sources);
  widgets[props.name] = props;
}

function addSources() {
  return Promise.all(cfg.sources.map(src => addSource2Head(src)));
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
  widgetElement.style.width = data.width || "";
  widgetElement.style.height = data.height || "";
  document.body.appendChild(widgetElement);
  const makeWidget = widgets[widgetName].type;
  new makeWidget(widgetElement).render(data.widgetData);
}

export default {
  register: register,
  addSources: addSources,
  make: make,
  widgets: widgets,
  cfg: cfg
};
