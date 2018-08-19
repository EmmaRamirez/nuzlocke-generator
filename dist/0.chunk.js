(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Editor/editor.styl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/stylus-loader!./src/components/Editor/editor.styl ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".editor {\n  border: 1px solid #eee;\n  height: 100vh;\n  overflow-y: scroll;\n  padding: 0.25rem;\n  width: 90%;\n}\n\n.editor.pt-dark {\n  border: 1px solid #000;\n}\n\n.editor:hover {\n  box-shadow: 0 0 4px #eee;\n}\n\n.pt-select select {\n  width: 100%;\n}\n\n.game-editor,\n.trainer-editor,\n.pokemon-editor,\n.style-editor,\n.hotkeys-editor {\n  padding: 0.3rem;\n}\n\n.base-editor {\n  border: 1px solid #fafafa;\n  border-top: 0 solid transparent !important;\n}\n\n.pt-dark .base-editor {\n  border: 1px solid #111;\n}\n\n.trainer-info-field {\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  justify-content: space-between;\n}\n\n.trainer-info-field input {\n  background: inherit;\n  border: 0 solid transparent;\n  border-left: 1px solid #eee;\n  border-radius: 2px;\n  color: inherit;\n  padding: 0.25rem;\n}\n\n.pt-dark .trainer-info-field {\n  border-bottom: 1px solid #394b59;\n}\n\n.pt-dark .trainer-info-field input {\n  border-left: 1px solid #394b59;\n}\n\n.box-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.box-wrapper .tab {\n  margin: 2px;\n}\n\n.pokemon-tab {\n  display: flex;\n  justify-content: center;\n}\n\n.current-pokemon {\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  margin: 0.25rem;\n  padding: 0.25rem;\n}\n\n.pt-dark .current-pokemon {\n  border: 1px solid #000;\n}\n\n.current-pokemon-header {\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.current-pokemon-image {\n  padding: 0.25rem;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  height: 3rem;\n}\n\n.pt-dark .current-pokemon-image {\n  border: none;\n  background: #394b59;\n}\n\n.current-pokemon-input-wrapper {\n  display: inline-flex;\n  flex-direction: column;\n  padding: 0.25rem;\n  width: 11rem;\n}\n\n.current-pokemon-input-wrapper label {\n  font-size: 10px;\n}\n\n.current-pokemon-input-wrapper input {\n  border: 1px solid #eee;\n  padding: 0.25rem;\n}\n\n.current-pokemon-checkbox {\n  display: inline-flex;\n  flex-flow: row-reverse;\n  justify-content: flex-end;\n  width: 5rem;\n  transform: translateY(1rem);\n}\n\n.pt-dark .current-pokemon-input-wrapper input {\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  background: rgba(16,22,26,0.3);\n  border: none;\n  color: #f5f8fa;\n}\n\n.pt-input-ghost {\n  border: 0 !important;\n  width: 0 !important;\n  flex: auto;\n}\n\n.small-input {\n  width: 5rem;\n}\n\n.current-pokemon-gender {\n  width: 6rem;\n}\n\n.current-pokemon-status {\n  width: 5.5rem;\n}\n\n.current-pokemon-moves {\n  width: 25rem;\n}\n\n.current-pokemon-nature {\n  width: 6.5rem;\n}\n\n.double-select-wrapper {\n  display: flex;\n}\n\n.status-wrapper {\n  display: inline-flex;\n  flex-flow: column;\n  padding: 0.25rem;\n  width: 30%;\n  vertical-align: top;\n}\n\n.status-wrapper span {\n  font-size: 10px;\n  width: 100%;\n}\n\ninput[name='metLevel'] {\n  color: #ccc;\n}\n\n.pt-dialog.wide-dialog {\n  width: 90% !important;\n}\n\n.has-nice-scrollbars::-webkit-scrollbar {\n  width: 5px;\n  height: 8px;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.has-nice-scrollbars::-webkit-scrollbar-thumb {\n  background: #aaa;\n}\n\n.no-pokemon-selected {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n}\n\n.no-pokemon-selected p {\n  margin: 0.25rem;\n  padding-left: 0.25rem;\n}\n\n.box {\n  border-radius: 0.25rem;\n  padding: 0.25rem;\n  margin: 0.25rem;\n  display: flex;\n  align-items: center;\n  background-position: center;\n  flex-wrap: wrap;\n}\n\n.box .pokemon-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n}\n\n.box .pokemon-icon img,\n.box .pokemon-icon {\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: 500ms all;\n}\n\n.box .pokemon-icon.selected {\n  border-radius: 50%;\n  background: rgba(0,0,0,0.33);\n  transition: 500ms all;\n}\n\n.pt-dark .box {\n  box-shadow: 0 0 0.25rem #000;\n}\n\n.Team-box {\n  background: #15db72;\n  background-image: url(" + __webpack_require__(/*! ../../assets/img/team-box-body.png */ "./src/assets/img/team-box-body.png") + ");\n}\n\n.Boxed-box {\n  background: #1184d6;\n  background-image: url(" + __webpack_require__(/*! ../../assets/img/boxed-box.png */ "./src/assets/img/boxed-box.png") + ");\n}\n\n.Dead-box {\n  background: #ce1831;\n  background-image: url(" + __webpack_require__(/*! ../../assets/img/dead-box.png */ "./src/assets/img/dead-box.png") + ");\n}\n\n.Champs-box {\n  background: #e5db52;\n  background-image: url(" + __webpack_require__(/*! ../../assets/img/champs-box.png */ "./src/assets/img/champs-box.png") + ");\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/RulesEditor/RulesEditor.styl":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/stylus-loader!./src/components/RulesEditor/RulesEditor.styl ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".rules-editor-dialog {\n  padding-bottom: 0 !important;\n}\n\n.rule-no,\n.rule-delete {\n  padding: 0.25rem;\n  text-align: center;\n  height: 100%;\n  width: 1.5rem;\n}\n\n.rule-delete {\n  cursor: pointer;\n}\n\n.rules-list-item {\n  background: rgba(0,0,0,0.05);\n  border-radius: 0.25rem;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin: 0.25rem 0;\n  min-height: 2rem;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./src/assets/img/boxed-box.png":
/*!**************************************!*\
  !*** ./src/assets/img/boxed-box.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/boxed-box.cd59f18c0496973abf5e7859142f6887.png";

/***/ }),

/***/ "./src/assets/img/champs-box.png":
/*!***************************************!*\
  !*** ./src/assets/img/champs-box.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/champs-box.4b5f8d9323fac44ffeec8c9a5fdc226e.png";

/***/ }),

/***/ "./src/assets/img/dead-box.png":
/*!*************************************!*\
  !*** ./src/assets/img/dead-box.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dead-box.d249339336e54c5916984cf820ba72c2.png";

/***/ }),

/***/ "./src/assets/img/team-box-body.png":
/*!******************************************!*\
  !*** ./src/assets/img/team-box-body.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/team-box-body.1766a13c7001bc8720223980986c4595.png";

/***/ }),

/***/ "./src/assets/img/team-box.png":
/*!*************************************!*\
  !*** ./src/assets/img/team-box.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/team-box.9b9c52b663641bd69180e2a0778540c8.png";

/***/ }),

/***/ "./src/assets/img/trash.png":
/*!**********************************!*\
  !*** ./src/assets/img/trash.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/trash.e0a3773985ba99fdf8779fc305c3af9f.png";

/***/ }),

/***/ "./src/assets/pokeball.png":
/*!*********************************!*\
  !*** ./src/assets/pokeball.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/pokeball.853392fa4d1cb36496424bd57501bdff.png";

/***/ }),

/***/ "./src/components/AddPokemonButton/AddPokemonButton.tsx":
/*!**************************************************************!*\
  !*** ./src/components/AddPokemonButton/AddPokemonButton.tsx ***!
  \**************************************************************/
/*! exports provided: AddPokemonButtonBase, AddPokemonButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPokemonButtonBase", function() { return AddPokemonButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPokemonButton", function() { return AddPokemonButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");



const AddPokemonButtonBase = ({ onClick }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'pt-intent-success pt-button add-new-pokemon', onClick: e => {
        e.preventDefault();
        onClick && onClick();
    } },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pt-icon-add' }),
    " \u00A0Add New Pokemon"));
const AddPokemonButton = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_2__["addPokemon"])(ownProps.defaultPokemon));
        dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_2__["selectPokemon"])(ownProps.defaultPokemon.id));
    },
}))(AddPokemonButtonBase);


/***/ }),

/***/ "./src/components/AddPokemonButton/index.ts":
/*!**************************************************!*\
  !*** ./src/components/AddPokemonButton/index.ts ***!
  \**************************************************/
/*! exports provided: AddPokemonButtonBase, AddPokemonButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPokemonButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPokemonButton */ "./src/components/AddPokemonButton/AddPokemonButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPokemonButtonBase", function() { return _AddPokemonButton__WEBPACK_IMPORTED_MODULE_0__["AddPokemonButtonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPokemonButton", function() { return _AddPokemonButton__WEBPACK_IMPORTED_MODULE_0__["AddPokemonButton"]; });




/***/ }),

/***/ "./src/components/Admin/Admin.tsx":
/*!****************************************!*\
  !*** ./src/components/Admin/Admin.tsx ***!
  \****************************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Admin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Admin");
    }
}


/***/ }),

/***/ "./src/components/Admin/index.ts":
/*!***************************************!*\
  !*** ./src/components/Admin/index.ts ***!
  \***************************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin */ "./src/components/Admin/Admin.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return _Admin__WEBPACK_IMPORTED_MODULE_0__["Admin"]; });




/***/ }),

/***/ "./src/components/BaseEditor/BaseEditor.tsx":
/*!**************************************************!*\
  !*** ./src/components/BaseEditor/BaseEditor.tsx ***!
  \**************************************************/
/*! exports provided: BaseEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEditor", function() { return BaseEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const baseEditorStyle = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};
class BaseEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.toggleEditor = e => {
            this.setState({ isOpen: !this.state.isOpen });
        };
        this.state = {
            isOpen: true,
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `${this.props.name.toLowerCase()}-editor base-editor` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { title: `${this.state.isOpen ? 'Collapse' : 'Open'} this editor.`, style: baseEditorStyle, onClick: this.toggleEditor },
                this.props.name,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: `pt-icon pt-icon-caret-${this.state.isOpen ? 'up' : 'down'}` })),
            this.state.isOpen ? this.props.children : null));
    }
}


/***/ }),

/***/ "./src/components/BaseEditor/index.ts":
/*!********************************************!*\
  !*** ./src/components/BaseEditor/index.ts ***!
  \********************************************/
/*! exports provided: BaseEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseEditor */ "./src/components/BaseEditor/BaseEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEditor", function() { return _BaseEditor__WEBPACK_IMPORTED_MODULE_0__["BaseEditor"]; });




/***/ }),

/***/ "./src/components/DataEditor/DataEditor.tsx":
/*!**************************************************!*\
  !*** ./src/components/DataEditor/DataEditor.tsx ***!
  \**************************************************/
/*! exports provided: DataEditorBase, DataEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataEditorBase", function() { return DataEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataEditor", function() { return DataEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var components_PokemonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PokemonIcon */ "./src/components/PokemonIcon/index.ts");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store */ "./src/store/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");








