import{_ as l,c as e,j as a,a as i,G as t,a5 as n,B as h,o as k}from"./chunks/framework.DhIibvLa.js";const r="/previews/PR4399/assets/3e6e727.ADGKmF6H.png",d="/previews/PR4399/assets/274bd75.D1JMX81w.png",o="/previews/PR4399/assets/cdf6075.DEGr4-to.png",E="/previews/PR4399/assets/ccf01dd.CADjQOI_.png",c="/previews/PR4399/assets/587df86.BXq7-x6a.png",g="/previews/PR4399/assets/b040aee.CD6lEh5r.png",y="/previews/PR4399/assets/ea9f16e.BHYyzXlO.png",u="/previews/PR4399/assets/ceac5ef.DgSWGtyD.png",D=JSON.parse('{"title":"rainclouds","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/rainclouds.md","filePath":"reference/plots/rainclouds.md","lastUpdated":null}'),F={name:"reference/plots/rainclouds.md"},C={class:"jldocstring custom-block",open:""};function b(f,s,m,_,v,M){const p=h("Badge");return k(),e("div",null,[s[3]||(s[3]=a("h1",{id:"rainclouds",tabindex:"-1"},[i("rainclouds "),a("a",{class:"header-anchor",href:"#rainclouds","aria-label":'Permalink to "rainclouds"'},"​")],-1)),a("details",C,[a("summary",null,[s[0]||(s[0]=a("a",{id:"Makie.rainclouds-reference-plots-rainclouds",href:"#Makie.rainclouds-reference-plots-rainclouds"},[a("span",{class:"jlbinding"},"Makie.rainclouds")],-1)),s[1]||(s[1]=i()),t(p,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[2]||(s[2]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax, category_labels, data_array; plot_boxplots</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, plot_clouds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Plot a violin (/histogram), boxplot and individual data points with appropriate spacing between each.</p><p><strong>Arguments</strong></p><ul><li><p><code>ax</code>: Axis used to place all these plots onto.</p></li><li><p><code>category_labels</code>: Typically <code>Vector{String}</code> with a label for each element in <code>data_array</code></p></li><li><p><code>data_array</code>: Typically <code>Vector{Float64}</code> used for to represent the datapoints to plot.</p></li></ul><p><strong>Keywords</strong></p><p><strong>Violin/Histogram Plot Specific Keywords</strong></p><p><strong>Scatter Plot Specific Keywords</strong></p><ul><li><p><code>side_nudge</code>: Default value is 0.02 if <code>plot_boxplots</code> is true, otherwise <code>0.075</code> default.</p></li><li><p><code>jitter_width=0.05</code>: Determines the width of the scatter-plot bar in category x-axis absolute terms.</p></li></ul><p><strong>Plot type</strong></p><p>The plot type alias for the <code>rainclouds</code> function is <code>RainClouds</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/b48b4c4f99753ef7c9da27729e96a6c890b87c6b/MakieCore/src/recipes.jl#L466-L555" target="_blank" rel="noreferrer">source</a></p>',11))]),s[4]||(s[4]=n(`<p>&quot;Raincloud&quot; plots are a combination of a (half) violin plot, box plot and scatter plots. The three together can make an appealing and informative visual, particularly for large N datasets. <a id="example-3e6e727"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Random</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rand_localized</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">####</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#### Below is used for testing the plotting functionality.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">####</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mockup_distribution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(N)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    all_possible_labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Single Mode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Double Mode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Random Exp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Uniform&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(all_possible_labels)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> category_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Single Mode&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        random_mean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        random_spread_coef </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> random_spread_coef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(N) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> random_mean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    elseif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> category_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Double Mode&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        random_mean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        random_spread_coef </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> random_spread_coef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> random_mean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        random_mean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        random_spread_coef </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vcat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data_points, random_spread_coef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> random_mean)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    elseif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> category_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Random Exp&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randexp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(N)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    elseif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> category_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Uniform&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        min </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        max </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> min </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand_localized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(min, max) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Unidentified category.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data_points</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mockup_categories_and_data_array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num_categories; N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Float64[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> category_label </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.((</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Z&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num_categories, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mockup_distribution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(N)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        append!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_label, N))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        append!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data_array, data_points)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> category_labels, data_array</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">category_labels, data_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mockup_categories_and_data_array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wong_colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Categories of Distributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cloud_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, clouds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hist, hist_bins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+r+`" width="600px" height="450px"><a id="example-274bd75"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (; ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Categories of Distributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    orientation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :horizontal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cloud_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, clouds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hist,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+d+`" width="600px" height="450px"><a id="example-cdf6075"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Categories of Distributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My Title&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cloud_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, clouds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hist,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+o+`" width="600px" height="450px"><a id="example-ccf01dd"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Categories of Distributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My Title&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cloud_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, side </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    violin_limits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> extrema, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+E+`" width="600px" height="450px"><a id="example-587df86"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Categories of Distributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cloud_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, side </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+c+`" width="600px" height="450px"><a id="example-b040aee"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">more_category_labels, more_data_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mockup_categories_and_data_array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(more_category_labels, more_data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Categories of Distributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cloud_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(more_category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(more_category_labels))])</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+g+`" width="600px" height="450px"><a id="example-ea9f16e"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">category_labels, data_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mockup_categories_and_data_array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Categories of Distributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Samples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;My Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cloud_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Not all attributes valid for ::Mesh are given in poly(). Missing ones include:</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+y+`" width="600px" height="450px"><p>4 of these, between 3 distributions Left and Right example With and Without Box Plot <a id="example-ceac5ef"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">colors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wong_colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wong_colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">category_labels, data_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mockup_categories_and_data_array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Left Side, with Box Plot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    side </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Left Side, without Box Plot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    side </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Right Side, with Box Plot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    side </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Right Side, without Box Plot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    side </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Plots wiht more categories</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># dist_between_categories (0.6, 1.0)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># with and without clouds</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">category_labels, data_array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mockup_categories_and_data_array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;More categories. Default spacing.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;More categories. Adjust space. (smaller cloud widths and smaller category distances)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cloud_width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rainclouds!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;More categories. Adjust space. No clouds.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    category_labels, data_array;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot_boxplots </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clouds </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">indexin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category_labels))])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">supertitle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, :], </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cloud Plot Testing (Scatter, Violin, Boxplot)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontsize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
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
<span class="line"><span>└ @ Makie ~/work/Makie.jl/Makie.jl/src/utilities/utilities.jl:618</span></span></code></pre></div><img src="`+u+'" width="1600px" height="3000px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="boxplot-nudge" tabindex="-1">boxplot_nudge <a class="header-anchor" href="#boxplot-nudge" aria-label="Permalink to &quot;boxplot_nudge&quot;">​</a></h3><p>Defaults to <code>0.075</code></p><p>Determines the distance away the boxplot should be placed from the center line when <code>center_boxplot</code> is <code>false</code>. This is the value used to recentering the boxplot.</p><h3 id="boxplot-width" tabindex="-1">boxplot_width <a class="header-anchor" href="#boxplot-width" aria-label="Permalink to &quot;boxplot_width&quot;">​</a></h3><p>Defaults to <code>0.1</code></p><p>Width of the boxplot on the category axis.</p><h3 id="center-boxplot" tabindex="-1">center_boxplot <a class="header-anchor" href="#center-boxplot" aria-label="Permalink to &quot;center_boxplot&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Whether or not to center the boxplot on the category.</p><h3 id="cloud-width" tabindex="-1">cloud_width <a class="header-anchor" href="#cloud-width" aria-label="Permalink to &quot;cloud_width&quot;">​</a></h3><p>Defaults to <code>0.75</code></p><p>Determines size of violin plot. Corresponds to <code>width</code> keyword arg in <code>violin</code>.</p><h3 id="clouds" tabindex="-1">clouds <a class="header-anchor" href="#clouds" aria-label="Permalink to &quot;clouds&quot;">​</a></h3><p>Defaults to <code>violin</code></p><p>[<code>violin</code>, <code>hist</code>, <code>nothing</code>] how to show cloud plots, either as violin or histogram plots, or not at all.</p><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h3><p>Defaults to <code>@inherit patchcolor</code></p><p>A single color, or a vector of colors, one for each point.</p><h3 id="cycle" tabindex="-1">cycle <a class="header-anchor" href="#cycle" aria-label="Permalink to &quot;cycle&quot;">​</a></h3><p>Defaults to <code>[:color =&gt; :patchcolor]</code></p><p>No docs available.</p><h3 id="dodge" tabindex="-1">dodge <a class="header-anchor" href="#dodge" aria-label="Permalink to &quot;dodge&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Vector of <code>Integer</code> (length of data) of grouping variable to create multiple side-by-side boxes at the same x position</p><h3 id="dodge-gap" tabindex="-1">dodge_gap <a class="header-anchor" href="#dodge-gap" aria-label="Permalink to &quot;dodge_gap&quot;">​</a></h3><p>Defaults to <code>0.01</code></p><p>Spacing between dodged boxes.</p><h3 id="gap" tabindex="-1">gap <a class="header-anchor" href="#gap" aria-label="Permalink to &quot;gap&quot;">​</a></h3><p>Defaults to <code>0.2</code></p><p>Distance between elements on the main axis (depending on <code>orientation</code>).</p><h3 id="hist-bins" tabindex="-1">hist_bins <a class="header-anchor" href="#hist-bins" aria-label="Permalink to &quot;hist_bins&quot;">​</a></h3><p>Defaults to <code>30</code></p><p>If <code>clouds=hist</code>, this passes down the number of bins to the histogram call.</p><h3 id="markersize" tabindex="-1">markersize <a class="header-anchor" href="#markersize" aria-label="Permalink to &quot;markersize&quot;">​</a></h3><p>Defaults to <code>2.0</code></p><p>Size of marker used for the scatter plot.</p><h3 id="n-dodge" tabindex="-1">n_dodge <a class="header-anchor" href="#n-dodge" aria-label="Permalink to &quot;n_dodge&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The number of categories to dodge (defaults to <code>maximum(dodge)</code>)</p><h3 id="orientation" tabindex="-1">orientation <a class="header-anchor" href="#orientation" aria-label="Permalink to &quot;orientation&quot;">​</a></h3><p>Defaults to <code>:vertical</code></p><p>Orientation of rainclouds (<code>:vertical</code> or <code>:horizontal</code>)</p><h3 id="plot-boxplots" tabindex="-1">plot_boxplots <a class="header-anchor" href="#plot-boxplots" aria-label="Permalink to &quot;plot_boxplots&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Whether to show boxplots to summarize distribution of data.</p><h3 id="show-boxplot-outliers" tabindex="-1">show_boxplot_outliers <a class="header-anchor" href="#show-boxplot-outliers" aria-label="Permalink to &quot;show_boxplot_outliers&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Show outliers in the boxplot as points (usually confusing when paired with the scatter plot so the default is to not show them)</p><h3 id="show-median" tabindex="-1">show_median <a class="header-anchor" href="#show-median" aria-label="Permalink to &quot;show_median&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Determines whether or not to have a line for the median value in the boxplot.</p><h3 id="side" tabindex="-1">side <a class="header-anchor" href="#side" aria-label="Permalink to &quot;side&quot;">​</a></h3><p>Defaults to <code>:left</code></p><p>Can take values of <code>:left</code>, <code>:right</code>, determines where the violin plot will be, relative to the scatter points</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>Determines the stroke width for the outline of the boxplot.</p><h3 id="violin-limits" tabindex="-1">violin_limits <a class="header-anchor" href="#violin-limits" aria-label="Permalink to &quot;violin_limits&quot;">​</a></h3><p>Defaults to <code>(-Inf, Inf)</code></p><p>Specify values to trim the <code>violin</code>. Can be a <code>Tuple</code> or a <code>Function</code> (e.g. <code>datalimits=extrema</code>)</p><h3 id="whiskerwidth" tabindex="-1">whiskerwidth <a class="header-anchor" href="#whiskerwidth" aria-label="Permalink to &quot;whiskerwidth&quot;">​</a></h3><p>Defaults to <code>0.5</code></p><p>The width of the Q1, Q3 whisker in the boxplot. Value as a portion of the <code>boxplot_width</code>.</p>',96))])}const A=l(F,[["render",b]]);export{D as __pageData,A as default};
