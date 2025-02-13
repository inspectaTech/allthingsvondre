# GHL notes

### Setup (experiment 1)   
- Add section (full wide)   
- add row (1 column)
- add elements (custom code)
- select custom code element
- open code editor
- paste ghl-index.html code

[DOMPurify docs](https://github.com/cure53/DOMPurify)   

#### local test server
```
  npx http-server -o index_babel.html
```

#### vite tests (using package.json)

```
"scripts": {
  "dev": "vite --open",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
},
```
> npm run dev
> npm run build
> 

[What is the difference between "vite" and "vite preview"?](https://stackoverflow.com/questions/71703933/what-is-the-difference-between-vite-and-vite-preview)   
- You need to run build before preview.
- Preview will always preview the latest build, and will not update automatically when code changes.

#### ghl custom code element
> I added a style tag in the head section and removed the html head and body tags
```
  <style>
    /* used to modify GHL chrome elements */
    .fullSection {
      padding-top: 0px !important;
    }
  
    .fullSection .c-wrapper {
      padding-top: 0px;
    }
  
    .inner {
      max-width: unset !important;
    }
  </style>
```
> using gh-index.html

### React + Vite

[ReactDOM.render vs. createRoot](https://thelonecoder.dev/javascript/react-js/reactdom-render-vs-createroot/)   

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


[pagepiling on github](https://github.com/alvarotrigo/pagePiling.js)

### modifications:

**creative-piling/js/script.js**
```
  if(0 && $(window).width() < 1020) {
      $('.pagedata').removeAttr('id');
      $('html, body').css('overflow-y', 'scroll');
  }
```
- i added a false (0) to disable the first condition

**creative-piling/css/style.css li:1999**
```
@media screen and (max-width: 991px) and (min-width: 768px) {
    section {
        /* padding: 9rem 0; */
    }
```
- i removed the padding

[punchgs is not defined ReferenceError: punchgs is not defined](https://stackoverflow.com/questions/49495784/integration-revolution-slider-with-webpack)    

```
  //change:
  var punchgs = window.GreenSockGlobals = {};
  // to:
  window.punchgs = window.GreenSockGlobals = {};
```

#### Bundleless react
```html
<!doctype html>
<html lang="en">
  <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/non-public/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite + React</title>
      <script crossorigin src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <!-- <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script> -->
      <script type="application/javascript" crossorigin src="https://unpkg.com/react@16.14.0/umd/react.development.js"></script>
      <!-- <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> -->
      <script type="application/javascript" crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script type="application/javascript" src="https://unpkg.com/handlebars@4.7.8/dist/handlebars.js"></script>
  </head>
  <body data-spy="scroll" data-target=".navbar" data-offset="90">
    <script>
      Babel.registerPreset("my-preset", {
      presets: [
        [Babel.availablePresets["es2017"], { modules: false }],
        [Babel.availablePresets["react"]]

      ],
      plugins: [
        [Babel.availablePlugins["transform-modules-umd"]]
      ]
      });
    </script>
    <div id="root" class="root"></div>
    <div class="deferMe"></div>
    <!-- <script type="text/babel" src="App.js" data-presets="my-preset" ></script> -->
    <!-- <script type="text/babel" src="index.js" data-presets="my-preset" ></script> -->
    <!-- <script type="module" src="/src/main.jsx"></script> -->
    <script type="text/babel" src="/src/components/Exporter/Exporter.js" data-presets="my-preset" defer></script>
    <script type="text/babel" src="/src/Test.js" data-presets="my-preset" defer></script>
    <script type="text/babel" src="/src/main.js" data-presets="my-preset" defer></script>
  </body>
</html>
```
> this works but it has limitations like you have to import each imported component?
> test to see if you have to import everything. I think <Exporter> component didn't have to be added in the html file
  - FAILS 
  - nope Exporter component had to be added by script tag before import in the react component can find the component
> check by commenting out App.js
  - FAILS

[React Hooks: useEffect() is called twice even if an empty array is used as an argument](https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar)    

Remove <React.StrictMode> from index.js This code will be
```js
// change

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// to

root.render(
    <App />
);

```

preload script

```html
  <script>
  
    let preload_js_array = [
      "https://cdn.jsdelivr.net/gh/inspectaTech/allthingsvondre@main/dist/assets/vendor-DgJEq-XA.js",
      "https://cdn.jsdelivr.net/gh/inspectaTech/allthingsvondre@main/dist/assets/common-EjicN4om.js",
      ""
    ];

    preload_js_array.forEach((addr)=>{
      let preloadLink = document.createElement("link");
      preloadLink.href = addr;
      preloadLink.rel = "modulepreload";
      preloadLink.as = "script";
      document.head.appendChild(preloadLink);
    });

    let preload_css_array = [
      "https://cdn.jsdelivr.net/gh/inspectaTech/allthingsvondre@main/dist/assets/common-BQeYJLDr.css",
      "https://cdn.jsdelivr.net/gh/inspectaTech/allthingsvondre@main/dist/assets/index-jwZRaxoV.css",
      ""
    ];

    preload_css_array.forEach((addr)=>{
      let preloadLink = document.createElement("link");
      preloadLink.href = addr;
      preloadLink.rel = "stylesheet";
      // preloadLink.as = "styles";
      document.head.appendChild(preloadLink);
    });

  </script>
```
> I didn't do this preload script nor do i know where the idea came from.
> i can use this preload link script like a template engine to inject my cdn or use local files in development
> i found a use for this script - it works for me like a template engine where i could add dynamic urls
> to link and script tags


```html
<script>

  let cdn_home = `https://cdn.jsdelivr.net/gh/inspectaTech/allthingsvondre@main`;
  let local_home = `.`;

  let local_files = 0;
  let use_home = local_files ? local_home : cdn_home;

  const link_up = ({ary, rel, as}) => {
    ary.forEach((addr)=>{
      let preloadLink = document.createElement("link");
      preloadLink.href = addr;
      preloadLink.rel = rel;
      preloadLink.as = as;
      document.head.appendChild(preloadLink);
    });
  }

  let preload_js_array = [
    `${use_home}/vendor/js/bundle.min.js`,
    // Plugin Js
    `${use_home}/vendor/js/owl.carousel.min.js`,
    `${use_home}/vendor/js/swiper.min.js`,
    `${use_home}/vendor/js/jquery.appear.js`,
    `${use_home}/vendor/js/TweenMax.min.js`,
    `${use_home}/vendor/js/parallaxie.min.js`,
    // REVOLUTION JS FILES
    `${use_home}/vendor/js/jquery.themepunch.tools.min.js`,
    `${use_home}/vendor/js/jquery.themepunch.revolution.min.js`,
    // SLIDER REVOLUTION EXTENSIONS
    `${use_home}/vendor/js/extensions/revolution.extension.actions.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.carousel.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.kenburn.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.layeranimation.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.migration.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.navigation.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.parallax.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.slideanims.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.video.min.js`,
    `${use_home}/vendor/js/extensions/revolution.extension.beforeafter.min.js`,
    `${use_home}/creative-piling/js/jquery.pagepiling.min.js`,
    `${use_home}/creative-piling/js/swiper-thumbnail.js`,
    `${use_home}/vendor/js/contact_us.js`,
    `${use_home}/creative-piling/js/script.js`,
  ];

  link_up({ary: preload_js_array,rel: "modulepreload", as: "script"});

  "https://cdn.jsdelivr.net/gh/inspectaTech/allthingsvondre@main/creative-piling/images/favicon.ico"
    // rel="icon",


  let preload_css_array = [
    // Bundle 
    `${use_home}/vendor/css/bundle.min.css`,
    // Plugin Css 
    
    `${use_home}/vendor/css/revolution-settings.min.css`,
    `${use_home}/vendor/css/owl.carousel.min.css`,
    `${use_home}/vendor/css/swiper.min.css`,
    `${use_home}/vendor/css/LineIcons.min.css`,
    // Style Sheet 
    `${use_home}/creative-piling/css/jquery.pagepiling.css`,
    `${use_home}/creative-piling/css/pagepiling.css`,
    `${use_home}/creative-piling/css/style.css`,
  ];

  link_up({ary: preload_css_array,rel: "stylesheet", as: "styles"});

</script>

```
[handlebars cdn](https://www.jsdelivr.com/package/npm/handlebars)   
- jsdelivr CDN
```html
  <script src="https://cdn.jsdelivr.net/npm/handlebars@4.7.8/dist/cjs/handlebars.min.js"></script>
```
FAILED

- unpkg CDN
```html
  <script type="application/javascript" src="https://unpkg.com/handlebars@4.7.8/dist/handlebars.js"></script>
```
WORKS

GOTCHA: importing react and react-dom breaks the components (conflicts with the Global CDN properties)
```
  // import React from 'react'
  // import ReactDOM from 'react-dom'
```
> FAILS

CDN goals:

- i don't want a laundry list of script and link imports that may not load in time to be effective with the react driven handlebars script
> no lengthy "fn() let preloadLink = document.createElement("link");" preload arrays

- i don't want to import a long list of links along with the react cdn scripts, i want to import as few scripts as possible
> 4 little CDN import scripts would look so clean in GHL
  to do this i need
  - npm install all vendor pkgs
  - import all template js and css files in the react components
  - i should only have to add the gitHub repository/dist/index.html CDN links - no other template or vendor scripts

- can the packaged imports run without a babel import effort? 
> i want this self contained with no extra scripting
WORKS
  it seems to be running without the babel import effort.  Just by adding the /dist/index.html script/link tags
```
  npx http-server -o dist/
```
WORKS

- can i upload to Github and import the 4 script tags as a CDN into GHL code block? 
> (final boss)

- finally i may want a dynamic import so i could switch between local and cloud src using a online/local boolean   
> possible short preload arrays (totally unneccesary,optional - "icing on the cake")