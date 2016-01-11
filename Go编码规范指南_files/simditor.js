(function(e,d){"function"===typeof define&&define.amd?define("simple-module",["jquery"],function(c){return e.returnExportsGlobal=d(c)}):"object"===typeof exports?module.exports=d(require("jquery")):e.SimpleModule=d(jQuery)})(this,function(e){var d=[].slice;return function(){function c(b){var a,c,f;this.opts=e.extend({},this.opts,b);(a=this.constructor)._connectedClasses||(a._connectedClasses=[]);var d,g;g=this.constructor._connectedClasses;b=[];f=0;for(d=g.length;f<d;f++)a=g[f],c=a.pluginName.charAt(0).toLowerCase()+
a.pluginName.slice(1),a.prototype._connected&&(a.prototype._module=this),b.push(this[c]=new a);if(this._connected)this.opts=e.extend({},this.opts,this._module.opts);else for(this._init(),c=0,f=b.length;c<f;c++)a=b[c],"function"===typeof a._init&&a._init();this.trigger("initialized")}c.extend=function(b){var a,c,d;if(null!=b&&"object"===typeof b){for(a in b)c=b[a],"included"!==a&&"extended"!==a&&(this[a]=c);return null!=(d=b.extended)?d.call(this):void 0}};c.include=function(b){var a,c,d;if(null!=
b&&"object"===typeof b){for(a in b)c=b[a],"included"!==a&&"extended"!==a&&(this.prototype[a]=c);return null!=(d=b.included)?d.call(this):void 0}};c.connect=function(b){if("function"===typeof b){if(!b.pluginName)throw Error("Module.connect: cannot connect plugin without pluginName");b.prototype._connected=!0;this._connectedClasses||(this._connectedClasses=[]);this._connectedClasses.push(b);if(b.pluginName)return this[b.pluginName]=b}};c.prototype.opts={};c.prototype._init=function(){};c.prototype.on=
function(){var b,a;b=1<=arguments.length?d.call(arguments,0):[];(a=e(this)).on.apply(a,b);return this};c.prototype.one=function(){var b,a;b=1<=arguments.length?d.call(arguments,0):[];(a=e(this)).one.apply(a,b);return this};c.prototype.off=function(){var b,a;b=1<=arguments.length?d.call(arguments,0):[];(a=e(this)).off.apply(a,b);return this};c.prototype.trigger=function(){var b,a;b=1<=arguments.length?d.call(arguments,0):[];(a=e(this)).trigger.apply(a,b);return this};c.prototype.triggerHandler=function(){var b,
a;b=1<=arguments.length?d.call(arguments,0):[];return(a=e(this)).triggerHandler.apply(a,b)};c.prototype._t=function(){var b,a;b=1<=arguments.length?d.call(arguments,0):[];return(a=this.constructor)._t.apply(a,b)};c._t=function(){var b,a,c;a=arguments[0];b=2<=arguments.length?d.call(arguments,1):[];a=(null!=(c=this.i18n[this.locale])?c[a]:void 0)||"";if(!(0<b.length))return a;a=a.replace(/([^%]|^)%(?:(\d+)\$)?s/g,function(a,c,d){return d?c+b[parseInt(d)-1]:c+b.shift()});return a.replace(/%%s/g,"%s")};
c.i18n={"zh-CN":{}};c.locale="zh-CN";return c}()});


(function(e,f){"function"===typeof define&&define.amd?define("simple-hotkeys",["jquery","simple-module"],function(g,h){return e.hotkeys=f(g,h)}):"object"===typeof exports?module.exports=f(require("jquery"),require("simplemodule")):(e.simple=e.simple||{},e.simple.hotkeys=f(jQuery,SimpleModule))})(this,function(e,f){var g,h=function(c,a){function d(){this.constructor=c}for(var k in a)l.call(a,k)&&(c[k]=a[k]);d.prototype=a.prototype;c.prototype=new d;c.__super__=a.prototype;return c},l={}.hasOwnProperty;
g=function(c){function a(){return a.__super__.constructor.apply(this,arguments)}h(a,c);a.count=0;a.keyNameMap={8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",91:"Meta",93:"Meta",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",
77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"Multiply",107:"Add",109:"Subtract",110:"Decimal",111:"Divide",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",124:"F13",125:"F14",126:"F15",127:"F16",128:"F17",129:"F18",130:"F19",131:"F20",132:"F21",133:"F22",134:"F23",135:"F24",59:";",61:"=",186:";",187:"=",
188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};a.aliases={escape:"esc","delete":"del","return":"enter",ctrl:"control",space:"spacebar",ins:"insert",cmd:"meta",command:"meta",wins:"meta",windows:"meta"};a.normalize=function(d){var a,b,c,e;d=d.toLowerCase().replace(/\s+/gi,"").split("+");a=b=0;for(e=d.length;b<e;a=++b)c=d[a],d[a]=this.aliases[c]||c;a=d.pop();d.sort().push(a);return d.join("_")};a.prototype.opts={el:document};a.prototype._init=function(){this.id=++this.constructor.count;
this._map={};this._delegate="string"===typeof this.opts.el?document:this.opts.el;return e(this._delegate).on("keydown.simple-hotkeys-"+this.id,this.opts.el,function(d){return function(a){var b;return null!=(b=d._getHander(a))?b.call(d,a):void 0}}(this))};a.prototype._getHander=function(a){var c,b;if(c=this.constructor.keyNameMap[a.which])return b="",a.altKey&&(b+="alt_"),a.ctrlKey&&(b+="control_"),a.metaKey&&(b+="meta_"),a.shiftKey&&(b+="shift_"),b+=c.toLowerCase(),this._map[b]};a.prototype.respondTo=
function(a){return"string"===typeof a?null!=this._map[this.constructor.normalize(a)]:null!=this._getHander(a)};a.prototype.add=function(a,c){this._map[this.constructor.normalize(a)]=c;return this};a.prototype.remove=function(a){delete this._map[this.constructor.normalize(a)];return this};a.prototype.destroy=function(){e(this._delegate).off(".simple-hotkeys-"+this.id);this._map={};return this};return a}(f);return function(c){return new g(c)}});


(function(d,g){"function"===typeof define&&define.amd?define("simple-uploader",["jquery","simple-module"],function(k,l){return d.uploader=g(k,l)}):"object"===typeof exports?module.exports=g(require("jquery"),require("simplemodule")):(d.simple=d.simple||{},d.simple.uploader=g(jQuery,SimpleModule))})(this,function(d,g){var k,l=function(d,b){function a(){this.constructor=d}for(var c in b)m.call(b,c)&&(d[c]=b[c]);a.prototype=b.prototype;d.prototype=new a;d.__super__=b.prototype;return d},m={}.hasOwnProperty;
k=function(g){function b(){return b.__super__.constructor.apply(this,arguments)}l(b,g);b.count=0;b.prototype.opts={url:"",params:null,fileKey:"upload_file",connectionCount:3};b.prototype._init=function(){this.files=[];this.queue=[];this.id=++b.count;this.on("uploadcomplete",function(a){return function(c,f){a.files.splice(d.inArray(f,a.files),1);return 0<a.queue.length&&a.files.length<a.opts.connectionCount?a.upload(a.queue.shift()):a.uploading=!1}}(this));return d(window).on("beforeunload.uploader-"+
this.id,function(a){return function(c){if(a.uploading)return c.originalEvent.returnValue=a._t("leaveConfirm"),a._t("leaveConfirm")}}(this))};b.prototype.generateId=function(){var a;a=0;return function(){return a+=1}}();b.prototype.upload=function(a,c){var f,e,b;null==c&&(c={});if(null!=a){if(d.isArray(a)||a instanceof FileList)for(e=0,b=a.length;e<b;e++)f=a[e],this.upload(f,c);else if(d(a).is("input:file")){if(f=d(a).attr("name"))c.fileKey=f;this.upload(d.makeArray(d(a)[0].files),c)}else a.id&&a.obj||
(a=this.getFile(a));if(a&&a.obj)if(d.extend(a,c),this.files.length>=this.opts.connectionCount)this.queue.push(a);else if(!1!==this.triggerHandler("beforeupload",[a]))return this.files.push(a),this._xhrUpload(a),this.uploading=!0}};b.prototype.getFile=function(a){var c,d,b;if(a instanceof window.File||a instanceof window.Blob)c=null!=(d=a.fileName)?d:a.name;else return null;return{id:this.generateId(),url:this.opts.url,params:this.opts.params,fileKey:this.opts.fileKey,name:c,size:null!=(b=a.fileSize)?
b:a.size,ext:c?c.split(".").pop().toLowerCase():"",obj:a}};b.prototype._xhrUpload=function(a){var c,b,e,h;c=new FormData;c.append(a.fileKey,a.obj);c.append("original_filename",a.name);if(a.params)for(b in e=a.params,e)h=e[b],c.append(b,h);return a.xhr=d.ajax({url:a.url,data:c,processData:!1,contentType:!1,type:"POST",headers:{"X-File-Name":encodeURIComponent(a.name)},xhr:function(){var a;if(a=d.ajaxSettings.xhr())a.upload.onprogress=function(a){return function(c){return a.progress(c)}}(this);return a},
progress:function(c){return function(b){if(b.lengthComputable)return c.trigger("uploadprogress",[a,b.loaded,b.total])}}(this),error:function(c){return function(b,d,e){return c.trigger("uploaderror",[a,b,d])}}(this),success:function(c){return function(b){c.trigger("uploadprogress",[a,a.size,a.size]);c.trigger("uploadsuccess",[a,b]);return d(document).trigger("uploadsuccess",[a,b,c])}}(this),complete:function(c){return function(b,d){return c.trigger("uploadcomplete",[a,b.responseText])}}(this)})};b.prototype.cancel=
function(a){var c,b,d,h;if(!a.id)for(h=this.files,b=0,d=h.length;b<d;b++)if(c=h[b],c.id===1*a){a=c;break}this.trigger("uploadcancel",[a]);a.xhr&&a.xhr.abort();return a.xhr=null};b.prototype.readImageFile=function(a,c){var b,e;if(d.isFunction(c))return e=new Image,e.onload=function(){return c(e)},e.onerror=function(){return c()},window.FileReader&&FileReader.prototype.readAsDataURL&&/^image/.test(a.type)?(b=new FileReader,b.onload=function(a){return e.src=a.target.result},b.readAsDataURL(a)):c()};
b.prototype.destroy=function(){var a,b,f,e;this.queue.length=0;e=this.files;b=0;for(f=e.length;b<f;b++)a=e[b],this.cancel(a);d(window).off(".uploader-"+this.id);return d(document).off(".uploader-"+this.id)};b.i18n={"zh-CN":{leaveConfirm:"\u6b63\u5728\u4e0a\u4f20\u6587\u4ef6\uff0c\u5982\u679c\u79bb\u5f00\u4e0a\u4f20\u4f1a\u81ea\u52a8\u53d6\u6d88"}};b.locale="zh-CN";return b}(g);return function(d){return new k(d)}});


