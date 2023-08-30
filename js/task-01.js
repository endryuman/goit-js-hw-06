const list = document.querySelector("#categories");
const listLengs = list.children.length;
console.log("Number of categories:", listLengs);

const items = document.querySelectorAll(".item");
items.forEach(function (item, index) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
