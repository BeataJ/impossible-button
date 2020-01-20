const btn = document.querySelector("button");

btn.addEventListener("mouseover", function() {
  console.log("MOUSED OVER ME!");
  btn.style.left = "200px";
  btn.style.top = "100px";
});
