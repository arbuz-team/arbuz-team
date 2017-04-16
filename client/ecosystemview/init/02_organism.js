/**
 * Created by mrskull on 12.04.17.
 */

import * as logic from '../untilities/logic'
import * as dom from '../untilities/dom'
import {EcosystemsView} from './00_ecosystemsview'

let base = {
	prefix: 'o',
	type_name: 'organism',
	ordinal: 0,
};


export function Organism(features)
{
	EcosystemsView.call(this, base, features);


	// ----- Variables definitions ---- //

	this.features.node = dom.get_node_by_class([this.features.classes[0]]);
	this.features.content_node = dom.get_node_by_class([this.features.classes[0] +'-content']);


	// ----- Functions init ---- //

	dom.insert_classes(this, this.features.node);
}

Organism.prototype = Object.create(EcosystemsView.prototype);




// --------------------- Function definitions -------------------------

Organism.prototype.create = function(special_features)
{
	console.log('creating organism');

	this.create_lower(this);

	if(logic.is_object(special_features))
		if(logic.is_object(special_features.organisms_features))
			this.add_features(special_features.organisms_features[this.features.html_name]);
};