/**
 * Created by mrskull on 12.04.17.
 */

export let
	EV = {},
	init = {};

init.atoms = {};
init.molecules = {};
init.cells = {};
init.organisms = {};
init.ecosystems = {};

EV.atoms = {};
EV.molecules = {};
EV.cells = {};
EV.organisms = {};
EV.ecosystems = {};

let
	get_element = function(id)
	{
		let
			array = [EV.ecosystems, EV.organisms, EV.cells, EV.molecules, EV.atoms],
			array_length = array.length;

		// Searching element in structure
		for(let i = 0; i < array_length; ++i)
		{
			let level = array[i];

		    for(let element in level)
		        if(level.hasOwnProperty(element))
		        	if(level[element].features.id === id)
		                return level[element];
		}
	};

export {get_element as $EV}