const trash = __webpack_require__(/*! assets/img/trash.png */ "./src/assets/img/trash.png");
const hexEncode = function (str) {
    let hex, i;
    let result = '';
    for (i = 0; i < str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        result += ('000' + hex).slice(-4);
    }
    return result;
};
class DataEditorBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.confirmImport = e => {
            this.props.replaceState(JSON.parse(this.state.data));
        };
        this.importState = () => {
            this.setState({ mode: 'import' });
            this.setState({ isOpen: true });
        };
        this.exportState = state => {
            this.setState({
                mode: 'export',
            });
            delete state.router;
            delete state._persist;
            this.setState({ isOpen: true });
            this.setState({
                href: `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(state))}`,
            });
        };
        this.uploadFile = e => {
            const file = this.fileInput.files[0];
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.addEventListener('load', function () {
                const u = new Uint8Array(this.result);
                const a = new Array(u.length);
                let i = u.length;
                while (i--) {
                    a[i] = (u[i] < 16 ? '0' : '') + u[i].toString(16);
                }
                console.log(a);
            });
        };
        this.clearAllData = e => {
            store__WEBPACK_IMPORTED_MODULE_6__["persistor"].purge();
            window.location.reload();
        };
        this.toggleClearingData = e => this.setState({ isClearAllDataOpen: !this.state.isClearAllDataOpen });
        this.state = {
            isOpen: false,
            isClearAllDataOpen: false,
            mode: 'export',
            data: '',
            href: '',
        };
    }
    renderTeam(data) {
        let d;
        try {
            d = JSON.parse(data);
        }
        catch (_a) {
            d = { pokemon: false };
        }
        console.log(d);
        if (d.pokemon) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'team-icons', style: {
                    background: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '.25rem',
                    margin: '.25rem',
                    marginTop: '.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                } }, d.pokemon.filter(p => p.status === 'Team').map(p => {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonIcon__WEBPACK_IMPORTED_MODULE_3__["PokemonIconBase"], Object.assign({ key: p.id }, p));
            })));
        }
        else {
            return null;
        }
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { padding: '1rem' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { onConfirm: this.clearAllData, isOpen: this.state.isClearAllDataOpen, onCancel: this.toggleClearingData, cancelButtonText: 'Nevermind', confirmButtonText: 'Delete Anyway', className: this.props.state.style.editorDarkMode ? 'pt-dark' : 'pt-light', style: { maxWidth: '600px' }, intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Intent"].DANGER },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: 'flex' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: '10rem' }, src: trash, alt: 'Sad Trubbish' }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { style: { fontSize: '1.2rem', padding: '1rem' } }, "This will permanently delete all your local storage data, with no way to retrieve it. Are you sure you want to do this?"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], { isOpen: this.state.isOpen, onClose: e => this.setState({ isOpen: false }), title: this.state.mode === 'export'
                    ? 'Exported Nuzlocke Save'
                    : 'Import Nuzlocke Save', icon: 'floppy-disk' }, this.state.mode === 'export' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Callout"], null, "Copy this and paste it somewhere safe!"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: '40vh', overflow: 'auto' }, className: 'pt-dialog-body has-nice-scrollbars' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { suppressContentEditableWarning: true, contentEditable: true }, JSON.stringify(this.props.state, null, 2))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-dialog-footer' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: this.state.href, download: `nuzlocke_${uuid_v4__WEBPACK_IMPORTED_MODULE_5__()}.json` },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: 'download', intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Intent"].PRIMARY }, "Download"))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-dialog-body has-nice-scrollbars' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["TextArea"], { className: 'custom-css-input pt-fill', onChange: (e) => this.setState({ data: e.target.value }), placeholder: 'Paste nuzlocke.json contents here', value: this.state.data, large: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_4__["ErrorBoundary"], null, this.renderTeam(this.state.data))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-dialog-footer' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Intent"].PRIMARY, onClick: this.confirmImport, text: 'Upload', icon: 'upload' }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: 'tick', intent: this.state.data === '' ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Intent"].NONE : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Intent"].SUCCESS, onClick: this.confirmImport, disabled: this.state.data === '' ? true : false, text: 'Confirm' })))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: e => this.importState(), icon: 'import', className: 'pt-intent-primary' }, "Import Data"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: e => this.exportState(this.props.state), icon: 'export' }, "Export Data")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: 'trash', onClick: this.toggleClearingData, intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Intent"].DANGER, className: 'pt-minimal' }, "Clear All Data")));
    }
}
const DataEditor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({ state: state }), {
    replaceState: actions__WEBPACK_IMPORTED_MODULE_7__["replaceState"],
})(DataEditorBase);


/***/ }),

/***/ "./src/components/DataEditor/index.ts":
/*!********************************************!*\
  !*** ./src/components/DataEditor/index.ts ***!
  \********************************************/
/*! exports provided: DataEditorBase, DataEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataEditor */ "./src/components/DataEditor/DataEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataEditorBase", function() { return _DataEditor__WEBPACK_IMPORTED_MODULE_0__["DataEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataEditor", function() { return _DataEditor__WEBPACK_IMPORTED_MODULE_0__["DataEditor"]; });




/***/ }),

/***/ "./src/components/DeletePokemonButton/DeletePokemonButton.tsx":
/*!********************************************************************!*\
  !*** ./src/components/DeletePokemonButton/DeletePokemonButton.tsx ***!
  \********************************************************************/
/*! exports provided: DeletePokemonButtonContainer, DeletePokemonButtonBase, DeletePokemonButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButtonContainer", function() { return DeletePokemonButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButtonBase", function() { return DeletePokemonButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButton", function() { return DeletePokemonButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");






const DeletePokemonButtonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_2__["default"])('div') `
    color: red;
    cursor: pointer;
`;
class DeletePokemonButtonBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            dialogOn: false,
        };
        this.toggleDialog = this.toggleDialog.bind(this);
    }
    toggleDialog() {
        this.setState({
            dialogOn: !this.state.dialogOn,
        });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DeletePokemonButtonContainer, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { icon: 'trash', isOpen: this.state.dialogOn && this.props.confirmation, onCancel: this.toggleDialog, onConfirm: e => this.props.deletePokemon && this.props.deletePokemon(this.props.id), confirmButtonText: 'Delete Pokemon', cancelButtonText: 'Cancel', intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].DANGER },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "This will delete the currently selected Pokemon. Are you sure you want to do that?"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'pt-control pt-checkbox .modifier' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { onChange: (event) => this.props.modifyDeletionConfirmation && this.props.modifyDeletionConfirmation(!event.target.checked), type: 'checkbox' }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pt-control-indicator' }),
                    "Don't Ask Me For Confirmation Again")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Popover"], { interactionKind: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["PopoverInteractionKind"].HOVER, position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Position"].TOP, content: `Delete Pok${utils__WEBPACK_IMPORTED_MODULE_5__["accentedE"]}mon` },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], { role: 'button', onClick: e => {
                        if (this.props.confirmation) {
                            this.toggleDialog();
                        }
                        else {
                            this.props.deletePokemon && this.props.deletePokemon(this.props.id);
                        }
                    }, icon: 'trash', title: 'Delete Pokemon' }))));
    }
}
const DeletePokemonButton = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])((state) => ({
    confirmation: state.confirmation,
}), {
    deletePokemon: actions__WEBPACK_IMPORTED_MODULE_3__["deletePokemon"]
})(DeletePokemonButtonBase);


/***/ }),

/***/ "./src/components/DeletePokemonButton/index.ts":
/*!*****************************************************!*\
  !*** ./src/components/DeletePokemonButton/index.ts ***!
  \*****************************************************/
/*! exports provided: DeletePokemonButtonContainer, DeletePokemonButtonBase, DeletePokemonButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeletePokemonButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeletePokemonButton */ "./src/components/DeletePokemonButton/DeletePokemonButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButtonContainer", function() { return _DeletePokemonButton__WEBPACK_IMPORTED_MODULE_0__["DeletePokemonButtonContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButtonBase", function() { return _DeletePokemonButton__WEBPACK_IMPORTED_MODULE_0__["DeletePokemonButtonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButton", function() { return _DeletePokemonButton__WEBPACK_IMPORTED_MODULE_0__["DeletePokemonButton"]; });




/***/ }),

/***/ "./src/components/Editor/Editor.tsx":
/*!******************************************!*\
  !*** ./src/components/Editor/Editor.tsx ***!
  \******************************************/
/*! exports provided: EditorBase, Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorBase", function() { return EditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_GameEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/GameEditor */ "./src/components/GameEditor/index.ts");
/* harmony import */ var components_PokemonEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/PokemonEditor */ "./src/components/PokemonEditor/index.ts");
/* harmony import */ var components_StyleEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/StyleEditor */ "./src/components/StyleEditor/index.ts");
/* harmony import */ var components_TrainerEditor_TrainerEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/TrainerEditor/TrainerEditor */ "./src/components/TrainerEditor/TrainerEditor.tsx");
/* harmony import */ var components_DataEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/DataEditor */ "./src/components/DataEditor/index.ts");
/* harmony import */ var components_HotkeysEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/HotkeysEditor */ "./src/components/HotkeysEditor/index.ts");
/* harmony import */ var _editor_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.styl */ "./src/components/Editor/editor.styl");
/* harmony import */ var _editor_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editor_styl__WEBPACK_IMPORTED_MODULE_9__);










class EditorBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        const minimized = this.props.editor.minimized;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], { autoHide: true, autoHideTimeout: 1000, autoHideDuration: 200, className: `editor ${this.props.style.editorDarkMode ? 'pt-dark' : ''}`, style: {
                width: minimized ? '0%' : '33%',
                marginLeft: minimized ? '-30rem' : '0',
                minWidth: '30rem',
                maxWidth: '40rem',
                height: '100vh',
                padding: '.25rem',
                background: this.props.style.editorDarkMode ? '#222' : '#fff',
            } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_GameEditor__WEBPACK_IMPORTED_MODULE_3__["GameEditor"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_TrainerEditor__WEBPACK_IMPORTED_MODULE_6__["TrainerEditor"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_4__["PokemonEditor"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_StyleEditor__WEBPACK_IMPORTED_MODULE_5__["StyleEditor"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_HotkeysEditor__WEBPACK_IMPORTED_MODULE_8__["HotkeysEditor"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_DataEditor__WEBPACK_IMPORTED_MODULE_7__["DataEditor"], null)));
    }
}
const Editor = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])((state) => ({
    editor: state.editor,
    style: state.style,
}), null)(EditorBase);


/***/ }),

/***/ "./src/components/Editor/editor.styl":
/*!*******************************************!*\
  !*** ./src/components/Editor/editor.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/stylus-loader!./editor.styl */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/Editor/editor.styl");
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

/***/ "./src/components/Editor/index.ts":
/*!****************************************!*\
  !*** ./src/components/Editor/index.ts ***!
  \****************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./src/components/Editor/Editor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });




/***/ }),

/***/ "./src/components/GameEditor/GameEditor.tsx":
/*!**************************************************!*\
  !*** ./src/components/GameEditor/GameEditor.tsx ***!
  \**************************************************/
