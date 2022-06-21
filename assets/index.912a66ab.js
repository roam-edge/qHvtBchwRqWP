import{o as e,f as a,k as s,e as l,aR as t,aS as r,aT as o,aN as n,C as i,ag as p,M as d,aw as u,aU as c,aV as f,aW as m,m as h,p as v,K as w,h as y,aX as g,aM as x}from"./index.b1f16a41.js";import{a as k,E as b}from"./el-col.44f3b6db.js";const V={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},_=[s("path",{fill:"currentColor",d:"M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"},null,-1),s("path",{fill:"currentColor",d:"M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"},null,-1)];var P={name:"ep-lock",render:function(s,l){return e(),a("svg",V,_)}};const C={style:{display:"flex",alignItems:"center"}},M=s("span",{style:{display:"inline-flex",marginLeft:"3px"}},"Password",-1),z={style:{display:"flex",alignItems:"center"}},U=s("span",{style:{display:"inline-flex",marginLeft:"3px"}},"Confirm",-1),j={style:{display:"flex",justifyContent:"end"}},E=y("login"),R=l({__name:"index",setup(a){const l=t(),y=r(),{setToken:V}=o(),{setUserName:_}=n(),R=i(),H=p({pass:"",checkPass:""}),I=p({pass:[{validator:(e,a,s)=>{if(""===a)s(new Error("Please input the password"));else{if(""!==H.checkPass){if(!R.value)return;R.value.validateField("checkPass",(()=>null))}s()}},trigger:"blur"}],checkPass:[{validator:(e,a,s)=>{""===a?s(new Error("Please input the password again")):a!==H.pass?s(new Error("Two inputs don't match!")):s()},trigger:"blur"}]});return(a,t)=>{const r=P,o=d,n=u,i=c,p=f,T=m,W=k,A=b;return e(),h(A,{style:{"justify-content":"center","margin-top":"20vh"}},{default:v((()=>[w(W,{span:12,xs:24,sm:24,md:12,lg:12},{default:v((()=>[w(T,{ref_key:"ruleFormRef",ref:R,model:H,"status-icon":"",rules:I,"label-width":"120px","label-position":"left"},{default:v((()=>[w(i,{prop:"pass"},{label:v((()=>[s("div",C,[w(o,null,{default:v((()=>[w(r)])),_:1}),M])])),default:v((()=>[w(n,{modelValue:H.pass,"onUpdate:modelValue":t[0]||(t[0]=e=>H.pass=e),"prefix-icon":"el-icon-lock",type:"password","show-password":"",autocomplete:"on"},null,8,["modelValue"])])),_:1}),w(i,{label:"Confirm",prop:"checkPass"},{label:v((()=>[s("div",z,[w(o,null,{default:v((()=>[w(r)])),_:1}),U])])),default:v((()=>[w(n,{modelValue:H.checkPass,"onUpdate:modelValue":t[1]||(t[1]=e=>H.checkPass=e),"prefix-icon":"el-icon-lock","show-password":"",clearable:"",type:"password",autocomplete:"on"},null,8,["modelValue"])])),_:1}),s("div",j,[w(p,{type:"primary",onClick:t[2]||(t[2]=e=>{var a;(a=R.value)&&a.validate((async e=>{if(!e)return!1;{V(H.pass);const[e,a]=await g();if(e)return!1;_(a.login),x.success("登录成功");const s=decodeURIComponent(y.query.redirect);s.startsWith("http")?window.location.href=s:s.startsWith("/")?l.push(s):l.push("/")}}))})},{default:v((()=>[E])),_:1})])])),_:1},8,["model","rules"])])),_:1})])),_:1})}}});export{R as default};