(function(g,q){"function"===typeof define&&define.amd?define("simditor",["jquery","simple-module","simple-hotkeys","simple-uploader"],function(y,z,u,s){return g.Simditor=q(y,z,u,s)}):"object"===typeof exports?module.exports=q(require("jquery"),require("simple-module"),require("simple-hotkeys"),require("simple-uploader")):g.Simditor=q(jQuery,SimpleModule,simple.hotkeys,simple.uploader)})(this,function(g,q,y,z){var u,s,A,B,C,D,E,F,G,H,w,I,t,J,K,L,p=function(g,b){function a(){this.constructor=g}for(var f in b)M.call(b,
f)&&(g[f]=b[f]);a.prototype=b.prototype;g.prototype=new a;g.__super__=b.prototype;return g},M={}.hasOwnProperty,x=[].indexOf||function(g){for(var b=0,a=this.length;b<a;b++)if(b in this&&this[b]===g)return b;return-1},v=[].slice;I=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.pluginName="Selection";b.prototype._range=null;b.prototype._startNodes=null;b.prototype._endNodes=null;b.prototype._containerNode=null;b.prototype._nodes=null;b.prototype._blockNodes=null;
b.prototype._rootNodes=null;b.prototype._init=function(){this.editor=this._module;this._selection=document.getSelection();this.editor.on("selectionchanged",function(a){return function(f){a.reset();return a._range=a._selection.getRangeAt(0)}}(this));return this.editor.on("blur",function(a){return function(f){return a.reset()}}(this))};b.prototype.reset=function(){return this._rootNodes=this._blockNodes=this._nodes=this._containerNode=this._endNodes=this._startNodes=this._range=null};b.prototype.clear=
function(){try{this._selection.removeAllRanges()}catch(a){}return this.reset()};b.prototype.range=function(a){a?(this.clear(),this._selection.addRange(a),this._range=a,a=this.editor.util.browser.firefox||this.editor.util.browser.msie,!this.editor.inputManager.focused&&a&&this.editor.body.focus()):!this._range&&this.editor.inputManager.focused&&this._selection.rangeCount&&(this._range=this._selection.getRangeAt(0));return this._range};b.prototype.startNodes=function(){this._range&&(this._startNodes||
(this._startNodes=function(a){return function(){var f;f=g(a._range.startContainer).parentsUntil(a.editor.body).get();f.unshift(a._range.startContainer);return g(f)}}(this)()));return this._startNodes};b.prototype.endNodes=function(){var a;this._range&&(this._endNodes||(this._endNodes=this._range.collapsed?this.startNodes():(a=g(this._range.endContainer).parentsUntil(this.editor.body).get(),a.unshift(this._range.endContainer),g(a))));return this._endNodes};b.prototype.containerNode=function(){this._range&&
(this._containerNode||(this._containerNode=g(this._range.commonAncestorContainer)));return this._containerNode};b.prototype.nodes=function(){this._range&&(this._nodes||(this._nodes=function(a){return function(){var f;f=[];a.startNodes().first().is(a.endNodes().first())?f=a.startNodes().get():(a.startNodes().each(function(c,b){var e,h,k;h=g(b);if(-1<a.endNodes().index(h))return f.push(b);if(h.parent().is(a.editor.body)||-1<(k=a.endNodes().index(h.parent())))return e=k&&-1<k?a.endNodes().eq(k-1):a.endNodes().last(),
k=h.parent().contents(),h=k.index(h),e=k.index(e),g.merge(f,k.slice(h,e).get());k=h.parent().contents();e=k.index(h);return g.merge(f,k.slice(e).get())}),a.endNodes().each(function(c,b){var e,h;e=g(b);if(e.parent().is(a.editor.body)||-1<a.startNodes().index(e.parent()))return f.push(b),!1;h=e.parent().contents();e=h.index(e);return g.merge(f,h.slice(0,e+1))}));return g(g.unique(f))}}(this)()));return this._nodes};b.prototype.blockNodes=function(){if(this._range)return this._blockNodes||(this._blockNodes=
function(a){return function(){return a.nodes().filter(function(f,c){return a.editor.util.isBlockNode(c)})}}(this)()),this._blockNodes};b.prototype.rootNodes=function(){if(this._range)return this._rootNodes||(this._rootNodes=function(a){return function(){return a.nodes().filter(function(f,c){var b;b=g(c).parent();return b.is(a.editor.body)||b.is("blockquote")})}}(this)()),this._rootNodes};b.prototype.rangeAtEndOf=function(a,f){var c,b,e,h,k;null==f&&(f=this.range());if(f&&f.collapsed){a=g(a)[0];e=
f.endContainer;c=this.editor.util.getNodeLength(e);b=f.endOffset===c-1;h=g(e).contents().last().is("br");c=f.endOffset===c;if(!(b&&h||c))return!1;if(a===e)return!0;if(!g.contains(a,e))return!1;k=!0;g(e).parentsUntil(a).addBack().each(function(a,f){var c,b;c=g(f).parent().contents().filter(function(){return!(this!==f&&3===this.nodeType&&!this.nodeValue)}).last();b=c.get(0)===f;c=c.is("br")&&c.prev().get(0)===f;if(!b&&!c)return k=!1});return k}};b.prototype.rangeAtStartOf=function(a,f){var c,b;null==
f&&(f=this.range());if(f&&f.collapsed){a=g(a)[0];b=f.startContainer;if(0!==f.startOffset)return!1;if(a===b)return!0;if(!g.contains(a,b))return!1;c=!0;g(b).parentsUntil(a).addBack().each(function(a,f){if(g(f).parent().contents().filter(function(){return!(this!==f&&3===this.nodeType&&!this.nodeValue)}).first().get(0)!==f)return c=!1});return c}};b.prototype.insertNode=function(a,f){null==f&&(f=this.range());if(f)return a=g(a)[0],f.insertNode(a),this.setRangeAfter(a,f)};b.prototype.setRangeAfter=function(a,
f){null==f&&(f=this.range());if(null!=f)return a=g(a)[0],f.setEndAfter(a),f.collapse(!1),this.range(f)};b.prototype.setRangeBefore=function(a,f){null==f&&(f=this.range());if(null!=f)return a=g(a)[0],f.setEndBefore(a),f.collapse(!1),this.range(f)};b.prototype.setRangeAtStartOf=function(a,f){null==f&&(f=this.range());a=g(a).get(0);f.setEnd(a,0);f.collapse(!1);return this.range(f)};b.prototype.setRangeAtEndOf=function(a,f){var c,b,e;null==f&&(f=this.range());c=g(a);a=c[0];c.is("pre")?(c=c.contents(),
0<c.length?(c=c.last(),e=c.text(),b=this.editor.util.getNodeLength(c[0]),"\n"===e.charAt(e.length-1)?f.setEnd(c[0],b-1):f.setEnd(c[0],b)):f.setEnd(a,0)):(b=this.editor.util.getNodeLength(a),3!==a.nodeType&&0<b&&(c=g(a).contents().last(),c.is("br")?b-=1:3!==c[0].nodeType&&this.editor.util.isEmptyNode(c)&&(c.append(this.editor.util.phBr),a=c[0],b=0)),f.setEnd(a,b));f.collapse(!1);return this.range(f)};b.prototype.deleteRangeContents=function(a){var f,c;null==a&&(a=this.range());c=a.cloneRange();f=a.cloneRange();
c.collapse(!0);f.collapse(!1);c=this.rangeAtStartOf(this.editor.body,c);f=this.rangeAtEndOf(this.editor.body,f);!a.collapsed&&c&&f?(this.editor.body.empty(),a.setStart(this.editor.body[0],0),a.collapse(!0),this.range(a)):a.deleteContents();return a};b.prototype.breakBlockEl=function(a,f){var c;null==f&&(f=this.range());c=g(a);if(!f.collapsed)return c;f.setStartBefore(c.get(0));return f.collapsed?c:c.before(f.extractContents())};b.prototype.save=function(a){var f,c,b;null==a&&(a=this.range());if(!this._selectionSaved)return c=
a.cloneRange(),c.collapse(!1),b=g("<span/>").addClass("simditor-caret-start"),f=g("<span/>").addClass("simditor-caret-end"),c.insertNode(f[0]),a.insertNode(b[0]),this.clear(),this._selectionSaved=!0};b.prototype.restore=function(){var a,f,c,b,e,h,g;if(!this._selectionSaved)return!1;e=this.editor.body.find(".simditor-caret-start");a=this.editor.body.find(".simditor-caret-end");e.length&&a.length?(h=e.parent(),g=h.contents().index(e),f=a.parent(),c=f.contents().index(a),h[0]===f[0]&&(c-=1),b=document.createRange(),
b.setStart(h.get(0),g),b.setEnd(f.get(0),c),e.remove(),a.remove(),this.range(b)):(e.remove(),a.remove());this._selectionSaved=!1;return b};return b}(q);C=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.pluginName="Formatter";b.prototype.opts={allowedTags:[],allowedAttributes:{},allowedStyles:{}};b.prototype._init=function(){this.editor=this._module;this._allowedTags=g.merge("br span a img b strong i strike u font p ul ol li blockquote pre code h1 h2 h3 h4 hr".split(" "),
this.opts.allowedTags);this._allowedAttributes=g.extend({img:["src","alt","width","height","data-non-image"],a:["href","target"],font:["color"],code:["class"]},this.opts.allowedAttributes);this._allowedStyles=g.extend({span:["color","font-size"],b:["color"],i:["color"],strong:["color"],strike:["color"],u:["color"],p:["margin-left","text-align"],h1:["margin-left","text-align"],h2:["margin-left","text-align"],h3:["margin-left","text-align"],h4:["margin-left","text-align"]},this.opts.allowedStyles);
return this.editor.body.on("click","a",function(a){return!1})};b.prototype.decorate=function(a){null==a&&(a=this.editor.body);this.editor.trigger("decorate",[a]);return a};b.prototype.undecorate=function(a){null==a&&(a=this.editor.body.clone());this.editor.trigger("undecorate",[a]);return a};b.prototype.autolink=function(a){var f,c,b,e,h,k,m,n,l,r,p;null==a&&(a=this.editor.body);m=[];b=function(f){return f.contents().each(function(f,c){var e,h;e=g(c);if(!e.is("a")&&!e.closest("a, pre",a).length){if(!e.is("iframe")&&
e.contents().length)return b(e);if((h=e.text())&&/https?:\/\/|www\./ig.test(h))return m.push(e)}})};b(a);n=/(https?:\/\/|www\.)[\w\-\.\?&=\/#%:,@\!\+]+/ig;e=0;for(k=m.length;e<k;e++){c=m[e];r=c.text();l=[];f=null;for(h=0;null!==(f=n.exec(r));)h=r.substring(h,f.index),l.push(document.createTextNode(h)),h=n.lastIndex,p=/^(http(s)?:\/\/|\/)/.test(f[0])?f[0]:"http://"+f[0],f=g('<a href="'+p+'" rel="nofollow"></a>').text(f[0]),l.push(f[0]);l.push(document.createTextNode(r.substring(h)));c.replaceWith(g(l))}return a};
b.prototype.format=function(a){var f,c,b,e,h,k;null==a&&(a=this.editor.body);if(a.is(":empty"))return a.append("<p>"+this.editor.util.phBr+"</p>"),a;h=a.contents();f=0;for(b=h.length;f<b;f++)e=h[f],this.cleanNode(e,!0);k=a.contents();b=0;for(e=k.length;b<e;b++)if(h=k[b],f=g(h),f.is("br"))"undefined"!==typeof c&&null!==c&&(c=null),f.remove();else if(this.editor.util.isBlockNode(h))f.is("li")?(c&&c.is("ul, ol")||(c=g("<ul/>").insertBefore(h)),c.append(h)):c=null;else{if(!c||c.is("ul, ol"))c=g("<p/>").insertBefore(h);
c.append(h);this.editor.util.isEmptyNode(c)&&c.append(this.editor.util.phBr)}return a};b.prototype.cleanNode=function(a,f){var c,b,e,h,k,m,n,l,r;e=g(a);if(0<e.length)if(3===e[0].nodeType)(m=e.text().replace(/(\r\n|\n|\r)/gm,""))?(m=document.createTextNode(m),e.replaceWith(m)):e.remove();else{m=e.is("iframe")?null:e.contents();n=this.editor.util.isDecoratedNode(e);if(e.is(this._allowedTags.join(","))||n){if(e.is("a")&&0<(b=e.find("img")).length&&(e.replaceWith(b),e=b,m=null),e.is("td")&&0<(c=e.find(this.editor.util.blockNodes.join(","))).length&&
(c.each(function(a){return function(a,f){return g(f).contents().unwrap()}}(this)),m=e.contents()),e.is("img")&&e.hasClass("uploading")&&e.remove(),!n){c=this._allowedAttributes[e[0].tagName.toLowerCase()];r=g.makeArray(e[0].attributes);n=0;for(l=r.length;n<l;n++)b=r[n],"style"!==b.name&&(null!=c&&(k=b.name,0<=x.call(c,k))||e.removeAttr(b.name));this._cleanNodeStyles(e);e.is("span")&&0===e[0].attributes.length&&e.contents().first().unwrap()}}else 1!==e[0].nodeType||e.is(":empty")?(e.remove(),m=null):
e.is("div, article, dl, header, footer, tr")?(e.append("<br/>"),m.first().unwrap()):e.is("table")?(h=g("<p/>"),e.find("tr").each(function(a,f){return h.append(g(f).text()+"<br/>")}),e.replaceWith(h),m=null):e.is("thead, tfoot")?(e.remove(),m=null):e.is("th")?(k=g("<td/>").append(e.contents()),e.replaceWith(k)):m.first().unwrap();if(f&&null!=m&&!e.is("pre"))for(e=0,k=m.length;e<k;e++)c=m[e],this.cleanNode(c,!0);return null}};b.prototype._cleanNodeStyles=function(a){var f,c,b,e,h,k,m;if(c=a.attr("style")){a.removeAttr("style");
f=this._allowedStyles[a[0].tagName.toLowerCase()];if(!(f&&0<f.length))return a;m={};h=c.split(";");c=0;for(b=h.length;c<b;c++)if(e=h[c],e=g.trim(e),e=e.split(":"),e.length=2,k=e[0],0<=x.call(f,k))m[g.trim(e[0])]=g.trim(e[1]);0<Object.keys(m).length&&a.css(m);return a}};b.prototype.clearHtml=function(a,f){var c,b;null==f&&(f=!0);c=g("<div/>").append(a).contents();b="";c.each(function(a){return function(h,k){var m,n;if(3===k.nodeType)return b+=k.nodeValue;if(1===k.nodeType&&(m=g(k),(n=m.is("iframe")?
null:m.contents())&&0<n.length&&(b+=a.clearHtml(n)),f&&h<c.length-1&&m.is("br, p, div, li,tr, pre, address, artticle, aside, dl, figcaption, footer, h1, h2,h3, h4, header")))return b+="\n"}}(this));return b};b.prototype.beautify=function(a){var f;f=function(a){return!!(a.is("p")&&!a.text()&&1>a.children(":not(br)").length)};return a.each(function(a,b){var e;e=g(b);(e.is(':not(img, br, col, td, hr, [class^="simditor-"]):empty')||f(e))&&e.remove();return e.find(':not(img, br, col, td, hr, [class^="simditor-"]):empty').remove()})};
return b}(q);F=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.pluginName="InputManager";b.prototype._modifierKeys=[16,17,18,91,93,224];b.prototype._arrowKeys=[37,38,39,40];b.prototype._init=function(){var a;this.editor=this._module;this.throttledValueChanged=this.editor.util.throttle(function(a){return function(c){return setTimeout(function(){return a.editor.trigger("valuechanged",c)},10)}}(this),300);this.throttledSelectionChanged=this.editor.util.throttle(function(a){return function(){return a.editor.trigger("selectionchanged")}}(this),
50);g(document).on("selectionchange.simditor"+this.editor.id,function(a){return function(c){var b;if(a.focused&&!a.editor.clipboard.pasting)return b=function(){a._selectionTimer&&(clearTimeout(a._selectionTimer),a._selectionTimer=null);return 0<a.editor.selection._selection.rangeCount?a.throttledSelectionChanged():a._selectionTimer=setTimeout(function(){a._selectionTimer=null;if(a.focused)return b()},10)},b()}}(this));this.editor.on("valuechanged",function(a){return function(){var c;a.lastCaretPosition=
null;c=a.editor.body.children().filter(function(c,b){return a.editor.util.isBlockNode(b)});a.focused&&0===c.length&&(a.editor.selection.save(),a.editor.formatter.format(),a.editor.selection.restore());a.editor.body.find("hr, pre, .simditor-table").each(function(c,b){var h,k;h=g(b);if(h.parent().is("blockquote")||h.parent()[0]===a.editor.body[0])if(k=!1,0===h.next().length&&(g("<p/>").append(a.editor.util.phBr).insertAfter(h),k=!0),0===h.prev().length&&(g("<p/>").append(a.editor.util.phBr).insertBefore(h),
k=!0),k)return a.throttledValueChanged()});a.editor.body.find("pre:empty").append(a.editor.util.phBr);if(!a.editor.util.support.onselectionchange&&a.focused)return a.throttledSelectionChanged()}}(this));this.editor.body.on("keydown",g.proxy(this._onKeyDown,this)).on("keypress",g.proxy(this._onKeyPress,this)).on("keyup",g.proxy(this._onKeyUp,this)).on("mouseup",g.proxy(this._onMouseUp,this)).on("focus",g.proxy(this._onFocus,this)).on("blur",g.proxy(this._onBlur,this)).on("drop",g.proxy(this._onDrop,
this)).on("input",g.proxy(this._onInput,this));this.editor.util.browser.firefox&&(this.editor.hotkeys.add("cmd+left",function(a){return function(c){c.preventDefault();a.editor.selection._selection.modify("move","backward","lineboundary");return!1}}(this)),this.editor.hotkeys.add("cmd+right",function(a){return function(c){c.preventDefault();a.editor.selection._selection.modify("move","forward","lineboundary");return!1}}(this)),a=this.editor.util.os.mac?"cmd+a":"ctrl+a",this.editor.hotkeys.add(a,function(a){return function(c){var b,
e;b=a.editor.body.children();if(0<b.length)return c=b.first().get(0),b=b.last().get(0),e=document.createRange(),e.setStart(c,0),e.setEnd(b,a.editor.util.getNodeLength(b)),a.editor.selection.range(e),!1}}(this)));return this.editor.hotkeys.add(this.editor.util.os.mac?"cmd+enter":"ctrl+enter",function(a){return function(b){a.editor.el.closest("form").find("button:submit").click();return!1}}(this))};b.prototype._onFocus=function(a){if(!this.editor.clipboard.pasting)return this.editor.el.addClass("focus").removeClass("error"),
this.focused=!0,setTimeout(function(a){return function(){var b,d;d=a.editor.selection._selection.getRangeAt(0);d.startContainer===a.editor.body[0]&&(a.lastCaretPosition?a.editor.undoManager.caretPosition(a.lastCaretPosition):(b=a.editor.body.children().first(),d=document.createRange(),a.editor.selection.setRangeAtStartOf(b,d)));a.lastCaretPosition=null;a.editor.triggerHandler("focus");if(!a.editor.util.support.onselectionchange)return a.throttledSelectionChanged()}}(this),0)};b.prototype._onBlur=
function(a){var f;if(!this.editor.clipboard.pasting)return this.editor.el.removeClass("focus"),this.editor.sync(),this.focused=!1,this.lastCaretPosition=null!=(f=this.editor.undoManager.currentState())?f.caret:void 0,this.editor.triggerHandler("blur")};b.prototype._onMouseUp=function(a){if(!this.editor.util.support.onselectionchange)return this.throttledSelectionChanged()};b.prototype._onKeyDown=function(a){var f,b;if(!1===this.editor.triggerHandler(a))return!1;if(!this.editor.hotkeys.respondTo(a)){if(this.editor.keystroke.respondTo(a))return this.throttledValueChanged(),
!1;if(!((f=a.which,0<=x.call(this._modifierKeys,f))||(b=a.which,0<=x.call(this._arrowKeys,b))||this.editor.util.metaKey(a)&&86===a.which))return this.editor.util.support.oninput||this.throttledValueChanged(["typing"]),null}};b.prototype._onKeyPress=function(a){if(!1===this.editor.triggerHandler(a))return!1};b.prototype._onKeyUp=function(a){var f;if(!1===this.editor.triggerHandler(a))return!1;!this.editor.util.support.onselectionchange&&(f=a.which,0<=x.call(this._arrowKeys,f))?this.throttledValueChanged():
8!==a.which&&46!==a.which||!this.editor.util.isEmptyNode(this.editor.body)||(this.editor.body.empty(),a=g("<p/>").append(this.editor.util.phBr).appendTo(this.editor.body),this.editor.selection.setRangeAtStartOf(a))};b.prototype._onDrop=function(a){return!1===this.editor.triggerHandler(a)?!1:this.throttledValueChanged()};b.prototype._onInput=function(a){return this.throttledValueChanged(["oninput"])};return b}(q);G=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);
b.pluginName="Keystroke";b.prototype._init=function(){this.editor=this._module;this._keystrokeHandlers={};return this._initKeystrokeHandlers()};b.prototype.add=function(a,f,b){a=a.toLowerCase();a=this.editor.hotkeys.constructor.aliases[a]||a;this._keystrokeHandlers[a]||(this._keystrokeHandlers[a]={});return this._keystrokeHandlers[a][f]=b};b.prototype.respondTo=function(a){var f,b,d,e;if((b=null!=(d=this.editor.hotkeys.constructor.keyNameMap[a.which])?d.toLowerCase():void 0)&&b in this._keystrokeHandlers&&
((e="function"===typeof(f=this._keystrokeHandlers[b])["*"]?f["*"](a):void 0)||this.editor.selection.startNodes().each(function(f){return function(d,m){var n,l;if(m.nodeType===Node.ELEMENT_NODE&&(n=null!=(l=f._keystrokeHandlers[b])?l[m.tagName.toLowerCase()]:void 0,e="function"===typeof n?n(a,g(m)):void 0,!0===e||!1===e))return!1}}(this)),e))return!0};b.prototype._initKeystrokeHandlers=function(){var a;this.editor.util.browser.safari&&this.add("enter","*",function(a){return function(b){var d;if(b.shiftKey&&
(b=a.editor.selection.blockNodes().last(),!b.is("pre")))return d=g("<br/>"),a.editor.selection.rangeAtEndOf(b)?(a.editor.selection.insertNode(d),a.editor.selection.insertNode(g("<br/>")),a.editor.selection.setRangeBefore(d)):a.editor.selection.insertNode(d),!0}}(this));if(this.editor.util.browser.webkit||this.editor.util.browser.msie)a=function(a){return function(b,d){var e;if(a.editor.selection.rangeAtEndOf(d))return e=g("<p/>").append(a.editor.util.phBr).insertAfter(d),a.editor.selection.setRangeAtStartOf(e),
!0}}(this),this.add("enter","h1",a),this.add("enter","h2",a),this.add("enter","h3",a),this.add("enter","h4",a),this.add("enter","h5",a),this.add("enter","h6",a);this.add("backspace","*",function(a){return function(b){var d;d=a.editor.selection.rootNodes().first();b=d.prev();if(b.is("hr")&&a.editor.selection.rangeAtStartOf(d))return a.editor.selection.save(),b.remove(),a.editor.selection.restore(),!0;b=a.editor.selection.blockNodes().last();if(a.editor.util.browser.webkit&&a.editor.selection.rangeAtStartOf(b))return a.editor.selection.save(),
a.editor.formatter.cleanNode(b,!0),a.editor.selection.restore(),null}}(this));this.add("enter","li",function(a){return function(b,d){var e,h,k;e=d.clone();e.find("ul, ol").remove();if(a.editor.util.isEmptyNode(e)&&d.is(a.editor.selection.blockNodes().last())){e=d.parent();if(0<d.next("li").length){if(!a.editor.util.isEmptyNode(d))return;0<e.parent("li").length?(h=g("<li/>").append(a.editor.util.phBr).insertAfter(e.parent("li")),k=g("<"+e[0].tagName+"/>").append(d.nextAll("li")),h.append(k)):(h=g("<p/>").append(a.editor.util.phBr).insertAfter(e),
k=g("<"+e[0].tagName+"/>").append(d.nextAll("li")),h.after(k))}else 0<e.parent("li").length?(h=g("<li/>").insertAfter(e.parent("li")),0<d.contents().length?h.append(d.contents()):h.append(a.editor.util.phBr)):(h=g("<p/>").append(a.editor.util.phBr).insertAfter(e),0<d.children("ul, ol").length&&h.after(d.children("ul, ol")));d.prev("li").length?d.remove():e.remove();a.editor.selection.setRangeAtStartOf(h);return!0}}}(this));this.add("enter","pre",function(a){return function(b,d){var e,h;b.preventDefault();
if(b.shiftKey)return e=g("<p/>").append(a.editor.util.phBr).insertAfter(d),a.editor.selection.setRangeAtStartOf(e),!0;h=a.editor.selection.range();h.deleteContents();!a.editor.util.browser.msie&&a.editor.selection.rangeAtEndOf(d)?(e=document.createTextNode("\n\n"),h.insertNode(e),h.setEnd(e,1)):(e=document.createTextNode("\n"),h.insertNode(e),h.setStartAfter(e));h.collapse(!1);a.editor.selection.range(h);return!0}}(this));this.add("enter","blockquote",function(a){return function(b,d){var e,h;e=a.editor.selection.blockNodes().last();
if(e.is("p")&&!e.next().length&&a.editor.util.isEmptyNode(e))return d.after(e),h=document.createRange(),a.editor.selection.setRangeAtStartOf(e,h),!0}}(this));this.add("backspace","li",function(a){return function(b,d){var e,h,k,m,n,l;e=d.children("ul, ol");h=d.prev("li");if(!(0<e.length&&0<h.length))return!1;l="";m=null;d.contents().each(function(a,f){if(1===f.nodeType&&/UL|OL/.test(f.nodeName))return!1;if(1!==f.nodeType||!/BR/.test(f.nodeName))return 3===f.nodeType&&f.nodeValue?l+=f.nodeValue:1===
f.nodeType&&(l+=g(f).text()),m=g(f)});k=a.editor.util.browser.firefox&&!m.next("br").length;if(m&&1===l.length&&k)return e=g(a.editor.util.phBr).insertAfter(m),m.remove(),a.editor.selection.setRangeBefore(e),!0;if(0<l.length)return!1;n=document.createRange();k=h.children("ul, ol");0<k.length?(h=g("<li/>").append(a.editor.util.phBr).appendTo(k),k.append(e.children("li")),d.remove(),a.editor.selection.setRangeAtEndOf(h,n)):(a.editor.selection.setRangeAtEndOf(h,n),h.append(e),d.remove(),a.editor.selection.range(n));
return!0}}(this));this.add("backspace","pre",function(a){return function(b,d){var e,h;if(a.editor.selection.rangeAtStartOf(d))return e=d.html().replace("\n","<br/>")||a.editor.util.phBr,e=g("<p/>").append(e).insertAfter(d),d.remove(),h=document.createRange(),a.editor.selection.setRangeAtStartOf(e,h),!0}}(this));return this.add("backspace","blockquote",function(a){return function(b,d){var e,h;if(a.editor.selection.rangeAtStartOf(d))return e=d.children().first().unwrap(),h=document.createRange(),a.editor.selection.setRangeAtStartOf(e,
h),!0}}(this))};return b}(q);K=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.pluginName="UndoManager";b.prototype._index=-1;b.prototype._capacity=20;b.prototype._startPosition=null;b.prototype._endPosition=null;b.prototype._init=function(){var a,f;this.editor=this._module;this._stack=[];this.editor.util.os.mac?(f="cmd+z",a="shift+cmd+z"):this.editor.util.os.win?(f="ctrl+z",a="ctrl+y"):(f="ctrl+z",a="shift+ctrl+z");this.editor.hotkeys.add(f,function(a){return function(f){f.preventDefault();
a.undo();return!1}}(this));this.editor.hotkeys.add(a,function(a){return function(f){f.preventDefault();a.redo();return!1}}(this));this.throttledPushState=this.editor.util.throttle(function(a){return function(){return a._pushUndoState()}}(this),2E3);this.editor.on("valuechanged",function(a){return function(f,b){if("undo"!==b&&"redo"!==b)return a.throttledPushState()}}(this));this.editor.on("selectionchanged",function(a){return function(f){return a.resetCaretPosition()}}(this));this.editor.on("focus",
function(a){return function(f){if(0===a._stack.length)return a._pushUndoState()}}(this));return this.editor.on("blur",function(a){return function(f){return a.resetCaretPosition()}}(this))};b.prototype.resetCaretPosition=function(){return this._endPosition=this._startPosition=null};b.prototype.startPosition=function(){this.editor.selection._range&&(this._startPosition||(this._startPosition=this._getPosition("start")));return this._startPosition};b.prototype.endPosition=function(){this.editor.selection._range&&
(this._endPosition||(this._endPosition=function(a){return function(){return a.editor.selection.range().collapsed?a._startPosition:a._getPosition("end")}}(this)()));return this._endPosition};b.prototype._pushUndoState=function(){var a;if(!1!==this.editor.triggerHandler("pushundostate")&&(a=this.caretPosition(),a.start&&(this._index+=1,this._stack.length=this._index,this._stack.push({html:this.editor.body.html(),caret:this.caretPosition()}),this._stack.length>this._capacity)))return this._stack.shift(),
this._index-=1};b.prototype.currentState=function(){return this._stack.length&&-1<this._index?this._stack[this._index]:null};b.prototype.undo=function(){var a;if(!(1>this._index||2>this._stack.length))return this.editor.hidePopover(),this._index-=1,a=this._stack[this._index],this.editor.body.html(a.html),this.caretPosition(a.caret),this.editor.body.find(".selected").removeClass("selected"),this.editor.sync(),this.editor.trigger("valuechanged",["undo"])};b.prototype.redo=function(){var a;if(!(0>this._index||
this._stack.length<this._index+2))return this.editor.hidePopover(),this._index+=1,a=this._stack[this._index],this.editor.body.html(a.html),this.caretPosition(a.caret),this.editor.body.find(".selected").removeClass("selected"),this.editor.sync(),this.editor.trigger("valuechanged",["redo"])};b.prototype.update=function(){var a,f;if(a=this.currentState())return f=this.editor.body.html(),a.html=f,a.caret=this.caretPosition()};b.prototype._getNodeOffset=function(a,f){var b,d,e;b=g.isNumeric(f)?g(a):g(a).parent();
e=0;d=!1;b.contents().each(function(b,c){if(a===c||f===b&&0===b)return!1;c.nodeType===Node.TEXT_NODE?!d&&0<c.nodeValue.length&&(e+=1,d=!0):(e+=1,d=!1);return f-1===b?!1:null});return e};b.prototype._getPosition=function(a){var f,b,d,e;null==a&&(a="start");b=this.editor.selection.range()[a+"Offset"];f=this.editor.selection[a+"Nodes"]();a=f.first()[0];if(a.nodeType===Node.TEXT_NODE){for(e=a.previousSibling;e&&e.nodeType===Node.TEXT_NODE;)a=e,b+=this.editor.util.getNodeLength(e),e=e.previousSibling;
f=f.get();f[0]=a;f=g(f)}else b=this._getNodeOffset(a,b);d=[b];f.each(function(a){return function(f,b){return d.unshift(a._getNodeOffset(b))}}(this));return d};b.prototype._getNodeByPosition=function(a){var f,b,d,e,h,k,m;h=this.editor.body[0];m=a.slice(0,a.length-1);b=d=0;for(e=m.length;d<e;b=++d){k=m[b];f=h.childNodes;if(k>f.length-1)if(b===a.length-2&&g(h).is("pre:empty"))f=document.createTextNode(""),h.appendChild(f),f=h.childNodes;else{h=null;break}h=f[k]}return h};b.prototype.caretPosition=function(a){var f,
b,d,e;if(!a)return b=this.editor.selection.range(),a=this.editor.inputManager.focused&&null!=b?{start:this.startPosition(),end:this.endPosition(),collapsed:b.collapsed}:{};if(a.start){d=this._getNodeByPosition(a.start);e=a.start[a.start.length-1];a.collapsed?(f=d,a=e):(f=this._getNodeByPosition(a.end),a=a.start[a.start.length-1]);if(d&&f)return b=document.createRange(),b.setStart(d,e),b.setEnd(f,a),this.editor.selection.range(b);"undefined"!==typeof console&&null!==console&&"function"===typeof console.warn&&
console.warn("simditor: invalid caret state")}};return b}(q);L=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.pluginName="Util";b.prototype._init=function(){this.editor=this._module;if(this.browser.msie&&11>this.browser.version)return this.phBr=""};b.prototype.phBr="<br/>";b.prototype.os=function(){var a;a={};/Mac/.test(navigator.appVersion)?a.mac=!0:/Linux/.test(navigator.appVersion)?a.linux=!0:/Win/.test(navigator.appVersion)?a.win=!0:/X11/.test(navigator.appVersion)&&
(a.unix=!0);/Mobi/.test(navigator.appVersion)&&(a.mobile=!0);return a}();b.prototype.browser=function(){var a,f,b,d,e,h,g,m,n,l,r;r=navigator.userAgent;d=/(msie|trident)/i.test(r);a=/chrome|crios/i.test(r);l=/safari/i.test(r)&&!a;b=/firefox/i.test(r);f=/edge/i.test(r);return d?{msie:!0,version:1*(null!=(e=r.match(/(msie |rv:)(\d+(\.\d+)?)/i))?e[2]:NaN)}:f?{edge:!0,webkit:!0,version:1*(null!=(h=r.match(/edge\/(\d+(\.\d+)?)/i))?h[1]:NaN)}:a?{webkit:!0,chrome:!0,version:1*(null!=(g=r.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i))?
g[1]:NaN)}:l?{webkit:!0,safari:!0,version:1*(null!=(m=r.match(/version\/(\d+(\.\d+)?)/i))?m[1]:NaN)}:b?{mozilla:!0,firefox:!0,version:1*(null!=(n=r.match(/firefox\/(\d+(\.\d+)?)/i))?n[1]:NaN)}:{}}();b.prototype.support=function(){var a;a:{var f;f=document.onselectionchange;if(void 0!==f)try{document.onselectionchange=0;a=null===document.onselectionchange;break a}catch(b){}finally{document.onselectionchange=f}a=!1}return{onselectionchange:a,oninput:!/(msie|trident)/i.test(navigator.userAgent)}}();
b.prototype.reflow=function(a){null==a&&(a=document);return g(a)[0].offsetHeight};b.prototype.metaKey=function(a){return/Mac/.test(navigator.userAgent)?a.metaKey:a.ctrlKey};b.prototype.isEmptyNode=function(a){a=g(a);return a.is(":empty")||!a.text()&&!a.find(":not(br, span, div)").length};b.prototype.isDecoratedNode=function(a){return g(a).is('[class^="simditor-"]')};b.prototype.blockNodes="div p ul ol li blockquote hr pre h1 h2 h3 h4 h5 table".split(" ");b.prototype.isBlockNode=function(a){return(a=
g(a)[0])&&3!==a.nodeType?RegExp("^("+this.blockNodes.join("|")+")$").test(a.nodeName.toLowerCase()):!1};b.prototype.getNodeLength=function(a){a=g(a)[0];switch(a.nodeType){case 7:case 10:return 0;case 3:case 8:return a.length;default:return a.childNodes.length}};b.prototype.dataURLtoBlob=function(a){var f,b,d,e,h,g,m,n,l;if(d=window.Blob)try{d=Boolean(new Blob)}catch(r){d=!1}if(b=d)if(b=window.Uint8Array)try{b=100===(new Blob([new Uint8Array(100)])).size}catch(p){b=!1}h=b;f=window.BlobBuilder||window.WebKitBlobBuilder||
window.MozBlobBuilder||window.MSBlobBuilder;if(!((d||f)&&window.atob&&window.ArrayBuffer&&window.Uint8Array))return!1;e=0<=a.split(",")[0].indexOf("base64")?atob(a.split(",")[1]):decodeURIComponent(a.split(",")[1]);b=new ArrayBuffer(e.length);m=new Uint8Array(b);g=n=0;for(l=e.length;0<=l?n<=l:n>=l;g=0<=l?++n:--n)m[g]=e.charCodeAt(g);a=a.split(",")[0].split(":")[1].split(";")[0];if(d)return new Blob([h?m:b],{type:a});d=new f;d.append(b);return d.getBlob(a)};b.prototype.throttle=function(a,f){var b,
d,e,g,k,m,n;n=g=0;e=b=k=null;d=function(){n=0;g=+new Date;k=a.apply(e,b);return b=e=null};m=function(){var a;e=this;b=arguments;a=new Date-g;n||(a>=f?d():n=setTimeout(d,f-a));return k};m.clear=function(){if(n)return clearTimeout(n),d()};return m};b.prototype.formatHTML=function(a){var f,b,d,e,h,k,m,n;h=/<(\/?)(.+?)(\/?)>/g;m="";d=0;b=null;for(k=function(a,b){return Array(b+1).join(a)};null!==(e=h.exec(a));)e.isBlockNode=-1<g.inArray(e[2],this.blockNodes),e.isStartTag="/"!==e[1]&&"/"!==e[3],e.isEndTag=
"/"===e[1]||"/"===e[3],f=b?b.index+b[0].length:0,0<(n=a.substring(f,e.index)).length&&g.trim(n)&&(m+=n),e.isBlockNode&&e.isEndTag&&!e.isStartTag&&(d-=1),e.isBlockNode&&e.isStartTag&&(b&&b.isBlockNode&&b.isEndTag||(m+="\n"),m+=k("  ",d)),m+=e[0],e.isBlockNode&&e.isEndTag&&(m+="\n"),e.isBlockNode&&e.isStartTag&&(d+=1),b=e;return g.trim(m)};return b}(q);J=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.pluginName="Toolbar";b.prototype.opts={toolbar:!0,toolbarFloat:!0,
toolbarHidden:!1,toolbarFloatOffset:0};b.prototype._tpl={wrapper:'<div class="simditor-toolbar"><ul></ul></div>',separator:'<li><span class="separator"></span></li>'};b.prototype._init=function(){var a,b,c;this.editor=this._module;if(this.opts.toolbar)return g.isArray(this.opts.toolbar)||(this.opts.toolbar="bold italic underline strikethrough | ol ul blockquote code | link image | indent outdent".split(" ")),this._render(),this.list.on("click",function(a){return!1}),this.wrapper.on("mousedown",function(a){return function(b){return a.list.find(".menu-on").removeClass(".menu-on")}}(this)),
g(document).on("mousedown.simditor"+this.editor.id,function(a){return function(b){return a.list.find(".menu-on").removeClass(".menu-on")}}(this)),!this.opts.toolbarHidden&&this.opts.toolbarFloat&&(this.wrapper.css("top",this.opts.toolbarFloatOffset),c=0,b=function(a){return function(){a.wrapper.css("position","static");a.wrapper.width("auto");a.editor.util.reflow(a.wrapper);a.wrapper.width(a.wrapper.outerWidth());a.wrapper.css("left",a.editor.util.os.mobile?a.wrapper.position().left:a.wrapper.offset().left);
a.wrapper.css("position","");c=a.wrapper.outerHeight();a.editor.placeholderEl.css("top",c);return!0}}(this),a=null,g(window).on("resize.simditor-"+this.editor.id,function(c){return a=b()}),g(window).on("scroll.simditor-"+this.editor.id,function(d){return function(e){var h,k;if(d.wrapper.is(":visible"))if(k=d.editor.wrapper.offset().top,e=k+d.editor.wrapper.outerHeight()-80,h=g(document).scrollTop()+d.opts.toolbarFloatOffset,h<=k||h>=e){if(d.editor.wrapper.removeClass("toolbar-floating").css("padding-top",
""),d.editor.util.os.mobile)return d.wrapper.css("top",d.opts.toolbarFloatOffset)}else if(a||(a=b()),d.editor.wrapper.addClass("toolbar-floating").css("padding-top",c),d.editor.util.os.mobile)return d.wrapper.css("top",h-k+d.opts.toolbarFloatOffset)}}(this))),this.editor.on("destroy",function(a){return function(){return a.buttons.length=0}}(this)),g(document).on("mousedown.simditor-"+this.editor.id,function(a){return function(b){return a.list.find("li.menu-on").removeClass("menu-on")}}(this))};b.prototype._render=
function(){var a,b,c,d;this.buttons=[];this.wrapper=g(this._tpl.wrapper).prependTo(this.editor.wrapper);this.list=this.wrapper.find("ul");d=this.opts.toolbar;a=0;for(b=d.length;a<b;a++)if(c=d[a],"|"===c)g(this._tpl.separator).appendTo(this.list);else{if(!this.constructor.buttons[c])throw Error("simditor: invalid toolbar button "+c);this.buttons.push(new this.constructor.buttons[c]({editor:this.editor}))}if(this.opts.toolbarHidden)return this.wrapper.hide()};b.prototype.findButton=function(a){a=this.list.find(".toolbar-item-"+
a).data("button");return null!=a?a:null};b.addButton=function(a){return this.buttons[a.prototype.name]=a};b.buttons={};return b}(q);E=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.pluginName="Indentation";b.prototype.opts={tabIndent:!0};b.prototype._init=function(){this.editor=this._module;return this.editor.keystroke.add("tab","*",function(a){return function(b){var c;c=a.editor.toolbar.findButton("code");if(a.opts.tabIndent||c&&c.active)return a.indent(b.shiftKey)}}(this))};
b.prototype.indent=function(a){var b,c,d;this.editor.selection.startNodes();this.editor.selection.endNodes();b=this.editor.selection.blockNodes();c=[];b=b.each(function(a,b){var f,d,n,l,r;f=!0;d=n=0;for(l=c.length;n<l;d=++n)if(r=c[d],g.contains(b,r)){f=!1;break}else if(g.contains(r,b)){c.splice(d,1,b);f=!1;break}if(f)return c.push(b)});b=g(c);d=!1;b.each(function(b){return function(f,c){var g;if(g=a?b.outdentBlock(c):b.indentBlock(c))return d=g}}(this));return d};b.prototype.indentBlock=function(a){var b,
c,d;a=g(a);if(a.length){if(a.is("pre")){b=this.editor.selection.containerNode();if(!b.is(a)&&!b.closest("pre").is(a))return;this.indentText(this.editor.selection.range())}else if(a.is("li")){c=a.prev("li");if(1>c.length)return;this.editor.selection.save();d=a.parent()[0].tagName;b=c.children("ul, ol");0<b.length?b.append(a):g("<"+d+"/>").append(a).appendTo(c);this.editor.selection.restore()}else if(a.is("p, h1, h2, h3, h4"))b=parseInt(a.css("margin-left"))||0,b=(Math.round(b/this.opts.indentWidth)+
1)*this.opts.indentWidth,a.css("margin-left",b);else if(a.is("table")||a.is(".simditor-table")){a=this.editor.selection.containerNode().closest("td, th");b=a.next("td, th");0<b.length||(c=a.parent("tr"),b=c.next("tr"),1>b.length&&c.parent().is("thead")&&(b=c.parent("thead").next("tbody").find("tr:first")),b=b.find("td:first, th:first"));if(!(0<a.length&&0<b.length))return;this.editor.selection.setRangeAtEndOf(b)}else return!1;return!0}};b.prototype.indentText=function(a){var b,c;b=a.toString().replace(/^(?=.+)/mg,
"\u00a0\u00a0");c=document.createTextNode(b||"\u00a0\u00a0");a.deleteContents();a.insertNode(c);return b?(a.selectNode(c),this.editor.selection.range(a)):this.editor.selection.setRangeAfter(c)};b.prototype.outdentBlock=function(a){var b,c;if((a=g(a))&&0<a.length){if(a.is("pre")){b=this.editor.selection.containerNode();if(!b.is(a)&&!b.closest("pre").is(a))return;this.outdentText(c)}else if(a.is("li"))b=a.parent(),c=b.parent("li"),this.editor.selection.save(),1>c.length?(c=document.createRange(),c.setStartBefore(b[0]),
c.setEndBefore(a[0]),b.before(c.extractContents()),g("<p/>").insertBefore(b).after(a.children("ul, ol")).append(a.contents()),a.remove()):(0<a.next("li").length&&g("<"+b[0].tagName+"/>").append(a.nextAll("li")).appendTo(a),a.insertAfter(c),1>b.children("li").length&&b.remove()),this.editor.selection.restore();else if(a.is("p, h1, h2, h3, h4"))c=parseInt(a.css("margin-left"))||0,c=Math.max(Math.round(c/this.opts.indentWidth)-1,0)*this.opts.indentWidth,a.css("margin-left",0===c?"":c);else if(a.is("table")||
a.is(".simditor-table")){a=this.editor.selection.containerNode().closest("td, th");c=a.prev("td, th");0<c.length||(b=a.parent("tr"),c=b.prev("tr"),1>c.length&&b.parent().is("tbody")&&(c=b.parent("tbody").prev("thead").find("tr:first")),c=c.find("td:last, th:last"));if(!(0<a.length&&0<c.length))return;this.editor.selection.setRangeAtEndOf(c)}else return!1;return!0}};b.prototype.outdentText=function(a){};return b}(q);A=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,
l);b.pluginName="Clipboard";b.prototype.opts={pasteImage:!1};b.prototype._init=function(){this.editor=this._module;this.opts.pasteImage&&"string"!==typeof this.opts.pasteImage&&(this.opts.pasteImage="inline");return this.editor.body.on("paste",function(a){return function(b){var c;if(!a.pasting&&!a._pasteBin){if(!1===a.editor.triggerHandler(b))return!1;c=a.editor.selection.deleteRangeContents();a.editor.body.html()?c.collapsed||c.collapse(!0):(a.editor.formatter.format(),a.editor.selection.setRangeAtStartOf(a.editor.body.find("p:first")));
if(a._processPasteByClipboardApi(b))return!1;a.editor.inputManager.throttledValueChanged.clear();a.editor.inputManager.throttledSelectionChanged.clear();a.editor.undoManager.throttledPushState.clear();a.editor.selection.reset();a.editor.undoManager.resetCaretPosition();a.pasting=!0;return a._getPasteContent(function(b){a._processPasteContent(b);a._pasteInBlockEl=null;a._pastePlainText=null;return a.pasting=!1})}}}(this))};b.prototype._processPasteByClipboardApi=function(a){var b,c;if(!this.editor.util.browser.edge&&
a.originalEvent.clipboardData&&a.originalEvent.clipboardData.items&&0<a.originalEvent.clipboardData.items.length&&(a=a.originalEvent.clipboardData.items[0],/^image\//.test(a.type)&&(a=a.getAsFile(),null!=a&&this.opts.pasteImage&&(a.name||(a.name="Clipboard Image.png"),!1!==this.editor.triggerHandler("pasting",[a])))))return c={},c[this.opts.pasteImage]=!0,null!=(b=this.editor.uploader)&&b.upload(a,c),!0};b.prototype._getPasteContent=function(a){var b,c;this._pasteBin=g('<div contenteditable="true" />').addClass("simditor-paste-bin").attr("tabIndex",
"-1").appendTo(this.editor.el);b=this.editor.body.html();c=this.editor.undoManager.caretPosition();this._pasteBin.focus();return setTimeout(function(d){return function(){var e;d.editor.hidePopover();d.editor.body.html(b);d.editor.undoManager.caretPosition(c);d.editor.body.focus();d.editor.selection.reset();d.editor.selection.range();d._pasteInBlockEl=d.editor.selection.blockNodes().last();d._pastePlainText=d._pasteInBlockEl.is("pre, table");d._pastePlainText?e=d.editor.formatter.clearHtml(d._pasteBin.html(),
!0):(e=g("<div/>").append(d._pasteBin.contents()),e.find("table colgroup").remove(),d.editor.formatter.format(e),d.editor.formatter.decorate(e),d.editor.formatter.beautify(e.children()),e=e.contents());d._pasteBin.remove();d._pasteBin=null;return a(e)}}(this),0)};b.prototype._processPasteContent=function(a){var b,c,d,e;if(!1!==this.editor.triggerHandler("pasting",[a])&&(b=this._pasteInBlockEl,a)){if(this._pastePlainText)if(b.is("table")){e=a.split("\n");a=e.pop();c=0;for(b=e.length;c<b;c++)d=e[c],
this.editor.selection.insertNode(document.createTextNode(d)),this.editor.selection.insertNode(g("<br/>"));this.editor.selection.insertNode(document.createTextNode(a))}else for(a=g("<div/>").text(a),d=a.contents(),a=0,b=d.length;a<b;a++)c=d[a],this.editor.selection.insertNode(g(c)[0]);else if(b.is(this.editor.body))for(d=0,b=a.length;d<b;d++)c=a[d],this.editor.selection.insertNode(c);else{if(1>a.length)return;if(1===a.length)if(a.is("p")){a=a.contents();if(1===a.length&&a.is("img")){if(/^data:image/.test(a.attr("src"))){if(!this.opts.pasteImage)return;
a=this.editor.util.dataURLtoBlob(a.attr("src"));a.name="Clipboard Image.png";b={};b[this.opts.pasteImage]=!0;null!=(c=this.editor.uploader)&&c.upload(a,b);return}if(a.is('img[src^="webkit-fake-url://"]'))return}d=0;for(b=a.length;d<b;d++)c=a[d],this.editor.selection.insertNode(c)}else if(b.is("p")&&this.editor.util.isEmptyNode(b))b.replaceWith(a),this.editor.selection.setRangeAtEndOf(a);else if(a.is("ul, ol"))if(1===a.find("li").length)for(a=g("<div/>").text(a.text()),d=a.contents(),b=0,a=d.length;b<
a;b++)c=d[b],this.editor.selection.insertNode(g(c)[0]);else b.is("li")?b.parent().after(a):b.after(a),this.editor.selection.setRangeAtEndOf(a);else b.after(a),this.editor.selection.setRangeAtEndOf(a);else b.is("li")&&(b=b.parent()),this.editor.selection.rangeAtStartOf(b)?c="before":this.editor.selection.rangeAtEndOf(b)?c="after":(this.editor.selection.breakBlockEl(b),c="before"),b[c](a),this.editor.selection.setRangeAtEndOf(a.last())}return this.editor.inputManager.throttledValueChanged()}};return b}(q);
t=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.connect(L);b.connect(F);b.connect(I);b.connect(K);b.connect(G);b.connect(C);b.connect(J);b.connect(E);b.connect(A);b.count=0;b.prototype.opts={textarea:null,placeholder:"",defaultImage:"images/image.png",params:{},upload:!1,indentWidth:40};b.prototype._init=function(){var a;this.textarea=g(this.opts.textarea);this.opts.placeholder=this.opts.placeholder||this.textarea.attr("placeholder");if(!this.textarea.length)throw Error("simditor: param textarea is required.");
a=this.textarea.data("simditor");null!=a&&a.destroy();this.id=++b.count;this._render();if(y)this.hotkeys=y({el:this.body});else throw Error("simditor: simple-hotkeys is required.");this.opts.upload&&z&&(a="object"===typeof this.opts.upload?this.opts.upload:{},this.uploader=z(a));a=this.textarea.closest("form");a.length&&(a.on("submit.simditor-"+this.id,function(a){return function(){return a.sync()}}(this)),a.on("reset.simditor-"+this.id,function(a){return function(){return a.setValue("")}}(this)));
this.on("initialized",function(a){return function(){if(a.opts.placeholder)a.on("valuechanged",function(){return a._placeholder()});a.setValue(a.textarea.val().trim()||"");if(a.textarea.attr("autofocus"))return a.focus()}}(this));if(this.util.browser.mozilla){this.util.reflow();try{return document.execCommand("enableObjectResizing",!1,!1),document.execCommand("enableInlineTableEditing",!1,!1)}catch(f){}}};b.prototype._tpl='<div class="simditor">\n  <div class="simditor-wrapper">\n    <div class="simditor-placeholder"></div>\n    <div class="simditor-body" contenteditable="true">\n    </div>\n  </div>\n</div>';
b.prototype._render=function(){var a,b,c,d;this.el=g(this._tpl).insertBefore(this.textarea);this.wrapper=this.el.find(".simditor-wrapper");this.body=this.wrapper.find(".simditor-body");this.placeholderEl=this.wrapper.find(".simditor-placeholder").append(this.opts.placeholder);this.el.data("simditor",this);this.wrapper.append(this.textarea);this.textarea.data("simditor",this).blur();this.body.attr("tabindex",this.textarea.attr("tabindex"));this.util.os.mac?this.el.addClass("simditor-mac"):this.util.os.linux&&
this.el.addClass("simditor-linux");this.util.os.mobile&&this.el.addClass("simditor-mobile");if(this.opts.params){b=this.opts.params;c=[];for(a in b)d=b[a],c.push(g("<input/>",{type:"hidden",name:a,value:d}).insertAfter(this.textarea));return c}};b.prototype._placeholder=function(){var a;a=this.body.children();return 0===a.length||1===a.length&&this.util.isEmptyNode(a)&&parseInt(a.css("margin-left")||0)<this.opts.indentWidth?this.placeholderEl.show():this.placeholderEl.hide()};b.prototype.setValue=
function(a){this.hidePopover();this.textarea.val(a);this.body.html(a);this.formatter.format();this.formatter.decorate();this.util.reflow(this.body);this.inputManager.lastCaretPosition=null;return this.trigger("valuechanged")};b.prototype.getValue=function(){return this.sync()};b.prototype.sync=function(){var a,b,c,d;b=this.body.clone();this.formatter.undecorate(b);this.formatter.format(b);this.formatter.autolink(b);a=b.children();d=a.last("p");for(c=a.first("p");d.is("p")&&this.util.isEmptyNode(d);)a=
d,d=d.prev("p"),a.remove();for(;c.is("p")&&this.util.isEmptyNode(c);)a=c,c=d.next("p"),a.remove();b.find("img.uploading").remove();b=g.trim(b.html());this.textarea.val(b);return b};b.prototype.focus=function(){var a,b;if(this.body.is(":visible")&&this.body.is("[contenteditable]")){if(this.inputManager.lastCaretPosition)return this.undoManager.caretPosition(this.inputManager.lastCaretPosition),this.inputManager.lastCaretPosition=null;a=this.body.children().last();a.is("p")||(a=g("<p/>").append(this.util.phBr).appendTo(this.body));
b=document.createRange();return this.selection.setRangeAtEndOf(a,b)}this.el.find("textarea:visible").focus()};b.prototype.blur=function(){return this.body.is(":visible")&&this.body.is("[contenteditable]")?this.body.blur():this.body.find("textarea:visible").blur()};b.prototype.hidePopover=function(){return this.el.find(".simditor-popover").each(function(a,b){b=g(b).data("popover");if(b.active)return b.hide()})};b.prototype.destroy=function(){this.triggerHandler("destroy");this.textarea.closest("form").off(".simditor .simditor-"+
this.id);this.selection.clear();this.inputManager.focused=!1;this.textarea.insertBefore(this.el).hide().val("").removeData("simditor");this.el.remove();g(document).off(".simditor-"+this.id);g(window).off(".simditor-"+this.id);return this.off()};return b}(q);t.i18n={"zh-CN":{blockquote:"\u5f15\u7528",bold:"\u52a0\u7c97\u6587\u5b57",code:"\u63d2\u5165\u4ee3\u7801",color:"\u6587\u5b57\u989c\u8272",coloredText:"\u5f69\u8272\u6587\u5b57",hr:"\u5206\u9694\u7ebf",image:"\u63d2\u5165\u56fe\u7247",externalImage:"\u5916\u94fe\u56fe\u7247",
uploadImage:"\u4e0a\u4f20\u56fe\u7247",uploadFailed:"\u4e0a\u4f20\u5931\u8d25\u4e86",uploadError:"\u4e0a\u4f20\u51fa\u9519\u4e86",imageUrl:"\u56fe\u7247\u5730\u5740",imageSize:"\u56fe\u7247\u5c3a\u5bf8",imageAlt:"\u56fe\u7247\u63cf\u8ff0",restoreImageSize:"\u8fd8\u539f\u56fe\u7247\u5c3a\u5bf8",uploading:"\u6b63\u5728\u4e0a\u4f20",indent:"\u5411\u53f3\u7f29\u8fdb",outdent:"\u5411\u5de6\u7f29\u8fdb",italic:"\u659c\u4f53\u6587\u5b57",link:"\u63d2\u5165\u94fe\u63a5",linkText:"\u94fe\u63a5\u6587\u5b57",
linkUrl:"\u94fe\u63a5\u5730\u5740",linkTarget:"\u6253\u5f00\u65b9\u5f0f",openLinkInCurrentWindow:"\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u5f00",openLinkInNewWindow:"\u5728\u5f53\u524d\u7a97\u53e3\u4e2d\u6253\u5f00",removeLink:"\u79fb\u9664\u94fe\u63a5",ol:"\u6709\u5e8f\u5217\u8868",ul:"\u65e0\u5e8f\u5217\u8868",strikethrough:"\u5220\u9664\u7ebf\u6587\u5b57",table:"\u8868\u683c",deleteRow:"\u5220\u9664\u884c",insertRowAbove:"\u5728\u4e0a\u9762\u63d2\u5165\u884c",insertRowBelow:"\u5728\u4e0b\u9762\u63d2\u5165\u884c",
deleteColumn:"\u5220\u9664\u5217",insertColumnLeft:"\u5728\u5de6\u8fb9\u63d2\u5165\u5217",insertColumnRight:"\u5728\u53f3\u8fb9\u63d2\u5165\u5217",deleteTable:"\u5220\u9664\u8868\u683c",title:"\u6807\u9898",normalText:"\u666e\u901a\u6587\u672c",underline:"\u4e0b\u5212\u7ebf\u6587\u5b57",alignment:"\u6c34\u5e73\u5bf9\u9f50",alignCenter:"\u5c45\u4e2d",alignLeft:"\u5c45\u5de6",alignRight:"\u5c45\u53f3",selectLanguage:"\u9009\u62e9\u7a0b\u5e8f\u8bed\u8a00",fontScale:"\u5b57\u4f53\u5927\u5c0f",fontScaleXLarge:"\u8d85\u5927\u5b57\u4f53",
fontScaleLarge:"\u5927\u53f7\u5b57\u4f53",fontScaleNormal:"\u6b63\u5e38\u5927\u5c0f",fontScaleSmall:"\u5c0f\u53f7\u5b57\u4f53",fontScaleXSmall:"\u8d85\u5c0f\u5b57\u4f53"},"en-US":{blockquote:"Block Quote",bold:"Bold",code:"Code",color:"Text Color",coloredText:"Colored Text",hr:"Horizontal Line",image:"Insert Image",externalImage:"External Image",uploadImage:"Upload Image",uploadFailed:"Upload failed",uploadError:"Error occurs during upload",imageUrl:"Url",imageSize:"Size",imageAlt:"Alt",restoreImageSize:"Restore Origin Size",
uploading:"Uploading",indent:"Indent",outdent:"Outdent",italic:"Italic",link:"Insert Link",linkText:"Text",linkUrl:"Url",linkTarget:"Target",openLinkInCurrentWindow:"Open link in current window",openLinkInNewWindow:"Open link in new window",removeLink:"Remove Link",ol:"Ordered List",ul:"Unordered List",strikethrough:"Strikethrough",table:"Table",deleteRow:"Delete Row",insertRowAbove:"Insert Row Above",insertRowBelow:"Insert Row Below",deleteColumn:"Delete Column",insertColumnLeft:"Insert Column Left",
insertColumnRight:"Insert Column Right",deleteTable:"Delete Table",title:"Title",normalText:"Text",underline:"Underline",alignment:"Alignment",alignCenter:"Align Center",alignLeft:"Align Left",alignRight:"Align Right",selectLanguage:"Select Language",fontScale:"Font Size",fontScaleXLarge:"X Large Size",fontScaleLarge:"Large Size",fontScaleNormal:"Normal Size",fontScaleSmall:"Small Size",fontScaleXSmall:"X Small Size"}};u=function(l){function b(a){this.editor=a.editor;this.title=this._t(this.name);
b.__super__.constructor.call(this,a)}p(b,l);b.prototype._tpl={item:'<li><a tabindex="-1" unselectable="on" class="toolbar-item" href="javascript:;"><span></span></a></li>',menuWrapper:'<div class="toolbar-menu"></div>',menuItem:'<li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;"><span></span></a></li>',separator:'<li><span class="separator"></span></li>'};b.prototype.name="";b.prototype.icon="";b.prototype.title="";b.prototype.text="";b.prototype.htmlTag="";b.prototype.disableTag=
"";b.prototype.menu=!1;b.prototype.active=!1;b.prototype.disabled=!1;b.prototype.needFocus=!0;b.prototype.shortcut=null;b.prototype._init=function(){var a,b,c,d;this.render();this.el.on("mousedown",function(a){return function(b){b.preventDefault();b=a.needFocus&&!a.editor.inputManager.focused;if(a.el.hasClass("disabled")||b)return!1;if(a.menu)return a.wrapper.toggleClass("menu-on").siblings("li").removeClass("menu-on"),a.wrapper.is(".menu-on")&&(b=a.menuWrapper.offset().left+a.menuWrapper.outerWidth()+
5-a.editor.wrapper.offset().left-a.editor.wrapper.outerWidth(),0<b&&a.menuWrapper.css({left:"auto",right:0}),a.trigger("menuexpand")),!1;b=a.el.data("param");a.command(b);return!1}}(this));this.wrapper.on("click","a.menu-item",function(a){return function(b){var f;b.preventDefault();b=g(b.currentTarget);a.wrapper.removeClass("menu-on");f=a.needFocus&&!a.editor.inputManager.focused;if(b.hasClass("disabled")||f)return!1;a.editor.toolbar.wrapper.removeClass("menu-on");b=b.data("param");a.command(b);return!1}}(this));
this.wrapper.on("mousedown","a.menu-item",function(a){return!1});this.editor.on("blur",function(a){return function(){if(a.editor.body.is(":visible")&&a.editor.body.is("[contenteditable]")&&!a.editor.clipboard.pasting)return a.setActive(!1),a.setDisabled(!1)}}(this));null!=this.shortcut&&this.editor.hotkeys.add(this.shortcut,function(a){return function(b){a.el.mousedown();return!1}}(this));c=this.htmlTag.split(",");a=0;for(b=c.length;a<b;a++)d=c[a],(d=g.trim(d))&&0>g.inArray(d,this.editor.formatter._allowedTags)&&
this.editor.formatter._allowedTags.push(d);return this.editor.on("selectionchanged",function(a){return function(b){if(a.editor.inputManager.focused)return a._status()}}(this))};b.prototype.iconClassOf=function(a){return a?"simditor-icon simditor-icon-"+a:""};b.prototype.setIcon=function(a){return this.el.find("span").removeClass().addClass(this.iconClassOf(a)).text(this.text)};b.prototype.render=function(){this.wrapper=g(this._tpl.item).appendTo(this.editor.toolbar.list);this.el=this.wrapper.find("a.toolbar-item");
this.el.attr("title",this.title).addClass("toolbar-item-"+this.name).data("button",this);this.setIcon(this.icon);if(this.menu)return this.menuWrapper=g(this._tpl.menuWrapper).appendTo(this.wrapper),this.menuWrapper.addClass("toolbar-menu-"+this.name),this.renderMenu()};b.prototype.renderMenu=function(){var a,b,c,d,e,h,k;if(g.isArray(this.menu)){this.menuEl=g("<ul/>").appendTo(this.menuWrapper);e=this.menu;k=[];b=0;for(c=e.length;b<c;b++)d=e[b],"|"===d?g(this._tpl.separator).appendTo(this.menuEl):
(a=g(this._tpl.menuItem).appendTo(this.menuEl),a=a.find("a.menu-item").attr({title:null!=(h=d.title)?h:d.text,"data-param":d.param}).addClass("menu-item-"+d.name),d.icon?k.push(a.find("span").addClass(this.iconClassOf(d.icon))):k.push(a.find("span").text(d.text)));return k}};b.prototype.setActive=function(a){if(a!==this.active)return this.active=a,this.el.toggleClass("active",this.active)};b.prototype.setDisabled=function(a){if(a!==this.disabled)return this.disabled=a,this.el.toggleClass("disabled",
this.disabled)};b.prototype._disableStatus=function(){var a,b;b=this.editor.selection.startNodes();a=this.editor.selection.endNodes();a=0<b.filter(this.disableTag).length||0<a.filter(this.disableTag).length;this.setDisabled(a);this.disabled&&this.setActive(!1);return this.disabled};b.prototype._activeStatus=function(){var a,b;b=this.editor.selection.startNodes();a=this.editor.selection.endNodes();b=b.filter(this.htmlTag);a=a.filter(this.htmlTag);this.node=(a=0<b.length&&0<a.length&&b.is(a))?b:null;
this.setActive(a);return this.active};b.prototype._status=function(){this._disableStatus();if(!this.disabled)return this._activeStatus()};b.prototype.command=function(a){};b.prototype._t=function(){var a,f,c;a=1<=arguments.length?v.call(arguments,0):[];c=b.__super__._t.apply(this,a);c||(c=(f=this.editor)._t.apply(f,a));return c};return b}(q);t.Button=u;q=function(l){function b(a){this.button=a.button;this.editor=a.button.editor;b.__super__.constructor.call(this,a)}p(b,l);b.prototype.offset={top:4,
left:0};b.prototype.target=null;b.prototype.active=!1;b.prototype._init=function(){this.el=g('<div class="simditor-popover"></div>').appendTo(this.editor.el).data("popover",this);this.render();this.el.on("mouseenter",function(a){return function(b){return a.el.addClass("hover")}}(this));return this.el.on("mouseleave",function(a){return function(b){return a.el.removeClass("hover")}}(this))};b.prototype.render=function(){};b.prototype._initLabelWidth=function(){var a;a=this.el.find(".settings-field");
if(0<a.length)return this._labelWidth=0,a.each(function(a){return function(b,d){var e;e=g(d).find("label");if(0<e.length)return a._labelWidth=Math.max(a._labelWidth,e.width())}}(this)),a.find("label").width(this._labelWidth)};b.prototype.show=function(a,b){null==b&&(b="bottom");if(null!=a)return this.el.siblings(".simditor-popover").each(function(a,b){b=g(b).data("popover");if(b.active)return b.hide()}),this.active&&this.target&&this.target.removeClass("selected"),this.target=a.addClass("selected"),
this.active||(this.active=!0,this.el.css({left:-9999}).show(),this._labelWidth||this._initLabelWidth(),this.editor.util.reflow()),this.refresh(b),this.trigger("popovershow")};b.prototype.hide=function(){if(this.active)return this.target&&this.target.removeClass("selected"),this.target=null,this.active=!1,this.el.hide(),this.trigger("popoverhide")};b.prototype.refresh=function(a){var b,c,d,e;null==a&&(a="bottom");if(this.active)return b=this.editor.el.offset(),d=this.target.offset(),c=this.target.outerHeight(),
"bottom"===a?e=d.top-b.top+c:"top"===a&&(e=d.top-b.top-this.el.height()),a=this.editor.wrapper.width()-this.el.outerWidth()-10,b=Math.min(d.left-b.left,a),this.el.css({top:e+this.offset.top,left:b+this.offset.left})};b.prototype.destroy=function(){this.target=null;this.active=!1;this.editor.off(".linkpopover");return this.el.remove()};b.prototype._t=function(){var a,f,c;a=1<=arguments.length?v.call(arguments,0):[];c=b.__super__._t.apply(this,a);c||(c=(f=this.button)._t.apply(f,a));return c};return b}(q);
t.Popover=q;s=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="title";b.prototype.htmlTag="h1, h2, h3, h4, h5";b.prototype.disableTag="pre, table";b.prototype._init=function(){this.menu=[{name:"normal",text:this._t("normalText"),param:"p"},"|",{name:"h1",text:this._t("title")+" 1",param:"h1"},{name:"h2",text:this._t("title")+" 2",param:"h2"},{name:"h3",text:this._t("title")+" 3",param:"h3"},{name:"h4",text:this._t("title")+" 4",param:"h4"},{name:"h5",
text:this._t("title")+" 5",param:"h5"}];return b.__super__._init.call(this)};b.prototype.setActive=function(a,f){b.__super__.setActive.call(this,a);a&&(f||(f=this.node[0].tagName.toLowerCase()));this.el.removeClass("active-p active-h1 active-h2 active-h3 active-h4 active-h5");if(a)return this.el.addClass("active active-"+f)};b.prototype.command=function(a){var b;b=this.editor.selection.rootNodes();this.editor.selection.save();b.each(function(b){return function(f,e){var h;h=g(e);if(!(h.is("blockquote")||
h.is(a)||h.is(b.disableTag)||b.editor.util.isDecoratedNode(h)))return g("<"+a+"/>").append(h.contents()).replaceAll(h)}}(this));this.editor.selection.restore();return this.editor.trigger("valuechanged")};return b}(u);t.Toolbar.addButton(s);s=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="fontScale";b.prototype.icon="font";b.prototype.disableTag="pre";b.prototype.htmlTag="span";b.prototype.sizeMap={"x-large":"1.5em",large:"1.25em",small:".75em",
"x-small":".5em"};b.prototype._init=function(){this.menu=[{name:"150%",text:this._t("fontScaleXLarge"),param:"5"},{name:"125%",text:this._t("fontScaleLarge"),param:"4"},{name:"100%",text:this._t("fontScaleNormal"),param:"3"},{name:"75%",text:this._t("fontScaleSmall"),param:"2"},{name:"50%",text:this._t("fontScaleXSmall"),param:"1"}];return b.__super__._init.call(this)};b.prototype._activeStatus=function(){var a,b,c,d;this.editor.selection.range();d=this.editor.selection.startNodes();b=this.editor.selection.endNodes();
c=d.filter('span[style*="font-size"]');a=b.filter('span[style*="font-size"]');a=0<d.length&&0<b.length&&c.is(a);this.setActive(a);return this.active};b.prototype.command=function(a){if(!this.editor.selection.range().collapsed)return document.execCommand("styleWithCSS",!1,!0),document.execCommand("fontSize",!1,a),document.execCommand("styleWithCSS",!1,!1),this.editor.selection.reset(),this.editor.selection.range(),a=this.editor.selection.containerNode(),a=a[0].nodeType===Node.TEXT_NODE?a.closest('span[style*="font-size"]'):
a.find('span[style*="font-size"]'),a.each(function(a){return function(b,d){var e,h;e=g(d);h=d.style.fontSize;if(/large|x-large|small|x-small/.test(h))return e.css("fontSize",a.sizeMap[h]);if("medium"===h)return e.replaceWith(e.contents())}}(this)),this.editor.trigger("valuechanged")};return b}(u);t.Toolbar.addButton(s);s=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="bold";b.prototype.icon="bold";b.prototype.htmlTag="b, strong";b.prototype.disableTag=
"pre";b.prototype.shortcut="cmd+b";b.prototype._init=function(){this.editor.util.os.mac?this.title+=" ( Cmd + b )":(this.title+=" ( Ctrl + b )",this.shortcut="ctrl+b");return b.__super__._init.call(this)};b.prototype._activeStatus=function(){var a;a=!0===document.queryCommandState("bold");this.setActive(a);return this.active};b.prototype.command=function(){document.execCommand("bold");this.editor.util.support.oninput||this.editor.trigger("valuechanged");return g(document).trigger("selectionchange")};
return b}(u);t.Toolbar.addButton(s);s=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="italic";b.prototype.icon="italic";b.prototype.htmlTag="i";b.prototype.disableTag="pre";b.prototype.shortcut="cmd+i";b.prototype._init=function(){this.editor.util.os.mac?this.title+=" ( Cmd + i )":(this.title+=" ( Ctrl + i )",this.shortcut="ctrl+i");return b.__super__._init.call(this)};b.prototype._activeStatus=function(){var a;a=!0===document.queryCommandState("italic");
this.setActive(a);return this.active};b.prototype.command=function(){document.execCommand("italic");this.editor.util.support.oninput||this.editor.trigger("valuechanged");return g(document).trigger("selectionchange")};return b}(u);t.Toolbar.addButton(s);s=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="underline";b.prototype.icon="underline";b.prototype.htmlTag="u";b.prototype.disableTag="pre";b.prototype.shortcut="cmd+u";b.prototype.render=function(){this.editor.util.os.mac?
this.title+=" ( Cmd + u )":(this.title+=" ( Ctrl + u )",this.shortcut="ctrl+u");return b.__super__.render.call(this)};b.prototype._activeStatus=function(){var a;a=!0===document.queryCommandState("underline");this.setActive(a);return this.active};b.prototype.command=function(){document.execCommand("underline");this.editor.util.support.oninput||this.editor.trigger("valuechanged");return g(document).trigger("selectionchange")};return b}(u);t.Toolbar.addButton(s);s=function(l){function b(){return b.__super__.constructor.apply(this,
arguments)}p(b,l);b.prototype.name="color";b.prototype.icon="tint";b.prototype.disableTag="pre";b.prototype.menu=!0;b.prototype.render=function(){var a;a=1<=arguments.length?v.call(arguments,0):[];return b.__super__.render.apply(this,a)};b.prototype.renderMenu=function(){g('<ul class="color-list">\n  <li><a href="javascript:;" class="font-color font-color-1"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-2"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-3"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-4"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-5"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-6"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-7"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-default"></a></li>\n</ul>').appendTo(this.menuWrapper);
this.menuWrapper.on("mousedown",".color-list",function(a){return!1});return this.menuWrapper.on("click",".font-color",function(a){return function(b){var c,d;a.wrapper.removeClass("menu-on");b=g(b.currentTarget);if(b.hasClass("font-color-default")){c=a.editor.body.find("p, li");if(!(0<c.length))return;c=window.getComputedStyle(c[0],null).getPropertyValue("color")}else c=window.getComputedStyle(b[0],null).getPropertyValue("background-color");if(c=a._convertRgbToHex(c))if(d=a.editor.selection.range(),
!b.hasClass("font-color-default")&&d.collapsed&&(b=document.createTextNode(a._t("coloredText")),d.insertNode(b),d.selectNodeContents(b),a.editor.selection.range(d)),document.execCommand("styleWithCSS",!1,!0),document.execCommand("foreColor",!1,c),document.execCommand("styleWithCSS",!1,!1),!a.editor.util.support.oninput)return a.editor.trigger("valuechanged")}}(this))};b.prototype._convertRgbToHex=function(a){return(a=/rgb\((\d+),\s?(\d+),\s?(\d+)\)/g.exec(a))?function(a,b,d){var e;e=function(a){a=
a.toString(16);return 1===a.length?"0"+a:a};return"#"+e(a)+e(b)+e(d)}(1*a[1],1*a[2],1*a[3]):""};return b}(u);t.Toolbar.addButton(s);w=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.type="";b.prototype.disableTag="pre, table";b.prototype.command=function(a){var b,c;a=this.editor.selection.blockNodes();c="ul"===this.type?"ol":"ul";this.editor.selection.save();b=null;a.each(function(a){return function(e,h){var k;k=g(h);if(!k.is("blockquote, li")&&!k.is(a.disableTag)&&
!a.editor.util.isDecoratedNode(k)&&g.contains(document,h)){if(k.is(a.type))return k.children("li").each(function(b,f){g(f).children("ul, ol").insertAfter(k);return g("<p/>").append(g(f).html()||a.editor.util.phBr).insertBefore(k)}),k.remove();if(k.is(c))return g("<"+a.type+"/>").append(k.contents()).replaceAll(k);if(b&&k.prev().is(b))return g("<li/>").append(k.html()||a.editor.util.phBr).appendTo(b),k.remove();b=g("<"+a.type+"><li></li></"+a.type+">");b.find("li").append(k.html()||a.editor.util.phBr);
return b.replaceAll(k)}}}(this));this.editor.selection.restore();return this.editor.trigger("valuechanged")};return b}(u);s=function(g){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,g);b.prototype.type="ol";b.prototype.name="ol";b.prototype.icon="list-ol";b.prototype.htmlTag="ol";b.prototype.shortcut="cmd+/";b.prototype._init=function(){this.editor.util.os.mac?this.title+=" ( Cmd + / )":(this.title+=" ( ctrl + / )",this.shortcut="ctrl+/");return b.__super__._init.call(this)};
return b}(w);w=function(g){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,g);b.prototype.type="ul";b.prototype.name="ul";b.prototype.icon="list-ul";b.prototype.htmlTag="ul";b.prototype.shortcut="cmd+.";b.prototype._init=function(){this.editor.util.os.mac?this.title+=" ( Cmd + . )":(this.title+=" ( Ctrl + . )",this.shortcut="ctrl+.");return b.__super__._init.call(this)};return b}(w);t.Toolbar.addButton(s);t.Toolbar.addButton(w);s=function(l){function b(){return b.__super__.constructor.apply(this,
arguments)}p(b,l);b.prototype.name="blockquote";b.prototype.icon="quote-left";b.prototype.htmlTag="blockquote";b.prototype.disableTag="pre, table";b.prototype.command=function(){var a,b,c;a=this.editor.selection.rootNodes();a=a.filter(function(a,b){return!g(b).parent().is("blockquote")});this.editor.selection.save();c=[];b=function(a){return function(){if(0<c.length)return g("<"+a.htmlTag+"/>").insertBefore(c[0]).append(c),c.length=0}}(this);a.each(function(a){return function(e,h){var k;k=g(h);if(k.parent().is(a.editor.body))return k.is(a.htmlTag)?
(b(),k.children().unwrap()):k.is(a.disableTag)||a.editor.util.isDecoratedNode(k)?b():c.push(h)}}(this));b();this.editor.selection.restore();return this.editor.trigger("valuechanged")};return b}(u);t.Toolbar.addButton(s);s=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="code";b.prototype.icon="code";b.prototype.htmlTag="pre";b.prototype.disableTag="ul, ol, table";b.prototype._init=function(){b.__super__._init.call(this);this.editor.on("decorate",
function(a){return function(b,c){return c.find("pre").each(function(b,f){return a.decorate(g(f))})}}(this));return this.editor.on("undecorate",function(a){return function(b,c){return c.find("pre").each(function(b,f){return a.undecorate(g(f))})}}(this))};b.prototype.render=function(){var a;a=1<=arguments.length?v.call(arguments,0):[];b.__super__.render.apply(this,a);return this.popover=new B({button:this})};b.prototype._checkMode=function(){var a;a=this.editor.selection.range();if(0<g(a.cloneContents()).find(this.editor.util.blockNodes.join(","))||
a.collapsed&&0===this.editor.selection.startNodes().filter("code").length)return this.inlineMode=!1,this.htmlTag="pre";this.inlineMode=!0;return this.htmlTag="code"};b.prototype._status=function(){this._checkMode();b.__super__._status.call(this);if(!this.inlineMode)return this.active?this.popover.show(this.node):this.popover.hide()};b.prototype.decorate=function(a){var b,c,d,e;b=a.find("> code");if(0<b.length&&(c=null!=(d=b.attr("class"))?null!=(e=d.match(/lang-(\S+)/))?e[1]:void 0:void 0,b.contents().unwrap(),
c))return a.attr("data-lang",c)};b.prototype.undecorate=function(a){var b,c;c=a.attr("data-lang");b=g("<code/>");c&&-1!==c&&b.addClass("lang-"+c);return a.wrapInner(b).removeAttr("data-lang")};b.prototype.command=function(){return this.inlineMode?this._inlineCommand():this._blockCommand()};b.prototype._blockCommand=function(){var a,b,c,d;a=this.editor.selection.rootNodes();c=[];d=[];b=function(a){return function(){var b;if(0<c.length)return b=g("<"+a.htmlTag+"/>").insertBefore(c[0]).text(a.editor.formatter.clearHtml(c)),
d.push(b[0]),c.length=0}}(this);a.each(function(a){return function(h,k){var m;m=g(k);return m.is(a.htmlTag)?(b(),m=g("<p/>").append(m.html().replace("\n","<br/>")).replaceAll(m),d.push(m[0])):m.is(a.disableTag)||a.editor.util.isDecoratedNode(m)||m.is("blockquote")?b():c.push(k)}}(this));b();this.editor.selection.setRangeAtEndOf(g(d).last());return this.editor.trigger("valuechanged")};b.prototype._inlineCommand=function(){var a,b;b=this.editor.selection.range();this.active?(b.selectNodeContents(this.node[0]),
this.editor.selection.save(b),this.node.contents().unwrap(),this.editor.selection.restore()):(a=g(b.extractContents()),a=g("<"+this.htmlTag+"/>").append(a.contents()),b.insertNode(a[0]),b.selectNodeContents(a[0]),this.editor.selection.range(b));return this.editor.trigger("valuechanged")};return b}(u);B=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.render=function(){var a,b,c,d;this._tpl='<div class="code-settings">\n  <div class="settings-field">\n    <select class="select-lang">\n      <option value="-1">'+
this._t("selectLanguage")+"</option>\n    </select>\n  </div>\n</div>";this.langs=this.editor.opts.codeLanguages||[{name:"Bash",value:"bash"},{name:"C++",value:"c++"},{name:"C#",value:"cs"},{name:"CSS",value:"css"},{name:"Erlang",value:"erlang"},{name:"Less",value:"less"},{name:"Sass",value:"sass"},{name:"Diff",value:"diff"},{name:"CoffeeScript",value:"coffeescript"},{name:"HTML,XML",value:"html"},{name:"JSON",value:"json"},{name:"Java",value:"java"},{name:"JavaScript",value:"js"},{name:"Markdown",
value:"markdown"},{name:"Objective C",value:"oc"},{name:"PHP",value:"php"},{name:"Perl",value:"parl"},{name:"Python",value:"python"},{name:"Ruby",value:"ruby"},{name:"SQL",value:"sql"}];this.el.addClass("code-popover").append(this._tpl);this.selectEl=this.el.find(".select-lang");d=this.langs;a=0;for(c=d.length;a<c;a++)b=d[a],g("<option/>",{text:b.name,value:b.value}).appendTo(this.selectEl);this.selectEl.on("change",function(a){return function(b){a.lang=a.selectEl.val();b=a.target.hasClass("selected");
a.target.removeClass().removeAttr("data-lang");-1!==a.lang&&a.target.attr("data-lang",a.lang);b&&a.target.addClass("selected");return a.editor.trigger("valuechanged")}}(this));return this.editor.on("valuechanged",function(a){return function(b){if(a.active)return a.refresh()}}(this))};b.prototype.show=function(){var a;a=1<=arguments.length?v.call(arguments,0):[];b.__super__.show.apply(this,a);this.lang=this.target.attr("data-lang");return null!=this.lang?this.selectEl.val(this.lang):this.selectEl.val(-1)};
return b}(q);t.Toolbar.addButton(s);s=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="link";b.prototype.icon="link";b.prototype.htmlTag="a";b.prototype.disableTag="pre";b.prototype.render=function(){var a;a=1<=arguments.length?v.call(arguments,0):[];b.__super__.render.apply(this,a);return this.popover=new H({button:this})};b.prototype._status=function(){b.__super__._status.call(this);return this.active&&!this.editor.selection.rangeAtEndOf(this.node)?
this.popover.show(this.node):this.popover.hide()};b.prototype.command=function(){var a,b,c,d;d=this.editor.selection.range();this.active?(a=document.createTextNode(this.node.text()),this.node.replaceWith(a),d.selectNode(a)):(a=g(d.extractContents()),c=this.editor.formatter.clearHtml(a.contents(),!1),a=g("<a/>",{href:"http://www.example.com",target:"_blank",text:c||this._t("linkText")}),0<this.editor.selection.blockNodes().length?d.insertNode(a[0]):(b=g("<p/>").append(a),d.insertNode(b[0])),d.selectNodeContents(a[0]),
this.popover.one("popovershow",function(a){return function(){if(c)return a.popover.urlEl.focus(),a.popover.urlEl[0].select();a.popover.textEl.focus();return a.popover.textEl[0].select()}}(this)));this.editor.selection.range(d);return this.editor.trigger("valuechanged")};return b}(u);H=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.render=function(){var a;a='<div class="link-settings">\n  <div class="settings-field">\n    <label>'+this._t("linkText")+
'</label>\n    <input class="link-text" type="text"/>\n    <a class="btn-unlink" href="javascript:;" title="'+this._t("removeLink")+'"\n      tabindex="-1">\n      <span class="simditor-icon simditor-icon-unlink"></span>\n    </a>\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("linkUrl")+'</label>\n    <input class="link-url" type="text"/>\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("linkTarget")+'</label>\n    <select class="link-target">\n      <option value="_blank">'+
this._t("openLinkInNewWindow")+' (_blank)</option>\n      <option value="_self">'+this._t("openLinkInCurrentWindow")+" (_self)</option>\n    </select>\n  </div>\n</div>";this.el.addClass("link-popover").append(a);this.textEl=this.el.find(".link-text");this.urlEl=this.el.find(".link-url");this.unlinkEl=this.el.find(".btn-unlink");this.selectTarget=this.el.find(".link-target");this.textEl.on("keyup",function(a){return function(b){if(13!==b.which)return a.target.text(a.textEl.val()),a.editor.inputManager.throttledValueChanged()}}(this));
this.urlEl.on("keyup",function(a){return function(b){if(13!==b.which)return b=a.urlEl.val(),!/https?:\/\/|^\//ig.test(b)&&b&&(b="http://"+b),a.target.attr("href",b),a.editor.inputManager.throttledValueChanged()}}(this));g([this.urlEl[0],this.textEl[0]]).on("keydown",function(a){return function(b){if(13===b.which||27===b.which||!b.shiftKey&&9===b.which&&g(b.target).hasClass("link-url"))return b.preventDefault(),b=document.createRange(),a.editor.selection.setRangeAfter(a.target,b),a.hide(),a.editor.inputManager.throttledValueChanged()}}(this));
this.unlinkEl.on("click",function(a){return function(b){var d;d=document.createTextNode(a.target.text());a.target.replaceWith(d);a.hide();b=document.createRange();a.editor.selection.setRangeAfter(d,b);return a.editor.inputManager.throttledValueChanged()}}(this));return this.selectTarget.on("change",function(a){return function(b){a.target.attr("target",a.selectTarget.val());return a.editor.inputManager.throttledValueChanged()}}(this))};b.prototype.show=function(){var a;a=1<=arguments.length?v.call(arguments,
0):[];b.__super__.show.apply(this,a);this.textEl.val(this.target.text());return this.urlEl.val(this.target.attr("href"))};return b}(q);t.Toolbar.addButton(s);s=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="image";b.prototype.icon="picture-o";b.prototype.htmlTag="img";b.prototype.disableTag="pre, table";b.prototype.defaultImage="";b.prototype.needFocus=!1;b.prototype._init=function(){var a,f,c,d;if(this.editor.opts.imageButton)if(Array.isArray(this.editor.opts.imageButton))for(this.menu=
[],d=this.editor.opts.imageButton,f=0,c=d.length;f<c;f++)a=d[f],this.menu.push({name:a+"-image",text:this._t(a+"Image")});else this.menu=!1;else this.menu=null!=this.editor.uploader?[{name:"upload-image",text:this._t("uploadImage")},{name:"external-image",text:this._t("externalImage")}]:!1;this.defaultImage=this.editor.opts.defaultImage;this.editor.body.on("click","img:not([data-non-image])",function(a){return function(b){var f;b=g(b.currentTarget);f=document.createRange();f.selectNode(b[0]);a.editor.selection.range(f);
a.editor.util.support.onselectionchange||a.editor.trigger("selectionchanged");return!1}}(this));this.editor.body.on("mouseup","img:not([data-non-image])",function(a){return!1});this.editor.on("selectionchanged.image",function(a){return function(){var b,f;f=a.editor.selection.range();if(null!=f)return b=g(f.cloneContents()).contents(),1===b.length&&b.is("img:not([data-non-image])")?(b=g(f.startContainer).contents().eq(f.startOffset),a.popover.show(b)):a.popover.hide()}}(this));this.editor.on("valuechanged.image",
function(a){return function(){var b;b=a.editor.wrapper.find(".simditor-image-loading");if(0<b.length)return b.each(function(b,f){var c,d;d=g(f);c=d.data("img");if(!(c&&0<c.parent().length)&&(d.remove(),c&&(c=c.data("file")))&&(a.editor.uploader.cancel(c),1>a.editor.body.find("img.uploading").length))return a.editor.uploader.trigger("uploadready",[c])})}}(this));return b.__super__._init.call(this)};b.prototype.render=function(){var a;a=1<=arguments.length?v.call(arguments,0):[];b.__super__.render.apply(this,
a);this.popover=new D({button:this});if("upload"===this.editor.opts.imageButton)return this._initUploader(this.el)};b.prototype.renderMenu=function(){b.__super__.renderMenu.call(this);return this._initUploader()};b.prototype._initUploader=function(a){var b,c,d;null==a&&(a=this.menuEl.find(".menu-item-upload-image"));if(null==this.editor.uploader)this.el.find(".btn-upload").remove();else return b=null,c=function(c){return function(){b&&b.remove();return b=g("<input/>",{type:"file",title:c._t("uploadImage"),
multiple:!0,accept:"image/*"}).appendTo(a)}}(this),c(),a.on("click mousedown","input[type=file]",function(a){return a.stopPropagation()}),a.on("change","input[type=file]",function(a){return function(d){a.editor.inputManager.focused?(a.editor.uploader.upload(b,{inline:!0}),c()):(a.editor.one("focus",function(d){a.editor.uploader.upload(b,{inline:!0});return c()}),a.editor.focus());return a.wrapper.removeClass("menu-on")}}(this)),this.editor.uploader.on("beforeupload",function(a){return function(b,
c){var f;if(c.inline)return c.img?f=g(c.img):(f=a.createImage(c.name),c.img=f),f.addClass("uploading"),f.data("file",c),a.editor.uploader.readImageFile(c.obj,function(b){if(f.hasClass("uploading"))return b=b?b.src:a.defaultImage,a.loadImage(f,b,function(){if(a.popover.active)return a.popover.refresh(),a.popover.srcEl.val(a._t("uploading")).prop("disabled",!0)})})}}(this)),d=g.proxy(this.editor.util.throttle(function(a,b,c,f){if(b.inline&&(a=b.img.data("mask"))){b=a.data("img");if(b.hasClass("uploading")&&
0<b.parent().length)return c=(c/f*100).toFixed(0),99<c&&(c=99),a.find(".progress").height(100-c+"%");a.remove()}},500),this),this.editor.uploader.on("uploadprogress",d),this.editor.uploader.on("uploadsuccess",function(a){return function(b,c,f){var d;if(c.inline&&(d=c.img,d.hasClass("uploading")&&0<d.parent().length)){if("object"!==typeof f)try{f=g.parseJSON(f)}catch(l){f={success:!1}}!1===f.success?(b=f.msg||a._t("uploadFailed"),alert(b),b=a.defaultImage):b=f.file_path;a.loadImage(d,b,function(){var b;
d.removeData("file");d.removeClass("uploading").removeClass("loading");(b=d.data("mask"))&&b.remove();d.removeData("mask");a.editor.trigger("valuechanged");if(1>a.editor.body.find("img.uploading").length)return a.editor.uploader.trigger("uploadready",[c,f])});if(a.popover.active)return a.popover.srcEl.prop("disabled",!1),a.popover.srcEl.val(f.file_path)}}}(this)),this.editor.uploader.on("uploaderror",function(a){return function(b,c,f){var d,l,r;if(c.inline&&"abort"!==f.statusText){if(f.responseText){try{r=
g.parseJSON(f.responseText),l=r.msg}catch(p){l=a._t("uploadError")}alert(l)}d=c.img;if(d.hasClass("uploading")&&0<d.parent().length&&(a.loadImage(d,a.defaultImage,function(){var a;d.removeData("file");d.removeClass("uploading").removeClass("loading");(a=d.data("mask"))&&a.remove();return d.removeData("mask")}),a.popover.active&&(a.popover.srcEl.prop("disabled",!1),a.popover.srcEl.val(a.defaultImage)),a.editor.trigger("valuechanged"),1>a.editor.body.find("img.uploading").length))return a.editor.uploader.trigger("uploadready",
[c,r])}}}(this))};b.prototype._status=function(){return this._disableStatus()};b.prototype.loadImage=function(a,b,c){var d,e,h;h=function(b){return function(){var c,f;c=a.offset();f=b.editor.wrapper.offset();return d.css({top:c.top-f.top,left:c.left-f.left,width:a.width(),height:a.height()}).show()}}(this);a.addClass("loading");d=a.data("mask");d||(d=g('<div class="simditor-image-loading">\n  <div class="progress"></div>\n</div>').hide().appendTo(this.editor.wrapper),h(),a.data("mask",d),d.data("img",
a));e=new Image;e.onload=function(k){return function(){var m,l;if(a.hasClass("loading")||a.hasClass("uploading"))if(l=e.width,m=e.height,a.attr({src:b,width:l,height:m,"data-image-size":l+","+m}).removeClass("loading"),a.hasClass("uploading")?(k.editor.util.reflow(k.editor.body),h()):(d.remove(),a.removeData("mask")),g.isFunction(c))return c(e)}}(this);e.onerror=function(){g.isFunction(c)&&c(!1);d.remove();return a.removeData("mask").removeClass("loading")};return e.src=b};b.prototype.createImage=
function(a){var b;null==a&&(a="Image");this.editor.inputManager.focused||this.editor.focus();b=this.editor.selection.range();b.deleteContents();this.editor.selection.range(b);a=g("<img/>").attr("alt",a);b.insertNode(a[0]);this.editor.selection.setRangeAfter(a,b);this.editor.trigger("valuechanged");return a};b.prototype.command=function(a){var b;b=this.createImage();return this.loadImage(b,a||this.defaultImage,function(a){return function(){a.editor.trigger("valuechanged");a.editor.util.reflow(b);b.click();
return a.popover.one("popovershow",function(){a.popover.srcEl.focus();return a.popover.srcEl[0].select()})}}(this))};return b}(u);D=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.offset={top:6,left:-4};b.prototype.render=function(){var a;a='<div class="link-settings">\n  <div class="settings-field">\n    <label>'+this._t("imageUrl")+'</label>\n    <input class="image-src" type="text" tabindex="1" />\n    <a class="btn-upload" href="javascript:;"\n      title="'+
this._t("uploadImage")+'" tabindex="-1">\n      <span class="simditor-icon simditor-icon-upload"></span>\n    </a>\n  </div>\n  <div class=\'settings-field\'>\n    <label>'+this._t("imageAlt")+'</label>\n    <input class="image-alt" id="image-alt" type="text" tabindex="1" />\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("imageSize")+'</label>\n    <input class="image-size" id="image-width" type="text" tabindex="2" />\n    <span class="times">\u00d7</span>\n    <input class="image-size" id="image-height" type="text" tabindex="3" />\n    <a class="btn-restore" href="javascript:;"\n      title="'+
this._t("restoreImageSize")+'" tabindex="-1">\n      <span class="simditor-icon simditor-icon-undo"></span>\n    </a>\n  </div>\n</div>';this.el.addClass("image-popover").append(a);this.srcEl=this.el.find(".image-src");this.widthEl=this.el.find("#image-width");this.heightEl=this.el.find("#image-height");this.altEl=this.el.find("#image-alt");this.srcEl.on("keydown",function(a){return function(b){if(13===b.which&&!a.target.hasClass("uploading"))return b.preventDefault(),b=document.createRange(),a.button.editor.selection.setRangeAfter(a.target,
b),a.hide()}}(this));this.srcEl.on("blur",function(a){return function(b){return a._loadImage(a.srcEl.val())}}(this));this.el.find(".image-size").on("blur",function(a){return function(b){a._resizeImg(g(b.currentTarget));return a.el.data("popover").refresh()}}(this));this.el.find(".image-size").on("keyup",function(a){return function(b){var d;d=g(b.currentTarget);if(13!==b.which&&27!==b.which&&9!==b.which)return a._resizeImg(d,!0)}}(this));this.el.find(".image-size").on("keydown",function(a){return function(b){var d;
d=g(b.currentTarget);if(13===b.which||27===b.which)return b.preventDefault(),13===b.which?a._resizeImg(d):a._restoreImg(),b=a.target,a.hide(),d=document.createRange(),a.button.editor.selection.setRangeAfter(b,d);if(9===b.which)return a.el.data("popover").refresh()}}(this));this.altEl.on("keydown",function(a){return function(b){if(13===b.which)return b.preventDefault(),b=document.createRange(),a.button.editor.selection.setRangeAfter(a.target,b),a.hide()}}(this));this.altEl.on("keyup",function(a){return function(b){if(13!==
b.which&&27!==b.which&&9!==b.which)return a.alt=a.altEl.val(),a.target.attr("alt",a.alt)}}(this));this.el.find(".btn-restore").on("click",function(a){return function(b){a._restoreImg();return a.el.data("popover").refresh()}}(this));this.editor.on("valuechanged",function(a){return function(b){if(a.active)return a.refresh()}}(this));return this._initUploader()};b.prototype._initUploader=function(){var a,b;a=this.el.find(".btn-upload");if(null==this.editor.uploader)a.remove();else return b=function(b){return function(){b.input&&
b.input.remove();return b.input=g("<input/>",{type:"file",title:b._t("uploadImage"),multiple:!0,accept:"image/*"}).appendTo(a)}}(this),b(),this.el.on("click mousedown","input[type=file]",function(a){return a.stopPropagation()}),this.el.on("change","input[type=file]",function(a){return function(d){a.editor.uploader.upload(a.input,{inline:!0,img:a.target});return b()}}(this))};b.prototype._resizeImg=function(a,b){var c,d,e;null==b&&(b=!1);d=1*a.val();if(this.target&&(g.isNumeric(d)||0>d)&&(a.is(this.widthEl)?
(e=d,c=this.height*d/this.width,this.heightEl.val(c)):(c=d,e=this.width*d/this.height,this.widthEl.val(e)),!b))return this.target.attr({width:e,height:c}),this.editor.trigger("valuechanged")};b.prototype._restoreImg=function(){var a,b;b=(null!=(a=this.target.data("image-size"))?a.split(","):void 0)||[this.width,this.height];this.target.attr({width:1*b[0],height:1*b[1]});this.widthEl.val(b[0]);this.heightEl.val(b[1]);return this.editor.trigger("valuechanged")};b.prototype._loadImage=function(a,b){if(/^data:image/.test(a)&&
!this.editor.uploader)b&&b(!1);else if(this.target.attr("src")!==a)return this.button.loadImage(this.target,a,function(c){return function(d){var e;if(d&&(c.active&&(c.width=d.width,c.height=d.height,c.widthEl.val(c.width),c.heightEl.val(c.height)),/^data:image/.test(a)?(e=c.editor.util.dataURLtoBlob(a),e.name="Base64 Image.png",c.editor.uploader.upload(e,{inline:!0,img:c.target})):c.editor.trigger("valuechanged"),b))return b(d)}}(this))};b.prototype.show=function(){var a;a=1<=arguments.length?v.call(arguments,
0):[];b.__super__.show.apply(this,a);a=this.target;this.width=a.width();this.height=a.height();this.alt=a.attr("alt");if(a.hasClass("uploading"))return this.srcEl.val(this._t("uploading")).prop("disabled",!0);this.srcEl.val(a.attr("src")).prop("disabled",!1);this.widthEl.val(this.width);this.heightEl.val(this.height);return this.altEl.val(this.alt)};return b}(q);t.Toolbar.addButton(s);q=function(g){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,g);b.prototype.name="indent";
b.prototype.icon="indent";b.prototype._init=function(){this.title=this._t(this.name)+" (Tab)";return b.__super__._init.call(this)};b.prototype._status=function(){};b.prototype.command=function(){return this.editor.indentation.indent()};return b}(u);t.Toolbar.addButton(q);q=function(g){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,g);b.prototype.name="outdent";b.prototype.icon="outdent";b.prototype._init=function(){this.title=this._t(this.name)+" (Shift + Tab)";return b.__super__._init.call(this)};
b.prototype._status=function(){};b.prototype.command=function(){return this.editor.indentation.indent(!0)};return b}(u);t.Toolbar.addButton(q);q=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="hr";b.prototype.icon="minus";b.prototype.htmlTag="hr";b.prototype._status=function(){};b.prototype.command=function(){var a,b;a=this.editor.selection.rootNodes().first();0<a.next().length?this.editor.selection.save():b=g("<p/>").append(this.editor.util.phBr);
a=g("<hr/>").insertAfter(a);b?(b.insertAfter(a),this.editor.selection.setRangeAtStartOf(b)):this.editor.selection.restore();return this.editor.trigger("valuechanged")};return b}(u);t.Toolbar.addButton(q);q=function(l){function b(){return b.__super__.constructor.apply(this,arguments)}p(b,l);b.prototype.name="table";b.prototype.icon="table";b.prototype.htmlTag="table";b.prototype.disableTag="pre, li, blockquote";b.prototype.menu=!0;b.prototype._init=function(){b.__super__._init.call(this);g.merge(this.editor.formatter._allowedTags,
"thead th tbody tr td colgroup col".split(" "));g.extend(this.editor.formatter._allowedAttributes,{td:["rowspan","colspan"],col:["width"]});g.extend(this.editor.formatter._allowedStyles,{td:["text-align"],th:["text-align"]});this._initShortcuts();this.editor.on("decorate",function(a){return function(b,c){return c.find("table").each(function(b,c){return a.decorate(g(c))})}}(this));this.editor.on("undecorate",function(a){return function(b,c){return c.find("table").each(function(b,c){return a.undecorate(g(c))})}}(this));
this.editor.on("selectionchanged.table",function(a){return function(b){var c;a.editor.body.find(".simditor-table td, .simditor-table th").removeClass("active");if(c=a.editor.selection.range())return b=a.editor.selection.containerNode(),c.collapsed&&b.is(".simditor-table")&&(b=a.editor.selection.rangeAtStartOf(b)?b.find("th:first"):b.find("td:last"),a.editor.selection.setRangeAtEndOf(b)),b.closest("td, th",a.editor.body).addClass("active")}}(this));this.editor.on("blur.table",function(a){return function(b){return a.editor.body.find(".simditor-table td, .simditor-table th").removeClass("active")}}(this));
this.editor.keystroke.add("up","td",function(a){return function(b,c){a._tdNav(c,"up");return!0}}(this));this.editor.keystroke.add("up","th",function(a){return function(b,c){a._tdNav(c,"up");return!0}}(this));this.editor.keystroke.add("down","td",function(a){return function(b,c){a._tdNav(c,"down");return!0}}(this));return this.editor.keystroke.add("down","th",function(a){return function(b,c){a._tdNav(c,"down");return!0}}(this))};b.prototype._tdNav=function(a,b){var c,d;null==b&&(b="up");c="up"===b?
"prev":"next";d=a.parent("tr");c=this["_"+c+"Row"](d);if(!(0<c.length))return!0;d=d.find("td, th").index(a);return this.editor.selection.setRangeAtEndOf(c.find("td, th").eq(d))};b.prototype._nextRow=function(a){var b;b=a.next("tr");1>b.length&&0<a.parent("thead").length&&(b=a.parent("thead").next("tbody").find("tr:first"));return b};b.prototype._prevRow=function(a){var b;b=a.prev("tr");1>b.length&&0<a.parent("tbody").length&&(b=a.parent("tbody").prev("thead").find("tr"));return b};b.prototype.initResize=
function(a){var b,c,d;d=a.parent(".simditor-table");b=a.find("colgroup");1>b.length&&(b=g("<colgroup/>").prependTo(a),a.find("thead tr th").each(function(a,c){return g("<col/>").appendTo(b)}),this.refreshTableWidth(a));c=g("<div />",{"class":"simditor-resize-handle",contenteditable:"false"}).appendTo(d);d.on("mousemove","td, th",function(a){var h,k,m;if(!d.hasClass("resizing"))if(k=g(a.currentTarget),a=a.pageX-g(a.currentTarget).offset().left,5>a&&0<k.prev().length&&(k=k.prev()),1>k.next("td, th").length)c.hide();
else if(null!=(h=c.data("td"))&&h.is(k))c.show();else if(h=k.parent().find("td, th").index(k),h=b.find("col").eq(h),null!=(m=c.data("col"))&&m.is(h))c.show();else return c.css("left",k.position().left+k.outerWidth()-5).data("td",k).data("col",h).show()});d.on("mouseleave",function(a){return c.hide()});return d.on("mousedown",".simditor-resize-handle",function(a){var b,c,f,l,p,r,q,s,u,t;b=g(a.currentTarget);f=b.data("td");c=b.data("col");p=f.next("td, th");l=c.next("col");u=a.pageX;q=1*f.outerWidth();
s=1*p.outerWidth();r=parseFloat(b.css("left"));t=f.closest("table").width();g(document).on("mousemove.simditor-resize-table",function(a){var f,d;a=a.pageX-u;f=q+a;d=s-a;50>f?(f=50,a=50-q,d=s-a):50>d&&(d=50,a=s-50,f=q+a);c.attr("width",f/t*100+"%");l.attr("width",d/t*100+"%");return b.css("left",r+a)});g(document).one("mouseup.simditor-resize-table",function(a){g(document).off(".simditor-resize-table");return d.removeClass("resizing")});d.addClass("resizing");return!1})};b.prototype._initShortcuts=
function(){this.editor.hotkeys.add("ctrl+alt+up",function(a){return function(b){a.editMenu.find(".menu-item[data-param=insertRowAbove]").click();return!1}}(this));this.editor.hotkeys.add("ctrl+alt+down",function(a){return function(b){a.editMenu.find(".menu-item[data-param=insertRowBelow]").click();return!1}}(this));this.editor.hotkeys.add("ctrl+alt+left",function(a){return function(b){a.editMenu.find(".menu-item[data-param=insertColLeft]").click();return!1}}(this));return this.editor.hotkeys.add("ctrl+alt+right",
function(a){return function(b){a.editMenu.find(".menu-item[data-param=insertColRight]").click();return!1}}(this))};b.prototype.decorate=function(a){var b,c;0<a.parent(".simditor-table").length&&this.undecorate(a);a.wrap('<div class="simditor-table"></div>');1>a.find("thead").length&&(c=g("<thead />"),b=a.find("tr").first(),c.append(b),this._changeCellTag(b,"th"),b=a.find("tbody"),0<b.length?b.before(c):a.prepend(c));this.initResize(a);return a.parent()};b.prototype.undecorate=function(a){if(0<a.parent(".simditor-table").length)return a.parent().replaceWith(a)};
b.prototype.renderMenu=function(){var a;g('<div class="menu-create-table">\n</div>\n<div class="menu-edit-table">\n  <ul>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteRow">\n        <span>'+this._t("deleteRow")+'</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertRowAbove">\n        <span>'+this._t("insertRowAbove")+' ( Ctrl + Alt + \u2191 )</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertRowBelow">\n        <span>'+
this._t("insertRowBelow")+' ( Ctrl + Alt + \u2193 )</span>\n      </a>\n    </li>\n    <li><span class="separator"></span></li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteCol">\n        <span>'+this._t("deleteColumn")+'</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertColLeft">\n        <span>'+this._t("insertColumnLeft")+' ( Ctrl + Alt + \u2190 )</span>\n      </a>\n    </li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="insertColRight">\n        <span>'+
this._t("insertColumnRight")+' ( Ctrl + Alt + \u2192 )</span>\n      </a>\n    </li>\n    <li><span class="separator"></span></li>\n    <li>\n      <a tabindex="-1" unselectable="on" class="menu-item"\n        href="javascript:;" data-param="deleteTable">\n        <span>'+this._t("deleteTable")+"</span>\n      </a>\n    </li>\n  </ul>\n</div>").appendTo(this.menuWrapper);this.createMenu=this.menuWrapper.find(".menu-create-table");this.editMenu=this.menuWrapper.find(".menu-edit-table");a=this.createTable(6,
6).appendTo(this.createMenu);this.createMenu.on("mouseenter","td, th",function(b){return function(c){var d,e;b.createMenu.find("td, th").removeClass("selected");d=g(c.currentTarget);c=d.parent();e=c.find("td, th").index(d)+1;d=c.prevAll("tr").addBack();c.parent().is("tbody")&&(d=d.add(a.find("thead tr")));return d.find("td:lt("+e+"), th:lt("+e+")").addClass("selected")}}(this));this.createMenu.on("mouseleave",function(a){return g(a.currentTarget).find("td, th").removeClass("selected")});return this.createMenu.on("mousedown",
"td, th",function(b){return function(c){var d,e;b.wrapper.removeClass("menu-on");if(b.editor.inputManager.focused)return d=g(c.currentTarget),c=d.parent(),d=c.find("td").index(d)+1,e=c.prevAll("tr").length+1,c.parent().is("tbody")&&(e+=1),a=b.createTable(e,d,!0),c=b.editor.selection.blockNodes().last(),b.editor.util.isEmptyNode(c)?c.replaceWith(a):c.after(a),b.decorate(a),b.editor.selection.setRangeAtStartOf(a.find("th:first")),b.editor.trigger("valuechanged"),!1}}(this))};b.prototype.createTable=
function(a,b,c){var d,e,h,k,l,n,p,r,q;d=g("<table/>");k=g("<thead/>").appendTo(d);e=g("<tbody/>").appendTo(d);for(r=n=0;0<=a?n<a:n>a;r=0<=a?++n:--n)for(l=g("<tr/>"),l.appendTo(0===r?k:e),p=0,q=b;0<=q?p<q:p>q;0<=q?++p:--p)h=g(0===r?"<th/>":"<td/>").appendTo(l),c&&h.append(this.editor.util.phBr);return d};b.prototype.refreshTableWidth=function(a){var b,c;c=a.width();b=a.find("col");return a.find("thead tr th").each(function(a,e){return b.eq(a).attr("width",g(e).outerWidth()/c*100+"%")})};b.prototype.setActive=
function(a){b.__super__.setActive.call(this,a);if(a)return this.createMenu.hide(),this.editMenu.show();this.createMenu.show();return this.editMenu.hide()};b.prototype._changeCellTag=function(a,b){return a.find("td, th").each(function(a,d){var e;e=g(d);return e.replaceWith("<"+b+">"+e.html()+"</"+b+">")})};b.prototype.deleteRow=function(a){var b,c;c=a.parent("tr");if(1>c.closest("table").find("tr").length)return this.deleteTable(a);b=this._nextRow(c);0<b.length||(b=this._prevRow(c));a=c.find("td, th").index(a);
c.parent().is("thead")&&(b.appendTo(c.parent()),this._changeCellTag(b,"th"));c.remove();return this.editor.selection.setRangeAtEndOf(b.find("td, th").eq(a))};b.prototype.insertRow=function(a,b){var c,d,e,h,k,l;null==b&&(b="after");d=a.parent("tr");c=d.closest("table");h=0;c.find("tr").each(function(a,b){return h=Math.max(h,g(b).find("td").length)});k=d.find("td, th").index(a);c=g("<tr/>");e="td";if("after"===b&&d.parent().is("thead"))d.parent().next("tbody").prepend(c);else if("before"===b&&d.parent().is("thead"))d.before(c),
d.parent().next("tbody").prepend(d),this._changeCellTag(d,"td"),e="th";else d[b](c);d=1;for(l=h;1<=l?d<=l:d>=l;1<=l?++d:--d)g("<"+e+"/>").append(this.editor.util.phBr).appendTo(c);return this.editor.selection.setRangeAtStartOf(c.find("td, th").eq(k))};b.prototype.deleteCol=function(a){var b,c,d,e;b=a.parent("tr");e=2>b.closest("table").find("tr").length;d=1>a.siblings("td, th").length;if(e&&d)return this.deleteTable(a);c=b.find("td, th").index(a);a=a.next("td, th");0<a.length||(a=b.prev("td, th"));
b=b.closest("table");b.find("col").eq(c).remove();b.find("tr").each(function(a,b){return g(b).find("td, th").eq(c).remove()});this.refreshTableWidth(b);return this.editor.selection.setRangeAtEndOf(a)};b.prototype.insertCol=function(a,b){var c,d,e,h,k;null==b&&(b="after");h=a.parent("tr").find("td, th").index(a);e=a.closest("table");c=e.find("col").eq(h);e.find("tr").each(function(a){return function(c,d){var e;e=g(d).parent().is("thead")?"th":"td";e=g("<"+e+"/>").append(a.editor.util.phBr);return g(d).find("td, th").eq(h)[b](e)}}(this));
d=g("<col/>");c[b](d);k=e.width();k=Math.max(parseFloat(c.attr("width"))/2,50/k*100);c.attr("width",k+"%");d.attr("width",k+"%");this.refreshTableWidth(e);c="after"===b?a.next("td, th"):a.prev("td, th");return this.editor.selection.setRangeAtStartOf(c)};b.prototype.deleteTable=function(a){var b;b=a.closest(".simditor-table");a=b.next("p");b.remove();if(0<a.length)return this.editor.selection.setRangeAtStartOf(a)};b.prototype.command=function(a){var b;b=this.editor.selection.containerNode().closest("td, th");
if(0<b.length){if("deleteRow"===a)this.deleteRow(b);else if("insertRowAbove"===a)this.insertRow(b,"before");else if("insertRowBelow"===a)this.insertRow(b);else if("deleteCol"===a)this.deleteCol(b);else if("insertColLeft"===a)this.insertCol(b,"before");else if("insertColRight"===a)this.insertCol(b);else if("deleteTable"===a)this.deleteTable(b);else return;return this.editor.trigger("valuechanged")}};return b}(u);t.Toolbar.addButton(q);q=function(l){function b(){return b.__super__.constructor.apply(this,
arguments)}p(b,l);b.prototype.name="strikethrough";b.prototype.icon="strikethrough";b.prototype.htmlTag="strike";b.prototype.disableTag="pre";b.prototype._activeStatus=function(){var a;a=!0===document.queryCommandState("strikethrough");this.setActive(a);return this.active};b.prototype.command=function(){document.execCommand("strikethrough");this.editor.util.support.oninput||this.editor.trigger("valuechanged");return g(document).trigger("selectionchange")};return b}(u);t.Toolbar.addButton(q);u=function(g){function b(){return b.__super__.constructor.apply(this,
arguments)}p(b,g);b.prototype.name="alignment";b.prototype.icon="align-left";b.prototype.htmlTag="p, h1, h2, h3, h4, td, th";b.prototype._init=function(){this.menu=[{name:"left",text:this._t("alignLeft"),icon:"align-left",param:"left"},{name:"center",text:this._t("alignCenter"),icon:"align-center",param:"center"},{name:"right",text:this._t("alignRight"),icon:"align-right",param:"right"}];return b.__super__._init.call(this)};b.prototype.setActive=function(a,f){null==f&&(f="left");"left"!==f&&"center"!==
f&&"right"!==f&&(f="left");"left"===f?b.__super__.setActive.call(this,!1):b.__super__.setActive.call(this,a);this.el.removeClass("align-left align-center align-right");a&&this.el.addClass("align-"+f);this.setIcon("align-"+f);return this.menuEl.find(".menu-item").show().end().find(".menu-item-"+f).hide()};b.prototype._status=function(){this.nodes=this.editor.selection.nodes().filter(this.htmlTag);if(1>this.nodes.length)return this.setDisabled(!0),this.setActive(!1);this.setDisabled(!1);return this.setActive(!0,
this.nodes.first().css("text-align"))};b.prototype.command=function(a){if("left"!==a&&"center"!==a&&"right"!==a)throw Error("simditor alignment button: invalid align "+a);this.nodes.css({"text-align":"left"===a?"":a});this.editor.trigger("valuechanged");return this.editor.inputManager.throttledSelectionChanged()};return b}(u);t.Toolbar.addButton(u);return t});


