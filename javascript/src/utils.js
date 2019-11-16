export function addScript2Head(src) {
  return new Promise(function(resolve, reject) {
    const element = document.createElement("script");
    element.src = src;
    element.onload = () => resolve(src);
    element.onerror = () => reject(src);
    document.head.appendChild(element);
  });
}

