(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Result/Result.styl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/stylus-loader!./src/components/Result/Result.styl ***!
  \************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){(e.exports=t(/*! ../../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(void 0)).push([e.i,".top-bar {\n  padding: 0.25rem;\n  font-size: 1.15rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid rgba(0,0,0,0.33);\n}\n\n.pt-dark .top-bar {\n  background: #222;\n}\n\n.container {\n  border: 1px solid #ddd;\n  padding-bottom: 0.5rem;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.container h3 {\n  text-transform: uppercase;\n  margin: 0.5rem;\n  letter-spacing: 4px;\n  text-align: center;\n  color: #eee;\n}\n\n.pt-dark .pt-callout {\n  color: #fff;\n}\n\n.result-notes {\n  text-align: center;\n  margin: 0.5rem;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.container {\n  padding-bottom: 1rem;\n  background-color: #383840;\n  border: 1px solid #111;\n  color: #eee;\n  margin: 0 auto;\n}\n\n.gender-color-female {\n  color: #ffc0cb;\n}\n\n.gender-color-male {\n  color: #add8e6;\n}\n\n.pokemon-container {\n  display: inline-block;\n  padding: 1rem;\n  position: relative;\n}\n\n.logo {\n  height: 2.5rem;\n}\n\n.trainer-container div span {\n  font-size: 0.8rem;\n  letter-spacing: 2px;\n}\n\n.trainer-image {\n  border-radius: 50%;\n  height: 3rem;\n  border: 2px solid rgba(255,255,255,0.3);\n  height: 3rem;\n  width: 3rem;\n}\n\n.trainer-wrapper {\n  display: flex !important;\n  align-items: center;\n  align-content: center;\n}\n\n.nuzlocke-title {\n  display: inline-flex;\n  font-size: 1.5rem;\n  font-weight: light;\n}\n\n.badge-wrapper {\n  display: inline-flex;\n  width: 216px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: 3rem;\n}\n\n.badge-wrapper img {\n  height: 1.5rem;\n}\n\n.pokemon-shiny {\n  background: #eee;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  height: 2rem;\n  width: 2rem;\n  padding-top: 0.2rem;\n  padding-left: 0.5rem;\n  position: absolute;\n  left: 7rem;\n  top: 1rem;\n}\n\n.move {\n  /*border-bottom: 1px solid #ccc;*/\n  /*box-shadow: inset 0 0 3rem rgba(0, 0, 0, 0.3);*/\n  border: 4px solid rgba(255,255,255,0.3);\n  border-radius: 4px;\n  color: #222;\n  font-size: 0.9rem;\n  height: 1.7rem;\n  margin: 0.25rem;\n  padding: 0;\n  text-align: center;\n}\n\n.move.long-text-move {\n  font-size: 0.7rem;\n}\n\n.pokemon-nickname {\n  font-size: 1.5rem;\n}\n\n.boxed-container,\n.dead-container {\n  margin: 0 auto;\n  margin-top: 1rem;\n}\n\n.dead-pokemon-container {\n  height: 5.1rem;\n  margin-bottom: 0.25rem;\n  position: relative;\n  width: 19rem;\n  vertical-align: middle;\n  text-align: left;\n}\n\n.dead-pokemon-container[data-league='true'] {\n  outline: 1px solid #eee8aa;\n}\n\n.dead-pokemon-container[data-league='true']::after {\n  content: '';\n  background: url("+t(/*! ../../img/alola-champion-ribbon.png */"./src/img/alola-champion-ribbon.png")+");\n  display: block;\n  height: 40px;\n  width: 35px;\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  opacity: 0.8;\n}\n\n.death-info-container {\n  width: 12rem;\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -8rem;\n}\n\n.dead-pokemon-container .pokemon-image {\n  border-radius: 0;\n  display: inline-block;\n  height: 5rem;\n  width: 5rem;\n  overflow: hidden;\n}\n\n.pokemon-causeofdeath {\n  font-size: 0.8rem;\n  display: inline-block;\n}\n\n.pokemon-container[data-champion='true'] .pokemon-info::after {\n  content: '';\n  display: block;\n  height: 40px;\n  width: 35px;\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n}\n\n.region-alola .pokemon-container[data-champion='true'] .pokemon-info::after {\n  background: url("+t(/*! ../../img/alola-champion-ribbon.png */"./src/img/alola-champion-ribbon.png")+");\n}\n\n.badge {\n  height: 1rem;\n}\n\n[data-obtained='false'] {\n  -webkit-filter: grayscale(100%);\n}\n\n.trainer-container {\n  color: #eee;\n  padding: 0.25rem;\n  width: 100%;\n  background-size: cover, 50% auto;\n  background-position: top left, bottom left;\n}\n\n.team-container {\n  display: flex;\n  /* flex-direction: column; */\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.dead-pokemon-container {\n  background: #333;\n  border: 1px solid #010101;\n  /*color: #eee;*/\n}\n\n.boxed-pokemon-container {\n  display: inline-flex !important;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.boxed-pokemon-image {\n  cursor: pointer;\n  background-size: cover;\n  background-position: center center;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.pokemon-causeofdeath {\n  color: #000;\n}\n\n.dead-pokemon-info {\n  color: #eee;\n  width: 200px;\n  vertical-align: top;\n  display: inline-block;\n  padding: 0.25rem;\n}\n\n.dead-pokemon-container {\n  display: inline-flex !important;\n  align-items: center;\n  margin-right: 2px;\n}\n\n.dead-container {\n  margin-left: 0;\n}\n\n.dead-pokemon-info,\n.pokemon-d-nickname strong,\n.pokemon-causeofdeath {\n  color: #fff;\n}\n\n.dead-pokemon-info {\n  margin: 0.5rem;\n}\n\n.pokemon-d-nickname {\n  font-size: 1rem;\n  font-weight: light !important;\n  margin-right: 0.5rem;\n  color: #eee;\n}\n\n.pokemon-d-nickname,\n.pokemon-levels {\n  display: inline-block;\n  font-size: 0.9rem;\n  text-align: center;\n  text-shadow: none;\n}\n\n.dead-pokemon-picture {\n  cursor: pointer;\n  height: 80px;\n  width: 76px;\n  background-size: cover;\n  background-position: center;\n}\n\n.pokemon-levels {\n  margin: 0 !important;\n  color: #ddd;\n}\n\n.selector {\n  margin: 0 auto;\n  max-width: 80rem;\n  padding: 0.5rem;\n}\n\n.selector button {\n  border: 0 solid transparent;\n  background: #333;\n  cursor: pointer;\n  color: #eee;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n}\n\n.selector button:hover {\n  background: #444;\n  transition: 300ms;\n}\n\n.trainer-container {\n  background: #333;\n  color: #eee;\n  border-bottom: 1px solid #000;\n  padding: 0.25rem;\n  width: 100%;\n  background-size: cover, 50% auto;\n  background-position: top left, bottom left;\n}\n\n.trainer-container div {\n  display: inline-block;\n  padding: 0.25rem;\n  text-align: center;\n}\n\n.logo {\n  height: 100%;\n  height: 2rem;\n}\n\n.trainer-container div span {\n  font-size: 0.8rem;\n  letter-spacing: 2px;\n}\n\n.trainer-image {\n  border-radius: 50%;\n  height: 3rem;\n  vertical-align: bottom;\n}\n\n.not-obtained {\n  filter: grayscale(100%);\n}\n\n.round {\n  border-radius: 50%;\n  display: inline-block;\n  height: 8rem;\n  width: 8rem;\n  padding: 0.25rem;\n  position: relative;\n  z-index: 10;\n}\n\n.square {\n  display: inline-block;\n  height: 8rem;\n  width: 8rem;\n  padding: 0.25rem;\n  position: relative;\n  z-index: 10;\n}\n\n.pokemon-image {\n  background-size: cover;\n  background-position: center center;\n  display: inline-block;\n  height: 7.5rem;\n  width: 7.5rem;\n}\n\n.pokemon-image.round {\n  border-radius: 50%;\n}\n\n.is-sprite {\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\n.pokemon-item {\n  background: #111;\n  border: 5px solid #fff;\n  bottom: 0;\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 12px;\n  padding: 0.5rem;\n  position: absolute;\n  width: 3rem;\n  z-index: 10;\n}\n\n.pokemon-item.round {\n  border-radius: 50%;\n}\n\n.pokemon-item.square {\n  border-radius: 0;\n}\n\n.pokemon-shiny {\n  background: #eee;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  height: 2rem;\n  width: 2rem;\n  padding-top: 0.2rem;\n  padding-left: 0.5rem;\n  position: absolute;\n  left: 7rem;\n  top: 1rem;\n}\n\n.minimal {\n  min-width: 17rem;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.minimal .pokemon-info {\n  background: transparent;\n  display: flex;\n  padding: 0;\n  height: auto;\n  width: auto;\n  margin-left: 0;\n}\n\n.pokemon-info {\n  border-radius: 0 4px 4px 0;\n  display: inline-block;\n  background: #111;\n  height: auto;\n  min-height: 8rem;\n  margin-left: -4rem;\n  position: relative;\n  width: 26rem;\n  vertical-align: top;\n  -webkit-filter: drop-shadow(0 0 1px #111);\n  padding-left: 4rem;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n\n.pokemon-info span {\n  margin: 0 0.25rem;\n}\n\n.pokemon-info::before {\n  content: '';\n  border-color: transparent #111 transparent transparent;\n  border-width: 1.5rem;\n  border-style: solid;\n  left: -3rem;\n  top: calc(50% - 1.5rem);\n  position: absolute;\n  display: none;\n}\n\n.pokemon-info-inner {\n  display: inline-block;\n  padding: 0.5rem;\n  vertical-align: top;\n}\n\n.pokemon-moves {\n  background: transparent;\n  display: flex;\n  width: 100%;\n}\n\n.pokemon-moves.horizontal {\n  height: 2rem;\n  width: 100%;\n}\n\n.pokemon-moves.vertical {\n  height: 8rem;\n  width: 23%;\n  position: absolute;\n  top: 0;\n  flex-direction: column;\n  right: 6px;\n  justify-content: space-evenly;\n}\n\n.column {\n  flex-direction: column;\n  justify-content: center;\n}\n\n.move {\n  /*border-bottom: 1px solid #ccc;*/\n  /*box-shadow: inset 0 0 3rem rgba(0, 0, 0, 0.3);*/\n  align-items: center;\n  border: 0 solid transparent;\n  border-radius: 0;\n  border-radius: 4px;\n  display: flex;\n  font-size: 0.8rem;\n  justify-content: center;\n  margin: 0 0.25rem;\n  padding: 0;\n  text-align: center;\n  width: 100%;\n}\n\n.pokemon-nickname {\n  font-size: 1.5rem;\n}\n\n.boxed-pokemon-container {\n  background: #151515;\n  border: 1px solid #000;\n  border-radius: 4px;\n  color: #fff;\n  display: inline-block;\n  margin: 2px;\n  position: relative;\n}\n\n.container .boxed-pokemon-container {\n  width: 16%;\n}\n\n.pokemon-levels {\n  margin-top: 3.5rem;\n}\n\n.boxed-pokemon-info {\n  border-left: 1px solid #111;\n  display: inline-block;\n  /*position: absolute;*/\n  padding: 0.5rem;\n  top: 0;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable,\n.move {\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Fighting-type,\n.move.Fighting-type {\n  background: #a52a2a;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Ice-type,\n.move.Ice-type {\n  background: #c2f1f2;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Fire-type,\n.move.Fire-type {\n  background: #eb3434;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Grass-type,\n.move.Grass-type {\n  background: #39bf3c;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Bug-type,\n.move.Bug-type {\n  background: #aee359;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Normal-type,\n.move.Normal-type {\n  background: #e1e3d3;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Steel-type,\n.move.Steel-type {\n  background: #b0b0b0;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Rock-type,\n.move.Rock-type {\n  background: #8f795d;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Ground-type,\n.move.Ground-type {\n  background: #9c6e21;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Poison-type,\n.move.Poison-type {\n  background: #75226b;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Ghost-type,\n.move.Ghost-type {\n  background: #3b2238 !important;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Water-type,\n.move.Water-type {\n  background: #5b64de;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Electric-type,\n.move.Electric-type {\n  background: #e3e039;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Dark-type,\n.move.Dark-type {\n  background: #29291f;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Fairy-type,\n.move.Fairy-type {\n  background: #ffc0cb;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Flying-type,\n.move.Flying-type {\n  background: #96d3e0;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Psychic-type,\n.move.Psychic-type {\n  background: #eb75dd;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Dragon-type,\n.move.Dragon-type {\n  background: #153f4d;\n  color: #fff;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.-type,\n.move.-type {\n  display: none;\n}\n\n",""])},"./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Result/themes.styl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/stylus-loader!./src/components/Result/themes.styl ***!
  \************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){(e.exports=t(/*! ../../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(void 0)).push([e.i,".crystal .pokemon-container {\n  margin: 2px;\n  padding: 0;\n  width: 11rem;\n  height: 19rem;\n}\n\n.crystal .pokemon-info {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: auto;\n  left: 0;\n  margin-left: 0;\n  padding: 0;\n  z-index: 100;\n  height: 9rem;\n  margin-left: 4px;\n}\n\n.crystal .pokemon-nickname {\n  display: block;\n}\n\n.crystal .pokemon-image {\n  height: 10rem;\n  width: 10rem;\n}\n\n.crystal .square,\n.crystal .bubble {\n  height: 11rem;\n  width: 11rem;\n}\n\n.default-light h3 {\n  color: #111;\n}\n\n.default-light .result-notes {\n  color: #111;\n}\n\n.default-light .container {\n  background-color: #eee;\n  border: 1px solid #666;\n}\n\n.default-light .pokemon-container {\n  background: transparent;\n}\n\n.default-light .pokemon-info {\n  background: #ddd;\n  color: #222;\n  filter: none;\n  -webkit-filter: none;\n}\n\n.default-light .boxed-pokemon-container {\n  background: #ddd;\n  border: 1px solid #ccc;\n  color: #333;\n}\n\n.default-light .dead-pokemon-container {\n  background: #ddd;\n  border-color: transparent;\n}\n\n.default-light .dead-pokemon-info,\n.default-light .pokemon-d-nickname,\n.default-light .pokemon-levels,\n.default-light .pokemon-causeofdeath {\n  color: #222;\n}\n\n.default-light .trainer-container {\n  color: #000;\n  border-bottom: transparent;\n}\n\n.default-light .boxed-pokemon-info {\n  border-left-color: #9a9a9a;\n}\n\n.default-light .gender-color-female {\n  color: #f35e5e;\n}\n\n.default-light .gender-color-male {\n  color: #5e9df3;\n}\n\n.default-light .rules-container {\n  color: #333;\n}\n\n.compact-crystal .pokemon-image {\n  filter: drop-shadow(0 0 4px #000);\n}\n\n.compact-crystal .pokemon-info {\n  width: 8rem;\n  padding: 0;\n  margin: 0;\n  background: transparent !important;\n  min-height: 4rem;\n}\n\n.compact-crystal .pokemon-nickname {\n  display: block;\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.compact-crystal .pokemon-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.compact-crystal .pokemon-info span {\n  margin: 0;\n  margin-right: 2px;\n}\n\n.cards .pokemon-info {\n  color: #fff;\n  width: 100%;\n  min-height: 0;\n  background: rgba(0,0,0,0.4);\n  margin: 0 !important;\n  padding: 0;\n  overflow: visible;\n  margin-left: 0;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-radius: 0;\n  background: linear-gradient(transparent, rgba(0,0,0,0.6));\n}\n\n.cards .boxed-pokemon-container {\n  background: rgba(0,0,0,0.4);\n  border: unset;\n  width: auto;\n}\n\n.cards .boxed-pokemon-info {\n  border: unset;\n}\n\n.cards .pokemon-container {\n  background: #222;\n  margin: 0.5rem;\n  width: 15rem;\n  display: flex;\n  height: 15rem;\n  flex-direction: column;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n\n.cards .pokemon-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 15rem;\n  height: 15rem;\n}\n\n.cards .pokemon-image-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.cards .round {\n  margin: 6px auto;\n}\n\n.cards .pokemon-main-info {\n  position: absolute;\n  bottom: 13rem;\n}\n\n.cards .dead-pokemon-container {\n  background: rgba(0,0,0,0.3);\n  border: none;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  margin: 0 0.5rem;\n}\n\n.cards .dead-pokemon-picture.sprites-mode {\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\n.cards .dead-pokemon-picture {\n  width: 10rem;\n  height: 10rem;\n}\n\n.cards .dead-pokemon-info {\n  position: absolute;\n  bottom: 0;\n  background: linear-gradient(transparent, rgba(0,0,0,0.6));\n  margin: 0;\n  width: 100%;\n}\n\n.cards .move {\n  font-size: 0.7rem;\n}\n\n.cards .pokemon-item {\n  position: absolute;\n  z-index: 11;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 10rem;\n  left: 12rem;\n  background: transparent;\n}\n\n.generations .container {\n  position: relative;\n}\n\n.generations li {\n  background: rgba(0,0,0,0.2);\n  list-style-type: none;\n  border-radius: 0.25rem;\n  padding: 0.25rem;\n  margin: 0.25rem;\n  display: inline-block;\n}\n\n.generations .team-container {\n  width: 36%;\n  justify-content: flex-start;\n  display: inline-block;\n  margin-left: 4px;\n}\n\n.generations .pokemon-container {\n  padding: 0;\n  margin: 2px 0;\n}\n\n.generations .pokemon-info {\n  border-radius: 0;\n  background-size: 322px 10px;\n  background-image: linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px);\n}\n\n.generations .pokemon-image-wrapper {\n  width: 10rem;\n  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n}\n\n.generations .pokemon-image {\n  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  width: 9.5rem;\n}\n\n.generations .boxed-container {\n  width: 200px;\n  height: 420px;\n  display: inline-block;\n  background: #333;\n  border-radius: 0.25rem;\n  vertical-align: top;\n  background-size: 10px 10px;\n  background-image: linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px);\n}\n\n.generations .move {\n  -webkit-clip-path: polygon(9% 0, 100% 1%, 100% 100%, 8% 100%, 0% 50%);\n  clip-path: polygon(9% 0, 100% 1%, 100% 100%, 8% 100%, 0% 50%);\n  border-radius: 0;\n}\n\n.generations .boxed-pokemon-container {\n  width: auto;\n  background: transparent;\n  border: none;\n  margin: 0;\n}\n\n.generations .boxed-pokemon-info {\n  display: none;\n}\n\n.generations .dead-container {\n  width: 710px;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #333;\n  background-size: 10px 10px;\n  background-image: linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px);\n  margin-left: 7px;\n  border-radius: 0.25rem;\n  height: 420px;\n}\n\n.generations .dead-pokemon-container {\n  width: 14rem;\n  height: 3rem;\n}\n\n.generations .pokemon-causeofdeath {\n  font-size: 0.7rem;\n}\n\n.generations .champs-container {\n  border-radius: 0.25rem;\n  width: 916px;\n  height: 212px;\n  position: absolute;\n  bottom: 148px;\n  right: 14px;\n  background-color: #333;\n  background-size: 10px 10px;\n  background-image: linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px);\n  padding: 0.25rem;\n}\n\n.generations .rules-container {\n  position: absolute;\n  height: 200px;\n  width: 975px;\n  bottom: -50px;\n  right: 0;\n}\n\n.hexagon,\n.hexagons .trainer-wrapper img:nth-of-type(1),\n.hexagons .pokemon-image-wrapper,\n.hexagons .pokemon-image-wrapper::after,\n.hexagons .pokemon-image,\n.hexagons .pokemon-item,\n.hexagons .champs-pokemon {\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n}\n\n.hexagons.team-size-6 .pokemon-container:nth-of-type(5),\n.hexagons.team-size-6 .pokemon-container:nth-of-type(6) {\n  transform: translate(-124px, -62px);\n}\n\n.hexagons.team-size-6 .pokemon-container:nth-of-type(4) {\n  transform: translate(-124px, 186px);\n}\n\n.hexagons.team-size-5 .pokemon-container:nth-of-type(4) {\n  transform: translate(-372px, 186px);\n}\n\n.hexagons.team-size-5 .pokemon-container:nth-of-type(5) {\n  transform: translate(-248px, -62px);\n}\n\n.hexagons.team-size-4 .team-container,\n.hexagons.team-size-3 .team-container,\n.hexagons.team-size-2 .team-container,\n.hexagons.team-size-1 .team-container {\n  margin-left: 0;\n}\n\n.hexagons .team-container {\n  margin-left: 8rem;\n  margin-top: 0.5rem;\n}\n\n.hexagons .trainer-wrapper img:nth-of-type(1) {\n  border-radius: 0;\n}\n\n.hexagons .pokemon-container {\n  padding: 0;\n}\n\n.hexagons .pokemon-image-wrapper {\n  background: transparent;\n  border-radius: 0 !important;\n  height: 15.5rem;\n  width: 15.5rem;\n}\n\n.hexagons .pokemon-image-wrapper::after {\n  content: '';\n  height: 15rem;\n  width: 15rem;\n  position: absolute;\n  display: block;\n  top: 0.25rem;\n  z-index: 10;\n  background: linear-gradient(to bottom, rgba(0,0,0,0.75), transparent, rgba(0,0,0,0.7));\n}\n\n.hexagons .pokemon-image {\n  height: 15rem;\n  width: 15rem;\n}\n\n.hexagons .pokemon-item {\n  position: absolute;\n  bottom: 0;\n  left: calc(50% - 1.5rem);\n  border-radius: 0;\n  border: none;\n  background-size: 15rem;\n  background-position: center bottom;\n}\n\n.hexagons .pokemon-nature,\n.hexagons .pokemon-ability {\n  display: inline-block;\n  margin-left: 0.25rem;\n  margin-bottom: 2rem;\n}\n\n.hexagons .pokemon-info {\n  background: transparent;\n  color: #fff;\n  position: absolute;\n  top: 4rem;\n  left: 0;\n  z-index: 10;\n  text-align: center;\n  width: 15.5rem;\n  margin: 0;\n  padding: 0;\n  height: 8rem;\n}\n\n.hexagons .pokemon-info-inner {\n  padding: 0;\n}\n\n.hexagons .pokemon-moves {\n  margin-top: 1rem;\n  display: flex;\n  position: absolute;\n  bottom: 0.25rem;\n  opacity: 0.6;\n  left: 0.25rem;\n  width: calc(100% - 0.5rem);\n}\n\n.hexagons .move {\n  border-radius: 0;\n  margin: 0;\n}\n\n.hexagons .boxed-container,\n.hexagons .champs-container,\n.hexagons .dead-container {\n  display: inline-block;\n  width: 33%;\n  vertical-align: top;\n}\n\n.hexagons .boxed-pokemon-container {\n  background: #333;\n  width: 48%;\n  border: none;\n}\n\n.hexagons .boxed-pokemon-info {\n  border: none;\n}\n\n.hexagons .dead-pokemon-container {\n  height: auto;\n  width: 100%;\n  border: none;\n  -webkit-clip-path: polygon(95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%, 5% 0);\n  clip-path: polygon(95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%, 5% 0);\n}\n\n.hexagons .dead-pokemon-info {\n  margin: 0;\n  width: 100%;\n}\n\n.hexagons .trainer-image {\n  border: none;\n}\n\n.hexagons .champs-pokemon:nth-of-type(n+8),\n.hexagons .champs-pokemon:nth-of-type(n+22),\n.hexagons .champs-pokemon:nth-of-type(n+36),\n.hexagons .champs-pokemon:nth-of-type(n+50),\n.hexagons .champs-pokemon:nth-of-type(n+64),\n.hexagons .champs-pokemon:nth-of-type(n+78),\n.hexagons .champs-pokemon:nth-of-type(n+92),\n.hexagons .champs-pokemon:nth-of-type(n+106) {\n  left: 24px;\n  top: -12px;\n  position: relative;\n}\n\n.hexagons .champs-pokemon:nth-of-type(n+15),\n.hexagons .champs-pokemon:nth-of-type(n+29),\n.hexagons .champs-pokemon:nth-of-type(n+43),\n.hexagons .champs-pokemon:nth-of-type(n+57),\n.hexagons .champs-pokemon:nth-of-type(n+71),\n.hexagons .champs-pokemon:nth-of-type(n+85) {\n  left: 0;\n  top: -23px;\n}\n\n",""])},"./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Shared/Autocomplete.styl":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/stylus-loader!./src/components/Shared/Autocomplete.styl ***!
  \******************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){(e.exports=t(/*! ../../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(void 0)).push([e.i,".autocomplete-items {\n  list-style-type: none;\n  background: #111;\n  color: #eee;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  max-height: 200px;\n  position: absolute;\n  margin-top: 2.25rem;\n  padding: 0;\n  overflow: auto;\n  width: 10.5rem;\n  z-index: 11;\n}\n\n.autocomplete-items li {\n  cursor: pointer;\n  padding: 3px;\n}\n\n.autocomplete-items li:hover {\n  background: rgba(238,238,238,0.1);\n}\n\n",""])},"./src/assets/img/croagunk.gif":
/*!*************************************!*\
  !*** ./src/assets/img/croagunk.gif ***!
  \*************************************/
/*! no static exports found */function(e,n,t){e.exports=t.p+"assets/croagunk.af493c7d74373acb775cd29be250998f.gif"},"./src/components/BoxedPokemon/BoxedPokemon.tsx":
/*!******************************************************!*\
  !*** ./src/components/BoxedPokemon/BoxedPokemon.tsx ***!
  \******************************************************/
/*! exports provided: BoxedPokemonBase, BoxedPokemon */function(e,n,t){"use strict";t.r(n),t.d(n,"BoxedPokemonBase",function(){return l}),t.d(n,"BoxedPokemon",function(){return c});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),a=t(/*! actions */"./src/actions/index.ts"),i=t(/*! components/PokemonIcon */"./src/components/PokemonIcon/index.ts"),s=t(/*! components/Shared */"./src/components/Shared/index.ts");const l=e=>o.createElement("div",{className:"boxed-pokemon-container"},o.createElement(i.PokemonIcon,{species:e.species,id:e.id,style:{cursor:"pointer"},forme:e.forme,shiny:e.shiny}),o.createElement("div",{className:"boxed-pokemon-info"},o.createElement("span",{className:"boxed-pokemon-name"},e.nickname," ",Object(s.GenderElement)(e.gender)," ",e.level?o.createElement("span",null,"lv. ",e.level):null))),c=Object(r.connect)(null,{selectPokemon:a.selectPokemon})(l)},"./src/components/BoxedPokemon/index.ts":
/*!**********************************************!*\
  !*** ./src/components/BoxedPokemon/index.ts ***!
  \**********************************************/
/*! exports provided: BoxedPokemonBase, BoxedPokemon */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./BoxedPokemon */"./src/components/BoxedPokemon/BoxedPokemon.tsx");t.d(n,"BoxedPokemonBase",function(){return o.BoxedPokemonBase}),t.d(n,"BoxedPokemon",function(){return o.BoxedPokemon})},"./src/components/ChampsPokemon/ChampsPokemon.tsx":
/*!********************************************************!*\
  !*** ./src/components/ChampsPokemon/ChampsPokemon.tsx ***!
  \********************************************************/
/*! exports provided: champsPokemon, ChampsPokemon */function(e,n,t){"use strict";t.r(n),t.d(n,"champsPokemon",function(){return l}),t.d(n,"ChampsPokemon",function(){return c});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! components/PokemonIcon */"./src/components/PokemonIcon/index.ts"),a=t(/*! utils */"./src/utils/index.ts"),i=t(/*! ../Shared */"./src/components/Shared/index.ts"),s=t(/*! emotion */"./node_modules/emotion/dist/index.es.js");const l=e=>s["css"]`
    height: ${e.height};
    width: ${e.width};
    margin: ${e.margin};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e.background};
    padding: ${e.padding};
    cursor: pointer;
`;class c extends o.Component{constructor(e){super(e),this.getWidth=(()=>{return 48+(this.props.showGender?24:0)+(this.props.showNickname?128:0)+(this.props.showLevel?24:0)})}render(){return o.createElement("div",{className:Object(s.cx)(l({background:Object(a.gameOfOriginToColor)(this.props.gameOfOrigin),height:"48px",width:this.getWidth(),margin:0,padding:0}))},o.createElement(r.PokemonIcon,Object.assign({},this.props)),this.props.showNickname&&this.props.nickname,this.props.showGender&&Object(i.GenderElement)(this.props.gender),this.props.showLevel&&` Lv ${this.props.level}`)}}c.defaultProps={showNickname:!1,showGender:!1,showLevel:!1}},"./src/components/ChampsPokemon/index.ts":
/*!***********************************************!*\
  !*** ./src/components/ChampsPokemon/index.ts ***!
  \***********************************************/
/*! exports provided: champsPokemon, ChampsPokemon */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./ChampsPokemon */"./src/components/ChampsPokemon/ChampsPokemon.tsx");t.d(n,"champsPokemon",function(){return o.champsPokemon}),t.d(n,"ChampsPokemon",function(){return o.ChampsPokemon})},"./src/components/DeadPokemon/DeadPokemon.tsx":
/*!****************************************************!*\
  !*** ./src/components/DeadPokemon/DeadPokemon.tsx ***!
  \****************************************************/
