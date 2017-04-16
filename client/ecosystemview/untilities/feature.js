/**
 * Created by mrskull on 13.04.17.
 */

import * as logic from './logic'


export function Set_Of_Features(features)
{
	// ----- Variables definitions ---- //

	this.id = undefined;
	this.type = undefined;
	this.path = undefined;
	
	this.features = {
		text:                     features.text,
		// features_of_children:     features.features_of_children,
	};

	set_base_data(this, features);
}


// ----- Function definitions ---- //

let

	set_base_data = function(that, features)
	{
		let
			id, type,
			path = features.path;

		if(features.id && logic.is_type(features.id, 'string'))
		{
			id = features.id;
			switch(id.split('-', 1)[0])
			{
				case 'a': type = 'atom';        break;
				case 'm': type = 'molecule';    break;
				case 'c': type = 'cell';        break;
				case 'o': type = 'organism';    break;
				case 'e': type = 'ecosystem';   break;
			}
		}


		if(logic.is_defined(id))
		{
			that.id = id;
			that.type = type;
			that.path = path;
		}
	};