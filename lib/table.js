module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 244);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/popup");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/resize-event");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tooltip");

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(245);


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _table = __webpack_require__(246);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_table2.default.install = function (Vue) {
  Vue.component(_table2.default.name, _table2.default);
};

exports.default = _table2.default;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c34f880_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__ = __webpack_require__(259);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c34f880_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _normalizeWheel = __webpack_require__(248);

var _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      var normalized = (0, _normalizeWheel2.default)(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

exports.default = {
  bind: function bind(el, binding) {
    mousewheel(el, binding.value);
  }
};

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = require("normalize-wheel");

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _debounce = __webpack_require__(14);

var _debounce2 = _interopRequireDefault(_debounce);

var _merge = __webpack_require__(9);

var _merge2 = _interopRequireDefault(_merge);

var _util = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortData = function sortData(data, states) {
  var sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return (0, _util.orderBy)(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};

var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[(0, _util.getRowIdentity)(row, rowKey)] = { row: row, index: index };
  });
  return arrayMap;
};

var toggleRowSelection = function toggleRowSelection(states, row, selected) {
  var changed = false;
  var selection = states.selection;
  var index = selection.indexOf(row);
  if (typeof selected === 'undefined') {
    if (index === -1) {
      selection.push(row);
      changed = true;
    } else {
      selection.splice(index, 1);
      changed = true;
    }
  } else {
    if (selected && index === -1) {
      selection.push(row);
      changed = true;
    } else if (!selected && index > -1) {
      selection.splice(index, 1);
      changed = true;
    }
  }

  return changed;
};

var toggleRowExpansion = function toggleRowExpansion(states, row, expanded) {
  var changed = false;
  var expandRows = states.expandRows;
  if (typeof expanded !== 'undefined') {
    var index = expandRows.indexOf(row);
    if (expanded) {
      if (index === -1) {
        expandRows.push(row);
        changed = true;
      }
    } else {
      if (index !== -1) {
        expandRows.splice(index, 1);
        changed = true;
      }
    }
  } else {
    var _index = expandRows.indexOf(row);
    if (_index === -1) {
      expandRows.push(row);
      changed = true;
    } else {
      expandRows.splice(_index, 1);
      changed = true;
    }
  }

  return changed;
};

var TableStore = function TableStore(table) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!table) {
    throw new Error('Table is required.');
  }
  this.table = table;

  this.states = {
    rowKey: null,
    _columns: [],
    originColumns: [],
    columns: [],
    fixedColumns: [],
    rightFixedColumns: [],
    leafColumns: [],
    fixedLeafColumns: [],
    rightFixedLeafColumns: [],
    leafColumnsLength: 0,
    fixedLeafColumnsLength: 0,
    rightFixedLeafColumnsLength: 0,
    isComplex: false,
    filteredData: null,
    data: null,
    sortingColumn: null,
    sortProp: null,
    sortOrder: null,
    isAllSelected: false,
    selection: [],
    reserveSelection: false,
    selectable: null,
    currentRow: null,
    hoverRow: null,
    filters: {},
    expandRows: [],
    defaultExpandAll: false,
    selectOnIndeterminate: false
  };

  for (var prop in initialState) {
    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
      this.states[prop] = initialState[prop];
    }
  }
};

TableStore.prototype.mutations = {
  setData: function setData(states, data) {
    var _this = this;

    var dataInstanceChanged = states._data !== data;
    states._data = data;

    Object.keys(states.filters).forEach(function (columnId) {
      var values = states.filters[columnId];
      if (!values || values.length === 0) return;
      var column = (0, _util.getColumnById)(_this.states, columnId);
      if (column && column.filterMethod) {
        data = data.filter(function (row) {
          return values.some(function (value) {
            return column.filterMethod.call(null, value, row, column);
          });
        });
      }
    });

    states.filteredData = data;
    states.data = sortData(data || [], states);

    if (states["simulate"]) {
      this.updateCurrentRow();
    }

    if (!states.reserveSelection) {
      if (states.clearSel) {
        if (dataInstanceChanged) {
          this.clearSelection();
        } else {
          this.cleanSelection();
        }
      }
      this.updateAllSelected();
    } else {
      var rowKey = states.rowKey;
      if (rowKey) {
        var selection = states.selection;
        var selectedMap = getKeysMap(selection, rowKey);

        states.data.forEach(function (row) {
          var rowId = (0, _util.getRowIdentity)(row, rowKey);
          var rowInfo = selectedMap[rowId];
          if (rowInfo) {
            selection[rowInfo.index] = row;
          }
        });

        this.updateAllSelected();
      } else {
        console.warn('WARN: rowKey is required when reserve-selection is enabled.');
      }
    }

    var defaultExpandAll = states.defaultExpandAll;
    if (defaultExpandAll) {
      this.states.expandRows = (states.data || []).slice(0);
    }

    _vue2.default.nextTick(function () {
      return _this.table.updateScrollY();
    });
  },
  changeSortCondition: function changeSortCondition(states, options) {
    var _this2 = this;

    states.data = sortData(states.filteredData || states._data || [], states);

    if (!options || !options.silent) {
      this.table.$emit('sort-change', {
        column: this.states.sortingColumn,
        prop: this.states.sortProp,
        order: this.states.sortOrder
      });
    }

    _vue2.default.nextTick(function () {
      return _this2.table.updateScrollY();
    });
  },
  filterChange: function filterChange(states, options) {
    var _this3 = this;

    var column = options.column,
        values = options.values,
        silent = options.silent;

    if (values && !Array.isArray(values)) {
      values = [values];
    }

    var prop = column.property;
    var filters = {};

    if (prop) {
      states.filters[column.id] = values;
      filters[column.columnKey || column.id] = values;
    }

    var data = states._data;

    Object.keys(states.filters).forEach(function (columnId) {
      var values = states.filters[columnId];
      if (!values || values.length === 0) return;
      var column = (0, _util.getColumnById)(_this3.states, columnId);
      if (column && column.filterMethod) {
        data = data.filter(function (row) {
          return values.some(function (value) {
            return column.filterMethod.call(null, value, row, column);
          });
        });
      }
    });

    states.filteredData = data;
    states.data = sortData(data, states);

    if (!silent) {
      this.table.$emit('filter-change', filters);
    }

    _vue2.default.nextTick(function () {
      return _this3.table.updateScrollY();
    });
  },
  insertColumn: function insertColumn(states, column, index, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column);
    } else {
      array.push(column);
    }

    if (column.type === 'selection') {
      states.selectable = column.selectable;
      states.reserveSelection = column.reserveSelection;
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics insert column
      this.scheduleLayout();
    }
  },
  removeColumn: function removeColumn(states, column, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }
    if (array) {
      array.splice(array.indexOf(column), 1);
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics remove column
      this.scheduleLayout();
    }
  },
  setHoverRow: function setHoverRow(states, row) {
    states.hoverRow = row;
  },
  setCurrentRow: function setCurrentRow(states, row) {
    var oldCurrentRow = states.currentRow;
    states.currentRow = row;

    if (oldCurrentRow !== row) {
      this.table.$emit('current-change', row, oldCurrentRow);
    }
  },
  rowSelectedChanged: function rowSelectedChanged(states, row) {
    var changed = toggleRowSelection(states, row);
    var selection = states.selection;

    if (changed) {
      var table = this.table;
      table.$emit('selection-change', selection ? selection.slice() : []);
      table.$emit('select', selection, row);
    }

    this.updateAllSelected();
  },


  toggleAllSelection: (0, _debounce2.default)(10, function (states) {
    var data = states.data || [];
    if (data.length === 0) return;
    var selection = this.states.selection;
    // when only some rows are selected (but not all), select or deselect all of them
    // depending on the value of selectOnIndeterminate
    var all = true;
    for (var i = 0, len = data.length; i < len; i++) {
      if (selection.indexOf(data[i]) == -1) {
        all = false;break;
      }
    }
    var value = states.selectOnIndeterminate ? states.simulate ? !all : !states.isAllSelected : !(states.isAllSelected || selection.length);
    var selectionChanged = false;

    data.forEach(function (item, index) {
      if (states.selectable) {
        if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      }
    });

    var table = this.table;
    if (selectionChanged) {
      table.$emit('selection-change', selection ? selection.slice() : []);
    }
    table.$emit('select-all', !states.isAllSelected);
    states.isAllSelected = data.length == states.total ? value : selection.length == states.total ? true : false;
  })
};

var doFlattenColumns = function doFlattenColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

TableStore.prototype.updateColumns = function () {
  var states = this.states;
  var _columns = states._columns || [];
  states.fixedColumns = _columns.filter(function (column) {
    return column.fixed === true || column.fixed === 'left';
  });
  states.rightFixedColumns = _columns.filter(function (column) {
    return column.fixed === 'right';
  });

  if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
    _columns[0].fixed = true;
    states.fixedColumns.unshift(_columns[0]);
  }

  var notFixedColumns = _columns.filter(function (column) {
    return !column.fixed;
  });
  states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

  var leafColumns = doFlattenColumns(notFixedColumns);
  var fixedLeafColumns = doFlattenColumns(states.fixedColumns);
  var rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

  states.leafColumnsLength = leafColumns.length;
  states.fixedLeafColumnsLength = fixedLeafColumns.length;
  states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

  states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
  states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
};

TableStore.prototype.isSelected = function (row) {
  return (this.states.selection || []).indexOf(row) > -1;
};

TableStore.prototype.clearSelection = function () {
  var states = this.states;
  states.isAllSelected = false;
  var oldSelection = states.selection;
  if (states.selection.length) {
    states.selection = [];
  }
  if (oldSelection.length > 0) {
    this.table.$emit('selection-change', states.selection ? states.selection.slice() : []);
  }
};

TableStore.prototype.setExpandRowKeys = function (rowKeys) {
  var expandRows = [];
  var data = this.states.data;
  var rowKey = this.states.rowKey;
  if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
  var keysMap = getKeysMap(data, rowKey);
  rowKeys.forEach(function (key) {
    var info = keysMap[key];
    if (info) {
      expandRows.push(info.row);
    }
  });

  this.states.expandRows = expandRows;
};

