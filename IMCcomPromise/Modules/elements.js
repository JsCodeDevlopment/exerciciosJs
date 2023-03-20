export function createResultElement(tag = "strong", innerText = "", id) {
  const result = document.createElement(tag);
  Object.assign(result, { innerText, id });
  return result;
}
