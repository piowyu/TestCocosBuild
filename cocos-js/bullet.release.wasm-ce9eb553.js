System.register(["./_virtual_cc-8eb4a791.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.c,r=t._}],execute:function(){var n=e((function(t){var e,n=(e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){void 0===t&&(t={});var n,i,o=void 0!==t?t:{};o.ready=new Promise((function(t,e){n=t,i=e}));var a=Object.assign({},o),s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),e&&(s=e),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",o.print||console.log.bind(console);var u,c,l=o.printErr||console.error.bind(console);Object.assign(o,a),a=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(u=o.wasmBinary),o.noExitRuntime,"object"!=typeof WebAssembly&&k("no native wasm support detected");var f,p,d,h,v,y,m,g,b,$=!1;function w(){var t=c.buffer;o.HEAP8=f=new Int8Array(t),o.HEAP16=d=new Int16Array(t),o.HEAP32=v=new Int32Array(t),o.HEAPU8=p=new Uint8Array(t),o.HEAPU16=h=new Uint16Array(t),o.HEAPU32=y=new Uint32Array(t),o.HEAPF32=m=new Float32Array(t),o.HEAPF64=g=new Float64Array(t)}var C,P,T=[],A=[],S=[],_=0,O=null;function k(t){o.onAbort&&o.onAbort(t),l(t="Aborted("+t+")"),$=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw i(e),e}function E(t){return t.startsWith("data:application/octet-stream;base64,")}function W(t){try{if(t==C&&u)return new Uint8Array(u);throw"both async and sync fetching of the wasm failed"}catch(t){k(t)}}function F(t,e,r){return function(t){return u||"function"!=typeof fetch?Promise.resolve().then((function(){return W(t)})):fetch(t,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((function(){return W(t)}))}(t).then((function(t){return WebAssembly.instantiate(t,e)})).then((function(t){return t})).then(r,(function(t){l("failed to asynchronously prepare wasm: "+t),k(t)}))}function R(t){for(;t.length>0;)t.shift()(o)}function j(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?"_"+t:t}function D(t,e){var r;return(r={},r[t=j(t)]=function(){return e.apply(this,arguments)},r)[t]}E(C="bullet.release.wasm.wasm")||(P=C,C=o.locateFile?o.locateFile(P,s):s+P);var I=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.has=function(t){return void 0!==this.allocated[t]},this.allocate=function(t){var e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}};function U(t,e){var r=D(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var x=void 0;function V(t){throw new x(t)}var z=function(t){return t||V("Cannot use deleted val. handle = "+t),I.get(t).value},B=function(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return I.allocate({refcount:1,value:t})}},H=void 0,M=void 0;function q(t){for(var e="",r=t;p[r];)e+=M[p[r++]];return e}var G=[];function L(){for(;G.length;){var t=G.pop();t.$$.deleteScheduled=!1,t.delete()}}var N=void 0;var J={};function Z(t,e){for(void 0===e&&V("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}function K(t,e,r){e=Z(t,e),J.hasOwnProperty(e)?V("Tried to register registered instance: "+e):J[e]=r}var Q={};function X(t){var e=ee(t),r=q(e);return te(e),r}function Y(t,e){var r=Q[t];return void 0===r&&V(e+" has unknown type "+X(t)),r}function tt(){}var et=!1;function rt(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function nt(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=nt(t,e,r.baseClass);return null===n?null:r.downcast(n)}var it={},ot=void 0;function at(t){throw new ot(t)}function st(t,e){return e.ptrType&&e.ptr||at("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&at("Both smartPtrType and smartPtr must be specified"),e.count={value:1},ut(Object.create(t,{$$:{value:e}}))}function ut(t){return"undefined"==typeof FinalizationRegistry?(ut=function(t){return t},t):(et=new FinalizationRegistry((function(t){rt(t.$$)})),tt=function(t){return et.unregister(t)},(ut=function(t){var e=t.$$;if(e.smartPtr){var r={$$:e};et.register(t,r,t)}return t})(t))}function ct(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var lt={},ft={};function pt(t,e,r){function n(e){var n=r(e);n.length!==t.length&&at("Mismatched type converter count");for(var i=0;i<t.length;++i)dt(t[i],n[i])}t.forEach((function(t){ft[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){Q.hasOwnProperty(t)?i[e]=Q[t]:(o.push(t),lt.hasOwnProperty(t)||(lt[t]=[]),lt[t].push((function(){i[e]=Q[t],++a===o.length&&n(i)})))})),0===o.length&&n(i)}function dt(t,e,r){if(void 0===r&&(r={}),!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||V('type "'+n+'" must have a positive integer typeid pointer'),Q.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;V("Cannot register type '"+n+"' twice")}if(Q[t]=e,delete ft[t],lt.hasOwnProperty(t)){var i=lt[t];delete lt[t],i.forEach((function(t){return t()}))}}function ht(t){V(t.$$.ptrType.registeredClass.name+" instance already deleted")}function vt(){}function yt(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||V("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function mt(t,e,r){o.hasOwnProperty(t)?((void 0===r||void 0!==o[t].overloadTable&&void 0!==o[t].overloadTable[r])&&V("Cannot register public name '"+t+"' twice"),yt(o,t,t),o.hasOwnProperty(r)&&V("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),o[t].overloadTable[r]=e):(o[t]=e,void 0!==r&&(o[t].numArguments=r))}function gt(t,e,r,n,i,o,a,s){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=s,this.pureVirtualFunctions=[]}function bt(t,e,r){for(;e!==r;)e.upcast||V("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function $t(t,e){if(null===e)return this.isReference&&V("null is not a valid "+this.name),0;e.$$||V('Cannot pass "'+It(e)+'" as a '+this.name),e.$$.ptr||V("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return bt(e.$$.ptr,r,this.registeredClass)}function wt(t,e){var r;if(null===e)return this.isReference&&V("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||V('Cannot pass "'+It(e)+'" as a '+this.name),e.$$.ptr||V("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&V("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=bt(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&V("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:V("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var i=e.clone();r=this.rawShare(r,B((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:V("Unsupporting sharing policy")}return r}function Ct(t,e){if(null===e)return this.isReference&&V("null is not a valid "+this.name),0;e.$$||V('Cannot pass "'+It(e)+'" as a '+this.name),e.$$.ptr||V("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&V("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return bt(e.$$.ptr,r,this.registeredClass)}function Pt(t){return this.fromWireType(v[t>>2])}function Tt(t,e,r,n,i,o,a,s,u,c,l){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=l,i||void 0!==e.baseClass?this.toWireType=wt:n?(this.toWireType=$t,this.destructorFunction=null):(this.toWireType=Ct,this.destructorFunction=null)}function At(t,e,r){o.hasOwnProperty(t)||at("Replacing nonexistant public symbol"),void 0!==o[t].overloadTable&&void 0!==r?o[t].overloadTable[r]=e:(o[t]=e,o[t].argCount=r)}var St=[];function _t(t){var e=St[t];return e||(t>=St.length&&(St.length=t+1),St[t]=e=b.get(t)),e}function Ot(t,e,r){return t.includes("j")?function(t,e,r){var n=o["dynCall_"+t];return r&&r.length?n.apply(null,[e].concat(r)):n.call(null,e)}(t,e,r):_t(e).apply(null,r)}function kt(t,e){var r,n,i,o=(t=q(t)).includes("j")?(r=t,n=e,i=[],function(){return i.length=0,Object.assign(i,arguments),Ot(r,n,i)}):_t(e);return"function"!=typeof o&&V("unknown function pointer with signature "+t+": "+e),o}var Et=void 0;function Wt(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||Q[e]||(ft[e]?ft[e].forEach(t):(r.push(e),n[e]=!0))})),new Et(t+": "+r.map(X).join([", "]))}function Ft(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function Rt(t,e,r,n,i){var o=e.length;o<2&&V("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,s=!1,u=1;u<e.length;++u)if(null!==e[u]&&void 0===e[u].destructorFunction){s=!0;break}var c="void"!==e[0].name,l=o-2,f=new Array(l),p=[],d=[];return function(){var r;arguments.length!==l&&V("function "+t+" called with "+arguments.length+" arguments, expected "+l+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(r=e[1].toWireType(d,this),p[1]=r);for(var o=0;o<l;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var u=n.apply(null,p);function h(t){if(s)Ft(d);else for(var n=a?1:2;n<e.length;n++){var i=1===n?r:f[n-2];null!==e[n].destructorFunction&&e[n].destructorFunction(i)}if(c)return e[0].fromWireType(t)}return h(u)}}function jt(t,e){for(var r=[],n=0;n<t;n++)r.push(y[e+4*n>>2]);return r}function Dt(t){t>=I.reserved&&0==--I.get(t).refcount&&I.free(t)}function It(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function Ut(t,e){switch(e){case 2:return function(t){return this.fromWireType(m[t>>2])};case 3:return function(t){return this.fromWireType(g[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function xt(t,e,r){switch(e){case 0:return r?function(t){return f[t]}:function(t){return p[t]};case 1:return r?function(t){return d[t>>1]}:function(t){return h[t>>1]};case 2:return r?function(t){return v[t>>2]}:function(t){return y[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}var Vt="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;var zt="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Bt(t,e){for(var r=t,n=r>>1,i=n+e/2;!(n>=i)&&h[n];)++n;if((r=n<<1)-t>32&&zt)return zt.decode(p.subarray(t,r));for(var o="",a=0;!(a>=e/2);++a){var s=d[t+2*a>>1];if(0==s)break;o+=String.fromCharCode(s)}return o}function Ht(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,i=(r-=2)<2*t.length?r/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);d[e>>1]=a,e+=2}return d[e>>1]=0,e-n}function Mt(t){return 2*t.length}function qt(t,e){for(var r=0,n="";!(r>=e/4);){var i=v[t+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(i)}return n}function Gt(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,i=n+r-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),v[e>>2]=a,(e+=4)+4>i)break}return v[e>>2]=0,e-n}function Lt(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}var Nt={},Jt=[],Zt=[];function Kt(t){var e=t-c.buffer.byteLength+65535>>>16;try{return c.grow(e),w(),1}catch(t){}}x=o.BindingError=U(Error,"BindingError"),I.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),I.reserved=I.allocated.length,o.count_emval_handles=function(){for(var t=0,e=I.reserved;e<I.allocated.length;++e)void 0!==I.allocated[e]&&++t;return t},H=o.PureVirtualError=U(Error,"PureVirtualError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);M=t}(),o.getInheritedInstanceCount=function(){return Object.keys(J).length},o.getLiveInheritedInstances=function(){var t=[];for(var e in J)J.hasOwnProperty(e)&&t.push(J[e]);return t},o.flushPendingDeletes=L,o.setDelayFunction=function(t){N=t,G.length&&N&&N(L)},ot=o.InternalError=U(Error,"InternalError"),vt.prototype.isAliasOf=function(t){if(!(this instanceof vt))return!1;if(!(t instanceof vt))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return e===n&&r===i},vt.prototype.clone=function(){if(this.$$.ptr||ht(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=ut(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},vt.prototype.delete=function(){this.$$.ptr||ht(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&V("Object already scheduled for deletion"),tt(this),rt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},vt.prototype.isDeleted=function(){return!this.$$.ptr},vt.prototype.deleteLater=function(){return this.$$.ptr||ht(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&V("Object already scheduled for deletion"),G.push(this),1===G.length&&N&&N(L),this.$$.deleteScheduled=!0,this},Tt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},Tt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},Tt.prototype.argPackAdvance=8,Tt.prototype.readValueFromPointer=Pt,Tt.prototype.deleteObject=function(t){null!==t&&t.delete()},Tt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=function(t,e){return e=Z(t,e),J[e]}(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function i(){return this.isSmartPointer?st(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):st(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),s=it[a];if(!s)return i.call(this);o=this.isConst?s.constPointerType:s.pointerType;var u=nt(e,this.registeredClass,o.registeredClass);return null===u?i.call(this):this.isSmartPointer?st(o.registeredClass.instancePrototype,{ptrType:o,ptr:u,smartPtrType:this,smartPtr:t}):st(o.registeredClass.instancePrototype,{ptrType:o,ptr:u})},Et=o.UnboundTypeError=U(Error,"UnboundTypeError");var Qt={k:function(t,e,r){t=q(t),e=Y(e,"wrapper"),r=z(r);var n=[].slice,i=e.registeredClass,o=i.instancePrototype,a=i.baseClass.instancePrototype,s=i.baseClass.constructor,u=D(t,(function(){i.baseClass.pureVirtualFunctions.forEach(function(t){if(this[t]===a[t])throw new H("Pure virtual function "+t+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:o}),this.__construct.apply(this,n.call(arguments))}));for(var c in o.__construct=function(){this===o&&V("Pass correct 'this' to __construct");var t=s.implement.apply(void 0,[this].concat(n.call(arguments)));tt(t);var e=t.$$;t.notifyOnDestruction(),e.preservePointerOnDelete=!0,Object.defineProperties(this,{$$:{value:e}}),ut(this),K(i,e.ptr,this)},o.__destruct=function(){var t;this===o&&V("Pass correct 'this' to __destruct"),tt(this),t=Z(i,t=this.$$.ptr),J.hasOwnProperty(t)?delete J[t]:V("Tried to unregister unregistered instance: "+t)},u.prototype=Object.create(o),r)u.prototype[c]=r[c];return B(u)},p:function(){},t:function(t,e,r,n,i){var o=ct(r);dt(t,{name:e=q(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:i},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=f;else if(2===r)n=d;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=v}return this.fromWireType(n[t>>o])},destructorFunction:null})},i:function(t,e,r,n,i,o,a,s,u,c,l,f,p){l=q(l),o=kt(i,o),s&&(s=kt(a,s)),c&&(c=kt(u,c)),p=kt(f,p);var d=j(l);mt(d,(function(){Wt("Cannot construct "+l+" due to unbound types",[n])})),pt([t,e,r],n?[n]:[],(function(e){var r,i;e=e[0],i=n?(r=e.registeredClass).instancePrototype:vt.prototype;var a=D(d,(function(){if(Object.getPrototypeOf(this)!==u)throw new x("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new x(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new x("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),u=Object.create(i,{constructor:{value:a}});a.prototype=u;var f=new gt(l,a,u,p,r,o,s,c);f.baseClass&&(void 0===f.baseClass.__derivedClasses&&(f.baseClass.__derivedClasses=[]),f.baseClass.__derivedClasses.push(f));var h=new Tt(l,f,!0,!1,!1),v=new Tt(l+"*",f,!1,!1,!1),y=new Tt(l+" const*",f,!1,!0,!1);return it[t]={pointerType:v,constPointerType:y},At(d,a),[h,v,y]}))},h:function(t,e,n,i,o,a,s){var u=jt(n,i);e=q(e),a=kt(o,a),pt([],[t],(function(t){var i=(t=t[0]).name+"."+e;function o(){Wt("Cannot call "+i+" due to unbound types",u)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]);var c=t.registeredClass.constructor;return void 0===c[e]?(o.argCount=n-1,c[e]=o):(yt(c,e,i),c[e].overloadTable[n-1]=o),pt([],u,(function(o){var u=[o[0],null].concat(o.slice(1)),l=Rt(i,u,null,a,s);if(void 0===c[e].overloadTable?(l.argCount=n-1,c[e]=l):c[e].overloadTable[n-1]=l,t.registeredClass.__derivedClasses)for(var f,p=r(t.registeredClass.__derivedClasses);!(f=p()).done;){var d=f.value;d.constructor.hasOwnProperty(e)||(d.constructor[e]=l)}return[]})),[]}))},g:function(t,e,r,n,i,o,a,s){var u=jt(r,n);e=q(e),o=kt(i,o),pt([],[t],(function(t){var n=(t=t[0]).name+"."+e;function i(){Wt("Cannot call "+n+" due to unbound types",u)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]),s&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,l=c[e];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===r-2?(i.argCount=r-2,i.className=t.name,c[e]=i):(yt(c,e,n),c[e].overloadTable[r-2]=i),pt([],u,(function(i){var s=Rt(n,i,t,o,a);return void 0===c[e].overloadTable?(s.argCount=r-2,c[e]=s):c[e].overloadTable[r-2]=s,[]})),[]}))},s:function(t,e){dt(t,{name:e=q(e),fromWireType:function(t){var e=z(t);return Dt(t),e},toWireType:function(t,e){return B(e)},argPackAdvance:8,readValueFromPointer:Pt,destructorFunction:null})},n:function(t,e,r){var n=ct(r);dt(t,{name:e=q(e),fromWireType:function(t){return t},toWireType:function(t,e){return e},argPackAdvance:8,readValueFromPointer:Ut(e,n),destructorFunction:null})},a:function(t,e,r,n,i,o){var a=jt(e,r);t=q(t),i=kt(n,i),mt(t,(function(){Wt("Cannot call "+t+" due to unbound types",a)}),e-1),pt([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return At(t,Rt(t,n,null,i,o),e-1),[]}))},f:function(t,e,r,n){e=q(e);var i=ct(r),o=function(t){return t};if(0===n){var a=32-8*r;o=function(t){return t<<a>>>a}}var s=e.includes("unsigned");dt(t,{name:e,fromWireType:o,toWireType:s?function(t,e){return this.name,e>>>0}:function(t,e){return this.name,e},argPackAdvance:8,readValueFromPointer:xt(e,i,0!==n),destructorFunction:null})},b:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=y,r=e[t>>=2],i=e[t+1];return new n(e.buffer,i,r)}dt(t,{name:r=q(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},m:function(t,e){var r="std::string"===(e=q(e));dt(t,{name:e,fromWireType:function(t){var e,n,i,o=y[t>>2],a=t+4;if(r)for(var s=a,u=0;u<=o;++u){var c=a+u;if(u==o||0==p[c]){var l=(i=c-s,(n=s)?function(t,e,r){for(var n=e+r,i=e;t[i]&&!(i>=n);)++i;if(i-e>16&&t.buffer&&Vt)return Vt.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}(p,n,i):"");void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),s=c+1}}else{var f=new Array(o);for(u=0;u<o;++u)f[u]=String.fromCharCode(p[a+u]);e=f.join("")}return te(t),e},toWireType:function(t,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var i="string"==typeof e;i||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||V("Cannot pass non-string to std::string"),n=r&&i?function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e}(e):e.length;var o=Yt(4+n+1),a=o+4;if(y[o>>2]=n,r&&i)!function(t,e,r,n){if(!(n>0))return 0;for(var i=r+n-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),a<=127){if(r>=i)break;e[r++]=a}else if(a<=2047){if(r+1>=i)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=i)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=i)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}e[r]=0}(e,p,a,n+1);else if(i)for(var s=0;s<n;++s){var u=e.charCodeAt(s);u>255&&(te(a),V("String has UTF-16 code units that do not fit in 8 bits")),p[a+s]=u}else for(s=0;s<n;++s)p[a+s]=e[s];return null!==t&&t.push(te,o),o},argPackAdvance:8,readValueFromPointer:Pt,destructorFunction:function(t){te(t)}})},l:function(t,e,r){var n,i,o,a,s;r=q(r),2===e?(n=Bt,i=Ht,a=Mt,o=function(){return h},s=1):4===e&&(n=qt,i=Gt,a=Lt,o=function(){return y},s=2),dt(t,{name:r,fromWireType:function(t){for(var r,i=y[t>>2],a=o(),u=t+4,c=0;c<=i;++c){var l=t+4+c*e;if(c==i||0==a[l>>s]){var f=n(u,l-u);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),u=l+e}}return te(t),r},toWireType:function(t,n){"string"!=typeof n&&V("Cannot pass non-string to C++ string type "+r);var o=a(n),u=Yt(4+o+e);return y[u>>2]=o>>s,i(n,u+4,o+e),null!==t&&t.push(te,u),u},argPackAdvance:8,readValueFromPointer:Pt,destructorFunction:function(t){te(t)}})},u:function(t,e){dt(t,{isVoid:!0,name:e=q(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},c:function(t,e,r,n){var i,o;(t=Jt[t])(e=z(e),r=void 0===(o=Nt[i=r])?q(i):o,null,n)},e:Dt,d:function(t,e){var r=function(t,e){for(var r=new Array(t),n=0;n<t;++n)r[n]=Y(y[e+4*n>>2],"parameter "+n);return r}(t,e),n=r[0],i=n.name+"_$"+r.slice(1).map((function(t){return t.name})).join("_")+"$",o=Zt[i];if(void 0!==o)return o;var a,s,u=new Array(t-1);return a=function(e,i,o,a){for(var s=0,c=0;c<t-1;++c)u[c]=r[c+1].readValueFromPointer(a+s),s+=r[c+1].argPackAdvance;var l=e[i].apply(e,u);for(c=0;c<t-1;++c)r[c+1].deleteObject&&r[c+1].deleteObject(u[c]);if(!n.isVoid)return n.toWireType(o,l)},s=Jt.length,Jt.push(a),o=s,Zt[i]=o,o},o:function(t){t>4&&(I.get(t).refcount+=1)},j:function(){k("")},r:function(t,e,r){p.copyWithin(t,e,e+r)},q:function(t){var e=p.length,r=2147483648;if((t>>>=0)>r)return!1;for(var n,i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),Kt(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return!0}return!1}};!function(){var t,e,r,n,a={a:Qt};function s(t){var e,r=t.exports;return o.asm=r,c=o.asm.v,w(),b=o.asm.z,e=o.asm.w,A.unshift(e),function(){if(_--,o.monitorRunDependencies&&o.monitorRunDependencies(_),0==_&&O){var t=O;O=null,t()}}(),r}if(_++,o.monitorRunDependencies&&o.monitorRunDependencies(_),o.instantiateWasm)try{return o.instantiateWasm(a,s)}catch(t){l("Module.instantiateWasm callback failed with error: "+t),i(t)}(t=u,e=C,r=a,n=function(t){s(t.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||E(e)||"function"!=typeof fetch?F(e,r,n):fetch(e,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,r).then(n,(function(t){return l("wasm streaming compile failed: "+t),l("falling back to ArrayBuffer instantiation"),F(e,r,n)}))}))).catch(i)}();var Xt,Yt=function(){return(Yt=o.asm.x).apply(null,arguments)},te=function(){return(te=o.asm.y).apply(null,arguments)},ee=function(){return(ee=o.asm.A).apply(null,arguments)};function re(){function t(){Xt||(Xt=!0,o.calledRun=!0,$||(R(A),n(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)t=o.postRun.shift(),S.unshift(t);var t;R(S)}()))}_>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)t=o.preRun.shift(),T.unshift(t);var t;R(T)}(),_>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(o.__embind_initialize_bindings=function(){return(o.__embind_initialize_bindings=o.asm.B).apply(null,arguments)},O=function t(){Xt||re(),Xt||(O=t)},o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return re(),t.ready});t.exports=n}));t({default:n,__moduleExports:n})}}}));