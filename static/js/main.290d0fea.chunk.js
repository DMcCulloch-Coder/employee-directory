(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{18:function(e,t,n){e.exports=n(45)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),o=n.n(r),c=n(12),m=n(13),u=n(16),i=n(14),s=n(17),p=(n(23),function(){return l.a.createElement("div",{className:"nav-box"},l.a.createElement("img",{src:"./logo192.png",alt:"react logo"}),l.a.createElement("h2",{className:"nav-box__name"},"Digitech Inc."))}),E=(n(24),n(25),function(e){var t=e.object;return l.a.createElement("div",{className:"employee-box-indy",onClick:function(){return e.getEmployee(t)}},l.a.createElement("p",null,"Name: ","".concat(t.name.first," ").concat(t.name.last)),l.a.createElement("p",null,"Phone: ",t.cell),l.a.createElement("p",null,"E-mail: ",t.email))}),f=function(e){return l.a.createElement("div",{className:"employee-box"},l.a.createElement("h2",null,"Employees:"),l.a.createElement("p",null,"Filter: ",l.a.createElement("button",{onClick:function(){return e.getWomanEmployees()}},"Women"),l.a.createElement("button",{onClick:function(){return e.getMenEmployees()}},"Men"),l.a.createElement("button",{onClick:function(){return e.getAllEmployees()}},"All")),l.a.createElement("p",null,"Sort: ",l.a.createElement("button",{onClick:function(){return e.sortEmployees()}},"By Name")),e.team.map((function(t,n){return l.a.createElement(E,{key:n,object:t,getEmployee:e.highlightEmployee})})))},y=(n(26),function(e){var t=e.currentEmployee;return console.log(t),l.a.createElement("div",{className:"profile"},l.a.createElement("p",null,"Name: ","".concat(t.name.first," ").concat(t.name.last)),l.a.createElement("p",null,"Phone: ",t.cell),l.a.createElement("p",null,"E-mail: ",t.email),l.a.createElement("img",{src:t.picture.large,alt:"Profile picture"}))}),g=(n(27),n(15)),h=n.n(g),d=function(){return h.a.get("https://randomuser.me/api/?results=15")},b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={team:[],fullTeam:[],currentEmployee:void 0},n.highlightEmployee=function(e){n.setState((function(){return{currentEmployee:e}}))},n.getMenEmployees=function(){n.setState((function(){return{team:n.state.fullTeam.filter((function(e){return"male"===e.gender}))}}))},n.getWomanEmployees=function(){n.setState((function(){return{team:n.state.fullTeam.filter((function(e){return"female"===e.gender}))}}))},n.getAllEmployees=function(){n.setState((function(){return{team:n.state.fullTeam}}))},n.sortEmployees=function(){n.setState((function(){return{team:n.state.team.sort((function(e,t){return e.name.first<t.name.first?-1:t.name.first>e.name.first?1:0}))}})),console.log(n.state.team)},n}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){e.setState((function(){return{team:t.data.results,fullTeam:t.data.results,currentEmployee:t.data.results[0]}}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null),this.state.team.length&&l.a.createElement(f,{highlightEmployee:this.highlightEmployee,team:this.state.team,getMenEmployees:this.getMenEmployees,getWomanEmployees:this.getWomanEmployees,getAllEmployees:this.getAllEmployees,sortEmployees:this.sortEmployees}),this.state.currentEmployee&&l.a.createElement(y,{currentEmployee:this.state.currentEmployee}))}}]),t}(l.a.Component);o.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.290d0fea.chunk.js.map