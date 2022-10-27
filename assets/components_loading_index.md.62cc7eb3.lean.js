var b=Object.defineProperty;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var B=(u,a,s)=>a in u?b(u,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[a]=s,_=(u,a)=>{for(var s in a||(a={}))x.call(a,s)&&B(u,s,a[s]);if(m)for(var s of m(a))D.call(a,s)&&B(u,s,a[s]);return u};import{_ as y,r as C,c as w,a as T,b as f,w as d,V as r,f as v,o as L,d as t,e as n}from"./app.87a836ce.js";var V="/assets/loading.74f78553.jpg";const N={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:u,resolveComponent:a,withCtx:s,createVNode:o,openBlock:i,createElementBlock:k}=r,c=u("\u70B9\u51FB\u67E5\u770B\u6548\u679C");function l(p,h){const e=a("hl-button"),E=a("hl-loading");return i(),k("div",null,[o(e,{type:"primary",effect:"dark",onClick:p.showLoading},{default:s(()=>[c]),_:1},8,["onClick"]),o(E,{loading:p.loading,type:"circular",vertical:"",loadingText:"\u52A0\u8F7D\u4E2D..."},null,8,["loading"])])}const{defineComponent:A}=r,{ref:g}=r;return _({render:l},A({setup(p,{expose:h}){h();const e=g(!1),F={loading:e,showLoading:()=>{e.value=!0,setTimeout(()=>{e.value=!1},2e3)},ref:g};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}()}},G='{"title":"Loading\u6B63\u5728\u52A0\u8F7D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B\u56FE","slug":"\u793A\u4F8B\u56FE"},{"level":2,"title":"\u5982\u4F55\u4F7F\u7528","slug":"\u5982\u4F55\u4F7F\u7528"},{"level":2,"title":"\u53C2\u6570\u8BE6\u7EC6\u8BF4\u660E","slug":"\u53C2\u6570\u8BE6\u7EC6\u8BF4\u660E"}],"relativePath":"components/loading/index.md","lastUpdated":1666770099767}',q=v('<h1 id="loading\u6B63\u5728\u52A0\u8F7D" tabindex="-1">Loading\u6B63\u5728\u52A0\u8F7D <a class="header-anchor" href="#loading\u6B63\u5728\u52A0\u8F7D" aria-hidden="true">#</a></h1><h2 id="\u793A\u4F8B\u56FE" tabindex="-1">\u793A\u4F8B\u56FE <a class="header-anchor" href="#\u793A\u4F8B\u56FE" aria-hidden="true">#</a></h2><p><img src="'+V+'" alt="Alt"><br></p><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1">\u5982\u4F55\u4F7F\u7528 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a></h2>',4),j=t("div",null,[t("code",null,"hl-loading"),n("\u5171\u6709\u4EE5\u4E0B\u51E0\u79CD\u7528\u6CD5")],-1),$=t("div",{class:"language-vue line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("hl-button")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"effect"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("dark"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("showLoading"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u70B9\u51FB\u67E5\u770B\u6548\u679C"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("hl-button")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("hl-loading")]),n(),t("span",{class:"token attr-name"},":loading"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("loading"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("circular"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"vertical"),n(),t("span",{class:"token attr-name"},"loadingText"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u52A0\u8F7D\u4E2D..."),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("hl-loading")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" loading "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"showLoading"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        loading`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token boolean"},"true"),n(`
        `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),n(`
            loading`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token boolean"},"false"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),t("span",{class:"token number"},"2000"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),S=v('<h2 id="\u53C2\u6570\u8BE6\u7EC6\u8BF4\u660E" tabindex="-1">\u53C2\u6570\u8BE6\u7EC6\u8BF4\u660E <a class="header-anchor" href="#\u53C2\u6570\u8BE6\u7EC6\u8BF4\u660E" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>loading</td><td>\u663E\u793A/\u9690\u85CF</td><td>boolean</td><td>true / false</td><td>false</td><td>-</td></tr><tr><td>type</td><td>\u52A0\u8F7D\u7C7B\u578B</td><td>string</td><td>circular / spinner</td><td>spinner</td><td>-</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>12~n</td><td>24</td><td>\u9ED8\u8BA4\u503C\u4E3A24\uFF0C\u5355\u4F4D\u4E3Apx</td></tr><tr><td>vertical</td><td>\u5782\u76F4\u6392\u5217</td><td>boolean</td><td>true / false</td><td>false</td><td>\u8BBE\u7F6E vertical \u5C5E\u6027\u540E\uFF0C\u56FE\u6807\u548C\u6587\u6848\u4F1A\u5782\u76F4\u6392\u5217</td></tr><tr><td>textColor</td><td>\u6587\u5B57\u989C\u8272</td><td>string</td><td>-</td><td>#999</td><td>\u8BBE\u7F6E textColor \u5C5E\u6027\u8BBE\u7F6E\u52A0\u8F7D\u6587\u6848\u7684\u989C\u8272</td></tr><tr><td>color</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u8272</td><td>string</td><td>-</td><td>-</td><td>\u8BBE\u7F6E color \u5C5E\u6027\u8BBE\u7F6E\u52A0\u8F7D\u56FE\u6807\u7684\u989C\u8272</td></tr><tr><td>loadingText</td><td>\u81EA\u5B9A\u4E49\u6587\u6848</td><td>string</td><td>-</td><td>\u6B63\u5728\u751F\u6210\u6570\u636E...</td><td>\u53EF\u901A\u8FC7\u8BBE\u7F6E loadingText \u5C5E\u6027\uFF0C\u81EA\u5B9A\u4E49\u52A0\u8F7D\u6587\u6848</td></tr></tbody></table>',2);function P(u,a,s,o,i,k){const c=C("render-demo-0"),l=C("demo");return L(),w("div",null,[T(`
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hongweixun
 * @Date: 2022-10-22 09:35:55
 * @LastEditors: hongweixun
 * @LastEditTime: 2022-10-26 15:41:39
`),q,f(l,{sourceCode:`<template>
<hl-button type="primary" effect="dark" @click="showLoading">\u70B9\u51FB\u67E5\u770B\u6548\u679C</hl-button>
<hl-loading :loading="loading" type="circular" vertical loadingText="\u52A0\u8F7D\u4E2D..."></hl-loading>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
    const loading = ref(false)
    const showLoading = () => {
        loading.value = true
        setTimeout(()=>{
            loading.value = false
        },2000)
    }
<\/script>
`},{description:d(()=>[j]),highlight:d(()=>[$]),default:d(()=>[f(c)]),_:1}),S])}var H=y(N,[["render",P]]);export{G as __pageData,H as default};
