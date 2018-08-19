(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Result/Result.styl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/stylus-loader!./src/components/Result/Result.styl ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".top-bar {\n  padding: 0.25rem;\n  font-size: 1.15rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid rgba(0,0,0,0.33);\n}\n\n.pt-dark .top-bar {\n  background: #222;\n}\n\n.container {\n  border: 1px solid #ddd;\n  padding-bottom: 0.5rem;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.container h3 {\n  text-transform: uppercase;\n  margin: 0.5rem;\n  letter-spacing: 4px;\n  text-align: center;\n  color: #eee;\n}\n\n.pt-dark .pt-callout {\n  color: #fff;\n}\n\n.result-notes {\n  text-align: center;\n  margin: 0.5rem;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.container {\n  padding-bottom: 1rem;\n  background-color: #383840;\n  border: 1px solid #111;\n  color: #eee;\n  margin: 0 auto;\n}\n\n.gender-color-female {\n  color: #ffc0cb;\n}\n\n.gender-color-male {\n  color: #add8e6;\n}\n\n.pokemon-container {\n  display: inline-block;\n  padding: 1rem;\n  position: relative;\n}\n\n.logo {\n  height: 2.5rem;\n}\n\n.trainer-container div span {\n  font-size: 0.8rem;\n  letter-spacing: 2px;\n}\n\n.trainer-image {\n  border-radius: 50%;\n  height: 3rem;\n  border: 2px solid rgba(255,255,255,0.3);\n  height: 3rem;\n  width: 3rem;\n}\n\n.trainer-wrapper {\n  display: flex !important;\n  align-items: center;\n  align-content: center;\n}\n\n.nuzlocke-title {\n  display: inline-flex;\n  font-size: 1.5rem;\n  font-weight: light;\n}\n\n.badge-wrapper {\n  display: inline-flex;\n  width: 216px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: 3rem;\n}\n\n.badge-wrapper img {\n  height: 1.5rem;\n}\n\n.pokemon-shiny {\n  background: #eee;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  height: 2rem;\n  width: 2rem;\n  padding-top: 0.2rem;\n  padding-left: 0.5rem;\n  position: absolute;\n  left: 7rem;\n  top: 1rem;\n}\n\n.move {\n  /*border-bottom: 1px solid #ccc;*/\n  /*box-shadow: inset 0 0 3rem rgba(0, 0, 0, 0.3);*/\n  border: 4px solid rgba(255,255,255,0.3);\n  border-radius: 4px;\n  color: #222;\n  font-size: 0.9rem;\n  height: 1.7rem;\n  margin: 0.25rem;\n  padding: 0;\n  text-align: center;\n}\n\n.move.long-text-move {\n  font-size: 0.7rem;\n}\n\n.pokemon-nickname {\n  font-size: 1.5rem;\n}\n\n.boxed-container,\n.dead-container {\n  margin: 0 auto;\n  margin-top: 1rem;\n}\n\n.dead-pokemon-container {\n  height: 5.1rem;\n  margin-bottom: 0.25rem;\n  position: relative;\n  width: 19rem;\n  vertical-align: middle;\n  text-align: left;\n}\n\n.dead-pokemon-container[data-league='true'] {\n  outline: 1px solid #eee8aa;\n}\n\n.dead-pokemon-container[data-league='true']::after {\n  content: '';\n  background: url(" + __webpack_require__(/*! ../../img/alola-champion-ribbon.png */ "./src/img/alola-champion-ribbon.png") + ");\n  display: block;\n  height: 40px;\n  width: 35px;\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  opacity: 0.8;\n}\n\n.death-info-container {\n  width: 12rem;\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -8rem;\n}\n\n.dead-pokemon-container .pokemon-image {\n  border-radius: 0;\n  display: inline-block;\n  height: 5rem;\n  width: 5rem;\n  overflow: hidden;\n}\n\n.pokemon-causeofdeath {\n  font-size: 0.8rem;\n  display: inline-block;\n}\n\n.pokemon-container[data-champion='true'] .pokemon-info::after {\n  content: '';\n  display: block;\n  height: 40px;\n  width: 35px;\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n}\n\n.region-alola .pokemon-container[data-champion='true'] .pokemon-info::after {\n  background: url(" + __webpack_require__(/*! ../../img/alola-champion-ribbon.png */ "./src/img/alola-champion-ribbon.png") + ");\n}\n\n.badge {\n  height: 1rem;\n}\n\n[data-obtained='false'] {\n  -webkit-filter: grayscale(100%);\n}\n\n.trainer-container {\n  color: #eee;\n  padding: 0.25rem;\n  width: 100%;\n  background-size: cover, 50% auto;\n  background-position: top left, bottom left;\n}\n\n.team-container {\n  display: flex;\n  /* flex-direction: column; */\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.dead-pokemon-container {\n  background: #333;\n  border: 1px solid #010101;\n  /*color: #eee;*/\n}\n\n.boxed-pokemon-container {\n  display: inline-flex !important;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.boxed-pokemon-image {\n  cursor: pointer;\n  background-size: cover;\n  background-position: center center;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.pokemon-causeofdeath {\n  color: #000;\n}\n\n.dead-pokemon-info {\n  color: #eee;\n  width: 200px;\n  vertical-align: top;\n  display: inline-block;\n  padding: 0.25rem;\n}\n\n.dead-pokemon-container {\n  display: inline-flex !important;\n  align-items: center;\n  margin-right: 2px;\n}\n\n.dead-container {\n  margin-left: 0;\n}\n\n.dead-pokemon-info,\n.pokemon-d-nickname strong,\n.pokemon-causeofdeath {\n  color: #fff;\n}\n\n.dead-pokemon-info {\n  margin: 0.5rem;\n}\n\n.pokemon-d-nickname {\n  font-size: 1rem;\n  font-weight: light !important;\n  margin-right: 0.5rem;\n  color: #eee;\n}\n\n.pokemon-d-nickname,\n.pokemon-levels {\n  display: inline-block;\n  font-size: 0.9rem;\n  text-align: center;\n  text-shadow: none;\n}\n\n.dead-pokemon-picture {\n  cursor: pointer;\n  height: 80px;\n  width: 76px;\n  background-size: cover;\n  background-position: center;\n}\n\n.pokemon-levels {\n  margin: 0 !important;\n  color: #ddd;\n}\n\n.selector {\n  margin: 0 auto;\n  max-width: 80rem;\n  padding: 0.5rem;\n}\n\n.selector button {\n  border: 0 solid transparent;\n  background: #333;\n  cursor: pointer;\n  color: #eee;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n}\n\n.selector button:hover {\n  background: #444;\n  transition: 300ms;\n}\n\n.trainer-container {\n  background: #333;\n  color: #eee;\n  border-bottom: 1px solid #000;\n  padding: 0.25rem;\n  width: 100%;\n  background-size: cover, 50% auto;\n  background-position: top left, bottom left;\n}\n\n.trainer-container div {\n  display: inline-block;\n  padding: 0.25rem;\n  text-align: center;\n}\n\n.logo {\n  height: 100%;\n  height: 2rem;\n}\n\n.trainer-container div span {\n  font-size: 0.8rem;\n  letter-spacing: 2px;\n}\n\n.trainer-image {\n  border-radius: 50%;\n  height: 3rem;\n  vertical-align: bottom;\n}\n\n.not-obtained {\n  filter: grayscale(100%);\n}\n\n.round {\n  border-radius: 50%;\n  display: inline-block;\n  height: 8rem;\n  width: 8rem;\n  padding: 0.25rem;\n  position: relative;\n  z-index: 10;\n}\n\n.square {\n  display: inline-block;\n  height: 8rem;\n  width: 8rem;\n  padding: 0.25rem;\n  position: relative;\n  z-index: 10;\n}\n\n.pokemon-image {\n  background-size: cover;\n  background-position: center center;\n  display: inline-block;\n  height: 7.5rem;\n  width: 7.5rem;\n}\n\n.pokemon-image.round {\n  border-radius: 50%;\n}\n\n.is-sprite {\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\n.pokemon-item {\n  background: #111;\n  border: 5px solid #fff;\n  bottom: 0;\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 12px;\n  padding: 0.5rem;\n  position: absolute;\n  width: 3rem;\n  z-index: 10;\n}\n\n.pokemon-item.round {\n  border-radius: 50%;\n}\n\n.pokemon-item.square {\n  border-radius: 0;\n}\n\n.pokemon-shiny {\n  background: #eee;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  height: 2rem;\n  width: 2rem;\n  padding-top: 0.2rem;\n  padding-left: 0.5rem;\n  position: absolute;\n  left: 7rem;\n  top: 1rem;\n}\n\n.minimal {\n  min-width: 17rem;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.minimal .pokemon-info {\n  background: transparent;\n  display: flex;\n  padding: 0;\n  height: auto;\n  width: auto;\n  margin-left: 0;\n}\n\n.pokemon-info {\n  border-radius: 0 4px 4px 0;\n  display: inline-block;\n  background: #111;\n  height: auto;\n  min-height: 8rem;\n  margin-left: -4rem;\n  position: relative;\n  width: 26rem;\n  vertical-align: top;\n  -webkit-filter: drop-shadow(0 0 1px #111);\n  padding-left: 4rem;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n\n.pokemon-info span {\n  margin: 0 0.25rem;\n}\n\n.pokemon-info::before {\n  content: '';\n  border-color: transparent #111 transparent transparent;\n  border-width: 1.5rem;\n  border-style: solid;\n  left: -3rem;\n  top: calc(50% - 1.5rem);\n  position: absolute;\n  display: none;\n}\n\n.pokemon-info-inner {\n  display: inline-block;\n  padding: 0.5rem;\n  vertical-align: top;\n}\n\n.pokemon-moves {\n  background: transparent;\n  display: flex;\n  width: 100%;\n}\n\n.pokemon-moves.horizontal {\n  height: 2rem;\n  width: 100%;\n}\n\n.pokemon-moves.vertical {\n  height: 8rem;\n  width: 23%;\n  position: absolute;\n  top: 0;\n  flex-direction: column;\n  right: 6px;\n  justify-content: space-evenly;\n}\n\n.column {\n  flex-direction: column;\n  justify-content: center;\n}\n\n.move {\n  /*border-bottom: 1px solid #ccc;*/\n  /*box-shadow: inset 0 0 3rem rgba(0, 0, 0, 0.3);*/\n  align-items: center;\n  border: 0 solid transparent;\n  border-radius: 0;\n  border-radius: 4px;\n  display: flex;\n  font-size: 0.8rem;\n  justify-content: center;\n  margin: 0 0.25rem;\n  padding: 0;\n  text-align: center;\n  width: 100%;\n}\n\n.pokemon-nickname {\n  font-size: 1.5rem;\n}\n\n.boxed-pokemon-container {\n  background: #151515;\n  border: 1px solid #000;\n  border-radius: 4px;\n  color: #fff;\n  display: inline-block;\n  margin: 2px;\n  position: relative;\n}\n\n.container .boxed-pokemon-container {\n  width: 16%;\n}\n\n.pokemon-levels {\n  margin-top: 3.5rem;\n}\n\n.boxed-pokemon-info {\n  border-left: 1px solid #111;\n  display: inline-block;\n  /*position: absolute;*/\n  padding: 0.5rem;\n  top: 0;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable,\n.move {\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Fighting-type,\n.move.Fighting-type {\n  background: #a52a2a;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Ice-type,\n.move.Ice-type {\n  background: #c2f1f2;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Fire-type,\n.move.Fire-type {\n  background: #eb3434;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Grass-type,\n.move.Grass-type {\n  background: #39bf3c;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Bug-type,\n.move.Bug-type {\n  background: #aee359;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Normal-type,\n.move.Normal-type {\n  background: #e1e3d3;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Steel-type,\n.move.Steel-type {\n  background: #b0b0b0;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Rock-type,\n.move.Rock-type {\n  background: #8f795d;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Ground-type,\n.move.Ground-type {\n  background: #9c6e21;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Poison-type,\n.move.Poison-type {\n  background: #75226b;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Ghost-type,\n.move.Ghost-type {\n  background: #3b2238 !important;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Water-type,\n.move.Water-type {\n  background: #5b64de;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Electric-type,\n.move.Electric-type {\n  background: #e3e039;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Dark-type,\n.move.Dark-type {\n  background: #29291f;\n  color: #eee;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Fairy-type,\n.move.Fairy-type {\n  background: #ffc0cb;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Flying-type,\n.move.Flying-type {\n  background: #96d3e0;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Psychic-type,\n.move.Psychic-type {\n  background: #eb75dd;\n  color: #000;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.Dragon-type,\n.move.Dragon-type {\n  background: #153f4d;\n  color: #fff;\n}\n\n.pt-tag-input .pt-tag.pt-tag-removable.-type,\n.move.-type {\n  display: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Result/themes.styl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/stylus-loader!./src/components/Result/themes.styl ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".crystal .pokemon-container {\n  margin: 2px;\n  padding: 0;\n  width: 11rem;\n  height: 19rem;\n}\n\n.crystal .pokemon-info {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: auto;\n  left: 0;\n  margin-left: 0;\n  padding: 0;\n  z-index: 100;\n  height: 9rem;\n  margin-left: 4px;\n}\n\n.crystal .pokemon-nickname {\n  display: block;\n}\n\n.crystal .pokemon-image {\n  height: 10rem;\n  width: 10rem;\n}\n\n.crystal .square,\n.crystal .bubble {\n  height: 11rem;\n  width: 11rem;\n}\n\n.default-light h3 {\n  color: #111;\n}\n\n.default-light .result-notes {\n  color: #111;\n}\n\n.default-light .container {\n  background-color: #eee;\n  border: 1px solid #666;\n}\n\n.default-light .pokemon-container {\n  background: transparent;\n}\n\n.default-light .pokemon-info {\n  background: #ddd;\n  color: #222;\n  filter: none;\n  -webkit-filter: none;\n}\n\n.default-light .boxed-pokemon-container {\n  background: #ddd;\n  border: 1px solid #ccc;\n  color: #333;\n}\n\n.default-light .dead-pokemon-container {\n  background: #ddd;\n  border-color: transparent;\n}\n\n.default-light .dead-pokemon-info,\n.default-light .pokemon-d-nickname,\n.default-light .pokemon-levels,\n.default-light .pokemon-causeofdeath {\n  color: #222;\n}\n\n.default-light .trainer-container {\n  color: #000;\n  border-bottom: transparent;\n}\n\n.default-light .boxed-pokemon-info {\n  border-left-color: #9a9a9a;\n}\n\n.default-light .gender-color-female {\n  color: #f35e5e;\n}\n\n.default-light .gender-color-male {\n  color: #5e9df3;\n}\n\n.default-light .rules-container {\n  color: #333;\n}\n\n.compact-crystal .pokemon-image {\n  filter: drop-shadow(0 0 4px #000);\n}\n\n.compact-crystal .pokemon-info {\n  width: 8rem;\n  padding: 0;\n  margin: 0;\n  background: transparent !important;\n  min-height: 4rem;\n}\n\n.compact-crystal .pokemon-nickname {\n  display: block;\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.compact-crystal .pokemon-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.compact-crystal .pokemon-info span {\n  margin: 0;\n  margin-right: 2px;\n}\n\n.cards .pokemon-info {\n  color: #fff;\n  width: 100%;\n  min-height: 0;\n  background: rgba(0,0,0,0.4);\n  margin: 0 !important;\n  padding: 0;\n  overflow: visible;\n  margin-left: 0;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-radius: 0;\n  background: linear-gradient(transparent, rgba(0,0,0,0.6));\n}\n\n.cards .boxed-pokemon-container {\n  background: rgba(0,0,0,0.4);\n  border: unset;\n  width: auto;\n}\n\n.cards .boxed-pokemon-info {\n  border: unset;\n}\n\n.cards .pokemon-container {\n  background: #222;\n  margin: 0.5rem;\n  width: 15rem;\n  display: flex;\n  height: 15rem;\n  flex-direction: column;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n\n.cards .pokemon-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 15rem;\n  height: 15rem;\n}\n\n.cards .pokemon-image-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.cards .round {\n  margin: 6px auto;\n}\n\n.cards .pokemon-main-info {\n  position: absolute;\n  bottom: 13rem;\n}\n\n.cards .dead-pokemon-container {\n  background: rgba(0,0,0,0.3);\n  border: none;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  margin: 0 0.5rem;\n}\n\n.cards .dead-pokemon-picture.sprites-mode {\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n\n.cards .dead-pokemon-picture {\n  width: 10rem;\n  height: 10rem;\n}\n\n.cards .dead-pokemon-info {\n  position: absolute;\n  bottom: 0;\n  background: linear-gradient(transparent, rgba(0,0,0,0.6));\n  margin: 0;\n  width: 100%;\n}\n\n.cards .move {\n  font-size: 0.7rem;\n}\n\n.cards .pokemon-item {\n  position: absolute;\n  z-index: 11;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 10rem;\n  left: 12rem;\n  background: transparent;\n}\n\n.generations .container {\n  position: relative;\n}\n\n.generations li {\n  background: rgba(0,0,0,0.2);\n  list-style-type: none;\n  border-radius: 0.25rem;\n  padding: 0.25rem;\n  margin: 0.25rem;\n  display: inline-block;\n}\n\n.generations .team-container {\n  width: 36%;\n  justify-content: flex-start;\n  display: inline-block;\n  margin-left: 4px;\n}\n\n.generations .pokemon-container {\n  padding: 0;\n  margin: 2px 0;\n}\n\n.generations .pokemon-info {\n  border-radius: 0;\n  background-size: 322px 10px;\n  background-image: linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px);\n}\n\n.generations .pokemon-image-wrapper {\n  width: 10rem;\n  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n}\n\n.generations .pokemon-image {\n  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  width: 9.5rem;\n}\n\n.generations .boxed-container {\n  width: 200px;\n  height: 420px;\n  display: inline-block;\n  background: #333;\n  border-radius: 0.25rem;\n  vertical-align: top;\n  background-size: 10px 10px;\n  background-image: linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px);\n}\n\n.generations .move {\n  -webkit-clip-path: polygon(9% 0, 100% 1%, 100% 100%, 8% 100%, 0% 50%);\n  clip-path: polygon(9% 0, 100% 1%, 100% 100%, 8% 100%, 0% 50%);\n  border-radius: 0;\n}\n\n.generations .boxed-pokemon-container {\n  width: auto;\n  background: transparent;\n  border: none;\n  margin: 0;\n}\n\n.generations .boxed-pokemon-info {\n  display: none;\n}\n\n.generations .dead-container {\n  width: 710px;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #333;\n  background-size: 10px 10px;\n  background-image: linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px);\n  margin-left: 7px;\n  border-radius: 0.25rem;\n  height: 420px;\n}\n\n.generations .dead-pokemon-container {\n  width: 14rem;\n  height: 3rem;\n}\n\n.generations .pokemon-causeofdeath {\n  font-size: 0.7rem;\n}\n\n.generations .champs-container {\n  border-radius: 0.25rem;\n  width: 916px;\n  height: 212px;\n  position: absolute;\n  bottom: 148px;\n  right: 14px;\n  background-color: #333;\n  background-size: 10px 10px;\n  background-image: linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px);\n  padding: 0.25rem;\n}\n\n.generations .rules-container {\n  position: absolute;\n  height: 200px;\n  width: 975px;\n  bottom: -50px;\n  right: 0;\n}\n\n.hexagon,\n.hexagons .trainer-wrapper img:nth-of-type(1),\n.hexagons .pokemon-image-wrapper,\n.hexagons .pokemon-image-wrapper::after,\n.hexagons .pokemon-image,\n.hexagons .pokemon-item,\n.hexagons .champs-pokemon {\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n}\n\n.hexagons.team-size-6 .pokemon-container:nth-of-type(5),\n.hexagons.team-size-6 .pokemon-container:nth-of-type(6) {\n  transform: translate(-124px, -62px);\n}\n\n.hexagons.team-size-6 .pokemon-container:nth-of-type(4) {\n  transform: translate(-124px, 186px);\n}\n\n.hexagons.team-size-5 .pokemon-container:nth-of-type(4) {\n  transform: translate(-372px, 186px);\n}\n\n.hexagons.team-size-5 .pokemon-container:nth-of-type(5) {\n  transform: translate(-248px, -62px);\n}\n\n.hexagons.team-size-4 .team-container,\n.hexagons.team-size-3 .team-container,\n.hexagons.team-size-2 .team-container,\n.hexagons.team-size-1 .team-container {\n  margin-left: 0;\n}\n\n.hexagons .team-container {\n  margin-left: 8rem;\n  margin-top: 0.5rem;\n}\n\n.hexagons .trainer-wrapper img:nth-of-type(1) {\n  border-radius: 0;\n}\n\n.hexagons .pokemon-container {\n  padding: 0;\n}\n\n.hexagons .pokemon-image-wrapper {\n  background: transparent;\n  border-radius: 0 !important;\n  height: 15.5rem;\n  width: 15.5rem;\n}\n\n.hexagons .pokemon-image-wrapper::after {\n  content: '';\n  height: 15rem;\n  width: 15rem;\n  position: absolute;\n  display: block;\n  top: 0.25rem;\n  z-index: 10;\n  background: linear-gradient(to bottom, rgba(0,0,0,0.75), transparent, rgba(0,0,0,0.7));\n}\n\n.hexagons .pokemon-image {\n  height: 15rem;\n  width: 15rem;\n}\n\n.hexagons .pokemon-item {\n  position: absolute;\n  bottom: 0;\n  left: calc(50% - 1.5rem);\n  border-radius: 0;\n  border: none;\n  background-size: 15rem;\n  background-position: center bottom;\n}\n\n.hexagons .pokemon-nature,\n.hexagons .pokemon-ability {\n  display: inline-block;\n  margin-left: 0.25rem;\n  margin-bottom: 2rem;\n}\n\n.hexagons .pokemon-info {\n  background: transparent;\n  color: #fff;\n  position: absolute;\n  top: 4rem;\n  left: 0;\n  z-index: 10;\n  text-align: center;\n  width: 15.5rem;\n  margin: 0;\n  padding: 0;\n  height: 8rem;\n}\n\n.hexagons .pokemon-info-inner {\n  padding: 0;\n}\n\n.hexagons .pokemon-moves {\n  margin-top: 1rem;\n  display: flex;\n  position: absolute;\n  bottom: 0.25rem;\n  opacity: 0.6;\n  left: 0.25rem;\n  width: calc(100% - 0.5rem);\n}\n\n.hexagons .move {\n  border-radius: 0;\n  margin: 0;\n}\n\n.hexagons .boxed-container,\n.hexagons .champs-container,\n.hexagons .dead-container {\n  display: inline-block;\n  width: 33%;\n  vertical-align: top;\n}\n\n.hexagons .boxed-pokemon-container {\n  background: #333;\n  width: 48%;\n  border: none;\n}\n\n.hexagons .boxed-pokemon-info {\n  border: none;\n}\n\n.hexagons .dead-pokemon-container {\n  height: auto;\n  width: 100%;\n  border: none;\n  -webkit-clip-path: polygon(95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%, 5% 0);\n  clip-path: polygon(95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%, 5% 0);\n}\n\n.hexagons .dead-pokemon-info {\n  margin: 0;\n  width: 100%;\n}\n\n.hexagons .trainer-image {\n  border: none;\n}\n\n.hexagons .champs-pokemon:nth-of-type(n+8),\n.hexagons .champs-pokemon:nth-of-type(n+22),\n.hexagons .champs-pokemon:nth-of-type(n+36),\n.hexagons .champs-pokemon:nth-of-type(n+50),\n.hexagons .champs-pokemon:nth-of-type(n+64),\n.hexagons .champs-pokemon:nth-of-type(n+78),\n.hexagons .champs-pokemon:nth-of-type(n+92),\n.hexagons .champs-pokemon:nth-of-type(n+106) {\n  left: 24px;\n  top: -12px;\n  position: relative;\n}\n\n.hexagons .champs-pokemon:nth-of-type(n+15),\n.hexagons .champs-pokemon:nth-of-type(n+29),\n.hexagons .champs-pokemon:nth-of-type(n+43),\n.hexagons .champs-pokemon:nth-of-type(n+57),\n.hexagons .champs-pokemon:nth-of-type(n+71),\n.hexagons .champs-pokemon:nth-of-type(n+85) {\n  left: 0;\n  top: -23px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Shared/Autocomplete.styl":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/stylus-loader!./src/components/Shared/Autocomplete.styl ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".autocomplete-items {\n  list-style-type: none;\n  background: #111;\n  color: #eee;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  max-height: 200px;\n  position: absolute;\n  margin-top: 2.25rem;\n  padding: 0;\n  overflow: auto;\n  width: 10.5rem;\n  z-index: 11;\n}\n\n.autocomplete-items li {\n  cursor: pointer;\n  padding: 3px;\n}\n\n.autocomplete-items li:hover {\n  background: rgba(238,238,238,0.1);\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./src/assets/img/croagunk.gif":
/*!*************************************!*\
  !*** ./src/assets/img/croagunk.gif ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/croagunk.af493c7d74373acb775cd29be250998f.gif";

/***/ }),

