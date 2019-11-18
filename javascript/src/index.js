import rwidget from "./rwidget";
import testWidget from "./test-widget";
import { addSource2Head } from "./utils";

global.rwidget = rwidget;

// Register test widget
rwidget.register({
  name: "test",
  type: testWidget,
  sources: [
    { url: "https://unpkg.com/mapbox-gl/dist/mapbox-gl.js", tag: "script" },
    { url: "https://unpkg.com/mapbox-gl/dist/mapbox-gl.css", tag: "link" }
  ],
});

const sources = [
  { url: "https://unpkg.com/deck.gl/dist.min.js", tag: "script" },
  { url: "https://unpkg.com/mapbox-gl/dist/mapbox-gl.js", tag: "script" },
  { url: "https://unpkg.com/mapbox-gl/dist/mapbox-gl.css", tag: "link" }
];

//Promise.all(rwidget.cfg.sources.map(src => addSource2Head(src)))
// rwidget.addSources().then(values => console.log(values));

document.addEventListener("DOMContentLoaded", (e) => {
  rwidget.addSources().then(values => {
    console.log(values);
    const scriptElements = document.getElementsByClassName("rwidget");
    for (let i = 0; i < scriptElements.length; i++) {
      rwidget.make(scriptElements[i]);
    }
  });
});