TableStore.prototype.toggleRowSelection = function (row, selected) {
  var changed = toggleRowSelection(this.states, row, selected);
  if (changed) {
    this.table.$emit('selection-change', this.states.selection ? this.states.selection.slice() : []);
  }
};

TableStore.prototype.toggleRowExpansion = function (row, expanded) {
  var changed = toggleRowExpansion(this.states, row, expanded);
  if (changed) {
    this.table.$emit('expand-change', row, this.states.expandRows);
    this.scheduleLayout();
  }
};

TableStore.prototype.isRowExpanded = function (row) {
  var _states = this.states,
      _states$expandRows = _states.expandRows,
      expandRows = _states$expandRows === undefined ? [] : _states$expandRows,
      rowKey = _states.rowKey;

  if (rowKey) {
    var expandMap = getKeysMap(expandRows, rowKey);
    return !!expandMap[(0, _util.getRowIdentity)(row, rowKey)];
  }
  return expandRows.indexOf(row) !== -1;
};

TableStore.prototype.cleanSelection = function () {
  var selection = this.states.selection || [];
  var data = this.states.data;
  var rowKey = this.states.rowKey;
  var deleted = void 0;
  if (rowKey) {
    deleted = [];
    var selectedMap = getKeysMap(selection, rowKey);
    var dataMap = getKeysMap(data, rowKey);
    for (var key in selectedMap) {
      if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
        deleted.push(selectedMap[key].row);
      }
    }
  } else {
    deleted = selection.filter(function (item) {
      return data.indexOf(item) === -1;
    });
  }

  deleted.forEach(function (deletedItem) {
    selection.splice(selection.indexOf(deletedItem), 1);
  });

  if (deleted.length) {
    this.table.$emit('selection-change', selection ? selection.slice() : []);
  }
};

TableStore.prototype.clearFilter = function () {
  var states = this.states;
  var _table$$refs = this.table.$refs,
      tableHeader = _table$$refs.tableHeader,
      fixedTableHeader = _table$$refs.fixedTableHeader,
      rightFixedTableHeader = _table$$refs.rightFixedTableHeader;

  var panels = {};

  if (tableHeader) panels = (0, _merge2.default)(panels, tableHeader.filterPanels);
  if (fixedTableHeader) panels = (0, _merge2.default)(panels, fixedTableHeader.filterPanels);
  if (rightFixedTableHeader) panels = (0, _merge2.default)(panels, rightFixedTableHeader.filterPanels);

  var keys = Object.keys(panels);
  if (!keys.length) return;

  keys.forEach(function (key) {
    panels[key].filteredValue = [];
  });

  states.filters = {};

  this.commit('filterChange', {
    column: {},
    values: [],
    silent: true
  });
};

TableStore.prototype.clearSort = function () {
  var states = this.states;
  if (!states.sortingColumn) return;
  states.sortingColumn.order = null;
  states.sortProp = null;
  states.sortOrder = null;

  this.commit('changeSortCondition', {
    silent: true
  });
};

//判断选择是否全选，并更新显示状态
TableStore.prototype.updateAllSelected = function () {
  var states = this.states;
  var selection = states.selection,
      rowKey = states.rowKey,
      selectable = states.selectable,
      data = states.data;

  if (!data || data.length === 0) {
    states.isAllSelected = false;
    return;
  }

  var selectedMap = void 0;
  if (rowKey) {
    selectedMap = getKeysMap(states.selection, rowKey);
  }

  var isSelected = function isSelected(row) {
    if (selectedMap) {
      return !!selectedMap[(0, _util.getRowIdentity)(row, rowKey)];
    } else {
      return selection.indexOf(row) !== -1;
    }
  };

  if (selection.length < states.total) {
    states.isAllSelected = false;
  } else {
    var isAllSelected = true;
    var selectedCount = 0;
    for (var i = 0, j = data.length; i < j; i++) {
      var item = data[i];
      var isRowSelectable = selectable && selectable.call(null, item, i);
      if (!isSelected(item)) {
        if (!selectable || isRowSelectable) {
          isAllSelected = false;
          break;
        }
      } else {
        selectedCount++;
      }
    }
    if (selectedCount === 0) isAllSelected = false;
    states.isAllSelected = isAllSelected;
  }
};

TableStore.prototype.scheduleLayout = function (updateColumns) {
  if (updateColumns) {
    this.updateColumns();
  }
  this.table.debouncedUpdateLayout();
};

TableStore.prototype.setCurrentRowKey = function (key) {
  var states = this.states;
  var rowKey = states.rowKey;
  if (!rowKey) throw new Error('[Table] row-key should not be empty.');
  var data = states.data || [];
  var keysMap = getKeysMap(data, rowKey);
  var info = keysMap[key];
  if (info) {
    states.currentRow = info.row;
  }
};

TableStore.prototype.updateCurrentRow = function () {
  var states = this.states;
  var table = this.table;
  var data = states.data || [];
  var oldCurrentRow = states.currentRow;

  if (data.indexOf(oldCurrentRow) === -1) {
    states.currentRow = null;

    if (states.currentRow !== oldCurrentRow) {
      table.$emit('current-change', null, oldCurrentRow);
    }
  }
};

TableStore.prototype.commit = function (name) {
  var mutations = this.mutations;
  if (mutations[name]) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error('Action not found: ' + name);
  }
};

exports.default = TableStore;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _scrollbarWidth = __webpack_require__(39);

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableLayout = function () {
  function TableLayout(options) {
    _classCallCheck(this, TableLayout);

    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = null;
    this.fit = true;
    this.showHeader = true;

    this.height = null;
    this.scrollX = false;
    this.scrollY = false;
    this.bodyWidth = null;
    this.fixedWidth = null;
    this.rightFixedWidth = null;
    this.tableHeight = null;
    this.headerHeight = 28; // Table Header Height
    this.appendHeight = 0; // Append Slot Height
    this.footerHeight = 44; // Table Footer Height
    this.viewportHeight = null; // Table Height - Scroll Bar Height
    this.bodyHeight = null; // Table Height - Table Header Height
    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
    this.gutterWidth = (0, _scrollbarWidth2.default)();

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    if (!this.table) {
      throw new Error('table is required for Table Layout');
    }
    if (!this.store) {
      throw new Error('store is required for Table Layout');
    }
  }

  TableLayout.prototype.updateScrollY = function updateScrollY() {
    var height = this.height;
    if (typeof height !== 'string' && typeof height !== 'number') return;
    var bodyWrapper = this.table.bodyWrapper;
    if (this.table.$el && bodyWrapper) {
      var body = bodyWrapper.querySelector('.el-table__body');
      this.scrollY = body.offsetHeight > this.bodyHeight;
    }
  };

  TableLayout.prototype.setHeight = function setHeight(value) {
    var _this = this;

    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

    if (_vue2.default.prototype.$isServer) return;
    var el = this.table.$el;
    if (typeof value === 'string' && /^\d+$/.test(value)) {
      value = Number(value);
    }
    this.height = value;

    if (!el && (value || value === 0)) return _vue2.default.nextTick(function () {
      return _this.setHeight(value, prop);
    });

    if (typeof value === 'number') {
      el.style[prop] = value + 'px';

      this.updateElsHeight();
    } else if (typeof value === 'string') {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  };

  TableLayout.prototype.setMaxHeight = function setMaxHeight(value) {
    return this.setHeight(value, 'max-height');
  };

  TableLayout.prototype.updateElsHeight = function updateElsHeight() {
    var _this2 = this;

    if (!this.table.$ready) return _vue2.default.nextTick(function () {
      return _this2.updateElsHeight();
    });
    var _table$$refs = this.table.$refs,
        headerWrapper = _table$$refs.headerWrapper,
        appendWrapper = _table$$refs.appendWrapper,
        footerWrapper = _table$$refs.footerWrapper;

    this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;

    if (this.showHeader && !headerWrapper) return;
    var headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight;
    if (this.showHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
      return _vue2.default.nextTick(function () {
        return _this2.updateElsHeight();
      });
    }
    var tableHeight = this.tableHeight = this.table.$el.clientHeight;
    if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
      var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
      this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
    }
    this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight;

    var noData = !this.table.data || this.table.data.length === 0;
    this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;

    this.updateScrollY();
    this.notifyObservers('scrollable');
  };

  TableLayout.prototype.getFlattenColumns = function getFlattenColumns() {
    var flattenColumns = [];
    var columns = this.table.columns;
    columns.forEach(function (column) {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });

    return flattenColumns;
  };

  TableLayout.prototype.updateColumnsWidth = function updateColumnsWidth() {
    var fit = this.fit;
    var bodyWidth = this.table.$el.clientWidth;
    var bodyMinWidth = 0;

    var flattenColumns = this.getFlattenColumns();
    var flexColumns = flattenColumns.filter(function (column) {
      return typeof column.width !== 'number';
    });

    flattenColumns.forEach(function (column) {
      // Clean those columns whose width changed from flex to unflex
      if (typeof column.width === 'number' && column.realWidth) column.realWidth = null;
    });

    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach(function (column) {
        bodyMinWidth += column.width || column.minWidth || 80;
      });

      var scrollYWidth = this.scrollY ? this.gutterWidth : 0;

      if (bodyMinWidth <= bodyWidth - scrollYWidth) {
        // DON'T HAVE SCROLL BAR
        this.scrollX = false;

        var totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;

        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          var allColumnsWidth = flexColumns.reduce(function (prev, column) {
            return prev + (column.minWidth || 80);
          }, 0);
          var flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          var noneFirstWidth = 0;

          flexColumns.forEach(function (column, index) {
            if (index === 0) return;
            var flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = (column.minWidth || 80) + flexWidth;
          });

          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        // HAVE HORIZONTAL SCROLL BAR
        this.scrollX = true;
        flexColumns.forEach(function (column) {
          column.realWidth = column.minWidth;
        });
      }

      this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
    } else {
      flattenColumns.forEach(function (column) {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = column.width || column.minWidth;
        }

        bodyMinWidth += column.realWidth;
      });
      this.scrollX = bodyMinWidth > bodyWidth;

      this.bodyWidth = bodyMinWidth;
    }

    var fixedColumns = this.store.states.fixedColumns;

    if (fixedColumns.length > 0) {
      var fixedWidth = 0;
      fixedColumns.forEach(function (column) {
        fixedWidth += column.realWidth || column.width;
      });

      this.fixedWidth = fixedWidth;
    }

    var rightFixedColumns = this.store.states.rightFixedColumns;
    if (rightFixedColumns.length > 0) {
      var rightFixedWidth = 0;
      rightFixedColumns.forEach(function (column) {
        rightFixedWidth += column.realWidth || column.width;
      });

      this.rightFixedWidth = rightFixedWidth;
    }

    this.notifyObservers('columns');
  };

  TableLayout.prototype.addObserver = function addObserver(observer) {
    this.observers.push(observer);
  };

  TableLayout.prototype.removeObserver = function removeObserver(observer) {
    var index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  };

  TableLayout.prototype.notifyObservers = function notifyObservers(event) {
    var _this3 = this;

    var observers = this.observers;
    observers.forEach(function (observer) {
      switch (event) {
        case 'columns':
          observer.onColumnsChange(_this3);
          break;
        case 'scrollable':
          observer.onScrollableChange(_this3);
          break;
        default:
          throw new Error('Table Layout don\'t have event ' + event + '.');
      }
    });
  };

  return TableLayout;
}();

