//get the elements
const body = document.getElementsByTagName("BODY")[0];
const darkModeButton = document.getElementById("dark-mode");
const topRow = document.querySelector(".top-row");
const signUpButton = document.querySelector("#sign-up");
const bottomRowSubscription = document.querySelector(
  ".bottom-row__subscription"
);
const bottomRowWhyUs = document.querySelector(".bottom-row__why-us");

const reducer = (state = { darkMode: false }, action) => {
  if (action.type === "changeTheme") {
    return { ...state, darkMode: !state.darkMode };
  }
  return state;
};

const store = Redux.createStore(reducer);

const changeTheme = () => {
  return {
    type: "changeTheme",
  };
};

// colors
// rgb(3, 0, 28)
//rgb(48, 30, 103)
// rgb(91, 143, 185)
// rgb(182, 234, 218)

//add event listener to dark mode button
function changeBg(element, color) {
  element.style.backgroundColor = color;
}

darkModeButton.addEventListener("click", () => {
  store.dispatch(changeTheme());
  if (store.getState().darkMode === true) {
    changeBg(body, "rgb(3, 0, 28)");
    changeBg(topRow, "rgb(48, 30, 103)");
    changeBg(bottomRowSubscription, "rgb(91, 143, 185)");
    changeBg(bottomRowWhyUs, "rgb(107, 169, 219)");
    changeBg(signUpButton, "hsl(125, 62%, 43%)");
  } else {
    changeBg(body, "hsl(204, 43%, 93%)");
    changeBg(topRow, "white");
    changeBg(bottomRowSubscription, "hsl(179, 62%, 43%)");
    changeBg(bottomRowWhyUs, "rgb(74, 190, 189)");
    changeBg(signUpButton, "hsl(71, 73%, 54%)");
  }
});