/*! exports provided: DeadPokemonBase, DeadPokemon */function(e,n,t){"use strict";t.r(n),t.d(n,"DeadPokemonBase",function(){return c}),t.d(n,"DeadPokemon",function(){return m});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),a=t(/*! components/Shared */"./src/components/Shared/index.ts"),i=t(/*! utils */"./src/utils/index.ts"),s=t(/*! actions */"./src/actions/index.ts"),l=t(/*! components/PokemonIcon */"./src/components/PokemonIcon/index.ts");const c=e=>{const n=e.style;return o.createElement("div",{className:e.champion?"dead-pokemon-container champion":"dead-pokemon-container","data-league":e.champion},"Generations"!==n.template?o.createElement("div",{role:"presentation",onClick:n=>e.selectPokemon(e.id),className:`dead-pokemon-picture ${e.style.spritesMode?"sprites-mode":""}`,style:Object.assign({backgroundImage:Object(i.getPokemonImage)({customImage:e.customImage,forme:e.forme,species:e.species,style:e.style,name:e.game.name})},(e=>e.spritesMode&&!e.scaleSprites?{backgroundSize:"auto",backgroundRepeat:"no-repeat"}:{backgroundSize:"cover",backgroundRepeat:"no-repeat"})(n),{filter:n.grayScaleDeadPokemon?"grayscale(100%)":"none"})}):o.createElement("span",{style:{filter:"grayscale(100%)"}},o.createElement(l.PokemonIconBase,Object.assign({},e))),o.createElement("div",{className:"dead-pokemon-info"},o.createElement("div",{className:"pokemon-d-nickname"},e.nickname," ",Object(a.GenderElement)(e.gender)),o.createElement("div",{className:"pokemon-levels"},"Levels ",e.metLevel,"—",e.level),o.createElement("br",null),o.createElement("div",{className:"pokemon-causeofdeath"},e.causeOfDeath)))},m=Object(r.connect)(e=>({style:e.style,game:e.game}),{selectPokemon:s.selectPokemon})(c)},"./src/components/DeadPokemon/index.ts":
/*!*********************************************!*\
  !*** ./src/components/DeadPokemon/index.ts ***!
  \*********************************************/
