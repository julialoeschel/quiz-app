export function count() {
  const createAddQuestion = document.querySelector(
    "[data-js=text-addquestion]"
  );
  const amountLeftAddQuestion = document.querySelector(
    "[data-js=create-amount-add-question]"
  );
  const createAddAnswer = document.querySelector("[data-js=text-addanswer]");
  const amountLeftAddAnswer = document.querySelector(
    "[data-js=create-amount-add-answer]"
  );

  createAddQuestion.addEventListener("input", () => {
    const questionTextLength = createAddQuestion.value.length;
    const maxLengthAddQuestion = createAddQuestion.maxLength;
    amountLeftAddQuestion.innerText = maxLengthAddQuestion - questionTextLength;
    console.log(maxLengthAddQuestion);
  });

  createAddAnswer.addEventListener("input", () => {
    amountLeftAddAnswer.innerText =
      createAddAnswer.maxLength - createAddAnswer.value.length;
  });
}
