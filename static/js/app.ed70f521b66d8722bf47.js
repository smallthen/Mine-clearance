webpackJsonp([0],{"3tN6":function(i,a){},"7EJT":function(i,a){},LtzE:function(i,a){},NHnr:function(i,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("7+uW"),n={render:function(){var i=this.$createElement,a=this._self._c||i;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var l=t("VU/8")({name:"App"},n,!1,function(i){t("LtzE")},null,null).exports,s=t("/ocq"),r={render:function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("div",{staticClass:"mineLi"},[i.liArray.length>0?t("ul",{style:i.mineUl},i._l(i.allLis,function(a,e){return t("li",{key:e,class:i.liArray[e].isOpen?"on":"",style:i.mineLiStyle,on:{click:function(a){return i.clickLi(e)}}},[i.liArray[e].isMark?t("div",{staticClass:"flag"},[i._v("🚩")]):i._e(),i._v(" "),i.liArray[e].isOpen?t("div",{staticClass:"show"},[9!==i.liArray[e].value?t("div",{staticClass:"num"},[0!==i.liArray[e].value?t("p",[i._v(i._s(i.liArray[e].value))]):i._e()]):t("div",{staticClass:"mines"},[i._v("💔")])]):i._e()])}),0):i._e()])},staticRenderFns:[]};var u={name:"mineCom",data:function(){return{liData:{liWidth:30,liBorder:1,cross:10,vertical:10,mineNum:10},liArray:[],flag:!1,flagNum:0,allNum:0,gameHasBegun:!1,changeNum:!1}},components:{mineLi:t("VU/8")({name:"mineLi",props:["liData","liArray"],computed:{mineUl:function(){return{width:this.liData.cross*(this.liData.liWidth+2*this.liData.liBorder)+"px",height:this.liData.vertical*(this.liData.liWidth+2*this.liData.liBorder)+"px"}},allLis:function(){return this.liData.cross*this.liData.vertical},mineLiStyle:function(){return{width:this.liData.liWidth+"px",height:this.liData.liWidth+"px",border:this.liData.liBorder+"px solid #333"}}},methods:{clickLi:function(i){this.$emit("clickLi",{index:i})}}},r,!1,function(i){t("3tN6")},"data-v-33e7fe75",null).exports},methods:{gameBegin:function(){this.gameHasBegun=!0,this.changeNum=!1;var i=parseInt(this.liData.cross)*parseInt(this.liData.vertical);this.allNum=i,this.leftNum=i-this.liData.mineNum,this.liArray=[];for(var a=this.liArray,t=0;t<i;t++){a.push({isOpen:!1,isMark:!1,value:0})}console.log(a);for(var e=0;e<this.liData.mineNum;){var n=Math.floor(Math.random()*i);9!==a[n].value&&(a[n].value=9,e++)}for(var l=parseInt(this.liData.cross),s=a,r=0;r<i;r++)if(9!==a[r].value){var u=r%l,o=void 0,c=void 0,v=void 0,m=void 0,d=void 0,h=void 0,p=void 0,f=void 0;0!==u&&r>l-1&&(o=r-l-1),r>l-1&&(c=r-l),u!==l-1&&r>l-1&&(v=r-l+1),0!==u&&(m=r-1),u!==l-1&&(d=r+1),0!==u&&r<i-l&&(h=r+l-1),r<i-l&&(p=r+l),u!==l-1&&r<i-l&&(f=r+l+1);var g=0,D=s;console.log(r,o,c,v,m,d,h,p,f),o&&(9==D[o].value&&g++),c&&(9==D[c].value&&g++),v&&(9==D[v].value&&g++),m&&(9==D[m].value&&g++),d&&(9==D[d].value&&g++),h&&(9==D[h].value&&g++),p&&(9==D[p].value&&g++),f&&(9==D[f].value&&g++),a[r].value=g}this.liArray=a},clickLi:function(i){var a=i.index,t=this.liArray,e=this.liData.cross;if(!(a<0||a>n||t[a].isOpen)){var n=this.liData.cross*this.liData.vertical;if(this.flag)t[a].isMark?(t[a].isMark=!1,this.flagNum--):(t[a].isMark=!0,this.checkNum(),this.flagNum++);else{if(t[a].isMark)return;if(9==t[a].value)return void this.gameOver();if(0!==t[a].value)return t[a].isOpen=!0,void this.checkNum();this.checkNum(),t[a].isOpen=!0;var l=a%e,s={index:0};s.index=a-e,a>e-1&&this.clickLi(s),s.index=a+e,a<n-e&&this.clickLi(s),s.index=a-1,0!==l&&this.clickLi(s),s.index=a+1,l!==e-1&&this.clickLi(s)}}},flagFun:function(){this.flag=!this.flag},gameOver:function(){this.liArray.forEach(function(i){i.isOpen=!0}),this.gameHasBegun=!1,setTimeout(function(){alert("游戏失败！")},300)},checkNum:function(){this.liArray.every(function(i){return 9==i.value&&i.isMark||i.isOpen&&9!=i.value})&&(console.log("恭喜通关"),this.gameHasBegun=!1)},setMineNum:function(){this.liData.mineNum>this.liData.cross*this.liData.vertical&&(alert("地雷数不能大于总数！"),this.liData.mineNum=10)}}},o={render:function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("div",{staticClass:"mineCom"},[i.changeNum?i._e():t("mineLi",{attrs:{liData:i.liData,liArray:i.liArray},on:{clickLi:i.clickLi}}),i._v(" "),t("div",{staticClass:"flag",on:{click:function(a){return i.flagFun()}}},[i._v(i._s(i.flag?"🚩":"😱"))]),i._v(" "),t("div",{staticClass:"input"},[t("ul",[t("li",[t("span",[i._v("方格宽度")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.liData.liWidth,expression:"liData.liWidth"}],attrs:{type:"number",disabled:i.gameHasBegun},domProps:{value:i.liData.liWidth},on:{focus:function(a){i.changeNum=!0},input:function(a){a.target.composing||i.$set(i.liData,"liWidth",a.target.value)}}})]),i._v(" "),t("li",[t("span",[i._v("横向个数")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.liData.cross,expression:"liData.cross"}],attrs:{type:"number",disabled:i.gameHasBegun},domProps:{value:i.liData.cross},on:{focus:function(a){i.changeNum=!0},input:function(a){a.target.composing||i.$set(i.liData,"cross",a.target.value)}}})]),i._v(" "),t("li",[t("span",[i._v("竖向个数")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.liData.vertical,expression:"liData.vertical"}],attrs:{type:"number",disabled:i.gameHasBegun},domProps:{value:i.liData.vertical},on:{focus:function(a){i.changeNum=!0},input:function(a){a.target.composing||i.$set(i.liData,"vertical",a.target.value)}}})]),i._v(" "),t("li",[t("span",[i._v("地雷个数")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.liData.mineNum,expression:"liData.mineNum"}],attrs:{type:"number",disabled:i.gameHasBegun},domProps:{value:i.liData.mineNum},on:{change:i.setMineNum,input:function(a){a.target.composing||i.$set(i.liData,"mineNum",a.target.value)}}})]),i._v(" "),t("li",[t("span",[i._v("旗帜个数")]),t("span",[i._v(i._s(i.flagNum))])])]),i._v(" "),t("button",{on:{click:function(a){return i.gameBegin()}}},[i._v("开始")])])],1)},staticRenderFns:[]};var c=t("VU/8")(u,o,!1,function(i){t("YLzI")},"data-v-54a3a6f8",null).exports;e.a.use(c);var v={name:"HelloWorld",data:function(){return{}},components:{mineCom:c}},m={render:function(){var i=this.$createElement,a=this._self._c||i;return a("div",{staticClass:"hello"},[a("mineCom")],1)},staticRenderFns:[]};var d=t("VU/8")(v,m,!1,function(i){t("7EJT")},"data-v-4585ba8c",null).exports;e.a.use(s.a);var h=new s.a({routes:[{path:"/",name:"HelloWorld",component:d}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:h,components:{App:l},template:"<App/>"})},YLzI:function(i,a){}},["NHnr"]);
//# sourceMappingURL=app.ed70f521b66d8722bf47.js.map