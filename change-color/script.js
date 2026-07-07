const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target.id);
    if (event.target.id === "grey") {
      body.style.background = "grey";
    } else if (event.target.id === "purple") {
      body.style.background = "purple";
    }
    if (event.target.id === "blue") {
      body.style.background = "blue";
    }
    if (event.target.id === "pink") {
      body.style.background = "pink";
    }
    if (event.target.id === "brown") {
      body.style.background = "brown";
    }
  });
});
