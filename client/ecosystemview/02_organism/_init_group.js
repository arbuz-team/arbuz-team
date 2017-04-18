/**
 * Created by mrskull on 12.04.17.
 */

import {Group} from '../untilities/group'
import {init} from '../untilities/structure'


let init_organism = init.organism;

// ----- Defining groups ----- //
init_organism.ground =      new Group('ground', init_organism);
init_organism.header =      new Group('header', init_organism);
init_organism.searcher =    new Group('searcher', init_organism);

export {init_organism}


