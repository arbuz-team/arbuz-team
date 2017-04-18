/**
 * Created by mrskull on 12.04.17.
 */

import * as logic from '../untilities/logic'
import * as dom from '../untilities/dom'
import {EcosystemsView} from './00_ecosystemsview'

let base = {
	prefix: 'a',
	type_name: 'atom',
	ordinal: 0,
};


export function Atom(features)
{
	EcosystemsView.call(this, base, features);


	// ----- Variables definitions ---- //

	delete this.features.children;

	this.features.node_name = features.node_name;
	this.features.text = logic.get_if_exist('...', features.text);
}

Atom.prototype = Object.create(EcosystemsView.prototype);




// --------------------- Function definitions -------------------------

delete Atom.prototype.create_lower;


Atom.prototype.create = function(features, parent)
{
	console.log('creating atom');

	this.features.parent = parent;
	dom.insert_to_parent(this);

	if(logic.is_object(features))
		if(logic.is_object(features.atoms_features))
			this.add_features(features.atoms_features[this.features.html_name]);

	if(logic.is_defined(this.features.text))
		dom.insert_text(this);
};


Atom.prototype.update = function()
{
	if(logic.is_defined(this.features.text))
		dom.insert_text(this);
};