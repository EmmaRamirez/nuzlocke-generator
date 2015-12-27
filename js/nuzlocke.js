(function(){
  var Nuzlocke = {
    settings: {
      numOfRules: 3,
      difficulty: 3,
      numOfRulesInput: document.getElementById('numOfRules'),
      difficultyButtons: document.querySelectorAll('[data-difficulty]'),
      generateButton: document.getElementById('generate'),
      c: document.getElementById('c'),
      download: document.getElementById('download')
    },
    rules: [
      {
        description: "Use only Pok\xE9balls to catch Pok\xE9mon.",
        difficulty: 4,
      },
      {
        description: "You must use Pok\xE9mon from only three different types.",
        difficulty: 2,
      },
      {
        description: "You must use Pok\xE9mon from only three different types.",
        difficulty: 4,
      },
      {
        description: "Box your Pok\xE9mon if they fant. If you have a full box, you lose.",
        difficulty: 5,
      },
      {
        description: "You may not purchase any Pok\xE9balls from the Pok\xE9mart.",
        difficulty: 4,
      },
      {
        description: "You may not use items outside of battle.",
        difficulty: 4
      },
      {
        description: "You can only use items during battle.",
        difficulty: 4,
      },
      {
        description: "Your Pok\xE9mon may not overlap in type.",
        difficulty: 4,
      },
      {
        description: "You may only carry up to 4 Pok\xE9mon in your party",
        difficulty: 3,
      },
      {
        description: "You can only use one Pok\xE9mon Center per town visited.",
        difficulty: 6
      },
      {
        description: "You may only carry up to 3 Pok\xE9mon in your party",
        difficulty: 5,
      },
      {
        description: "Your Pok\xE9mon must overlap in type.",
        difficulty: 3,
      },
      {
        description: "Your Pok\xE9mon must stay three levels lower than the next gym leader.",
        difficulty: 2,
      },
      {
        description: "Play in set mode.",
        difficulty: 3
      },
      {
        description: "Play in shift mode.",
        difficulty: 1
      },
      {
        description: "You must have one Pok\xE9mon at least 5 levels above the others.",
        difficulty: 1
      },
      {
        description: "Your nicknames must have a theme (e.g. Scooter Brands, Philosopers).",
        difficulty: 1
      },
      {
        description: "You may use one revive per game.",
        difficulty: 1
      },
      {
        description: "You may only catch one Pok\xe9mon per two routes.",
        difficulty: 4
      },
      {
        description: "You must catch duplicates.",
        difficulty: 3
      },

    ],
    init: function() {

      this.bindDifficultyButton(Nuzlocke.settings.difficultyButtons);
      this.bindNumOfRulesInput(Nuzlocke.settings.numOfRulesInput);
      this.bindGenerateButton(Nuzlocke.settings.generateButton);
      this.bindDownloadButton(Nuzlocke.settings.download);
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
        divChild.addEventListener('click', function(){
          var diff = this.getAttribute('data-difficulty');
          Nuzlocke.settings.difficulty = diff;
          for (var i = 0; i < 5; i++) {
            if (els[i].getAttribute('data-selected') == "true") {
              els[i].setAttribute('data-selected', "false");
            }
          }
          this.setAttribute('data-selected', "true");
        });
      });
    },

    bindNumOfRulesInput: function(el) {
      el.addEventListener('change', function() {
        if (this.value > 0) {
          Nuzlocke.settings.numOfRules = this.value;
        } else {
          Nuzlocke.settings.numOfRules = Math.floor(Math.random() * Nuzlocke.rules.length);
        }
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

      var tmpRules = clone(Nuzlocke.rules);
      var ruleset = [];
      ruleset.push("If a Pok\xE9mon faints you must release or permabox it.", "You may only catch the first Pokemon you see in a route.")

      function matchesDifficulty(obj) {
        if (obj.difficulty == diff || obj.difficulty == diff - 1 || obj.difficulty == diff + 1) {
          return true;
        } else {
          return false;
        }
      }

      tmpRules = tmpRules.filter(matchesDifficulty);

      console.log("Filtered array length: " + tmpRules.length);
      console.log("Filtered array: ", tmpRules);

      if (tmpRules.length < num) {
        var difference = num - tmpRules.length;
        ruleset = ["Select a lower number of rules! (" + difference + " rules over)"];
      } else {
        for (var i = 0; i < Nuzlocke.settings.numOfRules; i++) {
          var choice = choose(tmpRules);
          ruleset.push(choice.description);
          var index = tmpRules.indexOf(choice);
          tmpRules.splice(index, 1);
        }
      }

      Nuzlocke.canvasCreate(Nuzlocke.settings.c, ruleset);
    },

    canvasCreate: function(el, rules) {
      var w = el.width, h = el.width;
      el.height = 100 + (rules.length * 64);
      var ctx = el.getContext('2d');
      Nuzlocke.settings.download.style.display = 'block';

      ctx.strokeStyle = 'transparent';

      ctx.fillStyle = '#ccc';
      ctx.fillRect(0, 0, w, 100);
      ctx.stroke();

      for (var i = 0; i < rules.length; i++) {
        if (i == 0 || i % 2 == 0) {
          ctx.fillStyle = '#eee';
        } else {
          ctx.fillStyle = '#ddd';
        }

        ctx.fillRect(0, (100 + (64 * i)), w, 64);
        //ctx.fill();
        ctx.stroke();
      }

      ctx.font = '40pt Open Sans';
      ctx.fillStyle = 'black';
      ctx.fillText('Nuzlocke Challenge', 16, 66);

      ctx.font = '16pt Open Sans';
      ctx.fillStyle = '#333';
      ctx.fillText('{ difficulty: ' + Nuzlocke.settings.difficulty + ', rules: ' + Nuzlocke.settings.numOfRules + ' }', 520, 66);

      for (var i = 0; i < rules.length; i++) {
        ctx.font = '16pt Open Sans';
        ctx.fillStyle = '#222';
        ctx.fillText( (i + 1) + '. ' + rules[i], 16, 140 + (i * 64));
      }

    },

    downloadCanvas: function(link, canvasId, filename) {
      link.href = document.getElementById(canvasId).toDataURL();
      link.download = filename;
    },

    bindDownloadButton: function(el) {
      el.addEventListener('click', function() {
        console.log("Logged event");
        Nuzlocke.downloadCanvas(this, 'c', 'Nuzlocke-Ruleset.png');
      }, false);
    }



  };

  Nuzlocke.init();
})();
