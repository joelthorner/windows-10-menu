
Windows-10-menu
==========
HTML windows 10 side menu [snippet]

## Demo
Demo : [http://joelthorner.github.io/windows-10-menu/](http://joelthorner.github.io/windows-10-menu/)

### Features

- Full responsive
- Scss configurable file
- Short js!
- Modular and expandable
- Free use :)


### Demo extra requirements
- Any icon font, [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- jQuery 2x
- Perfect scrollbar plugin [Perfect scrollbar](http://noraesae.github.io/perfect-scrollbar/)

### Basic structure guide
```html
<main class="page"></main>
<aside class="menu-bar">
   <div class="scrollable">
      <ul class="items">
         <li><a href="#" data-toggle="w-dropdown" data-target="#w-dropdown-1"></a></li>
      </ul>
   </div>

   <div class="footer-menu-bar"></div>
</aside>

<div id="w-dropdown-1" class="w-dropdown-menu">
   <div class="scrollable">...</div>
</div>
```
