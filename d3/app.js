import axios from "axios";
const ul = document.createElement("ul");
for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  document.querySelector("body").appendChild(ul).appendChild(li);
}
const data = [10, 20, 30, 40, 50];
const el = d3
  .select("ul")
  .selectAll("li")
  .data(data)
  .join()
  .text((d) => d);
console.log(el);
