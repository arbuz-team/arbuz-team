/**
 * Created by mrskull on 16.04.17.
 */

export function Group(init_name, init_parent)
{
	if(typeof init_name !== 'string')
		throw 'Group error: name must be string.';

	if(typeof init_parent !== 'undefined')
		if(init_parent.constructor !== Group)
			throw 'Group error: parent is not Group object.';


	// ----- Variables definitions ---- //

	let
		name = init_name,
		parent = init_parent;



	// ----- Functions definitions ---- //

	this.get_name = function()
	{
		return name;
	};


	this.get_parent = function()
	{
		if(parent.constructor === Group)
			return parent;
		else
			return undefined
	};


	this.get_parent_name = function()
	{
		if(parent.constructor === Group)
			return parent.get_name();
		else
			return undefined
	};
}