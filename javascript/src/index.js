import CONFIG from "./config";
import testWidget from "./test-widget";

console.log("Pipe data from R to JavaScript.");

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

function getData(widgetDataElement) {
  const data = JSON.parse(widgetDataElement.dataset.widgetData);
  return {
    id: widgetDataElement.id,
    name: widgetDataElement.className.replace(`${CONFIG.widgetTag}-`, ""),
    widgetData: data
  };
}

function make(widgetDataElement) {
  const data = getData(widgetDataElement);
  const widgetElement = document.createElement("div");
  widgetElement.id = data.id;
  document.body.appendChild(widgetElement);
  return { data: data.widgetData, widgetElement: widgetElement };
}

function run(test) {
  if (test) {
    const widgetDataElement = document.getElementsByTagName("rwidget")[0];
    const args = make(widgetDataElement);
    const widget = testWidget(args.widgetElement);
    widget.render(args.data);
    return;
  }
}

global.rwidget = {
  register: register,
  getData: getData,
  make: make,
  run: run
};

global._rwidget = {
  widgets: widgets
};
