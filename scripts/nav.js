export function nav() {
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
}