exports.default = TableLayout;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f471852_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_vue__ = __webpack_require__(253);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f471852_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  name: 'ElTableCell',

  render: function render(h) {
    return this.config.column.renderCell.call(this.config.renderProxy, h, {
      row: this.config.row,
      column: this.config.column,
      $index: this.config.$index,
      store: this.store,
      _self: this.config._self
    }, this.config.columnsHidden);
  },


  props: {
    store: {
      required: true
    },
    config: Object
  }
};

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"el-table__body",attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('colgroup',_vm._l((_vm.columns),function(col){return _c('col',{key:col.id,attrs:{"name":col.id,"width":col.width}})})),_c('tbody',{on:{"click":_vm.handleClick,"dblclick":_vm.handleDoubleClick,"contextmenu":_vm.handleContextMenu}},_vm._l((_vm.data),function(row,$index){return _c('tr',{key:_vm.trKey(row, $index),class:_vm.trClass(row, $index),style:(_vm.trStyle(row, $index)),attrs:{"index":$index},on:{"mouseenter":function($event){_vm.handleMouseEnter($index)},"mouseleave":_vm.handleMouseLeave}},_vm._l((_vm.columns),function(column,cellIndex){return (_vm.getSpan(row, column, $index, cellIndex))?_c('td',{class:_vm.getCellClass($index, cellIndex, row, column),style:(_vm.getCellStyle($index, cellIndex, row, column)),attrs:{"rowspan":column._rowspan,"colspan":column._colspan},on:{"mouseenter":function($event){_vm.handleCellMouseEnter($event, row)},"mouseleave":_vm.handleCellMouseLeave}},[(column.type=='selection'||column.type=='index'||column.type=='expand')?_c('ElTableCell',{attrs:{"store":_vm.store,"config":_vm.config(row,column,$index)}}):(_vm.jgtype(column,'button'))?_c('div',{class:_vm.columnClass,style:(_vm.columnStyle(column))},[(_vm.btnShow(row,column.config.show,column))?_c('el-button',{attrs:{"size":"mini","type":column.config.theme,"disabled":_vm.btnDisable(row,column.config.disable)},on:{"click":function($event){_vm.handleColumnBtnClick($event,column,$index)}}},[_vm._v(_vm._s(column.config.text))]):_vm._e()],1):(_vm.jgtype(column,'textbutton'))?_c('div',{class:_vm.columnClass,style:(_vm.columnStyle(column))},[_vm._v("\n        \t\t\t\t"+_vm._s(row[column.keys])+"\n        \t\t\t\t"),(_vm.btnShow(row,column.config.switch))?_c('el-button',{attrs:{"size":"mini","type":column.config.theme,"disabled":_vm.btnDisable(row,column.config.disable)},on:{"click":function($event){_vm.handleColumnBtnClick($event,column,$index)}}},[_vm._v(_vm._s(column.config.text))]):_vm._e()],1):(_vm.defaultJduge(row))?_c('ElTableCell',{attrs:{"store":_vm.store,"config":_vm.config(row,column,$index)}}):_c('div',{class:_vm.columnClass,style:(_vm.columnStyle(column))},[(_vm.jgtype(column,'multiSelection'))?_c('span',[_vm._v(_vm._s(row[column.keys][row[column.keys].length-1].text))]):_c('span',[_vm._v(_vm._s(row[column.keys]))])])],1):_vm._e()}))}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(2);

var _checkbox = __webpack_require__(16);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tag = __webpack_require__(26);

var _tag2 = _interopRequireDefault(_tag);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _filterPanel = __webpack_require__(255);

var _filterPanel2 = _interopRequireDefault(_filterPanel);

var _layoutObserver = __webpack_require__(40);

var _layoutObserver2 = _interopRequireDefault(_layoutObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllColumns = function getAllColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

var convertToRows = function convertToRows(originColumns) {
  var maxLevel = 1;
  var traverse = function traverse(column, parent) {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      var colSpan = 0;
      column.children.forEach(function (subColumn) {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach(function (column) {
    column.level = 1;
    traverse(column);
  });

  var rows = [];
  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  var allColumns = getAllColumns(originColumns);

  allColumns.forEach(function (column) {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });

  return rows;
};

exports.default = {
  name: 'ElTableHeader',

  mixins: [_layoutObserver2.default],

  render: function render(h) {
    var _this = this;

    var originColumns = this.store.states.originColumns;
    var columnRows = convertToRows(originColumns, this.columns);
    // 是否拥有多级表头
    var isGroup = columnRows.length > 1;
    if (isGroup) this.$parent.isGroup = true;
    return h(
      'table',
      {
        'class': 'el-table__header',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this._l(this.columns, function (column) {
        return h('col', {
          attrs: { name: column.id }
        });
      }), this.hasGutter ? h('col', {
        attrs: { name: 'gutter' }
      }) : '']), h(
        'thead',
        { 'class': [{ 'is-group': isGroup, 'has-gutter': this.hasGutter }] },
        [this._l(columnRows, function (columns, rowIndex) {
          return h(
            'tr',
            {
              style: _this.getHeaderRowStyle(rowIndex),
              'class': _this.getHeaderRowClass(rowIndex)
            },
            [_this._l(columns, function (column, cellIndex) {
              return h(
                'th',
                {
                  attrs: {
                    colspan: column.colSpan,
                    rowspan: column.rowSpan
                  },
                  on: {
                    'mousemove': function mousemove($event) {
                      return _this.handleMouseMove($event, column);
                    },
                    'mouseout': _this.handleMouseOut,
                    'mousedown': function mousedown($event) {
                      return _this.handleMouseDown($event, column);
                    },
                    'click': function click($event) {
                      return _this.handleHeaderClick($event, column);
                    },
                    'contextmenu': function contextmenu($event) {
                      return _this.handleHeaderContextMenu($event, column);
                    }
                  },

                  style: _this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
                  'class': _this.getHeaderCellClass(rowIndex, cellIndex, columns, column) },
                [h(
                  'div',
                  { 'class': ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
                  [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, { column: column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context }) : column.label, column.sortable ? h(
                    'span',
                    { 'class': 'caret-wrapper', on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column);
                        }
                      }
                    },
                    [h('i', { 'class': 'sort-caret ascending', on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column, 'ascending');
                        }
                      }
                    }), h('i', { 'class': 'sort-caret descending', on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column, 'descending');
                        }
                      }
                    })]
                  ) : '', column.filterable ? h(
                    'span',
                    { 'class': 'el-table__column-filter-trigger', on: {
                        'click': function click($event) {
                          return _this.handleFilterClick($event, column);
                        }
                      }
                    },
                    [h('i', { 'class': ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : ''] })]
                  ) : '']
                )]
              );
            }), _this.hasGutter ? h('th', { 'class': 'gutter' }) : '']
          );
        })]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  components: {
    ElCheckbox: _checkbox2.default,
    ElTag: _tag2.default
  },

  computed: {
    table: function table() {
      return this.$parent;
    },
    isAllSelected: function isAllSelected() {
      return this.store.states.isAllSelected;
    },
    columnsCount: function columnsCount() {
      return this.store.states.columns.length;
    },
    leftFixedCount: function leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },
    leftFixedLeafCount: function leftFixedLeafCount() {
      return this.store.states.fixedLeafColumnsLength;
    },
    rightFixedLeafCount: function rightFixedLeafCount() {
      return this.store.states.rightFixedLeafColumnsLength;
    },
    columns: function columns() {
      return this.store.states.columns;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  },

  created: function created() {
    this.filterPanels = {};
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.defaultSort.prop) {
      var states = this.store.states;
      states.sortProp = this.defaultSort.prop;
      states.sortOrder = this.defaultSort.order || 'ascending';
      this.$nextTick(function (_) {
        for (var i = 0, length = _this2.columns.length; i < length; i++) {
          var column = _this2.columns[i];
          if (column.property === states.sortProp) {
            column.order = states.sortOrder;
            states.sortingColumn = column;
            break;
          }
        }

        if (states.sortingColumn) {
          _this2.store.commit('changeSortCondition');
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    var panels = this.filterPanels;
    for (var prop in panels) {
      if (panels.hasOwnProperty(prop) && panels[prop]) {
        panels[prop].$destroy(true);
      }
    }
  },


  methods: {
    isCellHidden: function isCellHidden(index, columns) {
      var start = 0;
      for (var i = 0; i < index; i++) {
        start += columns[i].colSpan;
      }
      var after = start + columns[index].colSpan - 1;
      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getHeaderRowStyle: function getHeaderRowStyle(rowIndex) {
      var headerRowStyle = this.table.headerRowStyle;
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(null, { rowIndex: rowIndex });
      }
      return headerRowStyle;
    },
    getHeaderRowClass: function getHeaderRowClass(rowIndex) {
      var classes = [];

      var headerRowClassName = this.table.headerRowClassName;
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName);
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(null, { rowIndex: rowIndex }));
      }

      return classes.join(' ');
    },
    getHeaderCellStyle: function getHeaderCellStyle(rowIndex, columnIndex, row, column) {
      var headerCellStyle = this.table.headerCellStyle;
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return headerCellStyle;
    },
    getHeaderCellClass: function getHeaderCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden');
      }

      if (!column.children) {
        classes.push('is-leaf');
      }

      if (column.sortable) {
        classes.push('is-sortable');
      }

      var headerCellClassName = this.table.headerCellClassName;
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName);
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      return classes.join(' ');
    },
    toggleAllSelection: function toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    },
    handleFilterClick: function handleFilterClick(event, column) {
      event.stopPropagation();
      var target = event.target;
      var cell = target.tagName === 'TH' ? target : target.parentNode;
      cell = cell.querySelector('.el-table__column-filter-trigger') || cell;
      var table = this.$parent;

      var filterPanel = this.filterPanels[column.id];

      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false;
        return;
      }

      if (!filterPanel) {
        filterPanel = new _vue2.default(_filterPanel2.default);
        this.filterPanels[column.id] = filterPanel;
        if (column.filterPlacement) {
          filterPanel.placement = column.filterPlacement;
        }
        filterPanel.table = table;
        filterPanel.cell = cell;
        filterPanel.column = column;
        !this.$isServer && filterPanel.$mount(document.createElement('div'));
      }

      setTimeout(function () {
        filterPanel.showPopper = true;
      }, 16);
    },
    handleHeaderClick: function handleHeaderClick(event, column) {
      if (!column.filters && column.sortable) {
        this.handleSortClick(event, column);
      } else if (column.filters && !column.sortable) {
        this.handleFilterClick(event, column);
      }

      this.$parent.$emit('header-click', column, event);
    },
    handleHeaderContextMenu: function handleHeaderContextMenu(event, column) {
      this.$parent.$emit('header-contextmenu', column, event);
    },
    handleMouseDown: function handleMouseDown(event, column) {
      var _this3 = this;

      if (this.$isServer) return;
      if (column.children && column.children.length > 0) return;
      /* istanbul ignore if */
      if (this.draggingColumn && this.border) {
        this.dragging = true;

        this.$parent.resizeProxyVisible = true;

        var table = this.$parent;
        var tableEl = table.$el;
        var tableLeft = tableEl.getBoundingClientRect().left;
        var columnEl = this.$el.querySelector('th.' + column.id);
        var columnRect = columnEl.getBoundingClientRect();
        var minLeft = columnRect.left - tableLeft + 30;

        (0, _dom.addClass)(columnEl, 'noclick');

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft: tableLeft
        };

        var resizeProxy = table.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';

        document.onselectstart = function () {
          return false;
        };
        document.ondragstart = function () {
          return false;
        };

        var handleMouseMove = function handleMouseMove(event) {
          var deltaLeft = event.clientX - _this3.dragState.startMouseLeft;
          var proxyLeft = _this3.dragState.startLeft + deltaLeft;

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };

        var handleMouseUp = function handleMouseUp() {
          if (_this3.dragging) {
            var _dragState = _this3.dragState,
                startColumnLeft = _dragState.startColumnLeft,
                startLeft = _dragState.startLeft;

            var finalLeft = parseInt(resizeProxy.style.left, 10);
            var columnWidth = finalLeft - startColumnLeft;
            column.width = column.realWidth = columnWidth;
            table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);

            _this3.store.scheduleLayout();

            document.body.style.cursor = '';
            _this3.dragging = false;
            _this3.draggingColumn = null;
            _this3.dragState = {};

            table.resizeProxyVisible = false;
          }

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;

          setTimeout(function () {
            (0, _dom.removeClass)(columnEl, 'noclick');
          }, 0);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },
    handleMouseMove: function handleMouseMove(event, column) {
      if (column.children && column.children.length > 0) return;
      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (!column || !column.resizable) return;

      if (!this.dragging && this.border) {
        var rect = target.getBoundingClientRect();

        var bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize';
          if ((0, _dom.hasClass)(target, 'is-sortable')) {
            target.style.cursor = 'col-resize';
          }
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = '';
          if ((0, _dom.hasClass)(target, 'is-sortable')) {
            target.style.cursor = 'pointer';
          }
          this.draggingColumn = null;
        }
      }
    },
    handleMouseOut: function handleMouseOut() {
      if (this.$isServer) return;
      document.body.style.cursor = '';
    },
    toggleOrder: function toggleOrder(order) {
      return !order ? 'ascending' : order === 'ascending' ? 'descending' : null;
    },
    handleSortClick: function handleSortClick(event, column, givenOrder) {
      event.stopPropagation();
      var order = givenOrder || this.toggleOrder(column.order);

      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (target && target.tagName === 'TH') {
        if ((0, _dom.hasClass)(target, 'noclick')) {
          (0, _dom.removeClass)(target, 'noclick');
          return;
        }
      }

      if (!column.sortable) return;

      var states = this.store.states;
      var sortProp = states.sortProp;
      var sortOrder = void 0;
      var sortingColumn = states.sortingColumn;

      if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
        if (sortingColumn) {
          sortingColumn.order = null;
        }
        states.sortingColumn = column;
        sortProp = column.property;
      }

      if (!order) {
        sortOrder = column.order = null;
        states.sortingColumn = null;
        sortProp = null;
      } else {
        sortOrder = column.order = order;
      }

      states.sortProp = sortProp;
      states.sortOrder = sortOrder;

      this.store.commit('changeSortCondition');
    }
  },

  data: function data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  }
};

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a62917d_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_filter_panel_vue__ = __webpack_require__(257);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a62917d_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_filter_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dropdowns = [];