/*! exports provided: GameEditorBase, GameEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEditorBase", function() { return GameEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEditor", function() { return GameEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var components_RulesEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/RulesEditor */ "./src/components/RulesEditor/index.ts");






const gameSubEditorStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '.25rem',
};
class GameEditorBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onInput = e => {
            this.props.editGame({ name: e.target.value });
            this.props.editStyle({
                bgColor: Object(utils__WEBPACK_IMPORTED_MODULE_3__["gameOfOriginToColor"])(e.target.value),
            });
        };
        this.toggleDialog = _ => this.setState({ isOpen: !this.state.isOpen });
        this.state = {
            isOpen: false,
        };
    }
    render() {
        const { game } = this.props;
        const RED = components_RulesEditor__WEBPACK_IMPORTED_MODULE_5__["RulesEditorDialog"];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RED, { isOpen: this.state.isOpen, onClose: this.toggleDialog }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'game-editor' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { style: { display: 'flex', alignContent: 'flex-end' } }, "Game"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: gameSubEditorStyle },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-select' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { onChange: this.onInput, value: game.name }, utils__WEBPACK_IMPORTED_MODULE_3__["listOfGames"].map(game => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: game }, game)))),
                    utils__WEBPACK_IMPORTED_MODULE_3__["FEATURES"].multipleNuzlockes ?
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Popover"], { minimal: true, content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Menu"], null), position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Position"].BOTTOM },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { icon: 'exchange' }, "Switch Nuzlockes"))
                        : null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { onClick: this.toggleDialog, icon: 'list', intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Intent"].PRIMARY }, "Modify Rules")))));
    }
}
const GameEditor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({ game: state.game, editor: state.editor }), {
    editGame: actions__WEBPACK_IMPORTED_MODULE_2__["editGame"],
    editStyle: actions__WEBPACK_IMPORTED_MODULE_2__["editStyle"],
    changeEditorSize: actions__WEBPACK_IMPORTED_MODULE_2__["changeEditorSize"],
})(GameEditorBase);


/***/ }),

/***/ "./src/components/GameEditor/index.ts":
/*!********************************************!*\
  !*** ./src/components/GameEditor/index.ts ***!
  \********************************************/
/*! exports provided: GameEditorBase, GameEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameEditor */ "./src/components/GameEditor/GameEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameEditorBase", function() { return _GameEditor__WEBPACK_IMPORTED_MODULE_0__["GameEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameEditor", function() { return _GameEditor__WEBPACK_IMPORTED_MODULE_0__["GameEditor"]; });




/***/ }),

/***/ "./src/components/HotkeysEditor/HotkeysEditor.tsx":
/*!********************************************************!*\
  !*** ./src/components/HotkeysEditor/HotkeysEditor.tsx ***!
  \********************************************************/
/*! exports provided: HotkeysEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotkeysEditor", function() { return HotkeysEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_BaseEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/BaseEditor */ "./src/components/BaseEditor/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");



class HotkeysEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_BaseEditor__WEBPACK_IMPORTED_MODULE_1__["BaseEditor"], { name: 'Hotkeys' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { style: { listStyleType: 'none', paddingLeft: '1rem' }, className: 'hotkey-list' }, utils__WEBPACK_IMPORTED_MODULE_2__["hotkeyList"].map(item => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("kbd", { style: { margin: '4px' }, className: 'pt-code' }, item.key),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { margin: '4px' } }, item.comment)))))));
    }
}


/***/ }),

/***/ "./src/components/HotkeysEditor/index.ts":
/*!***********************************************!*\
  !*** ./src/components/HotkeysEditor/index.ts ***!
  \***********************************************/
/*! exports provided: HotkeysEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HotkeysEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HotkeysEditor */ "./src/components/HotkeysEditor/HotkeysEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotkeysEditor", function() { return _HotkeysEditor__WEBPACK_IMPORTED_MODULE_0__["HotkeysEditor"]; });




/***/ }),

/***/ "./src/components/PokemonEditor/Box.tsx":
/*!**********************************************!*\
  !*** ./src/components/PokemonEditor/Box.tsx ***!
  \**********************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store */ "./src/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const boxSource = {
    drop(props, monitor, component) {
        const newStatus = props.name;
        store__WEBPACK_IMPORTED_MODULE_5__["store"].dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_2__["editPokemon"])({ status: newStatus }, monitor.getItem().id));
        return {};
    },
    hover(props, monitor) {
        return { isHovering: monitor.isOver({ shallow: true }) };
    }
};
let Box = class Box extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        const { pokemon, name, boxId, filterString, connectDropTarget, canDrop } = this.props;
        const filter = filterString === 'All' ? undefined : filterString;
        return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `box ${name}-box` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: {
                    alignItems: 'center',
                    background: canDrop ? 'black' : 'rgba(33, 33, 33, 0.33)',
                    borderRadius: '.25rem',
                    color: '#eee',
                    display: 'inline-flex',
                    minHeight: '2rem',
                    justifyContent: 'center',
                    margin: '.25rem',
                    padding: '.25rem',
                    textAlign: 'center',
                    width: '4rem',
                } }, name),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_3__["PokemonByFilter"], { team: pokemon, filter: filter })));
    }
};
Box = __decorate([
    Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__["DropTarget"])(utils__WEBPACK_IMPORTED_MODULE_1__["dragAndDrop"].ICON, boxSource, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop()
    }))
], Box);



/***/ }),

/***/ "./src/components/PokemonEditor/CurrentPokemonEdit.tsx":
/*!*************************************************************!*\
  !*** ./src/components/PokemonEditor/CurrentPokemonEdit.tsx ***!
  \*************************************************************/
/*! exports provided: CopyPokemonButton, CurrentPokemonEditBase, CurrentPokemonEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyPokemonButton", function() { return CopyPokemonButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonEditBase", function() { return CurrentPokemonEditBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonEdit", function() { return CurrentPokemonEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/PokemonEditor */ "./src/components/PokemonEditor/index.ts");
/* harmony import */ var components_DeletePokemonButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/DeletePokemonButton */ "./src/components/DeletePokemonButton/index.ts");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_PokemonIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/PokemonIcon */ "./src/components/PokemonIcon/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./src/components/PokemonEditor/styles.ts");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");














const pokeball = __webpack_require__(/*! assets/pokeball.png */ "./src/assets/pokeball.png");
const CopyPokemonButton = ({ onClick }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__["Popover"], { interactionKind: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__["PopoverInteractionKind"].HOVER, position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__["Position"].TOP, content: `Copy Pok${utils__WEBPACK_IMPORTED_MODULE_1__["accentedE"]}mon` },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__["Icon"], { title: 'Copy Pokemon', icon: 'duplicate', className: Object(emotion__WEBPACK_IMPORTED_MODULE_8__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["copyButton"]), onClick: onClick })));
};
class CurrentPokemonEditBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.copyPokemon = e => {
            const currentPokemon = this.getCurrentPokemon();
            if (currentPokemon) {
                const newPokemon = Object.assign({}, currentPokemon, { id: uuid_v4__WEBPACK_IMPORTED_MODULE_10__(), position: currentPokemon.position + 1 });
                this.props.addPokemon(newPokemon);
            }
        };
        this.expandView = (e) => {
            this.setState({
                expandedView: !this.state.expandedView,
            });
        };
        this.state = {
            selectedId: '5',
            box: [],
            expandedView: false,
        };
    }
    componentWillMount() {
        this.setState({
            selectedId: this.props.selectedId,
            box: this.props.box
        });
    }
    componentWillReceiveProps(nextProps, prevProps) {
        if (nextProps.selectedId !== prevProps.selectedId) {
            this.setState({ selectedId: nextProps.selectedId });
        }
    }
    moreInputs(currentPokemon) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'expanded-edit' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Forme', inputName: 'forme', placeholder: '', value: currentPokemon.forme, type: 'select', options: ['Normal', ...Object(utils__WEBPACK_IMPORTED_MODULE_1__["getAdditionalFormes"])(currentPokemon.species)] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Types', inputName: 'types', value: currentPokemon.types, type: 'double-select', options: [
                    'Bug',
                    'Dark',
                    'Dragon',
                    'Electric',
                    'Fairy',
                    'Fighting',
                    'Fire',
                    'Flying',
                    'Ghost',
                    'Grass',
                    'Ground',
                    'Ice',
                    'Normal',
                    'Poison',
                    'Psychic',
                    'Rock',
                    'Steel',
                    'Water',
                    'None',
                ] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Shiny', inputName: 'shiny', value: currentPokemon.shiny, type: 'checkbox' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Champion', inputName: 'champion', value: currentPokemon.champion, type: 'checkbox' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Custom Image', inputName: 'customImage', placeholder: 'http://..', value: currentPokemon.customImage, type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Custom Icon', inputName: 'customIcon', placeholder: 'http://..', value: currentPokemon.customIcon, type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Cause of Death', inputName: 'causeOfDeath', value: currentPokemon.causeOfDeath, type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_4__["Autocomplete"], { items: utils__WEBPACK_IMPORTED_MODULE_1__["listOfItems"], name: 'item', label: 'Item', placeholder: 'Item', value: currentPokemon.item || '', onChange: e => {
                    const edit = {
                        item: e.target.value,
                    };
                    this.props.editPokemon(edit, this.state.selectedId);
                    this.props.selectPokemon(this.state.selectedId);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Wonder Traded', inputName: 'wonderTradedFor', value: currentPokemon.wonderTradedFor, type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Position', inputName: 'position', disabled: true, value: currentPokemon.position, type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Game of Origin', inputName: 'gameOfOrigin', value: currentPokemon.gameOfOrigin, type: 'select', options: utils__WEBPACK_IMPORTED_MODULE_1__["listOfGames"] })));
    }
    getCurrentPokemon() {
        return this.props.pokemon.find((v) => v.id === this.state.selectedId);
    }
    render() {
        const currentPokemon = this.getCurrentPokemon();
        if (currentPokemon == null) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'current-pokemon no-pokemon-selected' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: 'pokeball', src: pokeball }),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Select a Pok\u00E9mon to edit")));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'current-pokemon' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'current-pokemon-header' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonIcon__WEBPACK_IMPORTED_MODULE_7__["PokemonIconBase"], { className: 'current-pokemon-image', id: currentPokemon.id, species: currentPokemon.species, forme: currentPokemon.forme, isShiny: currentPokemon.shiny, selectedId: null, onClick: () => { } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Status', inputName: 'status', value: currentPokemon.status, type: 'select', options: this.state.box.map(n => n.name) }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_8__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["iconBar"]) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CopyPokemonButton, { onClick: this.copyPokemon }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_DeletePokemonButton__WEBPACK_IMPORTED_MODULE_3__["DeletePokemonButton"], { id: this.state.selectedId }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_4__["Autocomplete"], { items: utils__WEBPACK_IMPORTED_MODULE_1__["listOfPokemon"], name: 'species', label: 'Species', placeholder: 'Missing No.', value: currentPokemon.species, onChange: e => {
                    const edit = {
                        species: e.target.value,
                    };
                    this.props.editPokemon(edit, this.state.selectedId);
                    this.props.editPokemon({ types: Object(utils__WEBPACK_IMPORTED_MODULE_1__["matchSpeciesToTypes"])(e.target.value) }, this.state.selectedId);
                    this.props.selectPokemon(this.state.selectedId);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Nickname', inputName: 'nickname', value: currentPokemon.nickname, placeholder: 'Fluffy', type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Level', inputName: 'level', placeholder: '5', value: currentPokemon.level, type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_4__["Autocomplete"], { items: utils__WEBPACK_IMPORTED_MODULE_1__["listOfLocations"], name: 'met', label: 'Met Location', placeholder: 'Pallet Town', value: currentPokemon.met || '', onChange: e => {
                    const edit = {
                        met: e.target.value,
                    };
                    this.props.editPokemon(edit, this.state.selectedId);
                    this.props.selectPokemon(this.state.selectedId);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Met Level', inputName: 'metLevel', placeholder: '5', value: currentPokemon.metLevel, type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Gender', inputName: 'gender', placeholder: '', value: currentPokemon.gender, type: 'select', options: ['Male', 'Female', 'Neutral'] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Nature', inputName: 'nature', placeholder: 'Sassy', value: currentPokemon.nature, type: 'select', options: [
                    'Adamant',
                    'Bashful',
                    'Bold',
                    'Brave',
                    'Calm',
                    'Careful',
                    'Docile',
                    'Gentle',
                    'Hardy',
                    'Hasty',
                    'Impish',
                    'Jolly',
                    'Lax',
                    'Lonely',
                    'Mild',
                    'Modest',
                    'Naive',
                    'Naughty',
                    'Quiet',
                    'Quirky',
                    'Rash',
                    'Relaxed',
                    'Sassy',
                    'Serious',
                    'Timid',
                    'None',
                ] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_4__["Autocomplete"], { items: utils__WEBPACK_IMPORTED_MODULE_1__["listOfAbilities"], name: 'ability', label: 'Ability', placeholder: '', value: currentPokemon.ability || '', onChange: e => {
                    const edit = {
                        ability: e.target.value,
                    };
                    this.props.editPokemon(edit, this.state.selectedId);
                    this.props.selectPokemon(this.state.selectedId);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_PokemonEditor__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonInput"], { labelName: 'Moves', inputName: 'moves', placeholder: '', value: currentPokemon.moves, type: 'moves' }),
            this.state.expandedView ? this.moreInputs(currentPokemon) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: this.expandView, "data-expandedview": this.state.expandedView.toString(), className: 'pt-button pt-intent-primary pt-fill current-pokemon-more' },
                this.state.expandedView ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    "Less ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pt-icon-symbol-triangle-up' }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    "More ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pt-icon-symbol-triangle-down' }))),
                ' ')));
    }
}
const CurrentPokemonEdit = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])((state) => ({
    box: state.box,
    selectedId: state.selectedId,
    pokemon: state.pokemon
}), {
    selectPokemon: actions__WEBPACK_IMPORTED_MODULE_5__["selectPokemon"],
    editPokemon: actions__WEBPACK_IMPORTED_MODULE_5__["editPokemon"],
    addPokemon: actions__WEBPACK_IMPORTED_MODULE_5__["addPokemon"],
})(CurrentPokemonEditBase);


