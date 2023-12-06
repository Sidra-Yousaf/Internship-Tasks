window.onload = function () {
  const searchBtn = document.getElementById("search-bar");
  const themeBtn = document.getElementById("toggle-btn");
  const noResultMsg = document.getElementById("no-result");
  setUpThemes(themeBtn);
  getUserData("octocat").then(function (userData) {
    renderData(userData);
  });
  searchBtn.addEventListener("submit", function searchUser(e) {
    e.preventDefault();
    noResultMsg.classList.add("hidden");
    searchValue = e.target.querySelector("input").value;
    getUserData(searchValue)
      .then(function (userData) {
        if (userData.message == "Not Found") {
          noResultMsg.classList.remove("hidden");
        }
        renderData(userData);
      })
      .catch(function (error) {
        console.log("error:", error);
      });
  });
  function setUpThemes(themeBtn) {
    if (!themeBtn) {
      console.error("Unable to find theme button element.");
      return;
    }
    function toggleThemeBtn(theme) {
      // console.log("nextheme=" + theme);
      document
        .getElementById("toggle-light")
        .classList.toggle("hidden", theme !== "light");
      document
        .getElementById("toggle-dark")
        .classList.toggle("hidden", theme !== "dark");
      document
        .getElementById("toggle-colorful")
        .classList.toggle("hidden", theme !== "custom");
    }
    function toggleTheme(theme) {
      document.documentElement.classList.toggle("light", theme == "light");
      document.documentElement.classList.toggle("dark", theme == "dark");
      document.documentElement.classList.toggle(
        "custom",
        theme == "custom"
      );
    }
    const themes = ["light", "dark", "custom"];
    let currentThemeIndex = 0;
    themeBtn.addEventListener("click", function () {
      console.log(themeBtn);
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      console.log(currentThemeIndex,'/////////')
      let nextTheme = themes[currentThemeIndex];
      toggleTheme(nextTheme);
      //conditional structures for changing text value
      if (nextTheme == "dark") {
        nextTheme = "custom";
        console.log("dark");
      } else if (nextTheme == "custom") {
        nextTheme = "dark";
        console.log("custom");
      } else if (nextTheme == "light") {
        nextTheme = "dark";
        console.log("light");
      }
      toggleThemeBtn(nextTheme);
      console.log(nextTheme);
    });
  }
  async function getUserData(user) {
    const URL = "https://api.github.com/users/" + user;
    const response = await fetch(URL);
    console.log(response)
    return await response.json();
  }
  function renderData(userObj) {
    Object.keys(userObj).forEach(function loopKeys(key) {
      let element = document.getElementById(key);
      if (element) {
        if (userObj[key]) {
          element.parentElement.classList.remove("opaque");
          element.classList.remove("opaque");
          switch (key) {
            case "avatar_url":
              element.setAttribute("src", userObj[key]);
              break;
            case "created_at":
              let date = new Date(userObj[key]);
              let options = { day: "numeric", month: "long", year: "numeric" };
              let parsedDate = new Intl.DateTimeFormat("en-GB", options).format(
                date
              );
              element.innerHTML = parsedDate;
              break;
            case "login":
              element.innerHTML = "@" + userObj[key];
              break;
            case "twitter_username":
              let twitterUrl = "https://www.twitter.com/" + userObj[key];
              element.innerHTML = "@" + userObj[key];
              element.setAttribute("href", twitterUrl);
              break;
            case "blog":
              element.setAttribute("href", userObj[key]);
              break;
            default:
              element.innerHTML = userObj[key];
          }
        } else {
          element.innerHTML = "Not Available";
          if (element.parentElement.nodeName == "LI") {
            element.parentElement.classList.add("opaque");
          } else {
            element.classList.add("opaque");
          }
        }
      }
    });
  }
};