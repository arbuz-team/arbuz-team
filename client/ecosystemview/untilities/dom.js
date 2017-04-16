/**
 * Created by mrskull on 12.04.17.
 */

import * as logic from './logic'


export let

	// --------------------- IS -------------------------

	is_dom = function($element)
	{
		return $element instanceof HTMLElement;
	},


	is_not_dom = function($element)
	{
		return !is_dom($element);
	},


	is_loading = function($element)
	{
		if(logic.is_real_value($element))
			return $element.firstElementChild && $element.firstElementChild.className === 'a-loading';

		return false;
	},


	// --------------------- GET -------------------------


	get_node_by_class = function(list_of_classes)
	{
		let string_of_classes = '';

		for(let i = 0; i < list_of_classes.length; ++i)
			string_of_classes += '.'+ list_of_classes[i];

		return document.querySelector(string_of_classes);
	},


	// --------------------- SAVE -------------------------


	save_child_in_features = function(child, $child)
	{
		child.features.node = $child;
		child.features.content_node = $child;
	},


	// --------------------- INSERT -------------------------


	insert_to_parent = function(child)
	{
		let
			parent = child.features.parent,
			$parent_content = parent.features.content_node,
			$child = document.createElement(child.features.node_name);

		if(is_not_dom($parent_content) || is_not_dom($child))
			throw 'Exception DOM: parent or child is not HTMLElement.';


		insert_classes(child, $child);

		if(is_loading($parent_content))
			$parent_content.innerHTML = '';

		$parent_content.appendChild($child);

		save_child_in_features(child, $child);
	},


	insert_classes = function(child, $child)
	{
		let
			list_of_classes = [],
			string_of_classes = '',
			child_classes = child.features.classes,
			child_addl_classes = child.features.addl_classes;


		list_of_classes = list_of_classes.concat(child_classes);

		if(child_addl_classes)
			list_of_classes = list_of_classes.concat(child_addl_classes);


		for(let i = 0; i < list_of_classes.length; ++i)
			string_of_classes += ' '+ list_of_classes[i];


		$child.className += string_of_classes;
	},


	insert_text = function(element)
	{
		let
			features = element.features,
			$element = features.node;

		$element.innerText = features.text;
	};

