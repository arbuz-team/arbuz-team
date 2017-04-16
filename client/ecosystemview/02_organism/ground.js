/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../untilities/structure'
import {Organism} from '../init/02_organism'

// ----- Defining group ----- //
init.organisms.ground = {};
let init_group = init.organisms.ground;


init_group.About_Something = function()
{
	let features = {
		group: 'ground',
		name: 'about_something',

		children: [
			init.cells.about_something.Ground_Block(),
			init.molecules.paragraph.With_Title(),
		],
	};

	return new Organism(features);
};