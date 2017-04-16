/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../untilities/structure'
import {Organism} from '../init/02_organism'


init.organisms.About_Something = function()
{
	let features = {
		group: 'searcher',
		name: 'about_something',

		children: [
			// init.cells.Ground_Block(),
		],
	};

	return new Organism(features);
};