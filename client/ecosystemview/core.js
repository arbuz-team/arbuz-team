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
			id: 'a1-section-title',
			text: 'To jest tytuł!',
		}),
		new Set_Of_Features({
			id: 'a2-section-paragraph',
			text: 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' +
				'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' +
				'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.',
		}),
		new Set_Of_Features({
			id: 'a4-section-title',
			text: 'To jest tytuł!',
		}),
		new Set_Of_Features({
			id: 'a5-section-paragraph',
			text: 'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' +
			'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.' +
			'Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit. Tutaj rozpoczyna się akapit.',
		}),
	];


	init.ecosystem.About_Something(sets_of_features);
});