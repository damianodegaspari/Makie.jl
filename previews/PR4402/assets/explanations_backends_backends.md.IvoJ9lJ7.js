import{_ as e,c as t,a5 as i,o as s}from"./chunks/framework.DYmsHcBi.js";const h=JSON.parse('{"title":"What is a backend","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/backends/backends.md","filePath":"explanations/backends/backends.md","lastUpdated":null}'),n={name:"explanations/backends/backends.md"};function l(d,a,c,p,k,r){return s(),t("div",null,a[0]||(a[0]=[i(`<h1 id="What-is-a-backend" tabindex="-1">What is a backend <a class="header-anchor" href="#What-is-a-backend" aria-label="Permalink to &quot;What is a backend {#What-is-a-backend}&quot;">​</a></h1><p>Makie is the frontend package that defines all plotting functions. It is reexported by every backend, so you don&#39;t have to specifically install or import it.</p><p>There are four backends which concretely implement all abstract rendering capabilities defined in Makie:</p><table tabindex="0"><thead><tr><th style="text-align:left;">Package</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="/previews/PR4402/explanations/backends/glmakie#GLMakie">GLMakie</a></td><td style="text-align:left;">GPU-powered, interactive 2D and 3D plotting in standalone <code>GLFW.jl</code> windows.</td></tr><tr><td style="text-align:left;"><a href="/previews/PR4402/explanations/backends/cairomakie#CairoMakie">CairoMakie</a></td><td style="text-align:left;"><code>Cairo.jl</code> based, non-interactive 2D (and some 3D) backend for publication-quality vector graphics.</td></tr><tr><td style="text-align:left;"><a href="/previews/PR4402/explanations/backends/wglmakie#WGLMakie">WGLMakie</a></td><td style="text-align:left;">WebGL-based interactive 2D and 3D plotting that runs within browsers.</td></tr><tr><td style="text-align:left;"><a href="/previews/PR4402/explanations/backends/rprmakie#RPRMakie">RPRMakie</a></td><td style="text-align:left;">An experimental ray tracing backend.</td></tr></tbody></table><h3 id="Activating-Backends" tabindex="-1">Activating Backends <a class="header-anchor" href="#Activating-Backends" aria-label="Permalink to &quot;Activating Backends {#Activating-Backends}&quot;">​</a></h3><p>You can activate any backend by <code>using</code> the appropriate package and calling its <code>activate!</code> function.</p><p>Example with WGLMakie:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WGLMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WGLMakie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">activate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>Each backend&#39;s <code>activate!</code> function optionally takes keyword arguments (referred to as <code>screen_config...</code>) that control various aspects of the backend. For example, to activate the GLMakie backend and set it up to produce windows with a custom title and no anti-aliasing:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GLMakie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">activate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Custom title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fxaa </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The keyword arguments accepted by each backend are listed in the backend-specific documentation pages linked in the table above.</p>`,11)]))}const g=e(n,[["render",l]]);export{h as __pageData,g as default};