/*! exports provided: DeadPokemonBase, DeadPokemon */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./DeadPokemon */"./src/components/DeadPokemon/DeadPokemon.tsx");t.d(n,"DeadPokemonBase",function(){return o.DeadPokemonBase}),t.d(n,"DeadPokemon",function(){return o.DeadPokemon})},"./src/components/PokemonIcon/PokemonIcon.tsx":
/*!****************************************************!*\
  !*** ./src/components/PokemonIcon/PokemonIcon.tsx ***!
  \****************************************************/
/*! exports provided: PokemonIconBase, PokemonIcon */function(e,n,t){"use strict";t.r(n),t.d(n,"PokemonIconBase",function(){return m}),t.d(n,"PokemonIcon",function(){return d});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),a=t(/*! utils */"./src/utils/index.ts"),i=t(/*! actions */"./src/actions/index.ts"),s=t(/*! store */"./src/store/index.ts"),l=t(/*! react-dnd */"./node_modules/react-dnd/lib/index.js");const c={beginDrag:e=>(console.log("drag has begun",e),s.store.dispatch(Object(i.selectPokemon)(e.id)),{id:e.id}),isDragging:(e,n)=>({id:e.id})};let m=class extends o.Component{constructor(e){super(e)}render(){const{connectDragSource:e,isDragging:n,id:t,species:r,forme:i,onClick:s,selectedId:l,className:c,isShiny:m,style:d}=this.props;return e(o.createElement("div",{role:"icon",onClick:e=>{e.preventDefault(),s&&s()},id:t,style:d,className:`${t===l?"pokemon-icon selected":"pokemon-icon"}${c||""} ${n?"opacity-medium":""}`},o.createElement("img",{alt:r,src:`icons/pokemon/${m?"shiny":"regular"}/${(e=>null==e?"unknown":"Nidoran♀"===e?"nidoran-f":"Nidoran♂"===e?"nidoran-m":"Mr. Mime"===e?"mr-mime":e.startsWith("Farfetch")?"farfetchd":"Mime Jr."===e?"mime-jr":"Flabébé"===e?"flabebe":e.startsWith("Tapu")?e.toLowerCase().replace(/\s/,"-"):a.listOfPokemon.indexOf(e)<0?"unknown":e.toLowerCase())(r)}.png`})))}};m=function(e,n,t,o){var r,a=arguments.length,i=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(n,t,i):r(n,t))||i);return a>3&&i&&Object.defineProperty(n,t,i),i}([Object(l.DragSource)(a.dragAndDrop.ICON,c,(e,n)=>({connectDragSource:e.dragSource(),isDragging:n.isDragging()}))],m);const d=Object(r.connect)(e=>({selectedId:e.selectedId}),(e,n)=>({onClick:()=>{e(Object(i.selectPokemon)(n.id))}}))(m)},"./src/components/PokemonIcon/index.ts":
/*!*********************************************!*\
  !*** ./src/components/PokemonIcon/index.ts ***!
  \*********************************************/
