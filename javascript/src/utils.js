export function addScript2Head(src, tag) {
  tag = tag || "script";
  return new Promise(function(resolve, reject) {
    const element = document.createElement(tag);
    if (tag === "link") {
      element.rel = "stylesheet";
      element.type = "text/css";
      element.href = src;
    } else {
      element.src = src;
    }

    element.onload = () => resolve(src);
    element.onerror = () => reject(src);
    document.head.appendChild(element);
  });
}

