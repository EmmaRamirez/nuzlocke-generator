(function(){
  var Nuzlocke = {
    settings: {
      numOfRules: 2,
      difficulty: 3,
      numOfRulesInput: document.getElementById('numOfRules'),
      difficultyButtons: document.querySelectorAll('[data-difficulty]'),
      generateButton: document.getElementById('generate'),

    },
    rules: [
      {
        description: "Use only Pok\xE9balls.",
        difficulty: 4,
      },
      {
        description: "You may not purchase any Pok\xE9balls from the Pok\xE9mart.",
        difficulty: 5,
      },
      {
        description: "You may not use items outside of battle.",
        difficulty: 4
      },
      {
        description: "LA",
        difficulty: 4,
      },
      {
        description: "You may only carry up to 4 Pok\xE9mon in your party",
        difficulty: 3,
      },
      {
        description: "You may only carry up to 3 Pok\xE9mon in your party",
        difficulty: 5,
      },
      {
        description: "OL",
        difficulty: 3,
      },
      {
        description: "MA",
        difficulty: 2,
      }
    ],
    init: function() {

      this.bindDifficultyButton(Nuzlocke.settings.difficultyButtons);
      this.bindNumOfRulesInput(Nuzlocke.settings.numOfRulesInput);
      this.bindGenerateButton(Nuzlocke.settings.generateButton);
      this.setInputMax();
      this.setInputValue();
    },

    bindGenerateButton: function(el) {
      el.addEventListener('click', function(){
        console.log('a');
        this.innerHTML = 'Reroll <img src="img/voltorb.gif" />';
        Nuzlocke.createRuleset(Nuzlocke.settings.numOfRules, Nuzlocke.settings.difficulty);
      });
    },

    bindDifficultyButton: function(els) {
      var forEach = Array.prototype.forEach;
      var firstEl = els[0];

      forEach.call(els, function(divChild) {
        if (divChild.getAttribute('data-selected') == "true") {
          //divChild.style.color = '#0F0';
        }
        //divChild.style.color = '#0F0';
        divChild.addEventListener('click', function(){
          var diff = this.getAttribute('data-difficulty');
          Nuzlocke.settings.difficulty = diff;
          for (var i = 0; i < 5; i++) {
            if (els[i].getAttribute('data-selected') == "true") {
              els[i].setAttribute('data-selected', "false");
            }
          }
          console.log(Nuzlocke.settings.difficulty);
          this.setAttribute('data-selected', "true");
        });
      });
    },

    bindNumOfRulesInput: function(el) {
      el.addEventListener('change', function() {
        Nuzlocke.settings.numOfRules = this.value;
        console.log(Nuzlocke.settings.numOfRules);
      });
    },

    setInputMax: function() {
      Nuzlocke.settings.numOfRulesInput.setAttribute('max', Nuzlocke.rules.length);
    },

    setInputValue: function() {
      Nuzlocke.settings.numOfRulesInput.value = Nuzlocke.settings.numOfRules;
    },

    createRuleset: function(num, diff) {
      function choose(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }
      function clone(obj) {
        if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
            return obj;

        var temp = obj.constructor(); // changed

        for(var key in obj) {
            if(Object.prototype.hasOwnProperty.call(obj, key)) {
                obj['isActiveClone'] = null;
                temp[key] = clone(obj[key]);
                delete obj['isActiveClone'];
            }
        }

        return temp;
      }
      //console.log(num);
      var tmpRules = clone(Nuzlocke.rules);

      console.log(Nuzlocke.settings.numOfRules);
      console.log(tmpRules);

      for (var i = 0; i < Nuzlocke.settings.numOfRules; i++) {

        var choice = choose(tmpRules);
        //console.log(tmpRules.indexOf(choice));
        console.log(choice.description);
        tmpRules.splice(tmpRules.indexOf(choice) - 1, 1);
        console.log(tmpRules);

      }
      //console.log(Nuzlocke.rules);

    },


  };

  Nuzlocke.init();
})();
