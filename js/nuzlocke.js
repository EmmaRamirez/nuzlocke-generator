(function () {
  //"use strict";
  
  var Nuzlocke = {
    
    init: function () {
      
      
      
    },
    
    rules: [
      // 1
      {
        text: "You may not use any heal items outside of battle",
        diff: 4,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6]
      },
      // 2
      {
        text: "You may not run from any wild Pokémon",
        diff: 3,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6]
      },
      // 3
      {
        text: "You may only carry up to 4 Pokémon in your party",
        diff: 3,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6],
        conflictsWith: 4
      },
      // 4
      {
        text: "You may only carry up to 3 Pokemon in your party",
        diff: 5,
        gamesApplicable: "all",
        gensApplicable: [1, 2, 3, 4, 5, 6],
        conflictsWith: 3
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
      },
      {
        text: "If any of your Pokémon end up five or more levels apart after a gym match, you must release the highest-leveled one.",
        diff: 2,
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
      },
      {
        name: "Platinum Version",
        nameSelect: document.getElementsByName("platinumVersion"),
        diff: 4,
        gen: 4
      }
    ],
    
    
    inputControls: function () {
      
      var randomGame = document.getElementById("random-game");
      var generationFields = document.querySelectorAll(".gen-set"), i;
      var difficulty = document.getElementById("difficulty");
      var difficultyGuide = document.querySelector(".difficulty-guide");
      
      randomGame.addEventListener("change", function () {
        
        if (randomGame.checked) {
          
          for (i = 0; i < generationFields.length; i++) {
            generationFields[i].setAttribute('disabled', 'true');
          }

        } else {
          
          for (i = 0; i < generationFields.length; i++) {
            generationFields[i].setAttribute('disabled', 'false');
          }
          
        }
        
      });
      
      difficulty.addEventListener("input", function() {
        var difficultyVal = difficulty.value;
        var guideValues = document.querySelectorAll(".difficulty-guide span");
        
        function changeFontWeight (val) {
          for (i = 0; i < guideValues.length; i++) {
            guideValues[i].style.fontWeight = "normal";
            guideValues[val].style.fontWeight = "bold";
          }
        }
        
        if (difficultyVal == 1) {
          changeFontWeight(0);
        } else if (difficultyVal == 3) {
          changeFontWeight(1);
        } else if (difficultyVal == 5) {
          changeFontWeight(2);
        }
      });
      
      
      
    },
    
    
    createRuleset: function () {
      
      
      
      var generateButton = document.getElementById("generate");
      
      
      //var numOfRules = document.getElementById("rulesNumber").value;
      
      //var numOfRules = numOfRules.value;
      
      generateButton.addEventListener("click", function () {
        this.textContent = "Generated!";
        
        var difficulty = document.getElementById("difficulty").value;
        var numOfRules = document.getElementById("rulesNumber").value;
        var list = document.querySelector(".ruleset");
        list.innerHTML = "";
        
        //dummy.textContent = numOfRules;
        
//        if (numOfRules === 0) {
//          numOfRules = Math.floor(Math.random() * Nuzlocke.rules.length);
//        }
        
        
        
        
        function postDifficulty (difficulty, node) {
          var difficultyString;
          
          switch (difficulty) {
            case 1:
            difficultyString = "Least Hard";
              break;
            case 2:
              difficultyString = "Okay Hard";
              break;
            case 3:
              difficultyString = "Hard";
              break;
            case 4:
              difficultyString = "Pretty Hard";
              break;
            case 5:
              difficultyString = "Pure Masochism";
              break;
            default:
              difficultyString = "Hard";
          }
          
          node.innerHTML = "<div class='difficulty-level-post'>Difficulty: " + difficultyString + "</div>";
        }
        
        
      
        
        
        postDifficulty(difficulty, list);
        
        
        //console.log(gameVersion);
          
        
        
        function postGame (node) {
          var gameVersion = Nuzlocke.games[2].name;
          
          list.innerHTML += "<div class='version-chosen-post'>Version: " + gameVersion + "</div>";
        }
        
        postGame(list);
        
        for (var i = 0; i < numOfRules; i++) {
          //dummy.textContent += Nuzlocke.rules[i].text;
          
          var l = Nuzlocke.rules.length;
          var random = Math.floor(Math.random() * l);
          
          var li = document.createElement("li");
          
          li.textContent = Nuzlocke.rules[random].text;
          
          list.appendChild(li);
        }
        
        
        
        
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








