(this.webpackJsonpictarchapp=this.webpackJsonpictarchapp||[]).push([[0],{41:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(33),o=a.n(c),l=(a(41),a(15)),i=a(16),r=a(18),u=a(17),d=a(21),h=a(5),j=a(34),b=a(12),p=a(69),O=a(70),m=a(71),g=a(72),x=a(73),f=a(74),v=a(2),w=function(e){var t=e.onFileSelectSuccess;e.onFileSelectError;return Object(v.jsx)("div",{className:"file-uploader",children:Object(v.jsx)("input",{type:"file",className:"form-control",onChange:function(e){var a=e.target.files[0];t(a)},id:"input"})})},y=a(14),N=a.n(y),F=a(35),k=a.n(F),C=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",name:"",selectedFile:"",uuid:"",outputData:!1,ETag:""},n.handleInputChange=n.handleInputChange.bind(Object(b.a)(n)),n.uploadFile=n.uploadFile.bind(Object(b.a)(n)),n.downloadFile=n.downloadFile.bind(Object(b.a)(n)),n.checkLogin=n.checkLogin.bind(Object(b.a)(n)),n}return Object(i.a)(a,[{key:"handleInputChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"uploadFile",value:function(){var e=this;if(this.state.outputData){console.log(this.state.selectedFile);var t,a=this.state.selectedFile,n=a.name.split(".");console.log(n[1]);var s=document.getElementById("input").files[0];console.log(s),N.a.get("https://bwpz5hqni4.execute-api.us-east-1.amazonaws.com/putsignedurl?filetype="+n[1]+"&contenttype="+a.type).then((function(a){console.log(a.data),t=a.data.url,console.log(t),e.setState({uuid:a.data.uuid}),console.log(e.state.uuid);var n=new XMLHttpRequest;n.open("PUT",t,!0),n.onload=function(){200===n.status&&console.log("Uploaded data successfully")},n.onerror=function(){console.log("Nope")},n.send(s)})).catch((function(t){e.setState({outputData:!1}),console.log("Login Error")}))}else alert("Login failed")}},{key:"downloadFile",value:function(){var e,t=this;this.state.outputData?N.a.get("https://bwpz5hqni4.execute-api.us-east-1.amazonaws.com/getsignedurl?fileid="+this.state.uuid+"&user="+this.state.username).then((function(a){e=a.data.url,console.log(a.data.data),t.setState({ETag:a.data.data}),N()({url:e,method:"GET",responseType:"blob"}).then((function(e){k()(e.data,t.state.uuid)}))})).catch((function(e){t.setState({outputData:!1}),console.log("Login Error")})):alert("Login failed")}},{key:"checkLogin",value:function(){var e=this,t={key1:this.state.username,key2:this.state.password};t=JSON.stringify(t),N.a.post("https://lt0pfk4vh0.execute-api.us-east-1.amazonaws.com/lambdaAuthLogin",t).then((function(t){console.log(t.data),e.setState({outputData:!0}),e.state.outputData&&alert("Logged in")})).catch((function(t){e.setState({outputData:!1}),console.log("Login Error")}))}},{key:"render",value:function(){var e=this;return Object(v.jsxs)(p.a,{className:"App",children:[Object(v.jsxs)(O.a,{className:"form-group w-50",children:[Object(v.jsxs)(m.a,{children:[Object(v.jsxs)(g.a,{row:!0,children:[Object(v.jsx)(x.a,{for:"name",children:"Name"}),Object(v.jsx)(f.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.handleInputChange,placeholder:"Enter username"})]}),Object(v.jsxs)(g.a,{row:!0,children:[Object(v.jsx)(x.a,{for:"name",children:"Password"}),Object(v.jsx)(f.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handleInputChange,placeholder:"Enter password"})]})]}),Object(v.jsxs)(m.a,{children:[Object(v.jsx)(m.a,{children:Object(v.jsx)(g.a,{row:!0,children:Object(v.jsx)("button",{type:"button",onClick:this.checkLogin,className:"btn btn-outline-primary",children:"Verify user"})})}),Object(v.jsx)("h1",{className:"display-4",children:"Upload file"}),Object(v.jsx)("br",{}),Object(v.jsx)(g.a,{row:!0,children:Object(v.jsx)(x.a,{for:"name",children:"File"})}),Object(v.jsx)(g.a,{row:!0,children:Object(v.jsx)(w,{onFileSelectSuccess:function(t){return e.setState({selectedFile:t})},onFileSelectError:function(e){var t=e.error;return alert(t)}})})]}),Object(v.jsx)(m.a,{children:Object(v.jsx)(g.a,{row:!0,children:Object(v.jsx)("button",{type:"button",onClick:this.uploadFile,className:"btn btn-outline-primary",children:"Upload"})})})]}),Object(v.jsx)("h1",{className:"display-4",children:"Download file"}),Object(v.jsx)("br",{}),Object(v.jsxs)(O.a,{className:"form-group w-50",children:[Object(v.jsx)(m.a,{children:Object(v.jsxs)(g.a,{row:!0,children:[Object(v.jsx)(x.a,{for:"name",children:"UUID"}),Object(v.jsx)(f.a,{type:"text",className:"form-control",name:"uuid",value:this.state.uuid,onChange:this.handleInputChange,placeholder:"Enter UUID"})]})}),Object(v.jsx)(m.a,{children:Object(v.jsx)(g.a,{row:!0,children:Object(v.jsx)("button",{type:"button",onClick:this.downloadFile,className:"btn btn-outline-primary",children:"Download"})})}),Object(v.jsx)(m.a,{children:Object(v.jsxs)(g.a,{row:!0,children:[Object(v.jsx)(x.a,{for:"ETag",children:"ETag"}),Object(v.jsxs)(x.a,{for:"ETag",children:[": ",this.state.ETag]})]})})]})]})}}]),a}(n.Component),E=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(v.jsx)("ul",{className:"navbar-nav",children:Object(v.jsx)("li",{className:"nav-item active",children:Object(v.jsx)(d.b,{to:"/main",className:"nav-link",children:"Main"})})})})}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{exact:!0,path:"/main",component:C}),Object(v.jsx)(h.a,{path:"*",component:C})]})]})})}}]),a}(n.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};a(66);o.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),S()}},[[67,1,2]]]);
//# sourceMappingURL=main.d809b73e.chunk.js.map