/***/ "./src/components/BoxedPokemon/BoxedPokemon.tsx":
/*!******************************************************!*\
  !*** ./src/components/BoxedPokemon/BoxedPokemon.tsx ***!
  \******************************************************/
/*! exports provided: BoxedPokemonBase, BoxedPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxedPokemonBase", function() { return BoxedPokemonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxedPokemon", function() { return BoxedPokemon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var components_PokemonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PokemonIcon */ "./src/components/PokemonIcon/index.ts");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");





const BoxedPokemonBase = (poke) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'boxed-pokemon-container' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonIcon__WEBPACK_IMPORTED_MODULE_3__["PokemonIcon"], { species: poke.species, id: poke.id, style: { cursor: 'pointer' }, forme: poke.forme, shiny: poke.shiny }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'boxed-pokemon-info' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'boxed-pokemon-name' },
                poke.nickname,
                " ",
                Object(components_Shared__WEBPACK_IMPORTED_MODULE_4__["GenderElement"])(poke.gender),
                ' ',
                poke.level ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    "lv. ",
                    poke.level) : null))));
};
const BoxedPokemon = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, { selectPokemon: actions__WEBPACK_IMPORTED_MODULE_2__["selectPokemon"] })(BoxedPokemonBase);


/***/ }),

/***/ "./src/components/BoxedPokemon/index.ts":
/*!**********************************************!*\
  !*** ./src/components/BoxedPokemon/index.ts ***!
  \**********************************************/
