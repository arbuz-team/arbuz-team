/**
 * Created by mrskull on 12.04.17.
 */

import * as logic from '../untilities/logic'
import * as dom from '../untilities/dom'
import {EcosystemsView} from './00_ecosystemsview'

let base = {
	prefix: 'm',
	type_name: 'molecule',
	ordinal: 0,
};


export function Molecule(features)
{
	EcosystemsView.call(this, base, features);


	// ----- Variables definitions ---- //

	this.features.node_name = logic.get_if_exist('div', features.node_name);
}

Molecule.prototype = Object.create(EcosystemsView.prototype);




// --------------------- Function definitions -------------------------

Molecule.prototype.create = function(special_features, parent)
{
	console.log('creating molecule');

	this.features.parent = parent;

	dom.insert_to_parent(this);
	this.create_lower(this);

	if(logic.is_object(special_features))
		if(logic.is_object(special_features.molecules_features))
			this.add_features(special_features.molecules_features[this.features.html_name]);
};