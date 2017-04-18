/**
 * Created by mrskull on 12.04.17.
 */

import {init_group} from '../_init_group'
import {Atom} from '../../init/05_atom'


init_group.section.Title = function()
{
	let features = {
		name: 'title',
		group: init_group.section,

		node_name: 'h1',
		addl_classes: 'homer',
		css: {},
	};

	return new Atom(features);
};
