const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const body = document.getElementsByTagName("body")[0]
const container = document.getElementsByClassName("container")[0]

function fix() {
  toggleSnow()
  greeting.textContent = "🎅Merry Christmas🎄"
  greeting.style.fontFamily = "Mountains of Christmas"
  body.style.background = "var(--bright-red)"
  container.style.background = "var(--dark-green)"
  container.style.color = "var(--gold)"  
  btn.remove()
  party.confetti(container)
  party.confetti(container)  
}
btn.addEventListener("click", fix)
//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.







