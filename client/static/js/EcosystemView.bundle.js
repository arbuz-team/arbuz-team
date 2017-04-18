/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	window.EcosystemView = function () {
	  return __webpack_require__(1);
	}();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _structure = __webpack_require__(5);
	
	var _feature = __webpack_require__(11);
	
	window.addEventListener('load', function () {
		console.log(_structure.EV);
	
		var sets_of_features = [new _feature.Set_Of_Features({
			id: 'a1-section-title',
			text: 'To jest tytuł!'
		}), new _feature.Set_Of_Features({
			id: 'a2-section-paragraph',
			text: 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' + 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' + 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.'
		}), new _feature.Set_Of_Features({
			id: 'a4-section-title',
			text: 'To jest tytuł!'
		}), new _feature.Set_Of_Features({
			id: 'a5-section-paragraph',
			text: 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' + 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' + 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.'
		})];
	
		_structure.init.ecosystem.About_Something(sets_of_features);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	__webpack_require__(12);
	
	__webpack_require__(16);
	
	__webpack_require__(20);
	
	__webpack_require__(24);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _structure = __webpack_require__(5);
	
	var _ecosystem = __webpack_require__(7);
	
	_structure.init.ecosystem.About_Something = function (sets_of_features) {
		var features = {
			name: 'about_something',
			group: _structure.init.ecosystem,
	
			children: [_structure.init.organism.ground.About_Something()]
		};
	
		return new _ecosystem.Ecosystem(features, sets_of_features);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.$EV = exports.init = exports.EV = undefined;
	
	var _group = __webpack_require__(6);
	
	var EV = exports.EV = {},
	    init = exports.init = {};
	
	init.atom = new _group.Group('atom');
	init.molecule = new _group.Group('molecule');
	init.cell = new _group.Group('cell');
	init.organism = new _group.Group('organism');
	init.ecosystem = new _group.Group('ecosystem');
	
	EV.atoms = {};
	EV.molecules = {};
	EV.cells = {};
	EV.organisms = {};
	EV.ecosystems = {};
	
	var get_element = function get_element(id) {
		var array = [EV.ecosystems, EV.organisms, EV.cells, EV.molecules, EV.atoms],
		    array_length = array.length;
	
		for (var i = 0; i < array_length; ++i) {
			var level = array[i];
	
			for (var element in level) {
				if (level.hasOwnProperty(element)) if (level[element].features.id === id) return level[element];
			}
		}
	};
	
	exports.$EV = get_element;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Group = Group;
	function Group(init_name, init_parent) {
		if (typeof init_name !== 'string') throw 'Group error: name must be string.';
	
		if (typeof init_parent !== 'undefined') if (init_parent.constructor !== Group) throw 'Group error: parent is not Group object.';
	
		var name = init_name,
		    parent = init_parent;
	
		this.get_name = function () {
			return name;
		};
	
		this.get_parent = function () {
			if (parent.constructor === Group) return parent;else return undefined;
		};
	
		this.get_parent_name = function () {
			if (parent.constructor === Group) return parent.get_name();else return undefined;
		};
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Ecosystem = Ecosystem;
	
	var _logic = __webpack_require__(8);
	
	var logic = _interopRequireWildcard(_logic);
	
	var _ecosystemsview = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var base = {
		prefix: 'e',
		type_name: 'ecosystem',
		ordinal: 0
	};
	
	function Ecosystem(features, start_sets_of_features) {
		_ecosystemsview.EcosystemsView.call(this, base, features);
	
		var id_element = this.generate_id(base, features),
		    class_name = base.prefix + '-' + features.name;
	
		this.features = {
			id: id_element,
			classes: class_name,
	
			name: features.name,
			addl_classes: features.addl_classes,
			children: features.children
		};
	
		this.create(start_sets_of_features);
	}
	
	Ecosystem.prototype = Object.create(_ecosystemsview.EcosystemsView.prototype);
	
	Ecosystem.prototype.generate_id = function (base, features) {
		return base.prefix + base.ordinal + '-' + features.name;
	};
	
	Ecosystem.prototype.update = function (sets_of_features) {
		if (logic.is_object(sets_of_features)) this.add_sets_of_features(sets_of_features);
	
		this.update_lower(this);
	};
	
	Ecosystem.prototype.create = function (sets_of_features) {
		console.log('creating ecosystem');
	
		this.create_lower(this, false);
	
		if (logic.is_object(sets_of_features)) this.add_sets_of_features(sets_of_features);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var define_abstract_function = exports.define_abstract_function = function define_abstract_function() {
		throw 'EcosystemsView error: This is required function';
	},
	    get_if_exist = exports.get_if_exist = function get_if_exist(default_val, new_val) {
		if (new_val) return new_val;else return default_val;
	},
	    is_type = exports.is_type = function is_type(obj, type) {
		return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === type;
	},
	    is_not_type = exports.is_not_type = function is_not_type(obj, type) {
		return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== type;
	},
	    is_object = exports.is_object = function is_object(obj) {
		return is_type(obj, 'object');
	},
	    is_array = exports.is_array = function is_array(obj) {
		return Array.isArray(obj);
	},
	    is_defined = exports.is_defined = function is_defined(obj) {
		return is_not_type(obj, 'undefined');
	},
	    is_real_value = exports.is_real_value = function is_real_value(obj) {
		return obj && obj !== 'null' && obj !== 'undefined';
	},
	    is_not_real_value = exports.is_not_real_value = function is_not_real_value(obj) {
		return !is_real_value(obj);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.EcosystemsView = EcosystemsView;
	
	var _logic = __webpack_require__(8);
	
	var logic = _interopRequireWildcard(_logic);
	
	var _dom = __webpack_require__(10);
	
	var dom = _interopRequireWildcard(_dom);
	
	var _structure = __webpack_require__(5);
	
	var _feature = __webpack_require__(11);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function EcosystemsView(base, features) {
		++base.ordinal;
	
		var id_element = this.generate_id(base, features),
		    class_group = base.prefix + '-' + features.group.get_name(),
		    class_name = class_group + '-' + features.name;
	
		this.features = {
			id: id_element,
			classes: [class_group, class_name],
	
			group: features.group.get_name(),
			name: features.name,
	
			node_name: 'div',
			addl_classes: features.addl_classes,
	
			node: undefined,
			content_node: undefined,
			children: [],
			parent: undefined
		};
	
		this.add_children_to_features(features.children);
		this.insert_to_structure(base);
	}
	
	EcosystemsView.prototype.insert_to_structure = function (base) {
		_structure.EV[base.type_name + 's'][this.features.id] = this;
	};
	
	EcosystemsView.prototype.generate_id = function (base, features) {
		return base.prefix + base.ordinal + '-' + features.group.get_name() + '-' + features.name;
	};
	
	EcosystemsView.prototype.update = function () {
		logic.define_abstract_function();
	};
	
	EcosystemsView.prototype.update_lower = function (parent) {
		var children = parent.features.children;
	
		for (var single in children) {
			if (children.hasOwnProperty(single)) children[single].create(children_features);
		}
	};
	
	EcosystemsView.prototype.create = function () {
		logic.define_abstract_function();
	};
	
	EcosystemsView.prototype.create_lower = function (parent, if_parent) {
		var children = parent.features.children;
	
		for (var single in children) {
			if (children.hasOwnProperty(single)) {
				if (if_parent === false) children[single].create(undefined);else children[single].create(undefined, parent);
			}
		}
	};
	
	EcosystemsView.prototype.add_classes = function (list_of_classes) {
		var set_of_features = new _feature.Set_Of_Features({
			addl_classes: list_of_classes
		});
	
		this.add_features(set_of_features);
	
		dom.insert_classes(this, this.features.node);
	};
	
	EcosystemsView.prototype.add_children_to_features = function (list_children) {
		if (logic.is_array(list_children)) {
			var list_length = list_children.length;
	
			for (var i = 0; i < list_length; ++i) {
				if (list_children[i].constructor === EcosystemsView) this.features.children.push(list_children[i]);
			}
		}
	};
	
	EcosystemsView.prototype.add_features = function (set_of_features) {
		var id = set_of_features.id,
		    children = set_of_features.features.children,
		    features = set_of_features.features,
		    $element = (0, _structure.$EV)(id);
	
		delete set_of_features.id;
		delete set_of_features.type;
		delete set_of_features.path;
		delete set_of_features.features.children;
	
		this.add_children_to_features(children);
	
		if ($element) {
			for (var feature in features) {
				if (features.hasOwnProperty(feature)) if (feature !== 'children_features') {
					$element.features[feature] = features[feature];
					$element.update();
				}
			}
		}
	};
	
	EcosystemsView.prototype.add_sets_of_features = function (sets_of_features) {
		var array_length = sets_of_features.length;
	
		for (var i = 0; i < array_length; ++i) {
			var single_set = sets_of_features[i];
	
			this.add_features(single_set);
		}
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.insert_text = exports.insert_classes = exports.insert_to_parent = exports.save_child_in_features = exports.get_node_by_class = exports.is_loading = exports.is_not_dom = exports.is_dom = undefined;
	
	var _logic = __webpack_require__(8);
	
	var logic = _interopRequireWildcard(_logic);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var is_dom = exports.is_dom = function is_dom($element) {
		return $element instanceof HTMLElement;
	},
	    is_not_dom = exports.is_not_dom = function is_not_dom($element) {
		return !is_dom($element);
	},
	    is_loading = exports.is_loading = function is_loading($element) {
		if (logic.is_real_value($element)) return $element.firstElementChild && $element.firstElementChild.className === 'a-loading';
	
		return false;
	},
	    get_node_by_class = exports.get_node_by_class = function get_node_by_class(list_of_classes) {
		var string_of_classes = '';
	
		for (var i = 0; i < list_of_classes.length; ++i) {
			string_of_classes += '.' + list_of_classes[i];
		}return document.querySelector(string_of_classes);
	},
	    save_child_in_features = exports.save_child_in_features = function save_child_in_features(child, $child) {
		child.features.node = $child;
		child.features.content_node = $child;
	},
	    insert_to_parent = exports.insert_to_parent = function insert_to_parent(child) {
		var parent = child.features.parent,
		    $parent_content = parent.features.content_node,
		    $child = document.createElement(child.features.node_name);
	
		if (is_not_dom($parent_content) || is_not_dom($child)) throw 'Exception DOM: parent or child is not HTMLElement.';
	
		insert_classes(child, $child);
	
		if (is_loading($parent_content)) $parent_content.innerHTML = '';
	
		$parent_content.appendChild($child);
	
		save_child_in_features(child, $child);
	},
	    insert_classes = exports.insert_classes = function insert_classes(child, $child) {
		var list_of_classes = [],
		    string_of_classes = '',
		    child_classes = child.features.classes,
		    child_addl_classes = child.features.addl_classes;
	
		list_of_classes = list_of_classes.concat(child_classes);
	
		if (child_addl_classes) list_of_classes = list_of_classes.concat(child_addl_classes);
	
		for (var i = 0; i < list_of_classes.length; ++i) {
			string_of_classes += ' ' + list_of_classes[i];
		}$child.className += string_of_classes;
	},
	    insert_text = exports.insert_text = function insert_text(element) {
		var features = element.features,
		    $element = features.node;
	
		$element.innerText = features.text;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Set_Of_Features = Set_Of_Features;
	
	var _logic = __webpack_require__(8);
	
	var logic = _interopRequireWildcard(_logic);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function Set_Of_Features(features) {
	
		this.id = undefined;
		this.type = undefined;
		this.path = undefined;
	
		this.features = {
			text: features.text
		};
	
		set_base_data(this, features);
	}
	
	var set_base_data = function set_base_data(that, features) {
		var id = void 0,
		    type = void 0,
		    path = features.path;
	
		if (features.id && logic.is_type(features.id, 'string')) {
			id = features.id;
			switch (id.split('-', 1)[0]) {
				case 'a':
					type = 'atom';break;
				case 'm':
					type = 'molecule';break;
				case 'c':
					type = 'cell';break;
				case 'o':
					type = 'organism';break;
				case 'e':
					type = 'ecosystem';break;
			}
		}
	
		if (logic.is_defined(id)) {
			that.id = id;
			that.type = type;
			that.path = path;
		}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(13);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _structure = __webpack_require__(5);
	
	var _init_group = __webpack_require__(14);
	
	var _organism = __webpack_require__(15);
	
	_init_group.init_organism.ground.About_Something = function () {
		var features = {
			name: 'about_something',
			group: _init_group.init_organism.ground,
	
			children: [_structure.init.cell.paragraph.Ground_Block(), _structure.init.molecule.paragraph.With_Title()]
		};
	
		return new _organism.Organism(features);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init_organism = undefined;
	
	var _group = __webpack_require__(6);
	
	var _structure = __webpack_require__(5);
	
	var init_organism = _structure.init.organism;
	
	init_organism.ground = new _group.Group('ground', init_organism);
	init_organism.header = new _group.Group('header', init_organism);
	init_organism.searcher = new _group.Group('searcher', init_organism);
	
	exports.init_organism = init_organism;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Organism = Organism;
	
	var _logic = __webpack_require__(8);
	
	var logic = _interopRequireWildcard(_logic);
	
	var _dom = __webpack_require__(10);
	
	var dom = _interopRequireWildcard(_dom);
	
	var _ecosystemsview = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var base = {
		prefix: 'o',
		type_name: 'organism',
		ordinal: 0
	};
	
	function Organism(features) {
		_ecosystemsview.EcosystemsView.call(this, base, features);
	
		this.features.node = dom.get_node_by_class([this.features.classes[0]]);
		this.features.content_node = dom.get_node_by_class([this.features.classes[0] + '-content']);
	
		dom.insert_classes(this, this.features.node);
	}
	
	Organism.prototype = Object.create(_ecosystemsview.EcosystemsView.prototype);
	
	Organism.prototype.create = function (features) {
		console.log('creating organism');
	
		this.create_lower(this);
	
		if (logic.is_object(features)) if (logic.is_object(features.organisms_features)) this.add_features(features.organisms_features[this.features.html_name]);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(17);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _structure = __webpack_require__(5);
	
	var _init_group = __webpack_require__(18);
	
	var _cell = __webpack_require__(19);
	
	_init_group.init_cell.paragraph.Ground_Block = function () {
		var features = {
			name: 'ground_block',
			group: _init_group.init_cell.paragraph,
	
			children: [_structure.init.molecule.paragraph.With_Title(), _structure.init.molecule.paragraph.Without_Title()]
		};
	
		return new _cell.Cell(features);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init_cell = undefined;
	
	var _group = __webpack_require__(6);
	
	var _structure = __webpack_require__(5);
	
	var init_cell = _structure.init.cell;
	
	init_cell.paragraph = new _group.Group('paragraph', init_cell);
	
	exports.init_cell = init_cell;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Cell = Cell;
	
	var _logic = __webpack_require__(8);
	
	var logic = _interopRequireWildcard(_logic);
	
	var _dom = __webpack_require__(10);
	
	var dom = _interopRequireWildcard(_dom);
	
	var _ecosystemsview = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var base = {
		prefix: 'c',
		type_name: 'cell',
		ordinal: 0
	};
	
	function Cell(features) {
		_ecosystemsview.EcosystemsView.call(this, base, features);
	
		this.features.node_name = logic.get_if_exist('div', features.node_name);
	}
	
	Cell.prototype = Object.create(_ecosystemsview.EcosystemsView.prototype);
	
	Cell.prototype.create = function (features, parent) {
		console.log('creating cell');
	
		this.features.parent = parent;
	
		dom.insert_to_parent(this);
		this.create_lower(this);
	
		if (logic.is_object(features)) if (logic.is_object(features.cells_features)) this.add_features(features.cells_features[this.features.html_name]);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(21);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _structure = __webpack_require__(5);
	
	var _init_group = __webpack_require__(22);
	
	var _molecule = __webpack_require__(23);
	
	_init_group.init_molecule.paragraph.With_Title = function () {
		var features = {
			name: 'with_title',
			group: _init_group.init_molecule.paragraph,
	
			children: [_structure.init.atom.section.Title(), _structure.init.atom.section.Paragraph()]
		};
	
		return new _molecule.Molecule(features);
	};
	
	_init_group.init_molecule.paragraph.Without_Title = function () {
		var features = {
			name: 'without_title',
			group: _init_group.init_molecule.paragraph,
	
			children: [_structure.init.atom.section.Paragraph()]
		};
	
		return new _molecule.Molecule(features);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init_molecule = undefined;
	
	var _group = __webpack_require__(6);
	
	var _structure = __webpack_require__(5);
	
	var init_molecule = _structure.init.molecule;
	
	init_molecule.paragraph = new _group.Group('paragraph', init_molecule);
	
	exports.init_molecule = init_molecule;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Molecule = Molecule;
	
	var _logic = __webpack_require__(8);
	
	var logic = _interopRequireWildcard(_logic);
	
	var _dom = __webpack_require__(10);
	
	var dom = _interopRequireWildcard(_dom);
	
	var _ecosystemsview = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var base = {
		prefix: 'm',
		type_name: 'molecule',
		ordinal: 0
	};
	
	function Molecule(features) {
		_ecosystemsview.EcosystemsView.call(this, base, features);
	
		this.features.node_name = logic.get_if_exist('div', features.node_name);
	}
	
	Molecule.prototype = Object.create(_ecosystemsview.EcosystemsView.prototype);
	
	Molecule.prototype.create = function (features, parent) {
		console.log('creating molecule');
	
		this.features.parent = parent;
	
		dom.insert_to_parent(this);
		this.create_lower(this);
	
		if (logic.is_object(features)) if (logic.is_object(features.molecules_features)) this.add_features(features.molecules_features[this.features.html_name]);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(25);
	
	__webpack_require__(26);
	
	__webpack_require__(27);
	
	__webpack_require__(32);
	
	__webpack_require__(33);
	
	__webpack_require__(34);

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(28);
	
	__webpack_require__(31);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _init_group = __webpack_require__(29);
	
	var _atom = __webpack_require__(30);
	
	_init_group.init_group.section.Title = function () {
		var features = {
			name: 'title',
			group: _init_group.init_group.section,
	
			node_name: 'h1',
			addl_classes: 'homer',
			css: {}
		};
	
		return new _atom.Atom(features);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init_group = undefined;
	
	var _group = __webpack_require__(6);
	
	var _structure = __webpack_require__(5);
	
	var init_group = _structure.init.atom;
	
	init_group.form = new _group.Group('form', init_group);
	init_group.group = new _group.Group('group', init_group);
	init_group.section = new _group.Group('section', init_group);
	init_group.source = new _group.Group('source', init_group);
	init_group.table = new _group.Group('table', init_group);
	init_group.text = new _group.Group('text', init_group);
	
	exports.init_group = init_group;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Atom = Atom;
	
	var _logic = __webpack_require__(8);
	
	var logic = _interopRequireWildcard(_logic);
	
	var _dom = __webpack_require__(10);
	
	var dom = _interopRequireWildcard(_dom);
	
	var _ecosystemsview = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var base = {
		prefix: 'a',
		type_name: 'atom',
		ordinal: 0
	};
	
	function Atom(features) {
		_ecosystemsview.EcosystemsView.call(this, base, features);
	
		delete this.features.children;
	
		this.features.node_name = features.node_name;
		this.features.text = logic.get_if_exist('...', features.text);
	}
	
	Atom.prototype = Object.create(_ecosystemsview.EcosystemsView.prototype);
	
	delete Atom.prototype.create_lower;
	
	Atom.prototype.create = function (features, parent) {
		console.log('creating atom');
	
		this.features.parent = parent;
		dom.insert_to_parent(this);
	
		if (logic.is_object(features)) if (logic.is_object(features.atoms_features)) this.add_features(features.atoms_features[this.features.html_name]);
	
		if (logic.is_defined(this.features.text)) dom.insert_text(this);
	};
	
	Atom.prototype.update = function () {
		if (logic.is_defined(this.features.text)) dom.insert_text(this);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _init_group = __webpack_require__(29);
	
	var _atom = __webpack_require__(30);
	
	_init_group.init_group.section.Paragraph = function () {
		var features = {
			name: 'paragraph',
			group: _init_group.init_group.section,
	
			node_name: 'p',
			addl_classes: '',
			css: {
				'padding-left': '20px'
			}
		};
	
		return new _atom.Atom(features);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

/***/ }
/******/ ]);
//# sourceMappingURL=EcosystemView.bundle.js.map