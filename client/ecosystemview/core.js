/**
 * Created by mrskull on 12.04.17.
 */

import './_import'

import {EV, init} from './untilities/structure'
import {Set_Of_Features} from './untilities/feature'

window.addEventListener('load', ()=>{
	console.log(EV);

	let sets_of_features = [
		new Set_Of_Features({
			id: 'a1-header-title',
			text: 'To jest tytuł!',
		}),
		new Set_Of_Features({
			id: 'a2-paragraph-standard',
			text: 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' +
				'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' +
				'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.',
		}),
		new Set_Of_Features({
			id: 'a4-header-title',
			text: 'To jest tytuł!',
		}),
		new Set_Of_Features({
			id: 'a5-paragraph-standard',
			text: 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' +
			'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' +
			'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.',
		}),
	];

	init.ecosystems.About_Something(sets_of_features);
});