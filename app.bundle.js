!function(t){function e(e){for(var s,r,n=e[0],l=e[1],d=e[2],m=0,h=[];m<n.length;m++)r=n[m],i[r]&&h.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);for(c&&c(e);h.length;)h.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={1:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=i[t]=[e,s]});e.push(a[2]=s);var o,n=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=function(t){return r.p+""+({}[t]||t)+".bundle.js"}(t),o=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+o+")");r.type=s,r.request=o,a[1](r)}i[t]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,n.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var n=window.webpackJsonp=window.webpackJsonp||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var c=l;o.push([13,0,11]),a()}([,,,function(t,e,a){"use strict";a.d(e,"a",function(){return s});class s{constructor(){throw new Error("httpAuth é uma classe statica e não deve ser inicializada !")}static async get(t,e){const a={method:"GET",headers:{"Content-Type":"application/json",Authorization:e}},s={};try{const e=await fetch(t,a);s.data=await e.ok?e.json():null,s.res=e}catch(t){}return s}static async post(t,e,a){const s={method:"POST",headers:{"Content-Type":"application/json",Authorization:e},body:JSON.stringify(a)},i={};try{const e=await fetch(t,s),a=await!e.ok?await e.json():{message:"Cadastro efetuado com sucesso !"};i.ok=e.ok,i.msg=a.message}catch(t){}return i}static async put(t,e,a){const s={method:"PUT",headers:{"Content-Type":"application/json",Authorization:e},body:JSON.stringify(a)},i={};try{const e=await fetch(t,s),a=await!e.ok?await e.json():{message:"Cadastro efetuado com sucesso !"};i.ok=e.ok,i.msg=a.message}catch(t){}return i}}},function(t,e,a){"use strict";e.a="https://pimquatro.herokuapp.com/api"},,,function(t,e,a){"use strict";var s,i=a(1),o=a(0);const r=a(19);Object(o.tag)("snack-bar")(s=Object(o.template)(r)(s=class extends i.Slim{onBeforeCreated(){this.getProps()}show(t,e){this.msg=t,this.cor=`background-color:${e}`,this.snackbar.classList.add("show"),setTimeout(()=>this.snackbar.classList.remove("show"),3e3)}getProps(){const t=this.getAttributeNames();this.props={},t.forEach(t=>{this.props[t.replace("bind:","")]=this.getAttribute(t)})}})||s)},function(t,e,a){"use strict";e.a=function(t){const e=t.substring(0,t.indexOf("@")),a=t.substring(t.indexOf("@")+1,t.length);return e.length>=1&&a.length>=3&&-1===e.search("@")&&-1===a.search("@")&&-1===e.search(" ")&&-1===a.search(" ")&&-1!==a.search(".")&&a.indexOf(".")>=1&&a.lastIndexOf(".")<a.length-1}},,,,,function(t,e,a){a(42),a(30),t.exports=a(34)},,,,function(t,e){t.exports='<nav aria-label=breadcrumb> <ol class="breadcrumb bg-transparent fade-in"> <li class=breadcrumb-item><a href=#!/dashboard>Dashboard</a></li> <li s:if=current class="breadcrumb-item active" aria-current=page>{{current}}</li> <li s:if=!current class="breadcrumb-item active" aria-current=page>Não sei aonde você foi parar </li> </ol> </nav>'},function(t,e,a){"use strict";(function(t){var e,s=a(1),i=a(0),o=a(2),r=a.n(o),n=(a(9),a(8));a(7);const l=a(20);Object(i.tag)("novo-cliente")(e=Object(i.template)(l)(e=class extends s.Slim{onBeforeCreated(){this.formControl="form-control",this.formInvalid="form-control is-invalid",this.formValid="form-control is-valid",this.sucess="#28a746e5",this.danger="#dc3546e3",this.loading=!1,this.cpfIsValid=this.formControl,this.emailIsValid=this.formControl,this.nomeIsValid=this.formControl,this.sobrenomeIsValid=this.formControl,this.cellIsValid=this.formControl,this.tellIsValid=this.formControl}onRender(){t("#cell").mask("(00) 0 0000-0000"),t("#tell").mask("(00) 0000-0000"),t("#cpf").mask("000.000.000-00",{reverse:!0}),this.nome.addEventListener("blur",()=>{this.nome.value?this.nomeIsValid=this.formValid:this.nomeIsValid=this.formInvalid}),this.cell.addEventListener("blur",()=>{this.cellIsValid=this.formValid}),this.tell.addEventListener("blur",()=>{this.tellIsValid=this.formValid}),this.sobrenome.addEventListener("blur",()=>{this.sobrenome.value?this.sobrenomeIsValid=this.formValid:this.sobrenomeIsValid=this.formInvalid}),this.validaCPF(),this.validaEmail(),this.salvar.addEventListener("click",async t=>{this.loading=!0,this.salvar.setAttribute("disabled","true");const e=[this.cpfIsValid,this.emailIsValid,this.sobrenomeIsValid,this.nomeIsValid];if(e.includes("form-control is-invalid"))this.loading=!1,this.salvar.removeAttribute("disabled"),this.snackbar.show("Preencha os campos corretamente !",this.danger);else if(e.includes("form-control is-valid")){const{ClienteServices:t}=await a.e(3).then(a.bind(null,43)),e=await this.clienteBuilder(),s=new t,i=await s.create(e);i.ok?(this.loading=!1,this.form.reset(),this.cpfIsValid=this.formControl,this.emailIsValid=this.formControl,this.nomeIsValid=this.formControl,this.sobrenomeIsValid=this.formControl,this.cellIsValid=this.formControl,this.tellIsValid=this.formControl,this.salvar.removeAttribute("disabled"),this.snackbar.show(i.msg,this.sucess)):(this.loading=!1,this.form.reset(),this.salvar.removeAttribute("disabled"),this.cpfIsValid=this.formControl,this.emailIsValid=this.formControl,this.nomeIsValid=this.formControl,this.sobrenomeIsValid=this.formControl,this.cellIsValid=this.formControl,this.tellIsValid=this.formControl,this.snackbar.show(i.msg,this.danger))}else this.loading=!1,this.salvar.removeAttribute("disabled"),this.snackbar.show("Preencha os campos corretamente !",this.danger)})}async clienteBuilder(){const{Cliente:t}=await a.e(4).then(a.bind(null,44));return new t(this.nome.value,this.sobrenome.value,r.a.format(this.cpf.value,"digits"),this.email.value,this.formatTell(this.tell.value),this.formatTell(this.cell.value))}validaCPF(){this.cpf.addEventListener("blur",t=>{const e=this.cpf.value;r.a.validate(e)?this.cpfIsValid=this.formValid:this.cpfIsValid=this.formInvalid})}validaEmail(){this.email.addEventListener("blur",t=>{Object(n.a)(this.email.value)?this.emailIsValid=this.formValid:this.emailIsValid=this.formInvalid})}formatTell(t){return this.tellFotmat=t.replace("(","").replace(")","").replace(" ","").replace("-",""),this.tellFotmat}})||e)}).call(this,a(5))},function(t,e){t.exports="<div bind s:id=snackbar bind:style=cor id=snackbar>{{msg}}</div> <style bind scoped>#snackbar{visibility:hidden;min-width:45%;color:#fff;text-align:center;border-radius:5px;padding:16px;position:fixed;z-index:1;left:50%;transform:translate(-50%,0);bottom:30px}#snackbar.show{visibility:visible;animation:fadein .5s,fadeout .5s 2.5s}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}</style>"},function(t,e){t.exports='<div s:if=loading style=width:100% class=progress> <div class=progress-bar></div> </div> <div class="container p-4 shadow-1 fade-in"> <h5 class=mb-4>Novo Cliente</h5> <form bind s:id=form autocomplete=off> <div class=form-row> <div class="form-group col-md-6"> <label for=nome>Nome</label> <input autocomplete=off type=text bind:class=nomeIsValid s:id=nome id=nome placeholder=""> <div s:if=nomeIsValid class=invalid-feedback>Campo obrigatório !</div> </div> <div class="form-group col-md-6"> <label for=sobrenome>Sobrenome</label> <input autocomplete=off type=text bind:class=sobrenomeIsValid s:id=sobrenome id=sobrenome placeholder=""> <div s:if=sobrenomeIsValid class=invalid-feedback>Campo obrigatório !</div> </div> </div> <div class=form-row> <div class="form-group col-md-6"> <label for=cpf>CPF</label> <input autocomplete=off type=text bind:class=cpfIsValid id=cpf s:id=cpf data-mask=###.###.###-##> <div s:if=cpfIsValid class=invalid-feedback>Por favor Insira um CPF valido !</div> </div> <div class="form-group col-md-6"> <div class=form-group> <label for=email>Email</label> <input autocomplete=off type=email bind:class=emailIsValid s:id=email id=email placeholder=""> <div s:if=emailIsValid class=invalid-feedback>Por favor Insira um Email valido !</div> </div> </div> </div> <div class=form-row> <div class="form-group col-md-3"> <div class=form-group> <label for=tell>Telefone</label> <input autocomplete=off type=tel bind:class=tellIsValid s:id=tell id=tell placeholder="" data-mask="(##) ####-####"> <div s:if=tellIsValid class=invalid-feedback>Por favor Insira um Telefone valido !</div> </div> </div> <div class="form-group col-md-3"> <div class=form-group> <label for=cell>Celular</label> <input autocomplete=off type=tel bind:class=cellIsValid s:id=cell id=cell placeholder="" data-mask="(##) # ####-####"> <div s:if=cellIsValid class=invalid-feedback>Por favor Insira um Celular valido !</div> </div> </div> </div> <div class="w-100 p-3 mt-5 d-flex justify-content-end"> <a class="btn btn-danger shadow-1 mr-3" href=#!/dashboard role=button>Cancelar</a> <button type=button s:id=salvar class="btn btn-primary-color shadow-1">Salvar</button> </div> </form> <snack-bar s:id=snackbar></snack-bar> </div>'},function(t,e){t.exports='<div class=form-group> <label bind for=exampleFormControlSelect1>{{label}}</label> <input s:id=input type=text list=teste bind:class=valid id="" bind:placeholder=placeholder> <div s:if=valid class=invalid-feedback>Campo Obrigatório !</div> <datalist w-100 id=teste> <option s:repeat="data as item" bind>{{item.nomeCpf}}</option> </datalist> </div>'},function(t,e){t.exports='<div s:if=loading style=width:100% class=progress> <div class=progress-bar></div> </div> <div class="container p-4 shadow-1 fade-in"> <h5 class=text-secundary-dark>Novo Chamado</h5> <form s:id=form action=""> <div class=row> <div class=col-md-6> <fieldset> <select-input url=/clientes label=Cliente s:id=select></select-input> </fieldset> </div> <div class=col-md-6> <fieldset> <div class=form-group> <label for=numero-cartao>Assunto</label> <input autocomplete=off type=text bind:class=assuntoIsValid s:id=assunto id=assunto placeholder=""> <div s:if=assuntoIsValid class=invalid-feedback>Por favor Insira um Assunto !</div> </div> </fieldset> </div> </div> <div class="row mt-2"> <div class=col-md-6> <div class=form-group> <label for=validade-cartao>Descrição do Problema</label> <textarea autocomplete=off bind:class=descricaoIsValid s:id=descricao id=descricao rows=5></textarea> </div> </div> </div> <div class="w-100 p-3 d-flex justify-content-end"> <a class="btn btn-danger shadow-1 mr-3" href=#!/dashboard role=button>Cancelar</a> <button type=button s:id=abrir class="btn btn-primary-color shadow-1">Abrir Chamado</button> </div> </form> <snack-bar s:id=snackbar></snack-bar> </div>'},function(t,e){t.exports='<div class="container mt-3 fade-in"> <div class="row mt-3 d-flex justify-content-around"> <div class=col-md-12> <div class="jumbotron shadow-1"> <h1 class="display-4 text-danger">ERRO 404 !</h1> <p class=lead>Essa não é a pagina que você estava procurando !</p> <hr class=my-4> <p>Clique no botão abaixo para voltar ao inicio</p> <a class="btn btn-primary-color shadow-1 btn-lg" href=#!/dashboard role=button>Home</a> </div> </div> </div> </div>'},function(t,e){t.exports='<div bind class="container mt-2 fade-in"> <h5 class=text-secundary-dark>Dashboard</h5> <div class="row d-flex mt-1 mb-3 justify-content-between"> <div class="col-md-3 h-25 shadow-hover-1 mb-1 p-3 text-center"> <h4 class=text-primary-color>Chamados Abertos </h4> <p s:if=info class="lead text-secundary-color bounce-in-top">{{info.abertos}}</p> <p s:if=!info class="lead text-secundary-color"><i class="fas fa-spinner rotate-center"></i></p> </div> <div class="col-md-4 h-25 shadow-hover-1 mb-1 p-3 text-center"> <h4 class=text-primary-color>Total de Chamados </h4> <p s:if=info class="lead text-secundary-color bounce-in-top">{{info.total}}</p> <p s:if=!info class="lead text-secundary-color"><i class="fas fa-spinner rotate-center"></i></p> </div> <div class="col-md-3 h-25 shadow-hover-1 mb-1 p-3 text-center"> <h4 class=text-primary-color>Chamados Encerrados</h4> <p s:if=info class="lead text-secundary-color bounce-in-top">{{info.encerrados}}</p> <p s:if=!info class="lead text-secundary-color"><i class="fas fa-spinner rotate-center"></i></p> </div> </div> <div class="row d-flex justify-content-center"> <graficos-home class="w-100 shadow-hover-1"></graficos-home> </div> </div> <style>.bounce-in-top{-webkit-animation:bounce-in-top 1.1s both;animation:bounce-in-top 1.1s both}@-webkit-keyframes bounce-in-top{0%{-webkit-transform:translateY(-30px);transform:translateY(-30px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{-webkit-transform:translateY(-32.5px);transform:translateY(-32.5px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{-webkit-transform:translateY(-14px);transform:translateY(-14px);-webkit-animation-timing-function:ease-in}90%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.rotate-center{color:#0277bd;-webkit-animation:rotate-center .6s linear infinite both;animation:rotate-center .6s linear infinite both}@-webkit-keyframes rotate-center{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-center{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}</style>'},function(t,e){t.exports='<div id=cardHero class="list-group d-flex w-100 flex-row justify-content-around flex-wrap"> <a bind bind:status=item.statusFiltro s:repeat="data as item" bind:style=item.status bind:href=item.urlProtocolo id=teste class="list-group-item fade-in m-1 list-group-item-action flex-column align-items-start"> <div class="d-flex w-100 justify-content-between"> <h5 class=mb-1>{{item.cliente.nome}}</h5> <small>{{item.data}}</small> </div> <p class=mb-1>{{item.assunto}}</p> <div class="d-flex justify-content-between"> <small class=protocolo>Protocolo: {{item.protocolo}}</small> <small class=cpf>CPF: {{item.cliente.cpf}}</small> </div> </a> </div> <style>.list-group-item{width:48%}@media (max-width:990px){.list-group-item{width:100%}}#teste{border-radius:5px}</style>'},function(t,e){t.exports='<div s:if=!data style=width:100% class=progress> <div class=progress-bar></div> </div> <div s:if=loading style=width:100% class=progress> <div class=progress-bar></div> </div> <div bind class="container fade-in"> <h4 s:if=data class=text-secundary-dark>{{data.assunto}} - <small>{{data.protocolo}}</small></h4> <div s:if=data class="row mt-2 fade-in"> <div class=col-md-8> <h5>{{data.cliente.nome}}</h5> <div class="d-flex justify-content-between flex-nowrap mb-1"> <small>Contato {{data.cliente.telefoneFixo}} / {{data.cliente.telefoneMovel}}</small> <small>CPF: {{data.cliente.cpf}}</small> </div> <div class="p-0 m-0" style=overflow-y:auto;height:60vh> <a bind s:repeat="eventos as eventos" class="list-group-item list-group-item-action flex-column align-items-start mb-1 fade-in"> <div class="d-flex w-100 justify-content-between"> <h5 class=mb-1>{{eventos.tipo}} {{eventos.atendente.nome}}</h5> <small class=text-muted>{{eventos.data}}</small> </div> <p class=mb-1>{{eventos.descricao}}</p> <small class=text-muted>{{eventos.atendente.email}}</small> </a> </div> </div> <div class="col-md-4 mt-4"> <ul class="nav nav-tabs d-flex justify-content-around" id=myTab role=tablist> <li class=nav-item> <a bind:class=atualizarClass id=home-tab data-toggle=tab href=#atualizar role=tab aria-controls=home aria-selected=true>Atualizar</a> </li> <li class=nav-item> <a bind:class=tranferirClass id=profile-tab data-toggle=tab href=#transferir role=tab aria-controls=profile aria-selected=false>Transferir</a> </li> <li class=nav-item> <a bind:class=encerrarClass id=contact-tab data-toggle=tab href=#encerrar role=tab aria-controls=contact aria-selected=false>Encerrar</a> </li> </ul> <div s:if=encerrado class="jumbotron jumbotron-fluid shadow-1 mt-3 p-3 fade-in"> <div class="container p-0 m-0"> <h5 class="m-0 text-danger">Encerrado</h5> <p class=mt-1>{{cardEncerramento.descricao}}</p> <small class=text-muted>{{cardEncerramento.tipo}} {{cardEncerramento.atendente.nome}}. </small> </div> </div> <div class=tab-content s:id=tabOperacoesChamado> <div class="tab-pane fade show active" id=atualizar role=tabpanel aria-labelledby=home-tab> <form s:id=formAtualizar class=mt-3> <div class=form-group> <textarea class=form-control s:id=descricaoAtualizar rows=3 placeholder=Descrição></textarea> </div> <div class="d-flex justify-content-end"> <button class="btn btn-primary" s:id=atualizar type=button>Atualizar</button> </div> </form> </div> <div class="tab-pane fade" id=transferir role=tabpanel aria-labelledby=profile-tab> <form s:id=formTransferir class=mt-3> <div class=form-group> <select-input url=/atendentes required=false label=Atendente s:id=select></select-input> <textarea class=form-control s:id=descricaoTransferir rows=3 placeholder=Descrição></textarea> </div> <div class="d-flex justify-content-end"> <button class="btn btn-success" s:id=transferir type=button>Transferir</button> </div> </form> </div> <div class="tab-pane fade" id=encerrar role=tabpanel aria-labelledby=contact-tab> <form s:id=formEncerrar class=mt-3> <div class=form-group> <textarea class=form-control s:id=descricaoEncerrar rows=3 placeholder=Descrição></textarea> </div> <div class="d-flex justify-content-end"> <button class="btn btn-danger" s:id=encerrar type=button>Encerrar</button> </div> </form> </div> </div> </div> </div> <snack-bar s:id=snackbar></snack-bar> </div>'},function(t,e){t.exports='<div s:if=!chamados style=width:100% class=progress> <div class=progress-bar></div> </div> <div s:if=semChamados class="container mt-3 fade-in"> <div class="row mt-3 d-flex justify-content-around"> <div class=col-md-12> <div class="jumbotron shadow-1"> <h1 class="display-5 text-danger">Ops. Ainda não há chamados cadastrados !</h1> <p>Mas você pode criar um clicando no botão a baixo ;)</p> <a class="btn btn-primary-color shadow-1 btn-lg" href=#!/novo-chamado role=button>Novo Chamado</a> </div> </div> </div> </div> <div s:if=!semChamados class="container mt-2 fade-in"> <div class=""> <h5 class=text-secundary-dark>Visualizar Chamado</h5> <div class="d-flex flex-wrap"> <div class="custom-control custom-checkbox mr-sm-2 mt-2"> <input type=checkbox s:id=checkAberto checked=checked class=custom-control-input id=abertos> <label class="custom-control-label aberto" for=abertos>Chamados Abertos</label> </div> <div class="custom-control custom-checkbox mr-sm-2 mt-2"> <input type=checkbox s:id=checkEncerrado checked=checked class=custom-control-input id=encerrados> <label class="custom-control-label encerrado" for=encerrados>Chamados Encerrados</label> </div> <div class="form-group col-md-6 m-0 ml-5 ml-auto p-0 pr-3 pl-1"> <div class=input-icon> <input autocomplete=off type=text class=form-control s:id=filtro id=filtro placeholder="Protocolo ou CPF"> <i class="fas fa-search icon"></i> </div> </div> </div> </div> <div class=row> <div class=col-md-12> <card-component s:id=cardChamados class="container-fluid p-1"></card-component> </div> </div> </div> <style>.encerrado{border-bottom:solid 2px red;border-radius:3px;margin-bottom:1rem}.aberto{border-bottom:solid 2px green;border-radius:3px;margin-right:1rem}.input-icon{position:relative!important}.icon{width:1.5rem!important;height:1.5rem!important;position:absolute!important;left:92%!important;top:8px!important;color:rgba(86,151,216,.829)}@media (max-width:990px){.icon{left:90%!important;top:8px!important}@media (max-width:640px){.icon{left:88%!important;top:8px!important}}}</style>'},function(t,e,a){"use strict";(function(t){var e,s=a(1),i=a(0),o=a(2),r=a.n(o),n=(a(9),a(8));a(7);const l=a(29);Object(i.tag)("novo-atendente")(e=Object(i.template)(l)(e=class extends s.Slim{onBeforeCreated(){this.formControl="form-control",this.formInvalid="form-control is-invalid",this.formValid="form-control is-valid",this.sucess="#28a746e5",this.danger="#dc3546e3",this.loading=!1,this.cpfIsValid=this.formControl,this.emailIsValid=this.formControl,this.nomeIsValid=this.formControl,this.sobrenomeIsValid=this.formControl,this.cellIsValid=this.formControl,this.senhaIsValid=this.formControl}onRender(){t("#cpf").mask("000.000.000-00",{reverse:!0}),this.nome.addEventListener("blur",()=>{this.nome.value?this.nomeIsValid=this.formValid:this.nomeIsValid=this.formInvalid}),this.senha.addEventListener("blur",()=>{String(this.senha.value).length>=6?this.senhaIsValid=this.formValid:this.senhaIsValid=this.formInvalid}),this.sobrenome.addEventListener("blur",()=>{this.sobrenome.value?this.sobrenomeIsValid=this.formValid:this.sobrenomeIsValid=this.formInvalid}),this.validaCPF(),this.validaEmail(),this.salvar.addEventListener("click",async t=>{this.loading=!0,this.salvar.setAttribute("disabled","true");const e=[this.cpfIsValid,this.emailIsValid,this.sobrenomeIsValid,this.nomeIsValid,this.senhaIsValid];if(e.includes("form-control is-invalid"))this.loading=!1,this.salvar.removeAttribute("disabled"),this.snackbar.show("Preencha os campos corretamente !",this.danger);else if(e.includes("form-control is-valid")){const{AtendenteServices:t}=await a.e(8).then(a.bind(null,45)),e=await this.atendenteBuilder(),s=new t,i=await s.create(e);i.ok?(this.loading=!1,this.form.reset(),this.cpfIsValid=this.formControl,this.emailIsValid=this.formControl,this.nomeIsValid=this.formControl,this.sobrenomeIsValid=this.formControl,this.senhaIsValid=this.formControl,this.salvar.removeAttribute("disabled"),this.snackbar.show(i.msg,this.sucess)):(this.loading=!1,this.salvar.removeAttribute("disabled"),this.form.reset(),this.cpfIsValid=this.formControl,this.emailIsValid=this.formControl,this.nomeIsValid=this.formControl,this.sobrenomeIsValid=this.formControl,this.senhaIsValid=this.formControl,this.snackbar.show(i.msg,this.danger))}else this.loading=!1,this.salvar.removeAttribute("disabled"),this.snackbar.show("Preencha os campos corretamente !",this.danger)})}async atendenteBuilder(){const{Atendente:t}=await a.e(9).then(a.bind(null,46));return new t(this.nome.value,this.sobrenome.value,r.a.format(this.cpf.value,"digits"),this.email.value,this.senha.value)}validaCPF(){this.cpf.addEventListener("blur",t=>{const e=this.cpf.value;r.a.validate(e)?this.cpfIsValid=this.formValid:this.cpfIsValid=this.formInvalid})}validaEmail(){this.email.addEventListener("blur",t=>{Object(n.a)(this.email.value)?this.emailIsValid=this.formValid:this.emailIsValid=this.formInvalid})}})||e)}).call(this,a(5))},function(t,e){t.exports='<div s:if=loading style=width:100% class=progress> <div class=progress-bar></div> </div> <div class="container p-4 shadow-1 fade-in"> <h5 class=mb-4>Novo Atendente</h5> <form bind s:id=form autocomplete=off> <div class=form-row> <div class="form-group col-md-6"> <label for=nome>Nome</label> <input autocomplete=off type=text bind:class=nomeIsValid s:id=nome id=nome placeholder=""> <div s:if=nomeIsValid class=invalid-feedback>Campo obrigatório !</div> </div> <div class="form-group col-md-6"> <label for=sobrenome>Sobrenome</label> <input autocomplete=off type=text bind:class=sobrenomeIsValid s:id=sobrenome id=sobrenome placeholder=""> <div s:if=sobrenomeIsValid class=invalid-feedback>Campo obrigatório !</div> </div> </div> <div class=form-row> <div class="form-group col-md-6"> <label for=cpf>CPF</label> <input autocomplete=off type=text bind:class=cpfIsValid id=cpf s:id=cpf data-mask=###.###.###-##> <div s:if=cpfIsValid class=invalid-feedback>Por favor Insira um CPF valido !</div> </div> <div class="form-group col-md-6"> <div class=form-group> <label for=email>Email</label> <input autocomplete=off type=email bind:class=emailIsValid s:id=email id=email placeholder=""> <div s:if=emailIsValid class=invalid-feedback>Por favor Insira um Email valido !</div> </div> </div> </div> <div class=form-row> <div class="form-group col-md-3"> <div class=form-group> <label for=senha>Senha</label> <input autocomplete=off type=password bind:class=senhaIsValid s:id=senha id=senha placeholder=""> <div s:if=senhaIsValid class=invalid-feedback>A senha deve conter no minimo 6 digitos !</div> </div> </div> </div> <div class="w-100 p-3 mt-5 d-flex justify-content-end"> <a class="btn btn-danger shadow-1 mr-3" href=#!/dashboard role=button>Cancelar</a> <button type=button s:id=salvar class="btn btn-primary-color shadow-1">Salvar</button> </div> </form> <snack-bar s:id=snackbar></snack-bar> </div>'},function(t,e,a){var s=a(31);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(10)(s,i);s.locals&&(t.exports=s.locals)},function(t,e,a){},,,function(t,e,a){var s=a(35);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(10)(s,i);s.locals&&(t.exports=s.locals)},function(t,e,a){},,,,,,,function(t,e,a){"use strict";a.r(e);var s,i=a(1),o=a(0);const r=a(17);Object(o.tag)("bread-crumb")(s=Object(o.template)(r)(s=class extends i.Slim{async onBeforeCreated(){this.url=window.location.href,this.url=this.url.split("/"),this.current=this.url[5]}})||s),a(18);var n,l=a(2),d=a.n(l),c=(a(9),a(7),a(3)),m=a(4);const h=a(21);var f;Object(o.tag)("select-input")(n=Object(o.template)(h)(n=class extends i.Slim{async onBeforeCreated(){this.valid="form-control",this.getProps(),this.formInvalid="false"===this.props.required?"form-control":"form-control is-invalid",this.label=this.props.label,this.placeholder="/clientes"===this.props.url?"Nome ou CPF":"Nome",this.token=localStorage.getItem("token"),this.res=await c.a.get(`${m.a}${this.props.url}`,this.token),this.response=await this.res.data,this.SelectData="",this.data=this.response.map(t=>{return{cpf:t.cpf,nome:t.nome,id:t.id,email:t.email,nomeCpf:"/clientes"===this.props.url?`${t.nome} ${t.cpf}`:`${t.nome}`}})}onRender(){this.input.addEventListener("focusout",()=>{if(this.input.value){this.valid="form-control is-valid";const t=this.input.value;this.SelectData=this.data.filter(e=>{return e.nomeCpf==t&&e})}else this.valid=this.formInvalid})}getData(){return this.SelectData}isValid(){return"form-control is-valid"===this.valid}getProps(){const t=this.getAttributeNames();this.props={},t.forEach(t=>{this.props[t.replace("bind:","")]=this.getAttribute(t)})}})||n);const u=a(22);var b;Object(o.tag)("novo-chamado")(f=Object(o.template)(u)(f=class extends i.Slim{onBeforeCreated(){this.formControl="form-control",this.formInvalid="form-control is-invalid",this.formValid="form-control is-valid",this.sucess="#28a746e5",this.danger="#dc3546e3",this.loading=!1,this.descricaoIsValid=this.formControl,this.assuntoIsValid=this.formControl}onRender(){const{abrir:t,assunto:e,descricao:s,sucess:i,danger:o,formInvalid:r,formValid:n}=this;e.addEventListener("blur",()=>{e.value?this.assuntoIsValid=n:this.assuntoIsValid=r}),s.addEventListener("blur",()=>{s.value?this.descricaoIsValid=n:this.descricaoIsValid=r}),t.addEventListener("click",async()=>{this.loading=!0,t.setAttribute("disabled","true");const e=[this.select.isValid(),this.descricaoIsValid,this.assuntoIsValid];if(e.includes("form-control is-invalid"))this.loading=!1,t.removeAttribute("disabled"),this.snackbar.show("Preencha os campos corretamente !",o);else if(e.includes("form-control is-valid")){const{ChamadoServices:e}=await a.e(5).then(a.bind(null,230)),s=await this.chamadoBuilder(),r=new e,n=await r.create(s);n.ok?(this.loading=!1,this.form.reset(),this.descricaoIsValid=this.formControl,this.assuntoIsValid=this.formControl,this.snackbar.show("Chamado aberto com sucesso !",i)):(this.loading=!1,this.form.reset(),this.descricaoIsValid=this.formControl,this.assuntoIsValid=this.formControl,this.snackbar.show(n.msg,o)),t.removeAttribute("disabled")}else this.loading=!1,this.snackbar.show("Preencha os campos corretamente !",o),t.removeAttribute("disabled")})}async chamadoBuilder(){const{Chamado:t}=await a.e(6).then(a.bind(null,231)),e=this.select.getData()[0],s=JSON.parse(localStorage.getItem("user"))[0];return new t(e.id,s.id,this.assunto.value,this.descricao.value)}})||f);const p=a(23);var v;Object(o.tag)("erro-404")(b=Object(o.template)(p)(b=class extends i.Slim{onBeforeCreated(){this.text="gui",this.img="src/assets/imgs/man.svg"}})||b);Promise.all([a.e(10),a.e(7)]).then(a.bind(null,232));const g=a(24);var w;Object(o.tag)("dash-board")(v=Object(o.template)(g)(v=class extends i.Slim{async onBeforeCreated(){const t=new class{constructor(){this.token=localStorage.getItem("token")}async read(){return await c.a.get(`${m.a}/chamados`,this.token)}};this.response=await t.read(),this.data=await this.response.data;const e=this.data.filter(t=>t.dataEncerramento?null:t),a=this.data.filter(t=>t.dataEncerramento?t:null);this.info={total:this.data.length,abertos:e.length,encerrados:String(a.length)}}})||v);const y=a(25);var k;Object(o.tag)("card-component")(w=Object(o.template)(y)(w=class extends i.Slim{async onBeforeCreated(){this.data=""}setData(t){this.data=t.map(t=>{const e=new Date(t.dataAbertura),a=`${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()}`;t.data=a,t.urlProtocolo=`/#!/visualizar-chamado/${t.protocolo}`,t.status=t.dataEncerramento?"border-left: solid 3px #d9534f;":"border-left: solid 3px #5cb85c;",t.statusFiltro=t.dataEncerramento?"Encerrado":"Aberto";const s=d.a.format(t.cliente.cpf);return t.cliente.cpf=s,t})}})||w);class x{constructor(){this.atendente=JSON.parse(localStorage.getItem("user")),this.token=localStorage.getItem("token")}async readByAtendente(){return await c.a.get(`${m.a}/chamados/atendente/${this.atendente[0].id}`,this.token)}async readByID(t){return await c.a.get(`${m.a}/chamados/${t}`,this.token)}async transferir(t,e){return await c.a.put(`${m.a}/chamados/${t}/transferir`,this.token,e)}async atualizar(t,e){return await c.a.put(`${m.a}/chamados/${t}/atualizar`,this.token,e)}async encerrar(t,e){return await c.a.put(`${m.a}/chamados/${t}/encerrar`,this.token,e)}}function I(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const C=a(26);var V;Object(o.tag)("visualizar-chamado-id")(k=Object(o.template)(C)(k=class extends i.Slim{constructor(...t){super(...t),I(this,"formataDados",t=>(t.cliente.cpf=d.a.format(t.cliente.cpf),t.cliente.telefoneFixo=this.formataNumeroTelefone(String(t.cliente.telefoneFixo)),t.cliente.telefoneMovel=this.formataNumeroTelefone(String(t.cliente.telefoneMovel)),t.status=t.dataEncerramento?"Encerrado":"Aberto",t.eventos=t.eventos.map(t=>{switch(t.tipo){case"Abertura":t.tipo="Aberto por";break;case"Encerramento":t.tipo="Encerrado por";break;case"Atualização":t.tipo="Atualizado por";break;case"Transferência":t.tipo="Tranferido para"}const e=new Date(t.data),a=`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()} ás ${e.getHours()}:${e.getMinutes()}`;return t.data=a,t}),t)),I(this,"encerrarChamado",async()=>{if(this.loading=!0,this.encerrar.setAttribute("disabled","true"),this.descricaoEncerrar.value){const t={descricao:this.descricaoEncerrar.value,protocolo:this.props.id},e=new x,a=await e.encerrar(this.props.id,t);a.ok?(this.loading=!1,this.formEncerrar.reset(),this.snackbar.show("Chamado encerrado com sucesso !",this.sucess),this.encerrar.removeAttribute("disabled"),this.onBeforeCreated()):(this.loading=!1,this.snackbar.show(a.msg,this.danger),this.encerrar.removeAttribute("disabled"))}else this.loading=!1,this.snackbar.show("Para Encerrar é necessário preencher o campo  Descrição",this.danger),this.encerrar.removeAttribute("disabled")}),I(this,"atualizarChamado",async()=>{if(this.loading=!0,this.atualizar.setAttribute("disabled","true"),this.descricaoAtualizar.value){const t={descricao:this.descricaoAtualizar.value},e=new x,a=await e.atualizar(this.props.id,t);a.ok?(this.loading=!1,this.formAtualizar.reset(),this.snackbar.show("Chamado atualizado com sucesso !",this.sucess),this.atualizar.removeAttribute("disabled"),this.onBeforeCreated()):(this.loading=!1,this.snackbar.show(a.msg,this.danger),this.atualizar.removeAttribute("disabled"))}else this.loading=!1,this.snackbar.show("Para atualizar é necessário preencher o campo  Descrição",this.danger),this.atualizar.removeAttribute("disabled")}),I(this,"tranferirChamado",async()=>{this.loading=!0,this.transferir.setAttribute("disabled","true");const t=this.select.getData();if(t&&this.descricaoTransferir.value){const e={atendenteId:t[0].id,descricao:this.descricaoTransferir.value},a=new x,s=await a.transferir(this.props.id,e);s.ok?(this.loading=!1,this.formTransferir.reset(),this.snackbar.show("Chamado transferido com sucesso ! ",this.sucess),this.transferir.removeAttribute("disabled"),this.onBeforeCreated()):(this.loading=!1,this.snackbar.show(s.msg,this.danger),this.transferir.removeAttribute("disabled"))}else this.loading=!1,this.snackbar.show("Para transferir é necessário preencher o campo atendente e Descrição",this.danger),this.transferir.removeAttribute("disabled")}),I(this,"formataNumeroTelefone",t=>{if("null"!=t){let e;if(10===t.length){e=`(${t.substring(0,2)}) ${t.substring(2,6)} - ${t.substring(6,12)}`}else{e=`(${t.substring(0,2)}) ${t.substring(2,3)}  ${t.substring(3,7)} - ${t.substring(7,13)}`}return e}return""})}async onBeforeCreated(){this.getProps(),this.sucess="#28a746e5",this.danger="#dc3546e3",this.loading=!1;const t=new x;this.response=await t.readByID(this.props.id),this.data=this.formataDados(await this.response.data),this.eventos=this.data.eventos,"Encerrado"===this.data.status?(this.cardEncerramento=this.eventos.filter(t=>"Encerrado por"===t.tipo)[0],this.atualizarClass="nav-link disabled",this.tranferirClass="nav-link disabled",this.encerrarClass="nav-link disabled",this.encerrado="Encerrado",this.tabOperacoesChamado.style.display="none"):(this.atualizarClass="nav-link active",this.tranferirClass="nav-link",this.encerrarClass="nav-link",this.encerrado="")}onRender(){this.transferir.addEventListener("click",this.tranferirChamado),this.atualizar.addEventListener("click",this.atualizarChamado),this.encerrar.addEventListener("click",this.encerrarChamado)}getProps(){const t=this.getAttributeNames();this.props={},t.forEach(t=>{this.props[t.replace("bind:","")]=this.getAttribute(t)})}})||k);const E=a(27);Object(o.tag)("visualizar-chamado")(V=Object(o.template)(E)(V=class extends i.Slim{async onBeforeCreated(){const t=new x;this.response=await t.readByAtendente(),this.chamados=await this.response.data,this.chamados?this.cardChamados.setData(this.chamados):(this.chamados="semChamados",this.semChamados=!0)}onRender(){const{filtro:t,checkAberto:e,checkEncerrado:a}=this;e.addEventListener("change",t=>{const a=[...document.getElementById("cardHero").querySelectorAll("a")];e.checked?a.forEach(t=>{"Aberto"==t.getAttribute("status")&&(t.style.display="")}):a.forEach(t=>{"Aberto"==t.getAttribute("status")&&(t.style.display="none")})}),a.addEventListener("change",t=>{const e=[...document.getElementById("cardHero").querySelectorAll("a")];a.checked?e.forEach(t=>{"Encerrado"==t.getAttribute("status")&&(t.style.display="")}):e.forEach(t=>{"Encerrado"==t.getAttribute("status")&&(t.style.display="none")})}),t.addEventListener("keyup",()=>{const e=document.getElementById("cardHero").querySelectorAll("a"),a=t.value.toUpperCase();[...e].forEach(t=>{const e=t.querySelector(".protocolo").innerHTML.toUpperCase().split(" ")[1],s=d.a.format(t.querySelector(".cpf").innerHTML.split(" ")[1],"digits");e.indexOf(a)>-1||s.toString().indexOf(a)>-1?t.style.display="":t.style.display="none"})})}})||V),a(28)}]);