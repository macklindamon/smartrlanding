// Typewriter effect for hero headline
const typewriterText = [
  "Smarter. Faster. Easier.",
  "Mortgage technology for the modern age.",
  "Smartr365: The digital mortgage journey."
];
let tIndex = 0, charIndex = 0, isDeleting = false;
const typewriterElem = document.getElementById('typewriter');

function type(){
  let current = tIndex % typewriterText.length;
  let fullTxt = typewriterText[current];

  if(isDeleting){
    charIndex--;
    typewriterElem.textContent = fullTxt.substring(0, charIndex);
  } else {
    charIndex++;
    typewriterElem.textContent = fullTxt.substring(0, charIndex);
  }

  let speed = isDeleting ? 45 : 90;

  if(!isDeleting && charIndex === fullTxt.length){
    speed = 1300;
    isDeleting = true;
  } else if(isDeleting && charIndex === 0){
    isDeleting = false;
    tIndex++;
    speed = 600;
  }

  setTimeout(type, speed);
}

if(typewriterElem) type();

// Tabs functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    let tabId = tab.getAttribute('data-tab');
    tabContents.forEach(tc => {
      tc.classList.remove('active');
      if(tc.id === tabId) tc.classList.add('active');
    });
  });
});