/***/ }),

/***/ "./src/components/PokemonEditor/CurrentPokemonInput.tsx":
/*!**************************************************************!*\
  !*** ./src/components/PokemonEditor/CurrentPokemonInput.tsx ***!
  \**************************************************************/
/*! exports provided: CurrentPokemonInputBase, CurrentPokemonInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonInputBase", function() { return CurrentPokemonInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonInput", function() { return CurrentPokemonInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");






class CurrentPokemonInputBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onChange = (e, inputName, position, value) => {
            let edit;
            if (inputName === 'types' && position != null) {
                edit = {
                    [inputName]: value,
                };
                edit[inputName][position] = e.target.value;
            }
            else if (inputName === 'species') {
                edit = {
                    [inputName]: e.target.value,
                    types: Object(utils__WEBPACK_IMPORTED_MODULE_2__["matchSpeciesToTypes"])(e.target.value),
                };
            }
            else if (inputName === 'moves') {
                edit = {
                    [inputName]: e.target.value,
                };
            }
            else if (inputName === 'champion' || inputName === 'shiny') {
                edit = {
                    [inputName]: e.target.checked,
                };
            }
            else {
                edit = {
                    [inputName]: e.target.value,
                };
            }
            this.props.editPokemon && this.props.editPokemon(edit, this.props.selectedId);
            this.props.selectPokemon && this.props.selectPokemon(this.props.selectedId);
        };
    }
    getInput({ labelName, disabled, inputName, type, value, placeholder, options }) {
        value = value == null ? '' : value;
        if (type === 'moves') {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_4__["ErrorBoundary"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["TagInput"], { tagProps: (v, i) => ({
                        className: `${Object(utils__WEBPACK_IMPORTED_MODULE_2__["getMoveType"])((v || '').toString().trim())}-type`,
                    }), onChange: values => {
                        console.log(values);
                        const edit = {
                            moves: values,
                        };
                        this.props.editPokemon &&
                            this.props.editPokemon(edit, this.props.selectedId);
                        this.props.selectPokemon &&
                            this.props.selectPokemon(this.props.selectedId);
                    }, values: value || [] })));
        }
        if (type === 'text') {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { onChange: event => this.onChange(event, inputName), type: type, name: inputName, value: value, placeholder: placeholder, disabled: disabled || false }));
        }
        if (type === 'select') {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-select' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { onChange: event => this.onChange(event, inputName), value: value, name: inputName }, options
                    ? options.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: index }, item))
                    : null)));
        }
        if (type === 'checkbox') {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'pt-control pt-checkbox' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { onChange: e => this.onChange(e, inputName), checked: value, type: type, name: inputName }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pt-control-indicator' })));
        }
        if (type === 'double-select') {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'double-select-wrapper' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-select' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { onChange: e => this.onChange(e, inputName, 0, value), value: value[0] == null ? 'None' : value[0], name: inputName }, options
                        ? options.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: item, key: index }, item)))
                        : null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "\u00A0"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-select' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { onChange: e => this.onChange(e, inputName, 1, value), value: value[1] == null ? 'None' : value[1], name: inputName }, options
                        ? options.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: item, key: index }, item)))
                        : null))));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "No input type provided.");
    }
    render() {
        const { labelName, inputName, type, value, placeholder, options } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: `current-pokemon-input-wrapper current-pokemon-${type} current-pokemon-${inputName}` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, labelName),
            this.getInput({ labelName, inputName, type, value, placeholder, options })));
    }
}
const CurrentPokemonInput = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({
    selectedId: state.selectedId,
}), { editPokemon: actions__WEBPACK_IMPORTED_MODULE_3__["editPokemon"], selectPokemon: actions__WEBPACK_IMPORTED_MODULE_3__["selectPokemon"] })(CurrentPokemonInputBase);


/***/ }),

/***/ "./src/components/PokemonEditor/MassEditor.tsx":
/*!*****************************************************!*\
  !*** ./src/components/PokemonEditor/MassEditor.tsx ***!
  \*****************************************************/
/*! exports provided: SortableColumnMenu, MassEditorBase, MassEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableColumnMenu", function() { return SortableColumnMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassEditorBase", function() { return MassEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassEditor", function() { return MassEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _blueprintjs_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/table */ "./node_modules/@blueprintjs/table/lib/esm/index.js");
/* harmony import */ var components_AddPokemonButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AddPokemonButton */ "./src/components/AddPokemonButton/index.ts");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! models */ "./src/models/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");








class SortableColumnMenu extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Menu"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], { icon: 'sort-asc', onClick: _ => null, text: 'Sort Asc' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], { icon: 'sort-desc', onClick: _ => null, text: 'Sort Desc' })));
    }
}
class MassEditorBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    renderMenu() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Menu"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], { icon: 'sort-asc', onClick: _ => null, text: 'Sort Asc' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], { icon: 'sort-desc', onClick: _ => null, text: 'Sort Desc' })));
    }
    renderColumns(pokemon) {
        return Object.keys(models__WEBPACK_IMPORTED_MODULE_6__["PokemonKeys"])
            .filter(k => k !== 'id')
            .map(key => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_table__WEBPACK_IMPORTED_MODULE_3__["Column"], { key: key, name: key, cellRenderer: r => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_table__WEBPACK_IMPORTED_MODULE_3__["EditableCell"], { onConfirm: (v, _, c) => {
                        let value = v;
                        if (key === 'types') {
                            value = v.split(',').map(s => s.trim());
                        }
                        if (key === 'moves') {
                            value = v.split(',').map(s => s.trim());
                        }
                        this.props.editPokemon({
                            [key]: value,
                        }, pokemon[r].id);
                    }, value: pokemon[r][key] })) }));
        });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], { icon: 'edit', isOpen: this.props.isOpen, onClose: this.props.toggleDialog, className: `wide-dialog ${this.props.style.editorDarkMode ? 'pt-dark' : 'pt-light'}`, title: 'Mass Editor' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-dialog-body' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_AddPokemonButton__WEBPACK_IMPORTED_MODULE_4__["AddPokemonButton"], { defaultPokemon: Object(utils__WEBPACK_IMPORTED_MODULE_7__["generateEmptyPokemon"])(this.props.pokemon) }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { padding: '.25rem' } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_table__WEBPACK_IMPORTED_MODULE_3__["Table"], { defaultColumnWidth: 100, numRows: this.props.pokemon.length, numFrozenColumns: 1 }, this.renderColumns(this.props.pokemon.sort(utils__WEBPACK_IMPORTED_MODULE_7__["sortPokes"]))))));
    }
}
const MassEditor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({
    pokemon: state.pokemon,
    style: state.style
}), { editPokemon: actions__WEBPACK_IMPORTED_MODULE_5__["editPokemon"] })(MassEditorBase);


/***/ }),

/***/ "./src/components/PokemonEditor/PokemonEditor.tsx":
/*!********************************************************!*\
  !*** ./src/components/PokemonEditor/PokemonEditor.tsx ***!
  \********************************************************/
/*! exports provided: PokemonEditorBase, PokemonEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonEditorBase", function() { return PokemonEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonEditor", function() { return PokemonEditor; });
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/components/PokemonEditor/index.ts");
/* harmony import */ var components_AddPokemonButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AddPokemonButton */ "./src/components/AddPokemonButton/index.ts");
/* harmony import */ var components_BaseEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/BaseEditor */ "./src/components/BaseEditor/index.ts");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Box */ "./src/components/PokemonEditor/Box.tsx");








