const cardSet = document.querySelectorAll("[data-js=card-set]");
cardSet.forEach((card) => {
  const bookmark = card.querySelector("[data-js=bookmark]");
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card-set__bookmarklabel--booked");
  });

  const btnAnswer = card.querySelector("[data-js=btn-answer]");

  /*const btnShow = card.querySelector("[data-js=btn-show]");
  const btnHide = card.querySelector("[data-js=btn-hide]");*/
  btnAnswer.addEventListener("click", () => {
    console.log("hi");
    /* btnShow.classList.toggle("hidden");
    btnHide.classList.toggle("hidden");*/
  });
});
