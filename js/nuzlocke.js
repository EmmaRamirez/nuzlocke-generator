(function () {
  //"use strict";
  
  var Nuzlocke = {
    
    init: function () {
      
      
      
    },
    
    rules: [
      {
        text: "You may not use any heal items outside of battle",
        diff: 4,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6]
      },
      {
        text: "You may not run from any wild Pokémon",
        diff: 3,
        gamesApplicable: "all",
        gensApplicable: [1, 3]
      },
      {
        text: "You may only carry up to 4 Pokémon in your party",
        diff: 3,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6]
      },
      {
        text: "You may only carry up to 3 Pokemon in your party",
        diff: 5,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6]
      },
      {
        text: "All Pokémon in your party must overlap in type, i.e. Infernape / Lucario / Steelix / Claydol",
        diff: 5,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6]
      },
      {
        text: "No Pokémon may evolve past their second stage",
        diff: 4,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6]
      },
      {
        text: "Your Pokémon may not be levelled higher than the Pokémon of the gym leader you will challenge",
        diff: 3,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6]
      }
    ],
    
    games: [
      {
        name: "Blue Version",
        nameSelect: document.getElementsByName("blueVersion"),
        diff: 3,
        gen: 1
      },
      {
        name: "FireRed Version",
        nameSelect: document.getElementsByName("redVersion"),
        diff: 3,
        gen: 3
      }
    ],
    
    
    inputControls: function() {
      
      var randomGame = document.getElementById("random-game");
      var generationFields = document.querySelectorAll(".gen-set"), i;
      
      randomGame.addEventListener("change", function () {
        
        if ( randomGame.checked ) {
          
          for (i = 0; i < generationFields.length; i++) {
            generationFields[i].setAttribute('disabled', 'true');
          }

        } else {
          
          for (i = 0; i < generationFields.length; i++) {
            generationFields[i].setAttribute('disabled', 'false');
          }
          
        }
        
      });
      
    },
    
    
    createRuleset: function () {
      
      var dummy = document.getElementById("test-dummy");
      
      dummy.textContent = "ok";
      
      
      var generateButton = document.getElementById("generate");
      
      var numOfRules = document.getElementById("rulesNumber").value;
      
      //var numOfRules = numOfRules.value;
      
      generateButton.addEventListener("click", function () {
        
        
        
        dummy.textContent = numOfRules;
        
        
        
        
      });
      
    }
    
    
    
    
  };
  
  
  Nuzlocke.init();
  Nuzlocke.inputControls();
  Nuzlocke.createRuleset();
  
  
}());





//        var dummy = document.querySelector("#dummy"),
//        l = Nuzlocke.rules.length,
//        r = Math.floor(Math.random() * l);
//      
//        dummy.textContent = Nuzlocke.games[1].name;
//        dummy.textContent = Nuzlocke.rules[1].text;
//
//
//
//        dummy.textContent = Nuzlocke.rules[r].text + " " + r.toString();
//        
//        var dummy = document.getElementById("dummy");
//        var numOfRules = document.getElementsByName("numOfRules");
//        var difficulty = document.getElementById("difficulty").value;
//        var difficulty = difficulty.value;
//        var list = document.querySelector(".ruleset");
//
//        dummy.textContent = difficulty;

//      var randomGame = document.querySelector("#random-game");
//      var genFieldsets = document.querySelector("fieldset > fieldset");
//      
//      if (randomGame.checked == true) {
//        document.body.style = "#333";
//      }