/*! exports provided: BoxedPokemonBase, BoxedPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxedPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxedPokemon */ "./src/components/BoxedPokemon/BoxedPokemon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxedPokemonBase", function() { return _BoxedPokemon__WEBPACK_IMPORTED_MODULE_0__["BoxedPokemonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxedPokemon", function() { return _BoxedPokemon__WEBPACK_IMPORTED_MODULE_0__["BoxedPokemon"]; });




/***/ }),

/***/ "./src/components/ChampsPokemon/ChampsPokemon.tsx":
/*!********************************************************!*\
  !*** ./src/components/ChampsPokemon/ChampsPokemon.tsx ***!
  \********************************************************/
/*! exports provided: champsPokemon, ChampsPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "champsPokemon", function() { return champsPokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampsPokemon", function() { return ChampsPokemon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_PokemonIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/PokemonIcon */ "./src/components/PokemonIcon/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");





const champsPokemon = (options) => emotion__WEBPACK_IMPORTED_MODULE_4__["css"] `
    height: ${options.height};
    width: ${options.width};
    margin: ${options.margin};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${options.background};
    padding: ${options.padding};
    cursor: pointer;
`;
class ChampsPokemon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.getWidth = () => {
            const base = 48;
            return base +
                (this.props.showGender ? 24 : 0) +
                (this.props.showNickname ? 128 : 0) +
                (this.props.showLevel ? 24 : 0);
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(champsPokemon({
                background: Object(utils__WEBPACK_IMPORTED_MODULE_2__["gameOfOriginToColor"])(this.props.gameOfOrigin),
                height: '48px',
                width: this.getWidth(),
                margin: 0,
                padding: 0,
            })) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonIcon__WEBPACK_IMPORTED_MODULE_1__["PokemonIcon"], Object.assign({}, this.props)),
            this.props.showNickname && this.props.nickname,
            this.props.showGender && Object(_Shared__WEBPACK_IMPORTED_MODULE_3__["GenderElement"])(this.props.gender),
            this.props.showLevel && ` Lv ${this.props.level}`));
    }
}
ChampsPokemon.defaultProps = {
    showNickname: false,
    showGender: false,
    showLevel: false,
};


