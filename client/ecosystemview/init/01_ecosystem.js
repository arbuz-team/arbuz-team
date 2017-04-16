/**
 * Created by mrskull on 12.04.17.
 */

import * as logic from '../untilities/logic'
import {EcosystemsView} from './00_ecosystemsview'

let base = {
	prefix: 'e',
	type_name: 'ecosystem',
	ordinal: 0,
};


export function Ecosystem(features, start_sets_of_features)
{
	EcosystemsView.call(this, base, features);


	// ----- Variables definitions ---- //

	let
		id_element =   this.generate_id(base, features),
		class_name =   base.prefix +'-'+ features.name;

	this.features = {
		id:                     id_element,
		classes:                class_name,

		name:                   features.name,
		addl_classes:           features.addl_classes,
		children:               features.children,
	};


	// ----- Functions init ---- //

	this.create(start_sets_of_features);
}

Ecosystem.prototype = Object.create(EcosystemsView.prototype);




// --------------------- Function definitions -------------------------


Ecosystem.prototype.generate_id = function(base, features)
{
	return base.prefix + base.ordinal +'-'+ features.name;
};


Ecosystem.prototype.update = function(sets_of_features)
{
	if(logic.is_object(sets_of_features))
		this.add_sets_of_features(sets_of_features);

	this.update_lower(this);
};


Ecosystem.prototype.create = function(sets_of_features)
{
	console.log('creating ecosystem');

	this.create_lower(this, false);

	if(logic.is_object(sets_of_features))
		this.add_sets_of_features(sets_of_features);
};