/**
 * Created by mrskull on 12.04.17.
 */

let
  templates = {};

// ------------------ templates (ecosystems)

templates.new({
  name: 'name',
  shell: 'name',
  organ_system: 'name',
  organs: [
    organs.cart_title,
    organs.cart_list,
    organs.cart_buttons,
  ],
  molecules: [
    molecules.cart_buttons,
  ]
});