(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toMarkdown = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * to-markdown - an HTML to Markdown converter
 *
 * Copyright 2011-15, Dom Christie
 * Licenced under the MIT licence
 *
 */

'use strict';

var toMarkdown;
var converters;
var mdConverters = require('./lib/md-converters');
var gfmConverters = require('./lib/gfm-converters');
var collapse = require('collapse-whitespace');

/*
 * Set up window and document for Node.js
 */

var _window = (typeof window !== 'undefined' ? window : this), _document;
if (typeof document === 'undefined') {
  _document = require('jsdom').jsdom();
}
else {
  _document = document;
}

/*
 * Utilities
 */

function trim(string) {
  return string.replace(/^[ \r\n\t]+|[ \r\n\t]+$/g, '');
}

var blocks = ['address', 'article', 'aside', 'audio', 'blockquote', 'body',
  'canvas', 'center', 'dd', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption',
  'figure', 'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4','h5', 'h6',
  'header', 'hgroup', 'hr', 'html', 'isindex', 'li', 'main', 'menu', 'nav',
  'noframes', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table',
  'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'
];

function isBlock(node) {
  return blocks.indexOf(node.nodeName.toLowerCase()) !== -1;
}

var voids = [
  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
  'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'
];

function isVoid(node) {
  return voids.indexOf(node.nodeName.toLowerCase()) !== -1;
}

/*
 * Parsing HTML strings
 */

function canParseHtml() {
  var Parser = _window.DOMParser, canParse = false;

  // Adapted from https://gist.github.com/1129031
  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new Parser().parseFromString('', 'text/html')) {
      canParse = true;
    }
  } catch (e) {}
  return canParse;
}

