# allthingsvondre

[pagepiling on github](https://github.com/alvarotrigo/pagePiling.js)

modifications:

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