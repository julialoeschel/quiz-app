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
const bookmarkBtn = document.querySelector("[data-js=bookmark-button]");
const createBtn = document.querySelector("[data-js=create-button]");
const profileBtn = document.querySelector("[data-js=profile-button]");

const homePage = document.querySelector("[data-js=main-home]");
const bookmarkPage = document.querySelector("[data-js=main-bookmark]");
const createPage = document.querySelector("[data-js=main-create]");
const profilePage = document.querySelector("[data-js=main-profile]");

homeBtn.addEventListener("click", () => {
  homeBtn.classList.add("nav__active");
  bookmarkBtn.classList.remove("nav__active");
  createBtn.classList.remove("nav__active");
  profileBtn.classList.remove("nav__active");

  homePage.classList.remove("hidden");
  bookmarkPage.classList.add("hidden");
  createPage.classList.add("hidden");
  profilePage.classList.add("hidden");
});

bookmarkBtn.addEventListener("click", () => {
  homeBtn.classList.remove("nav__active");
  bookmarkBtn.classList.add("nav__active");
  createBtn.classList.remove("nav__active");
  profileBtn.classList.remove("nav__active");

  homePage.classList.add("hidden");
  bookmarkPage.classList.remove("hidden");
  createPage.classList.add("hidden");
  profilePage.classList.add("hidden");
});

createBtn.addEventListener("click", () => {
  homeBtn.classList.remove("nav__active");
  bookmarkBtn.classList.remove("nav__active");
  createBtn.classList.add("nav__active");
  profileBtn.classList.remove("nav__active");

  homePage.classList.add("hidden");
  bookmarkPage.classList.add("hidden");
  createPage.classList.remove("hidden");
  profilePage.classList.add("hidden");
});

profileBtn.addEventListener("click", () => {
  homeBtn.classList.remove("nav__active");
  bookmarkBtn.classList.remove("nav__active");
  createBtn.classList.remove("nav__active");
  profileBtn.classList.add("nav__active");

  homePage.classList.add("hidden");
  bookmarkPage.classList.add("hidden");
  createPage.classList.add("hidden");
  profilePage.classList.remove("hidden");
});

const createAddQuestion = document.querySelector("[data-js=text-addquestion]");
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
