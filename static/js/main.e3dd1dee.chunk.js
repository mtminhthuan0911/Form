(this.webpackJsonpsinhvien=this.webpackJsonpsinhvien||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(9),c=n.n(s),r=(n(23),n(24),n(3)),h=n(4),l=n(6),o=n(5),j=n(10),d=n(2),u=n(7),b="ADD_SV",O="DEL_SV",m="EDIT_SV",p="UPDATE_SV",x=function(e){return{type:O,svid:e}},S=function(e){return{type:m,sv:e}},v=n(0),f=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={value:{ID:0,TaiKhoan:"",MatKhau:"",XacNhanMatKhau:"",HoTen:"",SDT:"",Email:""},errors:{TaiKhoan:"",MatKhau:"",XacNhanMatKhau:"",HoTen:"",SDT:"",Email:""}},e.ChangeBinding=function(t){var n=t.target,i=n.name,a=n.value,s=n.type,c=Object(d.a)(Object(d.a)({},e.state.value),{},Object(j.a)({},i,a)),r=Object(d.a)({},e.state.errors);if(""===a.trim()?r[i]=i+" l\xe0 b\u1eaft bu\u1ed9c":r[i]="","email"===s){/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(a)?r[i]="":r[i]="Email Invalid ! "}"XacNhanMatKhau"===i&&(a!==c.MatKhau?r[i]="M\u1eadt Kh\u1ea9u Kh\xf4ng Kh\u1edbp ! ":r[i]=""),e.setState({value:c,errors:r,User:t.target.value.TaiKhoan,TenSinhVien:t.target.value.TenSinhVien,Email:t.target.Email,SDT:t.target.SDT,MatKhau:t.target.MatKhau},(function(){console.log(e.state.value)}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("form",{action:"",children:Object(v.jsxs)("section",{className:"Form",children:[Object(v.jsx)("div",{className:"Form-title",children:Object(v.jsx)("p",{children:"Form \u0110\u0103ng K\xfd"})}),Object(v.jsxs)("div",{className:"Form-Component",children:[Object(v.jsxs)("div",{className:"Form-Component-Left",children:[Object(v.jsxs)("div",{className:"input",children:[Object(v.jsx)("input",{value:this.state.User,onChange:this.ChangeBinding,name:"TaiKhoan",type:"text",placeholder:" "}),Object(v.jsxs)("label",{className:"lb1",htmlFor:"",children:[" ",Object(v.jsx)("i",{class:"fa fa-user","aria-hidden":"true"}),"T\xe0i Kho\u1ea3n ",Object(v.jsx)("span",{style:{color:"red"},children:"*"})," "]}),Object(v.jsx)("p",{className:"text text-danger",children:this.state.errors.TaiKhoan})]}),Object(v.jsxs)("div",{className:"input",children:[Object(v.jsx)("input",{value:this.state.MatKhau,onChange:this.ChangeBinding,name:"MatKhau",type:"password",placeholder:" "}),Object(v.jsxs)("label",{className:"lb2",htmlFor:"",children:[Object(v.jsx)("i",{class:"fa fa-lock","aria-hidden":"true"})," M\u1eadt Kh\u1ea9u ",Object(v.jsx)("span",{style:{color:"red"},children:"*"}),"  "]}),Object(v.jsx)("p",{className:"text text-danger",children:this.state.errors.MatKhau})]}),Object(v.jsxs)("div",{className:"input",children:[Object(v.jsx)("input",{value:this.state.value.XacNhanMatKhau,onChange:this.ChangeBinding,name:"XacNhanMatKhau",type:"password",placeholder:" "}),Object(v.jsxs)("label",{className:"lb3",name:"XacNhanMatKhau",htmlFor:"",children:[" ",Object(v.jsx)("i",{class:"fas fa-lock-open    "})," X\xe1c Nh\u1eadn M\u1eadt Kh\u1ea9u ",Object(v.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(v.jsx)("p",{className:"text text-danger",children:this.state.errors.XacNhanMatKhau})]}),Object(v.jsxs)("div",{className:"process",children:[Object(v.jsx)("button",{onClick:function(t){t.preventDefault();var n=e.state.value,i=(n.ID,n.TaiKhoan),a=n.HoTen,s=n.SDT,c=n.Email,r=n.MatKhau,h={id:Date.now(),User:i,TenSinhVien:a,SDT:s,Email:c,MatKhau:r};console.log(h),e.props.dispatch(function(e){return{type:b,newsv:e}}(h))},className:"btn primary",children:"\u0110\u0103ng K\xfd"}),Object(v.jsx)("button",{onClick:function(t){var n,i,a,s,c;t.preventDefault(),e.props.dispatch((n=e.state.value.TaiKhoan,i=e.state.value.HoTen,a=e.state.value.SDT,s=e.state.value.Email,c=e.state.value.MatKhau,{type:p,TaiKhoan:n,HoTen:i,MatKhau:c,SDT:a,Email:s}))},className:"btn second",children:"C\u1eadp Nh\u1eadt"})]})]}),Object(v.jsxs)("div",{className:"Form-Component-Right",children:[Object(v.jsxs)("div",{className:"input",children:[Object(v.jsx)("input",{value:this.state.TenSinhVien,onChange:this.ChangeBinding,name:"HoTen",type:"text",placeholder:" "}),Object(v.jsxs)("label",{className:"lb4",htmlFor:"",children:[" ",Object(v.jsx)("i",{class:"fa fa-info","aria-hidden":"true"})," H\u1ecd T\xean "]}),Object(v.jsx)("p",{className:"text text-danger",children:this.state.errors.HoTen})]}),Object(v.jsxs)("div",{className:"input",children:[Object(v.jsx)("input",{value:this.state.SDT,onChange:this.ChangeBinding,name:"SDT",type:"text",placeholder:" "}),Object(v.jsxs)("label",{className:"lb5",htmlFor:"",children:[" ",Object(v.jsx)("i",{class:"fa fa-phone","aria-hidden":"true"})," SDT"]}),Object(v.jsx)("p",{className:"text text-danger",children:this.state.errors.SDT})]}),Object(v.jsxs)("div",{className:"input",children:[Object(v.jsx)("input",{value:this.state.Email,onChange:this.ChangeBinding,name:"Email",type:"email",placeholder:" "}),Object(v.jsxs)("label",{className:"lb5",htmlFor:"",children:[" ",Object(v.jsx)("i",{class:"fa fa-envelope-open","aria-hidden":"true"})," Email"]}),Object(v.jsx)("p",{className:"text text-danger",children:this.state.errors.Email})]})]})]})]})})}},{key:"componentDidUpdate",value:function(e,t){e.SinhVienEdit.id!==this.props.SinhVienEdit.id&&this.setState({User:this.props.SinhVienEdit.User,TenSinhVien:this.props.SinhVienEdit.TenSinhVien,MatKhau:this.props.SinhVienEdit.MatKhau,Email:this.props.SinhVienEdit.Email,SDT:this.props.SinhVienEdit.SDT})}}]),n}(i.Component),T=Object(u.b)((function(e){return{SinhVien:e.SinhVienReducer.SinhVien,SinhVienEdit:e.SinhVienReducer.SinhVienEdit}}))(f),g=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).renderSinhVien=function(){return e.props.SinhVien.map((function(t,n){return Object(v.jsx)(i.Fragment,{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t.User}),Object(v.jsx)("td",{children:t.TenSinhVien}),Object(v.jsx)("td",{children:t.MatKhau}),Object(v.jsx)("td",{children:t.Email}),Object(v.jsx)("td",{children:t.SDT}),Object(v.jsx)("td",{children:Object(v.jsx)("button",{onClick:function(){e.props.dispatch(S(t))},className:"btn second",children:Object(v.jsx)("i",{class:"fas fa-edit"})})}),Object(v.jsx)("td",{children:Object(v.jsx)("button",{onClick:function(){e.props.dispatch(x(t.id))},className:"btn processbtn",children:Object(v.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})})})]})},n)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"Form",children:[Object(v.jsx)("div",{className:"Form-title",children:Object(v.jsx)("p",{children:"Form T\xe0i Kho\u1ea3n"})}),Object(v.jsxs)("table",{className:"table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"T\xe0i Kho\u1ea3n"}),Object(v.jsx)("th",{children:"H\u1ecd T\xean"}),Object(v.jsx)("th",{children:"M\u1eadt Kh\u1ea9u"}),Object(v.jsx)("th",{children:"Email"}),Object(v.jsx)("th",{children:"SDT"})]})}),Object(v.jsx)("tbody",{children:this.renderSinhVien()})]})]})}}]),n}(i.Component),V=Object(u.b)((function(e){return{SinhVien:e.SinhVienReducer.SinhVien,SinhVienEdit:e.SinhVienReducer.SinhVienEdit}}))(g),E=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsx)("section",{className:"Page404",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"Title",children:[Object(v.jsx)("h1",{className:"Title-header",children:"4 0 4"}),Object(v.jsx)("img",{className:"Logo",src:"./Z.svg",alt:""}),Object(v.jsxs)("p",{className:"content",children:["Website ch\u01b0a h\u1ed7 tr\u1ee3 tr\xean mobile ",Object(v.jsx)("i",{class:"fas fa-sad-cry"})]}),Object(v.jsx)("p",{class:"contents",children:"L\xe0m \u01a0n H\xe3y S\u1ef1 D\u1ee5ng tr\xean Desktop"})]})})})}}]),n}(i.Component),K=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"wrapper",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("a",{href:"https://mtminhthuan0911.github.io/Form/",children:Object(v.jsx)("img",{src:"./Z.svg",alt:"",className:"LogoPage"})}),Object(v.jsx)(E,{}),Object(v.jsx)(T,{}),Object(v.jsx)(V,{})]})})}}]),n}(i.Component);var N=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(K,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))},D=n(11),C=n(12),M=n(8),F=n.n(M),w={SinhVien:[{id:"1",User:"Vy123",TenSinhVien:"L\xfd Kh\xe1nh Vy",Email:"vy@gmail.com",SDT:"0776156000",MatKhau:"123"},{id:"2",User:"Thuan123",TenSinhVien:"V\xf5 Minh Thu\u1eadn",Email:"Thuan@gmail.com",SDT:"0776156491",MatKhau:"124"}],SinhVienEdit:{id:"3",User:"Vy1234",TenSinhVien:"Ly",Email:"vy23@123",SDT:"0723276156000",MatKhau:"11123"}},U=Object(D.a)({SinhVienReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:if(console.log("todo",t.newsv),""===(t.newsv.User&&t.newsv.MatKhau).trim())return F.a.fire({icon:"error",title:"Oops...",text:"\u0110i\u1ec1n \u0110\u1ee7 C\xe1c Th\xf4ng Tin B\u1eaft Bu\u1ed9c"}),Object(d.a)({},e);var n=Object(C.a)(e.SinhVien),i=n.findIndex((function(e){return e.User===t.newsv.User}));return-1!==i?(F.a.fire({icon:"error",title:"Oops...",text:"T\xe0i Kho\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i"}),Object(d.a)({},e)):(n.push(t.newsv),F.a.fire({position:"top-center",icon:"success",title:"T\xe0i kho\u1ea3n \u0110\xe3 \u0110\u01b0\u1ee3c Th\xeam",showConfirmButton:!0,confirmButtonColor:"#0099ff"}),e.SinhVien=n,Object(d.a)({},e));case O:var a=Object(C.a)(e.SinhVien);return a=a.filter((function(e){return e.id!==t.svid})),Object(d.a)(Object(d.a)({},e),{},{SinhVien:a});case m:return console.log("todo",t.sv),Object(d.a)(Object(d.a)({},e),{},{SinhVienEdit:t.sv});case p:e.SinhVienEdit=Object(d.a)(Object(d.a)({},e.SinhVienEdit),{},{User:t.TaiKhoan}),e.SinhVienEdit=Object(d.a)(Object(d.a)({},e.SinhVienEdit),{},{TenSinhVien:t.HoTen}),e.SinhVienEdit=Object(d.a)(Object(d.a)({},e.SinhVienEdit),{},{Email:t.Email}),e.SinhVienEdit=Object(d.a)(Object(d.a)({},e.SinhVienEdit),{},{SDT:t.SDT}),e.SinhVienEdit=Object(d.a)(Object(d.a)({},e.SinhVienEdit),{},{MatKhau:t.MatKhau});var s=Object(C.a)(e.SinhVien),c=s.findIndex((function(t){return t.id===e.SinhVienEdit.id}));return-1!==c&&(s[c]=e.SinhVienEdit),e.SinhVien=s,e.SinhVienEdit={id:-1,User:"",TenSinhVien:"",Email:"",SDT:"",MatKhau:""},F.a.fire({position:"top-center",icon:"success",title:"C\u1eadp Nh\u1eadt Th\xe0nh C\xf4ng",showConfirmButton:!0,confirmButtonColor:"#0099ff"}),Object(d.a)({},e);default:return e}}}),k=Object(D.b)(U);c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(u.a,{store:k,children:Object(v.jsx)(N,{})})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.e3dd1dee.chunk.js.map