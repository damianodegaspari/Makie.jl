import{_ as i,c as a,a5 as t,o as e}from"./chunks/framework.CZIqhB8V.js";const h="/previews/PR4354/assets/b933890.D4GYQp-Z.png",E=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"reference/blocks/button.md","filePath":"reference/blocks/button.md","lastUpdated":null}'),n={name:"reference/blocks/button.md"};function l(o,s,p,k,r,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="button" tabindex="-1">Button <a class="header-anchor" href="#button" aria-label="Permalink to &quot;Button&quot;">​</a></h1><a id="example-b933890"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buttongrid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GridLayout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tellwidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">counts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Observable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buttonlabels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$(x[i])</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, counts) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buttons </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buttongrid[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig, label </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> l) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buttonlabels]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buttons[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">clicks) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        counts[][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        notify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counts)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">barplot!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counts, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cgrad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:Spectral</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LinRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ylims!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+h+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="alignmode" tabindex="-1">alignmode <a class="header-anchor" href="#alignmode" aria-label="Permalink to &quot;alignmode&quot;">​</a></h3><p>Defaults to <code>Inside()</code></p><p>The align mode of the button in its parent GridLayout.</p><h3 id="buttoncolor" tabindex="-1">buttoncolor <a class="header-anchor" href="#buttoncolor" aria-label="Permalink to &quot;buttoncolor&quot;">​</a></h3><p>Defaults to <code>RGBf(0.94, 0.94, 0.94)</code></p><p>The color of the button.</p><h3 id="buttoncolor-active" tabindex="-1">buttoncolor_active <a class="header-anchor" href="#buttoncolor-active" aria-label="Permalink to &quot;buttoncolor_active&quot;">​</a></h3><p>Defaults to <code>COLOR_ACCENT[]</code></p><p>The color of the button when the mouse clicks the button.</p><h3 id="buttoncolor-hover" tabindex="-1">buttoncolor_hover <a class="header-anchor" href="#buttoncolor-hover" aria-label="Permalink to &quot;buttoncolor_hover&quot;">​</a></h3><p>Defaults to <code>COLOR_ACCENT_DIMMED[]</code></p><p>The color of the button when the mouse hovers over the button.</p><h3 id="clicks" tabindex="-1">clicks <a class="header-anchor" href="#clicks" aria-label="Permalink to &quot;clicks&quot;">​</a></h3><p>Defaults to <code>0</code></p><p>The number of clicks that have been registered by the button.</p><h3 id="cornerradius" tabindex="-1">cornerradius <a class="header-anchor" href="#cornerradius" aria-label="Permalink to &quot;cornerradius&quot;">​</a></h3><p>Defaults to <code>4</code></p><p>The radius of the rounded corners of the button.</p><h3 id="cornersegments" tabindex="-1">cornersegments <a class="header-anchor" href="#cornersegments" aria-label="Permalink to &quot;cornersegments&quot;">​</a></h3><p>Defaults to <code>10</code></p><p>The number of poly segments used for each rounded corner.</p><h3 id="font" tabindex="-1">font <a class="header-anchor" href="#font" aria-label="Permalink to &quot;font&quot;">​</a></h3><p>Defaults to <code>:regular</code></p><p>The font family of the button label.</p><h3 id="fontsize" tabindex="-1">fontsize <a class="header-anchor" href="#fontsize" aria-label="Permalink to &quot;fontsize&quot;">​</a></h3><p>Defaults to <code>@inherit :fontsize 16.0f0</code></p><p>The font size of the button label.</p><h3 id="halign" tabindex="-1">halign <a class="header-anchor" href="#halign" aria-label="Permalink to &quot;halign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The horizontal alignment of the button in its suggested boundingbox</p><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><p>Defaults to <code>Auto()</code></p><p>The height setting of the button.</p><h3 id="label" tabindex="-1">label <a class="header-anchor" href="#label" aria-label="Permalink to &quot;label&quot;">​</a></h3><p>Defaults to <code>&quot;Button&quot;</code></p><p>The text of the button label.</p><h3 id="labelcolor" tabindex="-1">labelcolor <a class="header-anchor" href="#labelcolor" aria-label="Permalink to &quot;labelcolor&quot;">​</a></h3><p>Defaults to <code>@inherit :textcolor :black</code></p><p>The color of the label.</p><h3 id="labelcolor-active" tabindex="-1">labelcolor_active <a class="header-anchor" href="#labelcolor-active" aria-label="Permalink to &quot;labelcolor_active&quot;">​</a></h3><p>Defaults to <code>:white</code></p><p>The color of the label when the mouse clicks the button.</p><h3 id="labelcolor-hover" tabindex="-1">labelcolor_hover <a class="header-anchor" href="#labelcolor-hover" aria-label="Permalink to &quot;labelcolor_hover&quot;">​</a></h3><p>Defaults to <code>:black</code></p><p>The color of the label when the mouse hovers over the button.</p><h3 id="padding" tabindex="-1">padding <a class="header-anchor" href="#padding" aria-label="Permalink to &quot;padding&quot;">​</a></h3><p>Defaults to <code>(8.0f0, 8.0f0, 8.0f0, 8.0f0)</code></p><p>The extra space added to the sides of the button label&#39;s boundingbox.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>The color of the button border.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>2.0</code></p><p>The line width of the button border.</p><h3 id="tellheight" tabindex="-1">tellheight <a class="header-anchor" href="#tellheight" aria-label="Permalink to &quot;tellheight&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s height</p><h3 id="tellwidth" tabindex="-1">tellwidth <a class="header-anchor" href="#tellwidth" aria-label="Permalink to &quot;tellwidth&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s width</p><h3 id="valign" tabindex="-1">valign <a class="header-anchor" href="#valign" aria-label="Permalink to &quot;valign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The vertical alignment of the button in its suggested boundingbox</p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>Defaults to <code>Auto()</code></p><p>The width setting of the button.</p>',71)]))}const g=i(n,[["render",l]]);export{E as __pageData,g as default};
