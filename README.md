
Windows-10-menu
==========
HTML windows 10 side menu [snippet]

## Demo
Demo : [joelthorner.com](http://joelthorner.com/snippet/windows-10-menu)

<div id="bigDesc" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true">
	<div class="panel-body">
	<h3>Features</h3>
  <ul>
   <li>Full responsive</li>
   <li>Scss configurable file</li>
   <li>Short js!</li>
   <li>Modular and expandable</li>
   <li>Free use <span class="fa fa-smile-o"></span></li>
  </ul>

  <h3>Demo extra requirements</h3>
  <ul>
   <li>Any icon font, <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank">Font Awesome</a></li>
   <li>jQuery 2x</li>
   <li>Perfect scrollbar plugin <a href="http://noraesae.github.io/perfect-scrollbar/" target="_blank">Perfect scrollbar</a></li>
  </ul>

  <h3>Basic structure guide</h3>
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

</div>
