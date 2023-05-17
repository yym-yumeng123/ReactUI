import "./style.css";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = "Hello webpack";
  element.classList.add("hello");
  btn.innerHTML = "Click me and check the console!";

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
