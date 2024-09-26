import{_ as a,c as n,a5 as i,o as p}from"./chunks/framework.DhIibvLa.js";const l="/previews/PR4399/assets/56a2598.DN95SGZL.png",e="/previews/PR4399/assets/405dcbd.U73eIkp4.png",t="/previews/PR4399/assets/40983bc.FWk7Xln5.png",h="/previews/PR4399/assets/6992099.Bx0Gh7TU.png",k="/previews/PR4399/assets/aa40f14.Bq4LG3YT.png",r="/previews/PR4399/assets/f5cfaec.DUblMJ-k.png",c="/previews/PR4399/assets/90133b1.DG-se6U1.png",d="/previews/PR4399/assets/a33c9bb.BR5XDA89.png",o="/previews/PR4399/assets/578754e.Cu2vXYiC.png",g="/previews/PR4399/assets/b2c7919.Dh-8LH72.png",E="/previews/PR4399/assets/95fe2a6.6gLTLTKF.png",y="/previews/PR4399/assets/8ed5c7d.7YqdjFGd.png",u="/previews/PR4399/assets/e74f93a.DS4JQLjB.png",F="/previews/PR4399/assets/9b17d05.DwoGLAO8.png",j=JSON.parse('{"title":"GridLayout","description":"","frontmatter":{},"headers":[],"relativePath":"reference/blocks/gridlayout.md","filePath":"reference/blocks/gridlayout.md","lastUpdated":null}'),C={name:"reference/blocks/gridlayout.md"};function f(m,s,b,v,M,B){return p(),n("div",null,s[0]||(s[0]=[i(`<h1 id="gridlayout" tabindex="-1">GridLayout <a class="header-anchor" href="#gridlayout" aria-label="Permalink to &quot;GridLayout&quot;">​</a></h1><h2 id="Setting-column-and-row-sizes-correctly" tabindex="-1">Setting column and row sizes correctly <a class="header-anchor" href="#Setting-column-and-row-sizes-correctly" aria-label="Permalink to &quot;Setting column and row sizes correctly {#Setting-column-and-row-sizes-correctly}&quot;">​</a></h2><p>There are four different types of sizes you can give rows and columns.</p><h3 id="fixed" tabindex="-1">Fixed <a class="header-anchor" href="#fixed" aria-label="Permalink to &quot;Fixed&quot;">​</a></h3><p><code>Fixed(scene_units)</code> is used to set a column or row to an absolute size, independent of its content. This only really makes sense if there is variable width content in the column or row, that can shrink or expand to meet this size. You will probably not need <code>Fixed</code> sizes very often. <a id="example-56a2598"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My column has size Fixed(400)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My column has size Auto()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">colsize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Fixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># colsize!(f.layout, 1, 400) would also work</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+l+`" width="600px" height="450px"><h3 id="relative" tabindex="-1">Relative <a class="header-anchor" href="#relative" aria-label="Permalink to &quot;Relative&quot;">​</a></h3><p><code>Relative(fraction)</code> is used to set a column or row to a size that is a certain fraction of the available width or height. This is useful, e.g., if you want a column to span 50% of the available width, no matter what other content is there. In this case, you would use <code>Relative(1/2)</code>. The available width is the width of the GridLayout minus the space taken by row or column gaps including protrusions. <a id="example-405dcbd"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My column has size Relative(2/3)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My column has size Auto()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Colorbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">colsize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+e+`" width="600px" height="450px"><h3 id="auto" tabindex="-1">Auto <a class="header-anchor" href="#auto" aria-label="Permalink to &quot;Auto&quot;">​</a></h3><p>The <code>Auto</code> size is a bit more complex to understand. It has two parameters, the Boolean <code>trydetermine</code> and the number <code>ratio</code>. The default is <code>Auto() == Auto(true, 1)</code>. This is also the default row height and column width.</p><p>A column or row that is sized <code>Auto(true)</code> tries to fit its own size to its content.</p><p>When a <code>GridLayout</code> is solved, it looks at the content in each row or column and checks if it reports a fixed size. Many objects can report their own width or height because their content has a specific size, such as <code>Label</code>. Other objects are often used with a user-set width or height, for example <code>Colorbar(scene, width = 30)</code>. In this case, the <code>GridLayout</code> can also see that the colorbar has a width of 30 units and fit the column width to that value. Objects like <code>Axis</code> on the other hand are usually not set to a specific size.</p><p>Only objects that span a <em>single</em> row or column report their width or height, respectively. If <em>multiple</em> rows or columns are spanned, it&#39;s not well defined how the space that the object needs should be distributed.</p><p>If there is more than one object with a fixed width or height in an <code>Auto(true)</code> sized column, the maximum size is used.</p><p>If a column or row is sized <code>Auto(false)</code>, fixed-size objects are ignored. It can also happen of course, that there is no fixed-size object in a row or column with <code>Auto(true)</code> size. In both these cases, columns or rows determine their size by what remains after all <code>Fixed</code>, <code>Relative</code>, <code>Aspect</code> and size-inferred <code>Auto(true)</code> columns or rows have been calculated. Each undetermined <code>Auto</code> column gets a share of the remaining space that is proportional to its <code>ratio</code> parameter.</p><p>For example, let&#39;s say there are two columns left with undetermined <code>Auto</code> size when 300 units space remain. Column 1 has ratio <code>1</code> while column 2 has ratio <code>2</code>. The first column will get <code>1 / (1 + 2) * 300 == 100</code> units, while the second column gets <code>2 / (1 + 2) * 300 == 200</code> units. <a id="example-40983bc"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My column infers my width</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">of 200 units&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My column gets 1/3rd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">of the remaining space&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My column gets 2/3rds</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">of the remaining space&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">colsize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># equivalent to Auto(true, 1)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">colsize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># equivalent to Auto(true, 2)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+t+`" width="600px" height="450px"><h3 id="aspect" tabindex="-1">Aspect <a class="header-anchor" href="#aspect" aria-label="Permalink to &quot;Aspect&quot;">​</a></h3><p>This size is also a little bit trickier to understand. The syntax is <code>Aspect(reference, ratio)</code>. A column with a width of <code>Aspect(1, 2.0)</code> is set to 2.0 times the height of row 1, no matter what that height is. Therefore, the grid cell at [1, 1] will always have an aspect ratio of 2 to 1. The opposite pattern applies to rows with <code>Aspect</code> size.</p><p>Aspect sized columns or rows are very useful when you want to constrain the aspect ratio of a grid cell. For example, a plot that is always supposed to be square. Enforcing the aspect <em>on the layout level is better</em> than setting <code>axis.aspect = AxisAspect(1)</code> in most cases, because it ensures an <em>intact layout</em> where all grid cell borders are aligned visually. An <code>Axis</code> with <code>aspect = AxisAspect(1)</code> on the other hand simply shrinks so it remains square, but this will break alignment with other grid content. <a id="example-6992099"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;I&#39;m square and aligned&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), strokecolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], aspect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AxisAspect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;I&#39;m square but break the layout.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">My actual cell is the blue rect.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rowsize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">colsize!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Aspect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+h+`" width="600px" height="450px"><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Keep in mind that if you set too many constraints on row and column sizes, a GridLayout can easily be too big or too small. It&#39;s good to have variable-width elements to fill the remaining space if you use an element with fixed size or fixed aspect ratio.</p></div><h2 id="nesting" tabindex="-1">Nesting <a class="header-anchor" href="#nesting" aria-label="Permalink to &quot;Nesting&quot;">​</a></h2><p>Grids can be nested inside other grids, and so on, to arbitrary depths. The top grid&#39;s parent should be the scene in which the layout is placed. When you place a grid inside another grid, that grid is automatically made its parent. Grids also are by default set to alignmode Inside which means that the content edges are aligned to the grid&#39;s bounding box, excluding the outer protrusions. This way, plots in nested grids are nicely aligned along their spines. <a id="example-aa40f14"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subgl_left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GridLayout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subgl_left[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subgl_right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GridLayout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subgl_right[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subgl_left</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subgl_right</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+k+`" width="600px" height="450px"><h2 id="alignment" tabindex="-1">Alignment <a class="header-anchor" href="#alignment" aria-label="Permalink to &quot;Alignment&quot;">​</a></h2><p>Here you can see the difference between the align modes Outside with and without margins and the Inside alignmode. Only the standard Inside mode aligns the axis spines of the contained axes nicely. The Outside mode is mostly useful for the main GridLayout so that there some space between the window edges and the plots. You can see that the normal axis looks the same as the one placed inside the grid with Inside alignment, and they are both effectively aligned exactly the same. <a id="example-f5cfaec"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;No grid layout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;No grid layout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;No grid layout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Inside&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, alignmode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Inside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Outside&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, alignmode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Outside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Outside(50)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, alignmode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Outside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[i, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strokecolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+r+`" width="800px" height="800px"><h2 id="Spanned-Placement" tabindex="-1">Spanned Placement <a class="header-anchor" href="#Spanned-Placement" aria-label="Permalink to &quot;Spanned Placement {#Spanned-Placement}&quot;">​</a></h2><p>Elements in a grid layout can span multiple rows and columns. You can specify them with the range syntax and colons for the full width or height. You can also use end to specify the last row or column. <a id="example-90133b1"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[1, 1:2]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[2:4, 1:2]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[:, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[:, 3]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[1:3, 4]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[end, end]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+c+`" width="600px" height="450px"><h2 id="Adding-rows-and-columns-by-indexing" tabindex="-1">Adding rows and columns by indexing <a class="header-anchor" href="#Adding-rows-and-columns-by-indexing" aria-label="Permalink to &quot;Adding rows and columns by indexing {#Adding-rows-and-columns-by-indexing}&quot;">​</a></h2><p>If you index outside of the current range of a grid layout, you do not get an error. Instead, the layout automatically resizes to contain the new indices. This is very useful if you want to iteratively build a layout, or add super or side titles. <a id="example-a33c9bb"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[:, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Super Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Sub Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Left Text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rotation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Right Text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rotation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+d+`" width="800px" height="800px"><p>If you have rows from 1 to 3 and index into row 0, the rows now range from 0 to 3. If you then index into row -1, the rows range from -1 to 3 and so on. This behavior has changed since GridLayoutBase.jl <code>v0.7.0</code>. <a id="example-578754e"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[i, j])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;First Supertitle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Second Supertitle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Third Supertitle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+o+`" width="800px" height="800px"><h2 id="Trimming-empty-rows-and-columns" tabindex="-1">Trimming empty rows and columns <a class="header-anchor" href="#Trimming-empty-rows-and-columns" aria-label="Permalink to &quot;Trimming empty rows and columns {#Trimming-empty-rows-and-columns}&quot;">​</a></h2><p>If you change a layout interactively and end up with unused rows or columns, <code>trim!</code> will remove those for you.</p><p>Here we start with two axes: <a id="example-b2c7919"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Axis 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Axis 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+g+`" width="600px" height="450px"><p>Now we decide that we&#39;d like the second axis better if it was below the first one. We move it two the new cell, and the old unused column is left blank. <a id="example-95fe2a6"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ax2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+E+`" width="600px" height="450px"><p>We can get rid of the unused space with <code>trim!</code>: <a id="example-8ed5c7d"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">trim!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+y+`" width="600px" height="450px"><h2 id="Tweaking-space-between-rows-and-columns" tabindex="-1">Tweaking space between rows and columns <a class="header-anchor" href="#Tweaking-space-between-rows-and-columns" aria-label="Permalink to &quot;Tweaking space between rows and columns {#Tweaking-space-between-rows-and-columns}&quot;">​</a></h2><p>You can use <code>rowgap!</code> and <code>colgap!</code> to change the spacing between rows or columns respectively. <a id="example-e74f93a"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[i, j]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axs[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group A&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axs[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group B.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axs[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Group B.2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidedecorations!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(axs, grid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">colgap!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span>
<span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+u+`" width="600px" height="450px"><p>All spaces can be changed at once by omitting the index of the gap to resize. <a id="example-9b17d05"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rowgap!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+F+'" width="600px" height="450px">',75)]))}const w=a(C,[["render",f]]);export{j as __pageData,w as default};
