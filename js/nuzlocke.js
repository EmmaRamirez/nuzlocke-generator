(function(){
  var Nuzlocke = {
    settings: {
      numOfRules: 2,
      difficulty: 3,
      generateButton: document.getElementById('generate'),
      difficultyButtons: document.querySelectorAll('[data-difficulty]'),
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
        description: "OL",
        difficulty: 3,
      },
      {
        description: "MA",
        difficulty: 2,
      }
    ],
    init: function() {

      this.bindGenerateButton(Nuzlocke.settings.generateButton);
      this.bindDifficultyButton(Nuzlocke.settings.difficultyButtons);
      this.setInputMax();

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
        if (divChild.hasAttribute('data-selected')) {
          divChild.style.color = '#0F0';
        }
        //divChild.style.color = '#0F0';
      });
    },

    setInputMax: function() {
      document.getElementById('numOfRules').setAttribute('max', Nuzlocke.rules.length);
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
      console.log(tmpRules);
      for (var i = 0; i < Nuzlocke.settings.numOfRules; i++) {

        var choice = choose(tmpRules);
        console.log(tmpRules.indexOf(choice));
        tmpRules.splice(tmpRules.indexOf(choice) - 1, 1);
        console.log(choice.description);
      }
      console.log(Nuzlocke.rules);
      console.log(tmpRules);
    },


  };

  Nuzlocke.init();
})();
