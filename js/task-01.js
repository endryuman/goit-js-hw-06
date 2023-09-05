const list = document.querySelector("#categories");
const listLength = list.children.length;
console.log("Number of categories:", listLength);

const items = document.querySelectorAll(".item");
items.forEach(function (item, index) {
  const firstChild = item.firstElementChild;
  console.log("Category:", firstChild.textContent);
  console.log("Elements:", firstChild.nextElementSibling.children.length);
});
