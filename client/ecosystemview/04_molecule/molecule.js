/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../untilities/structure'
import {Molecule} from '../init/04_molecule'

// ----- Defining group ----- //
init.molecules.paragraph = {};
let init_group = init.molecules.paragraph;


init_group.With_Title = function()
{
	let features = {
		group: 'paragraph',
		name: 'with_title',

		children: [
			init.atoms.header.Title(),
			init.atoms.paragraph.Standard(),
		],
	};

	return new Molecule(features);
};


init_group.Without_Title = function()
{
	let features = {
		group: 'paragraph',
		name: 'without_title',

		children: [
			init.atoms.paragraph.Standard(),
		],
	};

	return new Molecule(features);
};