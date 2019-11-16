import rwidget from "./rwidget";
import testWidget from "./test-widget";
import { addScript2Head } from "./utils";

global.rwidget = rwidget;

// Register test widget
rwidget.register({
  name: "test",
  type: testWidget
});

addScript2Head("https://unpkg.com/deck.gl/dist.min.js")
  .then(src => console.log(`${src} loaded`))
  .catch(src => console.log(`${src} NOT loaded`));

document.addEventListener("DOMContentLoaded", (e) => {
  const scriptElements = document.getElementsByClassName("rwidget");
    for (let i = 0; i < scriptElements.length; i++) {
      rwidget.make(scriptElements[i]);
    }
});
