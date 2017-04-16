/**
 * Created by mrskull on 12.04.17.
 */

import * as logic from '../untilities/logic'
import * as dom from '../untilities/dom'
import {EV, $EV} from '../untilities/structure'
import {Set_Of_Features} from '../untilities/feature'


export function EcosystemsView(base, features)
{
	++base.ordinal;


	// ----- Variables definitions ---- //

	let
		id_element =    this.generate_id(base, features),
		class_group =   base.prefix +'-'+ features.group,
		class_name =   class_group +'-'+ features.name;


	this.features = {
		id:             id_element,
		classes:        [class_group, class_name],

		group:          features.group,
		name:           features.name,

		node_name:      'div',
		addl_classes:   features.addl_classes,

		node:           undefined,
		content_node:   undefined,
		children:       [],
		parent:         undefined,
	};

	this.add_children_to_features(features.children);
	this.insert_to_structure(base);
}



// --------------------- INSERT -------------------------

EcosystemsView.prototype.insert_to_structure = function(base)
{
	EV[base.type_name +'s'][this.features.id] = this;
};


// --------------------- GENERATE -------------------------


EcosystemsView.prototype.generate_id = function(base, features)
{
	return base.prefix + base.ordinal +'-'+ features.group +'-'+ features.name;
};


// --------------------- UPDATE -------------------------


EcosystemsView.prototype.update = ()=>{logic.define_abstract_function()};


EcosystemsView.prototype.update_lower = function(parent)
{
	let children = parent.features.children;

	for(let single in children)
		if(children.hasOwnProperty(single))
			children[single].create(children_features);
};


// --------------------- CREATE -------------------------


EcosystemsView.prototype.create = ()=>{logic.define_abstract_function()};


EcosystemsView.prototype.create_lower = function(parent, if_parent)
{
	let children = parent.features.children;

	for(let single in children)
		if(children.hasOwnProperty(single))
		{
			if(if_parent === false)
				children[single].create(undefined);
			else
				children[single].create(undefined, parent);
		}
};


// --------------------- ADD -------------------------

// ----- FOR HTML

EcosystemsView.prototype.add_classes = function(list_of_classes)
{
	let set_of_features = new Set_Of_Features({
		addl_classes: list_of_classes,
	});

	this.add_features(set_of_features);

	dom.insert_classes(this, this.features.node);
};

// ----- FEATURES

EcosystemsView.prototype.add_children_to_features = function(list_children)
{
	if(logic.is_array(list_children))
	{
		let list_length = list_children.length;

		for(let i = 0; i < list_length; ++i)
			if(list_children[i].constructor === EcosystemsView)
				this.features.children.push(list_children[i]);
	}
};


EcosystemsView.prototype.add_features = function(set_of_features)
{
	let
		id = set_of_features.id,
		// type = set_of_features.type,
		// path = set_of_features.path,
		children = set_of_features.features.children,
		features = set_of_features.features,
		$element = $EV(id);

	delete set_of_features.id;
	delete set_of_features.type;
	delete set_of_features.path;
	delete set_of_features.features.children;


	this.add_children_to_features(children);

	if($element)
	{
		for(let feature in features)
			if(features.hasOwnProperty(feature))
				if(feature !== 'children_features')
				{
					$element.features[feature] = features[feature];
					$element.update();
				}
	}
};


EcosystemsView.prototype.add_sets_of_features = function(sets_of_features)
{
	let array_length = sets_of_features.length;

	for(let i = 0; i < array_length; ++i)
	{
		let single_set = sets_of_features[i];

		this.add_features(single_set);
	}
};










