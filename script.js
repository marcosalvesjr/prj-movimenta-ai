function clickToShow() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function clickToHide() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