/*! exports provided: PokemonIconBase, PokemonIcon */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./PokemonIcon */"./src/components/PokemonIcon/PokemonIcon.tsx");t.d(n,"PokemonIconBase",function(){return o.PokemonIconBase}),t.d(n,"PokemonIcon",function(){return o.PokemonIcon})},"./src/components/Result/Result.styl":
/*!*******************************************!*\
  !*** ./src/components/Result/Result.styl ***!
  \*******************************************/
/*! no static exports found */function(e,n,t){var o=t(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/stylus-loader!./Result.styl */"./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Result/Result.styl");"string"==typeof o&&(o=[[e.i,o,""]]);var r={transform:void 0};t(/*! ../../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./src/components/Result/Result.tsx":
/*!******************************************!*\
  !*** ./src/components/Result/Result.tsx ***!
  \******************************************/
/*! exports provided: ResultBase, Result */function(e,n,t){"use strict";t.r(n),t.d(n,"ResultBase",function(){return k}),t.d(n,"Result",function(){return b});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),a=t(/*! uuid/v4 */"./node_modules/uuid/v4.js"),i=t(/*! react-custom-scrollbars */"./node_modules/react-custom-scrollbars/lib/index.js"),s=t(/*! dom-to-image */"./node_modules/dom-to-image/src/dom-to-image.js"),l=t(/*! actions */"./src/actions/index.ts"),c=t(/*! components/TeamPokemon */"./src/components/TeamPokemon/index.ts"),m=t(/*! components/DeadPokemon */"./src/components/DeadPokemon/index.ts"),d=t(/*! components/BoxedPokemon */"./src/components/BoxedPokemon/index.ts"),p=t(/*! components/ChampsPokemon */"./src/components/ChampsPokemon/index.ts"),u=t(/*! components/TopBar */"./src/components/TopBar/index.ts"),g=t(/*! utils */"./src/utils/index.ts"),h=(t(/*! ./Result.styl */"./src/components/Result/Result.styl"),t(/*! ./themes.styl */"./src/components/Result/themes.styl"),function(e,n,t,o){return new(t||(t=Promise))(function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){e.done?r(e.value):new t(function(n){n(e.value)}).then(i,s)}l((o=o.apply(e,n||[])).next())})});class k extends o.PureComponent{constructor(e){super(e),this.resultRef=o.createRef(),this.state={isDownloading:!1,downloadError:null}}componentWillMount(){}renderTeamPokemon(){return this.props.pokemon.filter(e=>e.hasOwnProperty("id")).filter(e=>"Team"===e.status).sort(g.sortPokes).map((e,n)=>o.createElement(c.TeamPokemon,{key:n,pokemon:e}))}renderErrors(){const e=[];return this.props.pokemon.filter(e=>"Team"===e.status).length>6&&e.push(o.createElement("div",{key:a(),className:"pt-callout pt-intent-danger"},"You have more than 6 Pokémon in your party.")),this.state.downloadError&&e.push(o.createElement("div",{key:a(),className:"pt-callout pt-intent-danger"},"Image failed to download. Check that you are not using images that link to external sites.")),o.createElement(o.Fragment,null,e)}renderBoxedPokemon(){return this.props.pokemon.filter(e=>e.hasOwnProperty("id")).filter(e=>"Boxed"===e.status).map((e,n)=>o.createElement(d.BoxedPokemon,Object.assign({key:n},e)))}renderChampsPokemon(){return this.props.pokemon.filter(e=>e.hasOwnProperty("id")).filter(e=>"Champs"===e.status).map((e,n)=>o.createElement(p.ChampsPokemon,Object.assign({key:n},e)))}renderDeadPokemon(){return this.props.pokemon.filter(e=>e.hasOwnProperty("id")).filter(e=>"Dead"===e.status).map((e,n)=>o.createElement(m.DeadPokemon,Object.assign({key:n},e)))}renderBadgesOrTrials(){const{name:e}=this.props.game;return this.props.style.displayBadges?Object(g.getBadges)(e).map((e,n)=>o.createElement("img",{className:this.props.trainer&&this.props.trainer.badges&&this.props.trainer.badges.includes(e)?"obtained":"not-obtained",key:e,alt:e,src:`./img/${e}.png`})):null}renderTrainer(){const{trainer:e,game:n,style:t}=this.props,r={fontSize:"1.1rem",fontWeight:"bold"};return o.createElement("div",{className:"trainer-wrapper"},o.createElement("div",{style:{color:"#eee",background:t.bgColor,marginRight:".5rem",width:"100px",borderRadius:".25rem",textAlign:"center",textShadow:"0 0 2px #222"}},n.name),e.image?o.createElement("img",{className:"trainer-image",src:Object(g.mapTrainerImage)(e.image),alt:"Trainer Image"}):null,e.title?o.createElement("div",{className:"nuzlocke-title"},this.props.trainer.title):o.createElement("div",{className:"nuzlocke-title"},this.props.game.name," Nuzlocke"),null==e.name||""===e.name?null:o.createElement("div",{className:"name column"},o.createElement("div",null,"name"),o.createElement("div",{style:r},e.name)),null==e.money||""===e.money.toString()?null:o.createElement("div",{className:"money column"},o.createElement("div",null,"money"),o.createElement("div",{style:r},e.money)),null==e.time||""===e.time?null:o.createElement("div",{className:"time column"},o.createElement("div",null,"time"),o.createElement("div",{style:r},e.time)),null==e.id||""===e.id?null:o.createElement("div",{className:"id column"},o.createElement("div",null,"ID"),o.createElement("div",{style:r},e.id)),null==e.totalTime||""===e.totalTime?null:o.createElement("div",{className:"time column"},o.createElement("div",null,"time"),o.createElement("div",{style:r},e.totalTime)),null==e.expShareStatus||""===e.expShareStatus?null:o.createElement("div",{className:"expShareStatus column"},o.createElement("div",null,"Exp Share"),o.createElement("div",{style:r},(e.expShareStatus||"").toUpperCase())),o.createElement("div",{className:"badge-wrapper"},this.renderBadgesOrTrials()))}toImage(){return h(this,void 0,void 0,function*(){const e=this.resultRef.current;this.setState({isDownloading:!0});try{const n=yield s.toPng(e),t=document.createElement("a");t.download=`nuzlocke-${a()}.png`,t.href=n,t.click(),this.setState({downloadError:null,isDownloading:!1})}catch(e){this.setState({downloadError:"Failed to download. This is likely due to your image containing an image resource that does not allow Cross-Origin",isDownloading:!1})}})}render(){const{style:e,box:n,trainer:t,pokemon:r}=this.props,a=(e,n)=>n.filter(e=>e.hasOwnProperty("id")).filter(n=>n.status===e).length,s=a("Team",r),l=a("Dead",r),c=a("Boxed",r),m=a("Champs",r),d=e?e.bgColor:"#383840",p=e?e.topHeaderColor:"#333333";return o.createElement(i.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},o.createElement(u.TopBar,{onClickDownload:e=>this.toImage()},this.renderErrors()),o.createElement("div",{ref:this.resultRef,className:`result container ${e.template&&e.template.toLowerCase().replace(/\s/g,"-")||""} region-${Object(g.getGameRegion)(this.props.game.name)} team-size-${s}`,style:{margin:this.state.isDownloading?"0":"3rem auto",backgroundColor:d,backgroundImage:`url(${e.backgroundImage})`,backgroundRepeat:e.tileBackground?"repeat":"no-repeat",height:e.resultHeight+"px",marginBottom:".5rem",width:e.resultWidth+"px"}},o.createElement("div",{className:"trainer-container",style:{backgroundColor:p}},this.renderTrainer()),t&&t.notes?o.createElement("div",{className:"result-notes"},t.notes):null,o.createElement("div",{className:"team-container"},this.renderTeamPokemon()),c>0?o.createElement("div",{className:"boxed-container"},o.createElement("h3",null,n[1].name),o.createElement("div",{style:{marginLeft:"1rem"}},this.renderBoxedPokemon())):null,l>0?o.createElement("div",{className:"dead-container"},o.createElement("h3",null,n[2].name),o.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",margin:".5rem"}},this.renderDeadPokemon())):null,m>0?o.createElement("div",{className:"champs-container"},o.createElement("h3",null,n[3].name),o.createElement("div",{style:{margin:".5rem"}},this.renderChampsPokemon())):null,e.displayRules?o.createElement("div",{className:"rules-container"},o.createElement("h3",null,"Rules"),o.createElement("ol",null,this.props.rules.map((e,n)=>o.createElement("li",{key:n},e)))):null))}}const b=Object(r.connect)(e=>({pokemon:e.pokemon,game:e.game,trainer:e.trainer,style:e.style,box:e.box,rules:e.rules}),{selectPokemon:l.selectPokemon})(k)},"./src/components/Result/index.ts":
/*!****************************************!*\
  !*** ./src/components/Result/index.ts ***!
  \****************************************/
/*! exports provided: Result */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./Result */"./src/components/Result/Result.tsx");t.d(n,"Result",function(){return o.Result})},"./src/components/Result/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Result/styles.ts ***!
  \*****************************************/
/*! exports provided: topBar, topBar_dark, heading, heading_dark, container, h3, callout_dark, resultNotes, genderColorFemale, genderColorMale, pokemonContainer, trainerContainer, trainerImage, trainerWrapper, nuzlockeTitle, badgeWrapper, move, pokemonNickname, pokemonShiny, square, round, pokemonImage, isSprite, pokemonItem, minimal, minimalPokemonInfo, pokemonInfo */function(e,n,t){"use strict";t.r(n),t.d(n,"topBar",function(){return r}),t.d(n,"topBar_dark",function(){return a}),t.d(n,"heading",function(){return i}),t.d(n,"heading_dark",function(){return s}),t.d(n,"container",function(){return l}),t.d(n,"h3",function(){return c}),t.d(n,"callout_dark",function(){return m}),t.d(n,"resultNotes",function(){return d}),t.d(n,"genderColorFemale",function(){return p}),t.d(n,"genderColorMale",function(){return u}),t.d(n,"pokemonContainer",function(){return g}),t.d(n,"trainerContainer",function(){return h}),t.d(n,"trainerImage",function(){return k}),t.d(n,"trainerWrapper",function(){return b}),t.d(n,"nuzlockeTitle",function(){return f}),t.d(n,"badgeWrapper",function(){return x}),t.d(n,"move",function(){return y}),t.d(n,"pokemonNickname",function(){return v}),t.d(n,"pokemonShiny",function(){return w}),t.d(n,"square",function(){return E}),t.d(n,"round",function(){return P}),t.d(n,"pokemonImage",function(){return j}),t.d(n,"isSprite",function(){return S}),t.d(n,"pokemonItem",function(){return B}),t.d(n,"minimal",function(){return N}),t.d(n,"minimalPokemonInfo",function(){return C}),t.d(n,"pokemonInfo",function(){return O});var o=t(/*! emotion */"./node_modules/emotion/dist/index.es.js");const r=o["css"]`
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.33);
    color: #111;
    display: flex;
    font-size: 1.15rem;
    justify-content: center;
    padding: .5rem;
`,a=o["css"]`
    background: #222;
    color: #fff !important;
    button {
        color: #fff !important;
    }
`,i=o["css"]`
    align-items: center;
    color: #111;
    display: flex;
    justify-content: center;
    letter-spacing: 4px;
    margin: 0.5rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
`,s=o["css"]`
    color: #eee;
`,l=o["css"]`
    border: 1px solid #111;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: .5rem;
    position: relative;
    width: 100%;
`,c=o["css"]`
    color: #eee;
    letter-spacing: 4px;
    margin: .5rem;
    text-align: center;
    text-transform: uppercase;
`,m=o["css"]`
    color: white;
`,d=o["css"]`
    font-size: 1.25rem;
    font-weight: bold;
    margin: .5rem;
    text-align: center;
`,p=o["css"]`
    color: pink;
`,u=o["css"]`
    color: lightblue;
`,g=o["css"]`
    display: inline-block;
    padding: 1rem;
    position: relative;
`,h=o["css"]`
    background-position: top left, bottom left;
    background-size: cover, 50% auto;
    background: #333;
    border-bottom: 1px solid #000;
    color: #eee;
    padding: .25rem;
    width: 100%;
`,k=o["css"]`
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
`,b=o["css"]`
    align-content: center;
    align-items: center;
    display: flex;
`,f=o["css"]`
    display: inline-flex;
    font-size: 1.5rem;
    font-weight: light;
`,x=o["css"]`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: 1rem;
    width: 216px;

    img {
        height: 1.5rem;
    }
`,y=o["css"]`
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    color: #222;
    font-size: .9rem;
    height: 1.7rem;
    margin: .25rem;
    padding: 0;
    text-align: center;
    &.long-text-move {
        font-size: .7rem;
    }
`,v=o["css"]`
    font-size: 1.5rem;
`,w=o["css"]`
    background: #eee;
    border-radius: 50%;
    border: 2px solid white;
    height: 2rem;
    width: 2rem;
    padding-top: .2rem;
    padding-left: .5rem;
    position: absolute;
    left: 7rem;
    top: 1rem;
`,E=o["css"]`
    border-radius: 50%;
    display: inline-block;
    height: 8rem;
    width: 8rem;
    padding: .25rem;
    position: relative;
    z-index: 10;
`,P=o["css"]`
    display: inline-block;
    height: 8rem;
    width: 8rem;
    padding: .25rem;
    position: relative;
    z-index: 10;
`,j=o["css"]`
    background-size: cover;
    background-position: center center;
    display: inline-block;
    height: 7.5rem;
    width: 7.5rem;
    &.square {

    }
    &.round {
        border-radius: 50%;
    }
`,S=o["css"]`
    background-size: auto;
    background-repeat: no-repeat;
`,B=o["css"]`
    background: #111;
    border: 5px solid white;
    bottom: 0;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 12px;
    padding: .5rem;
    position: absolute;
    width: 3rem;
    z-index: 10;
    &.round {
        border-radius: 50%;
    }
    &.square {
        border-radius: 0;
    }
`,N=o["css"]`
    min-width: 17rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
`,C=o["css"]`
    background: transparent;
    display: flex;
    padding: 0;
    height: auto;
    width: auto;
    margin-left: 0;
`,O=o["css"]`
    border-radius: 0 4px 4px 0;
    display: inline-block;
    background: #111;
    height: auto;
    min-height: 8rem;
    margin-left: -4rem;
    position: relative;
    width: 26rem;
    vertical-align: top;
    filter: drop-shadow(0 0 1px #111);
    padding-left: 4rem;
    border-radius: .25rem;
    overflow: hidden;
    span {
        margin: 0 .25rem;
    }
`},"./src/components/Result/themes.styl":
/*!*******************************************!*\
  !*** ./src/components/Result/themes.styl ***!
  \*******************************************/
/*! no static exports found */function(e,n,t){var o=t(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/stylus-loader!./themes.styl */"./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Result/themes.styl");"string"==typeof o&&(o=[[e.i,o,""]]);var r={transform:void 0};t(/*! ../../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./src/components/Shared/Autocomplete.styl":
/*!*************************************************!*\
  !*** ./src/components/Shared/Autocomplete.styl ***!
  \*************************************************/
/*! no static exports found */function(e,n,t){var o=t(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/stylus-loader!./Autocomplete.styl */"./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Shared/Autocomplete.styl");"string"==typeof o&&(o=[[e.i,o,""]]);var r={transform:void 0};t(/*! ../../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./src/components/Shared/Autocomplete.tsx":
/*!************************************************!*\
  !*** ./src/components/Shared/Autocomplete.tsx ***!
  \************************************************/
/*! exports provided: Autocomplete */function(e,n,t){"use strict";t.r(n),t.d(n,"Autocomplete",function(){return r});var o=t(/*! react */"./node_modules/react/index.js");t(/*! ./Autocomplete.styl */"./src/components/Shared/Autocomplete.styl");class r extends o.Component{constructor(e){super(e),this.updateItems=(e=>{this.setState({currentValue:e.target.value,visibleItems:this.props.items.filter(n=>n.startsWith(e.target.value))}),this.props.onChange(e)}),this.openList=(e=>this.setState({isOpen:!0})),this.closeList=(e=>{this.setState({isOpen:!1}),this.setState({visibleItems:[]})}),this.handleKeyDown=(e=>{13===e.which&&(this.state.visibleItems.includes(this.state.currentValue)?this.closeList(e):this.selectItem(this.state.visibleItems[0])),27!==e.which&&13!==e.which&&9!==e.which||this.closeList(e),38!==e.which&&40!==e.which||(this.handleMovement(e),this.setState({isOpen:!0}))}),this.handleMovement=(e=>{const n=this.state.visibleItems.indexOf(this.state.currentValue);38===e.which?this.selectItem(this.state.visibleItems[n-1]):this.selectItem(this.state.visibleItems[n+1])}),this.state={visibleItems:[],currentValue:"",isOpen:!1}}selectItem(e){console.log(e),this.setState({currentValue:e,isOpen:!1}),this.props.onChange({target:{value:e}})}componentWillMount(){this.setState({currentValue:this.props.value})}componentWillUnmount(){this.setState({isOpen:!1,visibleItems:[]})}componentWillReceiveProps(e){this.setState({currentValue:e.value})}renderItems(){return this.state.visibleItems.map((e,n)=>o.createElement("li",{key:n,role:"item",onClick:n=>this.selectItem(e),style:e===this.state.currentValue?{color:"lightblue"}:{}},e))}render(){return o.createElement("div",{className:"current-pokemon-input-wrapper autocomplete"},o.createElement("label",null,this.props.label),o.createElement("input",{onKeyDown:this.handleKeyDown,onFocus:this.openList,onBlur:this.closeList,placeholder:this.props.placeholder,name:this.props.name,type:"text",onChange:this.updateItems,value:this.state.currentValue}),this.state.isOpen?o.createElement("ul",{className:"autocomplete-items has-nice-scrollbars"},this.renderItems()):null)}}},"./src/components/Shared/ColorEdit.tsx":
/*!*********************************************!*\
  !*** ./src/components/Shared/ColorEdit.tsx ***!
  \*********************************************/
/*! exports provided: ColorEditBase, ColorEdit */function(e,n,t){"use strict";t.r(n),t.d(n,"ColorEditBase",function(){return l}),t.d(n,"ColorEdit",function(){return c});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! components/StyleEditor/styles */"./src/components/StyleEditor/styles.ts"),a=t(/*! emotion */"./node_modules/emotion/dist/index.es.js"),i=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),s=t(/*! utils */"./src/utils/index.ts");const l=({value:e,onChange:n,name:t,style:i})=>o.createElement("div",{className:Object(a.cx)(r.colorEditWrapper)},o.createElement("input",{name:t,onChange:n,className:Object(a.cx)(r.colorInput),type:"color",value:e}),o.createElement("input",{style:{border:"none"},onChange:n,type:"text",className:Object(a.cx)(Object(s.classWithDarkTheme)(r,"colorTextInput",i.editorDarkMode)),name:t,value:e})),c=Object(i.connect)(e=>({style:e.style}),null)(l)},"./src/components/Shared/ErrorBoundary.tsx":
/*!*************************************************!*\
  !*** ./src/components/Shared/ErrorBoundary.tsx ***!
  \*************************************************/
/*! exports provided: ErrorBoundary */function(e,n,t){"use strict";t.r(n),t.d(n,"ErrorBoundary",function(){return r});var o=t(/*! react */"./node_modules/react/index.js");class r extends o.Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(){this.setState({hasError:!0})}render(){return this.state.hasError?o.createElement("div",{className:"error-boundary"},this.props.errorMessage||"Something went wrong."):this.props.children}}},"./src/components/Shared/GenderElement.tsx":
/*!*************************************************!*\
  !*** ./src/components/Shared/GenderElement.tsx ***!
  \*************************************************/
/*! exports provided: Gender, GenderElement */function(e,n,t){"use strict";t.r(n),t.d(n,"Gender",function(){return r}),t.d(n,"GenderElement",function(){return a});var o=t(/*! react */"./node_modules/react/index.js");class r{static isMale(e){return"m"===e||"Male"===e}static isFemale(e){return"f"===e||"Female"===e}static isGenderless(e){return"genderless"===e||null==e}}const a=e=>"Male"===e||"m"===e?o.createElement("span",{className:"pokemon-gender gender-color-male"},"♂"):"Female"===e||"f"===e?o.createElement("span",{className:"pokemon-gender gender-color-female"},"♀"):null},"./src/components/Shared/PokemonByFilter.tsx":
/*!***************************************************!*\
  !*** ./src/components/Shared/PokemonByFilter.tsx ***!
  \***************************************************/
/*! exports provided: PokemonByFilterBase, PokemonByFilter */function(e,n,t){"use strict";t.r(n),t.d(n,"PokemonByFilterBase",function(){return m}),t.d(n,"PokemonByFilter",function(){return d});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! @blueprintjs/core */"./node_modules/@blueprintjs/core/lib/esm/index.js"),a=t(/*! components/PokemonIcon */"./src/components/PokemonIcon/index.ts"),i=t(/*! utils */"./src/utils/index.ts"),s=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),l=t(/*! actions */"./src/actions/index.ts");const c=({team:e,filterFunction:n})=>o.createElement(o.Fragment,null,e.filter(n).sort(i.sortPokes).map((e,n)=>o.createElement(r.Tooltip,{content:e.nickname||"",position:r.Position.TOP},o.createElement(a.PokemonIcon,{id:e.id,species:e.species,forme:e.forme,isShiny:e.shiny}))));class m extends o.Component{constructor(){super(...arguments),this.state={team:[]}}componentWillMount(){this.setState({team:this.props.team})}componentWillReceiveProps(e,n){this.setState({team:e.team})}getFilterFunction(e){return null!=e?n=>n.status===e:e=>!0}render(){const{team:e,filter:n}=this.props;return o.createElement(c,{filterFunction:this.getFilterFunction(n),team:this.state.team})}}const d=Object(s.connect)(null,{editPokemon:l.editPokemon})(m)},"./src/components/Shared/ThemeSelect.tsx":
/*!***********************************************!*\
  !*** ./src/components/Shared/ThemeSelect.tsx ***!
  \***********************************************/
/*! exports provided: ThemeSelectBase, ThemeSelect */function(e,n,t){"use strict";t.r(n),t.d(n,"ThemeSelectBase",function(){return l}),t.d(n,"ThemeSelect",function(){return c});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),a=t(/*! @blueprintjs/core */"./node_modules/@blueprintjs/core/lib/esm/index.js"),i=t(/*! utils */"./src/utils/index.ts"),s=t(/*! actions */"./src/actions/index.ts");const l=({theme:e,onChange:n})=>o.createElement("div",{className:a.Classes.SELECT},o.createElement("select",{value:e,onChange:e=>n({template:e.target.value})},i.listOfThemes.map(e=>o.createElement("option",{value:e},e)))),c=Object(r.connect)(null,{onChange:s.editStyle})(l)},"./src/components/Shared/index.ts":
/*!****************************************!*\
  !*** ./src/components/Shared/index.ts ***!
  \****************************************/
