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
  { src: "https://unpkg.com/deck.gl/dist.min.js", tag: "script" },
  { src: "https://unpkg.com/mapbox-gl/dist/mapbox-gl.js", tag: "script" },
  { src: "https://unpkg.com/mapbox-gl/dist/mapbox-gl.css", tag: "link" }
];

Promise.all(sources.map(item => addScript2Head(item.src, item.tag)))
  .then(values => console.log(values));
// .catch(src => console.log(`${src} NOT loaded`));

document.addEventListener("DOMContentLoaded", (e) => {
  const scriptElements = document.getElementsByClassName("rwidget");
    for (let i = 0; i < scriptElements.length; i++) {
      rwidget.make(scriptElements[i]);
    }
});
