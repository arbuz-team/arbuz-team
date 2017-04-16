/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../../untilities/structure'
import {Atom} from '../../init/05_atom'

// ----- Defining group ----- //
let
	init_group = init.atoms.sections,
	group_name = 'sections';
// TODO Repeat the above defining group in other files


init_group.Paragraph = function()
{
	let features = {
		group: group_name,
		name: 'paragraph',

		node_name: 'p',
		addl_classes: '',
		css: {
			'padding-left': '20px'
		},
	};

	return new Atom(features);
};

