/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../untilities/structure'
import {init_organism} from './_init_group'
import {Organism} from '../init/02_organism'


init_organism.ground.About_Something = function()
{
	let features = {
		name: 'about_something',
		group: init_organism.ground,

		children: [
			init.cell.paragraph.Ground_Block(),
			init.molecule.paragraph.With_Title(),
		],
	};

	return new Organism(features);
};