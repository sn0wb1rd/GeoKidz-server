(this["webpackJsonpGeoKidz-client"]=this["webpackJsonpGeoKidz-client"]||[]).push([[0],{62:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(19),r=n.n(c),i=(n(62),n(10)),o=n(8),l=n(9),d=n(13),j=n.n(d),u="https://geokidz.herokuapp.com",p=n(5),m=n.p+"static/media/round-map.cff9d400.png",b=n.p+"static/media/pinguin-face.9fdc566e.png",h=n.p+"static/media/fox-face.28575f21.png",g=n.p+"static/media/unicorn-34.da70088b.png",x=n(1),O=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"horizontally-align",children:[Object(x.jsxs)("div",{className:"vertically-align",children:[Object(x.jsx)("h1",{children:"Create treasures and find other ones."}),Object(x.jsx)(p.b,{to:function(e){return e.user?"/map":"/signin"}(e),children:Object(x.jsx)("button",{className:"geo-btn",children:"Play"})})]}),Object(x.jsx)("img",{src:m,alt:"round-map",className:"round-map"})]}),Object(x.jsx)("div",{className:"horizontally-align",children:Object(x.jsxs)("div",{className:"vertically-align",children:[Object(x.jsx)("h3",{children:"New here ? Choose a guide :"}),Object(x.jsxs)("div",{className:"avatars",children:[Object(x.jsx)("div",{className:"avatar-card",children:Object(x.jsx)(p.b,{to:"/signup/unicorn",children:Object(x.jsx)("img",{src:g,alt:"unicorn",className:"avatar"})})}),Object(x.jsx)("div",{className:"avatar-card",children:Object(x.jsx)(p.b,{to:"/signup/pinguin",children:Object(x.jsx)("img",{src:b,alt:"pinguin",className:"avatar"})})}),Object(x.jsx)("div",{className:"avatar-card",children:Object(x.jsx)(p.b,{to:"/signup/fox",children:Object(x.jsx)("img",{src:h,alt:"fox",className:"avatar"})})})]})]})})]})};var f=function(e){return console.log("signin :",e),Object(x.jsxs)("form",{onSubmit:e.onSignIn,className:"form",children:[Object(x.jsx)("h3",{children:"Login"}),Object(x.jsxs)("div",{className:"input-group",children:[Object(x.jsx)("input",{name:"username",type:"text",className:"register-input",placeholder:"Username"}),Object(x.jsx)("input",{name:"password",type:"password",className:"register-input",placeholder:"Password"})]}),Object(x.jsx)("button",{type:"submit",className:"form-btn centered-btn",children:"Play"}),e.error&&Object(x.jsx)("p",{children:e.error.errorMessage}),Object(x.jsx)(p.b,{style:{marginLeft:"10px"},to:"/signup/fox",children:"New here? Create an account"})]})},v=function(e){switch(e){case"fox":return h;case"unicorn":return g;case"pinguin":return b}};var y=function(e){return console.log("Signup props-----",e),Object(x.jsxs)("form",{onSubmit:e.onSignUp,className:"form",children:[Object(x.jsx)("h3",{children:"Welcome !"}),Object(x.jsx)("img",{src:v(e.match.params.guide),className:"avatar-talk",alt:"your avatar"}),Object(x.jsx)("input",{name:"guide",type:"hidden",value:e.match.params.guide}),Object(x.jsx)("p",{className:"avatar-text",children:"To play the game, you first have to subscribe. After that, let's the game begin ! "}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"username",type:"text",className:"register-input",id:"InputUsername",placeholder:"Username"})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"password",type:"password",className:"register-input",id:"InputPassword",placeholder:"Password"})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"superpower",type:"text",className:"register-input",id:"InputSuperpower",placeholder:"Set your superpower here!"})}),e.error&&Object(x.jsx)("p",{children:e.error.errorMessage}),Object(x.jsx)("button",{type:"submit",className:"form-btn centered-btn",children:"Play"})]})},w=n(99),N=n(98),S=(n(33),n.p+"static/media/list.c98df85f.svg"),I=function(e){return Object(x.jsxs)(w.a,{children:[Object(x.jsx)(w.a.Brand,{children:Object(x.jsxs)(p.b,{to:"/",className:"no-style-link nav-element-padding",children:["Geokidz"," ",Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"20",fill:"yellow",className:"bi bi-geo-alt-fill",viewBox:"0 0 16 16",children:Object(x.jsx)("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})})]})}),Object(x.jsx)(w.a.Toggle,{}),Object(x.jsx)(w.a.Collapse,{className:"justify-content-end nav-element-padding",children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)(N.a.Toggle,{variant:"success",className:"dropdown-button",id:"dropdown-basic",children:Object(x.jsx)("img",{src:S,alt:"drop-menu",className:"drop-menu"})}),Object(x.jsxs)(N.a.Menu,{children:[Object(x.jsx)(N.a.Item,{href:"/profile",children:"Profile"}),Object(x.jsx)(N.a.Item,{href:"/about",children:"About"}),Object(x.jsx)(N.a.Item,{children:e.user?Object(x.jsx)("button",{onClick:e.onlogout,className:"sub-menu",children:"Logout"}):Object(x.jsx)(x.Fragment,{})})]})]})})]})},A=n(93),C=n(100),E=n(94),L=n(95),G=(n(40),n(12)),k=n.n(G),z=n(96),M={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},T=new k.a.Icon({iconUrl:"https://res.cloudinary.com/alexandra-wtp/image/upload/v1615369978/bear_kfqmdf.png",iconSize:[40,40]}),D=new k.a.Icon({iconUrl:"https://res.cloudinary.com/alexandra-wtp/image/upload/v1615367916/t1n7axjjzll1rf7e7pjk.svg",iconSize:[30,40]}),U={textAlign:"center",margin:"10px",padding:"10px"},_={padding:"20px",fontSize:"15px"},P=function(e){var t=e.user,n=Object(a.useState)(null),s=Object(o.a)(n,2),c=s[0],r=s[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),d=l[0],m=l[1],b=Object(a.useState)(null),h=Object(o.a)(b,1)[0];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){r([e.coords.latitude,e.coords.longitude])}),(function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message))}),M)})),Object(a.useEffect)((function(){j.a.get("".concat(u,"/api/mapitems")).then((function(e){m(e.data)})).catch((function(e){h(e)}))}),[m]);var g=function(e,n,a,s){e.preventDefault(),navigator.geolocation.getCurrentPosition((function(c){!function(e,n,a,s,c){console.log("check 1 ",c);var r="";r=c?s:e.target.locdesc.value,j.a.patch("".concat(u,"/api/mapitems/").concat(a),{locdesc:r,finder:t.username,lat:n.coords.latitude,long:n.coords.longitude}).then((function(e){return console.log("data inserted",e.data)})).catch((function(e){return console.log(e)}))}(e,c,n,a,s)}),(function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message))}),M)};return c?Object(x.jsxs)("div",{className:"map-page",children:[Object(x.jsx)(p.b,{to:"/map/create",className:"newTreasure-btn",children:"New treasure"}),Object(x.jsxs)(A.a,{center:c,zoom:15,scrollWheelZoom:!1,id:"map",children:[Object(x.jsx)(C.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(x.jsx)(E.a,{icon:T,position:c,children:Object(x.jsx)(L.a,{className:"pop-up",children:"You're here!"})}),d.map((function(e,t){return Object(x.jsx)(E.a,{icon:D,position:[e.objhistory[e.objhistory.length-1].lat,e.objhistory[e.objhistory.length-1].long],children:Object(x.jsx)(L.a,{children:Object(x.jsxs)("div",{style:U,children:[e.image?Object(x.jsx)("img",{src:e.image,alt:e.itemname,width:"40px",className:"stone-popUp"}):null,Object(x.jsx)("h5",{children:e.itemname}),Object(x.jsx)(p.b,{to:"/mapdetails/".concat(e._id),children:"See more details"}),Object(x.jsxs)("div",{style:_,children:["Hint: ",e.locdesc]}),Object(x.jsx)("p",{children:"Founded? Well done! Now choose what to do : leave it here, or find another hidde. Once you've find the new hide, click on the corresponding button to store the new position."}),Object(x.jsx)("button",{onClick:function(t){g(t,e._id,e.locdesc,!0)},type:"submit",className:"form-btn centered-btn",children:"Leave it here"}),Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(t){g(t,e._id,e.locdesc,!1)},children:[Object(x.jsx)("button",{type:"submit",className:"form-btn centered-btn",id:"LocationDescription",children:"Store a new position"}),Object(x.jsx)("input",{name:"locdesc",type:"text",placeholder:"New hint",id:"LocationDescription",className:"register-input"})]})})]})})},t)}))]})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"spinner",children:Object(x.jsx)(z.a,{animation:"border",variant:"light",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(x.jsx)("div",{className:"finding-location",children:"Finding your location..."})]})},B=n(36),R=function(e){var t=e.user,n=e.onDelete,a=(e.error,Object(l.f)()),s=Object(B.useState)(null),c=Object(o.a)(s,2),r=(c[0],c[1]),i=Object(B.useState)([]),d=Object(o.a)(i,2),p=d[0],m=d[1];return Object(B.useEffect)((function(){console.log("in useEffect"),j.a.get("".concat(u,"/api/mapitems/").concat(e.match.params.mapitemId)).then((function(e){m(e.data)})).catch((function(e){r(e.response)}))}),[]),t&&p.owner?Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:"blabla"}),Object(x.jsx)("button",{onClick:function(){return a.push("/map")},children:"Bring me back to the map!"}),t.username===p.owner.username?Object(x.jsx)("button",{onClick:function(){n(p._id)},children:"Delete"}):Object(x.jsx)(x.Fragment,{}),Object(x.jsxs)("h5",{children:["Treasure: ",p.itemname]}),Object(x.jsxs)("div",{children:["Location hint: ",p.locdesc]}),Object(x.jsxs)("div",{children:["Owner: ",p.owner.username]}),Object(x.jsxs)("div",{children:["Superpower owner: ",p.owner.superpower]}),Object(x.jsx)("h6",{children:"Location history of treasure"}),Object(x.jsxs)("div",{children:["Obj history: ",p.objhistory[0].finder]}),Object(x.jsxs)("div",{children:["Obj history: ",p.objhistory[0].lat]}),p.objhistory.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:["-- Finder: ",e.finder," --"]}),Object(x.jsxs)("div",{children:["Superpower: ",e.Superpower]})]},e._id)})),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:p.image,alt:"round-map",className:"round-map"})})]}):Object(x.jsx)("div",{className:"spinner",children:Object(x.jsx)(z.a,{animation:"border",variant:"light",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})})})},Z={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};var F=function(e){var t=e.user,n=Object(l.f)();console.log(t);var a=function(e){e.preventDefault(),navigator.geolocation.getCurrentPosition((function(a){!function(e,a){console.log(e.target.itemname.value);var s={finder:t.username,lat:a.coords.latitude,long:a.coords.longitude},c={itemname:e.target.itemname.value,image:e.target.image.files[0],owner:t._id,locdesc:e.target.locdesc.value,objhistory:s};console.log("in Appjs in handleSubmit -mapitem-- ",c);var r=new FormData;r.append("imageUrl",c.image),j.a.post("".concat(u,"/api/upload"),r).then((function(e){j.a.post("".concat(u,"/api/create"),{itemname:c.itemname,image:e.data.image,owner:c.owner,locdesc:c.locdesc,objhistory:c.objhistory},{withCredentials:!0}).then((function(e){console.log("in Appjs handleSubmit res data: ",e.data),n.push("/map")})).catch((function(e){console.log("burned tosti in post create item:",e)}))})).catch((function(e){console.log("Create failed",e)}))}(e,a)}),(function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message))}),Z),console.log("here in the handleSubmit!")};return t?Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(e){a(e)},className:"form",children:[Object(x.jsx)("h3",{children:"Add a new treasure"}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"image",type:"file",className:"register-input",id:"Inputimage",placeholder:"image url"})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"itemname",type:"text",className:"register-input",id:"ItemName",placeholder:"Give your new treasure a name!"})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"owner",type:"text",className:"register-input",id:"Owner",placeholder:"owner: you! (".concat(t.username,")"),readOnly:!0})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{name:"locdesc",type:"text",className:"register-input",id:"LocationDescription",placeholder:"Tell something about the location. Don't make it too easy for the finder!"})}),Object(x.jsx)("input",{name:"lat",type:"hidden"}),Object(x.jsx)("input",{name:"long",type:"hidden"}),Object(x.jsx)("button",{type:"submit",className:"form-btn centered-btn",children:"Add Treasure!"})]})}):Object(x.jsx)("div",{className:"spinner",children:Object(x.jsx)(z.a,{animation:"border",variant:"light",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})})})};var W=function(e){console.log(e);var t=Object(a.useState)(null),n=Object(o.a)(t,2),s=(n[0],n[1],e.mapitems),c=(e.user,e.onEdit),r=e.match.params.mapitemId,i=s.find((function(e){return e._id==r}));return console.log(i),Object(x.jsxs)("div",{children:["this is the page: edit mapitem",Object(x.jsx)("div",{children:"Check in the map if the location is correct and give a new description of the new location"}),Object(x.jsxs)("form",{onSubmit:function(){c(i)},className:"form",children:[Object(x.jsx)("input",{name:"locdesc",type:"text",className:"register-input",id:"LocationDescription",placeholder:"Give a new description"}),Object(x.jsx)("button",{type:"submit",className:"btn centered-btn",id:"LocationDescription",children:"Save the new location!"})]})]})},H=function(e){return console.log("in About | props: ",e),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:"this is the page: About"}),e.user?Object(x.jsx)("button",{onClick:e.onlogout,children:"Logout"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)(p.b,{to:"/signin",children:"Already an user? Sing in here! "})}),Object(x.jsx)("div",{children:Object(x.jsx)(p.b,{to:"/",children:"New here? Click here to choose an guide and sign in!"})})]}),Object(x.jsx)("div",{children:Object(x.jsx)(p.b,{to:"/mapdetails",children:"go to mapdetails "})}),Object(x.jsx)("div",{children:Object(x.jsx)(p.b,{to:"/map",children:"go to the map "})}),Object(x.jsx)("div",{children:Object(x.jsx)(p.b,{to:"/map/create",children:"add a treasure on the map "})}),Object(x.jsx)("div",{children:Object(x.jsx)(p.b,{to:"/map/edit",children:"edit a treasure on the map "})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"https://res.cloudinary.com/snowbird/image/upload/v1615137690/GeoKidz/pebble_8_wpovbn.jpg",alt:"round-map",className:"round-map"})})]})},K=n.p+"static/media/fox-right.155b9cb8.png",Y=n(97),J=function(){return Object(x.jsxs)(Y.a,{position:"topright",children:[Object(x.jsx)(Y.a.BaseLayer,{checked:!0,name:"Esri | Topo colour ",children:Object(x.jsx)(C.a,{attribution:"Tiles \xa9 Esri \u2014 Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'"})}),Object(x.jsx)(Y.a.BaseLayer,{checked:!0,name:"OpenStreetMap | Topo colour ",children:Object(x.jsx)(C.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}),Object(x.jsx)(Y.a.BaseLayer,{name:"National Geographic | colour",children:Object(x.jsx)(C.a,{attribution:"Tiles \xa9 Esri \u2014 National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",url:"https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",maxZoom:12})}),Object(x.jsx)(Y.a.BaseLayer,{name:"The Treasure map",children:Object(x.jsx)(C.a,{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",subdomains:"abcd",minZoom:1,maxZoom:16,ext:"jpg"})}),Object(x.jsx)(Y.a.BaseLayer,{name:"OpenStreetMap | Topo grey",children:Object(x.jsx)(C.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"})}),Object(x.jsx)(Y.a.BaseLayer,{name:"Satelliet",children:Object(x.jsx)(C.a,{attribution:"Tiles \xa9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",minZoom:6,maxZoom:19,bounds:[[50.5,3.25],[54,7.6]]})}),Object(x.jsx)(Y.a.BaseLayer,{name:"Night map ",children:Object(x.jsx)(C.a,{attribution:'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',url:"https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}",time:"",bounds:[[-85.0511287776,-179.999999975],[85.0511287776,179.999999975]],minZoom:1,maxZoom:8,format:"jpg",tilematrixset:"GoogleMapsCompatible_Level"})})]})},Q={textAlign:"center",margin:"10px",padding:"10px"},V=function(e){var t=e.treasure;return console.log("props pupup",e),console.log("props treause",t),Object(x.jsx)(L.a,{children:Object(x.jsxs)("div",{style:Q,children:[Object(x.jsxs)("h5",{children:["Founded Treasure: ",t.itemname]}),t.image?Object(x.jsx)("img",{src:t.image,alt:t.itemname,width:"40px",className:"stone-popUp"}):null,Object(x.jsxs)("h6",{children:["Owner: ",t.owner]})]})})},q=function(e){switch(e){case"fox":return K;case"unicorn":return g;case"pinguin":return b}},X=new k.a.Icon({iconUrl:"https://res.cloudinary.com/alexandra-wtp/image/upload/v1615367916/t1n7axjjzll1rf7e7pjk.svg",iconSize:[30,40]}),$=function(e){var t=e.user,n=Object(a.useState)([52.324231,4.837905]),s=Object(o.a)(n,2),c=s[0];s[1];return t?Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{children:["Profile of ",t.username]}),Object(x.jsxs)("div",{children:["Your superpower is: ",t.superpower,"!"]}),Object(x.jsx)("img",{src:q(t.guide),alt:"guide",className:"avatar-talk"}),"Hey ",t.username," !",Object(x.jsx)("div",{children:"Here are the treasures you've collected: "}),0!==t.findings.length?Object(x.jsx)("div",{children:Object(x.jsxs)(A.a,{style:{width:"800px",height:"500px"},center:c,zoom:15,scrollWheelZoom:!1,id:"map",children:[Object(x.jsx)(J,{}),Object(x.jsx)(C.a,{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",subdomains:"abcd",minZoom:1,maxZoom:16,ext:"jpg"}),Object(x.jsx)(E.a,{icon:X,position:[t.findings[0].lat,t.findings[0].long],children:Object(x.jsx)(L.a,{className:"pop-up",children:"Founded!"})}),t.findings.map((function(e,t){return Object(x.jsx)(E.a,{icon:X,position:[e.lat,e.long],children:Object(x.jsx)(V,{treasure:e})},t)}))]})}):Object(x.jsx)(x.Fragment,{}),0!==t.findings.length?t.findings.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:["Itemname: ",e.itemname]}),Object(x.jsxs)("div",{children:["Owner: ",e.owner]}),Object(x.jsxs)("div",{children:["Location: ",e.lat,", ",e.long]})]},e._id)})):Object(x.jsx)("div",{children:"aaah you don't have any treasures found yet!"})]}):Object(x.jsx)("div",{className:"spinner",children:Object(x.jsx)(z.a,{animation:"border",variant:"light",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})})})},ee=function(){return Object(x.jsxs)("div",{className:"neutral-background",children:[Object(x.jsx)("h2",{children:"404"}),Object(x.jsx)("h2",{children:"This page doesn't exist my friend"})]})};var te=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)([]),d=Object(o.a)(r,2),p=d[0],m=d[1],b=Object(a.useState)(null),h=Object(o.a)(b,2),g=h[0],v=h[1],w=Object(a.useState)(null),N=Object(o.a)(w,2),S=N[0],A=N[1],C=Object(l.f)();Object(a.useEffect)((function(){null===s&&j.a.get("".concat(u,"/api/user"),{withCredentials:!0}).then((function(e){c(e.data),console.log("inAppjs in useEffect loggedinuser ")})).catch((function(e){console.log("In Appjs, useEffect error with useeffect since loggeninuser is null"),A(e.response)}))}),[]),Object(a.useEffect)((function(){j.a.get("".concat(u,"/api/mapitems")).then((function(e){m(e.data)})).catch((function(e){console.log("In Appjs, useEffect error with useeffect since loggeninuser is null"),A(e.response.data)}))}),[]);var E=function(e){e.preventDefault();var t={username:e.target.username.value,password:e.target.password.value,guide:e.target.guide.value,superpower:e.target.superpower.value};console.log("user sigup: ---- ",t),j.a.post("".concat(u,"/api/signup"),t,{withCredentials:!0}).then((function(e){c(e.data),C.push("/map")})).catch((function(e){console.log("burned tosti",e),A(e.response.data)}))},L=function(e){e.preventDefault();var t={username:e.target.username.value,password:e.target.password.value};j.a.post("".concat(u,"/api/signin"),t,{withCredentials:!0}).then((function(e){c(e.data),console.log("LoggedIn! in handleSignIn --  loggedInUser: ",s),C.push("/map")})).catch((function(e){console.log("burned tosti:",e),A(e.response.data)}))},G=function(e){console.log("here in the handle delelte ",e,g),j.a.delete("".concat(u,"/api/mapitems/").concat(e)).then((function(){v("Mapitem succesfully deleted");var t=p.filter((function(t){return t._id!==e}));m(t),C.push("/map")})).catch((function(e){A(e.response.data),console.log("error while deleting mapitem",e)}))};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"gradient-background",children:[Object(x.jsx)(I,{onlogout:function(e){console.log("--here in handlelogout"),j.a.post("".concat(u,"/api/logout"),{},{withCredentials:!0}).then((function(e){c(null),console.log("Logout post | loggedinUser: ",e),C.push("/")})).catch((function(e){A(e.response.data),console.log("error while logging out",e)}))},user:s}),Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(x.jsx)(O,Object(i.a)({user:s},e))}}),Object(x.jsx)(l.a,{path:"/signin",render:function(e){return Object(x.jsx)(f,Object(i.a)(Object(i.a)({error:S,onSignIn:L},e),{},{guide:"fox"}))}}),Object(x.jsx)(l.a,{path:"/signup/:guide",render:function(e){return Object(x.jsx)(y,Object(i.a)({error:S,onSignUp:E},e))}}),Object(x.jsx)(l.a,{path:"/profile",render:function(e){return Object(x.jsx)($,Object(i.a)({user:s},e))}}),Object(x.jsx)(l.a,{path:"/mapdetails/:mapitemId",render:function(e){return Object(x.jsx)(R,Object(i.a)({error:S,user:s,onDelete:G},e))}}),Object(x.jsx)(l.a,{path:"/map/create",render:function(e){return Object(x.jsx)(F,Object(i.a)({user:s},e))}}),Object(x.jsx)(l.a,{path:"/map/edit/:mapitemId",render:function(e){return Object(x.jsx)(W,Object(i.a)({user:s,mapitems:p},e))}}),Object(x.jsx)(l.a,{path:"/map",render:function(e){return Object(x.jsx)(P,Object(i.a)({user:s},e))}}),Object(x.jsx)(l.a,{path:"/about",render:function(){return Object(x.jsx)(H,{user:s})}}),Object(x.jsx)(l.a,{path:"/",component:ee})]})]}),Object(x.jsx)("div",{className:"empty-triangle"})]})};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(p.a,{children:Object(x.jsx)(te,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.06ffc65c.chunk.js.map