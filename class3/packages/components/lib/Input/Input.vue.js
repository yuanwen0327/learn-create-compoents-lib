"use strict";const e=require("vue"),i=require("element-plus");require("element-plus/theme-chalk/src/base.scss");require("element-plus/theme-chalk/src/input.scss");const c={class:"gie-input"},m=e.defineComponent({name:"GieInput",__name:"Input",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{expose:a,emit:d}){const u=s,l=e.computed({get:()=>u.modelValue,set:t=>{d("update:modelValue",t)}}),o=e.ref();function r(){var t;(t=o.value)==null||t.focus()}return a({focus:r}),(t,n)=>(e.openBlock(),e.createElementBlock("div",c,[e.createVNode(e.unref(i.ElInput),{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=p=>l.value=p),ref_key:"inputRef",ref:o,type:"text",disabled:u.disabled},null,8,["modelValue","disabled"])]))}});module.exports=m;
