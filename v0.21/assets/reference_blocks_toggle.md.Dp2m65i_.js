import{_ as s,c as a,a5 as t,o as e}from"./chunks/framework.BiuB24gb.js";const h="/v0.21/assets/c1d6742.C8IKJxfj.png",E=JSON.parse('{"title":"Toggle","description":"","frontmatter":{},"headers":[],"relativePath":"reference/blocks/toggle.md","filePath":"reference/blocks/toggle.md","lastUpdated":null}'),l={name:"reference/blocks/toggle.md"};function n(k,i,p,r,o,d){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="toggle" tabindex="-1">Toggle <a class="header-anchor" href="#toggle" aria-label="Permalink to &quot;Toggle&quot;">​</a></h1><p>A toggle with an attribute <code>active</code> that can either be true or false, to enable or disable properties of an interactive plot. <a id="example-c1d6742"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toggles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Toggle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig, active </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> active) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> active </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> visible&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> invisible&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">active))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (t, l) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> zip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(toggles, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sine&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cosine&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> grid!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hcat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(toggles, labels), tellheight </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">line1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sin, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, visible </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">line2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cos, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">connect!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(line1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">visible, toggles[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">active)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">connect!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(line2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">visible, toggles[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">active)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+h+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="active" tabindex="-1">active <a class="header-anchor" href="#active" aria-label="Permalink to &quot;active&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Indicates if the toggle is active or not.</p><h3 id="alignmode" tabindex="-1">alignmode <a class="header-anchor" href="#alignmode" aria-label="Permalink to &quot;alignmode&quot;">​</a></h3><p>Defaults to <code>Inside()</code></p><p>The align mode of the toggle in its parent GridLayout.</p><h3 id="buttoncolor" tabindex="-1">buttoncolor <a class="header-anchor" href="#buttoncolor" aria-label="Permalink to &quot;buttoncolor&quot;">​</a></h3><p>Defaults to <code>COLOR_ACCENT[]</code></p><p>The color of the toggle button.</p><h3 id="cornersegments" tabindex="-1">cornersegments <a class="header-anchor" href="#cornersegments" aria-label="Permalink to &quot;cornersegments&quot;">​</a></h3><p>Defaults to <code>15</code></p><p>The number of poly segments in each rounded corner.</p><h3 id="framecolor-active" tabindex="-1">framecolor_active <a class="header-anchor" href="#framecolor-active" aria-label="Permalink to &quot;framecolor_active&quot;">​</a></h3><p>Defaults to <code>COLOR_ACCENT_DIMMED[]</code></p><p>The color of the border when the toggle is hovered.</p><h3 id="framecolor-inactive" tabindex="-1">framecolor_inactive <a class="header-anchor" href="#framecolor-inactive" aria-label="Permalink to &quot;framecolor_inactive&quot;">​</a></h3><p>Defaults to <code>RGBf(0.94, 0.94, 0.94)</code></p><p>The color of the border when the toggle is inactive.</p><h3 id="halign" tabindex="-1">halign <a class="header-anchor" href="#halign" aria-label="Permalink to &quot;halign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The horizontal alignment of the toggle in its suggested bounding box.</p><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><p>Defaults to <code>18</code></p><p>The height of the toggle.</p><h3 id="rimfraction" tabindex="-1">rimfraction <a class="header-anchor" href="#rimfraction" aria-label="Permalink to &quot;rimfraction&quot;">​</a></h3><p>Defaults to <code>0.33</code></p><p>The border width as a fraction of the toggle height</p><h3 id="tellheight" tabindex="-1">tellheight <a class="header-anchor" href="#tellheight" aria-label="Permalink to &quot;tellheight&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s height</p><h3 id="tellwidth" tabindex="-1">tellwidth <a class="header-anchor" href="#tellwidth" aria-label="Permalink to &quot;tellwidth&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s width</p><h3 id="toggleduration" tabindex="-1">toggleduration <a class="header-anchor" href="#toggleduration" aria-label="Permalink to &quot;toggleduration&quot;">​</a></h3><p>Defaults to <code>0.15</code></p><p>The duration of the toggle animation.</p><h3 id="valign" tabindex="-1">valign <a class="header-anchor" href="#valign" aria-label="Permalink to &quot;valign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The vertical alignment of the toggle in its suggested bounding box.</p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>Defaults to <code>32</code></p><p>The width of the toggle.</p>',47)]))}const c=s(l,[["render",n]]);export{E as __pageData,c as default};
