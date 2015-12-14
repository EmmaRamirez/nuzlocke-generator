(function(){
  var Nuzlocke = {
    settings: {
      numOfRules: 0,
      difficulty: 1,
    },
    rules: {

    },
    init: function() {

      var button = document.getElementById('generate');

      button.addEventListener('click', function(){
        console.log('a');
        this.textContent = 'Generated!';
      });


    }
  };

  Nuzlocke.init();
})();