function createHtmlParser() {
  var Parser = function () {};

  Parser.prototype.parseFromString = function (string) {
    var newDoc = _document.implementation.createHTMLDocument('');

    if (string.toLowerCase().indexOf('<!doctype') > -1) {
      newDoc.documentElement.innerHTML = string;
    }
    else {
      newDoc.body.innerHTML = string;
    }
    return newDoc;
  };
  return Parser;
}

var HtmlParser = canParseHtml() ? _window.DOMParser : createHtmlParser();

function htmlToDom(string) {
  var tree = new HtmlParser().parseFromString(string, 'text/html');
  collapse(tree, isBlock);
  return tree;
}

/*
 * Flattens DOM tree into single array
 */

function bfsOrder(node) {
  var inqueue = [node],
      outqueue = [],
      elem, children, i;

  while (inqueue.length > 0) {
    elem = inqueue.shift();
    outqueue.push(elem);
    children = elem.childNodes;
    for (i = 0 ; i < children.length; i++) {
      if (children[i].nodeType === 1) { inqueue.push(children[i]); }
    }
  }
  outqueue.shift();
  return outqueue;
}

/*
 * Contructs a Markdown string of replacement text for a given node
 */

function getContent(node) {
  var text = '';
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].nodeType === 1) {
      text += node.childNodes[i]._replacement;
    }
    else if (node.childNodes[i].nodeType === 3) {
      text += node.childNodes[i].data;
    }
    else { continue; }
  }
  return text;
}