__webpack_require__(/*! ../../assets/img/team-box.png */ "./src/assets/img/team-box.png");
__webpack_require__(/*! ../../assets/img/dead-box.png */ "./src/assets/img/dead-box.png");
class PokemonEditorBase extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super(props);
        this.openMassEditor = e => {
            this.setState({
                isMassEditorOpen: true,
            });
        };
        this.toggleEditor = e => this.setState({ isOpen: !this.state.isOpen });
        this.state = {
            isMassEditorOpen: false,
            isOpen: true,
        };
    }
    componentDidMount() { }
    renderBoxes(boxes, team) {
        return boxes.map(({ key, name }) => {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Box__WEBPACK_IMPORTED_MODULE_7__["Box"], { key: key, pokemon: team, name: name, boxId: key, filterString: name });
        });
    }
    render() {
        const { team, boxes } = this.props;
        const { isOpen } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_BaseEditor__WEBPACK_IMPORTED_MODULE_6__["BaseEditor"], { name: 'Pokemon' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'button-row', style: { display: 'flex' } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_AddPokemonButton__WEBPACK_IMPORTED_MODULE_5__["AddPokemonButton"], { defaultPokemon: Object.assign({}, Object(utils__WEBPACK_IMPORTED_MODULE_3__["generateEmptyPokemon"])(team), { gameOfOrigin: this.props.game.name || 'None' }) }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Button"], { icon: 'heat-grid', onClick: this.openMassEditor, style: { marginLeft: 'auto' }, className: 'pt-intent-primary pt-minimal' }, "Open Mass Editor")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                this.renderBoxes(boxes, team),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](___WEBPACK_IMPORTED_MODULE_4__["CurrentPokemonEdit"], null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](___WEBPACK_IMPORTED_MODULE_4__["MassEditor"], { isOpen: this.state.isMassEditorOpen, toggleDialog: e => this.setState({ isMassEditorOpen: !this.state.isMassEditorOpen }) })));
    }
}
const PokemonEditor = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])((state) => ({
    team: state.pokemon,
    boxes: state.box,
    game: state.game,
}), null)(PokemonEditorBase);


/***/ }),

/***/ "./src/components/PokemonEditor/index.ts":
/*!***********************************************!*\
  !*** ./src/components/PokemonEditor/index.ts ***!
  \***********************************************/
/*! exports provided: PokemonEditorBase, PokemonEditor, SortableColumnMenu, MassEditorBase, MassEditor, CopyPokemonButton, CurrentPokemonEditBase, CurrentPokemonEdit, CurrentPokemonInputBase, CurrentPokemonInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PokemonEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonEditor */ "./src/components/PokemonEditor/PokemonEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonEditorBase", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_0__["PokemonEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonEditor", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_0__["PokemonEditor"]; });

/* harmony import */ var _MassEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MassEditor */ "./src/components/PokemonEditor/MassEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableColumnMenu", function() { return _MassEditor__WEBPACK_IMPORTED_MODULE_1__["SortableColumnMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MassEditorBase", function() { return _MassEditor__WEBPACK_IMPORTED_MODULE_1__["MassEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MassEditor", function() { return _MassEditor__WEBPACK_IMPORTED_MODULE_1__["MassEditor"]; });

/* harmony import */ var _CurrentPokemonEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CurrentPokemonEdit */ "./src/components/PokemonEditor/CurrentPokemonEdit.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyPokemonButton", function() { return _CurrentPokemonEdit__WEBPACK_IMPORTED_MODULE_2__["CopyPokemonButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonEditBase", function() { return _CurrentPokemonEdit__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonEditBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonEdit", function() { return _CurrentPokemonEdit__WEBPACK_IMPORTED_MODULE_2__["CurrentPokemonEdit"]; });

/* harmony import */ var _CurrentPokemonInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CurrentPokemonInput */ "./src/components/PokemonEditor/CurrentPokemonInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonInputBase", function() { return _CurrentPokemonInput__WEBPACK_IMPORTED_MODULE_3__["CurrentPokemonInputBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonInput", function() { return _CurrentPokemonInput__WEBPACK_IMPORTED_MODULE_3__["CurrentPokemonInput"]; });







/***/ }),

/***/ "./src/components/PokemonEditor/styles.ts":
/*!************************************************!*\
  !*** ./src/components/PokemonEditor/styles.ts ***!
  \************************************************/
/*! exports provided: iconBar, copyButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconBar", function() { return iconBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyButton", function() { return copyButton; });
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");

const iconBar = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    align-items: center;
    display: flex;
    margin-left: auto;
    * {
        margin: .25rem;
    }
`;
const copyButton = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    color: lightblue;
    margin-left: auto;
    pointer: cursor;
`;


/***/ }),

/***/ "./src/components/RulesEditor/RulesEditor.styl":
/*!*****************************************************!*\
  !*** ./src/components/RulesEditor/RulesEditor.styl ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/stylus-loader!./RulesEditor.styl */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/stylus-loader/index.js!./src/components/RulesEditor/RulesEditor.styl");
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

/***/ "./src/components/RulesEditor/RulesEditor.tsx":
/*!****************************************************!*\
  !*** ./src/components/RulesEditor/RulesEditor.tsx ***!
  \****************************************************/
/*! exports provided: RulesEditor, RulesEditorDialogBase, RulesEditorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesEditor", function() { return RulesEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesEditorDialogBase", function() { return RulesEditorDialogBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesEditorDialog", function() { return RulesEditorDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var _RulesEditor_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RulesEditor.styl */ "./src/components/RulesEditor/RulesEditor.styl");
/* harmony import */ var _RulesEditor_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_RulesEditor_styl__WEBPACK_IMPORTED_MODULE_4__);





class RulesEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    renderRules() {
        return this.props.rules.map((rule, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: 'rules-list-item', key: index },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'rule-no' }, index + 1),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["TextArea"], { defaultValue: rule, className: 'pt-fill', onChange: (e) => this.props.editRule(index, e.target.value), dir: 'auto' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { role: 'action', onClick: e => this.props.deleteRule(index), className: 'rule-delete', title: 'Delete Rule' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], { intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].DANGER, role: 'action', style: { cursor: 'pointer' }, icon: 'trash' })))));
    }
    renderButtons() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: _ => this.props.addRule(), intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].PRIMARY }, "Add Rule"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { style: { marginLeft: '1rem' }, onClick: _ => {
                    this.props.resetRules();
                    this.forceUpdate();
                }, intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].WARNING }, "Reset Rules")));
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { style: {
                    listStyleType: 'none',
                    margin: '.5rem',
                    padding: '0'
                } }, this.renderRules()),
            this.renderButtons()));
    }
}
const RulesEditorDialogBase = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], { isOpen: props.isOpen, onClose: props.onClose, className: `rules-editor-dialog ${props.style.editorDarkMode ? 'pt-dark' : 'pt-light'}`, title: 'Rules Editor', icon: 'edit' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-dialog-body' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RulesEditor, { rules: props.rules, editRule: props.editRule, addRule: props.addRule, deleteRule: props.deleteRule, resetRules: props.resetRules }))));
};
const RulesEditorDialog = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])((state) => ({
    rules: state.rules,
    style: state.style
}), { editRule: actions__WEBPACK_IMPORTED_MODULE_3__["editRule"], addRule: actions__WEBPACK_IMPORTED_MODULE_3__["addRule"], deleteRule: actions__WEBPACK_IMPORTED_MODULE_3__["deleteRule"], resetRules: actions__WEBPACK_IMPORTED_MODULE_3__["resetRules"] })(RulesEditorDialogBase);


/***/ }),

/***/ "./src/components/RulesEditor/index.ts":
/*!*********************************************!*\
  !*** ./src/components/RulesEditor/index.ts ***!
  \*********************************************/
/*! exports provided: RulesEditor, RulesEditorDialogBase, RulesEditorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RulesEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RulesEditor */ "./src/components/RulesEditor/RulesEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesEditor", function() { return _RulesEditor__WEBPACK_IMPORTED_MODULE_0__["RulesEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesEditorDialogBase", function() { return _RulesEditor__WEBPACK_IMPORTED_MODULE_0__["RulesEditorDialogBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesEditorDialog", function() { return _RulesEditor__WEBPACK_IMPORTED_MODULE_0__["RulesEditorDialog"]; });




/***/ }),

/***/ "./src/components/StyleEditor/StyleEditor.tsx":
/*!****************************************************!*\
  !*** ./src/components/StyleEditor/StyleEditor.tsx ***!
  \****************************************************/
/*! exports provided: IconsNextToTeamPokemon, StyleEditorBase, StyleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsNextToTeamPokemon", function() { return IconsNextToTeamPokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleEditorBase", function() { return StyleEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleEditor", function() { return StyleEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var components_BaseEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/BaseEditor */ "./src/components/BaseEditor/index.ts");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/components/StyleEditor/styles.ts");
/* harmony import */ var components_ThemeEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/ThemeEditor */ "./src/components/ThemeEditor/index.ts");










