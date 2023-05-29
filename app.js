/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const screen = document.querySelector(".screen"),
      name = document.querySelector(".name");

screen.onmouseenter = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return name.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= name.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

const elements = document.querySelectorAll("#typing-effect");
const speed = 50;

function type(element, index) {
  const text = element.getAttribute("data-text");
  let charIndex = 0;
  
  function typeChar() {
    if (charIndex < text.length) {
      element.innerHTML += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, speed);
    } else {
      index++;
      if (index < elements.length) {
        setTimeout(() => type(elements[index], index), 300);
      }
    }
  }
  
  setTimeout(typeChar, 300);
}

type(elements[0], 0);



document.querySelector(".projects").onmousemove = e => {
  for(const project of document.getElementsByClassName("project")) {
    const rect = project.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    project.style.setProperty("--mouse-x", `${x}px`);
    project.style.setProperty("--mouse-y", `${y}px`);
  };
}