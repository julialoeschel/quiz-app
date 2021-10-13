const toggleAnswerButton = document.querySelector(".js-btn-answer");
const showAnswer = document.querySelector(".js-btn-showAnswer");
const hideAnswer = document.querySelector(".js-btn-hideAnswer");
const showAnswerH = document.querySelector(".js-answer-heading ");
const hideAnswerT = document.querySelector(".js-answer-text");
const bookmark = document.querySelector(".js-bookmark");
const homebtn = document.querySelector(".js-home-btn");
const bookmarkbtn = document.querySelector(".js-bookmark-btn");

toggleAnswerButton.addEventListener("click", () => {
  showAnswer.classList.toggle("hidden");
  hideAnswer.classList.toggle("hidden");
  showAnswerH.classList.toggle("hidden");
  hideAnswerT.classList.toggle("hidden");
});

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("card-set__bookmarklabel--booked");
});

homebtn.addEventListener("click", () => {
  homebtn.classList.add("nav__active");
  bookmarkbtn.classList.remove("nav__active");
});
bookmarkbtn.addEventListener("click", () => {
  bookmarkbtn.classList.add("nav__active");
  homebtn.classList.remove("nav__active");
});
