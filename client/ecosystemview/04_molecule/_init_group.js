/**
 * Created by mrskull on 12.04.17.
 */

import {Group} from '../untilities/group'
import {init} from '../untilities/structure'


let init_molecule = init.molecule;

// ----- Defining groups ----- //
init_molecule.paragraph = new Group('paragraph', init_molecule);

export {init_molecule}

