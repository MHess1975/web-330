/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Mitchell Hess
  Date: October 26, 2026
  Filename:script.js
*/

"use strict";


function createCharacter(name, gender, characterClass) {
  // Keep character information private inside this function.
  // These variables are protected by the closure.
  const characterName = name;
  const characterGender = gender;
  const heroClass = characterClass;

  // Return an object that provides access to the private variables.
  return {
    getName: function() {
      return characterName;
    },

    getGender: function() {
      return characterGender;
    },

    getClass: function() {
      return heroClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

// Get the values entered or selected in the form.
  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  // Create a new character using the closure function.
  const hero = createCharacter(name, gender, characterClass);

  // Display the character information on the page.
  const output = document.getElementById("characterOutput");
  output.innerHTML = `
    <p><strong>Name:</strong> ${hero.getName()}</p>

<p><strong>Gender:</strong> ${hero.getGender()}</p>
<p><strong>Class:</strong> ${hero.getClass()}</p>

  `;
});