
fetch('data.json')
     .then(response => {
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       } else {
         return response.json();
       }
     })
     .then(data => switchData(data))
     .then(initFadeIn)
     .then(autoSlide)
     .catch(err => console.log(`Error: ${err}`))

async function switchData(data) {
    let image = document.querySelector(".hero");
    let title = document.querySelector("h1");
    let description = document.querySelector("article.info > p");
    let index = 0;
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    image.style = `background-image: url(${data.slides[0].image.desktop})`;
    title.innerText = `${data.slides[0].title}`;
    description.innerText = `${data.slides[0].description}`;

    prev.addEventListener('click', () => {
        index--;
         if (index < 0) {
           index = data.slides.length - 1;
         }
         image.style = `background-image: url(${data.slides[index].image.desktop})`;
         title.innerText = `${data.slides[index].title}`;
         description.innerText = `${data.slides[index].description}`; 
    })

    next.addEventListener("click", () => {
      index++; 
       if (index > data.slides.length - 1) {
         index = 0;
       }
       image.style = `background-image: url(${data.slides[index].image.desktop})`;
       title.innerText = `${data.slides[index].title}`;
       description.innerText = `${data.slides[index].description}`;
    });

}

async function initFadeIn() {
  document.querySelectorAll("button.slide").forEach((btn) => {
    btn.addEventListener("click", () => {
      let fadingEls = document.querySelectorAll(".fade");
      fadingEls.forEach(fadingEl => {
          if (fadingEl.classList.contains("fadeEm")) {
            fadingEl.classList.remove("fadeEm");
          } else if (!fadingEl.classList.contains("fadeEm")) {
            fadingEl.classList.add("fadeEm");
          } 

      });
    });
  });

}

async function autoSlide() {
    setInterval(()=>{
        document.querySelector('.next').click()
    }, 5000)
    
}
