/**
 * Created by mrskull on 12.04.17.
 */

import {init} from '../untilities/structure'
import {Ecosystem} from '../init/01_ecosystem'


init.ecosystem.About_Something = function(sets_of_features)
{
	let features = {
		name: 'about_something',
		group: init.ecosystem,

		children: [
			init.organism.ground.About_Something(),
		],
	};

	return new Ecosystem(features, sets_of_features);
};