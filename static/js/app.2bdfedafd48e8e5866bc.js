webpackJsonp([31],{"4Hxo":function(n,e,t){"use strict";var r=t("BO1k"),o=t.n(r),a=t("W3Iv"),u=t.n(a),i=t("pFYg"),d=t.n(i),c=t("//Fk"),l=t.n(c),s=t("mtWM"),m=t.n(s),p=t("mw3O"),h=t.n(p),f=t("uaSg").a;m.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",m.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded",m.a.defaults.withCredentials=!0;var g=m.a.create({baseURL:f,timeout:1e4});window.__axiosPromiseArr=[],g.interceptors.request.use(function(n){return n.cancelToken=new m.a.CancelToken(function(n){window.__axiosPromiseArr.push({cancel:n})}),"post"===n.method&&(n.data=h.a.stringify(n.data)),n},function(n){l.a.reject(n)}),g.interceptors.response.use(function(n){return void 0==n.data?n.request.responseText:n.data},function(n){return l.a.reject(n)});var b=g,y=t("yclV");t.d(e,"r",function(){return v}),t.d(e,"e",function(){return P}),t.d(e,"F",function(){return k}),t.d(e,"_2",function(){return C}),t.d(e,"k",function(){return x}),t.d(e,"l",function(){return _}),t.d(e,"V",function(){return I}),t.d(e,"Y",function(){return A}),t.d(e,"I",function(){return D}),t.d(e,"W",function(){return T}),t.d(e,"m",function(){return L}),t.d(e,"R",function(){return N}),t.d(e,"U",function(){return O}),t.d(e,"T",function(){return S}),t.d(e,"S",function(){return B}),t.d(e,"X",function(){return H}),t.d(e,"_21",function(){return $}),t.d(e,"j",function(){return W}),t.d(e,"z",function(){return R}),t.d(e,"_5",function(){return z}),t.d(e,"G",function(){return M}),t.d(e,"_3",function(){return j}),t.d(e,"_4",function(){return E}),t.d(e,"Q",function(){return F}),t.d(e,"a",function(){return V}),t.d(e,"d",function(){return G}),t.d(e,"b",function(){return K}),t.d(e,"o",function(){return U}),t.d(e,"H",function(){return Q}),t.d(e,"_13",function(){return q}),t.d(e,"A",function(){return X}),t.d(e,"_14",function(){return J}),t.d(e,"_16",function(){return Y}),t.d(e,"_24",function(){return Z}),t.d(e,"_20",function(){return nn}),t.d(e,"_23",function(){return en}),t.d(e,"_18",function(){return tn}),t.d(e,"_17",function(){return rn}),t.d(e,"y",function(){return on}),t.d(e,"J",function(){return an}),t.d(e,"K",function(){return un}),t.d(e,"Z",function(){return dn}),t.d(e,"_1",function(){return cn}),t.d(e,"_0",function(){return ln}),t.d(e,"f",function(){return sn}),t.d(e,"_12",function(){return mn}),t.d(e,"_11",function(){return pn}),t.d(e,"g",function(){return hn}),t.d(e,"i",function(){return fn}),t.d(e,"h",function(){return gn}),t.d(e,"_19",function(){return bn}),t.d(e,"c",function(){return yn}),t.d(e,"_15",function(){return wn}),t.d(e,"_22",function(){return vn}),t.d(e,"_25",function(){return Pn}),t.d(e,"N",function(){return kn}),t.d(e,"M",function(){return Cn}),t.d(e,"P",function(){return xn}),t.d(e,"L",function(){return _n}),t.d(e,"C",function(){return In}),t.d(e,"B",function(){return An}),t.d(e,"E",function(){return Dn}),t.d(e,"D",function(){return Tn}),t.d(e,"O",function(){return Ln}),t.d(e,"x",function(){return Nn}),t.d(e,"w",function(){return On}),t.d(e,"_7",function(){return Sn}),t.d(e,"_8",function(){return Bn}),t.d(e,"_9",function(){return Hn}),t.d(e,"_6",function(){return $n}),t.d(e,"_10",function(){return Wn}),t.d(e,"n",function(){return Rn}),t.d(e,"u",function(){return Fn}),t.d(e,"t",function(){return Vn}),t.d(e,"v",function(){return Gn}),t.d(e,"p",function(){return Kn}),t.d(e,"q",function(){return Un}),t.d(e,"s",function(){return Qn});var w=arguments,v=function(n,e,t){return b({url:"news/expressList",method:"post",data:{id:n,up:e||"",size:t||10}})},P=function(n){return b({url:"home/kefu",method:"post",data:{action:"unread"}})},k=function(n){return b({url:"user/userTradeKeep",method:"post",data:n})},C=function(n){return b({url:"user/userTradeKeep",method:"post",data:{action:"update",isKeep:n}})},x=function(n){return b({url:"user/getCategory/"+n,method:"post",data:{id:n}})},_=function(n,e,t){return b({url:"user/funds",method:"post",data:{type:n,beginId:e,page:t,size:10}})},I=function(n,e,t){return b({url:"pay/rechargeBank",method:"post",data:{money:n,rate:e,type:t}})},A=function(n){return b({url:"pay/rechargeWallet",method:"post",data:{action:"wallet",currency:n}})},D=function(){return b({url:"pay/otcServiceStatus",method:"post",data:{}})},T=function(n,e,t){return b({url:"pay/rechargeAlipay",method:"post",data:{money:n,rate:e,type:t}})},L=function(n){return b({url:"pay/merchant",method:"post",data:n})},N=function(n){return b({url:"pay/rechargeOtcActiveCount",method:"post",data:n})},O=function(n,e,t,r){return b({url:"pay/rechargeHistory",method:"post",data:{type:n,currency:e,page:t,size:r||10}})},S=function(n){return b({url:"pay/rechargeDetail",method:"post",data:{id:n}})},B=function(n){return b({url:"pay/cancelRechargeOtc",method:"post",data:{id:n}})},H=function(n){return b({url:"pay/rechargeTransferConfirm",method:"post",data:{id:n}})},$=function(n){var e=n.money,t=n.bankCard,r=n.checkCode,o=n.rate;return b({url:"pay/withdrawOtc",method:"post",data:{action:"apply",money:e,bankCard:t,checkCode:r,rate:o}})},W=function(n){return b({url:"user/bankCard",method:"post",data:n})},R=function(n){return b({url:"user/asset",method:"post",data:n})},z=function(n,e){return b({url:"user/loginPasswd",method:"post",data:{oldPass:n,newPass:e}})},M=function(n){return b({url:"user/identityAuth",method:"post",data:n})},j=function(n,e,t,r,o){return b({url:"user/identityAuth",method:"post",data:{action:"auth",name:n,identityNumber:e,front:t,back:r,hold:o}})},E=function(){return b({url:"user/identityAuth",method:"post",data:{action:"uploadKyc2"}})},F=function(n){var e={action:"add",bank:n.bank,name:n.name,cardNumber:n.bankNo,checkCode:n.checkCode};return b({url:"user/payAdd",method:"post",data:e})},V=function(n){var e=n.bank,t=n.province,r=n.city,o=n.subbranch,a=n.cardNumber,u=n.checkCode;return b({url:"user/bankCardAdd",method:"post",data:{action:"add",bank:e,province:t,city:r,subbranch:o,cardNumber:a,checkCode:u}})},G=function(n){return b({url:"user/bankCardDefault",method:"post",data:{id:n}})},K=function(n){return b({url:"user/bankCardDel",method:"post",data:{id:n}})},U=function(n){return b({url:"home/kefu",method:"post",data:{size:10}})},Q=function(n){return b({url:"home/kefu",method:"post",data:{action:"send",content:n}})},q=function(n){var e={action:"add",label:n.label,address:n.address,checkCode:n.checkCode,currency:n.currency};return b({url:"user/walletAdd",method:"post",data:e})},X=function(n){return b({url:"user/wallet",method:"post",data:{currency:n}})},J=function(n){return b({url:"user/walletDel",method:"post",data:{id:n}})},Y=function(n){return b({url:"user/walletDefault",method:"post",data:{id:n}})},Z=function(n){return b({url:"pay/withdrawWalletFee",method:"post",data:{currency:n}})},nn=function(n,e,t,r){return b({url:"pay/withdrawHistory",method:"post",data:{beginTime:t,size:r||50,type:n,currency:e}})},en=function(n){var e={action:"apply",type:"wallet",money:n.money,walletId:n.walletId,checkCode:n.checkCode,currency:n.currency};return b({url:"pay/withdrawWallet",method:"post",data:e})},tn=function(n){var e={action:"apply",type:"internal",money:n.money,acceptor:n.acceptor,checkCode:n.checkCode,currency:n.currency};return b({url:"pay/withdrawInternal",method:"post",data:e})},rn=function(n){return b({url:"pay/withdrawDetail",method:"post",data:{id:n}})},on=function(n){var e={user_id:Object(y.a)("user_id")||0,m:n};return b({url:"sso/getinfo",method:"post",data:e})},an=function(n,e,t){return b({url:"sso/user_login_check",method:"post",data:{mobile:n,password:e,type:t}})},un=function(n){return b({url:"sso/user_logout",method:"post",data:n})},dn=function(n,e,t,r,o){return b({url:"sso/register",method:"post",data:{action:"register",type:t,username:n,password:e,inviteCode:r,channel:o}})},cn=function(n,e){return b({url:"sso/register",method:"post",data:{action:"verifyCode",mobile:n,verifyCode:e}})},ln=function(n,e,t){return b({url:"sso/register",method:"post",data:{action:"sendCode",type:t,mobile:n,imageCode:e}})},sn=function(n,e){return b({url:"sso/findback",method:"post",data:{action:"passwd",newPass:n,type:e}})},mn=function(n,e){return b({url:"user/userBing",method:"post",data:{action:"sendSms",user:n,type:e}})},pn=function(n,e,t,r){return b({url:"user/userBing",method:"post",data:{action:"bing",passwd:n,user:e,smscode:t,type:r}})},hn=function(n,e){return b({url:"sso/findback",method:"post",data:{action:"auth",name:n,identityNumber:e}})},fn=function(n){return b({url:"sso/findback",method:"post",data:{action:"verifyCode",verifyCode:n}})},gn=function(n,e,t){return b({url:"sso/findback",method:"post",data:{action:"sendCode",mobile:n,imageCode:e,type:t}})},bn=function(n){return b({url:"pay/withdrawInternal",method:"post",data:{action:"sendSms"}})},yn=function(n){return b({url:"user/bankCardAdd",method:"post",data:{action:"sendSms"}})},wn=function(n){return b({url:"user/walletAdd",method:"post",data:{action:"sendSms"}})},vn=function(n){return b({url:"pay/withdrawOtc",method:"post",data:{action:"sendSms"}})},Pn=function(n){return b({url:"pay/withdrawWallet",method:"post",data:{action:"sendSms"}})},kn=function(n){return b({url:"miningExchange",method:"post",data:n})},Cn=function(n){return b({url:"miningDig",method:"post",data:n})},xn=function(n){return b({url:"home/broadcastMining",method:"post",data:n})},_n=function(n){return b({url:"mining",method:"post",data:n})},In=function(n){return b({url:"inviteInfo",method:"post",data:n})},An=function(n){return b({url:"inviteBroadcast",method:"post",data:n})},Dn=function(n){return b({url:"inviteUsers",method:"post",data:n})},Tn=function(n){return b({url:"inviteRedeem",method:"post",data:n})},Ln=function(n){return b({url:"miningMsg"+En(),method:"get",data:n})},Nn=function(n){return b({url:"trade/rule",method:"post",data:{commodity:n}})},On=function(n){return b({url:"trade/scheme",method:"post",data:n})},Sn=function(n){return b({url:"trade/open",method:"post",data:n})},Bn=function(n,e){return b({url:"trade/keep",method:"post",data:{bettingId:n,isKeep:e}})},Hn=function(n){return b({url:"trade/revoke",method:"post",data:{bettingId:n}})},$n=function(n){return b({url:"trade/close",method:"post",data:{id:n,source:"手动平仓"}})},Wn=function(n){return b({url:"trade/spsl",method:"post",data:n})},Rn=function(n){return b({url:"broadcastIndex"+En(),method:"get",data:n})};function zn(n){return n&&(n="object"===(void 0===n?"undefined":d()(n))?n[0].replace("/","").toLowerCase():n.replace("/","").toLowerCase()),n}function Mn(n){for(var e=[],t=u()(n),r=0;r<t.length;r++){var o=jn(t[r],2),a=o[0],i=o[1];e.push("".concat(a,"=").concat(i))}return e.join("&")}function jn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,a=!1,u=void 0;try{for(var i,d=o()(n);!(r=(i=d.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){a=!0,u=n}finally{try{r||null==d.return||d.return()}finally{if(a)throw u}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function En(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"?")+"_="+Date.now()}var Fn=function(n){var e=n.map(function(n){return zn(n)}).join(",");return b({url:"quotes/$code".replace("$code",e),method:"get",data:n})},Vn=function(n){return b({url:"quote/$code".replace("$code",zn(n)),method:"get"})},Gn=function(n){w.length>1&&void 0!==w[1]&&w[1],w.length>2&&void 0!==w[2]&&w[2];var e="kline/$code/1".replace("$code",zn(n));return e+="?"+Mn({time:"",size:"1"})+En("&"),b({url:e,method:"get"})},Kn=function(n){w.length>1&&void 0!==w[1]&&w[1],w.length>2&&void 0!==w[2]&&w[2];var e="kline/$code/999".replace("$code",zn(n));return e+="?"+Mn({time:"",size:100})+En("&"),b({url:e,method:"get"})},Un=function(n,e){w.length>2&&void 0!==w[2]&&w[2],w.length>3&&void 0!==w[3]&&w[3];var t="kline/$code/$type";return t=(t=t.replace("$code",zn(n))).replace("$type",e),t+="?"+Mn({time:"",size:100})+En("&"),b({url:t,method:"get"})},Qn=function(n){return b({url:"trade/getPageConfig/"+n.simulate,method:"get"})}},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("Xxa5"),o=t.n(r),a=t("exGp"),u=t.n(a),i=t("7+uW"),d=t("4Hxo"),c=(t("yclV"),{data:function(){return{transitionName:""}},mounted:function(){this.getUserInfo()},created:function(){"/index"!==location.pathname&&"/"!==location.pathname&&document.body.classList.remove("body-load")},computed:{key:function(){return void 0!==this.$route.name?this.$route.name+new Date:this.$route+new Date}},methods:{getUserInfo:function(){}},watch:{$route:function(n,e){n.meta.index>e.meta.index?this.transitionName="slide-left":this.transitionName="slide-right"}}}),l={render:function(){var n=this.$createElement;return(this._self._c||n)("router-view",{key:this.key})},staticRenderFns:[]};var s=t("VU/8")(c,l,!1,function(n){t("m6Ry")},null,null).exports,m=t("/ocq"),p=function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"N+OQ"))},h=function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"4uU7"))},f=function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"DONa"))},g=function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"ZRrC"))},b=function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"4LlN"))};i.a.use(m.a);var y=new m.a({mode:"history",scrollBehavior:function(n,e,t){if("homeIndex"===n.name)return{x:0,y:0}},routes:[{path:"/",name:"index",component:f},{path:"/index",name:"IndexHome0",component:f},{path:"/index/:coin",name:"IndexHome",component:f},{path:"/invite/:fu",name:"homeInvite",component:g},{path:"/notice",name:"notice",component:p},{path:"/notice/trade-btc-to-btc",name:"notice-btc",component:p},{path:"/user",name:"user",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"KKcf"))}},{path:"/user/settings",name:"userSettings",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"c8Du"))}},{path:"/user/settings/trade",name:"userSettingsTrade",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"glhv"))}},{path:"/user/wallet",name:"userWallet",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"wnx4"))}},{path:"/user/wallet/add",name:"userWalletAdd",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"rDSB"))}},{path:"/user/passwd",name:"userPasswd",component:function(){return Promise.all([t.e(0),t.e(28)]).then(t.bind(null,"XMLr"))}},{path:"/user/bankcard",name:"userBankCard",component:function(){return Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"UbA5"))}},{path:"/user/pay/add",name:"userPayAdd",component:function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"5yrP"))}},{path:"/user/bankcard/add",name:"userBankCardAdd",component:function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"iExo"))}},{path:"/user/bing",name:"userBing",component:function(){return Promise.all([t.e(0),t.e(26)]).then(t.bind(null,"s3Le"))}},{path:"/user/email",name:"userEmail",component:function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"spe8"))}},{path:"/user/realname",name:"userRealname",component:function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,"AiQr"))}},{path:"/user/realname/lvl1",name:"userRealnameLvl1",component:function(){return Promise.all([t.e(0),t.e(20)]).then(t.bind(null,"BV/y"))}},{path:"/user/realname/lvl2",name:"userRealnameLvl2",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"/LCa"))}},{path:"/activity/mining",name:"mining",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"2BND"))}},{path:"/mining/fast",name:"fast",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"2AGq"))}},{path:"/cooperation/invite",name:"invite",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"n+bm"))}},{path:"/cooperation/poster/:user",name:"poster",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"uPcT"))}},{path:"/cooperation/share/:user/:photo",name:"share",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"VirO"))}},{path:"/trade",name:"trade",component:h},{path:"/trade/simulate",name:"simulate",component:h},{path:"/news",name:"news",component:function(){return Promise.all([t.e(0),t.e(25)]).then(t.bind(null,"zK8J"))}},{path:"/help",name:"help",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"Ku7O"))}},{path:"/trade/rule",name:"tradeRule",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"t50E"))}},{path:"/trade/calc-income",name:"tradeCalc",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"1yk/"))}},{path:"/help/intro",name:"helpIntro",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"nL3M"))}},{path:"/help/how-trade",name:"howTrade",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"7Q5n"))}},{path:"/help/how-recharge-withdrawal",name:"howRechargeWithdrawal",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"OlXH"))}},{path:"/kefu",name:"kefu",component:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"fFXC"))}},{path:"/mining/tft",name:"tft",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"no1D"))}},{path:"/download/ios",name:"ios",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"fwMB"))}},{path:"/download/android",name:"android",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"8d4x"))}},{path:"/account/login",name:"login",component:function(){return Promise.all([t.e(0),t.e(23)]).then(t.bind(null,"ew9k"))}},{path:"/account/register",name:"register",component:g},{path:"/findback",name:"findback",component:function(){return Promise.all([t.e(0),t.e(27)]).then(t.bind(null,"sRFk"))}},{path:"/agreement/user",name:"agreementUser",component:function(){return t.e(24).then(t.bind(null,"EtpP"))}},{path:"/recharge",name:"recharge",component:b},{path:"/recharge/buy",name:"rechargeBuy",component:b},{path:"/recharge/wallet",name:"rechargeWallet",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"finf"))}},{path:"/recharge/list",name:"rechargeList",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"izDn"))}},{path:"/recharge/list/otc",name:"rechargeListOtc",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"zOTT"))}},{path:"/recharge/list/wallet",name:"rechargeListWallet",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"hwMC"))}},{path:"/recharge/list/:id",name:"rechargeDetail",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"9YaS"))}},{path:"/withdrawal/sell",name:"withdrawalSell",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"+fu2"))}},{path:"/withdrawal/list",name:"withdrawalList",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"GNZN"))}},{path:"/withdrawal/list/wallet",name:"withdrawalListWallet",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"GNZN"))}},{path:"/withdrawal/wallet",name:"withdrawalWallet",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"tPGn"))}},{path:"/withdrawal/list/:id",name:"withdrawalDetail",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"BQAp"))}},{path:"/funds/details",name:"fundsDetails",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"BjvV"))}},{path:"/cooperation/market-maker",name:"marketMaker",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"a3FW"))}},{path:"/landingpage1",name:"landingpage1",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"Ola6"))}},{path:"/landingpage6",name:"landingpage6",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"TV+V"))}},{path:"/landingpage2",name:"landingpage2",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"iGAJ"))}},{path:"/landingpage3",name:"landingpage3",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"Bz+B"))}},{path:"/landingpage4",name:"landingpage4",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"/uIq"))}},{path:"/landingpage5",name:"landingpage5",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"eyHV"))}},{path:"*",redirect:{name:"index"}},{path:"/error/404",name:"notFound",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"rQ0X"))}}]}),w=t("I0MY"),v=t.n(w),P=t("mvHQ"),k=t.n(P),C=this;function x(n,e,t){t=t||7;var r=new Date;r.setTime(r.getTime()+24*t*60*60*1e3);var o="expires="+r.toGMTString();document.cookie=n+"="+e+"; "+o+"; path=/"}document.body.addEventListener("touchmove",function(n){document.body.clientHeight<=document.documentElement.clientHeight&&n.preventDefault()},{passive:!1}),i.a.prototype.router=y,i.a.config.productionTip=!1;var _,I=["trade","simulate","homeIndex","IndexHome","IndexHome0","index","homeInvite","tradeRule"];y.beforeEach((_=u()(o.a.mark(function n(e,t,r){var a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("notFound"===e.name&&(i.a.prototype.fromPath=e.redirectedFrom),!(I.indexOf(e.name)>=0)){n.next=10;break}return"homeInvite"===e.name&&x("invite",e.params.fu),n.next=5,Object(d.s)({simulate:e.name}).catch(function(n){});case 5:(a=n.sent)||(a={msg:"",isLogin:!1,code:200,config:[],success:!0,simulate:"simulate"===e.name}),o=a,(t="gPageConfig")&&("string"!=typeof o&&(o=k()(o)),window.localStorage.setItem(t,o)),i.a.prototype.gPageConfig=a,r();case 10:r();case 11:case"end":return n.stop()}var t,o},n,C)})),function(n,e,t){return _.apply(this,arguments)})),i.a.use(v.a,{name:"v-touch"}),new i.a({el:"#app",router:y,components:{App:s},template:"<App/>"})},m6Ry:function(n,e){},uaSg:function(n,e,t){"use strict";t.d(e,"h",function(){return r}),t.d(e,"i",function(){return o}),t.d(e,"c",function(){return a}),t.d(e,"g",function(){return i}),t.d(e,"f",function(){return d}),t.d(e,"b",function(){return u}),t.d(e,"a",function(){return c}),t.d(e,"j",function(){return l}),t.d(e,"d",function(){return s}),t.d(e,"e",function(){return m});var r="GodMEX",o="GOD",a="god-mex.com",u="",i="",d="",c="",l="",s=void 0,m=void 0;i="http://h5.god-mex.com",d="http://h5.god-mex.com",u="http://api.god-mex.com",c="http://api.god-mex.com/api/mine",l="http://api.god-mex.com",s="https://copy.im/a/jSxQzm",m="https://copy.im/a/2Pw5CA"},yclV:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t("mvHQ"),o=(t.n(r),function(n){if(n)return window.localStorage.getItem(n)})}},["NHnr"]);