# React + Vite

[ReactDOM.render vs. createRoot](https://thelonecoder.dev/javascript/react-js/reactdom-render-vs-createroot/)   

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

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