!_vue2.default.prototype.$isServer && document.addEventListener('click', function (event) {
  dropdowns.forEach(function (dropdown) {
    var target = event.target;
    if (!dropdown || !dropdown.$el) return;
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return;
    }
    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
  });
});

exports.default = {
  open: function open(instance) {
    if (instance) {
      dropdowns.push(instance);
    }
  },
  close: function close(instance) {
    var index = dropdowns.indexOf(instance);
    if (index !== -1) {
      dropdowns.splice(instance, 1);
    }
  }
};

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"}},[(_vm.multiple)?_c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleOutsideClick),expression:"handleOutsideClick"},{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-table-filter"},[_c('div',{staticClass:"el-table-filter__content"},[_c('el-checkbox-group',{staticClass:"el-table-filter__checkbox-group",model:{value:(_vm.filteredValue),callback:function ($$v) {_vm.filteredValue=$$v},expression:"filteredValue"}},_vm._l((_vm.filters),function(filter){return _c('el-checkbox',{key:filter.value,attrs:{"label":filter.value}},[_vm._v(_vm._s(filter.text))])}))],1),_c('div',{staticClass:"el-table-filter__bottom"},[_c('button',{class:{ 'is-disabled': _vm.filteredValue.length === 0 },attrs:{"disabled":_vm.filteredValue.length === 0},on:{"click":_vm.handleConfirm}},[_vm._v(_vm._s(_vm.t('el.table.confirmFilter')))]),_c('button',{on:{"click":_vm.handleReset}},[_vm._v(_vm._s(_vm.t('el.table.resetFilter')))])])]):_c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleOutsideClick),expression:"handleOutsideClick"},{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-table-filter"},[_c('ul',{staticClass:"el-table-filter__list"},[_c('li',{staticClass:"el-table-filter__list-item",class:{ 'is-active': _vm.filterValue === undefined || _vm.filterValue === null },on:{"click":function($event){_vm.handleSelect(null)}}},[_vm._v(_vm._s(_vm.t('el.table.clearFilter')))]),_vm._l((_vm.filters),function(filter){return _c('li',{key:filter.value,staticClass:"el-table-filter__list-item",class:{ 'is-active': _vm.isActive(filter) },attrs:{"label":filter.value},on:{"click":function($event){_vm.handleSelect(filter.value)}}},[_vm._v(_vm._s(filter.text))])})],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _layoutObserver = __webpack_require__(40);

var _layoutObserver2 = _interopRequireDefault(_layoutObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElTableFooter',

  mixins: [_layoutObserver2.default],

  render: function render(h) {
    var _this = this;

    var sums = [];
    this.columns.forEach(function (column, index) {
      if (index === 0) {
        sums[index] = _this.sumText;
        return;
      }
      var values = _this.store.states.data.map(function (item) {
        return Number(item[column.property]);
      });
      var precisions = [];
      var notNumber = true;
      values.forEach(function (value) {
        if (!isNaN(value)) {
          notNumber = false;
          var decimal = ('' + value).split('.')[1];
          precisions.push(decimal ? decimal.length : 0);
        }
      });
      var precision = Math.max.apply(null, precisions);
      if (!notNumber) {
        sums[index] = values.reduce(function (prev, curr) {
          var value = Number(curr);
          if (!isNaN(value)) {
            return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
          } else {
            return prev;
          }
        }, 0);
      } else {
        sums[index] = '';
      }
    });

    return h(
      'table',
      {
        'class': 'el-table__footer',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this._l(this.columns, function (column) {
        return h('col', {
          attrs: { name: column.id }
        });
      }), this.hasGutter ? h('col', {
        attrs: { name: 'gutter' }
      }) : '']), h(
        'tbody',
        { 'class': [{ 'has-gutter': this.hasGutter }] },
        [h('tr', [this._l(this.columns, function (column, cellIndex) {
          return h(
            'td',
            {
              attrs: {
                colspan: column.colSpan,
                rowspan: column.rowSpan
              },
              'class': [column.id, column.headerAlign, column.className || '', _this.isCellHidden(cellIndex, _this.columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName] },
            [h(
              'div',
              { 'class': ['cell', column.labelClassName] },
              [_this.summaryMethod ? _this.summaryMethod({ columns: _this.columns, data: _this.store.states.data })[cellIndex] : sums[cellIndex]]
            )]
          );
        }), this.hasGutter ? h('th', { 'class': 'gutter' }) : ''])]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: {
    table: function table() {
      return this.$parent;
    },
    isAllSelected: function isAllSelected() {
      return this.store.states.isAllSelected;
    },
    columnsCount: function columnsCount() {
      return this.store.states.columns.length;
    },
    leftFixedCount: function leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },
    columns: function columns() {
      return this.store.states.columns;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  },

  methods: {
    isCellHidden: function isCellHidden(index, columns) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedCount;
      } else if (this.fixed === 'right') {
        var before = 0;
        for (var i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedCount;
      } else {
        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
      }
    }
  }
};

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-table",class:[{
      'el-table--fit': _vm.fit,
      'el-table--striped': _vm.stripe,
      'el-table--border': _vm.border || _vm.isGroup,
      'el-table--hidden': _vm.isHidden,
      'el-table--group': _vm.isGroup,
      'el-table--fluid-height': _vm.maxHeight,
      'el-table--scrollable-x': _vm.layout.scrollX,
      'el-table--scrollable-y': _vm.layout.scrollY,
      'el-table--enable-row-hover': !_vm.store.states.isComplex,
      'el-table--enable-row-transition': (_vm.store.states.data || []).length !== 0 && (_vm.store.states.data || []).length < 100
    }, _vm.tableSize ? ("el-table--" + _vm.tableSize) : ''],on:{"mouseleave":function($event){_vm.handleMouseLeave($event)}}},[_c('div',{ref:"hiddenColumns",staticClass:"hidden-columns"},[_vm._t("default")],2),(_vm.showHeader)?_c('div',{directives:[{name:"mousewheel",rawName:"v-mousewheel",value:(_vm.handleHeaderFooterMousewheel),expression:"handleHeaderFooterMousewheel"}],ref:"headerWrapper",staticClass:"el-table__header-wrapper"},[_c('table-header',{ref:"tableHeader",style:({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),attrs:{"store":_vm.store,"border":_vm.border,"default-sort":_vm.defaultSort}})],1):_vm._e(),_c('div',{ref:"bodyWrapper",staticClass:"el-table__body-wrapper",class:[_vm.layout.scrollX ? ("is-scrolling-" + _vm.scrollPosition) : 'is-scrolling-none'],style:([_vm.bodyHeight])},[_c('table-body',{style:({
           width: _vm.bodyWidth
        }),attrs:{"context":_vm.context,"store":_vm.store,"stripe":_vm.stripe,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle,"highlight":_vm.highlightCurrentRow}}),(!_vm.data || _vm.data.length === 0)?_c('div',{ref:"emptyBlock",staticClass:"el-table__empty-block",style:({
          width: _vm.bodyWidth
        })},[_c('span',{staticClass:"el-table__empty-text"},[_vm._t("empty",[_vm._v(_vm._s(_vm.emptyText || _vm.t('el.table.emptyText')))])],2)]):_vm._e(),(_vm.$slots.append)?_c('div',{ref:"appendWrapper",staticClass:"el-table__append-wrapper"},[_vm._t("append")],2):_vm._e()],1),_c('div',{ref:"scrollBar",staticClass:"el-table__body-scrollbar",style:([_vm.bodyHeight])},[_c('div',{staticClass:"scroll_block",on:{"mousedown":_vm.mouseDown}})]),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"},{name:"mousewheel",rawName:"v-mousewheel",value:(_vm.handleHeaderFooterMousewheel),expression:"handleHeaderFooterMousewheel"}],ref:"footerWrapper",staticClass:"el-table__footer-wrapper"},[_c('table-footer',{style:({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),attrs:{"store":_vm.store,"border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"default-sort":_vm.defaultSort}})],1):_vm._e(),(_vm.fixedColumns.length > 0)?_c('div',{directives:[{name:"mousewheel",rawName:"v-mousewheel",value:(_vm.handleFixedMousewheel),expression:"handleFixedMousewheel"}],ref:"fixedWrapper",staticClass:"el-table__fixed",style:([{
        width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
      },
      _vm.fixedHeight])},[(_vm.showHeader)?_c('div',{ref:"fixedHeaderWrapper",staticClass:"el-table__fixed-header-wrapper"},[_c('table-header',{ref:"fixedTableHeader",style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"left","border":_vm.border,"store":_vm.store}})],1):_vm._e(),_c('div',{ref:"fixedBodyWrapper",staticClass:"el-table__fixed-body-wrapper",style:([{
          top: _vm.layout.headerHeight + 'px'
        },
        _vm.fixedBodyHeight])},[_c('table-body',{style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"left","store":_vm.store,"stripe":_vm.stripe,"highlight":_vm.highlightCurrentRow,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle}}),(_vm.$slots.append)?_c('div',{staticClass:"el-table__append-gutter",style:({
            height: _vm.layout.appendHeight + 'px'
          })}):_vm._e()],1),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"}],ref:"fixedFooterWrapper",staticClass:"el-table__fixed-footer-wrapper"},[_c('table-footer',{style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"left","border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"store":_vm.store}})],1):_vm._e()]):_vm._e(),(_vm.rightFixedColumns.length > 0)?_c('div',{directives:[{name:"mousewheel",rawName:"v-mousewheel",value:(_vm.handleFixedMousewheel),expression:"handleFixedMousewheel"}],ref:"rightFixedWrapper",staticClass:"el-table__fixed-right",style:([{
        width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : '',
        right: _vm.layout.scrollY ? (_vm.border ? _vm.layout.gutterWidth : (_vm.layout.gutterWidth || 0)) + 'px' : ''
      },
      _vm.fixedHeight])},[(_vm.showHeader)?_c('div',{ref:"rightFixedHeaderWrapper",staticClass:"el-table__fixed-header-wrapper"},[_c('table-header',{ref:"rightFixedTableHeader",style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"right","border":_vm.border,"store":_vm.store}})],1):_vm._e(),_c('div',{ref:"rightFixedBodyWrapper",staticClass:"el-table__fixed-body-wrapper",style:([{
          top: _vm.layout.headerHeight + 'px'
        },
        _vm.fixedBodyHeight])},[_c('table-body',{style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"right","store":_vm.store,"stripe":_vm.stripe,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle,"highlight":_vm.highlightCurrentRow}})],1),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"}],ref:"rightFixedFooterWrapper",staticClass:"el-table__fixed-footer-wrapper"},[_c('table-footer',{style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"right","border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"store":_vm.store}})],1):_vm._e()]):_vm._e(),(_vm.rightFixedColumns.length > 0)?_c('div',{ref:"rightFixedPatch",staticClass:"el-table__fixed-right-patch",style:({
        width: _vm.layout.scrollY ? _vm.layout.gutterWidth + 'px' : '0',
        height: _vm.layout.headerHeight + 'px'
      })}):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.resizeProxyVisible),expression:"resizeProxyVisible"}],ref:"resizeProxy",staticClass:"el-table__column-resize-proxy"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tag");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/scrollbar-width");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  created: function created() {
    this.tableLayout.addObserver(this);
  },
  destroyed: function destroyed() {
    this.tableLayout.removeObserver(this);
  },


  computed: {
    tableLayout: function tableLayout() {
      var layout = this.layout;
      if (!layout && this.table) {
        layout = this.table.layout;
      }
      if (!layout) {
        throw new Error('Can not find table layout.');
      }
      return layout;
    }
  },

  mounted: function mounted() {
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
  },
  updated: function updated() {
    if (this.__updated__) return;
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
    this.__updated__ = true;
  },


  methods: {
    onColumnsChange: function onColumnsChange() {
      var cols = this.$el.querySelectorAll('colgroup > col');
      if (!cols.length) return;
      var flattenColumns = this.tableLayout.getFlattenColumns();
      var columnsMap = {};
      flattenColumns.forEach(function (column) {
        columnsMap[column.id] = column;
      });
      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i];
        var name = col.getAttribute('name');
        var column = columnsMap[name];
        if (column) {
          col.setAttribute('width', column.realWidth || column.width);
        }
      }
    },
    onScrollableChange: function onScrollableChange(layout) {
      var cols = this.$el.querySelectorAll('colgroup > col[name=gutter]');
      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i];
        col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0');
      }
      var ths = this.$el.querySelectorAll('th.gutter');
      for (var _i = 0, _j = ths.length; _i < _j; _i++) {
        var th = ths[_i];
        th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0';
        th.style.display = layout.scrollY ? '' : 'none';
      }
    }
  }
};

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox-group");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vue-popper");

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _props; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _checkbox = __webpack_require__(16);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _debounce = __webpack_require__(14);

