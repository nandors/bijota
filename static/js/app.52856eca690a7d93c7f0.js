webpackJsonp([5],{EdSF:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",{attrs:{column:""}},[e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[e("h3",[t._v("Error 404")]),t._v(" "),e("h5",[t._v("Oops, looks like your link is incorrect")])])],1)},a=[],r={render:i,staticRenderFns:a};n.a=r},IcnI:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var i=e("/5sW"),a=e("NYxO"),r=e("lwq5"),o=e("ukYY"),s=e("mUbh"),u=e("UjVw");i.a.use(a.a);var c=new a.a.Store({state:r.a,mutations:o.a,actions:s.a,getters:u.a})},JVN7:function(t,n){},LSZC:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i={apiKey:"AIzaSyALkZ_5YTZMMF4rdHnEEiDYHuO_l7C0Up8",authDomain:"vspa-15b54.firebaseapp.com",databaseURL:"https://vspa-15b54.firebaseio.com",projectId:"vspa-15b54",storageBucket:"vspa-15b54.appspot.com",messagingSenderId:"853018899462"}},M93x:function(t,n,e){"use strict";function i(t){e("JVN7")}var a=e("xJD8"),r=e("NiAl"),o=e("VU/8"),s=i,u=o(a.a,r.a,!1,s,null,null);n.a=u.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("/5sW"),a=e("3EgV"),r=e.n(a),o=e("M93x"),s=e("YaEn"),u=e("IcnI"),c=e("Sazm"),l=e.n(c),p=e("LSZC");i.a.use(r.a),i.a.config.productionTip=!1,l.a.initializeApp(p.a);var v=l.a.auth().onAuthStateChanged(function(t){new i.a({el:"#app",router:s.a,store:u.a,render:function(t){return t(o.a)},created:function(){u.a.dispatch("autoSignIn",t)}}),v()})},NiAl:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-navigation-drawer",{attrs:{temporary:""},model:{value:t.sidebar,callback:function(n){t.sidebar=n},expression:"sidebar"}},[e("v-list",[t._l(t.menuItems,function(n){return e("v-list-tile",{key:n.title,attrs:{to:n.path}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-tile-content",[t._v(t._s(n.title))])],1)}),t._v(" "),t.isAuthenticated?e("v-list-tile",{on:{click:t.userSignOut}},[e("v-list-tile-action",[e("v-icon",[t._v("exit_to_app")])],1),t._v(" "),e("v-list-tile-content",[t._v("Sign Out")])],1):t._e()],2)],1),t._v(" "),e("v-toolbar",{attrs:{fixed:""}},[e("span",{staticClass:"hidden-sm-and-up"},[e("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),t.sidebar=!t.sidebar}}})],1),t._v(" "),e("v-toolbar-title",[e("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n        "+t._s(t.appTitle)+"\n      ")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(n){return e("v-btn",{key:n.title,attrs:{flat:"",to:n.path}},[e("v-icon",{attrs:{left:""}},[t._v(t._s(n.icon))]),t._v("\n        "+t._s(n.title)+"\n      ")],1)}),t._v(" "),t.isAuthenticated?e("v-btn",{attrs:{flat:""},on:{click:t.userSignOut}},[e("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Sign Out\n      ")],1):t._e()],2)],1),t._v(" "),e("main",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};n.a=r},UjVw:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i={appTitle:function(t){return t.appTitle},getUser:function(t){return t.user},getError:function(t){return t.error},getLoading:function(t){return t.loading}}},WoGI:function(t,n,e){"use strict";n.a={}},YaEn:function(t,n,e){"use strict";var i=e("Gu7T"),a=e.n(i),r=e("/5sW"),o=e("/ocq"),s=e("Sazm"),u=e.n(s),c=e("YcJa"),l=[{path:"/bijota/",component:"Landing"},{path:"/bijota/signin",component:"Signin"},{path:"/bijota/signup",component:"Signup"},{path:"/bijota/home",component:"Home",meta:{requiresAuth:!0}}],p=l.map(function(t){return{path:t.path,component:function(){return e("mUJ2")("./"+t.component+".vue")},meta:t.meta}});r.a.use(o.a);var v=new o.a({mode:"history",routes:[].concat(a()(p),[{path:"*",component:c.default}])});v.beforeEach(function(t,n,e){var i=t.matched.some(function(t){return t.meta.requiresAuth}),a=u.a.auth().currentUser;i&&!a&&e("/signin"),e()}),n.a=v},YcJa:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("WoGI"),a=e("EdSF"),r=e("VU/8"),o=r(i.a,a.a,!1,null,null,null);n.default=o.exports},lwq5:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i={appTitle:"My Awesome App",user:null,error:null,loading:!1}},mUJ2:function(t,n,e){function i(t){var n=a[t];return n?Promise.all(n.slice(1).map(e.e)).then(function(){return e(n[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./Home.vue":["lO7g",3],"./Landing.vue":["X4if",2],"./NotFound.vue":["YcJa"],"./Signin.vue":["Asuo",1],"./Signup.vue":["psOb",0]};i.keys=function(){return Object.keys(a)},t.exports=i,i.id="mUJ2"},mUbh:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var i=e("Sazm"),a=e.n(i),r=e("YaEn"),o={userSignUp:function(t,n){var e=t.commit;e("setLoading",!0),a.a.auth().createUserWithEmailAndPassword(n.email,n.password).then(function(t){e("setUser",t),e("setLoading",!1),e("setError",null),r.a.push("/home")}).catch(function(t){e("setError",t.message),e("setLoading",!1)})},userSignIn:function(t,n){var e=t.commit;e("setLoading",!0),a.a.auth().signInWithEmailAndPassword(n.email,n.password).then(function(t){e("setUser",t),e("setLoading",!1),e("setError",null),r.a.push("/home")}).catch(function(t){e("setError",t.message),e("setLoading",!1)})},autoSignIn:function(t,n){(0,t.commit)("setUser",n)},userSignOut:function(t){var n=t.commit;a.a.auth().signOut(),n("setUser",null),r.a.push("/")}}},ukYY:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i={setUser:function(t,n){t.user=n},setError:function(t,n){t.error=n},setLoading:function(t,n){t.loading=n}}},xJD8:function(t,n,e){"use strict";n.a={data:function(){return{sidebar:!1}},computed:{appTitle:function(){return this.$store.getters.appTitle},isAuthenticated:function(){return null!==this.$store.getters.getUser&&void 0!==this.$store.getters.getUser},menuItems:function(){return this.isAuthenticated?[{title:"Home",path:"/bijota/home",icon:"home"}]:[{title:"Sign Up",path:"/bijota/signup",icon:"face"},{title:"Sign In",path:"/bijota/signin",icon:"lock_open"}]}},methods:{userSignOut:function(){this.$store.dispatch("userSignOut")}}}}},["NHnr"]);
//# sourceMappingURL=app.52856eca690a7d93c7f0.js.map