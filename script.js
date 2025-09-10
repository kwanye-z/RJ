const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const history = document.getElementById("history");
let current = "";
let past = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;
    if (btn.classList.contains("clear")) {
      current = "";
      past = "";
      result.textContent = "0";
      history.textContent = "";
    } else if (btn.classList.contains("equals")) {
      try {
        past = current + " =";
        current = eval(current).toString();
        result.textContent = current;
        history.textContent = past;
      } catch {
        result.textContent = "Error";
      }
    } else {
      current += val;
      result.textContent = current;
    }
  });
});

function toggleDark() {
  document.documentElement.classList.toggle("dark");
}
