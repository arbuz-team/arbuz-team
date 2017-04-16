/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../untilities/structure'
import {Cell} from '../init/03_cell'

// ----- Defining group ----- //
init.cells.about_something = {};
let init_group = init.cells.about_something;


init_group.Ground_Block = function()
{
	let features = {
		group: 'about_something',
		name: 'ground_block',

		children: [
			init.molecules.paragraph.With_Title(),
			init.molecules.paragraph.Without_Title(),
		],
	};

	return new Cell(features);
};
