/**
 * Created by mrskull on 12.04.17.
 */

// ------------------ organisms

organisms.new({
	name: 'cart',
	shell: 'om-cart',
	organ_system: 'om-cart-content',
	organs: [
		organs.cart_title,
		organs.cart_list,
    organs.cart_buttons,
	]
});
