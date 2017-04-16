/**
 * Created by mrskull on 12.04.17.
 */

export let

	define_abstract_function = function()
	{
		throw 'EcosystemsView error: This is required function';
	},


	get_if_exist = function(default_val, new_val)
	{
		if(new_val)
			return new_val;
		else
			return default_val;
	},


	is_type = function(obj, type)
	{
		return typeof obj === type;
	},


	is_not_type = function(obj, type)
	{
		return typeof obj !== type;
	},


	is_object = function(obj)
	{
		return is_type(obj, 'object');
	},


	is_array = function(obj)
	{
		return Array.isArray(obj);
	},


	is_defined = function(obj)
	{
		return is_not_type(obj, 'undefined');
	},


	is_real_value = function(obj)
	{
		return obj && obj !== 'null' && obj !== 'undefined';
	},


	is_not_real_value = function(obj)
	{
		return !is_real_value(obj);
	};

