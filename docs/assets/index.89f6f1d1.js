import{_ as a,a as e}from"./index.2dbdd1d4.js";import{d as t,e as s,g as d,j as o,o as l,c as i,k as n,F as f,l as r,v,r as c}from"./vendor.8ef73ffe.js";import"./index.fe24a85c.js";var m,p;(p=m||(m={})).didDeal="0",p.willDeal="1";var u=t({name:"TaskList",components:{LayoutHeader:a,LayoutFooter:e},setup:()=>({active:s(m.willDeal),ENavTypes:m})});const y=r("data-v-84df6ffa");d("data-v-84df6ffa");const _=v(" 待处理 "),b=v(" 已处理 ");o();const w=y(((a,e,t,s,d,o)=>{const r=c("layout-header"),v=c("van-tab"),m=c("van-tabs"),p=c("layout-footer");return l(),i(f,null,[n(r,{title:"任务明细",showBtn:""}),n(m,{active:a.active,"onUpdate:active":e[1]||(e[1]=e=>a.active=e),animated:"",swipeable:"",sticky:"","title-active-color":"#f37b1d"},{default:y((()=>[n(v,{title:"待处理",name:a.ENavTypes.willDeal},{default:y((()=>[_])),_:1},8,["name"]),n(v,{title:"已处理",name:a.ENavTypes.didDeal},{default:y((()=>[b])),_:1},8,["name"])])),_:1},8,["active"]),n(p,{msgNum:10})],64)}));u.render=w,u.__scopeId="data-v-84df6ffa";export default u;
