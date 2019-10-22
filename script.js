// words for happy set of magnets
var happyWords = 'in the morning light Happiness is when How everything shines The sky is blue'.split(' ');

// words for sad set of magnets
var sadWords = 'hello ending dark moody rabbit leave change understand rain what is happening cloud storm inside me'.split(' ');

// words for funny set of magnets
var funnyWords = 'laughter weird giggle bouncy frog taking time'.split(' ');

var node= document.getElementById("container");

// function for happy words button
function moveHappyWords(){
    node.querySelectorAll('*').forEach(n => n.remove()); // remove all words before adding new ones
    for (var i =0; i<happyWords.length;i++) {
      var newMagnet = document.createElement('p');
      var newContent = document.createTextNode(happyWords[i]);
      var mainDiv = document.getElementById('container');
      mainDiv.appendChild(newMagnet);
      newMagnet.appendChild(newContent);
      background = document.getElementById('container');
      background.style.background = "#98E9F2";
} 
};

// function for sad words button
function moveSadWords(){
  node.querySelectorAll('*').forEach(n => n.remove()); // remove all words before adding new ones
  for (var i =0; i<sadWords.length;i++) {
      var newMagnet = document.createElement('p');
      var newContent = document.createTextNode(sadWords[i]);
      var mainDiv = document.getElementById('container');
      mainDiv.appendChild(newMagnet);
      newMagnet.appendChild(newContent);
      background = document.getElementById('container');
      background.style.background = "#ccc";
  } 
  };

  // function for sad words button
function moveFunnyWords(){
  node.querySelectorAll('*').forEach(n => n.remove()); // remove all words before adding new ones
  for (var i =0; i<funnyWords.length;i++) {
      var newMagnet = document.createElement('p');
      var newContent = document.createTextNode(funnyWords[i]);
      var mainDiv = document.getElementById('container');
      mainDiv.appendChild(newMagnet);
      newMagnet.appendChild(newContent);
      background = document.getElementById('container');
      background.style.background = "#e6f763";
  } 
  };

// make "magnets" draggable 
var container = document.querySelector("#container");

    var activeItem = null;

    var active = false;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {

      if (e.target !== e.currentTarget) {
        active = true;

        // this is the item we are interacting with
        activeItem = e.target;

        if (activeItem !== null) {
          if (!activeItem.xOffset) {
            activeItem.xOffset = 0;
          }

          if (!activeItem.yOffset) {
            activeItem.yOffset = 0;
          }

          if (e.type === "touchstart") {
            activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
            activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
          } else {
            console.log("doing something!");
            activeItem.initialX = e.clientX - activeItem.xOffset;
            activeItem.initialY = e.clientY - activeItem.yOffset;
          }
        }
      }
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
      }

      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {
        if (e.type === "touchmove") {
          e.preventDefault();

          activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
          activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }



