import React, {useEffect} from 'react'

// // JavaScript
// import '../../../vendor/js/bundle.min.js';

// // Plugin Js
// import '../../../vendor/js/owl.carousel.min.js';
// import '../../../vendor/js/swiper.min.js';
// import '../../../vendor/js/jquery.appear.js';
// import '../../../vendor/js/TweenMax.min.js';



// import '../../../vendor/js/parallaxie.min.js';
// // REVOLUTION JS FILES
// import '../../../vendor/js/jquery.themepunch.tools.min.js';
// import '../../../vendor/js/jquery.themepunch.revolution.min.js';
// // SLIDER REVOLUTION EXTENSIONS
// import '../../../vendor/js/extensions/revolution.extension.actions.min.js';
// import '../../../vendor/js/extensions/revolution.extension.carousel.min.js';
// import '../../../vendor/js/extensions/revolution.extension.kenburn.min.js';
// import '../../../vendor/js/extensions/revolution.extension.layeranimation.min.js';
// import '../../../vendor/js/extensions/revolution.extension.migration.min.js';
// import '../../../vendor/js/extensions/revolution.extension.navigation.min.js';
// import '../../../vendor/js/extensions/revolution.extension.parallax.min.js';
// import '../../../vendor/js/extensions/revolution.extension.slideanims.min.js';
// import '../../../vendor/js/extensions/revolution.extension.video.min.js';
// import '../../../vendor/js/extensions/revolution.extension.beforeafter.min.js';

// import '../../../creative-piling/js/jquery.pagepiling.min.js';
// import '../../../creative-piling/js/swiper-thumbnail.js';
// import '../../../vendor/js/contact_us.js';
import '../../../creative-piling/js/script.js';

const MegaOneJsDefer = ({
  callback
}) => {

  useEffect(() => {
    
    if(0){
      console.group("Vite");
      console.log(`[MegaOneJSDefer] accessed`)
      console.groupEnd();
    }
    
    if(callback) callback();
  
    return () => {
      
    }
  }, [])

  // return (
  //   <div>MegaOneJsDefer</div>
  // )
  return null;
}

export default MegaOneJsDefer