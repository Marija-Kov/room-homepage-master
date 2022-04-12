# Frontend Mentor - Room homepage solution

#### !!!!: 
The slide button looks way more misplaced in the FEM screenshot than in live website.. Doesn't look good at all. I wonder if there is a way to see what a screenshot would look like before submitting the solution to FME? And does it indicate some underlying issues with the layout? 

### Built using:

- semantic HTML
- mobile-first
- Sass
- vanilla JS
- JSON


### Process

#### Responsiveness

I was determined to take the responsiveness of the layout as far as I could (up to 4k and considering different heights of desktop monitors).

#### Slide button position issue

Regarding the slide button position in the desktop version, I made a decision to have it attached to the side of the hero image as a constant as the viewport width is being changed. I couldn't find a way to maintain the position of the button relative to the footer image on the right - as shown in the expected output for 1440px width - that I believed would look good. 

#### Additional design decisions

 - Simple fade-in effects.

 - Added grey backgrounds to the sides of the footer images instead of just scaling them up with the increasing viewport width.

 - Deliberately dropped the slide button into the article area at a point between 950px - 1024px viewport width as I thought it balanced well with the dark footer image diagonally from it plus there was enough space away from the text.

 - This may not be obvious, but I decided I would only use desktop versions of hero images as I didn't see the necessity for using mobile versions in this particular case.

#### **Previous fade-in effect issues**

Before coming to the final solution, I tried making the hero images switch by fetching them using the JSON file that I made (I left all the code commented out in index.js) - which worked in itself, but I got this strange side-effect after implementing the fade-in animation where my logo and navbar would disappear in the beginning and reappear at the end of each animation interval despite not adding any animation specifically to those elements. This was the case in all viewport sizes. Interestingly, this wasn't the case with the hamburger menu icon.

After I established that this issue was somehow tied to the method I used for switching hero images, I made the hero images switch by creating a separate class for each and making them change with javascript.

###### ~ Code when the issue with logo and navbar occurred:

 - HTML:

< picture id="hero" > </ picture > 

 - no specific CSS

 - Javascript:

image.style = `background-image: url(${data.slides[0].image.desktop})` // on first load
image.style = `background-image: url(${data.slides[index].image.desktop})` // switching with index

###### ~ Code that resolved the said issue:

- HTML:

 < picture id="hero" class="img0" > </ picture >

- CSS:

.img0 {
    background-image: url('images/desktop-image-hero-1.jpg');
    transition: 0.3s ease-in-out;
}

.img1 {
    background-image: url('images/desktop-image-hero-2.jpg');
    transition: 0.3s ease-in-out;
}

.img2 {
    background-image: url('images/desktop-image-hero-3.jpg');
    transition: 0.3s ease-in-out;
}

- Javascript:

image.setAttribute("class", `img${index}`); // switching with index

###### * The marked animation section of index.scss (line 238-269) wasn't changed in any case.
   - 
   - 
#### Thanks for reading !
   - 
   - 



