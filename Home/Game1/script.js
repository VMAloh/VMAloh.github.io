console.clear();
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
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
  var i = 1;
  var correct = true;
  var correctGlobal = true;
  var numImages = 6;
  let wrongDivs = [];

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

  if (correctGlobal) {
    alert("Perfect");
  } else alert("Wrong");
}
