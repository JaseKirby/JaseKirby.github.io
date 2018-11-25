!function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";a.r(t);a(3);var n,l=a(0),r=a(1);!function(e){e.Beginner="Beginner",e.Intermediate="Intermdiate",e.Advanced="Advanced",e.Expert="Expert"}(n||(n={}));var i={firstName:"Jase",lastName:"Kirby",occupation:"Software Developer",contactInfo:{currentLocation:"Timonium, MD"},summary:"\n    Hard working software developer.\n    I love writing code and creating beautiful, functional, and responsive applications.\n    I am also a decent mechanic and an outdoorsman.\n    ",education:[{institution:"West Virginia University",degree:"B.S. Management Information Systems",location:"Morgantown, WV",time:"Graduated 2015"}],internships:[{employer:"UPS",name:"Information Services",location:"Timonium, MD",time:"Summer 2015"}],employment:[{employer:"UPS Information Services",title:"Applications Developer",location:"Timonium, MD",time:"January 2017-Present"},{employer:"UPS Information Services",title:"Applications Developer",location:"Timonium, MD",time:"December 2015-2016"},{employer:"WVU College of B&E IT Department",title:"Computer Lab Assistant",location:"Morgantown, WV",time:"August 2011-2014"},{employer:"Mar-Len Environmental",title:"Reforestation Project Team Member",location:"Westminster, MD",time:"July 2009-2014"}],skills:[{title:"Linux",level:n.Advanced},{title:"Windows",level:n.Advanced},{title:"HTML",level:n.Advanced},{title:"Javascript",level:n.Intermediate},{title:"CSS",level:n.Beginner},{title:"Typescript",level:n.Intermediate},{title:"SQL",level:n.Intermediate},{title:"DevOps",level:n.Expert},{title:"Docker",level:n.Expert},{title:"Kubernetes",level:n.Advanced},{title:"Openshift",level:n.Advanced},{title:"Ansible",level:n.Advanced},{title:"Java",level:n.Advanced},{title:"C#",level:n.Advanced},{title:"Jenkins",level:n.Advanced},{title:"Elasticsearch",level:n.Intermediate},{title:"Fluentd",level:n.Intermediate},{title:"Web Applications",level:n.Advanced},{title:"Node.js",level:n.Intermediate},{title:"NoSQL",level:n.Intermediate},{title:"Go",level:n.Beginner},{title:"React",level:n.Intermediate},{title:"Groovy",level:n.Intermediate},{title:"ASP.NET Core",level:n.Advanced},{title:"Tomcat",level:n.Intermediate},{title:"Spring Boot",level:n.Intermediate}]};class s{constructor(){this.isMenuActive=!1}}const m={borderRadius:0};class c extends l.PureComponent{constructor(e){super(e),this.handleBurgerClick=(()=>{this.setState(e=>({isMenuActive:!e.isMenuActive}))}),this.state=new s}render(){let e="navbar-menu";return this.state.isMenuActive&&(e="navbar-menu is-active"),l.createElement("nav",{className:"navbar is-fixed-top",style:m,role:"navigation","aria-label":"main navigation"},l.createElement("div",{className:"navbar-brand"},l.createElement("a",{className:"navbar-item",href:"#"},this.props.resume.firstName," ",this.props.resume.lastName,"'s Resume"),l.createElement("a",{role:"button",onClick:this.handleBurgerClick,className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},l.createElement("span",{"aria-hidden":"true"}),l.createElement("span",{"aria-hidden":"true"}),l.createElement("span",{"aria-hidden":"true"}))),l.createElement("div",{id:"navbarBasicExample",className:e},l.createElement("div",{className:"navbar-end"},l.createElement("a",{className:"navbar-item",href:"#home"},"Home"),l.createElement("a",{className:"navbar-item",href:"#summary"},"Summary"),l.createElement("a",{className:"navbar-item",href:"#education"},"Education"),l.createElement("a",{className:"navbar-item",href:"#internship"},"Internship"),l.createElement("a",{className:"navbar-item",href:"#employment"},"Employment"),l.createElement("a",{className:"navbar-item",href:"#skills"},"Skills"))))}}class o extends l.Component{render(){return l.createElement("div",{id:this.props.id},l.createElement("h1",{className:"title is-1 has-text-centered"},this.props.firstName," ",this.props.lastName),l.createElement("h4",{className:"title is-4 has-text-centered"},this.props.occupation.toUpperCase()),l.createElement("div",{className:"columns has-text-centered"},this.props.contactInfo.email&&l.createElement("div",{className:"column"},l.createElement("h5",{className:"title is-5"},l.createElement("span",{className:"icon"},l.createElement("i",{className:"fas fa-envelope"})),this.props.contactInfo.email)),this.props.contactInfo.phone&&l.createElement("div",{className:"column"},l.createElement("h5",{className:"title is-5"},l.createElement("span",{className:"icon"},l.createElement("i",{className:"fas fa-mobile"})),this.props.contactInfo.phone)),this.props.contactInfo.currentLocation&&l.createElement("div",{className:"column"},l.createElement("h5",{className:"title is-5"},l.createElement("span",{className:"icon"},l.createElement("i",{className:"fas fa-map-marker-alt"})),this.props.contactInfo.currentLocation))))}}const p={marginBottom:"20px"};class u extends l.Component{render(){return l.createElement("div",{className:"columns",style:p},l.createElement("div",{className:"column"},l.createElement("h3",{className:"title is-3 has-text-primary"},this.props.organization),l.createElement("h5",{className:"subtitle is-5"},this.props.title)),l.createElement("div",{className:"column is-offset-6"},l.createElement("h3",{className:"title is-3 has-text-primary"},this.props.location),l.createElement("h5",{className:"subtitle is-5"},this.props.time)))}}const d={marginTop:"40px"},v={marginLeft:"10px"};r.render(l.createElement(class extends l.Component{render(){return l.createElement("div",null,l.createElement(c,{resume:this.props.resume}),l.createElement("div",{className:"container",style:d},l.createElement(o,{id:"home",firstName:this.props.resume.firstName,lastName:this.props.resume.lastName,occupation:this.props.resume.occupation,contactInfo:this.props.resume.contactInfo}),l.createElement("div",{id:"summary"},l.createElement("h2",{className:"title is-2"},"Summary"),l.createElement("hr",null),l.createElement("p",{className:"content is-size-5"},this.props.resume.summary)),l.createElement("br",null),l.createElement("div",{id:"education"},l.createElement("h2",{className:"title is-2"},"Education"),l.createElement("hr",null),this.props.resume.education.map((e,t)=>l.createElement("div",{key:t},l.createElement(u,{organization:e.institution,title:e.degree,location:e.location,time:e.time})))),l.createElement("br",null),l.createElement("div",{id:"internship"},l.createElement("h2",{className:"title is-2"},"Internship"),l.createElement("hr",null),this.props.resume.internships.map((e,t)=>l.createElement("div",{key:t},l.createElement(u,{organization:e.employer,title:e.name,location:e.location,time:e.time})))),l.createElement("br",null),l.createElement("div",{id:"employment"},l.createElement("h2",{className:"title is-2"},"Employment"),l.createElement("hr",null),this.props.resume.employment.map((e,t)=>l.createElement("div",{key:t},l.createElement(u,{organization:e.employer,title:e.title,location:e.location,time:e.time})))),l.createElement("br",null),l.createElement("div",{id:"skills"},l.createElement("h2",{className:"title is-2"},"Skills"),l.createElement("hr",null),l.createElement("aside",{className:"menu",style:v},this.props.resume.skills.map(e=>l.createElement("p",{key:e.title,className:"menu-label is-size-4"},e.title," - ",e.level)))),l.createElement("br",null)))}},{resume:i}),document.getElementById("root"))},function(e,t){}]);
//# sourceMappingURL=app.bundle.js.map