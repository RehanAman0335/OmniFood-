
// console.log("Hello World")

// let myName = "Rehan Aman";
// const h1 = document.getElementsByClassName('heading-primary');
// console.log(myName);
// console.log(h1);

//SET CURRENT YEAR//
// let yearEl = document.getElementsByClassName(".year");
// let currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear; 

//MAKE MOBILE NAVIGATION WORK//



document.addEventListener("DOMContentLoaded", function() {
  let btnNavEl = document.querySelector(".btn-mobile-nav");
  let headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
  });
});

// SMOOTH SCROLLING ANIMATION//



// document.addEventListener("DOMContentLoaded", function() {
//   let allLinks = document.querySelectorAll("a:link");
//   console.log(allLinks);
// });




  let allLinks = document.querySelectorAll("a:Link");
  
  allLinks.forEach(function(Link) {
    Link.addEventListener("click", function (e){
      e.preventDefault();
      let href = Link.getAttribute("href");
      console.log(href);
    });
  });

  
  

  document.addEventListener("DOMContentLoaded", function() {
    let allLinks = document.querySelectorAll("a:link");

    allLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let href = link.getAttribute("href");
            console.log(href);
        });
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//   let allLinks = document.querySelectorAll("a:link");

//   allLinks.forEach(function(link) {
//       link.addEventListener("click", function(e) {
//           e.preventDefault();
//           let href = link.getAttribute("href");

//           // Check if the href is "#"
//           if (href === "#") {
//               // Scroll to the top with smooth behavior
//               window.scrollTo({
//                   top: 0,
//                   behavior: "smooth",
//               });

//               if (href !== "#" && href.startsWith("#")){
//                 let sectionEl =document.querySelector(href);
//                 sectionEl.scrollIntoView({behavior: "smooth"});
//               }
//           }
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  let allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          let href = link.getAttribute("href");

          // Check if the href is not equal to "#" and starts with "#"
          if (href !== "#" && href.startsWith("#")) {
              let sectionEl = document.querySelector(href);
              
              if (sectionEl) {
                  // Scroll to the section with smooth behavior
                  sectionEl.scrollIntoView({ behavior: "smooth" });
              }
              //CLOSE MOBILE NAVIGATION//
              if (Link.classList.constains("main-nav-link"))
              headerEl.classList.toggle("nav-open");
                       
          }
      });
  });
});

//STICKY NAVIGATION//

document.addEventListener("DOMContentLoaded", function() {
  // Wait for the DOM to be fully loaded before executing the script

  // Get the section with the class "section-hero"
  let sectionHeroEl = document.querySelector(".section-hero");

  // Check if the element exists before observing
  if (sectionHeroEl) {
      // Create an IntersectionObserver
      let obs = new IntersectionObserver(function(entries) {
          // Callback function when intersection changes
          let ent = entries[0];
          console.log(ent);

          if (ent.isIntersecting === false){
            document.body.classList.add("sticky");
          }
          if (ent.isIntersecting === true){
            document.body.classList.remove("sticky");
          }
      }, 
      {
          // Options for the IntersectionObserver
          root: null, // In the viewport
          threshold: 0,
          rootMargin: "-80px",
      });

      // Start observing the section
      obs.observe(sectionHeroEl);
  }
});