var _debounce2 = _interopRequireDefault(_debounce);

var _resizeEvent = __webpack_require__(18);

var _mousewheel = __webpack_require__(247);

var _mousewheel2 = _interopRequireDefault(_mousewheel);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

var _tableStore = __webpack_require__(249);

var _tableStore2 = _interopRequireDefault(_tableStore);

var _tableLayout = __webpack_require__(250);

var _tableLayout2 = _interopRequireDefault(_tableLayout);

var _tableBody = __webpack_require__(251);

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableHeader = __webpack_require__(254);

var _tableHeader2 = _interopRequireDefault(_tableHeader);

var _tableFooter = __webpack_require__(258);

var _tableFooter2 = _interopRequireDefault(_tableFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableIdSeed = 1;

exports.default = {
  name: 'ElTable',

  mixins: [_locale2.default, _migrating2.default],

  directives: {
    Mousewheel: _mousewheel2.default
  },

  props: (_props = {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    size: String,

    rowEdit: {
      type: Array,
      default: function _default() {
        return [];
      }
    }

  }, _props['rowEdit'] = {
    type: Array,
    default: function _default() {
      return [];
    }
  }, _props.selected = {
    type: Array,
    default: function _default() {
      return [];
    }
  }, _props.total = {
    type: Number,
    default: function _default() {
      return this.data.length;
    }
  }, _props.simulate = {
    type: Boolean,
    default: true
  }, _props.width = [String, Number], _props.height = [String, Number], _props.maxHeight = [String, Number], _props.fit = {
    type: Boolean,
    default: true
  }, _props.stripe = Boolean, _props.border = Boolean, _props.rowKey = [String, Function], _props.context = {}, _props.showHeader = {
    type: Boolean,
    default: true
  }, _props.isClearSel = {
    type: Boolean,
    default: true
  }, _props.showSummary = Boolean, _props.sumText = String, _props.summaryMethod = Function, _props.rowClassName = [String, Function], _props.rowStyle = [Object, Function], _props.cellClassName = [String, Function], _props.cellStyle = [Object, Function], _props.headerRowClassName = [String, Function], _props.headerRowStyle = [Object, Function], _props.headerCellClassName = [String, Function], _props.headerCellStyle = [Object, Function], _props.highlightCurrentRow = Boolean, _props.currentRowKey = [String, Number], _props.emptyText = String, _props.expandRowKeys = Array, _props.defaultExpandAll = Boolean, _props.defaultSort = Object, _props.tooltipEffect = String, _props.spanMethod = Function, _props.selectOnIndeterminate = {
    type: Boolean,
    default: true
  }, _props),

  components: {
    TableHeader: _tableHeader2.default,
    TableFooter: _tableFooter2.default,
    TableBody: _tableBody2.default,
    ElCheckbox: _checkbox2.default
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        events: {
          expand: 'expand is renamed to expand-change'
        }
      };
    },
    setCurrentRow: function setCurrentRow(row) {
      this.store.commit('setCurrentRow', row);
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      this.store.toggleRowSelection(row, selected);
      this.store.updateAllSelected();
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      this.store.toggleRowExpansion(row, expanded);
    },
    clearSelection: function clearSelection() {
      this.store.clearSelection();
    },
    clearFilter: function clearFilter() {
      this.store.clearFilter();
    },
    clearSort: function clearSort() {
      this.store.clearSort();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.store.commit('setHoverRow', null);
      if (this.hoverState) this.hoverState = null;
    },
    updateScrollY: function updateScrollY() {
      this.layout.updateScrollY();
    },
    handleFixedMousewheel: function handleFixedMousewheel(event, data) {
      var bodyWrapper = this.bodyWrapper;
      if (Math.abs(data.spinY) > 0) {
        var currentScrollTop = bodyWrapper.scrollTop;
        if (data.pixelY < 0 && currentScrollTop !== 0) {
          event.preventDefault();
        }
        if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
          event.preventDefault();
        }
        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
      } else {
        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
      }
    },
    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
      var pixelX = data.pixelX,
          pixelY = data.pixelY;

      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        event.preventDefault();
        this.bodyWrapper.scrollLeft += data.pixelX / 5;
      }
    },
    bindEvents: function bindEvents() {
      var _$refs = this.$refs,
          headerWrapper = _$refs.headerWrapper,
          footerWrapper = _$refs.footerWrapper;

      var refs = this.$refs;
      var self = this;

      this.bodyWrapper.addEventListener('scroll', function () {
        if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft;
        if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft;
        if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
        if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
        var maxScrollLeftPosition = this.scrollWidth - this.offsetWidth - 1;
        var scrollLeft = this.scrollLeft;
        if (scrollLeft >= maxScrollLeftPosition) {
          self.scrollPosition = 'right';
        } else if (scrollLeft === 0) {
          self.scrollPosition = 'left';
        } else {
          self.scrollPosition = 'middle';
        }
      });

      if (this.fit) {
        (0, _resizeEvent.addResizeListener)(this.$el, this.resizeListener);
      }
    },
    resizeListener: function resizeListener() {
      if (!this.$ready) return;
      var shouldUpdateLayout = false;
      var el = this.$el;
      var _resizeState = this.resizeState,
          oldWidth = _resizeState.width,
          oldHeight = _resizeState.height;


      var width = el.offsetWidth;
      if (oldWidth !== width) {
        shouldUpdateLayout = true;
      }

      var height = el.offsetHeight;
      if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
        shouldUpdateLayout = true;
      }

      if (shouldUpdateLayout) {
        this.resizeState.width = width;
        this.resizeState.height = height;
        this.doLayout();
      }
    },
    doLayout: function doLayout() {
      var _this = this;

      this.layout.updateColumnsWidth();
      if (this.shouldUpdateHeight) {
        this.layout.updateElsHeight();
      }
      this.$nextTick(function () {
        _this.scrollBarSet();
      });
    },
    scrollBarSet: function scrollBarSet() {
      var scrollBar = this.$refs.scrollBar;
      if (scrollBar) {
        var body = this.bodyWrapper,
            table = body.querySelector(".el-table__body");
        var bar = scrollBar.children.item(0);
        if (body.offsetHeight >= table.offsetHeight) {
          scrollBar.style.display = "none";
          bar.style.top = "";
          bar.style.height = "";
          this.adjust(0);
        } else {
          scrollBar.style.display = "block";
          var height = body.offsetHeight * scrollBar.offsetHeight / table.offsetHeight;
          if (height < 20) {
            height = 20;
          }
          bar.style.height = height + "px";
          this.scrollHeight = scrollBar.offsetHeight;
          this.tableHeight = table.offsetHeight + 8;
          this.barHeight = height;
          var top = bar.style.top;
          if (top) {
            top = parseFloat(top.replace("px", ""));
            if (top + height > this.scrollHeight) {
              top = this.scrollHeight - height;
            }
          } else {
            top = 0;
          }
          this.adjust(top);
        }
      }
    },
    mouseDown: function mouseDown(e) {
      this.isDrag = true;
      this.pageY = e.pageY;
      if (e.stopPropagation) e.stopPropagation();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    },
    mouseMove: function mouseMove(event) {
      if (this.isDrag) {
        var tar = this.$refs.scrollBar.children.item(0);
        var mv = event.pageY - this.pageY;
        var top = tar.style.top;
        if (top) {
          top = parseFloat(top.replace("px", ""));
          if (mv + this.barHeight + top > this.scrollHeight) {
            mv = this.scrollHeight - this.barHeight;
          } else if (mv + top < 0) {
            mv = 0;
          } else {
            mv = top + mv;
          }
        } else {
          if (mv + this.barHeight > this.scrollHeight) {
            mv = this.scrollHeight - this.barHeight;
          } else if (mv < 0) {
            mv = 0;
          }
        }
        this.adjust(mv);
        this.pageY = event.pageY;
        if (!this.simulate) {
          //不可分页
          this.$emit('bar-scroll', event, mv, this.barHeight);
        }
        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();
        event.cancelBubble = true;
        event.returnValue = false;
        return false;
      }
    },
    adjust: function adjust(mv) {
      if (typeof mv == 'number') {
        var tar = this.$refs.scrollBar.children.item(0);
        var table = this.bodyWrapper.querySelector(".el-table__body");
        tar.style.top = mv + "px";
        //到了这里mv代表的就是新的top属性  这是常规算法
        table.style.marginTop = -(mv * (this.tableHeight - this.scrollHeight)) / (this.scrollHeight - this.barHeight) + "px";
      }
    },
    mouseUp: function mouseUp(e) {
      if (this.isDrag) {
        this.isDrag = false;
        if (e.stopPropagation) e.stopPropagation();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
      }
    },
    mouseLeave: function mouseLeave(event) {
      this.isDrag = false;
    },
    mouseWeel: function mouseWeel(event) {
      event = event || window.event;
      var tar = this.bodyWrapper;
      var target = event.target;
      if (tar.contains(target)) {
        var scrollBar = this.$refs.scrollBar;
        var bar = scrollBar.children.item(0);
        var resize = this.simulate ? 1 : 100 / this.total;
        var top = bar.style.top,
            step = 100 * this.scrollHeight * resize / this.tableHeight;
        if (scrollBar.style.display != "none") {
          top = parseFloat(top.replace("px", ""));
          if (event.wheelDelta) {
            //判断浏览器IE，谷歌滑轮事件    
            //当滑轮向上滚动时
            if (event.wheelDelta > 0) {
              if (top - step <= 0) {
                this.adjust(0);
              } else {
                this.adjust(top - step);
              }
              if (top > 0) {
                if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                event.cancelBubble = true;
                event.returnValue = false;
                return false;
              }
            }
            //当滑轮向下滚动时  
            if (event.wheelDelta < 0) {
              if (top + step + this.barHeight >= this.scrollHeight) {
                this.adjust(this.scrollHeight - this.barHeight);
              } else {
                this.adjust(top + step);
              }
              if (top + this.barHeight < this.scrollHeight - 0.01) {
                if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                event.cancelBubble = true;
                event.returnValue = false;
                return false;
              }
            }
          } else if (event.detail) {
            //Firefox滑轮事件  
            if (event.detail < 0) {
              if (top - step <= 0) {
                this.adjust(0);
              } else {
                this.adjust(top - step);
              }
              if (top > 0) {
                if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                event.cancelBubble = true;
                event.returnValue = false;
                return false;
              }
            }
            if (event.detail > 0) {
              if (top + step + this.barHeight >= this.scrollHeight) {
                this.adjust(this.scrollHeight - this.barHeight);
              } else {
                this.adjust(top + step);
              }
              if (top + this.barHeight < this.scrollHeight) {
                if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                event.cancelBubble = true;
                event.returnValue = false;
                return false;
              }
            }
          }
        }
      }
    }
  },

  created: function created() {
    var _this2 = this;

    this.tableId = 'el-table_' + tableIdSeed++;
    this.debouncedUpdateLayout = (0, _debounce2.default)(50, function () {
      return _this2.doLayout();
    });
  },


  computed: {
    tableSize: function tableSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
    bodyWrapper: function bodyWrapper() {
      return this.$refs.bodyWrapper;
    },
    shouldUpdateHeight: function shouldUpdateHeight() {
      return this.height || this.maxHeight || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
    },
    selection: function selection() {
      return this.store.states.selection;
    },
    columns: function columns() {
      return this.store.states.columns;
    },
    tableData: function tableData() {
      return this.store.states.data;
    },
    fixedColumns: function fixedColumns() {
      return this.store.states.fixedColumns;
    },
    rightFixedColumns: function rightFixedColumns() {
      return this.store.states.rightFixedColumns;
    },
    bodyWidth: function bodyWidth() {
      var _layout = this.layout,
          bodyWidth = _layout.bodyWidth,
          scrollY = _layout.scrollY,
          gutterWidth = _layout.gutterWidth;

      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
    },
    bodyHeight: function bodyHeight() {
      if (this.height) {
        return {
          height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        return {
          'max-height': (this.showHeader ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight : this.maxHeight - this.layout.footerHeight) + 'px'
        };
      }
      return {};
    },
    fixedBodyHeight: function fixedBodyHeight() {
      if (this.height) {
        return {
          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        var maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;

        if (this.showHeader) {
          maxHeight -= this.layout.headerHeight;
        }

        maxHeight -= this.layout.footerHeight;

        return {
          'max-height': maxHeight + 'px'
        };
      }

      return {};
    },
    fixedHeight: function fixedHeight() {
      if (this.maxHeight) {
        if (this.showSummary) {
          return {
            bottom: 0
          };
        }
        return {
          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
        };
      } else {
        if (this.showSummary) {
          return {
            height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
          };
        }
        return {
          height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
        };
      }
    },
    dataDiff: function dataDiff() {
      return null;
    }
  },

  watch: {
    height: {
      immediate: true,
      handler: function handler(value) {
        this.layout.setHeight(value);
      }
    },

    maxHeight: {
      immediate: true,
      handler: function handler(value) {
        this.layout.setMaxHeight(value);
      }
    },

    currentRowKey: function currentRowKey(newVal) {
      this.store.setCurrentRowKey(newVal);
    },


    data: {
      immediate: true,
      handler: function handler(value) {
        var _this3 = this;

        this.store.commit('setData', value);
        if (this.$ready) {
          this.$nextTick(function () {
            _this3.doLayout();
          });
        }
      }
    },

    rowEdit: function rowEdit(newVal) {
      var _this4 = this;

      this.store.rowEdit = newVal;
      if (this.$ready) {
        this.$nextTick(function () {
          _this4.scrollBarSet();
        });
      }
    },
    selected: function selected(newVal) {
      this.store.states.selection = newVal;
      this.store.updateAllSelected();
    },
    total: function total(newVal) {
      this.store.states.total = newVal;
    },
    simulate: function simulate(newVal) {
      this.store.states.simulate = newVal;
    },


    expandRowKeys: {
      immediate: true,
      handler: function handler(newVal) {
        if (newVal) {
          this.store.setExpandRowKeys(newVal);
        }
      }
    }
  },

  destroyed: function destroyed() {
    if (this.resizeListener) (0, _resizeEvent.removeResizeListener)(this.$el, this.resizeListener);
  },
  mounted: function mounted() {
    var _this5 = this;

    this.bindEvents();
    this.store.updateColumns();
    this.doLayout();

    this.resizeState = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    };

    // init filters
    this.store.states.columns.forEach(function (column) {
      if (column.filteredValue && column.filteredValue.length) {
        _this5.store.commit('filterChange', {
          column: column,
          values: column.filteredValue,
          silent: true
        });
      }
    });

    this.$ready = true;
    this.$nextTick(function () {
      this.$nextTick(function () {
        this.scrollBarSet();
        if (mouseEvent) {
          mouseEvent.addEvent(this, this.mouseMove, "mousemove");
          mouseEvent.addEvent(this, this.mouseUp, "mouseup");
          mouseEvent.addEvent(this, this.mouseLeave, "mouseleave");
          mouseEvent.addEvent(this, this.mouseWeel);
        }
      });
    });
  },
  data: function data() {
    var store = new _tableStore2.default(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll,
      selectOnIndeterminate: this.selectOnIndeterminate
    });
    store["rowEdit"] = this.rowEdit;
    store.states["clearSel"] = this.isClearSel;
    store.states["total"] = this.total;
    store.states["simulate"] = this.simulate;
    store.states.selection = this.selected;
    var layout = new _tableLayout2.default({
      store: store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    });
    return {
      layout: layout,
      store: store,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null
      },
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left',
      scrollHeight: 0,
      tableHeight: 0,
      barHeight: 0,
      isDrag: false,
      pageY: 0
    };
  }
};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRowIdentity = exports.getColumnByCell = exports.getColumnById = exports.orderBy = exports.getCell = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(4);