/*
 * Returns the HTML string of an element with its contents converted
 */

function outer(node, content) {
  return node.cloneNode(false).outerHTML.replace('><', '>'+ content +'<');
}

function canConvert(node, filter) {
  if (typeof filter === 'string') {
    return filter === node.nodeName.toLowerCase();
  }
  if (Array.isArray(filter)) {
    return filter.indexOf(node.nodeName.toLowerCase()) !== -1;
  }
  else if (typeof filter === 'function') {
    return filter.call(toMarkdown, node);
  }
  else {
    throw new TypeError('`filter` needs to be a string, array, or function');
  }
}

function isFlankedByWhitespace(side, node) {
  var sibling, regExp, isFlanked;

  if (side === 'left') {
    sibling = node.previousSibling;
    regExp = / $/;
  }
  else {
    sibling = node.nextSibling;
    regExp = /^ /;
  }

  if (sibling) {
    if (sibling.nodeType === 3) {
      isFlanked = regExp.test(sibling.nodeValue);
    }
    else if(sibling.nodeType === 1 && !isBlock(sibling)) {
      isFlanked = regExp.test(sibling.textContent);
    }
  }
  return isFlanked;
}

function flankingWhitespace(node) {
  var leading = '', trailing = '';

  if (!isBlock(node)) {
    var hasLeading = /^[ \r\n\t]/.test(node.innerHTML),
        hasTrailing = /[ \r\n\t]$/.test(node.innerHTML);

    if (hasLeading && !isFlankedByWhitespace('left', node)) {
      leading = ' ';
    }
    if (hasTrailing && !isFlankedByWhitespace('right', node)) {
      trailing = ' ';
    }
  }

  return { leading: leading, trailing: trailing };
}

