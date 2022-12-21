const theme = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
const btnMode = document.querySelector('.header__btn-mode-block')!
if (theme)
    document.documentElement.setAttribute('data-theme', theme)

btnMode.addEventListener('click', ()=>{
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme
  currentTheme === "light" ? targetTheme = "dark" : targetTheme = "light"
 
  document.documentElement.setAttribute('data-theme', targetTheme)
})
 