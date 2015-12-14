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
        description: "NA",
        difficulty: 4,
      },
      {
        description: "LA",
        difficulty: 4,
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
      console.log(num);
      for (var i = 0; i < Nuzlocke.settings.numOfRules; i++) {
        var choice = choose(Nuzlocke.rules);

        console.log(choose(Nuzlocke.rules).description);
      }
    },


  };

  Nuzlocke.init();
})();
