(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return e(3326)}])},3326:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return p}});var a=e(7297),r=e(4288),o=e(917),u=e(1163),i=e(7294),c=e(3009);function l(){let t=(0,a.Z)(["\n  text-align: center;\n  input {\n    box-sizing: border-box;\n    margin-top: 10px;\n    margin: 10px auto 0 auto;\n    display: block;\n    padding: 0 20px 0 20px;\n    height: 40px;\n    width: 200px;\n    text-decoration: none;\n    border: solid 1px #cccccc;\n  }\n  button {\n    border: none;\n    height: 30px;\n    width: 200px;\n    background-color: #333333;\n    color: white;\n    margin-top: 10px;\n  }\n"]);return l=function(){return t},t}let s=(0,o.iv)(l());function p(){let[t,n]=(0,i.useState)(""),[e,a]=(0,i.useState)(""),[o,l]=(0,i.useState)(""),[p,g]=(0,i.useState)(""),[h,d]=(0,i.useState)([]),[f,w]=(0,i.useState)(""),x=(0,u.useRouter)();return(0,r.BX)("div",{css:s,children:[(0,r.tZ)("h2",{children:"회원가입"}),(0,r.tZ)("input",{type:"text",placeholder:"이름",onChange:t=>{n(t.target.value)}}),(0,r.tZ)("input",{type:"text",placeholder:"아이디",onChange:t=>{a(t.target.value)}}),(0,r.tZ)("input",{type:"password",placeholder:"비밀번호",onChange:t=>{w(t.target.value)}}),(0,r.tZ)("input",{type:"text",placeholder:"연락처",onChange:t=>{l(t.target.value)}}),(0,r.tZ)("input",{type:"text",placeholder:"이메일",onChange:t=>{g(t.target.value)}}),(0,r.tZ)("input",{type:"text",placeholder:"기술 스택",onChange:t=>{d(t.target.value.split(","))}}),(0,r.tZ)("button",{onClick:async()=>{x.push("/login")},children:"뒤로가기"}),(0,r.tZ)("button",{onClick:async()=>{try{200===(await (0,c.y1)(t,e,f,o,p,h)).status&&x.push("/login")}catch(t){alert("회원가입 실패!")}},children:"확인"})]})}},3009:function(t,n,e){"use strict";e.d(n,{TP:function(){return l},iu:function(){return s},jN:function(){return p},p6:function(){return c},x4:function(){return u},y1:function(){return i},yi:function(){return g}});var a=e(6154);let r="http://49.247.30.167:8080/";if(!r)throw Error("Base url이 없습니다.");let o=a.Z.create({baseURL:r,withCredentials:!0});async function u(t,n){return await o.get("/login",{auth:{username:t,password:n}})}async function i(t,n,e,a,r,u){return await o.post("/signUp",{username:t,loginId:n,password:e,contact:a,email:r,skills:u})}function c(t){return"".concat(t.getFullYear(),".").concat(t.getMonth()+1).concat(0===t.getDate()?"":".".concat(t.getDate()))}async function l(t){return[,,,,,].fill({id:1,author:"홍길동",content:"lorem ipsum",created:new Date,like:!1,likeCount:20})}async function s(t){let n=await o.get("/posts/".concat(t.getFullYear(),"/").concat(t.getMonth()+1));return 200!==n.status?{board:[],meetup:[],mentoring:[]}:n.data}function p(t){let n=new Date;n.setHours(0);let e=n.getTime()-t.getTime(),a=Math.ceil(e/864e5);return"D".concat(0===a?"-".concat(a):a>0?"+".concat(a):a)}async function g(){return(await o.get("/member/info")).data}}},function(t){t.O(0,[827,774,888,179],function(){return t(t.s=7805)}),_N_E=t.O()}]);