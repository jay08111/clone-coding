const button = document.createElement("button");
document.querySelector("body").appendChild(button);
const ul = document.createElement("ul");
const makeElement = (data, type) => {
  if (type === "csv") {
    for (const element of data) {
      const li = document.createElement("li");
      document.querySelector("body").appendChild(ul).appendChild(li);
    }
    d3.select("ul")
      .selectAll("li")
      .data(data)
      .join()
      .text((d) => d);
  } else {
    for (const element of data) {
      const li = document.createElement("li");
      document.querySelector("body").appendChild(ul).appendChild(li);
    }
    d3.select("ul")
      .selectAll("li")
      .data(data)
      .join()
      .text((d) => d);
  }
  for (const element of data) {
    const li = document.createElement("li");
    document.querySelector("body").appendChild(ul).appendChild(li);
  }
};
const getData = async (type) => {
  if (type === "json") {
    await d3.json("data.json").then((res) => {
      makeElement(res, type);
    });
  } else if (type === "csv") {
    await d3.csv("data.csv").then((res) => {
      makeElement(res, type);
    });
  }
};

button.textContent = "Click to fetch";
let toggleType = false;
button.addEventListener("click", () => {
  toggleType = !toggleType;
  if (toggleType) {
    getData("json");
  } else {
    getData("csv");
  }
});