/***/ }),

/***/ "./src/components/ChampsPokemon/index.ts":
/*!***********************************************!*\
  !*** ./src/components/ChampsPokemon/index.ts ***!
  \***********************************************/
/*! exports provided: champsPokemon, ChampsPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChampsPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChampsPokemon */ "./src/components/ChampsPokemon/ChampsPokemon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "champsPokemon", function() { return _ChampsPokemon__WEBPACK_IMPORTED_MODULE_0__["champsPokemon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChampsPokemon", function() { return _ChampsPokemon__WEBPACK_IMPORTED_MODULE_0__["ChampsPokemon"]; });




/***/ }),

/***/ "./src/components/DeadPokemon/DeadPokemon.tsx":
/*!****************************************************!*\
  !*** ./src/components/DeadPokemon/DeadPokemon.tsx ***!
  \****************************************************/
/*! exports provided: DeadPokemonBase, DeadPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadPokemonBase", function() { return DeadPokemonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadPokemon", function() { return DeadPokemon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var components_PokemonIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/PokemonIcon */ "./src/components/PokemonIcon/index.ts");






const spriteStyle = (style) => style.spritesMode && !style.scaleSprites
    ? { backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }
    : { backgroundSize: 'cover', backgroundRepeat: 'no-repeat' };
const DeadPokemonBase = (poke) => {
    const style = poke.style;
    const addForme = (species) => {
        if (poke.forme) {
            if (poke.forme === 'Alolan' || poke.forme === 'Alola') {
                return `alolan-${species}`;
            }
            return species;
        }
        else {
            return species;
        }
    };
    const getClassname = () => poke.champion ? 'dead-pokemon-container champion' : 'dead-pokemon-container';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: getClassname(), "data-league": poke.champion },
        style.template !== 'Generations' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { role: 'presentation', onClick: e => poke.selectPokemon(poke.id), className: `dead-pokemon-picture ${poke.style.spritesMode ? 'sprites-mode' : ''}`, style: Object.assign({ backgroundImage: Object(utils__WEBPACK_IMPORTED_MODULE_3__["getPokemonImage"])({
                    customImage: poke.customImage,
                    forme: poke.forme,
                    species: poke.species,
                    style: poke.style,
                    name: poke.game.name,
                }) }, spriteStyle(style), { filter: style.grayScaleDeadPokemon ? 'grayscale(100%)' : 'none' }) })
            :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { filter: 'grayscale(100%)' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonIcon__WEBPACK_IMPORTED_MODULE_5__["PokemonIconBase"], Object.assign({}, poke))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'dead-pokemon-info' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-d-nickname' },
                poke.nickname,
                " ",
                Object(components_Shared__WEBPACK_IMPORTED_MODULE_2__["GenderElement"])(poke.gender)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-levels' },
                "Levels ",
                poke.metLevel,
                "\u2014",
                poke.level),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-causeofdeath' }, poke.causeOfDeath))));
};
const DeadPokemon = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({ style: state.style, game: state.game }), {
    selectPokemon: actions__WEBPACK_IMPORTED_MODULE_4__["selectPokemon"],
})(DeadPokemonBase);


/***/ }),

/***/ "./src/components/DeadPokemon/index.ts":
/*!*********************************************!*\
  !*** ./src/components/DeadPokemon/index.ts ***!
  \*********************************************/
/*! exports provided: DeadPokemonBase, DeadPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeadPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeadPokemon */ "./src/components/DeadPokemon/DeadPokemon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeadPokemonBase", function() { return _DeadPokemon__WEBPACK_IMPORTED_MODULE_0__["DeadPokemonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeadPokemon", function() { return _DeadPokemon__WEBPACK_IMPORTED_MODULE_0__["DeadPokemon"]; });




/***/ }),

/***/ "./src/components/PokemonIcon/PokemonIcon.tsx":
/*!****************************************************!*\
  !*** ./src/components/PokemonIcon/PokemonIcon.tsx ***!
  \****************************************************/
/*! exports provided: PokemonIconBase, PokemonIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonIconBase", function() { return PokemonIconBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonIcon", function() { return PokemonIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store */ "./src/store/index.ts");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const formatSpeciesName = (species) => {
    if (species == null)
        return 'unknown';
    if (species === 'Nidoran♀')
        return 'nidoran-f';
    if (species === 'Nidoran♂')
        return 'nidoran-m';
    if (species === 'Mr. Mime')
        return 'mr-mime';
    if (species.startsWith('Farfetch'))
        return 'farfetchd';
    if (species === 'Mime Jr.')
        return 'mime-jr';
    if (species === 'Flabébé')
        return 'flabebe';
    if (utils__WEBPACK_IMPORTED_MODULE_2__["listOfPokemon"].indexOf(species) < 0)
        return 'unknown';
    return species.toLowerCase();
};
const getForme = (forme) => {
    return '';
};
const iconSource = {
    beginDrag(props) {
        console.log('drag has begun', props);
        store__WEBPACK_IMPORTED_MODULE_4__["store"].dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_3__["selectPokemon"])(props.id));
        return {
            id: props.id
        };
    },
    isDragging(props, monitor) {
        return {
            id: props.id
        };
    }
};
let PokemonIconBase = class PokemonIconBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        const { connectDragSource, isDragging, id, species, forme, onClick, selectedId, className, isShiny, style } = this.props;
        return connectDragSource(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { role: 'icon', onClick: e => {
                e.preventDefault();
                onClick && onClick();
            }, id: id, style: style, className: `${id === selectedId ? 'pokemon-icon selected' : 'pokemon-icon'}${className || ''} ${isDragging ? 'opacity-medium' : ''}` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: species, src: `icons/pokemon/${isShiny ? 'shiny' : 'regular'}/${formatSpeciesName(species)}.png` })));
    }
};
PokemonIconBase = __decorate([
    Object(react_dnd__WEBPACK_IMPORTED_MODULE_5__["DragSource"])(utils__WEBPACK_IMPORTED_MODULE_2__["dragAndDrop"].ICON, iconSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }))
], PokemonIconBase);

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_3__["selectPokemon"])(ownProps.id));
        },
    };
};
const PokemonIcon = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({ selectedId: state.selectedId }), mapDispatchToProps)(PokemonIconBase);


/***/ }),

/***/ "./src/components/PokemonIcon/index.ts":
/*!*********************************************!*\
  !*** ./src/components/PokemonIcon/index.ts ***!
  \*********************************************/
/*! exports provided: PokemonIconBase, PokemonIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PokemonIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonIcon */ "./src/components/PokemonIcon/PokemonIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonIconBase", function() { return _PokemonIcon__WEBPACK_IMPORTED_MODULE_0__["PokemonIconBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonIcon", function() { return _PokemonIcon__WEBPACK_IMPORTED_MODULE_0__["PokemonIcon"]; });




/***/ }),

/***/ "./src/components/Result/Result.styl":
/*!*******************************************!*\
  !*** ./src/components/Result/Result.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/stylus-loader!./Result.styl */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Result/Result.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/Result/Result.tsx":
/*!******************************************!*\
  !*** ./src/components/Result/Result.tsx ***!
  \******************************************/
