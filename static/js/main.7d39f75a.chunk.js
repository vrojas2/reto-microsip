(this["webpackJsonpreto-microsip"]=this["webpackJsonpreto-microsip"]||[]).push([[0],{33:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(9),s=c.n(a),n=(c(33),c(5)),o=c(24),i=c.n(o),l=c(25),j=c.n(l),b=c(22),d=c.n(b),m=(c(34),c(8)),O=c(4),u=c(11),x=c(2),h=function(e){var t=e.data,c=e.setModalInsertar,a=e.setData,s=Object(u.a)(),o=s.register,i=s.formState.errors,l=s.handleSubmit,j=Object(r.useState)(0),b=Object(n.a)(j,2),d=b[0],m=b[1],h=t[t.length-1].id+1,p=function(){return parseFloat(d/100*16)},v=function(){return parseFloat(d/100*16)+parseFloat(d)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsx)("h5",{className:"text-center mt-4",children:"Agregar por costo"})}),Object(x.jsxs)("form",{onSubmit:l((function(e){var r=p(),s=v(),n={id:h,nombre:e.nombre,costo:e.costo,iva:r,precio:s},o=t;o.push(n),a(o),c(!1)})),children:[Object(x.jsx)("label",{children:"ID"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,type:"text",name:"id",value:h}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"Art\xedculo"}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},o("nombre",{required:"Nombre requerido"})),{},{className:"form-control",type:"text",maxLength:"30"})),i.nombre&&Object(x.jsx)("div",{className:"text-danger",children:i.nombre.message}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"mt-2",children:"Costo"}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},o("costo",{required:"Costo requerido",pattern:{value:/^[0-9]+[.]+[0-9]*$/,message:"Solo numeros con decimal"}})),{},{className:"form-control",name:"costo",step:"0.01",onChange:function(e){m(e.target.value)}})),i.costo&&Object(x.jsx)("div",{className:"text-danger",children:i.costo.message}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"IVA (16%)"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,name:"iva",value:p()}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"mt-2",children:"Precio"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,name:"precio",value:v()}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Agregar"})]})]})},p=function(e){var t=e.data,c=e.setModalInsertar,a=e.setData,s=Object(u.a)(),o=s.register,i=s.formState.errors,l=s.handleSubmit,j=Object(r.useState)(0),b=Object(n.a)(j,2),d=b[0],m=b[1],h=t[t.length-1].id+1,p=function(){return parseFloat(d/116*16)},v=function(){return parseFloat(d/116*100)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsx)("h5",{className:"text-center mt-4",children:"Agregar por precio"})}),Object(x.jsxs)("form",{onSubmit:l((function(e){var r=p(),s=v(),n={id:h,nombre:e.nombre,costo:s,iva:r,precio:e.precio},o=t;o.push(n),a(o),c(!1)})),children:[Object(x.jsx)("label",{children:"ID"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,type:"text",name:"id",value:h}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"Art\xedculo"}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},o("nombre",{required:"Nombre requerido"})),{},{className:"form-control",type:"text",maxLength:"30"})),i.nombre&&Object(x.jsx)("div",{className:"text-danger",children:i.nombre.message}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"mt-2",children:"Costo"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,name:"costo",value:v()}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"IVA (16%)"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,type:"text",name:"iva",value:p()}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"mt-2",children:"Precio"}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},o("precio",{required:"Precio requerido",pattern:{value:/^[0-9]+[.]+[0-9]*$/,message:"Solo numeros con decimal"}})),{},{className:"form-control",type:"number",name:"precio",step:"0.01",onChange:function(e){m(e.target.value)}})),i.precio&&Object(x.jsx)("div",{className:"text-danger",children:i.precio.message}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"btn btn-primary mt-4",type:"submit",children:"Agregar"})]})]})},v=function(e){var t=e.data,c=e.setModalInsertar,a=e.modalInsertar,s=e.setData,o=Object(r.useState)(0),i=Object(n.a)(o,2),l=i[0],j=i[1];return Object(x.jsxs)(m.a,{isOpen:a,children:[Object(x.jsx)(m.d,{children:Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:"Agregar un art\xedculo"})})}),Object(x.jsxs)(m.b,{children:[Object(x.jsxs)("div",{className:"btnsInsert",children:[Object(x.jsx)("button",{className:"btn btn-primary",variant:"primary",onClick:function(){j(1)},children:"Agregar por Costo"}),Object(x.jsx)("button",{className:"btn btn-primary",variant:"primary",onClick:function(){j(2)},children:"Agregar por Precio"})]}),1===l?Object(x.jsx)(h,{data:t,setModalInsertar:c,setData:s}):null,2===l?Object(x.jsx)(p,{data:t,setModalInsertar:c,setData:s}):null]}),Object(x.jsx)(m.c,{children:Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(!1)},children:"Cancelar"})})]})},f=function(e){var t=e.setModalEliminar,c=e.modalEliminar,r=e.articuloSelect,a=e.data,s=e.setData;return Object(x.jsxs)(m.a,{isOpen:c,children:[Object(x.jsx)(m.b,{children:Object(x.jsxs)("div",{className:"text-center",children:['Est\xe1s seguro que deseas eliminar el articulo "',Object(x.jsx)("b",{children:r.nombre}),'"']})}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){return s(a.filter((function(e){return e.id!==r.id}))),void t(!1)},children:"S\xed"}),Object(x.jsx)("button",{className:"btn btn-secondary",onClick:function(){return t(!1)},children:"No"})]})]})},N=c(7),g=function(e){var t=e.setModalEditar,c=e.articuloSelect,a=e.data,s=e.setData,o=e.setArticuloSelect,i=Object(u.a)(),l=i.register,j=i.formState.errors,b=i.handleSubmit,d=parseFloat(c.costo),m=Object(r.useState)(d),h=Object(n.a)(m,2),p=h[0],v=h[1],f=c.id,g=function(){return parseFloat(p/100*16)},S=function(){return parseFloat(p/100*16)+parseFloat(p)},y=function(e){var t=e.target,c=t.name,r=t.value;if("nombre"===c)o((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(N.a)({},c,r))}));else{var a=parseFloat(e.target.value);console.log(a),isNaN(a)?(v(a=null),o((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(N.a)({},c,a))}))):(v(a),o((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(N.a)({},c,a))})))}};return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsx)("h5",{className:"text-center mt-4",children:"Editar por costo"})}),Object(x.jsxs)("form",{onSubmit:b((function(e){var c=g(),r=S(),n={id:f,nombre:e.nombre,costo:parseFloat(e.costo),iva:c,precio:r},o=a;o.map((function(e){e.id===f&&(e.nombre=n.nombre,e.costo=n.costo,e.iva=n.iva,e.precio=n.precio)})),s(o),t(!1)})),children:[Object(x.jsx)("label",{children:"ID"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,type:"text",name:"id",value:c.id}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"Art\xedculo"}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},l("nombre",{required:"Nombre requerido"})),{},{className:"form-control",type:"text",maxLength:"30",value:c.nombre,onChange:y})),j.nombre&&Object(x.jsx)("div",{className:"text-danger",children:j.nombre.message}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"mt-2",children:"Costo"}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},l("costo",{required:"Costo requerido",pattern:{value:/^[0-9]+[.]+[0-9]*$/,message:"Solo numeros con decimal"}})),{},{className:"form-control",name:"costo",type:"number",step:"0.01",value:c.costo,onChange:y})),j.costo&&Object(x.jsx)("div",{className:"text-danger",children:j.costo.message}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"IVA (16%)"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,name:"iva",value:g()}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"mt-2",children:"Precio"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,name:"precio",value:S()}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"btn btn-success mt-3",type:"submit",children:"Editar"})]})]})},S=function(e){var t=e.setModalEditar,c=e.articuloSelect,a=e.data,s=e.setData,o=e.setArticuloSelect,i=Object(u.a)(),l=i.register,j=i.formState.errors,b=i.handleSubmit,d=parseFloat(c.precio),m=Object(r.useState)(d),h=Object(n.a)(m,2),p=h[0],v=h[1],f=c.id,g=function(){return parseFloat(p/116*16)},S=function(){return parseFloat(p/116*100)},y=function(e){var t=e.target,c=t.name,r=t.value;if("nombre"===c)o((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(N.a)({},c,r))}));else{var a=parseFloat(e.target.value);console.log(a),isNaN(a)?(v(a=null),o((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(N.a)({},c,a))}))):(v(a),o((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(N.a)({},c,a))})))}};return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsx)("h5",{className:"text-center mt-4",children:"Editar por costo"})}),Object(x.jsxs)("form",{onSubmit:b((function(e){var c=g(),r=S(),n={id:f,nombre:e.nombre,costo:e.precio,iva:c,precio:r},o=a;o.map((function(e){e.id===f&&(e.nombre=n.nombre,e.costo=n.costo,e.iva=n.iva,e.precio=n.precio)})),s(o),t(!1)})),children:[Object(x.jsx)("label",{children:"ID"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,type:"text",name:"id",value:c.id}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"Art\xedculo"}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},l("nombre",{required:"Nombre requerido"})),{},{className:"form-control",type:"text",maxLength:"30",value:c.nombre,onChange:y})),j.nombre&&Object(x.jsx)("div",{className:"text-danger",children:j.nombre.message}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"mt-2",children:"Costo"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,name:"costo",value:S()}),j.costo&&Object(x.jsx)("div",{className:"text-danger",children:j.costo.message}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"IVA (16%)"}),Object(x.jsx)("input",{className:"form-control",readOnly:!0,name:"iva",value:g()}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"mt-2",children:"Precio"}),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},l("precio",{required:"Precio requerido",pattern:{value:/^[0-9]+[.]+[0-9]*$/,message:"Solo numeros con decimal"}})),{},{className:"form-control",type:"number",name:"precio",step:"0.01",value:c.precio,onChange:y})),j.precio&&Object(x.jsx)("div",{className:"text-danger",children:j.precio.message}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"btn btn-success mt-3",type:"submit",children:"Editar"})]})]})},y=function(e){var t=e.setModalEditar,c=e.modalEditar,a=e.articuloSelect,s=e.data,o=e.setData,i=e.setArticuloSelect,l=Object(r.useState)(0),j=Object(n.a)(l,2),b=j[0],d=j[1];return Object(x.jsxs)(m.a,{isOpen:c,children:[Object(x.jsx)(m.d,{children:Object(x.jsx)("div",{children:Object(x.jsxs)("h3",{children:['Editar Articulo "',Object(x.jsx)("b",{children:a.nombre}),'"']})})}),Object(x.jsxs)(m.b,{children:[Object(x.jsxs)("div",{className:"btnsInsert",children:[Object(x.jsx)("button",{className:"btn btn-primary",variant:"primary",onClick:function(){d(1)},children:"Editar por Costo"}),Object(x.jsx)("button",{className:"btn btn-primary",variant:"primary",onClick:function(){d(2)},children:"Editar por Precio"})]}),1===b?Object(x.jsx)(g,{articuloSelect:a,setArticuloSelect:i,data:s,setData:o,setModalEditar:t}):null,2===b?Object(x.jsx)(S,{articuloSelect:a,setArticuloSelect:i,data:s,setData:o,setModalEditar:t}):null]}),Object(x.jsx)(m.c,{children:Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){return t(!1)},children:"Cancelar"})})]})},C=function(){var e=Object(r.useState)([{id:1,nombre:"toalla",costo:300,iva:48,precio:348},{id:2,nombre:"limonada",costo:100,iva:16,precio:116},{id:3,nombre:"refresco",costo:150,iva:24,precio:174}]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!1),o=Object(n.a)(s,2),l=o[0],b=o[1],m=Object(r.useState)(!1),O=Object(n.a)(m,2),u=O[0],h=O[1],p=Object(r.useState)(!1),N=Object(n.a)(p,2),g=N[0],S=N[1],C=Object(r.useState)({id:"",nombre:"",costo:"",iva:"",precio:""}),A=Object(n.a)(C,2),E=A[0],I=A[1],D=function(e,t){I(e),"Editar"===t?S(!0):h(!0)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("h2",{className:"text-center",children:"Control de art\xedculos"})}),Object(x.jsxs)("div",{className:"container mt-4",children:[Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("button",{className:"btn btn-success",onClick:function(){b(!0)},children:["Agregar ",Object(x.jsx)(d.a,{})]})}),Object(x.jsxs)("div",{className:"table-responsive mt-3",children:[Object(x.jsxs)("table",{className:"table text-center",children:[Object(x.jsx)("thead",{className:"table-dark",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"ID"}),Object(x.jsx)("th",{children:"Nombre"}),Object(x.jsx)("th",{children:"Costo"}),Object(x.jsx)("th",{children:"IVA"}),Object(x.jsx)("th",{children:"Precio"}),Object(x.jsx)("th",{children:"Acciones"})]})}),Object(x.jsx)("tbody",{children:c.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.id}),Object(x.jsx)("td",{children:e.nombre}),Object(x.jsx)("td",{children:e.costo}),Object(x.jsx)("td",{children:e.iva}),Object(x.jsx)("td",{children:e.precio}),Object(x.jsxs)("td",{className:"optionBtns",children:[Object(x.jsx)("button",{className:"btn btn-primary",onClick:function(){return D(e,"Editar")},children:Object(x.jsx)(i.a,{fontSize:"small"})}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){return D(e,"Eliminar")},children:Object(x.jsx)(j.a,{})})]})]})}))})]}),Object(x.jsx)(v,{setModalInsertar:b,data:c,modalInsertar:l,setData:a}),Object(x.jsx)(f,{articuloSelect:E,setModalEliminar:h,modalEliminar:u,data:c,setData:a}),Object(x.jsx)(y,{articuloSelect:E,setModalEditar:S,modalEditar:g,data:c,setData:a,setArticuloSelect:I})]})]})]})};var A=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(C,{})})};s.a.render(Object(x.jsx)(A,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7d39f75a.chunk.js.map