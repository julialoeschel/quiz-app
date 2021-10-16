const cardSet = document.querySelectorAll("[data-js=card-set]");

cardSet.forEach((card) => {
  const bookmark = card.querySelector("[data-js=bookmark]");
  const AnswerBtn = card.querySelector("[data-js=btn-answer]");
  const showAnswer = card.querySelector("[data-js=showAnswer]");
  const hideAnswer = card.querySelector("[data-js=hideAnswer]");
  const answerH = card.querySelector("[data-js=Answer-heading]");
  const answerT = card.querySelector("[data-js=answer-text]");

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card-set__bookmarklabel--booked");
  });

  AnswerBtn.addEventListener("click", () => {
    showAnswer.classList.toggle("hidden");
    hideAnswer.classList.toggle("hidden");
    answerH.classList.toggle("hidden");
    answerT.classList.toggle("hidden");
  });
});

const homeBtn = document.querySelector("[data-js=home-button]");
