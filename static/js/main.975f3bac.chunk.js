(this.webpackJsonpwebd171week2=this.webpackJsonpwebd171week2||[]).push([[0],{34:function(t,e,s){},42:function(t,e,s){},43:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s(0),i=s.n(c),a=s(14),r=s.n(a),o=s(8),l=s(9),j=s(12),h=s(11),b=(s(34),s(49)),p=s(50),d=s(45),u=s(46),m=s(47),x=function(t){Object(j.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).handleName=function(t){n.setState({h1txt:n.props.name+" ("+n.props.myobjects[t].title+") in the top navbar."})},n.handleLink=function(t){n.setState({h1txt:n.props.myobjects[t].title+" in the top navbar."})},n.state={h1txt:""},n}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"navbar-content",children:Object(n.jsxs)(b.a,{bg:"light",expand:!0,children:[Object(n.jsx)(b.a.Brand,{href:this.props.myobjects[0].link,onClick:function(){return t.handleName(0)},children:this.props.name}),Object(n.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(p.a,{className:"mr-auto",children:[Object(n.jsx)(p.a.Link,{href:this.props.myobjects[0].link,onClick:function(){return t.handleLink(0)},children:this.props.myobjects[0].title}),Object(n.jsx)(p.a.Link,{href:this.props.myobjects[1].link,onClick:function(){return t.handleLink(1)},children:this.props.myobjects[1].title}),Object(n.jsx)(p.a.Link,{href:this.props.myobjects[2].link,onClick:function(){return t.handleLink(2)},children:this.props.myobjects[2].title})]})})]})}),Object(n.jsx)("div",{children:Object(n.jsx)(d.a,{children:Object(n.jsx)(u.a,{children:Object(n.jsx)(m.a,{children:Object(n.jsxs)("h1",{className:"pt-5",children:["I clicked on... ",this.state.h1txt]})})})})})]})}}]),s}(i.a.Component),O=s(48),f=s(51),k=function(t){Object(j.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).handleJumbo=function(t){n.setState({jumbotxt:"Thanks for visiting our "+n.props.myobjects[t].title+" Page!",pg2txt:"Please visit Page 2! We are sure that you will like our content.",pg3txt:"Please visit Page 3! We are sure that you will like our content."})},n.handlePg2=function(t){n.setState({jumbotxt:"Isn't this awesome?",pg2txt:"Thanks for visiting "+n.props.myobjects[t].title+"!",pg3txt:"Please visit Page 3! We are sure that you will like our content."})},n.handlePg3=function(t){n.setState({jumbotxt:"Isn't this awesome?",pg2txt:"Please visit Page 2! We are sure that you will like our content.",pg3txt:"Thanks for visiting "+n.props.myobjects[t].title+"!"})},n.state={jumbotxt:"Isn't this awesome?",pg2txt:"Please visit Page 2! We are sure that you will like our content.",pg3txt:"Please visit Page 3! We are sure that you will like our content."},n}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{className:"main-container pb-5",children:Object(n.jsxs)(d.a,{className:"pb-5",children:[Object(n.jsx)(u.a,{children:Object(n.jsxs)(m.a,{className:"pt-4",children:[Object(n.jsx)("p",{className:"pb-5",children:"We did it! We are using state in our navbar."}),Object(n.jsxs)(O.a,{children:[Object(n.jsxs)("h2",{children:["This is the card for the ",this.props.myobjects[0].title," Page!"]}),Object(n.jsx)("p",{children:this.state.jumbotxt}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("a",{className:"btn btn-primary",href:this.props.myobjects[0].link,onClick:function(){return t.handleJumbo(0)},children:this.props.myobjects[0].title})," "]})]})]})}),Object(n.jsxs)(u.a,{children:[Object(n.jsx)(m.a,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(f.a.Header,{children:this.props.myobjects[1].title}),Object(n.jsxs)(f.a.Body,{children:[Object(n.jsxs)(f.a.Title,{children:["Title for ",this.props.myobjects[1].title]}),Object(n.jsx)(f.a.Text,{children:this.state.pg2txt}),Object(n.jsx)("a",{className:"btn btn-primary",href:this.props.myobjects[1].link,onClick:function(){return t.handlePg2(1)},children:this.props.myobjects[1].title})," "]})]})}),Object(n.jsx)(m.a,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(f.a.Header,{children:this.props.myobjects[2].title}),Object(n.jsxs)(f.a.Body,{children:[Object(n.jsxs)(f.a.Title,{children:["Title for ",this.props.myobjects[2].title]}),Object(n.jsx)(f.a.Text,{children:this.state.pg3txt}),Object(n.jsx)("a",{className:"btn btn-primary",href:this.props.myobjects[2].link,onClick:function(){return t.handlePg3(2)},children:this.props.myobjects[2].title})," "]})]})})]})]})})}}]),s}(i.a.Component),y=function(t){Object(j.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).handleLink=function(t){n.setState({ftxt:"I clicked on "+n.props.myobjects[t].title+" in the footer navbar.",ftxt2:"("+n.props.myobjects[t].title+")"})},n.state={ftxt:"",ftxt2:""},n}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("footer",{className:"text-muted text-center",children:[Object(n.jsxs)(d.a,{children:[Object(n.jsxs)(u.a,{className:"justify-content-center pt-4 mb-2",children:[Object(n.jsx)(m.a,{md:3,className:"mb-3",children:Object(n.jsxs)("h6",{className:"text-uppercase font-weight-bold",children:[" ",Object(n.jsx)("a",{href:this.props.myobjects[0].link,onClick:function(){return t.handleLink(0)},children:this.props.myobjects[0].title})," "]})}),Object(n.jsx)(m.a,{md:3,className:"mb-3",children:Object(n.jsxs)("h6",{className:"text-uppercase font-weight-bold",children:[" ",Object(n.jsx)("a",{href:this.props.myobjects[1].link,onClick:function(){return t.handleLink(1)},children:this.props.myobjects[1].title})," "]})}),Object(n.jsx)(m.a,{md:3,className:"mb-3",children:Object(n.jsxs)("h6",{className:"text-uppercase font-weight-bold",children:[" ",Object(n.jsx)("a",{href:this.props.myobjects[2].link,onClick:function(){return t.handleLink(2)},children:this.props.myobjects[2].title})," "]})})]}),Object(n.jsx)(u.a,{className:"justify-content-center mb-4",children:Object(n.jsxs)(m.a,{md:8,className:"mt-3",children:[Object(n.jsx)("p",{children:this.state.ftxt}),Object(n.jsx)("p",{children:"It is a lot of fun to work with react-bootstrap! This example is created for WEBD171, for the Fall 2020 class session. We are creating React apps in this course."})]})}),Object(n.jsx)("hr",{})]}),Object(n.jsxs)("div",{className:"footer-copyright pt-4 pb-5",children:[Object(n.jsxs)("a",{href:this.props.myobjects[0].link,onClick:function(){return t.handleLink(0)},children:["\xa9 2020 ",this.props.name," for WEBD171"]})," ",this.state.ftxt2]})]})}}]),s}(i.a.Component),g=[{link:"http://localhost:3000/#home",title:"Home"},{link:"http://localhost:3000/#page2",title:"Page 2"},{link:"http://localhost:3000/#page3",title:"Page 3"}],v=function(t){Object(j.a)(s,t);var e=Object(h.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(x,{name:"Ian Strand's Navbar",myobjects:g}),Object(n.jsx)(k,{myobjects:g}),Object(n.jsx)(y,{name:"Ian Strand's Footer",myobjects:g})]})}}]),s}(i.a.Component),N=(s(41),s(42),function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(e){var s=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;s(t),n(t),c(t),i(t),a(t)}))}),P=document.getElementById("root");r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(v,{})}),P),N()}},[[43,1,2]]]);
//# sourceMappingURL=main.975f3bac.chunk.js.map