///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

///////////////////////////////////////////////
// Mobile Navigation                        
//////////////////////////////////////////////


const btnMobile = document.querySelector(".btn-mobile")
const navSection = document.querySelector(".nav-section")
const navLinks =  document.querySelectorAll(".nav-link")

btnMobile.addEventListener("click", () => {
    navSection.classList.toggle("nav-open")
})

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navSection.classList.remove("nav-open")
  })
})

///////////////////////////////////////////////
// Smooth Scrolling                       
//////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link")

allLinks.forEach(link => {
   link.addEventListener("click",e => {
       e.preventDefault()

       const link = e.target.getAttribute("href")
       
       
       if (link === "#") {
           scrollTo({
             top:0,
             left:0,
             behavior:"smooth"
           })
       }

       if (link !== "#" && link.startsWith("#")) {
            document.querySelector(link).scrollIntoView({
               behavior:"smooth"
            })
       }
   })
})

///////////////////////////////////////////////
// Implementing Sticky Nav Bar                      
//////////////////////////////////////////////

const heroSection = document.querySelector(".section-hero")



const obs = new IntersectionObserver(function(entries){
    const hero = entries[0]
    if (!hero.isIntersecting) {
        console.log(true)
        document.body.classList.add("sticky")  
    }

    if (hero.isIntersecting) {
        document.body.classList.remove("sticky") 
    }
},{
   root:null,
   threshold:0,
   rootMargin:"-64px"
})

obs.observe(heroSection)