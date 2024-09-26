import{_ as s,c as a,a5 as e,o as t}from"./chunks/framework.R1AaUFR0.js";const n="/dev/assets/45f576c.CjbeZiVT.png",l="/dev/assets/7d2ff3e.0E3bkYN_.png",E=JSON.parse('{"title":"Blocks","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/blocks.md","filePath":"explanations/blocks.md","lastUpdated":null}'),o={name:"explanations/blocks.md"};function h(d,i,k,p,c,r){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="blocks" tabindex="-1">Blocks <a class="header-anchor" href="#blocks" aria-label="Permalink to &quot;Blocks&quot;">​</a></h1><p><code>Blocks</code> are objects which can be added to a <code>Figure</code> or <code>Scene</code> and have their location and size controlled by a <code>GridLayout</code>. In of itself, a <code>Block</code> is an abstract type. A <code>Figure</code> has its own internal <code>GridLayout</code> and therefore offers simplified syntax for adding blocks to it. If you want to work with a bare <code>Scene</code>, you can attach a <code>GridLayout</code> to its pixel area.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>A layout only controls an object&#39;s position or bounding box. A <code>Block</code> can be controlled by the GridLayout of a Figure but not be added as a visual to the Figure. A <code>Block</code> can also be added to a Scene without being inside any GridLayout, if you specify the bounding box yourself.</p></div><h2 id="Adding-to-a-Figure" tabindex="-1">Adding to a <code>Figure</code> <a class="header-anchor" href="#Adding-to-a-Figure" aria-label="Permalink to &quot;Adding to a \`Figure\` {#Adding-to-a-Figure}&quot;">​</a></h2><p>Here&#39;s one way to add a <code>Block</code>, in this case an <code>Axis</code>, to a Figure. <a id="example-45f576c"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+n+`" width="600px" height="450px"><h2 id="Specifying-a-boundingbox-directly" tabindex="-1">Specifying a boundingbox directly <a class="header-anchor" href="#Specifying-a-boundingbox-directly" aria-label="Permalink to &quot;Specifying a boundingbox directly {#Specifying-a-boundingbox-directly}&quot;">​</a></h2><p>Sometimes you just want to place a <code>Block</code> in a specific location, without it being controlled by a dynamic layout. You can do this by setting the <code>bbox</code> parameter, which is usually controlled by the layout, manually. The boundingbox should be a 2D <code>Rect</code>, and can also be an Observable if you plan to change it dynamically. The function <code>BBox</code> creates an <code>Rect2f</code>, but instead of passing origin and widths, you pass left, right, bottom and top boundaries directly.</p><p>Here&#39;s an example where two axes are placed manually: <a id="example-7d2ff3e"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f, bbox </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Axis 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f, bbox </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">550</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">350</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Axis 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+l+'" width="600px" height="450px"><h2 id="Deleting-blocks" tabindex="-1">Deleting blocks <a class="header-anchor" href="#Deleting-blocks" aria-label="Permalink to &quot;Deleting blocks {#Deleting-blocks}&quot;">​</a></h2><p>To remove blocks from their layout and the figure or scene, use <code>delete!(block)</code>.</p>',14)]))}const y=s(o,[["render",h]]);export{E as __pageData,y as default};
