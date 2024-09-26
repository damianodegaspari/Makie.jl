import{_ as i,c as a,a5 as n,o as t}from"./chunks/framework.CtyAxgp5.js";const h="/previews/PR4408/assets/1a7df8f.kbAGjZwQ.png",l="/previews/PR4408/assets/cd01cb6.MJfRC6bm.png",k="/previews/PR4408/assets/10166b5.DLLAv9AT.png",y=JSON.parse('{"title":"LaTeX","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/latex.md","filePath":"explanations/latex.md","lastUpdated":null}'),e={name:"explanations/latex.md"};function p(r,s,d,g,E,F){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="latex" tabindex="-1">LaTeX <a class="header-anchor" href="#latex" aria-label="Permalink to &quot;LaTeX&quot;">​</a></h1><p>Makie can render LaTeX strings from the <a href="https://github.com/stevengj/LaTeXStrings.jl" target="_blank" rel="noreferrer">LaTeXStrings.jl</a> package using <a href="https://github.com/Kolaru/MathTeXEngine.jl/" target="_blank" rel="noreferrer">MathTeXEngine.jl</a>.</p><p>While this engine is responsive enough for use in GLMakie, it only supports a subset of LaTeX&#39;s most used commands.</p><h2 id="Using-L-strings" tabindex="-1">Using L-strings <a class="header-anchor" href="#Using-L-strings" aria-label="Permalink to &quot;Using L-strings {#Using-L-strings}&quot;">​</a></h2><p>You can pass <code>LaTeXString</code> objects to almost any object with text labels. They are constructed using the <code>L</code> string macro prefix. The whole string is interpreted as an equation if it doesn&#39;t contain an unescaped <code>$</code>. <a id="example-1a7df8f"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">orall </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">athcal{X} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">n </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">athbb{R} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\q</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uad </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rac{x + y}{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">in(k^2)}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">um_a^b{xy} + </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">athscr{L}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qrt{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rac{a}{b}} - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">athfrak{W}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+h+`" width="600px" height="450px"><p>You can also mix math-mode and text-mode. For <a href="https://docs.julialang.org/en/v1/manual/strings/#string-interpolation" target="_blank" rel="noreferrer">string interpolation</a> use <code>%$</code>instead of <code>$</code>: <a id="example-cd01cb6"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontsize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;text&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Some %$(t) and some math: $</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rac{2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lpha+1}{y}$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+l+`" width="600px" height="450px"><h2 id="Uniformizing-the-fonts" tabindex="-1">Uniformizing the fonts <a class="header-anchor" href="#Uniformizing-the-fonts" aria-label="Permalink to &quot;Uniformizing the fonts {#Uniformizing-the-fonts}&quot;">​</a></h2><p>We provide a LaTeX theme to easily switch to the LaTeX default fonts for all the text. <a id="example-10166b5"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">with_theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">theme_latexfonts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A standard Label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, tellwidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A LaTeXString with a small formula $x^2$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, tellwidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;An axis with matching font for the tick labels&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fig</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><img src="`+k+'" width="600px" height="450px">',14)]))}const C=i(e,[["render",p]]);export{y as __pageData,C as default};