/*! exports provided: Autocomplete, ErrorBoundary, Gender, GenderElement, PokemonByFilterBase, PokemonByFilter, ColorEditBase, ColorEdit, ThemeSelectBase, ThemeSelect */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./Autocomplete */"./src/components/Shared/Autocomplete.tsx");t.d(n,"Autocomplete",function(){return o.Autocomplete});var r=t(/*! ./ErrorBoundary */"./src/components/Shared/ErrorBoundary.tsx");t.d(n,"ErrorBoundary",function(){return r.ErrorBoundary});var a=t(/*! ./GenderElement */"./src/components/Shared/GenderElement.tsx");t.d(n,"Gender",function(){return a.Gender}),t.d(n,"GenderElement",function(){return a.GenderElement});var i=t(/*! ./PokemonByFilter */"./src/components/Shared/PokemonByFilter.tsx");t.d(n,"PokemonByFilterBase",function(){return i.PokemonByFilterBase}),t.d(n,"PokemonByFilter",function(){return i.PokemonByFilter});var s=t(/*! ./ColorEdit */"./src/components/Shared/ColorEdit.tsx");t.d(n,"ColorEditBase",function(){return s.ColorEditBase}),t.d(n,"ColorEdit",function(){return s.ColorEdit});var l=t(/*! ./ThemeSelect */"./src/components/Shared/ThemeSelect.tsx");t.d(n,"ThemeSelectBase",function(){return l.ThemeSelectBase}),t.d(n,"ThemeSelect",function(){return l.ThemeSelect})},"./src/components/StyleEditor/styles.ts":
/*!**********************************************!*\
  !*** ./src/components/StyleEditor/styles.ts ***!
  \**********************************************/
