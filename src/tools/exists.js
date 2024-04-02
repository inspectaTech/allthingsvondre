  // const {exists} = require('./lib/tools/exists.js');
export const exists = (item, notEmpty) => {
  try {
    let the_verdict = (item != null && typeof item != "undefined" && item != false) ? true : false;

    if(notEmpty){
      return (the_verdict && item != "") ? true : false;
    }else {
      return the_verdict;
    }
  } catch (err) {

    console.log(`[exists] error`,err);
    return false;
  }
}// exists

// i need to evaluate this "". should this evaluate as true or false by default - right now its true?
// this can't evaluate zero in this case its false
// "" ==  false // true so "" is actually caught in "" - notEmpty is probably doing absolutely nothing
