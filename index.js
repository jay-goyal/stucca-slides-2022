const imageCont = document.querySelector(".image");
const nameCont = document.querySelector(".name");
const depCont = document.querySelector(".department");
const lines = document.querySelectorAll(".line");
const everything = document.querySelectorAll(".slide *");
let stuccaActive = 0;

const stuccans = [
  {
    depName: "President, Student Union",
    coord: "Ashirwad Karande",
    imgLink: "./img/ashirwad.jpg",
  },
  {
    depName: "General Secretary, Student Union",
    coord: "Naman Jalan",
    imgLink: "./img/naman.jpg",
  },
  {
    depName: "Department of Controls",
    coord: "Pranav Dangi",
    imgLink: "./img/pranav.jpg",
  },
  {
    depName: "Department of Sponsorship and Marketing",
    coord: "Karishma K",
    imgLink: "./img/karishma.jpg",
  },
  {
    depName: "Department of Visual Media",
    coord: "Anshal Shukla",
    imgLink: "./img/anshal.jpg",
  },
  {
    depName: "Department of Reception and Accommodation",
    coord: "Angel Maria Baby",
    imgLink: "./img/angel.jpg",
  },
  {
    depName: "Department of Art, Design and Publicity",
    coord: "Rhythm Saxena",
    imgLink: "./img/rhythm.jpg",
  },
  {
    depName: "Department of Publications and Correspondence",
    coord: "Madhav Gupta",
    imgLink: "./img/madhav.jpg",
  },
];

setStuccans = (i) => {
  lines.forEach((line) => {
    line.classList.add("line-goaway");
  });
  setTimeout(() => {
    lines.forEach((line) => {
      line.classList.remove("line-goaway");
    });
    imageCont.textContent = "";
    nameCont.textContent = stuccans[i].coord;
    depCont.textContent = stuccans[i].depName;
    const image = document.createElement("img");
    image.src = stuccans[i].imgLink;
    imageCont.appendChild(image);
    everything.forEach((elem) => {
      elem.classList.add("elem-in");
    });
  }, 1400);
  setTimeout(() => {
    everything.forEach((elem) => {
      elem.classList.remove("elem-in");
    });
  }, 5000);
};

window.addEventListener("keyup", (evt) => {
  const key = parseInt(evt.key);
  if (key >= 1 && key <= stuccans.length && key !== stuccaActive) {
    stuccaActive = key;
    setStuccans(key - 1);
  }
});

setStuccans(0);
