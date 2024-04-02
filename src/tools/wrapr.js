
  // const {wrapr} = require('../../tools/wrapr');
  // const {exists} = require('./exists');
  import { exists } from './exists';

  export const wrapr = ({
    name = "",
    id=name || "",
    home,
    custom = "",
    iUN = Math.round(Math.random() * 10000)
  }) => {

    let iUN2 = `_${iUN}`;
    let modal_home = document.querySelector(`${home}`);// input should include . or #
    let wrapr_cont = document.createElement('div');
    wrapr_cont.id = id;
    wrapr_cont.className = `${id}${ exists(id) ? iUN2 : ""} ${id} ${name}${ exists(id) ? iUN2 : ""} ${name} ${custom}`;//block i can control visibility here
    modal_home.appendChild(wrapr_cont);

    // return the object
    return wrapr_cont;

  }// wrapr

  // let share_modal_cont = wrapr({name:"clip_modal_cont",iUN, home: ".modal_cont", custom:"w3-part block"});

  // let modal_temp_cont = wrapr({name:"modal_temp_cont", home: ".modal_cont", custom:"w3-part block"});
