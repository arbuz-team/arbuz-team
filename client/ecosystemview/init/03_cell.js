/**
 * Created by mrskull on 12.04.17.
 */

import * as logic from '../untilities/logic'
import * as dom from '../untilities/dom'
import {EcosystemsView} from './00_ecosystemsview'

let base = {
	prefix: 'c',
	type_name: 'cell',
	ordinal: 0,
};


export function Cell(features)
{
	EcosystemsView.call(this, base, features);


	// ----- Variables definitions ---- //

	this.features.node_name = logic.get_if_exist('div', features.node_name);
}

Cell.prototype = Object.create(EcosystemsView.prototype);




// --------------------- Function definitions -------------------------

Cell.prototype.create = function(features, parent)
{
	console.log('creating cell');

	this.features.parent = parent;

	dom.insert_to_parent(this);
	this.create_lower(this);

	if(logic.is_object(features))
		if(logic.is_object(features.cells_features))
			this.add_features(features.cells_features[this.features.html_name]);
};