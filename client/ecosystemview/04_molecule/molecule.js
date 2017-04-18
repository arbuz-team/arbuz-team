/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../untilities/structure'
import {init_molecule} from './_init_group'
import {Molecule} from '../init/04_molecule'


init_molecule.paragraph.With_Title = function()
{
	let features = {
		name: 'with_title',
		group: init_molecule.paragraph,

		children: [
			init.atom.section.Title(),
			init.atom.section.Paragraph(),
		],
	};

	return new Molecule(features);
};


init_molecule.paragraph.Without_Title = function()
{
	let features = {
		name: 'without_title',
		group: init_molecule.paragraph,

		children: [
			init.atom.section.Paragraph(),
		],
	};

	return new Molecule(features);
};