const editEvent = (e, props, name, game) => {
    const propName = name || e.target.name;
    props.editStyle({ [propName]: e.target.value });
    if (propName === 'template' && e.target.value === 'Default Light') {
        props.editStyle({ bgColor: '#eeeeee' });
        props.editStyle({ topHeaderColor: '#dedede' });
    }
    if (propName === 'template' && e.target.value === 'Default Dark') {
        props.editStyle({ bgColor: '#383840' });
        props.editStyle({ topHeaderColor: '#333333' });
    }
    if (propName === 'template' && e.target.value === 'Cards') {
        props.editStyle({ imageStyle: 'square' });
    }
    if (propName === 'template' && e.target.value === 'Generations') {
        props.editStyle({
            bgColor: Object(utils__WEBPACK_IMPORTED_MODULE_3__["gameOfOriginToColor"])(game),
        });
        props.editStyle({
            resultHeight: 870
        });
        props.editStyle({
            resultWidth: 1460
        });
    }
};
const IconsNextToTeamPokemon = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'style-edit' },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.iconsNextToTeamPokemon, name: 'iconsNextToTeamPokemon', label: 'Icons Next to Team Pokemon', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'iconsNextToTeamPokemon') })));
class StyleEditorBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = { isThemeEditorOpen: false };
        this.toggleThemeEditor = e => this.setState({ isThemeEditorOpen: !this.state.isThemeEditorOpen });
    }
    render() {
        const props = this.props;
        const styleEdit = Object(emotion__WEBPACK_IMPORTED_MODULE_7__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_8__["styleEdit"], { [_styles__WEBPACK_IMPORTED_MODULE_8__["styleEdit_dark"]]: props.style.editorDarkMode });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_BaseEditor__WEBPACK_IMPORTED_MODULE_5__["BaseEditor"], { name: 'Style' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], { isOpen: this.state.isThemeEditorOpen, onClose: this.toggleThemeEditor, title: 'Theme Editor', icon: 'style', className: Object(emotion__WEBPACK_IMPORTED_MODULE_7__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_8__["dialog"], { [_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Classes"].DARK]: props.style.editorDarkMode }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_ThemeEditor__WEBPACK_IMPORTED_MODULE_9__["ThemeEditor"], null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'pt-label pt-inline' }, "Template"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pt-select' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { name: 'template', onChange: e => editEvent(e, props, null, props.game.name), value: props.style.template }, utils__WEBPACK_IMPORTED_MODULE_3__["listOfThemes"].map(o => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: o }, o)))),
                utils__WEBPACK_IMPORTED_MODULE_3__["FEATURES"].themeEditing ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { onClick: this.toggleThemeEditor, style: { marginLeft: '.25rem' }, intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Intent"].PRIMARY, className: 'pt-minimal' }, "Edit Theme")
                    : null),
            props.style.template === 'Hexagons' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Hexagons Template Options"))
                : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { className: Object(emotion__WEBPACK_IMPORTED_MODULE_7__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_8__["radioGroup"]), label: 'Image Style', onChange: e => editEvent(e, props, 'imageStyle'), selectedValue: props.style.imageStyle },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], { label: 'Round', value: 'round' }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], { label: 'Square', value: 'square' }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { className: Object(emotion__WEBPACK_IMPORTED_MODULE_7__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_8__["radioGroup"]), label: 'Item Style', onChange: e => editEvent(e, props, 'itemStyle'), selectedValue: props.style.itemStyle },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], { label: 'Round', value: 'round' }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], { label: 'Square', value: 'square' }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'pt-label pt-inline' }, "Result Dimensions"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: 'resultWidth', className: 'pt-input small-input', onChange: e => editEvent(e, props), value: props.style.resultWidth, type: 'number', min: '0', step: '10' }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { marginRight: '0' }, className: 'pt-icon pt-icon-cross' }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: 'resultHeight', className: 'pt-input small-input', onChange: e => editEvent(e, props), value: props.style.resultHeight, type: 'number', min: '0', step: '10' })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'pt-label pt-inline' }, "Background color"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_6__["ColorEdit"], { onChange: e => editEvent(e, props), name: 'bgColor', value: props.style.bgColor })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'pt-label pt-inline' }, "Header color"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_6__["ColorEdit"], { name: 'topHeaderColor', onChange: e => editEvent(e, props), value: props.style.topHeaderColor })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'pt-label pt-inline' }, "Background Image"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { value: props.style.backgroundImage, name: 'backgroundImage', onChange: e => editEvent(e, props), className: 'pt-input' }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, ' '),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { style: {
                        marginBottom: '0',
                        marginLeft: '10px',
                    }, checked: props.style.tileBackground, name: 'tileBackground', label: 'Tile', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'tileBackground') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { className: Object(emotion__WEBPACK_IMPORTED_MODULE_7__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_8__["radioGroup"]), label: 'Moves Position', onChange: e => editEvent(e, props, 'movesPosition'), selectedValue: props.style.movesPosition },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], { label: 'Horizontal', value: 'horizontal' }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], { label: 'Vertical', value: 'vertical' }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { className: Object(emotion__WEBPACK_IMPORTED_MODULE_7__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_8__["radioGroup"]), label: 'Team Images', onChange: e => editEvent(e, props, 'teamImages'), selectedValue: props.style.teamImages },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], { label: 'Standard', value: 'standard' }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Radio"], { label: 'Sugimori', value: 'sugimori' }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.teamPokemonBorder, name: 'teamPokemonBorder', label: 'Team Pokemon Gradient Backgrounds', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'teamPokemonBorder') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.showPokemonMoves, name: 'showPokemonMoves', label: 'Show Pokemon Moves', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'showPokemonMoves') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.minimalTeamLayout, name: 'minimalTeamLayout', label: 'Minimal Team Layout', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'minimalTeamLayout') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.displayBadges, name: 'displayBadges', label: 'Display Badges', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'displayBadges') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.displayRules, name: 'displayRules', label: 'Display Nuzlocke Rules', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'displayRules') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.oldMetLocationFormat, name: 'oldMetLocationFormat', label: 'Old Met Location Format', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'oldMetLocationFormat') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.grayScaleDeadPokemon, name: 'grayScaleDeadPokemon', label: 'Gray Scale Filter Dead Pokemon Images', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'grayScaleDeadPokemon') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.spritesMode, name: 'spritesMode', label: 'Sprites Mode', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'spritesMode') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: styleEdit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { checked: props.style.scaleSprites, name: 'scaleSprites', label: 'Scale Sprites', onChange: (e) => editEvent(Object.assign({}, e, { target: { value: e.target.checked } }), props, 'scaleSprites') })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'custom-css-input-wrapper' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { style: { padding: '.5rem' }, className: 'pt-label' }, "Custom CSS "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["TextArea"], { large: true, onChange: e => editEvent(e, props, 'customCSS'), className: 'custom-css-input pt-fill', value: props.style.customCSS }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, props.style.customCSS))));
    }
}
const StyleEditor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({ style: state.style, game: state.game }), {
    editStyle: actions__WEBPACK_IMPORTED_MODULE_2__["editStyle"],
})(StyleEditorBase);


/***/ }),

/***/ "./src/components/StyleEditor/index.ts":
/*!*********************************************!*\
  !*** ./src/components/StyleEditor/index.ts ***!
  \*********************************************/
/*! exports provided: IconsNextToTeamPokemon, StyleEditorBase, StyleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StyleEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleEditor */ "./src/components/StyleEditor/StyleEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsNextToTeamPokemon", function() { return _StyleEditor__WEBPACK_IMPORTED_MODULE_0__["IconsNextToTeamPokemon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleEditorBase", function() { return _StyleEditor__WEBPACK_IMPORTED_MODULE_0__["StyleEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleEditor", function() { return _StyleEditor__WEBPACK_IMPORTED_MODULE_0__["StyleEditor"]; });




/***/ }),

/***/ "./src/components/ThemeEditor/ComponentOptions.ts":
/*!********************************************************!*\
  !*** ./src/components/ThemeEditor/ComponentOptions.ts ***!
  \********************************************************/
/*! exports provided: ComponentOptions, Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentOptions", function() { return ComponentOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
var ComponentOptions;
(function (ComponentOptions) {
    ComponentOptions["BackgroundColor"] = "Background Color";
    ComponentOptions["TextColor"] = "Text Color";
    ComponentOptions["Padding"] = "Padding";
    ComponentOptions["Margin"] = "Margin";
    ComponentOptions["BorderRadius"] = "Border Radius";
})(ComponentOptions || (ComponentOptions = {}));
const Options = {
    ChampsPokemon: {
        styles: [
            ComponentOptions.BorderRadius,
            ComponentOptions.Padding,
            ComponentOptions.Margin,
        ],
        props: {
            showNickname: true,
            showGender: false,
            showLevel: false,
        }
    }
};


/***/ }),

/***/ "./src/components/ThemeEditor/ThemeEditor.tsx":
/*!****************************************************!*\
  !*** ./src/components/ThemeEditor/ThemeEditor.tsx ***!
  \****************************************************/
/*! exports provided: NumericValue, ThemeEditorBase, ThemeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericValue", function() { return NumericValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeEditorBase", function() { return ThemeEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeEditor", function() { return ThemeEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/ThemeEditor/styles.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var components_Shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Shared */ "./src/components/Shared/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var _ComponentOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ComponentOptions */ "./src/components/ThemeEditor/ComponentOptions.ts");









const modelPokemon = Object.assign({}, Object(utils__WEBPACK_IMPORTED_MODULE_4__["generateEmptyPokemon"])(), { species: 'Pikachu', nickname: 'Pika Pika', gender: 'm', level: 50, metLevel: 5, met: 'Viridian Forest', gameOfOrigin: 'Red' });
const componentTree = [
    {
        id: 0,
        hasCaret: false,
        label: 'Body'
    },
    {
        id: 1,
        icon: 'style',
        isExpanded: true,
        label: 'Header',
        childNodes: [
            {
                id: 2,
                label: 'Title',
            },
            {
                id: 3,
                label: 'Trainer Picture',
            },
        ]
    },
    {
        id: 4,
        icon: 'style',
        isExpanded: true,
        label: 'Team Pokemon',
        childNodes: [
            {
                id: 5,
                label: 'Info',
                childNodes: [
                    {
                        id: 6,
                        label: 'Moves',
                    },
                    {
                        id: 7,
                        label: 'Nickname Text',
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        icon: 'style',
        isExpanded: true,
        label: 'Boxed Pokemon',
        childNodes: [
            {
                id: 9,
                label: 'Info',
            }
        ]
    },
    {
        id: 10,
        icon: 'style',
        isExpanded: true,
        label: 'Dead Pokemon',
        childNodes: [
            {
                id: 11,
                label: 'Info',
            }
        ]
    },
    {
        id: 12,
        icon: 'style',
        isExpanded: true,
        label: 'Champs Pokemon',
        options: _ComponentOptions__WEBPACK_IMPORTED_MODULE_8__["Options"].ChampsPokemon,
        childNodes: [
            {
                id: 11,
                label: 'PokemonIcon',
            }
        ]
    },
    {
        id: 420,
        label: 'Custom CSS',
    }
];
const NumericValue = ({ name, value, onInput }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["componentOption"]) },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Classes"].LABEL }, name),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: name, onInput: onInput, type: 'text', value: value }));
class ThemeEditorBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = { componentTree: [] };
        this.onNodeClick = (node, _nodePath, e) => {
            const originallySelected = node.isSelected;
            if (!e.shiftKey) {
                this.forEachNode(this.state.componentTree, n => (n.isSelected = false));
            }
            node.isSelected = originallySelected == null ? true : !originallySelected;
            this.setState(this.state);
        };
        this.onNodeCollapse = (node) => {
            node.isExpanded = false;
            this.setState(this.state);
        };
        this.onNodeExpand = (node) => {
            node.isExpanded = true;
            this.setState(this.state);
        };
    }
    componentWillMount() {
        this.setState({ componentTree: componentTree });
    }
    getCurrentNode() {
        let currentNode;
        const selectedNodes = this.forEachNode(this.state.componentTree, (node) => {
            if (node.isSelected)
                currentNode = node;
        });
        return currentNode;
    }
    forEachNode(nodes, callback) {
        if (nodes == null) {
            return;
        }
        for (const node of nodes) {
            callback(node);
            this.forEachNode(node.childNodes, callback);
        }
    }
    render() {
        const currentNode = this.getCurrentNode() == null ? null : this.getCurrentNode();
        if (currentNode) {
            const { label } = currentNode;
        }
        console.log(currentNode);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(Object(utils__WEBPACK_IMPORTED_MODULE_4__["classWithDarkTheme"])(_styles__WEBPACK_IMPORTED_MODULE_3__, 'header', this.props.style.editorDarkMode)) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "Current Theme:"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_6__["ThemeSelect"], { theme: this.props.style.template })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["main"]) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["sidebar"]) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { style: { display: 'flex' }, className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Classes"].LABEL },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { style: { margin: '4px', width: 'calc(80% - 8px)' }, className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Classes"].INPUT, type: 'text', placeholder: 'Filter...' }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { style: { width: '20%' }, icon: 'search', className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Classes"].MINIMAL })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Tree"], { contents: componentTree, onNodeClick: this.onNodeClick, onNodeCollapse: this.onNodeCollapse, onNodeExpand: this.onNodeExpand })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["componentView"]) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(this.props.style.template.toLowerCase(), Object(utils__WEBPACK_IMPORTED_MODULE_4__["classWithDarkTheme"])(_styles__WEBPACK_IMPORTED_MODULE_3__, 'componentResult', this.props.style.editorDarkMode)) }, currentNode && currentNode.id === 12 &&
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components__WEBPACK_IMPORTED_MODULE_7__["ChampsPokemon"], Object.assign({ showGender: currentNode.options.props.showGender, showNickname: currentNode.options.props.showNickname, showLevel: currentNode.options.props.showLevel }, modelPokemon))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["componentOptions"]) },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null,
                            this.getCurrentNode() == null ? '' : this.getCurrentNode().label,
                            " Options"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Menu"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["componentOption"]) },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Classes"].LABEL }, "Background Color"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_6__["ColorEdit"], { value: '#222222', name: 'BoxedPokemon', onChange: null })),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["componentOption"]) },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Classes"].LABEL }, "Text Color"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Shared__WEBPACK_IMPORTED_MODULE_6__["ColorEdit"], { value: '#EEEEEE', name: 'BoxedPokemon', onChange: null })),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumericValue, { name: 'Border Radius', value: '4px', onInput: null }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumericValue, { name: 'Padding', value: '0px', onInput: null }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumericValue, { name: 'Margin', value: '0px', onInput: null }))))))));
    }
}
const ThemeEditor = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({
    style: state.style
}), null)(ThemeEditorBase);


