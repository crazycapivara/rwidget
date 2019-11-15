import CONFIG from "./config";
import testWidget from "./test-widget";
import app from "./widget";

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

// TODO: Pass widget name via data arg
function getData(widgetDataElement) {
  const data = JSON.parse(widgetDataElement.dataset.widgetData);
  return {
    id: widgetDataElement.id,
    widgetName: widgetDataElement.className.replace(`${CONFIG.widgetTag}-`, ""),
    widgetData: data
  };
}

function make(widgetDataElement) {
  const data = getData(widgetDataElement);
  if (!Object.keys(widgets).includes(data.widgetName)) {
    console.log(`widget "${data.widgetName}" not registered`);
    return;
  }

  const widgetElement = document.createElement("div");
  widgetElement.id = data.id;
  document.body.appendChild(widgetElement);
  const makeWidget = widgets[data.widgetName].type;
  makeWidget(widgetElement).render(data.widgetData);
}

function run() {
  const widgetDataElements = document.getElementsByTagName(CONFIG.widgetTag);
  for (let i = 0; i < widgetDataElements.length; i++) {
    make(widgetDataElements[i]);
  }
}

function run2() {
  const makeWidget = app(widgets);
  const widgetElements = document.getElementsByClassName("rwidget");
  for (let i = 0; i < widgetElements.length; i++) {
    makeWidget(widgetElements[i]);
  }
}

// Register test widget
register({
  name: "test",
  type: testWidget
});

document.addEventListener('DOMContentLoaded', (e) => {
  // run();
  run2();
});

// Only for testing, usually only 'register' should be available in the global context
global.rwidget = {
  register: register,
  getData: getData,
  make: make,
  run: run
};

global._rwidget = {
  widgets: widgets,
  app: app
};
