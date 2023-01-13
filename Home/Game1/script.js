console.clear();
let clearSquares = false;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  if (clearSquares === false) {
    for (let i = 1; i <= 6; i++) {
      const node = document.getElementById("div2" + i);
      node.style.borderColor = "#51108e";
    }
    clearSquares = true;
  }
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  var dragged = document.getElementById(data);
  if (ev.target.tagName == "IMG") {
    var parent = ev.target.parentElement || ev.target.parentNode;
    dragged.parentElement.appendChild(ev.target);
    parent.appendChild(dragged);
  } else {
    //check if the div already has some img,
    //swap the 2 images
    if (ev.target.children.length > 0) {
      dragged.parentElement.appendChild(ev.target.children[0]);
    }
    ev.target.appendChild(dragged);
  }
}

function check() {
  const audioIntro = document.getElementById("audioIntroStory");
  console.log(audioWrongAnswer.playing);
  console.log(audioIntro);
  if (audioIntro.ended) {
    //let modal = document.getElementById("myModal");
    //modal.style.display = "block";
    var i = 1;
    var correct = true;
    var correctGlobal = true;
    var numImages = 6;

    while (i <= numImages) {
      //node = document.getElementById("drag1" + i);
      //correct = node.parentNode.id == "div2" + i;
      node = document.getElementById("div2" + i);
      if (node.children.length > 0) {
        correct = node.children[0].id == "drag1" + i;
        if (!correct) {
          node.style.borderColor = "red";
          correctGlobal = false;
        } else {
          node.style.borderColor = "#51108e";
        }
      } else {
        correctGlobal = false;
        node.style.borderColor = "#51108e";
      }

      i++;
    }

    clearSquares = false;

    if (correctGlobal) {
      //alert("Perfect");
      localStorage.setItem("joc1", 1);
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      let audioCorrect = document.getElementById("audioCorrectAnswer");
      audioCorrect.play();
    } else {
      //alert("Wrong");
      let audioWrong = document.getElementById("audioWrongAnswer");
      audioWrong.play();
    }
  }
}

function playIntro() {
  let audioIntro = document.getElementById("audioIntroStory");
  audioIntro.play();
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function goToHome() {
  const audioCorrectAnswer = document.getElementById("audioCorrectAnswer");

  console.log(audioCorrectAnswer);
  if (audioCorrectAnswer.ended) {
    let locationString = location.pathname;
    location.href = locationString.replace("/Game1/index.html", "/home.html");
  }
}

function hideSmurf() {
  console.log("STEEERG");
  let smurf = document.getElementById("smurf");
  smurf.style.visibility = "hidden";
}