/*! exports provided: ResultBase, Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultBase", function() { return ResultBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var components_TeamPokemon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/TeamPokemon */ "./src/components/TeamPokemon/index.ts");
/* harmony import */ var components_DeadPokemon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/DeadPokemon */ "./src/components/DeadPokemon/index.ts");
/* harmony import */ var components_BoxedPokemon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/BoxedPokemon */ "./src/components/BoxedPokemon/index.ts");
/* harmony import */ var components_ChampsPokemon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/ChampsPokemon */ "./src/components/ChampsPokemon/index.ts");
/* harmony import */ var components_TopBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/TopBar */ "./src/components/TopBar/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var _Result_styl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Result.styl */ "./src/components/Result/Result.styl");
/* harmony import */ var _Result_styl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Result_styl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _themes_styl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./themes.styl */ "./src/components/Result/themes.styl");
/* harmony import */ var _themes_styl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_themes_styl__WEBPACK_IMPORTED_MODULE_13__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














class ResultBase extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(props) {
        super(props);
        this.resultRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        this.state = {
            isDownloading: false,
            downloadError: null
        };
    }
    componentWillMount() { }
    renderTeamPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Team')
            .sort(utils__WEBPACK_IMPORTED_MODULE_11__["sortPokes"])
            .map((poke, index) => {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TeamPokemon__WEBPACK_IMPORTED_MODULE_6__["TeamPokemon"], { key: index, pokemon: poke });
        });
    }
    renderErrors() {
        const renderItems = [];
        if (this.props.pokemon.filter(poke => poke.status === 'Team').length > 6) {
            renderItems.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: uuid_v4__WEBPACK_IMPORTED_MODULE_2__(), className: 'pt-callout pt-intent-danger' }, "You have more than 6 Pok\u00E9mon in your party."));
        }
        if (this.state.downloadError) {
            renderItems.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: uuid_v4__WEBPACK_IMPORTED_MODULE_2__(), className: 'pt-callout pt-intent-danger' }, "Image failed to download. Check that you are not using images that link to external sites."));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, renderItems));
    }
    renderBoxedPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Boxed')
            .map((poke, index) => {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_BoxedPokemon__WEBPACK_IMPORTED_MODULE_8__["BoxedPokemon"], Object.assign({ key: index }, poke));
        });
    }
    renderChampsPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Champs')
            .map((poke, index) => {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_ChampsPokemon__WEBPACK_IMPORTED_MODULE_9__["ChampsPokemon"], Object.assign({ key: index }, poke));
        });
    }
    renderDeadPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Dead')
            .map((poke, index) => {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_DeadPokemon__WEBPACK_IMPORTED_MODULE_7__["DeadPokemon"], Object.assign({ key: index }, poke));
        });
    }
    renderBadgesOrTrials() {
        const { name } = this.props.game;
        if (!this.props.style.displayBadges) {
            return null;
        }
        return Object(utils__WEBPACK_IMPORTED_MODULE_11__["getBadges"])(name).map((badge, index) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: this.props.trainer &&
                    this.props.trainer.badges &&
                    this.props.trainer.badges.includes(badge)
                    ? 'obtained'
                    : 'not-obtained', key: badge, alt: badge, src: `./img/${badge}.png` }));
        });
    }
    renderTrainer() {
        const { trainer, game, style } = this.props;
        const bottomTextStyle = { fontSize: '1.1rem', fontWeight: 'bold' };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'trainer-wrapper' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                    color: '#eee',
                    background: style.bgColor,
                    marginRight: '.5rem',
                    width: '100px',
                    borderRadius: '.25rem',
                    textAlign: 'center',
                    textShadow: '0 0 2px #222'
                } }, game.name),
            trainer.image ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: 'trainer-image', src: Object(utils__WEBPACK_IMPORTED_MODULE_11__["mapTrainerImage"])(trainer.image), alt: 'Trainer Image' })) : null,
            trainer.title ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'nuzlocke-title' }, this.props.trainer.title)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'nuzlocke-title' },
                this.props.game.name,
                " Nuzlocke")),
            trainer.name == null || trainer.name === '' ? null : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'name column' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: bottomTextStyle }, trainer.name))),
            trainer.money == null || trainer.money.toString() === '' ? null : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'money column' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "money"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: bottomTextStyle }, trainer.money))),
            trainer.time == null || trainer.time === '' ? null : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'time column' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "time"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: bottomTextStyle }, trainer.time))),
            trainer.id == null || trainer.id === '' ? null : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'id column' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "ID"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: bottomTextStyle }, trainer.id))),
            trainer.totalTime == null || trainer.totalTime === '' ? null : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'time column' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "time"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: bottomTextStyle }, trainer.totalTime))),
            trainer.expShareStatus == null || trainer.expShareStatus === '' ? null : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'expShareStatus column' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Exp Share"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: bottomTextStyle }, (trainer.expShareStatus || '').toUpperCase()))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'badge-wrapper' }, this.renderBadgesOrTrials())));
    }
    toImage() {
        return __awaiter(this, void 0, void 0, function* () {
            const resultNode = this.resultRef.current;
            this.setState({ isDownloading: true });
            try {
                const dataUrl = yield dom_to_image__WEBPACK_IMPORTED_MODULE_4__["toPng"](resultNode);
                const link = document.createElement('a');
                link.download = `nuzlocke-${uuid_v4__WEBPACK_IMPORTED_MODULE_2__()}.png`;
                link.href = dataUrl;
                link.click();
                this.setState({ downloadError: null, isDownloading: false });
            }
            catch (e) {
                this.setState({
                    downloadError: 'Failed to download. This is likely due to your image containing an image resource that does not allow Cross-Origin',
                    isDownloading: false,
                });
            }
        });
    }
    render() {
        const { style, box, trainer, pokemon } = this.props;
        const getNumberOf = (status, pokemon) => pokemon.filter(v => v.hasOwnProperty('id')).filter(poke => poke.status === status).length;
        const numberOfTeam = getNumberOf('Team', pokemon);
        const numberOfDead = getNumberOf('Dead', pokemon);
        const numberOfBoxed = getNumberOf('Boxed', pokemon);
        const numberOfChamps = getNumberOf('Champs', pokemon);
        const bgColor = style ? style.bgColor : '#383840';
        const topHeaderColor = style ? style.topHeaderColor : '#333333';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], { autoHide: true, autoHideTimeout: 1000, autoHideDuration: 200 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TopBar__WEBPACK_IMPORTED_MODULE_10__["TopBar"], { onClickDownload: e => this.toImage() }, this.renderErrors()),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: this.resultRef, className: `result container ${(style.template &&
                    style.template.toLowerCase().replace(/\s/g, '-')) ||
                    ''} region-${Object(utils__WEBPACK_IMPORTED_MODULE_11__["getGameRegion"])(this.props.game.name)} team-size-${numberOfTeam}`, style: {
                    margin: this.state.isDownloading ? '0' : '3rem auto',
                    backgroundColor: bgColor,
                    backgroundImage: `url(${style.backgroundImage})`,
                    backgroundRepeat: style.tileBackground ? 'repeat' : 'no-repeat',
                    height: style.resultHeight + 'px',
                    marginBottom: '.5rem',
                    width: style.resultWidth + 'px',
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'trainer-container', style: { backgroundColor: topHeaderColor } }, this.renderTrainer()),
                trainer && trainer.notes ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'result-notes' }, trainer.notes)) : null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'team-container' }, this.renderTeamPokemon()),
                numberOfBoxed > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'boxed-container' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, box[1].name),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginLeft: '1rem' } }, this.renderBoxedPokemon()))) : null,
                numberOfDead > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'dead-container' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, box[2].name),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start',
                            margin: '.5rem',
                        } }, this.renderDeadPokemon()))) : null,
                numberOfChamps > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'champs-container' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, box[3].name),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                            margin: '.5rem',
                        } }, this.renderChampsPokemon()))) : null,
                style.displayRules ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'rules-container' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Rules"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ol", null, this.props.rules.map((rule, index) => {
                        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: index }, rule);
                    })))) : null)));
    }
}
const Result = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({
    pokemon: state.pokemon,
    game: state.game,
    trainer: state.trainer,
    style: state.style,
    box: state.box,
    rules: state.rules,
}), {
    selectPokemon: actions__WEBPACK_IMPORTED_MODULE_5__["selectPokemon"],
})(ResultBase);


/***/ }),

/***/ "./src/components/Result/index.ts":
/*!****************************************!*\
  !*** ./src/components/Result/index.ts ***!
  \****************************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Result */ "./src/components/Result/Result.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return _Result__WEBPACK_IMPORTED_MODULE_0__["Result"]; });




/***/ }),

/***/ "./src/components/Result/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Result/styles.ts ***!
  \*****************************************/
