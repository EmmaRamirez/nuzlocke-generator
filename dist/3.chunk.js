(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@blueprintjs/table/lib/esm/cell/cell.js":
/*!**************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/cell/cell.js ***!
  \**************************************************************/
/*! exports provided: emptyCellRenderer, Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyCellRenderer", function() { return emptyCellRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _common_loadableContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/loadableContent */ "./node_modules/@blueprintjs/table/lib/esm/common/loadableContent.js");
/* harmony import */ var _formats_jsonFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formats/jsonFormat */ "./node_modules/@blueprintjs/table/lib/esm/cell/formats/jsonFormat.js");
/* harmony import */ var _formats_truncatedFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formats/truncatedFormat */ "./node_modules/@blueprintjs/table/lib/esm/cell/formats/truncatedFormat.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








var emptyCellRenderer = function () { return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Cell, null); };
var Cell = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.shouldComponentUpdate = function (nextProps) {
        // deeply compare "style," because a new but identical object might have been provided.
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Utils"].shallowCompareKeys(this.props, nextProps, { exclude: ["style"] }) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Utils"].deepCompareKeys(this.props.style, nextProps.style));
    };
    Cell.prototype.render = function () {
        var _a = this.props, cellRef = _a.cellRef, tabIndex = _a.tabIndex, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, onKeyPress = _a.onKeyPress, style = _a.style, intent = _a.intent, interactive = _a.interactive, loading = _a.loading, tooltip = _a.tooltip, truncated = _a.truncated, className = _a.className, wrapText = _a.wrapText;
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_CELL"], _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Classes"].intentClass(intent), (_b = {},
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_CELL_INTERACTIVE"]] = interactive,
            _b[_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__["Classes"].LOADING] = loading,
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_TRUNCATED_CELL"]] = truncated,
            _b), className);
        var textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_c = {},
            _c[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_TRUNCATED_TEXT"]] = truncated,
            _c[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_NO_WRAP_TEXT"]] = !wrapText,
            _c));
        // add width and height to the children, for use in shouldComponentUpdate in truncatedFormat
        // note: these aren't actually used by truncated format, just in shouldComponentUpdate
        var modifiedChildren = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(this.props.children, function (child) {
            if (style != null && react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
                var childType = child.type;
                // can't get prototype of "string" child, so treat those separately
                if (typeof child === "string" || typeof childType === "string") {
                    return child;
                }
                else {
                    var isTruncatedFormat = childType.prototype === _formats_truncatedFormat__WEBPACK_IMPORTED_MODULE_7__["TruncatedFormat"].prototype ||
                        _formats_truncatedFormat__WEBPACK_IMPORTED_MODULE_7__["TruncatedFormat"].prototype.isPrototypeOf(childType) ||
                        childType.prototype === _formats_jsonFormat__WEBPACK_IMPORTED_MODULE_6__["JSONFormat"].prototype ||
                        _formats_jsonFormat__WEBPACK_IMPORTED_MODULE_6__["JSONFormat"].prototype.isPrototypeOf(childType);
                    // only add props if child is truncated format
                    if (isTruncatedFormat) {
                        return react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
                            parentCellHeight: parseInt(style.height, 10),
                            parentCellWidth: parseInt(style.width, 10),
                        });
                    }
                }
            }
            return child;
        });
        var content = react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: textClasses }, modifiedChildren);
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ className: classes, title: tooltip, ref: cellRef }, { style: style, tabIndex: tabIndex, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onKeyPress: onKeyPress }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_common_loadableContent__WEBPACK_IMPORTED_MODULE_5__["LoadableContent"], { loading: loading, variableLength: true }, content)));
        var _b, _c;
    };
    Cell.defaultProps = {
        truncated: true,
        wrapText: false,
    };
    return Cell;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/cell/editableCell.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/cell/editableCell.js ***!
  \**********************************************************************/
/*! exports provided: EditableCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableCell", function() { return EditableCell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _interactions_draggable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interactions/draggable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/draggable.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cell */ "./node_modules/@blueprintjs/table/lib/esm/cell/cell.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */







var EditableCell = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableCell, _super);
    function EditableCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.refHandlers = {
            cell: function (ref) {
                _this.cellRef = ref;
            },
        };
        _this.handleKeyPress = function () {
            if (_this.state.isEditing || !_this.props.isFocused) {
                return;
            }
            // setting dirty value to empty string because apparently the text field will pick up the key and write it in there
            _this.setState({ isEditing: true, dirtyValue: "", savedValue: _this.state.savedValue });
        };
        _this.handleEdit = function () {
            _this.setState({ isEditing: true, dirtyValue: _this.state.savedValue });
        };
        _this.handleCancel = function (value) {
            // don't strictly need to clear the dirtyValue, but it's better hygiene
            _this.setState({ isEditing: false, dirtyValue: undefined });
            _this.invokeCallback(_this.props.onCancel, value);
        };
        _this.handleChange = function (value) {
            _this.setState({ dirtyValue: value });
            _this.invokeCallback(_this.props.onChange, value);
        };
        _this.handleConfirm = function (value) {
            _this.setState({ isEditing: false, savedValue: value, dirtyValue: undefined });
            _this.invokeCallback(_this.props.onConfirm, value);
        };
        _this.handleCellActivate = function (_event) {
            return true;
        };
        _this.handleCellDoubleClick = function (_event) {
            _this.handleEdit();
        };
        _this.state = {
            isEditing: false,
            savedValue: props.value,
        };
        return _this;
    }
    EditableCell.prototype.componentDidMount = function () {
        this.checkShouldFocus();
    };
    EditableCell.prototype.componentDidUpdate = function () {
        this.checkShouldFocus();
    };
    EditableCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].shallowCompareKeys(this.props, nextProps, { exclude: ["style"] }) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].shallowCompareKeys(this.state, nextState) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].deepCompareKeys(this.props, nextProps, ["style"]));
    };
    EditableCell.prototype.componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value;
        if (value != null) {
            this.setState({ savedValue: value, dirtyValue: value });
        }
    };
    EditableCell.prototype.render = function () {
        var _a = this.props, onCancel = _a.onCancel, onChange = _a.onChange, onConfirm = _a.onConfirm, truncated = _a.truncated, wrapText = _a.wrapText, spreadableProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["onCancel", "onChange", "onConfirm", "truncated", "wrapText"]);
        var _b = this.state, isEditing = _b.isEditing, dirtyValue = _b.dirtyValue, savedValue = _b.savedValue;
        var interactive = spreadableProps.interactive || isEditing;
        var cellContents = null;
        if (isEditing) {
            cellContents = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["EditableText"], { isEditing: true, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_EDITABLE_TEXT"], _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_EDITABLE_NAME"]), intent: spreadableProps.intent, minWidth: null, onCancel: this.handleCancel, onChange: this.handleChange, onConfirm: this.handleConfirm, onEdit: this.handleEdit, placeholder: "", selectAllOnFocus: false, value: dirtyValue }));
        }
        else {
            var textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_EDITABLE_TEXT"], (_c = {},
                _c[_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TRUNCATED_TEXT"]] = truncated,
                _c[_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_NO_WRAP_TEXT"]] = !wrapText,
                _c));
            cellContents = react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: textClasses }, savedValue);
        }
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_cell__WEBPACK_IMPORTED_MODULE_6__["Cell"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, spreadableProps, { truncated: false, interactive: interactive, cellRef: this.refHandlers.cell, onKeyPress: this.handleKeyPress }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_interactions_draggable__WEBPACK_IMPORTED_MODULE_5__["Draggable"], { onActivate: this.handleCellActivate, onDoubleClick: this.handleCellDoubleClick, preventDefault: false, stopPropagation: interactive }, cellContents)));
        var _c;
    };
    EditableCell.prototype.renderHotkeys = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Hotkeys"], null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Hotkey"], { key: "edit-cell", label: "Edit the currently focused cell", group: "Table", combo: "f2", onKeyDown: this.handleEdit })));
    };
    EditableCell.prototype.checkShouldFocus = function () {
        if (this.props.isFocused && !this.state.isEditing) {
            // don't focus if we're editing -- we'll lose the fact that we're editing
            this.cellRef.focus();
        }
    };
    EditableCell.prototype.invokeCallback = function (callback, value) {
        // pass through the row and column indices if they were provided as props by the consumer
        var _a = this.props, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex;
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].safeInvoke(callback, value, rowIndex, columnIndex);
    };
    EditableCell.defaultProps = {
        truncated: true,
        wrapText: false,
    };
    EditableCell = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["HotkeysTarget"]
    ], EditableCell);
    return EditableCell;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/cell/formats/jsonFormat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/cell/formats/jsonFormat.js ***!
  \****************************************************************************/
/*! exports provided: JSONFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONFormat", function() { return JSONFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _truncatedFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncatedFormat */ "./node_modules/@blueprintjs/table/lib/esm/cell/formats/truncatedFormat.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var JSONFormat = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JSONFormat, _super);
    function JSONFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONFormat.prototype.render = function () {
        var _a = this.props, children = _a.children, omitQuotesOnStrings = _a.omitQuotesOnStrings, stringify = _a.stringify;
        var showPopover = this.props.showPopover;
        // always hide popover if value is nully
        var isNully = children == null;
        if (isNully) {
            showPopover = _truncatedFormat__WEBPACK_IMPORTED_MODULE_4__["TruncatedPopoverMode"].NEVER;
        }
        var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, (_b = {},
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_NULL"]] = isNully,
            _b));
        var displayValue = "";
        if (omitQuotesOnStrings && typeof children === "string") {
            displayValue = children;
        }
        else {
            displayValue = stringify(children);
        }
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_truncatedFormat__WEBPACK_IMPORTED_MODULE_4__["TruncatedFormat"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { className: className, showPopover: showPopover }), displayValue));
        var _b;
    };
    JSONFormat.defaultProps = {
        omitQuotesOnStrings: true,
        stringify: function (obj) { return JSON.stringify(obj, null, 2); },
    };
    return JSONFormat;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/cell/formats/truncatedFormat.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/cell/formats/truncatedFormat.js ***!
  \*********************************************************************************/
/*! exports provided: TruncatedPopoverMode, TruncatedFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatedPopoverMode", function() { return TruncatedPopoverMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatedFormat", function() { return TruncatedFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/* harmony import */ var _locator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../locator */ "./node_modules/@blueprintjs/table/lib/esm/locator.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */







// amount in pixels that the content div width changes when truncated vs when
// not truncated. Note: could be modified by styles
// Note 2: this doesn't come from the width of the popover element, but the "right" style
// on the div, which comes from styles
var CONTENT_DIV_WIDTH_DELTA = 25;
var TruncatedPopoverMode;
(function (TruncatedPopoverMode) {
    TruncatedPopoverMode["ALWAYS"] = "always";
    TruncatedPopoverMode["NEVER"] = "never";
    TruncatedPopoverMode["WHEN_TRUNCATED"] = "when-truncated";
    TruncatedPopoverMode["WHEN_TRUNCATED_APPROX"] = "when-truncated-approx";
})(TruncatedPopoverMode || (TruncatedPopoverMode = {}));
var TruncatedFormat = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TruncatedFormat, _super);
    function TruncatedFormat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isPopoverOpen: false,
            isTruncated: false,
        };
        _this.handleContentDivRef = function (ref) { return (_this.contentDiv = ref); };
        _this.handlePopoverOpen = function () {
            _this.setState({ isPopoverOpen: true });
        };
        _this.handlePopoverClose = function () {
            _this.setState({ isPopoverOpen: false });
        };
        return _this;
    }
    TruncatedFormat.prototype.componentDidMount = function () {
        this.setTruncationState();
    };
    TruncatedFormat.prototype.componentDidUpdate = function () {
        this.setTruncationState();
    };
    TruncatedFormat.prototype.render = function () {
        var _a = this.props, children = _a.children, detectTruncation = _a.detectTruncation, truncateLength = _a.truncateLength, truncationSuffix = _a.truncationSuffix;
        var content = "" + children;
        var cellContent = content;
        if (!detectTruncation && truncateLength > 0 && cellContent.length > truncateLength) {
            cellContent = cellContent.substring(0, truncateLength) + truncationSuffix;
        }
        if (this.shouldShowPopover(content)) {
            var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(this.props.className, _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TRUNCATED_FORMAT"]);
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: className },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TRUNCATED_VALUE"], ref: this.handleContentDivRef }, cellContent),
                this.renderPopover()));
        }
        else {
            var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(this.props.className, _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TRUNCATED_FORMAT_TEXT"]);
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: className, ref: this.handleContentDivRef }, cellContent));
        }
    };
    TruncatedFormat.prototype.renderPopover = function () {
        var _a = this.props, children = _a.children, preformatted = _a.preformatted;
        // `<Popover>` will always check the content's position on update
        // regardless if it is open or not. This negatively affects perf due to
        // layout thrashing. So instead we manage the popover state ourselves
        // and mimic its popover target
        if (this.state.isPopoverOpen) {
            var popoverClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TRUNCATED_POPOVER"], preformatted ? _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_POPOVER_WHITESPACE_PRE"] : _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_POPOVER_WHITESPACE_NORMAL"]);
            var popoverContent = react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: popoverClasses }, children);
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Popover"], { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TRUNCATED_POPOVER_TARGET"], modifiers: { preventOverflow: { boundariesElement: "window" } }, content: popoverContent, position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Position"].BOTTOM, isOpen: true, onClose: this.handlePopoverClose },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], { icon: "more" })));
        }
        else {
            // NOTE: This structure matches what `<Popover>` does internally. If
            // `<Popover>` changes, this must be updated.
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TRUNCATED_POPOVER_TARGET"], onClick: this.handlePopoverOpen },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], { icon: "more" })));
        }
    };
    TruncatedFormat.prototype.shouldShowPopover = function (content) {
        var _a = this.props, detectTruncation = _a.detectTruncation, measureByApproxOptions = _a.measureByApproxOptions, showPopover = _a.showPopover, truncateLength = _a.truncateLength;
        switch (showPopover) {
            case TruncatedPopoverMode.ALWAYS:
                return true;
            case TruncatedPopoverMode.NEVER:
                return false;
            case TruncatedPopoverMode.WHEN_TRUNCATED:
                return detectTruncation
                    ? this.state.isTruncated
                    : truncateLength > 0 && content.length > truncateLength;
            case TruncatedPopoverMode.WHEN_TRUNCATED_APPROX:
                if (!detectTruncation) {
                    return truncateLength > 0 && content.length > truncateLength;
                }
                if (this.props.parentCellHeight == null || this.props.parentCellWidth == null) {
                    return false;
                }
                var approximateCharWidth = measureByApproxOptions.approximateCharWidth, approximateLineHeight = measureByApproxOptions.approximateLineHeight, cellHorizontalPadding = measureByApproxOptions.cellHorizontalPadding, numBufferLines = measureByApproxOptions.numBufferLines;
                var cellWidth = this.props.parentCellWidth;
                var approxCellHeight = _common_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].getApproxCellHeight(content, cellWidth, approximateCharWidth, approximateLineHeight, cellHorizontalPadding, numBufferLines);
                var shouldTruncate = approxCellHeight > this.props.parentCellHeight;
                return shouldTruncate;
            default:
                return false;
        }
    };
    TruncatedFormat.prototype.setTruncationState = function () {
        if (!this.props.detectTruncation || this.props.showPopover !== TruncatedPopoverMode.WHEN_TRUNCATED) {
            return;
        }
        if (this.contentDiv === undefined) {
            this.setState({ isTruncated: false });
            return;
        }
        var isTruncated = this.state.isTruncated;
        // take all measurements at once to avoid excessive DOM reflows.
        var _a = this.contentDiv, containerHeight = _a.clientHeight, containerWidth = _a.clientWidth, actualContentHeight = _a.scrollHeight, contentWidth = _a.scrollWidth;
        // if the content is truncated, then a popover handle will be present as a
        // sibling of the content. we don't want to consider that handle when
        // calculating the width of the actual content, so subtract it.
        var actualContentWidth = isTruncated ? contentWidth - CONTENT_DIV_WIDTH_DELTA : contentWidth;
        // we of course truncate the content if it doesn't fit in the container. but we
        // also aggressively truncate if they're the same size with truncation enabled;
        // this addresses browser-crashing stack-overflow bugs at various zoom levels.
        // (see: https://github.com/palantir/blueprint/pull/1519)
        var shouldTruncate = (isTruncated && actualContentWidth === containerWidth) ||
            actualContentWidth > containerWidth ||
            actualContentHeight > containerHeight;
        this.setState({ isTruncated: shouldTruncate });
    };
    TruncatedFormat.defaultProps = {
        detectTruncation: false,
        measureByApproxOptions: {
            approximateCharWidth: 8,
            approximateLineHeight: 18,
            cellHorizontalPadding: 2 * _locator__WEBPACK_IMPORTED_MODULE_6__["Locator"].CELL_HORIZONTAL_PADDING,
            numBufferLines: 0,
        },
        preformatted: false,
        showPopover: TruncatedPopoverMode.WHEN_TRUNCATED,
        truncateLength: 2000,
        truncationSuffix: "...",
    };
    return TruncatedFormat;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/column.js":
/*!***********************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/column.js ***!
  \***********************************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cell_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell/cell */ "./node_modules/@blueprintjs/table/lib/esm/cell/cell.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



var Column = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.defaultProps = {
        cellRenderer: _cell_cell__WEBPACK_IMPORTED_MODULE_2__["emptyCellRenderer"],
    };
    return Column;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/batcher.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/batcher.js ***!
  \*******************************************************************/
/*! exports provided: Batcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Batcher", function() { return Batcher; });
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _requestIdleCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestIdleCallback */ "./node_modules/@blueprintjs/table/lib/esm/common/requestIdleCallback.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */


/**
 * This class helps batch updates to large lists.
 *
 * For example, if your React component has many children, updating them all at
 * once may cause jank when reconciling the DOM. This class helps you update
 * only a few children per frame.
 *
 * A typical usage would be:
 *
 * ```tsx
 * public renderChildren = (allChildrenKeys: string[]) => {
 *
 *     batcher.startNewBatch();
 *
 *     allChildrenKeys.forEach((prop1: string, index: number) => {
 *         batcher.addArgsToBatch(prop1, "prop2", index);
 *     });
 *
 *     batcher.removeOldAddNew((prop1: string, prop2: string, other: number) => {
 *         return <Child prop1={prop1} prop2={prop2} other={other} />;
 *     });
 *
 *     if (!batcher.isDone()) {
 *         batcher.idleCallback(this.forceUpdate());
 *     }
 *
 *     const currentChildren = batcher.getList();
 *     return currentChildren;
 * }
 *
 * ```
 */
var Batcher = /** @class */ (function () {
    function Batcher() {
        var _this = this;
        this.currentObjects = {};
        this.oldObjects = {};
        this.batchArgs = {};
        this.done = true;
        this.handleIdleCallback = function () {
            var callback = _this.callback;
            delete _this.callback;
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Utils"].safeInvoke(callback);
        };
        this.mapCurrentObjectKey = function (key) {
            return _this.currentObjects[key];
        };
    }
    /**
     * Resets the "batch" and "current" sets. This essentially clears the cache
     * and prevents accidental re-use of "current" objects.
     */
    Batcher.prototype.reset = function () {
        this.batchArgs = {};
        this.oldObjects = this.currentObjects;
        this.currentObjects = {};
    };
    /**
     * Starts a new "batch" argument set
     */
    Batcher.prototype.startNewBatch = function () {
        this.batchArgs = {};
    };
    /**
     * Stores the variadic arguments to be later batched together.
     *
     * The arguments must be simple stringifyable objects.
     */
    Batcher.prototype.addArgsToBatch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.batchArgs[this.getKey(args)] = args;
    };
    /**
     * Compares the set of "batch" arguments to the "current" set. Creates any
     * new objects using the callback as a factory. Removes old objects.
     *
     * Arguments that are in the "current" set but were not part of the last
     * "batch" set are considered candidates for removal. Similarly, Arguments
     * that are part of the "batch" set but not the "current" set are candidates
     * for addition.
     *
     * The number of objects added and removed may be limited with the
     * `...Limit` parameters.
     *
     * Finally, the batcher determines if the batching is complete if the
     * "current" arguments match the "batch" arguments.
     */
    Batcher.prototype.removeOldAddNew = function (callback, addNewLimit, removeOldLimit, updateLimit) {
        var _this = this;
        if (addNewLimit === void 0) { addNewLimit = Batcher.DEFAULT_ADD_LIMIT; }
        if (removeOldLimit === void 0) { removeOldLimit = Batcher.DEFAULT_REMOVE_LIMIT; }
        if (updateLimit === void 0) { updateLimit = Batcher.DEFAULT_UPDATE_LIMIT; }
        // remove old
        var keysToRemove = this.setKeysDifference(this.currentObjects, this.batchArgs, removeOldLimit);
        keysToRemove.forEach(function (key) { return delete _this.currentObjects[key]; });
        // remove ALL old objects not in batch
        var keysToRemoveOld = this.setKeysDifference(this.oldObjects, this.batchArgs, -1);
        keysToRemoveOld.forEach(function (key) { return delete _this.oldObjects[key]; });
        // copy ALL old objects into current objects if not defined
        var keysToShallowCopy = Object.keys(this.oldObjects);
        keysToShallowCopy.forEach(function (key) {
            if (_this.currentObjects[key] == null) {
                _this.currentObjects[key] = _this.oldObjects[key];
            }
        });
        // update old objects with factory
        var keysToUpdate = this.setKeysIntersection(this.oldObjects, this.currentObjects, updateLimit);
        keysToUpdate.forEach(function (key) {
            delete _this.oldObjects[key];
            _this.currentObjects[key] = callback.apply(undefined, _this.batchArgs[key]);
        });
        // add new objects with factory
        var keysToAdd = this.setKeysDifference(this.batchArgs, this.currentObjects, addNewLimit);
        keysToAdd.forEach(function (key) { return (_this.currentObjects[key] = callback.apply(undefined, _this.batchArgs[key])); });
        // set `done` to true of sets match exactly after add/remove and there
        // are no "old objects" remaining
        this.done =
            this.setHasSameKeys(this.batchArgs, this.currentObjects) && Object.keys(this.oldObjects).length === 0;
    };
    /**
     * Returns true of the "current" set matches the "batch" set.
     */
    Batcher.prototype.isDone = function () {
        return this.done;
    };
    /**
     * Returns all the objects in the "current" set.
     */
    Batcher.prototype.getList = function () {
        return Object.keys(this.currentObjects).map(this.mapCurrentObjectKey);
    };
    /**
     * Registers a callback to be invoked on the next idle frame. If a callback
     * has already been registered, we do not register a new one.
     */
    Batcher.prototype.idleCallback = function (callback) {
        if (!this.callback) {
            this.callback = callback;
            Object(_requestIdleCallback__WEBPACK_IMPORTED_MODULE_1__["requestIdleCallback"])(this.handleIdleCallback);
        }
    };
    Batcher.prototype.cancelOutstandingCallback = function () {
        delete this.callback;
    };
    /**
     * Forcibly overwrites the current list of batched objects. Not recommended
     * for normal usage.
     */
    Batcher.prototype.setList = function (objectsArgs, objects) {
        var _this = this;
        this.reset();
        objectsArgs.forEach(function (args, i) {
            _this.addArgsToBatch.apply(_this, args);
            _this.currentObjects[_this.getKey(args)] = objects[i];
        });
        this.done = true;
    };
    Batcher.prototype.getKey = function (args) {
        return args.join(Batcher.ARG_DELIMITER);
    };
    Batcher.prototype.setKeysDifference = function (a, b, limit) {
        return this.setKeysOperation(a, b, "difference", limit);
    };
    Batcher.prototype.setKeysIntersection = function (a, b, limit) {
        return this.setKeysOperation(a, b, "intersect", limit);
    };
    /**
     * Compares the keys of A from B -- and performs an "intersection" or
     * "difference" operation on the keys.
     *
     * Note that the order of operands A and B matters for the "difference"
     * operation.
     *
     * Returns an array of at most `limit` keys.
     */
    Batcher.prototype.setKeysOperation = function (a, b, operation, limit) {
        var result = [];
        var aKeys = Object.keys(a);
        for (var i = 0; i < aKeys.length && (limit < 0 || result.length < limit); i++) {
            var key = aKeys[i];
            if ((operation === "difference" && a[key] && !b[key]) || (operation === "intersect" && a[key] && b[key])) {
                result.push(key);
            }
        }
        return result;
    };
    /**
     * Returns true of objects `a` and `b` have exactly the same keys.
     */
    Batcher.prototype.setHasSameKeys = function (a, b) {
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        for (var _i = 0, aKeys_1 = aKeys; _i < aKeys_1.length; _i++) {
            var aKey = aKeys_1[_i];
            if (b[aKey] === undefined) {
                return false;
            }
        }
        return true;
    };
    Batcher.DEFAULT_ADD_LIMIT = 20;
    Batcher.DEFAULT_UPDATE_LIMIT = 20;
    Batcher.DEFAULT_REMOVE_LIMIT = 20;
    Batcher.ARG_DELIMITER = "|";
    return Batcher;
}());



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/classes.js ***!
  \*******************************************************************/
/*! exports provided: TABLE_BODY, TABLE_BODY_SCROLL_CLIENT, TABLE_BODY_VIRTUAL_CLIENT, TABLE_BOTTOM_CONTAINER, TABLE_CELL, TABLE_CELL_CLIENT, TABLE_CELL_GHOST, TABLE_CELL_INTERACTIVE, TABLE_CELL_LEDGER_EVEN, TABLE_CELL_LEDGER_ODD, TABLE_COLUMN_HEADER_TR, TABLE_COLUMN_HEADERS, TABLE_COLUMN_HEADER_CELL, TABLE_COLUMN_NAME, TABLE_COLUMN_NAME_TEXT, TABLE_CONTAINER, TABLE_DRAGGING, TABLE_EDITABLE_NAME, TABLE_EDITABLE_TEXT, TABLE_FOCUS_REGION, TABLE_HAS_INTERACTION_BAR, TABLE_HAS_REORDER_HANDLE, TABLE_HEADER, TABLE_HEADER_ACTIVE, TABLE_HEADER_CONTENT, TABLE_HEADER_REORDERABLE, TABLE_HEADER_SELECTED, TABLE_HORIZONTAL_CELL_DIVIDER, TABLE_HORIZONTAL_GUIDE, TABLE_INTERACTION_BAR, TABLE_LAST_IN_COLUMN, TABLE_LAST_IN_ROW, TABLE_MENU, TABLE_NO_HORIZONTAL_SCROLL, TABLE_NO_LAYOUT, TABLE_NO_ROWS, TABLE_NO_VERTICAL_SCROLL, TABLE_NO_WRAP_TEXT, TABLE_NULL, TABLE_OVERLAY, TABLE_OVERLAY_LAYER, TABLE_OVERLAY_REORDERING_CURSOR, TABLE_POPOVER_WHITESPACE_NORMAL, TABLE_POPOVER_WHITESPACE_PRE, TABLE_QUADRANT, TABLE_QUADRANT_BODY_CONTAINER, TABLE_QUADRANT_LEFT, TABLE_QUADRANT_MAIN, TABLE_QUADRANT_SCROLL_CONTAINER, TABLE_QUADRANT_STACK, TABLE_QUADRANT_TOP, TABLE_QUADRANT_TOP_LEFT, TABLE_REGION, TABLE_REORDER_HANDLE, TABLE_REORDER_HANDLE_TARGET, TABLE_REORDERING, TABLE_RESIZE_GUIDES, TABLE_RESIZE_HANDLE, TABLE_RESIZE_HANDLE_TARGET, TABLE_RESIZE_HORIZONTAL, TABLE_RESIZE_SENSOR, TABLE_RESIZE_SENSOR_EXPAND, TABLE_RESIZE_SENSOR_SHRINK, TABLE_RESIZE_VERTICAL, TABLE_ROUNDED_LAYOUT, TABLE_ROW_HEADERS, TABLE_ROW_HEADERS_CELLS_CONTAINER, TABLE_ROW_NAME, TABLE_ROW_NAME_TEXT, TABLE_SELECTION_ENABLED, TABLE_SELECTION_REGION, TABLE_TH_MENU, TABLE_TH_MENU_CONTAINER, TABLE_TH_MENU_CONTAINER_BACKGROUND, TABLE_TH_MENU_OPEN, TABLE_THEAD, TABLE_TOP_CONTAINER, TABLE_TRUNCATED_CELL, TABLE_TRUNCATED_FORMAT, TABLE_TRUNCATED_FORMAT_TEXT, TABLE_TRUNCATED_POPOVER, TABLE_TRUNCATED_POPOVER_TARGET, TABLE_TRUNCATED_TEXT, TABLE_TRUNCATED_VALUE, TABLE_VERTICAL_GUIDE, columnIndexClass, rowIndexClass, columnCellIndexClass, rowCellIndexClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_BODY", function() { return TABLE_BODY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_BODY_SCROLL_CLIENT", function() { return TABLE_BODY_SCROLL_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_BODY_VIRTUAL_CLIENT", function() { return TABLE_BODY_VIRTUAL_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_BOTTOM_CONTAINER", function() { return TABLE_BOTTOM_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CELL", function() { return TABLE_CELL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CELL_CLIENT", function() { return TABLE_CELL_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CELL_GHOST", function() { return TABLE_CELL_GHOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CELL_INTERACTIVE", function() { return TABLE_CELL_INTERACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CELL_LEDGER_EVEN", function() { return TABLE_CELL_LEDGER_EVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CELL_LEDGER_ODD", function() { return TABLE_CELL_LEDGER_ODD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_COLUMN_HEADER_TR", function() { return TABLE_COLUMN_HEADER_TR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_COLUMN_HEADERS", function() { return TABLE_COLUMN_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_COLUMN_HEADER_CELL", function() { return TABLE_COLUMN_HEADER_CELL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_COLUMN_NAME", function() { return TABLE_COLUMN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_COLUMN_NAME_TEXT", function() { return TABLE_COLUMN_NAME_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CONTAINER", function() { return TABLE_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_DRAGGING", function() { return TABLE_DRAGGING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_EDITABLE_NAME", function() { return TABLE_EDITABLE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_EDITABLE_TEXT", function() { return TABLE_EDITABLE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_FOCUS_REGION", function() { return TABLE_FOCUS_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HAS_INTERACTION_BAR", function() { return TABLE_HAS_INTERACTION_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HAS_REORDER_HANDLE", function() { return TABLE_HAS_REORDER_HANDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEADER", function() { return TABLE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEADER_ACTIVE", function() { return TABLE_HEADER_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEADER_CONTENT", function() { return TABLE_HEADER_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEADER_REORDERABLE", function() { return TABLE_HEADER_REORDERABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEADER_SELECTED", function() { return TABLE_HEADER_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HORIZONTAL_CELL_DIVIDER", function() { return TABLE_HORIZONTAL_CELL_DIVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HORIZONTAL_GUIDE", function() { return TABLE_HORIZONTAL_GUIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_INTERACTION_BAR", function() { return TABLE_INTERACTION_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_LAST_IN_COLUMN", function() { return TABLE_LAST_IN_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_LAST_IN_ROW", function() { return TABLE_LAST_IN_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_MENU", function() { return TABLE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NO_HORIZONTAL_SCROLL", function() { return TABLE_NO_HORIZONTAL_SCROLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NO_LAYOUT", function() { return TABLE_NO_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NO_ROWS", function() { return TABLE_NO_ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NO_VERTICAL_SCROLL", function() { return TABLE_NO_VERTICAL_SCROLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NO_WRAP_TEXT", function() { return TABLE_NO_WRAP_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NULL", function() { return TABLE_NULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_OVERLAY", function() { return TABLE_OVERLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_OVERLAY_LAYER", function() { return TABLE_OVERLAY_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_OVERLAY_REORDERING_CURSOR", function() { return TABLE_OVERLAY_REORDERING_CURSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_POPOVER_WHITESPACE_NORMAL", function() { return TABLE_POPOVER_WHITESPACE_NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_POPOVER_WHITESPACE_PRE", function() { return TABLE_POPOVER_WHITESPACE_PRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_QUADRANT", function() { return TABLE_QUADRANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_QUADRANT_BODY_CONTAINER", function() { return TABLE_QUADRANT_BODY_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_QUADRANT_LEFT", function() { return TABLE_QUADRANT_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_QUADRANT_MAIN", function() { return TABLE_QUADRANT_MAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_QUADRANT_SCROLL_CONTAINER", function() { return TABLE_QUADRANT_SCROLL_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_QUADRANT_STACK", function() { return TABLE_QUADRANT_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_QUADRANT_TOP", function() { return TABLE_QUADRANT_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_QUADRANT_TOP_LEFT", function() { return TABLE_QUADRANT_TOP_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_REGION", function() { return TABLE_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_REORDER_HANDLE", function() { return TABLE_REORDER_HANDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_REORDER_HANDLE_TARGET", function() { return TABLE_REORDER_HANDLE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_REORDERING", function() { return TABLE_REORDERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_RESIZE_GUIDES", function() { return TABLE_RESIZE_GUIDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_RESIZE_HANDLE", function() { return TABLE_RESIZE_HANDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_RESIZE_HANDLE_TARGET", function() { return TABLE_RESIZE_HANDLE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_RESIZE_HORIZONTAL", function() { return TABLE_RESIZE_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_RESIZE_SENSOR", function() { return TABLE_RESIZE_SENSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_RESIZE_SENSOR_EXPAND", function() { return TABLE_RESIZE_SENSOR_EXPAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_RESIZE_SENSOR_SHRINK", function() { return TABLE_RESIZE_SENSOR_SHRINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_RESIZE_VERTICAL", function() { return TABLE_RESIZE_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_ROUNDED_LAYOUT", function() { return TABLE_ROUNDED_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_ROW_HEADERS", function() { return TABLE_ROW_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_ROW_HEADERS_CELLS_CONTAINER", function() { return TABLE_ROW_HEADERS_CELLS_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_ROW_NAME", function() { return TABLE_ROW_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_ROW_NAME_TEXT", function() { return TABLE_ROW_NAME_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_SELECTION_ENABLED", function() { return TABLE_SELECTION_ENABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_SELECTION_REGION", function() { return TABLE_SELECTION_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TH_MENU", function() { return TABLE_TH_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TH_MENU_CONTAINER", function() { return TABLE_TH_MENU_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TH_MENU_CONTAINER_BACKGROUND", function() { return TABLE_TH_MENU_CONTAINER_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TH_MENU_OPEN", function() { return TABLE_TH_MENU_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_THEAD", function() { return TABLE_THEAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TOP_CONTAINER", function() { return TABLE_TOP_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TRUNCATED_CELL", function() { return TABLE_TRUNCATED_CELL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TRUNCATED_FORMAT", function() { return TABLE_TRUNCATED_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TRUNCATED_FORMAT_TEXT", function() { return TABLE_TRUNCATED_FORMAT_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TRUNCATED_POPOVER", function() { return TABLE_TRUNCATED_POPOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TRUNCATED_POPOVER_TARGET", function() { return TABLE_TRUNCATED_POPOVER_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TRUNCATED_TEXT", function() { return TABLE_TRUNCATED_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TRUNCATED_VALUE", function() { return TABLE_TRUNCATED_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_VERTICAL_GUIDE", function() { return TABLE_VERTICAL_GUIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnIndexClass", function() { return columnIndexClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowIndexClass", function() { return rowIndexClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnCellIndexClass", function() { return columnCellIndexClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowCellIndexClass", function() { return rowCellIndexClass; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var TABLE_BODY = "pt-table-body";
var TABLE_BODY_SCROLL_CLIENT = "pt-table-body-scroll-client";
var TABLE_BODY_VIRTUAL_CLIENT = "pt-table-body-virtual-client";
var TABLE_BOTTOM_CONTAINER = "pt-table-bottom-container";
var TABLE_CELL = "pt-table-cell";
var TABLE_CELL_CLIENT = "pt-table-cell-client";
var TABLE_CELL_GHOST = "pt-table-cell-ghost";
var TABLE_CELL_INTERACTIVE = "pt-table-cell-interactive";
var TABLE_CELL_LEDGER_EVEN = "pt-table-cell-ledger-even";
var TABLE_CELL_LEDGER_ODD = "pt-table-cell-ledger-odd";
var TABLE_COLUMN_HEADER_TR = "pt-table-column-header-tr";
var TABLE_COLUMN_HEADERS = "pt-table-column-headers";
var TABLE_COLUMN_HEADER_CELL = "pt-table-column-header-cell";
var TABLE_COLUMN_NAME = "pt-table-column-name";
var TABLE_COLUMN_NAME_TEXT = "pt-table-column-name-text";
var TABLE_CONTAINER = "pt-table-container";
var TABLE_DRAGGING = "pt-table-dragging";
var TABLE_EDITABLE_NAME = "pt-table-editable-name";
var TABLE_EDITABLE_TEXT = "pt-table-editable-text";
var TABLE_FOCUS_REGION = "pt-table-focus-region";
var TABLE_HAS_INTERACTION_BAR = "pt-table-has-interaction-bar";
var TABLE_HAS_REORDER_HANDLE = "pt-table-has-reorder-handle";
var TABLE_HEADER = "pt-table-header";
var TABLE_HEADER_ACTIVE = "pt-table-header-active";
var TABLE_HEADER_CONTENT = "pt-table-header-content";
var TABLE_HEADER_REORDERABLE = "pt-table-header-reorderable";
var TABLE_HEADER_SELECTED = "pt-table-header-selected";
var TABLE_HORIZONTAL_CELL_DIVIDER = "pt-table-horizontal-cell-divider";
var TABLE_HORIZONTAL_GUIDE = "pt-table-horizontal-guide";
var TABLE_INTERACTION_BAR = "pt-table-interaction-bar";
var TABLE_LAST_IN_COLUMN = "pt-table-last-in-column";
var TABLE_LAST_IN_ROW = "pt-table-last-in-row";
var TABLE_MENU = "pt-table-menu";
var TABLE_NO_HORIZONTAL_SCROLL = "pt-table-no-horizontal-scroll";
var TABLE_NO_LAYOUT = "pt-table-no-layout";
var TABLE_NO_ROWS = "pt-table-no-rows";
var TABLE_NO_VERTICAL_SCROLL = "pt-table-no-vertical-scroll";
var TABLE_NO_WRAP_TEXT = "pt-table-no-wrap-text";
var TABLE_NULL = "pt-table-null";
var TABLE_OVERLAY = "pt-table-overlay";
var TABLE_OVERLAY_LAYER = "pt-table-overlay-layer";
var TABLE_OVERLAY_REORDERING_CURSOR = "pt-table-reordering-cursor-overlay";
var TABLE_POPOVER_WHITESPACE_NORMAL = "pt-table-popover-whitespace-normal";
var TABLE_POPOVER_WHITESPACE_PRE = "pt-table-popover-whitespace-pre";
var TABLE_QUADRANT = "pt-table-quadrant";
var TABLE_QUADRANT_BODY_CONTAINER = "pt-table-quadrant-body-container";
var TABLE_QUADRANT_LEFT = "pt-table-quadrant-left";
var TABLE_QUADRANT_MAIN = "pt-table-quadrant-main";
var TABLE_QUADRANT_SCROLL_CONTAINER = "pt-table-quadrant-scroll-container";
var TABLE_QUADRANT_STACK = "pt-table-quadrant-stack";
var TABLE_QUADRANT_TOP = "pt-table-quadrant-top";
var TABLE_QUADRANT_TOP_LEFT = "pt-table-quadrant-top-left";
var TABLE_REGION = "pt-table-region";
var TABLE_REORDER_HANDLE = "pt-table-reorder-handle";
var TABLE_REORDER_HANDLE_TARGET = "pt-table-reorder-handle-target";
var TABLE_REORDERING = "pt-table-reordering";
var TABLE_RESIZE_GUIDES = "pt-table-resize-guides";
var TABLE_RESIZE_HANDLE = "pt-table-resize-handle";
var TABLE_RESIZE_HANDLE_TARGET = "pt-table-resize-handle-target";
var TABLE_RESIZE_HORIZONTAL = "pt-table-resize-horizontal";
var TABLE_RESIZE_SENSOR = "pt-table-resize-sensor";
var TABLE_RESIZE_SENSOR_EXPAND = "pt-table-resize-sensor-expand";
var TABLE_RESIZE_SENSOR_SHRINK = "pt-table-resize-sensor-shrink";
var TABLE_RESIZE_VERTICAL = "pt-table-resize-vertical";
var TABLE_ROUNDED_LAYOUT = "pt-table-rounded-layout";
var TABLE_ROW_HEADERS = "pt-table-row-headers";
var TABLE_ROW_HEADERS_CELLS_CONTAINER = "pt-table-row-headers-cells-container";
var TABLE_ROW_NAME = "pt-table-row-name";
var TABLE_ROW_NAME_TEXT = "pt-table-row-name-text";
var TABLE_SELECTION_ENABLED = "pt-table-selection-enabled";
var TABLE_SELECTION_REGION = "pt-table-selection-region";
var TABLE_TH_MENU = "pt-table-th-menu";
var TABLE_TH_MENU_CONTAINER = "pt-table-th-menu-container";
var TABLE_TH_MENU_CONTAINER_BACKGROUND = "pt-table-th-menu-container-background";
var TABLE_TH_MENU_OPEN = "pt-table-th-menu-open";
var TABLE_THEAD = "pt-table-thead";
var TABLE_TOP_CONTAINER = "pt-table-top-container";
var TABLE_TRUNCATED_CELL = "pt-table-truncated-cell";
var TABLE_TRUNCATED_FORMAT = "pt-table-truncated-format";
var TABLE_TRUNCATED_FORMAT_TEXT = "pt-table-truncated-format-text";
var TABLE_TRUNCATED_POPOVER = "pt-table-truncated-popover";
var TABLE_TRUNCATED_POPOVER_TARGET = "pt-table-truncated-popover-target";
var TABLE_TRUNCATED_TEXT = "pt-table-truncated-text";
var TABLE_TRUNCATED_VALUE = "pt-table-truncated-value";
var TABLE_VERTICAL_GUIDE = "pt-table-vertical-guide";
/** Common code for row and column index class generator functions, since they're essentially the same. */
function dimensionIndexClass(classPrefix, index) {
    if (index == null) {
        return undefined;
    }
    if (typeof index === "number") {
        return "" + classPrefix + index;
    }
    return index.indexOf(classPrefix) === 0 ? index : "" + classPrefix + index;
}
/** Return CSS class for table colummn index, whether or not 'pt-table-col-' prefix is included. */
function columnIndexClass(columnIndex) {
    return dimensionIndexClass("pt-table-col-", columnIndex);
}
/** Return CSS class for table row index, whether or not 'pt-table-row-' prefix is included. */
function rowIndexClass(rowIndex) {
    return dimensionIndexClass("pt-table-row-", rowIndex);
}
/** Return CSS class for table colummn cell index, whether or not 'pt-table-cell-col-' prefix is included. */
function columnCellIndexClass(columnIndex) {
    return dimensionIndexClass("pt-table-cell-col-", columnIndex);
}
/** Return CSS class for table row cell index, whether or not 'pt-table-cell-row-' prefix is included. */
function rowCellIndexClass(rowIndex) {
    return dimensionIndexClass("pt-table-cell-row-", rowIndex);
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/clipboard.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/clipboard.js ***!
  \*********************************************************************/
/*! exports provided: Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
/* istanbul ignore next */
var Clipboard = {
    /**
     * Overrides the inherited CSS of the element to make sure it is
     * selectable. This method also makes the element pseudo-invisible.
     */
    applySelectableStyles: function (elem) {
        elem.style.overflow = "hidden";
        elem.style.height = "0px";
        elem.style.setProperty("-webkit-user-select", "all");
        elem.style.setProperty("-moz-user-select", "all");
        elem.style.setProperty("-ms-user-select", "all");
        elem.style.setProperty("user-select", "all");
        return elem;
    },
    /**
     * Copies table cells to the clipboard. The parameter is a row-major
     * 2-dimensional `Array` of strings and can contain nulls. We assume all
     * rows are the same length. If not, the cells will still be copied, but
     * the columns may not align. Returns a boolean indicating whether the
     * copy succeeded.
     *
     * See `Clipboard.copy`
     */
    copyCells: function (cells) {
        var table = document.createElement("table");
        Clipboard.applySelectableStyles(table);
        for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
            var row = cells_1[_i];
            var tr = table.appendChild(document.createElement("tr"));
            for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
                var cell = row_1[_a];
                var td = tr.appendChild(document.createElement("td"));
                td.textContent = cell;
            }
        }
        var tsv = cells.map(function (row) { return row.join("\t"); }).join("\n");
        return Clipboard.copyElement(table, tsv);
    },
    /**
     * Copies the text to the clipboard. Returns a boolean
     * indicating whether the copy succeeded.
     *
     * See `Clipboard.copy`
     */
    copyString: function (value) {
        var text = document.createElement("textarea");
        Clipboard.applySelectableStyles(text);
        text.value = value;
        return Clipboard.copyElement(text, value);
    },
    /**
     * Copies the element and its children to the clipboard. Returns a boolean
     * indicating whether the copy succeeded.
     *
     * If a plaintext argument is supplied, we add both the text/html and
     * text/plain mime types to the clipboard. This preserves the built in
     * semantics of copying elements to the clipboard while allowing custom
     * plaintext output for programs that can't cope with HTML data in the
     * clipboard.
     *
     * Verified on Firefox 47, Chrome 51.
     *
     * Note: Sometimes the copy does not succeed. Presumably, in order to
     * prevent memory issues, browsers will limit the total amount of data you
     * can copy to the clipboard. Based on ad hoc testing, we found an
     * inconsistent limit at about 300KB or 40,000 cells. Depending on the on
     * the content of cells, your limits may vary.
     */
    copyElement: function (elem, plaintext) {
        if (!Clipboard.isCopySupported()) {
            return false;
        }
        // must be document.body instead of document.documentElement for firefox
        document.body.appendChild(elem);
        try {
            window.getSelection().selectAllChildren(elem);
            if (plaintext != null) {
                // add plaintext fallback
                // http://stackoverflow.com/questions/23211018/copy-to-clipboard-with-jquery-js-in-chrome
                elem.addEventListener("copy", function (e) {
                    e.preventDefault();
                    var clipboardData = e.clipboardData || window.clipboardData;
                    if (clipboardData != null) {
                        clipboardData.setData("text/html", elem.outerHTML);
                        clipboardData.setData("text/plain", plaintext);
                    }
                });
            }
            return document.execCommand("copy");
        }
        catch (err) {
            return false;
        }
        finally {
            document.body.removeChild(elem);
        }
    },
    /**
     * Returns a boolean indicating whether the current browser nominally
     * supports the `copy` operation using the `execCommand` API.
     */
    isCopySupported: function () {
        return document.queryCommandSupported != null && document.queryCommandSupported("copy");
    },
};


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/context.js ***!
  \*******************************************************************/
/*! exports provided: columnInteractionBarContextTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnInteractionBarContextTypes", function() { return columnInteractionBarContextTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

var columnInteractionBarContextTypes = {
    enableColumnInteractionBar: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
};


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/contextMenuTargetWrapper.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/contextMenuTargetWrapper.js ***!
  \************************************************************************************/
/*! exports provided: ContextMenuTargetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTargetWrapper", function() { return ContextMenuTargetWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



/**
 * Since the ContextMenuTarget uses the `onContextMenu` prop instead
 * `element.addEventListener`, the prop can be lost. This wrapper helps us
 * maintain context menu fuctionality when doing fancy React.cloneElement
 * chains.
 */
var ContextMenuTargetWrapper = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextMenuTargetWrapper, _super);
    function ContextMenuTargetWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextMenuTargetWrapper.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, style = _a.style;
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: className, style: style }, children));
    };
    ContextMenuTargetWrapper.prototype.renderContextMenu = function (e) {
        return this.props.renderContextMenu(e);
    };
    ContextMenuTargetWrapper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["ContextMenuTarget"]
    ], ContextMenuTargetWrapper);
    return ContextMenuTargetWrapper;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/direction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/direction.js ***!
  \*********************************************************************/
/*! exports provided: Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var Direction;
(function (Direction) {
    Direction["UP"] = "up";
    Direction["DOWN"] = "down";
    Direction["LEFT"] = "left";
    Direction["RIGHT"] = "right";
})(Direction || (Direction = {}));


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/errors.js":
/*!******************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/errors.js ***!
  \******************************************************************/
/*! exports provided: QUADRANT_ON_SCROLL_UNNECESSARILY_DEFINED, TABLE_EXPAND_FOCUSED_REGION_MULTI_COLUMN_REGION, TABLE_EXPAND_FOCUSED_REGION_MULTI_ROW_REGION, TABLE_NON_COLUMN_CHILDREN_WARNING, TABLE_NUM_FROZEN_COLUMNS_BOUND_WARNING, TABLE_NUM_FROZEN_COLUMNS_NEGATIVE, TABLE_NUM_FROZEN_ROWS_BOUND_WARNING, TABLE_NUM_FROZEN_ROWS_NEGATIVE, TABLE_NUM_ROWS_ROW_HEIGHTS_MISMATCH, TABLE_NUM_ROWS_NEGATIVE, TABLE_NUM_COLUMNS_COLUMN_WIDTHS_MISMATCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUADRANT_ON_SCROLL_UNNECESSARILY_DEFINED", function() { return QUADRANT_ON_SCROLL_UNNECESSARILY_DEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_EXPAND_FOCUSED_REGION_MULTI_COLUMN_REGION", function() { return TABLE_EXPAND_FOCUSED_REGION_MULTI_COLUMN_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_EXPAND_FOCUSED_REGION_MULTI_ROW_REGION", function() { return TABLE_EXPAND_FOCUSED_REGION_MULTI_ROW_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NON_COLUMN_CHILDREN_WARNING", function() { return TABLE_NON_COLUMN_CHILDREN_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NUM_FROZEN_COLUMNS_BOUND_WARNING", function() { return TABLE_NUM_FROZEN_COLUMNS_BOUND_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NUM_FROZEN_COLUMNS_NEGATIVE", function() { return TABLE_NUM_FROZEN_COLUMNS_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NUM_FROZEN_ROWS_BOUND_WARNING", function() { return TABLE_NUM_FROZEN_ROWS_BOUND_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NUM_FROZEN_ROWS_NEGATIVE", function() { return TABLE_NUM_FROZEN_ROWS_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NUM_ROWS_ROW_HEIGHTS_MISMATCH", function() { return TABLE_NUM_ROWS_ROW_HEIGHTS_MISMATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NUM_ROWS_NEGATIVE", function() { return TABLE_NUM_ROWS_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NUM_COLUMNS_COLUMN_WIDTHS_MISMATCH", function() { return TABLE_NUM_COLUMNS_COLUMN_WIDTHS_MISMATCH; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var ns = "[Blueprint Table]";
// const deprec = `${ns} DEPRECATION:`;
var QUADRANT_ON_SCROLL_UNNECESSARILY_DEFINED = ns + " <TableQuadrant> onScroll need not be defined for any quadrant aside from the MAIN quadrant.";
var TABLE_EXPAND_FOCUSED_REGION_MULTI_COLUMN_REGION = ns + " <Table> Cannot expand a FULL_COLUMNS selection using a multi-column region.";
var TABLE_EXPAND_FOCUSED_REGION_MULTI_ROW_REGION = ns + " <Table> Cannot expand a FULL_COLUMNS selection using a multi-row region.";
var TABLE_NON_COLUMN_CHILDREN_WARNING = ns + " <Table> Children of Table must be Columns\"";
var TABLE_NUM_FROZEN_COLUMNS_BOUND_WARNING = ns +
    " <Table> numFrozenColumns must be in less than or equal to the number of columns. Clamping the value for you.";
var TABLE_NUM_FROZEN_COLUMNS_NEGATIVE = ns + " <Table> requires numFrozenColumns to be greater than or equal to 0.";
var TABLE_NUM_FROZEN_ROWS_BOUND_WARNING = ns + " <Table> numFrozenRows must be less than or equal to numRows. Clamping the value for you.";
var TABLE_NUM_FROZEN_ROWS_NEGATIVE = ns + " <Table> requires numFrozenRows to be greater than or equal to 0.";
var TABLE_NUM_ROWS_ROW_HEIGHTS_MISMATCH = ns + " <Table> requires rowHeights.length to equal numRows when both props are provided.";
var TABLE_NUM_ROWS_NEGATIVE = ns + " <Table> requires numRows to be greater than or equal to 0.";
var TABLE_NUM_COLUMNS_COLUMN_WIDTHS_MISMATCH = ns + " <Table> requires columnWidths.length to equal the number of <Column>s if provided.";


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/grid.js":
/*!****************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/grid.js ***!
  \****************************************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rect */ "./node_modules/@blueprintjs/table/lib/esm/common/rect.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





/**
 * This class manages the sizes of grid cells using arrays of individual row/column sizes.
 */
var Grid = /** @class */ (function () {
    /**
     * This constructor accumulates the heights and widths in `O(n)`, saving
     * time in later calculations.
     *
     * @param bleed - The number of rows/cols that we expand beyond the
     *     viewport (on all sides). This helps avoid displaying an empty
     *     viewport when the user scrolls quickly.
     */
    function Grid(rowHeights, columnWidths, bleed, ghostHeight, ghostWidth) {
        if (bleed === void 0) { bleed = Grid.DEFAULT_BLEED; }
        if (ghostHeight === void 0) { ghostHeight = Grid.DEFAULT_GHOST_HEIGHT; }
        if (ghostWidth === void 0) { ghostWidth = Grid.DEFAULT_GHOST_WIDTH; }
        var _this = this;
        this.getCumulativeWidthBefore = function (index) {
            return index === 0 ? 0 : _this.getCumulativeWidthAt(index - 1);
        };
        this.getCumulativeWidthAt = function (index) {
            if (_this.numCols === 0) {
                return _this.ghostWidth * index;
            }
            else if (index >= _this.numCols) {
                return _this.cumulativeColumnWidths[_this.numCols - 1] + _this.ghostWidth * (index - _this.numCols + 1);
            }
            else {
                return _this.cumulativeColumnWidths[index];
            }
        };
        this.getCumulativeHeightBefore = function (index) {
            return index === 0 ? 0 : _this.getCumulativeHeightAt(index - 1);
        };
        this.getCumulativeHeightAt = function (index) {
            if (_this.numRows === 0) {
                return _this.ghostHeight * index;
            }
            else if (index >= _this.numRows) {
                return _this.cumulativeRowHeights[_this.numRows - 1] + _this.ghostHeight * (index - _this.numRows + 1);
            }
            else {
                return _this.cumulativeRowHeights[index];
            }
        };
        this.columnWidths = columnWidths;
        this.rowHeights = rowHeights;
        this.cumulativeColumnWidths = _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].accumulate(columnWidths);
        this.cumulativeRowHeights = _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].accumulate(rowHeights);
        this.numCols = columnWidths.length;
        this.numRows = rowHeights.length;
        this.bleed = bleed;
        this.ghostHeight = ghostHeight;
        this.ghostWidth = ghostWidth;
    }
    /**
     * Returns the `Rect` bounds of a cell in scrollpane client space.
     *
     * Scrollpane client coordinate space uses the origin of the scrollpane
     * client (the inside part that you're moving around).
     *
     * For example, let's say you're scrolling around a block of 1000 x 1000
     * cells. Regardless where you've scrolled, the first cell is always at
     * 0,0 in scrollpane client space. the cell to the right of it is always
     * at, e.g., 100,0.
     */
    Grid.prototype.getCellRect = function (rowIndex, columnIndex) {
        var height = this.rowHeights[rowIndex];
        var top = this.cumulativeRowHeights[rowIndex] - height;
        var width = this.columnWidths[columnIndex];
        var left = this.cumulativeColumnWidths[columnIndex] - width;
        return new _rect__WEBPACK_IMPORTED_MODULE_3__["Rect"](left, top, width, height);
    };
    /**
     * Returns the `Rect` bounds of a cell in scrollpane client space.
     *
     * If the cell is beyond the bounds of the user-defined table cells, it is
     * considered a "ghost" cell. If a width/height is not defined for that
     * row/column, we use the default width/height.
     */
    Grid.prototype.getGhostCellRect = function (rowIndex, columnIndex) {
        var left = 0;
        var top = 0;
        var width = 0;
        var height = 0;
        if (rowIndex >= this.rowHeights.length) {
            height = this.ghostHeight;
            top = this.getHeight() + this.ghostHeight * (rowIndex - this.numRows);
        }
        else {
            height = this.rowHeights[rowIndex];
            top = this.cumulativeRowHeights[rowIndex] - height;
        }
        if (columnIndex >= this.columnWidths.length) {
            width = this.ghostWidth;
            left = this.getWidth() + this.ghostWidth * (columnIndex - this.numCols);
        }
        else {
            width = this.columnWidths[columnIndex];
            left = this.cumulativeColumnWidths[columnIndex] - width;
        }
        return new _rect__WEBPACK_IMPORTED_MODULE_3__["Rect"](left, top, width, height);
    };
    /**
     * Returns the `Rect` with the base coordinate and height of the specified row.
     */
    Grid.prototype.getRowRect = function (rowIndex) {
        var height = this.rowHeights[rowIndex];
        var top = this.cumulativeRowHeights[rowIndex] - height;
        return new _rect__WEBPACK_IMPORTED_MODULE_3__["Rect"](0, top, this.getWidth(), height);
    };
    /**
     * Returns the `Rect` with the base coordinate and width of the specified column.
     */
    Grid.prototype.getColumnRect = function (columnIndex) {
        var width = this.columnWidths[columnIndex];
        var left = this.cumulativeColumnWidths[columnIndex] - width;
        return new _rect__WEBPACK_IMPORTED_MODULE_3__["Rect"](left, 0, width, this.getHeight());
    };
    /**
     * Returns the total width of the entire grid
     */
    Grid.prototype.getWidth = function () {
        return this.numCols === 0 ? 0 : this.cumulativeColumnWidths[this.numCols - 1];
    };
    /**
     * Returns the total width of the entire grid
     */
    Grid.prototype.getHeight = function () {
        return this.numRows === 0 ? 0 : this.cumulativeRowHeights[this.numRows - 1];
    };
    /**
     * Returns the `Rect` bounds of entire grid
     */
    Grid.prototype.getRect = function () {
        return new _rect__WEBPACK_IMPORTED_MODULE_3__["Rect"](0, 0, this.getWidth(), this.getHeight());
    };
    /**
     * Maps each cell that intersects with the given `Rect` argument. The
     * indices of iteration are extended in both directions by the integer
     * `bleed` class property, then are clamped between 0 and the number of
     * rows/columns.
     *
     * Uses a binary search for each of the 4 edges of the bounds, resulting
     * in a runtime of `O(log(rows) + log(cols))` plus the `O(irows * icols)`
     * iteration of intersecting cells.
     */
    Grid.prototype.mapCellsInRect = function (rect, callback) {
        var results = [];
        if (rect == null) {
            return results;
        }
        var _a = this.getRowIndicesInRect(rect), rowIndexStart = _a.rowIndexStart, rowIndexEnd = _a.rowIndexEnd;
        var _b = this.getColumnIndicesInRect(rect), columnIndexStart = _b.columnIndexStart, columnIndexEnd = _b.columnIndexEnd;
        for (var rowIndex = rowIndexStart; rowIndex <= rowIndexEnd; rowIndex++) {
            for (var columnIndex = columnIndexStart; columnIndex <= columnIndexEnd; columnIndex++) {
                results.push(callback(rowIndex, columnIndex));
            }
        }
        return results;
    };
    /**
     * Maps each row that intersects with the given `Rect` argument.
     *
     * See Grid.mapCellsInRect for more details.
     */
    Grid.prototype.mapRowsInRect = function (rect, callback) {
        var results = [];
        if (rect == null) {
            return results;
        }
        var _a = this.getRowIndicesInRect(rect), rowIndexStart = _a.rowIndexStart, rowIndexEnd = _a.rowIndexEnd;
        for (var rowIndex = rowIndexStart; rowIndex <= rowIndexEnd; rowIndex++) {
            results.push(callback(rowIndex));
        }
        return results;
    };
    /**
     * Maps each column that intersects with the given `Rect` argument.
     *
     * See Grid.mapCellsInRect for more details.
     */
    Grid.prototype.mapColumnsInRect = function (rect, callback) {
        var results = [];
        if (rect == null) {
            return results;
        }
        var _a = this.getColumnIndicesInRect(rect), columnIndexStart = _a.columnIndexStart, columnIndexEnd = _a.columnIndexEnd;
        for (var columnIndex = columnIndexStart; columnIndex <= columnIndexEnd; columnIndex++) {
            results.push(callback(columnIndex));
        }
        return results;
    };
    /**
     * Returns the start and end indices of rows that intersect with the given
     * `Rect` argument.
     */
    Grid.prototype.getRowIndicesInRect = function (rect, includeGhostCells, limit) {
        if (includeGhostCells === void 0) { includeGhostCells = false; }
        if (limit === void 0) { limit = Grid.DEFAULT_MAX_ROWS; }
        if (rect == null) {
            return { rowIndexEnd: 0, rowIndexStart: 0 };
        }
        var searchEnd = includeGhostCells ? Math.max(this.numRows, Grid.DEFAULT_MAX_ROWS) : this.numRows;
        var _a = this.getIndicesInInterval(rect.top, rect.top + rect.height, searchEnd, !includeGhostCells, this.getCumulativeHeightAt), start = _a.start, end = _a.end;
        var rowIndexEnd = limit > 0 && end - start > limit ? start + limit : end;
        return {
            rowIndexEnd: rowIndexEnd,
            rowIndexStart: start,
        };
    };
    /**
     * Returns the start and end indices of columns that intersect with the
     * given `Rect` argument.
     */
    Grid.prototype.getColumnIndicesInRect = function (rect, includeGhostCells, limit) {
        if (includeGhostCells === void 0) { includeGhostCells = false; }
        if (limit === void 0) { limit = Grid.DEFAULT_MAX_COLUMNS; }
        if (rect == null) {
            return { columnIndexEnd: 0, columnIndexStart: 0 };
        }
        var searchEnd = includeGhostCells ? Math.max(this.numCols, Grid.DEFAULT_MAX_COLUMNS) : this.numCols;
        var _a = this.getIndicesInInterval(rect.left, rect.left + rect.width, searchEnd, !includeGhostCells, this.getCumulativeWidthAt), start = _a.start, end = _a.end;
        var columnIndexEnd = limit > 0 && end - start > limit ? start + limit : end;
        return {
            columnIndexEnd: columnIndexEnd,
            columnIndexStart: start,
        };
    };
    Grid.prototype.isGhostIndex = function (rowIndex, columnIndex) {
        return rowIndex >= this.numRows || columnIndex >= this.numCols;
    };
    Grid.prototype.getExtremaClasses = function (rowIndex, columnIndex, rowEnd, columnEnd) {
        if (rowIndex === rowEnd && columnIndex === columnEnd) {
            return [_classes__WEBPACK_IMPORTED_MODULE_2__["TABLE_LAST_IN_COLUMN"], _classes__WEBPACK_IMPORTED_MODULE_2__["TABLE_LAST_IN_ROW"]];
        }
        if (rowIndex === rowEnd) {
            return [_classes__WEBPACK_IMPORTED_MODULE_2__["TABLE_LAST_IN_COLUMN"]];
        }
        if (columnIndex === columnEnd) {
            return [_classes__WEBPACK_IMPORTED_MODULE_2__["TABLE_LAST_IN_ROW"]];
        }
        return [];
    };
    Grid.prototype.getRegionStyle = function (region) {
        var cardinality = _regions__WEBPACK_IMPORTED_MODULE_1__["Regions"].getRegionCardinality(region);
        switch (cardinality) {
            case _regions__WEBPACK_IMPORTED_MODULE_1__["RegionCardinality"].CELLS: {
                var _a = region.rows, rowStart = _a[0], rowEnd = _a[1];
                var _b = region.cols, colStart = _b[0], colEnd = _b[1];
                // if the region is outside the bounds of the table, don't display it
                if (this.isGhostIndex(rowStart, colStart) || this.isGhostIndex(rowEnd, colEnd)) {
                    return { display: "none" };
                }
                var cellRect0 = this.getCellRect(rowStart, colStart);
                var cellRect1 = this.getCellRect(rowEnd, colEnd);
                var offsetLeft = colStart === 0 ? 0 : 1;
                var offsetTop = rowStart === 0 ? 0 : 1;
                var rect = cellRect0.union(cellRect1);
                rect.height += offsetTop;
                rect.left -= offsetLeft;
                rect.width += offsetLeft;
                rect.top -= offsetTop;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rect.style(), { display: "block" });
            }
            case _regions__WEBPACK_IMPORTED_MODULE_1__["RegionCardinality"].FULL_COLUMNS: {
                var _c = region.cols, colStart = _c[0], colEnd = _c[1];
                // if the region is outside the bounds of the table, don't display it
                if (this.isGhostIndex(0, colStart) || this.isGhostIndex(0, colEnd)) {
                    return { display: "none" };
                }
                var cellRect0 = this.getCellRect(0, colStart);
                var cellRect1 = this.getCellRect(0, colEnd);
                var rect = cellRect0.union(cellRect1);
                var offsetLeft = colStart === 0 ? 0 : 1;
                return {
                    bottom: 0,
                    display: "block",
                    left: rect.left - offsetLeft,
                    top: 0,
                    width: rect.width + offsetLeft,
                };
            }
            case _regions__WEBPACK_IMPORTED_MODULE_1__["RegionCardinality"].FULL_ROWS: {
                var _d = region.rows, rowStart = _d[0], rowEnd = _d[1];
                // if the region is outside the bounds of the table, don't display it
                if (this.isGhostIndex(rowStart, 0) || this.isGhostIndex(rowEnd, 0)) {
                    return { display: "none" };
                }
                var cellRect0 = this.getCellRect(rowStart, 0);
                var cellRect1 = this.getCellRect(rowEnd, 0);
                var rect = cellRect0.union(cellRect1);
                var offsetTop = rowStart === 0 ? 0 : 1;
                return {
                    display: "block",
                    height: rect.height + offsetTop,
                    left: 0,
                    right: 0,
                    top: rect.top - offsetTop,
                };
            }
            case _regions__WEBPACK_IMPORTED_MODULE_1__["RegionCardinality"].FULL_TABLE:
                return {
                    bottom: 0,
                    display: "block",
                    left: 0,
                    right: 0,
                    top: 0,
                };
            default:
                return { display: "none" };
        }
    };
    Grid.prototype.getIndicesInInterval = function (min, max, count, useEndBleed, lookup) {
        var start = _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].binarySearch(min, count - 1, lookup);
        var end = _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].binarySearch(max, count - 1, lookup);
        // correct exact pixel alignment
        if (start >= 0 && min === lookup(start)) {
            start += 1;
        }
        // apply bounded bleeds
        start = Math.max(0, start - this.bleed);
        if (useEndBleed) {
            end = Math.min(count - 1, end + this.bleed);
        }
        else {
            end = Math.min(count - 1, end);
        }
        return { start: start, end: end };
    };
    Grid.DEFAULT_BLEED = 3;
    Grid.DEFAULT_MAX_COLUMNS = 50;
    Grid.DEFAULT_MAX_ROWS = 200;
    Grid.DEFAULT_GHOST_HEIGHT = 20;
    Grid.DEFAULT_GHOST_WIDTH = 150;
    return Grid;
}());



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/index.js ***!
  \*****************************************************************/
/*! exports provided: Clipboard, Grid, Rect, RenderMode, Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard */ "./node_modules/@blueprintjs/table/lib/esm/common/clipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _clipboard__WEBPACK_IMPORTED_MODULE_0__["Clipboard"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./node_modules/@blueprintjs/table/lib/esm/common/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_1__["Grid"]; });

/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rect */ "./node_modules/@blueprintjs/table/lib/esm/common/rect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _rect__WEBPACK_IMPORTED_MODULE_2__["Rect"]; });

/* harmony import */ var _renderMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderMode */ "./node_modules/@blueprintjs/table/lib/esm/common/renderMode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderMode", function() { return _renderMode__WEBPACK_IMPORTED_MODULE_3__["RenderMode"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"]; });

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





// NOTE: The following are not exported in the public API:
// - Errors
// - internal/


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/internal/directionUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/internal/directionUtils.js ***!
  \***********************************************************************************/
/*! exports provided: directionToDelta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionToDelta", function() { return directionToDelta; });
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../direction */ "./node_modules/@blueprintjs/table/lib/esm/common/direction.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

function directionToDelta(direction) {
    switch (direction) {
        case _direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].UP:
            return { rows: -1, cols: 0 };
        case _direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].DOWN:
            return { rows: +1, cols: 0 };
        case _direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT:
            return { rows: 0, cols: -1 };
        case _direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].RIGHT:
            return { rows: 0, cols: +1 };
        default:
            return undefined;
    }
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/internal/focusedCellUtils.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/internal/focusedCellUtils.js ***!
  \*************************************************************************************/
/*! exports provided: getFocusedOrLastSelectedIndex, getInitialFocusedCell, isFocusedCellAtRegionTop, isFocusedCellAtRegionBottom, isFocusedCellAtRegionLeft, isFocusedCellAtRegionRight, toFullCoordinates, expandFocusedRegion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusedOrLastSelectedIndex", function() { return getFocusedOrLastSelectedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialFocusedCell", function() { return getInitialFocusedCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusedCellAtRegionTop", function() { return isFocusedCellAtRegionTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusedCellAtRegionBottom", function() { return isFocusedCellAtRegionBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusedCellAtRegionLeft", function() { return isFocusedCellAtRegionLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusedCellAtRegionRight", function() { return isFocusedCellAtRegionRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFullCoordinates", function() { return toFullCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandFocusedRegion", function() { return expandFocusedRegion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./node_modules/@blueprintjs/table/lib/esm/common/errors.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



/**
 * Returns the `focusedSelectionIndex` if both the focused cell and that
 * property are defined, or the last index of `selectedRegions` otherwise. If
 * `selectedRegions` is empty, the function always returns `undefined`.
 */
function getFocusedOrLastSelectedIndex(selectedRegions, focusedCell) {
    if (selectedRegions.length === 0) {
        return undefined;
    }
    else if (focusedCell != null) {
        return focusedCell.focusSelectionIndex;
    }
    else {
        return selectedRegions.length - 1;
    }
}
/**
 * Returns the proper focused cell for the given set of initial conditions.
 */
function getInitialFocusedCell(enableFocusedCell, focusedCellFromProps, focusedCellFromState, selectedRegions) {
    if (!enableFocusedCell) {
        return undefined;
    }
    else if (focusedCellFromProps != null) {
        // controlled mode
        return focusedCellFromProps;
    }
    else if (focusedCellFromState != null) {
        // use the current focused cell from state
        return focusedCellFromState;
    }
    else if (selectedRegions.length > 0) {
        // focus the top-left cell of the last selection
        var lastIndex = selectedRegions.length - 1;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _regions__WEBPACK_IMPORTED_MODULE_1__["Regions"].getFocusCellCoordinatesFromRegion(selectedRegions[lastIndex]), { focusSelectionIndex: lastIndex });
    }
    else {
        // focus the top-left cell of the table
        return { col: 0, row: 0, focusSelectionIndex: 0 };
    }
}
/**
 * Returns `true` if the focused cell is located along the top boundary of the
 * provided region, or `false` otherwise.
 */
function isFocusedCellAtRegionTop(region, focusedCell) {
    return region.rows != null && focusedCell.row === region.rows[0];
}
/**
 * Returns `true` if the focused cell is located along the bottom boundary of
 * the provided region, or `false` otherwise.
 */
function isFocusedCellAtRegionBottom(region, focusedCell) {
    return region.rows != null && focusedCell.row === region.rows[1];
}
/**
 * Returns `true` if the focused cell is located along the left boundary of the
 * provided region, or `false` otherwise.
 */
function isFocusedCellAtRegionLeft(region, focusedCell) {
    return region.cols != null && focusedCell.col === region.cols[0];
}
/**
 * Returns `true` if the focused cell is located along the right boundary of the
 * provided region, or `false` otherwise.
 */
function isFocusedCellAtRegionRight(region, focusedCell) {
    return region.cols != null && focusedCell.col === region.cols[1];
}
/**
 * Returns a new cell-coordinates object that includes a focusSelectionIndex property.
 * The returned object will have the proper IFocusedCellCoordinates type.
 */
function toFullCoordinates(cellCoords, focusSelectionIndex) {
    if (focusSelectionIndex === void 0) { focusSelectionIndex = 0; }
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cellCoords, { focusSelectionIndex: focusSelectionIndex });
}
/**
 * Expands an existing region to new region based on the current focused cell.
 * The focused cell is an invariant and should not move as a result of this
 * operation. This function is used, for instance, to expand a selected region
 * on shift+click.
 */
function expandFocusedRegion(focusedCell, newRegion) {
    switch (_regions__WEBPACK_IMPORTED_MODULE_1__["Regions"].getRegionCardinality(newRegion)) {
        case _regions__WEBPACK_IMPORTED_MODULE_1__["RegionCardinality"].FULL_COLUMNS: {
            var _a = getExpandedRegionIndices(focusedCell, newRegion, "col", "cols"), indexStart = _a[0], indexEnd = _a[1];
            return _regions__WEBPACK_IMPORTED_MODULE_1__["Regions"].column(indexStart, indexEnd);
        }
        case _regions__WEBPACK_IMPORTED_MODULE_1__["RegionCardinality"].FULL_ROWS: {
            var _b = getExpandedRegionIndices(focusedCell, newRegion, "row", "rows"), indexStart = _b[0], indexEnd = _b[1];
            return _regions__WEBPACK_IMPORTED_MODULE_1__["Regions"].row(indexStart, indexEnd);
        }
        case _regions__WEBPACK_IMPORTED_MODULE_1__["RegionCardinality"].CELLS:
            var _c = getExpandedRegionIndices(focusedCell, newRegion, "row", "rows"), rowIndexStart = _c[0], rowIndexEnd = _c[1];
            var _d = getExpandedRegionIndices(focusedCell, newRegion, "col", "cols"), colIndexStart = _d[0], colIndexEnd = _d[1];
            return _regions__WEBPACK_IMPORTED_MODULE_1__["Regions"].cell(rowIndexStart, colIndexStart, rowIndexEnd, colIndexEnd);
        default:
            // i.e. `case RegionCardinality.FULL_TABLE:`
            return _regions__WEBPACK_IMPORTED_MODULE_1__["Regions"].table();
    }
}
function getExpandedRegionIndices(focusedCell, newRegion, focusedCellDimension, regionDimension) {
    var sourceIndex = focusedCell[focusedCellDimension];
    var _a = newRegion[regionDimension], destinationIndex = _a[0], destinationIndexEnd = _a[1];
    if (destinationIndex !== destinationIndexEnd) {
        if (regionDimension === "rows") {
            throw new Error(_errors__WEBPACK_IMPORTED_MODULE_2__["TABLE_EXPAND_FOCUSED_REGION_MULTI_ROW_REGION"]);
        }
        else if (regionDimension === "cols") {
            throw new Error(_errors__WEBPACK_IMPORTED_MODULE_2__["TABLE_EXPAND_FOCUSED_REGION_MULTI_COLUMN_REGION"]);
        }
    }
    return sourceIndex <= destinationIndex ? [sourceIndex, destinationIndex] : [destinationIndex, sourceIndex];
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/internal/platformUtils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/internal/platformUtils.js ***!
  \**********************************************************************************/
/*! exports provided: isMac, isModKeyPressed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return isMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModKeyPressed", function() { return isModKeyPressed; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
/**
 * Returns `true` if `navigator.platform` matches a known Mac platform, or
 * `false` otherwise.
 */
function isMac(platformOverride) {
    var platformActual = typeof navigator !== "undefined" ? navigator.platform : undefined;
    var platform = platformOverride != null ? platformOverride : platformActual;
    return platform == null ? false : /Mac|iPod|iPhone|iPad/.test(platform);
}
/**
 * Returns `true` if (1) the platform is Mac and the keypress includes the `cmd`
 * key, or (2) the platform is non-Mac and the keypress includes the `ctrl` key.
 */
var isModKeyPressed = function (event, platformOverride) {
    var isMacPlatform = isMac(platformOverride);
    return (isMacPlatform && event.metaKey) || (!isMacPlatform && event.ctrlKey);
};


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/internal/scrollUtils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/internal/scrollUtils.js ***!
  \********************************************************************************/
/*! exports provided: getScrollPositionForRegion, measureScrollBarThickness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollPositionForRegion", function() { return getScrollPositionForRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollBarThickness", function() { return measureScrollBarThickness; });
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Returns the scroll{Left,Top} offsets of the provided region based on its
 * cardinality.
 */
function getScrollPositionForRegion(region, currScrollLeft, currScrollTop, getLeftOffset, getTopOffset, numFrozenRows, numFrozenColumns) {
    if (numFrozenRows === void 0) { numFrozenRows = 0; }
    if (numFrozenColumns === void 0) { numFrozenColumns = 0; }
    var cardinality = _regions__WEBPACK_IMPORTED_MODULE_0__["Regions"].getRegionCardinality(region);
    var scrollTop = currScrollTop;
    var scrollLeft = currScrollLeft;
    // if these were max-frozen-index values, we would have added 1 before passing to the get*Offset
    // functions, but the counts are already 1-indexed, so we can just pass those.
    var frozenColumnsCumulativeWidth = getLeftOffset(numFrozenColumns);
    var frozenRowsCumulativeHeight = getTopOffset(numFrozenRows);
    switch (cardinality) {
        case _regions__WEBPACK_IMPORTED_MODULE_0__["RegionCardinality"].CELLS: {
            // scroll to the top-left corner of the block of cells
            var topOffset = getTopOffset(region.rows[0]);
            var leftOffset = getLeftOffset(region.cols[0]);
            scrollTop = getClampedScrollPosition(topOffset, frozenRowsCumulativeHeight);
            scrollLeft = getClampedScrollPosition(leftOffset, frozenColumnsCumulativeWidth);
            break;
        }
        case _regions__WEBPACK_IMPORTED_MODULE_0__["RegionCardinality"].FULL_ROWS: {
            // scroll to the top of the row block
            var topOffset = getTopOffset(region.rows[0]);
            scrollTop = getClampedScrollPosition(topOffset, frozenRowsCumulativeHeight);
            break;
        }
        case _regions__WEBPACK_IMPORTED_MODULE_0__["RegionCardinality"].FULL_COLUMNS: {
            // scroll to the left side of the column block
            var leftOffset = getLeftOffset(region.cols[0]);
            scrollLeft = getClampedScrollPosition(leftOffset, frozenColumnsCumulativeWidth);
            break;
        }
        default: {
            // if it's a FULL_TABLE region, scroll back to the top-left cell of the table
            scrollTop = 0;
            scrollLeft = 0;
            break;
        }
    }
    return { scrollLeft: scrollLeft, scrollTop: scrollTop };
}
/**
 * Returns the thickness of the target scroll bar in pixels.
 * If the target scroll bar is not present, 0 is returned.
 */
function measureScrollBarThickness(element, direction) {
    // offset size includes the scroll bar. client size does not.
    // the difference gives the thickness of the scroll bar.
    return direction === "horizontal"
        ? element.offsetHeight - element.clientHeight
        : element.offsetWidth - element.clientWidth;
}
/**
 * Adjust the scroll position to align content just beyond the frozen region, if necessary.
 */
function getClampedScrollPosition(scrollOffset, frozenRegionCumulativeSize) {
    // if the new scroll offset falls within the frozen region, clamp it to 0
    return Math.max(scrollOffset - frozenRegionCumulativeSize, 0);
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/internal/selectionUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/internal/selectionUtils.js ***!
  \***********************************************************************************/
/*! exports provided: resizeRegion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeRegion", function() { return resizeRegion; });
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../direction */ "./node_modules/@blueprintjs/table/lib/esm/common/direction.js");
/* harmony import */ var _directionUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directionUtils */ "./node_modules/@blueprintjs/table/lib/esm/common/internal/directionUtils.js");
/* harmony import */ var _focusedCellUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusedCellUtils */ "./node_modules/@blueprintjs/table/lib/esm/common/internal/focusedCellUtils.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */




/**
 * Resizes the provided region by 1 row/column in the specified direction,
 * returning a new region instance. The region may either expand *or* contract
 * depending on the presence and location of the focused cell.
 *
 * If no focused cell is provided, the region will always be *expanded* in the
 * specified direction.
 *
 * If a focused cell *is* provided, the behavior will change depending on where
 * the focused cell is within the region:
 *
 *   1. If along a top/bottom boundary while resizing UP/DOWN, the resize will
 *      expand from or shrink to the focused cell (same if along a left/right
 *      boundary while moving LEFT/RIGHT).
 *   2. If *not* along a top/bottom boundary while resizing UP/DOWN (or if *not*
 *      along a left/right boundary while moving LEFT/RIGHT), the region will
 *      simply expand in the specified direction.
 *
 * Other notes:
 * - A CELLS region can be resized vertically or horizontally.
 * - A FULL_ROWS region can be resized only vertically.
 * - A FULL_COLUMNS region can be resized only horizontally.
 * - A FULL_TABLE region cannot be resized.
 *
 * This function does not clamp the indices of the returned region; that is the
 * responsibility of the caller.
 */
function resizeRegion(region, direction, focusedCell) {
    if (_regions__WEBPACK_IMPORTED_MODULE_0__["Regions"].getRegionCardinality(region) === _regions__WEBPACK_IMPORTED_MODULE_0__["RegionCardinality"].FULL_TABLE) {
        // return the same instance to maintain referential integrity and
        // possibly avoid unnecessary update lifecycles.
        return region;
    }
    var nextRegion = _regions__WEBPACK_IMPORTED_MODULE_0__["Regions"].copy(region);
    var affectedRowIndex = 0;
    var affectedColumnIndex = 0;
    if (focusedCell != null) {
        var isAtTop = _focusedCellUtils__WEBPACK_IMPORTED_MODULE_3__["isFocusedCellAtRegionTop"](nextRegion, focusedCell);
        var isAtBottom = _focusedCellUtils__WEBPACK_IMPORTED_MODULE_3__["isFocusedCellAtRegionBottom"](nextRegion, focusedCell);
        var isAtLeft = _focusedCellUtils__WEBPACK_IMPORTED_MODULE_3__["isFocusedCellAtRegionLeft"](nextRegion, focusedCell);
        var isAtRight = _focusedCellUtils__WEBPACK_IMPORTED_MODULE_3__["isFocusedCellAtRegionRight"](nextRegion, focusedCell);
        // the focused cell is found along the top and bottom boundary
        // simultaneously when the region is 1 row tall. check for this and
        // similar special cases.
        if (direction === _direction__WEBPACK_IMPORTED_MODULE_1__["Direction"].UP) {
            affectedRowIndex = isAtTop && !isAtBottom ? 1 : 0;
        }
        else if (direction === _direction__WEBPACK_IMPORTED_MODULE_1__["Direction"].DOWN) {
            affectedRowIndex = isAtBottom && !isAtTop ? 0 : 1;
        }
        else if (direction === _direction__WEBPACK_IMPORTED_MODULE_1__["Direction"].LEFT) {
            affectedColumnIndex = isAtLeft && !isAtRight ? 1 : 0;
        }
        else {
            // i.e. `Direction.RIGHT:`
            affectedColumnIndex = isAtRight && !isAtLeft ? 0 : 1;
        }
    }
    else {
        // when there is no focused cell, expand in the specified direction.
        affectedRowIndex = direction === _direction__WEBPACK_IMPORTED_MODULE_1__["Direction"].DOWN ? 1 : 0;
        affectedColumnIndex = direction === _direction__WEBPACK_IMPORTED_MODULE_1__["Direction"].RIGHT ? 1 : 0;
    }
    var delta = _directionUtils__WEBPACK_IMPORTED_MODULE_2__["directionToDelta"](direction);
    if (nextRegion.rows != null) {
        nextRegion.rows[affectedRowIndex] += delta.rows;
    }
    if (nextRegion.cols != null) {
        nextRegion.cols[affectedColumnIndex] += delta.cols;
    }
    // the new coordinates might be out of bounds. the caller is responsible for
    // sanitizing the result.
    return nextRegion;
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/loadableContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/loadableContent.js ***!
  \***************************************************************************/
/*! exports provided: LoadableContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadableContent", function() { return LoadableContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



// This class expects a single, non-string child.
var LoadableContent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoadableContent, _super);
    function LoadableContent(props) {
        var _this = _super.call(this, props) || this;
        _this.style = _this.calculateStyle(props.variableLength);
        return _this;
    }
    LoadableContent.prototype.componentWillReceiveProps = function (nextProps) {
        if ((!this.props.loading && nextProps.loading) || this.props.variableLength !== nextProps.variableLength) {
            this.style = this.calculateStyle(nextProps.variableLength);
        }
    };
    LoadableContent.prototype.render = function () {
        if (this.props.loading) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Classes"].SKELETON, style: this.style });
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
    };
    LoadableContent.prototype.calculateStyle = function (variableLength) {
        var skeletonLength = variableLength ? 75 - Math.floor(Math.random() * 11) * 5 : 100;
        return { width: skeletonLength + "%" };
    };
    return LoadableContent;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/rect.js":
/*!****************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/rect.js ***!
  \****************************************************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
// HACKHACK: workaround for https://github.com/palantir/tslint/issues/1768
// tslint:disable adjacent-overload-signatures
/**
 * A simple object for storing the client bounds of HTMLElements. Since
 * ClientRects are immutable, this object enables editing and some simple
 * manipulation methods.
 */
var Rect = /** @class */ (function () {
    function Rect(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }
    /**
     * Returns the smallest Rect that entirely contains the supplied rects
     */
    Rect.union = function (anyRect0, anyRect1) {
        var rect0 = Rect.wrap(anyRect0);
        var rect1 = Rect.wrap(anyRect1);
        var top = Math.min(rect0.top, rect1.top);
        var left = Math.min(rect0.left, rect1.left);
        var bottom = Math.max(rect0.top + rect0.height, rect1.top + rect1.height);
        var right = Math.max(rect0.left + rect0.width, rect1.left + rect1.width);
        var height = bottom - top;
        var width = right - left;
        return new Rect(left, top, width, height);
    };
    /**
     * Returns a new Rect that subtracts the origin of the second argument
     * from the first.
     */
    Rect.subtractOrigin = function (anyRect0, anyRect1) {
        var rect0 = Rect.wrap(anyRect0);
        var rect1 = Rect.wrap(anyRect1);
        return new Rect(rect0.left - rect1.left, rect0.top - rect1.top, rect0.width, rect0.height);
    };
    /**
     * Returns the CSS properties representing the absolute positioning of
     * this Rect.
     */
    Rect.style = function (rect) {
        return {
            height: rect.height + "px",
            left: rect.left + "px",
            position: "absolute",
            top: rect.top + "px",
            width: rect.width + "px",
        };
    };
    /**
     * Given a ClientRect or Rect object, returns a Rect object.
     */
    Rect.wrap = function (rect) {
        if (rect instanceof Rect) {
            return rect;
        }
        else {
            return new Rect(rect.left, rect.top, rect.width, rect.height);
        }
    };
    Rect.prototype.subtractOrigin = function (anyRect) {
        return Rect.subtractOrigin(this, anyRect);
    };
    Rect.prototype.union = function (anyRect) {
        return Rect.union(this, anyRect);
    };
    Rect.prototype.style = function () {
        return Rect.style(this);
    };
    Rect.prototype.sizeStyle = function () {
        return {
            height: this.height + "px",
            width: this.width + "px",
        };
    };
    Rect.prototype.containsX = function (clientX) {
        return clientX >= this.left && clientX <= this.left + this.width;
    };
    Rect.prototype.containsY = function (clientY) {
        return clientY >= this.top && clientY <= this.top + this.height;
    };
    Rect.prototype.equals = function (rect) {
        return (rect != null &&
            this.left === rect.left &&
            this.top === rect.top &&
            this.width === rect.width &&
            this.height === rect.height);
    };
    Rect.ORIGIN = new Rect(0, 0, 0, 0);
    return Rect;
}());



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/renderMode.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/renderMode.js ***!
  \**********************************************************************/
/*! exports provided: RenderMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMode", function() { return RenderMode; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var RenderMode;
(function (RenderMode) {
    /**
     * Renders cells in batches across multiple animation frames. This improves
     * performance by spreading out work to keep a high FPS and avoid blocking
     * the UI, but it also introduces a noticeable scan-line rendering artifact
     * as successive batches of cells finish rendering.
     */
    RenderMode["BATCH"] = "batch";
    /**
     * Renders all cells synchronously on initial mount, then renders cells in
     * batches on successive updates (e.g. during scrolling). This helps to
     * remove visual rendering artifacts when the table is first rendered,
     * wihout slowing scrolling performance to a crawl.
     */
    RenderMode["BATCH_ON_UPDATE"] = "batch-on-update";
    /**
     * Disables the batch-rendering behavior, rendering all cells synchronously
     * at once. This may result in degraded performance on large tables and/or
     * on tables with complex cells.
     */
    RenderMode["NONE"] = "none";
})(RenderMode || (RenderMode = {}));


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/requestIdleCallback.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/requestIdleCallback.js ***!
  \*******************************************************************************/
/*! exports provided: requestIdleCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestIdleCallback", function() { return requestIdleCallback; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
/**
 * Event name for `postMessage`
 */
var MESSAGE_EVENT_DATA = "blueprint-table-post-message";
/**
 * Object that holds state for managing idle callbacks
 */
var IDLE_STATE = {
    callbacks: [],
    triggered: false,
};
var handleIdle = function (event) {
    if (event.source !== window || event.data !== MESSAGE_EVENT_DATA) {
        return;
    }
    IDLE_STATE.triggered = false;
    var callback = null;
    if (IDLE_STATE.callbacks.length > 0) {
        callback = IDLE_STATE.callbacks.shift();
    }
    if (IDLE_STATE.callbacks.length > 0) {
        triggerIdleFrame();
    }
    // finally, invoke the callback. exceptions will be propagated
    if (callback) {
        callback();
    }
};
// check for window since we might be in a headless server environment
if (typeof window !== "undefined") {
    if (window.addEventListener != null) {
        window.addEventListener("message", handleIdle, false);
    }
}
var triggerIdleFrame = function () {
    if (IDLE_STATE.triggered) {
        return;
    }
    IDLE_STATE.triggered = true;
    /**
     * This is the magic that will wait for the browser to be "idle" before
     * invoking the callback.
     *
     * First, we use nested calls to `requestAnimationFrame` which will cause
     * the inner callback to be invoked on the NEXT FRAME.
     *
     * Then, we call to `postMessage` to invoke the `handleIdle` method only
     * once the current stack frame is empty.
     *
     * With this approach, the idle callback will be invoked at most once per
     * frame and only after the stack frame is empty.
     */
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            postMessage(MESSAGE_EVENT_DATA, "*");
        });
    });
};
/**
 * Invokes the provided callback on the next available frame after the stack
 * frame is empty.
 *
 * At most one callback per frame is invoked, and the callback may be delayed
 * multiple frames until the page is idle.
 *
 * TODO: return a token from this method that allows you to cancel the callback
 * (otherwise the callback list may increase without bound).
 */
var requestIdleCallback = function (callback) {
    IDLE_STATE.callbacks.push(callback);
    triggerIdleFrame();
};


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/common/utils.js ***!
  \*****************************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var CLASSNAME_EXCLUDED_FROM_TEXT_MEASUREMENT = "bp-table-text-no-measure";
/**
 * Since Firefox doesn't provide a computed "font" property, we manually
 * construct it using the ordered properties that can be specifed in CSS.
 */
var CSS_FONT_PROPERTIES = ["font-style", "font-variant", "font-weight", "font-size", "font-family"];
var Utils = {
    /**
     * Invokes the callback `n` times, collecting the results in an array, which
     * is the return value. Similar to _.times
     */
    times: function (n, callback) {
        if (n < 0) {
            throw new Error("[Blueprint] times() cannot be called with negative numbers.");
        }
        var result = Array(n);
        for (var index = 0; index < n; index++) {
            result[index] = callback(index);
        }
        return result;
    },
    /**
     * Takes an array of numbers, returns an array of numbers of the same length in which each
     * value is the sum of current and previous values in the input array.
     *
     * Example input:  [10, 20, 50]
     *         output: [10, 30, 80]
     */
    accumulate: function (numbers) {
        var result = [];
        var sum = 0;
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var num = numbers_1[_i];
            sum += num;
            result.push(sum);
        }
        return result;
    },
    /**
     * Returns traditional spreadsheet-style column names
     * e.g. (A, B, ..., Z, AA, AB, ..., ZZ, AAA, AAB, ...).
     *
     * Note that this isn't technically mathematically equivalent to base 26 since
     * there is no zero element.
     */
    toBase26Alpha: function (num) {
        var str = "";
        while (true) {
            var letter = num % 26;
            str = String.fromCharCode(65 + letter) + str;
            num = num - letter;
            if (num <= 0) {
                return str;
            }
            num = num / 26 - 1;
        }
    },
    /**
     * Returns traditional spreadsheet-style cell names
     * e.g. (A1, B2, ..., Z44, AA1) with rows 1-indexed.
     */
    toBase26CellName: function (rowIndex, columnIndex) {
        return "" + Utils.toBase26Alpha(columnIndex) + (rowIndex + 1);
    },
    /**
     * Performs the binary search algorithm to find the index of the `value`
     * parameter in a sorted list of numbers. If `value` is not in the list, the
     * index where `value` can be inserted to maintain the sort is returned.
     *
     * Unlike a typical binary search implementation, we use a `lookup`
     * callback to access the sorted list of numbers instead of an array. This
     * avoids additional storage overhead.
     *
     * We use this to, for example, find the index of a row/col given its client
     * coordinate.
     *
     * Adapted from lodash https://github.com/lodash/lodash/blob/4.11.2/lodash.js#L3579
     *
     * @param value - the query value
     * @param high - the length of the sorted list of numbers
     * @param lookup - returns the number from the list at the supplied index
     */
    binarySearch: function (value, high, lookup) {
        var low = 0;
        while (low < high) {
            var mid = Math.floor((low + high) / 2.0);
            var computed = lookup(mid);
            if (computed < value) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }
        return high;
    },
    /**
     * Returns a copy of the array that will have a length of the supplied parameter.
     * If the array is too long, it will be truncated. If it is too short, it will be
     * filled with the suppleid `fillValue` argument.
     *
     * @param array - the `Array` to copy and adjust
     * @param length - the target length of the array
     * @param fillValue - the value to add to the array if it is too short
     */
    arrayOfLength: function (array, length, fillValue) {
        if (array.length > length) {
            return array.slice(0, length);
        }
        array = array.slice();
        while (array.length < length) {
            array.push(fillValue);
        }
        return array;
    },
    /**
     * Takes in one full array of values and one sparse array of the same
     * length and type. Returns a copy of the `defaults` array, where each
     * value is replaced with the corresponding non-null value at the same
     * index in `sparseOverrides`.
     *
     * @param defaults - the full array of default values
     * @param sparseOverrides - the sparse array of override values
     */
    assignSparseValues: function (defaults, sparseOverrides) {
        if (sparseOverrides == null || defaults.length !== sparseOverrides.length) {
            return defaults;
        }
        defaults = defaults.slice();
        for (var i = 0; i < defaults.length; i++) {
            var override = sparseOverrides[i];
            if (override != null) {
                defaults[i] = override;
            }
        }
        return defaults;
    },
    /**
     * Measures the bounds of supplied element's textContent.
     * We use the computed font from the supplied element and a non-DOM canvas
     * context to measure the text.
     */
    measureElementTextContent: function (element) {
        var context = document.createElement("canvas").getContext("2d");
        var style = getComputedStyle(element, null);
        context.font = CSS_FONT_PROPERTIES.map(function (prop) { return style.getPropertyValue(prop); }).join(" ");
        return measureTextContentWithExclusions(context, element);
    },
    /**
     * Given a number, returns a value that is clamped within a
     * minimum/maximum bounded range. The minimum and maximum are optional. If
     * either is missing, that extrema limit is not applied.
     *
     * Assumes max >= min.
     */
    clamp: function (value, min, max) {
        if (min != null && value < min) {
            value = min;
        }
        if (max != null && value > max) {
            value = max;
        }
        return value;
    },
    /**
     * When reordering a contiguous block of rows or columns to a new index, we show a preview guide
     * at the absolute index in the original ordering but emit the new index in the reordered list.
     * This function converts an absolute "guide" index to a relative "reordered" index.
     *
     * Example: Say we want to move the first three columns two spots to the right. While we drag, a
     * vertical guide is shown to preview where we'll be dropping the columns. (In the following
     * ASCII art, `*` denotes a selected column, `·` denotes a cell border, and `|` denotes a
     * vertical guide).
     *
     *     Before mousedown:
     *     · 0 · 1 · 2 · 3 · 4 · 5 ·
     *       *   *   *
     *
     *     During mousemove two spots to the right:
     *     · 0 · 1 · 2 · 3 · 4 | 5 ·
     *       *   *   *
     *
     *     After mouseup:
     *     · 3 · 4 · 0 · 1 · 2 · 5 ·
     *               *   *   *
     *
     * Note that moving the three columns beyond index 4 effectively moves them two spots rightward.
     *
     * In this case, the inputs to this function would be:
     *     - oldIndex: 0 (the left-most index of the selected column range in the original ordering)
     *     - newIndex: 5 (the index on whose left boundary the guide appears in the original ordering)
     *     - length: 3 (the number of columns to move)
     *
     * The return value will then be 2, the left-most index of the columns in the new ordering.
     */
    guideIndexToReorderedIndex: function (oldIndex, newIndex, length) {
        if (newIndex < oldIndex) {
            return newIndex;
        }
        else if (oldIndex <= newIndex && newIndex < oldIndex + length) {
            return oldIndex;
        }
        else {
            return Math.max(0, newIndex - length);
        }
    },
    /**
     * When reordering a contiguous block of rows or columns to a new index, we show a preview guide
     * at the absolute index in the original ordering but emit the new index in the reordered list.
     * This function converts a relative "reordered"" index to an absolute "guide" index.
     *
     * For the scenario in the example above, the inputs to this function would be:
     *     - oldIndex: 0 (the left-most index of the selected column range in the original ordering)
     *     - newIndex: 2 (the left-most index of the selected column range in the new ordering)
     *     - length: 3 (the number of columns to move)
     *
     * The return value will then be 5, the index on whose left boundary the guide should appear in
     * the original ordering.
     */
    reorderedIndexToGuideIndex: function (oldIndex, newIndex, length) {
        return newIndex <= oldIndex ? newIndex : newIndex + length;
    },
    /**
     * Returns a copy of the provided array with the `length` contiguous elements starting at the
     * `from` index reordered to start at the `to` index.
     *
     * For example, given the array [A,B,C,D,E,F], reordering the 3 contiguous elements starting at
     * index 1 (B, C, and D) to start at index 2 would yield [A,E,B,C,D,F].
     */
    reorderArray: function (array, from, to, length) {
        if (length === void 0) { length = 1; }
        if (length === 0 || length === array.length || from === to) {
            // return an unchanged copy
            return array.slice();
        }
        if (length < 0 || length > array.length || from + length > array.length) {
            return undefined;
        }
        var before = array.slice(0, from);
        var within = array.slice(from, from + length);
        var after = array.slice(from + length);
        var result = [];
        var i = 0;
        var b = 0;
        var w = 0;
        var a = 0;
        while (i < to) {
            if (b < before.length) {
                result.push(before[b]);
                b += 1;
            }
            else {
                result.push(after[a]);
                a += 1;
            }
            i += 1;
        }
        while (w < length) {
            result.push(within[w]);
            w += 1;
            i += 1;
        }
        while (i < array.length) {
            if (b < before.length) {
                result.push(before[b]);
                b += 1;
            }
            else {
                result.push(after[a]);
                a += 1;
            }
            i += 1;
        }
        return result;
    },
    /**
     * Returns true if the mouse event was triggered by the left mouse button.
     */
    isLeftClick: function (event) {
        return event.button === 0;
    },
    getApproxCellHeight: function (cellText, columnWidth, approxCharWidth, approxLineHeight, horizontalPadding, numBufferLines) {
        var numCharsInCell = cellText == null ? 0 : cellText.length;
        var actualCellWidth = columnWidth;
        var availableCellWidth = actualCellWidth - horizontalPadding;
        var approxCharsPerLine = availableCellWidth / approxCharWidth;
        var approxNumLinesDesired = Math.ceil(numCharsInCell / approxCharsPerLine) + numBufferLines;
        var approxCellHeight = approxNumLinesDesired * approxLineHeight;
        return approxCellHeight;
    },
};
/**
 * Wrapper around Canvas measureText which applies some extra logic to optionally
 * exclude an element's text from the computation.
 */
function measureTextContentWithExclusions(context, element) {
    // We only expect one or zero excluded elements in this subtree
    // We don't have a need for more than one, so we avoid that complexity altogether.
    var elementToExclude = element.querySelector("." + CLASSNAME_EXCLUDED_FROM_TEXT_MEASUREMENT);
    var removedElementParent;
    var removedElementNextSibling;
    if (elementToExclude != null) {
        removedElementParent = elementToExclude.parentElement;
        removedElementNextSibling = elementToExclude.nextSibling;
        removedElementParent.removeChild(elementToExclude);
    }
    var metrics = context.measureText(element.textContent);
    if (elementToExclude != null) {
        removedElementParent.insertBefore(elementToExclude, removedElementNextSibling);
    }
    return metrics;
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/headers/columnHeader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/headers/columnHeader.js ***!
  \*************************************************************************/
/*! exports provided: ColumnHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnHeader", function() { return ColumnHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/index */ "./node_modules/@blueprintjs/table/lib/esm/common/index.js");
/* harmony import */ var _interactions_resizeHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interactions/resizeHandle */ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizeHandle.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _columnHeaderCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./columnHeaderCell */ "./node_modules/@blueprintjs/table/lib/esm/headers/columnHeaderCell.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header */ "./node_modules/@blueprintjs/table/lib/esm/headers/header.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var ColumnHeader = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ColumnHeader, _super);
    function ColumnHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapCells = function (cells) {
            var _a = _this.props, columnIndexStart = _a.columnIndexStart, grid = _a.grid;
            var tableWidth = grid.getRect().width;
            var scrollLeftCorrection = _this.props.grid.getCumulativeWidthBefore(columnIndexStart);
            var style = {
                // only header cells in view will render, but we need to reposition them to stay in view
                // as we scroll horizontally.
                transform: "translateX(" + (scrollLeftCorrection || 0) + "px)",
                // reduce the width to clamp the sliding window as we approach the final headers; otherwise,
                // we'll have tons of useless whitespace at the end.
                width: tableWidth - scrollLeftCorrection,
            };
            var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_THEAD"], _common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_COLUMN_HEADER_TR"]);
            // add a wrapper set to the full-table width to ensure container styles stretch from the first
            // cell all the way to the last
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { width: tableWidth } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: style, className: classes, ref: _this.props.measurableElementRef }, cells)));
        };
        _this.convertPointToColumn = function (clientXOrY, useMidpoint) {
            var locator = _this.props.locator;
            return locator != null ? locator.convertPointToColumn(clientXOrY, useMidpoint) : null;
        };
        _this.getCellExtremaClasses = function (index, indexEnd) {
            return _this.props.grid.getExtremaClasses(0, index, 1, indexEnd);
        };
        _this.getColumnWidth = function (index) {
            return _this.props.grid.getColumnRect(index).width;
        };
        _this.getDragCoordinate = function (clientCoords) {
            return clientCoords[0]; // x-coordinate
        };
        _this.getMouseCoordinate = function (event) {
            return event.clientX;
        };
        _this.handleResizeEnd = function (index, size) {
            _this.props.onResizeGuide(null);
            _this.props.onColumnWidthChanged(index, size);
        };
        _this.handleResizeDoubleClick = function (index) {
            var _a = _this.props, minColumnWidth = _a.minColumnWidth, maxColumnWidth = _a.maxColumnWidth;
            var width = _this.props.locator.getWidestVisibleCellInColumn(index);
            var clampedWidth = _common_index__WEBPACK_IMPORTED_MODULE_4__["Utils"].clamp(width, minColumnWidth, maxColumnWidth);
            _this.props.onResizeGuide(null);
            _this.props.onColumnWidthChanged(index, clampedWidth);
        };
        _this.handleSizeChanged = function (index, size) {
            var rect = _this.props.grid.getColumnRect(index);
            _this.props.onResizeGuide([rect.left + size]);
        };
        _this.isCellSelected = function (index) {
            return _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].hasFullColumn(_this.props.selectedRegions, index);
        };
        _this.isGhostIndex = function (index) {
            return _this.props.grid.isGhostIndex(-1, index);
        };
        _this.renderGhostCell = function (index, extremaClasses) {
            var _a = _this.props, grid = _a.grid, loading = _a.loading;
            var rect = grid.getGhostCellRect(0, index);
            var style = {
                flexBasis: rect.width + "px",
                width: rect.width + "px",
            };
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_columnHeaderCell__WEBPACK_IMPORTED_MODULE_7__["ColumnHeaderCell"], { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(extremaClasses), index: index, key: _common_classes__WEBPACK_IMPORTED_MODULE_3__["columnIndexClass"](index), loading: loading, style: style }));
        };
        _this.toRegion = function (index1, index2) {
            return _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].column(index1, index2);
        };
        return _this;
    }
    ColumnHeader.prototype.render = function () {
        var _a = this.props, 
        // from IColumnHeaderProps
        renderHeaderCell = _a.cellRenderer, onColumnWidthChanged = _a.onColumnWidthChanged, 
        // from IColumnWidths
        minSize = _a.minColumnWidth, maxSize = _a.maxColumnWidth, defaultColumnWidth = _a.defaultColumnWidth, 
        // from IColumnIndices
        indexStart = _a.columnIndexStart, indexEnd = _a.columnIndexEnd, 
        // from IHeaderProps
        spreadableProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["cellRenderer", "onColumnWidthChanged", "minColumnWidth", "maxColumnWidth", "defaultColumnWidth", "columnIndexStart", "columnIndexEnd"]);
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_header__WEBPACK_IMPORTED_MODULE_8__["Header"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ convertPointToIndex: this.convertPointToColumn, fullRegionCardinality: _regions__WEBPACK_IMPORTED_MODULE_6__["RegionCardinality"].FULL_COLUMNS, getCellExtremaClasses: this.getCellExtremaClasses, getCellIndexClass: _common_classes__WEBPACK_IMPORTED_MODULE_3__["columnCellIndexClass"], getCellSize: this.getColumnWidth, getDragCoordinate: this.getDragCoordinate, getIndexClass: _common_classes__WEBPACK_IMPORTED_MODULE_3__["columnIndexClass"], getMouseCoordinate: this.getMouseCoordinate, ghostCellRenderer: this.renderGhostCell, handleResizeDoubleClick: this.handleResizeDoubleClick, handleResizeEnd: this.handleResizeEnd, handleSizeChanged: this.handleSizeChanged, headerCellIsReorderablePropName: "enableColumnReordering", headerCellIsSelectedPropName: "isColumnSelected", headerCellRenderer: renderHeaderCell, indexEnd: indexEnd, indexStart: indexStart, isCellSelected: this.isCellSelected, isGhostIndex: this.isGhostIndex, maxSize: maxSize, minSize: minSize, resizeOrientation: _interactions_resizeHandle__WEBPACK_IMPORTED_MODULE_5__["Orientation"].VERTICAL, selectedRegions: [], toRegion: this.toRegion, wrapCells: this.wrapCells }, spreadableProps)));
    };
    ColumnHeader.defaultProps = {
        isReorderable: false,
        isResizable: true,
        loading: false,
    };
    return ColumnHeader;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/headers/columnHeaderCell.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/headers/columnHeaderCell.js ***!
  \*****************************************************************************/
/*! exports provided: HorizontalCellDivider, ColumnHeaderCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalCellDivider", function() { return HorizontalCellDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnHeaderCell", function() { return ColumnHeaderCell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/context */ "./node_modules/@blueprintjs/table/lib/esm/common/context.js");
/* harmony import */ var _common_loadableContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/loadableContent */ "./node_modules/@blueprintjs/table/lib/esm/common/loadableContent.js");
/* harmony import */ var _headerCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./headerCell */ "./node_modules/@blueprintjs/table/lib/esm/headers/headerCell.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








function HorizontalCellDivider() {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HORIZONTAL_CELL_DIVIDER"] });
}
var ColumnHeaderCell = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ColumnHeaderCell, _super);
    function ColumnHeaderCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        _this.handlePopoverDidOpen = function () {
            _this.setState({ isActive: true });
        };
        _this.handlePopoverWillClose = function () {
            _this.setState({ isActive: false });
        };
        return _this;
    }
    /**
     * This method determines if a `MouseEvent` was triggered on a target that
     * should be used as the header click/drag target. This enables users of
     * this component to render fully interactive components in their header
     * cells without worry of selection or resize operations from capturing
     * their mouse events.
     */
    ColumnHeaderCell.isHeaderMouseTarget = function (target) {
        return (target.classList.contains(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HEADER"]) ||
            target.classList.contains(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_COLUMN_NAME"]) ||
            target.classList.contains(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_INTERACTION_BAR"]) ||
            target.classList.contains(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HEADER_CONTENT"]));
    };
    ColumnHeaderCell.prototype.render = function () {
        var _a = this.props, 
        // from IColumnHeaderCellProps
        enableColumnReordering = _a.enableColumnReordering, isColumnSelected = _a.isColumnSelected, menuIcon = _a.menuIcon, 
        // from IColumnNameProps
        name = _a.name, nameRenderer = _a.nameRenderer, 
        // from IHeaderProps
        spreadableProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["enableColumnReordering", "isColumnSelected", "menuIcon", "name", "nameRenderer"]);
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(spreadableProps.className, _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_COLUMN_HEADER_CELL"], (_b = {},
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HAS_INTERACTION_BAR"]] = this.context.enableColumnInteractionBar,
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HAS_REORDER_HANDLE"]] = this.props.reorderHandle != null,
            _b));
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_headerCell__WEBPACK_IMPORTED_MODULE_7__["HeaderCell"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ isReorderable: this.props.enableColumnReordering, isSelected: this.props.isColumnSelected }, spreadableProps, { className: classes }),
            this.renderName(),
            this.maybeRenderContent(),
            this.props.loading ? undefined : this.props.resizeHandle));
        var _b;
    };
    ColumnHeaderCell.prototype.renderName = function () {
        var _a = this.props, index = _a.index, loading = _a.loading, name = _a.name, nameRenderer = _a.nameRenderer, reorderHandle = _a.reorderHandle;
        var dropdownMenu = this.maybeRenderDropdownMenu();
        var defaultName = react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TRUNCATED_TEXT"] }, name);
        var nameComponent = (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_common_loadableContent__WEBPACK_IMPORTED_MODULE_6__["LoadableContent"], { loading: loading, variableLength: true }, nameRenderer == null
            ? defaultName
            : react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](nameRenderer(name, index), { index: index })));
        if (this.context.enableColumnInteractionBar) {
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_COLUMN_NAME"], title: name },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_INTERACTION_BAR"] },
                    reorderHandle,
                    dropdownMenu),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](HorizontalCellDivider, null),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_COLUMN_NAME_TEXT"] }, nameComponent)));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_COLUMN_NAME"], title: name },
                reorderHandle,
                dropdownMenu,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_COLUMN_NAME_TEXT"] }, nameComponent)));
        }
    };
    ColumnHeaderCell.prototype.maybeRenderContent = function () {
        if (this.props.children === null) {
            return undefined;
        }
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HEADER_CONTENT"] }, this.props.children);
    };
    ColumnHeaderCell.prototype.maybeRenderDropdownMenu = function () {
        var _a = this.props, index = _a.index, menuIcon = _a.menuIcon, menuRenderer = _a.menuRenderer;
        if (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].isFunction(menuRenderer)) {
            return undefined;
        }
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TH_MENU_CONTAINER"], (_b = {},
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TH_MENU_OPEN"]] = this.state.isActive,
            _b));
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: classes },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TH_MENU_CONTAINER_BACKGROUND"] }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], { content: menuRenderer(index), position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Position"].BOTTOM, className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TH_MENU"], modifiers: { preventOverflow: { boundariesElement: "window" } }, popoverDidOpen: this.handlePopoverDidOpen, popoverWillClose: this.handlePopoverWillClose },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], { icon: menuIcon }))));
        var _b;
    };
    ColumnHeaderCell.defaultProps = {
        isActive: false,
        menuIcon: "chevron-down",
    };
    ColumnHeaderCell.contextTypes = _common_context__WEBPACK_IMPORTED_MODULE_5__["columnInteractionBarContextTypes"];
    return ColumnHeaderCell;
}(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["AbstractPureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/headers/editableName.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/headers/editableName.js ***!
  \*************************************************************************/
/*! exports provided: EditableName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableName", function() { return EditableName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var EditableName = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableName, _super);
    function EditableName(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleEdit = function () {
            _this.setState({ isEditing: true, dirtyName: _this.state.savedName });
        };
        _this.handleCancel = function (value) {
            // don't strictly need to clear the dirtyName, but it's better hygiene
            _this.setState({ isEditing: false, dirtyName: undefined });
            _this.invokeCallback(_this.props.onCancel, value);
        };
        _this.handleChange = function (value) {
            _this.setState({ dirtyName: value });
            _this.invokeCallback(_this.props.onChange, value);
        };
        _this.handleConfirm = function (value) {
            _this.setState({ isEditing: false, savedName: value, dirtyName: undefined });
            _this.invokeCallback(_this.props.onConfirm, value);
        };
        _this.state = {
            dirtyName: props.name,
            isEditing: false,
            savedName: props.name,
        };
        return _this;
    }
    EditableName.prototype.componentWillReceiveProps = function (nextProps) {
        var name = nextProps.name;
        if (name !== this.props.name) {
            this.setState({ savedName: name, dirtyName: name });
        }
    };
    EditableName.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, name = _a.name;
        var _b = this.state, isEditing = _b.isEditing, dirtyName = _b.dirtyName, savedName = _b.savedName;
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["EditableText"], { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_EDITABLE_NAME"]), defaultValue: name, intent: intent, minWidth: null, onCancel: this.handleCancel, onChange: this.handleChange, onConfirm: this.handleConfirm, onEdit: this.handleEdit, placeholder: "", selectAllOnFocus: true, value: isEditing ? dirtyName : savedName }));
    };
    EditableName.prototype.invokeCallback = function (callback, value) {
        var index = this.props.index;
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(callback, value, index);
    };
    return EditableName;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/headers/header.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/headers/header.js ***!
  \*******************************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _interactions_dragEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interactions/dragEvents */ "./node_modules/@blueprintjs/table/lib/esm/interactions/dragEvents.js");
/* harmony import */ var _interactions_reorderable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interactions/reorderable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/reorderable.js");
/* harmony import */ var _interactions_resizable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interactions/resizable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizable.js");
/* harmony import */ var _interactions_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interactions/selectable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/selectable.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */










var SHALLOW_COMPARE_PROP_KEYS_BLACKLIST = ["focusedCell", "selectedRegions"];
var Header = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Header, _super);
    function Header(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.convertEventToIndex = function (event) {
            var coord = _this.props.getMouseCoordinate(event);
            return _this.props.convertPointToIndex(coord);
        };
        _this.locateClick = function (event) {
            _this.activationIndex = _this.convertEventToIndex(event);
            return _this.props.toRegion(_this.activationIndex);
        };
        _this.locateDragForSelection = function (_event, coords, returnEndOnly) {
            if (returnEndOnly === void 0) { returnEndOnly = false; }
            var coord = _this.props.getDragCoordinate(coords.current);
            var indexStart = _this.activationIndex;
            var indexEnd = _this.props.convertPointToIndex(coord);
            return returnEndOnly ? _this.props.toRegion(indexEnd) : _this.props.toRegion(indexStart, indexEnd);
        };
        _this.locateDragForReordering = function (_event, coords) {
            var coord = _this.props.getDragCoordinate(coords.current);
            var guideIndex = _this.props.convertPointToIndex(coord, true);
            return guideIndex < 0 ? undefined : guideIndex;
        };
        _this.renderCells = function () {
            var _a = _this.props, indexStart = _a.indexStart, indexEnd = _a.indexEnd;
            var cells = [];
            for (var index = indexStart; index <= indexEnd; index++) {
                cells.push(_this.renderNewCell(index));
            }
            return cells;
        };
        _this.renderNewCell = function (index) {
            var extremaClasses = _this.props.getCellExtremaClasses(index, _this.props.indexEnd);
            var renderer = _this.props.isGhostIndex(index) ? _this.props.ghostCellRenderer : _this.renderCell;
            return renderer(index, extremaClasses);
        };
        _this.renderCell = function (index, extremaClasses) {
            var _a = _this.props, getIndexClass = _a.getIndexClass, selectedRegions = _a.selectedRegions;
            var cell = _this.props.headerCellRenderer(index);
            var isLoading = cell.props.loading != null ? cell.props.loading : _this.props.loading;
            var isSelected = _this.props.isCellSelected(index);
            var isEntireCellTargetReorderable = _this.isEntireCellTargetReorderable(index);
            var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extremaClasses, (_b = {},
                _b[_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HEADER_REORDERABLE"]] = isEntireCellTargetReorderable,
                _b), _this.props.getCellIndexClass(index), cell.props.className);
            var cellProps = (_c = {
                    className: className,
                    index: index
                },
                _c[_this.props.headerCellIsSelectedPropName] = isSelected,
                _c[_this.props.headerCellIsReorderablePropName] = isEntireCellTargetReorderable,
                _c.loading = isLoading,
                _c.reorderHandle = _this.maybeRenderReorderHandle(index),
                _c);
            var modifiedHandleSizeChanged = function (size) { return _this.props.handleSizeChanged(index, size); };
            var modifiedHandleResizeEnd = function (size) { return _this.props.handleResizeEnd(index, size); };
            var modifiedHandleResizeHandleDoubleClick = function () {
                return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.handleResizeDoubleClick, index);
            };
            var baseChildren = (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_interactions_selectable__WEBPACK_IMPORTED_MODULE_8__["DragSelectable"], { enableMultipleSelection: _this.props.enableMultipleSelection, disabled: _this.isDragSelectableDisabled, focusedCell: _this.props.focusedCell, ignoredSelectors: ["." + _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_REORDER_HANDLE_TARGET"]], key: getIndexClass(index), locateClick: _this.locateClick, locateDrag: _this.locateDragForSelection, onFocusedCell: _this.props.onFocusedCell, onSelection: _this.handleDragSelectableSelection, onSelectionEnd: _this.handleDragSelectableSelectionEnd, selectedRegions: selectedRegions, selectedRegionTransform: _this.props.selectedRegionTransform },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_interactions_resizable__WEBPACK_IMPORTED_MODULE_7__["Resizable"], { isResizable: _this.props.isResizable, maxSize: _this.props.maxSize, minSize: _this.props.minSize, onDoubleClick: modifiedHandleResizeHandleDoubleClick, onLayoutLock: _this.props.onLayoutLock, onResizeEnd: modifiedHandleResizeEnd, onSizeChanged: modifiedHandleSizeChanged, orientation: _this.props.resizeOrientation, size: _this.props.getCellSize(index) }, react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](cell, cellProps))));
            return _this.isReorderHandleEnabled()
                ? baseChildren // reordering will be handled by interacting with the reorder handle
                : _this.wrapInDragReorderable(index, baseChildren, _this.isDragReorderableDisabled);
            var _b, _c;
        };
        _this.handleDragSelectableSelection = function (selectedRegions) {
            _this.props.onSelection(selectedRegions);
            _this.setState({ hasValidSelection: false });
        };
        _this.handleDragSelectableSelectionEnd = function () {
            _this.activationIndex = null; // not strictly required, but good practice
            _this.setState({ hasValidSelection: true });
        };
        _this.isDragSelectableDisabled = function (event) {
            if (_interactions_dragEvents__WEBPACK_IMPORTED_MODULE_5__["DragEvents"].isAdditive(event)) {
                // if the meta/ctrl key was pressed, we want to forcefully ignore
                // reordering interactions and prioritize drag-selection
                // interactions (e.g. to make it possible to deselect a row).
                return false;
            }
            var cellIndex = _this.convertEventToIndex(event);
            return _this.isEntireCellTargetReorderable(cellIndex);
        };
        _this.isDragReorderableDisabled = function (event) {
            var isSelectionEnabled = !_this.isDragSelectableDisabled(event);
            if (isSelectionEnabled) {
                // if drag-selection is enabled, we don't want drag-reordering
                // interactions to compete. otherwise, a mouse-drag might both expand a
                // selection and reorder the same selection simultaneously - confusing!
                return true;
            }
            var cellIndex = _this.convertEventToIndex(event);
            return !_this.isEntireCellTargetReorderable(cellIndex);
        };
        _this.isEntireCellTargetReorderable = function (index) {
            var selectedRegions = _this.props.selectedRegions;
            // although reordering may be generally enabled for this row/column (via props.isReorderable), the
            // row/column shouldn't actually become reorderable from a user perspective until a few other
            // conditions are true:
            return (_this.props.isReorderable &&
                // the row/column should be the only selection (or it should be part of the only selection),
                // because reordering multiple disjoint row/column selections is a UX morass with no clear best
                // behavior.
                _this.props.isCellSelected(index) &&
                _this.state.hasValidSelection &&
                _regions__WEBPACK_IMPORTED_MODULE_9__["Regions"].getRegionCardinality(selectedRegions[0]) === _this.props.fullRegionCardinality &&
                // selected regions can be updated during mousedown+drag and before mouseup; thus, we
                // add a final check to make sure we don't enable reordering until the selection
                // interaction is complete. this prevents one click+drag interaction from triggering
                // both selection and reordering behavior.
                selectedRegions.length === 1 &&
                // columns are reordered via a reorder handle, so drag-selection needn't be disabled
                !_this.isReorderHandleEnabled());
        };
        _this.state = { hasValidSelection: _this.isSelectedRegionsControlledAndNonEmpty(props) };
        return _this;
    }
    Header.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ hasValidSelection: this.isSelectedRegionsControlledAndNonEmpty(nextProps) });
    };
    Header.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(this.state, nextState) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(this.props, nextProps, { exclude: SHALLOW_COMPARE_PROP_KEYS_BLACKLIST }) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].deepCompareKeys(this.props, nextProps, SHALLOW_COMPARE_PROP_KEYS_BLACKLIST));
    };
    Header.prototype.render = function () {
        return this.props.wrapCells(this.renderCells());
    };
    Header.prototype.isSelectedRegionsControlledAndNonEmpty = function (props) {
        if (props === void 0) { props = this.props; }
        return props.selectedRegions != null && props.selectedRegions.length > 0;
    };
    Header.prototype.isReorderHandleEnabled = function () {
        // the reorder handle can only appear in the column interaction bar
        return this.isColumnHeader() && this.props.isReorderable;
    };
    Header.prototype.maybeRenderReorderHandle = function (index) {
        return !this.isReorderHandleEnabled()
            ? undefined
            : this.wrapInDragReorderable(index, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_REORDER_HANDLE_TARGET"] },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_REORDER_HANDLE"] },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], { icon: "drag-handle-vertical" }))), false);
    };
    Header.prototype.isColumnHeader = function () {
        return this.props.fullRegionCardinality === _regions__WEBPACK_IMPORTED_MODULE_9__["RegionCardinality"].FULL_COLUMNS;
    };
    Header.prototype.wrapInDragReorderable = function (index, children, disabled) {
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_interactions_reorderable__WEBPACK_IMPORTED_MODULE_6__["DragReorderable"], { disabled: disabled, key: this.props.getIndexClass(index), locateClick: this.locateClick, locateDrag: this.locateDragForReordering, onReordered: this.props.onReordered, onReordering: this.props.onReordering, onSelection: this.props.onSelection, onFocusedCell: this.props.onFocusedCell, selectedRegions: this.props.selectedRegions, toRegion: this.props.toRegion }, children));
    };
    return Header;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/headers/headerCell.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/headers/headerCell.js ***!
  \***********************************************************************/
/*! exports provided: HeaderCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCell", function() { return HeaderCell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var HeaderCell = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeaderCell, _super);
    function HeaderCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        return _this;
    }
    HeaderCell.prototype.shouldComponentUpdate = function (nextProps) {
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].shallowCompareKeys(this.props, nextProps, { exclude: ["style"] }) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].deepCompareKeys(this.props, nextProps, ["style"]));
    };
    HeaderCell.prototype.renderContextMenu = function (_event) {
        var menuRenderer = this.props.menuRenderer;
        if (_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].isFunction(menuRenderer)) {
            // the preferred way (a consistent function instance that won't cause as many re-renders)
            return menuRenderer(this.props.index);
        }
        else {
            return undefined;
        }
    };
    HeaderCell.prototype.render = function () {
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HEADER"], (_a = {},
            _a[_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HEADER_ACTIVE"]] = this.props.isActive || this.state.isActive,
            _a[_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HEADER_SELECTED"]] = this.props.isSelected,
            _a[_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Classes"].LOADING] = this.props.loading,
            _a), this.props.className);
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: classes, style: this.props.style }, this.props.children));
        var _a;
    };
    HeaderCell = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["ContextMenuTarget"]
    ], HeaderCell);
    return HeaderCell;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/headers/rowHeader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/headers/rowHeader.js ***!
  \**********************************************************************/
/*! exports provided: RowHeader, renderDefaultRowHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeader", function() { return RowHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDefaultRowHeader", function() { return renderDefaultRowHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _interactions_resizeHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interactions/resizeHandle */ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizeHandle.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header */ "./node_modules/@blueprintjs/table/lib/esm/headers/header.js");
/* harmony import */ var _rowHeaderCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rowHeaderCell */ "./node_modules/@blueprintjs/table/lib/esm/headers/rowHeaderCell.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








var RowHeader = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RowHeader, _super);
    function RowHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapCells = function (cells) {
            var _a = _this.props, rowIndexStart = _a.rowIndexStart, grid = _a.grid;
            var tableHeight = grid.getRect().height;
            var scrollTopCorrection = _this.props.grid.getCumulativeHeightBefore(rowIndexStart);
            var style = {
                // reduce the height to clamp the sliding window as we approach the final headers; otherwise,
                // we'll have tons of useless whitespace at the end.
                height: tableHeight - scrollTopCorrection,
                // only header cells in view will render, but we need to reposition them to stay in view
                // as we scroll vertically.
                transform: "translateY(" + (scrollTopCorrection || 0) + "px)",
            };
            // add a wrapper set to the full-table height to ensure container styles stretch from the first
            // cell all the way to the last
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { height: tableHeight } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_ROW_HEADERS_CELLS_CONTAINER"], style: style }, cells)));
        };
        _this.convertPointToRow = function (clientXOrY, useMidpoint) {
            var locator = _this.props.locator;
            return locator != null ? locator.convertPointToRow(clientXOrY, useMidpoint) : null;
        };
        _this.getCellExtremaClasses = function (index, indexEnd) {
            return _this.props.grid.getExtremaClasses(index, 0, indexEnd, 1);
        };
        _this.getRowHeight = function (index) {
            return _this.props.grid.getRowRect(index).height;
        };
        _this.getDragCoordinate = function (clientCoords) {
            return clientCoords[1]; // y-coordinate
        };
        _this.getMouseCoordinate = function (event) {
            return event.clientY;
        };
        _this.handleResizeEnd = function (index, size) {
            _this.props.onResizeGuide(null);
            _this.props.onRowHeightChanged(index, size);
        };
        _this.handleSizeChanged = function (index, size) {
            var rect = _this.props.grid.getRowRect(index);
            _this.props.onResizeGuide([rect.top + size]);
        };
        _this.isCellSelected = function (index) {
            return _regions__WEBPACK_IMPORTED_MODULE_5__["Regions"].hasFullRow(_this.props.selectedRegions, index);
        };
        _this.isGhostIndex = function (index) {
            return _this.props.grid.isGhostIndex(index, -1);
        };
        _this.renderGhostCell = function (index, extremaClasses) {
            var rect = _this.props.grid.getGhostCellRect(index, 0);
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_rowHeaderCell__WEBPACK_IMPORTED_MODULE_7__["RowHeaderCell"], { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(extremaClasses), index: index, key: _common_classes__WEBPACK_IMPORTED_MODULE_3__["rowIndexClass"](index), loading: _this.props.loading, style: { height: rect.height + "px" } }));
        };
        _this.toRegion = function (index1, index2) {
            // the `this` value is messed up for Regions.row, so we have to have a wrapper function here
            return _regions__WEBPACK_IMPORTED_MODULE_5__["Regions"].row(index1, index2);
        };
        return _this;
    }
    RowHeader.prototype.render = function () {
        var _a = this.props, 
        // from IRowHeaderProps
        onRowHeightChanged = _a.onRowHeightChanged, renderHeaderCell = _a.rowHeaderCellRenderer, 
        // from IRowHeights
        minSize = _a.minRowHeight, maxSize = _a.maxRowHeight, defaultRowHeight = _a.defaultRowHeight, 
        // from IRowIndices
        indexStart = _a.rowIndexStart, indexEnd = _a.rowIndexEnd, 
        // from IHeaderProps
        spreadableProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["onRowHeightChanged", "rowHeaderCellRenderer", "minRowHeight", "maxRowHeight", "defaultRowHeight", "rowIndexStart", "rowIndexEnd"]);
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_header__WEBPACK_IMPORTED_MODULE_6__["Header"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ convertPointToIndex: this.convertPointToRow, fullRegionCardinality: _regions__WEBPACK_IMPORTED_MODULE_5__["RegionCardinality"].FULL_ROWS, getCellExtremaClasses: this.getCellExtremaClasses, getCellIndexClass: _common_classes__WEBPACK_IMPORTED_MODULE_3__["rowCellIndexClass"], getCellSize: this.getRowHeight, getDragCoordinate: this.getDragCoordinate, getIndexClass: _common_classes__WEBPACK_IMPORTED_MODULE_3__["rowIndexClass"], getMouseCoordinate: this.getMouseCoordinate, ghostCellRenderer: this.renderGhostCell, handleResizeEnd: this.handleResizeEnd, handleSizeChanged: this.handleSizeChanged, headerCellIsReorderablePropName: "enableRowReordering", headerCellIsSelectedPropName: "isRowSelected", headerCellRenderer: renderHeaderCell, indexEnd: indexEnd, indexStart: indexStart, isCellSelected: this.isCellSelected, isGhostIndex: this.isGhostIndex, maxSize: maxSize, minSize: minSize, resizeOrientation: _interactions_resizeHandle__WEBPACK_IMPORTED_MODULE_4__["Orientation"].HORIZONTAL, selectedRegions: [], toRegion: this.toRegion, wrapCells: this.wrapCells }, spreadableProps)));
    };
    RowHeader.defaultProps = {
        rowHeaderCellRenderer: renderDefaultRowHeader,
    };
    return RowHeader;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));

/**
 * A default implementation of `IRowHeaderRenderer` that displays 1-indexed
 * numbers for each row.
 */
function renderDefaultRowHeader(rowIndex) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_rowHeaderCell__WEBPACK_IMPORTED_MODULE_7__["RowHeaderCell"], { index: rowIndex, name: "" + (rowIndex + 1) });
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/headers/rowHeaderCell.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/headers/rowHeaderCell.js ***!
  \**************************************************************************/
/*! exports provided: RowHeaderCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeaderCell", function() { return RowHeaderCell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_loadableContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/loadableContent */ "./node_modules/@blueprintjs/table/lib/esm/common/loadableContent.js");
/* harmony import */ var _headerCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./headerCell */ "./node_modules/@blueprintjs/table/lib/esm/headers/headerCell.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var RowHeaderCell = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RowHeaderCell, _super);
    function RowHeaderCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowHeaderCell.prototype.render = function () {
        var _a = this.props, 
        // from IRowHeaderCellProps
        enableRowReordering = _a.enableRowReordering, isRowSelected = _a.isRowSelected, 
        // from IHeaderProps
        spreadableProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["enableRowReordering", "isRowSelected"]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_headerCell__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ isReorderable: this.props.enableRowReordering, isSelected: this.props.isRowSelected }, spreadableProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_ROW_NAME"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_loadableContent__WEBPACK_IMPORTED_MODULE_4__["LoadableContent"], { loading: spreadableProps.loading },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_ROW_NAME_TEXT"] }, spreadableProps.name))),
            this.props.children,
            spreadableProps.loading ? undefined : spreadableProps.resizeHandle));
    };
    return RowHeaderCell;
}(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["AbstractPureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/index.js ***!
  \**********************************************************/
/*! exports provided: Cell, EditableCell, JSONFormat, TruncatedPopoverMode, TruncatedFormat, Column, Clipboard, Grid, Rect, RenderMode, Utils, Draggable, CopyCellsMenuItem, Orientation, ResizeHandle, DragSelectable, ColumnHeaderCell, HorizontalCellDivider, RowHeaderCell, EditableName, ColumnLoadingOption, RegionCardinality, Regions, RowLoadingOption, SelectionModes, TableLoadingOption, Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cell_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell/cell */ "./node_modules/@blueprintjs/table/lib/esm/cell/cell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _cell_cell__WEBPACK_IMPORTED_MODULE_0__["Cell"]; });

/* harmony import */ var _cell_editableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell/editableCell */ "./node_modules/@blueprintjs/table/lib/esm/cell/editableCell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableCell", function() { return _cell_editableCell__WEBPACK_IMPORTED_MODULE_1__["EditableCell"]; });

/* harmony import */ var _cell_formats_jsonFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell/formats/jsonFormat */ "./node_modules/@blueprintjs/table/lib/esm/cell/formats/jsonFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONFormat", function() { return _cell_formats_jsonFormat__WEBPACK_IMPORTED_MODULE_2__["JSONFormat"]; });

/* harmony import */ var _cell_formats_truncatedFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell/formats/truncatedFormat */ "./node_modules/@blueprintjs/table/lib/esm/cell/formats/truncatedFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncatedPopoverMode", function() { return _cell_formats_truncatedFormat__WEBPACK_IMPORTED_MODULE_3__["TruncatedPopoverMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncatedFormat", function() { return _cell_formats_truncatedFormat__WEBPACK_IMPORTED_MODULE_3__["TruncatedFormat"]; });

/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column */ "./node_modules/@blueprintjs/table/lib/esm/column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _column__WEBPACK_IMPORTED_MODULE_4__["Column"]; });

/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/index */ "./node_modules/@blueprintjs/table/lib/esm/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _common_index__WEBPACK_IMPORTED_MODULE_5__["Clipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _common_index__WEBPACK_IMPORTED_MODULE_5__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _common_index__WEBPACK_IMPORTED_MODULE_5__["Rect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderMode", function() { return _common_index__WEBPACK_IMPORTED_MODULE_5__["RenderMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _common_index__WEBPACK_IMPORTED_MODULE_5__["Utils"]; });

/* harmony import */ var _interactions_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactions/draggable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/draggable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return _interactions_draggable__WEBPACK_IMPORTED_MODULE_6__["Draggable"]; });

/* harmony import */ var _interactions_menus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interactions/menus */ "./node_modules/@blueprintjs/table/lib/esm/interactions/menus/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyCellsMenuItem", function() { return _interactions_menus__WEBPACK_IMPORTED_MODULE_7__["CopyCellsMenuItem"]; });

/* harmony import */ var _interactions_resizeHandle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interactions/resizeHandle */ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizeHandle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Orientation", function() { return _interactions_resizeHandle__WEBPACK_IMPORTED_MODULE_8__["Orientation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeHandle", function() { return _interactions_resizeHandle__WEBPACK_IMPORTED_MODULE_8__["ResizeHandle"]; });

/* harmony import */ var _interactions_selectable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interactions/selectable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/selectable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragSelectable", function() { return _interactions_selectable__WEBPACK_IMPORTED_MODULE_9__["DragSelectable"]; });

/* harmony import */ var _headers_columnHeaderCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./headers/columnHeaderCell */ "./node_modules/@blueprintjs/table/lib/esm/headers/columnHeaderCell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnHeaderCell", function() { return _headers_columnHeaderCell__WEBPACK_IMPORTED_MODULE_10__["ColumnHeaderCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalCellDivider", function() { return _headers_columnHeaderCell__WEBPACK_IMPORTED_MODULE_10__["HorizontalCellDivider"]; });

/* harmony import */ var _headers_rowHeaderCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./headers/rowHeaderCell */ "./node_modules/@blueprintjs/table/lib/esm/headers/rowHeaderCell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowHeaderCell", function() { return _headers_rowHeaderCell__WEBPACK_IMPORTED_MODULE_11__["RowHeaderCell"]; });

/* harmony import */ var _headers_editableName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./headers/editableName */ "./node_modules/@blueprintjs/table/lib/esm/headers/editableName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableName", function() { return _headers_editableName__WEBPACK_IMPORTED_MODULE_12__["EditableName"]; });

/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnLoadingOption", function() { return _regions__WEBPACK_IMPORTED_MODULE_13__["ColumnLoadingOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegionCardinality", function() { return _regions__WEBPACK_IMPORTED_MODULE_13__["RegionCardinality"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Regions", function() { return _regions__WEBPACK_IMPORTED_MODULE_13__["Regions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowLoadingOption", function() { return _regions__WEBPACK_IMPORTED_MODULE_13__["RowLoadingOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionModes", function() { return _regions__WEBPACK_IMPORTED_MODULE_13__["SelectionModes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableLoadingOption", function() { return _regions__WEBPACK_IMPORTED_MODULE_13__["TableLoadingOption"]; });

/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./table */ "./node_modules/@blueprintjs/table/lib/esm/table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table__WEBPACK_IMPORTED_MODULE_14__["Table"]; });

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

















/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/dragEvents.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/dragEvents.js ***!
  \****************************************************************************/
/*! exports provided: DragEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragEvents", function() { return DragEvents; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var DragEvents = /** @class */ (function () {
    function DragEvents() {
        var _this = this;
        this.handleMouseDown = function (event) {
            _this.initCoordinateData(event);
            if (_this.handler != null && _this.handler.onActivate != null) {
                var exitCode = _this.handler.onActivate(event);
                if (exitCode === false) {
                    return;
                }
            }
            _this.isActivated = true;
            _this.maybeAlterEventChain(event);
            // It is possible that the mouseup would not be called after the initial
            // mousedown (for example if the mouse is moved out of the window). So,
            // we preemptively detach to avoid duplicate listeners.
            _this.detachDocumentEventListeners();
            _this.attachDocumentEventListeners();
        };
        this.handleMouseMove = function (event) {
            _this.maybeAlterEventChain(event);
            if (_this.isActivated) {
                _this.isDragging = true;
            }
            if (_this.isDragging) {
                var coords = _this.updateCoordinateData(event);
                if (_this.handler != null && _this.handler.onDragMove != null) {
                    _this.handler.onDragMove(event, coords);
                }
            }
        };
        this.handleMouseUp = function (event) {
            _this.maybeAlterEventChain(event);
            if (_this.handler != null) {
                if (_this.isDragging) {
                    var coords = _this.updateCoordinateData(event);
                    if (_this.handler.onDragMove != null) {
                        _this.handler.onDragMove(event, coords);
                    }
                    if (_this.handler.onDragEnd != null) {
                        _this.handler.onDragEnd(event, coords);
                    }
                }
                else if (_this.isActivated) {
                    if (_this.handler.onDoubleClick != null) {
                        if (_this.doubleClickTimeoutToken == null) {
                            // if this the first click of a possible double-click,
                            // we delay the firing of the click event by the
                            // timeout.
                            _this.doubleClickTimeoutToken = window.setTimeout(function () {
                                delete _this.doubleClickTimeoutToken;
                                if (_this.handler.onClick != null) {
                                    _this.handler.onClick(event);
                                }
                            }, DragEvents.DOUBLE_CLICK_TIMEOUT_MSEC);
                        }
                        else {
                            // otherwise, this is the second click in the double-
                            // click so we cancel the single-click timeout and
                            // fire the double-click event.
                            window.clearTimeout(_this.doubleClickTimeoutToken);
                            delete _this.doubleClickTimeoutToken;
                            _this.handler.onDoubleClick(event);
                        }
                    }
                    else if (_this.handler.onClick != null) {
                        _this.handler.onClick(event);
                    }
                }
            }
            _this.isActivated = false;
            _this.isDragging = false;
            _this.detachDocumentEventListeners();
        };
    }
    /**
     * Returns true if the event includes a modifier key that often adds the result of the drag
     * event to any existing state. For example, holding CTRL before dragging may select another
     * region in addition to an existing one, while the absence of a modifier key may clear the
     * existing selection first.
     * @param event the mouse event for the drag interaction
     */
    DragEvents.isAdditive = function (event) {
        return event.ctrlKey || event.metaKey;
    };
    DragEvents.prototype.attach = function (element, handler) {
        this.detach();
        this.handler = handler;
        this.element = element;
        if (this.isValidDragHandler(handler)) {
            this.element.addEventListener("mousedown", this.handleMouseDown);
        }
        return this;
    };
    DragEvents.prototype.detach = function () {
        if (this.element != null) {
            this.element.removeEventListener("mousedown", this.handleMouseDown);
            this.detachDocumentEventListeners();
        }
    };
    DragEvents.prototype.isValidDragHandler = function (handler) {
        return (handler != null &&
            (handler.onActivate != null ||
                handler.onDragMove != null ||
                handler.onDragEnd != null ||
                handler.onClick != null ||
                handler.onDoubleClick != null));
    };
    DragEvents.prototype.attachDocumentEventListeners = function () {
        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("mouseup", this.handleMouseUp);
    };
    DragEvents.prototype.detachDocumentEventListeners = function () {
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    };
    DragEvents.prototype.initCoordinateData = function (event) {
        this.activationCoordinates = [event.clientX, event.clientY];
        this.lastCoordinates = this.activationCoordinates;
    };
    DragEvents.prototype.updateCoordinateData = function (event) {
        var currentCoordinates = [event.clientX, event.clientY];
        var deltaCoordinates = [
            currentCoordinates[0] - this.lastCoordinates[0],
            currentCoordinates[1] - this.lastCoordinates[1],
        ];
        var offsetCoordinates = [
            currentCoordinates[0] - this.activationCoordinates[0],
            currentCoordinates[1] - this.activationCoordinates[1],
        ];
        var data = {
            activation: this.activationCoordinates,
            current: currentCoordinates,
            delta: deltaCoordinates,
            last: this.lastCoordinates,
            offset: offsetCoordinates,
        };
        this.lastCoordinates = [event.clientX, event.clientY];
        return data;
    };
    DragEvents.prototype.maybeAlterEventChain = function (event) {
        if (this.handler.preventDefault) {
            event.preventDefault();
        }
        if (this.handler.stopPropagation) {
            event.stopPropagation();
        }
    };
    DragEvents.DOUBLE_CLICK_TIMEOUT_MSEC = 500;
    return DragEvents;
}());



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/draggable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/draggable.js ***!
  \***************************************************************************/
/*! exports provided: Draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dragEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragEvents */ "./node_modules/@blueprintjs/table/lib/esm/interactions/dragEvents.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var REATTACH_PROPS_KEYS = ["stopPropagation", "preventDefault"];
/**
 * This component provides a simple interface for combined drag and/or click
 * events.
 *
 * Since the mouse interactions for drag and click are overloaded, here are
 * the events that will fire in these cases:
 *
 * A Click Interaction
 * 1. The user presses down on the render element, triggering the onActivate
 *    callback.
 * 2. The user releases the mouse button without moving it, triggering the
 *    onClick callback.
 *
 * A Drag Interaction
 * 1. The user presses down on the render element, triggering the onActivate
 *    callback.
 * 2. The user moves the mouse, triggering the onDragMove callback.
 * 3. The user moves the mouse, triggering the onDragMove callback.
 * 4. The user moves the mouse, triggering the onDragMove callback.
 * 5. The user releases the mouse button, triggering a final onDragMove
 *    callback as well as an onDragEnd callback.
 *
 * If `false` is returned from the onActivate callback, no further events
 * will be fired until the next activation.
 */
var Draggable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Draggable, _super);
    function Draggable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Draggable.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(this.props.children);
    };
    Draggable.prototype.componentDidUpdate = function (prevProps) {
        var propsWhitelist = { include: REATTACH_PROPS_KEYS };
        if (this.events && !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(prevProps, this.props, propsWhitelist)) {
            this.events.attach(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"](this), this.props);
        }
    };
    Draggable.prototype.componentDidMount = function () {
        this.events = new _dragEvents__WEBPACK_IMPORTED_MODULE_4__["DragEvents"]();
        this.events.attach(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"](this), this.props);
    };
    Draggable.prototype.componentWillUnmount = function () {
        this.events.detach();
        delete this.events;
    };
    Draggable.defaultProps = {
        preventDefault: true,
        stopPropagation: false,
    };
    return Draggable;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/menus/copyCellsMenuItem.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/menus/copyCellsMenuItem.js ***!
  \*****************************************************************************************/
/*! exports provided: CopyCellsMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyCellsMenuItem", function() { return CopyCellsMenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/clipboard */ "./node_modules/@blueprintjs/table/lib/esm/common/clipboard.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var CopyCellsMenuItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CopyCellsMenuItem, _super);
    function CopyCellsMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props, context = _a.context, getCellData = _a.getCellData, onCopy = _a.onCopy;
            var cells = context.getUniqueCells();
            var sparse = _regions__WEBPACK_IMPORTED_MODULE_4__["Regions"].sparseMapCells(cells, getCellData);
            var success = _common_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"].copyCells(sparse);
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(onCopy, success);
        };
        return _this;
    }
    CopyCellsMenuItem.prototype.render = function () {
        var _a = this.props, context = _a.context, getCellData = _a.getCellData, onCopy = _a.onCopy, menuItemProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["context", "getCellData", "onCopy"]);
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, menuItemProps, { onClick: this.handleClick }));
    };
    return CopyCellsMenuItem;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/menus/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/menus/index.js ***!
  \*****************************************************************************/
/*! exports provided: CopyCellsMenuItem, MenuContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyCellsMenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copyCellsMenuItem */ "./node_modules/@blueprintjs/table/lib/esm/interactions/menus/copyCellsMenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyCellsMenuItem", function() { return _copyCellsMenuItem__WEBPACK_IMPORTED_MODULE_0__["CopyCellsMenuItem"]; });

/* harmony import */ var _menuContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuContext */ "./node_modules/@blueprintjs/table/lib/esm/interactions/menus/menuContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuContext", function() { return _menuContext__WEBPACK_IMPORTED_MODULE_1__["MenuContext"]; });

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */




/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/menus/menuContext.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/menus/menuContext.js ***!
  \***********************************************************************************/
/*! exports provided: MenuContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContext", function() { return MenuContext; });
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

var MenuContext = /** @class */ (function () {
    function MenuContext(target, selectedRegions, numRows, numCols) {
        this.target = target;
        this.selectedRegions = selectedRegions;
        this.numRows = numRows;
        this.numCols = numCols;
        this.regions = _regions__WEBPACK_IMPORTED_MODULE_0__["Regions"].overlapsRegion(selectedRegions, target) ? selectedRegions : [target];
    }
    MenuContext.prototype.getTarget = function () {
        return this.target;
    };
    MenuContext.prototype.getSelectedRegions = function () {
        return this.selectedRegions;
    };
    MenuContext.prototype.getRegions = function () {
        return this.regions;
    };
    MenuContext.prototype.getUniqueCells = function () {
        return _regions__WEBPACK_IMPORTED_MODULE_0__["Regions"].enumerateUniqueCells(this.regions, this.numRows, this.numCols);
    };
    return MenuContext;
}());



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/reorderable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/reorderable.js ***!
  \*****************************************************************************/
/*! exports provided: DragReorderable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragReorderable", function() { return DragReorderable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draggable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/draggable.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var DragReorderable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DragReorderable, _super);
    function DragReorderable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleActivate = function (event) {
            if (_this.shouldIgnoreMouseDown(event)) {
                return false;
            }
            var region = _this.props.locateClick(event);
            if (!_regions__WEBPACK_IMPORTED_MODULE_4__["Regions"].isValid(region)) {
                return false;
            }
            var cardinality = _regions__WEBPACK_IMPORTED_MODULE_4__["Regions"].getRegionCardinality(region);
            var isColumnHeader = cardinality === _regions__WEBPACK_IMPORTED_MODULE_4__["RegionCardinality"].FULL_COLUMNS;
            var isRowHeader = cardinality === _regions__WEBPACK_IMPORTED_MODULE_4__["RegionCardinality"].FULL_ROWS;
            if (!isColumnHeader && !isRowHeader) {
                return false;
            }
            var selectedRegions = _this.props.selectedRegions;
            var selectedRegionIndex = _regions__WEBPACK_IMPORTED_MODULE_4__["Regions"].findContainingRegion(selectedRegions, region);
            if (selectedRegionIndex >= 0) {
                var selectedRegion = selectedRegions[selectedRegionIndex];
                if (_regions__WEBPACK_IMPORTED_MODULE_4__["Regions"].getRegionCardinality(selectedRegion) !== cardinality) {
                    // ignore FULL_TABLE selections
                    return false;
                }
                // cache for easy access later in the lifecycle
                var selectedInterval = isRowHeader ? selectedRegion.rows : selectedRegion.cols;
                _this.selectedRegionStartIndex = selectedInterval[0];
                // add 1 because the selected interval is inclusive, which simple subtraction doesn't
                // account for (e.g. in a FULL_COLUMNS range from 3 to 6, 6 - 3 = 3, but the selection
                // actually includes four columns: 3, 4, 5, and 6)
                _this.selectedRegionLength = selectedInterval[1] - selectedInterval[0] + 1;
            }
            else {
                // select the new region to avoid complex and unintuitive UX w/r/t the existing selection
                _this.maybeSelectRegion(region);
                var regionRange = isRowHeader ? region.rows : region.cols;
                _this.selectedRegionStartIndex = regionRange[0];
                _this.selectedRegionLength = regionRange[1] - regionRange[0] + 1;
            }
            return true;
        };
        _this.handleDragMove = function (event, coords) {
            var oldIndex = _this.selectedRegionStartIndex;
            var guideIndex = _this.props.locateDrag(event, coords);
            var length = _this.selectedRegionLength;
            var reorderedIndex = _common_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].guideIndexToReorderedIndex(oldIndex, guideIndex, length);
            _this.props.onReordering(oldIndex, reorderedIndex, length);
        };
        _this.handleDragEnd = function (event, coords) {
            var oldIndex = _this.selectedRegionStartIndex;
            var guideIndex = _this.props.locateDrag(event, coords);
            var length = _this.selectedRegionLength;
            var reorderedIndex = _common_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].guideIndexToReorderedIndex(oldIndex, guideIndex, length);
            _this.props.onReordered(oldIndex, reorderedIndex, length);
            // the newly reordered region becomes the only selection
            var newRegion = _this.props.toRegion(reorderedIndex, reorderedIndex + length - 1);
            _this.maybeSelectRegion(newRegion);
            // resetting is not strictly required, but it's cleaner
            _this.selectedRegionStartIndex = undefined;
            _this.selectedRegionLength = undefined;
        };
        return _this;
    }
    DragReorderable.prototype.render = function () {
        var draggableProps = this.getDraggableProps();
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_draggable__WEBPACK_IMPORTED_MODULE_5__["Draggable"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, draggableProps, { preventDefault: false }), this.props.children));
    };
    DragReorderable.prototype.getDraggableProps = function () {
        return this.props.onReordered == null
            ? {}
            : {
                onActivate: this.handleActivate,
                onDragEnd: this.handleDragEnd,
                onDragMove: this.handleDragMove,
            };
    };
    DragReorderable.prototype.shouldIgnoreMouseDown = function (event) {
        var disabled = this.props.disabled;
        var isDisabled = _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].isFunction(disabled) ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(disabled, event) : disabled;
        return !_common_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].isLeftClick(event) || isDisabled;
    };
    DragReorderable.prototype.maybeSelectRegion = function (region) {
        var nextSelectedRegions = [region];
        if (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].deepCompareKeys(nextSelectedRegions, this.props.selectedRegions)) {
            this.props.onSelection(nextSelectedRegions);
            // move the focused cell into the newly selected region
            this.props.onFocusedCell(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _regions__WEBPACK_IMPORTED_MODULE_4__["Regions"].getFocusCellCoordinatesFromRegion(region), { focusSelectionIndex: 0 }));
        }
    };
    DragReorderable.defaultProps = {
        selectedRegions: [],
    };
    return DragReorderable;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/resizable.js ***!
  \***************************************************************************/
/*! exports provided: Resizable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resizable", function() { return Resizable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/index */ "./node_modules/@blueprintjs/table/lib/esm/common/index.js");
/* harmony import */ var _resizeHandle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resizeHandle */ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizeHandle.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */




var Resizable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Resizable, _super);
    function Resizable(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onResizeMove = function (_offset, delta) {
            _this.offsetSize(delta);
            if (_this.props.onSizeChanged != null) {
                _this.props.onSizeChanged(_this.state.size);
            }
        };
        _this.onResizeEnd = function (_offset) {
            // reset "unclamped" size on end
            _this.setState({ unclampedSize: _this.state.size });
            if (_this.props.onResizeEnd != null) {
                _this.props.onResizeEnd(_this.state.size);
            }
        };
        var size = props.size;
        _this.state = {
            size: size,
            unclampedSize: size,
        };
        return _this;
    }
    Resizable.prototype.componentWillReceiveProps = function (nextProps) {
        var size = nextProps.size;
        this.setState({
            size: size,
            unclampedSize: size,
        });
    };
    Resizable.prototype.render = function () {
        var child = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
        var style = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, child.props.style, this.getStyle());
        if (this.props.isResizable === false) {
            return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, { style: style });
        }
        var resizeHandle = this.renderResizeHandle();
        return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, { style: style, resizeHandle: resizeHandle });
    };
    Resizable.prototype.renderResizeHandle = function () {
        var _a = this.props, onLayoutLock = _a.onLayoutLock, onDoubleClick = _a.onDoubleClick, orientation = _a.orientation;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_resizeHandle__WEBPACK_IMPORTED_MODULE_3__["ResizeHandle"], { key: "resize-handle", onDoubleClick: onDoubleClick, onLayoutLock: onLayoutLock, onResizeEnd: this.onResizeEnd, onResizeMove: this.onResizeMove, orientation: orientation }));
    };
    /**
     * Returns the CSS style to apply to the child element given the state's
     * size value.
     */
    Resizable.prototype.getStyle = function () {
        if (this.props.orientation === _resizeHandle__WEBPACK_IMPORTED_MODULE_3__["Orientation"].VERTICAL) {
            return {
                flexBasis: this.state.size + "px",
                minWidth: "0px",
                width: this.state.size + "px",
            };
        }
        else {
            return {
                flexBasis: this.state.size + "px",
                height: this.state.size + "px",
                minHeight: "0px",
            };
        }
    };
    Resizable.prototype.offsetSize = function (offset) {
        var unclampedSize = this.state.unclampedSize + offset;
        this.setState({
            size: _common_index__WEBPACK_IMPORTED_MODULE_2__["Utils"].clamp(unclampedSize, this.props.minSize, this.props.maxSize),
            unclampedSize: unclampedSize,
        });
    };
    Resizable.defaultProps = {
        isResizable: true,
        minSize: 0,
    };
    return Resizable;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizeHandle.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/resizeHandle.js ***!
  \******************************************************************************/
/*! exports provided: Orientation, ResizeHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orientation", function() { return Orientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeHandle", function() { return ResizeHandle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draggable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/draggable.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var Orientation;
(function (Orientation) {
    Orientation[Orientation["HORIZONTAL"] = 1] = "HORIZONTAL";
    Orientation[Orientation["VERTICAL"] = 0] = "VERTICAL";
})(Orientation || (Orientation = {}));
var ResizeHandle = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResizeHandle, _super);
    function ResizeHandle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isDragging: false,
        };
        _this.handleActivate = function (event) {
            _this.setState({ isDragging: true });
            _this.props.onLayoutLock(true);
            event.stopPropagation();
            event.stopImmediatePropagation();
            return true;
        };
        _this.handleDragMove = function (_event, coords) {
            var orientationIndex = _this.props.orientation;
            if (_this.props.onResizeMove != null) {
                _this.props.onResizeMove(coords.offset[orientationIndex], coords.delta[orientationIndex]);
            }
        };
        _this.handleDragEnd = function (_event, coords) {
            var orientationIndex = _this.props.orientation;
            _this.setState({ isDragging: false });
            _this.props.onLayoutLock(false);
            if (_this.props.onResizeMove != null) {
                _this.props.onResizeMove(coords.offset[orientationIndex], coords.delta[orientationIndex]);
            }
            if (_this.props.onResizeEnd != null) {
                _this.props.onResizeEnd(coords.offset[orientationIndex]);
            }
        };
        _this.handleClick = function (_event) {
            _this.setState({ isDragging: false });
            _this.props.onLayoutLock(false);
        };
        _this.handleDoubleClick = function (_event) {
            _this.setState({ isDragging: false });
            _this.props.onLayoutLock(false);
            if (_this.props.onDoubleClick != null) {
                _this.props.onDoubleClick();
            }
        };
        return _this;
    }
    ResizeHandle.prototype.render = function () {
        var _a = this.props, onResizeMove = _a.onResizeMove, onResizeEnd = _a.onResizeEnd, onDoubleClick = _a.onDoubleClick, orientation = _a.orientation;
        if (onResizeMove == null && onResizeEnd == null && onDoubleClick == null) {
            return undefined;
        }
        var targetClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_RESIZE_HANDLE_TARGET"], (_b = {},
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_DRAGGING"]] = this.state.isDragging,
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_RESIZE_HORIZONTAL"]] = orientation === Orientation.HORIZONTAL,
            _b[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_RESIZE_VERTICAL"]] = orientation === Orientation.VERTICAL,
            _b), this.props.className);
        var handleClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_RESIZE_HANDLE"], (_c = {},
            _c[_common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_DRAGGING"]] = this.state.isDragging,
            _c));
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_draggable__WEBPACK_IMPORTED_MODULE_4__["Draggable"], { onActivate: this.handleActivate, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick, onDragEnd: this.handleDragEnd, onDragMove: this.handleDragMove },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: targetClasses },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: handleClasses }))));
        var _b, _c;
    };
    return ResizeHandle;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizeSensor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/resizeSensor.js ***!
  \******************************************************************************/
/*! exports provided: ResizeSensor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeSensor", function() { return ResizeSensor; });
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Efficiently detect when an HTMLElement is resized.
 *
 * Attaches an invisible "resize-sensor" div to the element. Then it checks
 * the element's offsetWidth and offsetHeight whenever a scroll event is
 * triggered on the "resize-sensor" children. These events are further
 * debounced using requestAnimationFrame.
 *
 * Inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */
var ResizeSensor = /** @class */ (function () {
    function ResizeSensor() {
    }
    ResizeSensor.attach = function (element, callback) {
        var lifecycle = ResizeSensor.debounce(callback);
        var resizeSensor = document.createElement("div");
        resizeSensor.className = _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_RESIZE_SENSOR"];
        resizeSensor.style.cssText = ResizeSensor.RESIZE_SENSOR_STYLE;
        resizeSensor.innerHTML = ResizeSensor.RESIZE_SENSOR_HTML;
        element.appendChild(resizeSensor);
        if (getComputedStyle(element, null).getPropertyValue("position") === "static") {
            element.style.position = "relative";
        }
        var expand = resizeSensor.childNodes[0];
        var expandChild = expand.childNodes[0];
        var shrink = resizeSensor.childNodes[1];
        var reset = function () {
            expandChild.style.width = "100000px";
            expandChild.style.height = "100000px";
            expand.scrollLeft = 100000;
            expand.scrollTop = 100000;
            shrink.scrollLeft = 100000;
            shrink.scrollTop = 100000;
        };
        reset();
        var lastWidth;
        var lastHeight;
        var onScroll = function () {
            var currentWidth = element.offsetWidth;
            var currentHeight = element.offsetHeight;
            if (currentWidth !== lastWidth || currentHeight !== lastHeight) {
                lastWidth = currentWidth;
                lastHeight = currentHeight;
                lifecycle.trigger();
            }
            reset();
        };
        expand.addEventListener("scroll", onScroll);
        shrink.addEventListener("scroll", onScroll);
        return function () {
            element.removeChild(resizeSensor);
            lifecycle.cancelled = true;
        };
    };
    ResizeSensor.debounce = function (callback) {
        var scope = {
            cancelled: false,
            trigger: function () {
                if (scope.triggered || scope.cancelled) {
                    return;
                }
                scope.triggered = true;
                requestAnimationFrame(function () {
                    scope.triggered = false;
                    if (!scope.cancelled) {
                        callback();
                    }
                });
            },
            triggered: false,
        };
        return scope;
    };
    ResizeSensor.RESIZE_SENSOR_STYLE = "position: absolute; left: 0; top: 0; right: 0; " +
        "bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;";
    ResizeSensor.RESIZE_SENSOR_HTML = "<div class=\"" + _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_RESIZE_SENSOR_EXPAND"] + "\"\n        style=\"" + ResizeSensor.RESIZE_SENSOR_STYLE + "\"><div style=\"position: absolute; left: 0; top: 0; transition: 0s;\"\n        ></div></div><div class=\"" + _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_RESIZE_SENSOR_SHRINK"] + "\" style=\"" + ResizeSensor.RESIZE_SENSOR_STYLE + "\"\n        ><div style=\"position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%;\"></div></div>";
    return ResizeSensor;
}());



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/interactions/selectable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/interactions/selectable.js ***!
  \****************************************************************************/
/*! exports provided: DragSelectable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragSelectable", function() { return DragSelectable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_internal_focusedCellUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/internal/focusedCellUtils */ "./node_modules/@blueprintjs/table/lib/esm/common/internal/focusedCellUtils.js");
/* harmony import */ var _common_internal_platformUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/internal/platformUtils */ "./node_modules/@blueprintjs/table/lib/esm/common/internal/platformUtils.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _dragEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dragEvents */ "./node_modules/@blueprintjs/table/lib/esm/interactions/dragEvents.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./draggable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/draggable.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var DragSelectable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DragSelectable, _super);
    function DragSelectable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.didExpandSelectionOnActivate = false;
        _this.handleActivate = function (event) {
            var _a = _this.props, locateClick = _a.locateClick, selectedRegions = _a.selectedRegions, selectedRegionTransform = _a.selectedRegionTransform;
            if (_this.shouldIgnoreMouseDown(event)) {
                return false;
            }
            var region = locateClick(event);
            if (!_regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].isValid(region)) {
                return false;
            }
            if (selectedRegionTransform != null) {
                region = selectedRegionTransform(region, event);
            }
            var foundIndex = _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].findMatchingRegion(selectedRegions, region);
            var matchesExistingSelection = foundIndex !== -1;
            if (matchesExistingSelection && _dragEvents__WEBPACK_IMPORTED_MODULE_7__["DragEvents"].isAdditive(event)) {
                _this.handleClearSelectionAtIndex(foundIndex);
                // if we just deselected a selected region, a subsequent drag-move
                // could reselect it again and *also* clear other selections. that's
                // quite unintuitive, so ignore subsequent drag-move's.
                return false;
            }
            // we want to listen to subsequent drag-move's in all following cases,
            // so this mousedown can be the start of a new selection if desired.
            if (matchesExistingSelection) {
                _this.handleClearAllSelectionsNotAtIndex(foundIndex);
            }
            else if (_this.shouldExpandSelection(event)) {
                _this.handleExpandSelection(region);
            }
            else if (_this.shouldAddDisjointSelection(event)) {
                _this.handleAddDisjointSelection(region);
            }
            else {
                _this.handleReplaceSelection(region);
            }
            return true;
        };
        _this.handleDragMove = function (event, coords) {
            var _a = _this.props, enableMultipleSelection = _a.enableMultipleSelection, focusedCell = _a.focusedCell, locateClick = _a.locateClick, locateDrag = _a.locateDrag, selectedRegions = _a.selectedRegions, selectedRegionTransform = _a.selectedRegionTransform;
            var region = enableMultipleSelection
                ? locateDrag(event, coords, /* returnEndOnly? */ _this.didExpandSelectionOnActivate)
                : locateClick(event);
            if (!_regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].isValid(region)) {
                return;
            }
            else if (selectedRegionTransform != null) {
                region = selectedRegionTransform(region, event, coords);
            }
            var nextSelectedRegions = _this.didExpandSelectionOnActivate
                ? _this.expandSelectedRegions(selectedRegions, region, focusedCell)
                : _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].update(selectedRegions, region);
            _this.maybeInvokeSelectionCallback(nextSelectedRegions);
            if (!enableMultipleSelection) {
                // move the focused cell with the selected region
                var lastIndex = nextSelectedRegions.length - 1;
                var mostRecentRegion = nextSelectedRegions[lastIndex];
                _this.invokeOnFocusCallbackForRegion(mostRecentRegion, lastIndex);
            }
        };
        _this.handleDragEnd = function () {
            _this.finishInteraction();
        };
        _this.handleClick = function () {
            _this.finishInteraction();
        };
        // Boolean checks
        // ==============
        _this.shouldExpandSelection = function (event) {
            var enableMultipleSelection = _this.props.enableMultipleSelection;
            return enableMultipleSelection && event.shiftKey;
        };
        _this.shouldAddDisjointSelection = function (event) {
            var enableMultipleSelection = _this.props.enableMultipleSelection;
            return enableMultipleSelection && _dragEvents__WEBPACK_IMPORTED_MODULE_7__["DragEvents"].isAdditive(event);
        };
        // Update logic
        // ============
        _this.handleClearSelectionAtIndex = function (selectedRegionIndex) {
            var selectedRegions = _this.props.selectedRegions;
            // remove just the clicked region, leaving other selected regions in place
            var nextSelectedRegions = selectedRegions.slice();
            nextSelectedRegions.splice(selectedRegionIndex, 1);
            _this.maybeInvokeSelectionCallback(nextSelectedRegions);
            // if there are still any selections, move the focused cell to the
            // most recent selection. otherwise, don't update it.
            if (nextSelectedRegions.length > 0) {
                var lastIndex = nextSelectedRegions.length - 1;
                _this.invokeOnFocusCallbackForRegion(nextSelectedRegions[lastIndex], lastIndex);
            }
        };
        _this.handleClearAllSelectionsNotAtIndex = function (selectedRegionIndex) {
            var selectedRegions = _this.props.selectedRegions;
            var nextSelectedRegion = selectedRegions[selectedRegionIndex];
            _this.maybeInvokeSelectionCallback([nextSelectedRegion]);
            _this.invokeOnFocusCallbackForRegion(nextSelectedRegion, 0);
        };
        _this.handleExpandSelection = function (region) {
            var _a = _this.props, focusedCell = _a.focusedCell, selectedRegions = _a.selectedRegions;
            _this.didExpandSelectionOnActivate = true;
            // there should be only one selected region after expanding. do not
            // update the focused cell.
            var nextSelectedRegions = _this.expandSelectedRegions(selectedRegions, region, focusedCell);
            _this.maybeInvokeSelectionCallback(nextSelectedRegions);
            // move the focused cell into the new region if there were no selections before
            if (selectedRegions == null || selectedRegions.length === 0) {
                _this.invokeOnFocusCallbackForRegion(region);
            }
        };
        _this.handleAddDisjointSelection = function (region) {
            var selectedRegions = _this.props.selectedRegions;
            // add the new region to the existing selections
            var nextSelectedRegions = _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].add(selectedRegions, region);
            _this.maybeInvokeSelectionCallback(nextSelectedRegions);
            // put the focused cell in the new region
            _this.invokeOnFocusCallbackForRegion(region, nextSelectedRegions.length - 1);
        };
        _this.handleReplaceSelection = function (region) {
            // clear all selections and retain only the new one
            var nextSelectedRegions = [region];
            _this.maybeInvokeSelectionCallback(nextSelectedRegions);
            // move the focused cell into the new selection
            _this.invokeOnFocusCallbackForRegion(region);
        };
        _this.invokeOnFocusCallbackForRegion = function (focusRegion, focusSelectionIndex) {
            if (focusSelectionIndex === void 0) { focusSelectionIndex = 0; }
            var onFocusedCell = _this.props.onFocusedCell;
            var focusedCellCoords = _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].getFocusCellCoordinatesFromRegion(focusRegion);
            onFocusedCell(_common_internal_focusedCellUtils__WEBPACK_IMPORTED_MODULE_3__["toFullCoordinates"](focusedCellCoords, focusSelectionIndex));
        };
        // Other
        // =====
        _this.finishInteraction = function () {
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.onSelectionEnd, _this.props.selectedRegions);
            _this.didExpandSelectionOnActivate = false;
            _this.lastEmittedSelectedRegions = null;
        };
        return _this;
    }
    DragSelectable.prototype.render = function () {
        var draggableProps = this.getDraggableProps();
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_draggable__WEBPACK_IMPORTED_MODULE_8__["Draggable"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, draggableProps, { preventDefault: false }), this.props.children));
    };
    DragSelectable.prototype.getDraggableProps = function () {
        return this.props.onSelection == null
            ? {}
            : {
                onActivate: this.handleActivate,
                onClick: this.handleClick,
                onDragEnd: this.handleDragEnd,
                onDragMove: this.handleDragMove,
            };
    };
    DragSelectable.prototype.shouldIgnoreMouseDown = function (event) {
        var _a = this.props, disabled = _a.disabled, _b = _a.ignoredSelectors, ignoredSelectors = _b === void 0 ? [] : _b;
        var element = event.target;
        var isLeftClick = _common_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isLeftClick(event);
        var isContextMenuTrigger = isLeftClick && event.ctrlKey && _common_internal_platformUtils__WEBPACK_IMPORTED_MODULE_4__["isMac"]();
        var isDisabled = _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvokeOrValue(disabled, event);
        return (!isLeftClick ||
            isContextMenuTrigger ||
            isDisabled ||
            ignoredSelectors.some(function (selector) { return element.closest(selector) != null; }));
    };
    // Callbacks
    // =========
    DragSelectable.prototype.maybeInvokeSelectionCallback = function (nextSelectedRegions) {
        var onSelection = this.props.onSelection;
        // invoke only if the selection changed. this is useful only on
        // mousemove; there's special handling for mousedown interactions that
        // target an already-selected region.
        if (this.lastEmittedSelectedRegions == null ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].deepCompareKeys(this.lastEmittedSelectedRegions, nextSelectedRegions)) {
            onSelection(nextSelectedRegions);
            this.lastEmittedSelectedRegions = nextSelectedRegions;
        }
    };
    /**
     * Expands the last-selected region to the new region, and replaces the
     * last-selected region with the expanded region. If a focused cell is provided,
     * the focused cell will serve as an anchor for the expansion.
     */
    DragSelectable.prototype.expandSelectedRegions = function (regions, region, focusedCell) {
        if (regions.length === 0) {
            return [region];
        }
        else if (focusedCell != null) {
            var expandedRegion = _common_internal_focusedCellUtils__WEBPACK_IMPORTED_MODULE_3__["expandFocusedRegion"](focusedCell, region);
            return _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].update(regions, expandedRegion);
        }
        else {
            var expandedRegion = _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].expandRegion(regions[regions.length - 1], region);
            return _regions__WEBPACK_IMPORTED_MODULE_6__["Regions"].update(regions, expandedRegion);
        }
    };
    DragSelectable.defaultProps = {
        disabled: false,
        enableMultipleSelection: false,
        selectedRegions: [],
    };
    return DragSelectable;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/layers/guides.js":
/*!******************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/layers/guides.js ***!
  \******************************************************************/
/*! exports provided: GuideLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideLayer", function() { return GuideLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var GuideLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GuideLayer, _super);
    function GuideLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderVerticalGuide = function (offset, index) {
            var style = {
                left: offset + "px",
            };
            var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_OVERLAY"], _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_VERTICAL_GUIDE"], {
                "pt-table-vertical-guide-flush-left": offset === 0,
            });
            return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: className, key: index, style: style });
        };
        _this.renderHorizontalGuide = function (offset, index) {
            var style = {
                top: offset + "px",
            };
            var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_OVERLAY"], _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_HORIZONTAL_GUIDE"], {
                "pt-table-horizontal-guide-flush-top": offset === 0,
            });
            return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: className, key: index, style: style });
        };
        return _this;
    }
    GuideLayer.prototype.shouldComponentUpdate = function (nextProps) {
        if (this.props.className !== nextProps.className) {
            return true;
        }
        // shallow-comparing guide arrays leads to tons of unnecessary re-renders, so we check the
        // array contents explicitly.
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].arraysEqual(this.props.verticalGuides, nextProps.verticalGuides) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].arraysEqual(this.props.horizontalGuides, nextProps.horizontalGuides));
    };
    GuideLayer.prototype.render = function () {
        var _a = this.props, verticalGuides = _a.verticalGuides, horizontalGuides = _a.horizontalGuides, className = _a.className;
        var verticals = verticalGuides == null ? undefined : verticalGuides.map(this.renderVerticalGuide);
        var horizontals = horizontalGuides == null ? undefined : horizontalGuides.map(this.renderHorizontalGuide);
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_OVERLAY_LAYER"]) },
            verticals,
            horizontals));
    };
    return GuideLayer;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/layers/regions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/layers/regions.js ***!
  \*******************************************************************/
/*! exports provided: RegionLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionLayer", function() { return RegionLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






// don't include "regions" or "regionStyles" in here, because they can't be shallowly compared
var UPDATE_PROPS_KEYS = ["className"];
var RegionLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegionLayer, _super);
    function RegionLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderRegion = function (_region, index) {
            var _a = _this.props, className = _a.className, regionStyles = _a.regionStyles;
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_OVERLAY"], _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_REGION"], className), key: index, style: regionStyles[index] }));
        };
        return _this;
    }
    RegionLayer.prototype.shouldComponentUpdate = function (nextProps) {
        // shallowly comparable props like "className" tend not to change in the default table
        // implementation, so do that check last with hope that we return earlier and avoid it
        // altogether.
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].arraysEqual(this.props.regions, nextProps.regions, _regions__WEBPACK_IMPORTED_MODULE_5__["Regions"].regionsEqual) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].arraysEqual(this.props.regionStyles, nextProps.regionStyles, _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(this.props, nextProps, { include: UPDATE_PROPS_KEYS }));
    };
    RegionLayer.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_OVERLAY_LAYER"] }, this.renderRegionChildren());
    };
    RegionLayer.prototype.renderRegionChildren = function () {
        var regions = this.props.regions;
        if (regions == null) {
            return undefined;
        }
        return regions.map(this.renderRegion);
    };
    return RegionLayer;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/locator.js":
/*!************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/locator.js ***!
  \************************************************************/
/*! exports provided: Locator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locator", function() { return Locator; });
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/rect */ "./node_modules/@blueprintjs/table/lib/esm/common/rect.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



var Locator = /** @class */ (function () {
    function Locator(
    /* The root table element within which a click is deemed valid and relevant. */
    tableElement, 
    /* The scrollable element that wraps the cell container. */
    scrollContainerElement, 
    /* The element containing all body cells in the grid (excluding headers). */
    cellContainerElement) {
        var _this = this;
        this.tableElement = tableElement;
        this.scrollContainerElement = scrollContainerElement;
        this.cellContainerElement = cellContainerElement;
        this.convertCellIndexToClientX = function (index) {
            return _this.grid.getCumulativeWidthAt(index);
        };
        this.convertCellMidpointToClientX = function (index) {
            var cellLeft = _this.grid.getCumulativeWidthBefore(index);
            var cellRight = _this.grid.getCumulativeWidthAt(index);
            return (cellLeft + cellRight) / 2;
        };
        this.convertCellIndexToClientY = function (index) {
            return _this.grid.getCumulativeHeightAt(index);
        };
        this.convertCellMidpointToClientY = function (index) {
            var cellTop = _this.grid.getCumulativeHeightBefore(index);
            var cellBottom = _this.grid.getCumulativeHeightAt(index);
            return (cellTop + cellBottom) / 2;
        };
        this.toGridX = function (clientX) {
            var gridOffsetFromPageLeft = _this.cellContainerElement.getBoundingClientRect().left;
            var scrollOffsetFromGridLeft = _this.scrollContainerElement.scrollLeft;
            var cursorOffsetFromGridLeft = clientX - (gridOffsetFromPageLeft + scrollOffsetFromGridLeft);
            var isCursorWithinFrozenColumns = _this.numFrozenColumns != null &&
                _this.numFrozenColumns > 0 &&
                cursorOffsetFromGridLeft <= _this.grid.getCumulativeWidthBefore(_this.numFrozenColumns);
            // the frozen-column region doesn't scroll, so ignore the scroll distance in that case
            return isCursorWithinFrozenColumns
                ? cursorOffsetFromGridLeft
                : cursorOffsetFromGridLeft + scrollOffsetFromGridLeft;
        };
        this.toGridY = function (clientY) {
            var gridOffsetFromPageTop = _this.cellContainerElement.getBoundingClientRect().top;
            var scrollOffsetFromGridTop = _this.scrollContainerElement.scrollTop;
            var cursorOffsetFromGridTop = clientY - (gridOffsetFromPageTop + scrollOffsetFromGridTop);
            var isCursorWithinFrozenRows = _this.numFrozenRows != null &&
                _this.numFrozenRows > 0 &&
                cursorOffsetFromGridTop <= _this.grid.getCumulativeHeightBefore(_this.numFrozenRows);
            return isCursorWithinFrozenRows ? cursorOffsetFromGridTop : cursorOffsetFromGridTop + scrollOffsetFromGridTop;
        };
        this.numFrozenRows = 0;
        this.numFrozenColumns = 0;
    }
    // Setters
    // =======
    Locator.prototype.setGrid = function (grid) {
        this.grid = grid;
        return this;
    };
    Locator.prototype.setNumFrozenRows = function (numFrozenRows) {
        this.numFrozenRows = numFrozenRows;
        return this;
    };
    Locator.prototype.setNumFrozenColumns = function (numFrozenColumns) {
        this.numFrozenColumns = numFrozenColumns;
        return this;
    };
    // Getters
    // =======
    Locator.prototype.getViewportRect = function () {
        return new _common_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"](this.scrollContainerElement.scrollLeft, this.scrollContainerElement.scrollTop, this.scrollContainerElement.clientWidth, this.scrollContainerElement.clientHeight);
    };
    Locator.prototype.getWidestVisibleCellInColumn = function (columnIndex) {
        var columnCellSelector = this.getColumnCellSelector(columnIndex);
        var columnHeaderAndBodyCells = this.tableElement.querySelectorAll(columnCellSelector);
        var maxWidth = 0;
        for (var i = 0; i < columnHeaderAndBodyCells.length; i++) {
            var contentWidth = _common_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].measureElementTextContent(columnHeaderAndBodyCells.item(i)).width;
            var cellWidth = Math.ceil(contentWidth) + Locator.CELL_HORIZONTAL_PADDING * 2;
            if (cellWidth > maxWidth) {
                maxWidth = cellWidth;
            }
        }
        return maxWidth;
    };
    Locator.prototype.getTallestVisibleCellInColumn = function (columnIndex) {
        // consider only body cells, hence the extra Classes.TABLE_CELL specificity
        var columnCellSelector = this.getColumnCellSelector(columnIndex);
        var columnBodyCells = this.tableElement.querySelectorAll(columnCellSelector + "." + _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_CELL"]);
        var maxHeight = 0;
        for (var i = 0; i < columnBodyCells.length; i++) {
            var cell = columnBodyCells.item(i);
            var cellValue = cell.querySelector("." + _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_TRUNCATED_VALUE"]);
            var cellTruncatedFormatText = cell.querySelector("." + _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_TRUNCATED_FORMAT_TEXT"]);
            var cellTruncatedText = cell.querySelector("." + _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_TRUNCATED_TEXT"]);
            var height = 0;
            if (cellValue != null) {
                height = cellValue.scrollHeight;
            }
            else if (cellTruncatedFormatText != null) {
                height = cellTruncatedFormatText.scrollHeight;
            }
            else if (cellTruncatedText != null) {
                height = cellTruncatedText.scrollHeight;
            }
            else {
                // it's not anything we recognize, just use the current height of the cell
                height = cell.scrollHeight;
            }
            if (height > maxHeight) {
                maxHeight = height;
            }
        }
        return maxHeight;
    };
    // Converters
    // ==========
    Locator.prototype.convertPointToColumn = function (clientX, useMidpoint) {
        var tableRect = this.getTableRect();
        if (!tableRect.containsX(clientX)) {
            return -1;
        }
        var gridX = this.toGridX(clientX);
        var limit = useMidpoint ? this.grid.numCols : this.grid.numCols - 1;
        var lookupFn = useMidpoint ? this.convertCellMidpointToClientX : this.convertCellIndexToClientX;
        return _common_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].binarySearch(gridX, limit, lookupFn);
    };
    Locator.prototype.convertPointToRow = function (clientY, useMidpoint) {
        var tableRect = this.getTableRect();
        if (!tableRect.containsY(clientY)) {
            return -1;
        }
        var gridY = this.toGridY(clientY);
        var limit = useMidpoint ? this.grid.numRows : this.grid.numRows - 1;
        var lookupFn = useMidpoint ? this.convertCellMidpointToClientY : this.convertCellIndexToClientY;
        return _common_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].binarySearch(gridY, limit, lookupFn);
    };
    Locator.prototype.convertPointToCell = function (clientX, clientY) {
        var gridX = this.toGridX(clientX);
        var gridY = this.toGridY(clientY);
        var col = _common_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].binarySearch(gridX, this.grid.numCols - 1, this.convertCellIndexToClientX);
        var row = _common_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].binarySearch(gridY, this.grid.numRows - 1, this.convertCellIndexToClientY);
        return { col: col, row: row };
    };
    // Private helpers
    // ===============
    Locator.prototype.getColumnCellSelector = function (columnIndex) {
        // measure frozen columns in the LEFT quadrant; otherwise, they might
        // have been scrolled out of view, leading to wonky measurements (#1561)
        var isFrozenColumnIndex = columnIndex < this.numFrozenColumns;
        var quadrantClass = isFrozenColumnIndex ? _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_QUADRANT_LEFT"] : _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_QUADRANT_MAIN"];
        var cellClass = _common_classes__WEBPACK_IMPORTED_MODULE_0__["columnCellIndexClass"](columnIndex);
        return "." + quadrantClass + " ." + cellClass;
    };
    Locator.prototype.getTableRect = function () {
        return _common_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"].wrap(this.tableElement.getBoundingClientRect());
    };
    Locator.CELL_HORIZONTAL_PADDING = 10;
    return Locator;
}());



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrant.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrant.js ***!
  \****************************************************************************/
/*! exports provided: QuadrantType, TableQuadrant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadrantType", function() { return QuadrantType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableQuadrant", function() { return TableQuadrant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/errors */ "./node_modules/@blueprintjs/table/lib/esm/common/errors.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var QuadrantType;
(function (QuadrantType) {
    /**
     * The main quadrant beneath any frozen rows or columns.
     */
    QuadrantType["MAIN"] = "main";
    /**
     * The top quadrant, containing column headers and frozen rows.
     */
    QuadrantType["TOP"] = "top";
    /**
     * The left quadrant, containing row headers and frozen columns.
     */
    QuadrantType["LEFT"] = "left";
    /**
     * The top-left quadrant, containing the headers and cells common to both
     * the frozen columns and frozen rows.
     */
    QuadrantType["TOP_LEFT"] = "top-left";
})(QuadrantType || (QuadrantType = {}));
var TableQuadrant = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TableQuadrant, _super);
    function TableQuadrant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableQuadrant.prototype.render = function () {
        var _a = this.props, grid = _a.grid, enableRowHeader = _a.enableRowHeader, quadrantType = _a.quadrantType, bodyRenderer = _a.bodyRenderer;
        var showFrozenRowsOnly = quadrantType === QuadrantType.TOP || quadrantType === QuadrantType.TOP_LEFT;
        var showFrozenColumnsOnly = quadrantType === QuadrantType.LEFT || quadrantType === QuadrantType.TOP_LEFT;
        var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_QUADRANT"], this.getQuadrantCssClass(), this.props.className);
        var maybeMenu = enableRowHeader && _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(this.props.menuRenderer);
        var maybeRowHeader = enableRowHeader && _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(this.props.rowHeaderCellRenderer, showFrozenRowsOnly);
        var maybeColumnHeader = _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(this.props.columnHeaderCellRenderer, showFrozenColumnsOnly);
        var body = quadrantType != null
            ? bodyRenderer(quadrantType, showFrozenRowsOnly, showFrozenColumnsOnly)
            : bodyRenderer();
        // need to set bottom container size to prevent overlay clipping on scroll
        var bottomContainerStyle = {
            height: grid.getHeight(),
            width: grid.getWidth(),
        };
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: className, style: this.props.style, ref: this.props.quadrantRef },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_QUADRANT_SCROLL_CONTAINER"], ref: this.props.scrollContainerRef, onScroll: this.props.onScroll, onWheel: this.props.onWheel },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_TOP_CONTAINER"] },
                    maybeMenu,
                    maybeColumnHeader),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_BOTTOM_CONTAINER"], style: bottomContainerStyle },
                    maybeRowHeader,
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_QUADRANT_BODY_CONTAINER"], ref: this.props.bodyRef }, body)))));
    };
    TableQuadrant.prototype.validateProps = function (nextProps) {
        var quadrantType = nextProps.quadrantType;
        if (nextProps.onScroll != null && quadrantType != null && quadrantType !== QuadrantType.MAIN) {
            console.warn(_common_errors__WEBPACK_IMPORTED_MODULE_5__["QUADRANT_ON_SCROLL_UNNECESSARILY_DEFINED"]);
        }
    };
    TableQuadrant.prototype.getQuadrantCssClass = function () {
        switch (this.props.quadrantType) {
            case QuadrantType.MAIN:
                return _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_QUADRANT_MAIN"];
            case QuadrantType.TOP:
                return _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_QUADRANT_TOP"];
            case QuadrantType.LEFT:
                return _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_QUADRANT_LEFT"];
            case QuadrantType.TOP_LEFT:
                return _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_QUADRANT_TOP_LEFT"];
            default:
                return undefined;
        }
    };
    // we want the user to explicitly pass a quadrantType. define defaultProps as a Partial to avoid
    // declaring that and other required props here.
    TableQuadrant.defaultProps = {
        enableRowHeader: true,
    };
    return TableQuadrant;
}(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrantStack.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrantStack.js ***!
  \*********************************************************************************/
/*! exports provided: TableQuadrantStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableQuadrantStack", function() { return TableQuadrantStack; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_internal_scrollUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/internal/scrollUtils */ "./node_modules/@blueprintjs/table/lib/esm/common/internal/scrollUtils.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/* harmony import */ var _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tableQuadrant */ "./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrant.js");
/* harmony import */ var _tableQuadrantStackCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tableQuadrantStackCache */ "./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrantStackCache.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








// when there are no column headers, the header and menu element will
// confusingly collapse to zero height unless we establish this default.
var DEFAULT_COLUMN_HEADER_HEIGHT = 30;
// the debounce delay for updating the view on scroll. elements will be resized
// and rejiggered once scroll has ceased for at least this long, but not before.
var DEFAULT_VIEW_SYNC_DELAY = 500;
// if there are no frozen rows or columns, we still want the quadrant to be 1px
// bigger to reveal the header border. this border leaks into the cell grid to
// ensure that selection overlay borders (e.g.) will be perfectly flush with it.
var QUADRANT_MIN_SIZE = 1;
// a list of props that trigger layout changes. when these props change,
// quadrant views need to be explicitly resynchronized.
var SYNC_TRIGGER_PROP_KEYS = [
    "enableRowHeader",
    "loadingOptions",
    "numFrozenColumns",
    "numFrozenRows",
    "numColumns",
    "numRows",
    "enableColumnInteractionBar",
];
var TableQuadrantStack = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TableQuadrantStack, _super);
    // Public
    // ======
    function TableQuadrantStack(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Instance variables
        // ==================
        _this.quadrantRefs = (_a = {},
            _a[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN] = {},
            _a[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP] = {},
            _a[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT] = {},
            _a[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT] = {},
            _a);
        _this.quadrantRefHandlers = (_b = {},
            _b[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN] = _this.generateQuadrantRefHandlers(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN),
            _b[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP] = _this.generateQuadrantRefHandlers(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP),
            _b[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT] = _this.generateQuadrantRefHandlers(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT),
            _b[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT] = _this.generateQuadrantRefHandlers(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT),
            _b);
        // this flag helps us avoid redundant work in the MAIN quadrant's onScroll callback, if the
        // callback was triggered from a manual scrollTop/scrollLeft update within an onWheel.
        _this.wasMainQuadrantScrollTriggeredByWheelEvent = false;
        // Quadrant-specific renderers
        // ===========================
        // Menu
        _this.renderMainQuadrantMenu = function () {
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.menuRenderer, _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].menu);
        };
        _this.renderTopQuadrantMenu = function () {
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.menuRenderer, _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP].menu);
        };
        _this.renderLeftQuadrantMenu = function () {
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.menuRenderer, _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT].menu);
        };
        _this.renderTopLeftQuadrantMenu = function () {
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.menuRenderer, _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT].menu);
        };
        // Column header
        _this.renderMainQuadrantColumnHeader = function (showFrozenColumnsOnly) {
            var refHandler = _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].columnHeader;
            var resizeHandler = _this.handleColumnResizeGuideMain;
            var reorderingHandler = _this.handleColumnsReordering;
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.columnHeaderCellRenderer, refHandler, resizeHandler, reorderingHandler, showFrozenColumnsOnly);
        };
        _this.renderTopQuadrantColumnHeader = function (showFrozenColumnsOnly) {
            var refHandler = _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP].columnHeader;
            var resizeHandler = _this.handleColumnResizeGuideTop;
            var reorderingHandler = _this.handleColumnsReordering;
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.columnHeaderCellRenderer, refHandler, resizeHandler, reorderingHandler, showFrozenColumnsOnly);
        };
        _this.renderLeftQuadrantColumnHeader = function (showFrozenColumnsOnly) {
            var refHandler = _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT].columnHeader;
            var resizeHandler = _this.handleColumnResizeGuideLeft;
            var reorderingHandler = _this.handleColumnsReordering;
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.columnHeaderCellRenderer, refHandler, resizeHandler, reorderingHandler, showFrozenColumnsOnly);
        };
        _this.renderTopLeftQuadrantColumnHeader = function (showFrozenColumnsOnly) {
            var refHandler = _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT].columnHeader;
            var resizeHandler = _this.handleColumnResizeGuideTopLeft;
            var reorderingHandler = _this.handleColumnsReordering;
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.columnHeaderCellRenderer, refHandler, resizeHandler, reorderingHandler, showFrozenColumnsOnly);
        };
        // Row header
        _this.renderMainQuadrantRowHeader = function (showFrozenRowsOnly) {
            var refHandler = _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].rowHeader;
            var resizeHandler = _this.handleRowResizeGuideMain;
            var reorderingHandler = _this.handleRowsReordering;
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.rowHeaderCellRenderer, refHandler, resizeHandler, reorderingHandler, showFrozenRowsOnly);
        };
        _this.renderTopQuadrantRowHeader = function (showFrozenRowsOnly) {
            var refHandler = _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP].rowHeader;
            var resizeHandler = _this.handleRowResizeGuideTop;
            var reorderingHandler = _this.handleRowsReordering;
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.rowHeaderCellRenderer, refHandler, resizeHandler, reorderingHandler, showFrozenRowsOnly);
        };
        _this.renderLeftQuadrantRowHeader = function (showFrozenRowsOnly) {
            var refHandler = _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT].rowHeader;
            var resizeHandler = _this.handleRowResizeGuideLeft;
            var reorderingHandler = _this.handleRowsReordering;
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.rowHeaderCellRenderer, refHandler, resizeHandler, reorderingHandler, showFrozenRowsOnly);
        };
        _this.renderTopLeftQuadrantRowHeader = function (showFrozenRowsOnly) {
            var refHandler = _this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT].rowHeader;
            var resizeHandler = _this.handleRowResizeGuideTopLeft;
            var reorderingHandler = _this.handleRowsReordering;
            return _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.rowHeaderCellRenderer, refHandler, resizeHandler, reorderingHandler, showFrozenRowsOnly);
        };
        // Event handlers
        // ==============
        // Scrolling
        // ---------
        _this.handleMainQuadrantScroll = function (event) {
            if (_this.wasMainQuadrantScrollTriggeredByWheelEvent) {
                _this.wasMainQuadrantScrollTriggeredByWheelEvent = false;
                return;
            }
            // invoke onScroll - which may read current scroll position - before
            // forcing a reflow with upcoming .scroll{Top,Left} setters.
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.onScroll, event);
            // batch DOM reads here. note that onScroll events don't include deltas
            // like onWheel events do, so we have to read from the DOM directly.
            var mainScrollContainer = _this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].scrollContainer;
            var nextScrollLeft = mainScrollContainer.scrollLeft;
            var nextScrollTop = mainScrollContainer.scrollTop;
            // with the "scroll" event, scroll offsets are updated prior to the
            // event's firing, so no explicit update needed.
            _this.handleScrollOffsetChange("scrollLeft", nextScrollLeft);
            _this.handleScrollOffsetChange("scrollTop", nextScrollTop);
            // sync less important view stuff when scrolling/wheeling stops.
            _this.syncQuadrantViewsDebounced();
        };
        _this.handleWheel = function (event) {
            // again, let the listener read the current scroll position before we
            // force a reflow by resizing or repositioning stuff.
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.onScroll, event);
            // this helper performs DOM reads, so do them together before the writes below.
            var nextScrollLeft = _this.getNextScrollOffset("horizontal", event.deltaX);
            var nextScrollTop = _this.getNextScrollOffset("vertical", event.deltaY);
            // update this flag before updating the main quadrant scroll offsets,
            // since we need this set before onScroll fires.
            if (nextScrollLeft != null || nextScrollTop != null) {
                _this.wasMainQuadrantScrollTriggeredByWheelEvent = true;
            }
            // manually update the affected quadrant's scroll position to make sure
            // it stays perfectly in sync with dependent quadrants in each frame.
            // note: these DOM writes are batched together after the reads above.
            _this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].scrollContainer.scrollLeft = nextScrollLeft;
            _this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].scrollContainer.scrollTop = nextScrollTop;
            _this.handleScrollOffsetChange("scrollLeft", nextScrollLeft);
            _this.handleScrollOffsetChange("scrollTop", nextScrollTop);
            // sync less important view stuff when scrolling/wheeling stops.
            _this.syncQuadrantViewsDebounced();
        };
        _this.getNextScrollOffset = function (direction, delta) {
            var _a = _this.props, grid = _a.grid, isHorizontalScrollDisabled = _a.isHorizontalScrollDisabled, isVerticalScrollDisabled = _a.isVerticalScrollDisabled;
            var isHorizontal = direction === "horizontal";
            var scrollKey = isHorizontal ? "scrollLeft" : "scrollTop";
            var isScrollDisabled = isHorizontal ? isHorizontalScrollDisabled : isVerticalScrollDisabled;
            if (isScrollDisabled) {
                return undefined;
            }
            // measure client size on the first event of the current wheel gesture,
            // then grab cached values on successive events to eliminate DOM reads.
            // requires clearing the cached values in the debounced view-update at
            // the end of the wheel event.
            // ASSUMPTION: the client size won't change during the wheel event.
            var clientSize = isHorizontal
                ? _this.cache.getScrollContainerClientWidth()
                : _this.cache.getScrollContainerClientHeight();
            if (clientSize == null) {
                // should trigger only on the first scroll of the wheel gesture.
                // will save client width and height sizes in the cache.
                clientSize = _this.updateScrollContainerClientSize(isHorizontal);
            }
            // by now, the client width and height will have been saved in cache, so
            // they can't be nully anymore. also, events can only happen after
            // mount, so we're guaranteed to have measured the header sizes in
            // syncQuadrantViews() by now too, as it's invoked on mount.
            var containerSize = isHorizontal
                ? _this.cache.getScrollContainerClientWidth() - _this.cache.getRowHeaderWidth()
                : _this.cache.getScrollContainerClientHeight() - _this.cache.getColumnHeaderHeight();
            var gridSize = isHorizontal ? grid.getWidth() : grid.getHeight();
            var maxScrollOffset = Math.max(0, gridSize - containerSize);
            var currScrollOffset = _this.cache.getScrollOffset(scrollKey);
            var nextScrollOffset = _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].clamp(currScrollOffset + delta, 0, maxScrollOffset);
            return nextScrollOffset;
        };
        // Resizing
        // --------
        // Columns
        _this.handleColumnResizeGuideMain = function (verticalGuides) {
            _this.invokeColumnResizeHandler(verticalGuides, _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN);
        };
        _this.handleColumnResizeGuideTop = function (verticalGuides) {
            _this.invokeColumnResizeHandler(verticalGuides, _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP);
        };
        _this.handleColumnResizeGuideLeft = function (verticalGuides) {
            _this.invokeColumnResizeHandler(verticalGuides, _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT);
        };
        _this.handleColumnResizeGuideTopLeft = function (verticalGuides) {
            _this.invokeColumnResizeHandler(verticalGuides, _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT);
        };
        _this.invokeColumnResizeHandler = function (verticalGuides, quadrantType) {
            var adjustedGuides = _this.adjustVerticalGuides(verticalGuides, quadrantType);
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.handleColumnResizeGuide, adjustedGuides);
        };
        // Rows
        _this.handleRowResizeGuideMain = function (horizontalGuides) {
            _this.invokeRowResizeHandler(horizontalGuides, _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN);
        };
        _this.handleRowResizeGuideTop = function (horizontalGuides) {
            _this.invokeRowResizeHandler(horizontalGuides, _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP);
        };
        _this.handleRowResizeGuideLeft = function (horizontalGuides) {
            _this.invokeRowResizeHandler(horizontalGuides, _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT);
        };
        _this.handleRowResizeGuideTopLeft = function (horizontalGuides) {
            _this.invokeRowResizeHandler(horizontalGuides, _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT);
        };
        _this.invokeRowResizeHandler = function (horizontalGuides, quadrantType) {
            var adjustedGuides = _this.adjustHorizontalGuides(horizontalGuides, quadrantType);
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.handleRowResizeGuide, adjustedGuides);
        };
        // Reordering
        // ----------
        // Columns
        _this.handleColumnsReordering = function (oldIndex, newIndex, length) {
            var guideIndex = _common_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].reorderedIndexToGuideIndex(oldIndex, newIndex, length);
            var leftOffset = _this.props.grid.getCumulativeWidthBefore(guideIndex);
            var quadrantType = guideIndex <= _this.props.numFrozenColumns ? _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT : _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP;
            var verticalGuides = _this.adjustVerticalGuides([leftOffset], quadrantType);
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.handleColumnsReordering, verticalGuides);
        };
        // Rows
        _this.handleRowsReordering = function (oldIndex, newIndex, length) {
            var guideIndex = _common_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].reorderedIndexToGuideIndex(oldIndex, newIndex, length);
            var topOffset = _this.props.grid.getCumulativeHeightBefore(guideIndex);
            var quadrantType = guideIndex <= _this.props.numFrozenRows ? _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT : _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT;
            var horizontalGuides = _this.adjustHorizontalGuides([topOffset], quadrantType);
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.handleRowsReordering, horizontalGuides);
        };
        // Size syncing
        // ============
        _this.syncQuadrantViewsDebounced = function () {
            var viewSyncDelay = _this.props.viewSyncDelay;
            if (viewSyncDelay < 0) {
                // update synchronously
                _this.syncQuadrantViews();
            }
            else {
                // update asynchronously after a debounced delay
                clearInterval(_this.debouncedViewSyncInterval);
                _this.debouncedViewSyncInterval = window.setTimeout(_this.syncQuadrantViews, viewSyncDelay);
            }
        };
        _this.syncQuadrantViews = function () {
            var mainRefs = _this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN];
            var mainScrollContainer = mainRefs.scrollContainer;
            //
            // Reads (batched to avoid DOM thrashing)
            //
            var rowHeaderWidth = _this.measureDesiredRowHeaderWidth();
            var columnHeaderHeight = _this.measureDesiredColumnHeaderHeight();
            var leftQuadrantGridWidth = _this.getSecondaryQuadrantGridSize("width");
            var topQuadrantGridHeight = _this.getSecondaryQuadrantGridSize("height");
            var leftQuadrantWidth = rowHeaderWidth + leftQuadrantGridWidth;
            var topQuadrantHeight = columnHeaderHeight + topQuadrantGridHeight;
            var rightScrollBarWidth = _common_internal_scrollUtils__WEBPACK_IMPORTED_MODULE_4__["measureScrollBarThickness"](mainScrollContainer, "vertical");
            var bottomScrollBarHeight = _common_internal_scrollUtils__WEBPACK_IMPORTED_MODULE_4__["measureScrollBarThickness"](mainScrollContainer, "horizontal");
            // ensure neither of these measurements confusingly clamps to zero height.
            var adjustedColumnHeaderHeight = _this.maybeIncreaseToDefaultColumnHeaderHeight(columnHeaderHeight);
            var adjustedTopQuadrantHeight = _this.maybeIncreaseToDefaultColumnHeaderHeight(topQuadrantHeight);
            // Update cache: let's read now whatever values we might need later.
            // prevents unnecessary reflows in the future.
            _this.cache.setRowHeaderWidth(rowHeaderWidth);
            _this.cache.setColumnHeaderHeight(columnHeaderHeight);
            // ...however, we also clear the cached client size, so we can read it
            // again when a new scroll begins. not safe to assume this won't change.
            // TODO: maybe use the ResizeSensor?
            _this.cache.setScrollContainerClientWidth(undefined);
            _this.cache.setScrollContainerClientHeight(undefined);
            //
            // Writes (batched to avoid DOM thrashing)
            //
            // Quadrant-size sync'ing: make the quadrants precisely as big as they
            // need to be to fit their variable-sized headers and/or frozen areas.
            _this.maybesSetQuadrantRowHeaderSizes(rowHeaderWidth);
            _this.maybeSetQuadrantMenuElementSizes(rowHeaderWidth, adjustedColumnHeaderHeight);
            _this.maybeSetQuadrantSizes(leftQuadrantWidth, adjustedTopQuadrantHeight);
            // Scrollbar clearance: tweak the quadrant bottom/right offsets to
            // reveal the MAIN-quadrant scrollbars if they're visible.
            _this.maybeSetQuadrantPositionOffset(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP, "right", rightScrollBarWidth);
            _this.maybeSetQuadrantPositionOffset(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT, "bottom", bottomScrollBarHeight);
            // Scroll syncing: sync the scroll offsets of quadrants that may or may
            // not have been around prior to this update.
            _this.maybeSetQuadrantScrollOffset(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT, "scrollTop");
            _this.maybeSetQuadrantScrollOffset(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP, "scrollLeft");
        };
        _this.maybeSetQuadrantSizes = function (width, height) {
            _this.maybesSetQuadrantSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT, "width", width);
            _this.maybesSetQuadrantSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP, "height", height);
            _this.maybesSetQuadrantSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT, "width", width);
            _this.maybesSetQuadrantSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT, "height", height);
        };
        _this.maybesSetQuadrantSize = function (quadrantType, dimension, value) {
            var quadrant = _this.quadrantRefs[quadrantType].quadrant;
            if (quadrant != null) {
                quadrant.style[dimension] = value + "px";
            }
        };
        _this.maybeSetQuadrantPositionOffset = function (quadrantType, side, value) {
            var quadrant = _this.quadrantRefs[quadrantType].quadrant;
            if (quadrant != null) {
                quadrant.style[side] = value + "px";
            }
        };
        _this.maybesSetQuadrantRowHeaderSizes = function (width) {
            _this.maybeSetQuadrantRowHeaderSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN, width);
            _this.maybeSetQuadrantRowHeaderSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP, width);
            _this.maybeSetQuadrantRowHeaderSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT, width);
            _this.maybeSetQuadrantRowHeaderSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT, width);
        };
        _this.maybeSetQuadrantRowHeaderSize = function (quadrantType, width) {
            var rowHeader = _this.quadrantRefs[quadrantType].rowHeader;
            if (rowHeader != null) {
                rowHeader.style.width = width + "px";
            }
        };
        _this.maybeSetQuadrantMenuElementSizes = function (width, height) {
            _this.maybeSetQuadrantMenuElementSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN, width, height);
            _this.maybeSetQuadrantMenuElementSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP, width, height);
            _this.maybeSetQuadrantMenuElementSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT, width, height);
            _this.maybeSetQuadrantMenuElementSize(_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT, width, height);
        };
        _this.maybeSetQuadrantMenuElementSize = function (quadrantType, width, height) {
            var menu = _this.quadrantRefs[quadrantType].menu;
            if (menu != null) {
                menu.style.width = width + "px";
                menu.style.height = height + "px";
            }
        };
        _this.maybeSetQuadrantScrollOffset = function (quadrantType, scrollKey, newOffset) {
            var scrollContainer = _this.quadrantRefs[quadrantType].scrollContainer;
            var scrollOffset = newOffset != null ? newOffset : _this.cache.getScrollOffset(scrollKey);
            if (scrollContainer != null) {
                scrollContainer[scrollKey] = scrollOffset;
            }
        };
        _this.handleScrollOffsetChange = function (scrollKey, offset) {
            _this.cache.setScrollOffset(scrollKey, offset);
            var dependentQuadrantType = scrollKey === "scrollLeft" ? _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP : _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT;
            _this.maybeSetQuadrantScrollOffset(dependentQuadrantType, scrollKey);
        };
        // callbacks trigger too frequently unless we throttle scroll and wheel
        // events. declare these functions on the component instance since
        // they're stateful.
        _this.throttledHandleMainQuadrantScroll = _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].throttleReactEventCallback(_this.handleMainQuadrantScroll);
        _this.throttledHandleWheel = _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].throttleReactEventCallback(_this.handleWheel);
        _this.cache = new _tableQuadrantStackCache__WEBPACK_IMPORTED_MODULE_7__["TableQuadrantStackCache"]();
        return _this;
        var _a, _b;
    }
    /**
     * Scroll the main quadrant to the specified scroll offset, keeping all other quadrants in sync.
     */
    TableQuadrantStack.prototype.scrollToPosition = function (scrollLeft, scrollTop) {
        var scrollContainer = this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].scrollContainer;
        this.wasMainQuadrantScrollTriggeredByWheelEvent = false;
        // this will trigger the main quadrant's scroll callback below
        scrollContainer.scrollLeft = scrollLeft;
        scrollContainer.scrollTop = scrollTop;
        this.syncQuadrantViews();
    };
    /**
     * Synchronizes quadrant sizes and scroll offsets based on the current
     * column, row, and header sizes. Useful for correcting quadrant sizes after
     * explicitly resizing columns and rows, for instance.
     *
     * Invoking this method imperatively is cheaper than providing columnWidths
     * or rowHeights array props to TableQuadrantStack and forcing it to run
     * expensive array diffs upon every update.
     */
    TableQuadrantStack.prototype.synchronizeQuadrantViews = function () {
        this.syncQuadrantViews();
    };
    TableQuadrantStack.prototype.componentDidMount = function () {
        this.emitRefs();
        this.syncQuadrantViews();
    };
    TableQuadrantStack.prototype.componentDidUpdate = function (prevProps) {
        // sync'ing quadrant views triggers expensive reflows, so we only call
        // it when layout-affecting props change.
        if (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(this.props, prevProps, { include: SYNC_TRIGGER_PROP_KEYS })) {
            this.emitRefs();
            this.syncQuadrantViews();
        }
    };
    TableQuadrantStack.prototype.render = function () {
        var _a = this.props, grid = _a.grid, enableRowHeader = _a.enableRowHeader, bodyRenderer = _a.bodyRenderer, throttleScrolling = _a.throttleScrolling;
        // use the more generic "scroll" event for the main quadrant to capture
        // *both* scrollbar interactions and trackpad/mousewheel gestures.
        var onMainQuadrantScroll = throttleScrolling
            ? this.throttledHandleMainQuadrantScroll
            : this.handleMainQuadrantScroll;
        var onWheel = throttleScrolling ? this.throttledHandleWheel : this.handleWheel;
        var baseProps = {
            bodyRenderer: bodyRenderer,
            enableRowHeader: enableRowHeader,
            grid: grid,
            onWheel: onWheel,
        };
        var shouldRenderLeftQuadrants = this.shouldRenderLeftQuadrants();
        var maybeLeftQuadrant = shouldRenderLeftQuadrants ? (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["TableQuadrant"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, baseProps, { quadrantRef: this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT].quadrant, quadrantType: _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT, columnHeaderCellRenderer: this.renderLeftQuadrantColumnHeader, menuRenderer: this.renderLeftQuadrantMenu, rowHeaderCellRenderer: this.renderLeftQuadrantRowHeader, scrollContainerRef: this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT].scrollContainer }))) : (undefined);
        var maybeTopLeftQuadrant = shouldRenderLeftQuadrants ? (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["TableQuadrant"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, baseProps, { quadrantRef: this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT].quadrant, quadrantType: _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT, columnHeaderCellRenderer: this.renderTopLeftQuadrantColumnHeader, menuRenderer: this.renderTopLeftQuadrantMenu, rowHeaderCellRenderer: this.renderTopLeftQuadrantRowHeader, scrollContainerRef: this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT].scrollContainer }))) : (undefined);
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _common_classes__WEBPACK_IMPORTED_MODULE_3__["TABLE_QUADRANT_STACK"] },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["TableQuadrant"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, baseProps, { bodyRef: this.props.bodyRef, onScroll: onMainQuadrantScroll, quadrantRef: this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].quadrant, quadrantType: _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN, columnHeaderCellRenderer: this.renderMainQuadrantColumnHeader, menuRenderer: this.renderMainQuadrantMenu, rowHeaderCellRenderer: this.renderMainQuadrantRowHeader, scrollContainerRef: this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].scrollContainer })),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["TableQuadrant"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, baseProps, { quadrantRef: this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP].quadrant, quadrantType: _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP, columnHeaderCellRenderer: this.renderTopQuadrantColumnHeader, menuRenderer: this.renderTopQuadrantMenu, rowHeaderCellRenderer: this.renderTopQuadrantRowHeader, scrollContainerRef: this.quadrantRefHandlers[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP].scrollContainer })),
            maybeLeftQuadrant,
            maybeTopLeftQuadrant));
    };
    // Ref handlers
    // ============
    TableQuadrantStack.prototype.generateQuadrantRefHandlers = function (quadrantType) {
        var _this = this;
        var reducer = function (agg, key) {
            agg[key] = function (ref) { return (_this.quadrantRefs[quadrantType][key] = ref); };
            return agg;
        };
        return ["columnHeader", "menu", "quadrant", "rowHeader", "scrollContainer"].reduce(reducer, {});
    };
    // Emitters
    // ========
    TableQuadrantStack.prototype.emitRefs = function () {
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(this.props.quadrantRef, this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].quadrant);
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(this.props.rowHeaderRef, this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].rowHeader);
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(this.props.columnHeaderRef, this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].columnHeader);
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(this.props.scrollContainerRef, this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].scrollContainer);
    };
    // this function is named 'update' instead of 'set', because a 'set'
    // function typically takes the new value as a parameter. we avoid that to
    // keep the isHorizontal logic tree contained within this function.
    TableQuadrantStack.prototype.updateScrollContainerClientSize = function (isHorizontal) {
        var mainScrollContainer = this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].scrollContainer;
        if (isHorizontal) {
            this.cache.setScrollContainerClientWidth(mainScrollContainer.clientWidth);
            return this.cache.getScrollContainerClientWidth();
        }
        else {
            this.cache.setScrollContainerClientHeight(mainScrollContainer.clientHeight);
            return this.cache.getScrollContainerClientHeight();
        }
    };
    TableQuadrantStack.prototype.maybeIncreaseToDefaultColumnHeaderHeight = function (height) {
        return height <= QUADRANT_MIN_SIZE ? DEFAULT_COLUMN_HEADER_HEIGHT : height;
    };
    // Helpers
    // =======
    /**
     * Returns the width or height of *only the grid* in the secondary quadrants
     * (TOP, LEFT, TOP_LEFT), based on the number of frozen rows and columns.
     */
    TableQuadrantStack.prototype.getSecondaryQuadrantGridSize = function (dimension) {
        var _a = this.props, grid = _a.grid, numFrozenColumns = _a.numFrozenColumns, numFrozenRows = _a.numFrozenRows;
        var numFrozen = dimension === "width" ? numFrozenColumns : numFrozenRows;
        var getterFn = dimension === "width" ? grid.getCumulativeWidthAt : grid.getCumulativeHeightAt;
        // both getter functions do O(1) lookups.
        return numFrozen > 0 ? getterFn(numFrozen - 1) : QUADRANT_MIN_SIZE;
    };
    /**
     * Measures the desired width of the row header based on its tallest
     * contents.
     */
    TableQuadrantStack.prototype.measureDesiredRowHeaderWidth = function () {
        // the MAIN row header serves as the source of truth
        var mainRowHeader = this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].rowHeader;
        if (mainRowHeader == null) {
            return 0;
        }
        else {
            // (alas, we must force a reflow to measure the row header's "desired" width)
            mainRowHeader.style.width = "auto";
            var desiredRowHeaderWidth = mainRowHeader.clientWidth;
            return desiredRowHeaderWidth;
        }
    };
    /**
     * Measures the desired height of the column header based on its tallest
     * contents.
     */
    TableQuadrantStack.prototype.measureDesiredColumnHeaderHeight = function () {
        // unlike the row headers, the column headers are in a display-flex
        // layout and are not actually bound by any fixed `height` that we set,
        // so they'll grow freely to their necessary size. makes measuring easy!
        var mainColumnHeader = this.quadrantRefs[_tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].MAIN].columnHeader;
        return mainColumnHeader == null ? 0 : mainColumnHeader.clientHeight;
    };
    TableQuadrantStack.prototype.shouldRenderLeftQuadrants = function (props) {
        if (props === void 0) { props = this.props; }
        var enableRowHeader = props.enableRowHeader, numFrozenColumns = props.numFrozenColumns;
        return enableRowHeader || (numFrozenColumns != null && numFrozenColumns > 0);
    };
    // Resizing
    TableQuadrantStack.prototype.adjustVerticalGuides = function (verticalGuides, quadrantType) {
        var isFrozenQuadrant = quadrantType === _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].LEFT || quadrantType === _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT;
        var scrollAmount = isFrozenQuadrant ? 0 : this.cache.getScrollOffset("scrollLeft");
        var rowHeaderWidth = this.cache.getRowHeaderWidth();
        var adjustedVerticalGuides = verticalGuides != null
            ? verticalGuides.map(function (verticalGuide) { return verticalGuide - scrollAmount + rowHeaderWidth; })
            : verticalGuides;
        return adjustedVerticalGuides;
    };
    TableQuadrantStack.prototype.adjustHorizontalGuides = function (horizontalGuides, quadrantType) {
        var isFrozenQuadrant = quadrantType === _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP || quadrantType === _tableQuadrant__WEBPACK_IMPORTED_MODULE_6__["QuadrantType"].TOP_LEFT;
        var scrollAmount = isFrozenQuadrant ? 0 : this.cache.getScrollOffset("scrollTop");
        var columnHeaderHeight = this.cache.getColumnHeaderHeight();
        var adjustedHorizontalGuides = horizontalGuides != null
            ? horizontalGuides.map(function (horizontalGuide) { return horizontalGuide - scrollAmount + columnHeaderHeight; })
            : horizontalGuides;
        return adjustedHorizontalGuides;
    };
    // we want the user to explicitly pass a quadrantType. define defaultProps as a Partial to avoid
    // declaring that and other required props here.
    TableQuadrantStack.defaultProps = {
        enableColumnInteractionBar: undefined,
        enableRowHeader: true,
        isHorizontalScrollDisabled: false,
        isVerticalScrollDisabled: false,
        throttleScrolling: true,
        viewSyncDelay: DEFAULT_VIEW_SYNC_DELAY,
    };
    return TableQuadrantStack;
}(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrantStackCache.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrantStackCache.js ***!
  \**************************************************************************************/
/*! exports provided: TableQuadrantStackCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableQuadrantStackCache", function() { return TableQuadrantStackCache; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var TableQuadrantStackCache = /** @class */ (function () {
    function TableQuadrantStackCache() {
        this.reset();
    }
    TableQuadrantStackCache.prototype.reset = function () {
        this.cachedRowHeaderWidth = 0;
        this.cachedColumnHeaderHeight = 0;
        this.cachedScrollLeft = 0;
        this.cachedScrollTop = 0;
    };
    // Getters
    // =======
    TableQuadrantStackCache.prototype.getScrollOffset = function (scrollKey) {
        return scrollKey === "scrollLeft" ? this.cachedScrollLeft : this.cachedScrollTop;
    };
    TableQuadrantStackCache.prototype.getRowHeaderWidth = function () {
        return this.cachedRowHeaderWidth;
    };
    TableQuadrantStackCache.prototype.getColumnHeaderHeight = function () {
        return this.cachedColumnHeaderHeight;
    };
    TableQuadrantStackCache.prototype.getScrollContainerClientWidth = function () {
        return this.cachedScrollContainerClientWidth;
    };
    TableQuadrantStackCache.prototype.getScrollContainerClientHeight = function () {
        return this.cachedScrollContainerClientHeight;
    };
    // Setters
    // =======
    TableQuadrantStackCache.prototype.setColumnHeaderHeight = function (height) {
        this.cachedColumnHeaderHeight = height;
    };
    TableQuadrantStackCache.prototype.setRowHeaderWidth = function (width) {
        this.cachedRowHeaderWidth = width;
    };
    TableQuadrantStackCache.prototype.setScrollOffset = function (scrollKey, offset) {
        if (scrollKey === "scrollLeft") {
            this.cachedScrollLeft = offset;
        }
        else {
            this.cachedScrollTop = offset;
        }
    };
    TableQuadrantStackCache.prototype.setScrollContainerClientWidth = function (clientWidth) {
        this.cachedScrollContainerClientWidth = clientWidth;
    };
    TableQuadrantStackCache.prototype.setScrollContainerClientHeight = function (clientHeight) {
        this.cachedScrollContainerClientHeight = clientHeight;
    };
    return TableQuadrantStackCache;
}());



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/regions.js":
/*!************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/regions.js ***!
  \************************************************************/
/*! exports provided: RegionCardinality, SelectionModes, ColumnLoadingOption, RowLoadingOption, TableLoadingOption, Regions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionCardinality", function() { return RegionCardinality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModes", function() { return SelectionModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnLoadingOption", function() { return ColumnLoadingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowLoadingOption", function() { return RowLoadingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableLoadingOption", function() { return TableLoadingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Regions", function() { return Regions; });
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */


/**
 * `Region`s contain sets of cells. Additionally, a distinction is drawn, for
 * example, between all cells within a column and the whole column itself.
 * The `RegionCardinality` enum represents these distinct types of `Region`s.
 */
var RegionCardinality;
(function (RegionCardinality) {
    /**
     * A region that contains a finite rectangular group of table cells
     */
    RegionCardinality["CELLS"] = "cells";
    /**
     * A region that represents all cells within 1 or more rows.
     */
    RegionCardinality["FULL_ROWS"] = "full-rows";
    /**
     * A region that represents all cells within 1 or more columns.
     */
    RegionCardinality["FULL_COLUMNS"] = "full-columns";
    /**
     * A region that represents all cells in the table.
     */
    RegionCardinality["FULL_TABLE"] = "full-table";
})(RegionCardinality || (RegionCardinality = {}));
/**
 * A convenience object for subsets of `RegionCardinality` that are commonly
 * used as the `selectionMode` prop of the `<Table>`.
 */
var SelectionModes = {
    ALL: [
        RegionCardinality.FULL_TABLE,
        RegionCardinality.FULL_COLUMNS,
        RegionCardinality.FULL_ROWS,
        RegionCardinality.CELLS,
    ],
    COLUMNS_AND_CELLS: [RegionCardinality.FULL_COLUMNS, RegionCardinality.CELLS],
    COLUMNS_ONLY: [RegionCardinality.FULL_COLUMNS],
    NONE: [],
    ROWS_AND_CELLS: [RegionCardinality.FULL_ROWS, RegionCardinality.CELLS],
    ROWS_ONLY: [RegionCardinality.FULL_ROWS],
};
var ColumnLoadingOption;
(function (ColumnLoadingOption) {
    ColumnLoadingOption["CELLS"] = "cells";
    ColumnLoadingOption["HEADER"] = "column-header";
})(ColumnLoadingOption || (ColumnLoadingOption = {}));
var RowLoadingOption;
(function (RowLoadingOption) {
    RowLoadingOption["CELLS"] = "cells";
    RowLoadingOption["HEADER"] = "row-header";
})(RowLoadingOption || (RowLoadingOption = {}));
var TableLoadingOption;
(function (TableLoadingOption) {
    TableLoadingOption["CELLS"] = "cells";
    TableLoadingOption["COLUMN_HEADERS"] = "column-header";
    TableLoadingOption["ROW_HEADERS"] = "row-header";
})(TableLoadingOption || (TableLoadingOption = {}));
var Regions = /** @class */ (function () {
    function Regions() {
    }
    /**
     * Determines the cardinality of a region. We use null values to indicate
     * an unbounded interval. Therefore, an example of a region containing the
     * second and third columns would be:
     *
     * ```js
     * { rows: null, cols: [1, 2] }
     * ```
     *
     * In this case, this method would return `RegionCardinality.FULL_COLUMNS`.
     *
     * If both rows and columns are unbounded, then the region covers the
     * entire table. Therefore, a region like this:
     *
     * ```js
     * { rows: null, cols: null }
     * ```
     *
     * will return `RegionCardinality.FULL_TABLE`.
     *
     * An example of a region containing a single cell in the table would be:
     *
     * ```js
     * { rows: [5, 5], cols: [2, 2] }
     * ```
     *
     * In this case, this method would return `RegionCardinality.CELLS`.
     */
    Regions.getRegionCardinality = function (region) {
        if (region.cols != null && region.rows != null) {
            return RegionCardinality.CELLS;
        }
        else if (region.cols != null) {
            return RegionCardinality.FULL_COLUMNS;
        }
        else if (region.rows != null) {
            return RegionCardinality.FULL_ROWS;
        }
        else {
            return RegionCardinality.FULL_TABLE;
        }
    };
    Regions.getFocusCellCoordinatesFromRegion = function (region) {
        var regionCardinality = Regions.getRegionCardinality(region);
        switch (regionCardinality) {
            case RegionCardinality.FULL_TABLE:
                return { col: 0, row: 0 };
            case RegionCardinality.FULL_COLUMNS:
                return { col: region.cols[0], row: 0 };
            case RegionCardinality.FULL_ROWS:
                return { col: 0, row: region.rows[0] };
            case RegionCardinality.CELLS:
                return { col: region.cols[0], row: region.rows[0] };
            default:
                return null;
        }
    };
    /**
     * Returns a deep copy of the provided region.
     */
    Regions.copy = function (region) {
        var cardinality = Regions.getRegionCardinality(region);
        // we need to be careful not to explicitly spell out `rows: undefined`
        // (e.g.) if the "rows" key is completely absent, otherwise
        // deep-equality checks will fail.
        if (cardinality === RegionCardinality.CELLS) {
            return Regions.cell(region.rows[0], region.cols[0], region.rows[1], region.cols[1]);
        }
        else if (cardinality === RegionCardinality.FULL_COLUMNS) {
            return Regions.column(region.cols[0], region.cols[1]);
        }
        else if (cardinality === RegionCardinality.FULL_ROWS) {
            return Regions.row(region.rows[0], region.rows[1]);
        }
        else {
            return Regions.table();
        }
    };
    /**
     * Returns a region containing one or more cells.
     */
    Regions.cell = function (row, col, row2, col2) {
        return {
            cols: this.normalizeInterval(col, col2),
            rows: this.normalizeInterval(row, row2),
        };
    };
    /**
     * Returns a region containing one or more full rows.
     */
    Regions.row = function (row, row2) {
        return { rows: this.normalizeInterval(row, row2) };
    };
    /**
     * Returns a region containing one or more full columns.
     */
    Regions.column = function (col, col2) {
        return { cols: this.normalizeInterval(col, col2) };
    };
    /**
     * Returns a region containing the entire table.
     */
    Regions.table = function () {
        return {};
    };
    /**
     * Adds the region to the end of a cloned copy of the supplied region
     * array.
     */
    Regions.add = function (regions, region) {
        var copy = regions.slice();
        copy.push(region);
        return copy;
    };
    /**
     * Replaces the region at the end of a cloned copy of the supplied region
     * array, or at the specific index if one is provided.
     */
    Regions.update = function (regions, region, index) {
        var copy = regions.slice();
        if (index != null) {
            copy.splice(index, 1, region);
        }
        else {
            copy.pop();
            copy.push(region);
        }
        return copy;
    };
    /**
     * Clamps the region's start and end indices between 0 and the provided
     * maximum values.
     */
    Regions.clampRegion = function (region, maxRowIndex, maxColumnIndex) {
        var nextRegion = Regions.copy(region);
        if (region.rows != null) {
            nextRegion.rows[0] = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].clamp(region.rows[0], 0, maxRowIndex);
            nextRegion.rows[1] = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].clamp(region.rows[1], 0, maxRowIndex);
        }
        if (region.cols != null) {
            nextRegion.cols[0] = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].clamp(region.cols[0], 0, maxColumnIndex);
            nextRegion.cols[1] = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].clamp(region.cols[1], 0, maxColumnIndex);
        }
        return nextRegion;
    };
    /**
     * Returns true iff the specified region is equal to the last region in
     * the region list. This allows us to avoid immediate additive re-selection.
     */
    Regions.lastRegionIsEqual = function (regions, region) {
        if (regions == null || regions.length === 0) {
            return false;
        }
        var lastRegion = regions[regions.length - 1];
        return Regions.regionsEqual(lastRegion, region);
    };
    /**
     * Returns the index of the region that is equal to the supplied
     * parameter. Returns -1 if no such region is found.
     */
    Regions.findMatchingRegion = function (regions, region) {
        if (regions == null) {
            return -1;
        }
        for (var i = 0; i < regions.length; i++) {
            if (Regions.regionsEqual(regions[i], region)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Returns the index of the region that wholly contains the supplied
     * parameter. Returns -1 if no such region is found.
     */
    Regions.findContainingRegion = function (regions, region) {
        if (regions == null) {
            return -1;
        }
        for (var i = 0; i < regions.length; i++) {
            if (Regions.regionContains(regions[i], region)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Returns true if the regions contain a region that has FULL_COLUMNS
     * cardinality and contains the specified column index.
     */
    Regions.hasFullColumn = function (regions, col) {
        if (regions == null) {
            return false;
        }
        for (var _i = 0, regions_1 = regions; _i < regions_1.length; _i++) {
            var region = regions_1[_i];
            var cardinality = Regions.getRegionCardinality(region);
            if (cardinality === RegionCardinality.FULL_TABLE) {
                return true;
            }
            if (cardinality === RegionCardinality.FULL_COLUMNS && Regions.intervalContainsIndex(region.cols, col)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns true if the regions contain a region that has FULL_ROWS
     * cardinality and contains the specified row index.
     */
    Regions.hasFullRow = function (regions, row) {
        if (regions == null) {
            return false;
        }
        for (var _i = 0, regions_2 = regions; _i < regions_2.length; _i++) {
            var region = regions_2[_i];
            var cardinality = Regions.getRegionCardinality(region);
            if (cardinality === RegionCardinality.FULL_TABLE) {
                return true;
            }
            if (cardinality === RegionCardinality.FULL_ROWS && Regions.intervalContainsIndex(region.rows, row)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns true if the regions contain a region that has FULL_TABLE cardinality
     */
    Regions.hasFullTable = function (regions) {
        if (regions == null) {
            return false;
        }
        for (var _i = 0, regions_3 = regions; _i < regions_3.length; _i++) {
            var region = regions_3[_i];
            var cardinality = Regions.getRegionCardinality(region);
            if (cardinality === RegionCardinality.FULL_TABLE) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns true if the regions fully contain the query region.
     */
    Regions.containsRegion = function (regions, query) {
        return Regions.overlapsRegion(regions, query, false);
    };
    /**
     * Returns true if the regions at least partially overlap the query region.
     */
    Regions.overlapsRegion = function (regions, query, allowPartialOverlap) {
        if (allowPartialOverlap === void 0) { allowPartialOverlap = false; }
        var intervalCompareFn = allowPartialOverlap ? Regions.intervalOverlaps : Regions.intervalContains;
        if (regions == null || query == null) {
            return false;
        }
        for (var _i = 0, regions_4 = regions; _i < regions_4.length; _i++) {
            var region = regions_4[_i];
            var cardinality = Regions.getRegionCardinality(region);
            switch (cardinality) {
                case RegionCardinality.FULL_TABLE:
                    return true;
                case RegionCardinality.FULL_COLUMNS:
                    if (intervalCompareFn(region.cols, query.cols)) {
                        return true;
                    }
                    continue;
                case RegionCardinality.FULL_ROWS:
                    if (intervalCompareFn(region.rows, query.rows)) {
                        return true;
                    }
                    continue;
                case RegionCardinality.CELLS:
                    if (intervalCompareFn(region.cols, query.cols) && intervalCompareFn(region.rows, query.rows)) {
                        return true;
                    }
                    continue;
                default:
                    break;
            }
        }
        return false;
    };
    Regions.eachUniqueFullColumn = function (regions, iteratee) {
        if (regions == null || regions.length === 0 || iteratee == null) {
            return;
        }
        var seen = {};
        regions.forEach(function (region) {
            if (Regions.getRegionCardinality(region) === RegionCardinality.FULL_COLUMNS) {
                var _a = region.cols, start = _a[0], end = _a[1];
                for (var col = start; col <= end; col++) {
                    if (!seen[col]) {
                        seen[col] = true;
                        iteratee(col);
                    }
                }
            }
        });
    };
    Regions.eachUniqueFullRow = function (regions, iteratee) {
        if (regions == null || regions.length === 0 || iteratee == null) {
            return;
        }
        var seen = {};
        regions.forEach(function (region) {
            if (Regions.getRegionCardinality(region) === RegionCardinality.FULL_ROWS) {
                var _a = region.rows, start = _a[0], end = _a[1];
                for (var row = start; row <= end; row++) {
                    if (!seen[row]) {
                        seen[row] = true;
                        iteratee(row);
                    }
                }
            }
        });
    };
    /**
     * Using the supplied array of non-contiguous `IRegion`s, this method
     * returns an ordered array of every unique cell that exists in those
     * regions.
     */
    Regions.enumerateUniqueCells = function (regions, numRows, numCols) {
        if (regions == null || regions.length === 0) {
            return [];
        }
        var seen = {};
        var list = [];
        for (var _i = 0, regions_5 = regions; _i < regions_5.length; _i++) {
            var region = regions_5[_i];
            Regions.eachCellInRegion(region, numRows, numCols, function (row, col) {
                // add to list if not seen
                var key = row + "-" + col;
                if (seen[key] !== true) {
                    seen[key] = true;
                    list.push([row, col]);
                }
            });
        }
        // sort list by rows then columns
        list.sort(Regions.rowFirstComparator);
        return list;
    };
    /**
     * Using the supplied region, returns an "equivalent" region of
     * type CELLS that define the bounds of the given region
     */
    Regions.getCellRegionFromRegion = function (region, numRows, numCols) {
        var regionCardinality = Regions.getRegionCardinality(region);
        switch (regionCardinality) {
            case RegionCardinality.FULL_TABLE:
                return Regions.cell(0, 0, numRows - 1, numCols - 1);
            case RegionCardinality.FULL_COLUMNS:
                return Regions.cell(0, region.cols[0], numRows - 1, region.cols[1]);
            case RegionCardinality.FULL_ROWS:
                return Regions.cell(region.rows[0], 0, region.rows[1], numCols - 1);
            case RegionCardinality.CELLS:
                return Regions.cell(region.rows[0], region.cols[0], region.rows[1], region.cols[1]);
            default:
                return null;
        }
    };
    /**
     * Maps a dense array of cell coordinates to a sparse 2-dimensional array
     * of cell values.
     *
     * We create a new 2-dimensional array representing the smallest single
     * contiguous `IRegion` that contains all cells in the supplied array. We
     * invoke the mapper callback only on the cells in the supplied coordinate
     * array and store the result. Returns the resulting 2-dimensional array.
     */
    Regions.sparseMapCells = function (cells, mapper) {
        var bounds = Regions.getBoundingRegion(cells);
        if (bounds == null) {
            return null;
        }
        var numRows = bounds.rows[1] + 1 - bounds.rows[0];
        var numCols = bounds.cols[1] + 1 - bounds.cols[0];
        var result = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].times(numRows, function () { return new Array(numCols); });
        cells.forEach(function (_a) {
            var row = _a[0], col = _a[1];
            result[row - bounds.rows[0]][col - bounds.cols[0]] = mapper(row, col);
        });
        return result;
    };
    /**
     * Returns the smallest single contiguous `IRegion` that contains all cells in the
     * supplied array.
     */
    Regions.getBoundingRegion = function (cells) {
        var minRow;
        var maxRow;
        var minCol;
        var maxCol;
        for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
            var _a = cells_1[_i], row = _a[0], col = _a[1];
            minRow = minRow == null || row < minRow ? row : minRow;
            maxRow = maxRow == null || row > maxRow ? row : maxRow;
            minCol = minCol == null || col < minCol ? col : minCol;
            maxCol = maxCol == null || col > maxCol ? col : maxCol;
        }
        if (minRow == null) {
            return null;
        }
        return {
            cols: [minCol, maxCol],
            rows: [minRow, maxRow],
        };
    };
    Regions.isValid = function (region) {
        if (region == null) {
            return false;
        }
        if (region.rows != null && (region.rows[0] < 0 || region.rows[1] < 0)) {
            return false;
        }
        if (region.cols != null && (region.cols[0] < 0 || region.cols[1] < 0)) {
            return false;
        }
        return true;
    };
    Regions.isRegionValidForTable = function (region, numRows, numCols) {
        if (numRows === 0 || numCols === 0) {
            return false;
        }
        else if (region.rows != null && !intervalInRangeInclusive(region.rows, 0, numRows - 1)) {
            return false;
        }
        else if (region.cols != null && !intervalInRangeInclusive(region.cols, 0, numCols - 1)) {
            return false;
        }
        return true;
    };
    Regions.joinStyledRegionGroups = function (selectedRegions, otherRegions, focusedCell) {
        var regionGroups = [];
        if (otherRegions != null) {
            regionGroups = regionGroups.concat(otherRegions);
        }
        if (selectedRegions != null && selectedRegions.length > 0) {
            regionGroups.push({
                className: _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_SELECTION_REGION"],
                regions: selectedRegions,
            });
        }
        if (focusedCell != null) {
            regionGroups.push({
                className: _common_classes__WEBPACK_IMPORTED_MODULE_0__["TABLE_FOCUS_REGION"],
                regions: [Regions.cell(focusedCell.row, focusedCell.col)],
            });
        }
        return regionGroups;
    };
    Regions.regionsEqual = function (regionA, regionB) {
        return Regions.intervalsEqual(regionA.rows, regionB.rows) && Regions.intervalsEqual(regionA.cols, regionB.cols);
    };
    /**
     * Expands an old region to the minimal bounding region that also contains
     * the new region. If the regions have different cardinalities, then the new
     * region is returned. Useful for expanding a selected region on
     * shift+click, for instance.
     */
    Regions.expandRegion = function (oldRegion, newRegion) {
        var oldRegionCardinality = Regions.getRegionCardinality(oldRegion);
        var newRegionCardinality = Regions.getRegionCardinality(newRegion);
        if (newRegionCardinality !== oldRegionCardinality) {
            return newRegion;
        }
        switch (newRegionCardinality) {
            case RegionCardinality.FULL_ROWS: {
                var rowStart = Math.min(oldRegion.rows[0], newRegion.rows[0]);
                var rowEnd = Math.max(oldRegion.rows[1], newRegion.rows[1]);
                return Regions.row(rowStart, rowEnd);
            }
            case RegionCardinality.FULL_COLUMNS: {
                var colStart = Math.min(oldRegion.cols[0], newRegion.cols[0]);
                var colEnd = Math.max(oldRegion.cols[1], newRegion.cols[1]);
                return Regions.column(colStart, colEnd);
            }
            case RegionCardinality.CELLS: {
                var rowStart = Math.min(oldRegion.rows[0], newRegion.rows[0]);
                var colStart = Math.min(oldRegion.cols[0], newRegion.cols[0]);
                var rowEnd = Math.max(oldRegion.rows[1], newRegion.rows[1]);
                var colEnd = Math.max(oldRegion.cols[1], newRegion.cols[1]);
                return Regions.cell(rowStart, colStart, rowEnd, colEnd);
            }
            default:
                return Regions.table();
        }
    };
    /**
     * Iterates over the cells within an `IRegion`, invoking the callback with
     * each cell's coordinates.
     */
    Regions.eachCellInRegion = function (region, numRows, numCols, iteratee) {
        var cardinality = Regions.getRegionCardinality(region);
        switch (cardinality) {
            case RegionCardinality.FULL_TABLE:
                for (var row = 0; row < numRows; row++) {
                    for (var col = 0; col < numCols; col++) {
                        iteratee(row, col);
                    }
                }
                break;
            case RegionCardinality.FULL_COLUMNS:
                for (var row = 0; row < numRows; row++) {
                    for (var col = region.cols[0]; col <= region.cols[1]; col++) {
                        iteratee(row, col);
                    }
                }
                break;
            case RegionCardinality.FULL_ROWS:
                for (var row = region.rows[0]; row <= region.rows[1]; row++) {
                    for (var col = 0; col < numCols; col++) {
                        iteratee(row, col);
                    }
                }
                break;
            case RegionCardinality.CELLS:
                for (var row = region.rows[0]; row <= region.rows[1]; row++) {
                    for (var col = region.cols[0]; col <= region.cols[1]; col++) {
                        iteratee(row, col);
                    }
                }
                break;
            default:
                break;
        }
    };
    Regions.regionContains = function (regionA, regionB) {
        // containsRegion expects an array of regions as the first param
        return Regions.overlapsRegion([regionA], regionB, false);
    };
    Regions.intervalsEqual = function (ivalA, ivalB) {
        if (ivalA == null) {
            return ivalB == null;
        }
        else if (ivalB == null) {
            return false;
        }
        else {
            return ivalA[0] === ivalB[0] && ivalA[1] === ivalB[1];
        }
    };
    Regions.intervalContainsIndex = function (interval, index) {
        if (interval == null) {
            return false;
        }
        return interval[0] <= index && interval[1] >= index;
    };
    Regions.intervalContains = function (ivalA, ivalB) {
        if (ivalA == null || ivalB == null) {
            return false;
        }
        return ivalA[0] <= ivalB[0] && ivalB[1] <= ivalA[1];
    };
    Regions.intervalOverlaps = function (ivalA, ivalB) {
        if (ivalA == null || ivalB == null) {
            return false;
        }
        if (ivalA[1] < ivalB[0] || ivalA[0] > ivalB[1]) {
            return false;
        }
        return true;
    };
    Regions.rowFirstComparator = function (a, b) {
        var rowDiff = a[0] - b[0];
        return rowDiff === 0 ? a[1] - b[1] : rowDiff;
    };
    Regions.numericalComparator = function (a, b) {
        return a - b;
    };
    Regions.normalizeInterval = function (coord, coord2) {
        if (coord2 == null) {
            coord2 = coord;
        }
        var interval = [coord, coord2];
        interval.sort(Regions.numericalComparator);
        return interval;
    };
    return Regions;
}());

function intervalInRangeInclusive(interval, minInclusive, maxInclusive) {
    return (inRangeInclusive(interval[0], minInclusive, maxInclusive) &&
        inRangeInclusive(interval[1], minInclusive, maxInclusive));
}
function inRangeInclusive(value, minInclusive, maxInclusive) {
    return value >= minInclusive && value <= maxInclusive;
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/table.js":
/*!**********************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/table.js ***!
  \**********************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column */ "./node_modules/@blueprintjs/table/lib/esm/column.js");
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/clipboard */ "./node_modules/@blueprintjs/table/lib/esm/common/clipboard.js");
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/context */ "./node_modules/@blueprintjs/table/lib/esm/common/context.js");
/* harmony import */ var _common_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/direction */ "./node_modules/@blueprintjs/table/lib/esm/common/direction.js");
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/errors */ "./node_modules/@blueprintjs/table/lib/esm/common/errors.js");
/* harmony import */ var _common_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/grid */ "./node_modules/@blueprintjs/table/lib/esm/common/grid.js");
/* harmony import */ var _common_internal_focusedCellUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/internal/focusedCellUtils */ "./node_modules/@blueprintjs/table/lib/esm/common/internal/focusedCellUtils.js");
/* harmony import */ var _common_internal_scrollUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/internal/scrollUtils */ "./node_modules/@blueprintjs/table/lib/esm/common/internal/scrollUtils.js");
/* harmony import */ var _common_internal_selectionUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/internal/selectionUtils */ "./node_modules/@blueprintjs/table/lib/esm/common/internal/selectionUtils.js");
/* harmony import */ var _common_rect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/rect */ "./node_modules/@blueprintjs/table/lib/esm/common/rect.js");
/* harmony import */ var _common_renderMode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/renderMode */ "./node_modules/@blueprintjs/table/lib/esm/common/renderMode.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/utils */ "./node_modules/@blueprintjs/table/lib/esm/common/utils.js");
/* harmony import */ var _headers_columnHeader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./headers/columnHeader */ "./node_modules/@blueprintjs/table/lib/esm/headers/columnHeader.js");
/* harmony import */ var _headers_columnHeaderCell__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./headers/columnHeaderCell */ "./node_modules/@blueprintjs/table/lib/esm/headers/columnHeaderCell.js");
/* harmony import */ var _headers_rowHeader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./headers/rowHeader */ "./node_modules/@blueprintjs/table/lib/esm/headers/rowHeader.js");
/* harmony import */ var _interactions_resizeSensor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./interactions/resizeSensor */ "./node_modules/@blueprintjs/table/lib/esm/interactions/resizeSensor.js");
/* harmony import */ var _layers_guides__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layers/guides */ "./node_modules/@blueprintjs/table/lib/esm/layers/guides.js");
/* harmony import */ var _layers_regions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layers/regions */ "./node_modules/@blueprintjs/table/lib/esm/layers/regions.js");
/* harmony import */ var _locator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./locator */ "./node_modules/@blueprintjs/table/lib/esm/locator.js");
/* harmony import */ var _quadrants_tableQuadrant__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quadrants/tableQuadrant */ "./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrant.js");
/* harmony import */ var _quadrants_tableQuadrantStack__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./quadrants/tableQuadrantStack */ "./node_modules/@blueprintjs/table/lib/esm/quadrants/tableQuadrantStack.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _tableBody__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tableBody */ "./node_modules/@blueprintjs/table/lib/esm/tableBody.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */




























var Table = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Table, _super);
    function Table(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.refHandlers = {
            cellContainer: function (ref) { return (_this.cellContainerElement = ref); },
            columnHeader: function (ref) { return (_this.columnHeaderElement = ref); },
            mainQuadrant: function (ref) { return (_this.mainQuadrantElement = ref); },
            quadrantStack: function (ref) { return (_this.quadrantStackInstance = ref); },
            rootTable: function (ref) { return (_this.rootTableElement = ref); },
            rowHeader: function (ref) { return (_this.rowHeaderElement = ref); },
            scrollContainer: function (ref) { return (_this.scrollContainerElement = ref); },
        };
        // when true, we'll need to imperatively synchronize quadrant views after
        // the update. this variable lets us avoid expensively diff'ing columnWidths
        // and rowHeights in <TableQuadrantStack> on each update.
        _this.didUpdateColumnOrRowSizes = false;
        // this value is set to `true` when all cells finish mounting for the first
        // time. it serves as a signal that we can switch to batch rendering.
        _this.didCompletelyMount = false;
        // Selection resize
        // ----------------
        _this.handleSelectionResizeUp = function (e) { return _this.handleSelectionResize(e, _common_direction__WEBPACK_IMPORTED_MODULE_8__["Direction"].UP); };
        _this.handleSelectionResizeDown = function (e) { return _this.handleSelectionResize(e, _common_direction__WEBPACK_IMPORTED_MODULE_8__["Direction"].DOWN); };
        _this.handleSelectionResizeLeft = function (e) { return _this.handleSelectionResize(e, _common_direction__WEBPACK_IMPORTED_MODULE_8__["Direction"].LEFT); };
        _this.handleSelectionResizeRight = function (e) { return _this.handleSelectionResize(e, _common_direction__WEBPACK_IMPORTED_MODULE_8__["Direction"].RIGHT); };
        _this.handleSelectionResize = function (e, direction) {
            e.preventDefault();
            e.stopPropagation();
            var _a = _this.state, focusedCell = _a.focusedCell, selectedRegions = _a.selectedRegions;
            if (selectedRegions.length === 0) {
                return;
            }
            var index = _common_internal_focusedCellUtils__WEBPACK_IMPORTED_MODULE_11__["getFocusedOrLastSelectedIndex"](selectedRegions, focusedCell);
            var region = selectedRegions[index];
            var nextRegion = _common_internal_selectionUtils__WEBPACK_IMPORTED_MODULE_13__["resizeRegion"](region, direction, focusedCell);
            _this.updateSelectedRegionAtIndex(nextRegion, index);
        };
        _this.handleCopy = function (e) {
            var _a = _this.props, getCellClipboardData = _a.getCellClipboardData, onCopy = _a.onCopy;
            var selectedRegions = _this.state.selectedRegions;
            if (getCellClipboardData == null) {
                return;
            }
            // prevent "real" copy from being called
            e.preventDefault();
            e.stopPropagation();
            var cells = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].enumerateUniqueCells(selectedRegions, _this.grid.numRows, _this.grid.numCols);
            var sparse = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].sparseMapCells(cells, getCellClipboardData);
            if (sparse != null) {
                var success = _common_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"].copyCells(sparse);
                _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(onCopy, success);
            }
        };
        _this.renderMenu = function (refHandler) {
            var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_MENU"], (_a = {},
                _a[_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_SELECTION_ENABLED"]] = _this.isSelectionModeEnabled(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_TABLE),
                _a));
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: classes, ref: refHandler, onMouseDown: _this.handleMenuMouseDown }, _this.maybeRenderRegions(_this.styleMenuRegion)));
            var _a;
        };
        _this.handleMenuMouseDown = function (e) {
            // the shift+click interaction expands the region from the focused cell.
            // thus, if shift is pressed we shouldn't move the focused cell.
            _this.selectAll(!e.shiftKey);
        };
        _this.selectAll = function (shouldUpdateFocusedCell) {
            var selectionHandler = _this.getEnabledSelectionHandler(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_TABLE);
            // clicking on upper left hand corner sets selection to "all"
            // regardless of current selection state (clicking twice does not deselect table)
            selectionHandler([_regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].table()]);
            if (shouldUpdateFocusedCell) {
                var newFocusedCellCoordinates = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getFocusCellCoordinatesFromRegion(_regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].table());
                _this.handleFocus(_common_internal_focusedCellUtils__WEBPACK_IMPORTED_MODULE_11__["toFullCoordinates"](newFocusedCellCoordinates));
            }
        };
        _this.handleSelectAllHotkey = function (e) {
            // prevent "real" select all from happening as well
            e.preventDefault();
            e.stopPropagation();
            // selecting-all via the keyboard should not move the focused cell.
            _this.selectAll(false);
        };
        _this.columnHeaderCellRenderer = function (columnIndex) {
            var props = _this.getColumnProps(columnIndex);
            var id = props.id, loadingOptions = props.loadingOptions, cellRenderer = props.cellRenderer, columnHeaderCellRenderer = props.columnHeaderCellRenderer, spreadableProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["id", "loadingOptions", "cellRenderer", "columnHeaderCellRenderer"]);
            var columnLoading = _this.hasLoadingOption(loadingOptions, _regions__WEBPACK_IMPORTED_MODULE_26__["ColumnLoadingOption"].HEADER);
            if (columnHeaderCellRenderer != null) {
                var columnHeaderCell = columnHeaderCellRenderer(columnIndex);
                var columnHeaderCellLoading = columnHeaderCell.props.loading;
                var columnHeaderCellProps = {
                    loading: columnHeaderCellLoading != null ? columnHeaderCellLoading : columnLoading,
                };
                return react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](columnHeaderCell, columnHeaderCellProps);
            }
            var baseProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ index: columnIndex, loading: columnLoading }, spreadableProps);
            if (props.name != null) {
                return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_headers_columnHeaderCell__WEBPACK_IMPORTED_MODULE_18__["ColumnHeaderCell"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, baseProps));
            }
            else {
                return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_headers_columnHeaderCell__WEBPACK_IMPORTED_MODULE_18__["ColumnHeaderCell"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, baseProps, { name: _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].toBase26Alpha(columnIndex) }));
            }
        };
        _this.renderColumnHeader = function (refHandler, resizeHandler, reorderingHandler, showFrozenColumnsOnly) {
            if (showFrozenColumnsOnly === void 0) { showFrozenColumnsOnly = false; }
            var _a = _this.state, focusedCell = _a.focusedCell, selectedRegions = _a.selectedRegions, viewportRect = _a.viewportRect;
            var _b = _this.props, enableMultipleSelection = _b.enableMultipleSelection, enableGhostCells = _b.enableGhostCells, enableColumnReordering = _b.enableColumnReordering, enableColumnResizing = _b.enableColumnResizing, loadingOptions = _b.loadingOptions, maxColumnWidth = _b.maxColumnWidth, minColumnWidth = _b.minColumnWidth, selectedRegionTransform = _b.selectedRegionTransform;
            var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_COLUMN_HEADERS"], (_c = {},
                _c[_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_SELECTION_ENABLED"]] = _this.isSelectionModeEnabled(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_COLUMNS),
                _c));
            var columnIndices = _this.grid.getColumnIndicesInRect(viewportRect, enableGhostCells);
            var columnIndexStart = showFrozenColumnsOnly ? 0 : columnIndices.columnIndexStart;
            var columnIndexEnd = showFrozenColumnsOnly ? _this.getMaxFrozenColumnIndex() : columnIndices.columnIndexEnd;
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: classes },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_headers_columnHeader__WEBPACK_IMPORTED_MODULE_17__["ColumnHeader"], { enableMultipleSelection: enableMultipleSelection, cellRenderer: _this.columnHeaderCellRenderer, focusedCell: focusedCell, grid: _this.grid, isReorderable: enableColumnReordering, isResizable: enableColumnResizing, loading: _this.hasLoadingOption(loadingOptions, _regions__WEBPACK_IMPORTED_MODULE_26__["TableLoadingOption"].COLUMN_HEADERS), locator: _this.locator, maxColumnWidth: maxColumnWidth, measurableElementRef: refHandler, minColumnWidth: minColumnWidth, onColumnWidthChanged: _this.handleColumnWidthChanged, onFocusedCell: _this.handleFocus, onLayoutLock: _this.handleLayoutLock, onReordered: _this.handleColumnsReordered, onReordering: reorderingHandler, onResizeGuide: resizeHandler, onSelection: _this.getEnabledSelectionHandler(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_COLUMNS), selectedRegions: selectedRegions, selectedRegionTransform: selectedRegionTransform, columnIndexStart: columnIndexStart, columnIndexEnd: columnIndexEnd }, _this.props.children),
                _this.maybeRenderRegions(_this.styleColumnHeaderRegion)));
            var _c;
        };
        _this.renderRowHeader = function (refHandler, resizeHandler, reorderingHandler, showFrozenRowsOnly) {
            if (showFrozenRowsOnly === void 0) { showFrozenRowsOnly = false; }
            var _a = _this.state, focusedCell = _a.focusedCell, selectedRegions = _a.selectedRegions, viewportRect = _a.viewportRect;
            var _b = _this.props, enableMultipleSelection = _b.enableMultipleSelection, enableGhostCells = _b.enableGhostCells, enableRowReordering = _b.enableRowReordering, enableRowResizing = _b.enableRowResizing, loadingOptions = _b.loadingOptions, maxRowHeight = _b.maxRowHeight, minRowHeight = _b.minRowHeight, rowHeaderCellRenderer = _b.rowHeaderCellRenderer, selectedRegionTransform = _b.selectedRegionTransform;
            var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_ROW_HEADERS"], (_c = {},
                _c[_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_SELECTION_ENABLED"]] = _this.isSelectionModeEnabled(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_ROWS),
                _c));
            var rowIndices = _this.grid.getRowIndicesInRect(viewportRect, enableGhostCells);
            var rowIndexStart = showFrozenRowsOnly ? 0 : rowIndices.rowIndexStart;
            var rowIndexEnd = showFrozenRowsOnly ? _this.getMaxFrozenRowIndex() : rowIndices.rowIndexEnd;
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: classes, ref: refHandler },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_headers_rowHeader__WEBPACK_IMPORTED_MODULE_19__["RowHeader"], { enableMultipleSelection: enableMultipleSelection, focusedCell: focusedCell, grid: _this.grid, locator: _this.locator, isReorderable: enableRowReordering, isResizable: enableRowResizing, loading: _this.hasLoadingOption(loadingOptions, _regions__WEBPACK_IMPORTED_MODULE_26__["TableLoadingOption"].ROW_HEADERS), maxRowHeight: maxRowHeight, minRowHeight: minRowHeight, onFocusedCell: _this.handleFocus, onLayoutLock: _this.handleLayoutLock, onResizeGuide: resizeHandler, onReordered: _this.handleRowsReordered, onReordering: reorderingHandler, onRowHeightChanged: _this.handleRowHeightChanged, onSelection: _this.getEnabledSelectionHandler(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_ROWS), rowHeaderCellRenderer: rowHeaderCellRenderer, selectedRegions: selectedRegions, selectedRegionTransform: selectedRegionTransform, rowIndexStart: rowIndexStart, rowIndexEnd: rowIndexEnd }),
                _this.maybeRenderRegions(_this.styleRowHeaderRegion)));
            var _c;
        };
        _this.bodyCellRenderer = function (rowIndex, columnIndex) {
            var _a = _this.getColumnProps(columnIndex), id = _a.id, loadingOptions = _a.loadingOptions, cellRenderer = _a.cellRenderer, columnHeaderCellRenderer = _a.columnHeaderCellRenderer, name = _a.name, nameRenderer = _a.nameRenderer, restColumnProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["id", "loadingOptions", "cellRenderer", "columnHeaderCellRenderer", "name", "nameRenderer"]);
            var cell = cellRenderer(rowIndex, columnIndex);
            var _b = cell.props.loading, loading = _b === void 0 ? _this.hasLoadingOption(loadingOptions, _regions__WEBPACK_IMPORTED_MODULE_26__["ColumnLoadingOption"].CELLS) : _b;
            var cellProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, restColumnProps, { loading: loading });
            return react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](cell, cellProps);
        };
        _this.renderBody = function (quadrantType, showFrozenRowsOnly, showFrozenColumnsOnly) {
            if (showFrozenRowsOnly === void 0) { showFrozenRowsOnly = false; }
            if (showFrozenColumnsOnly === void 0) { showFrozenColumnsOnly = false; }
            var _a = _this.state, focusedCell = _a.focusedCell, numFrozenColumns = _a.numFrozenColumnsClamped, numFrozenRows = _a.numFrozenRowsClamped, selectedRegions = _a.selectedRegions, viewportRect = _a.viewportRect;
            var _b = _this.props, enableMultipleSelection = _b.enableMultipleSelection, enableGhostCells = _b.enableGhostCells, loadingOptions = _b.loadingOptions, bodyContextMenuRenderer = _b.bodyContextMenuRenderer, selectedRegionTransform = _b.selectedRegionTransform;
            var rowIndices = _this.grid.getRowIndicesInRect(viewportRect, enableGhostCells);
            var columnIndices = _this.grid.getColumnIndicesInRect(viewportRect, enableGhostCells);
            // start beyond the frozen area if rendering unrelated quadrants, so we
            // don't render duplicate cells underneath the frozen ones.
            var columnIndexStart = showFrozenColumnsOnly ? 0 : columnIndices.columnIndexStart + numFrozenColumns;
            var rowIndexStart = showFrozenRowsOnly ? 0 : rowIndices.rowIndexStart + numFrozenRows;
            // if rendering frozen rows/columns, subtract one to convert to
            // 0-indexing. if the 1-indexed value is 0, this sets the end index
            // to -1, which avoids rendering absent frozen rows/columns at all.
            var columnIndexEnd = showFrozenColumnsOnly ? numFrozenColumns - 1 : columnIndices.columnIndexEnd;
            var rowIndexEnd = showFrozenRowsOnly ? numFrozenRows - 1 : rowIndices.rowIndexEnd;
            // the main quadrant contains all cells in the table, so listen only to that quadrant
            var onCompleteRender = quadrantType === _quadrants_tableQuadrant__WEBPACK_IMPORTED_MODULE_24__["QuadrantType"].MAIN ? _this.handleCompleteRender : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tableBody__WEBPACK_IMPORTED_MODULE_27__["TableBody"], { enableMultipleSelection: enableMultipleSelection, cellRenderer: _this.bodyCellRenderer, focusedCell: focusedCell, grid: _this.grid, loading: _this.hasLoadingOption(loadingOptions, _regions__WEBPACK_IMPORTED_MODULE_26__["TableLoadingOption"].CELLS), locator: _this.locator, onCompleteRender: onCompleteRender, onFocusedCell: _this.handleFocus, onSelection: _this.getEnabledSelectionHandler(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].CELLS), bodyContextMenuRenderer: bodyContextMenuRenderer, renderMode: _this.getNormalizedRenderMode(), selectedRegions: selectedRegions, selectedRegionTransform: selectedRegionTransform, viewportRect: viewportRect, columnIndexStart: columnIndexStart, columnIndexEnd: columnIndexEnd, rowIndexStart: rowIndexStart, rowIndexEnd: rowIndexEnd, numFrozenColumns: showFrozenColumnsOnly ? numFrozenColumns : undefined, numFrozenRows: showFrozenRowsOnly ? numFrozenRows : undefined }),
                _this.maybeRenderRegions(_this.styleBodyRegion, quadrantType)));
        };
        _this.handleCompleteRender = function () {
            // the first onCompleteRender is triggered before the viewportRect is
            // defined and the second after the viewportRect has been set. the cells
            // will only actually render once the viewportRect is defined though, so
            // we defer invoking onCompleteRender until that check passes.
            if (_this.state.viewportRect != null) {
                _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.onCompleteRender);
                _this.didCompletelyMount = true;
            }
        };
        _this.handleFocusMoveLeft = function (e) { return _this.handleFocusMove(e, "left"); };
        _this.handleFocusMoveLeftInternal = function (e) { return _this.handleFocusMoveInternal(e, "left"); };
        _this.handleFocusMoveRight = function (e) { return _this.handleFocusMove(e, "right"); };
        _this.handleFocusMoveRightInternal = function (e) { return _this.handleFocusMoveInternal(e, "right"); };
        _this.handleFocusMoveUp = function (e) { return _this.handleFocusMove(e, "up"); };
        _this.handleFocusMoveUpInternal = function (e) { return _this.handleFocusMoveInternal(e, "up"); };
        _this.handleFocusMoveDown = function (e) { return _this.handleFocusMove(e, "down"); };
        _this.handleFocusMoveDownInternal = function (e) { return _this.handleFocusMoveInternal(e, "down"); };
        _this.styleBodyRegion = function (region, quadrantType) {
            var numFrozenColumns = _this.props.numFrozenColumns;
            var cardinality = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getRegionCardinality(region);
            var style = _this.grid.getRegionStyle(region);
            // ensure we're not showing borders at the boundary of the frozen-columns area
            var canHideRightBorder = (quadrantType === _quadrants_tableQuadrant__WEBPACK_IMPORTED_MODULE_24__["QuadrantType"].TOP_LEFT || quadrantType === _quadrants_tableQuadrant__WEBPACK_IMPORTED_MODULE_24__["QuadrantType"].LEFT) &&
                numFrozenColumns != null &&
                numFrozenColumns > 0;
            var fixedHeight = _this.grid.getHeight();
            var fixedWidth = _this.grid.getWidth();
            // include a correction in some cases to hide borders along quadrant boundaries
            var alignmentCorrection = 1;
            var alignmentCorrectionString = "-" + alignmentCorrection + "px";
            switch (cardinality) {
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].CELLS:
                    return style;
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_COLUMNS:
                    style.top = alignmentCorrectionString;
                    style.height = fixedHeight + alignmentCorrection;
                    return style;
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_ROWS:
                    style.left = alignmentCorrectionString;
                    style.width = fixedWidth + alignmentCorrection;
                    if (canHideRightBorder) {
                        style.right = alignmentCorrectionString;
                    }
                    return style;
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_TABLE:
                    style.left = alignmentCorrectionString;
                    style.top = alignmentCorrectionString;
                    style.width = fixedWidth + alignmentCorrection;
                    style.height = fixedHeight + alignmentCorrection;
                    if (canHideRightBorder) {
                        style.right = alignmentCorrectionString;
                    }
                    return style;
                default:
                    return { display: "none" };
            }
        };
        _this.styleMenuRegion = function (region) {
            var viewportRect = _this.state.viewportRect;
            if (viewportRect == null) {
                return {};
            }
            var cardinality = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getRegionCardinality(region);
            var style = _this.grid.getRegionStyle(region);
            switch (cardinality) {
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_TABLE:
                    style.right = "0px";
                    style.bottom = "0px";
                    style.top = "0px";
                    style.left = "0px";
                    style.borderBottom = "none";
                    style.borderRight = "none";
                    return style;
                default:
                    return { display: "none" };
            }
        };
        _this.styleColumnHeaderRegion = function (region) {
            var viewportRect = _this.state.viewportRect;
            if (viewportRect == null) {
                return {};
            }
            var cardinality = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getRegionCardinality(region);
            var style = _this.grid.getRegionStyle(region);
            switch (cardinality) {
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_TABLE:
                    style.left = "-1px";
                    style.borderLeft = "none";
                    style.bottom = "-1px";
                    return style;
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_COLUMNS:
                    style.bottom = "-1px";
                    return style;
                default:
                    return { display: "none" };
            }
        };
        _this.styleRowHeaderRegion = function (region) {
            var viewportRect = _this.state.viewportRect;
            if (viewportRect == null) {
                return {};
            }
            var cardinality = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getRegionCardinality(region);
            var style = _this.grid.getRegionStyle(region);
            switch (cardinality) {
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_TABLE:
                    style.top = "-1px";
                    style.borderTop = "none";
                    style.right = "-1px";
                    return style;
                case _regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_ROWS:
                    style.right = "-1px";
                    return style;
                default:
                    return { display: "none" };
            }
        };
        _this.handleColumnWidthChanged = function (columnIndex, width) {
            var selectedRegions = _this.state.selectedRegions;
            var columnWidths = _this.state.columnWidths.slice();
            if (_regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].hasFullTable(selectedRegions)) {
                for (var col = 0; col < columnWidths.length; col++) {
                    columnWidths[col] = width;
                }
            }
            if (_regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].hasFullColumn(selectedRegions, columnIndex)) {
                _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].eachUniqueFullColumn(selectedRegions, function (col) {
                    columnWidths[col] = width;
                });
            }
            else {
                columnWidths[columnIndex] = width;
            }
            _this.invalidateGrid();
            _this.didUpdateColumnOrRowSizes = true;
            _this.setState({ columnWidths: columnWidths });
            var onColumnWidthChanged = _this.props.onColumnWidthChanged;
            if (onColumnWidthChanged != null) {
                onColumnWidthChanged(columnIndex, width);
            }
        };
        _this.handleRowHeightChanged = function (rowIndex, height) {
            var selectedRegions = _this.state.selectedRegions;
            var rowHeights = _this.state.rowHeights.slice();
            if (_regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].hasFullTable(selectedRegions)) {
                for (var row = 0; row < rowHeights.length; row++) {
                    rowHeights[row] = height;
                }
            }
            if (_regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].hasFullRow(selectedRegions, rowIndex)) {
                _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].eachUniqueFullRow(selectedRegions, function (row) {
                    rowHeights[row] = height;
                });
            }
            else {
                rowHeights[rowIndex] = height;
            }
            _this.invalidateGrid();
            _this.didUpdateColumnOrRowSizes = true;
            _this.setState({ rowHeights: rowHeights });
            var onRowHeightChanged = _this.props.onRowHeightChanged;
            if (onRowHeightChanged != null) {
                onRowHeightChanged(rowIndex, height);
            }
        };
        _this.handleRootScroll = function (_event) {
            // Bug #211 - Native browser text selection events can cause the root
            // element to scroll even though it has a overflow:hidden style. The
            // only viable solution to this is to unscroll the element after the
            // browser scrolls it.
            if (_this.rootTableElement != null) {
                _this.rootTableElement.scrollLeft = 0;
                _this.rootTableElement.scrollTop = 0;
            }
        };
        _this.handleBodyScroll = function (event) {
            // Prevent the event from propagating to avoid a resize event on the
            // resize sensor.
            event.stopPropagation();
            if (_this.locator != null && !_this.state.isLayoutLocked) {
                var viewportRect = _this.locator.getViewportRect();
                _this.updateViewportRect(viewportRect);
            }
        };
        _this.clearSelection = function (_selectedRegions) {
            _this.handleSelection([]);
        };
        // no good way to call arrow-key keyboard events from tests
        /* istanbul ignore next */
        _this.handleFocusMove = function (e, direction) {
            e.preventDefault();
            e.stopPropagation();
            var focusedCell = _this.state.focusedCell;
            if (focusedCell == null) {
                // halt early if we have a selectedRegionTransform or something else in play that nixes
                // the focused cell.
                return;
            }
            var newFocusedCell = { col: focusedCell.col, row: focusedCell.row, focusSelectionIndex: 0 };
            switch (direction) {
                case "up":
                    newFocusedCell.row -= 1;
                    break;
                case "down":
                    newFocusedCell.row += 1;
                    break;
                case "left":
                    newFocusedCell.col -= 1;
                    break;
                case "right":
                    newFocusedCell.col += 1;
                    break;
                default:
                    break;
            }
            if (newFocusedCell.row < 0 ||
                newFocusedCell.row >= _this.grid.numRows ||
                newFocusedCell.col < 0 ||
                newFocusedCell.col >= _this.grid.numCols) {
                return;
            }
            // change selection to match new focus cell location
            var newSelectionRegions = [_regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].cell(newFocusedCell.row, newFocusedCell.col)];
            _this.handleSelection(newSelectionRegions);
            _this.handleFocus(newFocusedCell);
            // keep the focused cell in view
            _this.scrollBodyToFocusedCell(newFocusedCell);
        };
        // no good way to call arrow-key keyboard events from tests
        /* istanbul ignore next */
        _this.handleFocusMoveInternal = function (e, direction) {
            e.preventDefault();
            e.stopPropagation();
            var _a = _this.state, focusedCell = _a.focusedCell, selectedRegions = _a.selectedRegions;
            if (focusedCell == null) {
                // halt early if we have a selectedRegionTransform or something else in play that nixes
                // the focused cell.
                return;
            }
            var newFocusedCell = {
                col: focusedCell.col,
                focusSelectionIndex: focusedCell.focusSelectionIndex,
                row: focusedCell.row,
            };
            // if we're not in any particular focus cell region, and one exists, go to the first cell of the first one
            if (focusedCell.focusSelectionIndex == null && selectedRegions.length > 0) {
                var focusCellRegion = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getCellRegionFromRegion(selectedRegions[0], _this.grid.numRows, _this.grid.numCols);
                newFocusedCell = {
                    col: focusCellRegion.cols[0],
                    focusSelectionIndex: 0,
                    row: focusCellRegion.rows[0],
                };
            }
            else {
                if (selectedRegions.length === 0) {
                    _this.handleFocusMove(e, direction);
                    return;
                }
                var focusCellRegion = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getCellRegionFromRegion(selectedRegions[focusedCell.focusSelectionIndex], _this.grid.numRows, _this.grid.numCols);
                if (focusCellRegion.cols[0] === focusCellRegion.cols[1] &&
                    focusCellRegion.rows[0] === focusCellRegion.rows[1] &&
                    selectedRegions.length === 1) {
                    _this.handleFocusMove(e, direction);
                    return;
                }
                switch (direction) {
                    case "up":
                        newFocusedCell = _this.moveFocusCell("row", "col", true, newFocusedCell, focusCellRegion);
                        break;
                    case "left":
                        newFocusedCell = _this.moveFocusCell("col", "row", true, newFocusedCell, focusCellRegion);
                        break;
                    case "down":
                        newFocusedCell = _this.moveFocusCell("row", "col", false, newFocusedCell, focusCellRegion);
                        break;
                    case "right":
                        newFocusedCell = _this.moveFocusCell("col", "row", false, newFocusedCell, focusCellRegion);
                        break;
                    default:
                        break;
                }
            }
            if (newFocusedCell.row < 0 ||
                newFocusedCell.row >= _this.grid.numRows ||
                newFocusedCell.col < 0 ||
                newFocusedCell.col >= _this.grid.numCols) {
                return;
            }
            _this.handleFocus(newFocusedCell);
            // keep the focused cell in view
            _this.scrollBodyToFocusedCell(newFocusedCell);
        };
        _this.scrollBodyToFocusedCell = function (focusedCell) {
            var row = focusedCell.row, col = focusedCell.col;
            var viewportRect = _this.state.viewportRect;
            // sort keys in normal CSS position order (per the trusty TRBL/"trouble" acronym)
            // tslint:disable:object-literal-sort-keys
            var viewportBounds = {
                top: viewportRect.top,
                right: viewportRect.left + viewportRect.width,
                bottom: viewportRect.top + viewportRect.height,
                left: viewportRect.left,
            };
            var focusedCellBounds = {
                top: _this.grid.getCumulativeHeightBefore(row),
                right: _this.grid.getCumulativeWidthAt(col),
                bottom: _this.grid.getCumulativeHeightAt(row),
                left: _this.grid.getCumulativeWidthBefore(col),
            };
            // tslint:enable:object-literal-sort-keys
            var focusedCellWidth = focusedCellBounds.right - focusedCellBounds.left;
            var focusedCellHeight = focusedCellBounds.bottom - focusedCellBounds.top;
            var isFocusedCellWiderThanViewport = focusedCellWidth > viewportRect.width;
            var isFocusedCellTallerThanViewport = focusedCellHeight > viewportRect.height;
            var nextScrollTop = viewportRect.top;
            var nextScrollLeft = viewportRect.left;
            // keep the top end of an overly tall focused cell in view when moving left and right
            // (without this OR check, the body seesaws to fit the top end, then the bottom end, etc.)
            if (focusedCellBounds.top < viewportBounds.top || isFocusedCellTallerThanViewport) {
                // scroll up (minus one pixel to avoid clipping the focused-cell border)
                nextScrollTop = Math.max(0, focusedCellBounds.top - 1);
            }
            else if (focusedCellBounds.bottom > viewportBounds.bottom) {
                // scroll down
                var scrollDelta = focusedCellBounds.bottom - viewportBounds.bottom;
                nextScrollTop = viewportBounds.top + scrollDelta;
            }
            // keep the left end of an overly wide focused cell in view when moving up and down
            if (focusedCellBounds.left < viewportBounds.left || isFocusedCellWiderThanViewport) {
                // scroll left (again minus one additional pixel)
                nextScrollLeft = Math.max(0, focusedCellBounds.left - 1);
            }
            else if (focusedCellBounds.right > viewportBounds.right) {
                // scroll right
                var scrollDelta = focusedCellBounds.right - viewportBounds.right;
                nextScrollLeft = viewportBounds.left + scrollDelta;
            }
            _this.syncViewportPosition(nextScrollLeft, nextScrollTop);
        };
        _this.handleFocus = function (focusedCell) {
            if (!_this.props.enableFocusedCell) {
                // don't set focus state if focus is not allowed
                return;
            }
            // only set focused cell state if not specified in props
            if (_this.props.focusedCell == null) {
                _this.setState({ focusedCell: focusedCell });
            }
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.onFocusedCell, focusedCell);
        };
        _this.handleSelection = function (selectedRegions) {
            // only set selectedRegions state if not specified in props
            if (_this.props.selectedRegions == null) {
                _this.setState({ selectedRegions: selectedRegions });
            }
            var onSelection = _this.props.onSelection;
            if (onSelection != null) {
                onSelection(selectedRegions);
            }
        };
        _this.handleColumnsReordering = function (verticalGuides) {
            _this.setState({ isReordering: true, verticalGuides: verticalGuides });
        };
        _this.handleColumnsReordered = function (oldIndex, newIndex, length) {
            _this.setState({ isReordering: false, verticalGuides: undefined });
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.onColumnsReordered, oldIndex, newIndex, length);
        };
        _this.handleRowsReordering = function (horizontalGuides) {
            _this.setState({ isReordering: true, horizontalGuides: horizontalGuides });
        };
        _this.handleRowsReordered = function (oldIndex, newIndex, length) {
            _this.setState({ isReordering: false, horizontalGuides: undefined });
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(_this.props.onRowsReordered, oldIndex, newIndex, length);
        };
        _this.handleLayoutLock = function (isLayoutLocked) {
            if (isLayoutLocked === void 0) { isLayoutLocked = false; }
            _this.setState({ isLayoutLocked: isLayoutLocked });
        };
        _this.hasLoadingOption = function (loadingOptions, loadingOption) {
            if (loadingOptions == null) {
                return undefined;
            }
            return loadingOptions.indexOf(loadingOption) >= 0;
        };
        _this.updateViewportRect = function (nextViewportRect) {
            var viewportRect = _this.state.viewportRect;
            _this.setState({ viewportRect: nextViewportRect });
            var didViewportChange = (viewportRect != null && !viewportRect.equals(nextViewportRect)) ||
                (viewportRect == null && nextViewportRect != null);
            if (didViewportChange) {
                _this.invokeOnVisibleCellsChangeCallback(nextViewportRect);
            }
        };
        _this.getMaxFrozenColumnIndex = function () {
            var numFrozenColumns = _this.state.numFrozenColumnsClamped;
            return numFrozenColumns != null ? numFrozenColumns - 1 : undefined;
        };
        _this.getMaxFrozenRowIndex = function () {
            var numFrozenRows = _this.state.numFrozenRowsClamped;
            return numFrozenRows != null ? numFrozenRows - 1 : undefined;
        };
        _this.handleColumnResizeGuide = function (verticalGuides) {
            _this.setState({ verticalGuides: verticalGuides });
        };
        _this.handleRowResizeGuide = function (horizontalGuides) {
            _this.setState({ horizontalGuides: horizontalGuides });
        };
        var _a = _this.props, children = _a.children, columnWidths = _a.columnWidths, defaultRowHeight = _a.defaultRowHeight, defaultColumnWidth = _a.defaultColumnWidth, numRows = _a.numRows, rowHeights = _a.rowHeights;
        _this.childrenArray = react__WEBPACK_IMPORTED_MODULE_3__["Children"].toArray(children);
        _this.columnIdToIndex = Table_1.createColumnIdIndex(_this.childrenArray);
        // Create height/width arrays using the lengths from props and
        // children, the default values from props, and finally any sparse
        // arrays passed into props.
        var newColumnWidths = _this.childrenArray.map(function () { return defaultColumnWidth; });
        newColumnWidths = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].assignSparseValues(newColumnWidths, columnWidths);
        var newRowHeights = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].times(numRows, function () { return defaultRowHeight; });
        newRowHeights = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].assignSparseValues(newRowHeights, rowHeights);
        var selectedRegions = props.selectedRegions == null ? [] : props.selectedRegions;
        var focusedCell = _common_internal_focusedCellUtils__WEBPACK_IMPORTED_MODULE_11__["getInitialFocusedCell"](props.enableFocusedCell, props.focusedCell, undefined, selectedRegions);
        _this.state = {
            columnWidths: newColumnWidths,
            focusedCell: focusedCell,
            isLayoutLocked: false,
            isReordering: false,
            numFrozenColumnsClamped: clampNumFrozenColumns(props),
            numFrozenRowsClamped: clampNumFrozenRows(props),
            rowHeights: newRowHeights,
            selectedRegions: selectedRegions,
        };
        return _this;
    }
    Table_1 = Table;
    Table.createColumnIdIndex = function (children) {
        var columnIdToIndex = {};
        for (var i = 0; i < children.length; i++) {
            var key = children[i].props.id;
            if (key != null) {
                columnIdToIndex[String(key)] = i;
            }
        }
        return columnIdToIndex;
    };
    // Instance methods
    // ================
    /**
     * __Experimental!__ Resizes all rows in the table to the approximate
     * maximum height of wrapped cell content in each row. Works best when each
     * cell contains plain text of a consistent font style (though font style
     * may vary between cells). Since this function uses approximate
     * measurements, results may not be perfect.
     *
     * Approximation parameters can be configured for the entire table or on a
     * per-cell basis. Default values are fine-tuned to work well with default
     * Table font styles.
     */
    Table.prototype.resizeRowsByApproximateHeight = function (getCellText, options) {
        var numRows = this.props.numRows;
        var columnWidths = this.state.columnWidths;
        var numColumns = columnWidths.length;
        var rowHeights = [];
        for (var rowIndex = 0; rowIndex < numRows; rowIndex++) {
            var maxCellHeightInRow = 0;
            // iterate through each cell in the row
            for (var columnIndex = 0; columnIndex < numColumns; columnIndex++) {
                // resolve all parameters to raw values
                var _a = this.resolveResizeRowsByApproximateHeightOptions(options, rowIndex, columnIndex), approxCharWidth = _a.getApproximateCharWidth, approxLineHeight = _a.getApproximateLineHeight, horizontalPadding = _a.getCellHorizontalPadding, numBufferLines = _a.getNumBufferLines;
                var cellText = getCellText(rowIndex, columnIndex);
                var approxCellHeight = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].getApproxCellHeight(cellText, columnWidths[columnIndex], approxCharWidth, approxLineHeight, horizontalPadding, numBufferLines);
                if (approxCellHeight > maxCellHeightInRow) {
                    maxCellHeightInRow = approxCellHeight;
                }
            }
            rowHeights.push(maxCellHeightInRow);
        }
        this.invalidateGrid();
        this.didUpdateColumnOrRowSizes = true;
        this.setState({ rowHeights: rowHeights });
    };
    /**
     * Resize all rows in the table to the height of the tallest visible cell in the specified columns.
     * If no indices are provided, default to using the tallest visible cell from all columns in view.
     */
    Table.prototype.resizeRowsByTallestCell = function (columnIndices) {
        var _this = this;
        var tallest = 0;
        if (columnIndices == null) {
            // Consider all columns currently in viewport
            var viewportColumnIndices = this.grid.getColumnIndicesInRect(this.state.viewportRect);
            for (var col = viewportColumnIndices.columnIndexStart; col <= viewportColumnIndices.columnIndexEnd; col++) {
                tallest = Math.max(tallest, this.locator.getTallestVisibleCellInColumn(col));
            }
        }
        else {
            var columnIndicesArray = Array.isArray(columnIndices) ? columnIndices : [columnIndices];
            var tallestByColumns = columnIndicesArray.map(function (col) { return _this.locator.getTallestVisibleCellInColumn(col); });
            tallest = Math.max.apply(Math, tallestByColumns);
        }
        var rowHeights = Array(this.state.rowHeights.length).fill(tallest);
        this.invalidateGrid();
        this.didUpdateColumnOrRowSizes = true;
        this.setState({ rowHeights: rowHeights });
    };
    /**
     * Scrolls the table to the target region in a fashion appropriate to the target region's
     * cardinality:
     *
     * - CELLS: Scroll the top-left cell in the target region to the top-left corner of the viewport.
     * - FULL_ROWS: Scroll the top-most row in the target region to the top of the viewport.
     * - FULL_COLUMNS: Scroll the left-most column in the target region to the left side of the viewport.
     * - FULL_TABLE: Scroll the top-left cell in the table to the top-left corner of the viewport.
     *
     * If there are active frozen rows and/or columns, the target region will be positioned in the
     * top-left corner of the non-frozen area (unless the target region itself is in the frozen
     * area).
     *
     * If the target region is close to the bottom-right corner of the table, this function will
     * simply scroll the target region as close to the top-left as possible until the bottom-right
     * corner is reached.
     */
    Table.prototype.scrollToRegion = function (region) {
        var _a = this.state, numFrozenColumns = _a.numFrozenColumnsClamped, numFrozenRows = _a.numFrozenRowsClamped;
        var _b = this.state.viewportRect, currScrollLeft = _b.left, currScrollTop = _b.top;
        var _c = _common_internal_scrollUtils__WEBPACK_IMPORTED_MODULE_12__["getScrollPositionForRegion"](region, currScrollLeft, currScrollTop, this.grid.getCumulativeWidthBefore, this.grid.getCumulativeHeightBefore, numFrozenRows, numFrozenColumns), scrollLeft = _c.scrollLeft, scrollTop = _c.scrollTop;
        var correctedScrollLeft = this.shouldDisableHorizontalScroll() ? 0 : scrollLeft;
        var correctedScrollTop = this.shouldDisableVerticalScroll() ? 0 : scrollTop;
        // defer to the quadrant stack to keep all quadrant positions in sync
        this.quadrantStackInstance.scrollToPosition(correctedScrollLeft, correctedScrollTop);
    };
    // React lifecycle
    // ===============
    Table.prototype.getChildContext = function () {
        return {
            enableColumnInteractionBar: this.props.enableColumnInteractionBar,
        };
    };
    Table.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var propKeysBlacklist = { exclude: Table_1.SHALLOW_COMPARE_PROP_KEYS_BLACKLIST };
        var stateKeysBlacklist = { exclude: Table_1.SHALLOW_COMPARE_STATE_KEYS_BLACKLIST };
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(this.props, nextProps, propKeysBlacklist) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(this.state, nextState, stateKeysBlacklist) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].deepCompareKeys(this.props, nextProps, Table_1.SHALLOW_COMPARE_PROP_KEYS_BLACKLIST) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].deepCompareKeys(this.state, nextState, Table_1.SHALLOW_COMPARE_STATE_KEYS_BLACKLIST));
    };
    Table.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        // calls validateProps
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        var children = nextProps.children, columnWidths = nextProps.columnWidths, defaultColumnWidth = nextProps.defaultColumnWidth, defaultRowHeight = nextProps.defaultRowHeight, enableFocusedCell = nextProps.enableFocusedCell, focusedCell = nextProps.focusedCell, numRows = nextProps.numRows, rowHeights = nextProps.rowHeights, selectedRegions = nextProps.selectedRegions, selectionModes = nextProps.selectionModes;
        var newChildArray = react__WEBPACK_IMPORTED_MODULE_3__["Children"].toArray(children);
        var numCols = newChildArray.length;
        // Try to maintain widths of columns by looking up the width of the
        // column that had the same `ID` prop. If none is found, use the
        // previous width at the same index.
        var previousColumnWidths = newChildArray.map(function (child, index) {
            var mappedIndex = _this.columnIdToIndex[child.props.id];
            return _this.state.columnWidths[mappedIndex != null ? mappedIndex : index];
        });
        // Make sure the width/height arrays have the correct length, but keep
        // as many existing widths/heights when possible. Also, apply the
        // sparse width/heights from props.
        var newColumnWidths = this.state.columnWidths;
        newColumnWidths = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].arrayOfLength(newColumnWidths, numCols, defaultColumnWidth);
        newColumnWidths = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].assignSparseValues(newColumnWidths, previousColumnWidths);
        newColumnWidths = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].assignSparseValues(newColumnWidths, columnWidths);
        var newRowHeights = this.state.rowHeights;
        newRowHeights = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].arrayOfLength(newRowHeights, numRows, defaultRowHeight);
        newRowHeights = _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].assignSparseValues(newRowHeights, rowHeights);
        var newSelectedRegions = selectedRegions;
        if (selectedRegions == null) {
            // if we're in uncontrolled mode, filter out all selected regions that don't
            // fit in the current new table dimensions
            newSelectedRegions = this.state.selectedRegions.filter(function (region) {
                var regionCardinality = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getRegionCardinality(region);
                return (_this.isSelectionModeEnabled(regionCardinality, selectionModes) &&
                    _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].isRegionValidForTable(region, numRows, numCols));
            });
        }
        var newFocusedCell = _common_internal_focusedCellUtils__WEBPACK_IMPORTED_MODULE_11__["getInitialFocusedCell"](enableFocusedCell, focusedCell, this.state.focusedCell, newSelectedRegions);
        this.childrenArray = newChildArray;
        this.columnIdToIndex = Table_1.createColumnIdIndex(this.childrenArray);
        this.invalidateGrid();
        this.setState({
            columnWidths: newColumnWidths,
            focusedCell: newFocusedCell,
            numFrozenColumnsClamped: clampNumFrozenColumns(nextProps),
            numFrozenRowsClamped: clampNumFrozenRows(nextProps),
            rowHeights: newRowHeights,
            selectedRegions: newSelectedRegions,
        });
    };
    Table.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, enableRowHeader = _a.enableRowHeader, loadingOptions = _a.loadingOptions, numRows = _a.numRows, enableColumnInteractionBar = _a.enableColumnInteractionBar;
        var _b = this.state, horizontalGuides = _b.horizontalGuides, numFrozenColumnsClamped = _b.numFrozenColumnsClamped, numFrozenRowsClamped = _b.numFrozenRowsClamped, verticalGuides = _b.verticalGuides;
        this.validateGrid();
        var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_CONTAINER"], (_c = {},
            _c[_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_REORDERING"]] = this.state.isReordering,
            _c[_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_NO_VERTICAL_SCROLL"]] = this.shouldDisableVerticalScroll(),
            _c[_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_NO_HORIZONTAL_SCROLL"]] = this.shouldDisableHorizontalScroll(),
            _c[_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_SELECTION_ENABLED"]] = this.isSelectionModeEnabled(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].CELLS),
            _c[_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_NO_ROWS"]] = numRows === 0,
            _c), className);
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: classes, ref: this.refHandlers.rootTable, onScroll: this.handleRootScroll },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_quadrants_tableQuadrantStack__WEBPACK_IMPORTED_MODULE_25__["TableQuadrantStack"], { bodyRef: this.refHandlers.cellContainer, bodyRenderer: this.renderBody, columnHeaderCellRenderer: this.renderColumnHeader, columnHeaderRef: this.refHandlers.columnHeader, enableColumnInteractionBar: enableColumnInteractionBar, enableRowHeader: enableRowHeader, grid: this.grid, handleColumnResizeGuide: this.handleColumnResizeGuide, handleColumnsReordering: this.handleColumnsReordering, handleRowResizeGuide: this.handleRowResizeGuide, handleRowsReordering: this.handleRowsReordering, isHorizontalScrollDisabled: this.shouldDisableHorizontalScroll(), isVerticalScrollDisabled: this.shouldDisableVerticalScroll(), loadingOptions: loadingOptions, numColumns: react__WEBPACK_IMPORTED_MODULE_3__["Children"].count(children), numFrozenColumns: numFrozenColumnsClamped, numFrozenRows: numFrozenRowsClamped, numRows: numRows, onScroll: this.handleBodyScroll, quadrantRef: this.refHandlers.mainQuadrant, ref: this.refHandlers.quadrantStack, menuRenderer: this.renderMenu, rowHeaderCellRenderer: this.renderRowHeader, rowHeaderRef: this.refHandlers.rowHeader, scrollContainerRef: this.refHandlers.scrollContainer }),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_OVERLAY_LAYER"], _common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_OVERLAY_REORDERING_CURSOR"]) }),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_layers_guides__WEBPACK_IMPORTED_MODULE_21__["GuideLayer"], { className: _common_classes__WEBPACK_IMPORTED_MODULE_5__["TABLE_RESIZE_GUIDES"], verticalGuides: verticalGuides, horizontalGuides: horizontalGuides })));
        var _c;
    };
    Table.prototype.renderHotkeys = function () {
        var hotkeys = [
            this.maybeRenderCopyHotkey(),
            this.maybeRenderSelectAllHotkey(),
            this.maybeRenderFocusHotkeys(),
            this.maybeRenderSelectionResizeHotkeys(),
        ];
        return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkeys"], null, hotkeys.filter(function (element) { return element !== undefined; }));
    };
    /**
     * When the component mounts, the HTML Element refs will be available, so
     * we constructor the Locator, which queries the elements' bounding
     * ClientRects.
     */
    Table.prototype.componentDidMount = function () {
        var _this = this;
        this.validateGrid();
        this.locator = new _locator__WEBPACK_IMPORTED_MODULE_23__["Locator"](this.rootTableElement, this.scrollContainerElement, this.cellContainerElement);
        this.updateLocator();
        this.updateViewportRect(this.locator.getViewportRect());
        this.resizeSensorDetach = _interactions_resizeSensor__WEBPACK_IMPORTED_MODULE_20__["ResizeSensor"].attach(this.rootTableElement, function () {
            if (!_this.state.isLayoutLocked) {
                _this.updateViewportRect(_this.locator.getViewportRect());
            }
        });
    };
    Table.prototype.componentWillUnmount = function () {
        if (this.resizeSensorDetach != null) {
            this.resizeSensorDetach();
            delete this.resizeSensorDetach;
        }
        this.didCompletelyMount = false;
    };
    Table.prototype.componentDidUpdate = function () {
        if (this.locator != null) {
            this.validateGrid();
            this.updateLocator();
        }
        if (this.didUpdateColumnOrRowSizes) {
            this.quadrantStackInstance.synchronizeQuadrantViews();
            this.didUpdateColumnOrRowSizes = false;
        }
        this.maybeScrollTableIntoView();
    };
    Table.prototype.validateProps = function (props) {
        var children = props.children, columnWidths = props.columnWidths, numFrozenColumns = props.numFrozenColumns, numFrozenRows = props.numFrozenRows, numRows = props.numRows, rowHeights = props.rowHeights;
        var numColumns = react__WEBPACK_IMPORTED_MODULE_3__["Children"].count(children);
        // do cheap error-checking first.
        if (numRows != null && numRows < 0) {
            throw new Error(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NUM_ROWS_NEGATIVE"]);
        }
        if (numFrozenRows != null && numFrozenRows < 0) {
            throw new Error(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NUM_FROZEN_ROWS_NEGATIVE"]);
        }
        if (numFrozenColumns != null && numFrozenColumns < 0) {
            throw new Error(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NUM_FROZEN_COLUMNS_NEGATIVE"]);
        }
        if (numRows != null && rowHeights != null && rowHeights.length !== numRows) {
            throw new Error(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NUM_ROWS_ROW_HEIGHTS_MISMATCH"]);
        }
        if (numColumns != null && columnWidths != null && columnWidths.length !== numColumns) {
            throw new Error(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NUM_COLUMNS_COLUMN_WIDTHS_MISMATCH"]);
        }
        react__WEBPACK_IMPORTED_MODULE_3__["Children"].forEach(children, function (child) {
            // save as a variable so that union type narrowing works
            var childType = child.type;
            // the second part of this conditional will never be true, but it
            // informs the TS compiler that we won't be invoking
            // childType.prototype on a "string" element.
            if (typeof child === "string" || typeof childType === "string") {
                throw new Error(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NON_COLUMN_CHILDREN_WARNING"]);
            }
            else {
                var isColumn = childType.prototype === _column__WEBPACK_IMPORTED_MODULE_4__["Column"].prototype || _column__WEBPACK_IMPORTED_MODULE_4__["Column"].prototype.isPrototypeOf(childType);
                if (!isColumn) {
                    throw new Error(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NON_COLUMN_CHILDREN_WARNING"]);
                }
            }
        });
        // these are recoverable scenarios, so just print a warning.
        if (numFrozenRows != null && numRows != null && numFrozenRows > numRows) {
            console.warn(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NUM_FROZEN_ROWS_BOUND_WARNING"]);
        }
        if (numFrozenColumns != null && numFrozenColumns > numColumns) {
            console.warn(_common_errors__WEBPACK_IMPORTED_MODULE_9__["TABLE_NUM_FROZEN_COLUMNS_BOUND_WARNING"]);
        }
    };
    // Hotkeys
    // =======
    Table.prototype.maybeRenderCopyHotkey = function () {
        var getCellClipboardData = this.props.getCellClipboardData;
        if (getCellClipboardData != null) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "copy-hotkey", label: "Copy selected table cells", group: "Table", combo: "mod+c", onKeyDown: this.handleCopy }));
        }
        else {
            return undefined;
        }
    };
    Table.prototype.maybeRenderSelectionResizeHotkeys = function () {
        var _a = this.props, enableMultipleSelection = _a.enableMultipleSelection, selectionModes = _a.selectionModes;
        var isSomeSelectionModeEnabled = selectionModes.length > 0;
        if (enableMultipleSelection && isSomeSelectionModeEnabled) {
            return [
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "resize-selection-up", label: "Resize selection upward", group: "Table", combo: "shift+up", onKeyDown: this.handleSelectionResizeUp }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "resize-selection-down", label: "Resize selection downward", group: "Table", combo: "shift+down", onKeyDown: this.handleSelectionResizeDown }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "resize-selection-left", label: "Resize selection leftward", group: "Table", combo: "shift+left", onKeyDown: this.handleSelectionResizeLeft }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "resize-selection-right", label: "Resize selection rightward", group: "Table", combo: "shift+right", onKeyDown: this.handleSelectionResizeRight }),
            ];
        }
        else {
            return undefined;
        }
    };
    Table.prototype.maybeRenderFocusHotkeys = function () {
        var enableFocusedCell = this.props.enableFocusedCell;
        if (enableFocusedCell != null) {
            return [
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "move left", label: "Move focus cell left", group: "Table", combo: "left", onKeyDown: this.handleFocusMoveLeft }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "move right", label: "Move focus cell right", group: "Table", combo: "right", onKeyDown: this.handleFocusMoveRight }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "move up", label: "Move focus cell up", group: "Table", combo: "up", onKeyDown: this.handleFocusMoveUp }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "move down", label: "Move focus cell down", group: "Table", combo: "down", onKeyDown: this.handleFocusMoveDown }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "move tab", label: "Move focus cell tab", group: "Table", combo: "tab", onKeyDown: this.handleFocusMoveRightInternal, allowInInput: true }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "move shift-tab", label: "Move focus cell shift tab", group: "Table", combo: "shift+tab", onKeyDown: this.handleFocusMoveLeftInternal, allowInInput: true }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "move enter", label: "Move focus cell enter", group: "Table", combo: "enter", onKeyDown: this.handleFocusMoveDownInternal, allowInInput: true }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "move shift-enter", label: "Move focus cell shift enter", group: "Table", combo: "shift+enter", onKeyDown: this.handleFocusMoveUpInternal, allowInInput: true }),
            ];
        }
        else {
            return [];
        }
    };
    Table.prototype.maybeRenderSelectAllHotkey = function () {
        if (this.isSelectionModeEnabled(_regions__WEBPACK_IMPORTED_MODULE_26__["RegionCardinality"].FULL_TABLE)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Hotkey"], { key: "select-all-hotkey", label: "Select all", group: "Table", combo: "mod+a", onKeyDown: this.handleSelectAllHotkey }));
        }
        else {
            return undefined;
        }
    };
    /**
     * Replaces the selected region at the specified array index, with the
     * region provided.
     */
    Table.prototype.updateSelectedRegionAtIndex = function (region, index) {
        var _a = this.props, children = _a.children, numRows = _a.numRows;
        var selectedRegions = this.state.selectedRegions;
        var numColumns = react__WEBPACK_IMPORTED_MODULE_3__["Children"].count(children);
        var maxRowIndex = Math.max(0, numRows - 1);
        var maxColumnIndex = Math.max(0, numColumns - 1);
        var clampedNextRegion = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].clampRegion(region, maxRowIndex, maxColumnIndex);
        var nextSelectedRegions = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].update(selectedRegions, clampedNextRegion, index);
        this.handleSelection(nextSelectedRegions);
    };
    // Quadrant refs
    // =============
    Table.prototype.moveFocusCell = function (primaryAxis, secondaryAxis, isUpOrLeft, newFocusedCell, focusCellRegion) {
        var selectedRegions = this.state.selectedRegions;
        var primaryAxisPlural = primaryAxis === "row" ? "rows" : "cols";
        var secondaryAxisPlural = secondaryAxis === "row" ? "rows" : "cols";
        var movementDirection = isUpOrLeft ? -1 : +1;
        var regionIntervalIndex = isUpOrLeft ? 1 : 0;
        // try moving the cell in the direction along the primary axis
        newFocusedCell[primaryAxis] += movementDirection;
        var isPrimaryIndexOutOfBounds = isUpOrLeft
            ? newFocusedCell[primaryAxis] < focusCellRegion[primaryAxisPlural][0]
            : newFocusedCell[primaryAxis] > focusCellRegion[primaryAxisPlural][1];
        if (isPrimaryIndexOutOfBounds) {
            // if we moved outside the bounds of selection region,
            // move to the start (or end) of the primary axis, and move one along the secondary
            newFocusedCell[primaryAxis] = focusCellRegion[primaryAxisPlural][regionIntervalIndex];
            newFocusedCell[secondaryAxis] += movementDirection;
            var isSecondaryIndexOutOfBounds = isUpOrLeft
                ? newFocusedCell[secondaryAxis] < focusCellRegion[secondaryAxisPlural][0]
                : newFocusedCell[secondaryAxis] > focusCellRegion[secondaryAxisPlural][1];
            if (isSecondaryIndexOutOfBounds) {
                // if moving along the secondary also moves us outside
                // go to the start (or end) of the next (or previous region)
                // (note that if there's only one region you'll be moving to the opposite corner, which is fine)
                var newFocusCellSelectionIndex = newFocusedCell.focusSelectionIndex + movementDirection;
                // newFocusCellSelectionIndex should be one more (or less), unless we need to wrap around
                if (isUpOrLeft ? newFocusCellSelectionIndex < 0 : newFocusCellSelectionIndex >= selectedRegions.length) {
                    newFocusCellSelectionIndex = isUpOrLeft ? selectedRegions.length - 1 : 0;
                }
                var newFocusCellRegion = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].getCellRegionFromRegion(selectedRegions[newFocusCellSelectionIndex], this.grid.numRows, this.grid.numCols);
                newFocusedCell = {
                    col: newFocusCellRegion.cols[regionIntervalIndex],
                    focusSelectionIndex: newFocusCellSelectionIndex,
                    row: newFocusCellRegion.rows[regionIntervalIndex],
                };
            }
        }
        return newFocusedCell;
    };
    Table.prototype.shouldDisableVerticalScroll = function () {
        var enableGhostCells = this.props.enableGhostCells;
        var viewportRect = this.state.viewportRect;
        var rowIndices = this.grid.getRowIndicesInRect(viewportRect, enableGhostCells);
        var isViewportUnscrolledVertically = viewportRect != null && viewportRect.top === 0;
        var areRowHeadersLoading = this.hasLoadingOption(this.props.loadingOptions, _regions__WEBPACK_IMPORTED_MODULE_26__["TableLoadingOption"].ROW_HEADERS);
        var areGhostRowsVisible = enableGhostCells && this.grid.isGhostIndex(rowIndices.rowIndexEnd, 0);
        return areGhostRowsVisible && (isViewportUnscrolledVertically || areRowHeadersLoading);
    };
    Table.prototype.shouldDisableHorizontalScroll = function () {
        var enableGhostCells = this.props.enableGhostCells;
        var viewportRect = this.state.viewportRect;
        var columnIndices = this.grid.getColumnIndicesInRect(viewportRect, enableGhostCells);
        var isViewportUnscrolledHorizontally = viewportRect != null && viewportRect.left === 0;
        var areGhostColumnsVisible = enableGhostCells && this.grid.isGhostIndex(0, columnIndices.columnIndexEnd);
        var areColumnHeadersLoading = this.hasLoadingOption(this.props.loadingOptions, _regions__WEBPACK_IMPORTED_MODULE_26__["TableLoadingOption"].COLUMN_HEADERS);
        return areGhostColumnsVisible && (isViewportUnscrolledHorizontally || areColumnHeadersLoading);
    };
    Table.prototype.maybeScrollTableIntoView = function () {
        var viewportRect = this.state.viewportRect;
        var tableBottom = this.grid.getCumulativeHeightAt(this.grid.numRows - 1);
        var tableRight = this.grid.getCumulativeWidthAt(this.grid.numCols - 1);
        var nextScrollTop = tableBottom < viewportRect.top + viewportRect.height
            ? // scroll the last row into view
                Math.max(0, tableBottom - viewportRect.height)
            : viewportRect.top;
        var nextScrollLeft = tableRight < viewportRect.left + viewportRect.width
            ? // scroll the last column into view
                Math.max(0, tableRight - viewportRect.width)
            : viewportRect.left;
        this.syncViewportPosition(nextScrollLeft, nextScrollTop);
    };
    Table.prototype.getColumnProps = function (columnIndex) {
        var column = this.childrenArray[columnIndex];
        return column.props;
    };
    Table.prototype.isGuidesShowing = function () {
        return this.state.verticalGuides != null || this.state.horizontalGuides != null;
    };
    Table.prototype.isSelectionModeEnabled = function (selectionMode, selectionModes) {
        if (selectionModes === void 0) { selectionModes = this.props.selectionModes; }
        var _a = this.props, children = _a.children, numRows = _a.numRows;
        var numColumns = react__WEBPACK_IMPORTED_MODULE_3__["Children"].count(children);
        return selectionModes.indexOf(selectionMode) >= 0 && numRows > 0 && numColumns > 0;
    };
    Table.prototype.getEnabledSelectionHandler = function (selectionMode) {
        if (!this.isSelectionModeEnabled(selectionMode)) {
            // If the selection mode isn't enabled, return a callback that
            // will clear the selection. For example, if row selection is
            // disabled, clicking on the row header will clear the table's
            // selection. If all selection modes are enabled, clicking on the
            // same region twice will clear the selection.
            return this.clearSelection;
        }
        else {
            return this.handleSelection;
        }
    };
    Table.prototype.invalidateGrid = function () {
        this.grid = null;
    };
    Table.prototype.validateGrid = function () {
        if (this.grid == null) {
            var _a = this.props, defaultRowHeight = _a.defaultRowHeight, defaultColumnWidth = _a.defaultColumnWidth;
            var _b = this.state, rowHeights = _b.rowHeights, columnWidths = _b.columnWidths;
            this.grid = new _common_grid__WEBPACK_IMPORTED_MODULE_10__["Grid"](rowHeights, columnWidths, _common_grid__WEBPACK_IMPORTED_MODULE_10__["Grid"].DEFAULT_BLEED, defaultRowHeight, defaultColumnWidth);
            this.invokeOnVisibleCellsChangeCallback(this.state.viewportRect);
        }
    };
    /**
     * Renders a `RegionLayer`, applying styles to the regions using the
     * supplied `IRegionStyler`. `RegionLayer` is a `PureRender` component, so
     * the `IRegionStyler` should be a new instance on every render if we
     * intend to redraw the region layer.
     */
    Table.prototype.maybeRenderRegions = function (getRegionStyle, quadrantType) {
        if (this.isGuidesShowing() && !this.state.isReordering) {
            // we want to show guides *and* the selection styles when reordering rows or columns
            return undefined;
        }
        var regionGroups = _regions__WEBPACK_IMPORTED_MODULE_26__["Regions"].joinStyledRegionGroups(this.state.selectedRegions, this.props.styledRegionGroups, this.state.focusedCell);
        return regionGroups.map(function (regionGroup, index) {
            var regionStyles = regionGroup.regions.map(function (region) { return getRegionStyle(region, quadrantType); });
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_layers_regions__WEBPACK_IMPORTED_MODULE_22__["RegionLayer"], { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(regionGroup.className), key: index, regions: regionGroup.regions, regionStyles: regionStyles }));
        });
    };
    Table.prototype.syncViewportPosition = function (nextScrollLeft, nextScrollTop) {
        var viewportRect = this.state.viewportRect;
        var didScrollTopChange = nextScrollTop !== viewportRect.top;
        var didScrollLeftChange = nextScrollLeft !== viewportRect.left;
        if (didScrollTopChange || didScrollLeftChange) {
            // we need to modify the scroll container explicitly for the viewport to shift. in so
            // doing, we add the size of the header elements, which are not technically part of the
            // "grid" concept (the grid only consists of body cells at present).
            if (didScrollTopChange) {
                var topCorrection = this.shouldDisableVerticalScroll() ? 0 : this.columnHeaderElement.clientHeight;
                this.scrollContainerElement.scrollTop = nextScrollTop + topCorrection;
            }
            if (didScrollLeftChange) {
                var leftCorrection = this.shouldDisableHorizontalScroll() || this.rowHeaderElement == null
                    ? 0
                    : this.rowHeaderElement.clientWidth;
                this.scrollContainerElement.scrollLeft = nextScrollLeft + leftCorrection;
            }
            var nextViewportRect = new _common_rect__WEBPACK_IMPORTED_MODULE_14__["Rect"](nextScrollLeft, nextScrollTop, viewportRect.width, viewportRect.height);
            this.updateViewportRect(nextViewportRect);
        }
    };
    Table.prototype.updateLocator = function () {
        this.locator
            .setGrid(this.grid)
            .setNumFrozenRows(this.state.numFrozenRowsClamped)
            .setNumFrozenColumns(this.state.numFrozenColumnsClamped);
    };
    Table.prototype.invokeOnVisibleCellsChangeCallback = function (viewportRect) {
        var columnIndices = this.grid.getColumnIndicesInRect(viewportRect);
        var rowIndices = this.grid.getRowIndicesInRect(viewportRect);
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(this.props.onVisibleCellsChange, rowIndices, columnIndices);
    };
    /**
     * Normalizes RenderMode.BATCH_ON_UPDATE into RenderMode.{BATCH,NONE}. We do
     * this because there are actually multiple updates required before the
     * <Table> is considered fully "mounted," and adding that knowledge to child
     * components would lead to tight coupling. Thus, keep it simple for them.
     */
    Table.prototype.getNormalizedRenderMode = function () {
        var renderMode = this.props.renderMode;
        var shouldBatchRender = renderMode === _common_renderMode__WEBPACK_IMPORTED_MODULE_15__["RenderMode"].BATCH || (renderMode === _common_renderMode__WEBPACK_IMPORTED_MODULE_15__["RenderMode"].BATCH_ON_UPDATE && this.didCompletelyMount);
        return shouldBatchRender ? _common_renderMode__WEBPACK_IMPORTED_MODULE_15__["RenderMode"].BATCH : _common_renderMode__WEBPACK_IMPORTED_MODULE_15__["RenderMode"].NONE;
    };
    /**
     * Returns an object with option keys mapped to their resolved values
     * (falling back to default values as necessary).
     */
    Table.prototype.resolveResizeRowsByApproximateHeightOptions = function (options, rowIndex, columnIndex) {
        var optionKeys = Object.keys(Table_1.resizeRowsByApproximateHeightDefaults);
        var optionReducer = function (agg, key) {
            agg[key] =
                options != null && options[key] != null
                    ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvokeOrValue(options[key], rowIndex, columnIndex)
                    : Table_1.resizeRowsByApproximateHeightDefaults[key];
            return agg;
        };
        var resolvedOptions = optionKeys.reduce(optionReducer, {});
        return resolvedOptions;
    };
    Table.defaultProps = {
        defaultColumnWidth: 150,
        defaultRowHeight: 20,
        enableFocusedCell: false,
        enableGhostCells: false,
        enableMultipleSelection: true,
        enableRowHeader: true,
        loadingOptions: [],
        minColumnWidth: 50,
        minRowHeight: 20,
        numFrozenColumns: 0,
        numFrozenRows: 0,
        numRows: 0,
        renderMode: _common_renderMode__WEBPACK_IMPORTED_MODULE_15__["RenderMode"].BATCH_ON_UPDATE,
        rowHeaderCellRenderer: _headers_rowHeader__WEBPACK_IMPORTED_MODULE_19__["renderDefaultRowHeader"],
        selectionModes: _regions__WEBPACK_IMPORTED_MODULE_26__["SelectionModes"].ALL,
    };
    Table.childContextTypes = _common_context__WEBPACK_IMPORTED_MODULE_7__["columnInteractionBarContextTypes"];
    // these default values for `resizeRowsByApproximateHeight` have been
    // fine-tuned to work well with default Table font styles.
    Table.resizeRowsByApproximateHeightDefaults = {
        getApproximateCharWidth: 8,
        getApproximateLineHeight: 18,
        getCellHorizontalPadding: 2 * _locator__WEBPACK_IMPORTED_MODULE_23__["Locator"].CELL_HORIZONTAL_PADDING,
        getNumBufferLines: 1,
    };
    Table.SHALLOW_COMPARE_PROP_KEYS_BLACKLIST = [
        "selectedRegions",
    ];
    Table.SHALLOW_COMPARE_STATE_KEYS_BLACKLIST = [
        "selectedRegions",
        "viewportRect",
    ];
    Table = Table_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["HotkeysTarget"]
    ], Table);
    return Table;
    var Table_1;
}(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]));

function clampNumFrozenColumns(props) {
    var numFrozenColumns = props.numFrozenColumns;
    var numColumns = react__WEBPACK_IMPORTED_MODULE_3__["Children"].count(props.children);
    return clampPotentiallyNullValue(numFrozenColumns, numColumns);
}
function clampNumFrozenRows(props) {
    var numFrozenRows = props.numFrozenRows, numRows = props.numRows;
    return clampPotentiallyNullValue(numFrozenRows, numRows);
}
// add explicit `| null | undefined`, because the params make more sense in this
// order, and you can't have an optional param precede a required param.
function clampPotentiallyNullValue(value, max) {
    return value == null ? 0 : _common_utils__WEBPACK_IMPORTED_MODULE_16__["Utils"].clamp(value, 0, max);
}


/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/tableBody.js":
/*!**************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/tableBody.js ***!
  \**************************************************************/
/*! exports provided: TableBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_contextMenuTargetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/contextMenuTargetWrapper */ "./node_modules/@blueprintjs/table/lib/esm/common/contextMenuTargetWrapper.js");
/* harmony import */ var _common_renderMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/renderMode */ "./node_modules/@blueprintjs/table/lib/esm/common/renderMode.js");
/* harmony import */ var _interactions_menus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interactions/menus */ "./node_modules/@blueprintjs/table/lib/esm/interactions/menus/index.js");
/* harmony import */ var _interactions_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interactions/selectable */ "./node_modules/@blueprintjs/table/lib/esm/interactions/selectable.js");
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regions */ "./node_modules/@blueprintjs/table/lib/esm/regions.js");
/* harmony import */ var _tableBodyCells__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tableBodyCells */ "./node_modules/@blueprintjs/table/lib/esm/tableBodyCells.js");
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */











var DEEP_COMPARE_KEYS = ["selectedRegions"];
var TableBody = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TableBody, _super);
    function TableBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContextMenu = function (e) {
            var _a = _this.props, grid = _a.grid, onFocusedCell = _a.onFocusedCell, onSelection = _a.onSelection, bodyContextMenuRenderer = _a.bodyContextMenuRenderer, selectedRegions = _a.selectedRegions;
            var numRows = grid.numRows, numCols = grid.numCols;
            if (bodyContextMenuRenderer == null) {
                return undefined;
            }
            var targetRegion = _this.locateClick(e.nativeEvent);
            var nextSelectedRegions = selectedRegions;
            // if the event did not happen within a selected region, clear all
            // selections and select the right-clicked cell.
            var foundIndex = _regions__WEBPACK_IMPORTED_MODULE_9__["Regions"].findContainingRegion(selectedRegions, targetRegion);
            if (foundIndex < 0) {
                nextSelectedRegions = [targetRegion];
                onSelection(nextSelectedRegions);
                // move the focused cell to the new region.
                var nextFocusedCell = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _regions__WEBPACK_IMPORTED_MODULE_9__["Regions"].getFocusCellCoordinatesFromRegion(targetRegion), { focusSelectionIndex: 0 });
                onFocusedCell(nextFocusedCell);
            }
            var menuContext = new _interactions_menus__WEBPACK_IMPORTED_MODULE_7__["MenuContext"](targetRegion, nextSelectedRegions, numRows, numCols);
            var contextMenu = bodyContextMenuRenderer(menuContext);
            return contextMenu == null ? undefined : contextMenu;
        };
        // Callbacks
        // =========
        _this.handleSelectionEnd = function () {
            _this.activationCell = null; // not strictly required, but good practice
        };
        _this.locateClick = function (event) {
            _this.activationCell = _this.props.locator.convertPointToCell(event.clientX, event.clientY);
            return _regions__WEBPACK_IMPORTED_MODULE_9__["Regions"].cell(_this.activationCell.row, _this.activationCell.col);
        };
        _this.locateDrag = function (_event, coords, returnEndOnly) {
            if (returnEndOnly === void 0) { returnEndOnly = false; }
            var start = _this.activationCell;
            var end = _this.props.locator.convertPointToCell(coords.current[0], coords.current[1]);
            return returnEndOnly ? _regions__WEBPACK_IMPORTED_MODULE_9__["Regions"].cell(end.row, end.col) : _regions__WEBPACK_IMPORTED_MODULE_9__["Regions"].cell(start.row, start.col, end.row, end.col);
        };
        return _this;
    }
    // TODO: Does this method need to be public?
    // (see: https://github.com/palantir/blueprint/issues/1617)
    TableBody.cellClassNames = function (rowIndex, columnIndex) {
        return Object(_tableBodyCells__WEBPACK_IMPORTED_MODULE_10__["cellClassNames"])(rowIndex, columnIndex);
    };
    TableBody.prototype.shouldComponentUpdate = function (nextProps) {
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(this.props, nextProps, { exclude: DEEP_COMPARE_KEYS }) ||
            !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].deepCompareKeys(this.props, nextProps, DEEP_COMPARE_KEYS));
    };
    TableBody.prototype.render = function () {
        var _a = this.props, grid = _a.grid, numFrozenColumns = _a.numFrozenColumns, numFrozenRows = _a.numFrozenRows;
        var defaultStyle = grid.getRect().sizeStyle();
        var style = {
            height: numFrozenRows != null ? grid.getCumulativeHeightAt(numFrozenRows - 1) : defaultStyle.height,
            width: numFrozenColumns != null ? grid.getCumulativeWidthAt(numFrozenColumns - 1) : defaultStyle.width,
        };
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_interactions_selectable__WEBPACK_IMPORTED_MODULE_8__["DragSelectable"], { enableMultipleSelection: this.props.enableMultipleSelection, focusedCell: this.props.focusedCell, locateClick: this.locateClick, locateDrag: this.locateDrag, onFocusedCell: this.props.onFocusedCell, onSelection: this.props.onSelection, onSelectionEnd: this.handleSelectionEnd, selectedRegions: this.props.selectedRegions, selectedRegionTransform: this.props.selectedRegionTransform },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_common_contextMenuTargetWrapper__WEBPACK_IMPORTED_MODULE_5__["ContextMenuTargetWrapper"], { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_BODY_VIRTUAL_CLIENT"], _common_classes__WEBPACK_IMPORTED_MODULE_4__["TABLE_CELL_CLIENT"]), renderContextMenu: this.renderContextMenu, style: style },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tableBodyCells__WEBPACK_IMPORTED_MODULE_10__["TableBodyCells"], { cellRenderer: this.props.cellRenderer, focusedCell: this.props.focusedCell, grid: grid, loading: this.props.loading, onCompleteRender: this.props.onCompleteRender, renderMode: this.props.renderMode, columnIndexStart: this.props.columnIndexStart, columnIndexEnd: this.props.columnIndexEnd, rowIndexStart: this.props.rowIndexStart, rowIndexEnd: this.props.rowIndexEnd, viewportRect: this.props.viewportRect }))));
    };
    TableBody.defaultProps = {
        loading: false,
        renderMode: _common_renderMode__WEBPACK_IMPORTED_MODULE_6__["RenderMode"].BATCH,
    };
    return TableBody;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/esm/tableBodyCells.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/esm/tableBodyCells.js ***!
  \*******************************************************************/
/*! exports provided: TableBodyCells, cellClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBodyCells", function() { return TableBodyCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellClassNames", function() { return cellClassNames; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cell_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell/cell */ "./node_modules/@blueprintjs/table/lib/esm/cell/cell.js");
/* harmony import */ var _common_batcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/batcher */ "./node_modules/@blueprintjs/table/lib/esm/common/batcher.js");
/* harmony import */ var _common_classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/classes */ "./node_modules/@blueprintjs/table/lib/esm/common/classes.js");
/* harmony import */ var _common_rect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/rect */ "./node_modules/@blueprintjs/table/lib/esm/common/rect.js");
/* harmony import */ var _common_renderMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/renderMode */ "./node_modules/@blueprintjs/table/lib/esm/common/renderMode.js");
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var SHALLOW_COMPARE_BLACKLIST = ["viewportRect"];
/**
 * We don't want to reset the batcher when this set of keys changes. Any other
 * changes should reset the batcher's internal cache.
 */
var BATCHER_RESET_PROP_KEYS_BLACKLIST = [
    "columnIndexEnd",
    "columnIndexStart",
    "rowIndexEnd",
    "rowIndexStart",
];
var TableBodyCells = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TableBodyCells, _super);
    function TableBodyCells() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.batcher = new _common_batcher__WEBPACK_IMPORTED_MODULE_5__["Batcher"]();
        // Cell renderers
        // ==============
        _this.renderNewCell = function (rowIndex, columnIndex) {
            var _a = _this.props, columnIndexEnd = _a.columnIndexEnd, grid = _a.grid, rowIndexEnd = _a.rowIndexEnd;
            var extremaClasses = grid.getExtremaClasses(rowIndex, columnIndex, rowIndexEnd, columnIndexEnd);
            var isGhost = grid.isGhostIndex(rowIndex, columnIndex);
            return _this.renderCell(rowIndex, columnIndex, extremaClasses, isGhost);
        };
        _this.renderCell = function (rowIndex, columnIndex, extremaClasses, isGhost) {
            var _a = _this.props, cellRenderer = _a.cellRenderer, focusedCell = _a.focusedCell, loading = _a.loading, grid = _a.grid;
            var baseCell = isGhost ? Object(_cell_cell__WEBPACK_IMPORTED_MODULE_4__["emptyCellRenderer"])() : cellRenderer(rowIndex, columnIndex);
            var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(cellClassNames(rowIndex, columnIndex), extremaClasses, (_b = {},
                _b[_common_classes__WEBPACK_IMPORTED_MODULE_6__["TABLE_CELL_GHOST"]] = isGhost,
                _b[_common_classes__WEBPACK_IMPORTED_MODULE_6__["TABLE_CELL_LEDGER_ODD"]] = rowIndex % 2 === 1,
                _b[_common_classes__WEBPACK_IMPORTED_MODULE_6__["TABLE_CELL_LEDGER_EVEN"]] = rowIndex % 2 === 0,
                _b), baseCell.props.className);
            var key = TableBodyCells.cellReactKey(rowIndex, columnIndex);
            var rect = isGhost ? grid.getGhostCellRect(rowIndex, columnIndex) : grid.getCellRect(rowIndex, columnIndex);
            var cellLoading = baseCell.props.loading != null ? baseCell.props.loading : loading;
            var style = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, baseCell.props.style, _common_rect__WEBPACK_IMPORTED_MODULE_7__["Rect"].style(rect));
            var isFocused = focusedCell != null && focusedCell.row === rowIndex && focusedCell.col === columnIndex;
            return react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](baseCell, { className: className, key: key, isFocused: isFocused, loading: cellLoading, style: style });
            var _b;
        };
        // Other
        // =====
        _this.didViewportRectChange = function (nextViewportRect, currViewportRect) {
            if (nextViewportRect == null && currViewportRect == null) {
                return false;
            }
            else if (nextViewportRect == null || currViewportRect == null) {
                return true;
            }
            else {
                return !nextViewportRect.equals(currViewportRect);
            }
        };
        return _this;
    }
    TableBodyCells.cellReactKey = function (rowIndex, columnIndex) {
        return "cell-" + rowIndex + "-" + columnIndex;
    };
    TableBodyCells.prototype.componentDidMount = function () {
        this.maybeInvokeOnCompleteRender();
    };
    TableBodyCells.prototype.shouldComponentUpdate = function (nextProps) {
        return (!_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(nextProps, this.props, { exclude: SHALLOW_COMPARE_BLACKLIST }) ||
            // "viewportRect" is not a plain object, so we can't just deep
            // compare; we need custom logic.
            this.didViewportRectChange(nextProps.viewportRect, this.props.viewportRect));
    };
    TableBodyCells.prototype.componentWillUpdate = function (nextProps) {
        var resetKeysBlacklist = { exclude: BATCHER_RESET_PROP_KEYS_BLACKLIST };
        var shouldResetBatcher = !_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].shallowCompareKeys(this.props, nextProps, resetKeysBlacklist);
        if (shouldResetBatcher) {
            this.batcher.reset();
        }
    };
    TableBodyCells.prototype.componentDidUpdate = function () {
        this.maybeInvokeOnCompleteRender();
    };
    TableBodyCells.prototype.componentWillUnmount = function () {
        this.batcher.cancelOutstandingCallback();
    };
    TableBodyCells.prototype.render = function () {
        var renderMode = this.props.renderMode;
        var cells = renderMode === _common_renderMode__WEBPACK_IMPORTED_MODULE_8__["RenderMode"].BATCH ? this.renderBatchedCells() : this.renderAllCells();
        return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "pt-table-body-cells" }, cells);
    };
    // Render modes
    // ============
    TableBodyCells.prototype.renderBatchedCells = function () {
        var _this = this;
        var _a = this.props, columnIndexEnd = _a.columnIndexEnd, columnIndexStart = _a.columnIndexStart, rowIndexEnd = _a.rowIndexEnd, rowIndexStart = _a.rowIndexStart;
        // render cells in batches
        this.batcher.startNewBatch();
        for (var rowIndex = rowIndexStart; rowIndex <= rowIndexEnd; rowIndex++) {
            for (var columnIndex = columnIndexStart; columnIndex <= columnIndexEnd; columnIndex++) {
                this.batcher.addArgsToBatch(rowIndex, columnIndex);
            }
        }
        this.batcher.removeOldAddNew(this.renderNewCell);
        if (!this.batcher.isDone()) {
            this.batcher.idleCallback(function () { return _this.forceUpdate(); });
        }
        var cells = this.batcher.getList();
        return cells;
    };
    TableBodyCells.prototype.renderAllCells = function () {
        var _a = this.props, columnIndexEnd = _a.columnIndexEnd, columnIndexStart = _a.columnIndexStart, rowIndexEnd = _a.rowIndexEnd, rowIndexStart = _a.rowIndexStart;
        var cells = [];
        var cellsArgs = [];
        for (var rowIndex = rowIndexStart; rowIndex <= rowIndexEnd; rowIndex++) {
            for (var columnIndex = columnIndexStart; columnIndex <= columnIndexEnd; columnIndex++) {
                cells.push(this.renderNewCell(rowIndex, columnIndex));
                cellsArgs.push([rowIndex, columnIndex]);
            }
        }
        // pretend we did an entire rendering pass using the batcher. that way,
        // if we switch from `RenderMode.NONE` to `RenderMode.BATCH`, we don't
        // have to re-paint every cell still in view.
        this.batcher.setList(cellsArgs, cells);
        return cells;
    };
    // Callbacks
    // =========
    TableBodyCells.prototype.maybeInvokeOnCompleteRender = function () {
        var _a = this.props, onCompleteRender = _a.onCompleteRender, renderMode = _a.renderMode;
        if (renderMode === _common_renderMode__WEBPACK_IMPORTED_MODULE_8__["RenderMode"].NONE || (renderMode === _common_renderMode__WEBPACK_IMPORTED_MODULE_8__["RenderMode"].BATCH && this.batcher.isDone())) {
            _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Utils"].safeInvoke(onCompleteRender);
        }
    };
    TableBodyCells.defaultProps = {
        renderMode: _common_renderMode__WEBPACK_IMPORTED_MODULE_8__["RenderMode"].BATCH,
    };
    return TableBodyCells;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));

/**
 * Returns the array of class names that must be applied to each table
 * cell so that we can locate any cell based on its coordinate.
 */
function cellClassNames(rowIndex, columnIndex) {
    return [_common_classes__WEBPACK_IMPORTED_MODULE_6__["rowCellIndexClass"](rowIndex), _common_classes__WEBPACK_IMPORTED_MODULE_6__["columnCellIndexClass"](columnIndex)];
}


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria)-.*))$/i;
var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(RegExp.prototype.test.bind(reactPropsRegex));

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=is-prop-valid.esm.js.map


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);
//# sourceMappingURL=memoize.esm.js.map


/***/ }),

/***/ "./node_modules/create-emotion-styled/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/create-emotion-styled/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var channel = '__EMOTION_THEMING__';

// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

var _contextTypes;
var contextTypes = (_contextTypes = {}, _contextTypes[channel] = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, _contextTypes);

function setTheme(theme) {
  this.setState({
    theme: theme
  });
}
var testPickPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"];
var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};
var testAlwaysTrue = function testAlwaysTrue() {
  return true;
};
var pickAssign = function pickAssign(testFn, target) {
  var i = 2;
  var length = arguments.length;

  for (; i < length; i++) {
    var source = arguments[i];

    var _key = void 0;

    for (_key in source) {
      if (testFn(_key)) {
        target[_key] = source[_key];
      }
    }
  }

  return target;
};

function createEmotionStyled(emotion, view) {
  var _createStyled = function createStyled(tag, options) {
    if (false) {}

    var staticClassName;
    var identifierName;
    var stableClassName;
    var shouldForwardProp;

    if (options !== undefined) {
      staticClassName = options.e;
      identifierName = options.label;
      stableClassName = options.target;
      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
        options.shouldForwardProp(propName);
      } : options.shouldForwardProp;
    }

    var isReal = tag.__emotion_real === tag;
    var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;

    if (typeof shouldForwardProp !== 'function') {
      shouldForwardProp = typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase() ? testPickPropsOnStringTag : testPickPropsOnComponent;
    }

    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (staticClassName === undefined) {
        if (args[0] == null || args[0].raw === undefined) {
          styles.push.apply(styles, args);
        } else {
          styles.push(args[0][0]);
          var len = args.length;
          var i = 1;

          for (; i < len; i++) {
            styles.push(args[i], args[0][i]);
          }
        }
      }

      var Styled =
      /*#__PURE__*/
      function (_view$Component) {
        _inheritsLoose(Styled, _view$Component);

        function Styled() {
          return _view$Component.apply(this, arguments) || this;
        }

        var _proto = Styled.prototype;

        _proto.componentWillMount = function componentWillMount() {
          if (this.context[channel] !== undefined) {
            this.unsubscribe = this.context[channel].subscribe(setTheme.bind(this));
          }
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          if (this.unsubscribe !== undefined) {
            this.context[channel].unsubscribe(this.unsubscribe);
          }
        };

        _proto.render = function render() {
          var props = this.props,
              state = this.state;
          this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
            theme: state !== null && state.theme || props.theme || {}
          });
          var className = '';
          var classInterpolations = [];

          if (props.className) {
            if (staticClassName === undefined) {
              className += emotion.getRegisteredStyles(classInterpolations, props.className);
            } else {
              className += props.className + " ";
            }
          }

          if (staticClassName === undefined) {
            className += emotion.css.apply(this, styles.concat(classInterpolations));
          } else {
            className += staticClassName;
          }

          if (stableClassName !== undefined) {
            className += " " + stableClassName;
          }

          return view.createElement(baseTag, // $FlowFixMe
          pickAssign(shouldForwardProp, {}, props, {
            className: className,
            ref: props.innerRef
          }));
        };

        return Styled;
      }(view.Component);

      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";

      if (tag.defaultProps !== undefined) {
        // $FlowFixMe
        Styled.defaultProps = tag.defaultProps;
      }

      Styled.contextTypes = contextTypes;
      Styled.__emotion_styles = styles;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_real = Styled;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        enumerable: false,
        value: function value() {
          if (false) {} // $FlowFixMe


          return "." + stableClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return _createStyled(nextTag, nextOptions !== undefined ? // $FlowFixMe
        pickAssign(testAlwaysTrue, {}, options, nextOptions) : options).apply(void 0, styles);
      };

      return Styled;
    };
  };

  if (false) {}

  return _createStyled;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotionStyled);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/react-emotion/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/react-emotion/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: sheet, useStylisPlugin, registered, inserted, css, keyframes, injectGlobal, fontFace, getRegisteredStyles, merge, cx, hydrate, flush, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["sheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStylisPlugin", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["useStylisPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registered", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["registered"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inserted", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["inserted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["getRegisteredStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["cx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["flush"]; });

/* harmony import */ var create_emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! create-emotion-styled */ "./node_modules/create-emotion-styled/dist/index.esm.js");





var index = Object(create_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(emotion__WEBPACK_IMPORTED_MODULE_1__, react__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.esm.js.map


/***/ })

}]);
//# sourceMappingURL=3.chunk.js.map