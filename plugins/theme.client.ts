export default defineNuxtPlugin(() => {
 const savedTheme = localStorage.getItem("dansom-theme")
 const theme =
  savedTheme === "light" || savedTheme === "dark"
   ? savedTheme
   : window.matchMedia("(prefers-color-scheme: dark)").matches
     ? "dark"
     : "light"

 document.documentElement.dataset.theme = theme
})