/***/ }),

/***/ "./src/components/ThemeEditor/index.ts":
/*!*********************************************!*\
  !*** ./src/components/ThemeEditor/index.ts ***!
  \*********************************************/
/*! exports provided: NumericValue, ThemeEditorBase, ThemeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemeEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeEditor */ "./src/components/ThemeEditor/ThemeEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericValue", function() { return _ThemeEditor__WEBPACK_IMPORTED_MODULE_0__["NumericValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeEditorBase", function() { return _ThemeEditor__WEBPACK_IMPORTED_MODULE_0__["ThemeEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeEditor", function() { return _ThemeEditor__WEBPACK_IMPORTED_MODULE_0__["ThemeEditor"]; });




/***/ }),

/***/ "./src/components/ThemeEditor/styles.ts":
/*!**********************************************!*\
  !*** ./src/components/ThemeEditor/styles.ts ***!
  \**********************************************/
/*! exports provided: main, header, header_dark, sidebar, componentList, listItem, componentView, componentResult, componentResult_dark, componentOptions, componentOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header_dark", function() { return header_dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentList", function() { return componentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listItem", function() { return listItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentView", function() { return componentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentResult", function() { return componentResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentResult_dark", function() { return componentResult_dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentOptions", function() { return componentOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentOption", function() { return componentOption; });
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");

const main = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    display: flex;
`;
const header = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: .5rem;
`;
const header_dark = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background: #394b59;
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;
    padding: .5rem;
`;
const sidebar = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    width: 30%;
`;
const componentList = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background: white;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;
const listItem = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    border-bottom: 1px solid #ccc;
    list-style-type: none;
    padding: .25rem;
`;
const componentView = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    display: flex;
    width: 100%;
`;
const componentResult = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    padding: 1rem;
    & *:hover {
        outline: 1px dotted red;
    }
`;
const componentResult_dark = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    background-image: linear-gradient(to top, rgb(32, 40, 45) 0%, rgb(37, 50, 57) 100%);
    min-width: 33%;
    padding: 1rem;
`;
const componentOptions = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    padding: .5rem;
`;
const componentOption = emotion__WEBPACK_IMPORTED_MODULE_0__["css"] `
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: .5rem;
    .pt-label {
        margin: 0 !important;
        width: 60%;
    }
`;


/***/ }),

/***/ "./src/components/TrainerEditor/BadgeInput.tsx":
/*!*****************************************************!*\
  !*** ./src/components/TrainerEditor/BadgeInput.tsx ***!
  \*****************************************************/
/*! exports provided: BadgeInputBase, BadgeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeInputBase", function() { return BadgeInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeInput", function() { return BadgeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var components_TrainerEditor_TrainerInfoEditField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TrainerEditor/TrainerInfoEditField */ "./src/components/TrainerEditor/TrainerInfoEditField.tsx");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./src/actions/index.ts");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");






const handleDeletion = (badges, badge) => {
    badges.delete(badge);
    return badges;
};
class BadgeInputBase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            badges: new Set([]),
        };
    }
    componentWillMount() {
        this.setState({ badges: new Set(this.props.trainer.badges) });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_TrainerInfoEditField__WEBPACK_IMPORTED_MODULE_3__["TrainerInfoEditField"], { label: 'Checkpoints (Badges)', name: 'badges', placeholder: '...', value: null, onChange: null, element: inputProps => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Popover"], { minimal: true, content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Menu"], null, Object(utils__WEBPACK_IMPORTED_MODULE_2__["getBadges"])(this.props.game.name).map(badge => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], { onChange: (e) => {
                        this.setState({
                            badges: this.state.badges.has(badge)
                                ? handleDeletion(this.state.badges, badge)
                                : this.state.badges.add(badge),
                        }, () => {
                            this.props.editTrainer({
                                badges: Array.from(this.state.badges),
                            });
                        });
                    }, checked: this.props.trainer &&
                        this.props.trainer.badges &&
                        this.props.trainer.badges.includes(badge), key: badge, label: badge })))), position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Position"].BOTTOM },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { style: {
                        borderRadius: 0,
                        width: '160px',
                    } }, "Select Checkpoints"))) }));
    }
}
const BadgeInput = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({
    trainer: state.trainer,
    game: state.game,
}), {
    editTrainer: actions__WEBPACK_IMPORTED_MODULE_4__["editTrainer"],
})(BadgeInputBase);


/***/ }),

/***/ "./src/components/TrainerEditor/LinkedTrainerInfoEditField.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/TrainerEditor/LinkedTrainerInfoEditField.tsx ***!
  \*********************************************************************/
/*! exports provided: LinkedTrainerInfoEditField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedTrainerInfoEditField", function() { return LinkedTrainerInfoEditField; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.ts");
/* harmony import */ var _TrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrainerInfoEditField */ "./src/components/TrainerEditor/TrainerInfoEditField.tsx");



const mapStateToProps = (state, ownProps) => {
    return {
        value: state.trainer[ownProps.name],
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: e => {
            dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["editTrainer"])({
                [ownProps.name]: e.target.value,
            }));
        },
    };
};
const LinkedTrainerInfoEditField = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_TrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["TrainerInfoEditField"]);


/***/ }),

/***/ "./src/components/TrainerEditor/TrainerEditor.tsx":
/*!********************************************************!*\
  !*** ./src/components/TrainerEditor/TrainerEditor.tsx ***!
  \********************************************************/
/*! exports provided: TrainerEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerEditor", function() { return TrainerEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_TrainerEditor_TrainerInfoEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/TrainerEditor/TrainerInfoEditor */ "./src/components/TrainerEditor/TrainerInfoEditor.tsx");
/* harmony import */ var components_BaseEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/BaseEditor */ "./src/components/BaseEditor/index.ts");



class TrainerEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_BaseEditor__WEBPACK_IMPORTED_MODULE_2__["BaseEditor"], { name: 'Trainer' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_TrainerInfoEditor__WEBPACK_IMPORTED_MODULE_1__["TrainerInfoEditor"], null)));
    }
}


/***/ }),

/***/ "./src/components/TrainerEditor/TrainerInfoEditField.tsx":
/*!***************************************************************!*\
  !*** ./src/components/TrainerEditor/TrainerInfoEditField.tsx ***!
  \***************************************************************/
/*! exports provided: TrainerInfoEditField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerInfoEditField", function() { return TrainerInfoEditField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TrainerInfoEditField = ({ label, name, placeholder, onChange, value, element }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'trainer-info-field' },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, label),
    element ? (element({ label, name, placeholder, onChange, value })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'text', value: value, onChange: onChange, placeholder: placeholder, name: name }))));


/***/ }),

/***/ "./src/components/TrainerEditor/TrainerInfoEditor.tsx":
/*!************************************************************!*\
  !*** ./src/components/TrainerEditor/TrainerInfoEditor.tsx ***!
  \************************************************************/
/*! exports provided: TrainerInfoEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerInfoEditor", function() { return TrainerInfoEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_TrainerEditor_BadgeInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/TrainerEditor/BadgeInput */ "./src/components/TrainerEditor/BadgeInput.tsx");
/* harmony import */ var components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TrainerEditor/LinkedTrainerInfoEditField */ "./src/components/TrainerEditor/LinkedTrainerInfoEditField.tsx");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");





const capitalize = (s) => s[0].toUpperCase() + s.slice(1);
const SpanBlock = ({ text }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: {
        background: 'rgba(0, 0, 0, 0.1)',
        display: 'inline-block',
        padding: '0 3px',
        margin: '2px',
        borderRadius: '.25rem',
    } }, text));
class TrainerInfoEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onInput = e => { };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'trainer-info-editor' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["LinkedTrainerInfoEditField"], { onInput: this.onInput, label: 'Trainer Name', name: 'name', placeholder: 'Trainer Name' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["LinkedTrainerInfoEditField"], { onInput: this.onInput, label: 'ID', name: 'id', placeholder: 'Trainer ID' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["LinkedTrainerInfoEditField"], { onInput: this.onInput, label: 'Time', name: 'time', placeholder: '0:00' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["LinkedTrainerInfoEditField"], { onInput: this.onInput, label: 'Money', name: 'money', placeholder: '$0' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["LinkedTrainerInfoEditField"], { onInput: this.onInput, label: 'Title', name: 'title', placeholder: '' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_BadgeInput__WEBPACK_IMPORTED_MODULE_1__["BadgeInput"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["LinkedTrainerInfoEditField"], { onInput: this.onInput, label: 'Exp Share', name: 'expShareStatus', placeholder: 'off' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["LinkedTrainerInfoEditField"], { onInput: this.onInput, label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], { minimal: true, interactionKind: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["PopoverInteractionKind"].HOVER, position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Position"].BOTTOM, content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Menu"], null,
                        "Type: image url. You can also specify a plain string of",
                        ' ',
                        utils__WEBPACK_IMPORTED_MODULE_4__["listOfTrainers"].map(t => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SpanBlock, { key: t, text: capitalize(t) }))) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                        "Trainer Image ",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'pt-icon pt-icon-info-sign' }))), name: 'image', placeholder: 'http://...' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_TrainerEditor_LinkedTrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["LinkedTrainerInfoEditField"], { onInput: this.onInput, label: 'Notes', name: 'notes', placeholder: '' })));
    }
}


/***/ }),

/***/ "./src/components/TrainerEditor/index.ts":
/*!***********************************************!*\
  !*** ./src/components/TrainerEditor/index.ts ***!
  \***********************************************/
/*! exports provided: TrainerEditor, BadgeInputBase, BadgeInput, TrainerInfoEditField, TrainerInfoEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrainerEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrainerEditor */ "./src/components/TrainerEditor/TrainerEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrainerEditor", function() { return _TrainerEditor__WEBPACK_IMPORTED_MODULE_0__["TrainerEditor"]; });

/* harmony import */ var _BadgeInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BadgeInput */ "./src/components/TrainerEditor/BadgeInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadgeInputBase", function() { return _BadgeInput__WEBPACK_IMPORTED_MODULE_1__["BadgeInputBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadgeInput", function() { return _BadgeInput__WEBPACK_IMPORTED_MODULE_1__["BadgeInput"]; });

/* harmony import */ var _TrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrainerInfoEditField */ "./src/components/TrainerEditor/TrainerInfoEditField.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrainerInfoEditField", function() { return _TrainerInfoEditField__WEBPACK_IMPORTED_MODULE_2__["TrainerInfoEditField"]; });

/* harmony import */ var _TrainerInfoEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrainerInfoEditor */ "./src/components/TrainerEditor/TrainerInfoEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrainerInfoEditor", function() { return _TrainerInfoEditor__WEBPACK_IMPORTED_MODULE_3__["TrainerInfoEditor"]; });







