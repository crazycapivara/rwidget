class ChartistWidget {
  constructor(widgetElement) {
    this.widgetElement = widgetElement;
    this.widgetElement.className = "ct-chart ct-perfect-fourth";
  }

  render(widgetData) {
    const chartType = widgetData.type || "Line";
    const data = {
      labels: widgetData.x,
      series: [ widgetData.y ]
    };
    const options = { width: 600, height: 400 };
    new Chartist[chartType](`#${this.widgetElement.id}`, data, options);
  }
}

rwidget.register({
  name: "chartist",
  type: ChartistWidget,
  sources: [
    { url: "https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css", tag: "link" },
    { url: "https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js", tag: "script" }
  ]
});
