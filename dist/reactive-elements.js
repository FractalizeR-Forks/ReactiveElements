React="object"==typeof React?React:require("react"),function(w){var PROPERTY_DELIMITER_CHARACTERS=[":","-","_"],registrationFunction=(document.registerElement||document.register).bind(document);if(void 0!==registrationFunction){var registerReact=function(e,t){var r=Object.create(HTMLElement.prototype);r.createdCallback=function(){this._content=getContentNodes(this);var e=React.createElement(t,getAllProperties(this,this.attributes));this.reactiveElement=React.render(e,this),extend(this,this.reactiveElement),getterSetter(this,"props",function(){return this.reactiveElement.props},function(e){this.reactiveElement.setProps(e)})},r.attributeChangedCallback=function(e,t,r){this.reactiveElement.props=getAllProperties(this,this.attributes),this.reactiveElement.forceUpdate(),void 0!==this.reactiveElement.attributeChanged&&this.reactiveElement.attributeChanged.bind(this)(e,t,r)},registrationFunction(e,{prototype:r})};document.registerReact=registerReact,"object"==typeof module&&module.exports&&(module.exports=registerReact),void 0!==w.xtag&&(w.xtag.registerReact=registerReact);var extend=function(e,t){for(var r in t)void 0===e[r]&&(e[r]="function"==typeof t[r]?t[r].bind(t):t[r])},getContentNodes=function(e){for(var t=document.createElement("content");e.childNodes.length;)t.appendChild(e.childNodes[0]);return t},getAllProperties=function(e,t){for(var r={},n=0;n<t.length;n++){var i=t[n],a=attributeNameToPropertyName(i.name);r[a]=parseAttributeValue(t[n].value)}return r._content=e._content,r},attributeNameToPropertyName=function(e){for(var t=e.replace("x-","").replace("data-",""),r=-1;-1!==(r=getNextDelimiterIndex(t));)t=t.slice(0,r)+t.charAt(r+1).toUpperCase()+t.slice(r+2,t.length);return t},getNextDelimiterIndex=function(e){for(var t=-1,r=0;r<PROPERTY_DELIMITER_CHARACTERS.length;r++){var n=PROPERTY_DELIMITER_CHARACTERS[r];if(t=e.indexOf(n),-1!==t)break}return t},parseAttributeValue=function(value){var matches=value.match(/^\{((\{|\[)(?:.|[\r\n])*}\2)}$/),result;if(matches)try{return result=JSON.parse(matches[1])}catch(e){}return matches=value.match(/\{(?:.|[\r\n])*\}/g),null!==matches&&void 0!==matches&&matches.length>0&&(value=eval(matches[0].replace("{","").replace("}",""))),value},getterSetter=function(e,t,r,n){Object.defineProperty?Object.defineProperty(e,t,{get:r,set:n}):document.__defineGetter__&&(e.__defineGetter__(t,r),e.__defineSetter__(t,n)),e["get"+t]=r,e["set"+t]=n}}}(window),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),r=this,n=function(){},i=function(){return r.apply(this instanceof n&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,i.prototype=new n,i});