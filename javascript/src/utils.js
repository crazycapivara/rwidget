/**
 * Add a source (lib or stylesheet) to the docuemnt head
 * @param src source that will be add to the document head
 * @param src.url url of the source
 * @param src.tag tag type of the source, either 'script' or 'link' (stylesheet)
 */
export function addSource2Head(src) {
  const tag = src.tag || "script";
  return new Promise(function(resolve, reject) {
    const element = document.createElement(tag);
    if (tag === "link") {
      element.rel = "stylesheet";
      element.type = "text/css";
      element.href = src.url;
    } else {
      element.src = src.url;
    }

    element.onload = () => resolve(src.url);
    element.onerror = () => reject(src.url);
    document.head.appendChild(element);
  });
}
