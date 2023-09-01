// var video = document.getElementById('myvideo');
// video.controls = false;

const numberToString = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten"
  };

const btn = document.querySelectorAll(".cta-button");

// var coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.previousElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


// btn.forEach((button, index) => {
//     button.addEventListener("click", () => {
//        const p = document.querySelector(`.${numberToString[index]}`);
//        console.log(p);
//        p.style.display = p.style.display === "block" ? "none" : "block" 
//     });
// });

const navList = document.querySelector('nav ul');
navList.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const selectedLi = event.target.parentElement;
        // do something with the selected li
        console.log(selectedLi);
    }
});