/*
 * Finds a Markdown converter, gets the replacement, and sets it on
 * `_replacement`
 */

function process(node) {
  var replacement, content = getContent(node);

  // Remove blank nodes
  if (!isVoid(node) && !/A/.test(node.nodeName) && /^\s*$/i.test(content)) {
    node._replacement = '';
    return;
  }

  for (var i = 0; i < converters.length; i++) {
    var converter = converters[i];

    if (canConvert(node, converter.filter)) {
      if (typeof converter.replacement !== 'function') {
        throw new TypeError(
          '`replacement` needs to be a function that returns a string'
        );
      }

      var whitespace = flankingWhitespace(node);

      if (whitespace.leading || whitespace.trailing) {
        content = trim(content);
      }
      replacement = whitespace.leading +
                    converter.replacement.call(toMarkdown, content, node) +
                    whitespace.trailing;
      break;
    }
  }

  node._replacement = replacement;
}

toMarkdown = function (input, options) {
  options = options || {};

  if (typeof input !== 'string') {
    throw new TypeError(input + ' is not a string');
  }

  // Escape potential ol triggers
  input = input.replace(/(\d+)\. /g, '$1\\. ');

  var clone = htmlToDom(input).body,
      nodes = bfsOrder(clone),
      output;

  converters = mdConverters.slice(0);
  if (options.gfm) {
    converters = gfmConverters.concat(converters);
  }

  if (options.converters) {
    converters = options.converters.concat(converters);
  }

  // Process through nodes in reverse (so deepest child elements are first).
  for (var i = nodes.length - 1; i >= 0; i--) {
    process(nodes[i]);
  }
  output = getContent(clone);

  return output.replace(/^[\t\r\n]+|[\t\r\n\s]+$/g, '')
               .replace(/\n\s+\n/g, '\n\n')
               .replace(/\n{3,}/g, '\n\n');
};