/*! exports provided: topBar, topBar_dark, heading, heading_dark, container, h3, callout_dark, resultNotes, genderColorFemale, genderColorMale, pokemonContainer, trainerContainer, trainerImage, trainerWrapper, nuzlockeTitle, badgeWrapper, move, pokemonNickname, pokemonShiny, square, round, pokemonImage, isSprite, pokemonItem, minimal, minimalPokemonInfo, pokemonInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topBar", function() { return topBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topBar_dark", function() { return topBar_dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading", function() { return heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading_dark", function() { return heading_dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h3", function() { return h3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callout_dark", function() { return callout_dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultNotes", function() { return resultNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genderColorFemale", function() { return genderColorFemale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genderColorMale", function() { return genderColorMale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemonContainer", function() { return pokemonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainerContainer", function() { return trainerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainerImage", function() { return trainerImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainerWrapper", function() { return trainerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nuzlockeTitle", function() { return nuzlockeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeWrapper", function() { return badgeWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemonNickname", function() { return pokemonNickname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemonShiny", function() { return pokemonShiny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemonImage", function() { return pokemonImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSprite", function() { return isSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemonItem", function() { return pokemonItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimal", function() { return minimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimalPokemonInfo", function() { return minimalPokemonInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemonInfo", function() { return pokemonInfo; });
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");

const topBar = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.33);
    color: #111;
    display: flex;
    font-size: 1.15rem;
    justify-content: center;
    padding: .5rem;
`;
const topBar_dark = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background: #222;
    color: #fff !important;
    button {
        color: #fff !important;
    }
`;
const heading = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    align-items: center;
    color: #111;
    display: flex;
    justify-content: center;
    letter-spacing: 4px;
    margin: 0.5rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
`;
const heading_dark = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    color: #eee;
`;
const container = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    border: 1px solid #111;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: .5rem;
    position: relative;
    width: 100%;
`;
const h3 = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    color: #eee;
    letter-spacing: 4px;
    margin: .5rem;
    text-align: center;
    text-transform: uppercase;
`;
const callout_dark = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    color: white;
`;
const resultNotes = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    font-size: 1.25rem;
    font-weight: bold;
    margin: .5rem;
    text-align: center;
`;
const genderColorFemale = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    color: pink;
`;
const genderColorMale = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    color: lightblue;
`;
const pokemonContainer = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    display: inline-block;
    padding: 1rem;
    position: relative;
`;
const trainerContainer = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background-position: top left, bottom left;
    background-size: cover, 50% auto;
    background: #333;
    border-bottom: 1px solid #000;
    color: #eee;
    padding: .25rem;
    width: 100%;
`;
const trainerImage = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
`;
const trainerWrapper = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    align-content: center;
    align-items: center;
    display: flex;
`;
const nuzlockeTitle = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    display: inline-flex;
    font-size: 1.5rem;
    font-weight: light;
`;
const badgeWrapper = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: 1rem;
    width: 216px;

    img {
        height: 1.5rem;
    }
`;
const move = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
`;
const pokemonNickname = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    font-size: 1.5rem;
`;
const pokemonShiny = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
`;
const square = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    border-radius: 50%;
    display: inline-block;
    height: 8rem;
    width: 8rem;
    padding: .25rem;
    position: relative;
    z-index: 10;
`;
const round = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    display: inline-block;
    height: 8rem;
    width: 8rem;
    padding: .25rem;
    position: relative;
    z-index: 10;
`;
const pokemonImage = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
`;
const isSprite = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background-size: auto;
    background-repeat: no-repeat;
`;
const pokemonItem = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
`;
const minimal = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    min-width: 17rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const minimalPokemonInfo = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background: transparent;
    display: flex;
    padding: 0;
    height: auto;
    width: auto;
    margin-left: 0;
`;
const pokemonInfo = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
`;


/***/ }),

/***/ "./src/components/Result/themes.styl":
/*!*******************************************!*\
  !*** ./src/components/Result/themes.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/stylus-loader!./themes.styl */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Result/themes.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/Shared/Autocomplete.styl":
/*!*************************************************!*\
  !*** ./src/components/Shared/Autocomplete.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/stylus-loader!./Autocomplete.styl */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Shared/Autocomplete.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/Shared/Autocomplete.tsx":
/*!************************************************!*\
  !*** ./src/components/Shared/Autocomplete.tsx ***!
  \************************************************/
/*! exports provided: Autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Autocomplete_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Autocomplete.styl */ "./src/components/Shared/Autocomplete.styl");
/* harmony import */ var _Autocomplete_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Autocomplete_styl__WEBPACK_IMPORTED_MODULE_1__);


class Autocomplete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.updateItems = (e) => {
            this.setState({
                currentValue: e.target.value,
                visibleItems: this.props.items.filter(i => i.startsWith(e.target.value)),
            });
            this.props.onChange(e);
        };
        this.openList = e => this.setState({ isOpen: true });
        this.closeList = e => {
            this.setState({ isOpen: false });
            this.setState({ visibleItems: [] });
        };
        this.handleKeyDown = e => {
            if (e.which === 13) {
                if (this.state.visibleItems.includes(this.state.currentValue)) {
                    this.closeList(e);
                }
                else {
                    this.selectItem(this.state.visibleItems[0]);
                }
            }
            if (e.which === 27 || e.which === 13 || e.which === 9) {
                this.closeList(e);
            }
            if (e.which === 38 || e.which === 40) {
                this.handleMovement(e);
                this.setState({ isOpen: true });
            }
        };
        this.handleMovement = e => {
            const currentIndex = this.state.visibleItems.indexOf(this.state.currentValue);
            if (e.which === 38) {
                this.selectItem(this.state.visibleItems[currentIndex - 1]);
            }
            else {
                this.selectItem(this.state.visibleItems[currentIndex + 1]);
            }
        };
        this.state = {
            visibleItems: [],
            currentValue: '',
            isOpen: false,
        };
    }
    selectItem(v) {
        console.log(v);
        this.setState({ currentValue: v, isOpen: false });
        this.props.onChange({
            target: {
                value: v,
            },
        });
    }
    componentWillMount() {
        this.setState({ currentValue: this.props.value });
    }
    componentWillUnmount() {
        this.setState({
            isOpen: false,
            visibleItems: [],
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ currentValue: nextProps.value });
    }
    renderItems() {
        return this.state.visibleItems.map((v, i) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: i, role: 'item', onClick: e => this.selectItem(v), style: v === this.state.currentValue ? { color: 'lightblue' } : {} }, v));
        });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'current-pokemon-input-wrapper autocomplete' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, this.props.label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { onKeyDown: this.handleKeyDown, onFocus: this.openList, onBlur: this.closeList, placeholder: this.props.placeholder, name: this.props.name, type: 'text', onChange: this.updateItems, value: this.state.currentValue }),
            this.state.isOpen ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: 'autocomplete-items has-nice-scrollbars' }, this.renderItems())) : null));
    }
}


/***/ }),

/***/ "./src/components/Shared/ColorEdit.tsx":
/*!*********************************************!*\
  !*** ./src/components/Shared/ColorEdit.tsx ***!
  \*********************************************/
/*! exports provided: ColorEditBase, ColorEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorEditBase", function() { return ColorEditBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorEdit", function() { return ColorEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_StyleEditor_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/StyleEditor/styles */ "./src/components/StyleEditor/styles.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");





const ColorEditBase = ({ value, onChange, name, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(components_StyleEditor_styles__WEBPACK_IMPORTED_MODULE_1__["colorEditWrapper"]) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: name, onChange: onChange, className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(components_StyleEditor_styles__WEBPACK_IMPORTED_MODULE_1__["colorInput"]), type: 'color', value: value }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { style: { border: 'none' }, onChange: onChange, type: 'text', className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(Object(utils__WEBPACK_IMPORTED_MODULE_4__["classWithDarkTheme"])(components_StyleEditor_styles__WEBPACK_IMPORTED_MODULE_1__, 'colorTextInput', style.editorDarkMode)), name: name, value: value })));
};
const ColorEdit = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])((state) => ({ style: state.style }), null)(ColorEditBase);


/***/ }),

/***/ "./src/components/Shared/ErrorBoundary.tsx":
/*!*************************************************!*\
  !*** ./src/components/Shared/ErrorBoundary.tsx ***!
  \*************************************************/
/*! exports provided: ErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }
    render() {
        if (this.state.hasError) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'error-boundary' }, this.props.errorMessage || 'Something went wrong.'));
        }
        return this.props.children;
    }
}


/***/ }),

/***/ "./src/components/Shared/GenderElement.tsx":
/*!*************************************************!*\
  !*** ./src/components/Shared/GenderElement.tsx ***!
  \*************************************************/
/*! exports provided: Gender, GenderElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderElement", function() { return GenderElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Gender {
    static isMale(gender) {
        if (gender === 'm' || gender === 'Male')
            return true;
        return false;
    }
    static isFemale(gender) {
        if (gender === 'f' || gender === 'Female')
            return true;
        return false;
    }
    static isGenderless(gender) {
        if (gender === 'genderless' || gender == null)
            return true;
        return false;
    }
}
const GenderElement = (gender) => {
    if (gender === 'Male' || gender === 'm') {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pokemon-gender gender-color-male' }, "\u2642");
    }
    else if (gender === 'Female' || gender === 'f') {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pokemon-gender gender-color-female' }, "\u2640");
    }
    else {
        return null;
    }
};


/***/ }),

/***/ "./src/components/Shared/PokemonByFilter.tsx":
/*!***************************************************!*\
  !*** ./src/components/Shared/PokemonByFilter.tsx ***!
  \***************************************************/
