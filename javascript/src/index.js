import rwidget from "./rwidget";
import testWidget from "./test-widget";
import { addScript2Head } from "./utils";

global.rwidget = rwidget;

// Register test widget
rwidget.register({
  name: "test",
  type: testWidget
});

const sources = [
  "https://unpkg.com/deck.gl/dist.min.js",
  "https://unpkg.com/mapbox-gl/dist/mapbox-gl.js"
];

Promise.all(sources.map(src => addScript2Head(src)))
  .then(values => console.log(values));
// .catch(src => console.log(`${src} NOT loaded`));

document.addEventListener("DOMContentLoaded", (e) => {
  const scriptElements = document.getElementsByClassName("rwidget");
    for (let i = 0; i < scriptElements.length; i++) {
      rwidget.make(scriptElements[i]);
    }
});
