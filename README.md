# windows-10-menu
HTML windows 10 side menu [snippet]

># [Demo](http://joelthorner.com/snippets/view/windows-10-menu)
># [joelthorner.com](http://joelthorner.com/)

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
<pre class="prettyprint prettyprinted"><span class="tag">&lt;main</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"page"</span><span class="tag">&gt;&lt;/main&gt;</span><span class="pln">
</span><span class="tag">&lt;aside</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"menu-bar"</span><span class="tag">&gt;</span><span class="pln">
 </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"scrollable"</span><span class="tag">&gt;</span><span class="pln">
  </span><span class="tag">&lt;ul</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"items"</span><span class="tag">&gt;</span><span class="pln">
   </span><span class="tag">&lt;li&gt;&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"#"</span><span class="pln"> </span><span class="atn">data-toggle</span><span class="pun">=</span><span class="atv">"w-dropdown"</span><span class="pln"> </span><span class="atn">data-target</span><span class="pun">=</span><span class="atv">"</span><span class="rel-1"><span class="atv">#w-dropdown-1</span></span><span class="atv">"</span><span class="tag">&gt;&lt;/a&gt;&lt;/li&gt;</span><span class="pln">
  </span><span class="tag">&lt;/ul&gt;</span><span class="pln">
 </span><span class="tag">&lt;/div&gt;</span><span class="pln">

 </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"footer-menu-bar"</span><span class="tag">&gt;&lt;/div&gt;</span><span class="pln">
</span><span class="tag">&lt;/aside&gt;</span><span class="pln">

</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"</span><span class="rel-1"><span class="atv">w-dropdown-1</span></span><span class="atv">"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"w-dropdown-menu"</span><span class="tag">&gt;</span><span class="pln">
 </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"scrollable"</span><span class="tag">&gt;</span><span class="pln">...</span><span class="tag">&lt;/div&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span></pre>						<hr>

</div>
