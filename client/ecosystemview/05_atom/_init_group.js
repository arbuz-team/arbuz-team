/**
 * Created by mrskull on 12.04.17.
 */

import {Group} from '../untilities/group'
import {init} from '../untilities/structure'


let init_group = init.atom;

// ----- Defining groups ----- //
init_group.form =       new Group('form', init_group);
init_group.group =      new Group('group', init_group);
init_group.section =    new Group('section', init_group);
init_group.source =     new Group('source', init_group);
init_group.table =      new Group('table', init_group);
init_group.text =       new Group('text', init_group);

export {init_group}


