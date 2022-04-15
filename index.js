
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => switchData(data))
  .then(initFadeIn)
  .then(autoSlide)
  .then(dropMenuInit)
  .catch((err) => console.log(`Error: ${err}`));

async function switchData(data) {
    let image = document.querySelector("#hero");
    let title = document.querySelector("h1");
    let description = document.querySelector("article.info > p");
    let index = 0;
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    window.innerWidth >= 425
      ? image.setAttribute("src", `${data.slides[0].image.desktop}`)
      : image.setAttribute("src", `${data.slides[0].image.mobile}`);
    title.innerText = `${data.slides[0].title}`;
    description.innerText = `${data.slides[0].description}`;

    prev.addEventListener('click', () => {
        index--;
         if (index < 0) {
           index = data.slides.length - 1;
         }
         window.innerWidth >= 425
           ? image.setAttribute("src", `${data.slides[index].image.desktop}`)
           : image.setAttribute("src", `${data.slides[index].image.mobile}`);
         title.innerText = `${data.slides[index].title}`;
         description.innerText = `${data.slides[index].description}`; 
    })

    next.addEventListener("click", () => {
      index++; 
       if (index > data.slides.length - 1) {
         index = 0;
       }
       window.innerWidth >= 425
         ? image.setAttribute("src", `${data.slides[index].image.desktop}`)
         : image.setAttribute("src", `${data.slides[index].image.mobile}`);
       title.innerText = `${data.slides[index].title}`;
       description.innerText = `${data.slides[index].description}`;
    });

}

async function dropMenuInit() {
  let menuButton = document.querySelector(".ham");
  menuButton.addEventListener("click", () => {
    let hamNavMenu = document.querySelector(".hamNavMenu");
    hamNavMenu.setAttribute("style", "visibility: visible");
    menuButton.setAttribute("style", "visibility: hidden");
  function closeMenuInit() {
      let closeBtn = document.querySelector(".close");
      closeBtn.addEventListener("click", () => {
       hamNavMenu.setAttribute("style", "visibility: hidden");
       menuButton.setAttribute("style", "visibility: visible");
   });
  }
  closeMenuInit()
  });
}

async function initFadeIn() {
  document.querySelectorAll("button.slide").forEach((btn) => {
    btn.addEventListener("click", () => {
      let fadingEls = document.querySelectorAll(".fade");
      fadingEls.forEach(fadingEl => {
          fadingEl.classList.toggle("fadeEm");
          fadingEl.classList.toggle("fadeEmAgain");
        

      });
    });
  })
}

async function autoSlide() {
    setInterval(()=>{
        document.querySelector('.next').click()
    }, 5000)
    
}