/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Editor, Result, Autocomplete, ErrorBoundary, AddPokemonButtonBase, AddPokemonButton, Admin, AppBase, App, BaseEditor, BoxedPokemonBase, BoxedPokemon, champsPokemon, ChampsPokemon, DataEditorBase, DataEditor, DeadPokemonBase, DeadPokemon, DeletePokemonButtonContainer, DeletePokemonButtonBase, DeletePokemonButton, GameEditorBase, GameEditor, HotkeysBase, Hotkeys, HotkeysEditor, PokemonEditorBase, PokemonEditor, SortableColumnMenu, MassEditorBase, MassEditor, CopyPokemonButton, CurrentPokemonEditBase, CurrentPokemonEdit, CurrentPokemonInputBase, CurrentPokemonInput, PokemonIconBase, PokemonIcon, RulesEditor, RulesEditorDialogBase, RulesEditorDialog, Gender, GenderElement, PokemonByFilterBase, PokemonByFilter, ColorEditBase, ColorEdit, ThemeSelectBase, ThemeSelect, IconsNextToTeamPokemon, StyleEditorBase, StyleEditor, TeamPokemonInfo, TeamPokemonBaseMinimal, Moves, TeamPokemonBase, TeamPokemon, NumericValue, ThemeEditorBase, ThemeEditor, TrainerEditor, BadgeInputBase, BadgeInput, TrainerInfoEditField, TrainerInfoEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPokemonButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPokemonButton */ "./src/components/AddPokemonButton/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPokemonButtonBase", function() { return _AddPokemonButton__WEBPACK_IMPORTED_MODULE_0__["AddPokemonButtonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPokemonButton", function() { return _AddPokemonButton__WEBPACK_IMPORTED_MODULE_0__["AddPokemonButton"]; });

/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin */ "./src/components/Admin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return _Admin__WEBPACK_IMPORTED_MODULE_1__["Admin"]; });

/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/components/App/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBase", function() { return _App__WEBPACK_IMPORTED_MODULE_2__["AppBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _App__WEBPACK_IMPORTED_MODULE_2__["App"]; });

/* harmony import */ var _BaseEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseEditor */ "./src/components/BaseEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEditor", function() { return _BaseEditor__WEBPACK_IMPORTED_MODULE_3__["BaseEditor"]; });

/* harmony import */ var _BoxedPokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoxedPokemon */ "./src/components/BoxedPokemon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxedPokemonBase", function() { return _BoxedPokemon__WEBPACK_IMPORTED_MODULE_4__["BoxedPokemonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxedPokemon", function() { return _BoxedPokemon__WEBPACK_IMPORTED_MODULE_4__["BoxedPokemon"]; });

/* harmony import */ var _ChampsPokemon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChampsPokemon */ "./src/components/ChampsPokemon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "champsPokemon", function() { return _ChampsPokemon__WEBPACK_IMPORTED_MODULE_5__["champsPokemon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChampsPokemon", function() { return _ChampsPokemon__WEBPACK_IMPORTED_MODULE_5__["ChampsPokemon"]; });

/* harmony import */ var _DataEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataEditor */ "./src/components/DataEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataEditorBase", function() { return _DataEditor__WEBPACK_IMPORTED_MODULE_6__["DataEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataEditor", function() { return _DataEditor__WEBPACK_IMPORTED_MODULE_6__["DataEditor"]; });

/* harmony import */ var _DeadPokemon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeadPokemon */ "./src/components/DeadPokemon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeadPokemonBase", function() { return _DeadPokemon__WEBPACK_IMPORTED_MODULE_7__["DeadPokemonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeadPokemon", function() { return _DeadPokemon__WEBPACK_IMPORTED_MODULE_7__["DeadPokemon"]; });

/* harmony import */ var _DeletePokemonButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeletePokemonButton */ "./src/components/DeletePokemonButton/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButtonContainer", function() { return _DeletePokemonButton__WEBPACK_IMPORTED_MODULE_8__["DeletePokemonButtonContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButtonBase", function() { return _DeletePokemonButton__WEBPACK_IMPORTED_MODULE_8__["DeletePokemonButtonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePokemonButton", function() { return _DeletePokemonButton__WEBPACK_IMPORTED_MODULE_8__["DeletePokemonButton"]; });

/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Editor */ "./src/components/Editor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_9__["Editor"]; });

/* harmony import */ var _GameEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GameEditor */ "./src/components/GameEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameEditorBase", function() { return _GameEditor__WEBPACK_IMPORTED_MODULE_10__["GameEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameEditor", function() { return _GameEditor__WEBPACK_IMPORTED_MODULE_10__["GameEditor"]; });

/* harmony import */ var _Hotkeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Hotkeys */ "./src/components/Hotkeys/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotkeysBase", function() { return _Hotkeys__WEBPACK_IMPORTED_MODULE_11__["HotkeysBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hotkeys", function() { return _Hotkeys__WEBPACK_IMPORTED_MODULE_11__["Hotkeys"]; });

/* harmony import */ var _HotkeysEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HotkeysEditor */ "./src/components/HotkeysEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotkeysEditor", function() { return _HotkeysEditor__WEBPACK_IMPORTED_MODULE_12__["HotkeysEditor"]; });

/* harmony import */ var _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PokemonEditor */ "./src/components/PokemonEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonEditorBase", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["PokemonEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonEditor", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["PokemonEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableColumnMenu", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["SortableColumnMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MassEditorBase", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["MassEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MassEditor", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["MassEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyPokemonButton", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["CopyPokemonButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonEditBase", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["CurrentPokemonEditBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonEdit", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["CurrentPokemonEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonInputBase", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["CurrentPokemonInputBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentPokemonInput", function() { return _PokemonEditor__WEBPACK_IMPORTED_MODULE_13__["CurrentPokemonInput"]; });

/* harmony import */ var _PokemonIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PokemonIcon */ "./src/components/PokemonIcon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonIconBase", function() { return _PokemonIcon__WEBPACK_IMPORTED_MODULE_14__["PokemonIconBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonIcon", function() { return _PokemonIcon__WEBPACK_IMPORTED_MODULE_14__["PokemonIcon"]; });

/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Result */ "./src/components/Result/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return _Result__WEBPACK_IMPORTED_MODULE_15__["Result"]; });

/* harmony import */ var _RulesEditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RulesEditor */ "./src/components/RulesEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesEditor", function() { return _RulesEditor__WEBPACK_IMPORTED_MODULE_16__["RulesEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesEditorDialogBase", function() { return _RulesEditor__WEBPACK_IMPORTED_MODULE_16__["RulesEditorDialogBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesEditorDialog", function() { return _RulesEditor__WEBPACK_IMPORTED_MODULE_16__["RulesEditorDialog"]; });

/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Shared */ "./src/components/Shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["Autocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["ErrorBoundary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["Gender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenderElement", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["GenderElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonByFilterBase", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["PokemonByFilterBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonByFilter", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["PokemonByFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorEditBase", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["ColorEditBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorEdit", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["ColorEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSelectBase", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["ThemeSelectBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSelect", function() { return _Shared__WEBPACK_IMPORTED_MODULE_17__["ThemeSelect"]; });

/* harmony import */ var _StyleEditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StyleEditor */ "./src/components/StyleEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsNextToTeamPokemon", function() { return _StyleEditor__WEBPACK_IMPORTED_MODULE_18__["IconsNextToTeamPokemon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleEditorBase", function() { return _StyleEditor__WEBPACK_IMPORTED_MODULE_18__["StyleEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleEditor", function() { return _StyleEditor__WEBPACK_IMPORTED_MODULE_18__["StyleEditor"]; });

/* harmony import */ var _TeamPokemon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TeamPokemon */ "./src/components/TeamPokemon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonInfo", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_19__["TeamPokemonInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonBaseMinimal", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_19__["TeamPokemonBaseMinimal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Moves", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_19__["Moves"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamPokemonBase", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_19__["TeamPokemonBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamPokemon", function() { return _TeamPokemon__WEBPACK_IMPORTED_MODULE_19__["TeamPokemon"]; });

/* harmony import */ var _ThemeEditor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ThemeEditor */ "./src/components/ThemeEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericValue", function() { return _ThemeEditor__WEBPACK_IMPORTED_MODULE_20__["NumericValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeEditorBase", function() { return _ThemeEditor__WEBPACK_IMPORTED_MODULE_20__["ThemeEditorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeEditor", function() { return _ThemeEditor__WEBPACK_IMPORTED_MODULE_20__["ThemeEditor"]; });

/* harmony import */ var _TrainerEditor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./TrainerEditor */ "./src/components/TrainerEditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrainerEditor", function() { return _TrainerEditor__WEBPACK_IMPORTED_MODULE_21__["TrainerEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadgeInputBase", function() { return _TrainerEditor__WEBPACK_IMPORTED_MODULE_21__["BadgeInputBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadgeInput", function() { return _TrainerEditor__WEBPACK_IMPORTED_MODULE_21__["BadgeInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrainerInfoEditField", function() { return _TrainerEditor__WEBPACK_IMPORTED_MODULE_21__["TrainerInfoEditField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrainerInfoEditor", function() { return _TrainerEditor__WEBPACK_IMPORTED_MODULE_21__["TrainerInfoEditor"]; });

























/***/ }),

/***/ "./src/models/Pokemon.ts":
/*!*******************************!*\
  !*** ./src/models/Pokemon.ts ***!
  \*******************************/
/*! exports provided: PokemonKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonKeys", function() { return PokemonKeys; });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");

const PokemonKeys = {
    id: '',
    species: '',
    nickname: '',
    status: '',
    level: 0,
    gender: 'f',
    met: '',
    metLevel: 0,
    nature: '',
    ability: '',
    moves: [],
    causeOfDeath: '',
    forme: '',
    item: '',
    types: [utils__WEBPACK_IMPORTED_MODULE_0__["Types"].Normal, utils__WEBPACK_IMPORTED_MODULE_0__["Types"].Normal],
    customImage: '',
    customIcon: '',
    shiny: false,
    champion: false,
    badges: [],
    num: '',
    position: 0,
    wonderTradedFor: '',
    mvp: false,
    gameOfOrigin: 'Red',
};


/***/ }),

/***/ "./src/models/Trainer.ts":
/*!*******************************!*\
  !*** ./src/models/Trainer.ts ***!
  \*******************************/
/*! exports provided: TrainerKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerKeys", function() { return TrainerKeys; });
const TrainerKeys = {
    name: 'Red',
    id: '00123',
    time: '04:33',
    money: 1244,
    badges: ['boulder-badge'],
    expShareStatus: 'ON',
    image: 'http://placeholder.com',
    title: 'Trainer Title',
    notes: 'None yet.',
    totalTime: '190:33',
};


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: PokemonKeys, TrainerKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pokemon */ "./src/models/Pokemon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonKeys", function() { return _Pokemon__WEBPACK_IMPORTED_MODULE_0__["PokemonKeys"]; });

/* harmony import */ var _Trainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trainer */ "./src/models/Trainer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrainerKeys", function() { return _Trainer__WEBPACK_IMPORTED_MODULE_1__["TrainerKeys"]; });





/***/ })

}]);
//# sourceMappingURL=0.chunk.js.map