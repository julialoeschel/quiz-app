const cardSet = document.querySelectorAll("[data-js=card-set]");

export function toggleCard() {
  cardSet.forEach((card) => {
    const bookmark = card.querySelector("[data-js=bookmark]");
    const answerBtn = card.querySelector("[data-js=btnAnswer]");
    const showAnswer = card.querySelector("[data-js=showAnswer]");
    const hideAnswer = card.querySelector("[data-js=hideAnswer]");
    const answerHeading = card.querySelector("[data-js=answerHeading]");
    const answerText = card.querySelector("[data-js=answer-text]");

    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("card-set__bookmarklabel--booked");
    });

    answerBtn.addEventListener("click", () => {
      showAnswer.classList.toggle("hidden");
      hideAnswer.classList.toggle("hidden");
      answerHeading.classList.toggle("hidden");
      answerText.classList.toggle("hidden");
    });
  });
}
