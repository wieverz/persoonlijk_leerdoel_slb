/*oude test via tutorial, werkt niet.
var prevScrollpos = document.scrollY;
document.onscroll = function() {
  var currentScrollPos = document.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll").style.opacity = "0%";
  } else {
    document.getElementById("scroll").style.opacity = "100%";
  }
  prevScrollpos = currentScrollPos;
}

const observer = new IntersectionObserver(entries => {
  // We will fill in the callback later...
});

// Tell the observer which elements to track
observer.observe(document.querySelector('#scroll'));
*/

// img laten vervagen op het moment dat de gebruiker scrollt:
let scrollImg = document.getElementById("scroll");
let scrollText = document.getElementById("scroll-text");
const scrollPosition = document.scrollY;

function imgFade () {
  hideText()
  if (scrollPosition >= 500) {
    scrollImg.style.opacity = 1 - scrollPosition / 350;
  } else if (scrollPosition <= 300){
    scrollImg.style.opacity = 1
  } else {
    scrollImg.style.opacity = 0;
    
  }
}

function hideText(){
  scrollText.style.opacity = 0;
}

document.addEventListener('scroll', imgFade)
console.log(scrollY)

