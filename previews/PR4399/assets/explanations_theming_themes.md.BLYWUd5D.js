import{_ as a,c as i,a5 as n,o as p}from"./chunks/framework.DhIibvLa.js";const l="/previews/PR4399/assets/dedf193.CdBHPs68.png",e="/previews/PR4399/assets/86e3765.CcQD9WkK.png",t="/previews/PR4399/assets/8bfad7e.BtKVX9Nc.png",h="/previews/PR4399/assets/dc3f412.C9z-SFLD.png",k="/previews/PR4399/assets/e6a29d6.CMAhYFy_.png",r="/previews/PR4399/assets/e6c2a6a.DLnvahpz.png",c="/previews/PR4399/assets/79c6dcc.4W0W12RY.png",d="/previews/PR4399/assets/303583f.CNaU6L8d.png",g="/previews/PR4399/assets/6ca36d8.BFlZZIn8.png",E="/previews/PR4399/assets/5b3e9e7.BsVGwZoF.png",o="/previews/PR4399/assets/1f2bd0f.CdCx9KRK.png",y="/previews/PR4399/assets/2f4da0b.DtWSKWGO.png",M=JSON.parse('{"title":"Themes","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/theming/themes.md","filePath":"explanations/theming/themes.md","lastUpdated":null}'),u={name:"explanations/theming/themes.md"};function F(C,s,m,b,v,f){return p(),i("div",null,s[0]||(s[0]=[n(`<h1 id="themes" tabindex="-1">Themes <a class="header-anchor" href="#themes" aria-label="Permalink to &quot;Themes&quot;">​</a></h1><p>Makie allows you to change almost every visual aspect of your plots via attributes. You can set attributes whenever you create an object, or you define a general style that is then used as the default by all following objects.</p><p>There are three functions you can use for that purpose:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set_theme!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">update_theme!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">with_theme</span></span></code></pre></div><p>There are also <a href="/previews/PR4399/explanations/theming/predefined_themes#Predefined-themes">Predefined themes</a> that may form a useful starting point.</p><h2 id="set-theme" tabindex="-1">set_theme! <a class="header-anchor" href="#set-theme" aria-label="Permalink to &quot;set_theme!&quot;">​</a></h2><p>You can call <code>set_theme!(theme; kwargs...)</code> to change the current default theme to <code>theme</code> and override or add attributes given by <code>kwargs</code>. You can also reset your changes by calling <code>set_theme!()</code> without arguments.</p><p>Let&#39;s create a plot with the default theme: <a id="example-dedf193"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example_plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        lines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[i, j], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cumsum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A simple example plot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Random walks $x(t_n)$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">example_plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+l+`" width="600px" height="450px"><p>Now we define a theme which changes the default fontsize, activate it, and plot. <a id="example-86e3765"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fontsize_theme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set_theme!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontsize_theme)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">example_plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+e+`" width="600px" height="450px"><p>This theme will be active until we call <code>set_theme!()</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set_theme!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="merge" tabindex="-1">merge <a class="header-anchor" href="#merge" aria-label="Permalink to &quot;merge&quot;">​</a></h2><p>Themes often only affect part of the plot attributes. Therefore it is possible to combine themes to get their respective effects together.</p><p>For example, you can combine the dark theme with the LaTeX fonts theme to have both the dark colors and uniform fonts. <a id="example-8bfad7e"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dark_latexfonts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> merge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">theme_dark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">theme_latexfonts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dark_latexfonts) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    example_plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+t+`" width="600px" height="450px"><h2 id="update-theme" tabindex="-1">update_theme! <a class="header-anchor" href="#update-theme" aria-label="Permalink to &quot;update_theme!&quot;">​</a></h2><p>If you have activated a theme already and want to update it partially, without removing the attributes not in the new theme, you can use <code>update_theme!</code>.</p><p>For example, you can decide to change the text size after activating the dark and latex theme in the previous section. <a id="example-dc3f412"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">update_theme!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontsize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">example_plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+h+`" width="600px" height="450px"><h2 id="with-theme" tabindex="-1">with_theme <a class="header-anchor" href="#with-theme" aria-label="Permalink to &quot;with_theme&quot;">​</a></h2><p>Because it can be tedious to remember to switch themes off which you need only temporarily, there&#39;s the function <code>with_theme(f, theme)</code> which handles the resetting for you automatically, even if you encounter an error while running <code>f</code>. <a id="example-e6a29d6"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontsize_theme) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    example_plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+k+`" width="600px" height="450px"><p>You can also pass additional keywords to add or override attributes in your theme: <a id="example-e6c2a6a"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontsize_theme, fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    example_plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+r+`" width="600px" height="450px"><h2 id="Theming-plot-objects" tabindex="-1">Theming plot objects <a class="header-anchor" href="#Theming-plot-objects" aria-label="Permalink to &quot;Theming plot objects {#Theming-plot-objects}&quot;">​</a></h2><p>You can theme plot objects by using their uppercase type names as a key in your theme. <a id="example-79c6dcc"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lines_theme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Lines </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        linewidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        linestyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :dash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(example_plot, lines_theme)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+c+`" width="600px" height="450px"><h2 id="Theming-block-objects" tabindex="-1">Theming block objects <a class="header-anchor" href="#Theming-block-objects" aria-label="Permalink to &quot;Theming block objects {#Theming-block-objects}&quot;">​</a></h2><p>Every Block such as <code>Axis</code>, <code>Legend</code>, <code>Colorbar</code>, etc. can be themed by using its type name as a key in your theme.</p><p>Here is how you could define a simple ggplot-like style for your axes: <a id="example-303583f"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ggplot_theme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        backgroundcolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :gray90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        leftspinevisible </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        rightspinevisible </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        bottomspinevisible </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        topspinevisible </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xgridcolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ygridcolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(example_plot, ggplot_theme)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+d+`" width="600px" height="450px"><h2 id="cycles" tabindex="-1">Cycles <a class="header-anchor" href="#cycles" aria-label="Permalink to &quot;Cycles&quot;">​</a></h2><p>Makie supports a variety of options for cycling plot attributes automatically. For a plot object to use cycling, either its default theme or the currently active theme must have the <code>cycle</code> attribute set.</p><p>There are multiple ways to specify this attribute:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># You can either make a list of symbols</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:marker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or map specific plot attributes to palette attributes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:linecolor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:marker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># you can also map multiple attributes that should receive</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the same cycle attribute</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:linecolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:markercolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:marker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># nothing disables cycling</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # equivalent to cycle = []</span></span></code></pre></div><p>Notice that cycles must be given as attributes to a plot object, not the top-level theme (because different plot objects can cycle different attributes, e.g., a density plot cannot cycle markers). This is exemplified in the following code blocks. <a id="example-6ca36d8"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        palette </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], marker </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:xcross</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Scatter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:marker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    scatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    scatter!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    scatter!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    scatter!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    scatter!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    current_figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+g+`" width="600px" height="450px"><h3 id="Covarying-cycles" tabindex="-1">Covarying cycles <a class="header-anchor" href="#Covarying-cycles" aria-label="Permalink to &quot;Covarying cycles {#Covarying-cycles}&quot;">​</a></h3><p>You can also construct a <code>Cycle</code> object directly, which additionally allows to set the <code>covary</code> keyword, that defaults to <code>false</code>. A cycler with <code>covary = true</code> cycles all attributes together, instead of cycling through all values of the first, then the second, etc.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># palettes: color = [:red, :blue, :green] marker = [:circle, :rect, :utriangle, :dtriangle]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:marker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1: :red, :circle</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2: :blue, :circle</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3: :green, :circle</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4: :red, :rect</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cycle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:marker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], covary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1: :red, :circle</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2: :blue, :rect</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3: :green, :utriangle</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4: :red, :dtriangle</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span></code></pre></div><p>For example <a id="example-5b3e9e7"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        palette </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], linestyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:dash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:dot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Lines </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cycle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:linestyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], covary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    lines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    current_figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
<span class="line"><span>│   specular</span></span>
<span class="line"><span>│   matcap</span></span>
<span class="line"><span>│   backlight</span></span>
<span class="line"><span>│   uv_transform</span></span>
<span class="line"><span>│   shininess</span></span>
<span class="line"><span>│   interpolate</span></span>
<span class="line"><span>│   material</span></span>
<span class="line"><span>│   diffuse</span></span>
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+E+`" width="600px" height="450px"><h3 id="Manual-cycling-using-Cycled" tabindex="-1">Manual cycling using <code>Cycled</code> <a class="header-anchor" href="#Manual-cycling-using-Cycled" aria-label="Permalink to &quot;Manual cycling using \`Cycled\` {#Manual-cycling-using-Cycled}&quot;">​</a></h3><p>If you want to give a plot&#39;s attribute a specific value from the respective cycler, you can use the <code>Cycled</code> object. The index <code>i</code> passed to <code>Cycled</code> is used directly to look up a value in the cycler that belongs to the attribute, and errors if no such cycler is defined. For example, to access the third color in a cycler, instead of plotting three plots to advance the cycler, you can use <code>color = Cycled(3)</code>.</p><p>The cycler&#39;s internal counter is not advanced when using <code>Cycled</code> for any attribute, and only attributes with <code>Cycled</code> access the cycled values, all other usually cycled attributes fall back to their non-cycled defaults. <a id="example-1f2bd0f"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the normal cycle</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># manually specified colors</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cycled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cycled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cycled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+o+`" width="600px" height="450px"><h3 id="palettes" tabindex="-1">Palettes <a class="header-anchor" href="#palettes" aria-label="Permalink to &quot;Palettes&quot;">​</a></h3><p>The attributes specified in the cycle are looked up in the axis&#39; palette. A single <code>:color</code> is both plot attribute as well as palette attribute, while <code>:color =&gt; :patchcolor</code> means that <code>plot.color</code> should be set to <code>palette.patchcolor</code>. Here&#39;s an example that shows how density plots react to different palette options: <a id="example-2f4da0b"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Default cycle palette&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    density!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Custom cycle palette&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    palette </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (patchcolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:yellow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:orange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:pink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    density!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set_theme!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Density </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cycle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [],))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;No cycle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    density!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+y+'" width="800px" height="800px"><p>You can also theme global palettes via <code>set_theme!(palette = (color = my_colors, marker = my_markers))</code> for example.</p><h2 id="Special-attributes" tabindex="-1">Special attributes <a class="header-anchor" href="#Special-attributes" aria-label="Permalink to &quot;Special attributes {#Special-attributes}&quot;">​</a></h2><p>You can use the keys <code>rowgap</code> and <code>colgap</code> to change the default grid layout gaps.</p>',78)]))}const j=a(u,[["render",F]]);export{M as __pageData,j as default};
