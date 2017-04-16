/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../../untilities/structure'
import {Atom} from '../../init/05_atom'

// ----- Defining group ----- //
let
	init_group = init.atoms.sections,
	group_name = 'sections';


init_group.Title = function()
{
	let features = {
		group: group_name,
		name: 'title',

		node_name: 'h1',
		addl_classes: 'homer',
		css: {},
	};

	return new Atom(features);
};
