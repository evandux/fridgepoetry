/* Web 103 - Basic Web App and the Dom.
App Name: Fridge Poetry
Created by: Evan Dux
Description: Inspired by the collections of fridge poetry magnets found on many fridges, this app gives users a set of words to drag around and make poems with. The set of words changes based on the mood that the user selects. I wanted to try and create something that is a little different from most of the websites that we visit from day to day. Fridge Poetry is meant to be a 10-20 minute activity where people can express their creative side. In the future I would like to add more wordsets and fix a few bugs.
======================================================================= */

// object constructor for poems
function Poem (mood,words) { 
    this.mood = mood;
    this.words = words;
};

// three different word "moods"
var happy = new Poem (happy, 'in the morning How light happiness is when shines everything The sky is blue');

var sad = new Poem (sad,'hello ending happening me dark moody rabbit storm leave change understand rain what is ! cloud inside');

var funny = new Poem (funny, 'laughter surprising has bouncy hairless startled is toaster weird giggle a frog the tree slimy sloshy taking time');

// split strings from above objects into individual words
var happyWords = happy.words.split(' ');
var sadWords = sad.words.split(' ');
var funnyWords = funny.words.split(' ');


var node= document.getElementById("container");

// function to change wordset to happy words and style accordingly
function moveHappyWords(){
    node.querySelectorAll('*').forEach(n => n.remove()); // remove all words in container before adding new ones
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

// function to change wordset to sad words and style accordingly
function moveSadWords(){
  node.querySelectorAll('*').forEach(n => n.remove()); // remove all words in container before adding new ones
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

  // function to change wordset to funny words and style accordingly
function moveFunnyWords(){
  node.querySelectorAll('*').forEach(n => n.remove()); // remove all words in container before adding new ones
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

/* make "magnets" draggable 
 much of this script was sourced from https://www.kirupa.com/html5/drag.htm */
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

    



