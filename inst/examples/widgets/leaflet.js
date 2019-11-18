function leafletWidget(widgetElement) {
  const widget = { };

  // widgetElement.style.height = "600px";

  widget.render = function(widgetData) {
    console.log(L);
    // widgetElement.innerHTML = widgetData.message;
    const map = window.map = L.map(widgetElement.id).setView([51.505, -0.09], 13);
    L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg", {
      attribution: "Add attribution here ...",
      maxZoom: 18
    }).addTo(map);
  };

  return widget;
}

rwidget.register({
  name: "leaflet",
  type: leafletWidget,
  sources: [
    { url: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css", tag: "link" },
    { url: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js", tag: "script" }
  ]
});
