const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
// const rightHeader = document.getElementById('right-header');
const para = document.getElementById("right-header-para")
// console.log(rightHeader.appendChild(para))

function PageTransitions() {
  //btn click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //sction active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // console.log(id)
      //resmove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      // console.log(element)
      element.classList.add("active");
    }
  });

  //toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    let themeResult = element.classList.toggle("light-mode");
    if(themeResult)
    {themeBtn.innerHTML ='<i class="far fa-moon"></i>'}
    else{ themeBtn.innerHTML =' <i class="fas fa-sun"></i>'}
  });
}

PageTransitions();



const careerArrya = ["I'm a Web Developer, I love to create beautiful and functional websites"]

let arrIndex = 0; 
let charIndex = 0; 
 
function upDateText(){
    charIndex++;
    para.innerText = `${careerArrya[arrIndex].slice(0,charIndex)}`
    if(charIndex === careerArrya[arrIndex].length){
        arrIndex++
        charIndex = 0
    }
    if(arrIndex === careerArrya.length){
        arrIndex = 0
    }
    setTimeout(upDateText, 100)
}
upDateText()
