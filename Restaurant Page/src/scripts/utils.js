export function createDiv(className, textContent = "") {
  const div = document.createElement("div");
  div.classList.add(className);
  div.textContent = textContent;
  return div;
}