toMarkdown.isBlock = isBlock;
toMarkdown.isVoid = isVoid;
toMarkdown.trim = trim;
toMarkdown.outer = outer;

module.exports = toMarkdown;

},{"./lib/gfm-converters":2,"./lib/md-converters":3,"collapse-whitespace":4,"jsdom":7}],2:[function(require,module,exports){
'use strict';

function cell(content, node) {
  var index = Array.prototype.indexOf.call(node.parentNode.childNodes, node);
  var prefix = ' ';
  if (index === 0) { prefix = '| '; }
  return prefix + content + ' |';
}

var highlightRegEx = /highlight highlight-(\S+)/;

module.exports = [
  {
    filter: 'br',
    replacement: function () {
      return '\n';
    }
  },
  {
    filter: ['del', 's', 'strike'],
    replacement: function (content) {
      return '~~' + content + '~~';
    }
  },

  {
    filter: function (node) {
      return node.type === 'checkbox' && node.parentNode.nodeName === 'LI';
    },
    replacement: function (content, node) {
      return (node.checked ? '[x]' : '[ ]') + ' ';
    }
  },

  {
    filter: ['th', 'td'],
    replacement: function (content, node) {
      return cell(content, node);
    }
  },

  {
    filter: 'tr',
    replacement: function (content, node) {
      var borderCells = '';
      var alignMap = { left: ':--', right: '--:', center: ':-:' };

      if (node.parentNode.nodeName === 'THEAD') {
        for (var i = 0; i < node.childNodes.length; i++) {
          var align = node.childNodes[i].attributes.align;
          var border = '---';

          if (align) { border = alignMap[align.value] || border; }

          borderCells += cell(border, node.childNodes[i]);
        }
      }
      return '\n' + content + (borderCells ? '\n' + borderCells : '');
    }
  },

  {
    filter: 'table',
    replacement: function (content) {
      return '\n\n' + content + '\n\n';
    }
  },

  {
    filter: ['thead', 'tbody', 'tfoot'],
    replacement: function (content) {
      return content;
    }
  },

  // Fenced code blocks
  {
    filter: function (node) {
      return node.nodeName === 'PRE' &&
             node.firstChild &&
             node.firstChild.nodeName === 'CODE';
    },
    replacement: function(content, node) {
      return '\n\n```\n' + node.firstChild.textContent + '\n```\n\n';
    }
  },

  // Syntax-highlighted code blocks
  {
    filter: function (node) {
      return node.nodeName === 'PRE' &&
             node.parentNode.nodeName === 'DIV' &&
             highlightRegEx.test(node.parentNode.className);
    },
    replacement: function (content, node) {
      var language = node.parentNode.className.match(highlightRegEx)[1];
      return '\n\n```' + language + '\n' + node.textContent + '\n```\n\n';
    }
  },

  {
    filter: function (node) {
      return node.nodeName === 'DIV' &&
             highlightRegEx.test(node.className);
    },
    replacement: function (content) {
      return '\n\n' + content + '\n\n';
    }
  }
];

},{}],3:[function(require,module,exports){
'use strict';

module.exports = [
  {
    filter: 'p',
    replacement: function (content) {
      return '\n\n' + content + '\n\n';
    }
  },

  {
    filter: 'br',
    replacement: function () {
      return '  \n';
    }
  },

  {
    filter: ['h1', 'h2', 'h3', 'h4','h5', 'h6'],
    replacement: function(content, node) {
      var hLevel = node.nodeName.charAt(1);
      var hPrefix = '';
      for(var i = 0; i < hLevel; i++) {
        hPrefix += '#';
      }
      return '\n\n' + hPrefix + ' ' + content + '\n\n';
    }
  },

  {
    filter: 'hr',
    replacement: function () {
      return '\n\n* * *\n\n';
    }
  },

  {
    filter: ['em', 'i'],
    replacement: function (content) {
      return '_' + content + '_';
    }
  },

  {
    filter: ['strong', 'b'],
    replacement: function (content) {
      return '**' + content + '**';
    }
  },

  // Inline code
  {
    filter: function (node) {
      var hasSiblings = node.previousSibling || node.nextSibling;
      var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings;

      return node.nodeName === 'CODE' && !isCodeBlock;
    },
    replacement: function(content) {
      return '`' + content + '`';
    }
  },

  {
    filter: function (node) {
      return node.nodeName === 'A' && node.getAttribute('href');
    },
    replacement: function(content, node) {
      var titlePart = node.title ? ' "'+ node.title +'"' : '';
      return '[' + content + '](' + node.getAttribute('href') + titlePart + ')';
    }
  },

  {
    filter: 'img',
    replacement: function(content, node) {
      var alt = node.alt || '';
      var src = node.getAttribute('src') || '';
      var title = node.title || '';
      var titlePart = title ? ' "'+ title +'"' : '';
      return src ? '![' + alt + ']' + '(' + src + titlePart + ')' : '';
    }
  },

  // Code blocks
  {
    filter: function (node) {
      return node.nodeName === 'PRE' && node.firstChild.nodeName === 'CODE';
    },
    replacement: function(content, node) {
      return '\n\n    ' + node.firstChild.textContent.replace(/\n/g, '\n    ') + '\n\n';
    }
  },

  {
    filter: 'blockquote',
    replacement: function (content) {
      content = this.trim(content);
      content = content.replace(/\n{3,}/g, '\n\n');
      content = content.replace(/^/gm, '> ');
      return '\n\n' + content + '\n\n';
    }
  },

  {
    filter: 'li',
    replacement: function (content, node) {
      content = content.replace(/^\s+/, '').replace(/\n/gm, '\n    ');
      var prefix = '*   ';
      var parent = node.parentNode;
      var index = Array.prototype.indexOf.call(parent.children, node) + 1;

      prefix = /ol/i.test(parent.nodeName) ? index + '.  ' : '*   ';
      return prefix + content;
    }
  },

  {
    filter: ['ul', 'ol'],
    replacement: function (content, node) {
      var strings = [];
      for (var i = 0; i < node.childNodes.length; i++) {
        strings.push(node.childNodes[i]._replacement);
      }

      if (/li/i.test(node.parentNode.nodeName)) {
        return '\n' + strings.join('\n');
      }
      return '\n\n' + strings.join('\n') + '\n\n';
    }
  },

  {
    filter: function (node) {
      return this.isBlock(node);
    },
    replacement: function (content, node) {
      return '\n\n' + this.outer(node, content) + '\n\n';
    }
  },

  // Anything else!
  {
    filter: function () {
      return true;
    },
    replacement: function (content, node) {
      return this.outer(node, content);
    }
  }
];
},{}],4:[function(require,module,exports){
'use strict';

var voidElements = require('void-elements');
Object.keys(voidElements).forEach(function (name) {
  voidElements[name.toUpperCase()] = 1;
});

var blockElements = {};
require('block-elements').forEach(function (name) {
  blockElements[name.toUpperCase()] = 1;
});

/**
 * isBlockElem(node) determines if the given node is a block element.
 *
 * @param {Node} node
 * @return {Boolean}
 */
function isBlockElem(node) {
  return !!(node && blockElements[node.nodeName]);
}

/**
 * isVoid(node) determines if the given node is a void element.
 *
 * @param {Node} node
 * @return {Boolean}
 */
function isVoid(node) {
  return !!(node && voidElements[node.nodeName]);
}

/**
 * whitespace(elem [, isBlock]) removes extraneous whitespace from an
 * the given element. The function isBlock may optionally be passed in
 * to determine whether or not an element is a block element; if none
 * is provided, defaults to using the list of block elements provided
 * by the `block-elements` module.
 *
 * @param {Node} elem
 * @param {Function} blockTest
 */
function collapseWhitespace(elem, isBlock) {
  if (!elem.firstChild || elem.nodeName === 'PRE') return;

  if (typeof isBlock !== 'function') {
    isBlock = isBlockElem;
  }

  var prevText = null;
  var prevVoid = false;

  var prev = null;
  var node = next(prev, elem);

  while (node !== elem) {
    if (node.nodeType === 3) {
      // Node.TEXT_NODE
      var text = node.data.replace(/[ \r\n\t]+/g, ' ');

      if ((!prevText || / $/.test(prevText.data)) && !prevVoid && text[0] === ' ') {
        text = text.substr(1);
      }

      // `text` might be empty at this point.
      if (!text) {
        node = remove(node);
        continue;
      }

      node.data = text;
      prevText = node;
    } else if (node.nodeType === 1) {
      // Node.ELEMENT_NODE
      if (isBlock(node) || node.nodeName === 'BR') {
        if (prevText) {
          prevText.data = prevText.data.replace(/ $/, '');
        }

        prevText = null;
        prevVoid = false;
      } else if (isVoid(node)) {
        // Avoid trimming space around non-block, non-BR void elements.
        prevText = null;
        prevVoid = true;
      }
    } else {
      node = remove(node);
      continue;
    }

    var nextNode = next(prev, node);
    prev = node;
    node = nextNode;
  }

  if (prevText) {
    prevText.data = prevText.data.replace(/ $/, '');
    if (!prevText.data) {
      remove(prevText);
    }
  }
}

/**
 * remove(node) removes the given node from the DOM and returns the
 * next node in the sequence.
 *
 * @param {Node} node
 * @return {Node} node
 */
function remove(node) {
  var next = node.nextSibling || node.parentNode;

  node.parentNode.removeChild(node);

  return next;
}

/**
 * next(prev, current) returns the next node in the sequence, given the
 * current and previous nodes.
 *
 * @param {Node} prev
 * @param {Node} current
 * @return {Node}
 */
function next(prev, current) {
  if (prev && prev.parentNode === current || current.nodeName === 'PRE') {
    return current.nextSibling || current.parentNode;
  }

  return current.firstChild || current.nextSibling || current.parentNode;
}

module.exports = collapseWhitespace;

},{"block-elements":5,"void-elements":6}],5:[function(require,module,exports){
/**
 * This file automatically generated from `build.js`.
 * Do not manually edit.
 */

module.exports = [
  "address",
  "article",
  "aside",
  "audio",
  "blockquote",
  "canvas",
  "dd",
  "div",
  "dl",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "main",
  "nav",
  "noscript",
  "ol",
  "output",
  "p",
  "pre",
  "section",
  "table",
  "tfoot",
  "ul",
  "video"
];

},{}],6:[function(require,module,exports){
/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "keygen": true,
  "link": true,
  "menuitem": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};

},{}],7:[function(require,module,exports){

},{}]},{},[1])(1)
});

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-autosave', ["jquery","simple-module","simditor"], function (a0,b1,c2) {
      return (root['SimditorAutosave'] = factory(a0,b1,c2));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simple-module"),require("simditor"));
  } else {
    root['SimditorAutosave'] = factory(jQuery,SimpleModule,Simditor);
  }
}(this, function ($, SimpleModule, Simditor) {

var SimditorAutosave,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SimditorAutosave = (function(superClass) {
  extend(SimditorAutosave, superClass);

  function SimditorAutosave() {
    return SimditorAutosave.__super__.constructor.apply(this, arguments);
  }

  SimditorAutosave.pluginName = 'Autosave';

  SimditorAutosave.prototype.opts = {
    autosave: true,
    autosavePath: null
  };

  SimditorAutosave.prototype._init = function() {
    var currentVal, link, name, val;
    this.editor = this._module;
    if (!this.opts.autosave) {
      return;
    }
    this.name = typeof this.opts.autosave === 'string' ? this.opts.autosave : 'simditor';
    if (this.opts.autosavePath) {
      this.path = this.opts.autosavePath;
    } else {
      link = $("<a/>", {
        href: location.href
      });
      name = this.editor.textarea.data('autosave') || this.name;
      this.path = "/" + (link[0].pathname.replace(/\/$/g, "").replace(/^\//g, "")) + "/autosave/" + name + "/";
    }
    if (!this.path) {
      return;
    }
    this.editor.on("valuechanged", (function(_this) {
      return function() {
        return _this.storage.set(_this.path, _this.editor.getValue());
      };
    })(this));
    this.editor.el.closest('form').on('ajax:success.simditor-' + this.editor.id, (function(_this) {
      return function(e) {
        return _this.storage.remove(_this.path);
      };
    })(this));
    val = this.storage.get(this.path);
    if (!val) {
      return;
    }
    currentVal = this.editor.textarea.val();
    if (val === currentVal) {
      return;
    }
    if (this.editor.textarea.is('[data-autosave-confirm]')) {
      if (confirm(this.editor.textarea.data('autosave-confirm') || 'Are you sure to restore unsaved changes?')) {
        return this.editor.setValue(val);
      } else {
        return this.storage.remove(this.path);
      }
    } else {
      return this.editor.setValue(val);
    }
  };

  SimditorAutosave.prototype.storage = {
    supported: function() {
      var error;
      try {
        localStorage.setItem('_storageSupported', 'yes');
        localStorage.removeItem('_storageSupported');
        return true;
      } catch (_error) {
        error = _error;
        return false;
      }
    },
    set: function(key, val, session) {
      var storage;
      if (session == null) {
        session = false;
      }
      if (!this.supported()) {
        return;
      }
      storage = session ? sessionStorage : localStorage;
      return storage.setItem(key, val);
    },
    get: function(key, session) {
      var storage;
      if (session == null) {
        session = false;
      }
      if (!this.supported()) {
        return;
      }
      storage = session ? sessionStorage : localStorage;
      return storage[key];
    },
    remove: function(key, session) {
      var storage;
      if (session == null) {
        session = false;
      }
      if (!this.supported()) {
        return;
      }
      storage = session ? sessionStorage : localStorage;
      return storage.removeItem(key);
    }
  };

  return SimditorAutosave;

})(SimpleModule);

Simditor.connect(SimditorAutosave);

return SimditorAutosave;

}));


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-emoji', ["jquery","simditor"], function (a0,b1) {
      return (root['EmojiButton'] = factory(a0,b1));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("Simditor"));
  } else {
    root['SimditorEmoji'] = factory(jQuery,Simditor);
  }
}(this, function ($, Simditor) {

var EmojiButton,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

EmojiButton = (function(superClass) {
  extend(EmojiButton, superClass);

  EmojiButton.i18n = {
    'zh-CN': {
      emoji: '表情'
    },
    'en-US': {
      emoji: 'emoji'
    }
  };

  EmojiButton.images = ['smile', 'smiley', 'laughing', 'blush', 'heart_eyes', 'smirk', 'flushed', 'grin', 'wink', 'kissing_closed_eyes', 'stuck_out_tongue_winking_eye', 'stuck_out_tongue', 'sleeping', 'worried', 'expressionless', 'sweat_smile', 'cold_sweat', 'joy', 'sob', 'angry', 'mask', 'scream', 'sunglasses', 'heart', 'broken_heart', 'star', 'anger', 'exclamation', 'question', 'zzz', 'thumbsup', 'thumbsdown', 'ok_hand', 'punch', 'v', 'clap', 'muscle', 'pray', 'skull', 'trollface'];

  EmojiButton.prototype.name = 'emoji';

  EmojiButton.prototype.icon = 'smile-o';

  EmojiButton.prototype.menu = true;

  function EmojiButton() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    EmojiButton.__super__.constructor.apply(this, args);
    $.merge(this.editor.formatter._allowedAttributes['img'], ['data-emoji', 'alt']);
  }

  EmojiButton.prototype.renderMenu = function() {
    var $list, dir, html, i, len, name, opts, ref, tpl;
    tpl = '<ul class="emoji-list">\n</ul>';
    opts = $.extend({
      imagePath: 'images/emoji/',
      images: EmojiButton.images
    }, this.editor.opts.emoji || {});
    html = "";
    dir = opts.imagePath.replace(/\/$/, '') + '/';
    ref = opts.images;
    for (i = 0, len = ref.length; i < len; i++) {
      name = ref[i];
      html += "<li data-name='" + name + "'><img src='" + dir + name + ".png' width='20' height='20' alt='" + name + "' /></li>";
    }
    $list = $(tpl);
    $list.html(html).appendTo(this.menuWrapper);
    return $list.on('mousedown', 'li', (function(_this) {
      return function(e) {
        var $img;
        _this.wrapper.removeClass('menu-on');
        if (!_this.editor.inputManager.focused) {
          return;
        }
        $img = $(e.currentTarget).find('img').clone().attr({
          'data-emoji': true,
          'data-non-image': true
        });
        _this.editor.selection.insertNode($img);
        _this.editor.trigger('valuechanged');
        _this.editor.trigger('selectionchanged');
        return false;
      };
    })(this));
  };

  EmojiButton.prototype.status = function() {};

  return EmojiButton;

})(Simditor.Button);

Simditor.Toolbar.addButton(EmojiButton);

return EmojiButton;

}));


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-markdown', ["jquery","simditor","to-markdown","marked"], function (a0,b1,c2,d3) {
      return (root['SimditorMarkdown'] = factory(a0,b1,c2,d3));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simditor"),require("to-markdown"),require("marked"));
  } else {
    root['SimditorMarkdown'] = factory(jQuery,Simditor,toMarkdown,marked);
  }
}(this, function ($, Simditor, toMarkdown, marked) {

var SimditorMarkdown,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SimditorMarkdown = (function(superClass) {
  extend(SimditorMarkdown, superClass);

  function SimditorMarkdown() {
    return SimditorMarkdown.__super__.constructor.apply(this, arguments);
  }

  SimditorMarkdown.prototype.name = 'markdown';

  SimditorMarkdown.prototype.icon = 'markdown';

  SimditorMarkdown.prototype.needFocus = false;

  SimditorMarkdown.prototype._init = function() {
    SimditorMarkdown.__super__._init.call(this);
    this.markdownEl = $('<div class="markdown-editor" />').insertBefore(this.editor.body);
    this.textarea = $('<textarea/>').attr('placeholder', this.editor.opts.placeholder).appendTo(this.markdownEl);
    this.textarea.on('focus', (function(_this) {
      return function(e) {
        return _this.editor.el.addClass('focus');
      };
    })(this)).on('blur', (function(_this) {
      return function(e) {
        return _this.editor.el.removeClass('focus');
      };
    })(this));
    this.editor.on('valuechanged', (function(_this) {
      return function(e) {
        if (!_this.editor.markdownMode) {
          return;
        }
        return _this._initMarkdownValue();
      };
    })(this));
    this.markdownChange = this.editor.util.throttle((function(_this) {
      return function() {
        _this._autosizeTextarea();
        return _this._convert();
      };
    })(this), 200);
    if (this.editor.util.support.oninput) {
      this.textarea.on('input', (function(_this) {
        return function(e) {
          return _this.markdownChange();
        };
      })(this));
    } else {
      this.textarea.on('keyup', (function(_this) {
        return function(e) {
          return _this.markdownChange();
        };
      })(this));
    }
    if (this.editor.opts.markdown) {
      return this.editor.on('initialized', (function(_this) {
        return function() {
          return _this.el.mousedown();
        };
      })(this));
    }
  };

  SimditorMarkdown.prototype.status = function() {};

  SimditorMarkdown.prototype.command = function() {
    var button, i, len, ref;
    this.editor.blur();
    this.editor.el.toggleClass('simditor-markdown');
    this.editor.markdownMode = this.editor.el.hasClass('simditor-markdown');
    if (this.editor.markdownMode) {
      this.editor.inputManager.lastCaretPosition = null;
      this.editor.hidePopover();
      this.editor.body.removeAttr('contenteditable');
      this._initMarkdownValue();
    } else {
      this.textarea.val('');
      this.editor.body.attr('contenteditable', 'true');
    }
    ref = this.editor.toolbar.buttons;
    for (i = 0, len = ref.length; i < len; i++) {
      button = ref[i];
      if (button.name === 'markdown') {
        button.setActive(this.editor.markdownMode);
      } else {
        button.setDisabled(this.editor.markdownMode);
      }
    }
    return null;
  };

  SimditorMarkdown.prototype._initMarkdownValue = function() {
    this._fileterUnsupportedTags();
    this.textarea.val(toMarkdown(this.editor.getValue(), {
      gfm: true
    }));
    return this._autosizeTextarea();
  };

  SimditorMarkdown.prototype._autosizeTextarea = function() {
    this._textareaPadding || (this._textareaPadding = this.textarea.innerHeight() - this.textarea.height());
    return this.textarea.height(this.textarea[0].scrollHeight - this._textareaPadding);
  };

  SimditorMarkdown.prototype._convert = function() {
    var markdownText, text;
    text = this.textarea.val();
    markdownText = marked(text);
    this.editor.textarea.val(markdownText);
    this.editor.body.html(markdownText);
    this.editor.formatter.format();
    return this.editor.formatter.decorate();
  };

  SimditorMarkdown.prototype._fileterUnsupportedTags = function() {
    return this.editor.body.find('colgroup').remove();
  };

  return SimditorMarkdown;

})(Simditor.Button);

Simditor.Toolbar.addButton(SimditorMarkdown);

return SimditorMarkdown;

}));


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-mention', ["jquery","simditor","simple-module"], function (a0,b1,c2) {
      return (root['SimditorMention'] = factory(a0,b1,c2));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simditor"),require("simple-module"));
  } else {
    root['SimditorMention'] = factory(jQuery,Simditor,SimpleModule);
  }
}(this, function ($, Simditor, SimpleModule) {

var SimditorMention,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SimditorMention = (function(superClass) {
  extend(SimditorMention, superClass);

  function SimditorMention() {
    return SimditorMention.__super__.constructor.apply(this, arguments);
  }

  SimditorMention.pluginName = 'Mention';

  SimditorMention.prototype.opts = {
    mention: false
  };

  SimditorMention.prototype.active = false;

  SimditorMention.prototype._init = function() {
    if (!this.opts.mention) {
      return;
    }
    this.editor = this._module;
    this.opts.mention = $.extend({
      items: [],
      url: '',
      nameKey: "name",
      pinyinKey: "pinyin",
      abbrKey: "abbr",
      itemRenderer: null,
      linkRenderer: null
    }, this.opts.mention);
    if (!$.isArray(this.opts.mention.items) && this.opts.mention.url === "") {
      throw new Error("Must provide items or source url");
    }
    this.items = [];
    if (this.editor.formatter._allowedAttributes['a']) {
      this.editor.formatter._allowedAttributes['a'].push('data-mention');
    } else {
      this.editor.formatter._allowedAttributes['a'] = ['data-mention'];
    }
    if (this.opts.mention.items.length > 0) {
      this.items = this.opts.mention.items;
      this._renderPopover();
    } else {
      this.getItems();
    }
    return this._bind();
  };

  SimditorMention.prototype.getItems = function() {
    return $.ajax({
      type: 'get',
      url: this.opts.mention.url
    }).done((function(_this) {
      return function(result) {
        _this.items = result;
        return _this._renderPopover();
      };
    })(this));
  };

  SimditorMention.prototype._bind = function() {
    this.editor.on('decorate', (function(_this) {
      return function(e, $el) {
        return $el.find('a[data-mention]').each(function(i, link) {
          return _this.decorate($(link));
        });
      };
    })(this));
    this.editor.on('undecorate', (function(_this) {
      return function(e, $el) {
        $el.find('a[data-mention]').each(function(i, link) {
          return _this.undecorate($(link));
        });
        return $el.find('simditor-mention').children().unwrap();
      };
    })(this));
    this.editor.on('pushundostate', (function(_this) {
      return function(e) {
        if (_this.editor.body.find('span.simditor-mention').length > 0) {
          return false;
        }
        return e.result;
      };
    })(this));
    this.editor.on('keydown', (function(_this) {
      return function(e) {
        if (e.which !== 229) {
          return;
        }
        return setTimeout(function() {
          var range;
          range = _this.editor.selection.range();
          if (!((range != null) && range.collapsed)) {
            return;
          }
          range = range.cloneRange();
          range.setStart(range.startContainer, Math.max(range.startOffset - 1, 0));
          if (range.toString() === '@' && !_this.active) {
            return _this.editor.trigger($.Event('keypress', {
              which: 64
            }));
          }
        }, 50);
      };
    })(this));
    this.editor.on('keypress', (function(_this) {
      return function(e) {
        var $closestBlock;
        if (e.which !== 64) {
          return;
        }
        $closestBlock = _this.editor.selection.blockNodes().last();
        if ($closestBlock.is('pre')) {
          return;
        }
        return setTimeout(function() {
          var range;
          range = _this.editor.selection.range();
          if (range == null) {
            return;
          }
          range = range.cloneRange();
          range.setStart(range.startContainer, Math.max(range.startOffset - 2, 0));
          if (/^[A-Za-z0-9]@/.test(range.toString())) {
            return;
          }
          return _this.show();
        }, 50);
      };
    })(this));
    this.editor.on('keydown.simditor-mention', $.proxy(this._onKeyDown, this)).on('keyup.simditor-mention', $.proxy(this._onKeyUp, this));
    this.editor.on('blur', (function(_this) {
      return function() {
        if (_this.active) {
          return _this.hide();
        }
      };
    })(this));
    this.editor.body.on('mousedown', 'a.simditor-mention', (function(_this) {
      return function(e) {
        var $link, $target, $textNode, range;
        $link = $(e.currentTarget);
        $target = $('<span class="simditor-mention edit" />').append($link.contents());
        $link.replaceWith($target);
        _this.show($target);
        $textNode = $target.contents().eq(0);
        range = document.createRange();
        range.selectNodeContents($textNode[0]);
        range.setStart(range.startContainer, 1);
        _this.editor.selection.range(range);
        return false;
      };
    })(this));
    return this.editor.wrapper.on('mousedown.simditor-mention', (function(_this) {
      return function(e) {
        if ($(e.target).closest('.simditor-mention-popover', _this.editor.wrapper).length) {
          return;
        }
        return _this.hide();
      };
    })(this));
  };

  SimditorMention.prototype.show = function($target) {
    var range;
    this.active = true;
    if ($target) {
      this.target = $target;
    } else {
      this.target = $('<span class="simditor-mention" />');
      range = this.editor.selection.range();
      range.setStart(range.startContainer, range.endOffset - 1);
      range.surroundContents(this.target[0]);
    }
    this.editor.selection.setRangeAtEndOf(this.target, range);
    this.popoverEl.find('.item:first').addClass('selected').siblings('.item').removeClass('selected');
    this.popoverEl.show();
    this.popoverEl.find('.item').show();
    return this.refresh();
  };

  SimditorMention.prototype.refresh = function() {
    var popoverH, targetOffset, top, wrapperOffset;
    wrapperOffset = this.editor.wrapper.offset();
    targetOffset = this.target.offset();
    popoverH = this.popoverEl.height();
    top = targetOffset.top - wrapperOffset.top + this.target.height() + 2;
    if (targetOffset.top - $(document).scrollTop() + popoverH > $(window).height()) {
      top = targetOffset.top - wrapperOffset.top - popoverH;
    }
    return this.popoverEl.css({
      top: top,
      left: targetOffset.left - wrapperOffset.left + this.target.width()
    });
  };

  SimditorMention.prototype._renderPopover = function() {
    var $itemEl, $itemsEl, abbr, item, j, len, name, pinyin, ref;
    this.popoverEl = $('<div class=\'simditor-mention-popover\'>\n  <div class=\'items\'></div>\n</div>').appendTo(this.editor.el);
    $itemsEl = this.popoverEl.find('.items');
    ref = this.items;
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      name = item[this.opts.mention.nameKey];
      pinyin = item[this.opts.mention.pinyinKey];
      abbr = item[this.opts.mention.abbrKey];
      $itemEl = $("<a class=\"item\" href=\"javascript:;\"\n  data-pinyin=\"" + pinyin + "\"\n  data-abbr=\"" + abbr + "\">\n  <span></span>\n</a>");
      $itemEl.attr("data-name", name).find("span").text(name);
      if (this.opts.mention.itemRenderer) {
        $itemEl = this.opts.mention.itemRenderer($itemEl, item);
      }
      $itemEl.appendTo($itemsEl).data('item', item);
    }
    this.popoverEl.on('mouseenter', '.item', function(e) {
      return $(this).addClass('selected').siblings('.item').removeClass('selected');
    });
    this.popoverEl.on('mousedown', '.item', (function(_this) {
      return function(e) {
        _this.selectItem();
        return false;
      };
    })(this));
    return $itemsEl.on('mousewheel', function(e, delta) {
      $(this).scrollTop($(this).scrollTop() - 10 * delta);
      return false;
    });
  };

  SimditorMention.prototype.decorate = function($link) {
    return $link.addClass('simditor-mention');
  };

  SimditorMention.prototype.undecorate = function($link) {
    return $link.removeClass('simditor-mention');
  };

  SimditorMention.prototype.hide = function() {
    if (this.target) {
      this.target.contents().first().unwrap();
      this.target = null;
    }
    this.popoverEl.hide().find('.item').removeClass('selected');
    this.active = false;
    return null;
  };

  SimditorMention.prototype.selectItem = function() {
    var $itemLink, $selectedItem, data, href, range, spaceNode;
    $selectedItem = this.popoverEl.find('.item.selected');
    if (!($selectedItem.length > 0)) {
      return;
    }
    data = $selectedItem.data('item');
    href = data.url || "javascript:;";
    $itemLink = $('<a/>', {
      'class': 'simditor-mention',
      text: '@' + $selectedItem.attr('data-name'),
      href: href,
      'data-mention': true
    });
    this.target.replaceWith($itemLink);
    this.editor.trigger("mention", [$itemLink, data]);
    if (this.opts.mention.linkRenderer) {
      this.opts.mention.linkRenderer($itemLink, data);
    }
    if (this.target.hasClass('edit')) {
      this.editor.selection.setRangeAfter($itemLink);
    } else {
      spaceNode = document.createTextNode('\u00A0');
      $itemLink.after(spaceNode);
      range = document.createRange();
      this.editor.selection.setRangeAtEndOf(spaceNode, range);
    }
    return this.hide();
  };

  SimditorMention.prototype.filterItem = function() {
    var $itemEls, e, re, results, val;
    val = this.target.text().toLowerCase().substr(1).replace(/'/g, '');
    val = val.replace(String.fromCharCode(12288), '');
    val = val.replace(String.fromCharCode(160), '');
    try {
      re = new RegExp("(|\\s)" + val, 'i');
    } catch (_error) {
      e = _error;
      re = new RegExp('', 'i');
    }
    $itemEls = this.popoverEl.find('.item');
    results = $itemEls.hide().removeClass('selected').filter(function(i) {
      var $el, str;
      $el = $(this);
      str = [$el.data('name'), $el.data('pinyin'), $el.data('abbr')].join(" ");
      return re.test(str);
    });
    if (results.length) {
      this.popoverEl.show();
      this.active = true;
      return results.show().first().addClass('selected');
    } else {
      this.popoverEl.hide();
      return this.active = false;
    }
  };

  SimditorMention.prototype._changeFocus = function(type) {
    var itemEl, itemH, parentEl, parentH, position, selectedItem;
    selectedItem = this.popoverEl.find('.item.selected');
    if (selectedItem.length < 1) {
      this.popoverEl.find('.item:first'.addClass('selected'));
      return false;
    }
    itemEl = selectedItem[type + 'All']('.item:visible').first();
    if (itemEl.length < 1) {
      return false;
    }
    selectedItem.removeClass('selected');
    itemEl.addClass('selected');
    parentEl = itemEl.parent();
    parentH = parentEl.height();
    position = itemEl.position();
    itemH = itemEl.outerHeight();
    if (position.top > parentH - itemH) {
      parentEl.scrollTop(itemH * itemEl.prevAll('.item:visible').length - parentH + itemH);
    }
    if (position.top < 0) {
      return parentEl.scrollTop(itemH * itemEl.prevAll('.item:visible').length);
    }
  };

  SimditorMention.prototype._onKeyDown = function(e) {
    var node, selectedItem, text;
    if (!this.active) {
      return;
    }
    if (e.which === 37 || e.which === 39 || e.which === 27) {
      this.editor.selection.save();
      this.hide();
      this.editor.selection.restore();
      return false;
    } else if (e.which === 38 || (e.which === 80 && e.ctrlKey)) {
      this._changeFocus('prev');
      return false;
    } else if (e.which === 40 || (e.which === 78 && e.ctrlKey)) {
      this._changeFocus('next');
      return false;
    } else if (e.which === 13 || e.which === 9) {
      selectedItem = this.popoverEl.find('.item.selected');
      if (selectedItem.length) {
        this.selectItem();
        return false;
      } else {
        node = document.createTextNode(this.target.text());
        this.target.before(node).remove();
        this.hide();
        return this.editor.selection.setRangeAtEndOf(node);
      }
    } else if (e.which === 8 && (this.target.text() === '@' || this.target.text() === '')) {
      node = document.createTextNode('@');
      this.target.replaceWith(node);
      this.hide();
      return this.editor.selection.setRangeAtEndOf(node);
    } else if (e.which === 32) {
      text = this.target.text();
      selectedItem = this.popoverEl.find('.item.selected');
      if (selectedItem.length && (text.substr(1) === selectedItem.text().trim())) {
        this.selectItem();
      } else {
        node = document.createTextNode(text + '\u00A0');
        this.target.before(node).remove();
        this.hide();
        this.editor.selection.setRangeAtEndOf(node);
      }
      return false;
    }
  };

  SimditorMention.prototype._onKeyUp = function(e) {
    if (!this.active || $.inArray(e.which, [9, 16, 17, 27, 37, 38, 39, 40]) > -1 || (e.shiftKey && e.which === 50) || (e.ctrlKey && (e.which === 78 || e.which === 80))) {
      return;
    }
    this.filterItem();
    return this.refresh();
  };

  return SimditorMention;

})(SimpleModule);

Simditor.connect(SimditorMention);

return SimditorMention;

}));
