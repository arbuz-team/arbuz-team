/**
 * Created by mrskull on 12.04.17.
 */

import {Group} from './group'


export let
	EV = {},
	init = {};

init.atom =         new Group('atom');
init.molecule =     new Group('molecule');
init.cell =         new Group('cell');
init.organism =     new Group('organism');
init.ecosystem =    new Group('ecosystem');

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

// TODO Service for structure

export {get_element as $EV}