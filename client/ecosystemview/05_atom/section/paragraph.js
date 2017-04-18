/**
 * Created by mrskull on 12.04.17.
 */

import {init_group} from '../_init_group'
import {Atom} from '../../init/05_atom'


init_group.section.Paragraph = function()
{
	let features = {
		name: 'paragraph',
		group: init_group.section,

		node_name: 'p',
		addl_classes: '',
		css: {
			'padding-left': '20px'
		},
	};

	return new Atom(features);
};

