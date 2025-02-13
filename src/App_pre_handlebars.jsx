import React, { useState, useEffect, Suspense } from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './css/style.scss';
import { wrapr } from './tools/wrapr';
// import htmlContent from '../gh-index.html?raw';
import htmlContent from '../vite-index.html?raw';
import Exporter from './components/Exporter'
import DeferMe from './components/DeferMe'



import '../vendor/css/bundle.min.css';
// Plugin Css
import '../vendor/css/revolution-settings.min.css';
import '../vendor/css/owl.carousel.min.css';
import '../vendor/css/swiper.min.css';
import '../vendor/css/LineIcons.min.css';
// Style Sheet
import '../creative-piling/css/jquery.pagepiling.css';
import '../creative-piling/css/pagepiling.css';
import '../creative-piling/css/style.css';

// JavaScript
import '../vendor/js/bundle.min.js';

// Plugin Js
import '../vendor/js/owl.carousel.min.js';
import '../vendor/js/swiper.min.js';
// 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
import '../vendor/js/jquery.appear.js';
import '../vendor/js/TweenMax.min.js';
import '../vendor/js/parallaxie.min.js';
// REVOLUTION JS FILES
import '../vendor/js/jquery.themepunch.tools.min.js';
import '../vendor/js/jquery.themepunch.revolution.min.js';
// SLIDER REVOLUTION EXTENSIONS
import '../vendor/js/extensions/revolution.extension.actions.min.js';
import '../vendor/js/extensions/revolution.extension.carousel.min.js';
import '../vendor/js/extensions/revolution.extension.kenburn.min.js';
import '../vendor/js/extensions/revolution.extension.layeranimation.min.js';
import '../vendor/js/extensions/revolution.extension.migration.min.js';
import '../vendor/js/extensions/revolution.extension.navigation.min.js';
import '../vendor/js/extensions/revolution.extension.parallax.min.js';
import '../vendor/js/extensions/revolution.extension.slideanims.min.js';
import '../vendor/js/extensions/revolution.extension.video.min.js';
import '../vendor/js/extensions/revolution.extension.beforeafter.min.js';

import '../creative-piling/js/jquery.pagepiling.min.js';
import '../creative-piling/js/swiper-thumbnail.js';
import '../vendor/js/contact_us.js';
import '../creative-piling/js/script.js';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    
    // addHtml();
    return () => {
      
    }
  }, [])

  const addHtml = () => { 
    // im not adding to Body so i may not need this
    // let part_temp_cont = wrapr({name:"part_temp_cont", home: ".root", custom:"w3-part block"});
    // const h_cont = htmlContent//(data);
    // const useHtml = (
    //   <>
    //     <div dangerouslySetInnerHTML={{ __html: h_cont }} className={`hbs_comp plax-bg`} />
    //     {/* <div dangerouslySetInnerHTML={{ __html: template(data) }} /> */}
    //   </>
    // );
    // // const root = ReactDOM.createRoot(document.querySelector('.root'));
    // // root.render(useHtml);
    // // const root = document.querySelector('.root');
    // const useExport = (
    //   <Exporter data={{home: "root", delay: 1}} >
    //     {useHtml}
    //   </Exporter>
    // )
    // // ReactDOM.hydrateRoot(root, useExport);
    // // ROOT.render(useExport);
    // ReactDOM.createPortal(
    //   useExport,
    //   document.getElementsByTagName('body'),
    // );
  }

  // digital business

  const h_cont = htmlContent//(data);
  const useHtml = (
    <>
      <div dangerouslySetInnerHTML={{ __html: h_cont }} className={`html_comp plax-bg`}  />
      {/* <div dangerouslySetInnerHTML={{ __html: template(data) }} /> */}
    </>
  );
  

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  return (
    <>
      <Exporter {...{home: "body", src: "tag", delay: 0}} >
        {useHtml}
      </Exporter>
      {/* <DeferMe compName="MegaOneClsDefer" delay={0} /> */}
      {/* <DeferMe compName="MegaOneJsDefer" delay={1} /> */}
    </>
  );
}

export default App