/*! exports provided: PokemonByFilterBase, PokemonByFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonByFilterBase", function() { return PokemonByFilterBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonByFilter", function() { return PokemonByFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var components_PokemonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/PokemonIcon */ "./src/components/PokemonIcon/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");






const Grid = (({ team, filterFunction }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, team
        .filter(filterFunction)
        .sort(utils__WEBPACK_IMPORTED_MODULE_3__["sortPokes"])
        .map((poke, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { content: poke.nickname || '', position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Position"].TOP },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonIcon__WEBPACK_IMPORTED_MODULE_2__["PokemonIcon"], { id: poke.id, species: poke.species, forme: poke.forme, isShiny: poke.shiny }))))));
});
class PokemonByFilterBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            team: [],
        };
    }
    componentWillMount() {
        this.setState({ team: this.props.team });
    }
    componentWillReceiveProps(nextProps, prevProps) {
        this.setState({ team: nextProps.team });
    }
    getFilterFunction(filter) {
        if (filter != null)
            return poke => poke.status === filter;
        if (filter == null)
            return poke => true;
        return poke => true;
    }
    render() {
        const { team, filter } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Grid, { filterFunction: this.getFilterFunction(filter), team: this.state.team });
    }
}
const PokemonByFilter = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, {
    editPokemon: actions__WEBPACK_IMPORTED_MODULE_5__["editPokemon"]
})(PokemonByFilterBase);


/***/ }),

/***/ "./src/components/Shared/ThemeSelect.tsx":
/*!***********************************************!*\
  !*** ./src/components/Shared/ThemeSelect.tsx ***!
  \***********************************************/
/*! exports provided: ThemeSelectBase, ThemeSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSelectBase", function() { return ThemeSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSelect", function() { return ThemeSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");





const ThemeSelectBase = ({ theme, onChange }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Classes"].SELECT },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { value: theme, onChange: e => onChange({ template: e.target.value }) }, utils__WEBPACK_IMPORTED_MODULE_3__["listOfThemes"].map(o => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: o }, o))));
const ThemeSelect = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, { onChange: actions__WEBPACK_IMPORTED_MODULE_4__["editStyle"] })(ThemeSelectBase);


/***/ }),

/***/ "./src/components/Shared/index.ts":
/*!****************************************!*\
  !*** ./src/components/Shared/index.ts ***!
  \****************************************/
/*! exports provided: Autocomplete, ErrorBoundary, Gender, GenderElement, PokemonByFilterBase, PokemonByFilter, ColorEditBase, ColorEdit, ThemeSelectBase, ThemeSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocomplete */ "./src/components/Shared/Autocomplete.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_0__["Autocomplete"]; });

/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/components/Shared/ErrorBoundary.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__["ErrorBoundary"]; });

/* harmony import */ var _GenderElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenderElement */ "./src/components/Shared/GenderElement.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return _GenderElement__WEBPACK_IMPORTED_MODULE_2__["Gender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenderElement", function() { return _GenderElement__WEBPACK_IMPORTED_MODULE_2__["GenderElement"]; });

/* harmony import */ var _PokemonByFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PokemonByFilter */ "./src/components/Shared/PokemonByFilter.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonByFilterBase", function() { return _PokemonByFilter__WEBPACK_IMPORTED_MODULE_3__["PokemonByFilterBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonByFilter", function() { return _PokemonByFilter__WEBPACK_IMPORTED_MODULE_3__["PokemonByFilter"]; });

/* harmony import */ var _ColorEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorEdit */ "./src/components/Shared/ColorEdit.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorEditBase", function() { return _ColorEdit__WEBPACK_IMPORTED_MODULE_4__["ColorEditBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorEdit", function() { return _ColorEdit__WEBPACK_IMPORTED_MODULE_4__["ColorEdit"]; });

/* harmony import */ var _ThemeSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeSelect */ "./src/components/Shared/ThemeSelect.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSelectBase", function() { return _ThemeSelect__WEBPACK_IMPORTED_MODULE_5__["ThemeSelectBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSelect", function() { return _ThemeSelect__WEBPACK_IMPORTED_MODULE_5__["ThemeSelect"]; });









/***/ }),

/***/ "./src/components/StyleEditor/styles.ts":
/*!**********************************************!*\
  !*** ./src/components/StyleEditor/styles.ts ***!
  \**********************************************/
/*! exports provided: colorTextInput_dark, colorInput, colorEditWrapper, styleEdit, styleEdit_dark, styleEditLabel, styleEditSpan, styleEditPtControl, radioGroup, dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorTextInput_dark", function() { return colorTextInput_dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorInput", function() { return colorInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorEditWrapper", function() { return colorEditWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleEdit", function() { return styleEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleEdit_dark", function() { return styleEdit_dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleEditLabel", function() { return styleEditLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleEditSpan", function() { return styleEditSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleEditPtControl", function() { return styleEditPtControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioGroup", function() { return radioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return dialog; });
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");

const colorTextInput_dark = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background: rgba(16, 22, 26, 0.3);
    color: #eee;
`;
const colorInput = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
`;
const colorEditWrapper = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    align-items: center;
    display: flex;
    input[type='text'] {
        padding-left: .5rem;
    }
`;
const styleEdit = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
`;
const styleEdit_dark = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    border-bottom: 1px solid #111;
`;
const styleEditLabel = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
`;
const styleEditSpan = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `

`;
const styleEditPtControl = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    margin-bottom: 0;
`;
const radioGroup = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
`;
const dialog = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    padding-bottom: 0 !important;
    width: 60% !important;
`;


/***/ }),

/***/ "./src/components/TeamPokemon/TeamPokemon.tsx":
/*!****************************************************!*\
  !*** ./src/components/TeamPokemon/TeamPokemon.tsx ***!
  \****************************************************/
