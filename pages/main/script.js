let dog = document.querySelector(".pets_jennifer")
    dog.addEventListener("click",() => {
      document.querySelector(".wrapper").style.display = "block"
      // document.querySelector(".wrapper").style.transition = "all 2s"

    })
    

let btn = document.querySelector(".btn-close")
btn.addEventListener("click", () => {
    document.querySelector(".wrapper").style.display = "none"
   
})