/*! exports provided: colorTextInput_dark, colorInput, colorEditWrapper, styleEdit, styleEdit_dark, styleEditLabel, styleEditSpan, styleEditPtControl, radioGroup, dialog */function(e,n,t){"use strict";t.r(n),t.d(n,"colorTextInput_dark",function(){return r}),t.d(n,"colorInput",function(){return a}),t.d(n,"colorEditWrapper",function(){return i}),t.d(n,"styleEdit",function(){return s}),t.d(n,"styleEdit_dark",function(){return l}),t.d(n,"styleEditLabel",function(){return c}),t.d(n,"styleEditSpan",function(){return m}),t.d(n,"styleEditPtControl",function(){return d}),t.d(n,"radioGroup",function(){return p}),t.d(n,"dialog",function(){return u});var o=t(/*! emotion */"./node_modules/emotion/dist/index.es.js");const r=o["css"]`
    background: rgba(16, 22, 26, 0.3);
    color: #eee;
`,a=o["css"]`
    background: #fff;
    border-radius: 50%;
    border: none;
    height: 1rem;
    margin-left: .25rem;
    padding: 0;
    width: 1rem;
    -webkit-apperance: none;
    &::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
        padding: 0;
    }
    &::-webkit-color-swatch-wrapper {
        border: none;
        border-radius: 50%;
        padding: 0;
    }
`,i=o["css"]`
    align-items: center;
    display: flex;
    input[type='text'] {
        padding-left: .5rem;
    }
`,s=o["css"]`
    align-items: center;
    align-content: center;
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: .5rem;
    width: 100%;
    .pt-label {
        margin: 0;
        min-width: 10rem;
    }
    .span {
        display: inline-block;
        margin-right: .25rem;
    }
`,l=o["css"]`
    border-bottom: 1px solid #111;
`,c=o["css"]`
`,m=o["css"]`

`,d=o["css"]`
    margin-bottom: 0;
`,p=o["css"]`
    align-content: center;
    align-items: center;
    display: flex;
    .pt-control {
        border-radius: .25rem;
        margin: .25rem;
    }
    label.pt-label {
        margin: 0;
    }
`,u=o["css"]`
    padding-bottom: 0 !important;
    width: 60% !important;
`},"./src/components/TeamPokemon/TeamPokemon.tsx":
/*!****************************************************!*\
  !*** ./src/components/TeamPokemon/TeamPokemon.tsx ***!
  \****************************************************/