/*! exports provided: TeamPokemonInfo, TeamPokemonBaseMinimal, Moves, TeamPokemonBase, TeamPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonInfo", function() { return TeamPokemonInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonBaseMinimal", function() { return TeamPokemonBaseMinimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moves", function() { return Moves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonBase", function() { return TeamPokemonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPokemon", function() { return TeamPokemon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");





const getMetLocationString = ({ poke, oldMetLocationFormat }) => {
    const determinePreposition = () => poke.met && poke.met.toLocaleLowerCase().startsWith('route') ? 'on' : 'in';
    const met = poke.met || '';
    const metLevel = poke.metLevel || '';
    if (poke.met) {
        if (oldMetLocationFormat) {
            return `Met ${determinePreposition()} ${met}, from lv.${metLevel}`;
        }
        else {
            return `Met Location: ${met} at lv.${metLevel}`;
        }
    }
    else {
        return null;
    }
};
class TeamPokemonInfo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { pokemon, style } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-info' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-info-inner' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-main-info' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { margin: '0.25rem 0 0' }, className: 'pokemon-nickname' }, pokemon.nickname),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pokemon-name' }, pokemon.species),
                    Object(components_Shared__WEBPACK_IMPORTED_MODULE_3__["GenderElement"])(pokemon.gender),
                    pokemon.level ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pokemon-level' },
                        "lv. ",
                        pokemon.level)) : null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-met' }, getMetLocationString({ poke: pokemon, oldMetLocationFormat: style.oldMetLocationFormat })),
                pokemon.nature && pokemon.nature !== 'None' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-nature' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, pokemon.nature),
                    " nature")) : null,
                pokemon.ability ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-ability' }, pokemon.ability) : null),
            style.showPokemonMoves ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Moves, { generation: this.props.generation, moves: pokemon.moves, movesPosition: style.movesPosition })
                : null));
    }
}
class TeamPokemonBaseMinimal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { pokemon } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-container minimal' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: Object.assign({ backgroundImage: Object(utils__WEBPACK_IMPORTED_MODULE_2__["getPokemonImage"])({
                        customImage: pokemon.customImage,
                        forme: pokemon.forme,
                        species: pokemon.species,
                        style: this.props.style,
                        name: this.props.game.name,
                    }) }, this.props.spriteStyle), className: `pokemon-image ${(pokemon.species || 'missingno').toLowerCase()} ${this.props.style.imageStyle === 'round' ? 'round' : 'square'}` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-info' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pokemon-info-inner' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pokemon-nickname' }, pokemon.nickname),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pokemon-name' }, pokemon.species),
                    pokemon.level ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pokemon-level' },
                        "lv. ",
                        pokemon.level)) : null))));
    }
}
class Moves extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    generateMoves(moves) {
        return moves && moves.map((move, index) => {
            move = move.trim();
            const type = Object(utils__WEBPACK_IMPORTED_MODULE_2__["handleMovesGenerationsExceptions"])({ move: move, generation: this.props.generation, originalType: Object(utils__WEBPACK_IMPORTED_MODULE_2__["getMoveType"])(move) });
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: index, className: `move ${type}-type ${move.length >= 12 ? 'long-text-move' : ''}` }, move));
        });
    }
    render() {
        if (this.props.moves == null)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `pokemon-moves ${this.props.movesPosition}` }, this.generateMoves(this.props.moves)));
    }
}
class TeamPokemonBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        const { pokemon, style, game, selectPokemon } = this.props;
        const poke = pokemon;
        const getFirstType = poke.types ? poke.types[0] : 'Normal';
        const spriteStyle = this.props.style.spritesMode && !this.props.style.scaleSprites
            ? { backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }
            : { backgroundSize: 'cover', backgroundRepeat: 'no-repeat' };
        const addProp = item => {
            const propName = `data-${item.toLowerCase()}`;
            if (item === 'type')
                return { [propName]: poke[item].join(' ') };
            if (poke[item] == null || poke[item] === '')
                return {};
            return { [propName]: poke[item].toString() };
        };
        const dataKeys = [
            'id',
            'position',
            'species',
            'nickname',
            'status',
            'gender',
            'level',
            'metLevel',
            'nature',
            'ability',
            'item',
            'types',
            'forme',
            'moves',
            'causeOfDeath',
            'shiny',
            'champion',
            'num',
            'wonderTradedFor',
            'mvp',
            'customImage',
        ].sort();
        const data = dataKeys.reduce((prev, curr) => {
            return Object.assign({}, prev, addProp(curr));
        }, {});
        if (this.props.style.minimalTeamLayout) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TeamPokemonBaseMinimal, { selectPokemon: selectPokemon, style: style, game: game, spriteStyle: spriteStyle, pokemon: poke });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({ className: 'pokemon-container' }, data),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { role: 'presentation', onClick: e => this.props.selectPokemon(poke.id), className: `${this.props.style.imageStyle} pokemon-image-wrapper`, style: {
                    cursor: 'pointer',
                    background: this.props.style.teamPokemonBorder
                        ? Object(utils__WEBPACK_IMPORTED_MODULE_2__["getBackgroundGradient"])(poke.types != null ? poke.types[0] : '', poke.types != null ? poke.types[1] : '')
                        : 'transparent',
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: Object.assign({ backgroundImage: Object(utils__WEBPACK_IMPORTED_MODULE_2__["getPokemonImage"])({
                            customImage: poke.customImage,
                            forme: poke.forme,
                            species: poke.species,
                            style: this.props.style,
                            name: this.props.game.name,
                        }) }, spriteStyle), className: `pokemon-image ${(poke.species || 'missingno').toLowerCase()} ${this.props.style.imageStyle === 'round' ? 'round' : 'square'}` })),
            poke.item == null || poke.item === '' ? null : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `pokemon-item ${this.props.style.itemStyle}`, style: {
                    borderColor: Object(utils__WEBPACK_IMPORTED_MODULE_2__["typeToColor"])(getFirstType) || 'transparent',
                    backgroundImage: style.template === 'Hexagons' ? Object(utils__WEBPACK_IMPORTED_MODULE_2__["getBackgroundGradient"])(poke.types != null ? poke.types[0] : '', poke.types != null ? poke.types[1] : '') : '',
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: poke.item, src: `icons/hold-item/${(poke.item || '')
                        .toLowerCase()
                        .replace(/\s/g, '-')}.png` }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TeamPokemonInfo, { generation: Object(utils__WEBPACK_IMPORTED_MODULE_2__["getGameGeneration"])(this.props.game.name), style: style, pokemon: pokemon })));
    }
}
const TeamPokemon = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({
    style: state.style,
    game: state.game,
}), {
    selectPokemon: actions__WEBPACK_IMPORTED_MODULE_4__["selectPokemon"],
})(TeamPokemonBase);


/***/ }),

/***/ "./src/components/TeamPokemon/index.ts":
/*!*********************************************!*\
  !*** ./src/components/TeamPokemon/index.ts ***!
  \*********************************************/
/*! exports provided: TeamPokemonInfo, TeamPokemonBaseMinimal, Moves, TeamPokemonBase, TeamPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamPokemon */ "./src/components/TeamPokemon/TeamPokemon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonInfo", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_0__["TeamPokemonInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonBaseMinimal", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_0__["TeamPokemonBaseMinimal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Moves", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_0__["Moves"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonBase", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_0__["TeamPokemonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamPokemon", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_0__["TeamPokemon"]; });




/***/ }),

/***/ "./src/components/TopBar/TopBar.tsx":
/*!******************************************!*\
  !*** ./src/components/TopBar/TopBar.tsx ***!
  \******************************************/
/*! exports provided: TopBarBase, TopBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarBase", function() { return TopBarBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return TopBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var components_Result_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Result/styles */ "./src/components/Result/styles.ts");
/* harmony import */ var package__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! package */ "./src/package/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");









const croagunk = __webpack_require__(/*! assets/img/croagunk.gif */ "./src/assets/img/croagunk.gif");
const darkModeStyle = (mode) => mode ? { color: '#fff' } : {};
class TopBarBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: !this.props.sawRelease[package__WEBPACK_IMPORTED_MODULE_7__["pkg"].version]
        };
        this.closeDialog = e => {
            this.props.seeRelease(package__WEBPACK_IMPORTED_MODULE_7__["pkg"].version);
            this.toggleDialog(null);
        };
        this.toggleDialog = _ => this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_8__["cx"])(Object(utils__WEBPACK_IMPORTED_MODULE_4__["classWithDarkTheme"])(components_Result_styles__WEBPACK_IMPORTED_MODULE_6__, 'topBar', this.props.style.editorDarkMode)) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { style: darkModeStyle(this.props.style.editorDarkMode), onClick: _ => this.props.changeEditorSize(!this.props.editor.minimized), className: 'pt-minimal', icon: this.props.editor.minimized ? 'minimize' : 'maximize' },
                this.props.editor.minimized ? 'Maximize' : 'Minimize',
                " Editor"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { style: darkModeStyle(this.props.style.editorDarkMode), onClick: this.props.onClickDownload, className: 'pt-minimal', icon: 'download' }, "Download Image"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { style: darkModeStyle(this.props.style.editorDarkMode), onClick: _ => { this.props.editStyle({ editorDarkMode: !this.props.style.editorDarkMode }); }, className: 'pt-minimal', icon: this.props.style.editorDarkMode ? 'flash' : 'moon' },
                this.props.style.editorDarkMode ? 'Light' : 'Dark',
                " Mode"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { style: darkModeStyle(this.props.style.editorDarkMode), onClick: this.toggleDialog, className: 'pt-minimal', icon: 'star' }, package__WEBPACK_IMPORTED_MODULE_7__["pkg"].version),
            this.props.children,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], { isOpen: this.state.isOpen, onClose: this.closeDialog, icon: 'document', title: `Release Notes ${package__WEBPACK_IMPORTED_MODULE_7__["pkg"].version}`, className: `release-dialog ${this.props.style.editorDarkMode ? 'pt-dark' : 'pt-light'}` },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-dialog-body' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'release-notes-wrapper' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_8__["cx"])(Object(utils__WEBPACK_IMPORTED_MODULE_4__["classWithDarkTheme"])(components_Result_styles__WEBPACK_IMPORTED_MODULE_6__, 'heading', this.props.style.editorDarkMode)) },
                            package__WEBPACK_IMPORTED_MODULE_7__["pkg"].version,
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { display: 'inline' }, alt: 'Croagunk', src: croagunk })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_markdown__WEBPACK_IMPORTED_MODULE_3__, { className: 'release-notes', source: Object(utils__WEBPACK_IMPORTED_MODULE_4__["generateReleaseNotes"])(package__WEBPACK_IMPORTED_MODULE_7__["pkg"].version) }))))));
    }
}
const TopBar = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])((state) => ({
    editor: state.editor,
    style: state.style,
    sawRelease: state.sawRelease,
}), {
    changeEditorSize: actions__WEBPACK_IMPORTED_MODULE_5__["changeEditorSize"],
    editStyle: actions__WEBPACK_IMPORTED_MODULE_5__["editStyle"],
    seeRelease: actions__WEBPACK_IMPORTED_MODULE_5__["seeRelease"]
})(TopBarBase);


/***/ }),

/***/ "./src/components/TopBar/index.ts":
/*!****************************************!*\
  !*** ./src/components/TopBar/index.ts ***!
  \****************************************/
/*! exports provided: TopBarBase, TopBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar */ "./src/components/TopBar/TopBar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopBarBase", function() { return _TopBar__WEBPACK_IMPORTED_MODULE_0__["TopBarBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return _TopBar__WEBPACK_IMPORTED_MODULE_0__["TopBar"]; });




/***/ }),

/***/ "./src/img/alola-champion-ribbon.png":
/*!*******************************************!*\
  !*** ./src/img/alola-champion-ribbon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/alola-champion-ribbon.f7bcc3e9d37d73af5cda68702c6c87f9.png";

/***/ }),

/***/ "./src/package/index.ts":
/*!******************************!*\
  !*** ./src/package/index.ts ***!
  \******************************/
/*! exports provided: pkg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pkg", function() { return pkg; });
const pkg = __webpack_require__(/*! ../../package.json */ "./package.json");


/***/ })

}]);
//# sourceMappingURL=1.chunk.js.map