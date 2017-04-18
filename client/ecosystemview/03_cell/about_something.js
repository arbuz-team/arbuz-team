/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../untilities/structure'
import {init_cell} from './_init_group'
import {Cell} from '../init/03_cell'


init_cell.paragraph.Ground_Block = function()
{
	let features = {
		name: 'ground_block',
		group: init_cell.paragraph,

		children: [
			init.molecule.paragraph.With_Title(),
			init.molecule.paragraph.Without_Title(),
		],
	};

	return new Cell(features);
};