/*! exports provided: TeamPokemonInfo, TeamPokemonBaseMinimal, Moves, TeamPokemonBase, TeamPokemon */function(e,n,t){"use strict";t.r(n),t.d(n,"TeamPokemonInfo",function(){return c}),t.d(n,"TeamPokemonBaseMinimal",function(){return m}),t.d(n,"Moves",function(){return d}),t.d(n,"TeamPokemonBase",function(){return p}),t.d(n,"TeamPokemon",function(){return u});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),a=t(/*! utils */"./src/utils/index.ts"),i=t(/*! components/Shared */"./src/components/Shared/index.ts"),s=t(/*! actions */"./src/actions/index.ts");const l=({poke:e,oldMetLocationFormat:n})=>{const t=e.met||"",o=e.metLevel||"";return e.met?n?`Met ${e.met&&e.met.toLocaleLowerCase().startsWith("route")?"on":"in"} ${t}, from lv.${o}`:`Met Location: ${t} at lv.${o}`:null};class c extends o.PureComponent{render(){const{pokemon:e,style:n}=this.props;return o.createElement("div",{className:"pokemon-info"},o.createElement("div",{className:"pokemon-info-inner"},o.createElement("div",{className:"pokemon-main-info"},o.createElement("span",{style:{margin:"0.25rem 0 0"},className:"pokemon-nickname"},e.nickname),o.createElement("span",{className:"pokemon-name"},e.species),Object(i.GenderElement)(e.gender),e.level?o.createElement("span",{className:"pokemon-level"},"lv. ",e.level):null),o.createElement("div",{className:"pokemon-met"},l({poke:e,oldMetLocationFormat:n.oldMetLocationFormat})),e.nature&&"None"!==e.nature?o.createElement("div",{className:"pokemon-nature"},o.createElement("strong",null,e.nature)," nature"):null,e.ability?o.createElement("div",{className:"pokemon-ability"},e.ability):null),n.showPokemonMoves?o.createElement(d,{generation:this.props.generation,moves:e.moves,movesPosition:n.movesPosition}):null)}}class m extends o.PureComponent{render(){const{pokemon:e}=this.props;return o.createElement("div",{className:"pokemon-container minimal"},o.createElement("div",{style:Object.assign({backgroundImage:Object(a.getPokemonImage)({customImage:e.customImage,forme:e.forme,species:e.species,style:this.props.style,name:this.props.game.name})},this.props.spriteStyle),className:`pokemon-image ${(e.species||"missingno").toLowerCase()} ${"round"===this.props.style.imageStyle?"round":"square"}`}),o.createElement("div",{className:"pokemon-info"},o.createElement("div",{className:"pokemon-info-inner"},o.createElement("span",{className:"pokemon-nickname"},e.nickname),o.createElement("span",{className:"pokemon-name"},e.species),e.level?o.createElement("span",{className:"pokemon-level"},"lv. ",e.level):null)))}}class d extends o.Component{generateMoves(e){return e&&e.map((e,n)=>{e=e.trim();const t=Object(a.handleMovesGenerationsExceptions)({move:e,generation:this.props.generation,originalType:Object(a.getMoveType)(e)});return o.createElement("div",{key:n,className:`move ${t}-type ${e.length>=12?"long-text-move":""}`},e)})}render(){return null==this.props.moves?null:o.createElement("div",{className:`pokemon-moves ${this.props.movesPosition}`},this.generateMoves(this.props.moves))}}class p extends o.Component{constructor(e){super(e)}render(){const{pokemon:e,style:n,game:t,selectPokemon:r}=this.props,i=e,s=i.types?i.types[0]:"Normal",l=this.props.style.spritesMode&&!this.props.style.scaleSprites?{backgroundSize:"auto",backgroundRepeat:"no-repeat"}:{backgroundSize:"cover",backgroundRepeat:"no-repeat"},d=["id","position","species","nickname","status","gender","level","metLevel","nature","ability","item","types","forme","moves","causeOfDeath","shiny","champion","num","wonderTradedFor","mvp","customImage"].sort().reduce((e,n)=>Object.assign({},e,(e=>{const n=`data-${e.toLowerCase()}`;return"type"===e?{[n]:i[e].join(" ")}:null==i[e]||""===i[e]?{}:{[n]:i[e].toString()}})(n)),{});return this.props.style.minimalTeamLayout?o.createElement(m,{selectPokemon:r,style:n,game:t,spriteStyle:l,pokemon:i}):o.createElement("div",Object.assign({className:"pokemon-container"},d),o.createElement("div",{role:"presentation",onClick:e=>this.props.selectPokemon(i.id),className:`${this.props.style.imageStyle} pokemon-image-wrapper`,style:{cursor:"pointer",background:this.props.style.teamPokemonBorder?Object(a.getBackgroundGradient)(null!=i.types?i.types[0]:"",null!=i.types?i.types[1]:""):"transparent"}},o.createElement("div",{style:Object.assign({backgroundImage:Object(a.getPokemonImage)({customImage:i.customImage,forme:i.forme,species:i.species,style:this.props.style,name:this.props.game.name})},l),className:`pokemon-image ${(i.species||"missingno").toLowerCase()} ${"round"===this.props.style.imageStyle?"round":"square"}`})),null==i.item||""===i.item?null:o.createElement("div",{className:`pokemon-item ${this.props.style.itemStyle}`,style:{borderColor:Object(a.typeToColor)(s)||"transparent",backgroundImage:"Hexagons"===n.template?Object(a.getBackgroundGradient)(null!=i.types?i.types[0]:"",null!=i.types?i.types[1]:""):""}},o.createElement("img",{alt:i.item,src:`icons/hold-item/${(i.item||"").toLowerCase().replace(/\s/g,"-")}.png`})),o.createElement(c,{generation:Object(a.getGameGeneration)(this.props.game.name),style:n,pokemon:e}))}}const u=Object(r.connect)(e=>({style:e.style,game:e.game}),{selectPokemon:s.selectPokemon})(p)},"./src/components/TeamPokemon/index.ts":
/*!*********************************************!*\
  !*** ./src/components/TeamPokemon/index.ts ***!
  \*********************************************/
