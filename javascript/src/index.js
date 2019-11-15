import rwidget from "./rwidget";
import testWidget from "./test-widget";

global.rwidget = rwidget;

// Register test widget
rwidget.register({
  name: "test",
  type: testWidget
});

document.addEventListener('DOMContentLoaded', (e) => {
const scriptElements = document.getElementsByClassName("rwidget");
  for (let i = 0; i < scriptElements.length; i++) {
    rwidget.make(scriptElements[i]);
  }
});
