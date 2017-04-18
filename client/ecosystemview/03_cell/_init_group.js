/**
 * Created by mrskull on 12.04.17.
 */

import {Group} from '../untilities/group'
import {init} from '../untilities/structure'


let init_cell = init.cell;

// ----- Defining groups ----- //
init_cell.paragraph = new Group('paragraph', init_cell);

export {init_cell}