/*! exports provided: TeamPokemonInfo, TeamPokemonBaseMinimal, Moves, TeamPokemonBase, TeamPokemon */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./TeamPokemon */"./src/components/TeamPokemon/TeamPokemon.tsx");t.d(n,"TeamPokemonInfo",function(){return o.TeamPokemonInfo}),t.d(n,"TeamPokemonBaseMinimal",function(){return o.TeamPokemonBaseMinimal}),t.d(n,"Moves",function(){return o.Moves}),t.d(n,"TeamPokemonBase",function(){return o.TeamPokemonBase}),t.d(n,"TeamPokemon",function(){return o.TeamPokemon})},"./src/components/TopBar/TopBar.tsx":
/*!******************************************!*\
  !*** ./src/components/TopBar/TopBar.tsx ***!
  \******************************************/
/*! exports provided: TopBarBase, TopBar */function(e,n,t){"use strict";t.r(n),t.d(n,"TopBarBase",function(){return g}),t.d(n,"TopBar",function(){return h});var o=t(/*! react */"./node_modules/react/index.js"),r=t(/*! @blueprintjs/core */"./node_modules/@blueprintjs/core/lib/esm/index.js"),a=t(/*! react-redux */"./node_modules/react-redux/es/index.js"),i=t(/*! react-markdown */"./node_modules/react-markdown/lib/react-markdown.js"),s=t(/*! utils */"./src/utils/index.ts"),l=t(/*! actions */"./src/actions/index.ts"),c=t(/*! components/Result/styles */"./src/components/Result/styles.ts"),m=t(/*! package */"./src/package/index.ts"),d=t(/*! emotion */"./node_modules/emotion/dist/index.es.js");const p=t(/*! assets/img/croagunk.gif */"./src/assets/img/croagunk.gif"),u=e=>e?{color:"#fff"}:{};class g extends o.Component{constructor(){super(...arguments),this.state={isOpen:!this.props.sawRelease[m.pkg.version]},this.closeDialog=(e=>{this.props.seeRelease(m.pkg.version),this.toggleDialog(null)}),this.toggleDialog=(e=>this.setState({isOpen:!this.state.isOpen}))}render(){return o.createElement("div",{className:Object(d.cx)(Object(s.classWithDarkTheme)(c,"topBar",this.props.style.editorDarkMode))},o.createElement(r.Button,{style:u(this.props.style.editorDarkMode),onClick:e=>this.props.changeEditorSize(!this.props.editor.minimized),className:"pt-minimal",icon:this.props.editor.minimized?"minimize":"maximize"},this.props.editor.minimized?"Maximize":"Minimize"," Editor"),o.createElement(r.Button,{style:u(this.props.style.editorDarkMode),onClick:this.props.onClickDownload,className:"pt-minimal",icon:"download"},"Download Image"),o.createElement(r.Button,{style:u(this.props.style.editorDarkMode),onClick:e=>{this.props.editStyle({editorDarkMode:!this.props.style.editorDarkMode})},className:"pt-minimal",icon:this.props.style.editorDarkMode?"flash":"moon"},this.props.style.editorDarkMode?"Light":"Dark"," Mode"),o.createElement(r.Button,{style:u(this.props.style.editorDarkMode),onClick:this.toggleDialog,className:"pt-minimal",icon:"star"},m.pkg.version),this.props.children,o.createElement(r.Dialog,{isOpen:this.state.isOpen,onClose:this.closeDialog,icon:"document",title:`Release Notes ${m.pkg.version}`,className:`release-dialog ${this.props.style.editorDarkMode?"pt-dark":"pt-light"}`},o.createElement("div",{className:"pt-dialog-body"},o.createElement("div",{className:"release-notes-wrapper"},o.createElement("h3",{className:Object(d.cx)(Object(s.classWithDarkTheme)(c,"heading",this.props.style.editorDarkMode))},m.pkg.version," ",o.createElement("img",{style:{display:"inline"},alt:"Croagunk",src:p})),o.createElement(i,{className:"release-notes",source:Object(s.generateReleaseNotes)(m.pkg.version)})))))}}const h=Object(a.connect)(e=>({editor:e.editor,style:e.style,sawRelease:e.sawRelease}),{changeEditorSize:l.changeEditorSize,editStyle:l.editStyle,seeRelease:l.seeRelease})(g)},"./src/components/TopBar/index.ts":
/*!****************************************!*\
  !*** ./src/components/TopBar/index.ts ***!
  \****************************************/
/*! exports provided: TopBarBase, TopBar */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./TopBar */"./src/components/TopBar/TopBar.tsx");t.d(n,"TopBarBase",function(){return o.TopBarBase}),t.d(n,"TopBar",function(){return o.TopBar})},"./src/img/alola-champion-ribbon.png":
/*!*******************************************!*\
  !*** ./src/img/alola-champion-ribbon.png ***!
  \*******************************************/
/*! no static exports found */function(e,n,t){e.exports=t.p+"assets/alola-champion-ribbon.f7bcc3e9d37d73af5cda68702c6c87f9.png"},"./src/package/index.ts":
/*!******************************!*\
  !*** ./src/package/index.ts ***!
  \******************************/
/*! exports provided: pkg */function(e,n,t){"use strict";t.r(n),t.d(n,"pkg",function(){return o});const o=t(/*! ../../package.json */"./package.json")}}]);
//# sourceMappingURL=1.chunk.js.map