var getCell = exports.getCell = function getCell(event) {
  var cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }

  return null;
};

var isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var orderBy = exports.orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return (0, _util.getValueByPath)(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }
    return [isObject(value) ? (0, _util.getValueByPath)(value, sortKey) : value];
  };
  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};

var getColumnById = exports.getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

var getColumnByCell = exports.getColumnByCell = function getColumnByCell(table, cell) {
  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

var getRowIdentity = exports.getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    var key = rowKey.split('.');
    var current = row;
    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _util = __webpack_require__(73);

var _dom = __webpack_require__(2);

var _checkbox = __webpack_require__(16);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tooltip = __webpack_require__(23);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _debounce = __webpack_require__(14);

var _debounce2 = _interopRequireDefault(_debounce);

var _layoutObserver = __webpack_require__(40);

var _layoutObserver2 = _interopRequireDefault(_layoutObserver);

var _cell = __webpack_require__(252);

var _cell2 = _interopRequireDefault(_cell);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'ElTableBody',

	mixins: [_layoutObserver2.default],

	components: {
		ElCheckbox: _checkbox2.default,
		ElTooltip: _tooltip2.default,
		ElTableCell: _cell2.default
	},

	props: {
		store: {
			required: true
		},
		stripe: Boolean,
		context: {},
		rowClassName: [String, Function],
		rowStyle: [Object, Function],
		fixed: String,
		highlight: Boolean
	},

	watch: {
		'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
			if (!this.store.states.isComplex) return;
			var el = this.$el;
			if (!el) return;
			var tr = el.querySelector('tbody').children;
			var rows = [].filter.call(tr, function (row) {
				return (0, _dom.hasClass)(row, 'el-table__row');
			});
			var oldRow = rows[oldVal];
			var newRow = rows[newVal];
			if (oldRow) {
				(0, _dom.removeClass)(oldRow, 'hover-row');
			}
			if (newRow) {
				(0, _dom.addClass)(newRow, 'hover-row');
			}
		},
		'store.states.currentRow': function storeStatesCurrentRow(newVal, oldVal) {
			if (!this.highlight) return;
			var el = this.$el;
			if (!el) return;
			var data = this.store.states.data;
			var tr = el.querySelector('tbody').children;
			var rows = [].filter.call(tr, function (row) {
				return (0, _dom.hasClass)(row, 'el-table__row');
			});
			var oldRow = rows[data.indexOf(oldVal)];
			var newRow = rows[data.indexOf(newVal)];
			if (oldRow) {
				(0, _dom.removeClass)(oldRow, 'current-row');
			} else {
				[].forEach.call(rows, function (row) {
					return (0, _dom.removeClass)(row, 'current-row');
				});
			}
			if (newRow) {
				(0, _dom.addClass)(newRow, 'current-row');
			}
		},
		'store.states.data': function storeStatesData(newVal, oldVal) {
			var simulate = this.store.states["simulate"];
			if (!simulate) {
				if (this.store.states.currentRow) {
					var nowRow = this.store.states.currentRow;
					if (!this.highlight) return;
					var el = this.$el;
					if (!el) return;
					var tr = el.querySelector('tbody').children;
					var rows = [].filter.call(tr, function (row) {
						return (0, _dom.hasClass)(row, 'el-table__row');
					});
					var oldRow = rows[oldVal.indexOf(nowRow)];
					var newRow = rows[newVal.indexOf(nowRow)];
					if (oldRow) {
						(0, _dom.removeClass)(oldRow, 'current-row');
					} else {
						[].forEach.call(rows, function (row) {
							return (0, _dom.removeClass)(row, 'current-row');
						});
					}
					if (newRow) {
						(0, _dom.addClass)(newRow, 'current-row');
					}
				}
			}
		}
	},

	computed: {
		table: function table() {
			return this.$parent;
		},
		data: function data() {
			return this.store.states.data;
		},
		columnsCount: function columnsCount() {
			return this.store.states.columns.length;
		},
		leftFixedLeafCount: function leftFixedLeafCount() {
			return this.store.states.fixedLeafColumnsLength;
		},
		rightFixedLeafCount: function rightFixedLeafCount() {
			return this.store.states.rightFixedLeafColumnsLength;
		},
		leftFixedCount: function leftFixedCount() {
			return this.store.states.fixedColumns.length;
		},
		rightFixedCount: function rightFixedCount() {
			return this.store.states.rightFixedColumns.length;
		},
		columns: function columns() {
			return this.store.states.columns;
		},
		self: function self() {
			return this.context || this.table.$vnode.context;
		},
		columnClass: function columnClass() {
			return this.self.showOverflowTooltip || this.self.showTooltipWhenOverflow ? "cell el-tooltip" : "cell";
		}
	},

	data: function data() {
		return {
			tooltipContent: ''
		};
	},
	created: function created() {
		this.activateTooltip = (0, _debounce2.default)(50, function (tooltip) {
			return tooltip.handleShowPopper();
		});
	},


	methods: {
		jgtype: function jgtype(column, type) {
			return column.config.type == type;
		},
		btnShow: function btnShow(row, name, colum) {
			if (name) {
				if (row[name]) {
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		},
		btnDisable: function btnDisable(row, name) {
			if (name) {
				if (row[name]) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},
		config: function config(row, column, $index) {
			return {
				row: row,
				column: column,
				$index: $index,
				_self: this.context || this.table.$vnode.context,
				columnsHidden: this.isColumnHidden($index),
				renderProxy: this._renderProxy
			};
		},
		trStyle: function trStyle(row, $index) {
			return this.rowStyle ? this.getRowStyle(row, $index) : null;
		},
		trKey: function trKey(row, $index) {
			return this.table.rowKey ? this.getKeyOfRow(row, $index) : $index;
		},
		trClass: function trClass(row, $index) {
			return [this.getRowClass(row, $index)];
		},
		columnStyle: function columnStyle(column) {
			return this.self.showOverflowTooltip || this.self.showTooltipWhenOverflow ? "width:" + ((column.realWidth || column.width) - 1) + "px" : "";
		},
		defaultJduge: function defaultJduge(row) {
			return this.store.rowEdit.indexOf(row) != -1 ? true : false;
		},
		getKeyOfRow: function getKeyOfRow(row, index) {
			var rowKey = this.table.rowKey;
			if (rowKey) {
				return (0, _util.getRowIdentity)(row, rowKey);
			}
			return index;
		},
		isColumnHidden: function isColumnHidden(index) {
			if (this.fixed === true || this.fixed === 'left') {
				return index >= this.leftFixedLeafCount;
			} else if (this.fixed === 'right') {
				return index < this.columnsCount - this.rightFixedLeafCount;
			} else {
				return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount;
			}
		},
		getSpan: function getSpan(row, column, rowIndex, columnIndex) {
			var rowspan = 1;
			var colspan = 1;

			var fn = this.table.spanMethod;
			if (typeof fn === 'function') {
				var result = fn({
					row: row,
					column: column,
					rowIndex: rowIndex,
					columnIndex: columnIndex
				});

				if (Array.isArray(result)) {
					rowspan = result[0];
					colspan = result[1];
				} else if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
					rowspan = result.rowspan;
					colspan = result.colspan;
				}
			}
			if (!rowspan || !colspan) {
				return false;
			} else {
				if (rowspan != 1 || colspan != 1) {
					column["_colspan"] = colspan;
					column["_rowspan"] = rowspan;
				}
				return true;
			}
		},
		getRowStyle: function getRowStyle(row, rowIndex) {
			var rowStyle = this.table.rowStyle;
			if (typeof rowStyle === 'function') {
				return rowStyle.call(null, {
					row: row,
					rowIndex: rowIndex
				});
			}
			return rowStyle;
		},
		getRowClass: function getRowClass(row, rowIndex) {
			var classes = ['el-table__row'];

			if (this.stripe && rowIndex % 2 === 1) {
				classes.push('el-table__row--striped');
			}
			var rowClassName = this.table.rowClassName;
			if (typeof rowClassName === 'string') {
				classes.push(rowClassName);
			} else if (typeof rowClassName === 'function') {
				classes.push(rowClassName.call(null, {
					row: row,
					rowIndex: rowIndex
				}));
			}

			if (this.store.states.expandRows.indexOf(row) > -1) {
				classes.push('expanded');
			}

			return classes.join(' ');
		},
		getCellStyle: function getCellStyle(rowIndex, columnIndex, row, column) {
			var cellStyle = this.table.cellStyle;
			if (typeof cellStyle === 'function') {
				return cellStyle.call(null, {
					rowIndex: rowIndex,
					columnIndex: columnIndex,
					row: row,
					column: column
				});
			}
			return cellStyle;
		},
		getCellClass: function getCellClass(rowIndex, columnIndex, row, column) {
			var classes = [column.id, column.align, column.className];

			if (this.isColumnHidden(columnIndex)) {
				classes.push('is-hidden');
			}

			var cellClassName = this.table.cellClassName;
			if (typeof cellClassName === 'string') {
				classes.push(cellClassName);
			} else if (typeof cellClassName === 'function') {
				classes.push(cellClassName.call(null, {
					rowIndex: rowIndex,
					columnIndex: columnIndex,
					row: row,
					column: column
				}));
			}

			return classes.join(' ');
		},
		handleCellMouseEnter: function handleCellMouseEnter(event, row) {
			var table = this.table;
			var cell = (0, _util.getCell)(event);

			if (cell) {
				var column = (0, _util.getColumnByCell)(table, cell);
				var hoverState = table.hoverState = { cell: cell, column: column, row: row };
				table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
			}

			// 判断是否text-overflow, 如果是就显示tooltip
			var cellChild = event.target.querySelector('.cell');

			if ((0, _dom.hasClass)(cellChild, 'el-tooltip') && cellChild.scrollWidth > cellChild.offsetWidth && this.$refs.tooltip) {
				var tooltip = this.$refs.tooltip;
				// TODO 会引起整个 Table 的重新渲染，需要优化
				this.tooltipContent = cell.textContent || cell.innerText;
				tooltip.referenceElm = cell;
				tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
				tooltip.doDestroy();
				tooltip.setExpectedState(true);
				this.activateTooltip(tooltip);
			}
		},
		handleCellMouseLeave: function handleCellMouseLeave(event) {
			var tooltip = this.$refs.tooltip;
			if (tooltip) {
				tooltip.setExpectedState(false);
				tooltip.handleClosePopper();
			}
			var cell = (0, _util.getCell)(event);
			if (!cell) return;

			var oldHoverState = this.table.hoverState || {};
			this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
		},
		handleMouseEnter: function handleMouseEnter(index) {
			this.store.commit('setHoverRow', index);
		},
		handleMouseLeave: function handleMouseLeave() {
			this.store.commit('setHoverRow', null);
		},
		handleColumnBtnClick: function handleColumnBtnClick(event, column, index) {
			var onTap = column.config.onTap;
			if (onTap) {
				if (typeof onTap == "function") {
					onTap.apply(this.table.$parent, arguments);
				} else if (typeof onTap == "string" && this.table.$parent[onTap] && typeof this.table.$parent[onTap] == "function") {
					this.table.$parent[onTap](event, column, index);
				}
			}
		},
		handleContextMenu: function handleContextMenu(event) {
			this.handleEvent(event, null, 'contextmenu');
		},
		handleDoubleClick: function handleDoubleClick(event) {
			this.handleEvent(event, null, 'dblclick');
		},
		handleClick: function handleClick(event) {
			var target = this.getTarget(event.target);
			if (target) {
				var index = parseInt(target.getAttribute("index"));
				var row = this.data[index];
				this.store.commit('setCurrentRow', row);
				this.handleEvent(event, row, 'click');
			}
		},
		getTarget: function getTarget(target) {
			var current = target,
			    tar = null;
			while (current != null) {
				var nodeName = current.nodeName.toLowerCase();
				if (nodeName == "tr") {
					tar = current;
					current = null;
				} else {
					current = current.parentNode;
				}
			}
			return tar;
		},
		handleEvent: function handleEvent(event, row, name) {
			if (!row) {
				var target = this.getTarget(event.target);
				if (target) {
					var index = parseInt(target.getAttribute("index"));
					row = this.data[index];
				}
			}
			var table = this.table;
			var cell = (0, _util.getCell)(event);
			var column = void 0;
			if (cell) {
				column = (0, _util.getColumnByCell)(table, cell);
				if (column) {
					table.$emit('cell-' + name, row, column, cell, event);
				}
			}
			table.$emit('row-' + name, row, event, column);
		},
		handleExpandClick: function handleExpandClick(row, e) {
			e.stopPropagation();
			this.store.toggleRowExpansion(row);
		}
	}
};

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vuePopper = __webpack_require__(7);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _popup = __webpack_require__(13);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _clickoutside = __webpack_require__(10);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _dropdown = __webpack_require__(256);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _checkbox = __webpack_require__(16);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxGroup = __webpack_require__(41);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElTableFilterPanel',

  mixins: [_vuePopper2.default, _locale2.default],

  directives: {
    Clickoutside: _clickoutside2.default
  },

  components: {
    ElCheckbox: _checkbox2.default,
    ElCheckboxGroup: _checkboxGroup2.default
  },

  props: {
    placement: {
      type: String,
      default: 'bottom-end'
    }
  },

  customRender: function customRender(h) {
    return h(
      'div',
      { 'class': 'el-table-filter' },
      [h('div', { 'class': 'el-table-filter__content' }), h(
        'div',
        { 'class': 'el-table-filter__bottom' },
        [h(
          'button',
          {
            on: {
              'click': this.handleConfirm
            }
          },
          [this.t('el.table.confirmFilter')]
        ), h(
          'button',
          {
            on: {
              'click': this.handleReset
            }
          },
          [this.t('el.table.resetFilter')]
        )]
      )]
    );
  },


  methods: {
    isActive: function isActive(filter) {
      return filter.value === this.filterValue;
    },
    handleOutsideClick: function handleOutsideClick() {
      var _this = this;

      setTimeout(function () {
        _this.showPopper = false;
      }, 16);
    },
    handleConfirm: function handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleReset: function handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleSelect: function handleSelect(filterValue) {
      this.filterValue = filterValue;

      if (typeof filterValue !== 'undefined' && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }

      this.handleOutsideClick();
    },
    confirmFilter: function confirmFilter(filteredValue) {
      this.table.store.commit('filterChange', {
        column: this.column,
        values: filteredValue
      });
      this.table.store.updateAllSelected();
    }
  },

  data: function data() {
    return {
      table: null,
      cell: null,
      column: null
    };
  },


  computed: {
    filters: function filters() {
      return this.column && this.column.filters;
    },


    filterValue: {
      get: function get() {
        return (this.column.filteredValue || [])[0];
      },
      set: function set(value) {
        if (this.filteredValue) {
          if (typeof value !== 'undefined' && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },

    filteredValue: {
      get: function get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set: function set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },

    multiple: function multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener('scroll', function () {
      _this2.updatePopper();
    });

    this.$watch('showPopper', function (value) {
      if (_this2.column) _this2.column.filterOpened = value;
      if (value) {
        _dropdown2.default.open(_this2);
      } else {
        _dropdown2.default.close(_this2);
      }
    });
  },

  watch: {
    showPopper: function showPopper(val) {
      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < _popup.PopupManager.zIndex) {
        this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/migrating");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/merge");

/***/ })

/******/ });