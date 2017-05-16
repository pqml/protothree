/******/!function(t){/******/
/******/
// The require function
/******/
function e(i){/******/
/******/
// Check if module is in cache
/******/
if(n[i])/******/
return n[i].exports;/******/
// Create a new module (and put it into the cache)
/******/
var r=n[i]={/******/
i:i,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
e.m=t,/******/
/******/
// expose the module cache
/******/
e.c=n,/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
e.i=function(t){return t},/******/
/******/
// define getter function for harmony exports
/******/
e.d=function(t,n,i){/******/
e.o(t,n)||/******/
Object.defineProperty(t,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:i})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
e.n=function(t){/******/
var n=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(n,"a",n),n},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},/******/
/******/
// __webpack_public_path__
/******/
e.p="/",e(e.s="./example/example.js")}({/***/
"./example/example.js":/***/
function(t,e,n){"use strict";
// setup scene (add props, move camera, call setup and raf)
function i(){A.setup(),x.position.z=50,_.add(A.group),s.a.add(r),o()}function r(t){g.begin(),A&&A.update&&A.update(t),b.render(_,x),g.end()}function o(){x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),b.setSize(window.innerWidth,window.innerHeight),A&&A.resize&&A.resize(window.innerWidth,window.innerHeight)}Object.defineProperty(e,"__esModule",{value:!0});/* harmony import */
var a=n("./node_modules/raf/index.js"),s=n.n(a),l=n("./node_modules/stats.js/build/stats.min.js"),u=n.n(l),c=n("./node_modules/controlkit/index.js"),h=n.n(c),d=n("./src/app.js"),p=n("./node_modules/three/build/three.module.js"),f=n("./node_modules/three-orbit-controls/index.js"),m=n.n(f),g=new u.a;document.body.appendChild(g.dom);var v=new h.a,y=v.addPanel({label:"protothree",width:300}),b=new p.WebGLRenderer,_=new p.Scene,x=new p.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);x.lookAt(new p.Vector3),new(m()(p))(x,b.domElement).enablePan=!1,document.body.appendChild(b.domElement),window.addEventListener("resize",o);
// instanciate app and add debug controls
var A=n.i(d.a)({three:p});y.addNumberInput(A.params,"speed",{step:.05}),
// preload assets and start app
A.preload({matcap:"matcap.jpg",onComplete:i})},/***/
"./node_modules/babel-runtime/core-js/object/assign.js":/***/
function(t,e,n){t.exports={default:n("./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},/***/
"./node_modules/babel-runtime/core-js/promise.js":/***/
function(t,e,n){t.exports={default:n("./node_modules/core-js/library/fn/promise.js"),__esModule:!0}},/***/
"./node_modules/controlkit/index.js":/***/
function(t,e,n){var i=n("./node_modules/controlkit/lib/ControlKit.js");i.Canvas=n("./node_modules/controlkit/lib/component/Canvas.js"),i.SVG=n("./node_modules/controlkit/lib/component/SVG.js"),t.exports=i},/***/
"./node_modules/controlkit/lib/ControlKit.js":/***/
function(t,e,n){/**
 * Initializes ControlKit.
 * @param {Object} [options] - ControlKit options
 * @param {Number} [options.opacity=1.0] - Overall opacity
 * @param {Boolean} [options.enable=true] - Initial ControlKit state, enabled / disabled
 * @param {Boolean} [options.useExternalStyle=false] - If true, an external style is used instead of the build-in one
 * @param {String} [options.styleString] - If true, an external style is used instead of the build-in one
 * @param {Boolean}[options.history=false] - (Experimental) Enables a value history for all components
 */
function i(t){if(T)throw new Error("ControlKit is already initialized.");t=t||{},t.history=void 0===t.history?x:t.history,t.loadAndSave=void 0===t.loadAndSave?M:t.loadAndSave,t.opacity=void 0===t.opacity?A:t.opacity,t.panelsClosable=void 0===t.panelsClosable?w:t.panelsClosable,t.useExternalStyle=void 0!==t.useExternalStyle&&t.useExternalStyle,t.enable=void 0===t.enable?S:t.enable,u.apply(this,arguments);var e=null;if(t.parentDomElementId?e=r.getNodeById(t.parentDomElementId):(e=new r,document.body.appendChild(e.getElement())),!t.useExternalStyle){var i=document.createElement("style");i.type="text/css";var o=t.style?t.styleString:n("./node_modules/controlkit/lib/core/document/Style.js").string;i.stylesheet?i.stylesheet.cssText=o:i.appendChild(document.createTextNode(o)),(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e.setProperty("id",l.ControlKit),this._node=e,this._panels=[],this._enabled=t.enable,this._historyEnabled=t.history,this._statesEnabled=t.loadAndSave,this._panelsClosable=t.panelsClosable;var c=m.setup();this._historyEnabled?(c.addEventListener(p.STATE_PUSH,this,"onHistoryStatePush"),c.addEventListener(p.STATE_POP,this,"onHistoryStatePop")):c.disable(),v.setup(),s.setup(e),a.setup(e);var d=t.opacity;1!=d&&0!=d&&e.setStyleProperty("opacity",d),this._canUpdate=!0;var f,g=this,y=0;window.addEventListener(h.WINDOW_RESIZE,function(){g._canUpdate=!1,clearInterval(f),f=setInterval(function(){y>=10&&(y=0,g._canUpdate=!0,clearInterval(f)),y++},25)}),this._shortcutEnable=E,document.addEventListener("keydown",function(t){t.ctrlKey&&String.fromCharCode(t.which||t.keyCode).toLowerCase()==g._shortcutEnable&&(g._enabled=!g._enabled,g._enabled?g._enable():g._disable())}),this._enabled||this._disable(),T=!0}var r=n("./node_modules/controlkit/lib/core/document/Node.js"),o=n("./node_modules/controlkit/lib/group/Panel.js"),a=n("./node_modules/controlkit/lib/component/Options.js"),s=n("./node_modules/controlkit/lib/component/Picker.js"),l=n("./node_modules/controlkit/lib/core/document/CSS.js"),u=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),c=n("./node_modules/controlkit/lib/core/event/Event.js"),h=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),d=(n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),n("./node_modules/controlkit/lib/core/ComponentEvent.js")),p=n("./node_modules/controlkit/lib/core/HistoryEvent.js"),f=n("./node_modules/controlkit/lib/group/MenuEvent.js"),m=n("./node_modules/controlkit/lib/core/History.js"),g=n("./node_modules/controlkit/lib/core/State.js"),v=n("./node_modules/controlkit/lib/core/document/Mouse.js"),y=n("./node_modules/controlkit/lib/component/ValuePlotter.js"),b=n("./node_modules/controlkit/lib/component/StringOutput.js"),_=n("./node_modules/controlkit/lib/component/NumberOutput.js"),x=!1,A=1,w=!1,S=!0,M=!1,E="h",T=!1;i.prototype=Object.create(u.prototype),i.prototype.constructor=i,/**
 * Adds a panel.
 * @param {Object} [params] - Panel options
 * @param {String} [params.label='Control Panel'] - The panel label
 * @param {Number} [params.width=300] - The width
 * @param {Number} [params.height] - Constrained panel height
 * @param {Number} [params.ratio=40] - The ratio of label (default:40%) and component (default:60%) width
 * @param {String} [params.align='right'] - Float 'left' or 'right', multiple panels get aligned next to each other
 * @param {Boolean} [params.fixed=true] - If false the panel can be moved
 * @param {Array} [params.position=[0,0]] - If unfixed, the panel panel position relative to alignment (eg. if 'left' 0 + position[0] or if 'right' window.innerHeight - position[0] - panelWidth)
 * @param {Number} [params.opacity=1.0] - The panel´s opacity
 * @param {String} [params.dock=false] - (Experimental) Indicates whether the panel should be docked to either the left or right window border (depending on params.align), docked panels height equal window height
  * @returns {Panel}
 */
i.prototype.addPanel=function(t){var e=new o(this,t);return this._panels.push(e),e},/**
 * Updates all ControlKit components if the wat
 */
i.prototype.update=function(){if(this._enabled&&this._canUpdate){var t,e,n,i,r,o,a,s,l,u,c=this._panels;for(t=-1,i=c.length;++t<i;)if(a=c[t],!a.isDisabled())for(s=a.getGroups(),e=-1,r=s.length;++e<r;)for(l=s[e].getComponents(),n=-1,o=l.length;++n<o;)u=l[n],u.isDisabled()||(u instanceof y||u instanceof b||u instanceof _)&&u.update()}},i.prototype.historyIsEnabled=function(){return this._historyEnabled},i.prototype.statesAreEnabled=function(){return this._statesEnabled},i.prototype.panelsAreClosable=function(){return this._panelsClosable},i.prototype._enable=function(){for(var t=-1,e=this._panels,n=e.length;++t<n;)e[t].enable();this._node.setStyleProperty("visibility","")},i.prototype._disable=function(){for(var t=-1,e=this._panels,n=e.length;++t<n;)e[t].disable();this._node.setStyleProperty("visibility","hidden")},/**
 * Enables and shows controlKit.
 */
i.prototype.enable=function(){this._enable(),this._enabled=!0},/**
 * Disable and hides controlKit.
 */
i.prototype.disable=function(){this._disable(),this._enabled=!1},/**
 * Specifies the key to be used with ctrl & char, to trigger ControlKits visibility.
 * @param char
 */
i.prototype.setShortcutEnable=function(t){this._shortcutEnable=t},i.prototype.onHistoryStatePush=function(){this.dispatchEvent(new c(this,f.UPDATE_MENU,null))},i.prototype.onHistoryStatePop=function(){this.dispatchEvent(new c(this,d.UPDATE_VALUE,{origin:null})),this.dispatchEvent(new c(this,f.UPDATE_MENU,null))},i.prototype.loadSettings=function(t){for(var e=-1,n=t.length,i=this._panels;++e<n;)i[e].setData(t[e])},i.prototype._loadState=function(){g.load(this.loadSettings.bind(this))},i.prototype._saveState=function(){this.update();for(//force sync
var t=this._panels,e=-1,n=t.length,i=new Array(n);++e<n;)i[e]=t[e].getData();g.save({data:i})},/**
 * Returns the root element.
 * @returns {*}
 */
i.prototype.getNode=function(){return this._node},i.destroy=function(){v.get().destroy(),a.get().destroy(),s.get().destroy(),T=!1},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Button.js":/***/
function(t,e,n){function i(t,e,n,i){n=n||function(){},i=i||{},i.label=i.label||c,l.apply(this,[t,i.label]);var h=this._inputNode=new s(s.INPUT_BUTTON);h.setStyleClass(u.Button),h.setProperty("value",e);var d=this;h.addEventListener(o.ON_CLICK,function(){n.bind(d)(),d.dispatchEvent(new r(d,a.VALUE_UPDATED))}),this._wrapNode.addChild(h)}var r=n("./node_modules/controlkit/lib/core/event/Event.js"),o=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),a=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),s=n("./node_modules/controlkit/lib/core/document/Node.js"),l=n("./node_modules/controlkit/lib/core/Component.js"),u=n("./node_modules/controlkit/lib/core/document/CSS.js"),c="";i.prototype=Object.create(l.prototype),i.prototype.constructor=i,i.prototype.getButtonLabel=function(){return this._inputNode.getProperty("value")},i.prototype.setButtonLabel=function(t){this._inputNode.setProperty("value",t)},t.exports=i},/***/
"./node_modules/controlkit/lib/component/ButtonPreset.js":/***/
function(t,e,n){function i(t){r.apply(this);var e=this._btnNode=new u(u.INPUT_BUTTON),n=this._indiNode=new u;this._onActive=function(){},this._onDeactive=function(){},this._isActive=!1,e.setStyleClass(c.ButtonPreset),e.addEventListener(l.MOUSE_DOWN,this._onMouseDown.bind(this)),e.addChild(n),t.addChildAt(e,0),o.get().addEventListener(s.TRIGGER,this,"onOptionTrigger"),this.addEventListener(s.TRIGGERED,o.get(),"onOptionTriggered")}var r=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),o=n("./node_modules/controlkit/lib/core/ObjectComponentNotifier.js"),a=n("./node_modules/controlkit/lib/core/event/Event.js"),s=n("./node_modules/controlkit/lib/core/OptionEvent.js"),l=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),u=n("./node_modules/controlkit/lib/core/document/Node.js"),c=n("./node_modules/controlkit/lib/core/document/CSS.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.onOptionTrigger=function(t){if(t.data.origin==this)return void(this._isActive?this._onDeactive():(this._onActive(),this._btnNode.setStyleClass(c.ButtonPresetActive),this._isActive=!0));this._isActive&&this.deactivate()},i.prototype._onMouseDown=function(){this.dispatchEvent(new a(this,s.TRIGGERED,null))},i.prototype.setOnActive=function(t){this._onActive=t},i.prototype.setOnDeactive=function(t){this._onDeactive=t},i.prototype.deactivate=function(){this._isActive=!1,this._btnNode.setStyleClass(c.ButtonPreset)},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Canvas.js":/***/
function(t,e,n){function i(t,e){r.apply(this,arguments);var n=this._wrapNode;n.setStyleClass(o.CanvasWrap);var i=this._canvas=document.createElement("canvas");n.getElement().appendChild(i);var a=n.getWidth();this._canvasWidth=this._canvasHeight=0,this._setCanvasSize(a,a),this._updateHeight(),this._node.setStyleClass(o.CanvasListItem),this._parent.addEventListener(l.GROUP_SIZE_CHANGE,this,"onGroupSizeChange"),this.addEventListener(l.GROUP_SIZE_UPDATE,this._parent,"onGroupSizeUpdate")}var r=n("./node_modules/controlkit/lib/core/Component.js"),o=n("./node_modules/controlkit/lib/core/document/CSS.js"),a=n("./node_modules/controlkit/lib/component/Metric.js"),s=n("./node_modules/controlkit/lib/core/event/Event.js"),l=n("./node_modules/controlkit/lib/group/GroupEvent.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._updateHeight=function(){var t=this._canvas.height;this._wrapNode.setHeight(t),this._node.setHeight(t+a.PADDING_WRAPPER)},i.prototype.onGroupSizeChange=function(){var t=this._wrapNode.getWidth();this._setCanvasSize(t,t),this._updateHeight(),this._redraw(),this.dispatchEvent(new s(this,l.GROUP_SIZE_UPDATE,null))},i.prototype._setCanvasSize=function(t,e){var n=this._canvasWidth=t,i=this._canvasHeight=e,r=this._canvas;r.style.width=n+"px",r.style.height=i+"px",r.width=n,r.height=i},i.prototype.getCanvas=function(){return this._canvas},i.prototype.getContext=function(){return this._canvas.getContext("2d")},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Checkbox.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments),i=i||{},i.onChange=i.onChange||this._onChange,this._onChange=i.onChange;var a=this._input=new o(o.INPUT_CHECKBOX);a.setProperty("checked",this._obj[this._key]),a.addEventListener(s.CHANGE,this._onInputChange.bind(this)),this._wrapNode.addChild(this._input)}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/core/event/Event.js"),s=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),l=n("./node_modules/controlkit/lib/core/ComponentEvent.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.applyValue=function(){this.pushHistoryState();var t=this._obj,e=this._key;t[e]=!t[e],this.dispatchEvent(new a(this,l.VALUE_UPDATED,null))},i.prototype._onInputChange=function(){this.applyValue(),this._onChange()},i.prototype.onValueUpdate=function(t){t.data.origin!=this&&this._input.setProperty("checked",this._obj[this._key])},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Color.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments),i=i||{},i.presets=i.presets||y,i.colorMode=i.colorMode||v,i.onChange=i.onChange||this._onChange,this._presetsKey=i.presets,this._onChange=i.onChange;var a=this._color=new o;n=this._value=this._obj[this._key];var s=this._colorMode=i.colorMode;this._validateColorFormat(n,b,_);var l=this._wrapNode;if(this._presetsKey){a.setStyleClass(d.Color);var p=new o;p.setStyleClass(d.WrapColorWPreset),l.addChild(p),p.addChild(a);for(var m=this._obj[this._presetsKey],g=-1;++g<m.length;)this._validateColorFormat(m[g],x,A);var w=u.get(),S=new c(l),M=function(){w.clear(),S.deactivate()},E=this,T=function(){w.build(m,E._value,a,function(){E.pushHistoryState(),E._value=m[w.getSelectedIndex()],E.applyValue(),E._onChange(E._obj[E._key])},M,h.PADDING_PRESET,!0,s)};S.setOnActive(T),S.setOnDeactive(M)}else a.setStyleClass(d.Color),l.addChild(a);a.addEventListener(f.MOUSE_DOWN,this._onColorTrigger.bind(this)),this._updateColor()}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/core/color/ColorMode.js"),s=n("./node_modules/controlkit/lib/component/Picker.js"),l=n("./node_modules/controlkit/lib/core/color/ColorUtil.js"),u=n("./node_modules/controlkit/lib/component/Options.js"),c=n("./node_modules/controlkit/lib/component/ButtonPreset.js"),h=n("./node_modules/controlkit/lib/component/Metric.js"),d=n("./node_modules/controlkit/lib/core/document/CSS.js"),p=n("./node_modules/controlkit/lib/core/event/Event.js"),f=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),m=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),g=n("./node_modules/controlkit/lib/core/color/ColorFormatError.js"),v=a.HEX,y=null,b="Color format should be hex. Set colorMode to rgb, rgbfv or hsv.",_="Color format should be rgb, rgbfv or hsv. Set colorMode to hex.",x="Preset color format should be hex.",A="Preset color format should be rgb, rgbfv or hsv.";i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._onColorTrigger=function(){var t,e=this._colorMode,n=a.HEX,i=a.RGB,r=a.RGBfv,o=a.HSV,l=this._value,u=function(){switch(this.pushHistoryState(),e){case n:this._value=s.get().getHEX();break;case i:
//if val = Float32array or so
t=s.get().getRGB(),l[0]=t[0],l[1]=t[1],l[2]=t[2];break;case r:t=s.get().getRGBfv(),l[0]=t[0],l[1]=t[1],l[2]=t[2];break;case o:this._value=s.get().getHSV()}this.applyValue()}.bind(this),c=s.get();switch(e){case n:c.setColorHEX(l);break;case i:c.setColorRGB(l[0],l[1],l[2]);break;case r:c.setColorRGBfv(l[0],l[1],l[2]);break;case o:c.setColorHSV(l[0],l[1],l[2])}c.setCallbackPick(u),c.open()},i.prototype.applyValue=function(){this._obj[this._key]=this._value,this._updateColor(),this.dispatchEvent(new p(this,m.VALUE_UPDATED,null)),this._onChange(this._obj[this._key])},i.prototype.onValueUpdate=function(t){t.data.origin!=this&&(this._value=this._obj[this._key],this._updateColor())},i.prototype._updateColor=function(){var t,e=this._value,n=this._color;switch(n.setProperty("innerHTML",e),this._colorMode){case a.HEX:t=e;break;case a.RGB:t=l.RGB2HEX(e[0],e[1],e[2]);break;case a.RGBfv:t=l.RGBfv2HEX(e[0],e[1],e[2]);break;case a.HSV:t=l.HSV2RGB(e[0],e[1],e[2])}n.getStyle().backgroundColor=t},i.prototype._validateColorFormat=function(t,e,n){var i=this._colorMode;if(i==a.HEX&&"[object Array]"===Object.prototype.toString.call(t)||i==a.HEX&&"[object Float32Array]"===Object.prototype.toString.call(t))throw new g(e);if((i==a.RGB||i==a.RGBfv||i==a.HSV)&&"[object Array]"!==Object.prototype.toString.call(t)||i==a.HSV&&"[object Float32Array]"!==Object.prototype.toString.call(t))throw new g(n)},t.exports=i},/***/
"./node_modules/controlkit/lib/component/FunctionPlotType.js":/***/
function(t,e){var n={IMPLICIT:"implicit",NON_IMPLICIT:"nonImplicit"};t.exports=n},/***/
"./node_modules/controlkit/lib/component/FunctionPlotter.js":/***/
function(t,e,n){function i(t,e,n,i){if(i=i||{},i.showMinMaxLabels=void 0===i.showMinMaxLabels?g:i.showMinMaxLabels,r.apply(this,arguments),"function"!=typeof e[n])throw new p(e,n);var l=e[n].length;if(l>2||0==l)throw new f;var u=this._svgRoot,N=this._path,I=this._axes=u.insertBefore(this._createSVGObject("path"),N);I.style.strokeWidth=1;var O=this._axesLabels=u.insertBefore(this._createSVGObject("path"),N);O.style.stroke="rgb(43,48,51)",O.style.strokeWidth=1;var R=this._grid,D=this._svg,B=Number(D.getAttribute("width")),j=new o;j.setStyleClass(a.GraphSliderXWrap);var U=new o;U.setStyleClass(a.GraphSliderYWrap);var k=this._sliderXTrack=new o;k.setStyleClass(a.GraphSliderX);var V=this._sliderYTrack=new o;V.setStyleClass(a.GraphSliderY);var G=this._sliderXHandle=new o;G.setStyleClass(a.GraphSliderXHandle);var F=this._sliderYHandle=new o;F.setStyleClass(a.GraphSliderYHandle),k.addChild(G),V.addChild(F),j.addChild(k),U.addChild(V);var z=this._wrapNode,H=this._plotMode=1==l?s.NON_IMPLICIT:s.IMPLICIT;if(H==s.IMPLICIT){var X=this._canvas=document.createElement("canvas");X.style.width=X.style.height=B+"px",X.width=X.height=B,z.getElement().insertBefore(X,D),this._canvasContext=X.getContext("2d"),this._canvasImageData=this._canvasContext.getImageData(0,0,B,B),I.style.stroke=T,R.style.stroke=C}else I.style.stroke=P,R.style.stroke=L;z.addChild(j),z.addChild(U),G.addEventListener(d.MOUSE_DOWN,this._onSliderXHandleDown.bind(this)),F.addEventListener(d.MOUSE_DOWN,this._onSliderYHandleDown.bind(this));var W=this._units=[null,null];this._scale=null,H==s.NON_IMPLICIT?(W[0]=v,W[1]=y,this._scale=w):H==s.IMPLICIT&&(W[0]=b,W[1]=_,this._scale=S),this._unitsMinMax=[x,A],//1/8->4
this._scaleMinMax=[M,E],//1/50 -> 25
this._center=[Math.round(.5*B),Math.round(.5*B)],this._svgPos=[0,0],this._func=null,this.setFunction(this._obj[this._key]),this._sliderXHandleUpdate(),this._sliderYHandleUpdate(),D.addEventListener(c.MOUSE_DOWN,this._onDragStart.bind(this),!1),this._wrapNode.getElement().addEventListener("mousewheel",this._onScale.bind(this,!1)),m.get().addEventListener(h.UPDATE_VALUE,this,"onValueUpdate")}var r=n("./node_modules/controlkit/lib/component/Plotter.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/core/document/CSS.js"),s=n("./node_modules/controlkit/lib/component/FunctionPlotType.js"),l=n("./node_modules/controlkit/lib/core/document/Mouse.js"),u=n("./node_modules/controlkit/lib/component/Metric.js"),c=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),h=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),d=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),p=n("./node_modules/controlkit/lib/component/FunctionPlotterObjectError.js"),f=n("./node_modules/controlkit/lib/component/FunctionPlotterFunctionArgsError.js"),m=n("./node_modules/controlkit/lib/core/ObjectComponentNotifier.js"),g=!0,v=1,y=1,b=.25,_=.25,x=.15,A=4,w=10,S=1,M=.02,E=25,T="rgba(255,255,255,0.75)",C="rgba(25,25,25,0.75)",P="rgb(54,60,64)",L="rgb(25,25,25)";i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._updateCenter=function(){var t=this._svg,e=Number(t.getAttribute("width")),n=Number(t.getAttribute("height")),i=l.get().getPosition(),r=this._svgPos,o=this._center;o[0]=Math.max(0,Math.min(i[0]-r[0],e)),o[1]=Math.max(0,Math.min(i[1]-r[1],n)),this._plotGraph()},i.prototype._onDragStart=function(t){var e=this._svgPos;e[0]=0,e[1]=0;for(
//skip to container
var n=this._svg.parentNode;n;)e[0]+=n.offsetLeft,e[1]+=n.offsetTop,n=n.offsetParent;var i=c.MOUSE_MOVE,r=c.MOUSE_UP,o=this._updateCenter.bind(this),a=function(){this._updateCenter.bind(this),document.removeEventListener(i,o,!1),document.removeEventListener(r,a,!1)}.bind(this);document.addEventListener(i,o,!1),document.addEventListener(r,a,!1),this._updateCenter()},i.prototype._onScale=function(t){t=window.event||t,this._scale+=-1*Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));var e=this._scaleMinMax;this._scale=Math.max(e[0],Math.min(this._scale,e[1])),this._plotGraph(),t.preventDefault()},i.prototype.onValueUpdate=function(){this.setFunction(this._obj[this._key])},i.prototype._redraw=function(){if(this._plotMode==s.IMPLICIT){var t=this._wrapNode.getWidth(),e=this._canvas;e.style.width=e.style.height=t+"px",e.width=e.height=t,this._canvasImageData=this._canvasContext.getImageData(0,0,t,t)}this._sliderXHandleUpdate(),this._sliderYHandleUpdate(),this.setFunction(this._obj[this._key])},i.prototype.setFunction=function(t){this._func=t.bind(this._obj),this._plotGraph()},i.prototype._plotGraph=function(){this._drawGrid(),this._drawAxes(),this._drawPlot()},i.prototype._drawAxes=function(){var t=this._svg,e=Number(t.getAttribute("width")),n=Number(t.getAttribute("height")),i=this._center,r=i[0],o=i[1],a="";a+=this._pathCmdLine(0,o,e,o),a+=this._pathCmdLine(r,0,r,n),this._axes.setAttribute("d",a)},i.prototype._drawPlot=function(){var t,e,n,i,r,o,a,l,u,c,h,d=this._center,p=d[0],f=d[1],m=this._units,g=this._scale;if(this._plotMode==s.NON_IMPLICIT){var v=this._svg;t=Number(v.getAttribute("width")),e=Number(v.getAttribute("height")),n=m[0]*g,i=e/(m[1]*g),u=p/t;var y=Math.floor(t),b=new Array(2*y);for(h=-1;++h<y;)r=h/y-u,o=r*n,a=f-this._func(o)*i,l=2*h,b[l]=h,b[l+1]=a;var _="";for(_+=this._pathCmdMoveTo(b[0],b[1]),h=2;h<b.length;)_+=this._pathCmdLineTo(b[h],b[h+1]),h+=2;this._path.setAttribute("d",_)}else{var x=this._canvas,A=this._canvasContext,w=this._canvasImageData;t=x.width,e=x.height,n=m[0]*g,i=m[1]*g,u=p/t,c=f/e;var S=1/t,M=1/e,E=[0,0,0],T=[30,34,36],C=[255,255,255];h=-1;for(var P;++h<e;)for(P=-1;++P<t;)a=this._func((P*S-u)*n,(h*M-c)*i),E[0]=Math.floor((C[0]-T[0])*a+T[0]),E[1]=Math.floor((C[1]-T[1])*a+T[1]),E[2]=Math.floor((C[2]-T[2])*a+T[2]),l=4*(h*t+P),w.data[l]=E[0],w.data[l+1]=E[1],w.data[l+2]=E[2],w.data[l+3]=255;A.clearRect(0,0,t,e),A.putImageData(w,0,0)}},i.prototype._drawGrid=function(){var t,e,n=this._svg,i=Number(n.getAttribute("width")),r=Number(n.getAttribute("height")),o=this._scale,a=this._units,s=i/(a[0]*o),l=r/(a[1]*o),c=this._center,h=c[0],d=c[1],p=Math.round(d/l)+1,f=Math.round((r-d)/l)+1,m=Math.round(h/s)+1,g=Math.round((i-h)/s)+1,v="",y="",b=u.STROKE_SIZE,_=u.FUNCTION_PLOTTER_LABEL_TICK_SIZE,x=i-_-b,A=r-_-b,w=x-_,S=A-_,M=x-2*(_+b),E=A-2*(_+b);for(t=-1;++t<p;)e=Math.round(d-l*t),v+=this._pathCmdLine(0,e,i,e),e>_&&(y+=this._pathCmdLine(x,e,w,e));for(t=-1;++t<f;)e=Math.round(d+l*t),v+=this._pathCmdLine(0,e,i,e),e<E&&(y+=this._pathCmdLine(x,e,w,e));for(t=-1;++t<m;)e=Math.round(h-s*t),v+=this._pathCmdLine(e,0,e,r),e>_&&(y+=this._pathCmdLine(e,A,e,S));for(t=-1;++t<g;)e=Math.round(h+s*t),v+=this._pathCmdLine(e,0,e,r),e<M&&(y+=this._pathCmdLine(e,A,e,S));this._grid.setAttribute("d",v),this._axesLabels.setAttribute("d",y)},i.prototype._sliderXStep=function(t){var e=t[0],n=this._sliderXHandle,i=n.getWidth(),r=.5*i,o=this._sliderXTrack,a=o.getWidth(),s=o.getPositionGlobalX(),l=u.STROKE_SIZE,c=a-r-2*l,h=Math.max(r,Math.min(e-s,c)),d=h-r;n.setPositionX(d);var p=this._unitsMinMax[0],f=this._unitsMinMax[1],m=(h-r)/(c-r),g=p+(f-p)*m;this._units[0]=g,this._plotGraph()},i.prototype._sliderYStep=function(t){var e=t[1],n=this._sliderYHandle,i=n.getHeight(),r=.5*i,o=this._sliderYTrack,a=o.getHeight(),s=o.getPositionGlobalY(),l=a-r-2,u=Math.max(r,Math.min(e-s,l)),c=u-r;n.setPositionY(c);var h=this._unitsMinMax[0],d=this._unitsMinMax[1],p=(u-r)/(l-r),f=d+(h-d)*p;this._units[1]=f,this._plotGraph()},i.prototype._onSliderXHandleDown=function(){this._onSliderHandleDown(this._sliderXStep.bind(this))},i.prototype._onSliderYHandleDown=function(){this._onSliderHandleDown(this._sliderYStep.bind(this))},i.prototype._onSliderHandleDown=function(t){var e=c.MOUSE_MOVE,n=c.MOUSE_UP,i=l.get(),r=function(){t(i.getPosition())},o=function(){document.removeEventListener(e,r,!1),document.removeEventListener(n,o,!1)};t(i.getPosition()),document.addEventListener(e,r,!1),document.addEventListener(n,o,!1)},i.prototype._sliderXHandleUpdate=function(){var t=this._unitsMinMax[0],e=this._unitsMinMax[1],n=this._units[0],i=this._sliderXHandle,r=i.getWidth(),o=.5*r,a=this._sliderXTrack.getWidth(),s=u.STROKE_SIZE,l=o,c=a-o-2*s;i.setPositionX(l+(n-t)/(e-t)*(c-l)-o)},i.prototype._sliderYHandleUpdate=function(){var t=this._unitsMinMax[0],e=this._unitsMinMax[1],n=this._units[1],i=this._sliderYHandle,r=i.getHeight(),o=.5*r,a=this._sliderYTrack.getHeight(),s=u.STROKE_SIZE,l=a-o-2*s,c=o;i.setPositionY(l+(n-t)/(e-t)*(c-l)-o)},t.exports=i},/***/
"./node_modules/controlkit/lib/component/FunctionPlotterFunctionArgsError.js":/***/
function(t,e){function n(){Error.apply(this),Error.captureStackTrace(this,n),this.name="FunctionPlotterFunctionArgsError",this.message="Function should be of form f(x) or f(x,y)."}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,t.exports=n},/***/
"./node_modules/controlkit/lib/component/FunctionPlotterObjectError.js":/***/
function(t,e){function n(t,e){Error.apply(this),Error.captureStackTrace(this,n),this.name="ComponentObjectError",this.message="Object "+t.constructor.name+" "+e+"should be of type Function."}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,t.exports=n},/***/
"./node_modules/controlkit/lib/component/Metric.js":/***/
function(t,e){var n={COMPONENT_MIN_HEIGHT:25,STROKE_SIZE:1,PADDING_WRAPPER:12,PADDING_OPTIONS:2,PADDING_PRESET:20,SCROLLBAR_TRACK_PADDING:2,FUNCTION_PLOTTER_LABEL_TICK_SIZE:6};t.exports=n},/***/
"./node_modules/controlkit/lib/component/NumberInput.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments),i=i||{},i.onBegin=i.onBegin||null,i.onChange=i.onChange||this._onChange,i.onFinish=i.onFinish||null,i.onError=i.onError||null,i.dp=void 0===i.dp||null==i.dp?m:i.dp,i.step=i.step||g,i.presets=i.presets||v,this._onBegin=i.onBegin,this._onChange=i.onChange,this._presetsKey=i.presets;var h=this._input=new o(i.step,i.dp,i.onBegin,this._onInputChange.bind(this),i.onFinish,i.onError),d=this._wrapNode,y=i.presets;if(y){var b=new a;b.setStyleClass(u.WrapInputWPreset),d.addChild(b),b.addChild(h.getNode());var _=s.get(),x=this._btnPreset=new l(this._wrapNode),A=function(){_.clear(),x.deactivate()},w=this,S=function(){_.build(y,h.getValue(),h.getNode(),function(){h.setValue(y[_.getSelectedIndex()]),w.applyValue(),w._onChange(w._obj[w._key])},A,c.PADDING_PRESET,!1)};x.setOnActive(S),x.setOnDeactive(A)}else d.addChild(h.getNode());h.getNode().addEventListener(p.MOUSE_DOWN,this._onInputDragStart.bind(this)),this.addEventListener(f.INPUT_SELECT_DRAG,this._parent,"onComponentSelectDrag"),h.setValue(this._obj[this._key])}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/component/NumberInput_Internal.js"),a=n("./node_modules/controlkit/lib/core/document/Node.js"),s=n("./node_modules/controlkit/lib/component/Options.js"),l=n("./node_modules/controlkit/lib/component/ButtonPreset.js"),u=n("./node_modules/controlkit/lib/core/document/CSS.js"),c=n("./node_modules/controlkit/lib/component/Metric.js"),h=n("./node_modules/controlkit/lib/core/event/Event.js"),d=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),p=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),f=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),m=2,g=1,v=null;i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._onInputChange=function(){this.applyValue(),this._onChange(this._obj[this._key])},i.prototype.applyValue=function(){this.pushHistoryState(),this._obj[this._key]=this._input.getValue(),this.dispatchEvent(new h(this,f.VALUE_UPDATED,null))},i.prototype.onValueUpdate=function(t){t.data.origin!=this&&this._input.setValue(this._obj[this._key])},
//Prevent chrome select drag
i.prototype._onInputDragStart=function(){var t=d.MOUSE_MOVE,e=d.MOUSE_UP,n=f.INPUT_SELECT_DRAG,i=this,r=function(){i.dispatchEvent(new h(this,n,null))},o=function(){i.dispatchEvent(new h(this,n,null)),document.removeEventListener(t,r,!1),document.removeEventListener(t,o,!1)};this.dispatchEvent(new h(this,n,null)),document.addEventListener(t,r,!1),document.addEventListener(e,o,!1)},t.exports=i},/***/
"./node_modules/controlkit/lib/component/NumberInput_Internal.js":/***/
function(t,e,n){function i(t,e){t.setProperty("value",e),t.dispatchEvent(new Event("input"))}var r=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),o=(n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),n("./node_modules/controlkit/lib/core/document/Node.js")),a=/^-?\d*\.?\d*$/,s=null,l=null;NumberInput_Internal=function(t,e,n,i,a,u){r.apply(this,null),this._value=0,this._valueStep=t,this._valueDp=e,this._onBegin=n||function(){},this._onChange=i||function(){},this._onFinish=a||function(){},this._onError=u||function(){},this._keyCode=null,this._caretOffset=0;var c=this._input=new o("text");c.setProperty("value",this._value),c.addEventListener("input",this._onInput.bind(this)),c.addEventListener("keydown",this._onKeydown.bind(this)),s||(c.getElement().setSelectionRange?(s=function(t,e){t.getElement().setSelectionRange(e,e)},l=function(t){t.getElement().setSelectionRange(0,t.getProperty("value").length)}):(s=function(t,e){var n=t.getElement().createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()},l=function(t){var e=t.getElement().createTextRange();e.collapse(!0),e.moveStart("character",0),e.moveEnd("character",t.getProperty("value").length),e.select()}))},NumberInput_Internal.prototype=Object.create(r.prototype),NumberInput_Internal.prototype.constructor=NumberInput_Internal,NumberInput_Internal.prototype._setValue=function(t){var e=((t=+t)||1/t)<0&&0==t?"-":"";//-0
t=Number(t).toFixed(this._valueDp),this._input.setProperty("value",e+t),this._value=Number(t)},NumberInput_Internal.prototype._onInput=function(){var t=this._input,e=t.getProperty("value"),n=t.getProperty("selectionStart"),i=this._valueDp,r=e[0];if(""==e?e=0:"."===r&&(e="0"+e),!a.test(e)||"-"==e)return t.setProperty("value",this._value.toFixed(i)),s(t,Math.max(--n,0)),void this._onError(this._keyCode);this._onBegin(this._value),this._setValue(e),s(t,n-this._caretOffset),this._onChange()},NumberInput_Internal.prototype._onKeydown=function(t){var e=this._keyCode=t.keyCode;if(13==e)return this._onFinish(),void t.preventDefault();var n=this._input,r=n.getProperty("value"),o=n.getProperty("selectionStart"),a=n.getProperty("selectionEnd"),u=r.length,c=8==e||45==e,h=t.metaKey,d=t.ctrlKey,p=37==e,f=39==e,m=p||f,g=t.shiftKey,v=38==e||40==e,y=(h||d)&&65==e,b=o!=a,_=0==o&&a==u,x=189==e,A=r.indexOf(".");
//prevent cmd-z || ctrl-z
if(this._caretOffset=0,(h||d)&&90==e)return void t.preventDefault();
//select all cmd+a || ctrl+a
if(y)return l(n),void t.preventDefault();
//everything is selected
if(_)
//set negative zero, as starting point for negative number
//set caret after  '-'
//delete number / replace / ignore
//jump to start <--> end
return x?(i(n,"-0"),s(n,1)):(i(n,c?0:String.fromCharCode(e)),s(n,p?o:a)),void t.preventDefault();
//jump over decimal mark
if(c&&o-1==A)return void s(n,o-1);
// 0|. enter first dp without jumping over decimal mark
if(!m&&"0"==r[0]&&1==o)return s(n,1),void(this._caretOffset=1);
//increase / decrease number by (step up / down) * multiplier on shift down
if(v){var w=(g?10:1)*this._valueStep,S=38==e?1:-1;return i(n,Number(r)+w*S),s(n,o),void t.preventDefault()}
//range selected, not in selection process
//range selected, not in selection process
//caret within fractional part, not moving caret, selecting, deleting
//caret at end of number, do nothing
//jump to start <--> end
//replace complete range, not just parts
return!b||g&&m?!g&&!m&&!c&&o>A&&o<u?(r=r.substr(0,o)+String.fromCharCode(e)+r.substr(o+1,u-1),i(n,r),s(n,Math.min(o+1,u-1)),void t.preventDefault()):void(!c&&!m&&!v&&o>=u&&t.preventDefault()):(m?s(n,p?o:a):(r=r.substr(0,o)+String.fromCharCode(e)+r.substr(a,u-a),i(n,r),s(n,a)),void t.preventDefault())},NumberInput_Internal.prototype.getValue=function(){return this._value},NumberInput_Internal.prototype.setValue=function(t){this._setValue(t)},NumberInput_Internal.prototype.getNode=function(){return this._input},t.exports=NumberInput_Internal},/***/
"./node_modules/controlkit/lib/component/NumberOutput.js":/***/
function(t,e,n){function i(t,e,n,i){i=i||{},i.dp=i.dp||o,r.apply(this,arguments),this._valueDp=i.dp+1}var r=n("./node_modules/controlkit/lib/component/Output.js"),o=2;i.prototype=Object.create(r.prototype),i.prototype.constructor=i,
//FIXME
i.prototype._setValue=function(){if(!this._parent.isDisabled()){var t,e,n=this._obj[this._key],i=this._textArea,r=this._valueDp;if("object"!=typeof n||"number"!=typeof n.length||"function"!=typeof n.splice||n.propertyIsEnumerable("length"))e=n.toString(),t=e.indexOf("."),i.setProperty("value",t>0?e.slice(0,t+r):e);else{e=n.slice();for(var o,a=-1,s=this._wrap;++a<e.length;)o=e[a]=e[a].toString(),(t=o.indexOf("."))>0&&(e[a]=o.slice(0,t+r));s&&(i.setStyleProperty("white-space","nowrap"),e=e.join("\n")),i.setProperty("value",e)}}},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Options.js":/***/
function(t,e,n){function i(t){this._parenNode=t;var e=this._node=new r,n=this._listNode=new r(r.LIST);e.setStyleClass(s.Options),e.addChild(n),this._selectedIndex=null,this._callbackOut=function(){},this._unfocusable=!1,document.addEventListener(o.MOUSE_DOWN,this._onDocumentMouseDown.bind(this)),document.addEventListener(o.MOUSE_UP,this._onDocumentMouseUp.bind(this)),this.clear()}var r=n("./node_modules/controlkit/lib/core/document/Node.js"),o=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),a=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),s=n("./node_modules/controlkit/lib/core/document/CSS.js"),l=n("./node_modules/controlkit/lib/core/color/ColorMode.js"),u=n("./node_modules/controlkit/lib/core/color/ColorUtil.js"),c=n("./node_modules/controlkit/lib/component/Metric.js");i.prototype={_onDocumentMouseDown:function(){this._unfocusable&&this._callbackOut()},_onDocumentMouseUp:function(){this._unfocusable=!0},build:function(t,e,n,i,o,h,d,p){this._clearList(),this._parenNode.addChild(this.getNode());var f=this._node,m=this._listNode;h=h||0;var g,v,y=this,b=-1;if(d){p=p||l.HEX,m.setStyleClass(s.Color);for(var _,x;++b<t.length;){switch(v=t[b],g=m.addChild(new r(r.LIST_ITEM)),_=g.addChild(new r),p){case l.HEX:x=v;break;case l.RGB:x=u.RGB2HEX(v[0],v[1],v[2]);break;case l.RGBfv:x=u.RGBfv2HEX(v[0],v[1],v[2]);break;case l.HSV:x=u.HSV2RGB(v[0],v[1],v[2])}_.getStyle().backgroundColor=x,_.getStyle().backgroundImage="linear-gradient( rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",_.setProperty("innerHTML",v),v==e&&g.setStyleClass(s.OptionsSelected),g.addEventListener(a.MOUSE_DOWN,function(){y._selectedIndex=Array.prototype.indexOf.call(this.parentNode.children,this),i()})}}else for(m.deleteStyleClass();++b<t.length;)v=t[b],g=m.addChild(new r(r.LIST_ITEM)),g.setProperty("innerHTML",v),v==e&&g.setStyleClass(s.OptionsSelected),g.addEventListener(a.MOUSE_DOWN,function(){y._selectedIndex=Array.prototype.indexOf.call(this.parentNode.children,this),i()});
//position, set width and enable
var A=n.getPositionGlobal(),w=n.getWidth()-h,S=n.getHeight(),M=m.getWidth(),E=m.getHeight(),T=2*c.STROKE_SIZE,C=c.PADDING_OPTIONS,P=(M<w?w:M)-T,L=A[0],N=A[1]+S-C,I=window.innerWidth,O=window.innerHeight,R=L+P>I?L-P+w-T:L,D=N+E>O?N-.5*E-.5*S:N;m.setWidth(P),f.setPositionGlobal(R,D),this._callbackOut=o,this._unfocusable=!1},_clearList:function(){this._listNode.removeAllChildren(),this._listNode.deleteStyleProperty("width"),this._selectedIndex=null,this._build=!1},clear:function(){this._clearList(),this._callbackOut=function(){},this._parenNode.removeChild(this.getNode())},isBuild:function(){return this._build},getNode:function(){return this._node},getSelectedIndex:function(){return this._selectedIndex}},i.setup=function(t){return i._instance=new i(t)},i.get=function(){return i._instance},i.destroy=function(){i._instance=null},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Output.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments),i=i||{},i.height=i.height||p,i.wrap=void 0===i.wrap?f:i.wrap,i.update=void 0===i.update?m:i.update,this._wrap=i.wrap,this._update=i.update;var u=this._textArea=new o(o.TEXTAREA),c=this._wrapNode,g=this._node;if(u.setProperty("readOnly",!0),c.addChild(u),u.addEventListener(h.MOUSE_DOWN,this._onInputDragStart.bind(this)),this.addEventListener(d.INPUT_SELECT_DRAG,this._parent,"onComponentSelectDrag"),i.height){var v=new o;v.setStyleClass(a.TextAreaWrap),v.addChild(u),c.addChild(v);
//FIXME
var y=this._height=i.height;u.setHeight(Math.max(y+4,s.COMPONENT_MIN_HEIGHT)),c.setHeight(u.getHeight()),g.setHeight(c.getHeight()+4),this._scrollBar=new l(v,u,y-4)}i.wrap&&u.setStyleProperty("white-space","pre-wrap"),this._prevString="",this._prevScrollHeight=-1,this._setValue()}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/core/document/CSS.js"),s=n("./node_modules/controlkit/lib/component/Metric.js"),l=n("./node_modules/controlkit/lib/core/layout/ScrollBar.js"),u=n("./node_modules/controlkit/lib/core/event/Event.js"),c=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),h=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),d=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),p=null,f=!1,m=!0;i.prototype=Object.create(r.prototype),i.prototype.constructor=i,
//Override in subclass
i.prototype._setValue=function(){},i.prototype.onValueUpdate=function(){this._setValue()},i.prototype.update=function(){this._update&&this._setValue()},
//Prevent chrome select drag
i.prototype._onDrag=function(){this.dispatchEvent(new u(this,d.INPUT_SELECT_DRAG,null))},i.prototype._onDragFinish=function(){this.dispatchEvent(new u(this,d.INPUT_SELECT_DRAG,null)),document.removeEventListener(c.MOUSE_MOVE,this._onDrag,!1),document.removeEventListener(c.MOUSE_MOVE,this._onDragFinish,!1)},i.prototype._onInputDragStart=function(){this.dispatchEvent(new u(this,d.INPUT_SELECT_DRAG,null)),document.addEventListener(c.MOUSE_MOVE,this._onDrag.bind(this),!1),document.addEventListener(c.MOUSE_UP,this._onDragFinish.bind(this),!1)},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Pad.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments),i=i||{},i.boundsX=i.boundsX||u,i.boundsY=i.boundsY||c,i.labelX=i.labelX||h,i.labelY=i.labelY||d,i.showCross=i.showCross||!0,this._onChange=i.onChange||this._onChange,this._onFinish=i.onFinish||function(){},this._boundsX=i.boundsX,this._boundsY=i.boundsY,this._labelAxisX=""!=i.labelX&&"none"!=i.labelX?i.labelX:null,this._labelAxisY=""!=i.labelY&&"none"!=i.labelY?i.labelY:null;var o=this._path;o.style.strokeWidth=1,o.style.stroke="#363c40",this._grid.style.stroke="rgb(25,25,25)",this._svgPos=[0,0];var a=this._handle=this._svgRoot.appendChild(this._createSVGObject("g")),l=a.appendChild(this._createSVGObject("circle"));l.setAttribute("r",String(11)),l.setAttribute("fill","rgba(0,0,0,0.05)");var p=a.appendChild(this._createSVGObject("circle"));p.setAttribute("r",String(10)),p.setAttribute("fill","rgb(83,93,98)");var f=a.appendChild(this._createSVGObject("circle"));f.setAttribute("r",String(9)),f.setAttribute("fill","rgb(57,69,76)"),f.setAttribute("cy",String(.75));var m=a.appendChild(this._createSVGObject("circle"));m.setAttribute("r",String(10)),m.setAttribute("stroke","rgb(17,19,20)"),m.setAttribute("stroke-width",String(1)),m.setAttribute("fill","none");var g=a.appendChild(this._createSVGObject("circle"));g.setAttribute("r",String(6)),g.setAttribute("fill","rgb(30,34,36)");var v=a.appendChild(this._createSVGObject("circle"));v.setAttribute("r",String(3)),v.setAttribute("fill","rgb(255,255,255)"),a.setAttribute("tranform","translate(0 0)"),this._svg.addEventListener(s.MOUSE_DOWN,this._onDragStart.bind(this),!1),this._drawValue(this._obj[this._key])}var r=n("./node_modules/controlkit/lib/component/Plotter.js"),o=n("./node_modules/controlkit/lib/core/document/Mouse.js"),a=n("./node_modules/controlkit/lib/core/event/Event.js"),s=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),l=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),u=[-1,1],c=[-1,1],h="",d="";i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._onDragStart=function(){var t=this._svgPos;t[0]=0,t[1]=0;for(
//skip to container
var e=this._svg.parentNode;e;)t[0]+=e.offsetLeft,t[1]+=e.offsetTop,e=e.offsetParent;var n=s.MOUSE_MOVE,i=s.MOUSE_UP,r=function(){this._drawValueInput(),this.applyValue(),this._onChange()}.bind(this),o=function(){this.pushHistoryState(),this._drawValueInput(),this.applyValue(),this._onFinish(),document.removeEventListener(n,r,!1),document.removeEventListener(i,o,!1)}.bind(this);document.addEventListener(n,r,!1),document.addEventListener(i,o,!1),this._drawValueInput(),this.applyValue(),this._onChange()},i.prototype._redraw=function(){this._drawValue(this._obj[this._key])},i.prototype._drawValueInput=function(){this._drawValue(this._getMouseNormalized())},i.prototype._drawValue=function(t){this._obj[this._key]=t,this._drawGrid(),this._drawPoint()},i.prototype._drawGrid=function(){var t=Number(this._svg.getAttribute("width")),e=Math.floor(.5*t),n=Math.floor(.5*t),i="";i+=this._pathCmdLine(0,n,t,n),i+=this._pathCmdLine(e,0,e,t),this._grid.setAttribute("d",i)},i.prototype._drawPoint=function(){var t=Number(this._svg.getAttribute("width")),e=this._obj[this._key],n=(.5+.5*e[0])*t,i=(.5+.5*-e[1])*t,r="";r+=this._pathCmdLine(0,i,t,i),r+=this._pathCmdLine(n,0,n,t),this._path.setAttribute("d",r),this._handle.setAttribute("transform","translate("+n+" "+i+")")},i.prototype._getMouseNormalized=function(){var t=this._svgPos,e=o.get().getPosition(),n=Number(this._svg.getAttribute("width"));return[Math.max(0,Math.min(e[0]-t[0],n))/n*2-1,1-Math.max(0,Math.min(e[1]-t[1],n))/n*2]},i.prototype.applyValue=function(){this.dispatchEvent(new a(this,l.VALUE_UPDATED,null))},i.prototype.onValueUpdate=function(t){t.data.origin!=this&&this._drawValue(this._obj[this._key])},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Picker.js":/***/
function(t,e,n){function i(t){var e=this._node=(new r).setStyleClass(o.Picker),n=this._headNode=(new r).setStyleClass(o.Head),i=(new r).setStyleClass(o.Wrap),s=(new r).setStyleClass(o.Label),l=(new r).setStyleClass(o.Menu),u=(new r).setStyleClass(o.Wrap),f=new r(r.INPUT_BUTTON);f.setStyleClass(o.ButtonMenuClose);var m=(new r).setStyleClass(o.PickerFieldWrap),g=(new r).setStyleClass(o.SliderWrap),v=(new r).setStyleClass(o.PickerInputWrap),y=this._canvasField=document.createElement("canvas"),b=this._canvasSlider=document.createElement("Canvas");m.getElement().appendChild(y),g.getElement().appendChild(b),this._setSizeCanvasField(154,154),this._setSizeCanvasSlider(14,154);var _=this._contextCanvasField=y.getContext("2d"),x=this._contextCanvasSlider=b.getContext("2d"),A=this._handleField=new r;A.setStyleClass(o.PickerHandleField);var w=this._handleSlider=new r;w.setStyleClass(o.PickerHandleSlider);var S=this._onInputHueChange.bind(this),M=this._onInputSatChange.bind(this),E=this._onInputValChange.bind(this),T=this._onInputRChange.bind(this),C=this._onInputGChange.bind(this),P=this._onInputBChange.bind(this),L=this._inputHue=new a(1,0,null,S),N=this._inputSat=new a(1,0,null,M),I=this._inputVal=new a(1,0,null,E),O=this._inputR=new a(1,0,null,T),R=this._inputG=new a(1,0,null,C),D=this._inputB=new a(1,0,null,P),B=(new r).setStyleClass(o.PickerControlsWrap),j=new r(r.INPUT_BUTTON).setStyleClass(o.Button).setProperty("value","pick"),U=new r(r.INPUT_BUTTON).setStyleClass(o.Button).setProperty("value","cancel"),k=(new r).setStyleClass(o.PickerColorContrast),V=this._colorCurrNode=new r,G=this._colorPrevNode=new r;k.addChild(V),k.addChild(G),B.addChild(U),B.addChild(j),B.addChild(k),this._setContrasPrevColor(0,0,0);var F=(new r).setStyleClass(o.PickerInputField),z=(new r).setStyleClass(o.PickerInputField),H=(new r).setStyleClass(o.PickerInputField),X=new r(r.SPAN).setStyleClass(o.Label).setProperty("innerHTML","H"),W=new r(r.SPAN).setStyleClass(o.Label).setProperty("innerHTML","S"),Y=new r(r.SPAN).setStyleClass(o.Label).setProperty("innerHTML","V");F.addChildren(X,L.getNode()),z.addChildren(W,N.getNode()),H.addChildren(Y,I.getNode());var K=(new r).setStyleClass(o.PickerInputField),Z=(new r).setStyleClass(o.PickerInputField),q=(new r).setStyleClass(o.PickerInputField),Q=new r(r.SPAN).setStyleClass(o.Label).setProperty("innerHTML","R"),J=new r(r.SPAN).setStyleClass(o.Label).setProperty("innerHTML","G"),$=new r(r.SPAN).setStyleClass(o.Label).setProperty("innerHTML","B");K.addChildren(Q,O.getNode()),Z.addChildren(J,R.getNode()),q.addChildren($,D.getNode()),v.addChildren(K,F,Z,z,q,H,k);var tt=new r;tt.setStyleClass(o.PickerInputWrap);var et=this._inputHEX=new r(r.INPUT_TEXT),nt=(new r).setStyleClass(o.PickerInputField),it=new r(r.SPAN).setStyleClass(o.Label);it.setProperty("innerHTML","#"),nt.addChildren(it,et),tt.addChild(nt),et.addEventListener(c.CHANGE,this._onInputHEXFinish.bind(this)),s.setProperty("innerHTML","Color Picker"),l.addChild(f),n.addChild(l),i.addChild(s),n.addChild(i),e.addChild(n),e.addChild(u),
//wrapNode.addChild(paletteWrap);
u.addChild(m),u.addChild(g),u.addChild(v),u.addChild(tt),u.addChild(B),m.addChild(A),g.addChild(w);var rt=c.MOUSE_DOWN,ot=this._onCanvasFieldMouseDown.bind(this);m.addEventListener(rt,ot),A.addEventListener(rt,ot),ot=this._onCanvasSliderMouseDown.bind(this),g.addEventListener(rt,ot),w.addEventListener(rt,ot),f.addEventListener(rt,this._onClose.bind(this)),j.addEventListener(rt,this._onPick.bind(this)),U.addEventListener(rt,this._onClose.bind(this)),n.addEventListener(c.MOUSE_DOWN,this._onHeadDragStart.bind(this)),this._parentNode=t,this._mouseOffset=[0,0],this._position=[null,null],this._canvasSliderPos=[0,0],this._canvasFieldPos=[0,0],this._handleFieldSize=12,this._handleSliderHeight=7,this._imageDataSlider=x.createImageData(b.width,b.height),this._imageDataField=_.createImageData(y.width,y.height),this._valueHueMinMax=[0,360],this._valueSatMinMax=this._valueValMinMax=[0,100],this._valueRGBMinMax=[0,255],this._valueHue=h,this._valueSat=d,this._valueVal=p,this._valueR=0,this._valueG=0,this._valueB=0,this._valueHEX="#000000",this._valueHEXValid=this._valueHEX,this._callbackPick=function(){},
//this._canvasFieldImageDataFunc = function(i,j){return this._HSV2RGB(this._valueHue,j)}
this._drawCanvasField(),this._drawCanvasSlider(),this._setColorHSV(this._valueHue,this._valueSat,this._valueVal),this._updateColorRGBFromHSV(),this._updateColorHEXFromRGB(),this._updateHandles()}var r=n("./node_modules/controlkit/lib/core/document/Node.js"),o=n("./node_modules/controlkit/lib/core/document/CSS.js"),a=n("./node_modules/controlkit/lib/component/NumberInput_Internal.js"),s=n("./node_modules/controlkit/lib/core/document/Mouse.js"),l=n("./node_modules/controlkit/lib/core/color/ColorUtil.js"),u=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),c=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),h=200,d=50,p=50;i.prototype={_drawHandleField:function(){var t=this._canvasField,e=this._canvasFieldPos,n=s.get().getPosition(),i=Math.max(0,Math.min(n[0]-e[0],t.width)),r=Math.max(0,Math.min(n[1]-e[1],t.height)),o=i/t.width,a=r/t.height,l=Math.round(o*this._valueSatMinMax[1]),u=Math.round((1-a)*this._valueValMinMax[1]);this._setColorHSV(this._valueHue,l,u),this._updateColorRGBFromHSV(),this._updateColorHEXFromRGB(),this._updateHandleField()},_updateHandleField:function(){var t=this._canvasField.width,e=this._canvasField.height,n=.25*this._handleFieldSize,i=this._valueSat/this._valueSatMinMax[1],r=this._valueVal/this._valueValMinMax[1];this._handleField.setPositionGlobal(i*t-n,(1-r)*e-n)},_drawHandleSlider:function(){var t=this._canvasSlider,e=this._canvasSliderPos[1],n=s.get().getY(),i=Math.max(0,Math.min(n-e,t.height)),r=i/t.height,o=Math.floor((1-r)*this._valueHueMinMax[1]);this._setColorHSV(o,this._valueSat,this._valueVal),this._updateColorRGBFromHSV(),this._updateColorHEXFromRGB(),this._updateHandleSlider()},_updateHandleSlider:function(){var t=this._canvasSlider.height,e=.25*this._handleSliderHeight,n=this._valueHue/this._valueHueMinMax[1];this._handleSlider.setPositionGlobalY((t-e)*(1-n))},_updateHandles:function(){this._updateHandleField(),this._updateHandleSlider()},/*---------------------------------------------------------------------------------*/
_setHue:function(t){var e=this._valueHueMinMax;this._valueHue=t==e[1]?e[0]:t,this._updateColorHSV(),this._drawCanvasField()},_setSat:function(t){this._valueSat=Math.round(t),this._updateColorHSV()},_setVal:function(t){this._valueVal=Math.round(t),this._updateColorHSV()},_setR:function(t){this._valueR=Math.round(t),this._updateColorRGB()},_setG:function(t){this._valueG=Math.round(t),this._updateColorRGB()},_setB:function(t){this._valueB=Math.round(t),this._updateColorRGB()},/*---------------------------------------------------------------------------------*/
_onInputHueChange:function(){var t=this._inputHue,e=this._getValueContrained(t,this._valueHueMinMax),n=this._valueHueMinMax;e==n[1]&&(e=n[0],t.setValue(e)),this._setHue(e),this._updateColorRGBFromHSV(),this._updateColorHEXFromRGB(),this._updateHandleSlider(),this._drawCanvasField()},_onInputSatChange:function(){this._setSat(this._getValueContrained(this._inputSat,this._valueSatMinMax)),this._onInputSVChange()},_onInputValChange:function(){this._setVal(this._getValueContrained(this._inputVal,this._valueValMinMax)),this._onInputSVChange()},_onInputRChange:function(){this._setR(this._getValueContrained(this._inputR,this._valueRGBMinMax)),this._onInputRGBChange()},_onInputGChange:function(){this._setG(this._getValueContrained(this._inputG,this._valueRGBMinMax)),this._onInputRGBChange()},_onInputBChange:function(){this._setB(this._getValueContrained(this._inputB,this._valueRGBMinMax)),this._onInputRGBChange()},_onInputHEXFinish:function(){var t=this._inputHEX,e=t.getProperty("value");if(!l.isValidHEX(e))return void t.setProperty("value",this._valueHEXValid);this._valueHEX=this._valueHEXValid=e,this._updateColorFromHEX()},_onInputSVChange:function(){this._updateColorRGBFromHSV(),this._updateColorHEXFromRGB(),this._updateHandleField()},_onInputRGBChange:function(){this._updateColorHSVFromRGB(),this._updateColorHEXFromRGB(),this._updateHandles()},_getValueContrained:function(t,e){var n=Math.round(t.getValue()),i=e[0],r=e[1];return n<=i&&(n=i,t.setValue(n)),n>=r&&(n=r,t.setValue(n)),n},_updateInputHue:function(){this._inputHue.setValue(this._valueHue)},_updateInputSat:function(){this._inputSat.setValue(this._valueSat)},_updateInputVal:function(){this._inputVal.setValue(this._valueVal)},_updateInputR:function(){this._inputR.setValue(this._valueR)},_updateInputG:function(){this._inputG.setValue(this._valueG)},_updateInputB:function(){this._inputB.setValue(this._valueB)},_updateInputHEX:function(){this._inputHEX.setProperty("value",this._valueHEX)},_setColorHSV:function(t,e,n){this._valueHue=t,this._valueSat=e,this._valueVal=n,this._updateInputHue(),this._updateInputSat(),this._updateInputVal(),this._updateContrastCurrColor()},_setColorRGB:function(t,e,n){this._valueR=t,this._valueG=e,this._valueB=n,this._updateInputR(),this._updateInputG(),this._updateInputB(),this._updateContrastCurrColor()},_setColorHEX:function(t){this._valueHEX=t,this._updateInputHEX()},_updateColorHSV:function(){this._setColorHSV(this._valueHue,this._valueSat,this._valueVal),this._updateContrastCurrColor()},_updateColorRGB:function(){this._setColorRGB(this._valueR,this._valueG,this._valueB),this._updateContrastCurrColor()},_updateColorHSVFromRGB:function(){var t=l.RGB2HSV(this._valueR,this._valueG,this._valueB);this._setColorHSV(t[0],t[1],t[2])},_updateColorRGBFromHSV:function(){var t=l.HSV2RGB(this._valueHue,this._valueSat,this._valueVal);this._setColorRGB(t[0],t[1],t[2])},_updateColorHEXFromRGB:function(){var t=l.RGB2HEX(this._valueR,this._valueG,this._valueB);this._setColorHEX(t)},_updateColorFromHEX:function(){var t=l.HEX2RGB(this._valueHEX);this._setColorRGB(t[0],t[1],t[2]),this._updateColorHSVFromRGB(),this._updateHandles()},_updateContrastCurrColor:function(){this._setContrastCurrColor(this._valueR,this._valueG,this._valueB)},_updateContrastPrevColor:function(){this._setContrasPrevColor(this._valueR,this._valueG,this._valueB)},_setContrastCurrColor:function(t,e,n){this._colorCurrNode.setStyleProperty("background","rgb("+t+","+e+","+n+")")},_setContrasPrevColor:function(t,e,n){this._colorPrevNode.setStyleProperty("background","rgb("+t+","+e+","+n+")")},_onHeadDragStart:function(){var t=this._node,e=this._parentNode,n=t.getPositionGlobal(),i=s.get().getPosition(),r=this._mouseOffset;r[0]=i[0]-n[0],r[1]=i[1]-n[1];var o=u.MOUSE_MOVE,a=u.MOUSE_UP,l=this,c=function(){l._updatePosition(),l._updateCanvasNodePositions()},h=function(){l._updateCanvasNodePositions(),document.removeEventListener(o,c,!1),document.removeEventListener(a,h,!1)};e.removeChild(t),e.addChild(t),document.addEventListener(o,c,!1),document.addEventListener(a,h,!1),this._updateCanvasNodePositions()},_updatePosition:function(){var t=s.get().getPosition(),e=this._mouseOffset,n=t[0]-e[0],i=t[1]-e[1],r=this._node,o=this._headNode,a=this._position,l=window.innerWidth-r.getWidth(),u=window.innerHeight-o.getHeight();a[0]=Math.max(0,Math.min(n,l)),a[1]=Math.max(0,Math.min(i,u)),r.setPositionGlobal(a[0],a[1])},_drawCanvasField:function(){for(var t,e=this._canvasField,n=this._contextCanvasField,i=e.width,r=e.height,o=1/i,a=1/r,s=this._imageDataField,u=[],c=0,h=this._valueHue,d=-1;++d<r;)for(t=-1;++t<i;)u=l.HSV2RGB(h,t*o*100,100*(1-d*a)),c=4*(d*i+t),s.data[c]=u[0],s.data[c+1]=u[1],s.data[c+2]=u[2],s.data[c+3]=255;n.putImageData(s,0,0)},_drawCanvasSlider:function(){for(var t,e=this._canvasSlider,n=this._contextCanvasSlider,i=e.width,r=e.height,o=1/r,a=this._imageDataSlider,s=[],u=0,c=-1;++c<r;)for(t=-1;++t<i;)s=l.HSV2RGB(360*(1-c*o),100,100),u=4*(c*i+t),a.data[u]=s[0],a.data[u+1]=s[1],a.data[u+2]=s[2],a.data[u+3]=255;n.putImageData(a,0,0)},_onCanvasFieldMouseDown:function(){var t=u.MOUSE_MOVE,e=u.MOUSE_UP,n=this,i=function(){n._drawHandleField()},r=function(){document.removeEventListener(t,i,!1),document.removeEventListener(e,r,!1)};document.addEventListener(t,i,!1),document.addEventListener(e,r,!1),n._drawHandleField()},_onCanvasSliderMouseDown:function(){var t=u.MOUSE_MOVE,e=u.MOUSE_UP,n=this,i=function(){n._drawHandleSlider(),n._drawCanvasField()},r=function(){document.removeEventListener(t,i,!1),document.removeEventListener(e,r,!1),n._drawCanvasField()};document.addEventListener(t,i,!1),document.addEventListener(e,r,!1),n._drawHandleSlider(),n._drawCanvasField()},_setSizeCanvasField:function(t,e){var n=this._canvasField;n.style.width=t+"px",n.style.height=e+"px",n.width=t,n.height=e},_setSizeCanvasSlider:function(t,e){var n=this._canvasSlider;n.style.width=t+"px",n.style.height=e+"px",n.width=t,n.height=e},open:function(){var t=this._node;this._parentNode.addChild(t);var e=this._position;null===e[0]||null===e[1]?(e[0]=.5*window.innerWidth-.5*t.getWidth(),e[1]=.5*window.innerHeight-.5*t.getHeight()):(e[0]=Math.max(0,Math.min(e[0],window.innerWidth-t.getWidth())),e[1]=Math.max(0,Math.min(e[1],window.innerHeight-t.getHeight()))),t.setPositionGlobal(e[0],e[1]),this._updateCanvasNodePositions()},close:function(){this._parentNode.removeChild(this._node)},_onClose:function(t){t.cancelBubble=!0,this.close()},_onPick:function(){this._callbackPick(),this.close()},_updateCanvasNodePositions:function(){var t=this._canvasSliderPos,e=this._canvasFieldPos;t[0]=t[1]=0,e[0]=e[1]=0;for(var n=this._canvasSlider;n;)t[0]+=n.offsetLeft,t[1]+=n.offsetTop,n=n.offsetParent;for(n=this._canvasField;n;)e[0]+=n.offsetLeft,e[1]+=n.offsetTop,n=n.offsetParent},setCallbackPick:function(t){this._callbackPick=t},setColorHEX:function(t){this._setColorHEX(t),this._updateColorFromHEX(),this._setColor()},setColorRGB:function(t,e,n){this._setColorRGB(t,e,n),this._updateColorHEXFromRGB(),this._updateColorHSVFromRGB(),this._setColor()},setColorRGBfv:function(t,e,n){this.setColorRGB(Math.floor(255*t),Math.floor(255*e),Math.floor(255*n))},setColorHSV:function(t,e,n){this._setColorHSV(t,e,n),this._updateColorRGBFromHSV(),this._updateColorHEXFromRGB(),this._setColor()},_setColor:function(){this._drawCanvasField(),this._drawCanvasSlider(),this._updateHandles(),this._setContrasPrevColor(this._valueR,this._valueG,this._valueB)},getR:function(){return this._valueR},getG:function(){return this._valueG},getB:function(){return this._valueB},getRGB:function(){return[this._valueR,this._valueG,this._valueB]},getHue:function(){return this._valueHue},getSat:function(){return this._valueSat},getVal:function(){return this._valueVal},getHSV:function(){return[this._valueHue,this._valueSat,this._valueVal]},getHEX:function(){return this._valueHEX},getRGBfv:function(){return[this._valueR/255,this._valueG/255,this._valueB/255]},getNode:function(){return this._node}},i.setup=function(t){return i._instance=new i(t)},i.get=function(){return i._instance},i.destroy=function(){i._instance=null},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Plotter.js":/***/
function(t,e,n){function i(t,e,n,i){i=i||{},i.lineWidth=i.lineWidth||2,i.lineColor=i.lineColor||[255,255,255],r.apply(this,arguments);var o=this._lineWidth=i.lineWidth,a=i.lineColor;(this._grid=this._svgRoot.appendChild(this._createSVGObject("path"))).style.stroke="rgb(26,29,31)";var s=this._path=this._svgRoot.appendChild(this._createSVGObject("path"));s.style.stroke="rgb("+a[0]+","+a[1]+","+a[2]+")",s.style.strokeWidth=o,s.style.fill="none"}var r=n("./node_modules/controlkit/lib/component/SVGComponent.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,t.exports=i},/***/
"./node_modules/controlkit/lib/component/Range.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments),i=i||{},i.onChange=i.onChange||this._onChange,i.step=i.step||c,i.dp=null!=i.dp?i.dp:h,this._onChange=i.onChange;var l=this._step=i.step,u=this._dp=i.dp,d=new o,p=this._inputMin=new a(l,u,this.pushHistoryState.bind(this),this._onInputMinChange.bind(this)),f=new o,m=this._inputMax=new a(l,u,this.pushHistoryState.bind(this),this._onInputMaxChange.bind(this)),g=(new o).setStyleClass(s.Wrap),v=(new o).setStyleClass(s.Wrap),y=(new o).setStyleClass(s.Wrap),b=(new o).setStyleClass(s.Wrap);d.setStyleClass(s.Label).setProperty("innerHTML","MIN"),f.setStyleClass(s.Label).setProperty("innerHTML","MAX");var _=this._obj[this._key];p.setValue(_[0]),m.setValue(_[1]);var x=this._wrapNode;g.addChild(d),v.addChild(p.getNode()),y.addChild(f),b.addChild(m.getNode()),x.addChild(g),x.addChild(v),x.addChild(y),x.addChild(b)}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/component/NumberInput_Internal.js"),s=n("./node_modules/controlkit/lib/core/document/CSS.js"),l=n("./node_modules/controlkit/lib/core/event/Event.js"),u=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),c=1,h=2;i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._onInputChange=function(){this.dispatchEvent(new l(this,u.VALUE_UPDATED,null)),this._onChange()},i.prototype._updateValueMin=function(){var t=this._obj[this._key],e=this._inputMin,n=e.getValue();if(n>=this._inputMax.getValue())return void e.setValue(t[0]);t[0]=n},i.prototype._updateValueMax=function(){var t=this._obj[this._key],e=this._inputMax,n=e.getValue();if(n<=this._inputMin.getValue())return void e.setValue(t[1]);t[1]=n},i.prototype.onValueUpdate=function(t){if(t.data.origin!=this){t.data.origin;var e=this._obj,n=this._key;this._inputMin.setValue(e[n][0]),this._inputMax.setValue(e[n][1])}},i.prototype.setValue=function(t){var e=this._obj,n=this._key;e[n][0]=t[0],e[n][1]=t[1],this.dispatchEvent(new l(this,u.VALUE_UPDATED,null))},i.prototype._onInputMinChange=function(){this._updateValueMin(),this._onInputChange()},i.prototype._onInputMaxChange=function(){this._updateValueMax(),this._onInputChange()},t.exports=i},/***/
"./node_modules/controlkit/lib/component/SVG.js":/***/
function(t,e,n){function i(t,e){r.apply(this,arguments);var n=this._wrapNode;n.setStyleClass(o.CanvasWrap);var i=n.getWidth(),a=this._svg=this._createSVGObject("svg");a.setAttribute("version","1.2"),a.setAttribute("baseProfile","tiny"),a.setAttribute("preserveAspectRatio","true"),n.getElement().appendChild(a),this._svgSetSize(i,i),this._updateHeight(),this._node.setStyleClass(o.CanvasListItem),this._parent.addEventListener(s.GROUP_SIZE_CHANGE,this,"onGroupSizeChange"),this.addEventListener(s.GROUP_SIZE_UPDATE,this._parent,"onGroupSizeUpdate")}var r=n("./node_modules/controlkit/lib/core/Component.js"),o=n("./node_modules/controlkit/lib/core/document/CSS.js"),a=n("./node_modules/controlkit/lib/component/Metric.js"),s=n("./node_modules/controlkit/lib/group/GroupEvent.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._updateHeight=function(){var t=Number(this._svg.getAttribute("height"));this._wrapNode.setHeight(t),this._node.setHeight(t+a.PADDING_WRAPPER)},i.prototype.onGroupSizeChange=function(){var t=this._wrapNode.getWidth();this._svgSetSize(t,t),this._updateHeight()},i.prototype._svgSetSize=function(t,e){var n=this._svg;n.setAttribute("width",t),n.setAttribute("height",e),n.setAttribute("viewbox","0 0 "+t+" "+e)},i.prototype.getSVG=function(){return this._svg},t.exports=i},/***/
"./node_modules/controlkit/lib/component/SVGComponent.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments);var s=this._wrapNode;s.setStyleClass(o.SVGWrap);var l=s.getWidth(),u=this._svg=this._createSVGObject("svg");u.setAttribute("version","1.2"),u.setAttribute("baseProfile","tiny"),s.getElement().appendChild(u),(this._svgRoot=u.appendChild(this._createSVGObject("g"))).setAttribute("transform","translate(0.5 0.5)"),this._svgSetSize(l,l),this._updateHeight(),this._node.setStyleClass(o.SVGListItem),this._parent.addEventListener(a.GROUP_SIZE_CHANGE,this,"onGroupSizeChange"),this.addEventListener(a.GROUP_SIZE_UPDATE,this._parent,"onGroupSizeUpdate")}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/core/document/CSS.js"),a=n("./node_modules/controlkit/lib/group/GroupEvent.js"),s=n("./node_modules/controlkit/lib/component/Metric.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._updateHeight=function(){var t=Number(this._svg.getAttribute("height"));this._wrapNode.setHeight(t),this._node.setHeight(t+s.PADDING_WRAPPER)},i.prototype._redraw=function(){},i.prototype.onGroupSizeChange=function(){var t=this._wrapNode.getWidth();this._svgSetSize(t,t),this._updateHeight(),this._redraw()},i.prototype._createSVGObject=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},i.prototype._svgSetSize=function(t,e){var n=this._svg;n.setAttribute("width",t),n.setAttribute("height",e),n.setAttribute("viewbox","0 0 "+t+" "+e)},i.prototype._pathCmdMoveTo=function(t,e){return"M "+t+" "+e+" "},i.prototype._pathCmdLineTo=function(t,e){return"L "+t+" "+e+" "},i.prototype._pathCmdClose=function(){return"Z"},i.prototype._pathCmdLine=function(t,e,n,i){return"M "+t+" "+e+" L "+n+" "+i},i.prototype._pathCmdBezierCubic=function(t,e,n,i,r,o,a,s,l){return"M "+e+" "+n+" C "+i+" "+r+", "+o+" "+a+", "+s+" "+l},i.prototype._pathCmdBezierQuadratic=function(t,e,n,i,r,o,a){return"M "+e+" "+n+" Q "+i+" "+r+", "+o+" "+a},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Select.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments),i=i||{},i.onChange=i.onChange||this._onChange,this._onChange=i.onChange;var s=this._obj,l=this._key,u=this._targetKey=i.target,h=this._values=s[l];this._selectedIndex=-1,this._selected=null;var m=this._select=new o(o.INPUT_BUTTON);if(m.setStyleClass(a.Select),m.addEventListener(c.MOUSE_DOWN,this._onOptionTrigger.bind(this)),this._hasTarget()){for(var g=s[u]||"",v=-1;++v<h.length;)g==h[v]&&(this._selected=h[v]);m.setProperty("value",g.toString().length>0?g:h[0])}else m.setProperty("value",i.selected?h[i.selected]:f);this._wrapNode.addChild(m),p.get().addEventListener(d.TRIGGER,this,"onOptionTrigger"),this.addEventListener(d.TRIGGERED,p.get(),"onOptionTriggered")}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/core/document/CSS.js"),s=n("./node_modules/controlkit/lib/component/Options.js"),l=n("./node_modules/controlkit/lib/core/History.js"),u=n("./node_modules/controlkit/lib/core/event/Event.js"),c=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),h=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),d=n("./node_modules/controlkit/lib/core/OptionEvent.js"),p=n("./node_modules/controlkit/lib/core/ObjectComponentNotifier.js"),f="Choose ...";i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.onOptionTrigger=function(t){if(t.data.origin==this)return this._active=!this._active,this._updateAppearance(),void(this._active?this._buildOptions():s.get().clear());this._active=!1,this._updateAppearance()},i.prototype._buildOptions=function(){var t=s.get(),e=this;t.build(this._values,this._selected,this._select,function(){e.applyValue(),e._active=!1,e._updateAppearance(),e._selectedIndex=t.getSelectedIndex(),e._onChange(e._selectedIndex),t.clear()},function(){e._active=!1,e._updateAppearance(),t.clear()},!1)},i.prototype._applySelected=function(t){this._select.setProperty("value",t),this.dispatchEvent(new u(this,h.VALUE_UPDATED),null)},i.prototype.applyValue=function(){var t=s.get().getSelectedIndex(),e=this._selected=this._values[t];this._hasTarget()&&(this.pushHistoryState(),this._obj[this._targetKey]=e),this._applySelected(e)},i.prototype.pushHistoryState=function(){var t=this._obj,e=this._targetKey;l.get().pushState(t,e,t[e])},i.prototype._onOptionTrigger=function(){this.dispatchEvent(new u(this,d.TRIGGERED,null))},i.prototype._updateAppearance=function(){this._select.setStyleClass(this._active?a.SelectActive:a.Select)},i.prototype.onValueUpdate=function(t){this._hasTarget()&&(this._selected=this._obj[this._targetKey],this._select.setProperty("value",this._selected.toString()))},i.prototype._hasTarget=function(){return null!=this._targetKey},i.prototype.setValue=function(t){if(this._selectedIndex=t,-1==t)return this._selected=null,void this._select.setProperty("value",f);this._selected=this._values[this._selectedIndex],this._applySelected(this._selected)},i.prototype.getData=function(){var t={};return t.selectedIndex=this._selectedIndex,t},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Slider.js":/***/
function(t,e,n){function i(t,e,n,i,s){s=s||{},s.label=s.label||n,r.apply(this,[t,e,i,s]),this._values=this._obj[this._key],this._targetKey=n,s.step=s.step||m,s.dp=void 0===s.dp||null==s.dp?g:s.dp,s.onChange=s.onChange||this._onChange,s.onFinish=s.onFinish||function(){},this._dp=s.dp,this._onChange=s.onChange,this._onFinish=s.onFinish;var l=this._values,c=this._obj,f=this._targetKey,v=this._wrapNode;v.setStyleClass(o.WrapSlider);var y=this._slider=new a(v,this._onSliderBegin.bind(this),this._onSliderMove.bind(this),this._onSliderEnd.bind(this));y.setBoundMax(l[1]),y.setBoundMin(l[0]),y.setValue(c[f]);var b=this._input=new u(s.step,s.dp,null,this._onInputChange.bind(this));b.setValue(c[f]),v.addChild(b.getNode()),this._parent.addEventListener(d.PANEL_MOVE_END,this,"onPanelMoveEnd"),this._parent.addEventListener(p.GROUP_SIZE_CHANGE,this,"onGroupWidthChange"),this._parent.addEventListener(h.WINDOW_RESIZE,this,"onWindowResize")}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/core/document/CSS.js"),a=n("./node_modules/controlkit/lib/component/Slider_Internal.js"),s=n("./node_modules/controlkit/lib/core/History.js"),l=n("./node_modules/controlkit/lib/component/Range.js"),u=n("./node_modules/controlkit/lib/component/NumberInput_Internal.js"),c=n("./node_modules/controlkit/lib/core/event/Event.js"),h=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),d=n("./node_modules/controlkit/lib/group/PanelEvent.js"),p=n("./node_modules/controlkit/lib/group/GroupEvent.js"),f=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),m=1,g=2;i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.pushHistoryState=function(){var t=this._obj,e=this._targetKey;s.get().pushState(t,e,t[e])},i.prototype._onSliderBegin=function(){this.pushHistoryState()},i.prototype._onSliderMove=function(){this.applyValue(),this._updateValueField(),this.dispatchEvent(new c(this,f.VALUE_UPDATED,null)),this._onChange()},i.prototype._onSliderEnd=function(){this.applyValue(),this._updateValueField(),this.dispatchEvent(new c(this,f.VALUE_UPDATED,null)),this._onFinish()},i.prototype._onInputChange=function(){var t=this._input,e=this._values[0],n=this._values[1];t.getValue()>=n&&t.setValue(n),t.getValue()<=e&&t.setValue(e);var i=t.getValue();this._slider.setValue(i),this._obj[this._targetKey]=i,this.dispatchEvent(new c(this,f.VALUE_UPDATED,null)),this._onFinish()},i.prototype.applyValue=function(){var t=this._slider.getValue();this._obj[this._targetKey]=parseFloat(t.toFixed(this._dp)),this._input.setValue(t)},i.prototype.onValueUpdate=function(t){var e=t.data.origin;if(e!=this){var n=this._slider;if(e instanceof i)n.setValue(this._obj[this._targetKey]);else{var r=this._values;n.setBoundMin(r[0]),n.setBoundMax(r[1]),e instanceof l||n.setValue(this._obj[this._targetKey])}this.applyValue()}},i.prototype._updateValueField=function(){this._input.setValue(this._slider.getValue())},i.prototype.onPanelMoveEnd=i.prototype.onGroupWidthChange=i.prototype.onWindowResize=function(){this._slider.resetOffset()},i.prototype.setValue=function(t){-1!=t&&(this._obj[this._targetKey]=t,this.dispatchEvent(new c(this,f.VALUE_UPDATED,null)))},i.prototype.getData=function(){var t={};return t[this._targetKey]=this._obj[this._targetKey],t},t.exports=i},/***/
"./node_modules/controlkit/lib/component/Slider_Internal.js":/***/
function(t,e,n){function i(t,e,n,i){this._bounds=[0,1],this._value=0,this._intrpl=0,this._focus=!1,this._onBegin=e||function(){},this._onChange=n||function(){},this._onFinish=i||function(){};var l=(new r).setStyleClass(s.SliderWrap);t.addChild(l);var u=this._slot={node:(new r).setStyleClass(s.SliderSlot),offsetX:0,width:0,padding:3},c=this._handle={node:(new r).setStyleClass(s.SliderHandle),width:0,dragging:!1};l.addChild(u.node),u.node.addChild(c.node),u.offsetX=u.node.getPositionGlobalX(),u.width=Math.floor(u.node.getWidth()-2*u.padding),c.node.setWidth(c.width),u.node.addEventListener(a.MOUSE_DOWN,this._onSlotMouseDown.bind(this)),u.node.addEventListener(a.MOUSE_UP,this._onSlotMouseUp.bind(this)),document.addEventListener(o.MOUSE_MOVE,this._onDocumentMouseMove.bind(this)),document.addEventListener(o.MOUSE_UP,this._onDocumentMouseUp.bind(this))}var r=n("./node_modules/controlkit/lib/core/document/Node.js"),o=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),a=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),s=n("./node_modules/controlkit/lib/core/document/CSS.js"),l=n("./node_modules/controlkit/lib/core/document/Mouse.js");i.prototype._onDocumentMouseMove=function(){this._handle.dragging&&(this._update(),this._onChange())},i.prototype._onDocumentMouseUp=function(){this._handle.dragging&&this._onFinish(),this._handle.dragging=!1},i.prototype._onSlotMouseDown=function(){this._onBegin(),this._focus=!0,this._handle.dragging=!0,this._handle.node.getElement().focus(),this._update()},i.prototype._onSlotMouseUp=function(){if(this._focus){var t=this._handle;t.dragging&&this._onFinish(),t.dragging=!1}this._focus=!1},i.prototype._update=function(){var t=l.get().getX(),e=this._slot.offsetX,n=this._slot.width,i=t<e?0:t>e+n?n:t-e;this._handle.node.setWidth(Math.round(i)),this._intrpl=i/n,this._interpolateValue()},i.prototype._updateHandle=function(){var t=this._slot.width,e=Math.round(this._intrpl*t);this._handle.node.setWidth(Math.min(e,t))},i.prototype._interpolateValue=function(){var t=this._intrpl,e=this._bounds;this._value=e[0]*(1-t)+e[1]*t},i.prototype.resetOffset=function(){var t=this._slot;t.offsetX=t.node.getPositionGlobalX(),t.width=Math.floor(t.node.getWidth()-2*t.padding)},i.prototype.setBoundMin=function(t){var e=this._bounds;t>=e[1]||(e[0]=t,this._updateFromBounds())},i.prototype.setBoundMax=function(t){var e=this._bounds;t<=e[0]||(e[1]=t,this._updateFromBounds())},i.prototype._updateFromBounds=function(){var t=this._bounds[0],e=this._bounds[1];this._value=Math.max(t,Math.min(this._value,e)),this._intrpl=Math.abs((this._value-t)/(t-e)),this._updateHandle()},i.prototype.setValue=function(t){var e=this._bounds[0],n=this._bounds[1];t<e||t>n||(this._intrpl=Math.abs((t-e)/(e-n)),this._updateHandle(),this._value=t)},i.prototype.getValue=function(){return this._value},t.exports=i},/***/
"./node_modules/controlkit/lib/component/StringInput.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments),i=i||{},i.onChange=i.onChange||this._onChange,i.presets=i.presets||f,this._onChange=i.onChange;var c=this._input=new o(o.INPUT_TEXT),h=this._wrapNode,m=i.presets;if(m){var g=new o;g.setStyleClass(a.WrapInputWPreset),h.addChild(g),g.addChild(c);var v=s.get(),y=new l(this._wrapNode),b=function(){v.clear(),y.deactivate()},_=this,x=function(){v.build(m,c.getProperty("value"),c,function(){c.setProperty("value",m[v.getSelectedIndex()]),_.pushHistoryState(),_.applyValue()},b,u.PADDING_PRESET,!1)};y.setOnActive(x),y.setOnDeactive(b)}else h.addChild(c);c.setProperty("value",this._obj[this._key]),c.addEventListener(d.KEY_UP,this._onInputKeyUp.bind(this)),c.addEventListener(d.CHANGE,this._onInputChange.bind(this)),c.addEventListener(d.MOUSE_DOWN,this._onInputDragStart.bind(this)),this.addEventListener(p.INPUT_SELECT_DRAG,this._parent,"onComponentSelectDrag")}var r=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/core/document/CSS.js"),s=n("./node_modules/controlkit/lib/component/Options.js"),l=n("./node_modules/controlkit/lib/component/ButtonPreset.js"),u=n("./node_modules/controlkit/lib/component/Metric.js"),c=n("./node_modules/controlkit/lib/core/event/Event.js"),h=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),d=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),p=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),f=null;i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._onInputKeyUp=function(t){this._keyIsChar(t.keyCode)&&this.pushHistoryState(),this.applyValue(),this._onChange()},i.prototype._onInputChange=function(t){this._keyIsChar(t.keyCode)&&this.pushHistoryState(),this.applyValue()},
//TODO: Finish check
i.prototype._keyIsChar=function(t){return 17!=t&&18!=t&&20!=t&&37!=t&&38!=t&&39!=t&&40!=t&&16!=t},i.prototype.applyValue=function(){this._obj[this._key]=this._input.getProperty("value"),this.dispatchEvent(new c(this,p.VALUE_UPDATED,null))},i.prototype.onValueUpdate=function(t){t.data.origin!=this&&this._input.setProperty("value",this._obj[this._key])},
//Prevent chrome select drag
i.prototype._onInputDragStart=function(){var t=h.MOUSE_MOVE,e=h.MOUSE_UP,n=p.INPUT_SELECT_DRAG,i=this,r=function(){i.dispatchEvent(new c(this,n,null))},o=function(){i.dispatchEvent(new c(this,n,null)),document.removeEventListener(t,r,!1),document.removeEventListener(t,o,!1)};this.dispatchEvent(new c(this,n,null)),document.addEventListener(t,r,!1),document.addEventListener(e,o,!1)},t.exports=i},/***/
"./node_modules/controlkit/lib/component/StringOutput.js":/***/
function(t,e,n){var i=n("./node_modules/controlkit/lib/component/Output.js");StringOutput=function(t,e,n,r){i.apply(this,arguments)},StringOutput.prototype=Object.create(i.prototype),StringOutput.prototype.constructor=StringOutput,StringOutput.prototype._setValue=function(){if(!this._parent.isDisabled()){var t=this._obj[this._key];if(t!=this._prevString){var e,n=this._textArea,i=n.getElement();n.setProperty("value",t),e=i.scrollHeight,n.setHeight(e);var r=this._scrollBar;r&&(e<=this._wrapNode.getHeight()?r.disable():(r.enable(),r.update(),r.reset())),this._prevString=t}}},t.exports=StringOutput},/***/
"./node_modules/controlkit/lib/component/ValuePlotter.js":/***/
function(t,e,n){function i(t,e,n,i){r.apply(this,arguments);var s=this._svg,l=Number(s.getAttribute("width")),u=Number(s.getAttribute("height"));i=i||{},i.height=i.height||u,i.resolution=i.resolution||a;for(var c=i.resolution,h=Math.floor(l/c),d=this._points=new Array(2*h),p=this._buffer0=new Array(h),f=this._buffer1=new Array(h),m=.5*this._lineWidth,g=-1;++g<h;)p[g]=f[g]=d[2*g]=d[2*g+1]=m;this._height=i.height=i.height<o.COMPONENT_MIN_HEIGHT?o.COMPONENT_MIN_HEIGHT:i.height,this._svgSetSize(u,Math.floor(i.height)),this._grid.style.stroke="rgb(39,44,46)",this._updateHeight(),this._drawValue()}var r=n("./node_modules/controlkit/lib/component/Plotter.js"),o=n("./node_modules/controlkit/lib/component/Metric.js"),a=1;i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._redraw=function(){for(var t=this._points,e=this._buffer0.length,n=Number(this._svg.getAttribute("width")),i=n/(e-1),r=-1;++r<e;)t[2*r]=n-r*i;this._drawValue()},i.prototype.onGroupSizeChange=function(){var t=this._wrapNode.getWidth(),e=this._height;this._svgSetSize(t,e),this._updateHeight(),this._drawGrid(),this._redraw()},i.prototype._drawValue=function(){this._drawCurve()},i.prototype._drawGrid=function(){var t=this._svg,e=Number(t.getAttribute("width")),n=Math.floor(.5*Number(t.getAttribute("height"))),i="";i+=this._pathCmdMoveTo(0,n),i+=this._pathCmdLineTo(e,n),this._grid.setAttribute("d",i)},
//TODO: merge update + pathcmd
i.prototype._drawCurve=function(){var t=this._svg,e=this._obj[this._key],n=this._buffer0,i=this._buffer1,r=this._points,o=n.length,a="",s=.5*Number(t.getAttribute("height")),l=s-.5*this._lineWidth;r[1]=n[0],n[o-1]=e*l*-1+Math.floor(s),a+=this._pathCmdMoveTo(r[0],r[1]);for(var u,c=0;++c<o;)u=2*c,i[c-1]=n[c],r[u+1]=n[c-1]=i[c-1],a+=this._pathCmdLineTo(r[u],r[u+1]);this._path.setAttribute("d",a)},i.prototype.update=function(){this._parent.isDisabled()||this._drawValue()},t.exports=i},/***/
"./node_modules/controlkit/lib/core/Component.js":/***/
function(t,e,n){function i(t,e){a.apply(this,arguments),e=t.usesLabels()?e:"none",this._parent=t,this._enabled=!0;var n=this._node=new r(r.LIST_ITEM),i=this._wrapNode=new r;if(i.setStyleClass(o.Wrap),n.addChild(i),void 0!==e){if(0!=e.length&&"none"!=e){var l=this._lablNode=new r(r.SPAN);l.setStyleClass(o.Label),l.setProperty("innerHTML",e),n.addChild(l)}"none"==e&&(i.setStyleProperty("marginLeft","0"),i.setStyleProperty("width","100%"))}this._parent.addEventListener(s.ENABLE,this,"onEnable"),this._parent.addEventListener(s.DISABLE,this,"onDisable"),this._parent.addComponentNode(n)}var r=n("./node_modules/controlkit/lib/core/document/Node.js"),o=n("./node_modules/controlkit/lib/core/document/CSS.js"),a=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),s=n("./node_modules/controlkit/lib/core/ComponentEvent.js");i.prototype=Object.create(a.prototype),i.prototype.constructor=i,i.prototype.enable=function(){this._enabled=!0},i.prototype.disable=function(){this._enabled=!1},i.prototype.isEnabled=function(){return this._enabled},i.prototype.isDisabled=function(){return!this._enabled},i.prototype.onEnable=function(){this.enable()},i.prototype.onDisable=function(){this.disable()},t.exports=i},/***/
"./node_modules/controlkit/lib/core/ComponentEvent.js":/***/
function(t,e){var n={VALUE_UPDATED:"valueUpdated",UPDATE_VALUE:"updateValue",INPUT_SELECT_DRAG:"inputSelectDrag",ENABLE:"enable",DISABLE:"disable"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/ComponentObjectError.js":/***/
function(t,e){function n(t,e){Error.apply(this),Error.captureStackTrace(this,n),this.name="ComponentObjectError",this.message="Object of type "+t.constructor.name+" has no member "+e+"."}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,t.exports=n},/***/
"./node_modules/controlkit/lib/core/History.js":/***/
function(t,e,n){function i(){r.apply(this,arguments),this._states=[],this._enabled=!1}var r=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),o=n("./node_modules/controlkit/lib/core/event/Event.js"),a=n("./node_modules/controlkit/lib/core/HistoryEvent.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.pushState=function(t,e,n){if(!this._enabled){var i=this._states;i.length>=30&&i.shift(),i.push({object:t,key:e,value:n}),this.dispatchEvent(new o(this,a.STATE_PUSH,null))}},i.prototype.getState=function(t,e){var n=this._states,i=n.length;if(0==i)return null;for(var r,o,a=-1;++a<i;)if(r=n[a],r.object===t&&r.key===e){o=r.value;break}return o},i.prototype.popState=function(){if(!this._enabled){var t=this._states;if(!(t.length<1)){var e=t.pop();e.object[e.key]=e.value,this.dispatchEvent(new o(this,a.STATE_POP,null))}}},i.prototype.getNumStates=function(){return this._states.length},i._instance=null,i.setup=function(){return i._instance=new i},i.get=function(){return i._instance},i.prototype.enable=function(){this._enabled=!1},i.prototype.disable=function(){this._enabled=!0},t.exports=i},/***/
"./node_modules/controlkit/lib/core/HistoryEvent.js":/***/
function(t,e){var n={STATE_PUSH:"historyStatePush",STATE_POP:"historyStatePop"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/ObjectComponent.js":/***/
function(t,e,n){function i(t,e,n,i){if(void 0===e[n])throw new l(e,n);i=i||{},i.label=i.label||n,o.apply(this,[t,i.label]),this._obj=e,this._key=n,this._onChange=function(){},s.get().addEventListener(a.UPDATE_VALUE,this,"onValueUpdate"),this.addEventListener(a.VALUE_UPDATED,s.get(),"onValueUpdated")}var r=n("./node_modules/controlkit/lib/core/History.js"),o=n("./node_modules/controlkit/lib/core/Component.js"),a=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),s=n("./node_modules/controlkit/lib/core/ObjectComponentNotifier.js"),l=n("./node_modules/controlkit/lib/core/ComponentObjectError.js"),u=n("./node_modules/controlkit/lib/core/event/Event.js");i.prototype=Object.create(o.prototype),i.prototype.constructor=i,
//Override in Subclass
i.prototype.applyValue=function(){},i.prototype.onValueUpdate=function(t){},i.prototype.pushHistoryState=function(){var t=this._obj,e=this._key;r.get().pushState(t,e,t[e])},i.prototype.setValue=function(t){this._obj[this._key]=t,this.dispatchEvent(new u(this,a.VALUE_UPDATED,null))},i.prototype.getData=function(){var t={};return t[this._key]=this._obj[this._key],t},t.exports=i},/***/
"./node_modules/controlkit/lib/core/ObjectComponentNotifier.js":/***/
function(t,e,n){function i(){r.apply(this)}var r=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),o=n("./node_modules/controlkit/lib/core/event/Event.js"),a=n("./node_modules/controlkit/lib/core/ComponentEvent.js"),s=n("./node_modules/controlkit/lib/core/OptionEvent.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.onValueUpdated=function(t){this.dispatchEvent(new o(this,a.UPDATE_VALUE,{origin:t.sender}))},i.prototype.onOptionTriggered=function(t){this.dispatchEvent(new o(this,s.TRIGGER,{origin:t.sender}))};var l=null;i.get=function(){return l||(l=new i),l},i.destroy=function(){l=null},t.exports=i},/***/
"./node_modules/controlkit/lib/core/OptionEvent.js":/***/
function(t,e){var n={TRIGGERED:"selectTrigger",TRIGGER:"triggerSelect"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/State.js":/***/
function(t,e){function n(){var t=window.open("","","        width=320,        height=200,        left="+(window.screenX+.5*window.innerWidth-160)+",        top="+(window.screenY+.5*window.innerHeight-100)+",        location=0,        titlebar=0,        resizable=0");return t.document.documentElement.innerHTML=o,t}function i(t){var e=n(),i=e.document;i.body.innerHTML+=a,i.getElementById("save").addEventListener("click",function(){
//log & save in main window
var t=i.getElementById("state").value,e=new Blob([t],{type:"application:json"}),n=i.getElementById("filename").value,r=document.createElement("a");r.download=n,window.webkitURL?r.href=window.webkitURL.createObjectURL(e):(r.href=window.createObjectURL(e),r.style.display="none",r.addEventListener("click",function(){i.body.removeChild(r)}),i.body.appendChild(r)),r.click()}),i.getElementById("state").innerText=JSON.stringify(t)}function r(t){function e(){try{var t=JSON.parse(o.value);t&&"object"==typeof t&&null!==t&&(a.disabled=!1)}catch(t){a.disabled=!0}}var i=n(),r=i.document;r.body.innerHTML+=s;var o=r.getElementById("state"),a=r.getElementById("load");a.disabled=!0,o.addEventListener("input",function(){e()}),r.getElementById("load").addEventListener("click",function(){var e=o.value;t(JSON.parse(e).data),i.close()});var l=r.getElementById("load-disk");l.addEventListener("change",function(){var t=new FileReader;t.addEventListener("loadend",function(t){o.value=t.target.result,e()}),t.readAsText(l.files[0],"utf-8")})}var o='<head>\n   <title>ControlKit State</title>\n   <style type="text/css">\n      body{\n          box-sizing: border-box;\n          padding: 20px;\n          margin: 0;\n          font-family: Arial, sans-serif;\n          width: 100%;\n      }\n      textarea{\n          margin-bottom:10px;\n          box-sizing: border-box;\n          padding: 0;\n          border: 0;\n          border: 1px solid #dedede;\n          outline: none;\n          font-family: Monaco, monospace;\n          font-size: 11px;\n          resize: none;\n          word-wrap: break-word;\n          display: block;\n          width: 100%;\n          overflow-y: scroll;\n          height: 125px;\n      }\n      button{\n          margin: 0;\n          padding: 0 5px 3px 5px;\n          height: 20px;\n      }\n      #save,#filename,#load{\n          float: right;\n      }\n      input[type="text"]{\n          margin: 0;\n          padding: 0;\n          width: 45%;\n          height:20px;\n      }\n   </style>\n</head>\n<body>\n   <textarea name="state" id="state"></textarea>\n</body>',a='<button type="button" id="save">Save</button>\n<input type="text" id="filename" value="ck-state.json"></input>',s='<input type="file" id="load-disk"></button><button type="button" id="load">Load</button>';t.exports={load:r,save:i}},/***/
"./node_modules/controlkit/lib/core/color/ColorFormatError.js":/***/
function(t,e){function n(t){Error.apply(this),Error.captureStackTrace(this,n),this.name="ColorFormatError",this.message=t}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,t.exports=n},/***/
"./node_modules/controlkit/lib/core/color/ColorMode.js":/***/
function(t,e){var n={RGB:"rgb",HSV:"hsv",HEX:"hex",RGBfv:"rgbfv"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/color/ColorUtil.js":/***/
function(t,e){var n={HSV2RGB:function(t,e,n){if(t%=360,n=Math.max(0,Math.min(n,100))/100*255,e<=0)return n=Math.round(n),[n,n,n];e>100&&(e=100),e/=100;
//http://d.hatena.ne.jp/ja9/20100903/128350434
var i=Math.floor(t/60)%6,r=t/60-i,o=n*(1-e),a=n*(1-r*e),s=n*(1-(1-r)*e),l=0,u=0,c=0;switch(i){case 0:l=n,u=s,c=o;break;case 1:l=a,u=n,c=o;break;case 2:l=o,u=n,c=s;break;case 3:l=o,u=a,c=n;break;case 4:l=s,u=o,c=n;break;case 5:l=n,u=o,c=a}return l=Math.round(l),u=Math.round(u),c=Math.round(c),[l,u,c]},RGB2HSV:function(t,e,n){var i=0,r=0,o=0;t/=255,e/=255,n/=255;var a=Math.min(t,Math.min(e,n)),s=Math.max(t,Math.max(e,n));if(a==s)return o=a,[0,0,Math.round(o)];var l=t==a?e-n:n==a?t-e:n-t,u=t==a?3:n==a?1:5;return i=Math.round(60*(u-l/(s-a))),r=Math.round((s-a)/s*100),o=Math.round(100*s),[i,r,o]},RGB2HEX:function(t,e,n){return"#"+((1<<24)+(t<<16)+(e<<8)+n).toString(16).slice(1)},RGBfv2HEX:function(t,e,i){return n.RGB2HEX(Math.floor(255*t),Math.floor(255*e),Math.floor(255*i))},HSV2HEX:function(t,e,n){var i=ControlKit.ColorUtil.HSV2RGB(t,e,n);return ControlKit.ColorUtil.RGB2HEX(i[0],i[1],i[2])},HEX2RGB:function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,i){return e+e+n+n+i+i});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null},isValidHEX:function(t){return/^#[0-9A-F]{6}$/i.test(t)},isValidRGB:function(t,e,n){return t>=0&&t<=255&&e>=0&&e<=255&&n>=0&&n<=255},isValidRGBfv:function(t,e,n){return t>=0&&t<=1&&e>=0&&e<=1&&n>=0&&n<=1}};t.exports=n},/***/
"./node_modules/controlkit/lib/core/document/CSS.js":/***/
function(t,e){var n={ControlKit:"controlKit",Panel:"panel",Head:"head",Label:"label",Menu:"menu",Wrap:"wrap",ButtonMenuClose:"button-menu-close",ButtonMenuHide:"button-menu-hide",ButtonMenuShow:"button-menu-show",ButtonMenuUndo:"button-menu-undo",ButtonMenuLoad:"button-menu-load",ButtonMenuSave:"button-menu-save",MenuActive:"menu-active",Button:"button",ButtonPreset:"button-preset",ButtonPresetActive:"button-preset-active",WrapInputWPreset:"input-with-preset-wrap",WrapColorWPreset:"color-with-preset-wrap",HeadInactive:"head-inactive",PanelHeadInactive:"panel-head-inactive",GroupList:"group-list",Group:"group",SubGroupList:"sub-group-list",SubGroup:"sub-group",TextAreaWrap:"textarea-wrap",WrapSlider:"wrap-slider",SliderWrap:"slider-wrap",SliderSlot:"slider-slot",SliderHandle:"slider-handle",ArrowBMin:"arrow-b-min",ArrowBMax:"arrow-b-max",ArrowBSubMin:"arrow-b-sub-min",ArrowBSubMax:"arrow-b-sub-max",ArrowSMin:"arrow-s-min",ArrowSMax:"arrow-s-max",Select:"select",SelectActive:"select-active",Options:"options",OptionsSelected:"li-selected",CanvasListItem:"canvas-list-item",CanvasWrap:"canvas-wrap",SVGListItem:"svg-list-item",SVGWrap:"svg-wrap",GraphSliderXWrap:"graph-slider-x-wrap",GraphSliderYWrap:"graph-slider-y-wrap",GraphSliderX:"graph-slider-x",GraphSliderY:"graph-slider-y",GraphSliderXHandle:"graph-slider-x-handle",GraphSliderYHandle:"graph-slider-y-handle",Picker:"picker",PickerFieldWrap:"field-wrap",PickerInputWrap:"input-wrap",PickerInputField:"input-field",PickerControlsWrap:"controls-wrap",PickerColorContrast:"color-contrast",PickerHandleField:"indicator",PickerHandleSlider:"indicator",Color:"color",ScrollBar:"scrollBar",ScrollWrap:"scroll-wrap",ScrollBarBtnUp:"btnUp",ScrollBarBtnDown:"btnDown",ScrollBarTrack:"track",ScrollBarThumb:"thumb",ScrollBuffer:"scroll-buffer"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/document/DocumentEvent.js":/***/
function(t,e){var n={MOUSE_MOVE:"mousemove",MOUSE_UP:"mouseup",MOUSE_DOWN:"mousedown",MOUSE_WHEEL:"mousewheel",WINDOW_RESIZE:"resize"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/document/Mouse.js":/***/
function(t,e,n){function i(){r.apply(this),this._pos=[0,0],this._wheelDirection=0,this._hoverElement=null;var t=this;this._onDocumentMouseMove=function(e){var n=0,i=0;e||(e=window.event),e.pageX?(n=e.pageX,i=e.pageY):e.clientX&&(n=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,i=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),t._pos[0]=n,t._pos[1]=i,t._hoverElement=document.elementFromPoint(n,i)},this._onDocumentMouseWheel=function(e){t._wheelDirection=e.detail<0?1:e.wheelDelta>0?1:-1,t.dispatchEvent(new o(t,a.MOUSE_WHEEL,e))},document.addEventListener(a.MOUSE_MOVE,this._onDocumentMouseMove),document.addEventListener(a.MOUSE_WHEEL,this._onDocumentMouseWheel)}var r=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),o=n("./node_modules/controlkit/lib/core/event/Event.js"),a=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),s=null;i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype._removeDocumentListener=function(){document.removeEventListener(a.MOUSE_MOVE,this._onDocumentMouseMove),document.removeEventListener(a.MOUSE_WHEEL,this._onDocumentMouseWheel)},i.prototype.getPosition=function(){return this._pos},i.prototype.getX=function(){return this._pos[0]},i.prototype.getY=function(){return this._pos[1]},i.prototype.getWheelDirection=function(){return this._wheelDirection},i.prototype.getHoverElement=function(){return this._hoverElement},i.setup=function(){return s=s||new i},i.get=function(){return s},i.destroy=function(){s._removeDocumentListener(),s=null},t.exports=i},/***/
"./node_modules/controlkit/lib/core/document/Node.js":/***/
function(t,e){function n(){switch(this._element=null,arguments.length){case 1:var t=arguments[0];t!=n.INPUT_TEXT&&t!=n.INPUT_BUTTON&&t!=n.INPUT_SELECT&&t!=n.INPUT_CHECKBOX?this._element=document.createElement(t):(this._element=document.createElement("input"),this._element.type=t);break;case 0:this._element=document.createElement("div")}}n.DIV="div",n.INPUT_TEXT="text",n.INPUT_BUTTON="button",n.INPUT_SELECT="select",n.INPUT_CHECKBOX="checkbox",n.OPTION="option",n.LIST="ul",n.LIST_ITEM="li",n.SPAN="span",n.TEXTAREA="textarea",n.prototype={addChild:function(t){return this._element.appendChild(t.getElement()),t},addChildren:function(){for(var t=-1,e=arguments.length,n=this._element;++t<e;)n.appendChild(arguments[t].getElement());return this},addChildAt:function(t,e){return this._element.insertBefore(t.getElement(),this._element.children[e]),t},removeChild:function(t){return this.contains(t)?(this._element.removeChild(t.getElement()),t):null},removeChildren:function(){for(var t=-1,e=arguments.length,n=this._element;++t<e;)n.removeChild(arguments[t].getElement());return this},removeChildAt:function(t,e){return this.contains(t)?(this._element.removeChild(t.getElement()),t):null},removeAllChildren:function(){for(var t=this._element;t.hasChildNodes();)t.removeChild(t.lastChild);return this},setWidth:function(t){return this._element.style.width=t+"px",this},getWidth:function(){return this._element.offsetWidth},setHeight:function(t){return this._element.style.height=t+"px",this},getHeight:function(){return this._element.offsetHeight},setPosition:function(t,e){return this.setPosition(t).setPosition(e)},setPositionX:function(t){return this._element.style.marginLeft=t+"px",this},setPositionY:function(t){return this._element.style.marginTop=t+"px",this},setPositionGlobal:function(t,e){return this.setPositionGlobalX(t).setPositionGlobalY(e)},setPositionGlobalX:function(t){return this._element.style.left=t+"px",this},setPositionGlobalY:function(t){return this._element.style.top=t+"px",this},getPosition:function(){return[this.getPositionX(),this.getPositionY()]},getPositionX:function(){return this._element.offsetLeft},getPositionY:function(){return this._element.offsetTop},getPositionGlobal:function(){for(var t=[0,0],e=this._element;e;)t[0]+=e.offsetLeft,t[1]+=e.offsetTop,e=e.offsetParent;return t},getPositionGlobalX:function(){for(var t=0,e=this._element;e;)t+=e.offsetLeft,e=e.offsetParent;return t},getPositionGlobalY:function(){for(var t=0,e=this._element;e;)t+=e.offsetTop,e=e.offsetParent;return t},addEventListener:function(t,e,n){return this._element.addEventListener(t,e,n),this},removeEventListener:function(t,e,n){return this._element.removeEventListener(t,e,n),this},dispatchEvent:function(t){return this._element.dispatchEvent(t),this},setStyleClass:function(t){return this._element.className=t,this},setStyleProperty:function(t,e){return this._element.style[t]=e,this},getStyleProperty:function(t){return this._element.style[t]},setStyleProperties:function(t){for(var e in t)this._element.style[e]=t[e];return this},deleteStyleClass:function(){return this._element.className="",this},deleteStyleProperty:function(t){return this._element.style[t]="",this},deleteStyleProperties:function(t){for(var e in t)this._element.style[e]="";return this},getChildAt:function(t){return(new n).setElement(this._element.children[t])},getChildIndex:function(t){return this._indexOf(this._element,t.getElement())},getNumChildren:function(){return this._element.children.length},getFirstChild:function(){return(new n).setElement(this._element.firstChild)},getLastChild:function(){return(new n).setElement(this._element.lastChild)},hasChildren:function(){return 0!=this._element.children.length},contains:function(t){return-1!=this._indexOf(this._element,t.getElement())},_indexOf:function(t,e){return Array.prototype.indexOf.call(t.children,e)},setProperty:function(t,e){return this._element[t]=e,this},setProperties:function(t){for(var e in t)this._element[e]=t[e];return this},getProperty:function(t){return this._element[t]},setElement:function(t){return this._element=t,this},getElement:function(){return this._element},getStyle:function(){return this._element.style},getParent:function(){return(new n).setElement(this._element.parentNode)}},n.getNodeByElement=function(t){return(new n).setElement(t)},n.getNodeById=function(t){return(new n).setElement(document.getElementById(t))},t.exports=n},/***/
"./node_modules/controlkit/lib/core/document/NodeEvent.js":/***/
function(t,e){var n={MOUSE_DOWN:"mousedown",MOUSE_UP:"mouseup",MOUSE_OVER:"mouseover",MOUSE_MOVE:"mousemove",MOUSE_OUT:"mouseout",KEY_DOWN:"keydown",KEY_UP:"keyup",CHANGE:"change",FINISH:"finish",DBL_CLICK:"dblclick",ON_CLICK:"click",SELECT_START:"selectstart",DRAG_START:"dragstart",DRAG:"drag",DRAG_END:"dragend",DRAG_ENTER:"dragenter",DRAG_OVER:"dragover",DRAG_LEAVE:"dragleave",RESIZE:"resize"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/document/Style.js":/***/
function(t,e){var n={string:"#controlKit{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}#controlKit .panel{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;pointer-events:auto;position:relative;z-index:1;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;opacity:1;float:left;width:200px;border-radius:3px;-moz-border-radius:3px;box-shadow:0 2px 2px rgba(0,0,0,.25);margin:0;padding:0;background-color:#1a1a1a;font-family:Arial,sans-serif}#controlKit .panel .wrap{width:auto;height:auto;margin:0;padding:0;position:relative;overflow:hidden}#controlKit .panel ul{margin:0;padding:0;list-style:none}#controlKit .panel .color,#controlKit .panel input[type=text],#controlKit .panel textarea,#controlKit .picker input[type=text]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;height:25px;padding:0 0 0 8px;font-family:Arial,sans-serif;font-size:11px;color:#fff;text-shadow:1px 1px #000;outline:0;background:#222729;background-image:-o-linear-gradient(rgba(0,0,0,.075) 0,rgba(0,0,0,.125) 100%);background-image:linear-gradient(rgba(0,0,0,.075) 0,rgba(0,0,0,.125) 100%);border:none;box-shadow:0 0 0 1px #1f1f1f inset;border-radius:2px;-moz-border-radius:2px}#controlKit .panel .button,#controlKit .panel .select,#controlKit .panel .select-active,#controlKit .picker .button{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;width:100%;height:26px;margin:0;background-image:-o-linear-gradient(#404040 0,#3b3b3b 100%);background-image:linear-gradient(#404040 0,#3b3b3b 100%);border:none;outline:0;border-radius:2px;box-shadow:0 0 0 1px #1f1f1f inset,-1px 2px 0 0 #4a4a4a inset;font-family:Arial,sans-serif;color:#fff}#controlKit .panel textarea{padding:5px 8px 2px;overflow:hidden;resize:none;vertical-align:top;white-space:nowrap}#controlKit .panel .textarea-wrap{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0;float:left;height:100%;overflow:hidden;border:none;border-radius:2px;-moz-border-radius:2px;background-color:#222729;box-shadow:0 0 1px 2px rgba(0,0,0,.0125) inset,0 0 1px 1px #111314 inset;background-image:-o-linear-gradient(rgba(0,0,0,.075) 0,rgba(0,0,0,.125) 100%);background-image:linear-gradient(rgba(0,0,0,.075) 0,rgba(0,0,0,.125) 100%)}#controlKit .panel .textarea-wrap textarea{border:none;border-radius:2px;-moz-border-radius:2px;box-shadow:none;background:0 0}#controlKit .panel .textarea-wrap .scrollBar{border:1px solid #101213;border-bottom-right-radius:2px;border-top-right-radius:2px;border-left:none;box-shadow:0 0 1px 2px rgba(0,0,0,.0125) inset,0 0 1px 1px #111314 inset}#controlKit .panel canvas{cursor:pointer;vertical-align:bottom;border:none;box-shadow:0 0 0 1px #1f1f1f inset;border-radius:2px;-moz-border-radius:2px}#controlKit .panel .canvas-wrap,#controlKit .panel .svg-wrap{margin:6px 0 0;position:relative;width:70%;float:right;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:2px;-moz-border-radius:2px;background:#1e2224;background-image:-o-linear-gradient(transparent 0,rgba(0,0,0,.05) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.05) 100%)}#controlKit .panel .canvas-wrap svg,#controlKit .panel .svg-wrap svg{position:absolute;left:0;top:0;cursor:pointer;vertical-align:bottom;border:none;box-shadow:0 0 0 1px #1f1f1f inset;border-radius:2px;-moz-border-radius:2px}#controlKit .panel .button,#controlKit .picker .button{font-size:10px;font-weight:700;text-shadow:0 1px #000;text-transform:uppercase}#controlKit .panel .button:hover,#controlKit .picker .button:hover{background-image:-o-linear-gradient(#454545 0,#3b3b3b 100%);background-image:linear-gradient(#454545 0,#3b3b3b 100%)}#controlKit .panel .button:active,#controlKit .picker .button:active{background-image:-o-linear-gradient(#404040 0,#3b3b3b 100%);background-image:linear-gradient(#404040 0,#3b3b3b 100%)}#controlKit .panel .color-with-preset-wrap,#controlKit .panel .input-with-preset-wrap{width:100%;float:left}#controlKit .panel .color-with-preset-wrap .color,#controlKit .panel .input-with-preset-wrap input[type=text]{padding-right:25px;border-top-right-radius:2px;border-bottom-right-radius:2px;float:left}#controlKit .panel .button-preset,#controlKit .panel .button-preset-active{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;right:0;width:20px;height:25px;margin:0;cursor:pointer;float:right;border:none;border-top-right-radius:2px;border-bottom-right-radius:2px;box-shadow:0 0 0 1px #1f1f1f inset,-1px 2px 0 0 #4a4a4a inset;outline:0}#controlKit .panel .button-preset-active,#controlKit .panel .button-preset:hover{background:url(data:image/png;base64,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) 50% 50% no-repeat,linear-gradient(#454545 0,#3b3b3b 100%)}#controlKit .panel .button-preset{background:url(data:image/png;base64,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) 50% 50% no-repeat,linear-gradient(#404040 0,#3b3b3b 100%)}#controlKit .panel input[type=checkbox]{margin:6px 0 0}#controlKit .panel .select,#controlKit .panel .select-active{padding-left:10px;padding-right:20px;font-size:11px;text-align:left;text-shadow:1px 1px #000;cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#controlKit .panel .select{background:url(data:image/png;base64,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) 100% 50% no-repeat,linear-gradient(#404040 0,#3b3b3b 100%)}#controlKit .panel .select-active,#controlKit .panel .select:hover{background:url(data:image/png;base64,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) 100% 50% no-repeat,linear-gradient(#454545 0,#3b3b3b 100%)}#controlKit .panel .slider-handle,#controlKit .panel .slider-slot,#controlKit .panel .slider-wrap,#controlKit .panel .wrap-slider{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#controlKit .panel .wrap-slider{width:70%;padding:6px 0 0;float:right;height:100%}#controlKit .panel .wrap-slider input[type=text]{width:25%;text-align:center;padding:0;float:right}#controlKit .panel .slider-wrap{float:left;cursor:ew-resize;width:70%}#controlKit .panel .slider-slot{width:100%;height:25px;padding:3px;background-color:#1e2224;border:none;box-shadow:0 0 0 1px #1f1f1f inset;border-radius:2px;-moz-border-radius:2px}#controlKit .panel .slider-handle{position:relative;width:100%;height:100%;background:#b32435;background-image:-o-linear-gradient(transparent 0,rgba(0,0,0,.1) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.1) 100%);box-shadow:0 1px 0 0 #0f0f0f}#controlKit .panel .color{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;width:100%;height:25px;padding:0;border:none;background:#fff;box-shadow:0 0 0 1px #111314 inset;text-align:center;line-height:25px;border-radius:2px;-moz-border-radius:2px}#controlKit .panel .graph-slider-x-wrap,#controlKit .panel .graph-slider-y-wrap{position:absolute;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#controlKit .panel .graph-slider-x-wrap{bottom:0;left:0;width:100%;padding:6px 20px 6px 6px}#controlKit .panel .graph-slider-y-wrap{top:0;right:0;height:100%;padding:6px 6px 20px}#controlKit .panel .graph-slider-x,#controlKit .panel .graph-slider-y{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:2px;-moz-border-radius:2px;background:rgba(24,27,29,.5);border:1px solid #181b1d}#controlKit .panel .graph-slider-x{height:8px}#controlKit .panel .graph-slider-y{width:8px;height:100%}#controlKit .panel .graph-slider-x-handle,#controlKit .panel .graph-slider-y-handle{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;border:1px solid #181b1d;background:#303639}#controlKit .panel .graph-slider-x-handle{width:20px;height:100%;border-top:none;border-bottom:none}#controlKit .panel .graph-slider-y-handle{width:100%;height:20px;border-left:none;border-right:none}#controlKit .sub-group .wrap .wrap .wrap{width:25%!important;padding:0!important;float:left!important}#controlKit .sub-group .wrap .wrap .wrap .label{width:100%!important;padding:8px 0 0!important;color:#878787!important;text-align:center!important;text-transform:uppercase!important;font-weight:700!important;text-shadow:1px 1px #1a1a1a!important}#controlKit .sub-group .wrap .wrap .wrap input[type=text]{padding:0;text-align:center}#controlKit .options{pointer-events:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #1f1f1f;border-radius:2px;-moz-border-radius:2px;position:absolute;z-index:2147483638;left:0;top:0;width:auto;height:auto;box-shadow:0 1px 0 0 #4a4a4a inset;background-color:#454545;font-family:Arial,sans-serif;font-size:11px;color:#fff;text-shadow:1px 1px #000;overflow:hidden}#controlKit .options ul{width:100%;list-style:none;margin:0;padding:0}#controlKit .options ul li{margin:0;width:100%;height:25px;line-height:25px;padding:0 20px 0 10px;overflow:hidden;white-space:normal;text-overflow:ellipsis;cursor:pointer}#controlKit .options ul li:hover{background-color:#1f2325}#controlKit .options ul .li-selected{background-color:#292d30}#controlKit .options .color{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#controlKit .options .color .li-selected,#controlKit .options .color li{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0;height:25px;line-height:25px;text-align:center}#controlKit .options .color .li-selected:hover,#controlKit .options .color li:hover{background:0 0;font-weight:700}#controlKit .options .color .li-selected{font-weight:700}#controlKit .panel .label,#controlKit .picker .label{width:100%;float:left;font-size:11px;font-weight:700;text-shadow:0 1px #000;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:default}#controlKit .panel .head,#controlKit .panel .panel-head-inactive,#controlKit .picker .head{height:30px;padding:0 10px;background:#1a1a1a;overflow:hidden}#controlKit .panel .head .wrap,#controlKit .panel .panel-head-inactive .wrap,#controlKit .picker .head .wrap{width:auto;height:auto;margin:0;padding:0;position:relative;overflow:hidden}#controlKit .panel .head .label,#controlKit .picker .head .label{cursor:pointer;line-height:30px;color:#65696b}#controlKit .panel .group-list .group .head{height:38px;padding:0 10px;border-top:1px solid #4f4f4f;border-bottom:1px solid #262626;background-image:-o-linear-gradient(#454545 0,#3b3b3b 100%);background-image:linear-gradient(#454545 0,#3b3b3b 100%);cursor:pointer}#controlKit .panel .group-list .group .head .label{font-size:12px;line-height:38px;color:#fff}#controlKit .panel .group-list .group .head:hover{border-top:1px solid #525252;background-image:-o-linear-gradient(#454545 0,#404040 100%);background-image:linear-gradient(#454545 0,#404040 100%)}#controlKit .panel .group-list .group li{height:35px;padding:0 10px}#controlKit .panel .group-list .group .sub-group-list .sub-group:last-of-type{border-bottom:none}#controlKit .panel .group-list .group .sub-group-list .sub-group{padding:0;height:auto;border-bottom:1px solid #242424}#controlKit .panel .group-list .group .sub-group-list .sub-group ul{overflow:hidden}#controlKit .panel .group-list .group .sub-group-list .sub-group ul li{background:#2e2e2e;border-bottom:1px solid #222729}#controlKit .panel .group-list .group .sub-group-list .sub-group ul li:last-of-type{border-bottom:none}#controlKit .panel .group-list .group .sub-group-list .sub-group:first-child{margin-top:0}#controlKit .panel .group-list .group .sub-group-list .sub-group .head,#controlKit .panel .group-list .group .sub-group-list .sub-group .head-inactive{cursor:pointer}#controlKit .panel .group-list .group .sub-group-list .sub-group .head{height:27px;padding:0 10px;border-top:none;border-bottom:1px solid #242424;background-image:none;background-color:#272727}#controlKit .panel .group-list .group .sub-group-list .sub-group .head:hover{background-image:none;background-color:#272727}#controlKit .panel .group-list .group .sub-group-list .sub-group .head-inactive{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:27px;padding:0 10px;box-shadow:0 1px 0 0 #404040 inset;background-image:-o-linear-gradient(#3b3b3b 0,#383838 100%);background-image:linear-gradient(#3b3b3b 0,#383838 100%)}#controlKit .panel .group-list .group .sub-group-list .sub-group .head-inactive:hover{box-shadow:0 1px 0 0 #474747 inset;background-image:none;background-image:-o-linear-gradient(#404040 0,#3b3b3b 100%);background-image:linear-gradient(#404040 0,#3b3b3b 100%)}#controlKit .panel .group-list .group .sub-group-list .sub-group .head .label,#controlKit .panel .group-list .group .sub-group-list .sub-group .head-inactive .label{margin:0;padding:0;line-height:27px;color:#fff;font-weight:700;font-size:11px;text-shadow:1px 1px #000;text-transform:capitalize}#controlKit .panel .group-list .group .sub-group-list .sub-group .head .wrap .label,#controlKit .panel .group-list .group .sub-group-list .sub-group .head-inactive .wrap .label{width:100%;font-weight:700;color:#fff;padding:0}#controlKit .panel .group-list .group .sub-group-list .sub-group .wrap .label{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:100%;width:30%;padding:12px 5px 0 0;float:left;font-size:11px;font-weight:400;color:#aeb5b8;text-shadow:1px 1px #000}#controlKit .panel .group-list .group .sub-group-list .sub-group .wrap .wrap{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:70%;padding:5px 0 0;float:right;height:100%}#controlKit .panel .group-list .group:last-child .scroll-buffer:nth-of-type(3),#controlKit .panel .group-list .group:last-child .sub-group-list{border-bottom:none}#controlKit .panel .scroll-wrap{position:relative;overflow:hidden}#controlKit .panel .scroll-buffer{width:100%;height:8px;border-top:1px solid #3b4447;border-bottom:1px solid #1e2224}#controlKit .panel .scrollBar{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;width:15px;height:100%;float:right;top:0;padding:0;margin:0;position:relative;background:#212628;background-image:linear-gradient(to right,#242424 0,#2e2e2e 100%)}#controlKit .panel .scrollBar .track{padding:0 3px 0 2px}#controlKit .panel .scrollBar .track .thumb{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:11px;position:absolute;cursor:pointer;background-color:#343434;border:1px solid #1b1f21;border-radius:10px;-moz-border-radius:10px;box-shadow:inset 0 1px 0 0 #434b50}#controlKit .panel .menu,#controlKit .panel .menu-active,#controlKit .picker .menu{float:right;padding:5px 0 0}#controlKit .panel .menu input[type=button],#controlKit .panel .menu-active input[type=button],#controlKit .picker .menu input[type=button]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;height:20px;border:none;vertical-align:top;border-radius:2px;-moz-border-radius:2px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;color:#aaa;text-shadow:0 -1px #000;text-transform:uppercase;box-shadow:0 0 0 1px #131313 inset,-1px 2px 0 0 #212527 inset;outline:0}#controlKit .panel .menu .button-menu-close,#controlKit .panel .menu .button-menu-hide,#controlKit .panel .menu .button-menu-show,#controlKit .panel .menu-active .button-menu-close,#controlKit .panel .menu-active .button-menu-hide,#controlKit .panel .menu-active .button-menu-show,#controlKit .picker .menu .button-menu-close,#controlKit .picker .menu .button-menu-hide,#controlKit .picker .menu .button-menu-show{width:20px;margin-left:4px}#controlKit .panel .menu .button-menu-hide,#controlKit .panel .menu-active .button-menu-hide,#controlKit .picker .menu .button-menu-hide{background:url(data:image/png;base64,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) 50% 50% no-repeat,#1a1d1f}#controlKit .panel .menu .button-menu-hide:hover,#controlKit .panel .menu-active .button-menu-hide:hover,#controlKit .picker .menu .button-menu-hide:hover{background:url(data:image/png;base64,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) 50% 50% no-repeat,#000;box-shadow:#fff 0,#000 100%}#controlKit .panel .menu .button-menu-show,#controlKit .panel .menu-active .button-menu-show,#controlKit .picker .menu .button-menu-show{background:url(data:image/png;base64,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) 50% 50% no-repeat,#1a1d1f}#controlKit .panel .menu .button-menu-show:hover,#controlKit .panel .menu-active .button-menu-show:hover,#controlKit .picker .menu .button-menu-show:hover{background:url(data:image/png;base64,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) 50% 50% no-repeat,#000;box-shadow:#fff 0,#000 100%}#controlKit .panel .menu .button-menu-close,#controlKit .panel .menu-active .button-menu-close,#controlKit .picker .menu .button-menu-close{background:url(data:image/png;base64,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) 50% 50% no-repeat,#1a1d1f}#controlKit .panel .menu .button-menu-close:hover,#controlKit .panel .menu-active .button-menu-close:hover,#controlKit .picker .menu .button-menu-close:hover{background:url(data:image/png;base64,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) 50% 50% no-repeat,#000;box-shadow:#fff 0,#000 100%}#controlKit .panel .menu .button-menu-undo,#controlKit .panel .menu-active .button-menu-undo{background:url(data:image/png;base64,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) 20% 50% no-repeat,#1a1d1f;padding:0 6px 1px 0;width:38px;vertical-align:top;text-align:end}#controlKit .panel .menu .button-menu-undo:hover,#controlKit .panel .menu-active .button-menu-undo:hover{background:url(data:image/png;base64,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) 20% 50% no-repeat,#000;box-shadow:#fff 0,#000 100%}#controlKit .panel .menu .button-menu-load,#controlKit .panel .menu-active .button-menu-load{margin-right:2px}#controlKit .panel .menu .button-menu-load,#controlKit .panel .menu .button-menu-save,#controlKit .panel .menu-active .button-menu-load,#controlKit .panel .menu-active .button-menu-save{background:#1a1d1f;font-size:9px!important}#controlKit .panel .menu .button-menu-load:hover,#controlKit .panel .menu .button-menu-save:hover,#controlKit .panel .menu-active .button-menu-load:hover,#controlKit .panel .menu-active .button-menu-save:hover{background:#000}#controlKit .panel .menu .wrap{display:none}#controlKit .panel .menu-active{width:100%;float:left}#controlKit .panel .menu-active .wrap{display:inline}#controlKit .panel .menu-active .button-menu-close,#controlKit .panel .menu-active .button-menu-hide,#controlKit .panel .menu-active .button-menu-show{float:right}#controlKit .panel .arrow-s-max{background:url(data:image/png;base64,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) center no-repeat}#controlKit .panel .arrow-s-min{background:url(data:image/png;base64,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) center no-repeat}#controlKit .panel .arrow-s-max,#controlKit .panel .arrow-s-min{width:100%;height:20px}#controlKit .panel .arrow-b-max{background:url(data:image/png;base64,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) center no-repeat}#controlKit .panel .arrow-b-min{background:url(data:image/png;base64,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) center no-repeat}#controlKit .panel .arrow-b-sub-max{background:url(data:image/png;base64,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) center no-repeat}#controlKit .panel .arrow-b-sub-min{background:url(data:image/png;base64,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) center no-repeat}#controlKit .panel .arrow-b-max,#controlKit .panel .arrow-b-min,#controlKit .panel .arrow-b-sub-max,#controlKit .panel .arrow-b-sub-min{width:10px;height:100%;float:right}#controlKit .picker{pointer-events:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:3px;-moz-border-radius:3px;background-color:#3b3b3b;font-family:Arial,sans-serif;font-size:11px;color:#fff;text-shadow:1px 1px #000;overflow:hidden;position:absolute;z-index:2147483631;width:360px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 2px 2px rgba(0,0,0,.25)}#controlKit .picker canvas{vertical-align:bottom;cursor:pointer}#controlKit .picker .wrap{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:10px;float:left}#controlKit .picker .field-wrap{padding:3px}#controlKit .picker .slider-wrap{padding:3px 13px 3px 3px}#controlKit .picker .field-wrap,#controlKit .picker .input-wrap,#controlKit .picker .slider-wrap{height:auto;overflow:hidden;float:left}#controlKit .picker .input-wrap{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #242424;border-radius:2px;-moz-border-radius:2px;width:140px;float:right;padding:5px 10px 1px 0}#controlKit .picker .input-field{width:50%;float:right;margin-bottom:4px}#controlKit .picker .input-field .label{padding:8px 0 0;color:#878787;text-align:center;text-transform:uppercase;font-weight:700;text-shadow:1px 1px #1a1a1a;width:40%}#controlKit .picker .input-field .wrap{padding:0;width:60%;height:auto;float:right}#controlKit .picker .controls-wrap{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;height:auto;float:right;padding:9px 0 0}#controlKit .picker .controls-wrap input[type=button]{float:right;width:65px;margin:0 0 0 10px}#controlKit .picker .color-contrast{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:none;box-shadow:0 0 0 1px #1f1f1f inset;border-radius:2px;-moz-border-radius:2px;height:25px;padding:3px;width:80%;margin-bottom:4px;float:right}#controlKit .picker .color-contrast div{width:50%;height:100%;float:left}#controlKit .picker input[type=text]{padding:0;text-align:center;width:60%;float:right}#controlKit .picker .wrap .input-wrap:nth-of-type(3){border-bottom-left-radius:0;border-bottom-right-radius:0}#controlKit .picker .wrap .input-wrap:nth-of-type(4){border-top:none;border-top-left-radius:0;border-top-right-radius:0}#controlKit .picker .wrap .input-wrap:nth-of-type(4) .input-field{width:100%}#controlKit .picker .wrap .input-wrap:nth-of-type(4) .input-field .label{width:20%}#controlKit .picker .wrap .input-wrap:nth-of-type(4) input[type=text]{width:80%}#controlKit .picker .field-wrap,#controlKit .picker .slider-wrap{background:#1e2224;border:none;box-shadow:0 0 0 1px #1f1f1f inset;border-radius:2px;-moz-border-radius:2px;position:relative;margin-right:5px}#controlKit .picker .field-wrap .indicator,#controlKit .picker .slider-wrap .indicator{position:absolute;border:2px solid #fff;box-shadow:0 1px black,0 1px #000 inset;cursor:pointer}#controlKit .picker .field-wrap .indicator{width:8px;height:8px;left:50%;top:50%;border-radius:50%;-moz-border-radius:50%}#controlKit .picker .slider-wrap .indicator{width:14px;height:3px;border-radius:8px;-moz-border-radius:8px;left:1px;top:1px}#controlKit .picker .slider-wrap .indicator:after{content:'';width:0;height:0;border-top:4.5px solid transparent;border-bottom:4.5px solid transparent;border-right:4px solid #fff;float:right;position:absolute;top:-2px;left:19px}#controlKit .picker .slider-wrap .indicator:before{content:'';width:0;height:0;border-top:4.5px solid transparent;border-bottom:4.5px solid transparent;border-right:4px solid #000;float:right;position:absolute;top:-3px;left:19px}"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/event/Event.js":/***/
function(t,e){function n(t,e,n){this.sender=t,this.type=e,this.data=n}t.exports=n},/***/
"./node_modules/controlkit/lib/core/event/EventDispatcher.js":/***/
function(t,e){function n(){this._listeners=[]}n.prototype={addEventListener:function(t,e,n){this._listeners[t]=this._listeners[t]||[],this._listeners[t].push({obj:e,method:n})},dispatchEvent:function(t){var e=t.type;if(this.hasEventListener(e))for(var n,i,r=this._listeners[e],o=-1,a=r.length;++o<a;){if(n=r[o].obj,i=r[o].method,!n[i])throw n+" has no method "+i;n[i](t)}},removeEventListener:function(t,e,n){if(this.hasEventListener(t))for(var i=this._listeners[t],r=i.length;--r>-1;)if(i[r].obj==e&&i[r].method==n){i.splice(r,1),0==i.length&&delete this._listeners[t];break}},removeAllEventListeners:function(){this._listeners=[]},hasEventListener:function(t){return void 0!=this._listeners[t]&&null!=this._listeners[t]}},t.exports=n},/***/
"./node_modules/controlkit/lib/core/layout/LayoutMode.js":/***/
function(t,e){var n={LEFT:"left",RIGHT:"right",TOP:"top",BOTTOM:"bottom",NONE:"none"};t.exports=n},/***/
"./node_modules/controlkit/lib/core/layout/ScrollBar.js":/***/
function(t,e,n){function i(t,e,n){this._parentNode=t,this._targetNode=e,this._wrapHeight=n;var i=this._wrapNode=(new r).setStyleClass(a.ScrollWrap),l=this._node=(new r).setStyleClass(a.ScrollBar),u=this._trackNode=(new r).setStyleClass(a.ScrollBarTrack),c=this._thumbNode=(new r).setStyleClass(a.ScrollBarThumb);t.removeChild(e),t.addChild(i),t.addChildAt(l,0),i.addChild(e),l.addChild(u),u.addChild(c),this._mouseThumbOffset=0,this._scrollHeight=0,this._scrollUnit=0,this._scrollMin=0,this._scrollMax=0,c.setPositionY(o.SCROLLBAR_TRACK_PADDING),c.addEventListener(s.MOUSE_DOWN,this._onThumbDragStart.bind(this)),this._isValid=!1,this._enabled=!1;var h=l.getElement(),d=c.getElement(),p=this;this._onMouseWheel=function(t){var e=t.sender,n=e.getHoverElement();if(n==h||n==d){var i=.0125*p._scrollHeight;p._scroll(c.getPositionY()+e.getWheelDirection()*i*-1),t.data.preventDefault()}},this.addMouseListener()}var r=n("./node_modules/controlkit/lib/core/document/Node.js"),o=n("./node_modules/controlkit/lib/component/Metric.js"),a=n("./node_modules/controlkit/lib/core/document/CSS.js"),s=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),l=(n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),n("./node_modules/controlkit/lib/core/document/Mouse.js"));i.prototype.update=function(){var t=this._targetNode,e=this._thumbNode,n=o.SCROLLBAR_TRACK_PADDING,i=this._wrapHeight,r=t.getHeight(),a=i-2*n;e.setHeight(a);var s=i/r;if(this._isValid=!1,!(s>1)){var l=a*s;this._scrollHeight=a,this._scrollUnit=r-this._scrollHeight-2*n,this._scrollMin=n,this._scrollMax=n+a-l,e.setHeight(l),this._isValid=!0}},i.prototype._scroll=function(t){var e=this._scrollMin,n=this._scrollMax,i=Math.max(e,Math.min(t,n)),r=(i-e)/(n-e);this._thumbNode.setPositionY(i),this._targetNode.setPositionY(r*this._scrollUnit*-1)},i.prototype._onThumbDragStart=function(){if(this._isValid&&!this._enabled){var t=s.MOUSE_MOVE,e=s.MOUSE_UP,n=l.get(),i=this._trackNode.getPositionGlobalY();this._mouseThumbOffset=n.getY()-this._thumbNode.getPositionGlobalY();var r=this,o=function(){r._scroll(n.getY()-i-r._mouseThumbOffset)},a=function(){document.removeEventListener(t,o,!1),document.removeEventListener(e,a,!1)};document.addEventListener(t,o,!1),document.addEventListener(e,a,!1),this._scroll(n.getY()-i-r._mouseThumbOffset)}},i.prototype.enable=function(){this._enabled=!1,this._updateAppearance()},i.prototype.disable=function(){this._enabled=!0,this._updateAppearance()},i.prototype.reset=function(){this._scroll(0)},i.prototype._updateAppearance=function(){this._enabled?(this._node.setStyleProperty("display","none"),this._targetNode.setPositionY(0),this._thumbNode.setPositionY(o.SCROLLBAR_TRACK_PADDING)):this._node.setStyleProperty("display","block")},i.prototype.isValid=function(){return this._isValid},i.prototype.setWrapHeight=function(t){this._wrapHeight=t,this.update()},i.prototype.removeTargetNode=function(){return this._wrapNode.removeChild(this._targetNode)},i.prototype.removeMouseListener=function(){l.get().removeEventListener(s.MOUSE_WHEEL,this,"_onMouseWheel")},i.prototype.addMouseListener=function(){l.get().addEventListener(s.MOUSE_WHEEL,this,"_onMouseWheel")},i.prototype.removeFromParent=function(){var t=this._parentNode,e=this._node,n=this._targetNode;return e.removeChild(n),t.removeChild(this._wrapNode),t.removeChild(e),n},i.prototype.getWrapNode=function(){return this._wrapNode},i.prototype.getNode=function(){return this._node},i.prototype.getTargetNode=function(){return this._targetNode},t.exports=i},/***/
"./node_modules/controlkit/lib/group/AbstractGroup.js":/***/
function(t,e,n){function i(t,e){r.apply(this,arguments),e=e||{},e.height=e.height||null,e.enable=void 0===e.enable||e.enable,this._parent=t,this._height=e.height,this._enabled=e.enable,this._scrollBar=null,this._node=new o(o.LIST_ITEM),this._wrapNode=new o,this._listNode=new o(o.LIST),this._parent.getList().addChild(this._node)}var r=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/core/layout/ScrollBar.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,i.prototype.addScrollWrap=function(){var t=this._wrapNode,e=this.getMaxHeight();this._scrollBar=new a(t,this._listNode,e),this.isEnabled()&&t.setHeight(e)},i.prototype.preventSelectDrag=function(){this._parent.preventSelectDrag(),this.hasScrollWrap()&&(this._wrapNode.getElement().scrollTop=0)},i.prototype.hasMaxHeight=function(){return null!=this._height},i.prototype.getMaxHeight=function(){return this._height},i.prototype.hasScrollWrap=function(){return null!=this._scrollBar},i.prototype.hasLabel=function(){return null!=this._lablNode},i.prototype.disable=function(){this._enabled=!1,this._updateAppearance()},i.prototype.enable=function(){this._enabled=!0,this._updateAppearance()},i.prototype.isDisabled=function(){return!this._enabled},i.prototype.isEnabled=function(){return this._enabled},i.prototype.getList=function(){return this._listNode},t.exports=i},/***/
"./node_modules/controlkit/lib/group/Group.js":/***/
function(t,e,n){function i(t,e){e=e||{},e.label=e.label||null,e.useLabels=e.useLabels||!0,e.enable=void 0===e.enable||e.enable,o.apply(this,arguments),this._components=[],this._subGroups=[];var n=this._node,i=this._wrapNode,r=this._listNode;n.setStyleClass(a.Group),i.setStyleClass(a.Wrap),r.setStyleClass(a.SubGroupList),i.addChild(r);var l=e.label;if(l){var u=new s,f=new s,m=new s(s.SPAN),g=this._indiNode=new s;u.setStyleClass(a.Head),f.setStyleClass(a.Wrap),m.setStyleClass(a.Label),g.setStyleClass(a.ArrowBMax),m.setProperty("innerHTML",l),u.addChild(g),f.addChild(m),u.addChild(f),n.addChild(u),u.addEventListener(h.MOUSE_DOWN,this._onHeadTrigger.bind(this)),this.addEventListener(p.GROUP_LIST_SIZE_CHANGE,t,"onGroupListSizeChange"),this._updateAppearance()}if(this.hasMaxHeight()&&this.addScrollWrap(),n.addChild(i),this.hasMaxHeight()){if(!l){var v=this._scrollBufferTop=new s;v.setStyleClass(a.ScrollBuffer),n.addChildAt(v,0)}var y=this._scrollBufferBottom=new s;y.setStyleClass(a.ScrollBuffer),n.addChild(y)}t=this._parent,t.addEventListener(d.PANEL_MOVE_BEGIN,this,"onPanelMoveBegin"),t.addEventListener(d.PANEL_MOVE,this,"onPanelMove"),t.addEventListener(d.PANEL_MOVE_END,this,"onPanelMoveEnd"),t.addEventListener(d.PANEL_HIDE,this,"onPanelHide"),t.addEventListener(d.PANEL_SHOW,this,"onPanelShow"),t.addEventListener(d.PANEL_SCROLL_WRAP_ADDED,this,"onPanelScrollWrapAdded"),t.addEventListener(d.PANEL_SCROLL_WRAP_REMOVED,this,"onPanelScrollWrapRemoved"),t.addEventListener(d.PANEL_SIZE_CHANGE,this,"onPanelSizeChange"),t.addEventListener(c.WINDOW_RESIZE,this,"onWindowResize"),this.addEventListener(p.GROUP_SIZE_CHANGE,t,"onGroupListSizeChange")}function r(t){return t instanceof f&&!(t instanceof m)&&!(t instanceof g)}var o=n("./node_modules/controlkit/lib/group/AbstractGroup.js"),a=n("./node_modules/controlkit/lib/core/document/CSS.js"),s=n("./node_modules/controlkit/lib/core/document/Node.js"),l=n("./node_modules/controlkit/lib/group/SubGroup.js"),u=n("./node_modules/controlkit/lib/core/event/Event.js"),c=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),h=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),d=n("./node_modules/controlkit/lib/group/PanelEvent.js"),p=n("./node_modules/controlkit/lib/group/GroupEvent.js"),f=n("./node_modules/controlkit/lib/core/ObjectComponent.js"),m=n("./node_modules/controlkit/lib/component/ValuePlotter.js"),g=n("./node_modules/controlkit/lib/component/FunctionPlotter.js");i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.prototype.onPanelMoveBegin=function(){this.dispatchEvent(new u(this,d.PANEL_MOVE_BEGIN,null))},i.prototype.onPanelMove=function(){this.dispatchEvent(new u(this,d.PANEL_MOVE,null))},i.prototype.onPanelMoveEnd=function(){this.dispatchEvent(new u(this,d.PANEL_MOVE_END,null))},i.prototype.onPanelScrollWrapAdded=function(){this.dispatchEvent(new u(this,p.GROUP_SIZE_CHANGE,null))},i.prototype.onPanelScrollWrapRemoved=function(){this.dispatchEvent(new u(this,p.GROUP_SIZE_CHANGE,null))},i.prototype.onPanelHide=function(){this.dispatchEvent(new u(this,p.SUBGROUP_DISABLE,null))},i.prototype.onPanelShow=function(){this.dispatchEvent(new u(this,p.SUBGROUP_ENABLE,null))},i.prototype.onPanelSizeChange=function(){this.dispatchEvent(new u(this,p.GROUP_SIZE_CHANGE,null))},i.prototype.onWindowResize=function(t){this.dispatchEvent(t)},i.prototype.onSubGroupTrigger=function(){if(this._updateHeight(),this.hasMaxHeight()){var t=this._scrollBar,e=this._wrapNode,n=this._scrollBufferTop,i=this._scrollBufferBottom;t.update(),t.isValid()?(t.enable(),e.setHeight(this.getMaxHeight()),n&&n.setStyleProperty("display","block"),i&&i.setStyleProperty("display","block")):(t.disable(),e.setHeight(e.getChildAt(1).getHeight()),n&&n.setStyleProperty("display","none"),i&&i.setStyleProperty("display","none")),this.dispatchEvent(new u(this,p.GROUP_SIZE_CHANGE,null))}},i.prototype._onHeadTrigger=function(){this._enabled=!this._enabled,this._updateAppearance(),this.dispatchEvent(new u(this,p.GROUP_LIST_SIZE_CHANGE,null))},i.prototype.addComponent=function(){var t=arguments[0],e=Array.prototype.slice.call(arguments);e.shift(),e.unshift(this._getSubGroup());var n=Object.create(t.prototype);t.apply(n,e),this._components.push(n),this._updateHeight()},i.prototype._updateHeight=function(){this._getSubGroup().update(),this.dispatchEvent(new u(this,p.GROUP_SIZE_CHANGE,null)),this.hasMaxHeight()&&this._scrollBar.update()},i.prototype._updateAppearance=function(){var t=this._wrapNode,e=this._indiNode,n=this._scrollBar,i=this._scrollBufferTop,r=this._scrollBufferBottom;if(this.isDisabled())return t.setHeight(0),e&&e.setStyleClass(a.ArrowBMin),void(n&&(i&&i.setStyleProperty("display","none"),r&&r.setStyleProperty("display","none")));if(this.hasMaxHeight()){var o=this.getMaxHeight(),s=t.getChildAt(1).getHeight();t.setHeight(s<o?s:o),n.isValid()&&(i&&i.setStyleProperty("display","block"),r&&r.setStyleProperty("display","block"))}else t.deleteStyleProperty("height");e&&e.setStyleClass(a.ArrowBMax)},i.prototype.onGroupSizeUpdate=function(){this._updateAppearance(),this.hasMaxHeight()&&this._scrollBar.update()},i.prototype.addSubGroup=function(t){return this._subGroups.push(new l(this,t)),this._updateHeight(),this},i.prototype._getSubGroup=function(){var t=this._subGroups;return 0==t.length&&t.push(new l(this)),t[t.length-1]},i.prototype.getComponents=function(){return this._components},i.prototype.setData=function(t){for(var e,n,i=this._components,o=-1,a=0,s=i.length;++o<s;)e=i[o],r(e)&&(n=t[a++],e.setValue(n[Object.keys(n)[0]]))},i.prototype.getData=function(){for(var t,e=this._components,n=-1,i=e.length,o=[];++n<i;)t=e[n],r(t)&&o.push(t.getData());return o},t.exports=i},/***/
"./node_modules/controlkit/lib/group/GroupEvent.js":/***/
function(t,e){var n={GROUP_SIZE_CHANGE:"groupSizeChange",GROUP_LIST_SIZE_CHANGE:"groupListSizeChange",GROUP_SIZE_UPDATE:"groupSizeUpdate",SUBGROUP_TRIGGER:"subGroupTrigger",SUBGROUP_ENABLE:"enableSubGroup",SUBGROUP_DISABLE:"disableSubGroup"};t.exports=n},/***/
"./node_modules/controlkit/lib/group/MenuEvent.js":/***/
function(t,e){var n={UPDATE_MENU:"updateMenu"};t.exports=n},/***/
"./node_modules/controlkit/lib/group/Panel.js":/***/
function(t,e,n){function i(t,e){c.apply(this,arguments),this._parent=t,e=e||{},e.valign=e.valign||k,e.align=e.align||V,e.position=e.position||I,e.width=e.width||O,e.height=e.height||R,e.ratio=e.ratio||j,e.label=e.label||U,e.opacity=e.opacity||z,e.fixed=void 0===e.fixed?H:e.fixed,e.enable=void 0===e.enable?F:e.enable,e.vconstrain=void 0===e.vconstrain?X:e.vconstrain,e.dock&&(e.dock.align=e.dock.align||G.align,e.dock.resizable=e.dock.resizable||G.resizable),this._width=Math.max(D,Math.min(e.width,B)),this._height=e.height?Math.max(0,Math.min(e.height,window.innerHeight)):null,this._fixed=e.fixed,this._dock=e.dock,this._position=e.position,this._vConstrain=e.vconstrain,this._label=e.label,this._enabled=e.enable,this._groups=[];var n=this._width,i=this._fixed,o=this._dock,a=this._position,h=this._label,f=e.align,g=e.opacity,v=this._node=(new r).setStyleClass(s.Panel),y=this._headNode=(new r).setStyleClass(s.Head),b=(new r).setStyleClass(s.Menu),_=(new r).setStyleClass(s.Wrap),x=new r(r.SPAN).setStyleClass(s.Label),A=this._wrapNode=new r(r.DIV).setStyleClass(s.Wrap),w=this._listNode=new r(r.LIST).setStyleClass(s.GroupList);if(v.setWidth(n),x.setProperty("innerHTML",h),_.addChild(x),y.addChild(b),y.addChild(_),A.addChild(w),v.addChild(y),v.addChild(A),t.getNode().addChild(v),o){var S=o.align;S!=l.LEFT&&S!=l.RIGHT||(f=S,this._height=window.innerHeight),S==l.TOP||l.BOTTOM,/*
         if(dock.resizable)
         {
         var sizeHandle = new ControlKit.Node(ControlKit.NodeType.DIV);
         sizeHandle.setStyleClass(ControlKit.CSS.SizeHandle);
         rootNode.addChild(sizeHandle);
         }
         */
v.setStyleProperty("float",f)}else{var M=this._menuHide=new r(r.INPUT_BUTTON);if(M.setStyleClass(s.ButtonMenuHide),M.addEventListener(p.MOUSE_DOWN,this._onMenuHideMouseDown.bind(this)),b.addChild(M),this._parent.panelsAreClosable()){var E=new r(r.INPUT_BUTTON);E.setStyleClass(s.ButtonMenuClose),E.addEventListener(p.MOUSE_DOWN,this.disable.bind(this)),b.addChild(E)}if(this.hasMaxHeight()&&this._addScrollWrap(),i){if(a){var T=a[0],C=a[1];0!=C&&v.setPositionY(C),0!=T&&(f==l.RIGHT?v.getElement().marginRight=T:v.setPositionX(T))}v.setStyleProperty("float",f)}else a?f==l.LEFT||f==l.TOP||f==l.BOTTOM?v.setPositionGlobal(a[0],a[1]):(v.setPositionGlobal(window.innerWidth-n-a[0],a[1]),this._position=v.getPosition()):this._position=v.getPosition(),this._mouseOffset=[0,0],v.setStyleProperty("position","absolute"),y.addEventListener(p.MOUSE_DOWN,this._onHeadDragStart.bind(this))}var P=this._parent,L=P.historyIsEnabled(),N=P.statesAreEnabled();(L||N)&&b.addChildAt(new r,0).setStyleClass(s.Wrap),L&&(this._menuUndo=b.getChildAt(0).addChild(new r(r.INPUT_BUTTON)).setStyleClass(s.ButtonMenuUndo).setProperty("value",u.get().getNumStates()).addEventListener(p.MOUSE_DOWN,function(){u.get().popState()}),P.addEventListener(m.UPDATE_MENU,this,"onUpdateMenu")),N&&(b.getChildAt(0).addChild(new r(r.INPUT_BUTTON)).setStyleClass(s.ButtonMenuLoad).setProperty("value","Load").addEventListener(p.MOUSE_DOWN,function(){t._loadState()}),b.getChildAt(0).addChild(new r(r.INPUT_BUTTON)).setStyleClass(s.ButtonMenuSave).setProperty("value","Save").addEventListener(p.MOUSE_DOWN,function(){t._saveState()})),(L||N)&&(y.addEventListener(p.MOUSE_OVER,function(){b.setStyleClass(s.MenuActive)}),y.addEventListener(p.MOUSE_OUT,function(){b.setStyleClass(s.Menu)})),1!=g&&0!=g&&v.setStyleProperty("opacity",g),window.addEventListener(d.WINDOW_RESIZE,this._onWindowResize.bind(this)),this._updateAppearance()}var r=n("./node_modules/controlkit/lib/core/document/Node.js"),o=n("./node_modules/controlkit/lib/group/Group.js"),a=n("./node_modules/controlkit/lib/core/layout/ScrollBar.js"),s=n("./node_modules/controlkit/lib/core/document/CSS.js"),l=n("./node_modules/controlkit/lib/core/layout/LayoutMode.js"),u=n("./node_modules/controlkit/lib/core/History.js"),c=n("./node_modules/controlkit/lib/core/event/EventDispatcher.js"),h=n("./node_modules/controlkit/lib/core/event/Event.js"),d=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),p=n("./node_modules/controlkit/lib/core/document/NodeEvent.js"),f=n("./node_modules/controlkit/lib/group/PanelEvent.js"),m=n("./node_modules/controlkit/lib/group/MenuEvent.js"),g=n("./node_modules/controlkit/lib/core/document/Mouse.js"),v=n("./node_modules/controlkit/lib/component/StringInput.js"),y=n("./node_modules/controlkit/lib/component/NumberInput.js"),b=n("./node_modules/controlkit/lib/component/Range.js"),_=n("./node_modules/controlkit/lib/component/Checkbox.js"),x=n("./node_modules/controlkit/lib/component/Color.js"),A=n("./node_modules/controlkit/lib/component/Button.js"),w=n("./node_modules/controlkit/lib/component/Select.js"),S=n("./node_modules/controlkit/lib/component/Slider.js"),M=n("./node_modules/controlkit/lib/component/FunctionPlotter.js"),E=n("./node_modules/controlkit/lib/component/Pad.js"),T=n("./node_modules/controlkit/lib/component/ValuePlotter.js"),C=n("./node_modules/controlkit/lib/component/NumberOutput.js"),P=n("./node_modules/controlkit/lib/component/StringOutput.js"),L=n("./node_modules/controlkit/lib/component/Canvas.js"),N=n("./node_modules/controlkit/lib/component/SVG.js"),I=null,O=200,R=null,D=100,B=600,j=40,U="Control Panel",k=l.TOP,V=l.RIGHT,G={align:l.RIGHT,resizable:!0},F=!0,z=1,H=!0,X=!0;i.prototype=Object.create(c.prototype),i.prototype.constructor=i,i.prototype._onMenuHideMouseDown=function(){this._enabled=!this._enabled,this._updateAppearance()},i.prototype.onUpdateMenu=function(){this._menuUndo.setProperty("value",u.get().getNumStates())},i.prototype._onMenuUndoTrigger=function(){u.get().popState()},i.prototype._updateAppearance=function(){var t=this._node,e=this._headNode,n=this._menuHide;this._enabled?(t.setHeight(e.getHeight()+this._wrapNode.getHeight()),t.deleteStyleProperty("height"),n.setStyleClass(s.ButtonMenuHide),e.setStyleClass(s.Head),this.dispatchEvent(new h(this,f.PANEL_SHOW,null))):(e.getStyle().borderBottom="none",t.setHeight(e.getHeight()),n.setStyleClass(s.ButtonMenuShow),this.dispatchEvent(new h(this,f.PANEL_HIDE,null)))},i.prototype._onHeadDragStart=function(){var t=this._parent.getNode(),e=this._node,n=e.getPositionGlobal(),i=g.get().getPosition(),r=this._mouseOffset;r[0]=i[0]-n[0],r[1]=i[1]-n[1];var o=d.MOUSE_MOVE,a=d.MOUSE_UP,s=this,l=function(){s._updatePosition()},u=function(){document.removeEventListener(o,l,!1),document.removeEventListener(a,u,!1),s.dispatchEvent(new h(this,f.PANEL_MOVE_END,null))};t.removeChild(e),t.addChild(e),document.addEventListener(o,l,!1),document.addEventListener(a,u,!1),this.dispatchEvent(new h(this,f.PANEL_MOVE_BEGIN,null))},i.prototype._updatePosition=function(){var t=g.get().getPosition(),e=this._mouseOffset,n=this._position;n[0]=t[0]-e[0],n[1]=t[1]-e[1],this._constrainHeight(),this._constrainPosition(),this.dispatchEvent(new h(this,f.PANEL_MOVE,null))},i.prototype._onWindowResize=function(){if(this.isDocked()){var t=this._dock;if(t.align==l.RIGHT||t.align==l.LEFT){var e=window.innerHeight,n=this._listNode.getHeight(),i=this._headNode.getHeight();this._height=e,e-i>n?this._scrollBar.disable():this._scrollBar.enable(),this.dispatchEvent(new h(this,f.PANEL_SIZE_CHANGE))}}else this.isFixed()||this._constrainPosition();this._constrainHeight(),this.dispatchEvent(new h(this,d.WINDOW_RESIZE))},i.prototype._constrainPosition=function(){var t=this._node,e=window.innerWidth-t.getWidth(),n=window.innerHeight-t.getHeight(),i=this._position;i[0]=Math.max(0,Math.min(i[0],e)),i[1]=Math.max(0,Math.min(i[1],n)),t.setPositionGlobal(i[0],i[1])},i.prototype._constrainHeight=function(){if(this._vConstrain){var t,e=this.hasMaxHeight(),n=this.hasScrollWrap(),i=this._headNode,r=this._wrapNode,o=this._scrollBar,a=this.isDocked()?0:this.isFixed()?0:this._position[1],s=e?this.getMaxHeight():n?o.getTargetNode().getHeight():r.getHeight(),l=a+s,u=i.getHeight(),c=window.innerHeight,d=c-l-u;if(d<0){if(t=s+d,!n)return this._addScrollWrap(t),void this.dispatchEvent(new h(this,f.PANEL_SCROLL_WRAP_ADDED,null));o.setWrapHeight(t),r.setHeight(t)}else!e&&n&&(o.removeFromParent(),r.addChild(this._listNode),r.deleteStyleProperty("height"),this._scrollBar.removeMouseListener(),this._scrollBar=null,this.dispatchEvent(new h(this,f.PANEL_SCROLL_WRAP_REMOVED,null)))}},i.prototype.onGroupListSizeChange=function(){this.hasScrollWrap()&&this._updateScrollWrap(),this._constrainHeight()},i.prototype._updateScrollWrap=function(){var t=this._wrapNode,e=this._scrollBar,n=this.hasMaxHeight()?this.getMaxHeight():100,i=this._listNode.getHeight();t.setHeight(i<n?i:n),e.update(),e.isValid()?(e.enable(),t.setHeight(n)):(e.disable(),t.setHeight(t.getChildAt(1).getHeight()))},i.prototype._addScrollWrap=function(){var t=this._wrapNode,e=this._listNode,n=0==arguments.length?this.getMaxHeight():arguments[0];this._scrollBar=new a(t,e,n),this.isEnabled()&&t.setHeight(n)},i.prototype.hasScrollWrap=function(){return null!=this._scrollBar},i.prototype.preventSelectDrag=function(){this.hasScrollWrap()&&(this._wrapNode.getElement().scrollTop=0)},i.prototype.enable=function(){this._node.setStyleProperty("display","block"),this._enabled=!0,this._updateAppearance()},i.prototype.disable=function(){this._node.setStyleProperty("display","none"),this._enabled=!1,this._updateAppearance()},i.prototype.isEnabled=function(){return this._enabled},i.prototype.isDisabled=function(){return!this._enabled},i.prototype.hasMaxHeight=function(){return null!=this._height},i.prototype.getMaxHeight=function(){return this._height},i.prototype.isDocked=function(){return this._dock},i.prototype.isFixed=function(){return this._fixed},i.prototype.getGroups=function(){return this._groups},i.prototype.getNode=function(){return this._node},i.prototype.getList=function(){return this._listNode},i.prototype.getWidth=function(){return this._width},i.prototype.getPosition=function(){return this._position},i.prototype.getParent=function(){return this._parent},/**
 * Adds a new Group to the Panel.
 * @param {Object} [params] - Group options
 * @param {String} [params.label=''] - The Group label string
 * @param {Boolean} [params.useLabel=true] - Trigger whether all contained SubGroups and Components should use labels
 * @param {Boolean} [params.enable=true] - Defines initial state open / closed
 * @param {Number} [params.height=null] - Defines if the height of the Group should be constrained to certain height
 * @returns {Panel}
 */
i.prototype.addGroup=function(t){var e=new o(this,t);return this._groups.push(e),this.isDocked()&&this.dispatchEvent(new h(this,f.PANEL_SIZE_CHANGE)),this},/**
 * Adds a new SubGroup to the last added Group.
 * @param {Object} [params] - SubGroup options
 * @param {String} [params.label=''] - The SubGroup label string
 * @param {Boolean} [params.useLabel=true] - Trigger whether all Components should use labels
 * @param {Boolean} [params.enable=true] - Defines initial state open / closed
 * @param {Number} [params.height=null] - Defines if the height of the SubGroup should be constrained to certain height
 * @returns {Panel}
 */
i.prototype.addSubGroup=function(t){var e=this._groups;return 0==e.length&&this.addGroup(),e[e.length-1].addSubGroup(t),this},i.prototype._addComponent=function(){var t,e=this._groups;return 0==e.length&&e.push(new o(this)),t=e[e.length-1],t.addComponent.apply(t,arguments),this},/**
 * Adds a new StringInput to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - StringInput options
 * @param {String} [params.label=value] - StringInput label
 * @param {Function} [params.onChange] - Callback on change
 * @param {Array} [params.presets] - A set of presets
 * @returns {Panel}
 */
i.prototype.addStringInput=function(t,e,n){return this._addComponent(v,t,e,n)},/**
 * Adds a new NumberInput to last added SubGroup.
 * @param {Object} object - The object.
 * @param {String} value - The property key.
 * @param {Object} [params] - Component options.
 * @param {String} [params.label=value] - NumberInput label
 * @param {Function} [params.onChange] - Callback on change
 * @param {Number} [params.step] - Amount subbed/added on arrowDown/arrowUp press
 * @param {Number} [params.dp] - Decimal places displayed
 * @param {Array} [params.presets] - A set of presets
 * @returns {Panel}
 */
i.prototype.addNumberInput=function(t,e,n){return this._addComponent(y,t,e,n)},/**
 * Adds a new Range input to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Range label
 * @param {Function} [params.onChange] - Callback on change
 * @param {Number} [params.step] - Amount subbed/added on arrowDown/arrowUp press
 * @param {Number} [params.dp] - Decimal places displayed
 * @returns {Panel}
 */
i.prototype.addRange=function(t,e,n){return this._addComponent(b,t,e,n)},/**
 * Adds a new Checkbox to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Checkbox label
 * @param {Function} [params.onChange] - Callback on change
 * @returns {Panel}
 */
i.prototype.addCheckbox=function(t,e,n){return this._addComponent(_,t,e,n)},/**
 * Adds a new Color modifier to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Color label
 * @param {Function} [params.onChange] - Callback on change
 * @param {String} [params.colorMode='rgb'] - The colorMode to be used: 'hex' #ff00ff, 'rgb' [255,0,255], 'rgbfv' [1,0,1]
 * @param {Array} [params.presets] - A set of preset colors matching params.colorMode
 * @returns {Panel}
 */
i.prototype.addColor=function(t,e,n){return this._addComponent(x,t,e,n)},/**
 * Adds a new Button to last added SubGroup.
 * @param {String} label - The object
 * @param {Function} onPress - Callback
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Button label
 * @returns {Panel}
 */
i.prototype.addButton=function(t,e,n){return this._addComponent(A,t,e,n)},/**
 * Adds a new Select to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Button label
 * @param {Function} [params.onChange] - Callback on change - function(index){}
 * @param {String} [params.target] - The property to be set on select
 * @returns {Panel}
 */
i.prototype.addSelect=function(t,e,n){return this._addComponent(w,t,e,n)},/**
 * Adds a new Slider to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {String} range - The min/max array key to be used
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Slider label
 * @param {Function} [params.onChange] - Callback on change
 * @param {Function} [params.onFinish] - Callback on finish
 * @param {Number} [params.step] - Amount subbed/added on arrowDown/arrowUp press inside the input
 * @param {Number} [params.dp] - Decimal places displayed
 * @returns {Panel}
 */
i.prototype.addSlider=function(t,e,n,i){return this._addComponent(S,t,e,n,i)},/**
 * Adds a new FunctionPlotter to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key - f(x), f(x,y)
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - FunctionPlotter label
 * @returns {Panel}
 */
i.prototype.addFunctionPlotter=function(t,e,n){return this._addComponent(M,t,e,n)},/**
 * Adds a new XY-Pad to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Pad label
 * @returns {Panel}
 */
i.prototype.addPad=function(t,e,n){return this._addComponent(E,t,e,n)},/**
 * Adds a new ValuePlotter to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Plotter label
 * @param {Number} [params.height] - Plotter height
 * @param {Number} [params.resolution] - Graph resolution
 * @returns {Panel}
 */
i.prototype.addValuePlotter=function(t,e,n){return this._addComponent(T,t,e,n)},/**
 * Adds a new NumberOutput to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Output label
 * @param {Number} [params.dp] - Decimal places displayed
 * @returns {Panel}
 */
i.prototype.addNumberOutput=function(t,e,n){return this._addComponent(C,t,e,n)},/**
 * Adds a new StringOutput to last added SubGroup.
 * @param {Object} object - The object
 * @param {String} value - The property key
 * @param {Object} [params] - Component options
 * @param {String} [params.label=value] - Output label
 * @returns {Panel}
 */
i.prototype.addStringOutput=function(t,e,n){return this._addComponent(P,t,e,n)},i.prototype.addCanvas=function(t){return this._addComponent(L,t)},i.prototype.addSVG=function(t){return this._addComponent(N,t)},i.prototype.setData=function(t){for(var e=this._groups,n=-1,i=e.length;++n<i;)e[n].setData(t[n])},i.prototype.getData=function(){for(var t=this._groups,e=-1,n=t.length,i=[];++e<n;)i.push(t[e].getData());return i},t.exports=i},/***/
"./node_modules/controlkit/lib/group/PanelEvent.js":/***/
function(t,e){var n={PANEL_MOVE_BEGIN:"panelMoveBegin",PANEL_MOVE:"panelMove",PANEL_MOVE_END:"panelMoveEnd",PANEL_SHOW:"panelShow",PANEL_HIDE:"panelHide",PANEL_SCROLL_WRAP_ADDED:"panelScrollWrapAdded",PANEL_SCROLL_WRAP_REMOVED:"panelScrollWrapRemoved",PANEL_SIZE_CHANGE:"panelSizeChange"};t.exports=n},/***/
"./node_modules/controlkit/lib/group/SubGroup.js":/***/
function(t,e,n){function i(t,e){e=e||{},e.label=e.label||null,e.useLabels=void 0===e.useLabels||e.useLabels,r.apply(this,arguments);var n=this._node,i=this._wrapNode,s=this._listNode;n.setStyleClass(a.SubGroup),i.setStyleClass(a.Wrap),i.addChild(s),n.addChild(i),this._useLabels=e.useLabels;var h=e.label;if(h&&0!=h.length&&"none"!=h){var d=this._headNode=new o,p=new o,f=new o(o.SPAN);d.setStyleClass(a.Head),p.setStyleClass(a.Wrap),f.setStyleClass(a.Label),f.setProperty("innerHTML",h),p.addChild(f),d.addChild(p);var m=this._indiNode=new o;m.setStyleClass(a.ArrowBSubMax),d.addChildAt(m,0),n.addChildAt(d,0),this.addEventListener(c.SUBGROUP_TRIGGER,this._parent,"onSubGroupTrigger"),d.addEventListener(l.MOUSE_DOWN,this._onHeadMouseDown.bind(this)),this._updateAppearance()}this.hasMaxHeight()&&this.addScrollWrap(),this._parent.addEventListener(c.SUBGROUP_ENABLE,this,"onEnable"),this._parent.addEventListener(c.SUBGROUP_DISABLE,this,"onDisable"),this._parent.addEventListener(u.PANEL_MOVE_END,this,"onPanelMoveEnd"),this._parent.addEventListener(c.GROUP_SIZE_CHANGE,this,"onGroupSizeChange"),this._parent.addEventListener(u.PANEL_SIZE_CHANGE,this,"onPanelSizeChange"),this._parent.addEventListener(l.WINDOW_RESIZE,this,"onWindowResize"),this.addEventListener(c.GROUP_SIZE_UPDATE,this._parent,"onGroupSizeUpdate")}var r=n("./node_modules/controlkit/lib/group/AbstractGroup.js"),o=n("./node_modules/controlkit/lib/core/document/Node.js"),a=n("./node_modules/controlkit/lib/core/document/CSS.js"),s=n("./node_modules/controlkit/lib/core/event/Event.js"),l=n("./node_modules/controlkit/lib/core/document/DocumentEvent.js"),u=n("./node_modules/controlkit/lib/group/PanelEvent.js"),c=n("./node_modules/controlkit/lib/group/GroupEvent.js"),h=n("./node_modules/controlkit/lib/core/ComponentEvent.js");i.prototype=Object.create(r.prototype),i.prototype.constructor=i,
//FIXME
i.prototype._onHeadMouseDown=function(){this._enabled=!this._enabled,this._onTrigger();var t=l.MOUSE_UP,e=this,n=function(){e._onTrigger(),document.removeEventListener(t,n)};document.addEventListener(t,n)},i.prototype._onTrigger=function(){this._updateAppearance(),this.dispatchEvent(new s(this,c.SUBGROUP_TRIGGER,null))},i.prototype._updateAppearance=function(){this.isDisabled()?(this._wrapNode.setHeight(0),this.hasLabel()&&(this._headNode.setStyleClass(a.HeadInactive),this._indiNode.setStyleClass(a.ArrowBSubMin))):(this.hasMaxHeight()?this._wrapNode.setHeight(this.getMaxHeight()):this._wrapNode.deleteStyleProperty("height"),this.hasLabel()&&(this._headNode.setStyleClass(a.Head),this._indiNode.setStyleClass(a.ArrowBSubMax)))},i.prototype.update=function(){this.hasMaxHeight()&&this._scrollBar.update()},i.prototype.onComponentSelectDrag=function(){this.preventSelectDrag()},i.prototype.onEnable=function(){this.isDisabled()||this.dispatchEvent(new s(this,h.ENABLE,null))},i.prototype.onDisable=function(){this.isDisabled()||this.dispatchEvent(new s(this,h.DISABLE,null))},
//bubble
i.prototype.onGroupSizeChange=function(){this.dispatchEvent(new s(this,c.GROUP_SIZE_CHANGE,null))},i.prototype.onGroupSizeUpdate=function(){this.dispatchEvent(new s(this,c.GROUP_SIZE_UPDATE,null))},i.prototype.onPanelMoveEnd=function(){this.dispatchEvent(new s(this,u.PANEL_MOVE_END,null))},i.prototype.onPanelSizeChange=function(){this._updateAppearance()},i.prototype.onWindowResize=function(t){this.dispatchEvent(t)},i.prototype.hasLabel=function(){return null!=this._headNode},i.prototype.addComponentNode=function(t){this._listNode.addChild(t)},i.prototype.usesLabels=function(){return this._useLabels},t.exports=i},/***/
"./node_modules/core-js/library/fn/object/assign.js":/***/
function(t,e,n){n("./node_modules/core-js/library/modules/es6.object.assign.js"),t.exports=n("./node_modules/core-js/library/modules/_core.js").Object.assign},/***/
"./node_modules/core-js/library/fn/promise.js":/***/
function(t,e,n){n("./node_modules/core-js/library/modules/es6.object.to-string.js"),n("./node_modules/core-js/library/modules/es6.string.iterator.js"),n("./node_modules/core-js/library/modules/web.dom.iterable.js"),n("./node_modules/core-js/library/modules/es6.promise.js"),t.exports=n("./node_modules/core-js/library/modules/_core.js").Promise},/***/
"./node_modules/core-js/library/modules/_a-function.js":/***/
function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},/***/
"./node_modules/core-js/library/modules/_add-to-unscopables.js":/***/
function(t,e){t.exports=function(){}},/***/
"./node_modules/core-js/library/modules/_an-instance.js":/***/
function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},/***/
"./node_modules/core-js/library/modules/_an-object.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_is-object.js");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},/***/
"./node_modules/core-js/library/modules/_array-includes.js":/***/
function(t,e,n){
// false -> Array#indexOf
// true  -> Array#includes
var i=n("./node_modules/core-js/library/modules/_to-iobject.js"),r=n("./node_modules/core-js/library/modules/_to-length.js"),o=n("./node_modules/core-js/library/modules/_to-index.js");t.exports=function(t){return function(e,n,a){var s,l=i(e),u=r(l.length),c=o(a,u);
// Array#includes uses SameValueZero equality algorithm
if(t&&n!=n){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===n)return t||c||0;return!t&&-1}}},/***/
"./node_modules/core-js/library/modules/_classof.js":/***/
function(t,e,n){
// getting tag from 19.1.3.6 Object.prototype.toString()
var i=n("./node_modules/core-js/library/modules/_cof.js"),r=n("./node_modules/core-js/library/modules/_wks.js")("toStringTag"),o="Arguments"==i(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),r))?n:o?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},/***/
"./node_modules/core-js/library/modules/_cof.js":/***/
function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},/***/
"./node_modules/core-js/library/modules/_core.js":/***/
function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},/***/
"./node_modules/core-js/library/modules/_ctx.js":/***/
function(t,e,n){
// optional / simple context binding
var i=n("./node_modules/core-js/library/modules/_a-function.js");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},/***/
"./node_modules/core-js/library/modules/_defined.js":/***/
function(t,e){
// 7.2.1 RequireObjectCoercible(argument)
t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},/***/
"./node_modules/core-js/library/modules/_descriptors.js":/***/
function(t,e,n){
// Thank's IE8 for his funny defineProperty
t.exports=!n("./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/***/
"./node_modules/core-js/library/modules/_dom-create.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_is-object.js"),r=n("./node_modules/core-js/library/modules/_global.js").document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},/***/
"./node_modules/core-js/library/modules/_enum-bug-keys.js":/***/
function(t,e){
// IE 8- don't enum bug keys
t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/***/
"./node_modules/core-js/library/modules/_export.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_global.js"),r=n("./node_modules/core-js/library/modules/_core.js"),o=n("./node_modules/core-js/library/modules/_ctx.js"),a=n("./node_modules/core-js/library/modules/_hide.js"),s=function(t,e,n){var l,u,c,h=t&s.F,d=t&s.G,p=t&s.S,f=t&s.P,m=t&s.B,g=t&s.W,v=d?r:r[e]||(r[e]={}),y=v.prototype,b=d?i:p?i[e]:(i[e]||{}).prototype;d&&(n=e);for(l in n)
// contains in native
(u=!h&&b&&void 0!==b[l])&&l in v||(
// export native or passed
c=u?b[l]:n[l],
// prevent global pollution for namespaces
v[l]=d&&"function"!=typeof b[l]?n[l]:m&&u?o(c,i):g&&b[l]==c?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(c):f&&"function"==typeof c?o(Function.call,c):c,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
f&&((v.virtual||(v.virtual={}))[l]=c,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
t&s.R&&y&&!y[l]&&a(y,l,c)))};
// type bitmap
s.F=1,// forced
s.G=2,// global
s.S=4,// static
s.P=8,// proto
s.B=16,// bind
s.W=32,// wrap
s.U=64,// safe
s.R=128,// real proto method for `library` 
t.exports=s},/***/
"./node_modules/core-js/library/modules/_fails.js":/***/
function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},/***/
"./node_modules/core-js/library/modules/_for-of.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_ctx.js"),r=n("./node_modules/core-js/library/modules/_iter-call.js"),o=n("./node_modules/core-js/library/modules/_is-array-iter.js"),a=n("./node_modules/core-js/library/modules/_an-object.js"),s=n("./node_modules/core-js/library/modules/_to-length.js"),l=n("./node_modules/core-js/library/modules/core.get-iterator-method.js"),u={},c={},e=t.exports=function(t,e,n,h,d){var p,f,m,g,v=d?function(){return t}:l(t),y=i(n,h,e?2:1),b=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");
// fast case for arrays with default iterator
if(o(v)){for(p=s(t.length);p>b;b++)if((g=e?y(a(f=t[b])[0],f[1]):y(t[b]))===u||g===c)return g}else for(m=v.call(t);!(f=m.next()).done;)if((g=r(m,y,f.value,e))===u||g===c)return g};e.BREAK=u,e.RETURN=c},/***/
"./node_modules/core-js/library/modules/_global.js":/***/
function(t,e){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/***/
"./node_modules/core-js/library/modules/_has.js":/***/
function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},/***/
"./node_modules/core-js/library/modules/_hide.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_object-dp.js"),r=n("./node_modules/core-js/library/modules/_property-desc.js");t.exports=n("./node_modules/core-js/library/modules/_descriptors.js")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},/***/
"./node_modules/core-js/library/modules/_html.js":/***/
function(t,e,n){t.exports=n("./node_modules/core-js/library/modules/_global.js").document&&document.documentElement},/***/
"./node_modules/core-js/library/modules/_ie8-dom-define.js":/***/
function(t,e,n){t.exports=!n("./node_modules/core-js/library/modules/_descriptors.js")&&!n("./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty(n("./node_modules/core-js/library/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},/***/
"./node_modules/core-js/library/modules/_invoke.js":/***/
function(t,e){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},/***/
"./node_modules/core-js/library/modules/_iobject.js":/***/
function(t,e,n){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var i=n("./node_modules/core-js/library/modules/_cof.js");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},/***/
"./node_modules/core-js/library/modules/_is-array-iter.js":/***/
function(t,e,n){
// check on default Array iterator
var i=n("./node_modules/core-js/library/modules/_iterators.js"),r=n("./node_modules/core-js/library/modules/_wks.js")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},/***/
"./node_modules/core-js/library/modules/_is-object.js":/***/
function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},/***/
"./node_modules/core-js/library/modules/_iter-call.js":/***/
function(t,e,n){
// call something on iterator step with safe closing on error
var i=n("./node_modules/core-js/library/modules/_an-object.js");t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},/***/
"./node_modules/core-js/library/modules/_iter-create.js":/***/
function(t,e,n){"use strict";var i=n("./node_modules/core-js/library/modules/_object-create.js"),r=n("./node_modules/core-js/library/modules/_property-desc.js"),o=n("./node_modules/core-js/library/modules/_set-to-string-tag.js"),a={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
n("./node_modules/core-js/library/modules/_hide.js")(a,n("./node_modules/core-js/library/modules/_wks.js")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(a,{next:r(1,n)}),o(t,e+" Iterator")}},/***/
"./node_modules/core-js/library/modules/_iter-define.js":/***/
function(t,e,n){"use strict";var i=n("./node_modules/core-js/library/modules/_library.js"),r=n("./node_modules/core-js/library/modules/_export.js"),o=n("./node_modules/core-js/library/modules/_redefine.js"),a=n("./node_modules/core-js/library/modules/_hide.js"),s=n("./node_modules/core-js/library/modules/_has.js"),l=n("./node_modules/core-js/library/modules/_iterators.js"),u=n("./node_modules/core-js/library/modules/_iter-create.js"),c=n("./node_modules/core-js/library/modules/_set-to-string-tag.js"),h=n("./node_modules/core-js/library/modules/_object-gpo.js"),d=n("./node_modules/core-js/library/modules/_wks.js")("iterator"),p=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,n,m,g,v,y){u(n,e,m);var b,_,x,A=function(t){if(!p&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==g,M=!1,E=t.prototype,T=E[d]||E["@@iterator"]||g&&E[g],C=T||A(g),P=g?S?A("entries"):C:void 0,L="Array"==e?E.entries||T:T;if(
// Fix native
L&&(x=h(L.call(new t)))!==Object.prototype&&(
// Set @@toStringTag to native iterators
c(x,w,!0),
// fix for some old engines
i||s(x,d)||a(x,d,f)),
// fix Array#{values, @@iterator}.name in V8 / FF
S&&T&&"values"!==T.name&&(M=!0,C=function(){return T.call(this)}),
// Define iterator
i&&!y||!p&&!M&&E[d]||a(E,d,C),
// Plug for library
l[e]=C,l[w]=f,g)if(b={values:S?C:A("values"),keys:v?C:A("keys"),entries:P},y)for(_ in b)_ in E||o(E,_,b[_]);else r(r.P+r.F*(p||M),e,b);return b}},/***/
"./node_modules/core-js/library/modules/_iter-detect.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_wks.js")("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],a=o[i]();a.next=function(){return{done:n=!0}},o[i]=function(){return a},t(o)}catch(t){}return n}},/***/
"./node_modules/core-js/library/modules/_iter-step.js":/***/
function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},/***/
"./node_modules/core-js/library/modules/_iterators.js":/***/
function(t,e){t.exports={}},/***/
"./node_modules/core-js/library/modules/_library.js":/***/
function(t,e){t.exports=!0},/***/
"./node_modules/core-js/library/modules/_microtask.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_global.js"),r=n("./node_modules/core-js/library/modules/_task.js").set,o=i.MutationObserver||i.WebKitMutationObserver,a=i.process,s=i.Promise,l="process"==n("./node_modules/core-js/library/modules/_cof.js")(a);t.exports=function(){var t,e,n,u=function(){var i,r;for(l&&(i=a.domain)&&i.exit();t;){r=t.fn,t=t.next;try{r()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};
// Node.js
if(l)n=function(){a.nextTick(u)};else if(o){var c=!0,h=document.createTextNode("");new o(u).observe(h,{characterData:!0}),// eslint-disable-line no-new
n=function(){h.data=c=!c}}else if(s&&s.resolve){var d=s.resolve();n=function(){d.then(u)}}else n=function(){
// strange IE + webpack dev server bug - use .call(global)
r.call(i,u)};return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},/***/
"./node_modules/core-js/library/modules/_object-assign.js":/***/
function(t,e,n){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var i=n("./node_modules/core-js/library/modules/_object-keys.js"),r=n("./node_modules/core-js/library/modules/_object-gops.js"),o=n("./node_modules/core-js/library/modules/_object-pie.js"),a=n("./node_modules/core-js/library/modules/_to-object.js"),s=n("./node_modules/core-js/library/modules/_iobject.js"),l=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
t.exports=!l||n("./node_modules/core-js/library/modules/_fails.js")(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=i})?function(t,e){for(// eslint-disable-line no-unused-vars
var n=a(t),l=arguments.length,u=1,c=r.f,h=o.f;l>u;)for(var d,p=s(arguments[u++]),f=c?i(p).concat(c(p)):i(p),m=f.length,g=0;m>g;)h.call(p,d=f[g++])&&(n[d]=p[d]);return n}:l},/***/
"./node_modules/core-js/library/modules/_object-create.js":/***/
function(t,e,n){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var i=n("./node_modules/core-js/library/modules/_an-object.js"),r=n("./node_modules/core-js/library/modules/_object-dps.js"),o=n("./node_modules/core-js/library/modules/_enum-bug-keys.js"),a=n("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),s=function(){},l=function(){
// Thrash, waste and sodomy: IE GC bug
var t,e=n("./node_modules/core-js/library/modules/_dom-create.js")("iframe"),i=o.length;for(e.style.display="none",n("./node_modules/core-js/library/modules/_html.js").appendChild(e),e.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;i--;)delete l.prototype[o[i]];return l()};t.exports=Object.create||function(t,e){var n;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==t?(s.prototype=i(t),n=new s,s.prototype=null,n[a]=t):n=l(),void 0===e?n:r(n,e)}},/***/
"./node_modules/core-js/library/modules/_object-dp.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_an-object.js"),r=n("./node_modules/core-js/library/modules/_ie8-dom-define.js"),o=n("./node_modules/core-js/library/modules/_to-primitive.js"),a=Object.defineProperty;e.f=n("./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},/***/
"./node_modules/core-js/library/modules/_object-dps.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_object-dp.js"),r=n("./node_modules/core-js/library/modules/_an-object.js"),o=n("./node_modules/core-js/library/modules/_object-keys.js");t.exports=n("./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperties:function(t,e){r(t);for(var n,a=o(e),s=a.length,l=0;s>l;)i.f(t,n=a[l++],e[n]);return t}},/***/
"./node_modules/core-js/library/modules/_object-gops.js":/***/
function(t,e){e.f=Object.getOwnPropertySymbols},/***/
"./node_modules/core-js/library/modules/_object-gpo.js":/***/
function(t,e,n){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var i=n("./node_modules/core-js/library/modules/_has.js"),r=n("./node_modules/core-js/library/modules/_to-object.js"),o=n("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},/***/
"./node_modules/core-js/library/modules/_object-keys-internal.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_has.js"),r=n("./node_modules/core-js/library/modules/_to-iobject.js"),o=n("./node_modules/core-js/library/modules/_array-includes.js")(!1),a=n("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");t.exports=function(t,e){var n,s=r(t),l=0,u=[];for(n in s)n!=a&&i(s,n)&&u.push(n);
// Don't enum bug & hidden keys
for(;e.length>l;)i(s,n=e[l++])&&(~o(u,n)||u.push(n));return u}},/***/
"./node_modules/core-js/library/modules/_object-keys.js":/***/
function(t,e,n){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var i=n("./node_modules/core-js/library/modules/_object-keys-internal.js"),r=n("./node_modules/core-js/library/modules/_enum-bug-keys.js");t.exports=Object.keys||function(t){return i(t,r)}},/***/
"./node_modules/core-js/library/modules/_object-pie.js":/***/
function(t,e){e.f={}.propertyIsEnumerable},/***/
"./node_modules/core-js/library/modules/_property-desc.js":/***/
function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},/***/
"./node_modules/core-js/library/modules/_redefine-all.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_hide.js");t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:i(t,r,e[r]);return t}},/***/
"./node_modules/core-js/library/modules/_redefine.js":/***/
function(t,e,n){t.exports=n("./node_modules/core-js/library/modules/_hide.js")},/***/
"./node_modules/core-js/library/modules/_set-species.js":/***/
function(t,e,n){"use strict";var i=n("./node_modules/core-js/library/modules/_global.js"),r=n("./node_modules/core-js/library/modules/_core.js"),o=n("./node_modules/core-js/library/modules/_object-dp.js"),a=n("./node_modules/core-js/library/modules/_descriptors.js"),s=n("./node_modules/core-js/library/modules/_wks.js")("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:i[t];a&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},/***/
"./node_modules/core-js/library/modules/_set-to-string-tag.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_object-dp.js").f,r=n("./node_modules/core-js/library/modules/_has.js"),o=n("./node_modules/core-js/library/modules/_wks.js")("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},/***/
"./node_modules/core-js/library/modules/_shared-key.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_shared.js")("keys"),r=n("./node_modules/core-js/library/modules/_uid.js");t.exports=function(t){return i[t]||(i[t]=r(t))}},/***/
"./node_modules/core-js/library/modules/_shared.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_global.js"),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},/***/
"./node_modules/core-js/library/modules/_species-constructor.js":/***/
function(t,e,n){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var i=n("./node_modules/core-js/library/modules/_an-object.js"),r=n("./node_modules/core-js/library/modules/_a-function.js"),o=n("./node_modules/core-js/library/modules/_wks.js")("species");t.exports=function(t,e){var n,a=i(t).constructor;return void 0===a||void 0==(n=i(a)[o])?e:r(n)}},/***/
"./node_modules/core-js/library/modules/_string-at.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_to-integer.js"),r=n("./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
t.exports=function(t){return function(e,n){var o,a,s=String(r(e)),l=i(n),u=s.length;return l<0||l>=u?t?"":void 0:(o=s.charCodeAt(l),o<55296||o>56319||l+1===u||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):o:t?s.slice(l,l+2):a-56320+(o-55296<<10)+65536)}}},/***/
"./node_modules/core-js/library/modules/_task.js":/***/
function(t,e,n){var i,r,o,a=n("./node_modules/core-js/library/modules/_ctx.js"),s=n("./node_modules/core-js/library/modules/_invoke.js"),l=n("./node_modules/core-js/library/modules/_html.js"),u=n("./node_modules/core-js/library/modules/_dom-create.js"),c=n("./node_modules/core-js/library/modules/_global.js"),h=c.process,d=c.setImmediate,p=c.clearImmediate,f=c.MessageChannel,m=0,g={},v=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},y=function(t){v.call(t.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++m]=function(){s("function"==typeof t?t:Function(t),e)},i(m),m},p=function(t){delete g[t]},
// Node.js 0.8-
"process"==n("./node_modules/core-js/library/modules/_cof.js")(h)?i=function(t){h.nextTick(a(v,t,1))}:f?(r=new f,o=r.port2,r.port1.onmessage=y,i=a(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(i=function(t){c.postMessage(t+"","*")},c.addEventListener("message",y,!1)):i="onreadystatechange"in u("script")?function(t){l.appendChild(u("script")).onreadystatechange=function(){l.removeChild(this),v.call(t)}}:function(t){setTimeout(a(v,t,1),0)}),t.exports={set:d,clear:p}},/***/
"./node_modules/core-js/library/modules/_to-index.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_to-integer.js"),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},/***/
"./node_modules/core-js/library/modules/_to-integer.js":/***/
function(t,e){
// 7.1.4 ToInteger
var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},/***/
"./node_modules/core-js/library/modules/_to-iobject.js":/***/
function(t,e,n){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var i=n("./node_modules/core-js/library/modules/_iobject.js"),r=n("./node_modules/core-js/library/modules/_defined.js");t.exports=function(t){return i(r(t))}},/***/
"./node_modules/core-js/library/modules/_to-length.js":/***/
function(t,e,n){
// 7.1.15 ToLength
var i=n("./node_modules/core-js/library/modules/_to-integer.js"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},/***/
"./node_modules/core-js/library/modules/_to-object.js":/***/
function(t,e,n){
// 7.1.13 ToObject(argument)
var i=n("./node_modules/core-js/library/modules/_defined.js");t.exports=function(t){return Object(i(t))}},/***/
"./node_modules/core-js/library/modules/_to-primitive.js":/***/
function(t,e,n){
// 7.1.1 ToPrimitive(input [, PreferredType])
var i=n("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},/***/
"./node_modules/core-js/library/modules/_uid.js":/***/
function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},/***/
"./node_modules/core-js/library/modules/_wks.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_shared.js")("wks"),r=n("./node_modules/core-js/library/modules/_uid.js"),o=n("./node_modules/core-js/library/modules/_global.js").Symbol,a="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=a&&o[t]||(a?o:r)("Symbol."+t))}).store=i},/***/
"./node_modules/core-js/library/modules/core.get-iterator-method.js":/***/
function(t,e,n){var i=n("./node_modules/core-js/library/modules/_classof.js"),r=n("./node_modules/core-js/library/modules/_wks.js")("iterator"),o=n("./node_modules/core-js/library/modules/_iterators.js");t.exports=n("./node_modules/core-js/library/modules/_core.js").getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},/***/
"./node_modules/core-js/library/modules/es6.array.iterator.js":/***/
function(t,e,n){"use strict";var i=n("./node_modules/core-js/library/modules/_add-to-unscopables.js"),r=n("./node_modules/core-js/library/modules/_iter-step.js"),o=n("./node_modules/core-js/library/modules/_iterators.js"),a=n("./node_modules/core-js/library/modules/_to-iobject.js");
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
t.exports=n("./node_modules/core-js/library/modules/_iter-define.js")(Array,"Array",function(t,e){this._t=a(t),// target
this._i=0,// next index
this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
o.Arguments=o.Array,i("keys"),i("values"),i("entries")},/***/
"./node_modules/core-js/library/modules/es6.object.assign.js":/***/
function(t,e,n){
// 19.1.3.1 Object.assign(target, source)
var i=n("./node_modules/core-js/library/modules/_export.js");i(i.S+i.F,"Object",{assign:n("./node_modules/core-js/library/modules/_object-assign.js")})},/***/
"./node_modules/core-js/library/modules/es6.object.to-string.js":/***/
function(t,e){},/***/
"./node_modules/core-js/library/modules/es6.promise.js":/***/
function(t,e,n){"use strict";var i,r,o,a=n("./node_modules/core-js/library/modules/_library.js"),s=n("./node_modules/core-js/library/modules/_global.js"),l=n("./node_modules/core-js/library/modules/_ctx.js"),u=n("./node_modules/core-js/library/modules/_classof.js"),c=n("./node_modules/core-js/library/modules/_export.js"),h=n("./node_modules/core-js/library/modules/_is-object.js"),d=n("./node_modules/core-js/library/modules/_a-function.js"),p=n("./node_modules/core-js/library/modules/_an-instance.js"),f=n("./node_modules/core-js/library/modules/_for-of.js"),m=n("./node_modules/core-js/library/modules/_species-constructor.js"),g=n("./node_modules/core-js/library/modules/_task.js").set,v=n("./node_modules/core-js/library/modules/_microtask.js")(),y=s.TypeError,b=s.process,_=s.Promise,b=s.process,x="process"==u(b),A=function(){},w=!!function(){try{
// correct subclassing with @@species support
var t=_.resolve(1),e=(t.constructor={})[n("./node_modules/core-js/library/modules/_wks.js")("species")]=function(t){t(A,A)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(x||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof e}catch(t){}}(),S=function(t,e){
// with library wrapper special case
return t===e||t===_&&e===o},M=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},E=function(t){return S(_,t)?new T(t):new r(t)},T=r=function(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw y("Bad Promise constructor");e=t,n=i}),this.resolve=d(e),this.reject=d(n)},C=function(t){try{t()}catch(t){return{error:t}}},P=function(t,e){if(!t._n){t._n=!0;var n=t._c;v(function(){for(var i=t._v,r=1==t._s,o=0;n.length>o;)!function(e){var n,o,a=r?e.ok:e.fail,s=e.resolve,l=e.reject,u=e.domain;try{a?(r||(2==t._h&&I(t),t._h=1),!0===a?n=i:(u&&u.enter(),n=a(i),u&&u.exit()),n===e.promise?l(y("Promise-chain cycle")):(o=M(n))?o.call(n,s,l):s(n)):l(i)}catch(t){l(t)}}(n[o++]);// variable length - can't use forEach
t._c=[],t._n=!1,e&&!t._h&&L(t)})}},L=function(t){g.call(s,function(){var e,n,i,r=t._v;if(N(t)&&(e=C(function(){x?b.emit("unhandledRejection",r,t):(n=s.onunhandledrejection)?n({promise:t,reason:r}):(i=s.console)&&i.error&&i.error("Unhandled promise rejection",r)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t._h=x||N(t)?2:1),t._a=void 0,e)throw e.error})},N=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,i=0;n.length>i;)if(e=n[i++],e.fail||!N(e.promise))return!1;return!0},I=function(t){g.call(s,function(){var e;x?b.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},O=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,// unwrap
e._v=t,e._s=2,e._a||(e._a=e._c.slice()),P(e,!0))},R=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;// unwrap
try{if(n===t)throw y("Promise can't be resolved itself");(e=M(t))?v(function(){var i={_w:n,_d:!1};// wrap
try{e.call(t,l(R,i,1),l(O,i,1))}catch(t){O.call(i,t)}}):(n._v=t,n._s=1,P(n,!1))}catch(t){O.call({_w:n,_d:!1},t)}}};
// constructor polyfill
w||(
// 25.4.3.1 Promise(executor)
_=function(t){p(this,_,"Promise","_h"),d(t),i.call(this);try{t(l(R,this,1),l(O,this,1))}catch(t){O.call(this,t)}},i=function(t){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},i.prototype=n("./node_modules/core-js/library/modules/_redefine-all.js")(_.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(t,e){var n=E(m(this,_));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=x?b.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&P(this,!1),n.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(t){return this.then(void 0,t)}}),T=function(){var t=new i;this.promise=t,this.resolve=l(R,t,1),this.reject=l(O,t,1)}),c(c.G+c.W+c.F*!w,{Promise:_}),n("./node_modules/core-js/library/modules/_set-to-string-tag.js")(_,"Promise"),n("./node_modules/core-js/library/modules/_set-species.js")("Promise"),o=n("./node_modules/core-js/library/modules/_core.js").Promise,
// statics
c(c.S+c.F*!w,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),c(c.S+c.F*(a||!w),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(t){
// instanceof instead of internal slot check because we should fix it without replacement native Promise core
if(t instanceof _&&S(t.constructor,this))return t;var e=E(this);return(0,e.resolve)(t),e.promise}}),c(c.S+c.F*!(w&&n("./node_modules/core-js/library/modules/_iter-detect.js")(function(t){_.all(t).catch(A)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(t){var e=this,n=E(e),i=n.resolve,r=n.reject,o=C(function(){var n=[],o=0,a=1;f(t,!1,function(t){var s=o++,l=!1;n.push(void 0),a++,e.resolve(t).then(function(t){l||(l=!0,n[s]=t,--a||i(n))},r)}),--a||i(n)});return o&&r(o.error),n.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(t){var e=this,n=E(e),i=n.reject,r=C(function(){f(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return r&&i(r.error),n.promise}})},/***/
"./node_modules/core-js/library/modules/es6.string.iterator.js":/***/
function(t,e,n){"use strict";var i=n("./node_modules/core-js/library/modules/_string-at.js")(!0);
// 21.1.3.27 String.prototype[@@iterator]()
n("./node_modules/core-js/library/modules/_iter-define.js")(String,"String",function(t){this._t=String(t),// target
this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},/***/
"./node_modules/core-js/library/modules/web.dom.iterable.js":/***/
function(t,e,n){n("./node_modules/core-js/library/modules/es6.array.iterator.js");for(var i=n("./node_modules/core-js/library/modules/_global.js"),r=n("./node_modules/core-js/library/modules/_hide.js"),o=n("./node_modules/core-js/library/modules/_iterators.js"),a=n("./node_modules/core-js/library/modules/_wks.js")("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],l=0;l<5;l++){var u=s[l],c=i[u],h=c&&c.prototype;h&&!h[a]&&r(h,a,u),o[u]=o.Array}},/***/
"./node_modules/raf/index.js":/***/
function(t,e){"use-strict";var n=function(){function t(t,e){var n=l,i=1e3/t,r=-1;return function(){(r=-1===r?i:l-n)>=i&&(e(r),n=l-r%i)}}function e(){l=Date.now();for(var t=l-u,n=0;n<a.length;n++)a[n](t);u=l,s=window.requestAnimationFrame(e)}function n(){s||(u=Date.now(),e())}function i(){s&&(window.cancelAnimationFrame(s),s=null)}function r(t){-1===a.indexOf(t)&&(a.push(t),n())}function o(t){var e=a.indexOf(t);-1!==e&&(a.splice(e,1),0===a.length&&i())}var a=[],s=null,l=Date.now(),u=l;return{start:n,stop:i,add:r,remove:o,fpsLimiter:t}}();t.exports=n},/***/
"./node_modules/stats.js/build/stats.min.js":/***/
function(t,e,n){
// stats.js - http://github.com/mrdoob/stats.js
!function(e,n){t.exports=n()}(0,function(){var t=function(){function e(t){return r.appendChild(t.dom),t}function n(t){for(var e=0;e<r.children.length;e++)r.children[e].style.display=e===t?"block":"none";i=t}var i=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(t){t.preventDefault(),n(++i%r.children.length)},!1);var o=(performance||Date).now(),a=o,s=0,l=e(new t.Panel("FPS","#0ff","#002")),u=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new t.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:r,addPanel:e,showPanel:n,begin:function(){o=(performance||Date).now()},end:function(){s++;var t=(performance||Date).now();if(u.update(t-o,200),t>a+1e3&&(l.update(1e3*s/(t-a),100),a=t,s=0,c)){var e=performance.memory;c.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){o=this.end()},domElement:r,setMode:n}};return t.Panel=function(t,e,n){var i=1/0,r=0,o=Math.round,a=o(window.devicePixelRatio||1),s=80*a,l=48*a,u=3*a,c=2*a,h=3*a,d=15*a,p=74*a,f=30*a,m=document.createElement("canvas");m.width=s,m.height=l,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,s,l),g.fillStyle=e,g.fillText(t,u,c),g.fillRect(h,d,p,f),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,p,f),{dom:m,update:function(l,v){i=Math.min(i,l),r=Math.max(r,l),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,s,d),g.fillStyle=e,g.fillText(o(l)+" "+t+" ("+o(i)+"-"+o(r)+")",u,c),g.drawImage(m,h+a,d,p-a,f,h,d,p-a,f),g.fillRect(h+p-a,d,a,f),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+p-a,d,a,o((1-l/v)*f))}}},t})},/***/
"./node_modules/three-orbit-controls/index.js":/***/
function(t,e){t.exports=function(t){/**
	 * @author qiao / https://github.com/qiao
	 * @author mrdoob / http://mrdoob.com
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author erich666 / http://erichaines.com
	 */
// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe
function e(e,n){function i(){return 2*Math.PI/60/60*R.autoRotateSpeed}function r(){return Math.pow(.95,R.zoomSpeed)}function o(t){F.theta-=t}function a(t){F.phi-=t}function s(e){R.object instanceof t.PerspectiveCamera?z/=e:R.object instanceof t.OrthographicCamera?(R.object.zoom=Math.max(R.minZoom,Math.min(R.maxZoom,R.object.zoom*e)),R.object.updateProjectionMatrix(),X=!0):R.enableZoom=!1}function l(e){R.object instanceof t.PerspectiveCamera?z*=e:R.object instanceof t.OrthographicCamera?(R.object.zoom=Math.max(R.minZoom,Math.min(R.maxZoom,R.object.zoom/e)),R.object.updateProjectionMatrix(),X=!0):R.enableZoom=!1}
//
// event callbacks - update the object state
//
function u(t){
//console.log( 'handleMouseDownRotate' );
W.set(t.clientX,t.clientY)}function c(t){
//console.log( 'handleMouseDownDolly' );
J.set(t.clientX,t.clientY)}function h(t){
//console.log( 'handleMouseDownPan' );
Z.set(t.clientX,t.clientY)}function d(t){
//console.log( 'handleMouseMoveRotate' );
Y.set(t.clientX,t.clientY),K.subVectors(Y,W);var e=R.domElement===document?R.domElement.body:R.domElement;
// rotating across whole screen goes 360 degrees around
o(2*Math.PI*K.x/e.clientWidth*R.rotateSpeed),
// rotating up and down along whole screen attempts to go 360, but limited to 180
a(2*Math.PI*K.y/e.clientHeight*R.rotateSpeed),W.copy(Y),R.update()}function p(t){
//console.log( 'handleMouseMoveDolly' );
$.set(t.clientX,t.clientY),tt.subVectors($,J),tt.y>0?s(r()):tt.y<0&&l(r()),J.copy($),R.update()}function f(t){
//console.log( 'handleMouseMovePan' );
q.set(t.clientX,t.clientY),Q.subVectors(q,Z),it(Q.x,Q.y),Z.copy(q),R.update()}function m(t){}function g(t){
//console.log( 'handleMouseWheel' );
t.deltaY<0?l(r()):t.deltaY>0&&s(r()),R.update()}function v(t){
//console.log( 'handleKeyDown' );
switch(t.keyCode){case R.keys.UP:it(0,R.keyPanSpeed),R.update();break;case R.keys.BOTTOM:it(0,-R.keyPanSpeed),R.update();break;case R.keys.LEFT:it(R.keyPanSpeed,0),R.update();break;case R.keys.RIGHT:it(-R.keyPanSpeed,0),R.update()}}function y(t){
//console.log( 'handleTouchStartRotate' );
W.set(t.touches[0].pageX,t.touches[0].pageY)}function b(t){
//console.log( 'handleTouchStartDolly' );
var e=t.touches[0].pageX-t.touches[1].pageX,n=t.touches[0].pageY-t.touches[1].pageY,i=Math.sqrt(e*e+n*n);J.set(0,i)}function _(t){
//console.log( 'handleTouchStartPan' );
Z.set(t.touches[0].pageX,t.touches[0].pageY)}function x(t){
//console.log( 'handleTouchMoveRotate' );
Y.set(t.touches[0].pageX,t.touches[0].pageY),K.subVectors(Y,W);var e=R.domElement===document?R.domElement.body:R.domElement;
// rotating across whole screen goes 360 degrees around
o(2*Math.PI*K.x/e.clientWidth*R.rotateSpeed),
// rotating up and down along whole screen attempts to go 360, but limited to 180
a(2*Math.PI*K.y/e.clientHeight*R.rotateSpeed),W.copy(Y),R.update()}function A(t){
//console.log( 'handleTouchMoveDolly' );
var e=t.touches[0].pageX-t.touches[1].pageX,n=t.touches[0].pageY-t.touches[1].pageY,i=Math.sqrt(e*e+n*n);$.set(0,i),tt.subVectors($,J),tt.y>0?l(r()):tt.y<0&&s(r()),J.copy($),R.update()}function w(t){
//console.log( 'handleTouchMovePan' );
q.set(t.touches[0].pageX,t.touches[0].pageY),Q.subVectors(q,Z),it(Q.x,Q.y),Z.copy(q),R.update()}function S(t){}
//
// event handlers - FSM: listen for events and reset state
//
function M(t){if(!1!==R.enabled){if(t.preventDefault(),t.button===R.mouseButtons.ORBIT){if(!1===R.enableRotate)return;u(t),k=U.ROTATE}else if(t.button===R.mouseButtons.ZOOM){if(!1===R.enableZoom)return;c(t),k=U.DOLLY}else if(t.button===R.mouseButtons.PAN){if(!1===R.enablePan)return;h(t),k=U.PAN}k!==U.NONE&&(document.addEventListener("mousemove",E,!1),document.addEventListener("mouseup",T,!1),R.dispatchEvent(B))}}function E(t){if(!1!==R.enabled)if(t.preventDefault(),k===U.ROTATE){if(!1===R.enableRotate)return;d(t)}else if(k===U.DOLLY){if(!1===R.enableZoom)return;p(t)}else if(k===U.PAN){if(!1===R.enablePan)return;f(t)}}function T(t){!1!==R.enabled&&(m(t),document.removeEventListener("mousemove",E,!1),document.removeEventListener("mouseup",T,!1),R.dispatchEvent(j),k=U.NONE)}function C(t){!1===R.enabled||!1===R.enableZoom||k!==U.NONE&&k!==U.ROTATE||(t.preventDefault(),t.stopPropagation(),g(t),R.dispatchEvent(B),// not sure why these are here...
R.dispatchEvent(j))}function P(t){!1!==R.enabled&&!1!==R.enableKeys&&!1!==R.enablePan&&v(t)}function L(t){if(!1!==R.enabled){switch(t.touches.length){case 1:// one-fingered touch: rotate
if(!1===R.enableRotate)return;y(t),k=U.TOUCH_ROTATE;break;case 2:// two-fingered touch: dolly
if(!1===R.enableZoom)return;b(t),k=U.TOUCH_DOLLY;break;case 3:// three-fingered touch: pan
if(!1===R.enablePan)return;_(t),k=U.TOUCH_PAN;break;default:k=U.NONE}k!==U.NONE&&R.dispatchEvent(B)}}function N(t){if(!1!==R.enabled)switch(t.preventDefault(),t.stopPropagation(),t.touches.length){case 1:// one-fingered touch: rotate
if(!1===R.enableRotate)return;if(k!==U.TOUCH_ROTATE)return;// is this needed?...
x(t);break;case 2:// two-fingered touch: dolly
if(!1===R.enableZoom)return;if(k!==U.TOUCH_DOLLY)return;// is this needed?...
A(t);break;case 3:// three-fingered touch: pan
if(!1===R.enablePan)return;if(k!==U.TOUCH_PAN)return;// is this needed?...
w(t);break;default:k=U.NONE}}function I(t){!1!==R.enabled&&(S(t),R.dispatchEvent(j),k=U.NONE)}function O(t){t.preventDefault()}this.object=e,this.domElement=void 0!==n?n:document,
// Set to false to disable this control
this.enabled=!0,
// "target" sets the location of focus, where the object orbits around
this.target=new t.Vector3,
// How far you can dolly in and out ( PerspectiveCamera only )
this.minDistance=0,this.maxDistance=1/0,
// How far you can zoom in and out ( OrthographicCamera only )
this.minZoom=0,this.maxZoom=1/0,
// How far you can orbit vertically, upper and lower limits.
// Range is 0 to Math.PI radians.
this.minPolarAngle=0,// radians
this.maxPolarAngle=Math.PI,// radians
// How far you can orbit horizontally, upper and lower limits.
// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
this.minAzimuthAngle=-1/0,// radians
this.maxAzimuthAngle=1/0,// radians
// Set to true to enable damping (inertia)
// If damping is enabled, you must call controls.update() in your animation loop
this.enableDamping=!1,this.dampingFactor=.25,
// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
// Set to false to disable zooming
this.enableZoom=!0,this.zoomSpeed=1,
// Set to false to disable rotating
this.enableRotate=!0,this.rotateSpeed=1,
// Set to false to disable panning
this.enablePan=!0,this.keyPanSpeed=7,// pixels moved per arrow key push
// Set to true to automatically rotate around the target
// If auto-rotate is enabled, you must call controls.update() in your animation loop
this.autoRotate=!1,this.autoRotateSpeed=2,// 30 seconds per round when fps is 60
// Set to false to disable use of the keys
this.enableKeys=!0,
// The four arrow keys
this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},
// Mouse buttons
this.mouseButtons={ORBIT:t.MOUSE.LEFT,ZOOM:t.MOUSE.MIDDLE,PAN:t.MOUSE.RIGHT},
// for reset
this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,
//
// public methods
//
this.getPolarAngle=function(){return G.phi},this.getAzimuthalAngle=function(){return G.theta},this.reset=function(){R.target.copy(R.target0),R.object.position.copy(R.position0),R.object.zoom=R.zoom0,R.object.updateProjectionMatrix(),R.dispatchEvent(D),R.update(),k=U.NONE},
// this method is exposed, but perhaps it would be better if we can make it private...
this.update=function(){var n=new t.Vector3,r=(new t.Quaternion).setFromUnitVectors(e.up,new t.Vector3(0,1,0)),a=r.clone().inverse(),s=new t.Vector3,l=new t.Quaternion;return function(){var t=R.object.position;
// update condition is:
// min(camera displacement, camera rotation in radians)^2 > EPS
// using small-angle approximation cos(x/2) = 1 - x^2 / 8
// rotate offset to "y-axis-is-up" space
// angle from z-axis around y-axis
// restrict theta to be between desired limits
// restrict phi to be between desired limits
// restrict radius to be between desired limits
// move target to panned location
// rotate offset back to "camera-up-vector-is-up" space
// update condition is:
// min(camera displacement, camera rotation in radians)^2 > EPS
// using small-angle approximation cos(x/2) = 1 - x^2 / 8
return n.copy(t).sub(R.target),n.applyQuaternion(r),G.setFromVector3(n),R.autoRotate&&k===U.NONE&&o(i()),G.theta+=F.theta,G.phi+=F.phi,G.theta=Math.max(R.minAzimuthAngle,Math.min(R.maxAzimuthAngle,G.theta)),G.phi=Math.max(R.minPolarAngle,Math.min(R.maxPolarAngle,G.phi)),G.makeSafe(),G.radius*=z,G.radius=Math.max(R.minDistance,Math.min(R.maxDistance,G.radius)),R.target.add(H),n.setFromSpherical(G),n.applyQuaternion(a),t.copy(R.target).add(n),R.object.lookAt(R.target),!0===R.enableDamping?(F.theta*=1-R.dampingFactor,F.phi*=1-R.dampingFactor):F.set(0,0,0),z=1,H.set(0,0,0),!!(X||s.distanceToSquared(R.object.position)>V||8*(1-l.dot(R.object.quaternion))>V)&&(R.dispatchEvent(D),s.copy(R.object.position),l.copy(R.object.quaternion),X=!1,!0)}}(),this.dispose=function(){R.domElement.removeEventListener("contextmenu",O,!1),R.domElement.removeEventListener("mousedown",M,!1),R.domElement.removeEventListener("wheel",C,!1),R.domElement.removeEventListener("touchstart",L,!1),R.domElement.removeEventListener("touchend",I,!1),R.domElement.removeEventListener("touchmove",N,!1),document.removeEventListener("mousemove",E,!1),document.removeEventListener("mouseup",T,!1),window.removeEventListener("keydown",P,!1)};
//
// internals
//
var R=this,D={type:"change"},B={type:"start"},j={type:"end"},U={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},k=U.NONE,V=1e-6,G=new t.Spherical,F=new t.Spherical,z=1,H=new t.Vector3,X=!1,W=new t.Vector2,Y=new t.Vector2,K=new t.Vector2,Z=new t.Vector2,q=new t.Vector2,Q=new t.Vector2,J=new t.Vector2,$=new t.Vector2,tt=new t.Vector2,et=function(){var e=new t.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),// get X column of objectMatrix
e.multiplyScalar(-t),H.add(e)}}(),nt=function(){var e=new t.Vector3;return function(t,n){e.setFromMatrixColumn(n,1),// get Y column of objectMatrix
e.multiplyScalar(t),H.add(e)}}(),it=function(){var e=new t.Vector3;return function(n,i){var r=R.domElement===document?R.domElement.body:R.domElement;if(R.object instanceof t.PerspectiveCamera){
// perspective
var o=R.object.position;e.copy(o).sub(R.target);var a=e.length();
// half of the fov is center to top of screen
a*=Math.tan(R.object.fov/2*Math.PI/180),
// we actually don't use screenWidth, since perspective camera is fixed to screen height
et(2*n*a/r.clientHeight,R.object.matrix),nt(2*i*a/r.clientHeight,R.object.matrix)}else R.object instanceof t.OrthographicCamera?(
// orthographic
et(n*(R.object.right-R.object.left)/R.object.zoom/r.clientWidth,R.object.matrix),nt(i*(R.object.top-R.object.bottom)/R.object.zoom/r.clientHeight,R.object.matrix)):R.enablePan=!1}}();
//
R.domElement.addEventListener("contextmenu",O,!1),R.domElement.addEventListener("mousedown",M,!1),R.domElement.addEventListener("wheel",C,!1),R.domElement.addEventListener("touchstart",L,!1),R.domElement.addEventListener("touchend",I,!1),R.domElement.addEventListener("touchmove",N,!1),window.addEventListener("keydown",P,!1),
// force an update at start
this.update()}return e.prototype=Object.create(t.EventDispatcher.prototype),e.prototype.constructor=e,Object.defineProperties(e.prototype,{center:{get:function(){return this.target}},
// backward compatibility
noZoom:{get:function(){return!this.enableZoom},set:function(t){this.enableZoom=!t}},noRotate:{get:function(){return!this.enableRotate},set:function(t){this.enableRotate=!t}},noPan:{get:function(){return!this.enablePan},set:function(t){this.enablePan=!t}},noKeys:{get:function(){return!this.enableKeys},set:function(t){this.enableKeys=!t}},staticMoving:{get:function(){return!this.enableDamping},set:function(t){this.enableDamping=!t}},dynamicDampingFactor:{get:function(){return this.dampingFactor},set:function(t){this.dampingFactor=t}}}),e}},/***/
"./node_modules/three/build/three.module.js":/***/
function(t,e,n){"use strict";/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */
function i(){}/**
 * @author mrdoob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 * @author egraether / http://egraether.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */
function r(t,e){this.x=t||0,this.y=e||0}function o(t,e,n,i,a,s,l,u,c,h){Object.defineProperty(this,"id",{value:ws++}),this.uuid=As.generateUUID(),this.name="",this.image=void 0!==t?t:o.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=void 0!==e?e:o.DEFAULT_MAPPING,this.wrapS=void 0!==n?n:va,this.wrapT=void 0!==i?i:va,this.magFilter=void 0!==a?a:Aa,this.minFilter=void 0!==s?s:Sa,this.anisotropy=void 0!==c?c:1,this.format=void 0!==l?l:ka,this.type=void 0!==u?u:Ma,this.offset=new r(0,0),this.repeat=new r(1,1),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
// Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
//
// Also changing the encoding after already used by a Material will not automatically make the Material
// update.  You need to explicitly call Material.needsUpdate to trigger it to recompile.
this.encoding=void 0!==h?h:ds,this.version=0,this.onUpdate=null}/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function a(t,e,n,i){this.x=t||0,this.y=e||0,this.z=n||0,this.w=void 0!==i?i:1}/**
 * @author szimek / https://github.com/szimek/
 * @author alteredq / http://alteredqualia.com/
 * @author Marius Kintel / https://github.com/kintel
 */
/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/
function s(t,e,n){this.uuid=As.generateUUID(),this.width=t,this.height=e,this.scissor=new a(0,0,t,e),this.scissorTest=!1,this.viewport=new a(0,0,t,e),n=n||{},void 0===n.minFilter&&(n.minFilter=Aa),this.texture=new o(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.depthBuffer=void 0===n.depthBuffer||n.depthBuffer,this.stencilBuffer=void 0===n.stencilBuffer||n.stencilBuffer,this.depthTexture=void 0!==n.depthTexture?n.depthTexture:null}/**
 * @author alteredq / http://alteredqualia.com
 */
function l(t,e,n){s.call(this,t,e,n),this.activeCubeFace=0,// PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
this.activeMipMapLevel=0}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */
function u(t,e,n,i){this._x=t||0,this._y=e||0,this._z=n||0,this._w=void 0!==i?i:1}/**
 * @author mrdoob / http://mrdoob.com/
 * @author *kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function c(t,e,n){this.x=t||0,this.y=e||0,this.z=n||0}/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author timknip / http://www.floorplanner.com/
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */
function h(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length}/**
 * @author alteredq / http://alteredqualia.com/
 */
function d(t,e,n,i,r,a,s,l,u,c,h,d){o.call(this,null,a,s,l,u,c,i,r,h,d),this.image={data:t,width:e,height:n},this.magFilter=void 0!==u?u:ba,this.minFilter=void 0!==c?c:ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}/**
 * @author mrdoob / http://mrdoob.com/
 */
function p(t,e,n,i,r,a,s,l,u,c){t=void 0!==t?t:[],e=void 0!==e?e:ua,o.call(this,t,e,n,i,r,a,s,l,u,c),this.flipY=!1}
// --- Base for inner nodes (including the root) ---
function f(){this.seq=[],this.map={}}
// Flattening for arrays of vectors and matrices
function m(t,e,n){var i=t[0];if(i<=0||i>0)return t;
// unoptimized: ! isNaN( firstElem )
// see http://jacksondunstan.com/articles/983
var r=e*n,o=Es[r];if(void 0===o&&(o=new Float32Array(r),Es[r]=o),0!==e){i.toArray(o,0);for(var a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}
// Texture unit allocation
function g(t,e){var n=Ts[e];void 0===n&&(n=new Int32Array(e),Ts[e]=n);for(var i=0;i!==e;++i)n[i]=t.allocTextureUnit();return n}
// --- Setters ---
// Note: Defining these methods externally, because they come in a bunch
// and this way their names minify.
// Single scalar
function v(t,e){t.uniform1f(this.addr,e)}function y(t,e){t.uniform1i(this.addr,e)}
// Single float vector (from flat array or THREE.VectorN)
function b(t,e){void 0===e.x?t.uniform2fv(this.addr,e):t.uniform2f(this.addr,e.x,e.y)}function _(t,e){void 0!==e.x?t.uniform3f(this.addr,e.x,e.y,e.z):void 0!==e.r?t.uniform3f(this.addr,e.r,e.g,e.b):t.uniform3fv(this.addr,e)}function x(t,e){void 0===e.x?t.uniform4fv(this.addr,e):t.uniform4f(this.addr,e.x,e.y,e.z,e.w)}
// Single matrix (from flat array or MatrixN)
function A(t,e){t.uniformMatrix2fv(this.addr,!1,e.elements||e)}function w(t,e){void 0===e.elements?t.uniformMatrix3fv(this.addr,!1,e):(Ps.set(e.elements),t.uniformMatrix3fv(this.addr,!1,Ps))}function S(t,e){void 0===e.elements?t.uniformMatrix4fv(this.addr,!1,e):(Cs.set(e.elements),t.uniformMatrix4fv(this.addr,!1,Cs))}
// Single texture (2D / Cube)
function M(t,e,n){var i=n.allocTextureUnit();t.uniform1i(this.addr,i),n.setTexture2D(e||Ss,i)}function E(t,e,n){var i=n.allocTextureUnit();t.uniform1i(this.addr,i),n.setTextureCube(e||Ms,i)}
// Integer / Boolean vectors or arrays thereof (always flat arrays)
function T(t,e){t.uniform2iv(this.addr,e)}function C(t,e){t.uniform3iv(this.addr,e)}function P(t,e){t.uniform4iv(this.addr,e)}
// Helper to pick the right setter for the singular case
function L(t){switch(t){case 5126:return v;// FLOAT
case 35664:return b;// _VEC2
case 35665:return _;// _VEC3
case 35666:return x;// _VEC4
case 35674:return A;// _MAT2
case 35675:return w;// _MAT3
case 35676:return S;// _MAT4
case 35678:return M;// SAMPLER_2D
case 35680:return E;// SAMPLER_CUBE
case 5124:case 35670:return y;// INT, BOOL
case 35667:case 35671:return T;// _VEC2
case 35668:case 35672:return C;// _VEC3
case 35669:case 35673:return P}}
// Array of scalars
function N(t,e){t.uniform1fv(this.addr,e)}function I(t,e){t.uniform1iv(this.addr,e)}
// Array of vectors (flat or from THREE classes)
function O(t,e){t.uniform2fv(this.addr,m(e,this.size,2))}function R(t,e){t.uniform3fv(this.addr,m(e,this.size,3))}function D(t,e){t.uniform4fv(this.addr,m(e,this.size,4))}
// Array of matrices (flat or from THREE clases)
function B(t,e){t.uniformMatrix2fv(this.addr,!1,m(e,this.size,4))}function j(t,e){t.uniformMatrix3fv(this.addr,!1,m(e,this.size,9))}function U(t,e){t.uniformMatrix4fv(this.addr,!1,m(e,this.size,16))}
// Array of textures (2D / Cube)
function k(t,e,n){var i=e.length,r=g(n,i);t.uniform1iv(this.addr,r);for(var o=0;o!==i;++o)n.setTexture2D(e[o]||Ss,r[o])}function V(t,e,n){var i=e.length,r=g(n,i);t.uniform1iv(this.addr,r);for(var o=0;o!==i;++o)n.setTextureCube(e[o]||Ms,r[o])}
// Helper to pick the right setter for a pure (bottom-level) array
function G(t){switch(t){case 5126:return N;// FLOAT
case 35664:return O;// _VEC2
case 35665:return R;// _VEC3
case 35666:return D;// _VEC4
case 35674:return B;// _MAT2
case 35675:return j;// _MAT3
case 35676:return U;// _MAT4
case 35678:return k;// SAMPLER_2D
case 35680:return V;// SAMPLER_CUBE
case 5124:case 35670:return I;// INT, BOOL
case 35667:case 35671:return T;// _VEC2
case 35668:case 35672:return C;// _VEC3
case 35669:case 35673:return P}}
// --- Uniform Classes ---
function F(t,e,n){this.id=t,this.addr=n,this.setValue=L(e.type)}function z(t,e,n){this.id=t,this.addr=n,this.size=e.size,this.setValue=G(e.type)}function H(t){this.id=t,f.call(this)}
// extracts
// 	- the identifier (member name or array index)
//  - followed by an optional right bracket (found when array index)
//  - followed by an optional left bracket or dot (type of subscript)
//
// Note: These portions can be read in a non-overlapping fashion and
// allow straightforward parsing of the hierarchy that WebGL encodes
// in the uniform names.
function X(t,e){t.seq.push(e),t.map[e.id]=e}function W(t,e,n){var i=t.name,r=i.length;for(
// reset RegExp object, because of the early exit of a previous run
Ls.lastIndex=0;;){var o=Ls.exec(i),a=Ls.lastIndex,s=o[1],l="]"===o[2],u=o[3];// convert to integer
if(l&&(s|=0),void 0===u||"["===u&&a+2===r){
// bare name or "pure" bottom-level array "[0]" suffix
X(n,void 0===u?new F(s,t,e):new z(s,t,e));break}
// step into inner node / create it in case it doesn't exist
var c=n.map,h=c[s];void 0===h&&(h=new H(s),X(n,h)),n=h}}
// Root Container
function Y(t,e,n){f.call(this),this.renderer=n;for(var i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS),r=0;r<i;++r){var o=t.getActiveUniform(e,r),a=o.name;W(o,t.getUniformLocation(e,a),this)}}function K(t,e,n){return void 0===e&&void 0===n?this.set(t):this.setRGB(t,e,n)}/**
 * @author bhouston / http://clara.io
 */
function Z(t,e){this.min=void 0!==t?t:new r(1/0,1/0),this.max=void 0!==e?e:new r(-1/0,-1/0)}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
function q(t,e){function n(){var t=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),e=new Uint16Array([0,1,2,0,2,3]);
// buffers
o=f.createBuffer(),a=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,o),f.bufferData(f.ARRAY_BUFFER,t,f.STATIC_DRAW),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,a),f.bufferData(f.ELEMENT_ARRAY_BUFFER,e,f.STATIC_DRAW),
// textures
d=f.createTexture(),p=f.createTexture(),m.bindTexture(f.TEXTURE_2D,d),f.texImage2D(f.TEXTURE_2D,0,f.RGB,16,16,0,f.RGB,f.UNSIGNED_BYTE,null),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.NEAREST),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.NEAREST),m.bindTexture(f.TEXTURE_2D,p),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,16,16,0,f.RGBA,f.UNSIGNED_BYTE,null),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.NEAREST),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.NEAREST),s={vertexShader:["uniform lowp int renderType;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform float rotation;","uniform sampler2D occlusionMap;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float vVisibility;","void main() {","vUV = uv;","vec2 pos = position;","if ( renderType == 2 ) {","vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );","vVisibility =        visibility.r / 9.0;","vVisibility *= 1.0 - visibility.g / 9.0;","vVisibility *=       visibility.b / 9.0;","vVisibility *= 1.0 - visibility.a / 9.0;","pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;","pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;","}","gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join("\n"),fragmentShader:["uniform lowp int renderType;","uniform sampler2D map;","uniform float opacity;","uniform vec3 color;","varying vec2 vUV;","varying float vVisibility;","void main() {",
// pink square
"if ( renderType == 0 ) {","gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );",
// restore
"} else if ( renderType == 1 ) {","gl_FragColor = texture2D( map, vUV );",
// flare
"} else {","vec4 texture = texture2D( map, vUV );","texture.a *= opacity * vVisibility;","gl_FragColor = texture;","gl_FragColor.rgb *= color;","}","}"].join("\n")},l=i(s),u={vertex:f.getAttribLocation(l,"position"),uv:f.getAttribLocation(l,"uv")},h={renderType:f.getUniformLocation(l,"renderType"),map:f.getUniformLocation(l,"map"),occlusionMap:f.getUniformLocation(l,"occlusionMap"),opacity:f.getUniformLocation(l,"opacity"),color:f.getUniformLocation(l,"color"),scale:f.getUniformLocation(l,"scale"),rotation:f.getUniformLocation(l,"rotation"),screenPosition:f.getUniformLocation(l,"screenPosition")}}function i(e){var n=f.createProgram(),i=f.createShader(f.FRAGMENT_SHADER),r=f.createShader(f.VERTEX_SHADER),o="precision "+t.getPrecision()+" float;\n";return f.shaderSource(i,o+e.fragmentShader),f.shaderSource(r,o+e.vertexShader),f.compileShader(i),f.compileShader(r),f.attachShader(n,i),f.attachShader(n,r),f.linkProgram(n),n}var o,a,s,l,u,h,d,p,f=t.context,m=t.state;/*
	 * Render lens flares
	 * Method: renders 16x16 0xff00ff-colored points scattered over the light source area,
	 *         reads these back and calculates occlusion.
	 */
this.render=function(i,s,g){if(0!==e.length){var v=new c,y=g.w/g.z,b=.5*g.z,_=.5*g.w,x=16/g.w,A=new r(x*y,x),w=new c(1,1,0),S=new r(1,1),M=new Z;M.min.set(g.x,g.y),M.max.set(g.x+(g.z-16),g.y+(g.w-16)),void 0===l&&n(),f.useProgram(l),m.initAttributes(),m.enableAttribute(u.vertex),m.enableAttribute(u.uv),m.disableUnusedAttributes(),
// loop through all lens flares to update their occlusion and positions
// setup gl and common used attribs/uniforms
f.uniform1i(h.occlusionMap,0),f.uniform1i(h.map,1),f.bindBuffer(f.ARRAY_BUFFER,o),f.vertexAttribPointer(u.vertex,2,f.FLOAT,!1,16,0),f.vertexAttribPointer(u.uv,2,f.FLOAT,!1,16,8),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,a),m.disable(f.CULL_FACE),m.buffers.depth.setMask(!1);for(var E=0,T=e.length;E<T;E++){x=16/g.w,A.set(x*y,x);
// calc object screen position
var C=e[E];
// screen cull
if(v.set(C.matrixWorld.elements[12],C.matrixWorld.elements[13],C.matrixWorld.elements[14]),v.applyMatrix4(s.matrixWorldInverse),v.applyMatrix4(s.projectionMatrix),
// setup arrays for gl programs
w.copy(v),
// horizontal and vertical coordinate of the lower left corner of the pixels to copy
S.x=g.x+w.x*b+b-8,S.y=g.y+w.y*_+_-8,!0===M.containsPoint(S)){
// save current RGB to temp texture
m.activeTexture(f.TEXTURE0),m.bindTexture(f.TEXTURE_2D,null),m.activeTexture(f.TEXTURE1),m.bindTexture(f.TEXTURE_2D,d),f.copyTexImage2D(f.TEXTURE_2D,0,f.RGB,S.x,S.y,16,16,0),
// render pink quad
f.uniform1i(h.renderType,0),f.uniform2f(h.scale,A.x,A.y),f.uniform3f(h.screenPosition,w.x,w.y,w.z),m.disable(f.BLEND),m.enable(f.DEPTH_TEST),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0),
// copy result to occlusionMap
m.activeTexture(f.TEXTURE0),m.bindTexture(f.TEXTURE_2D,p),f.copyTexImage2D(f.TEXTURE_2D,0,f.RGBA,S.x,S.y,16,16,0),
// restore graphics
f.uniform1i(h.renderType,1),m.disable(f.DEPTH_TEST),m.activeTexture(f.TEXTURE1),m.bindTexture(f.TEXTURE_2D,d),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0),
// update object positions
C.positionScreen.copy(w),C.customUpdateCallback?C.customUpdateCallback(C):C.updateLensFlares(),
// render flares
f.uniform1i(h.renderType,2),m.enable(f.BLEND);for(var P=0,L=C.lensFlares.length;P<L;P++){var N=C.lensFlares[P];N.opacity>.001&&N.scale>.001&&(w.x=N.x,w.y=N.y,w.z=N.z,x=N.size*N.scale/g.w,A.x=x*y,A.y=x,f.uniform3f(h.screenPosition,w.x,w.y,w.z),f.uniform2f(h.scale,A.x,A.y),f.uniform1f(h.rotation,N.rotation),f.uniform1f(h.opacity,N.opacity),f.uniform3f(h.color,N.color.r,N.color.g,N.color.b),m.setBlending(N.blending,N.blendEquation,N.blendSrc,N.blendDst),t.setTexture2D(N.texture,1),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0))}}}
// restore gl
m.enable(f.CULL_FACE),m.enable(f.DEPTH_TEST),m.buffers.depth.setMask(!0),t.resetGLState()}}}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
function Q(t,e){function n(){var t=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),e=new Uint16Array([0,1,2,0,2,3]);a=f.createBuffer(),s=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,a),f.bufferData(f.ARRAY_BUFFER,t,f.STATIC_DRAW),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,s),f.bufferData(f.ELEMENT_ARRAY_BUFFER,e,f.STATIC_DRAW),l=i(),h={position:f.getAttribLocation(l,"position"),uv:f.getAttribLocation(l,"uv")},d={uvOffset:f.getUniformLocation(l,"uvOffset"),uvScale:f.getUniformLocation(l,"uvScale"),rotation:f.getUniformLocation(l,"rotation"),scale:f.getUniformLocation(l,"scale"),color:f.getUniformLocation(l,"color"),map:f.getUniformLocation(l,"map"),opacity:f.getUniformLocation(l,"opacity"),modelViewMatrix:f.getUniformLocation(l,"modelViewMatrix"),projectionMatrix:f.getUniformLocation(l,"projectionMatrix"),fogType:f.getUniformLocation(l,"fogType"),fogDensity:f.getUniformLocation(l,"fogDensity"),fogNear:f.getUniformLocation(l,"fogNear"),fogFar:f.getUniformLocation(l,"fogFar"),fogColor:f.getUniformLocation(l,"fogColor"),alphaTest:f.getUniformLocation(l,"alphaTest")};var n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");n.width=8,n.height=8;var r=n.getContext("2d");r.fillStyle="white",r.fillRect(0,0,8,8),p=new o(n),p.needsUpdate=!0}function i(){var e=f.createProgram(),n=f.createShader(f.VERTEX_SHADER),i=f.createShader(f.FRAGMENT_SHADER);return f.shaderSource(n,["precision "+t.getPrecision()+" float;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 scale;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","vUV = uvOffset + uv * uvScale;","vec2 alignedPosition = position * scale;","vec2 rotatedPosition;","rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;","rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;","vec4 finalPosition;","finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );","finalPosition.xy += rotatedPosition;","finalPosition = projectionMatrix * finalPosition;","gl_Position = finalPosition;","}"].join("\n")),f.shaderSource(i,["precision "+t.getPrecision()+" float;","uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","void main() {","vec4 texture = texture2D( map, vUV );","if ( texture.a < alphaTest ) discard;","gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );","if ( fogType > 0 ) {","float depth = gl_FragCoord.z / gl_FragCoord.w;","float fogFactor = 0.0;","if ( fogType == 1 ) {","fogFactor = smoothstep( fogNear, fogFar, depth );","} else {","const float LOG2 = 1.442695;","fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );","fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );","}","gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}","}"].join("\n")),f.compileShader(n),f.compileShader(i),f.attachShader(e,n),f.attachShader(e,i),f.linkProgram(e),e}function r(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:e.id-t.id}var a,s,l,h,d,p,f=t.context,m=t.state,g=new c,v=new u,y=new c;this.render=function(i,o){if(0!==e.length){
// setup gl
void 0===l&&n(),f.useProgram(l),m.initAttributes(),m.enableAttribute(h.position),m.enableAttribute(h.uv),m.disableUnusedAttributes(),m.disable(f.CULL_FACE),m.enable(f.BLEND),f.bindBuffer(f.ARRAY_BUFFER,a),f.vertexAttribPointer(h.position,2,f.FLOAT,!1,16,0),f.vertexAttribPointer(h.uv,2,f.FLOAT,!1,16,8),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,s),f.uniformMatrix4fv(d.projectionMatrix,!1,o.projectionMatrix.elements),m.activeTexture(f.TEXTURE0),f.uniform1i(d.map,0);var u=0,c=0,b=i.fog;b?(f.uniform3f(d.fogColor,b.color.r,b.color.g,b.color.b),b.isFog?(f.uniform1f(d.fogNear,b.near),f.uniform1f(d.fogFar,b.far),f.uniform1i(d.fogType,1),u=1,c=1):b.isFogExp2&&(f.uniform1f(d.fogDensity,b.density),f.uniform1i(d.fogType,2),u=2,c=2)):(f.uniform1i(d.fogType,0),u=0,c=0);
// update positions and sort
for(var _=0,x=e.length;_<x;_++){var A=e[_];A.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,A.matrixWorld),A.z=-A.modelViewMatrix.elements[14]}e.sort(r);for(var w=[],_=0,x=e.length;_<x;_++){var A=e[_],S=A.material;if(!1!==S.visible){f.uniform1f(d.alphaTest,S.alphaTest),f.uniformMatrix4fv(d.modelViewMatrix,!1,A.modelViewMatrix.elements),A.matrixWorld.decompose(g,v,y),w[0]=y.x,w[1]=y.y;var M=0;i.fog&&S.fog&&(M=c),u!==M&&(f.uniform1i(d.fogType,M),u=M),null!==S.map?(f.uniform2f(d.uvOffset,S.map.offset.x,S.map.offset.y),f.uniform2f(d.uvScale,S.map.repeat.x,S.map.repeat.y)):(f.uniform2f(d.uvOffset,0,0),f.uniform2f(d.uvScale,1,1)),f.uniform1f(d.opacity,S.opacity),f.uniform3f(d.color,S.color.r,S.color.g,S.color.b),f.uniform1f(d.rotation,S.rotation),f.uniform2fv(d.scale,w),m.setBlending(S.blending,S.blendEquation,S.blendSrc,S.blendDst),m.buffers.depth.setTest(S.depthTest),m.buffers.depth.setMask(S.depthWrite),S.map?t.setTexture2D(S.map,0):t.setTexture2D(p,0),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0)}}
// restore gl
m.enable(f.CULL_FACE),t.resetGLState()}}}function J(){Object.defineProperty(this,"id",{value:Bs++}),this.uuid=As.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=Mo,this.side=go,this.shading=_o,// THREE.FlatShading, THREE.SmoothShading
this.vertexColors=xo,// THREE.NoColors, THREE.VertexColors, THREE.FaceColors
this.opacity=1,this.transparent=!1,this.blendSrc=ko,this.blendDst=Vo,this.blendEquation=Lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.colorWrite=!0,this.precision=null,// override the renderer's default precision for this material
this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.overdraw=0,// Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer
this.visible=!0,this.needsUpdate=!0}/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  defines: { "label" : "value" },
 *  uniforms: { "parameter1": { value: 1.0 }, "parameter2": { value2: 2 } },
 *
 *  fragmentShader: <string>,
 *  vertexShader: <string>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  lights: <bool>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function $(t){J.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,// set to use scene fog
this.lights=!1,// set to use scene lights
this.clipping=!1,// set to use user-defined clipping planes
this.skinning=!1,// set to use skinning attribute streams
this.morphTargets=!1,// set to use morph targets
this.morphNormals=!1,// set to use morph normals
this.extensions={derivatives:!1,// set to use derivatives
fragDepth:!1,// set to use fragment depth values
drawBuffers:!1,// set to use draw buffers
shaderTextureLOD:!1},
// When rendered geometry doesn't include these attributes but the material does,
// use these default values in WebGL. This avoids errors when buffer data is missing.
this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,void 0!==t&&(t.attributes,this.setValues(t))}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / https://clara.io
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */
function tt(t){J.call(this),this.type="MeshDepthMaterial",this.depthPacking=_s,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(t)}/**
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */
function et(t,e){this.min=void 0!==t?t:new c(1/0,1/0,1/0),this.max=void 0!==e?e:new c(-1/0,-1/0,-1/0)}/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */
function nt(t,e){this.center=void 0!==t?t:new c,this.radius=void 0!==e?e:0}/**
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 * @author tschw
 */
function it(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length}/**
 * @author bhouston / http://clara.io
 */
function rt(t,e){this.normal=void 0!==t?t:new c(1,0,0),this.constant=void 0!==e?e:0}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / http://clara.io
 */
function ot(t,e,n,i,r,o){this.planes=[void 0!==t?t:new rt,void 0!==e?e:new rt,void 0!==n?n:new rt,void 0!==i?i:new rt,void 0!==r?r:new rt,void 0!==o?o:new rt]}/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
function at(t,e,n,i){function o(e,n,i,r){var o=e.geometry,a=null,s=w,l=e.customDepthMaterial;if(i&&(s=S,l=e.customDistanceMaterial),l)a=l;else{var u=!1;n.morphTargets&&(o&&o.isBufferGeometry?u=o.morphAttributes&&o.morphAttributes.position&&o.morphAttributes.position.length>0:o&&o.isGeometry&&(u=o.morphTargets&&o.morphTargets.length>0)),e.isSkinnedMesh&&n.skinning;var c=e.isSkinnedMesh&&n.skinning,h=0;u&&(h|=_),c&&(h|=x),a=s[h]}if(t.localClippingEnabled&&!0===n.clipShadows&&0!==n.clippingPlanes.length){
// in this case we need a unique material instance reflecting the
// appropriate state
var d=a.uuid,p=n.uuid,f=M[d];void 0===f&&(f={},M[d]=f);var m=f[p];void 0===m&&(m=a.clone(),f[p]=m),a=m}a.visible=n.visible,a.wireframe=n.wireframe;var g=n.side;return j.renderSingleSided&&g==yo&&(g=go),j.renderReverseSided&&(g===go?g=vo:g===vo&&(g=go)),a.side=g,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,i&&void 0!==a.uniforms.lightPos&&a.uniforms.lightPos.value.copy(r),a}function l(e,i,r,a){if(!1!==e.visible){if(e.layers.test(i.layers)&&(e.isMesh||e.isLine||e.isPoints)&&e.castShadow&&(!e.frustumCulled||p.intersectsObject(e))){e.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse,e.matrixWorld);var s=n.update(e),u=e.material;if(Array.isArray(u))for(var c=s.groups,h=0,d=c.length;h<d;h++){var f=c[h],m=u[f.materialIndex];if(m&&m.visible){var g=o(e,m,a,b);t.renderBufferDirect(r,null,s,g,e,f)}}else if(u.visible){var g=o(e,u,a,b);t.renderBufferDirect(r,null,s,g,e,null)}}for(var v=e.children,y=0,_=v.length;y<_;y++)l(v[y],i,r,a)}}var u=t.context,d=t.state,p=new ot,f=new h,m=e.shadows,g=new r,v=new r(i.maxTextureSize,i.maxTextureSize),y=new c,b=new c,_=1,x=2,A=1+(_|x),w=new Array(A),S=new Array(A),M={},E=[new c(1,0,0),new c(-1,0,0),new c(0,0,1),new c(0,0,-1),new c(0,1,0),new c(0,-1,0)],T=[new c(0,1,0),new c(0,1,0),new c(0,1,0),new c(0,1,0),new c(0,0,1),new c(0,0,-1)],C=[new a,new a,new a,new a,new a,new a],P=new tt;P.depthPacking=xs,P.clipping=!0;for(var L=Ds.distanceRGBA,N=Os.clone(L.uniforms),I=0;I!==A;++I){var O=0!=(I&_),R=0!=(I&x),D=P.clone();D.morphTargets=O,D.skinning=R,w[I]=D;var B=new $({defines:{USE_SHADOWMAP:""},uniforms:N,vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,morphTargets:O,skinning:R,clipping:!0});S[I]=B}
//
var j=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo,this.renderReverseSided=!0,this.renderSingleSided=!0,this.render=function(e,n){if(!1!==j.enabled&&(!1!==j.autoUpdate||!1!==j.needsUpdate)&&0!==m.length){
// Set GL state for depth map.
d.disable(u.BLEND),d.buffers.color.setClear(1,1,1,1),d.buffers.depth.setTest(!0),d.setScissorTest(!1);for(var i,r,o=0,a=m.length;o<a;o++){var c=m[o],h=c.shadow;if(void 0!==h){var _=h.camera,x=h.matrix;if(b.setFromMatrixPosition(c.matrixWorld),_.position.copy(b),g.copy(h.mapSize),g.min(v),c&&c.isPointLight){i=6,r=!0;var A=g.x,w=g.y;
// These viewports map a cube-map onto a 2D texture with the
// following orientation:
//
//  xzXZ
//   y Y
//
// X - Positive x direction
// x - Negative x direction
// Y - Positive y direction
// y - Negative y direction
// Z - Positive z direction
// z - Negative z direction
// positive X
C[0].set(2*A,w,A,w),
// negative X
C[1].set(0,w,A,w),
// positive Z
C[2].set(3*A,w,A,w),
// negative Z
C[3].set(A,w,A,w),
// positive Y
C[4].set(3*A,0,A,w),
// negative Y
C[5].set(A,0,A,w),g.x*=4,g.y*=2,
// for point lights we set the shadow matrix to be a translation-only matrix
// equal to inverse of the light's position
x.makeTranslation(-b.x,-b.y,-b.z)}else i=1,r=!1,y.setFromMatrixPosition(c.target.matrixWorld),_.lookAt(y),_.updateMatrixWorld(),_.matrixWorldInverse.getInverse(_.matrixWorld),
// compute shadow matrix
x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(_.projectionMatrix),x.multiply(_.matrixWorldInverse);if(null===h.map){var S={minFilter:ba,magFilter:ba,format:ka};h.map=new s(g.x,g.y,S),h.map.texture.name=c.name+".shadowMap",_.updateProjectionMatrix()}h.isSpotLightShadow&&h.update(c);var M=h.map;t.setRenderTarget(M),t.clear();
// render shadow map for each cube face (if omni-directional) or
// run a single pass if not
for(var P=0;P<i;P++){if(r){y.copy(_.position),y.add(E[P]),_.up.copy(T[P]),_.lookAt(y),_.updateMatrixWorld(),_.matrixWorldInverse.getInverse(_.matrixWorld);var L=C[P];d.viewport(L)}
// update camera matrices and frustum
f.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),p.setFromMatrix(f),
// set object matrices & frustum culling
l(e,n,_,r)}}}
// Restore GL state.
var N=t.getClearColor(),I=t.getClearAlpha();t.setClearColor(N,I),j.needsUpdate=!1}}}/**
 * @author bhouston / http://clara.io
 */
function st(t,e){this.origin=void 0!==t?t:new c,this.direction=void 0!==e?e:new c}/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */
function lt(t,e,n,i){this._x=t||0,this._y=e||0,this._z=n||0,this._order=i||lt.DefaultOrder}/**
 * @author mrdoob / http://mrdoob.com/
 */
function ut(){this.mask=1}function ct(){function t(){r.setFromEuler(i,!1)}function e(){i.setFromQuaternion(r,void 0,!1)}Object.defineProperty(this,"id",{value:js++}),this.uuid=As.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DefaultUp.clone();var n=new c,i=new lt,r=new u,o=new c(1,1,1);i.onChange(t),r.onChange(e),Object.defineProperties(this,{position:{enumerable:!0,value:n},rotation:{enumerable:!0,value:i},quaternion:{enumerable:!0,value:r},scale:{enumerable:!0,value:o},modelViewMatrix:{value:new h},normalMatrix:{value:new it}}),this.matrix=new h,this.matrixWorld=new h,this.matrixAutoUpdate=ct.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ut,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={},this.onBeforeRender=function(){},this.onAfterRender=function(){}}/**
 * @author bhouston / http://clara.io
 */
function ht(t,e){this.start=void 0!==t?t:new c,this.end=void 0!==e?e:new c}/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */
function dt(t,e,n){this.a=void 0!==t?t:new c,this.b=void 0!==e?e:new c,this.c=void 0!==n?n:new c}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function pt(t,e,n,i,r,o){this.a=t,this.b=e,this.c=n,this.normal=i&&i.isVector3?i:new c,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new K,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=void 0!==o?o:0}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  shading: THREE.SmoothShading,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>
 * }
 */
function ft(t){J.call(this),this.type="MeshBasicMaterial",this.color=new K(16777215),// emissive
this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(t)}/**
 * @author mrdoob / http://mrdoob.com/
 */
function mt(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=As.generateUUID(),this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=!0===n,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}
//
function gt(t,e){mt.call(this,new Int8Array(t),e)}function vt(t,e){mt.call(this,new Uint8Array(t),e)}function yt(t,e){mt.call(this,new Uint8ClampedArray(t),e)}function bt(t,e){mt.call(this,new Int16Array(t),e)}function _t(t,e){mt.call(this,new Uint16Array(t),e)}function xt(t,e){mt.call(this,new Int32Array(t),e)}function At(t,e){mt.call(this,new Uint32Array(t),e)}function wt(t,e){mt.call(this,new Float32Array(t),e)}function St(t,e){mt.call(this,new Float64Array(t),e)}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Mt(){this.indices=[],this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],
// this.lineDistances = [];
this.boundingBox=null,this.boundingSphere=null,
// update flags
this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}function Et(t){if(0===t.length)return-1/0;for(var e=t[0],n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}function Tt(){return Us++}function Ct(){Object.defineProperty(this,"id",{value:Tt()}),this.uuid=As.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,
// update flags
this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
function Pt(){Object.defineProperty(this,"id",{value:Tt()}),this.uuid=As.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0}}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author jonobr1 / http://jonobr1.com/
 */
function Lt(t,e){ct.call(this),this.type="Mesh",this.geometry=void 0!==t?t:new Pt,this.material=void 0!==e?e:new ft({color:16777215*Math.random()}),this.drawMode=us,this.updateMorphTargets()}/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
// BoxGeometry
function Nt(t,e,n,i,r,o){Ct.call(this),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o},this.fromBufferGeometry(new It(t,e,n,i,r,o)),this.mergeVertices()}
// BoxBufferGeometry
function It(t,e,n,i,r,o){function a(t,e,n,i,r,o,a,m,g,v,y){var b,_,x=o/g,A=a/v,w=o/2,S=a/2,M=m/2,E=g+1,T=v+1,C=0,P=0,L=new c;
// generate vertices, normals and uvs
for(_=0;_<T;_++){var N=_*A-S;for(b=0;b<E;b++){var I=b*x-w;
// set values to correct vector component
L[t]=I*i,L[e]=N*r,L[n]=M,
// now apply vector to vertex buffer
u.push(L.x,L.y,L.z),
// set values to correct vector component
L[t]=0,L[e]=0,L[n]=m>0?1:-1,
// now apply vector to normal buffer
h.push(L.x,L.y,L.z),
// uvs
d.push(b/g),d.push(1-_/v),
// counters
C+=1}}
// indices
// 1. you need three indices to draw a single face
// 2. a single segment consists of two faces
// 3. so we need to generate six (2*3) indices per segment
for(_=0;_<v;_++)for(b=0;b<g;b++){var O=p+b+E*_,R=p+b+E*(_+1),D=p+(b+1)+E*(_+1),B=p+(b+1)+E*_;
// faces
l.push(O,R,B),l.push(R,D,B),
// increase counter
P+=6}
// add a group to the geometry. this will ensure multi material support
s.addGroup(f,P,y),
// calculate new start value for groups
f+=P,
// update total number of vertices
p+=C}Pt.call(this),this.type="BoxBufferGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};var s=this;
// segments
i=Math.floor(i)||1,r=Math.floor(r)||1,o=Math.floor(o)||1;
// buffers
var l=[],u=[],h=[],d=[],p=0,f=0;
// build each side of the box geometry
a("z","y","x",-1,-1,n,e,t,o,r,0),// px
a("z","y","x",1,-1,n,e,-t,o,r,1),// nx
a("x","z","y",1,1,t,n,e,i,o,2),// py
a("x","z","y",1,-1,t,n,-e,i,o,3),// ny
a("x","y","z",1,-1,t,e,n,i,r,4),// pz
a("x","y","z",-1,-1,t,e,-n,i,r,5),// nz
// build geometry
this.setIndex(l),this.addAttribute("position",new wt(u,3)),this.addAttribute("normal",new wt(h,3)),this.addAttribute("uv",new wt(d,2))}/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
// PlaneGeometry
function Ot(t,e,n,i){Ct.call(this),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new Rt(t,e,n,i)),this.mergeVertices()}
// PlaneBufferGeometry
function Rt(t,e,n,i){Pt.call(this),this.type="PlaneBufferGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};var r,o,a=t/2,s=e/2,l=Math.floor(n)||1,u=Math.floor(i)||1,c=l+1,h=u+1,d=t/l,p=e/u,f=[],m=[],g=[],v=[];
// generate vertices, normals and uvs
for(o=0;o<h;o++){var y=o*p-s;for(r=0;r<c;r++){var b=r*d-a;m.push(b,-y,0),g.push(0,0,1),v.push(r/l),v.push(1-o/u)}}
// indices
for(o=0;o<u;o++)for(r=0;r<l;r++){var _=r+c*o,x=r+c*(o+1),A=r+1+c*(o+1),w=r+1+c*o;
// faces
f.push(_,x,w),f.push(x,A,w)}
// build geometry
this.setIndex(f),this.addAttribute("position",new wt(m,3)),this.addAttribute("normal",new wt(g,3)),this.addAttribute("uv",new wt(v,2))}/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author WestLangley / http://github.com/WestLangley
*/
function Dt(){ct.call(this),this.type="Camera",this.matrixWorldInverse=new h,this.projectionMatrix=new h}/**
 * @author mrdoob / http://mrdoob.com/
 * @author greggman / http://games.greggman.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author tschw
 */
function Bt(t,e,n,i){Dt.call(this),this.type="PerspectiveCamera",this.fov=void 0!==t?t:50,this.zoom=1,this.near=void 0!==n?n:.1,this.far=void 0!==i?i:2e3,this.focus=10,this.aspect=void 0!==e?e:1,this.view=null,this.filmGauge=35,// width of the film (default in millimeters)
this.filmOffset=0,// horizontal film offset (same unit as gauge)
this.updateProjectionMatrix()}/**
 * @author alteredq / http://alteredqualia.com/
 * @author arose / http://github.com/arose
 */
function jt(t,e,n,i,r,o){Dt.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=void 0!==r?r:.1,this.far=void 0!==o?o:2e3,this.updateProjectionMatrix()}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ut(t){function e(e,n){var i=e.array,r=e.dynamic?t.DYNAMIC_DRAW:t.STATIC_DRAW,o=t.createBuffer();t.bindBuffer(n,o),t.bufferData(n,i,r),e.onUploadCallback();var a=t.FLOAT;return i instanceof Float32Array?a=t.FLOAT:i instanceof Float64Array||(i instanceof Uint16Array?a=t.UNSIGNED_SHORT:i instanceof Int16Array?a=t.SHORT:i instanceof Uint32Array?a=t.UNSIGNED_INT:i instanceof Int32Array?a=t.INT:i instanceof Int8Array?a=t.BYTE:i instanceof Uint8Array&&(a=t.UNSIGNED_BYTE)),{buffer:o,type:a,bytesPerElement:i.BYTES_PER_ELEMENT,version:e.version}}function n(e,n,i){var r=n.array,o=n.updateRange;t.bindBuffer(i,e),!1===n.dynamic?t.bufferData(i,r,t.STATIC_DRAW):-1===o.count?
// Not using update ranges
t.bufferSubData(i,0,r):0===o.count||(t.bufferSubData(i,o.offset*r.BYTES_PER_ELEMENT,r.subarray(o.offset,o.offset+o.count)),o.count=0)}
//
function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),a[t.uuid]}function r(e){var n=a[e.uuid];n&&(t.deleteBuffer(n.buffer),delete a[e.uuid])}function o(t,i){t.isInterleavedBufferAttribute&&(t=t.data);var r=a[t.uuid];void 0===r?a[t.uuid]=e(t,i):r.version<t.version&&(n(r.buffer,t,i),r.version=t.version)}var a={};return{get:i,remove:r,update:o}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function kt(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program&&e.program&&t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vt(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gt(){function t(){o=-1,s=-1}function e(t,e,n,i,l){var u,c;
// allocate the next position in the appropriate array
n.transparent?(u=a,c=++s):(u=r,c=++o);
// recycle existing render item or grow the array
var h=u[c];h?(h.id=t.id,h.object=t,h.geometry=e,h.material=n,h.program=n.program,h.renderOrder=t.renderOrder,h.z=i,h.group=l):(h={id:t.id,object:t,geometry:e,material:n,program:n.program,renderOrder:t.renderOrder,z:i,group:l},
// assert( index === array.length );
u.push(h))}function n(){r.length=o+1,a.length=s+1}function i(){r.sort(kt),a.sort(Vt)}var r=[],o=-1,a=[],s=-1;return{opaque:r,transparent:a,init:t,push:e,finish:n,sort:i}}function Ft(){function t(t,e){var i=t.id+","+e.id,r=n[i];
// console.log( 'THREE.WebGLRenderLists:', hash );
return void 0===r&&(r=new Gt,n[i]=r),r}function e(){n={}}var n={};return{get:t,dispose:e}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function zt(t,e,n){function i(t){s=t}function r(n){n.array instanceof Uint32Array&&e.get("OES_element_index_uint")?(l=t.UNSIGNED_INT,u=4):n.array instanceof Uint16Array?(l=t.UNSIGNED_SHORT,u=2):(l=t.UNSIGNED_BYTE,u=1)}function o(e,i){t.drawElements(s,i,l,e*u),n.calls++,n.vertices+=i,s===t.TRIANGLES&&(n.faces+=i/3)}function a(i,r,o){var a=e.get("ANGLE_instanced_arrays");null!==a&&(a.drawElementsInstancedANGLE(s,o,l,r*u,i.maxInstancedCount),n.calls++,n.vertices+=o*i.maxInstancedCount,s===t.TRIANGLES&&(n.faces+=i.maxInstancedCount*o/3))}var s,l,u;
//
this.setMode=i,this.setIndex=r,this.render=o,this.renderInstances=a}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ht(t,e,n){function i(t){a=t}function r(e,i){t.drawArrays(a,e,i),n.calls++,n.vertices+=i,a===t.TRIANGLES&&(n.faces+=i/3)}function o(i,r,o){var s=e.get("ANGLE_instanced_arrays");if(null!==s){var l=i.attributes.position;l.isInterleavedBufferAttribute?(o=l.data.count,s.drawArraysInstancedANGLE(a,0,o,i.maxInstancedCount)):s.drawArraysInstancedANGLE(a,r,o,i.maxInstancedCount),n.calls++,n.vertices+=o*i.maxInstancedCount,a===t.TRIANGLES&&(n.faces+=i.maxInstancedCount*o/3)}}var a;
//
this.setMode=i,this.render=r,this.renderInstances=o}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Xt(t,e,n){function i(t){var r=t.target,o=s[r.id];null!==o.index&&e.remove(o.index);for(var a in o.attributes)e.remove(o.attributes[a]);r.removeEventListener("dispose",i),delete s[r.id];
// TODO Remove duplicate code
var u=l[r.id];u&&(e.remove(u),delete l[r.id]),u=l[o.id],u&&(e.remove(u),delete l[o.id]),
//
n.geometries--}function r(t,e){var r=s[e.id];return r||(e.addEventListener("dispose",i),e.isBufferGeometry?r=e:e.isGeometry&&(void 0===e._bufferGeometry&&(e._bufferGeometry=(new Pt).setFromObject(t)),r=e._bufferGeometry),s[e.id]=r,n.geometries++,r)}function o(n){var i=n.index,r=n.attributes;null!==i&&e.update(i,t.ELEMENT_ARRAY_BUFFER);for(var o in r)e.update(r[o],t.ARRAY_BUFFER);
// morph targets
var a=n.morphAttributes;for(var o in a)for(var s=a[o],l=0,u=s.length;l<u;l++)e.update(s[l],t.ARRAY_BUFFER)}function a(n){var i=l[n.id];if(i)return i;var r=[],o=n.index,a=n.attributes;
// console.time( 'wireframe' );
if(null!==o)for(var s=o.array,u=0,c=s.length;u<c;u+=3){var h=s[u+0],d=s[u+1],p=s[u+2];r.push(h,d,d,p,p,h)}else for(var s=a.position.array,u=0,c=s.length/3-1;u<c;u+=3){var h=u+0,d=u+1,p=u+2;r.push(h,d,d,p,p,h)}
// console.timeEnd( 'wireframe' );
return i=new(Et(r)>65535?At:_t)(r,1),e.update(i,t.ELEMENT_ARRAY_BUFFER),l[n.id]=i,i}var s={},l={};return{get:r,update:o,getWireframeAttribute:a}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Wt(){var t={};return{get:function(e){if(void 0!==t[e.id])return t[e.id];var n;switch(e.type){case"DirectionalLight":n={direction:new c,color:new K,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new r};break;case"SpotLight":n={position:new c,direction:new c,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new r};break;case"PointLight":n={position:new c,color:new K,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new r};break;case"HemisphereLight":n={direction:new c,skyColor:new K,groundColor:new K};break;case"RectAreaLight":n={color:new K,position:new c,halfWidth:new c,halfHeight:new c}}return t[e.id]=n,n}}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Yt(t,e,n){function i(t){var i=n.frame,r=t.geometry,a=e.get(t,r);
// Update once per frame
return o[a.id]!==i&&(r.isGeometry&&a.updateFromObject(t),e.update(a),o[a.id]=i),a}function r(){o={}}var o={};return{update:i,clear:r}}function Kt(t,e,n){var i=t.createShader(e);
// --enable-privileged-webgl-extension
// console.log( type, gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );
return t.shaderSource(i,n),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS),t.getShaderInfoLog(i),i}function Zt(t){switch(t){case ds:return["Linear","( value )"];case ps:return["sRGB","( value )"];case ms:return["RGBE","( value )"];case vs:return["RGBM","( value, 7.0 )"];case ys:return["RGBM","( value, 16.0 )"];case bs:return["RGBD","( value, 256.0 )"];case fs:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+t)}}function qt(t,e){var n=Zt(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Qt(t,e){var n=Zt(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Jt(t,e){var n;switch(e){case ra:n="Linear";break;case oa:n="Reinhard";break;case aa:n="Uncharted2";break;case sa:n="OptimizedCineon";break;default:throw new Error("unsupported toneMapping: "+e)}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function $t(t,e,n){return t=t||{},[t.derivatives||e.envMapCubeUV||e.bumpMap||e.normalMap||e.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(t.fragDepth||e.logarithmicDepthBuffer)&&n.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",t.drawBuffers&&n.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(t.shaderTextureLOD||e.envMap)&&n.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ne).join("\n")}function te(t){var e=[];for(var n in t){var i=t[n];!1!==i&&e.push("#define "+n+" "+i)}return e.join("\n")}function ee(t,e,n){for(var i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),o=0;o<r;o++){var a=t.getActiveAttrib(e,o),s=a.name;
// console.log("THREE.WebGLProgram: ACTIVE VERTEX ATTRIBUTE:", name, i );
i[s]=t.getAttribLocation(e,s)}return i}function ne(t){return""!==t}function ie(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights)}function re(t){function e(t,e){var n=Rs[e];if(void 0===n)throw new Error("Can not resolve #include <"+e+">");return re(n)}return t.replace(/^[ \t]*#include +<([\w\d.]+)>/gm,e)}function oe(t){function e(t,e,n,i){for(var r="",o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[ i \]/g,"[ "+o+" ]");return r}return t.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,e)}function ae(t,e,n,i){var r=t.context,o=n.extensions,a=n.defines,s=n.__webglShader.vertexShader,l=n.__webglShader.fragmentShader,u="SHADOWMAP_TYPE_BASIC";i.shadowMapType===fo?u="SHADOWMAP_TYPE_PCF":i.shadowMapType===mo&&(u="SHADOWMAP_TYPE_PCF_SOFT");var c="ENVMAP_TYPE_CUBE",h="ENVMAP_MODE_REFLECTION",d="ENVMAP_BLENDING_MULTIPLY";if(i.envMap){switch(n.envMap.mapping){case ua:case ca:c="ENVMAP_TYPE_CUBE";break;case fa:case ma:c="ENVMAP_TYPE_CUBE_UV";break;case ha:case da:c="ENVMAP_TYPE_EQUIREC";break;case pa:c="ENVMAP_TYPE_SPHERE"}switch(n.envMap.mapping){case ca:case da:h="ENVMAP_MODE_REFRACTION"}switch(n.combine){case ta:d="ENVMAP_BLENDING_MULTIPLY";break;case ea:d="ENVMAP_BLENDING_MIX";break;case na:d="ENVMAP_BLENDING_ADD"}}var p,f,m=t.gammaFactor>0?t.gammaFactor:1,g=$t(o,i,t.extensions),v=te(a),y=r.createProgram();n.isRawShaderMaterial?(p=[v,"\n"].filter(ne).join("\n"),f=[g,v,"\n"].filter(ne).join("\n")):(p=["precision "+i.precision+" float;","precision "+i.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,v,i.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+m,"#define MAX_BONES "+i.maxBones,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexColors?"#define USE_COLOR":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.useVertexTexture?"#define BONE_TEXTURE":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+i.numClippingPlanes,i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&t.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(ne).join("\n"),f=[g,"precision "+i.precision+" float;","precision "+i.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,v,i.alphaTest?"#define ALPHATEST "+i.alphaTest:"","#define GAMMA_FACTOR "+m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexColors?"#define USE_COLOR":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+i.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(i.numClippingPlanes-i.numClipIntersection),i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&t.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",i.envMap&&t.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",i.toneMapping!==ia?"#define TONE_MAPPING":"",i.toneMapping!==ia?Rs.tonemapping_pars_fragment:"",// this code is required here because it is used by the toneMapping() function defined below
i.toneMapping!==ia?Jt("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.outputEncoding||i.mapEncoding||i.envMapEncoding||i.emissiveMapEncoding?Rs.encodings_pars_fragment:"",// this code is required here because it is used by the various encoding/decoding function defined below
i.mapEncoding?qt("mapTexelToLinear",i.mapEncoding):"",i.envMapEncoding?qt("envMapTexelToLinear",i.envMapEncoding):"",i.emissiveMapEncoding?qt("emissiveMapTexelToLinear",i.emissiveMapEncoding):"",i.outputEncoding?Qt("linearToOutputTexel",i.outputEncoding):"",i.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(ne).join("\n")),s=re(s,i),s=ie(s,i),l=re(l,i),l=ie(l,i),n.isShaderMaterial||(s=oe(s),l=oe(l));var b=p+s,_=f+l,x=Kt(r,r.VERTEX_SHADER,b),A=Kt(r,r.FRAGMENT_SHADER,_);r.attachShader(y,x),r.attachShader(y,A),
// Force a particular attribute to index 0.
void 0!==n.index0AttributeName?r.bindAttribLocation(y,0,n.index0AttributeName):!0===i.morphTargets&&
// programs with morphTargets displace position out of attribute 0
r.bindAttribLocation(y,0,"position"),r.linkProgram(y);var w=r.getProgramInfoLog(y),S=r.getShaderInfoLog(x),M=r.getShaderInfoLog(A),E=!0,T=!0;
// console.log( '**VERTEX**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glVertexShader ) );
// console.log( '**FRAGMENT**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glFragmentShader ) );
!1===r.getProgramParameter(y,r.LINK_STATUS)?E=!1:""!==w||""!==S&&""!==M||(T=!1),T&&(this.diagnostics={runnable:E,material:n,programLog:w,vertexShader:{log:S,prefix:p},fragmentShader:{log:M,prefix:f}}),
// clean up
r.deleteShader(x),r.deleteShader(A);
// set up caching for uniform locations
var C;this.getUniforms=function(){return void 0===C&&(C=new Y(r,y,t)),C};
// set up caching for attribute locations
var P;
// free resource
// DEPRECATED
//
return this.getAttributes=function(){return void 0===P&&(P=ee(r,y)),P},this.destroy=function(){r.deleteProgram(y),this.program=void 0},Object.defineProperties(this,{uniforms:{get:function(){return this.getUniforms()}},attributes:{get:function(){return this.getAttributes()}}}),this.id=ks++,this.code=e,this.usedTimes=1,this.program=y,this.vertexShader=x,this.fragmentShader=A,this}/**
 * @author mrdoob / http://mrdoob.com/
 */
function se(t,e){function n(t){var n=t.skeleton,i=n.bones;if(e.floatVertexTextures)return 1024;
// default for when object is not specified
// ( for example when prebuilding shader to be used with multiple objects )
//
//  - leave some extra space for other uniforms
//  - limit here is ANGLE's 254 max uniform vectors
//    (up to 54 should be safe)
var r=e.maxVertexUniforms,o=Math.floor((r-20)/4),a=Math.min(o,i.length);return a<i.length?0:a}function i(t,e){var n;
// add backwards compatibility for WebGLRenderer.gammaInput/gammaOutput parameter, should probably be removed at some point.
return t?t.isTexture?n=t.encoding:t.isWebGLRenderTarget&&(n=t.texture.encoding):n=ds,n===ds&&e&&(n=fs),n}var r=[],o={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},a=["precision","supportsVertexTextures","map","mapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering"];this.getParameters=function(r,a,s,l,u,c){var h=o[r.type],d=c.isSkinnedMesh?n(c):0,p=t.getPrecision();null!==r.precision&&(p=e.getMaxPrecision(r.precision),r.precision);var f=t.getRenderTarget();return{shaderID:h,precision:p,supportsVertexTextures:e.vertexTextures,outputEncoding:i(f?f.texture:null,t.gammaOutput),map:!!r.map,mapEncoding:i(r.map,t.gammaInput),envMap:!!r.envMap,envMapMode:r.envMap&&r.envMap.mapping,envMapEncoding:i(r.envMap,t.gammaInput),envMapCubeUV:!!r.envMap&&(r.envMap.mapping===fa||r.envMap.mapping===ma),lightMap:!!r.lightMap,aoMap:!!r.aoMap,emissiveMap:!!r.emissiveMap,emissiveMapEncoding:i(r.emissiveMap,t.gammaInput),bumpMap:!!r.bumpMap,normalMap:!!r.normalMap,displacementMap:!!r.displacementMap,roughnessMap:!!r.roughnessMap,metalnessMap:!!r.metalnessMap,specularMap:!!r.specularMap,alphaMap:!!r.alphaMap,gradientMap:!!r.gradientMap,combine:r.combine,vertexColors:r.vertexColors,fog:!!s,useFog:r.fog,fogExp:s&&s.isFogExp2,flatShading:r.shading===bo,sizeAttenuation:r.sizeAttenuation,logarithmicDepthBuffer:e.logarithmicDepthBuffer,skinning:r.skinning&&d>0,maxBones:d,useVertexTexture:e.floatVertexTextures,morphTargets:r.morphTargets,morphNormals:r.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numClippingPlanes:l,numClipIntersection:u,dithering:r.dithering,shadowMapEnabled:t.shadowMap.enabled&&c.receiveShadow&&a.shadows.length>0,shadowMapType:t.shadowMap.type,toneMapping:t.toneMapping,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:r.premultipliedAlpha,alphaTest:r.alphaTest,doubleSided:r.side===yo,flipSided:r.side===vo,depthPacking:void 0!==r.depthPacking&&r.depthPacking}},this.getProgramCode=function(t,e){var n=[];if(e.shaderID?n.push(e.shaderID):(n.push(t.fragmentShader),n.push(t.vertexShader)),void 0!==t.defines)for(var i in t.defines)n.push(i),n.push(t.defines[i]);for(var r=0;r<a.length;r++)n.push(e[a[r]]);return n.join()},this.acquireProgram=function(e,n,i){
// Check if code has been already compiled
for(var o,a=0,s=r.length;a<s;a++){var l=r[a];if(l.code===i){o=l,++o.usedTimes;break}}return void 0===o&&(o=new ae(t,i,e,n),r.push(o)),o},this.releaseProgram=function(t){if(0==--t.usedTimes){
// Remove from unordered set
var e=r.indexOf(t);r[e]=r[r.length-1],r.pop(),
// Free WebGL resources
t.destroy()}},
// Exposed for resource monitoring & error feedback via renderer.info:
this.programs=r}/**
 * @author mrdoob / http://mrdoob.com/
 */
function le(t,e,n,i,r,o,a){
//
function s(t,e){if(t.width>e||t.height>e){
// Warning: Scaling through the canvas will only work with images that use
// premultiplied alpha.
var n=e/Math.max(t.width,t.height),i=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");i.width=Math.floor(t.width*n),i.height=Math.floor(t.height*n);return i.getContext("2d").drawImage(t,0,0,t.width,t.height,0,0,i.width,i.height),i}return t}function l(t){return As.isPowerOfTwo(t.width)&&As.isPowerOfTwo(t.height)}function u(t){if(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement){var e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");e.width=As.nearestPowerOfTwo(t.width),e.height=As.nearestPowerOfTwo(t.height);return e.getContext("2d").drawImage(t,0,0,e.width,e.height),e}return t}function c(t){return t.wrapS!==va||t.wrapT!==va||t.minFilter!==ba&&t.minFilter!==Aa}
// Fallback filters for non-power-of-2 textures
function h(e){return e===ba||e===_a||e===xa?t.NEAREST:t.LINEAR}
//
function d(t){var e=t.target;e.removeEventListener("dispose",d),f(e),a.textures--}function p(t){var e=t.target;e.removeEventListener("dispose",p),m(e),a.textures--}
//
function f(e){var n=i.get(e);if(e.image&&n.__image__webglTextureCube)
// cube texture
t.deleteTexture(n.__image__webglTextureCube);else{
// 2D texture
if(void 0===n.__webglInit)return;t.deleteTexture(n.__webglTexture)}
// remove all webgl properties
i.remove(e)}function m(e){var n=i.get(e),r=i.get(e.texture);if(e){if(void 0!==r.__webglTexture&&t.deleteTexture(r.__webglTexture),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLRenderTargetCube)for(var o=0;o<6;o++)t.deleteFramebuffer(n.__webglFramebuffer[o]),n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer[o]);else t.deleteFramebuffer(n.__webglFramebuffer),n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer);i.remove(e.texture),i.remove(e)}}
//
function g(e,r){var o=i.get(e);if(e.version>0&&o.__version!==e.version){var a=e.image;if(void 0===a);else if(!1!==a.complete)return void _(o,e,r)}n.activeTexture(t.TEXTURE0+r),n.bindTexture(t.TEXTURE_2D,o.__webglTexture)}function v(e,u){var c=i.get(e);if(6===e.image.length)if(e.version>0&&c.__version!==e.version){c.__image__webglTextureCube||(e.addEventListener("dispose",d),c.__image__webglTextureCube=t.createTexture(),a.textures++),n.activeTexture(t.TEXTURE0+u),n.bindTexture(t.TEXTURE_CUBE_MAP,c.__image__webglTextureCube),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,e.flipY);for(var h=e&&e.isCompressedTexture,p=e.image[0]&&e.image[0].isDataTexture,f=[],m=0;m<6;m++)f[m]=h||p?p?e.image[m].image:e.image[m]:s(e.image[m],r.maxCubemapSize);var g=f[0],v=l(g),y=o(e.format),_=o(e.type);b(t.TEXTURE_CUBE_MAP,e,v);for(var m=0;m<6;m++)if(h)for(var x,A=f[m].mipmaps,w=0,S=A.length;w<S;w++)x=A[w],e.format!==ka&&e.format!==Ua?n.getCompressedTextureFormats().indexOf(y)>-1&&n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+m,w,y,x.width,x.height,0,x.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+m,w,y,x.width,x.height,0,y,_,x.data);else p?n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,y,f[m].width,f[m].height,0,y,_,f[m].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,y,y,_,f[m]);e.generateMipmaps&&v&&t.generateMipmap(t.TEXTURE_CUBE_MAP),c.__version=e.version,e.onUpdate&&e.onUpdate(e)}else n.activeTexture(t.TEXTURE0+u),n.bindTexture(t.TEXTURE_CUBE_MAP,c.__image__webglTextureCube)}function y(e,r){n.activeTexture(t.TEXTURE0+r),n.bindTexture(t.TEXTURE_CUBE_MAP,i.get(e).__webglTexture)}function b(n,a,s){var l;if(s?(t.texParameteri(n,t.TEXTURE_WRAP_S,o(a.wrapS)),t.texParameteri(n,t.TEXTURE_WRAP_T,o(a.wrapT)),t.texParameteri(n,t.TEXTURE_MAG_FILTER,o(a.magFilter)),t.texParameteri(n,t.TEXTURE_MIN_FILTER,o(a.minFilter))):(t.texParameteri(n,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(n,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),a.wrapS!==va||a.wrapT,t.texParameteri(n,t.TEXTURE_MAG_FILTER,h(a.magFilter)),t.texParameteri(n,t.TEXTURE_MIN_FILTER,h(a.minFilter)),a.minFilter!==ba&&a.minFilter),l=e.get("EXT_texture_filter_anisotropic")){if(a.type===Na&&null===e.get("OES_texture_float_linear"))return;if(a.type===Ia&&null===e.get("OES_texture_half_float_linear"))return;(a.anisotropy>1||i.get(a).__currentAnisotropy)&&(t.texParameterf(n,l.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,r.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy)}}function _(e,i,h){void 0===e.__webglInit&&(e.__webglInit=!0,i.addEventListener("dispose",d),e.__webglTexture=t.createTexture(),a.textures++),n.activeTexture(t.TEXTURE0+h),n.bindTexture(t.TEXTURE_2D,e.__webglTexture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,i.unpackAlignment);var p=s(i.image,r.maxTextureSize);c(i)&&!1===l(p)&&(p=u(p));var f=l(p),m=o(i.format),g=o(i.type);b(t.TEXTURE_2D,i,f);var v,y=i.mipmaps;if(i.isDepthTexture){
// populate depth texture with dummy data
var _=t.DEPTH_COMPONENT;if(i.type===Na){if(!T)throw new Error("Float Depth Texture only supported in WebGL2.0");_=t.DEPTH_COMPONENT32F}else T&&(
// WebGL 2.0 requires signed internalformat for glTexImage2D
_=t.DEPTH_COMPONENT16);i.format===za&&_===t.DEPTH_COMPONENT&&i.type!==Ca&&i.type!==La&&(i.type=Ca,g=o(i.type)),
// Depth stencil textures need the DEPTH_STENCIL internal format
// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
i.format===Ha&&(_=t.DEPTH_STENCIL,
// The error INVALID_OPERATION is generated by texImage2D if format and internalformat are
// DEPTH_STENCIL and type is not UNSIGNED_INT_24_8_WEBGL.
// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
i.type!==Ba&&(i.type=Ba,g=o(i.type))),n.texImage2D(t.TEXTURE_2D,0,_,p.width,p.height,0,m,g,null)}else if(i.isDataTexture)
// use manually created mipmaps if available
// if there are no manual mipmaps
// set 0 level mipmap and then use GL to generate other mipmap levels
if(y.length>0&&f){for(var x=0,A=y.length;x<A;x++)v=y[x],n.texImage2D(t.TEXTURE_2D,x,m,v.width,v.height,0,m,g,v.data);i.generateMipmaps=!1}else n.texImage2D(t.TEXTURE_2D,0,m,p.width,p.height,0,m,g,p.data);else if(i.isCompressedTexture)for(var x=0,A=y.length;x<A;x++)v=y[x],i.format!==ka&&i.format!==Ua?n.getCompressedTextureFormats().indexOf(m)>-1&&n.compressedTexImage2D(t.TEXTURE_2D,x,m,v.width,v.height,0,v.data):n.texImage2D(t.TEXTURE_2D,x,m,v.width,v.height,0,m,g,v.data);else
// regular Texture (image, video, canvas)
// use manually created mipmaps if available
// if there are no manual mipmaps
// set 0 level mipmap and then use GL to generate other mipmap levels
if(y.length>0&&f){for(var x=0,A=y.length;x<A;x++)v=y[x],n.texImage2D(t.TEXTURE_2D,x,m,m,g,v);i.generateMipmaps=!1}else n.texImage2D(t.TEXTURE_2D,0,m,m,g,p);i.generateMipmaps&&f&&t.generateMipmap(t.TEXTURE_2D),e.__version=i.version,i.onUpdate&&i.onUpdate(i)}
// Render targets
// Setup storage for target texture and bind it to correct framebuffer
function x(e,r,a,s){var l=o(r.texture.format),u=o(r.texture.type);n.texImage2D(s,0,l,r.width,r.height,0,l,u,null),t.bindFramebuffer(t.FRAMEBUFFER,e),t.framebufferTexture2D(t.FRAMEBUFFER,a,s,i.get(r.texture).__webglTexture,0),t.bindFramebuffer(t.FRAMEBUFFER,null)}
// Setup storage for internal depth/stencil buffers and bind to correct framebuffer
function A(e,n){t.bindRenderbuffer(t.RENDERBUFFER,e),n.depthBuffer&&!n.stencilBuffer?(t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e)):n.depthBuffer&&n.stencilBuffer?(t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,e)):
// FIXME: We don't support !depth !stencil
t.renderbufferStorage(t.RENDERBUFFER,t.RGBA4,n.width,n.height),t.bindRenderbuffer(t.RENDERBUFFER,null)}
// Setup resources for a Depth Texture for a FBO (needs an extension)
function w(e,n){if(n&&n.isWebGLRenderTargetCube)throw new Error("Depth Texture with cube render targets is not supported!");if(t.bindFramebuffer(t.FRAMEBUFFER,e),!n.depthTexture||!n.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
// upload an empty depth texture with framebuffer size
i.get(n.depthTexture).__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),g(n.depthTexture,0);var r=i.get(n.depthTexture).__webglTexture;if(n.depthTexture.format===za)t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,r,0);else{if(n.depthTexture.format!==Ha)throw new Error("Unknown depthTexture format");t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,r,0)}}
// Setup GL resources for a non-texture depth buffer
function S(e){var n=i.get(e),r=!0===e.isWebGLRenderTargetCube;if(e.depthTexture){if(r)throw new Error("target.depthTexture not supported in Cube render targets");w(n.__webglFramebuffer,e)}else if(r){n.__webglDepthbuffer=[];for(var o=0;o<6;o++)t.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer[o]),n.__webglDepthbuffer[o]=t.createRenderbuffer(),A(n.__webglDepthbuffer[o],e)}else t.bindFramebuffer(t.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer=t.createRenderbuffer(),A(n.__webglDepthbuffer,e);t.bindFramebuffer(t.FRAMEBUFFER,null)}
// Set up GL resources for the render target
function M(e){var r=i.get(e),o=i.get(e.texture);e.addEventListener("dispose",p),o.__webglTexture=t.createTexture(),a.textures++;var s=!0===e.isWebGLRenderTargetCube,u=l(e);
// Setup framebuffer
if(s){r.__webglFramebuffer=[];for(var c=0;c<6;c++)r.__webglFramebuffer[c]=t.createFramebuffer()}else r.__webglFramebuffer=t.createFramebuffer();
// Setup color buffer
if(s){n.bindTexture(t.TEXTURE_CUBE_MAP,o.__webglTexture),b(t.TEXTURE_CUBE_MAP,e.texture,u);for(var c=0;c<6;c++)x(r.__webglFramebuffer[c],e,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+c);e.texture.generateMipmaps&&u&&t.generateMipmap(t.TEXTURE_CUBE_MAP),n.bindTexture(t.TEXTURE_CUBE_MAP,null)}else n.bindTexture(t.TEXTURE_2D,o.__webglTexture),b(t.TEXTURE_2D,e.texture,u),x(r.__webglFramebuffer,e,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),e.texture.generateMipmaps&&u&&t.generateMipmap(t.TEXTURE_2D),n.bindTexture(t.TEXTURE_2D,null);
// Setup depth and stencil buffers
e.depthBuffer&&S(e)}function E(e){var r=e.texture;if(r.generateMipmaps&&l(e)&&r.minFilter!==ba&&r.minFilter!==Aa){var o=e&&e.isWebGLRenderTargetCube?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,a=i.get(r).__webglTexture;n.bindTexture(o,a),t.generateMipmap(o),n.bindTexture(o,null)}}var T="undefined"!=typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext;this.setTexture2D=g,this.setTextureCube=v,this.setTextureCubeDynamic=y,this.setupRenderTarget=M,this.updateRenderTargetMipmap=E}/**
 * @author fordacious / fordacious.github.io
 */
function ue(){function t(t){var e=t.uuid,n=i[e];return void 0===n&&(n={},i[e]=n),n}function e(t){delete i[t.uuid]}function n(){i={}}var i={};return{get:t,remove:e,clear:n}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function ce(t,e,n){function i(){var e=!1,n=new a,i=null,r=new a;return{setMask:function(n){i===n||e||(t.colorMask(n,n,n,n),i=n)},setLocked:function(t){e=t},setClear:function(e,i,o,a,s){!0===s&&(e*=a,i*=a,o*=a),n.set(e,i,o,a),!1===r.equals(n)&&(t.clearColor(e,i,o,a),r.copy(n))},reset:function(){e=!1,i=null,r.set(0,0,0,1)}}}function r(){var e=!1,n=null,i=null,r=null;return{setTest:function(e){e?p(t.DEPTH_TEST):f(t.DEPTH_TEST)},setMask:function(i){n===i||e||(t.depthMask(i),n=i)},setFunc:function(e){if(i!==e){if(e)switch(e){case Wo:t.depthFunc(t.NEVER);break;case Yo:t.depthFunc(t.ALWAYS);break;case Ko:t.depthFunc(t.LESS);break;case Zo:t.depthFunc(t.LEQUAL);break;case qo:t.depthFunc(t.EQUAL);break;case Qo:t.depthFunc(t.GEQUAL);break;case Jo:t.depthFunc(t.GREATER);break;case $o:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}else t.depthFunc(t.LEQUAL);i=e}},setLocked:function(t){e=t},setClear:function(e){r!==e&&(t.clearDepth(e),r=e)},reset:function(){e=!1,n=null,i=null,r=null}}}function o(){var e=!1,n=null,i=null,r=null,o=null,a=null,s=null,l=null,u=null;return{setTest:function(e){e?p(t.STENCIL_TEST):f(t.STENCIL_TEST)},setMask:function(i){n===i||e||(t.stencilMask(i),n=i)},setFunc:function(e,n,a){i===e&&r===n&&o===a||(t.stencilFunc(e,n,a),i=e,r=n,o=a)},setOp:function(e,n,i){a===e&&s===n&&l===i||(t.stencilOp(e,n,i),a=e,s=n,l=i)},setLocked:function(t){e=t},setClear:function(e){u!==e&&(t.clearStencil(e),u=e)},reset:function(){e=!1,n=null,i=null,r=null,o=null,a=null,s=null,l=null,u=null}}}function s(e,n,i){var r=new Uint8Array(4),o=t.createTexture();t.bindTexture(e,o),t.texParameteri(e,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(e,t.TEXTURE_MAG_FILTER,t.NEAREST);for(var a=0;a<i;a++)t.texImage2D(n+a,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,r);return o}
//
function l(){N.setClear(0,0,0,1),I.setClear(1),O.setClear(0),p(t.DEPTH_TEST),I.setFunc(Zo),y(!1),b(so),p(t.CULL_FACE),p(t.BLEND),g(Mo)}function u(){for(var t=0,e=D.length;t<e;t++)D[t]=0}function c(n){if(D[n]=1,0===B[n]&&(t.enableVertexAttribArray(n),B[n]=1),0!==j[n]){e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n,0),j[n]=0}}function h(n,i){if(D[n]=1,0===B[n]&&(t.enableVertexAttribArray(n),B[n]=1),j[n]!==i){e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n,i),j[n]=i}}function d(){for(var e=0,n=B.length;e!==n;++e)B[e]!==D[e]&&(t.disableVertexAttribArray(e),B[e]=0)}function p(e){!0!==U[e]&&(t.enable(e),U[e]=!0)}function f(e){!1!==U[e]&&(t.disable(e),U[e]=!1)}function m(){if(null===k&&(k=[],e.get("WEBGL_compressed_texture_pvrtc")||e.get("WEBGL_compressed_texture_s3tc")||e.get("WEBGL_compressed_texture_etc1")))for(var n=t.getParameter(t.COMPRESSED_TEXTURE_FORMATS),i=0;i<n.length;i++)k.push(n[i]);return k}function g(e,i,r,o,a,s,l,u){e!==So?p(t.BLEND):f(t.BLEND),e===V&&u===Y||(e===Eo?u?(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ONE,t.ONE,t.ONE,t.ONE)):(t.blendEquation(t.FUNC_ADD),t.blendFunc(t.SRC_ALPHA,t.ONE)):e===To?u?(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ZERO,t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ONE_MINUS_SRC_ALPHA)):(t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ZERO,t.ONE_MINUS_SRC_COLOR)):e===Co?u?(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA)):(t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ZERO,t.SRC_COLOR)):u?(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)):(t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)),V=e,Y=u),e===Po?(a=a||i,s=s||r,l=l||o,i===G&&a===H||(t.blendEquationSeparate(n(i),n(a)),G=i,H=a),r===F&&o===z&&s===X&&l===W||(t.blendFuncSeparate(n(r),n(o),n(s),n(l)),F=r,z=o,X=s,W=l)):(G=null,F=null,z=null,H=null,X=null,W=null)}function v(e){e.side===yo?f(t.CULL_FACE):p(t.CULL_FACE),y(e.side===vo),!0===e.transparent?g(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha):g(So),I.setFunc(e.depthFunc),I.setTest(e.depthTest),I.setMask(e.depthWrite),N.setMask(e.colorWrite),x(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits)}
//
function y(e){K!==e&&(e?t.frontFace(t.CW):t.frontFace(t.CCW),K=e)}function b(e){e!==ao?(p(t.CULL_FACE),e!==Z&&(e===so?t.cullFace(t.BACK):e===lo?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):f(t.CULL_FACE),Z=e}function _(e){e!==q&&(nt&&t.lineWidth(e),q=e)}function x(e,n,i){e?(p(t.POLYGON_OFFSET_FILL),Q===n&&J===i||(t.polygonOffset(n,i),Q=n,J=i)):f(t.POLYGON_OFFSET_FILL)}function A(){return $}function w(e){$=e,e?p(t.SCISSOR_TEST):f(t.SCISSOR_TEST)}
// texture
function S(e){void 0===e&&(e=t.TEXTURE0+tt-1),it!==e&&(t.activeTexture(e),it=e)}function M(e,n){null===it&&S();var i=rt[it];void 0===i&&(i={type:void 0,texture:void 0},rt[it]=i),i.type===e&&i.texture===n||(t.bindTexture(e,n||st[e]),i.type=e,i.texture=n)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(t){}}function T(){try{t.texImage2D.apply(t,arguments)}catch(t){}}
//
function C(e){!1===ot.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),ot.copy(e))}function P(e){!1===at.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),at.copy(e))}
//
function L(){for(var e=0;e<B.length;e++)1===B[e]&&(t.disableVertexAttribArray(e),B[e]=0);U={},k=null,it=null,rt={},V=null,K=null,Z=null,N.reset(),I.reset(),O.reset()}
//
var N=new i,I=new r,O=new o,R=t.getParameter(t.MAX_VERTEX_ATTRIBS),D=new Uint8Array(R),B=new Uint8Array(R),j=new Uint8Array(R),U={},k=null,V=null,G=null,F=null,z=null,H=null,X=null,W=null,Y=!1,K=null,Z=null,q=null,Q=null,J=null,$=null,tt=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),et=parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]),nt=parseFloat(et)>=1,it=null,rt={},ot=new a,at=new a,st={};return st[t.TEXTURE_2D]=s(t.TEXTURE_2D,t.TEXTURE_2D,1),st[t.TEXTURE_CUBE_MAP]=s(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),{buffers:{color:N,depth:I,stencil:O},init:l,initAttributes:u,enableAttribute:c,enableAttributeAndDivisor:h,disableUnusedAttributes:d,enable:p,disable:f,getCompressedTextureFormats:m,setBlending:g,setMaterial:v,setFlipSided:y,setCullFace:b,setLineWidth:_,setPolygonOffset:x,getScissorTest:A,setScissorTest:w,activeTexture:S,bindTexture:M,compressedTexImage2D:E,texImage2D:T,scissor:C,viewport:P,reset:L}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function he(t,e,n){function i(){if(void 0!==o)return o;var n=e.get("EXT_texture_filter_anisotropic");return o=null!==n?t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}function r(e){if("highp"===e){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";e="mediump"}return"mediump"===e&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}var o,a=void 0!==n.precision?n.precision:"highp",s=r(a);s!==a&&(a=s);var l=!0===n.logarithmicDepthBuffer&&!!e.get("EXT_frag_depth"),u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),c=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_TEXTURE_SIZE),d=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),m=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=c>0,y=!!e.get("OES_texture_float");return{getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:c,maxTextureSize:h,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:v&&y}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function de(t){var e={};return{get:function(n){if(void 0!==e[n])return e[n];var i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case"WEBGL_compressed_texture_etc1":i=t.getExtension("WEBGL_compressed_texture_etc1");break;default:i=t.getExtension(n)}return e[n]=i,i}}}/**
 * @author tschw
 */
function pe(){function t(){u.value!==i&&(u.value=i,u.needsUpdate=r>0),n.numPlanes=r,n.numIntersection=0}function e(t,e,i,r){var o=null!==t?t.length:0,a=null;if(0!==o){if(a=u.value,!0!==r||null===a){var c=i+4*o,h=e.matrixWorldInverse;l.getNormalMatrix(h),(null===a||a.length<c)&&(a=new Float32Array(c));for(var d=0,p=i;d!==o;++d,p+=4)s.copy(t[d]).applyMatrix4(h,l),s.normal.toArray(a,p),a[p+3]=s.constant}u.value=a,u.needsUpdate=!0}return n.numPlanes=o,a}var n=this,i=null,r=0,o=!1,a=!1,s=new rt,l=new it,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(t,n,a){var s=0!==t.length||n||
// enable state of previous frame - the clipping code has to
// run another frame in order to reset the state:
0!==r||o;return o=n,i=e(t,a,0),r=t.length,s},this.beginShadows=function(){a=!0,e(null)},this.endShadows=function(){a=!1,t()},this.setState=function(n,s,l,c,h,d){if(!o||null===n||0===n.length||a&&!l)
// there's no local clipping
a?
// there's no global clipping
e(null):t();else{var p=a?0:r,f=4*p,m=h.clippingState||null;u.value=m,// ensure unique state
m=e(n,c,f,d);for(var g=0;g!==f;++g)m[g]=i[g];h.clippingState=m,this.numIntersection=s?this.numPlanes:0,this.numPlanes+=p}}}
// import { Sphere } from '../math/Sphere';
/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 * @author tschw
 */
function fe(t){
//
function e(){return null===nt?yt:1}function n(){qt.init(),qt.scissor(ut.copy(bt).multiplyScalar(yt)),qt.viewport(ht.copy(xt).multiplyScalar(yt)),qt.buffers.color.setClear(pt.r,pt.g,pt.b,mt,F)}function i(){et=null,lt=null,st="",rt=-1,qt.reset()}
// Events
function r(t){t.preventDefault(),i(),n(),Qt.clear(),ee.clear()}function o(t){var e=t.target;e.removeEventListener("dispose",o),s(e)}
// Buffer deallocation
function s(t){l(t),Qt.remove(t)}function l(t){var e=Qt.get(t).program;t.program=void 0,void 0!==e&&ne.releaseProgram(e)}
// Buffer rendering
function u(t,e,n){t.render(function(t){tt.renderBufferImmediate(t,e,n)})}function p(t,e){return Math.abs(e[0])-Math.abs(t[0])}function f(t,e,n,i){if(!n||!n.isInstancedBufferGeometry||null!==Kt.get("ANGLE_instanced_arrays")){void 0===i&&(i=0),qt.initAttributes();var r=n.attributes,o=e.getAttributes(),a=t.defaultAttributeValues;for(var s in o){var l=o[s];if(l>=0){var u=r[s];if(void 0!==u){var c=u.normalized,h=u.itemSize,d=$t.get(u),p=d.buffer,f=d.type,m=d.bytesPerElement;if(u.isInterleavedBufferAttribute){var g=u.data,v=g.stride,y=u.offset;g&&g.isInstancedInterleavedBuffer?(qt.enableAttributeAndDivisor(l,g.meshPerAttribute),void 0===n.maxInstancedCount&&(n.maxInstancedCount=g.meshPerAttribute*g.count)):qt.enableAttribute(l),Vt.bindBuffer(Vt.ARRAY_BUFFER,p),Vt.vertexAttribPointer(l,h,f,c,v*m,(i*v+y)*m)}else u.isInstancedBufferAttribute?(qt.enableAttributeAndDivisor(l,u.meshPerAttribute),void 0===n.maxInstancedCount&&(n.maxInstancedCount=u.meshPerAttribute*u.count)):qt.enableAttribute(l),Vt.bindBuffer(Vt.ARRAY_BUFFER,p),Vt.vertexAttribPointer(l,h,f,c,0,i*h*m)}else if(void 0!==a){var b=a[s];if(void 0!==b)switch(b.length){case 2:Vt.vertexAttrib2fv(l,b);break;case 3:Vt.vertexAttrib3fv(l,b);break;case 4:Vt.vertexAttrib4fv(l,b);break;default:Vt.vertexAttrib1fv(l,b)}}}}qt.disableUnusedAttributes()}}/*
	// TODO Duplicated code (Frustum)

	var _sphere = new Sphere();

	function isObjectViewable( object ) {

		var geometry = object.geometry;

		if ( geometry.boundingSphere === null )
			geometry.computeBoundingSphere();

		_sphere.copy( geometry.boundingSphere ).
		applyMatrix4( object.matrixWorld );

		return isSphereViewable( _sphere );

	}

	function isSpriteViewable( sprite ) {

		_sphere.center.set( 0, 0, 0 );
		_sphere.radius = 0.7071067811865476;
		_sphere.applyMatrix4( sprite.matrixWorld );

		return isSphereViewable( _sphere );

	}

	function isSphereViewable( sphere ) {

		if ( ! _frustum.intersectsSphere( sphere ) ) return false;

		var numPlanes = _clipping.numPlanes;

		if ( numPlanes === 0 ) return true;

		var planes = _this.clippingPlanes,

			center = sphere.center,
			negRad = - sphere.radius,
			i = 0;

		do {

			// out when deeper than radius in the negative halfspace
			if ( planes[ i ].distanceToPoint( center ) < negRad ) return false;

		} while ( ++ i !== numPlanes );

		return true;

	}
	*/
function m(t,e,n){if(t.visible){if(t.layers.test(e.layers))if(t.isLight)H.push(t);else if(t.isSprite)t.frustumCulled&&!At.intersectsSprite(t)||Z.push(t);else if(t.isLensFlare)J.push(t);else if(t.isImmediateRenderObject)n&&Tt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Et),X.push(t,null,t.material,Tt.z,null);else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.update(),!t.frustumCulled||At.intersectsObject(t))){n&&Tt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Et);var i=ee.update(t),r=t.material;if(Array.isArray(r))for(var o=i.groups,a=0,s=o.length;a<s;a++){var l=o[a],u=r[l.materialIndex];u&&u.visible&&X.push(t,i,u,Tt.z,l)}else r.visible&&X.push(t,i,r,Tt.z,null)}for(var c=t.children,a=0,s=c.length;a<s;a++)m(c[a],e,n)}}function g(t,e,n,i){for(var r=0,o=t.length;r<o;r++){var a=t[r],s=a.object,l=a.geometry,u=void 0===i?a.material:i,c=a.group;if(s.onBeforeRender(tt,e,n,l,u,c),n.isArrayCamera&&n.enabled)for(var h=n.cameras,d=0,p=h.length;d<p;d++){var f=h[d],m=f.bounds;tt.setViewport(m.x*gt*yt,m.y*vt*yt,m.z*gt*yt,m.w*vt*yt),tt.setScissor(m.x*gt*yt,m.y*vt*yt,m.z*gt*yt,m.w*vt*yt),tt.setScissorTest(!0),v(s,e,f,l,u,c)}else v(s,e,n,l,u,c);s.onAfterRender(tt,e,n,l,u,c)}}function v(t,e,n,i,r,o){if(t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),t.isImmediateRenderObject){qt.setMaterial(r);var a=b(n,e.fog,r,t);st="",u(t,a,r)}else tt.renderBufferDirect(n,e.fog,i,r,t,o)}function y(t,e,n){var i=Qt.get(t),r=ne.getParameters(t,Ot,e,wt.numPlanes,wt.numIntersection,n),a=ne.getProgramCode(t,r),s=i.program,u=!0;if(void 0===s)
// new material
t.addEventListener("dispose",o);else if(s.code!==a)
// changed glsl or parameters
l(t);else{if(void 0!==r.shaderID)
// same glsl and uniform list
return;
// only rebuild uniform list
u=!1}if(u){if(r.shaderID){var c=Ds[r.shaderID];i.__webglShader={name:t.type,uniforms:Os.clone(c.uniforms),vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}}else i.__webglShader={name:t.type,uniforms:t.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader};t.__webglShader=i.__webglShader,s=ne.acquireProgram(t,r,a),i.program=s,t.program=s}var h=s.getAttributes();if(t.morphTargets){t.numSupportedMorphTargets=0;for(var d=0;d<tt.maxMorphTargets;d++)h["morphTarget"+d]>=0&&t.numSupportedMorphTargets++}if(t.morphNormals){t.numSupportedMorphNormals=0;for(var d=0;d<tt.maxMorphNormals;d++)h["morphNormal"+d]>=0&&t.numSupportedMorphNormals++}var p=i.__webglShader.uniforms;(t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(i.numClippingPlanes=wt.numPlanes,i.numIntersection=wt.numIntersection,p.clippingPlanes=wt.uniform),i.fog=e,
// store the light setup it was created for
i.lightsHash=Ot.hash,t.lights&&(
// wire up the material to this renderer's lighting state
p.ambientLightColor.value=Ot.ambient,p.directionalLights.value=Ot.directional,p.spotLights.value=Ot.spot,p.rectAreaLights.value=Ot.rectArea,p.pointLights.value=Ot.point,p.hemisphereLights.value=Ot.hemi,p.directionalShadowMap.value=Ot.directionalShadowMap,p.directionalShadowMatrix.value=Ot.directionalShadowMatrix,p.spotShadowMap.value=Ot.spotShadowMap,p.spotShadowMatrix.value=Ot.spotShadowMatrix,p.pointShadowMap.value=Ot.pointShadowMap,p.pointShadowMatrix.value=Ot.pointShadowMatrix);var f=i.program.getUniforms(),m=Y.seqWithValue(f.seq,p);i.uniformsList=m}function b(t,e,n,i){dt=0;var r=Qt.get(n);if(St&&(Mt||t!==lt)){var o=t===lt&&n.id===rt;
// we might want to call this function with some ClippingGroup
// object instead of the material, once it becomes feasible
// (#8465, #8379)
wt.setState(n.clippingPlanes,n.clipIntersection,n.clipShadows,t,r,o)}!1===n.needsUpdate&&(void 0===r.program?n.needsUpdate=!0:n.fog&&r.fog!==e?n.needsUpdate=!0:n.lights&&r.lightsHash!==Ot.hash?n.needsUpdate=!0:void 0===r.numClippingPlanes||r.numClippingPlanes===wt.numPlanes&&r.numIntersection===wt.numIntersection||(n.needsUpdate=!0)),n.needsUpdate&&(y(n,e,i),n.needsUpdate=!1);var a=!1,s=!1,l=!1,u=r.program,c=u.getUniforms(),h=r.__webglShader.uniforms;if(u.id!==et&&(Vt.useProgram(u.program),et=u.id,a=!0,s=!0,l=!0),n.id!==rt&&(rt=n.id,s=!0),a||t!==lt){
// load material specific uniforms
// (shader material also gets them for the sake of genericity)
if(c.setValue(Vt,"projectionMatrix",t.projectionMatrix),Zt.logarithmicDepthBuffer&&c.setValue(Vt,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),t!==lt&&(lt=t,
// lighting uniforms depend on the camera so enforce an update
// now, in case this material supports lights - or later, when
// the next material that does gets activated:
s=!0,// set to true on material change
l=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshStandardMaterial||n.envMap){var p=c.map.cameraPosition;void 0!==p&&p.setValue(Vt,Tt.setFromMatrixPosition(t.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.skinning)&&c.setValue(Vt,"viewMatrix",t.matrixWorldInverse),c.setValue(Vt,"toneMappingExposure",tt.toneMappingExposure),c.setValue(Vt,"toneMappingWhitePoint",tt.toneMappingWhitePoint)}
// skinning uniforms must be set even if material didn't change
// auto-setting of texture unit for bone texture must go before other textures
// not sure why, but otherwise weird things happen
if(n.skinning){c.setOptional(Vt,i,"bindMatrix"),c.setOptional(Vt,i,"bindMatrixInverse");var f=i.skeleton;if(f){var m=f.bones;if(Zt.floatVertexTextures){if(void 0===f.boneTexture){
// layout (1 matrix = 4 pixels)
//      RGBA RGBA RGBA RGBA (=> column1, column2, column3, column4)
//  with  8x8  pixel texture max   16 bones * 4 pixels =  (8 * 8)
//       16x16 pixel texture max   64 bones * 4 pixels = (16 * 16)
//       32x32 pixel texture max  256 bones * 4 pixels = (32 * 32)
//       64x64 pixel texture max 1024 bones * 4 pixels = (64 * 64)
var g=Math.sqrt(4*m.length);// 4 pixels needed for 1 matrix
g=As.nextPowerOfTwo(Math.ceil(g)),g=Math.max(g,4);var v=new Float32Array(g*g*4);// 4 floats per RGBA pixel
v.set(f.boneMatrices);// copy current values
var b=new d(v,g,g,ka,Na);f.boneMatrices=v,f.boneTexture=b,f.boneTextureSize=g}c.setValue(Vt,"boneTexture",f.boneTexture),c.setValue(Vt,"boneTextureSize",f.boneTextureSize)}else c.setOptional(Vt,f,"boneMatrices")}}
// the current material requires lighting info
// note: all lighting uniforms are always set correctly
// they simply reference the renderer's state for their
// values
//
// use the current material's .needsUpdate flags to set
// the GL state when required
// refresh uniforms common to several materials
// refresh single material specific uniforms
// RectAreaLight Texture
// TODO (mrdoob): Find a nicer implementation
// common matrices
return s&&(n.lights&&N(h,l),e&&n.fog&&S(h,e),(n.isMeshBasicMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial||n.isMeshStandardMaterial||n.isMeshNormalMaterial||n.isMeshDepthMaterial)&&_(h,n),n.isLineBasicMaterial?x(h,n):n.isLineDashedMaterial?(x(h,n),A(h,n)):n.isPointsMaterial?w(h,n):n.isMeshLambertMaterial?M(h,n):n.isMeshToonMaterial?T(h,n):n.isMeshPhongMaterial?E(h,n):n.isMeshPhysicalMaterial?P(h,n):n.isMeshStandardMaterial?C(h,n):n.isMeshDepthMaterial?n.displacementMap&&(h.displacementMap.value=n.displacementMap,h.displacementScale.value=n.displacementScale,h.displacementBias.value=n.displacementBias):n.isMeshNormalMaterial&&L(h,n),void 0!==h.ltcMat&&(h.ltcMat.value=Is.LTC_MAT_TEXTURE),void 0!==h.ltcMag&&(h.ltcMag.value=Is.LTC_MAG_TEXTURE),Y.upload(Vt,r.uniformsList,h,tt)),c.setValue(Vt,"modelViewMatrix",i.modelViewMatrix),c.setValue(Vt,"normalMatrix",i.normalMatrix),c.setValue(Vt,"modelMatrix",i.matrixWorld),u}
// Uniforms (refresh uniforms objects)
function _(t,e){t.opacity.value=e.opacity,t.diffuse.value=e.color,e.emissive&&t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),t.map.value=e.map,t.specularMap.value=e.specularMap,t.alphaMap.value=e.alphaMap,e.lightMap&&(t.lightMap.value=e.lightMap,t.lightMapIntensity.value=e.lightMapIntensity),e.aoMap&&(t.aoMap.value=e.aoMap,t.aoMapIntensity.value=e.aoMapIntensity);
// uv repeat and offset setting priorities
// 1. color map
// 2. specular map
// 3. normal map
// 4. bump map
// 5. alpha map
// 6. emissive map
var n;if(e.map?n=e.map:e.specularMap?n=e.specularMap:e.displacementMap?n=e.displacementMap:e.normalMap?n=e.normalMap:e.bumpMap?n=e.bumpMap:e.roughnessMap?n=e.roughnessMap:e.metalnessMap?n=e.metalnessMap:e.alphaMap?n=e.alphaMap:e.emissiveMap&&(n=e.emissiveMap),void 0!==n){
// backwards compatibility
n.isWebGLRenderTarget&&(n=n.texture);var i=n.offset,r=n.repeat;t.offsetRepeat.value.set(i.x,i.y,r.x,r.y)}t.envMap.value=e.envMap,
// don't flip CubeTexture envMaps, flip everything else:
//  WebGLRenderTargetCube will be flipped for backwards compatibility
//  WebGLRenderTargetCube.texture will be flipped because it's a Texture and NOT a CubeTexture
// this check must be handled differently, or removed entirely, if WebGLRenderTargetCube uses a CubeTexture in the future
t.flipEnvMap.value=e.envMap&&e.envMap.isCubeTexture?-1:1,t.reflectivity.value=e.reflectivity,t.refractionRatio.value=e.refractionRatio}function x(t,e){t.diffuse.value=e.color,t.opacity.value=e.opacity}function A(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale}function w(t,e){if(t.diffuse.value=e.color,t.opacity.value=e.opacity,t.size.value=e.size*yt,t.scale.value=.5*vt,t.map.value=e.map,null!==e.map){var n=e.map.offset,i=e.map.repeat;t.offsetRepeat.value.set(n.x,n.y,i.x,i.y)}}function S(t,e){t.fogColor.value=e.color,e.isFog?(t.fogNear.value=e.near,t.fogFar.value=e.far):e.isFogExp2&&(t.fogDensity.value=e.density)}function M(t,e){e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap)}function E(t,e){t.specular.value=e.specular,t.shininess.value=Math.max(e.shininess,1e-4),// to prevent pow( 0.0, 0.0 )
e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap),e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale)),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}function T(t,e){E(t,e),e.gradientMap&&(t.gradientMap.value=e.gradientMap)}function C(t,e){t.roughness.value=e.roughness,t.metalness.value=e.metalness,e.roughnessMap&&(t.roughnessMap.value=e.roughnessMap),e.metalnessMap&&(t.metalnessMap.value=e.metalnessMap),e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap),e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale)),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias),e.envMap&&(
//uniforms.envMap.value = material.envMap; // part of uniforms common
t.envMapIntensity.value=e.envMapIntensity)}function P(t,e){t.clearCoat.value=e.clearCoat,t.clearCoatRoughness.value=e.clearCoatRoughness,C(t,e)}function L(t,e){e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale)),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}
// If uniforms are marked as clean, they don't need to be loaded to the GPU.
function N(t,e){t.ambientLightColor.needsUpdate=e,t.directionalLights.needsUpdate=e,t.pointLights.needsUpdate=e,t.spotLights.needsUpdate=e,t.rectAreaLights.needsUpdate=e,t.hemisphereLights.needsUpdate=e}
// Lighting
function I(t){for(var e=0,n=0,i=t.length;n<i;n++){var r=t[n];r.castShadow&&(Ot.shadows[e]=r,e++)}Ot.shadows.length=e}function O(t,e){var n,i,r,o,a,s,l,u,c=0,h=0,d=0,p=e.matrixWorldInverse,f=0,m=0,g=0,v=0,y=0;for(n=0,i=t.length;n<i;n++)if(r=t[n],a=r.color,s=r.intensity,l=r.distance,u=r.shadow&&r.shadow.map?r.shadow.map.texture:null,r.isAmbientLight)c+=a.r*s,h+=a.g*s,d+=a.b*s;else if(r.isDirectionalLight){var b=ie.get(r);b.color.copy(r.color).multiplyScalar(r.intensity),b.direction.setFromMatrixPosition(r.matrixWorld),Tt.setFromMatrixPosition(r.target.matrixWorld),b.direction.sub(Tt),b.direction.transformDirection(p),b.shadow=r.castShadow,r.castShadow&&(o=r.shadow,b.shadowBias=o.bias,b.shadowRadius=o.radius,b.shadowMapSize=o.mapSize),Ot.directionalShadowMap[f]=u,Ot.directionalShadowMatrix[f]=r.shadow.matrix,Ot.directional[f]=b,f++}else if(r.isSpotLight){var b=ie.get(r);b.position.setFromMatrixPosition(r.matrixWorld),b.position.applyMatrix4(p),b.color.copy(a).multiplyScalar(s),b.distance=l,b.direction.setFromMatrixPosition(r.matrixWorld),Tt.setFromMatrixPosition(r.target.matrixWorld),b.direction.sub(Tt),b.direction.transformDirection(p),b.coneCos=Math.cos(r.angle),b.penumbraCos=Math.cos(r.angle*(1-r.penumbra)),b.decay=0===r.distance?0:r.decay,b.shadow=r.castShadow,r.castShadow&&(o=r.shadow,b.shadowBias=o.bias,b.shadowRadius=o.radius,b.shadowMapSize=o.mapSize),Ot.spotShadowMap[g]=u,Ot.spotShadowMatrix[g]=r.shadow.matrix,Ot.spot[g]=b,g++}else if(r.isRectAreaLight){var b=ie.get(r);
// (a) intensity controls irradiance of entire light
b.color.copy(a).multiplyScalar(s/(r.width*r.height)),
// (b) intensity controls the radiance per light area
// uniforms.color.copy( color ).multiplyScalar( intensity );
b.position.setFromMatrixPosition(r.matrixWorld),b.position.applyMatrix4(p),
// extract local rotation of light to derive width/height half vectors
Nt.identity(),Ct.copy(r.matrixWorld),Ct.premultiply(p),Nt.extractRotation(Ct),b.halfWidth.set(.5*r.width,0,0),b.halfHeight.set(0,.5*r.height,0),b.halfWidth.applyMatrix4(Nt),b.halfHeight.applyMatrix4(Nt),
// TODO (abelnation): RectAreaLight distance?
// uniforms.distance = distance;
Ot.rectArea[v]=b,v++}else if(r.isPointLight){var b=ie.get(r);b.position.setFromMatrixPosition(r.matrixWorld),b.position.applyMatrix4(p),b.color.copy(r.color).multiplyScalar(r.intensity),b.distance=r.distance,b.decay=0===r.distance?0:r.decay,b.shadow=r.castShadow,r.castShadow&&(o=r.shadow,b.shadowBias=o.bias,b.shadowRadius=o.radius,b.shadowMapSize=o.mapSize),Ot.pointShadowMap[m]=u,Ot.pointShadowMatrix[m]=r.shadow.matrix,Ot.point[m]=b,m++}else if(r.isHemisphereLight){var b=ie.get(r);b.direction.setFromMatrixPosition(r.matrixWorld),b.direction.transformDirection(p),b.direction.normalize(),b.skyColor.copy(r.color).multiplyScalar(s),b.groundColor.copy(r.groundColor).multiplyScalar(s),Ot.hemi[y]=b,y++}Ot.ambient[0]=c,Ot.ambient[1]=h,Ot.ambient[2]=d,Ot.directional.length=f,Ot.spot.length=g,Ot.rectArea.length=v,Ot.point.length=m,Ot.hemi.length=y,
// TODO (sam-g-steel) why aren't we using join
Ot.hash=f+","+m+","+g+","+v+","+y+","+Ot.shadows.length}
// Textures
function R(){var t=dt;return Zt.maxTextures,dt+=1,t}
// Map three.js constants to WebGL constants
function D(t){var e;if(t===ga)return Vt.REPEAT;if(t===va)return Vt.CLAMP_TO_EDGE;if(t===ya)return Vt.MIRRORED_REPEAT;if(t===ba)return Vt.NEAREST;if(t===_a)return Vt.NEAREST_MIPMAP_NEAREST;if(t===xa)return Vt.NEAREST_MIPMAP_LINEAR;if(t===Aa)return Vt.LINEAR;if(t===wa)return Vt.LINEAR_MIPMAP_NEAREST;if(t===Sa)return Vt.LINEAR_MIPMAP_LINEAR;if(t===Ma)return Vt.UNSIGNED_BYTE;if(t===Oa)return Vt.UNSIGNED_SHORT_4_4_4_4;if(t===Ra)return Vt.UNSIGNED_SHORT_5_5_5_1;if(t===Da)return Vt.UNSIGNED_SHORT_5_6_5;if(t===Ea)return Vt.BYTE;if(t===Ta)return Vt.SHORT;if(t===Ca)return Vt.UNSIGNED_SHORT;if(t===Pa)return Vt.INT;if(t===La)return Vt.UNSIGNED_INT;if(t===Na)return Vt.FLOAT;if(t===Ia&&null!==(e=Kt.get("OES_texture_half_float")))return e.HALF_FLOAT_OES;if(t===ja)return Vt.ALPHA;if(t===Ua)return Vt.RGB;if(t===ka)return Vt.RGBA;if(t===Va)return Vt.LUMINANCE;if(t===Ga)return Vt.LUMINANCE_ALPHA;if(t===za)return Vt.DEPTH_COMPONENT;if(t===Ha)return Vt.DEPTH_STENCIL;if(t===Lo)return Vt.FUNC_ADD;if(t===No)return Vt.FUNC_SUBTRACT;if(t===Io)return Vt.FUNC_REVERSE_SUBTRACT;if(t===Do)return Vt.ZERO;if(t===Bo)return Vt.ONE;if(t===jo)return Vt.SRC_COLOR;if(t===Uo)return Vt.ONE_MINUS_SRC_COLOR;if(t===ko)return Vt.SRC_ALPHA;if(t===Vo)return Vt.ONE_MINUS_SRC_ALPHA;if(t===Go)return Vt.DST_ALPHA;if(t===Fo)return Vt.ONE_MINUS_DST_ALPHA;if(t===zo)return Vt.DST_COLOR;if(t===Ho)return Vt.ONE_MINUS_DST_COLOR;if(t===Xo)return Vt.SRC_ALPHA_SATURATE;if((t===Xa||t===Wa||t===Ya||t===Ka)&&null!==(e=Kt.get("WEBGL_compressed_texture_s3tc"))){if(t===Xa)return e.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Wa)return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ya)return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ka)return e.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((t===Za||t===qa||t===Qa||t===Ja)&&null!==(e=Kt.get("WEBGL_compressed_texture_pvrtc"))){if(t===Za)return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===qa)return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Qa)return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ja)return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===$a&&null!==(e=Kt.get("WEBGL_compressed_texture_etc1")))return e.COMPRESSED_RGB_ETC1_WEBGL;if((t===Oo||t===Ro)&&null!==(e=Kt.get("EXT_blend_minmax"))){if(t===Oo)return e.MIN_EXT;if(t===Ro)return e.MAX_EXT}return t===Ba&&null!==(e=Kt.get("WEBGL_depth_texture"))?e.UNSIGNED_INT_24_8_WEBGL:0}t=t||{};var B=void 0!==t.canvas?t.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),j=void 0!==t.context?t.context:null,U=void 0!==t.alpha&&t.alpha,k=void 0===t.depth||t.depth,V=void 0===t.stencil||t.stencil,G=void 0!==t.antialias&&t.antialias,F=void 0===t.premultipliedAlpha||t.premultipliedAlpha,z=void 0!==t.preserveDrawingBuffer&&t.preserveDrawingBuffer,H=[],X=null,W=new Float32Array(8),Z=[],J=[];
// public properties
this.domElement=B,this.context=null,
// clearing
this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,
// scene graph
this.sortObjects=!0,
// user-defined clipping
this.clippingPlanes=[],this.localClippingEnabled=!1,
// physically based shading
this.gammaFactor=2,// for backwards compatibility
this.gammaInput=!1,this.gammaOutput=!1,
// physical lights
this.physicallyCorrectLights=!1,
// tone mapping
this.toneMapping=ra,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,
// morphs
this.maxMorphTargets=8,this.maxMorphNormals=4;
// internal properties
var tt=this,
// internal state cache
et=null,nt=null,it=null,rt=-1,st="",lt=null,ut=new a,ct=null,ht=new a,
//
dt=0,
//
pt=new K(0),mt=0,gt=B.width,vt=B.height,yt=1,bt=new a(0,0,gt,vt),_t=!1,xt=new a(0,0,gt,vt),
// frustum
At=new ot,
// clipping
wt=new pe,St=!1,Mt=!1,
// camera matrices cache
Et=new h,Tt=new c,Ct=new h,Nt=new h,
// light arrays cache
Ot={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},
// info
Dt={geometries:0,textures:0},kt={frame:0,calls:0,vertices:0,faces:0,points:0};this.info={render:kt,memory:Dt,programs:null};
// initialize
var Vt;try{var Gt={alpha:U,depth:k,stencil:V,antialias:G,premultipliedAlpha:F,preserveDrawingBuffer:z};if(null===(Vt=j||B.getContext("webgl",Gt)||B.getContext("experimental-webgl",Gt)))throw null!==B.getContext("webgl")?"Error creating WebGL context with your selected attributes.":"Error creating WebGL context.";
// Some experimental-webgl implementations do not have getShaderPrecisionFormat
void 0===Vt.getShaderPrecisionFormat&&(Vt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}),B.addEventListener("webglcontextlost",r,!1)}catch(t){}var Kt=new de(Vt);Kt.get("WEBGL_depth_texture"),Kt.get("OES_texture_float"),Kt.get("OES_texture_float_linear"),Kt.get("OES_texture_half_float"),Kt.get("OES_texture_half_float_linear"),Kt.get("OES_standard_derivatives"),Kt.get("ANGLE_instanced_arrays"),Kt.get("OES_element_index_uint")&&(Pt.MaxIndex=4294967296);var Zt=new he(Vt,Kt,t),qt=new ce(Vt,Kt,D),Qt=new ue,Jt=new le(Vt,Kt,qt,Qt,Zt,D,Dt),$t=new Ut(Vt),te=new Xt(Vt,$t,Dt),ee=new Yt(Vt,te,kt),ne=new se(this,Zt),ie=new Wt,re=new Ft;this.info.programs=ne.programs;var oe,ae,fe,me,ge=new Ht(Vt,Kt,kt),ve=new zt(Vt,Kt,kt);n(),this.context=Vt,this.capabilities=Zt,this.extensions=Kt,this.properties=Qt,this.state=qt;
// shadow map
var ye=new at(this,Ot,ee,Zt);this.shadowMap=ye;
// Plugins
var be=new Q(this,Z),_e=new q(this,J);
// API
this.getContext=function(){return Vt},this.getContextAttributes=function(){return Vt.getContextAttributes()},this.forceContextLoss=function(){var t=Kt.get("WEBGL_lose_context");t&&t.loseContext()},this.getMaxAnisotropy=function(){return Zt.getMaxAnisotropy()},this.getPrecision=function(){return Zt.precision},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(t){void 0!==t&&(yt=t,this.setSize(xt.z,xt.w,!1))},this.getSize=function(){return{width:gt,height:vt}},this.setSize=function(t,e,n){gt=t,vt=e,B.width=t*yt,B.height=e*yt,!1!==n&&(B.style.width=t+"px",B.style.height=e+"px"),this.setViewport(0,0,t,e)},this.setViewport=function(t,e,n,i){qt.viewport(xt.set(t,e,n,i))},this.setScissor=function(t,e,n,i){qt.scissor(bt.set(t,e,n,i))},this.setScissorTest=function(t){qt.setScissorTest(_t=t)},
// Clearing
this.getClearColor=function(){return pt},this.setClearColor=function(t,e){pt.set(t),mt=void 0!==e?e:1,qt.buffers.color.setClear(pt.r,pt.g,pt.b,mt,F)},this.getClearAlpha=function(){return mt},this.setClearAlpha=function(t){mt=t,qt.buffers.color.setClear(pt.r,pt.g,pt.b,mt,F)},this.clear=function(t,e,n){var i=0;(void 0===t||t)&&(i|=Vt.COLOR_BUFFER_BIT),(void 0===e||e)&&(i|=Vt.DEPTH_BUFFER_BIT),(void 0===n||n)&&(i|=Vt.STENCIL_BUFFER_BIT),Vt.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.clearTarget=function(t,e,n,i){this.setRenderTarget(t),this.clear(e,n,i)},
// Reset
this.resetGLState=i,this.dispose=function(){B.removeEventListener("webglcontextlost",r,!1),re.dispose()},this.renderBufferImmediate=function(t,e,n){qt.initAttributes();var i=Qt.get(t);t.hasPositions&&!i.position&&(i.position=Vt.createBuffer()),t.hasNormals&&!i.normal&&(i.normal=Vt.createBuffer()),t.hasUvs&&!i.uv&&(i.uv=Vt.createBuffer()),t.hasColors&&!i.color&&(i.color=Vt.createBuffer());var r=e.getAttributes();if(t.hasPositions&&(Vt.bindBuffer(Vt.ARRAY_BUFFER,i.position),Vt.bufferData(Vt.ARRAY_BUFFER,t.positionArray,Vt.DYNAMIC_DRAW),qt.enableAttribute(r.position),Vt.vertexAttribPointer(r.position,3,Vt.FLOAT,!1,0,0)),t.hasNormals){if(Vt.bindBuffer(Vt.ARRAY_BUFFER,i.normal),!n.isMeshPhongMaterial&&!n.isMeshStandardMaterial&&!n.isMeshNormalMaterial&&n.shading===bo)for(var o=0,a=3*t.count;o<a;o+=9){var s=t.normalArray,l=(s[o+0]+s[o+3]+s[o+6])/3,u=(s[o+1]+s[o+4]+s[o+7])/3,c=(s[o+2]+s[o+5]+s[o+8])/3;s[o+0]=l,s[o+1]=u,s[o+2]=c,s[o+3]=l,s[o+4]=u,s[o+5]=c,s[o+6]=l,s[o+7]=u,s[o+8]=c}Vt.bufferData(Vt.ARRAY_BUFFER,t.normalArray,Vt.DYNAMIC_DRAW),qt.enableAttribute(r.normal),Vt.vertexAttribPointer(r.normal,3,Vt.FLOAT,!1,0,0)}t.hasUvs&&n.map&&(Vt.bindBuffer(Vt.ARRAY_BUFFER,i.uv),Vt.bufferData(Vt.ARRAY_BUFFER,t.uvArray,Vt.DYNAMIC_DRAW),qt.enableAttribute(r.uv),Vt.vertexAttribPointer($t.uv,2,Vt.FLOAT,!1,0,0)),t.hasColors&&n.vertexColors!==xo&&(Vt.bindBuffer(Vt.ARRAY_BUFFER,i.color),Vt.bufferData(Vt.ARRAY_BUFFER,t.colorArray,Vt.DYNAMIC_DRAW),qt.enableAttribute(r.color),Vt.vertexAttribPointer(r.color,3,Vt.FLOAT,!1,0,0)),qt.disableUnusedAttributes(),Vt.drawArrays(Vt.TRIANGLES,0,t.count),t.count=0},this.renderBufferDirect=function(t,n,i,r,o,a){qt.setMaterial(r);var s=b(t,n,r,o),l=i.id+"_"+s.id+"_"+(!0===r.wireframe),u=!1;l!==st&&(st=l,u=!0);
// morph targets
var c=o.morphTargetInfluences;if(void 0!==c){for(var h=[],d=0,m=c.length;d<m;d++){var g=c[d];h.push([g,d])}h.sort(p),h.length>8&&(h.length=8);for(var v=i.morphAttributes,d=0,m=h.length;d<m;d++){var g=h[d];if(W[d]=g[0],0!==g[0]){var y=g[1];!0===r.morphTargets&&v.position&&i.addAttribute("morphTarget"+d,v.position[y]),!0===r.morphNormals&&v.normal&&i.addAttribute("morphNormal"+d,v.normal[y])}else!0===r.morphTargets&&i.removeAttribute("morphTarget"+d),!0===r.morphNormals&&i.removeAttribute("morphNormal"+d)}for(var d=h.length,_=W.length;d<_;d++)W[d]=0;s.getUniforms().setValue(Vt,"morphTargetInfluences",W),u=!0}
//
var y=i.index,x=i.attributes.position,A=1;!0===r.wireframe&&(y=te.getWireframeAttribute(i),A=2);var w=ge;null!==y&&(w=ve,w.setIndex(y)),u&&(f(r,s,i),null!==y&&Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER,$t.get(y).buffer));
//
var S=0;null!==y?S=y.count:void 0!==x&&(S=x.count);var M=i.drawRange.start*A,E=i.drawRange.count*A,T=null!==a?a.start*A:0,C=null!==a?a.count*A:1/0,P=Math.max(M,T),L=Math.min(S,M+E,T+C)-1,N=Math.max(0,L-P+1);if(0!==N){
//
if(o.isMesh)if(!0===r.wireframe)qt.setLineWidth(r.wireframeLinewidth*e()),w.setMode(Vt.LINES);else switch(o.drawMode){case us:w.setMode(Vt.TRIANGLES);break;case cs:w.setMode(Vt.TRIANGLE_STRIP);break;case hs:w.setMode(Vt.TRIANGLE_FAN)}else if(o.isLine){var I=r.linewidth;void 0===I&&(I=1),// Not using Line*Material
qt.setLineWidth(I*e()),o.isLineSegments?w.setMode(Vt.LINES):o.isLineLoop?w.setMode(Vt.LINE_LOOP):w.setMode(Vt.LINE_STRIP)}else o.isPoints&&w.setMode(Vt.POINTS);i&&i.isInstancedBufferGeometry?i.maxInstancedCount>0&&w.renderInstances(i,P,N):w.render(P,N)}},
// Compile
this.compile=function(t,e){H=[],t.traverse(function(t){t.isLight&&H.push(t)}),O(H,e),t.traverse(function(e){if(e.material)if(Array.isArray(e.material))for(var n=0;n<e.material.length;n++)y(e.material[n],t.fog,e);else y(e.material,t.fog,e)})},
// Rendering
this.render=function(t,e,n,i){if(void 0===e||!0===e.isCamera){
// reset caching for this frame
st="",rt=-1,lt=null,
// update scene graph
!0===t.autoUpdate&&t.updateMatrixWorld(),
// update camera matrices and frustum
e.onBeforeRender(tt),null===e.parent&&e.updateMatrixWorld(),e.matrixWorldInverse.getInverse(e.matrixWorld),Et.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),At.setFromMatrix(Et),H.length=0,Z.length=0,J.length=0,Mt=this.localClippingEnabled,St=wt.init(this.clippingPlanes,Mt,e),X=re.get(t,e),X.init(),m(t,e,tt.sortObjects),X.finish(),!0===tt.sortObjects&&X.sort(),
//
St&&wt.beginShadows(),I(H),ye.render(t,e),O(H,e),St&&wt.endShadows(),
//
kt.frame++,kt.calls=0,kt.vertices=0,kt.faces=0,kt.points=0,void 0===n&&(n=null),this.setRenderTarget(n);
//
var r=t.background;null===r?qt.buffers.color.setClear(pt.r,pt.g,pt.b,mt,F):r&&r.isColor&&(qt.buffers.color.setClear(r.r,r.g,r.b,1,F),i=!0),(this.autoClear||i)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil),r&&r.isCubeTexture?(void 0===fe&&(fe=new Bt,me=new Lt(new It(5,5,5),new $({uniforms:Ds.cube.uniforms,vertexShader:Ds.cube.vertexShader,fragmentShader:Ds.cube.fragmentShader,side:vo,depthTest:!1,depthWrite:!1,fog:!1}))),fe.projectionMatrix.copy(e.projectionMatrix),fe.matrixWorld.extractRotation(e.matrixWorld),fe.matrixWorldInverse.getInverse(fe.matrixWorld),me.material.uniforms.tCube.value=r,me.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,me.matrixWorld),ee.update(me),tt.renderBufferDirect(fe,null,me.geometry,me.material,me,null)):r&&r.isTexture&&(void 0===oe&&(oe=new jt(-1,1,1,-1,0,1),ae=new Lt(new Rt(2,2),new ft({depthTest:!1,depthWrite:!1,fog:!1}))),ae.material.map=r,ee.update(ae),tt.renderBufferDirect(oe,null,ae.geometry,ae.material,ae,null));
//
var o=X.opaque,a=X.transparent;if(t.overrideMaterial){var s=t.overrideMaterial;o.length&&g(o,t,e,s),a.length&&g(a,t,e,s)}else
// opaque pass (front-to-back order)
o.length&&g(o,t,e),
// transparent pass (back-to-front order)
a.length&&g(a,t,e);
// custom render plugins (post pass)
be.render(t,e),_e.render(t,e,ht),
// Generate mipmap if we're using any kind of mipmap filtering
n&&Jt.updateRenderTargetMipmap(n),
// Ensure depth buffer writing is enabled so it can be cleared on next render
qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),e.isArrayCamera&&e.enabled&&tt.setScissorTest(!1),e.onAfterRender(tt)}},
// GL state setting
this.setFaceCulling=function(t,e){qt.setCullFace(t),qt.setFlipSided(e===co)},this.allocTextureUnit=R,
// this.setTexture2D = setTexture2D;
this.setTexture2D=function(){var t=!1;
// backwards compatibility: peel texture.texture
return function(e,n){e&&e.isWebGLRenderTarget&&(t||(t=!0),e=e.texture),Jt.setTexture2D(e,n)}}(),this.setTexture=function(){var t=!1;return function(e,n){t||(t=!0),Jt.setTexture2D(e,n)}}(),this.setTextureCube=function(){var t=!1;return function(e,n){
// backwards compatibility: peel texture.texture
e&&e.isWebGLRenderTargetCube&&(t||(t=!0),e=e.texture),
// currently relying on the fact that WebGLRenderTargetCube.texture is a Texture and NOT a CubeTexture
// TODO: unify these code paths
e&&e.isCubeTexture||Array.isArray(e.image)&&6===e.image.length?
// CompressedTexture can have Array in image :/
// this function alone should take care of cube textures
Jt.setTextureCube(e,n):
// assumed: texture property of THREE.WebGLRenderTargetCube
Jt.setTextureCubeDynamic(e,n)}}(),this.getRenderTarget=function(){return nt},this.setRenderTarget=function(t){nt=t,t&&void 0===Qt.get(t).__webglFramebuffer&&Jt.setupRenderTarget(t);var e,n=t&&t.isWebGLRenderTargetCube;if(t){var i=Qt.get(t);e=n?i.__webglFramebuffer[t.activeCubeFace]:i.__webglFramebuffer,ut.copy(t.scissor),ct=t.scissorTest,ht.copy(t.viewport)}else e=null,ut.copy(bt).multiplyScalar(yt),ct=_t,ht.copy(xt).multiplyScalar(yt);if(it!==e&&(Vt.bindFramebuffer(Vt.FRAMEBUFFER,e),it=e),qt.scissor(ut),qt.setScissorTest(ct),qt.viewport(ht),n){var r=Qt.get(t.texture);Vt.framebufferTexture2D(Vt.FRAMEBUFFER,Vt.COLOR_ATTACHMENT0,Vt.TEXTURE_CUBE_MAP_POSITIVE_X+t.activeCubeFace,r.__webglTexture,t.activeMipMapLevel)}},this.readRenderTargetPixels=function(t,e,n,i,r,o){if(!1!==(t&&t.isWebGLRenderTarget)){var a=Qt.get(t).__webglFramebuffer;if(a){var s=!1;a!==it&&(Vt.bindFramebuffer(Vt.FRAMEBUFFER,a),s=!0);try{var l=t.texture,u=l.format,c=l.type;if(u!==ka&&D(u)!==Vt.getParameter(Vt.IMPLEMENTATION_COLOR_READ_FORMAT))return;if(!(c===Ma||D(c)===Vt.getParameter(Vt.IMPLEMENTATION_COLOR_READ_TYPE)||c===Na&&(Kt.get("OES_texture_float")||Kt.get("WEBGL_color_buffer_float"))||c===Ia&&Kt.get("EXT_color_buffer_half_float")))return;Vt.checkFramebufferStatus(Vt.FRAMEBUFFER)===Vt.FRAMEBUFFER_COMPLETE&&e>=0&&e<=t.width-i&&n>=0&&n<=t.height-r&&Vt.readPixels(e,n,i,r,D(u),D(c),o)}finally{s&&Vt.bindFramebuffer(Vt.FRAMEBUFFER,it)}}}}}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function me(t,e){this.name="",this.color=new K(t),this.density=void 0!==e?e:25e-5}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function ge(t,e,n){this.name="",this.color=new K(t),this.near=void 0!==e?e:1,this.far=void 0!==n?n:1e3}/**
 * @author mrdoob / http://mrdoob.com/
 */
function ve(){ct.call(this),this.type="Scene",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
function ye(t,e,n,i,r){ct.call(this),this.lensFlares=[],this.positionScreen=new c,this.customUpdateCallback=void 0,void 0!==t&&this.add(t,e,n,i,r)}/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *	uvOffset: new THREE.Vector2(),
 *	uvScale: new THREE.Vector2()
 * }
 */
function be(t){J.call(this),this.type="SpriteMaterial",this.color=new K(16777215),this.map=null,this.rotation=0,this.fog=!1,this.lights=!1,this.setValues(t)}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
function _e(t){ct.call(this),this.type="Sprite",this.material=void 0!==t?t:new be}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
function xe(){ct.call(this),this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author michael guerrero / http://realitymeltdown.com
 * @author ikerr / http://verold.com
 */
function Ae(t,e){
// use the supplied bone inverses or calculate the inverses
if(
// copy the bone array
t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(16*this.bones.length),void 0===e)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else{this.boneInverses=[];for(var n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new h)}}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */
function we(){ct.call(this),this.type="Bone"}/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */
function Se(t,e){Lt.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new h,this.bindMatrixInverse=new h;var n=this.initBones(),i=new Ae(n);this.bind(i,this.matrixWorld),this.normalizeSkinWeights()}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *  linecap: "round",
 *  linejoin: "round"
 * }
 */
function Me(t){J.call(this),this.type="LineBasicMaterial",this.color=new K(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.lights=!1,this.setValues(t)}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ee(t,e,n){if(1===n)return new Te(t,e);ct.call(this),this.type="Line",this.geometry=void 0!==t?t:new Pt,this.material=void 0!==e?e:new Me({color:16777215*Math.random()})}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Te(t,e){Ee.call(this,t,e),this.type="LineSegments"}/**
 * @author mgreter / http://github.com/mgreter
 */
function Ce(t,e){Ee.call(this,t,e),this.type="LineLoop"}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  size: <float>,
 *  sizeAttenuation: <bool>
 * }
 */
function Pe(t){J.call(this),this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.lights=!1,this.setValues(t)}/**
 * @author alteredq / http://alteredqualia.com/
 */
function Le(t,e){ct.call(this),this.type="Points",this.geometry=void 0!==t?t:new Pt,this.material=void 0!==e?e:new Pe({color:16777215*Math.random()})}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ne(){ct.call(this),this.type="Group"}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ie(t,e,n,i,r,a,s,l,u){function c(){requestAnimationFrame(c),t.readyState>=t.HAVE_CURRENT_DATA&&(h.needsUpdate=!0)}o.call(this,t,e,n,i,r,a,s,l,u),this.generateMipmaps=!1;var h=this;c()}/**
 * @author alteredq / http://alteredqualia.com/
 */
function Oe(t,e,n,i,r,a,s,l,u,c,h,d){o.call(this,null,a,s,l,u,c,i,r,h,d),this.image={width:e,height:n},this.mipmaps=t,
// no flipping for cube textures
// (also flipping doesn't work for compressed textures )
this.flipY=!1,
// can't generate mipmaps for compressed textures
// mips must be embedded in DDS files
this.generateMipmaps=!1}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Re(t,e,n,i,r,a,s,l,u){o.call(this,t,e,n,i,r,a,s,l,u),this.needsUpdate=!0}/**
 * @author Matt DesLauriers / @mattdesl
 * @author atix / arthursilber.de
 */
function De(t,e,n,i,r,a,s,l,u,c){if((c=void 0!==c?c:za)!==za&&c!==Ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===n&&c===za&&(n=Ca),void 0===n&&c===Ha&&(n=Ba),o.call(this,null,i,r,a,s,l,c,n,u),this.image={width:t,height:e},this.magFilter=void 0!==s?s:ba,this.minFilter=void 0!==l?l:ba,this.flipY=!1,this.generateMipmaps=!1}/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
function Be(t){Pt.call(this),this.type="WireframeGeometry";
// buffer
var e,n,i,r,o,a,s,l,u,h,d=[],p=[0,0],f={},m=["a","b","c"];
// different logic for Geometry and BufferGeometry
if(t&&t.isGeometry){
// create a data structure that contains all edges without duplicates
var g=t.faces;for(e=0,i=g.length;e<i;e++){var v=g[e];for(n=0;n<3;n++)s=v[m[n]],l=v[m[(n+1)%3]],p[0]=Math.min(s,l),// sorting prevents duplicates
p[1]=Math.max(s,l),u=p[0]+","+p[1],void 0===f[u]&&(f[u]={index1:p[0],index2:p[1]})}
// generate vertices
for(u in f)a=f[u],h=t.vertices[a.index1],d.push(h.x,h.y,h.z),h=t.vertices[a.index2],d.push(h.x,h.y,h.z)}else if(t&&t.isBufferGeometry){var y,b,_,x,A,w,S,M;if(h=new c,null!==t.index){
// create a data structure that contains all eges without duplicates
for(
// indexed BufferGeometry
y=t.attributes.position,b=t.index,_=t.groups,0===_.length&&(_=[{start:0,count:b.count,materialIndex:0}]),r=0,o=_.length;r<o;++r)for(x=_[r],A=x.start,w=x.count,e=A,i=A+w;e<i;e+=3)for(n=0;n<3;n++)s=b.getX(e+n),l=b.getX(e+(n+1)%3),p[0]=Math.min(s,l),// sorting prevents duplicates
p[1]=Math.max(s,l),u=p[0]+","+p[1],void 0===f[u]&&(f[u]={index1:p[0],index2:p[1]});
// generate vertices
for(u in f)a=f[u],h.fromBufferAttribute(y,a.index1),d.push(h.x,h.y,h.z),h.fromBufferAttribute(y,a.index2),d.push(h.x,h.y,h.z)}else for(
// non-indexed BufferGeometry
y=t.attributes.position,e=0,i=y.count/3;e<i;e++)for(n=0;n<3;n++)
// three edges per triangle, an edge is represented as (index1, index2)
// e.g. the first triangle has the following edges: (0,1),(1,2),(2,0)
S=3*e+n,h.fromBufferAttribute(y,S),d.push(h.x,h.y,h.z),M=3*e+(n+1)%3,h.fromBufferAttribute(y,M),d.push(h.x,h.y,h.z)}
// build geometry
this.addAttribute("position",new wt(d,3))}/**
 * @author zz85 / https://github.com/zz85
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Parametric Surfaces Geometry
 * based on the brilliant article by @prideout http://prideout.net/blog/?p=44
 */
// ParametricGeometry
function je(t,e,n){Ct.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new Ue(t,e,n)),this.mergeVertices()}
// ParametricBufferGeometry
function Ue(t,e,n){Pt.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};
// buffers
var i,r,o=[],a=[],s=[],l=[],u=new c,h=new c,d=new c,p=new c,f=new c,m=e+1;for(i=0;i<=n;i++){var g=i/n;for(r=0;r<=e;r++){var v=r/e;
// vertex
h=t(v,g,h),a.push(h.x,h.y,h.z),
// normal
// approximate tangent vectors via finite differences
v-1e-5>=0?(d=t(v-1e-5,g,d),p.subVectors(h,d)):(d=t(v+1e-5,g,d),p.subVectors(d,h)),g-1e-5>=0?(d=t(v,g-1e-5,d),f.subVectors(h,d)):(d=t(v,g+1e-5,d),f.subVectors(d,h)),
// cross product of tangent vectors returns surface normal
u.crossVectors(p,f).normalize(),s.push(u.x,u.y,u.z),
// uv
l.push(v,g)}}
// generate indices
for(i=0;i<n;i++)for(r=0;r<e;r++){var y=i*m+r,b=i*m+r+1,_=(i+1)*m+r+1,x=(i+1)*m+r;
// faces one and two
o.push(y,b,x),o.push(b,_,x)}
// build geometry
this.setIndex(o),this.addAttribute("position",new wt(a,3)),this.addAttribute("normal",new wt(s,3)),this.addAttribute("uv",new wt(l,2))}/**
 * @author clockworkgeek / https://github.com/clockworkgeek
 * @author timothypratley / https://github.com/timothypratley
 * @author WestLangley / http://github.com/WestLangley
 * @author Mugen87 / https://github.com/Mugen87
 */
// PolyhedronGeometry
function ke(t,e,n,i){Ct.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i},this.fromBufferGeometry(new Ve(t,e,n,i)),this.mergeVertices()}
// PolyhedronBufferGeometry
function Ve(t,e,n,i){function o(t,e,n,i){var r,o,a=Math.pow(2,i),l=[];
// construct all of the vertices for this subdivision
for(r=0;r<=a;r++){l[r]=[];var u=t.clone().lerp(n,r/a),c=e.clone().lerp(n,r/a),h=a-r;for(o=0;o<=h;o++)l[r][o]=0===o&&r===a?u:u.clone().lerp(c,o/h)}
// construct all of the faces
for(r=0;r<a;r++)for(o=0;o<2*(a-r)-1;o++){var d=Math.floor(o/2);o%2==0?(s(l[r][d+1]),s(l[r+1][d]),s(l[r][d])):(s(l[r][d+1]),s(l[r+1][d+1]),s(l[r+1][d]))}}function a(){
// handle case when face straddles the seam, see #3269
for(var t=0;t<m.length;t+=6){
// uv data of a single face
var e=m[t+0],n=m[t+2],i=m[t+4],r=Math.max(e,n,i),o=Math.min(e,n,i);
// 0.9 is somewhat arbitrary
r>.9&&o<.1&&(e<.2&&(m[t+0]+=1),n<.2&&(m[t+2]+=1),i<.2&&(m[t+4]+=1))}}function s(t){f.push(t.x,t.y,t.z)}function l(e,n){var i=3*e;n.x=t[i+0],n.y=t[i+1],n.z=t[i+2]}function u(){for(var t=new c,e=new c,n=new c,i=new c,o=new r,a=new r,s=new r,l=0,u=0;l<f.length;l+=9,u+=6){t.set(f[l+0],f[l+1],f[l+2]),e.set(f[l+3],f[l+4],f[l+5]),n.set(f[l+6],f[l+7],f[l+8]),o.set(m[u+0],m[u+1]),a.set(m[u+2],m[u+3]),s.set(m[u+4],m[u+5]),i.copy(t).add(e).add(n).divideScalar(3);var p=d(i);h(o,u+0,t,p),h(a,u+2,e,p),h(s,u+4,n,p)}}function h(t,e,n,i){i<0&&1===t.x&&(m[e]=t.x-1),0===n.x&&0===n.z&&(m[e]=i/2/Math.PI+.5)}
// Angle around the Y axis, counter-clockwise when looking from above.
function d(t){return Math.atan2(t.z,-t.x)}
// Angle above the XZ plane.
function p(t){return Math.atan2(-t.y,Math.sqrt(t.x*t.x+t.z*t.z))}Pt.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i},n=n||1,i=i||0;
// default buffer data
var f=[],m=[];
// the subdivision creates the vertex buffer data
!
// helper functions
function(t){
// iterate over all faces and apply a subdivison with the given detail value
for(var n=new c,i=new c,r=new c,a=0;a<e.length;a+=3)
// get the vertices of the face
l(e[a+0],n),l(e[a+1],i),l(e[a+2],r),
// perform subdivision
o(n,i,r,t)}(i),
// all vertices should lie on a conceptual sphere with a given radius
function(t){
// iterate over the entire buffer and apply the radius to each vertex
for(var e=new c,n=0;n<f.length;n+=3)e.x=f[n+0],e.y=f[n+1],e.z=f[n+2],e.normalize().multiplyScalar(t),f[n+0]=e.x,f[n+1]=e.y,f[n+2]=e.z}(n),
// finally, create the uv data
function(){for(var t=new c,e=0;e<f.length;e+=3){t.x=f[e+0],t.y=f[e+1],t.z=f[e+2];var n=d(t)/2/Math.PI+.5,i=p(t)/Math.PI+.5;m.push(n,1-i)}u(),a()}(),
// build non-indexed geometry
this.addAttribute("position",new wt(f,3)),this.addAttribute("normal",new wt(f.slice(),3)),this.addAttribute("uv",new wt(m,2)),this.normalizeNormals()}/**
 * @author timothypratley / https://github.com/timothypratley
 * @author Mugen87 / https://github.com/Mugen87
 */
// TetrahedronGeometry
function Ge(t,e){Ct.call(this),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new Fe(t,e)),this.mergeVertices()}
// TetrahedronBufferGeometry
function Fe(t,e){var n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];Ve.call(this,n,i,t,e),this.type="TetrahedronBufferGeometry",this.parameters={radius:t,detail:e}}/**
 * @author timothypratley / https://github.com/timothypratley
 * @author Mugen87 / https://github.com/Mugen87
 */
// OctahedronGeometry
function ze(t,e){Ct.call(this),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new He(t,e)),this.mergeVertices()}
// OctahedronBufferGeometry
function He(t,e){var n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Ve.call(this,n,i,t,e),this.type="OctahedronBufferGeometry",this.parameters={radius:t,detail:e}}/**
 * @author timothypratley / https://github.com/timothypratley
 * @author Mugen87 / https://github.com/Mugen87
 */
// IcosahedronGeometry
function Xe(t,e){Ct.call(this),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new We(t,e)),this.mergeVertices()}
// IcosahedronBufferGeometry
function We(t,e){var n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Ve.call(this,i,r,t,e),this.type="IcosahedronBufferGeometry",this.parameters={radius:t,detail:e}}/**
 * @author Abe Pazos / https://hamoid.com
 * @author Mugen87 / https://github.com/Mugen87
 */
// DodecahedronGeometry
function Ye(t,e){Ct.call(this),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new Ke(t,e)),this.mergeVertices()}
// DodecahedronBufferGeometry
function Ke(t,e){var n=(1+Math.sqrt(5))/2,i=1/n,r=[
// (±1, ±1, ±1)
-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,
// (0, ±1/φ, ±φ)
0,-i,-n,0,-i,n,0,i,-n,0,i,n,
// (±1/φ, ±φ, 0)
-i,-n,0,-i,n,0,i,-n,0,i,n,0,
// (±φ, 0, ±1/φ)
-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Ve.call(this,r,o,t,e),this.type="DodecahedronBufferGeometry",this.parameters={radius:t,detail:e}}/**
 * @author oosmoxiecode / https://github.com/oosmoxiecode
 * @author WestLangley / https://github.com/WestLangley
 * @author zz85 / https://github.com/zz85
 * @author miningold / https://github.com/miningold
 * @author jonobr1 / https://github.com/jonobr1
 * @author Mugen87 / https://github.com/Mugen87
 *
 */
// TubeGeometry
function Ze(t,e,n,i,r,o){Ct.call(this),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};var a=new qe(t,e,n,i,r);
// expose internals
this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals,
// create geometry
this.fromBufferGeometry(a),this.mergeVertices()}
// TubeBufferGeometry
function qe(t,e,n,i,o){function a(r){
// we use getPointAt to sample evenly distributed points from the given path
var o=t.getPointAt(r/e),a=u.normals[r],s=u.binormals[r];
// generate normals and vertices for the current segment
for(d=0;d<=i;d++){var l=d/i*Math.PI*2,c=Math.sin(l),h=-Math.cos(l);
// normal
f.x=h*a.x+c*s.x,f.y=h*a.y+c*s.y,f.z=h*a.z+c*s.z,f.normalize(),v.push(f.x,f.y,f.z),
// vertex
p.x=o.x+n*f.x,p.y=o.y+n*f.y,p.z=o.z+n*f.z,g.push(p.x,p.y,p.z)}}function s(){for(d=1;d<=e;d++)for(h=1;h<=i;h++){var t=(i+1)*(d-1)+(h-1),n=(i+1)*d+(h-1),r=(i+1)*d+h,o=(i+1)*(d-1)+h;
// faces
b.push(t,n,o),b.push(n,r,o)}}function l(){for(h=0;h<=e;h++)for(d=0;d<=i;d++)m.x=h/e,m.y=d/i,y.push(m.x,m.y)}Pt.call(this),this.type="TubeBufferGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o},e=e||64,n=n||1,i=i||8,o=o||!1;var u=t.computeFrenetFrames(e,o);
// expose internals
this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;
// helper variables
var h,d,p=new c,f=new c,m=new r,g=[],v=[],y=[],b=[];
// create buffer data
!
// functions
function(){for(h=0;h<e;h++)a(h);
// if the geometry is not closed, generate the last row of vertices and normals
// at the regular position on the given path
//
// if the geometry is closed, duplicate the first row of vertices and normals (uvs will differ)
a(!1===o?e:0),
// uvs are generated in a separate function.
// this makes it easy compute correct values for closed geometries
l(),
// finally create faces
s()}(),
// build geometry
this.setIndex(b),this.addAttribute("position",new wt(g,3)),this.addAttribute("normal",new wt(v,3)),this.addAttribute("uv",new wt(y,2))}/**
 * @author oosmoxiecode
 * @author Mugen87 / https://github.com/Mugen87
 *
 * based on http://www.blackpawn.com/texts/pqtorus/
 */
// TorusKnotGeometry
function Qe(t,e,n,i,r,o,a){Ct.call(this),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},this.fromBufferGeometry(new Je(t,e,n,i,r,o)),this.mergeVertices()}
// TorusKnotBufferGeometry
function Je(t,e,n,i,r,o){
// this function calculates the current position on the torus curve
function a(t,e,n,i,r){var o=Math.cos(t),a=Math.sin(t),s=n/e*t,l=Math.cos(s);r.x=i*(2+l)*.5*o,r.y=i*(2+l)*a*.5,r.z=i*Math.sin(s)*.5}Pt.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},t=t||100,e=e||40,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,o=o||3;
// buffers
var s,l,u=[],h=[],d=[],p=[],f=new c,m=new c,g=new c,v=new c,y=new c,b=new c,_=new c;
// generate vertices, normals and uvs
for(s=0;s<=n;++s){
// the radian "u" is used to calculate the position on the torus curve of the current tubular segement
var x=s/n*r*Math.PI*2;for(
// now we calculate two points. P1 is our current position on the curve, P2 is a little farther ahead.
// these points are used to create a special "coordinate space", which is necessary to calculate the correct vertex positions
a(x,r,o,t,g),a(x+.01,r,o,t,v),
// calculate orthonormal basis
b.subVectors(v,g),_.addVectors(v,g),y.crossVectors(b,_),_.crossVectors(y,b),
// normalize B, N. T can be ignored, we don't use it
y.normalize(),_.normalize(),l=0;l<=i;++l){
// now calculate the vertices. they are nothing more than an extrusion of the torus curve.
// because we extrude a shape in the xy-plane, there is no need to calculate a z-value.
var A=l/i*Math.PI*2,w=-e*Math.cos(A),S=e*Math.sin(A);
// now calculate the final vertex position.
// first we orient the extrusion with our basis vectos, then we add it to the current position on the curve
f.x=g.x+(w*_.x+S*y.x),f.y=g.y+(w*_.y+S*y.y),f.z=g.z+(w*_.z+S*y.z),h.push(f.x,f.y,f.z),
// normal (P1 is always the center/origin of the extrusion, thus we can use it to calculate the normal)
m.subVectors(f,g).normalize(),d.push(m.x,m.y,m.z),
// uv
p.push(s/n),p.push(l/i)}}
// generate indices
for(l=1;l<=n;l++)for(s=1;s<=i;s++){
// indices
var M=(i+1)*(l-1)+(s-1),E=(i+1)*l+(s-1),T=(i+1)*l+s,C=(i+1)*(l-1)+s;
// faces
u.push(M,E,C),u.push(E,T,C)}
// build geometry
this.setIndex(u),this.addAttribute("position",new wt(h,3)),this.addAttribute("normal",new wt(d,3)),this.addAttribute("uv",new wt(p,2))}/**
 * @author oosmoxiecode
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
// TorusGeometry
function $e(t,e,n,i,r){Ct.call(this),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new tn(t,e,n,i,r)),this.mergeVertices()}
// TorusBufferGeometry
function tn(t,e,n,i,r){Pt.call(this),this.type="TorusBufferGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},t=t||100,e=e||40,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||2*Math.PI;
// buffers
var o,a,s=[],l=[],u=[],h=[],d=new c,p=new c,f=new c;
// generate vertices, normals and uvs
for(o=0;o<=n;o++)for(a=0;a<=i;a++){var m=a/i*r,g=o/n*Math.PI*2;
// vertex
p.x=(t+e*Math.cos(g))*Math.cos(m),p.y=(t+e*Math.cos(g))*Math.sin(m),p.z=e*Math.sin(g),l.push(p.x,p.y,p.z),
// normal
d.x=t*Math.cos(m),d.y=t*Math.sin(m),f.subVectors(p,d).normalize(),u.push(f.x,f.y,f.z),
// uv
h.push(a/i),h.push(o/n)}
// generate indices
for(o=1;o<=n;o++)for(a=1;a<=i;a++){
// indices
var v=(i+1)*o+a-1,y=(i+1)*(o-1)+a-1,b=(i+1)*(o-1)+a,_=(i+1)*o+a;
// faces
s.push(v,y,_),s.push(y,b,_)}
// build geometry
this.setIndex(s),this.addAttribute("position",new wt(l,3)),this.addAttribute("normal",new wt(u,3)),this.addAttribute("uv",new wt(h,2))}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Creates extruded geometry from a path shape.
 *
 * parameters = {
 *
 *  curveSegments: <int>, // number of points on the curves
 *  steps: <int>, // number of points for z-side extrusions / used for subdividing segments of extrude spline too
 *  amount: <int>, // Depth to extrude the shape
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into the original shape bevel goes
 *  bevelSize: <float>, // how far from shape outline is bevel
 *  bevelSegments: <int>, // number of bevel layers
 *
 *  extrudePath: <THREE.Curve> // curve to extrude shape along
 *  frames: <Object> // containing arrays of tangents, normals, binormals
 *
 *  UVGenerator: <Object> // object that provides UV generator functions
 *
 * }
 */
// ExtrudeGeometry
function en(t,e){Ct.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},this.fromBufferGeometry(new nn(t,e)),this.mergeVertices()}
// ExtrudeBufferGeometry
function nn(t,e){if(void 0===t)return void(t=[]);Pt.call(this),this.type="ExtrudeBufferGeometry",t=Array.isArray(t)?t:[t],this.addShapeList(t,e),this.computeVertexNormals()}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author alteredq / http://alteredqualia.com/
 *
 * Text = 3D Text
 *
 * parameters = {
 *  font: <THREE.Font>, // font
 *
 *  size: <float>, // size of the text
 *  height: <float>, // thickness to extrude text
 *  curveSegments: <int>, // number of points on the curves
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into text bevel goes
 *  bevelSize: <float> // how far from text outline is bevel
 * }
 */
// TextGeometry
function rn(t,e){Ct.call(this),this.type="TextGeometry",this.parameters={text:t,parameters:e},this.fromBufferGeometry(new on(t,e)),this.mergeVertices()}
// TextBufferGeometry
function on(t,e){e=e||{};var n=e.font;if(!1===(n&&n.isFont))return new Ct;var i=n.generateShapes(t,e.size,e.curveSegments);
// translate parameters to ExtrudeGeometry API
e.amount=void 0!==e.height?e.height:50,
// defaults
void 0===e.bevelThickness&&(e.bevelThickness=10),void 0===e.bevelSize&&(e.bevelSize=8),void 0===e.bevelEnabled&&(e.bevelEnabled=!1),nn.call(this,i,e),this.type="TextBufferGeometry"}/**
 * @author mrdoob / http://mrdoob.com/
 * @author benaadams / https://twitter.com/ben_a_adams
 * @author Mugen87 / https://github.com/Mugen87
 */
// SphereGeometry
function an(t,e,n,i,r,o,a){Ct.call(this),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new sn(t,e,n,i,r,o,a)),this.mergeVertices()}
// SphereBufferGeometry
function sn(t,e,n,i,r,o,a){Pt.call(this),this.type="SphereBufferGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=t||50,e=Math.max(3,Math.floor(e)||8),n=Math.max(2,Math.floor(n)||6),i=void 0!==i?i:0,r=void 0!==r?r:2*Math.PI,o=void 0!==o?o:0,a=void 0!==a?a:Math.PI;var s,l,u=o+a,h=0,d=[],p=new c,f=new c,m=[],g=[],v=[],y=[];
// generate vertices, normals and uvs
for(l=0;l<=n;l++){var b=[],_=l/n;for(s=0;s<=e;s++){var x=s/e;
// vertex
p.x=-t*Math.cos(i+x*r)*Math.sin(o+_*a),p.y=t*Math.cos(o+_*a),p.z=t*Math.sin(i+x*r)*Math.sin(o+_*a),g.push(p.x,p.y,p.z),
// normal
f.set(p.x,p.y,p.z).normalize(),v.push(f.x,f.y,f.z),
// uv
y.push(x,1-_),b.push(h++)}d.push(b)}
// indices
for(l=0;l<n;l++)for(s=0;s<e;s++){var A=d[l][s+1],w=d[l][s],S=d[l+1][s],M=d[l+1][s+1];(0!==l||o>0)&&m.push(A,w,M),(l!==n-1||u<Math.PI)&&m.push(w,S,M)}
// build geometry
this.setIndex(m),this.addAttribute("position",new wt(g,3)),this.addAttribute("normal",new wt(v,3)),this.addAttribute("uv",new wt(y,2))}/**
 * @author Kaleb Murphy
 * @author Mugen87 / https://github.com/Mugen87
 */
// RingGeometry
function ln(t,e,n,i,r,o){Ct.call(this),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},this.fromBufferGeometry(new un(t,e,n,i,r,o)),this.mergeVertices()}
// RingBufferGeometry
function un(t,e,n,i,o,a){Pt.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:a},t=t||20,e=e||50,o=void 0!==o?o:0,a=void 0!==a?a:2*Math.PI,n=void 0!==n?Math.max(3,n):8,i=void 0!==i?Math.max(1,i):1;
// buffers
var s,l,u,h=[],d=[],p=[],f=[],m=t,g=(e-t)/i,v=new c,y=new r;
// generate vertices, normals and uvs
for(l=0;l<=i;l++){for(u=0;u<=n;u++)
// values are generate from the inside of the ring to the outside
s=o+u/n*a,
// vertex
v.x=m*Math.cos(s),v.y=m*Math.sin(s),d.push(v.x,v.y,v.z),
// normal
p.push(0,0,1),
// uv
y.x=(v.x/e+1)/2,y.y=(v.y/e+1)/2,f.push(y.x,y.y);
// increase the radius for next row of vertices
m+=g}
// indices
for(l=0;l<i;l++){var b=l*(n+1);for(u=0;u<n;u++){s=u+b;var _=s,x=s+n+1,A=s+n+2,w=s+1;
// faces
h.push(_,x,w),h.push(x,A,w)}}
// build geometry
this.setIndex(h),this.addAttribute("position",new wt(d,3)),this.addAttribute("normal",new wt(p,3)),this.addAttribute("uv",new wt(f,2))}/**
 * @author astrodud / http://astrodud.isgreat.org/
 * @author zz85 / https://github.com/zz85
 * @author bhouston / http://clara.io
 * @author Mugen87 / https://github.com/Mugen87
 */
// LatheGeometry
function cn(t,e,n,i){Ct.call(this),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},this.fromBufferGeometry(new hn(t,e,n,i)),this.mergeVertices()}
// LatheBufferGeometry
function hn(t,e,n,i){Pt.call(this),this.type="LatheBufferGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e)||12,n=n||0,i=i||2*Math.PI,
// clamp phiLength so it's in range of [ 0, 2PI ]
i=As.clamp(i,0,2*Math.PI);
// buffers
var o,a,s,l=[],u=[],h=[],d=1/e,p=new c,f=new r;
// generate vertices and uvs
for(a=0;a<=e;a++){var m=n+a*d*i,g=Math.sin(m),v=Math.cos(m);for(s=0;s<=t.length-1;s++)
// vertex
p.x=t[s].x*g,p.y=t[s].y,p.z=t[s].x*v,u.push(p.x,p.y,p.z),
// uv
f.x=a/e,f.y=s/(t.length-1),h.push(f.x,f.y)}
// indices
for(a=0;a<e;a++)for(s=0;s<t.length-1;s++){o=s+a*t.length;var y=o,b=o+t.length,_=o+t.length+1,x=o+1;
// faces
l.push(y,b,x),l.push(b,_,x)}
// if the geometry is closed, we need to average the normals along the seam.
// because the corresponding vertices are identical (but still have different UVs).
if(
// build geometry
this.setIndex(l),this.addAttribute("position",new wt(u,3)),this.addAttribute("uv",new wt(h,2)),
// generate normals
this.computeVertexNormals(),i===2*Math.PI){var A=this.attributes.normal.array,w=new c,S=new c,M=new c;for(
// this is the buffer offset for the last line of vertices
o=e*t.length*3,a=0,s=0;a<t.length;a++,s+=3)
// select the normal of the vertex in the first line
w.x=A[s+0],w.y=A[s+1],w.z=A[s+2],
// select the normal of the vertex in the last line
S.x=A[o+s+0],S.y=A[o+s+1],S.z=A[o+s+2],
// average normals
M.addVectors(w,S).normalize(),
// assign the new values to both normals
A[s+0]=A[o+s+0]=M.x,A[s+1]=A[o+s+1]=M.y,A[s+2]=A[o+s+2]=M.z}}/**
 * @author jonobr1 / http://jonobr1.com
 * @author Mugen87 / https://github.com/Mugen87
 */
// ShapeGeometry
function dn(t,e){Ct.call(this),this.type="ShapeGeometry","object"==typeof e&&(e=e.curveSegments),this.parameters={shapes:t,curveSegments:e},this.fromBufferGeometry(new pn(t,e)),this.mergeVertices()}
// ShapeBufferGeometry
function pn(t,e){
// helper functions
function n(t){var n,s,u,c=r.length/3,h=t.extractPoints(e),d=h.shape,p=h.holes;
// check direction of vertices
if(!1===Vs.isClockWise(d))
// also check if holes are in the opposite direction
for(d=d.reverse(),n=0,s=p.length;n<s;n++)u=p[n],!0===Vs.isClockWise(u)&&(p[n]=u.reverse());var f=Vs.triangulateShape(d,p);
// join vertices of inner and outer paths to a single array
for(n=0,s=p.length;n<s;n++)u=p[n],d=d.concat(u);
// vertices, normals, uvs
for(n=0,s=d.length;n<s;n++){var m=d[n];r.push(m.x,m.y,0),o.push(0,0,1),a.push(m.x,m.y)}
// incides
for(n=0,s=f.length;n<s;n++){var g=f[n],v=g[0]+c,y=g[1]+c,b=g[2]+c;i.push(v,y,b),l+=3}}Pt.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:t,curveSegments:e},e=e||12;
// buffers
var i=[],r=[],o=[],a=[],s=0,l=0;
// allow single and array values for "shapes" parameter
if(!1===Array.isArray(t))n(t);else for(var u=0;u<t.length;u++)n(t[u]),this.addGroup(s,l,u),// enables MultiMaterial support
s+=l,l=0;
// build geometry
this.setIndex(i),this.addAttribute("position",new wt(r,3)),this.addAttribute("normal",new wt(o,3)),this.addAttribute("uv",new wt(a,2))}/**
 * @author WestLangley / http://github.com/WestLangley
 * @author Mugen87 / https://github.com/Mugen87
 */
function fn(t,e){Pt.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:e},e=void 0!==e?e:1;
// buffer
var n,i,r,o,a=[],s=Math.cos(As.DEG2RAD*e),l=[0,0],u={},c=["a","b","c"];t.isBufferGeometry?(o=new Ct,o.fromBufferGeometry(t)):o=t.clone(),o.mergeVertices(),o.computeFaceNormals();
// now create a data structure where each entry represents an edge with its adjoining faces
for(var h=o.vertices,d=o.faces,p=0,f=d.length;p<f;p++)for(var m=d[p],g=0;g<3;g++)n=m[c[g]],i=m[c[(g+1)%3]],l[0]=Math.min(n,i),l[1]=Math.max(n,i),r=l[0]+","+l[1],void 0===u[r]?u[r]={index1:l[0],index2:l[1],face1:p,face2:void 0}:u[r].face2=p;
// generate vertices
for(r in u){var v=u[r];
// an edge is only rendered if the angle (in degrees) between the face normals of the adjoining faces exceeds this value. default = 1 degree.
if(void 0===v.face2||d[v.face1].normal.dot(d[v.face2].normal)<=s){var y=h[v.index1];a.push(y.x,y.y,y.z),y=h[v.index2],a.push(y.x,y.y,y.z)}}
// build geometry
this.addAttribute("position",new wt(a,3))}/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
// CylinderGeometry
function mn(t,e,n,i,r,o,a,s){Ct.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:s},this.fromBufferGeometry(new gn(t,e,n,i,r,o,a,s)),this.mergeVertices()}
// CylinderBufferGeometry
function gn(t,e,n,i,o,a,s,l){function u(n){var o,a,u,v=new r,_=new c,x=0,A=!0===n?t:e,w=!0===n?1:-1;
// first we generate the center vertex data of the cap.
// because the geometry needs one set of uvs per face,
// we must generate a center vertex per face/segment
for(
// save the index of the first center vertex
a=g,o=1;o<=i;o++)
// vertex
p.push(0,y*w,0),
// normal
f.push(0,w,0),
// uv
m.push(.5,.5),
// increase index
g++;
// now we generate the surrounding vertices, normals and uvs
for(
// save the index of the last center vertex
u=g,o=0;o<=i;o++){var S=o/i,M=S*l+s,E=Math.cos(M),T=Math.sin(M);
// vertex
_.x=A*T,_.y=y*w,_.z=A*E,p.push(_.x,_.y,_.z),
// normal
f.push(0,w,0),
// uv
v.x=.5*E+.5,v.y=.5*T*w+.5,m.push(v.x,v.y),
// increase index
g++}
// generate indices
for(o=0;o<i;o++){var C=a+o,P=u+o;!0===n?
// face top
d.push(P,P+1,C):
// face bottom
d.push(P+1,P,C),x+=3}
// add a group to the geometry. this will ensure multi material support
h.addGroup(b,x,!0===n?1:2),
// calculate new start value for groups
b+=x}Pt.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:s,thetaLength:l};var h=this;t=void 0!==t?t:20,e=void 0!==e?e:20,n=void 0!==n?n:100,i=Math.floor(i)||8,o=Math.floor(o)||1,a=void 0!==a&&a,s=void 0!==s?s:0,l=void 0!==l?l:2*Math.PI;
// buffers
var d=[],p=[],f=[],m=[],g=0,v=[],y=n/2,b=0;
// generate geometry
!function(){var r,a,u=new c,_=new c,x=0,A=(e-t)/n;
// generate vertices, normals and uvs
for(a=0;a<=o;a++){var w=[],S=a/o,M=S*(e-t)+t;for(r=0;r<=i;r++){var E=r/i,T=E*l+s,C=Math.sin(T),P=Math.cos(T);
// vertex
_.x=M*C,_.y=-S*n+y,_.z=M*P,p.push(_.x,_.y,_.z),
// normal
u.set(C,A,P).normalize(),f.push(u.x,u.y,u.z),
// uv
m.push(E,1-S),
// save index of vertex in respective row
w.push(g++)}
// now save vertices of the row in our index array
v.push(w)}
// generate indices
for(r=0;r<i;r++)for(a=0;a<o;a++){
// we use the index array to access the correct indices
var L=v[a][r],N=v[a+1][r],I=v[a+1][r+1],O=v[a][r+1];
// faces
d.push(L,N,O),d.push(N,I,O),
// update group counter
x+=6}
// add a group to the geometry. this will ensure multi material support
h.addGroup(b,x,0),
// calculate new start value for groups
b+=x}(),!1===a&&(t>0&&u(!0),e>0&&u(!1)),
// build geometry
this.setIndex(d),this.addAttribute("position",new wt(p,3)),this.addAttribute("normal",new wt(f,3)),this.addAttribute("uv",new wt(m,2))}/**
 * @author abelnation / http://github.com/abelnation
 */
// ConeGeometry
function vn(t,e,n,i,r,o,a){mn.call(this,0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}
// ConeBufferGeometry
function yn(t,e,n,i,r,o,a){gn.call(this,0,t,e,n,i,r,o,a),this.type="ConeBufferGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}/**
 * @author benaadams / https://twitter.com/ben_a_adams
 * @author Mugen87 / https://github.com/Mugen87
 * @author hughes
 */
// CircleGeometry
function bn(t,e,n,i){Ct.call(this),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new _n(t,e,n,i)),this.mergeVertices()}
// CircleBufferGeometry
function _n(t,e,n,i){Pt.call(this),this.type="CircleBufferGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},t=t||50,e=void 0!==e?Math.max(3,e):8,n=void 0!==n?n:0,i=void 0!==i?i:2*Math.PI;
// buffers
var o,a,s=[],l=[],u=[],h=[],d=new c,p=new r;for(
// center point
l.push(0,0,0),u.push(0,0,1),h.push(.5,.5),a=0,o=3;a<=e;a++,o+=3){var f=n+a/e*i;
// vertex
d.x=t*Math.cos(f),d.y=t*Math.sin(f),l.push(d.x,d.y,d.z),
// normal
u.push(0,0,1),
// uvs
p.x=(l[o]/t+1)/2,p.y=(l[o+1]/t+1)/2,h.push(p.x,p.y)}
// indices
for(o=1;o<=e;o++)s.push(o,o+1,0);
// build geometry
this.setIndex(s),this.addAttribute("position",new wt(l,3)),this.addAttribute("normal",new wt(u,3)),this.addAttribute("uv",new wt(h,2))}/**
 * @author mrdoob / http://mrdoob.com/
 *
 * parameters = {
 *  opacity: <float>
 * }
 */
function xn(t){$.call(this,{uniforms:Os.merge([Is.lights,{opacity:{value:1}}]),vertexShader:Rs.shadow_vert,fragmentShader:Rs.shadow_frag}),this.lights=!0,this.transparent=!0,Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}}}),this.setValues(t)}/**
 * @author mrdoob / http://mrdoob.com/
 */
function An(t){$.call(this,t),this.type="RawShaderMaterial"}/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  color: <hex>,
 *  roughness: <float>,
 *  metalness: <float>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  roughnessMap: new THREE.Texture( <Image> ),
 *
 *  metalnessMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  envMapIntensity: <float>
 *
 *  refractionRatio: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function wn(t){J.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new K(16777215),// diffuse
this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new r(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  reflectivity: <float>
 * }
 */
function Sn(t){wn.call(this),this.defines={PHYSICAL:""},this.type="MeshPhysicalMaterial",this.reflectivity=.5,// maps to F0 = 0.04
this.clearCoat=0,this.clearCoatRoughness=0,this.setValues(t)}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  specular: <hex>,
 *  shininess: <float>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function Mn(t){J.call(this),this.type="MeshPhongMaterial",this.color=new K(16777215),// diffuse
this.specular=new K(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new r(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}/**
 * @author takahirox / http://github.com/takahirox
 *
 * parameters = {
 *  gradientMap: new THREE.Texture( <Image> )
 * }
 */
function En(t){Mn.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.gradientMap=null,this.setValues(t)}/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function Tn(t){J.call(this,t),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new r(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */
function Cn(t){J.call(this),this.type="MeshLambertMaterial",this.color=new K(16777215),// diffuse
this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *
 *  scale: <float>,
 *  dashSize: <float>,
 *  gapSize: <float>
 * }
 */
function Pn(t){J.call(this),this.type="LineDashedMaterial",this.color=new K(16777215),this.linewidth=1,this.scale=1,this.dashSize=3,this.gapSize=1,this.lights=!1,this.setValues(t)}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ln(t,e,n){var i=this,r=!1,o=0,a=0;this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){a++,!1===r&&void 0!==i.onStart&&i.onStart(t,o,a),r=!0},this.itemEnd=function(t){o++,void 0!==i.onProgress&&i.onProgress(t,o,a),o===a&&(r=!1,void 0!==i.onLoad&&i.onLoad())},this.itemError=function(t){void 0!==i.onError&&i.onError(t)}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Nn(t){this.manager=void 0!==t?t:Hs}/**
 * @author mrdoob / http://mrdoob.com/
 *
 * Abstract Base class to block based textures loader (dds, pvr, ...)
 */
function In(t){this.manager=void 0!==t?t:Hs,
// override in sub classes
this._parser=null}/**
 * @author Nikos M. / https://github.com/foo123/
 *
 * Abstract Base class to load generic binary textures formats (rgbe, hdr, ...)
 */
function On(t){this.manager=void 0!==t?t:Hs,
// override in sub classes
this._parser=null}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Rn(t){this.manager=void 0!==t?t:Hs}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Dn(t){this.manager=void 0!==t?t:Hs}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Bn(t){this.manager=void 0!==t?t:Hs}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function jn(t,e){ct.call(this),this.type="Light",this.color=new K(t),this.intensity=void 0!==e?e:1,this.receiveShadow=void 0}/**
 * @author alteredq / http://alteredqualia.com/
 */
function Un(t,e,n){jn.call(this,t,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(ct.DefaultUp),this.updateMatrix(),this.groundColor=new K(e)}/**
 * @author mrdoob / http://mrdoob.com/
 */
function kn(t){this.camera=t,this.bias=0,this.radius=1,this.mapSize=new r(512,512),this.map=null,this.matrix=new h}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Vn(){kn.call(this,new Bt(50,1,.5,500))}/**
 * @author alteredq / http://alteredqualia.com/
 */
function Gn(t,e,n,i,r,o){jn.call(this,t,e),this.type="SpotLight",this.position.copy(ct.DefaultUp),this.updateMatrix(),this.target=new ct,Object.defineProperty(this,"power",{get:function(){
// intensity = power per solid angle.
// ref: equation (17) from http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
return this.intensity*Math.PI},set:function(t){
// intensity = power per solid angle.
// ref: equation (17) from http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
this.intensity=t/Math.PI}}),this.distance=void 0!==n?n:0,this.angle=void 0!==i?i:Math.PI/3,this.penumbra=void 0!==r?r:0,this.decay=void 0!==o?o:1,// for physically correct lights, should be 2.
this.shadow=new Vn}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Fn(t,e,n,i){jn.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){
// intensity = power per solid angle.
// ref: equation (15) from http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
return 4*this.intensity*Math.PI},set:function(t){
// intensity = power per solid angle.
// ref: equation (15) from http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
this.intensity=t/(4*Math.PI)}}),this.distance=void 0!==n?n:0,this.decay=void 0!==i?i:1,// for physically correct lights, should be 2.
this.shadow=new kn(new Bt(90,1,.5,500))}/**
 * @author mrdoob / http://mrdoob.com/
 */
function zn(){kn.call(this,new jt(-5,5,5,-5,.5,500))}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function Hn(t,e){jn.call(this,t,e),this.type="DirectionalLight",this.position.copy(ct.DefaultUp),this.updateMatrix(),this.target=new ct,this.shadow=new zn}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Xn(t,e){jn.call(this,t,e),this.type="AmbientLight",this.castShadow=void 0}/**
 * @author abelnation / http://github.com/abelnation
 */
function Wn(t,e,n,i){jn.call(this,t,e),this.type="RectAreaLight",this.position.set(0,1,0),this.updateMatrix(),this.width=void 0!==n?n:10,this.height=void 0!==i?i:10}/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References:
 *
 * 		http://www.oodesign.com/template-method-pattern.html
 *
 * @author tschw
 */
function Yn(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==i?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}/**
 * Fast and simple cubic spline interpolant.
 *
 * It was derived from a Hermitian construction setting the first derivative
 * at each sample position to the linear slope between neighboring positions
 * over their parameter interval.
 *
 * @author tschw
 */
function Kn(t,e,n,i){Yn.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}/**
 * @author tschw
 */
function Zn(t,e,n,i){Yn.call(this,t,e,n,i)}/**
 *
 * Interpolant that evaluates to the sample value at the position preceeding
 * the parameter.
 *
 * @author tschw
 */
function qn(t,e,n,i){Yn.call(this,t,e,n,i)}function Qn(t,e,n,i){if(void 0===t)throw new Error("track name is undefined");if(void 0===e||0===e.length)throw new Error("no keyframes in track named "+t);this.name=t,this.times=Xs.convertArray(e,this.TimeBufferType),this.values=Xs.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation),this.validate(),this.optimize()}/**
 *
 * A Track of vectored keyframe values.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function Jn(t,e,n,i){Qn.call(this,t,e,n,i)}/**
 * Spherical linear unit quaternion interpolant.
 *
 * @author tschw
 */
function $n(t,e,n,i){Yn.call(this,t,e,n,i)}/**
 *
 * A Track of quaternion keyframe values.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function ti(t,e,n,i){Qn.call(this,t,e,n,i)}/**
 *
 * A Track of numeric keyframe values.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function ei(t,e,n,i){Qn.call(this,t,e,n,i)}/**
 *
 * A Track that interpolates Strings
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function ni(t,e,n,i){Qn.call(this,t,e,n,i)}/**
 *
 * A Track of Boolean keyframe values.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function ii(t,e,n){Qn.call(this,t,e,n)}/**
 *
 * A Track of keyframe values that represent color.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function ri(t,e,n,i){Qn.call(this,t,e,n,i)}/**
 *
 * A timed sequence of keyframes for a specific property.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function oi(t,e,n,i){Qn.apply(this,arguments)}/**
 *
 * Reusable set of Tracks that represent an animation.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 */
function ai(t,e,n){this.name=t,this.tracks=n,this.duration=void 0!==e?e:-1,this.uuid=As.generateUUID(),
// this means it should figure out its duration by scanning the tracks
this.duration<0&&this.resetDuration(),this.optimize()}/**
 * @author mrdoob / http://mrdoob.com/
 */
function si(t){this.manager=void 0!==t?t:Hs,this.textures={}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function li(t){this.manager=void 0!==t?t:Hs}/**
 * @author alteredq / http://alteredqualia.com/
 */
function ui(){this.onLoadStart=function(){},this.onLoadProgress=function(){},this.onLoadComplete=function(){}}/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function ci(t){"boolean"==typeof t&&(t=void 0),this.manager=void 0!==t?t:Hs,this.withCredentials=!1}/**
 * @author mrdoob / http://mrdoob.com/
 */
function hi(t){this.manager=void 0!==t?t:Hs,this.texturePath=""}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Bezier Curves formulas obtained from
 * http://en.wikipedia.org/wiki/Bézier_curve
 */
function di(t,e,n,i,r){var o=.5*(i-e),a=.5*(r-n),s=t*t;return(2*n-2*i+o+a)*(t*s)+(-3*n+3*i-2*o-a)*s+o*t+n}
//
function pi(t,e){var n=1-t;return n*n*e}function fi(t,e){return 2*(1-t)*t*e}function mi(t,e){return t*t*e}function gi(t,e,n,i){return pi(t,e)+fi(t,n)+mi(t,i)}
//
function vi(t,e){var n=1-t;return n*n*n*e}function yi(t,e){var n=1-t;return 3*n*n*t*e}function bi(t,e){return 3*(1-t)*t*t*e}function _i(t,e){return t*t*t*e}function xi(t,e,n,i,r){return vi(t,e)+yi(t,n)+bi(t,i)+_i(t,r)}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Extensible curve object
 *
 * Some common of curve methods:
 * .getPoint(t), getTangent(t)
 * .getPointAt(u), getTangentAt(u)
 * .getPoints(), .getSpacedPoints()
 * .getLength()
 * .updateArcLengths()
 *
 * This following curves inherit from THREE.Curve:
 *
 * -- 2D curves --
 * THREE.ArcCurve
 * THREE.CubicBezierCurve
 * THREE.EllipseCurve
 * THREE.LineCurve
 * THREE.QuadraticBezierCurve
 * THREE.SplineCurve
 *
 * -- 3D curves --
 * THREE.CatmullRomCurve3
 * THREE.CubicBezierCurve3
 * THREE.LineCurve3
 * THREE.QuadraticBezierCurve3
 *
 * A series of curves can be represented as a THREE.CurvePath.
 *
 **/
/**************************************************************
 *	Abstract Curve base class
 **************************************************************/
function Ai(){this.arcLengthDivisions=200}function wi(t,e){Ai.call(this),this.v1=t,this.v2=e}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 **/
/**************************************************************
 *	Curved Path - a curve path is simply a array of connected
 *  curves, but retains the api of a curve
 **************************************************************/
function Si(){Ai.call(this),this.curves=[],this.autoClose=!1}function Mi(t,e,n,i,r,o,a,s){Ai.call(this),this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=s||0}function Ei(t){Ai.call(this),this.points=void 0===t?[]:t}function Ti(t,e,n,i){Ai.call(this),this.v0=t,this.v1=e,this.v2=n,this.v3=i}function Ci(t,e,n){Ai.call(this),this.v0=t,this.v1=e,this.v2=n}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Creates free form 2d path using series of points, lines or curves.
 **/
function Pi(t){Si.call(this),this.currentPoint=new r,t&&this.fromPoints(t)}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Defines a 2d shape plane using paths.
 **/
// STEP 1 Create a path.
// STEP 2 Turn path into shape.
// STEP 3 ExtrudeGeometry takes in Shape/Shapes
// STEP 3a - Extract points from each shape, turn to vertices
// STEP 3b - Triangulate each shape, add faces.
function Li(){Pi.apply(this,arguments),this.holes=[]}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * minimal class for proxing functions to Path. Replaces old "extractSubpaths()"
 **/
function Ni(){this.subPaths=[],this.currentPath=null}/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author mrdoob / http://mrdoob.com/
 */
function Ii(t){this.data=t}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Oi(t){this.manager=void 0!==t?t:Hs}/**
 * @author Reece Aaron Lecrivain / http://reecenotes.com/
 */
function Ri(t){this.manager=void 0!==t?t:Hs}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Di(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Bt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Bt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1}/**
 * Camera for rendering cube maps
 *	- renders scene into axis-aligned cube
 *
 * @author alteredq / http://alteredqualia.com/
 */
function Bi(t,e,n){ct.call(this),this.type="CubeCamera";var i=new Bt(90,1,t,e);i.up.set(0,-1,0),i.lookAt(new c(1,0,0)),this.add(i);var r=new Bt(90,1,t,e);r.up.set(0,-1,0),r.lookAt(new c(-1,0,0)),this.add(r);var o=new Bt(90,1,t,e);o.up.set(0,0,1),o.lookAt(new c(0,1,0)),this.add(o);var a=new Bt(90,1,t,e);a.up.set(0,0,-1),a.lookAt(new c(0,-1,0)),this.add(a);var s=new Bt(90,1,t,e);s.up.set(0,-1,0),s.lookAt(new c(0,0,1)),this.add(s);var u=new Bt(90,1,t,e);u.up.set(0,-1,0),u.lookAt(new c(0,0,-1)),this.add(u);var h={format:Ua,magFilter:Aa,minFilter:Aa};this.renderTarget=new l(n,n,h),this.renderTarget.texture.name="CubeCamera",this.updateCubeMap=function(t,e){null===this.parent&&this.updateMatrixWorld();var n=this.renderTarget,l=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,n.activeCubeFace=0,t.render(e,i,n),n.activeCubeFace=1,t.render(e,r,n),n.activeCubeFace=2,t.render(e,o,n),n.activeCubeFace=3,t.render(e,a,n),n.activeCubeFace=4,t.render(e,s,n),n.texture.generateMipmaps=l,n.activeCubeFace=5,t.render(e,u,n),t.setRenderTarget(null)}}/**
 * @author mrdoob / http://mrdoob.com/
 */
function ji(t){Bt.call(this),this.enabled=!1,this.cameras=t||[]}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ui(){ct.call(this),this.type="AudioListener",this.context=$s.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null}/**
 * @author mrdoob / http://mrdoob.com/
 * @author Reece Aaron Lecrivain / http://reecenotes.com/
 */
function ki(t){ct.call(this),this.type="Audio",this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.loop=!1,this.startTime=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filters=[]}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Vi(t){ki.call(this,t),this.panner=this.context.createPanner(),this.panner.connect(this.gain)}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Gi(t,e){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=void 0!==e?e:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}/**
 *
 * Buffered scene graph property that allows weighted accumulation.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function Fi(t,e,n){this.binding=t,this.valueSize=n;var i,r=Float64Array;switch(e){case"quaternion":i=this._slerp;break;case"string":case"bool":r=Array,i=this._select;break;default:i=this._lerp}this.buffer=new r(4*n),
// layout: [ incoming | accu0 | accu1 | orig ]
//
// interpolators can use .buffer as their .result
// the data then goes to 'incoming'
//
// 'accu0' and 'accu1' are used frame-interleaved for
// the cumulative result and are compared to detect
// changes
//
// 'orig' stores the original state of the property
this._mixBufferRegion=i,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}/**
 *
 * A reference to a real property in the scene graph.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function zi(t,e,n){var i=n||Hi.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}function Hi(t,e,n){this.path=e,this.parsedPath=n||Hi.parseTrackName(e),this.node=Hi.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}/**
 *
 * A group of objects that receives a shared animation state.
 *
 * Usage:
 *
 * 	-	Add objects you would otherwise pass as 'root' to the
 * 		constructor or the .clipAction method of AnimationMixer.
 *
 * 	-	Instead pass this object as 'root'.
 *
 * 	-	You can also add and remove objects later when the mixer
 * 		is running.
 *
 * Note:
 *
 *  	Objects of this class appear as one object to the mixer,
 *  	so cache control of the individual objects must be done
 *  	on the group.
 *
 * Limitation:
 *
 * 	- 	The animated properties must be compatible among the
 * 		all objects in the group.
 *
 *  -	A single property can either be controlled through a
 *  	target group or directly, but not both.
 *
 * @author tschw
 */
function Xi(t){this.uuid=As.generateUUID(),
// cached objects followed by the active ones
this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;// threshold
// note: read by PropertyBinding.Composite
var e={};this._indicesByUUID=e;// for bookkeeping
for(var n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],// inside: string
this._parsedPaths=[],// inside: { we don't care, here }
this._bindings=[],// inside: Array< PropertyBinding >
this._bindingsIndicesByPath={};// inside: indices in these arrays
var r=this;this.stats={objects:{get total(){return r._objects.length},get inUse(){return this.total-r.nCachedObjects_}},get bindingsPerObject(){return r._bindings.length}}}/**
 *
 * Action provided by AnimationMixer for scheduling clip playback on specific
 * objects.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 *
 */
function Wi(t,e,n){this._mixer=t,this._clip=e,this._localRoot=n||null;for(var i=e.tracks,r=i.length,o=new Array(r),a={endingStart:as,endingEnd:as},s=0;s!==r;++s){var l=i[s].createInterpolant(null);o[s]=l,l.settings=a}this._interpolantSettings=a,this._interpolants=o,// bound by the mixer
// inside: PropertyMixer (managed by the mixer)
this._propertyBindings=new Array(r),this._cacheIndex=null,// for the memory manager
this._byClipCacheIndex=null,// for the memory manager
this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=es,this._loopCount=-1,
// global mixer time when the action is to be started
// it's set back to 'null' upon start of the action
this._startTime=null,
// scaled local time of the action
// gets clamped or wrapped to 0..clip.duration according to loop
this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,// no. of repetitions when looping
this.paused=!1,// true -> zero effective time scale
this.enabled=!0,// false -> zero effective weight
this.clampWhenFinished=!1,// keep feeding the last frame?
this.zeroSlopeAtStart=!0,// for smooth interpolation w/o separate
this.zeroSlopeAtEnd=!0}/**
 *
 * Player for AnimationClips.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
function Yi(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Ki(t){"string"==typeof t&&(t=arguments[1]),this.value=t}/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function Zi(){Pt.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0}/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function qi(t,e,n,i){this.uuid=As.generateUUID(),this.data=t,this.itemSize=e,this.offset=n,this.normalized=!0===i}/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function Qi(t,e){this.uuid=As.generateUUID(),this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function Ji(t,e,n){Qi.call(this,t,e),this.meshPerAttribute=n||1}/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
function $i(t,e,n){mt.call(this,t,e),this.meshPerAttribute=n||1}/**
 * @author mrdoob / http://mrdoob.com/
 * @author bhouston / http://clara.io/
 * @author stephomi / http://stephaneginier.com/
 */
function tr(t,e,n,i){this.ray=new st(t,e),
// direction is assumed to be normalized (for accurate distance calculations)
this.near=n||0,this.far=i||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return this.Points}}})}function er(t,e){return t.distance-e.distance}function nr(t,e,n,i){if(!1!==t.visible&&(t.raycast(e,n),!0===i))for(var r=t.children,o=0,a=r.length;o<a;o++)nr(r[o],e,n,!0)}/**
 * @author alteredq / http://alteredqualia.com/
 */
function ir(t){this.autoStart=void 0===t||t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}/**
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 *
 * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
 *
 * The poles (phi) are at the positive and negative y axis.
 * The equator starts at positive z.
 */
function rr(t,e,n){// around the equator of the sphere
// up / down towards top and bottom pole
return this.radius=void 0!==t?t:1,this.phi=void 0!==e?e:0,this.theta=void 0!==n?n:0,this}/**
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Ref: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
 *
 */
function or(t,e,n){// height above the x-z plane
// distance from the origin to a point in the x-z plane
// counterclockwise angle in the x-z plane measured in radians from the positive z-axis
return this.radius=void 0!==t?t:1,this.theta=void 0!==e?e:0,this.y=void 0!==n?n:0,this}/**
 * @author alteredq / http://alteredqualia.com/
 */
function ar(t,e){Lt.call(this,t,e),this.animationsMap={},this.animationsList=[];
// prepare default animation
// (all frames played together in 1 second)
var n=this.geometry.morphTargets.length,i=n-1,r=n/1;this.createAnimation("__default",0,i,r),this.setAnimationWeight("__default",1)}/**
 * @author alteredq / http://alteredqualia.com/
 */
function sr(t){ct.call(this),this.material=t,this.render=function(t){}}/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/
function lr(t,e,n,i){this.object=t,this.size=void 0!==e?e:1;var r=void 0!==n?n:16711680,o=void 0!==i?i:1,a=0,s=this.object.geometry;s&&s.isGeometry?a=3*s.faces.length:s&&s.isBufferGeometry&&(a=s.attributes.normal.count);
//
var l=new Pt,u=new wt(2*a*3,3);l.addAttribute("position",u),Te.call(this,l,new Me({color:r,linewidth:o})),
//
this.matrixAutoUpdate=!1,this.update()}/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/
function ur(t){ct.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;for(var e=new Pt,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],i=0,r=1;i<32;i++,r++){var o=i/32*Math.PI*2,a=r/32*Math.PI*2;n.push(Math.cos(o),Math.sin(o),1,Math.cos(a),Math.sin(a),1)}e.addAttribute("position",new wt(n,3));var s=new Me({fog:!1});this.cone=new Te(e,s),this.add(this.cone),this.update()}/**
 * @author Sean Griffin / http://twitter.com/sgrif
 * @author Michael Guerrero / http://realitymeltdown.com
 * @author mrdoob / http://mrdoob.com/
 * @author ikerr / http://verold.com
 * @author Mugen87 / https://github.com/Mugen87
 */
function cr(t){this.bones=this.getBoneList(t);for(var e=new Pt,n=[],i=[],r=new K(0,0,1),o=new K(0,1,0),a=0;a<this.bones.length;a++){var s=this.bones[a];s.parent&&s.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(r.r,r.g,r.b),i.push(o.r,o.g,o.b))}e.addAttribute("position",new wt(n,3)),e.addAttribute("color",new wt(i,3));var l=new Me({vertexColors:wo,depthTest:!1,depthWrite:!1,transparent:!0});Te.call(this,e,l),this.root=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.update()}/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
function hr(t,e){this.light=t,this.light.updateMatrixWorld();var n=new sn(e,4,2),i=new ft({wireframe:!0,fog:!1});i.color.copy(this.light.color),Lt.call(this,n,i),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1}/**
 * @author abelnation / http://github.com/abelnation
 * @author Mugen87 / http://github.com/Mugen87
 * @author WestLangley / http://github.com/WestLangley
 */
function dr(t){ct.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;var e=new Me({color:t.color}),n=new Pt;n.addAttribute("position",new mt(new Float32Array(15),3)),this.add(new Ee(n,e)),this.update()}/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */
function pr(t,e){ct.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;var n=new He(e);n.rotateY(.5*Math.PI);var i=new ft({vertexColors:wo,wireframe:!0}),r=n.getAttribute("position"),o=new Float32Array(3*r.count);n.addAttribute("color",new mt(o,3)),this.add(new Lt(n,i)),this.update()}/**
 * @author mrdoob / http://mrdoob.com/
 */
function fr(t,e,n,i){t=t||10,e=e||10,n=new K(void 0!==n?n:4473924),i=new K(void 0!==i?i:8947848);for(var r=e/2,o=t/e,a=t/2,s=[],l=[],u=0,c=0,h=-a;u<=e;u++,h+=o){s.push(-a,0,h,a,0,h),s.push(h,0,-a,h,0,a);var d=u===r?n:i;d.toArray(l,c),c+=3,d.toArray(l,c),c+=3,d.toArray(l,c),c+=3,d.toArray(l,c),c+=3}var p=new Pt;p.addAttribute("position",new wt(s,3)),p.addAttribute("color",new wt(l,3));var f=new Me({vertexColors:wo});Te.call(this,p,f)}/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / http://github.com/Mugen87
 * @author Hectate / http://www.github.com/Hectate
 */
function mr(t,e,n,i,r,o){t=t||10,e=e||16,n=n||8,i=i||64,r=new K(void 0!==r?r:4473924),o=new K(void 0!==o?o:8947848);var a,s,l,u,c,h,d,p=[],f=[];
// create the radials
for(u=0;u<=e;u++)l=u/e*(2*Math.PI),a=Math.sin(l)*t,s=Math.cos(l)*t,p.push(0,0,0),p.push(a,0,s),d=1&u?r:o,f.push(d.r,d.g,d.b),f.push(d.r,d.g,d.b);
// create the circles
for(u=0;u<=n;u++)for(d=1&u?r:o,h=t-t/n*u,c=0;c<i;c++)
// first vertex
l=c/i*(2*Math.PI),a=Math.sin(l)*h,s=Math.cos(l)*h,p.push(a,0,s),f.push(d.r,d.g,d.b),
// second vertex
l=(c+1)/i*(2*Math.PI),a=Math.sin(l)*h,s=Math.cos(l)*h,p.push(a,0,s),f.push(d.r,d.g,d.b);var m=new Pt;m.addAttribute("position",new wt(p,3)),m.addAttribute("color",new wt(f,3));var g=new Me({vertexColors:wo});Te.call(this,m,g)}/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/
function gr(t,e,n,i){
// FaceNormalsHelper only supports THREE.Geometry
this.object=t,this.size=void 0!==e?e:1;var r=void 0!==n?n:16776960,o=void 0!==i?i:1,a=0,s=this.object.geometry;s&&s.isGeometry&&(a=s.faces.length);
//
var l=new Pt,u=new wt(2*a*3,3);l.addAttribute("position",u),Te.call(this,l,new Me({color:r,linewidth:o})),
//
this.matrixAutoUpdate=!1,this.update()}/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 */
function vr(t,e){ct.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,void 0===e&&(e=1);var n=new Pt;n.addAttribute("position",new wt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));var i=new Me({fog:!1});this.add(new Ee(n,i)),n=new Pt,n.addAttribute("position",new wt([0,0,0,0,0,1],3)),this.add(new Ee(n,i)),this.update()}/**
 * @author alteredq / http://alteredqualia.com/
 * @author Mugen87 / https://github.com/Mugen87
 *
 *	- shows frustum, line of sight and up of the camera
 *	- suitable for fast updates
 * 	- based on frustum visualization in lightgl.js shadowmap example
 *		http://evanw.github.com/lightgl.js/tests/shadowmap.html
 */
function yr(t){function e(t,e,i){n(t,i),n(e,i)}function n(t,e){o.push(0,0,0),a.push(e.r,e.g,e.b),void 0===s[t]&&(s[t]=[]),s[t].push(o.length/3-1)}var i=new Pt,r=new Me({color:16777215,vertexColors:Ao}),o=[],a=[],s={},l=new K(16755200),u=new K(16711680),c=new K(43775),h=new K(16777215),d=new K(3355443);
// near
e("n1","n2",l),e("n2","n4",l),e("n4","n3",l),e("n3","n1",l),
// far
e("f1","f2",l),e("f2","f4",l),e("f4","f3",l),e("f3","f1",l),
// sides
e("n1","f1",l),e("n2","f2",l),e("n3","f3",l),e("n4","f4",l),
// cone
e("p","n1",u),e("p","n2",u),e("p","n3",u),e("p","n4",u),
// up
e("u1","u2",c),e("u2","u3",c),e("u3","u1",c),
// target
e("c","t",h),e("p","c",d),
// cross
e("cn1","cn2",d),e("cn3","cn4",d),e("cf1","cf2",d),e("cf3","cf4",d),i.addAttribute("position",new wt(o,3)),i.addAttribute("color",new wt(a,3)),Te.call(this,i,r),this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / http://github.com/Mugen87
 */
function br(t,e){this.object=t,void 0===e&&(e=16776960);var n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Pt;r.setIndex(new mt(n,1)),r.addAttribute("position",new mt(i,3)),Te.call(this,r,new Me({color:e})),this.matrixAutoUpdate=!1,this.update()}function _r(t,e,n,i,r,o){
// dir is assumed to be normalized
ct.call(this),void 0===i&&(i=16776960),void 0===n&&(n=1),void 0===r&&(r=.2*n),void 0===o&&(o=.2*r),void 0===tl&&(tl=new Pt,tl.addAttribute("position",new wt([0,0,0,0,1,0],3)),el=new gn(0,.5,1,5,1),el.translate(0,-.5,0)),this.position.copy(e),this.line=new Ee(tl,new Me({color:i})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Lt(el,new ft({color:i})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}/**
 * @author sroucheray / http://sroucheray.org/
 * @author mrdoob / http://mrdoob.com/
 */
function xr(t){t=t||1;var e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Pt;i.addAttribute("position",new wt(e,3)),i.addAttribute("color",new wt(n,3));var r=new Me({vertexColors:wo});Te.call(this,i,r)}/**
 * @author zz85 https://github.com/zz85
 *
 * Centripetal CatmullRom Curve - which is useful for avoiding
 * cusps and self-intersections in non-uniform catmull rom curves.
 * http://www.cemyuksel.com/research/catmullrom_param/catmullrom.pdf
 *
 * curve.type accepts centripetal(default), chordal and catmullrom
 * curve.tension is used for catmullrom which defaults to 0.5
 */
/*
Based on an optimized c++ solution in
 - http://stackoverflow.com/questions/9489736/catmull-rom-curve-with-no-cusps-and-no-self-intersections/
 - http://ideone.com/NoEbVM

This CubicPoly class could be used for reusing some variables and calculations,
but for three.js curve use, it could be possible inlined and flatten into a single function call
which can be placed in CurveUtils.
*/
function Ar(){/*
	 * Compute coefficients for a cubic polynomial
	 *   p(s) = c0 + c1*s + c2*s^2 + c3*s^3
	 * such that
	 *   p(0) = x0, p(1) = x1
	 *  and
	 *   p'(0) = t0, p'(1) = t1.
	 */
function t(t,o,a,s){e=t,n=a,i=-3*t+3*o-2*a-s,r=2*t-2*o+a+s}var e=0,n=0,i=0,r=0;return{initCatmullRom:function(e,n,i,r,o){t(n,i,o*(i-e),o*(r-n))},initNonuniformCatmullRom:function(e,n,i,r,o,a,s){
// compute tangents when parameterized in [t1,t2]
var l=(n-e)/o-(i-e)/(o+a)+(i-n)/a,u=(i-n)/a-(r-n)/(a+s)+(r-i)/s;
// rescale tangents for parametrization in [0,1]
l*=a,u*=a,t(n,i,l,u)},calc:function(t){var o=t*t;return e+n*t+i*o+r*(o*t)}}}function wr(t){Ai.call(this),this.points=t||[],this.closed=!1}function Sr(t,e,n,i){Ai.call(this),this.v0=t,this.v1=e,this.v2=n,this.v3=i}function Mr(t,e,n){Ai.call(this),this.v0=t,this.v1=e,this.v2=n}function Er(t,e){Ai.call(this),this.v1=t,this.v2=e}function Tr(t,e,n,i,r,o){Mi.call(this,t,e,n,n,i,r,o)}/**
 * @author mrdoob / http://mrdoob.com/
 */
function Cr(t,e,n,i,r,o,a){return new pt(t,e,n,r,o,a)}function Pr(t){return t}function Lr(t){return void 0===t&&(t=[]),t.isMultiMaterial=!0,t.materials=t,t.clone=function(){return t.slice()},t}function Nr(t,e){return new Le(t,e)}function Ir(t){return new _e(t)}function Or(t,e){return new Le(t,e)}function Rr(t){return new Pe(t)}function Dr(t){return new Pe(t)}function Br(t){return new Pe(t)}function jr(t,e,n){return new c(t,e,n)}
//
function Ur(t,e){return new mt(t,e).setDynamic(!0)}function kr(t,e){return new gt(t,e)}function Vr(t,e){return new vt(t,e)}function Gr(t,e){return new yt(t,e)}function Fr(t,e){return new bt(t,e)}function zr(t,e){return new _t(t,e)}function Hr(t,e){return new xt(t,e)}function Xr(t,e){return new At(t,e)}function Wr(t,e){return new wt(t,e)}function Yr(t,e){return new St(t,e)}
//
function Kr(t){wr.call(this,t),this.type="catmullrom",this.closed=!0}
//
function Zr(t){wr.call(this,t),this.type="catmullrom"}
//
function qr(t){wr.call(this,t),this.type="catmullrom"}
//
function Qr(t,e){return new br(t,e)}function Jr(t,e){return new Te(new fn(t.geometry),new Me({color:void 0!==e?e:16777215}))}function $r(t,e){return new Te(new Be(t.geometry),new Me({color:void 0!==e?e:16777215}))}
//
function to(t){return new Nn(t)}function eo(t){return new On(t)}
//
function no(){this.projectVector=function(t,e){t.project(e)},this.unprojectVector=function(t,e){t.unproject(e)},this.pickingRay=function(){}}
//
function io(){this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),this.clear=function(){},this.render=function(){},this.setClearColor=function(){},this.setSize=function(){}}Object.defineProperty(e,"__esModule",{value:!0}),/* harmony export (binding) */
n.d(e,"WebGLRenderTargetCube",function(){return l}),/* harmony export (binding) */
n.d(e,"WebGLRenderTarget",function(){return s}),/* harmony export (binding) */
n.d(e,"WebGLRenderer",function(){return fe}),/* harmony export (binding) */
n.d(e,"ShaderLib",function(){return Ds}),/* harmony export (binding) */
n.d(e,"UniformsLib",function(){return Is}),/* harmony export (binding) */
n.d(e,"UniformsUtils",function(){return Os}),/* harmony export (binding) */
n.d(e,"ShaderChunk",function(){return Rs}),/* harmony export (binding) */
n.d(e,"FogExp2",function(){return me}),/* harmony export (binding) */
n.d(e,"Fog",function(){return ge}),/* harmony export (binding) */
n.d(e,"Scene",function(){return ve}),/* harmony export (binding) */
n.d(e,"LensFlare",function(){return ye}),/* harmony export (binding) */
n.d(e,"Sprite",function(){return _e}),/* harmony export (binding) */
n.d(e,"LOD",function(){return xe}),/* harmony export (binding) */
n.d(e,"SkinnedMesh",function(){return Se}),/* harmony export (binding) */
n.d(e,"Skeleton",function(){return Ae}),/* harmony export (binding) */
n.d(e,"Bone",function(){return we}),/* harmony export (binding) */
n.d(e,"Mesh",function(){return Lt}),/* harmony export (binding) */
n.d(e,"LineSegments",function(){return Te}),/* harmony export (binding) */
n.d(e,"LineLoop",function(){return Ce}),/* harmony export (binding) */
n.d(e,"Line",function(){return Ee}),/* harmony export (binding) */
n.d(e,"Points",function(){return Le}),/* harmony export (binding) */
n.d(e,"Group",function(){return Ne}),/* harmony export (binding) */
n.d(e,"VideoTexture",function(){return Ie}),/* harmony export (binding) */
n.d(e,"DataTexture",function(){return d}),/* harmony export (binding) */
n.d(e,"CompressedTexture",function(){return Oe}),/* harmony export (binding) */
n.d(e,"CubeTexture",function(){return p}),/* harmony export (binding) */
n.d(e,"CanvasTexture",function(){return Re}),/* harmony export (binding) */
n.d(e,"DepthTexture",function(){return De}),/* harmony export (binding) */
n.d(e,"Texture",function(){return o}),/* harmony export (binding) */
n.d(e,"CompressedTextureLoader",function(){return In}),/* harmony export (binding) */
n.d(e,"DataTextureLoader",function(){return On}),/* harmony export (binding) */
n.d(e,"CubeTextureLoader",function(){return Dn}),/* harmony export (binding) */
n.d(e,"TextureLoader",function(){return Bn}),/* harmony export (binding) */
n.d(e,"ObjectLoader",function(){return hi}),/* harmony export (binding) */
n.d(e,"MaterialLoader",function(){return si}),/* harmony export (binding) */
n.d(e,"BufferGeometryLoader",function(){return li}),/* harmony export (binding) */
n.d(e,"DefaultLoadingManager",function(){return Hs}),/* harmony export (binding) */
n.d(e,"LoadingManager",function(){return Ln}),/* harmony export (binding) */
n.d(e,"JSONLoader",function(){return ci}),/* harmony export (binding) */
n.d(e,"ImageLoader",function(){return Rn}),/* harmony export (binding) */
n.d(e,"FontLoader",function(){return Oi}),/* harmony export (binding) */
n.d(e,"FileLoader",function(){return Nn}),/* harmony export (binding) */
n.d(e,"Loader",function(){return ui}),/* harmony export (binding) */
n.d(e,"Cache",function(){return zs}),/* harmony export (binding) */
n.d(e,"AudioLoader",function(){return Ri}),/* harmony export (binding) */
n.d(e,"SpotLightShadow",function(){return Vn}),/* harmony export (binding) */
n.d(e,"SpotLight",function(){return Gn}),/* harmony export (binding) */
n.d(e,"PointLight",function(){return Fn}),/* harmony export (binding) */
n.d(e,"RectAreaLight",function(){return Wn}),/* harmony export (binding) */
n.d(e,"HemisphereLight",function(){return Un}),/* harmony export (binding) */
n.d(e,"DirectionalLightShadow",function(){return zn}),/* harmony export (binding) */
n.d(e,"DirectionalLight",function(){return Hn}),/* harmony export (binding) */
n.d(e,"AmbientLight",function(){return Xn}),/* harmony export (binding) */
n.d(e,"LightShadow",function(){return kn}),/* harmony export (binding) */
n.d(e,"Light",function(){return jn}),/* harmony export (binding) */
n.d(e,"StereoCamera",function(){return Di}),/* harmony export (binding) */
n.d(e,"PerspectiveCamera",function(){return Bt}),/* harmony export (binding) */
n.d(e,"OrthographicCamera",function(){return jt}),/* harmony export (binding) */
n.d(e,"CubeCamera",function(){return Bi}),/* harmony export (binding) */
n.d(e,"ArrayCamera",function(){return ji}),/* harmony export (binding) */
n.d(e,"Camera",function(){return Dt}),/* harmony export (binding) */
n.d(e,"AudioListener",function(){return Ui}),/* harmony export (binding) */
n.d(e,"PositionalAudio",function(){return Vi}),/* harmony export (binding) */
n.d(e,"AudioContext",function(){return $s}),/* harmony export (binding) */
n.d(e,"AudioAnalyser",function(){return Gi}),/* harmony export (binding) */
n.d(e,"Audio",function(){return ki}),/* harmony export (binding) */
n.d(e,"VectorKeyframeTrack",function(){return Jn}),/* harmony export (binding) */
n.d(e,"StringKeyframeTrack",function(){return ni}),/* harmony export (binding) */
n.d(e,"QuaternionKeyframeTrack",function(){return ti}),/* harmony export (binding) */
n.d(e,"NumberKeyframeTrack",function(){return ei}),/* harmony export (binding) */
n.d(e,"ColorKeyframeTrack",function(){return ri}),/* harmony export (binding) */
n.d(e,"BooleanKeyframeTrack",function(){return ii}),/* harmony export (binding) */
n.d(e,"PropertyMixer",function(){return Fi}),/* harmony export (binding) */
n.d(e,"PropertyBinding",function(){return Hi}),/* harmony export (binding) */
n.d(e,"KeyframeTrack",function(){return oi}),/* harmony export (binding) */
n.d(e,"AnimationUtils",function(){return Xs}),/* harmony export (binding) */
n.d(e,"AnimationObjectGroup",function(){return Xi}),/* harmony export (binding) */
n.d(e,"AnimationMixer",function(){return Yi}),/* harmony export (binding) */
n.d(e,"AnimationClip",function(){return ai}),/* harmony export (binding) */
n.d(e,"Uniform",function(){return Ki}),/* harmony export (binding) */
n.d(e,"InstancedBufferGeometry",function(){return Zi}),/* harmony export (binding) */
n.d(e,"BufferGeometry",function(){return Pt}),/* harmony export (binding) */
n.d(e,"GeometryIdCount",function(){return Tt}),/* harmony export (binding) */
n.d(e,"Geometry",function(){return Ct}),/* harmony export (binding) */
n.d(e,"InterleavedBufferAttribute",function(){return qi}),/* harmony export (binding) */
n.d(e,"InstancedInterleavedBuffer",function(){return Ji}),/* harmony export (binding) */
n.d(e,"InterleavedBuffer",function(){return Qi}),/* harmony export (binding) */
n.d(e,"InstancedBufferAttribute",function(){return $i}),/* harmony export (binding) */
n.d(e,"Face3",function(){return pt}),/* harmony export (binding) */
n.d(e,"Object3D",function(){return ct}),/* harmony export (binding) */
n.d(e,"Raycaster",function(){return tr}),/* harmony export (binding) */
n.d(e,"Layers",function(){return ut}),/* harmony export (binding) */
n.d(e,"EventDispatcher",function(){return i}),/* harmony export (binding) */
n.d(e,"Clock",function(){return ir}),/* harmony export (binding) */
n.d(e,"QuaternionLinearInterpolant",function(){return $n}),/* harmony export (binding) */
n.d(e,"LinearInterpolant",function(){return Zn}),/* harmony export (binding) */
n.d(e,"DiscreteInterpolant",function(){return qn}),/* harmony export (binding) */
n.d(e,"CubicInterpolant",function(){return Kn}),/* harmony export (binding) */
n.d(e,"Interpolant",function(){return Yn}),/* harmony export (binding) */
n.d(e,"Triangle",function(){return dt}),/* harmony export (binding) */
n.d(e,"Math",function(){return As}),/* harmony export (binding) */
n.d(e,"Spherical",function(){return rr}),/* harmony export (binding) */
n.d(e,"Cylindrical",function(){return or}),/* harmony export (binding) */
n.d(e,"Plane",function(){return rt}),/* harmony export (binding) */
n.d(e,"Frustum",function(){return ot}),/* harmony export (binding) */
n.d(e,"Sphere",function(){return nt}),/* harmony export (binding) */
n.d(e,"Ray",function(){return st}),/* harmony export (binding) */
n.d(e,"Matrix4",function(){return h}),/* harmony export (binding) */
n.d(e,"Matrix3",function(){return it}),/* harmony export (binding) */
n.d(e,"Box3",function(){return et}),/* harmony export (binding) */
n.d(e,"Box2",function(){return Z}),/* harmony export (binding) */
n.d(e,"Line3",function(){return ht}),/* harmony export (binding) */
n.d(e,"Euler",function(){return lt}),/* harmony export (binding) */
n.d(e,"Vector4",function(){return a}),/* harmony export (binding) */
n.d(e,"Vector3",function(){return c}),/* harmony export (binding) */
n.d(e,"Vector2",function(){return r}),/* harmony export (binding) */
n.d(e,"Quaternion",function(){return u}),/* harmony export (binding) */
n.d(e,"Color",function(){return K}),/* harmony export (binding) */
n.d(e,"MorphBlendMesh",function(){return ar}),/* harmony export (binding) */
n.d(e,"ImmediateRenderObject",function(){return sr}),/* harmony export (binding) */
n.d(e,"VertexNormalsHelper",function(){return lr}),/* harmony export (binding) */
n.d(e,"SpotLightHelper",function(){return ur}),/* harmony export (binding) */
n.d(e,"SkeletonHelper",function(){return cr}),/* harmony export (binding) */
n.d(e,"PointLightHelper",function(){return hr}),/* harmony export (binding) */
n.d(e,"RectAreaLightHelper",function(){return dr}),/* harmony export (binding) */
n.d(e,"HemisphereLightHelper",function(){return pr}),/* harmony export (binding) */
n.d(e,"GridHelper",function(){return fr}),/* harmony export (binding) */
n.d(e,"PolarGridHelper",function(){return mr}),/* harmony export (binding) */
n.d(e,"FaceNormalsHelper",function(){return gr}),/* harmony export (binding) */
n.d(e,"DirectionalLightHelper",function(){return vr}),/* harmony export (binding) */
n.d(e,"CameraHelper",function(){return yr}),/* harmony export (binding) */
n.d(e,"BoxHelper",function(){return br}),/* harmony export (binding) */
n.d(e,"ArrowHelper",function(){return _r}),/* harmony export (binding) */
n.d(e,"AxisHelper",function(){return xr}),/* harmony export (binding) */
n.d(e,"CatmullRomCurve3",function(){return wr}),/* harmony export (binding) */
n.d(e,"CubicBezierCurve3",function(){return Sr}),/* harmony export (binding) */
n.d(e,"QuadraticBezierCurve3",function(){return Mr}),/* harmony export (binding) */
n.d(e,"LineCurve3",function(){return Er}),/* harmony export (binding) */
n.d(e,"ArcCurve",function(){return Tr}),/* harmony export (binding) */
n.d(e,"EllipseCurve",function(){return Mi}),/* harmony export (binding) */
n.d(e,"SplineCurve",function(){return Ei}),/* harmony export (binding) */
n.d(e,"CubicBezierCurve",function(){return Ti}),/* harmony export (binding) */
n.d(e,"QuadraticBezierCurve",function(){return Ci}),/* harmony export (binding) */
n.d(e,"LineCurve",function(){return wi}),/* harmony export (binding) */
n.d(e,"Shape",function(){return Li}),/* harmony export (binding) */
n.d(e,"Path",function(){return Pi}),/* harmony export (binding) */
n.d(e,"ShapePath",function(){return Ni}),/* harmony export (binding) */
n.d(e,"Font",function(){return Ii}),/* harmony export (binding) */
n.d(e,"CurvePath",function(){return Si}),/* harmony export (binding) */
n.d(e,"Curve",function(){return Ai}),/* harmony export (binding) */
n.d(e,"ShapeUtils",function(){return Vs}),/* harmony export (binding) */
n.d(e,"SceneUtils",function(){return al}),/* harmony export (binding) */
n.d(e,"WireframeGeometry",function(){return Be}),/* harmony export (binding) */
n.d(e,"ParametricGeometry",function(){return je}),/* harmony export (binding) */
n.d(e,"ParametricBufferGeometry",function(){return Ue}),/* harmony export (binding) */
n.d(e,"TetrahedronGeometry",function(){return Ge}),/* harmony export (binding) */
n.d(e,"TetrahedronBufferGeometry",function(){return Fe}),/* harmony export (binding) */
n.d(e,"OctahedronGeometry",function(){return ze}),/* harmony export (binding) */
n.d(e,"OctahedronBufferGeometry",function(){return He}),/* harmony export (binding) */
n.d(e,"IcosahedronGeometry",function(){return Xe}),/* harmony export (binding) */
n.d(e,"IcosahedronBufferGeometry",function(){return We}),/* harmony export (binding) */
n.d(e,"DodecahedronGeometry",function(){return Ye}),/* harmony export (binding) */
n.d(e,"DodecahedronBufferGeometry",function(){return Ke}),/* harmony export (binding) */
n.d(e,"PolyhedronGeometry",function(){return ke}),/* harmony export (binding) */
n.d(e,"PolyhedronBufferGeometry",function(){return Ve}),/* harmony export (binding) */
n.d(e,"TubeGeometry",function(){return Ze}),/* harmony export (binding) */
n.d(e,"TubeBufferGeometry",function(){return qe}),/* harmony export (binding) */
n.d(e,"TorusKnotGeometry",function(){return Qe}),/* harmony export (binding) */
n.d(e,"TorusKnotBufferGeometry",function(){return Je}),/* harmony export (binding) */
n.d(e,"TorusGeometry",function(){return $e}),/* harmony export (binding) */
n.d(e,"TorusBufferGeometry",function(){return tn}),/* harmony export (binding) */
n.d(e,"TextGeometry",function(){return rn}),/* harmony export (binding) */
n.d(e,"TextBufferGeometry",function(){return on}),/* harmony export (binding) */
n.d(e,"SphereGeometry",function(){return an}),/* harmony export (binding) */
n.d(e,"SphereBufferGeometry",function(){return sn}),/* harmony export (binding) */
n.d(e,"RingGeometry",function(){return ln}),/* harmony export (binding) */
n.d(e,"RingBufferGeometry",function(){return un}),/* harmony export (binding) */
n.d(e,"PlaneGeometry",function(){return Ot}),/* harmony export (binding) */
n.d(e,"PlaneBufferGeometry",function(){return Rt}),/* harmony export (binding) */
n.d(e,"LatheGeometry",function(){return cn}),/* harmony export (binding) */
n.d(e,"LatheBufferGeometry",function(){return hn}),/* harmony export (binding) */
n.d(e,"ShapeGeometry",function(){return dn}),/* harmony export (binding) */
n.d(e,"ShapeBufferGeometry",function(){return pn}),/* harmony export (binding) */
n.d(e,"ExtrudeGeometry",function(){return en}),/* harmony export (binding) */
n.d(e,"ExtrudeBufferGeometry",function(){return nn}),/* harmony export (binding) */
n.d(e,"EdgesGeometry",function(){return fn}),/* harmony export (binding) */
n.d(e,"ConeGeometry",function(){return vn}),/* harmony export (binding) */
n.d(e,"ConeBufferGeometry",function(){return yn}),/* harmony export (binding) */
n.d(e,"CylinderGeometry",function(){return mn}),/* harmony export (binding) */
n.d(e,"CylinderBufferGeometry",function(){return gn}),/* harmony export (binding) */
n.d(e,"CircleGeometry",function(){return bn}),/* harmony export (binding) */
n.d(e,"CircleBufferGeometry",function(){return _n}),/* harmony export (binding) */
n.d(e,"BoxGeometry",function(){return Nt}),/* harmony export (binding) */
n.d(e,"BoxBufferGeometry",function(){return It}),/* harmony export (binding) */
n.d(e,"ShadowMaterial",function(){return xn}),/* harmony export (binding) */
n.d(e,"SpriteMaterial",function(){return be}),/* harmony export (binding) */
n.d(e,"RawShaderMaterial",function(){return An}),/* harmony export (binding) */
n.d(e,"ShaderMaterial",function(){return $}),/* harmony export (binding) */
n.d(e,"PointsMaterial",function(){return Pe});/* harmony export (binding) */
n.d(e,"MeshPhysicalMaterial",function(){return Sn}),/* harmony export (binding) */
n.d(e,"MeshStandardMaterial",function(){return wn}),/* harmony export (binding) */
n.d(e,"MeshPhongMaterial",function(){return Mn}),/* harmony export (binding) */
n.d(e,"MeshToonMaterial",function(){return En}),/* harmony export (binding) */
n.d(e,"MeshNormalMaterial",function(){return Tn}),/* harmony export (binding) */
n.d(e,"MeshLambertMaterial",function(){return Cn}),/* harmony export (binding) */
n.d(e,"MeshDepthMaterial",function(){return tt}),/* harmony export (binding) */
n.d(e,"MeshBasicMaterial",function(){return ft}),/* harmony export (binding) */
n.d(e,"LineDashedMaterial",function(){return Pn}),/* harmony export (binding) */
n.d(e,"LineBasicMaterial",function(){return Me}),/* harmony export (binding) */
n.d(e,"Material",function(){return J}),/* harmony export (binding) */
n.d(e,"Float64BufferAttribute",function(){return St}),/* harmony export (binding) */
n.d(e,"Float32BufferAttribute",function(){return wt}),/* harmony export (binding) */
n.d(e,"Uint32BufferAttribute",function(){return At}),/* harmony export (binding) */
n.d(e,"Int32BufferAttribute",function(){return xt}),/* harmony export (binding) */
n.d(e,"Uint16BufferAttribute",function(){return _t}),/* harmony export (binding) */
n.d(e,"Int16BufferAttribute",function(){return bt}),/* harmony export (binding) */
n.d(e,"Uint8ClampedBufferAttribute",function(){return yt}),/* harmony export (binding) */
n.d(e,"Uint8BufferAttribute",function(){return vt}),/* harmony export (binding) */
n.d(e,"Int8BufferAttribute",function(){return gt}),/* harmony export (binding) */
n.d(e,"BufferAttribute",function(){return mt}),/* harmony export (binding) */
n.d(e,"REVISION",function(){return ro}),/* harmony export (binding) */
n.d(e,"MOUSE",function(){return oo}),/* harmony export (binding) */
n.d(e,"CullFaceNone",function(){return ao}),/* harmony export (binding) */
n.d(e,"CullFaceBack",function(){return so}),/* harmony export (binding) */
n.d(e,"CullFaceFront",function(){return lo}),/* harmony export (binding) */
n.d(e,"CullFaceFrontBack",function(){return uo}),/* harmony export (binding) */
n.d(e,"FrontFaceDirectionCW",function(){return co}),/* harmony export (binding) */
n.d(e,"FrontFaceDirectionCCW",function(){return ho}),/* harmony export (binding) */
n.d(e,"BasicShadowMap",function(){return po}),/* harmony export (binding) */
n.d(e,"PCFShadowMap",function(){return fo}),/* harmony export (binding) */
n.d(e,"PCFSoftShadowMap",function(){return mo}),/* harmony export (binding) */
n.d(e,"FrontSide",function(){return go}),/* harmony export (binding) */
n.d(e,"BackSide",function(){return vo}),/* harmony export (binding) */
n.d(e,"DoubleSide",function(){return yo}),/* harmony export (binding) */
n.d(e,"FlatShading",function(){return bo}),/* harmony export (binding) */
n.d(e,"SmoothShading",function(){return _o}),/* harmony export (binding) */
n.d(e,"NoColors",function(){return xo}),/* harmony export (binding) */
n.d(e,"FaceColors",function(){return Ao}),/* harmony export (binding) */
n.d(e,"VertexColors",function(){return wo}),/* harmony export (binding) */
n.d(e,"NoBlending",function(){return So}),/* harmony export (binding) */
n.d(e,"NormalBlending",function(){return Mo}),/* harmony export (binding) */
n.d(e,"AdditiveBlending",function(){return Eo}),/* harmony export (binding) */
n.d(e,"SubtractiveBlending",function(){return To}),/* harmony export (binding) */
n.d(e,"MultiplyBlending",function(){return Co}),/* harmony export (binding) */
n.d(e,"CustomBlending",function(){return Po}),/* harmony export (binding) */
n.d(e,"AddEquation",function(){return Lo}),/* harmony export (binding) */
n.d(e,"SubtractEquation",function(){return No}),/* harmony export (binding) */
n.d(e,"ReverseSubtractEquation",function(){return Io}),/* harmony export (binding) */
n.d(e,"MinEquation",function(){return Oo}),/* harmony export (binding) */
n.d(e,"MaxEquation",function(){return Ro}),/* harmony export (binding) */
n.d(e,"ZeroFactor",function(){return Do}),/* harmony export (binding) */
n.d(e,"OneFactor",function(){return Bo}),/* harmony export (binding) */
n.d(e,"SrcColorFactor",function(){return jo}),/* harmony export (binding) */
n.d(e,"OneMinusSrcColorFactor",function(){return Uo}),/* harmony export (binding) */
n.d(e,"SrcAlphaFactor",function(){return ko}),/* harmony export (binding) */
n.d(e,"OneMinusSrcAlphaFactor",function(){return Vo}),/* harmony export (binding) */
n.d(e,"DstAlphaFactor",function(){return Go}),/* harmony export (binding) */
n.d(e,"OneMinusDstAlphaFactor",function(){return Fo}),/* harmony export (binding) */
n.d(e,"DstColorFactor",function(){return zo}),/* harmony export (binding) */
n.d(e,"OneMinusDstColorFactor",function(){return Ho}),/* harmony export (binding) */
n.d(e,"SrcAlphaSaturateFactor",function(){return Xo}),/* harmony export (binding) */
n.d(e,"NeverDepth",function(){return Wo}),/* harmony export (binding) */
n.d(e,"AlwaysDepth",function(){return Yo}),/* harmony export (binding) */
n.d(e,"LessDepth",function(){return Ko}),/* harmony export (binding) */
n.d(e,"LessEqualDepth",function(){return Zo}),/* harmony export (binding) */
n.d(e,"EqualDepth",function(){return qo}),/* harmony export (binding) */
n.d(e,"GreaterEqualDepth",function(){return Qo}),/* harmony export (binding) */
n.d(e,"GreaterDepth",function(){return Jo}),/* harmony export (binding) */
n.d(e,"NotEqualDepth",function(){return $o}),/* harmony export (binding) */
n.d(e,"MultiplyOperation",function(){return ta}),/* harmony export (binding) */
n.d(e,"MixOperation",function(){return ea}),/* harmony export (binding) */
n.d(e,"AddOperation",function(){return na}),/* harmony export (binding) */
n.d(e,"NoToneMapping",function(){return ia}),/* harmony export (binding) */
n.d(e,"LinearToneMapping",function(){return ra}),/* harmony export (binding) */
n.d(e,"ReinhardToneMapping",function(){return oa}),/* harmony export (binding) */
n.d(e,"Uncharted2ToneMapping",function(){return aa}),/* harmony export (binding) */
n.d(e,"CineonToneMapping",function(){return sa}),/* harmony export (binding) */
n.d(e,"UVMapping",function(){return la}),/* harmony export (binding) */
n.d(e,"CubeReflectionMapping",function(){return ua}),/* harmony export (binding) */
n.d(e,"CubeRefractionMapping",function(){return ca}),/* harmony export (binding) */
n.d(e,"EquirectangularReflectionMapping",function(){return ha}),/* harmony export (binding) */
n.d(e,"EquirectangularRefractionMapping",function(){return da}),/* harmony export (binding) */
n.d(e,"SphericalReflectionMapping",function(){return pa}),/* harmony export (binding) */
n.d(e,"CubeUVReflectionMapping",function(){return fa}),/* harmony export (binding) */
n.d(e,"CubeUVRefractionMapping",function(){return ma}),/* harmony export (binding) */
n.d(e,"RepeatWrapping",function(){return ga}),/* harmony export (binding) */
n.d(e,"ClampToEdgeWrapping",function(){return va}),/* harmony export (binding) */
n.d(e,"MirroredRepeatWrapping",function(){return ya}),/* harmony export (binding) */
n.d(e,"NearestFilter",function(){return ba}),/* harmony export (binding) */
n.d(e,"NearestMipMapNearestFilter",function(){return _a}),/* harmony export (binding) */
n.d(e,"NearestMipMapLinearFilter",function(){return xa}),/* harmony export (binding) */
n.d(e,"LinearFilter",function(){return Aa}),/* harmony export (binding) */
n.d(e,"LinearMipMapNearestFilter",function(){return wa}),/* harmony export (binding) */
n.d(e,"LinearMipMapLinearFilter",function(){return Sa}),/* harmony export (binding) */
n.d(e,"UnsignedByteType",function(){return Ma}),/* harmony export (binding) */
n.d(e,"ByteType",function(){return Ea}),/* harmony export (binding) */
n.d(e,"ShortType",function(){return Ta}),/* harmony export (binding) */
n.d(e,"UnsignedShortType",function(){return Ca}),/* harmony export (binding) */
n.d(e,"IntType",function(){return Pa}),/* harmony export (binding) */
n.d(e,"UnsignedIntType",function(){return La}),/* harmony export (binding) */
n.d(e,"FloatType",function(){return Na}),/* harmony export (binding) */
n.d(e,"HalfFloatType",function(){return Ia}),/* harmony export (binding) */
n.d(e,"UnsignedShort4444Type",function(){return Oa}),/* harmony export (binding) */
n.d(e,"UnsignedShort5551Type",function(){return Ra}),/* harmony export (binding) */
n.d(e,"UnsignedShort565Type",function(){return Da}),/* harmony export (binding) */
n.d(e,"UnsignedInt248Type",function(){return Ba}),/* harmony export (binding) */
n.d(e,"AlphaFormat",function(){return ja}),/* harmony export (binding) */
n.d(e,"RGBFormat",function(){return Ua}),/* harmony export (binding) */
n.d(e,"RGBAFormat",function(){return ka}),/* harmony export (binding) */
n.d(e,"LuminanceFormat",function(){return Va}),/* harmony export (binding) */
n.d(e,"LuminanceAlphaFormat",function(){return Ga}),/* harmony export (binding) */
n.d(e,"RGBEFormat",function(){return Fa}),/* harmony export (binding) */
n.d(e,"DepthFormat",function(){return za}),/* harmony export (binding) */
n.d(e,"DepthStencilFormat",function(){return Ha}),/* harmony export (binding) */
n.d(e,"RGB_S3TC_DXT1_Format",function(){return Xa}),/* harmony export (binding) */
n.d(e,"RGBA_S3TC_DXT1_Format",function(){return Wa}),/* harmony export (binding) */
n.d(e,"RGBA_S3TC_DXT3_Format",function(){return Ya}),/* harmony export (binding) */
n.d(e,"RGBA_S3TC_DXT5_Format",function(){return Ka}),/* harmony export (binding) */
n.d(e,"RGB_PVRTC_4BPPV1_Format",function(){return Za}),/* harmony export (binding) */
n.d(e,"RGB_PVRTC_2BPPV1_Format",function(){return qa}),/* harmony export (binding) */
n.d(e,"RGBA_PVRTC_4BPPV1_Format",function(){return Qa}),/* harmony export (binding) */
n.d(e,"RGBA_PVRTC_2BPPV1_Format",function(){return Ja}),/* harmony export (binding) */
n.d(e,"RGB_ETC1_Format",function(){return $a}),/* harmony export (binding) */
n.d(e,"LoopOnce",function(){return ts}),/* harmony export (binding) */
n.d(e,"LoopRepeat",function(){return es}),/* harmony export (binding) */
n.d(e,"LoopPingPong",function(){return ns}),/* harmony export (binding) */
n.d(e,"InterpolateDiscrete",function(){return is}),/* harmony export (binding) */
n.d(e,"InterpolateLinear",function(){return rs}),/* harmony export (binding) */
n.d(e,"InterpolateSmooth",function(){return os}),/* harmony export (binding) */
n.d(e,"ZeroCurvatureEnding",function(){return as}),/* harmony export (binding) */
n.d(e,"ZeroSlopeEnding",function(){return ss}),/* harmony export (binding) */
n.d(e,"WrapAroundEnding",function(){return ls}),/* harmony export (binding) */
n.d(e,"TrianglesDrawMode",function(){return us}),/* harmony export (binding) */
n.d(e,"TriangleStripDrawMode",function(){return cs}),/* harmony export (binding) */
n.d(e,"TriangleFanDrawMode",function(){return hs}),/* harmony export (binding) */
n.d(e,"LinearEncoding",function(){return ds}),/* harmony export (binding) */
n.d(e,"sRGBEncoding",function(){return ps}),/* harmony export (binding) */
n.d(e,"GammaEncoding",function(){return fs}),/* harmony export (binding) */
n.d(e,"RGBEEncoding",function(){return ms}),/* harmony export (binding) */
n.d(e,"LogLuvEncoding",function(){return gs}),/* harmony export (binding) */
n.d(e,"RGBM7Encoding",function(){return vs}),/* harmony export (binding) */
n.d(e,"RGBM16Encoding",function(){return ys}),/* harmony export (binding) */
n.d(e,"RGBDEncoding",function(){return bs}),/* harmony export (binding) */
n.d(e,"BasicDepthPacking",function(){return _s}),/* harmony export (binding) */
n.d(e,"RGBADepthPacking",function(){return xs}),/* harmony export (binding) */
n.d(e,"CubeGeometry",function(){return Nt}),/* harmony export (binding) */
n.d(e,"Face4",function(){return Cr}),/* harmony export (binding) */
n.d(e,"LineStrip",function(){return sl}),/* harmony export (binding) */
n.d(e,"LinePieces",function(){return ll}),/* harmony export (binding) */
n.d(e,"MeshFaceMaterial",function(){return Pr}),/* harmony export (binding) */
n.d(e,"MultiMaterial",function(){return Lr}),/* harmony export (binding) */
n.d(e,"PointCloud",function(){return Nr}),/* harmony export (binding) */
n.d(e,"Particle",function(){return Ir}),/* harmony export (binding) */
n.d(e,"ParticleSystem",function(){return Or}),/* harmony export (binding) */
n.d(e,"PointCloudMaterial",function(){return Rr}),/* harmony export (binding) */
n.d(e,"ParticleBasicMaterial",function(){return Dr}),/* harmony export (binding) */
n.d(e,"ParticleSystemMaterial",function(){return Br}),/* harmony export (binding) */
n.d(e,"Vertex",function(){return jr}),/* harmony export (binding) */
n.d(e,"DynamicBufferAttribute",function(){return Ur}),/* harmony export (binding) */
n.d(e,"Int8Attribute",function(){return kr}),/* harmony export (binding) */
n.d(e,"Uint8Attribute",function(){return Vr}),/* harmony export (binding) */
n.d(e,"Uint8ClampedAttribute",function(){return Gr}),/* harmony export (binding) */
n.d(e,"Int16Attribute",function(){return Fr}),/* harmony export (binding) */
n.d(e,"Uint16Attribute",function(){return zr}),/* harmony export (binding) */
n.d(e,"Int32Attribute",function(){return Hr}),/* harmony export (binding) */
n.d(e,"Uint32Attribute",function(){return Xr}),/* harmony export (binding) */
n.d(e,"Float32Attribute",function(){return Wr}),/* harmony export (binding) */
n.d(e,"Float64Attribute",function(){return Yr}),/* harmony export (binding) */
n.d(e,"ClosedSplineCurve3",function(){return Kr}),/* harmony export (binding) */
n.d(e,"SplineCurve3",function(){return Zr}),/* harmony export (binding) */
n.d(e,"Spline",function(){return qr}),/* harmony export (binding) */
n.d(e,"BoundingBoxHelper",function(){return Qr}),/* harmony export (binding) */
n.d(e,"EdgesHelper",function(){return Jr}),/* harmony export (binding) */
n.d(e,"WireframeHelper",function(){return $r}),/* harmony export (binding) */
n.d(e,"XHRLoader",function(){return to}),/* harmony export (binding) */
n.d(e,"BinaryTextureLoader",function(){return eo}),/* harmony export (binding) */
n.d(e,"GeometryUtils",function(){return ul}),/* harmony export (binding) */
n.d(e,"ImageUtils",function(){return cl}),/* harmony export (binding) */
n.d(e,"Projector",function(){return no}),/* harmony export (binding) */
n.d(e,"CanvasRenderer",function(){return io}),
// Polyfills
void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52)),void 0===Number.isInteger&&(
// Missing in IE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}),
//
void 0===Math.sign&&(
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
Math.sign=function(t){return t<0?-1:t>0?1:+t}),void 0===Function.prototype.name&&
// Missing in IE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}}),void 0===Object.assign&&
// Missing in IE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function(){Object.assign=function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(void 0!==i&&null!==i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}}(),Object.assign(i.prototype,{addEventListener:function(t,e){void 0===this._listeners&&(this._listeners={});var n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e)},hasEventListener:function(t,e){if(void 0===this._listeners)return!1;var n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(e)},removeEventListener:function(t,e){if(void 0!==this._listeners){var n=this._listeners,i=n[t];if(void 0!==i){var r=i.indexOf(e);-1!==r&&i.splice(r,1)}}},dispatchEvent:function(t){if(void 0!==this._listeners){var e=this._listeners,n=e[t.type];if(void 0!==n){t.target=this;var i=[],r=0,o=n.length;for(r=0;r<o;r++)i[r]=n[r];for(r=0;r<o;r++)i[r].call(this,t)}}}});var ro="85",oo={LEFT:0,MIDDLE:1,RIGHT:2},ao=0,so=1,lo=2,uo=3,co=0,ho=1,po=0,fo=1,mo=2,go=0,vo=1,yo=2,bo=1,_o=2,xo=0,Ao=1,wo=2,So=0,Mo=1,Eo=2,To=3,Co=4,Po=5,Lo=100,No=101,Io=102,Oo=103,Ro=104,Do=200,Bo=201,jo=202,Uo=203,ko=204,Vo=205,Go=206,Fo=207,zo=208,Ho=209,Xo=210,Wo=0,Yo=1,Ko=2,Zo=3,qo=4,Qo=5,Jo=6,$o=7,ta=0,ea=1,na=2,ia=0,ra=1,oa=2,aa=3,sa=4,la=300,ua=301,ca=302,ha=303,da=304,pa=305,fa=306,ma=307,ga=1e3,va=1001,ya=1002,ba=1003,_a=1004,xa=1005,Aa=1006,wa=1007,Sa=1008,Ma=1009,Ea=1010,Ta=1011,Ca=1012,Pa=1013,La=1014,Na=1015,Ia=1016,Oa=1017,Ra=1018,Da=1019,Ba=1020,ja=1021,Ua=1022,ka=1023,Va=1024,Ga=1025,Fa=ka,za=1026,Ha=1027,Xa=2001,Wa=2002,Ya=2003,Ka=2004,Za=2100,qa=2101,Qa=2102,Ja=2103,$a=2151,ts=2200,es=2201,ns=2202,is=2300,rs=2301,os=2302,as=2400,ss=2401,ls=2402,us=0,cs=1,hs=2,ds=3e3,ps=3001,fs=3007,ms=3002,gs=3003,vs=3004,ys=3005,bs=3006,_s=3200,xs=3201,As={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){
// http://www.broofa.com/Tools/Math.uuid.htm
var t,e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),n=new Array(36),i=0;return function(){for(var r=0;r<36;r++)8===r||13===r||18===r||23===r?n[r]="-":14===r?n[r]="4":(i<=2&&(i=33554432+16777216*Math.random()|0),t=15&i,i>>=4,n[r]=e[19===r?3&t|8:t]);return n.join("")}}(),clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},
// compute euclidian modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
euclideanModulo:function(t,e){return(t%e+e)%e},
// Linear mapping from range <a1, a2> to range <b1, b2>
mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},
// https://en.wikipedia.org/wiki/Linear_interpolation
lerp:function(t,e,n){return(1-n)*t+n*e},
// http://en.wikipedia.org/wiki/Smoothstep
smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},
// Random integer from <low, high> interval
randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},
// Random float from <low, high> interval
randFloat:function(t,e){return t+Math.random()*(e-t)},
// Random float from <-range/2, range/2> interval
randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*As.DEG2RAD},radToDeg:function(t){return t*As.RAD2DEG},isPowerOfTwo:function(t){return 0==(t&t-1)&&0!==t},nearestPowerOfTwo:function(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))},nextPowerOfTwo:function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}};Object.defineProperties(r.prototype,{width:{get:function(){return this.x},set:function(t){this.x=t}},height:{get:function(){return this.y},set:function(t){this.y=t}}}),Object.assign(r.prototype,{isVector2:!0,set:function(t,e){return this.x=t,this.y=e,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,e){return void 0!==e?this.addVectors(t,e):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this},sub:function(t,e){return void 0!==e?this.subVectors(t,e):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,e){
// This function assumes min < max, if this assumption isn't true it will not operate correctly
return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this},clampScalar:function(){var t=new r,e=new r;return function(n,i){return t.set(n,n),e.set(i,i),this.clamp(t,e)}}(),clampLength:function(t,e){var n=this.length();return this.multiplyScalar(Math.max(t,Math.min(e,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){
// computes the angle in radians with respect to the positive x-axis
var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y;return e*e+n*n},distanceToManhattan:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.multiplyScalar(t/this.length())},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t},fromBufferAttribute:function(t,e,n){return this.x=t.getX(e),this.y=t.getY(e),this},rotateAround:function(t,e){var n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}});/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */
var ws=0;o.DEFAULT_IMAGE=void 0,o.DEFAULT_MAPPING=la,Object.defineProperty(o.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(o.prototype,i.prototype,{constructor:o,isTexture:!0,clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){if(void 0!==t.textures[this.uuid])return t.textures[this.uuid];var e={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){
// TODO: Move to THREE.Image
var n=this.image;void 0===n.uuid&&(n.uuid=As.generateUUID()),void 0===t.images[n.uuid]&&(t.images[n.uuid]={uuid:n.uuid,url:function(t){var e;return void 0!==t.toDataURL?e=t:(e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0,t.width,t.height)),e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}(n)}),e.image=n.uuid}return t.textures[this.uuid]=e,e},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping===la){if(t.multiply(this.repeat),t.add(this.offset),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case ya:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case ya:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}this.flipY&&(t.y=1-t.y)}}}),Object.assign(a.prototype,{isVector4:!0,set:function(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setW:function(t){return this.w=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this},add:function(t,e){return void 0!==e?this.addVectors(t,e):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this},sub:function(t,e){return void 0!==e?this.subVectors(t,e):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},applyMatrix4:function(t){var e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this},divideScalar:function(t){return this.multiplyScalar(1/t)},setAxisAngleFromQuaternion:function(t){
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
// q is assumed to be normalized
this.w=2*Math.acos(t.w);var e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this},setAxisAngleFromRotationMatrix:function(t){
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
var e,n,i,r,// margin to distinguish between 0 and 180 degrees
o=t.elements,a=o[0],s=o[4],l=o[8],u=o[1],c=o[5],h=o[9],d=o[2],p=o[6],f=o[10];if(Math.abs(s-u)<.01&&Math.abs(l-d)<.01&&Math.abs(h-p)<.01){
// singularity found
// first check for identity matrix which must have +1 for all terms
// in leading diagonal and zero in other terms
if(Math.abs(s+u)<.1&&Math.abs(l+d)<.1&&Math.abs(h+p)<.1&&Math.abs(a+c+f-3)<.1)
// this singularity is identity matrix so angle = 0
return this.set(1,0,0,0),this;
// otherwise this singularity is angle = 180
e=Math.PI;var m=(a+1)/2,g=(c+1)/2,v=(f+1)/2,y=(s+u)/4,b=(l+d)/4,_=(h+p)/4;
// m11 is the largest diagonal term
// m22 is the largest diagonal term
// m33 is the largest diagonal term so base result on this
return m>g&&m>v?m<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(m),i=y/n,r=b/n):g>v?g<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(g),n=y/i,r=_/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=b/r,i=_/r),this.set(n,i,r,e),this}
// as we have reached here there are no singularities so we can handle normally
var x=Math.sqrt((p-h)*(p-h)+(l-d)*(l-d)+(u-s)*(u-s));// used to normalize
// prevent divide by zero, should not happen if matrix is orthogonal and should be
// caught by singularity test above, but I've left it in just in case
return Math.abs(x)<.001&&(x=1),this.x=(p-h)/x,this.y=(l-d)/x,this.z=(u-s)/x,this.w=Math.acos((a+c+f-1)/2),this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},clamp:function(t,e){
// This function assumes min < max, if this assumption isn't true it will not operate correctly
return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this},clampScalar:function(){var t=new a,e=new a;return function(n,i){return t.set(n,n,n,n),e.set(i,i,i,i),this.clamp(t,e)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(t){return this.multiplyScalar(t/this.length())},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t},fromBufferAttribute:function(t,e,n){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}}),Object.assign(s.prototype,i.prototype,{isWebGLRenderTarget:!0,setSize:function(t,e){this.width===t&&this.height===e||(this.width=t,this.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),l.prototype=Object.create(s.prototype),l.prototype.constructor=l,l.prototype.isWebGLRenderTargetCube=!0,Object.assign(u,{slerp:function(t,e,n,i){return n.copy(t).slerp(e,i)},slerpFlat:function(t,e,n,i,r,o,a){
// fuzz-free, array-based Quaternion SLERP operation
var s=n[i+0],l=n[i+1],u=n[i+2],c=n[i+3],h=r[o+0],d=r[o+1],p=r[o+2],f=r[o+3];if(c!==f||s!==h||l!==d||u!==p){var m=1-a,g=s*h+l*d+u*p+c*f,v=g>=0?1:-1,y=1-g*g;
// Skip the Slerp for tiny steps to avoid numeric problems:
if(y>Number.EPSILON){var b=Math.sqrt(y),_=Math.atan2(b,g*v);m=Math.sin(m*_)/b,a=Math.sin(a*_)/b}var x=a*v;
// Normalize in case we just did a lerp:
if(s=s*m+h*x,l=l*m+d*x,u=u*m+p*x,c=c*m+f*x,m===1-a){var A=1/Math.sqrt(s*s+l*l+u*u+c*c);s*=A,l*=A,u*=A,c*=A}}t[e]=s,t[e+1]=l,t[e+2]=u,t[e+3]=c}}),Object.defineProperties(u.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback()}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback()}}}),Object.assign(u.prototype,{set:function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this.onChangeCallback(),this},setFromEuler:function(t,e){if(!1===(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var n=t._x,i=t._y,r=t._z,o=t.order,a=Math.cos,s=Math.sin,l=a(n/2),u=a(i/2),c=a(r/2),h=s(n/2),d=s(i/2),p=s(r/2);return"XYZ"===o?(this._x=h*u*c+l*d*p,this._y=l*d*c-h*u*p,this._z=l*u*p+h*d*c,this._w=l*u*c-h*d*p):"YXZ"===o?(this._x=h*u*c+l*d*p,this._y=l*d*c-h*u*p,this._z=l*u*p-h*d*c,this._w=l*u*c+h*d*p):"ZXY"===o?(this._x=h*u*c-l*d*p,this._y=l*d*c+h*u*p,this._z=l*u*p+h*d*c,this._w=l*u*c-h*d*p):"ZYX"===o?(this._x=h*u*c-l*d*p,this._y=l*d*c+h*u*p,this._z=l*u*p-h*d*c,this._w=l*u*c+h*d*p):"YZX"===o?(this._x=h*u*c+l*d*p,this._y=l*d*c+h*u*p,this._z=l*u*p-h*d*c,this._w=l*u*c-h*d*p):"XZY"===o&&(this._x=h*u*c-l*d*p,this._y=l*d*c-h*u*p,this._z=l*u*p+h*d*c,this._w=l*u*c+h*d*p),!1!==e&&this.onChangeCallback(),this},setFromAxisAngle:function(t,e){
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
// assumes axis is normalized
var n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this.onChangeCallback(),this},setFromRotationMatrix:function(t){
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
var e,n=t.elements,i=n[0],r=n[4],o=n[8],a=n[1],s=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+s+h;return d>0?(e=.5/Math.sqrt(d+1),this._w=.25/e,this._x=(c-l)*e,this._y=(o-u)*e,this._z=(a-r)*e):i>s&&i>h?(e=2*Math.sqrt(1+i-s-h),this._w=(c-l)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(o+u)/e):s>h?(e=2*Math.sqrt(1+s-i-h),this._w=(o-u)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(l+c)/e):(e=2*Math.sqrt(1+h-i-s),this._w=(a-r)/e,this._x=(o+u)/e,this._y=(l+c)/e,this._z=.25*e),this.onChangeCallback(),this},setFromUnitVectors:function(){
// assumes direction vectors vFrom and vTo are normalized
var t,e=new c;return function(n,i){return void 0===e&&(e=new c),t=n.dot(i)+1,t<1e-6?(t=0,Math.abs(n.x)>Math.abs(n.z)?e.set(-n.y,n.x,0):e.set(0,-n.z,n.y)):e.crossVectors(n,i),this._x=e.x,this._y=e.y,this._z=e.z,this._w=t,this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this.onChangeCallback(),this},multiply:function(t,e){return void 0!==e?this.multiplyQuaternions(t,e):this.multiplyQuaternions(this,t)},premultiply:function(t){return this.multiplyQuaternions(t,this)},multiplyQuaternions:function(t,e){
// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
var n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,s=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*s,this._y=i*u+o*s+r*a-n*l,this._z=r*u+o*l+n*s-i*a,this._w=o*u-n*a-i*s-r*l,this.onChangeCallback(),this},slerp:function(t,e){if(0===e)return this;if(1===e)return this.copy(t);var n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;var s=Math.sqrt(1-a*a);if(Math.abs(s)<.001)return this._w=.5*(o+this._w),this._x=.5*(n+this._x),this._y=.5*(i+this._y),this._z=.5*(r+this._z),this;var l=Math.atan2(s,a),u=Math.sin((1-e)*l)/s,c=Math.sin(e*l)/s;return this._w=o*u+this._w*c,this._x=n*u+this._x*c,this._y=i*u+this._y*c,this._z=r*u+this._z*c,this.onChangeCallback(),this},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},fromArray:function(t,e){return void 0===e&&(e=0),this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this.onChangeCallback(),this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t},onChange:function(t){return this.onChangeCallback=t,this},onChangeCallback:function(){}}),Object.assign(c.prototype,{isVector3:!0,set:function(t,e,n){return this.x=t,this.y=e,this.z=n,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},add:function(t,e){return void 0!==e?this.addVectors(t,e):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this},sub:function(t,e){return void 0!==e?this.subVectors(t,e):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this},multiply:function(t,e){return void 0!==e?this.multiplyVectors(t,e):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this},multiplyVectors:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this},applyEuler:function(){var t=new u;return function(e){return e&&e.isEuler,this.applyQuaternion(t.setFromEuler(e))}}(),applyAxisAngle:function(){var t=new u;return function(e,n){return this.applyQuaternion(t.setFromAxisAngle(e,n))}}(),applyMatrix3:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this},applyMatrix4:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;this.x=r[0]*e+r[4]*n+r[8]*i+r[12],this.y=r[1]*e+r[5]*n+r[9]*i+r[13],this.z=r[2]*e+r[6]*n+r[10]*i+r[14];var o=r[3]*e+r[7]*n+r[11]*i+r[15];return this.divideScalar(o)},applyQuaternion:function(t){var e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,s=t.w,l=s*e+o*i-a*n,u=s*n+a*e-r*i,c=s*i+r*n-o*e,h=-r*e-o*n-a*i;
// calculate result * inverse quat
return this.x=l*s+h*-r+u*-a-c*-o,this.y=u*s+h*-o+c*-r-l*-a,this.z=c*s+h*-a+l*-o-u*-r,this},project:function(){var t=new h;return function(e){return t.multiplyMatrices(e.projectionMatrix,t.getInverse(e.matrixWorld)),this.applyMatrix4(t)}}(),unproject:function(){var t=new h;return function(e){return t.multiplyMatrices(e.matrixWorld,t.getInverse(e.projectionMatrix)),this.applyMatrix4(t)}}(),transformDirection:function(t){
// input: THREE.Matrix4 affine matrix
// vector interpreted as a direction
var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clamp:function(t,e){
// This function assumes min < max, if this assumption isn't true it will not operate correctly
return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this},clampScalar:function(){var t=new c,e=new c;return function(n,i){return t.set(n,n,n),e.set(i,i,i),this.clamp(t,e)}}(),clampLength:function(t,e){var n=this.length();return this.multiplyScalar(Math.max(t,Math.min(e,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},
// TODO lengthSquared?
lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(t){return this.multiplyScalar(t/this.length())},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},cross:function(t,e){if(void 0!==e)return this.crossVectors(t,e);var n=this.x,i=this.y,r=this.z;return this.x=i*t.z-r*t.y,this.y=r*t.x-n*t.z,this.z=n*t.y-i*t.x,this},crossVectors:function(t,e){var n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,s=e.z;return this.x=i*s-r*a,this.y=r*o-n*s,this.z=n*a-i*o,this},projectOnVector:function(t){var e=t.dot(this)/t.lengthSq();return this.copy(t).multiplyScalar(e)},projectOnPlane:function(){var t=new c;return function(e){return t.copy(this).projectOnVector(e),this.sub(t)}}(),reflect:function(){
// reflect incident vector off plane orthogonal to normal
// normal is assumed to have unit length
var t=new c;return function(e){return this.sub(t.copy(e).multiplyScalar(2*this.dot(e)))}}(),angleTo:function(t){var e=this.dot(t)/Math.sqrt(this.lengthSq()*t.lengthSq());
// clamp, to handle numerical problems
return Math.acos(As.clamp(e,-1,1))},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i},distanceToManhattan:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},setFromSpherical:function(t){var e=Math.sin(t.phi)*t.radius;return this.x=e*Math.sin(t.theta),this.y=Math.cos(t.phi)*t.radius,this.z=e*Math.cos(t.theta),this},setFromCylindrical:function(t){return this.x=t.radius*Math.sin(t.theta),this.y=t.y,this.z=t.radius*Math.cos(t.theta),this},setFromMatrixPosition:function(t){return this.setFromMatrixColumn(t,3)},setFromMatrixScale:function(t){var e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this},setFromMatrixColumn:function(t,e){return this.fromArray(t.elements,4*e)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t},fromBufferAttribute:function(t,e,n){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}}),Object.assign(h.prototype,{isMatrix4:!0,set:function(t,e,n,i,r,o,a,s,l,u,c,h,d,p,f,m){var g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=s,g[2]=l,g[6]=u,g[10]=c,g[14]=h,g[3]=d,g[7]=p,g[11]=f,g[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return(new h).fromArray(this.elements)},copy:function(t){var e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this},copyPosition:function(t){var e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this},extractBasis:function(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this},extractRotation:function(){var t=new c;return function(e){var n=this.elements,i=e.elements,r=1/t.setFromMatrixColumn(e,0).length(),o=1/t.setFromMatrixColumn(e,1).length(),a=1/t.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,this}}(),makeRotationFromEuler:function(t){t&&t.isEuler;var e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),s=Math.cos(i),l=Math.sin(i),u=Math.cos(r),c=Math.sin(r);if("XYZ"===t.order){var h=o*u,d=o*c,p=a*u,f=a*c;e[0]=s*u,e[4]=-s*c,e[8]=l,e[1]=d+p*l,e[5]=h-f*l,e[9]=-a*s,e[2]=f-h*l,e[6]=p+d*l,e[10]=o*s}else if("YXZ"===t.order){var m=s*u,g=s*c,v=l*u,y=l*c;e[0]=m+y*a,e[4]=v*a-g,e[8]=o*l,e[1]=o*c,e[5]=o*u,e[9]=-a,e[2]=g*a-v,e[6]=y+m*a,e[10]=o*s}else if("ZXY"===t.order){var m=s*u,g=s*c,v=l*u,y=l*c;e[0]=m-y*a,e[4]=-o*c,e[8]=v+g*a,e[1]=g+v*a,e[5]=o*u,e[9]=y-m*a,e[2]=-o*l,e[6]=a,e[10]=o*s}else if("ZYX"===t.order){var h=o*u,d=o*c,p=a*u,f=a*c;e[0]=s*u,e[4]=p*l-d,e[8]=h*l+f,e[1]=s*c,e[5]=f*l+h,e[9]=d*l-p,e[2]=-l,e[6]=a*s,e[10]=o*s}else if("YZX"===t.order){var b=o*s,_=o*l,x=a*s,A=a*l;e[0]=s*u,e[4]=A-b*c,e[8]=x*c+_,e[1]=c,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=_*c+x,e[10]=b-A*c}else if("XZY"===t.order){var b=o*s,_=o*l,x=a*s,A=a*l;e[0]=s*u,e[4]=-c,e[8]=l*u,e[1]=b*c+A,e[5]=o*u,e[9]=_*c-x,e[2]=x*c-_,e[6]=a*u,e[10]=A*c+b}
// last column
// bottom row
return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},makeRotationFromQuaternion:function(t){var e=this.elements,n=t._x,i=t._y,r=t._z,o=t._w,a=n+n,s=i+i,l=r+r,u=n*a,c=n*s,h=n*l,d=i*s,p=i*l,f=r*l,m=o*a,g=o*s,v=o*l;
// last column
// bottom row
return e[0]=1-(d+f),e[4]=c-v,e[8]=h+g,e[1]=c+v,e[5]=1-(u+f),e[9]=p-m,e[2]=h-g,e[6]=p+m,e[10]=1-(u+d),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},lookAt:function(){var t=new c,e=new c,n=new c;return function(i,r,o){var a=this.elements;
// eye and target are in the same position
// eye and target are in the same vertical
return n.subVectors(i,r),0===n.lengthSq()&&(n.z=1),n.normalize(),t.crossVectors(o,n),0===t.lengthSq()&&(n.z+=1e-4,t.crossVectors(o,n)),t.normalize(),e.crossVectors(n,t),a[0]=t.x,a[4]=e.x,a[8]=n.x,a[1]=t.y,a[5]=e.y,a[9]=n.y,a[2]=t.z,a[6]=e.z,a[10]=n.z,this}}(),multiply:function(t,e){return void 0!==e?this.multiplyMatrices(t,e):this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){var n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],s=n[8],l=n[12],u=n[1],c=n[5],h=n[9],d=n[13],p=n[2],f=n[6],m=n[10],g=n[14],v=n[3],y=n[7],b=n[11],_=n[15],x=i[0],A=i[4],w=i[8],S=i[12],M=i[1],E=i[5],T=i[9],C=i[13],P=i[2],L=i[6],N=i[10],I=i[14],O=i[3],R=i[7],D=i[11],B=i[15];return r[0]=o*x+a*M+s*P+l*O,r[4]=o*A+a*E+s*L+l*R,r[8]=o*w+a*T+s*N+l*D,r[12]=o*S+a*C+s*I+l*B,r[1]=u*x+c*M+h*P+d*O,r[5]=u*A+c*E+h*L+d*R,r[9]=u*w+c*T+h*N+d*D,r[13]=u*S+c*C+h*I+d*B,r[2]=p*x+f*M+m*P+g*O,r[6]=p*A+f*E+m*L+g*R,r[10]=p*w+f*T+m*N+g*D,r[14]=p*S+f*C+m*I+g*B,r[3]=v*x+y*M+b*P+_*O,r[7]=v*A+y*E+b*L+_*R,r[11]=v*w+y*T+b*N+_*D,r[15]=v*S+y*C+b*I+_*B,this},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this},applyToBufferAttribute:function(){var t=new c;return function(e){for(var n=0,i=e.count;n<i;n++)t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.applyMatrix4(this),e.setXYZ(n,t.x,t.y,t.z);return e}}(),determinant:function(){var t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],s=t[9],l=t[13],u=t[2],c=t[6],h=t[10],d=t[14];
//TODO: make this more efficient
//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
return t[3]*(+r*s*c-i*l*c-r*a*h+n*l*h+i*a*d-n*s*d)+t[7]*(+e*s*d-e*l*h+r*o*h-i*o*d+i*l*u-r*s*u)+t[11]*(+e*l*c-e*a*d-r*o*c+n*o*d+r*a*u-n*l*u)+t[15]*(-i*a*u-e*s*c+e*a*h+i*o*c-n*o*h+n*s*u)},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(t){var e=this.elements;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this},getInverse:function(t,e){
// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
var n=this.elements,i=t.elements,r=i[0],o=i[1],a=i[2],s=i[3],l=i[4],u=i[5],c=i[6],h=i[7],d=i[8],p=i[9],f=i[10],m=i[11],g=i[12],v=i[13],y=i[14],b=i[15],_=p*y*h-v*f*h+v*c*m-u*y*m-p*c*b+u*f*b,x=g*f*h-d*y*h-g*c*m+l*y*m+d*c*b-l*f*b,A=d*v*h-g*p*h+g*u*m-l*v*m-d*u*b+l*p*b,w=g*p*c-d*v*c-g*u*f+l*v*f+d*u*y-l*p*y,S=r*_+o*x+a*A+s*w;if(0===S){var M="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";if(!0===e)throw new Error(M);return this.identity()}var E=1/S;return n[0]=_*E,n[1]=(v*f*s-p*y*s-v*a*m+o*y*m+p*a*b-o*f*b)*E,n[2]=(u*y*s-v*c*s+v*a*h-o*y*h-u*a*b+o*c*b)*E,n[3]=(p*c*s-u*f*s-p*a*h+o*f*h+u*a*m-o*c*m)*E,n[4]=x*E,n[5]=(d*y*s-g*f*s+g*a*m-r*y*m-d*a*b+r*f*b)*E,n[6]=(g*c*s-l*y*s-g*a*h+r*y*h+l*a*b-r*c*b)*E,n[7]=(l*f*s-d*c*s+d*a*h-r*f*h-l*a*m+r*c*m)*E,n[8]=A*E,n[9]=(g*p*s-d*v*s-g*o*m+r*v*m+d*o*b-r*p*b)*E,n[10]=(l*v*s-g*u*s+g*o*h-r*v*h-l*o*b+r*u*b)*E,n[11]=(d*u*s-l*p*s-d*o*h+r*p*h+l*o*m-r*u*m)*E,n[12]=w*E,n[13]=(d*v*a-g*p*a+g*o*f-r*v*f-d*o*y+r*p*y)*E,n[14]=(g*u*a-l*v*a-g*o*c+r*v*c+l*o*y-r*u*y)*E,n[15]=(l*p*a-d*u*a+d*o*c-r*p*c-l*o*f+r*u*f)*E,this},scale:function(t){var e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this},getMaxScaleOnAxis:function(){var t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))},makeTranslation:function(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this},makeRotationX:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this},makeRotationY:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this},makeRotationZ:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(t,e){
// Based on http://www.gamedev.net/reference/articles/article1199.asp
var n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,s=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*s,l*s+i*a,0,l*a+i*s,u*a+n,u*s-i*o,0,l*s-i*a,u*s+i*o,r*s*s+n,0,0,0,0,1),this},makeScale:function(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(t,e,n){return this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this},compose:function(t,e,n){return this.makeRotationFromQuaternion(e),this.scale(n),this.setPosition(t),this},decompose:function(){var t=new c,e=new h;return function(n,i,r){var o=this.elements,a=t.set(o[0],o[1],o[2]).length(),s=t.set(o[4],o[5],o[6]).length(),l=t.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),n.x=o[12],n.y=o[13],n.z=o[14],
// scale the rotation part
e.copy(this);var u=1/a,c=1/s,h=1/l;return e.elements[0]*=u,e.elements[1]*=u,e.elements[2]*=u,e.elements[4]*=c,e.elements[5]*=c,e.elements[6]*=c,e.elements[8]*=h,e.elements[9]*=h,e.elements[10]*=h,i.setFromRotationMatrix(e),r.x=a,r.y=s,r.z=l,this}}(),makePerspective:function(t,e,n,i,r,o){var a=this.elements,s=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),c=(n+i)/(n-i),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=s,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=c,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this},makeOrthographic:function(t,e,n,i,r,o){var a=this.elements,s=1/(e-t),l=1/(n-i),u=1/(o-r),c=(e+t)*s,h=(n+i)*l,d=(o+r)*u;return a[0]=2*s,a[4]=0,a[8]=0,a[12]=-c,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this},equals:function(t){for(var e=this.elements,n=t.elements,i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0},fromArray:function(t,e){void 0===e&&(e=0);for(var n=0;n<16;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}),d.prototype=Object.create(o.prototype),d.prototype.constructor=d,d.prototype.isDataTexture=!0,p.prototype=Object.create(o.prototype),p.prototype.constructor=p,p.prototype.isCubeTexture=!0,Object.defineProperty(p.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});/**
 * @author tschw
 *
 * Uniforms of a program.
 * Those form a tree structure with a special top-level container for the root,
 * which you get by calling 'new WebGLUniforms( gl, program, renderer )'.
 *
 *
 * Properties of inner nodes including the top-level container:
 *
 * .seq - array of nested uniforms
 * .map - nested uniforms by name
 *
 *
 * Methods of all nodes except the top-level container:
 *
 * .setValue( gl, value, [renderer] )
 *
 * 		uploads a uniform value(s)
 *  	the 'renderer' parameter is needed for sampler uniforms
 *
 *
 * Static methods of the top-level container (renderer factorizations):
 *
 * .upload( gl, seq, values, renderer )
 *
 * 		sets uniforms in 'seq' to 'values[id].value'
 *
 * .seqWithValue( seq, values ) : filteredSeq
 *
 * 		filters 'seq' entries with corresponding entry in values
 *
 *
 * Methods of the top-level container (renderer factorizations):
 *
 * .setValue( gl, name, value )
 *
 * 		sets uniform with  name 'name' to 'value'
 *
 * .set( gl, obj, prop )
 *
 * 		sets uniform from object and property with same name than uniform
 *
 * .setOptional( gl, obj, prop )
 *
 * 		like .set for an optional property of the object
 *
 */
var Ss=new o,Ms=new p,Es=[],Ts=[],Cs=new Float32Array(16),Ps=new Float32Array(9);H.prototype.setValue=function(t,e){for(var n=this.seq,i=0,r=n.length;i!==r;++i){var o=n[i];o.setValue(t,e[o.id])}};
// --- Top-level ---
// Parser - builds up the property tree from the path strings
var Ls=/([\w\d_]+)(\])?(\[|\.)?/g;Y.prototype.setValue=function(t,e,n){var i=this.map[e];void 0!==i&&i.setValue(t,n,this.renderer)},Y.prototype.setOptional=function(t,e,n){var i=e[n];void 0!==i&&this.setValue(t,n,i)},
// Static interface
Y.upload=function(t,e,n,i){for(var r=0,o=e.length;r!==o;++r){var a=e[r],s=n[a.id];!1!==s.needsUpdate&&
// note: always updating when .needsUpdate is undefined
a.setValue(t,s.value,i)}},Y.seqWithValue=function(t,e){for(var n=[],i=0,r=t.length;i!==r;++i){var o=t[i];o.id in e&&n.push(o)}return n};/**
 * @author mrdoob / http://mrdoob.com/
 */
var Ns={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object.assign(K.prototype,{isColor:!0,r:1,g:1,b:1,set:function(t){return t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t),this},setScalar:function(t){return this.r=t,this.g=t,this.b=t,this},setHex:function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,this},setRGB:function(t,e,n){return this.r=t,this.g=e,this.b=n,this},setHSL:function(){function t(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}return function(e,n,i){if(
// h,s,l ranges are in 0.0 - 1.0
e=As.euclideanModulo(e,1),n=As.clamp(n,0,1),i=As.clamp(i,0,1),0===n)this.r=this.g=this.b=i;else{var r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=t(o,r,e+1/3),this.g=t(o,r,e),this.b=t(o,r,e-1/3)}return this}}(),setStyle:function(t){function e(t){void 0!==t&&parseFloat(t)}var n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){
// rgb / hsl
var i,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))
// rgb(255,0,0) rgba(255,0,0,0.5)
return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))
// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){
// hsl(120,50%,50%) hsla(120,50%,50%,0.5)
var a=parseFloat(i[1])/360,s=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return e(i[5]),this.setHSL(a,s,l)}}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(t)){
// hex color
var u=n[1],c=u.length;if(3===c)
// #ff0
return this.r=parseInt(u.charAt(0)+u.charAt(0),16)/255,this.g=parseInt(u.charAt(1)+u.charAt(1),16)/255,this.b=parseInt(u.charAt(2)+u.charAt(2),16)/255,this;if(6===c)
// #ff0000
return this.r=parseInt(u.charAt(0)+u.charAt(1),16)/255,this.g=parseInt(u.charAt(2)+u.charAt(3),16)/255,this.b=parseInt(u.charAt(4)+u.charAt(5),16)/255,this}if(t&&t.length>0){
// color keywords
var u=Ns[t];void 0!==u&&
// red
this.setHex(u)}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},copyGammaToLinear:function(t,e){return void 0===e&&(e=2),this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this},copyLinearToGamma:function(t,e){void 0===e&&(e=2);var n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this},convertGammaToLinear:function(){var t=this.r,e=this.g,n=this.b;return this.r=t*t,this.g=e*e,this.b=n*n,this},convertLinearToGamma:function(){return this.r=Math.sqrt(this.r),this.g=Math.sqrt(this.g),this.b=Math.sqrt(this.b),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(t){
// h,s,l ranges are in 0.0 - 1.0
var e,n,i=t||{h:0,s:0,l:0},r=this.r,o=this.g,a=this.b,s=Math.max(r,o,a),l=Math.min(r,o,a),u=(l+s)/2;if(l===s)e=0,n=0;else{var c=s-l;switch(n=u<=.5?c/(s+l):c/(2-s-l),s){case r:e=(o-a)/c+(o<a?6:0);break;case o:e=(a-r)/c+2;break;case a:e=(r-o)/c+4}e/=6}return i.h=e,i.s=n,i.l=u,i},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(t,e,n){var i=this.getHSL();return i.h+=t,i.s+=e,i.l+=n,this.setHSL(i.h,i.s,i.l),this},add:function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},addColors:function(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this},addScalar:function(t){return this.r+=t,this.g+=t,this.b+=t,this},sub:function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},multiply:function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},multiplyScalar:function(t){return this.r*=t,this.g*=t,this.b*=t,this},lerp:function(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this},equals:function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},fromArray:function(t,e){return void 0===e&&(e=0),this.r=t[e],this.g=t[e+1],this.b=t[e+2],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t},toJSON:function(){return this.getHex()}});/**
 * Uniforms library for shared webgl shaders
 */
var Is={common:{diffuse:{value:new K(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new a(0,0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new r(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},
// TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new K(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new a(0,0,1,1)}}},Os={merge:function(t){for(var e={},n=0;n<t.length;n++){var i=this.clone(t[n]);for(var r in i)e[r]=i[r]}return e},clone:function(t){var e={};for(var n in t){e[n]={};for(var i in t[n]){var r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}},Rs={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",defaultnormal_vertex:"#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",fog_vertex:"\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",logdepthbuf_fragment:"#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",normal_flip:"#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",dithering_fragment:"#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",dithering_pars_fragment:"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",distanceRGBA_frag:"uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",distanceRGBA_vert:"varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",equirect_frag:"uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",shadow_frag:"uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",shadow_vert:"#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"},Ds={basic:{uniforms:Os.merge([Is.common,Is.aomap,Is.lightmap,Is.fog]),vertexShader:Rs.meshbasic_vert,fragmentShader:Rs.meshbasic_frag},lambert:{uniforms:Os.merge([Is.common,Is.aomap,Is.lightmap,Is.emissivemap,Is.fog,Is.lights,{emissive:{value:new K(0)}}]),vertexShader:Rs.meshlambert_vert,fragmentShader:Rs.meshlambert_frag},phong:{uniforms:Os.merge([Is.common,Is.aomap,Is.lightmap,Is.emissivemap,Is.bumpmap,Is.normalmap,Is.displacementmap,Is.gradientmap,Is.fog,Is.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30}}]),vertexShader:Rs.meshphong_vert,fragmentShader:Rs.meshphong_frag},standard:{uniforms:Os.merge([Is.common,Is.aomap,Is.lightmap,Is.emissivemap,Is.bumpmap,Is.normalmap,Is.displacementmap,Is.roughnessmap,Is.metalnessmap,Is.fog,Is.lights,{emissive:{value:new K(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:Rs.meshphysical_vert,fragmentShader:Rs.meshphysical_frag},points:{uniforms:Os.merge([Is.points,Is.fog]),vertexShader:Rs.points_vert,fragmentShader:Rs.points_frag},dashed:{uniforms:Os.merge([Is.common,Is.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rs.linedashed_vert,fragmentShader:Rs.linedashed_frag},depth:{uniforms:Os.merge([Is.common,Is.displacementmap]),vertexShader:Rs.depth_vert,fragmentShader:Rs.depth_frag},normal:{uniforms:Os.merge([Is.common,Is.bumpmap,Is.normalmap,Is.displacementmap,{opacity:{value:1}}]),vertexShader:Rs.normal_vert,fragmentShader:Rs.normal_frag},/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */
cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rs.cube_vert,fragmentShader:Rs.cube_frag},/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */
equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:Rs.equirect_vert,fragmentShader:Rs.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new c}},vertexShader:Rs.distanceRGBA_vert,fragmentShader:Rs.distanceRGBA_frag}};Ds.physical={uniforms:Os.merge([Ds.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:Rs.meshphysical_vert,fragmentShader:Rs.meshphysical_frag},Object.assign(Z.prototype,{set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromPoints:function(t){this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(){var t=new r;return function(e,n){var i=t.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){
// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(t){var e=t||new r;return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){var e=t||new r;return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},getParameter:function(t,e){return(e||new r).set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(t){
// using 4 splitting planes to rule out intersections
return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},clampPoint:function(t,e){return(e||new r).copy(t).clamp(this.min,this.max)},distanceToPoint:function(){var t=new r;return function(e){return t.copy(e).clamp(this.min,this.max).sub(e).length()}}(),intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}});/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
var Bs=0;Object.assign(J.prototype,i.prototype,{isMaterial:!0,setValues:function(t){if(void 0!==t)for(var e in t){var n=t[e];if(void 0!==n){var i=this[e];void 0!==i&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):
// ensure overdraw is backwards-compatible with legacy boolean type
this[e]="overdraw"===e?Number(n):n)}}},toJSON:function(t){
// TODO: Copied from Object3D.toJSON
function e(t){var e=[];for(var n in t){var i=t[n];delete i.metadata,e.push(i)}return e}var n=void 0===t;n&&(t={textures:{},images:{}});var i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};if(
// standard Material serialization
i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearCoat&&(i.clearCoat=this.clearCoat),void 0!==this.clearCoatRoughness&&(i.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,i.reflectivity=this.reflectivity),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.size&&(i.size=this.size),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(i.blending=this.blending),this.shading!==_o&&(i.shading=this.shading),this.side!==go&&(i.side=this.side),this.vertexColors!==xo&&(i.vertexColors=this.vertexColors),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),i.skinning=this.skinning,i.morphTargets=this.morphTargets,i.dithering=this.dithering,n){var r=e(t.textures),o=e(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i},clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.lights=t.lights,this.blending=t.blending,this.side=t.side,this.shading=t.shading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.overdraw=t.overdraw,this.visible=t.visible,this.clipShadows=t.clipShadows,this.clipIntersection=t.clipIntersection;var e=t.clippingPlanes,n=null;if(null!==e){var i=e.length;n=new Array(i);for(var r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),$.prototype=Object.create(J.prototype),$.prototype.constructor=$,$.prototype.isShaderMaterial=!0,$.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os.clone(t.uniforms),this.defines=t.defines,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=t.extensions,this},$.prototype.toJSON=function(t){var e=J.prototype.toJSON.call(this,t);return e.uniforms=this.uniforms,e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e},tt.prototype=Object.create(J.prototype),tt.prototype.constructor=tt,tt.prototype.isMeshDepthMaterial=!0,tt.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this},Object.assign(et.prototype,{isBox3:!0,set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromArray:function(t){for(var e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0,s=0,l=t.length;s<l;s+=3){var u=t[s],c=t[s+1],h=t[s+2];u<e&&(e=u),c<n&&(n=c),h<i&&(i=h),u>r&&(r=u),c>o&&(o=c),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,o,a),this},setFromBufferAttribute:function(t){for(var e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0,s=0,l=t.count;s<l;s++){var u=t.getX(s),c=t.getY(s),h=t.getZ(s);u<e&&(e=u),c<n&&(n=c),h<i&&(i=h),u>r&&(r=u),c>o&&(o=c),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,o,a),this},setFromPoints:function(t){this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(){var t=new c;return function(e,n){var i=t.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}}(),setFromObject:function(t){return this.makeEmpty(),this.expandByObject(t)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){
// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(t){var e=t||new c;return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){var e=t||new c;return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},expandByObject:function(){
// Computes the world-axis-aligned bounding box of an object (including its children),
// accounting for both the object's, and children's, world transforms
var t=new c;return function(e){var n=this;return e.updateMatrixWorld(!0),e.traverse(function(e){var i,r,o=e.geometry;if(void 0!==o)if(o.isGeometry){var a=o.vertices;for(i=0,r=a.length;i<r;i++)t.copy(a[i]),t.applyMatrix4(e.matrixWorld),n.expandByPoint(t)}else if(o.isBufferGeometry){var s=o.attributes.position;if(void 0!==s)for(i=0,r=s.count;i<r;i++)t.fromBufferAttribute(s,i).applyMatrix4(e.matrixWorld),n.expandByPoint(t)}}),this}}(),containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},getParameter:function(t,e){return(e||new c).set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(t){
// using 6 splitting planes to rule out intersections.
return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},intersectsSphere:function(){var t=new c;return function(e){
// If that point is inside the sphere, the AABB and sphere intersect.
// Find the point on the AABB closest to the sphere center.
return this.clampPoint(e.center,t),t.distanceToSquared(e.center)<=e.radius*e.radius}}(),intersectsPlane:function(t){
// We compute the minimum and maximum dot product values. If those values
// are on the same side (back or front) of the plane, then there is no intersection.
var e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=t.constant&&n>=t.constant},clampPoint:function(t,e){return(e||new c).copy(t).clamp(this.min,this.max)},distanceToPoint:function(){var t=new c;return function(e){return t.copy(e).clamp(this.min,this.max).sub(e).length()}}(),getBoundingSphere:function(){var t=new c;return function(e){var n=e||new nt;return this.getCenter(n.center),n.radius=.5*this.getSize(t).length(),n}}(),intersect:function(t){
// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},applyMatrix4:function(){var t=[new c,new c,new c,new c,new c,new c,new c,new c];return function(e){
// transform of empty box is an empty box.
// transform of empty box is an empty box.
// NOTE: I am using a binary pattern to specify all 2^3 combinations below
// 000
// 001
// 010
// 011
// 100
// 101
// 110
// 111
return this.isEmpty()?this:(t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(t),this)}}(),translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}),Object.assign(nt.prototype,{set:function(t,e){return this.center.copy(t),this.radius=e,this},setFromPoints:function(){var t=new et;return function(e,n){var i=this.center;void 0!==n?i.copy(n):t.setFromPoints(e).getCenter(i);for(var r=0,o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.center.copy(t.center),this.radius=t.radius,this},empty:function(){return this.radius<=0},containsPoint:function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(t){return t.distanceTo(this.center)-this.radius},intersectsSphere:function(t){var e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e},intersectsBox:function(t){return t.intersectsSphere(this)},intersectsPlane:function(t){
// We use the following equation to compute the signed distance from
// the center of the sphere to the plane.
//
// distance = q * n - d
//
// If this distance is greater than the radius of the sphere,
// then there is no intersection.
return Math.abs(this.center.dot(t.normal)-t.constant)<=this.radius},clampPoint:function(t,e){var n=this.center.distanceToSquared(t),i=e||new c;return i.copy(t),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i},getBoundingBox:function(t){var e=t||new et;return e.set(this.center,this.center),e.expandByScalar(this.radius),e},applyMatrix4:function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},translate:function(t){return this.center.add(t),this},equals:function(t){return t.center.equals(this.center)&&t.radius===this.radius}}),Object.assign(it.prototype,{isMatrix3:!0,set:function(t,e,n,i,r,o,a,s,l){var u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=s,u[6]=n,u[7]=o,u[8]=l,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(t){var e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this},setFromMatrix4:function(t){var e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this},applyToBufferAttribute:function(){var t=new c;return function(e){for(var n=0,i=e.count;n<i;n++)t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.applyMatrix3(this),e.setXYZ(n,t.x,t.y,t.z);return e}}(),multiply:function(t){return this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){var n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],s=n[6],l=n[1],u=n[4],c=n[7],h=n[2],d=n[5],p=n[8],f=i[0],m=i[3],g=i[6],v=i[1],y=i[4],b=i[7],_=i[2],x=i[5],A=i[8];return r[0]=o*f+a*v+s*_,r[3]=o*m+a*y+s*x,r[6]=o*g+a*b+s*A,r[1]=l*f+u*v+c*_,r[4]=l*m+u*y+c*x,r[7]=l*g+u*b+c*A,r[2]=h*f+d*v+p*_,r[5]=h*m+d*y+p*x,r[8]=h*g+d*b+p*A,this},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this},determinant:function(){var t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],s=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*s+i*r*l-i*o*s},getInverse:function(t,e){t&&t.isMatrix4;var n=t.elements,i=this.elements,r=n[0],o=n[1],a=n[2],s=n[3],l=n[4],u=n[5],c=n[6],h=n[7],d=n[8],p=d*l-u*h,f=u*c-d*s,m=h*s-l*c,g=r*p+o*f+a*m;if(0===g){var v="THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";if(!0===e)throw new Error(v);return this.identity()}var y=1/g;return i[0]=p*y,i[1]=(a*h-d*o)*y,i[2]=(u*o-a*l)*y,i[3]=f*y,i[4]=(d*r-a*c)*y,i[5]=(a*s-u*r)*y,i[6]=m*y,i[7]=(o*c-h*r)*y,i[8]=(l*r-o*s)*y,this},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},getNormalMatrix:function(t){return this.setFromMatrix4(t).getInverse(this).transpose()},transposeIntoArray:function(t){var e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this},equals:function(t){for(var e=this.elements,n=t.elements,i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0},fromArray:function(t,e){void 0===e&&(e=0);for(var n=0;n<9;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}}),Object.assign(rt.prototype,{set:function(t,e){return this.normal.copy(t),this.constant=e,this},setComponents:function(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(t,e){// must be this.normal, not normal, as this.normal is normalized
return this.normal.copy(t),this.constant=-e.dot(this.normal),this},setFromCoplanarPoints:function(){var t=new c,e=new c;return function(n,i,r){var o=t.subVectors(r,i).cross(e.subVectors(n,i)).normalize();
// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?
return this.setFromNormalAndCoplanarPoint(o,n),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},normalize:function(){
// Note: will lead to a divide by zero if the plane is invalid.
var t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(t){return this.normal.dot(t)+this.constant},distanceToSphere:function(t){return this.distanceToPoint(t.center)-t.radius},projectPoint:function(t,e){return this.orthoPoint(t,e).sub(t).negate()},orthoPoint:function(t,e){var n=this.distanceToPoint(t);return(e||new c).copy(this.normal).multiplyScalar(n)},intersectLine:function(){var t=new c;return function(e,n){var i=n||new c,r=e.delta(t),o=this.normal.dot(r);if(0!==o){var a=-(e.start.dot(this.normal)+this.constant)/o;if(!(a<0||a>1))return i.copy(r).multiplyScalar(a).add(e.start)}else
// line is coplanar, return origin
if(0===this.distanceToPoint(e.start))return i.copy(e.start)}}(),intersectsLine:function(t){
// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.
var e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0},intersectsBox:function(t){return t.intersectsPlane(this)},intersectsSphere:function(t){return t.intersectsPlane(this)},coplanarPoint:function(t){return(t||new c).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var t=new c,e=new it;return function(n,i){var r=this.coplanarPoint(t).applyMatrix4(n),o=i||e.getNormalMatrix(n),a=this.normal.applyMatrix3(o).normalize();
// recalculate constant (like in setFromNormalAndCoplanarPoint)
return this.constant=-r.dot(a),this}}(),translate:function(t){return this.constant=this.constant-t.dot(this.normal),this},equals:function(t){return t.normal.equals(this.normal)&&t.constant===this.constant}}),Object.assign(ot.prototype,{set:function(t,e,n,i,r,o){var a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){for(var e=this.planes,n=0;n<6;n++)e[n].copy(t.planes[n]);return this},setFromMatrix:function(t){var e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],s=n[4],l=n[5],u=n[6],c=n[7],h=n[8],d=n[9],p=n[10],f=n[11],m=n[12],g=n[13],v=n[14],y=n[15];return e[0].setComponents(a-i,c-s,f-h,y-m).normalize(),e[1].setComponents(a+i,c+s,f+h,y+m).normalize(),e[2].setComponents(a+r,c+l,f+d,y+g).normalize(),e[3].setComponents(a-r,c-l,f-d,y-g).normalize(),e[4].setComponents(a-o,c-u,f-p,y-v).normalize(),e[5].setComponents(a+o,c+u,f+p,y+v).normalize(),this},intersectsObject:function(){var t=new nt;return function(e){var n=e.geometry;return null===n.boundingSphere&&n.computeBoundingSphere(),t.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(t)}}(),intersectsSprite:function(){var t=new nt;return function(e){return t.center.set(0,0,0),t.radius=.7071067811865476,t.applyMatrix4(e.matrixWorld),this.intersectsSphere(t)}}(),intersectsSphere:function(t){for(var e=this.planes,n=t.center,i=-t.radius,r=0;r<6;r++){if(e[r].distanceToPoint(n)<i)return!1}return!0},intersectsBox:function(){var t=new c,e=new c;return function(n){for(var i=this.planes,r=0;r<6;r++){var o=i[r];t.x=o.normal.x>0?n.min.x:n.max.x,e.x=o.normal.x>0?n.max.x:n.min.x,t.y=o.normal.y>0?n.min.y:n.max.y,e.y=o.normal.y>0?n.max.y:n.min.y,t.z=o.normal.z>0?n.min.z:n.max.z,e.z=o.normal.z>0?n.max.z:n.min.z;var a=o.distanceToPoint(t),s=o.distanceToPoint(e);
// if both outside plane, no intersection
if(a<0&&s<0)return!1}return!0}}(),containsPoint:function(t){for(var e=this.planes,n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}}),Object.assign(st.prototype,{set:function(t,e){return this.origin.copy(t),this.direction.copy(e),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},at:function(t,e){return(e||new c).copy(this.direction).multiplyScalar(t).add(this.origin)},lookAt:function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},recast:function(){var t=new c;return function(e){return this.origin.copy(this.at(e,t)),this}}(),closestPointToPoint:function(t,e){var n=e||new c;n.subVectors(t,this.origin);var i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)},distanceToPoint:function(t){return Math.sqrt(this.distanceSqToPoint(t))},distanceSqToPoint:function(){var t=new c;return function(e){var n=t.subVectors(e,this.origin).dot(this.direction);
// point behind the ray
// point behind the ray
return n<0?this.origin.distanceToSquared(e):(t.copy(this.direction).multiplyScalar(n).add(this.origin),t.distanceToSquared(e))}}(),distanceSqToSegment:function(){var t=new c,e=new c,n=new c;return function(i,r,o,a){
// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteDistRaySegment.h
// It returns the min distance between the ray and the segment
// defined by v0 and v1
// It can also set two optional targets :
// - The closest point on the ray
// - The closest point on the segment
t.copy(i).add(r).multiplyScalar(.5),e.copy(r).sub(i).normalize(),n.copy(this.origin).sub(t);var s,l,u,c,h=.5*i.distanceTo(r),d=-this.direction.dot(e),p=n.dot(this.direction),f=-n.dot(e),m=n.lengthSq(),g=Math.abs(1-d*d);if(g>0)if(
// The ray and segment are not parallel.
s=d*f-p,l=d*p-f,c=h*g,s>=0)if(l>=-c)if(l<=c){
// region 0
// Minimum at interior points of ray and segment.
var v=1/g;s*=v,l*=v,u=s*(s+d*l+2*p)+l*(d*s+l+2*f)+m}else
// region 1
l=h,s=Math.max(0,-(d*l+p)),u=-s*s+l*(l+2*f)+m;else
// region 5
l=-h,s=Math.max(0,-(d*l+p)),u=-s*s+l*(l+2*f)+m;else l<=-c?(
// region 4
s=Math.max(0,-(-d*h+p)),l=s>0?-h:Math.min(Math.max(-h,-f),h),u=-s*s+l*(l+2*f)+m):l<=c?(
// region 3
s=0,l=Math.min(Math.max(-h,-f),h),u=l*(l+2*f)+m):(
// region 2
s=Math.max(0,-(d*h+p)),l=s>0?h:Math.min(Math.max(-h,-f),h),u=-s*s+l*(l+2*f)+m);else
// Ray and segment are parallel.
l=d>0?-h:h,s=Math.max(0,-(d*l+p)),u=-s*s+l*(l+2*f)+m;return o&&o.copy(this.direction).multiplyScalar(s).add(this.origin),a&&a.copy(e).multiplyScalar(l).add(t),u}}(),intersectSphere:function(){var t=new c;return function(e,n){t.subVectors(e.center,this.origin);var i=t.dot(this.direction),r=t.dot(t)-i*i,o=e.radius*e.radius;if(r>o)return null;var a=Math.sqrt(o-r),s=i-a,l=i+a;
// test to see if both t0 and t1 are behind the ray - if so, return null
// test to see if both t0 and t1 are behind the ray - if so, return null
// test to see if t0 is behind the ray:
// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
// in order to always return an intersect point that is in front of the ray.
return s<0&&l<0?null:s<0?this.at(l,n):this.at(s,n)}}(),intersectsSphere:function(t){return this.distanceToPoint(t.center)<=t.radius},distanceToPlane:function(t){var e=t.normal.dot(this.direction);if(0===e)
// line is coplanar, return origin
// line is coplanar, return origin
return 0===t.distanceToPoint(this.origin)?0:null;var n=-(this.origin.dot(t.normal)+t.constant)/e;
// Return if the ray never intersects the plane
return n>=0?n:null},intersectPlane:function(t,e){var n=this.distanceToPlane(t);return null===n?null:this.at(n,e)},intersectsPlane:function(t){
// check if the ray lies on the plane first
var e=t.distanceToPoint(this.origin);return 0===e||t.normal.dot(this.direction)*e<0},intersectBox:function(t,e){var n,i,r,o,a,s,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,h=this.origin;
// These lines also handle the case where tmin or tmax is NaN
// (result of 0 * Infinity). x !== x returns true if x is NaN
//return point closest to the ray (positive side)
return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i?null:((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),c>=0?(a=(t.min.z-h.z)*c,s=(t.max.z-h.z)*c):(a=(t.max.z-h.z)*c,s=(t.min.z-h.z)*c),n>s||a>i?null:((a>n||n!==n)&&(n=a),(s<i||i!==i)&&(i=s),i<0?null:this.at(n>=0?n:i,e)))},intersectsBox:function(){var t=new c;return function(e){return null!==this.intersectBox(e,t)}}(),intersectTriangle:function(){
// Compute the offset origin, edges, and normal.
var t=new c,e=new c,n=new c,i=new c;return function(r,o,a,s,l){
// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
e.subVectors(o,r),n.subVectors(a,r),i.crossVectors(e,n);
// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
var u,c=this.direction.dot(i);if(c>0){if(s)return null;u=1}else{if(!(c<0))return null;u=-1,c=-c}t.subVectors(this.origin,r);var h=u*this.direction.dot(n.crossVectors(t,n));
// b1 < 0, no intersection
if(h<0)return null;var d=u*this.direction.dot(e.cross(t));
// b2 < 0, no intersection
if(d<0)return null;
// b1+b2 > 1, no intersection
if(h+d>c)return null;
// Line intersects triangle, check if ray does.
var p=-u*t.dot(i);
// t < 0, no intersection
// t < 0, no intersection
return p<0?null:this.at(p/c,l)}}(),applyMatrix4:function(t){return this.direction.add(this.origin).applyMatrix4(t),this.origin.applyMatrix4(t),this.direction.sub(this.origin),this.direction.normalize(),this},equals:function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}),lt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"],lt.DefaultOrder="XYZ",Object.defineProperties(lt.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback()}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback()}}}),Object.assign(lt.prototype,{isEuler:!0,set:function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._order=i||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this.onChangeCallback(),this},setFromRotationMatrix:function(t,e,n){var i=As.clamp,r=t.elements,o=r[0],a=r[4],s=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];return e=e||this._order,"XYZ"===e?(this._y=Math.asin(i(s,-1,1)),Math.abs(s)<.99999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0)):"YXZ"===e?(this._x=Math.asin(-i(c,-1,1)),Math.abs(c)<.99999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0)):"ZXY"===e?(this._x=Math.asin(i(d,-1,1)),Math.abs(d)<.99999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o))):"ZYX"===e?(this._y=Math.asin(-i(h,-1,1)),Math.abs(h)<.99999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u))):"YZX"===e?(this._z=Math.asin(i(l,-1,1)),Math.abs(l)<.99999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(s,p))):"XZY"===e&&(this._z=Math.asin(-i(a,-1,1)),Math.abs(a)<.99999?(this._x=Math.atan2(d,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-c,p),this._y=0)),this._order=e,!1!==n&&this.onChangeCallback(),this},setFromQuaternion:function(){var t=new h;return function(e,n,i){return t.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t,n,i)}}(),setFromVector3:function(t,e){return this.set(t.x,t.y,t.z,e||this._order)},reorder:function(){
// WARNING: this discards revolution information -bhouston
var t=new u;return function(e){return t.setFromEuler(this),this.setFromQuaternion(t,e)}}(),equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},fromArray:function(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this.onChangeCallback(),this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t},toVector3:function(t){return t?t.set(this._x,this._y,this._z):new c(this._x,this._y,this._z)},onChange:function(t){return this.onChangeCallback=t,this},onChangeCallback:function(){}}),Object.assign(ut.prototype,{set:function(t){this.mask=1<<t|0},enable:function(t){this.mask|=1<<t|0},toggle:function(t){this.mask^=1<<t|0},disable:function(t){this.mask&=~(1<<t|0)},test:function(t){return 0!=(this.mask&t.mask)}});/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author elephantatwork / www.elephantatwork.ch
 */
var js=0;ct.DefaultUp=new c(0,1,0),ct.DefaultMatrixAutoUpdate=!0,Object.assign(ct.prototype,i.prototype,{isObject3D:!0,applyMatrix:function(t){this.matrix.multiplyMatrices(t,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(t,e){
// assumes axis is normalized
this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){
// assumes q is normalized
this.quaternion.copy(t)},rotateOnAxis:function(){
// rotate object on axis in object space
// axis is assumed to be normalized
var t=new u;return function(e,n){return t.setFromAxisAngle(e,n),this.quaternion.multiply(t),this}}(),rotateX:function(){var t=new c(1,0,0);return function(e){return this.rotateOnAxis(t,e)}}(),rotateY:function(){var t=new c(0,1,0);return function(e){return this.rotateOnAxis(t,e)}}(),rotateZ:function(){var t=new c(0,0,1);return function(e){return this.rotateOnAxis(t,e)}}(),translateOnAxis:function(){
// translate object by distance along axis in object space
// axis is assumed to be normalized
var t=new c;return function(e,n){return t.copy(e).applyQuaternion(this.quaternion),this.position.add(t.multiplyScalar(n)),this}}(),translateX:function(){var t=new c(1,0,0);return function(e){return this.translateOnAxis(t,e)}}(),translateY:function(){var t=new c(0,1,0);return function(e){return this.translateOnAxis(t,e)}}(),translateZ:function(){var t=new c(0,0,1);return function(e){return this.translateOnAxis(t,e)}}(),localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var t=new h;return function(e){return e.applyMatrix4(t.getInverse(this.matrixWorld))}}(),lookAt:function(){
// This routine does not support objects with rotated and/or translated parent(s)
var t=new h;return function(e){this.isCamera?t.lookAt(this.position,e,this.up):t.lookAt(e,this.position,this.up),this.quaternion.setFromRotationMatrix(t)}}(),add:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?this:(t&&t.isObject3D&&(null!==t.parent&&t.parent.remove(t),t.parent=this,t.dispatchEvent({type:"added"}),this.children.push(t)),this)},remove:function(t){if(arguments.length>1)for(var e=0;e<arguments.length;e++)this.remove(arguments[e]);var n=this.children.indexOf(t);-1!==n&&(t.parent=null,t.dispatchEvent({type:"removed"}),this.children.splice(n,1))},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(var n=0,i=this.children.length;n<i;n++){var r=this.children[n],o=r.getObjectByProperty(t,e);if(void 0!==o)return o}},getWorldPosition:function(t){var e=t||new c;return this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var t=new c,e=new c;return function(n){var i=n||new u;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(t,i,e),i}}(),getWorldRotation:function(){var t=new u;return function(e){var n=e||new lt;return this.getWorldQuaternion(t),n.setFromQuaternion(t,this.rotation.order,!1)}}(),getWorldScale:function(){var t=new c,e=new u;return function(n){var i=n||new c;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(t,e,i),i}}(),getWorldDirection:function(){var t=new u;return function(e){var n=e||new c;return this.getWorldQuaternion(t),n.set(0,0,1).applyQuaternion(t)}}(),raycast:function(){},traverse:function(t){t(this);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(!1!==this.visible){t(this);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}},traverseAncestors:function(t){var e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);for(var e=this.children,n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},toJSON:function(t){
//
function e(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}
// extract data from the cache hash
// remove metadata on each item
// and return as array
function n(t){var e=[];for(var n in t){var i=t[n];delete i.metadata,e.push(i)}return e}
// meta is '' when called from JSON.stringify
var i=void 0===t||""===t,r={};
// meta is a hash used to collect geometries, materials.
// not providing it implies that this is the root object
// being serialized.
i&&(
// initialize meta obj
t={geometries:{},materials:{},textures:{},images:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});
// standard Object3D serialization
var o={};if(o.uuid=this.uuid,o.type=this.type,""!==this.name&&(o.name=this.name),"{}"!==JSON.stringify(this.userData)&&(o.userData=this.userData),!0===this.castShadow&&(o.castShadow=!0),!0===this.receiveShadow&&(o.receiveShadow=!0),!1===this.visible&&(o.visible=!1),o.matrix=this.matrix.toArray(),void 0!==this.geometry&&(o.geometry=e(t.geometries,this.geometry)),void 0!==this.material)if(Array.isArray(this.material)){for(var a=[],s=0,l=this.material.length;s<l;s++)a.push(e(t.materials,this.material[s]));o.material=a}else o.material=e(t.materials,this.material);
//
if(this.children.length>0){o.children=[];for(var s=0;s<this.children.length;s++)o.children.push(this.children[s].toJSON(t).object)}if(i){var u=n(t.geometries),c=n(t.materials),h=n(t.textures),d=n(t.images);u.length>0&&(r.geometries=u),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),d.length>0&&(r.images=d)}return r.object=o,r},clone:function(t){return(new this.constructor).copy(this,t)},copy:function(t,e){if(void 0===e&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(var n=0;n<t.children.length;n++){var i=t.children[n];this.add(i.clone())}return this}}),Object.assign(ht.prototype,{set:function(t,e){return this.start.copy(t),this.end.copy(e),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.start.copy(t.start),this.end.copy(t.end),this},getCenter:function(t){return(t||new c).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(t){return(t||new c).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(t,e){var n=e||new c;return this.delta(n).multiplyScalar(t).add(this.start)},closestPointToPointParameter:function(){var t=new c,e=new c;return function(n,i){t.subVectors(n,this.start),e.subVectors(this.end,this.start);var r=e.dot(e),o=e.dot(t),a=o/r;return i&&(a=As.clamp(a,0,1)),a}}(),closestPointToPoint:function(t,e,n){var i=this.closestPointToPointParameter(t,e),r=n||new c;return this.delta(r).multiplyScalar(i).add(this.start)},applyMatrix4:function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this},equals:function(t){return t.start.equals(this.start)&&t.end.equals(this.end)}}),Object.assign(dt,{normal:function(){var t=new c;return function(e,n,i,r){var o=r||new c;o.subVectors(i,n),t.subVectors(e,n),o.cross(t);var a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}}(),
// static/instance method to calculate barycentric coordinates
// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
barycoordFromPoint:function(){var t=new c,e=new c,n=new c;return function(i,r,o,a,s){t.subVectors(a,r),e.subVectors(o,r),n.subVectors(i,r);var l=t.dot(t),u=t.dot(e),h=t.dot(n),d=e.dot(e),p=e.dot(n),f=l*d-u*u,m=s||new c;
// collinear or singular triangle
if(0===f)
// arbitrary location outside of triangle?
// not sure if this is the best idea, maybe should be returning undefined
return m.set(-2,-1,-1);var g=1/f,v=(d*h-u*p)*g,y=(l*p-u*h)*g;
// barycentric coordinates must always sum to 1
return m.set(1-v-y,y,v)}}(),containsPoint:function(){var t=new c;return function(e,n,i,r){var o=dt.barycoordFromPoint(e,n,i,r,t);return o.x>=0&&o.y>=0&&o.x+o.y<=1}}()}),Object.assign(dt.prototype,{set:function(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this},setFromPointsAndIndices:function(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},area:function(){var t=new c,e=new c;return function(){return t.subVectors(this.c,this.b),e.subVectors(this.a,this.b),.5*t.cross(e).length()}}(),midpoint:function(t){return(t||new c).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(t){return dt.normal(this.a,this.b,this.c,t)},plane:function(t){return(t||new rt).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(t,e){return dt.barycoordFromPoint(t,this.a,this.b,this.c,e)},containsPoint:function(t){return dt.containsPoint(t,this.a,this.b,this.c)},closestPointToPoint:function(){var t=new rt,e=[new ht,new ht,new ht],n=new c,i=new c;return function(r,o){var a=o||new c,s=1/0;
// check if the projection lies within the triangle
if(
// project the point onto the plane of the triangle
t.setFromCoplanarPoints(this.a,this.b,this.c),t.projectPoint(r,n),!0===this.containsPoint(n))
// if so, this is the closest point
a.copy(n);else{
// if not, the point falls outside the triangle. the result is the closest point to the triangle's edges or vertices
e[0].set(this.a,this.b),e[1].set(this.b,this.c),e[2].set(this.c,this.a);for(var l=0;l<e.length;l++){e[l].closestPointToPoint(n,!0,i);var u=n.distanceToSquared(i);u<s&&(s=u,a.copy(i))}}return a}}(),equals:function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}),Object.assign(pt.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(var e=0,n=t.vertexNormals.length;e<n;e++)this.vertexNormals[e]=t.vertexNormals[e].clone();for(var e=0,n=t.vertexColors.length;e<n;e++)this.vertexColors[e]=t.vertexColors[e].clone();return this}}),ft.prototype=Object.create(J.prototype),ft.prototype.constructor=ft,ft.prototype.isMeshBasicMaterial=!0,ft.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this},Object.defineProperty(mt.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(mt.prototype,{isBufferAttribute:!0,setArray:function(t){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==t?t.length/this.itemSize:0,this.array=t},setDynamic:function(t){return this.dynamic=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.dynamic=t.dynamic,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(var i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var o=t[i];void 0===o&&(o=new K),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this},copyIndicesArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var o=t[i];e[n++]=o.a,e[n++]=o.b,e[n++]=o.c}return this},copyVector2sArray:function(t){for(var e=this.array,n=0,i=0,o=t.length;i<o;i++){var a=t[i];void 0===a&&(a=new r),e[n++]=a.x,e[n++]=a.y}return this},copyVector3sArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var o=t[i];void 0===o&&(o=new c),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this},copyVector4sArray:function(t){for(var e=this.array,n=0,i=0,r=t.length;i<r;i++){var o=t[i];void 0===o&&(o=new a),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)}}),gt.prototype=Object.create(mt.prototype),gt.prototype.constructor=gt,vt.prototype=Object.create(mt.prototype),vt.prototype.constructor=vt,yt.prototype=Object.create(mt.prototype),yt.prototype.constructor=yt,bt.prototype=Object.create(mt.prototype),bt.prototype.constructor=bt,_t.prototype=Object.create(mt.prototype),_t.prototype.constructor=_t,xt.prototype=Object.create(mt.prototype),xt.prototype.constructor=xt,At.prototype=Object.create(mt.prototype),At.prototype.constructor=At,wt.prototype=Object.create(mt.prototype),wt.prototype.constructor=wt,St.prototype=Object.create(mt.prototype),St.prototype.constructor=St,Object.assign(Mt.prototype,{computeGroups:function(t){for(var e,n=[],i=void 0,r=t.faces,o=0;o<r.length;o++){var a=r[o];
// materials
a.materialIndex!==i&&(i=a.materialIndex,void 0!==e&&(e.count=3*o-e.start,n.push(e)),e={start:3*o,materialIndex:i})}void 0!==e&&(e.count=3*o-e.start,n.push(e)),this.groups=n},fromGeometry:function(t){var e,n=t.faces,i=t.vertices,o=t.faceVertexUvs,a=o[0]&&o[0].length>0,s=o[1]&&o[1].length>0,l=t.morphTargets,u=l.length;if(u>0){e=[];for(var c=0;c<u;c++)e[c]=[];this.morphTargets.position=e}var h,d=t.morphNormals,p=d.length;if(p>0){h=[];for(var c=0;c<p;c++)h[c]=[];this.morphTargets.normal=h}
//
for(var f=t.skinIndices,m=t.skinWeights,g=f.length===i.length,v=m.length===i.length,c=0;c<n.length;c++){var y=n[c];this.vertices.push(i[y.a],i[y.b],i[y.c]);var b=y.vertexNormals;if(3===b.length)this.normals.push(b[0],b[1],b[2]);else{var _=y.normal;this.normals.push(_,_,_)}var x=y.vertexColors;if(3===x.length)this.colors.push(x[0],x[1],x[2]);else{var A=y.color;this.colors.push(A,A,A)}if(!0===a){var w=o[0][c];void 0!==w?this.uvs.push(w[0],w[1],w[2]):this.uvs.push(new r,new r,new r)}if(!0===s){var w=o[1][c];void 0!==w?this.uvs2.push(w[0],w[1],w[2]):this.uvs2.push(new r,new r,new r)}
// morphs
for(var S=0;S<u;S++){var M=l[S].vertices;e[S].push(M[y.a],M[y.b],M[y.c])}for(var S=0;S<p;S++){var E=d[S].vertexNormals[c];h[S].push(E.a,E.b,E.c)}
// skins
g&&this.skinIndices.push(f[y.a],f[y.b],f[y.c]),v&&this.skinWeights.push(m[y.a],m[y.b],m[y.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this}});/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author bhouston / http://clara.io
 */
var Us=0;Object.assign(Ct.prototype,i.prototype,{isGeometry:!0,applyMatrix:function(t){for(var e=(new it).getNormalMatrix(t),n=0,i=this.vertices.length;n<i;n++){this.vertices[n].applyMatrix4(t)}for(var n=0,i=this.faces.length;n<i;n++){var r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(var o=0,a=r.vertexNormals.length;o<a;o++)r.vertexNormals[o].applyMatrix3(e).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){
// rotate geometry around world x-axis
var t=new h;return function(e){return t.makeRotationX(e),this.applyMatrix(t),this}}(),rotateY:function(){
// rotate geometry around world y-axis
var t=new h;return function(e){return t.makeRotationY(e),this.applyMatrix(t),this}}(),rotateZ:function(){
// rotate geometry around world z-axis
var t=new h;return function(e){return t.makeRotationZ(e),this.applyMatrix(t),this}}(),translate:function(){
// translate geometry
var t=new h;return function(e,n,i){return t.makeTranslation(e,n,i),this.applyMatrix(t),this}}(),scale:function(){
// scale geometry
var t=new h;return function(e,n,i){return t.makeScale(e,n,i),this.applyMatrix(t),this}}(),lookAt:function(){var t=new ct;return function(e){t.lookAt(e),t.updateMatrix(),this.applyMatrix(t.matrix)}}(),fromBufferGeometry:function(t){function e(t,e,i,r){var o=void 0!==s?[d[t].clone(),d[e].clone(),d[i].clone()]:[],a=void 0!==l?[n.colors[t].clone(),n.colors[e].clone(),n.colors[i].clone()]:[],c=new pt(t,e,i,o,a,r);n.faces.push(c),void 0!==u&&n.faceVertexUvs[0].push([p[t].clone(),p[e].clone(),p[i].clone()]),void 0!==h&&n.faceVertexUvs[1].push([f[t].clone(),f[e].clone(),f[i].clone()])}var n=this,i=null!==t.index?t.index.array:void 0,o=t.attributes,a=o.position.array,s=void 0!==o.normal?o.normal.array:void 0,l=void 0!==o.color?o.color.array:void 0,u=void 0!==o.uv?o.uv.array:void 0,h=void 0!==o.uv2?o.uv2.array:void 0;void 0!==h&&(this.faceVertexUvs[1]=[]);for(var d=[],p=[],f=[],m=0,g=0;m<a.length;m+=3,g+=2)n.vertices.push(new c(a[m],a[m+1],a[m+2])),void 0!==s&&d.push(new c(s[m],s[m+1],s[m+2])),void 0!==l&&n.colors.push(new K(l[m],l[m+1],l[m+2])),void 0!==u&&p.push(new r(u[g],u[g+1])),void 0!==h&&f.push(new r(h[g],h[g+1]));var v=t.groups;if(v.length>0)for(var m=0;m<v.length;m++)for(var y=v[m],b=y.start,_=y.count,g=b,x=b+_;g<x;g+=3)void 0!==i?e(i[g],i[g+1],i[g+2],y.materialIndex):e(g,g+1,g+2,y.materialIndex);else if(void 0!==i)for(var m=0;m<i.length;m+=3)e(i[m],i[m+1],i[m+2]);else for(var m=0;m<a.length/3;m+=3)e(m,m+1,m+2);return this.computeFaceNormals(),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){this.computeBoundingBox();var t=this.boundingBox.getCenter().negate();return this.translate(t.x,t.y,t.z),t},normalize:function(){this.computeBoundingSphere();var t=this.boundingSphere.center,e=this.boundingSphere.radius,n=0===e?1:1/e,i=new h;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix(i),this},computeFaceNormals:function(){for(var t=new c,e=new c,n=0,i=this.faces.length;n<i;n++){var r=this.faces[n],o=this.vertices[r.a],a=this.vertices[r.b],s=this.vertices[r.c];t.subVectors(s,a),e.subVectors(o,a),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t){void 0===t&&(t=!0);var e,n,i,r,o,a;for(a=new Array(this.vertices.length),e=0,n=this.vertices.length;e<n;e++)a[e]=new c;if(t){
// vertex normals weighted by triangle areas
// http://www.iquilezles.org/www/articles/normals/normals.htm
var s,l,u,h=new c,d=new c;for(i=0,r=this.faces.length;i<r;i++)o=this.faces[i],s=this.vertices[o.a],l=this.vertices[o.b],u=this.vertices[o.c],h.subVectors(u,l),d.subVectors(s,l),h.cross(d),a[o.a].add(h),a[o.b].add(h),a[o.c].add(h)}else for(this.computeFaceNormals(),i=0,r=this.faces.length;i<r;i++)o=this.faces[i],a[o.a].add(o.normal),a[o.b].add(o.normal),a[o.c].add(o.normal);for(e=0,n=this.vertices.length;e<n;e++)a[e].normalize();for(i=0,r=this.faces.length;i<r;i++){o=this.faces[i];var p=o.vertexNormals;3===p.length?(p[0].copy(a[o.a]),p[1].copy(a[o.b]),p[2].copy(a[o.c])):(p[0]=a[o.a].clone(),p[1]=a[o.b].clone(),p[2]=a[o.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var t,e,n;for(this.computeFaceNormals(),t=0,e=this.faces.length;t<e;t++){n=this.faces[t];var i=n.vertexNormals;3===i.length?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var t,e,n,i,r;
// save original normals
// - create temp variables on first access
//   otherwise just copy (for faster repeated calls)
for(n=0,i=this.faces.length;n<i;n++)for(r=this.faces[n],r.__originalFaceNormal?r.__originalFaceNormal.copy(r.normal):r.__originalFaceNormal=r.normal.clone(),r.__originalVertexNormals||(r.__originalVertexNormals=[]),t=0,e=r.vertexNormals.length;t<e;t++)r.__originalVertexNormals[t]?r.__originalVertexNormals[t].copy(r.vertexNormals[t]):r.__originalVertexNormals[t]=r.vertexNormals[t].clone();
// use temp geometry to compute face and vertex normals for each morph
var o=new Ct;for(o.faces=this.faces,t=0,e=this.morphTargets.length;t<e;t++){
// create on first access
if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];var a,s,l=this.morphNormals[t].faceNormals,u=this.morphNormals[t].vertexNormals;for(n=0,i=this.faces.length;n<i;n++)a=new c,s={a:new c,b:new c,c:new c},l.push(a),u.push(s)}var h=this.morphNormals[t];
// set vertices to morph target
o.vertices=this.morphTargets[t].vertices,
// compute morph normals
o.computeFaceNormals(),o.computeVertexNormals();
// store morph normals
var a,s;for(n=0,i=this.faces.length;n<i;n++)r=this.faces[n],a=h.faceNormals[n],s=h.vertexNormals[n],a.copy(r.normal),s.a.copy(r.vertexNormals[0]),s.b.copy(r.vertexNormals[1]),s.c.copy(r.vertexNormals[2])}
// restore original normals
for(n=0,i=this.faces.length;n<i;n++)r=this.faces[n],r.normal=r.__originalFaceNormal,r.vertexNormals=r.__originalVertexNormals},computeLineDistances:function(){for(var t=0,e=this.vertices,n=0,i=e.length;n<i;n++)n>0&&(t+=e[n].distanceTo(e[n-1])),this.lineDistances[n]=t},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new et),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new nt),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n){if(!1!==(t&&t.isGeometry)){var i,r=this.vertices.length,o=this.vertices,a=t.vertices,s=this.faces,l=t.faces,u=this.faceVertexUvs[0],c=t.faceVertexUvs[0],h=this.colors,d=t.colors;void 0===n&&(n=0),void 0!==e&&(i=(new it).getNormalMatrix(e));
// vertices
for(var p=0,f=a.length;p<f;p++){var m=a[p],g=m.clone();void 0!==e&&g.applyMatrix4(e),o.push(g)}
// colors
for(var p=0,f=d.length;p<f;p++)h.push(d[p].clone());
// faces
for(p=0,f=l.length;p<f;p++){var v,y,b,_=l[p],x=_.vertexNormals,A=_.vertexColors;v=new pt(_.a+r,_.b+r,_.c+r),v.normal.copy(_.normal),void 0!==i&&v.normal.applyMatrix3(i).normalize();for(var w=0,S=x.length;w<S;w++)y=x[w].clone(),void 0!==i&&y.applyMatrix3(i).normalize(),v.vertexNormals.push(y);v.color.copy(_.color);for(var w=0,S=A.length;w<S;w++)b=A[w],v.vertexColors.push(b.clone());v.materialIndex=_.materialIndex+n,s.push(v)}
// uvs
for(p=0,f=c.length;p<f;p++){var M=c[p],E=[];if(void 0!==M){for(var w=0,S=M.length;w<S;w++)E.push(M[w].clone());u.push(E)}}}},mergeMesh:function(t){!1!==(t&&t.isMesh)&&(t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix))},/*
	 * Checks for duplicate vertices with hashmap.
	 * Duplicated vertices are removed
	 * and faces' vertices are updated.
	 */
mergeVertices:function(){var t,e,n,i,r,o,a,s,l={},u=[],c=[],h=Math.pow(10,4);for(n=0,i=this.vertices.length;n<i;n++)t=this.vertices[n],e=Math.round(t.x*h)+"_"+Math.round(t.y*h)+"_"+Math.round(t.z*h),void 0===l[e]?(l[e]=n,u.push(this.vertices[n]),c[n]=u.length-1):
//console.log('Duplicate vertex found. ', i, ' could be using ', verticesMap[key]);
c[n]=c[l[e]];
// if faces are completely degenerate after merging vertices, we
// have to remove them from the geometry.
var d=[];for(n=0,i=this.faces.length;n<i;n++){r=this.faces[n],r.a=c[r.a],r.b=c[r.b],r.c=c[r.c],o=[r.a,r.b,r.c];
// if any duplicate vertices are found in a Face3
// we have to remove the face as nothing can be saved
for(var p=0;p<3;p++)if(o[p]===o[(p+1)%3]){d.push(n);break}}for(n=d.length-1;n>=0;n--){var f=d[n];for(this.faces.splice(f,1),a=0,s=this.faceVertexUvs.length;a<s;a++)this.faceVertexUvs[a].splice(f,1)}
// Use unique set of vertices
var m=this.vertices.length-u.length;return this.vertices=u,m},sortFacesByMaterialIndex:function(){
// sort faces
function t(t,e){return t.materialIndex-e.materialIndex}
// tag faces
for(var e=this.faces,n=e.length,i=0;i<n;i++)e[i]._id=i;e.sort(t);
// sort uvs
var r,o,a=this.faceVertexUvs[0],s=this.faceVertexUvs[1];a&&a.length===n&&(r=[]),s&&s.length===n&&(o=[]);for(var i=0;i<n;i++){var l=e[i]._id;r&&r.push(a[l]),o&&o.push(s[l])}r&&(this.faceVertexUvs[0]=r),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){function t(t,e,n){return n?t|1<<e:t&~(1<<e)}function e(t){var e=t.x.toString()+t.y.toString()+t.z.toString();return void 0!==d[e]?d[e]:(d[e]=h.length/3,h.push(t.x,t.y,t.z),d[e])}function n(t){var e=t.r.toString()+t.g.toString()+t.b.toString();return void 0!==f[e]?f[e]:(f[e]=p.length,p.push(t.getHex()),f[e])}function i(t){var e=t.x.toString()+t.y.toString();return void 0!==g[e]?g[e]:(g[e]=m.length/2,m.push(t.x,t.y),g[e])}var r={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(
// standard Geometry serialization
r.uuid=this.uuid,r.type=this.type,""!==this.name&&(r.name=this.name),void 0!==this.parameters){var o=this.parameters;for(var a in o)void 0!==o[a]&&(r[a]=o[a]);return r}for(var s=[],l=0;l<this.vertices.length;l++){var u=this.vertices[l];s.push(u.x,u.y,u.z)}for(var c=[],h=[],d={},p=[],f={},m=[],g={},l=0;l<this.faces.length;l++){var v=this.faces[l],y=void 0!==this.faceVertexUvs[0][l],b=v.normal.length()>0,_=v.vertexNormals.length>0,x=1!==v.color.r||1!==v.color.g||1!==v.color.b,A=v.vertexColors.length>0,w=0;if(w=t(w,0,0),// isQuad
w=t(w,1,!0),w=t(w,2,!1),w=t(w,3,y),w=t(w,4,b),w=t(w,5,_),w=t(w,6,x),w=t(w,7,A),c.push(w),c.push(v.a,v.b,v.c),c.push(v.materialIndex),y){var S=this.faceVertexUvs[0][l];c.push(i(S[0]),i(S[1]),i(S[2]))}if(b&&c.push(e(v.normal)),_){var M=v.vertexNormals;c.push(e(M[0]),e(M[1]),e(M[2]))}if(x&&c.push(n(v.color)),A){var E=v.vertexColors;c.push(n(E[0]),n(E[1]),n(E[2]))}}// temporal backward compatibility
return r.data={},r.data.vertices=s,r.data.normals=h,p.length>0&&(r.data.colors=p),m.length>0&&(r.data.uvs=[m]),r.data.faces=c,r},clone:function(){/*
		 // Handle primitives

		 var parameters = this.parameters;

		 if ( parameters !== undefined ) {

		 var values = [];

		 for ( var key in parameters ) {

		 values.push( parameters[ key ] );

		 }

		 var geometry = Object.create( this.constructor.prototype );
		 this.constructor.apply( geometry, values );
		 return geometry;

		 }

		 return new this.constructor().copy( this );
		 */
return(new Ct).copy(this)},copy:function(t){var e,n,i,r,o,a;
// reset
this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,
// name
this.name=t.name;
// vertices
var s=t.vertices;for(e=0,n=s.length;e<n;e++)this.vertices.push(s[e].clone());
// colors
var l=t.colors;for(e=0,n=l.length;e<n;e++)this.colors.push(l[e].clone());
// faces
var u=t.faces;for(e=0,n=u.length;e<n;e++)this.faces.push(u[e].clone());
// face vertex uvs
for(e=0,n=t.faceVertexUvs.length;e<n;e++){var c=t.faceVertexUvs[e];for(void 0===this.faceVertexUvs[e]&&(this.faceVertexUvs[e]=[]),i=0,r=c.length;i<r;i++){var h=c[i],d=[];for(o=0,a=h.length;o<a;o++){var p=h[o];d.push(p.clone())}this.faceVertexUvs[e].push(d)}}
// morph targets
var f=t.morphTargets;for(e=0,n=f.length;e<n;e++){var m={};
// vertices
if(m.name=f[e].name,void 0!==f[e].vertices)for(m.vertices=[],i=0,r=f[e].vertices.length;i<r;i++)m.vertices.push(f[e].vertices[i].clone());
// normals
if(void 0!==f[e].normals)for(m.normals=[],i=0,r=f[e].normals.length;i<r;i++)m.normals.push(f[e].normals[i].clone());this.morphTargets.push(m)}
// morph normals
var g=t.morphNormals;for(e=0,n=g.length;e<n;e++){var v={};
// vertex normals
if(void 0!==g[e].vertexNormals)for(v.vertexNormals=[],i=0,r=g[e].vertexNormals.length;i<r;i++){var y=g[e].vertexNormals[i],b={};b.a=y.a.clone(),b.b=y.b.clone(),b.c=y.c.clone(),v.vertexNormals.push(b)}
// face normals
if(void 0!==g[e].faceNormals)for(v.faceNormals=[],i=0,r=g[e].faceNormals.length;i<r;i++)v.faceNormals.push(g[e].faceNormals[i].clone());this.morphNormals.push(v)}
// skin weights
var _=t.skinWeights;for(e=0,n=_.length;e<n;e++)this.skinWeights.push(_[e].clone());
// skin indices
var x=t.skinIndices;for(e=0,n=x.length;e<n;e++)this.skinIndices.push(x[e].clone());
// line distances
var A=t.lineDistances;for(e=0,n=A.length;e<n;e++)this.lineDistances.push(A[e]);
// bounding box
var w=t.boundingBox;null!==w&&(this.boundingBox=w.clone());
// bounding sphere
var S=t.boundingSphere;
// update flags
return null!==S&&(this.boundingSphere=S.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Pt.MaxIndex=65535,Object.assign(Pt.prototype,i.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){Array.isArray(t)?this.index=new(Et(t)>65535?At:_t)(t,1):this.index=t},addAttribute:function(t,e){return!1===(e&&e.isBufferAttribute)&&!1===(e&&e.isInterleavedBufferAttribute)?void this.addAttribute(t,new mt(arguments[1],arguments[2])):"index"===t?void this.setIndex(e):(this.attributes[t]=e,this)},getAttribute:function(t){return this.attributes[t]},removeAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:void 0!==n?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix:function(t){var e=this.attributes.position;void 0!==e&&(t.applyToBufferAttribute(e),e.needsUpdate=!0);var n=this.attributes.normal;if(void 0!==n){(new it).getNormalMatrix(t).applyToBufferAttribute(n),n.needsUpdate=!0}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(){
// rotate geometry around world x-axis
var t=new h;return function(e){return t.makeRotationX(e),this.applyMatrix(t),this}}(),rotateY:function(){
// rotate geometry around world y-axis
var t=new h;return function(e){return t.makeRotationY(e),this.applyMatrix(t),this}}(),rotateZ:function(){
// rotate geometry around world z-axis
var t=new h;return function(e){return t.makeRotationZ(e),this.applyMatrix(t),this}}(),translate:function(){
// translate geometry
var t=new h;return function(e,n,i){return t.makeTranslation(e,n,i),this.applyMatrix(t),this}}(),scale:function(){
// scale geometry
var t=new h;return function(e,n,i){return t.makeScale(e,n,i),this.applyMatrix(t),this}}(),lookAt:function(){var t=new ct;return function(e){t.lookAt(e),t.updateMatrix(),this.applyMatrix(t.matrix)}}(),center:function(){this.computeBoundingBox();var t=this.boundingBox.getCenter().negate();return this.translate(t.x,t.y,t.z),t},setFromObject:function(t){
// console.log( 'THREE.BufferGeometry.setFromObject(). Converting', object, this );
var e=t.geometry;if(t.isPoints||t.isLine){var n=new wt(3*e.vertices.length,3),i=new wt(3*e.colors.length,3);if(this.addAttribute("position",n.copyVector3sArray(e.vertices)),this.addAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){var r=new wt(e.lineDistances.length,1);this.addAttribute("lineDistance",r.copyArray(e.lineDistances))}null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},updateFromObject:function(t){var e=t.geometry;if(t.isMesh){var n=e.__directGeometry;if(!0===e.elementsNeedUpdate&&(n=void 0,e.elementsNeedUpdate=!1),void 0===n)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}var i;return!0===e.verticesNeedUpdate&&(i=this.attributes.position,void 0!==i&&(i.copyVector3sArray(e.vertices),i.needsUpdate=!0),e.verticesNeedUpdate=!1),!0===e.normalsNeedUpdate&&(i=this.attributes.normal,void 0!==i&&(i.copyVector3sArray(e.normals),i.needsUpdate=!0),e.normalsNeedUpdate=!1),!0===e.colorsNeedUpdate&&(i=this.attributes.color,void 0!==i&&(i.copyColorsArray(e.colors),i.needsUpdate=!0),e.colorsNeedUpdate=!1),e.uvsNeedUpdate&&(i=this.attributes.uv,void 0!==i&&(i.copyVector2sArray(e.uvs),i.needsUpdate=!0),e.uvsNeedUpdate=!1),e.lineDistancesNeedUpdate&&(i=this.attributes.lineDistance,void 0!==i&&(i.copyArray(e.lineDistances),i.needsUpdate=!0),e.lineDistancesNeedUpdate=!1),e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=(new Mt).fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){var e=new Float32Array(3*t.vertices.length);if(this.addAttribute("position",new mt(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){var n=new Float32Array(3*t.normals.length);this.addAttribute("normal",new mt(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){var i=new Float32Array(3*t.colors.length);this.addAttribute("color",new mt(i,3).copyColorsArray(t.colors))}if(t.uvs.length>0){var r=new Float32Array(2*t.uvs.length);this.addAttribute("uv",new mt(r,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){var o=new Float32Array(2*t.uvs2.length);this.addAttribute("uv2",new mt(o,2).copyVector2sArray(t.uvs2))}if(t.indices.length>0){var a=Et(t.indices)>65535?Uint32Array:Uint16Array,s=new a(3*t.indices.length);this.setIndex(new mt(s,1).copyIndicesArray(t.indices))}
// groups
this.groups=t.groups;
// morphs
for(var l in t.morphTargets){for(var u=[],c=t.morphTargets[l],h=0,d=c.length;h<d;h++){var p=c[h],f=new wt(3*p.length,3);u.push(f.copyVector3sArray(p))}this.morphAttributes[l]=u}
// skinning
if(t.skinIndices.length>0){var m=new wt(4*t.skinIndices.length,4);this.addAttribute("skinIndex",m.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){var g=new wt(4*t.skinWeights.length,4);this.addAttribute("skinWeight",g.copyVector4sArray(t.skinWeights))}
//
return null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new et);var t=this.attributes.position;void 0!==t?this.boundingBox.setFromBufferAttribute(t):this.boundingBox.makeEmpty(),isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)},computeBoundingSphere:function(){var t=new et,e=new c;return function(){null===this.boundingSphere&&(this.boundingSphere=new nt);var n=this.attributes.position;if(n){var i=this.boundingSphere.center;t.setFromBufferAttribute(n),t.getCenter(i);for(var r=0,o=0,a=n.count;o<a;o++)e.x=n.getX(o),e.y=n.getY(o),e.z=n.getZ(o),r=Math.max(r,i.distanceToSquared(e));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var t=this.index,e=this.attributes,n=this.groups;if(e.position){var i=e.position.array;if(void 0===e.normal)this.addAttribute("normal",new mt(new Float32Array(i.length),3));else for(var r=e.normal.array,o=0,a=r.length;o<a;o++)r[o]=0;var s,l,u,h=e.normal.array,d=new c,p=new c,f=new c,m=new c,g=new c;
// indexed elements
if(t){var v=t.array;0===n.length&&this.addGroup(0,v.length);for(var y=0,b=n.length;y<b;++y)for(var _=n[y],x=_.start,A=_.count,o=x,a=x+A;o<a;o+=3)s=3*v[o+0],l=3*v[o+1],u=3*v[o+2],d.fromArray(i,s),p.fromArray(i,l),f.fromArray(i,u),m.subVectors(f,p),g.subVectors(d,p),m.cross(g),h[s]+=m.x,h[s+1]+=m.y,h[s+2]+=m.z,h[l]+=m.x,h[l+1]+=m.y,h[l+2]+=m.z,h[u]+=m.x,h[u+1]+=m.y,h[u+2]+=m.z}else
// non-indexed elements (unconnected triangle soup)
for(var o=0,a=i.length;o<a;o+=9)d.fromArray(i,o),p.fromArray(i,o+3),f.fromArray(i,o+6),m.subVectors(f,p),g.subVectors(d,p),m.cross(g),h[o]=m.x,h[o+1]=m.y,h[o+2]=m.z,h[o+3]=m.x,h[o+4]=m.y,h[o+5]=m.z,h[o+6]=m.x,h[o+7]=m.y,h[o+8]=m.z;this.normalizeNormals(),e.normal.needsUpdate=!0}},merge:function(t,e){if(!1!==(t&&t.isBufferGeometry)){void 0===e&&(e=0);var n=this.attributes;for(var i in n)if(void 0!==t.attributes[i])for(var r=n[i],o=r.array,a=t.attributes[i],s=a.array,l=a.itemSize,u=0,c=l*e;u<s.length;u++,c++)o[c]=s[u];return this}},normalizeNormals:function(){for(var t,e,n,i,r=this.attributes.normal,o=0,a=r.count;o<a;o++)t=r.getX(o),e=r.getY(o),n=r.getZ(o),i=1/Math.sqrt(t*t+e*e+n*n),r.setXYZ(o,t*i,e*i,n*i)},toNonIndexed:function(){if(null===this.index)return this;var t=new Pt,e=this.index.array,n=this.attributes;for(var i in n){for(var r=n[i],o=r.array,a=r.itemSize,s=new o.constructor(e.length*a),l=0,u=0,c=0,h=e.length;c<h;c++){l=e[c]*a;for(var d=0;d<a;d++)s[u++]=o[l++]}t.addAttribute(i,new mt(s,a))}return t},toJSON:function(){var t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(
// standard BufferGeometry serialization
t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),void 0!==this.parameters){var e=this.parameters;for(var n in e)void 0!==e[n]&&(t[n]=e[n]);return t}t.data={attributes:{}};var i=this.index;if(null!==i){var r=Array.prototype.slice.call(i.array);t.data.index={type:i.array.constructor.name,array:r}}var o=this.attributes;for(var n in o){var a=o[n],r=Array.prototype.slice.call(a.array);t.data.attributes[n]={itemSize:a.itemSize,type:a.array.constructor.name,array:r,normalized:a.normalized}}var s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));var l=this.boundingSphere;return null!==l&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t},clone:function(){/*
		 // Handle primitives

		 var parameters = this.parameters;

		 if ( parameters !== undefined ) {

		 var values = [];

		 for ( var key in parameters ) {

		 values.push( parameters[ key ] );

		 }

		 var geometry = Object.create( this.constructor.prototype );
		 this.constructor.apply( geometry, values );
		 return geometry;

		 }

		 return new this.constructor().copy( this );
		 */
return(new Pt).copy(this)},copy:function(t){var e,n,i;
// reset
this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,
// name
this.name=t.name;
// index
var r=t.index;null!==r&&this.setIndex(r.clone());
// attributes
var o=t.attributes;for(e in o){var a=o[e];this.addAttribute(e,a.clone())}
// morph attributes
var s=t.morphAttributes;for(e in s){var l=[],u=s[e];// morphAttribute: array of Float32BufferAttributes
for(n=0,i=u.length;n<i;n++)l.push(u[n].clone());this.morphAttributes[e]=l}
// groups
var c=t.groups;for(n=0,i=c.length;n<i;n++){var h=c[n];this.addGroup(h.start,h.count,h.materialIndex)}
// bounding box
var d=t.boundingBox;null!==d&&(this.boundingBox=d.clone());
// bounding sphere
var p=t.boundingSphere;
// draw range
return null!==p&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Lt.prototype=Object.assign(Object.create(ct.prototype),{constructor:Lt,isMesh:!0,setDrawMode:function(t){this.drawMode=t},copy:function(t){return ct.prototype.copy.call(this,t),this.drawMode=t.drawMode,this},updateMorphTargets:function(){var t=this.geometry.morphTargets;if(void 0!==t&&t.length>0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var e=0,n=t.length;e<n;e++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[t[e].name]=e}},raycast:function(){function t(t,e,n,i,r,o,a){return dt.barycoordFromPoint(t,e,n,i,y),r.multiplyScalar(y.x),o.multiplyScalar(y.y),a.multiplyScalar(y.z),r.add(o).add(a),r.clone()}function e(t,e,n,i,r,o,a){var s=t.material;if(null===(s.side===vo?n.intersectTriangle(o,r,i,!0,a):n.intersectTriangle(i,r,o,s.side!==yo,a)))return null;_.copy(a),_.applyMatrix4(t.matrixWorld);var l=e.ray.origin.distanceTo(_);return l<e.near||l>e.far?null:{distance:l,point:_.clone(),object:t}}function n(n,i,r,o,a,c,h,d){s.fromBufferAttribute(o,c),l.fromBufferAttribute(o,h),u.fromBufferAttribute(o,d);var p=e(n,i,r,s,l,u,b);return p&&(a&&(m.fromBufferAttribute(a,c),g.fromBufferAttribute(a,h),v.fromBufferAttribute(a,d),p.uv=t(b,s,l,u,m,g,v)),p.face=new pt(c,h,d,dt.normal(s,l,u)),p.faceIndex=c),p}var i=new h,o=new st,a=new nt,s=new c,l=new c,u=new c,d=new c,p=new c,f=new c,m=new r,g=new r,v=new r,y=new c,b=new c,_=new c;return function(r,c){var h=this.geometry,y=this.material,_=this.matrixWorld;if(void 0!==y&&(
// Checking boundingSphere distance to ray
null===h.boundingSphere&&h.computeBoundingSphere(),a.copy(h.boundingSphere),a.applyMatrix4(_),!1!==r.ray.intersectsSphere(a)&&(
//
i.getInverse(_),o.copy(r.ray).applyMatrix4(i),null===h.boundingBox||!1!==o.intersectsBox(h.boundingBox))))
// Check boundingBox before continuing
{var x;if(h.isBufferGeometry){var A,w,S,M,E,T=h.index,C=h.attributes.position,P=h.attributes.uv;if(null!==T)
// indexed buffer geometry
for(M=0,E=T.count;M<E;M+=3)A=T.getX(M),w=T.getX(M+1),S=T.getX(M+2),(x=n(this,r,o,C,P,A,w,S))&&(x.faceIndex=Math.floor(M/3),// triangle number in indices buffer semantics
c.push(x));else
// non-indexed buffer geometry
for(M=0,E=C.count;M<E;M+=3)A=M,w=M+1,S=M+2,(x=n(this,r,o,C,P,A,w,S))&&(x.index=A,// triangle number in positions buffer semantics
c.push(x))}else if(h.isGeometry){var L,N,I,O,R=Array.isArray(y),D=h.vertices,B=h.faces,j=h.faceVertexUvs[0];j.length>0&&(O=j);for(var U=0,k=B.length;U<k;U++){var V=B[U],G=R?y[V.materialIndex]:y;if(void 0!==G){if(L=D[V.a],N=D[V.b],I=D[V.c],!0===G.morphTargets){var F=h.morphTargets,z=this.morphTargetInfluences;s.set(0,0,0),l.set(0,0,0),u.set(0,0,0);for(var H=0,X=F.length;H<X;H++){var W=z[H];if(0!==W){var Y=F[H].vertices;s.addScaledVector(d.subVectors(Y[V.a],L),W),l.addScaledVector(p.subVectors(Y[V.b],N),W),u.addScaledVector(f.subVectors(Y[V.c],I),W)}}s.add(L),l.add(N),u.add(I),L=s,N=l,I=u}if(x=e(this,r,o,L,N,I,b)){if(O&&O[U]){var K=O[U];m.copy(K[0]),g.copy(K[1]),v.copy(K[2]),x.uv=t(b,L,N,I,m,g,v)}x.face=V,x.faceIndex=U,c.push(x)}}}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Nt.prototype=Object.create(Ct.prototype),Nt.prototype.constructor=Nt,It.prototype=Object.create(Pt.prototype),It.prototype.constructor=It,Ot.prototype=Object.create(Ct.prototype),Ot.prototype.constructor=Ot,Rt.prototype=Object.create(Pt.prototype),Rt.prototype.constructor=Rt,Dt.prototype=Object.assign(Object.create(ct.prototype),{constructor:Dt,isCamera:!0,copy:function(t){return ct.prototype.copy.call(this,t),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this},getWorldDirection:function(){var t=new u;return function(e){var n=e||new c;return this.getWorldQuaternion(t),n.set(0,0,-1).applyQuaternion(t)}}(),clone:function(){return(new this.constructor).copy(this)}}),Bt.prototype=Object.assign(Object.create(Dt.prototype),{constructor:Bt,isPerspectiveCamera:!0,copy:function(t){return Dt.prototype.copy.call(this,t),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},/**
	 * Sets the FOV by focal length in respect to the current .filmGauge.
	 *
	 * The default film gauge is 35, so that the focal length can be specified for
	 * a 35mm (full frame) camera.
	 *
	 * Values for focal length and film gauge must have the same unit.
	 */
setFocalLength:function(t){
// see http://www.bobatkins.com/photography/technical/field_of_view.html
var e=.5*this.getFilmHeight()/t;this.fov=2*As.RAD2DEG*Math.atan(e),this.updateProjectionMatrix()},/**
	 * Calculates the focal length from the current .fov and .filmGauge.
	 */
getFocalLength:function(){var t=Math.tan(.5*As.DEG2RAD*this.fov);return.5*this.getFilmHeight()/t},getEffectiveFOV:function(){return 2*As.RAD2DEG*Math.atan(Math.tan(.5*As.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){
// film not completely covered in portrait format (aspect < 1)
return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){
// film not completely covered in landscape format (aspect > 1)
return this.filmGauge/Math.max(this.aspect,1)},/**
	 * Sets an offset in a larger frustum. This is useful for multi-window or
	 * multi-monitor/multi-machine setups.
	 *
	 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
	 * the monitors are in grid like this
	 *
	 *   +---+---+---+
	 *   | A | B | C |
	 *   +---+---+---+
	 *   | D | E | F |
	 *   +---+---+---+
	 *
	 * then for each monitor you would call it like this
	 *
	 *   var w = 1920;
	 *   var h = 1080;
	 *   var fullWidth = w * 3;
	 *   var fullHeight = h * 2;
	 *
	 *   --A--
	 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
	 *   --B--
	 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
	 *   --C--
	 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
	 *   --D--
	 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
	 *   --E--
	 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
	 *   --F--
	 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
	 *
	 *   Note there is no reason monitors have to be the same size or in a grid.
	 */
setViewOffset:function(t,e,n,i,r,o){this.aspect=t/e,this.view={fullWidth:t,fullHeight:e,offsetX:n,offsetY:i,width:r,height:o},this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null,this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=this.near,e=t*Math.tan(.5*As.DEG2RAD*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(null!==o){var a=o.fullWidth,s=o.fullHeight;r+=o.offsetX*i/a,e-=o.offsetY*n/s,i*=o.width/a,n*=o.height/s}var l=this.filmOffset;0!==l&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far)},toJSON:function(t){var e=ct.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}),jt.prototype=Object.assign(Object.create(Dt.prototype),{constructor:jt,isOrthographicCamera:!0,copy:function(t){return Dt.prototype.copy.call(this,t),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,o){this.view={fullWidth:t,fullHeight:e,offsetX:n,offsetY:i,width:r,height:o},this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null,this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,s=i-e;if(null!==this.view){var l=this.zoom/(this.view.width/this.view.fullWidth),u=this.zoom/(this.view.height/this.view.fullHeight),c=(this.right-this.left)/this.view.width,h=(this.top-this.bottom)/this.view.height;r+=c*(this.view.offsetX/l),o=r+c*(this.view.width/l),a-=h*(this.view.offsetY/u),s=a-h*(this.view.height/u)}this.projectionMatrix.makeOrthographic(r,o,a,s,this.near,this.far)},toJSON:function(t){var e=ct.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}});/**
 * @author mrdoob / http://mrdoob.com/
 */
var ks=0;me.prototype.isFogExp2=!0,me.prototype.clone=function(){return new me(this.color.getHex(),this.density)},me.prototype.toJSON=function(t){return{type:"FogExp2",color:this.color.getHex(),density:this.density}},ge.prototype.isFog=!0,ge.prototype.clone=function(){return new ge(this.color.getHex(),this.near,this.far)},ge.prototype.toJSON=function(t){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}},ve.prototype=Object.assign(Object.create(ct.prototype),{constructor:ve,copy:function(t,e){return ct.prototype.copy.call(this,t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.fog&&(this.fog=t.fog.clone()),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this},toJSON:function(t){var e=ct.prototype.toJSON.call(this,t);return null!==this.background&&(e.object.background=this.background.toJSON(t)),null!==this.fog&&(e.object.fog=this.fog.toJSON()),e}}),ye.prototype=Object.assign(Object.create(ct.prototype),{constructor:ye,isLensFlare:!0,copy:function(t){ct.prototype.copy.call(this,t),this.positionScreen.copy(t.positionScreen),this.customUpdateCallback=t.customUpdateCallback;for(var e=0,n=t.lensFlares.length;e<n;e++)this.lensFlares.push(t.lensFlares[e]);return this},add:function(t,e,n,i,r,o){void 0===e&&(e=-1),void 0===n&&(n=0),void 0===o&&(o=1),void 0===r&&(r=new K(16777215)),void 0===i&&(i=Mo),n=Math.min(n,Math.max(0,n)),this.lensFlares.push({texture:t,// THREE.Texture
size:e,// size in pixels (-1 = use texture.width)
distance:n,// distance (0-1) from light source (0=at light source)
x:0,y:0,z:0,// screen position (-1 => 1) z = 0 is in front z = 1 is back
scale:1,// scale
rotation:0,// rotation
opacity:o,// opacity
color:r,// color
blending:i})},/*
	 * Update lens flares update positions on all flares based on the screen position
	 * Set myLensFlare.customUpdateCallback to alter the flares in your project specific way.
	 */
updateLensFlares:function(){var t,e,n=this.lensFlares.length,i=2*-this.positionScreen.x,r=2*-this.positionScreen.y;for(t=0;t<n;t++)e=this.lensFlares[t],e.x=this.positionScreen.x+i*e.distance,e.y=this.positionScreen.y+r*e.distance,e.wantedRotation=e.x*Math.PI*.25,e.rotation+=.25*(e.wantedRotation-e.rotation)}}),be.prototype=Object.create(J.prototype),be.prototype.constructor=be,be.prototype.isSpriteMaterial=!0,be.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.rotation=t.rotation,this},_e.prototype=Object.assign(Object.create(ct.prototype),{constructor:_e,isSprite:!0,raycast:function(){var t=new c,e=new c,n=new c;return function(i,r){e.setFromMatrixPosition(this.matrixWorld),i.ray.closestPointToPoint(e,t),n.setFromMatrixScale(this.matrixWorld);var o=n.x*n.y/4;if(!(e.distanceToSquared(t)>o)){var a=i.ray.origin.distanceTo(t);a<i.near||a>i.far||r.push({distance:a,point:t.clone(),face:null,object:this})}}}(),clone:function(){return new this.constructor(this.material).copy(this)}}),xe.prototype=Object.assign(Object.create(ct.prototype),{constructor:xe,copy:function(t){ct.prototype.copy.call(this,t,!1);for(var e=t.levels,n=0,i=e.length;n<i;n++){var r=e[n];this.addLevel(r.object.clone(),r.distance)}return this},addLevel:function(t,e){void 0===e&&(e=0),e=Math.abs(e);for(var n=this.levels,i=0;i<n.length&&!(e<n[i].distance);i++);n.splice(i,0,{distance:e,object:t}),this.add(t)},getObjectForDistance:function(t){for(var e=this.levels,n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object},raycast:function(){var t=new c;return function(e,n){t.setFromMatrixPosition(this.matrixWorld);var i=e.ray.origin.distanceTo(t);this.getObjectForDistance(i).raycast(e,n)}}(),update:function(){var t=new c,e=new c;return function(n){var i=this.levels;if(i.length>1){t.setFromMatrixPosition(n.matrixWorld),e.setFromMatrixPosition(this.matrixWorld);var r=t.distanceTo(e);i[0].object.visible=!0;for(var o=1,a=i.length;o<a&&r>=i[o].distance;o++)i[o-1].object.visible=!1,i[o].object.visible=!0;for(;o<a;o++)i[o].object.visible=!1}}}(),toJSON:function(t){var e=ct.prototype.toJSON.call(this,t);e.object.levels=[];for(var n=this.levels,i=0,r=n.length;i<r;i++){var o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance})}return e}}),Object.assign(Ae.prototype,{calculateInverses:function(){this.boneInverses=[];for(var t=0,e=this.bones.length;t<e;t++){var n=new h;this.bones[t]&&n.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(n)}},pose:function(){var t,e,n;
// recover the bind-time world matrices
for(e=0,n=this.bones.length;e<n;e++)(t=this.bones[e])&&t.matrixWorld.getInverse(this.boneInverses[e]);
// compute the local matrices, positions, rotations and scales
for(e=0,n=this.bones.length;e<n;e++)(t=this.bones[e])&&(t.parent&&t.parent.isBone?(t.matrix.getInverse(t.parent.matrixWorld),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))},update:function(){var t=new h,e=new h;return function(){
// flatten bone matrices to array
for(var n=this.bones,i=this.boneInverses,r=this.boneMatrices,o=this.boneTexture,a=0,s=n.length;a<s;a++){
// compute the offset between the current and the original transform
var l=n[a]?n[a].matrixWorld:e;t.multiplyMatrices(l,i[a]),t.toArray(r,16*a)}void 0!==o&&(o.needsUpdate=!0)}}(),clone:function(){return new Ae(this.bones,this.boneInverses)}}),we.prototype=Object.assign(Object.create(ct.prototype),{constructor:we,isBone:!0}),Se.prototype=Object.assign(Object.create(Lt.prototype),{constructor:Se,isSkinnedMesh:!0,initBones:function(){var t,e,n,i,r=[];if(this.geometry&&void 0!==this.geometry.bones){
// first, create array of 'Bone' objects from geometry data
for(n=0,i=this.geometry.bones.length;n<i;n++)e=this.geometry.bones[n],
// create new 'Bone' object
t=new we,r.push(t),
// apply values
t.name=e.name,t.position.fromArray(e.pos),t.quaternion.fromArray(e.rotq),void 0!==e.scl&&t.scale.fromArray(e.scl);
// second, create bone hierarchy
for(n=0,i=this.geometry.bones.length;n<i;n++)e=this.geometry.bones[n],-1!==e.parent&&null!==e.parent&&void 0!==r[e.parent]?
// subsequent bones in the hierarchy
r[e.parent].add(r[n]):
// topmost bone, immediate child of the skinned mesh
this.add(r[n])}
// now the bones are part of the scene graph and children of the skinned mesh.
// let's update the corresponding matrices
return this.updateMatrixWorld(!0),r},bind:function(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){var t,e;if(this.geometry&&this.geometry.isGeometry)for(e=0;e<this.geometry.skinWeights.length;e++){var n=this.geometry.skinWeights[e];t=1/n.lengthManhattan(),t!==1/0?n.multiplyScalar(t):n.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry){var i=new a,r=this.geometry.attributes.skinWeight;for(e=0;e<r.count;e++)i.x=r.getX(e),i.y=r.getY(e),i.z=r.getZ(e),i.w=r.getW(e),t=1/i.lengthManhattan(),t!==1/0?i.multiplyScalar(t):i.set(1,0,0,0),r.setXYZW(e,i.x,i.y,i.z,i.w)}},updateMatrixWorld:function(t){Lt.prototype.updateMatrixWorld.call(this,t),"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode&&this.bindMatrixInverse.getInverse(this.bindMatrix)},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Me.prototype=Object.create(J.prototype),Me.prototype.constructor=Me,Me.prototype.isLineBasicMaterial=!0,Me.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this},Ee.prototype=Object.assign(Object.create(ct.prototype),{constructor:Ee,isLine:!0,raycast:function(){var t=new h,e=new st,n=new nt;return function(i,r){var o=i.linePrecision,a=o*o,s=this.geometry,l=this.matrixWorld;if(
// Checking boundingSphere distance to ray
null===s.boundingSphere&&s.computeBoundingSphere(),n.copy(s.boundingSphere),n.applyMatrix4(l),!1!==i.ray.intersectsSphere(n)){
//
t.getInverse(l),e.copy(i.ray).applyMatrix4(t);var u=new c,h=new c,d=new c,p=new c,f=this&&this.isLineSegments?2:1;if(s.isBufferGeometry){var m=s.index,g=s.attributes,v=g.position.array;if(null!==m)for(var y=m.array,b=0,_=y.length-1;b<_;b+=f){var x=y[b],A=y[b+1];u.fromArray(v,3*x),h.fromArray(v,3*A);var w=e.distanceSqToSegment(u,h,p,d);if(!(w>a)){p.applyMatrix4(this.matrixWorld);//Move back to world space for distance calculation
var S=i.ray.origin.distanceTo(p);S<i.near||S>i.far||r.push({distance:S,
// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else for(var b=0,_=v.length/3-1;b<_;b+=f){u.fromArray(v,3*b),h.fromArray(v,3*b+3);var w=e.distanceSqToSegment(u,h,p,d);if(!(w>a)){p.applyMatrix4(this.matrixWorld);//Move back to world space for distance calculation
var S=i.ray.origin.distanceTo(p);S<i.near||S>i.far||r.push({distance:S,
// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else if(s.isGeometry)for(var M=s.vertices,E=M.length,b=0;b<E-1;b+=f){var w=e.distanceSqToSegment(M[b],M[b+1],p,d);if(!(w>a)){p.applyMatrix4(this.matrixWorld);//Move back to world space for distance calculation
var S=i.ray.origin.distanceTo(p);S<i.near||S>i.far||r.push({distance:S,
// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Te.prototype=Object.assign(Object.create(Ee.prototype),{constructor:Te,isLineSegments:!0}),Ce.prototype=Object.assign(Object.create(Ee.prototype),{constructor:Ce,isLineLoop:!0}),Pe.prototype=Object.create(J.prototype),Pe.prototype.constructor=Pe,Pe.prototype.isPointsMaterial=!0,Pe.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this},Le.prototype=Object.assign(Object.create(ct.prototype),{constructor:Le,isPoints:!0,raycast:function(){var t=new h,e=new st,n=new nt;return function(i,r){function o(t,n){var o=e.distanceSqToPoint(t);if(o<d){var s=e.closestPointToPoint(t);s.applyMatrix4(l);var u=i.ray.origin.distanceTo(s);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:s.clone(),index:n,face:null,object:a})}}var a=this,s=this.geometry,l=this.matrixWorld,u=i.params.Points.threshold;if(
// Checking boundingSphere distance to ray
null===s.boundingSphere&&s.computeBoundingSphere(),n.copy(s.boundingSphere),n.applyMatrix4(l),n.radius+=u,!1!==i.ray.intersectsSphere(n)){
//
t.getInverse(l),e.copy(i.ray).applyMatrix4(t);var h=u/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=new c;if(s.isBufferGeometry){var f=s.index,m=s.attributes,g=m.position.array;if(null!==f)for(var v=f.array,y=0,b=v.length;y<b;y++){var _=v[y];p.fromArray(g,3*_),o(p,_)}else for(var y=0,x=g.length/3;y<x;y++)p.fromArray(g,3*y),o(p,y)}else for(var A=s.vertices,y=0,x=A.length;y<x;y++)o(A[y],y)}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Ne.prototype=Object.assign(Object.create(ct.prototype),{constructor:Ne}),Ie.prototype=Object.create(o.prototype),Ie.prototype.constructor=Ie,Oe.prototype=Object.create(o.prototype),Oe.prototype.constructor=Oe,Oe.prototype.isCompressedTexture=!0,Re.prototype=Object.create(o.prototype),Re.prototype.constructor=Re,De.prototype=Object.create(o.prototype),De.prototype.constructor=De,De.prototype.isDepthTexture=!0,Be.prototype=Object.create(Pt.prototype),Be.prototype.constructor=Be,je.prototype=Object.create(Ct.prototype),je.prototype.constructor=je,Ue.prototype=Object.create(Pt.prototype),Ue.prototype.constructor=Ue,ke.prototype=Object.create(Ct.prototype),ke.prototype.constructor=ke,Ve.prototype=Object.create(Pt.prototype),Ve.prototype.constructor=Ve,Ge.prototype=Object.create(Ct.prototype),Ge.prototype.constructor=Ge,Fe.prototype=Object.create(Ve.prototype),Fe.prototype.constructor=Fe,ze.prototype=Object.create(Ct.prototype),ze.prototype.constructor=ze,He.prototype=Object.create(Ve.prototype),He.prototype.constructor=He,Xe.prototype=Object.create(Ct.prototype),Xe.prototype.constructor=Xe,We.prototype=Object.create(Ve.prototype),We.prototype.constructor=We,Ye.prototype=Object.create(Ct.prototype),Ye.prototype.constructor=Ye,Ke.prototype=Object.create(Ve.prototype),Ke.prototype.constructor=Ke,Ze.prototype=Object.create(Ct.prototype),Ze.prototype.constructor=Ze,qe.prototype=Object.create(Pt.prototype),qe.prototype.constructor=qe,Qe.prototype=Object.create(Ct.prototype),Qe.prototype.constructor=Qe,Je.prototype=Object.create(Pt.prototype),Je.prototype.constructor=Je,$e.prototype=Object.create(Ct.prototype),$e.prototype.constructor=$e,tn.prototype=Object.create(Pt.prototype),tn.prototype.constructor=tn;/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */
var Vs={
// calculate area of the contour polygon
area:function(t){for(var e=t.length,n=0,i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return.5*n},triangulate:function(){/**
		 * This code is a quick port of code written in C++ which was submitted to
		 * flipcode.com by John W. Ratcliff  // July 22, 2000
		 * See original code and more information here:
		 * http://www.flipcode.com/archives/Efficient_Polygon_Triangulation.shtml
		 *
		 * ported to actionscript by Zevan Rosser
		 * www.actionsnippet.com
		 *
		 * ported to javascript by Joshua Koo
		 * http://www.lab4games.net/zz85/blog
		 *
		 */
function t(t,e,n,i,r,o){var a,s,l,u,c,h,d,p,f;if(s=t[o[e]].x,l=t[o[e]].y,u=t[o[n]].x,c=t[o[n]].y,h=t[o[i]].x,d=t[o[i]].y,(u-s)*(d-l)-(c-l)*(h-s)<=0)return!1;var m,g,v,y,b,_,x,A,w,S,M,E,T,C,P;for(m=h-u,g=d-c,v=s-h,y=l-d,b=u-s,_=c-l,a=0;a<r;a++)if(p=t[o[a]].x,f=t[o[a]].y,!(p===s&&f===l||p===u&&f===c||p===h&&f===d)&&(x=p-s,A=f-l,w=p-u,S=f-c,M=p-h,E=f-d,
// see if p is inside triangle abc
P=m*S-g*w,T=b*A-_*x,C=v*E-y*M,P>=-Number.EPSILON&&C>=-Number.EPSILON&&T>=-Number.EPSILON))return!1;return!0}
// takes in an contour array and returns
return function(e,n){var i=e.length;if(i<3)return null;var r,o,a,s=[],l=[],u=[];if(Vs.area(e)>0)for(o=0;o<i;o++)l[o]=o;else for(o=0;o<i;o++)l[o]=i-1-o;var c=i,h=2*c;/* error detection */
for(o=c-1;c>2;){/* if we loop, it is probably a non-simple polygon */
if(h--<=0)return n?u:s;/* next     */
if(/* three consecutive vertices in current polygon, <u,v,w> */
r=o,c<=r&&(r=0),/* previous */
o=r+1,c<=o&&(o=0),/* new v    */
a=o+1,c<=a&&(a=0),t(e,r,o,a,c,l)){var d,p,f,m,g;/* remove v from the remaining polygon */
for(/* true names of the vertices */
d=l[r],p=l[o],f=l[a],/* output Triangle */
s.push([e[d],e[p],e[f]]),u.push([l[r],l[o],l[a]]),m=o,g=o+1;g<c;m++,g++)l[m]=l[g];c--,/* reset error detection counter */
h=2*c}}return n?u:s}}(),triangulateShape:function(t,e){function n(t){var e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function i(t,e,n){
// inOtherPt needs to be collinear to the inSegment
// inOtherPt needs to be collinear to the inSegment
return t.x!==e.x?t.x<e.x?t.x<=n.x&&n.x<=e.x:e.x<=n.x&&n.x<=t.x:t.y<e.y?t.y<=n.y&&n.y<=e.y:e.y<=n.y&&n.y<=t.y}function r(t,e,n,r,o){var a=e.x-t.x,s=e.y-t.y,l=r.x-n.x,u=r.y-n.y,c=t.x-n.x,h=t.y-n.y,d=s*l-a*u,p=s*c-a*h;if(Math.abs(d)>Number.EPSILON){
// not parallel
var f;if(d>0){if(p<0||p>d)return[];if((f=u*c-l*h)<0||f>d)return[]}else{if(p>0||p<d)return[];if((f=u*c-l*h)>0||f<d)return[]}
// i.e. to reduce rounding errors
// intersection at endpoint of segment#1?
if(0===f)return!o||0!==p&&p!==d?[t]:[];if(f===d)return!o||0!==p&&p!==d?[e]:[];
// intersection at endpoint of segment#2?
if(0===p)return[n];if(p===d)return[r];
// return real intersection point
var m=f/d;return[{x:t.x+m*a,y:t.y+m*s}]}
// parallel or collinear
if(0!==p||u*c!=l*h)return[];
// they are collinear or degenerate
var g=0===a&&0===s,v=0===l&&0===u;// segment2 is just a point?
// both segments are points
if(g&&v)return t.x!==n.x||t.y!==n.y?[]:[t];
// segment#1  is a single point
if(g)return i(n,r,t)?[t]:[];
// segment#2  is a single point
if(v)return i(t,e,n)?[n]:[];
// they are collinear segments, which might overlap
var y,b,_,x,A,w,S,M;
// the segments are NOT on a vertical line
// the segments are on a vertical line
return 0!==a?(t.x<e.x?(y=t,_=t.x,b=e,x=e.x):(y=e,_=e.x,b=t,x=t.x),n.x<r.x?(A=n,S=n.x,w=r,M=r.x):(A=r,S=r.x,w=n,M=n.x)):(t.y<e.y?(y=t,_=t.y,b=e,x=e.y):(y=e,_=e.y,b=t,x=t.y),n.y<r.y?(A=n,S=n.y,w=r,M=r.y):(A=r,S=r.y,w=n,M=n.y)),_<=S?x<S?[]:x===S?o?[]:[A]:x<=M?[A,b]:[A,w]:_>M?[]:_===M?o?[]:[y]:x<=M?[y,b]:[y,w]}function o(t,e,n,i){
// The order of legs is important
// translation of all points, so that Vertex is at (0,0)
var r=e.x-t.x,o=e.y-t.y,a=n.x-t.x,s=n.y-t.y,l=i.x-t.x,u=i.y-t.y,c=r*s-o*a,h=r*u-o*l;if(Math.abs(c)>Number.EPSILON){
// angle != 180 deg.
var d=l*s-u*a;
// console.log( "from2to: " + from2toAngle + ", from2other: " + from2otherAngle + ", other2to: " + other2toAngle );
// console.log( "from2to: " + from2toAngle + ", from2other: " + from2otherAngle + ", other2to: " + other2toAngle );
return c>0?h>=0&&d>=0:h>=0||d>=0}
// angle == 180 deg.
// console.log( "from2to: 180 deg., from2other: " + from2otherAngle  );
return h>0}n(t),e.forEach(n);for(var a,s,l,u,c,h,d={},p=t.concat(),f=0,m=e.length;f<m;f++)Array.prototype.push.apply(p,e[f]);
//console.log( "allpoints",allpoints, allpoints.length );
// prepare all points map
for(a=0,s=p.length;a<s;a++)c=p[a].x+":"+p[a].y,d[c],d[c]=a;
// remove holes by cutting paths to holes and adding them to the shape
var g=function(t,e){for(var n,i,a,s,l,u,c,h,d,p,f,m=t.concat(),g=[],v=[],y=0,b=e.length;y<b;y++)g.push(y);for(var _=0,x=2*g.length;g.length>0&&!(--x<0);)
// search for shape-vertex and hole-vertex,
// which can be connected without intersections
for(a=_;a<m.length;a++){s=m[a],i=-1;
// search for hole which can be reached without intersections
for(var y=0;y<g.length;y++)if(u=g[y],
// prevent multiple checks
c=s.x+":"+s.y+":"+u,void 0===v[c]){n=e[u];for(var A=0;A<n.length;A++)if(l=n[A],function(t,e){
// Check if hole point lies within angle around shape point
var i=m.length-1,r=t-1;r<0&&(r=i);var a=t+1;a>i&&(a=0);var s=o(m[t],m[r],m[a],n[e]);if(!s)
// console.log( "Vertex (Shape): " + inShapeIdx + ", Point: " + hole[inHoleIdx].x + "/" + hole[inHoleIdx].y );
return!1;
// Check if shape point lies within angle around hole point
var l=n.length-1,u=e-1;u<0&&(u=l);var c=e+1;return c>l&&(c=0),!!(s=o(n[e],n[u],n[c],m[t]))}(a,A)&&!function(t,e){
// checks for intersections with shape edges
var n,i,o;for(n=0;n<m.length;n++)if(i=n+1,i%=m.length,o=r(t,e,m[n],m[i],!0),o.length>0)return!0;return!1}(s,l)&&!function(t,n){
// checks for intersections with hole edges
var i,o,a,s,l;for(i=0;i<g.length;i++)for(o=e[g[i]],a=0;a<o.length;a++)if(s=a+1,s%=o.length,l=r(t,n,o[a],o[s],!0),l.length>0)return!0;return!1}(s,l)){i=A,g.splice(y,1),h=m.slice(0,a+1),d=m.slice(a),p=n.slice(i),f=n.slice(0,i+1),m=h.concat(p).concat(f).concat(d),_=a;
// Debug only, to show the selected cuts
// glob_CutLines.push( [ shapePt, holePt ] );
break}if(i>=0)break;// hole-vertex found
v[c]=!0}if(i>=0)break}return m}(t,e),v=Vs.triangulate(g,!1);// True returns indices for points of spooled shape
//console.log( "triangles",triangles, triangles.length );
// check all face vertices against all points map
for(a=0,s=v.length;a<s;a++)for(u=v[a],l=0;l<3;l++)c=u[l].x+":"+u[l].y,void 0!==(h=d[c])&&(u[l]=h);return v.concat()},isClockWise:function(t){return Vs.area(t)<0}};en.prototype=Object.create(Ct.prototype),en.prototype.constructor=en,nn.prototype=Object.create(Pt.prototype),nn.prototype.constructor=nn,nn.prototype.getArrays=function(){var t=this.getAttribute("position"),e=t?Array.prototype.slice.call(t.array):[],n=this.getAttribute("uv"),i=n?Array.prototype.slice.call(n.array):[],r=this.index;return{position:e,uv:i,index:r?Array.prototype.slice.call(r.array):[]}},nn.prototype.addShapeList=function(t,e){var n=t.length;e.arrays=this.getArrays();for(var i=0;i<n;i++){var r=t[i];this.addShape(r,e)}this.setIndex(e.arrays.index),this.addAttribute("position",new wt(e.arrays.position,3)),this.addAttribute("uv",new wt(e.arrays.uv,2))},nn.prototype.addShape=function(t,e){function n(t,e,n){return e.clone().multiplyScalar(n).add(t)}
// Find directions for point movement
function i(t,e,n){
// computes for inPt the corresponding point inPt' on a new contour
//   shifted by 1 unit (length of normalized vector) to the left
// if we walk along contour clockwise, this new contour is outside the old one
//
// inPt' is the intersection of the two lines parallel to the two
//  adjacent edges of inPt at a distance of 1 unit on the left side.
var i,o,a=1,s=t.x-e.x,l=t.y-e.y,u=n.x-t.x,c=n.y-t.y,h=s*s+l*l,d=s*c-l*u;if(Math.abs(d)>Number.EPSILON){
// not collinear
// length of vectors for normalizing
var p=Math.sqrt(h),f=Math.sqrt(u*u+c*c),m=e.x-l/p,g=e.y+s/p,v=n.x-c/f,y=n.y+u/f,b=((v-m)*c-(y-g)*u)/(s*c-l*u);
// vector from inPt to intersection point
i=m+s*b-t.x,o=g+l*b-t.y;
// Don't normalize!, otherwise sharp corners become ugly
//  but prevent crazy spikes
var _=i*i+o*o;if(_<=2)return new r(i,o);a=Math.sqrt(_/2)}else{
// handle special case of collinear edges
var x=!1;// assumes: opposite
s>Number.EPSILON?u>Number.EPSILON&&(x=!0):s<-Number.EPSILON?u<-Number.EPSILON&&(x=!0):Math.sign(l)===Math.sign(c)&&(x=!0),x?(
// console.log("Warning: lines are a straight sequence");
i=-l,o=s,a=Math.sqrt(h)):(
// console.log("Warning: lines are a straight spike");
i=s,o=l,a=Math.sqrt(h/2))}return new r(i/a,o/a)}function o(t,e){var n,i;for(Q=t.length;--Q>=0;){n=Q,i=Q-1,i<0&&(i=t.length-1);
//console.log('b', i,j, i-1, k,vertices.length);
var r=0,o=C+2*M;for(r=0;r<o;r++){var a=K*r,s=K*(r+1);l(e+n+a,e+i+a,e+i+s,e+n+s,t,r,o,n,i)}}}function a(t,e,n){x.push(t),x.push(e),x.push(n)}function s(t,e,n){u(t),u(e),u(n);var i=y.length/3,r=N.generateTopUV(D,y,i-3,i-2,i-1);h(r[0]),h(r[1]),h(r[2])}function l(t,e,n,i,r,o,a,s,l){u(t),u(e),u(i),u(e),u(n),u(i);var c=y.length/3,d=N.generateSideWallUV(D,y,c-6,c-3,c-2,c-1);h(d[0]),h(d[1]),h(d[3]),h(d[1]),h(d[2]),h(d[3])}function u(t){b.push(y.length/3),y.push(x[3*t+0]),y.push(x[3*t+1]),y.push(x[3*t+2])}function h(t){_.push(t.x),_.push(t.y)}var d,p,f,m,g,v=e.arrays?e.arrays:this.getArrays(),y=v.position,b=v.index,_=v.uv,x=[],A=void 0!==e.amount?e.amount:100,w=void 0!==e.bevelThickness?e.bevelThickness:6,S=void 0!==e.bevelSize?e.bevelSize:w-2,M=void 0!==e.bevelSegments?e.bevelSegments:3,E=void 0===e.bevelEnabled||e.bevelEnabled,T=void 0!==e.curveSegments?e.curveSegments:12,C=void 0!==e.steps?e.steps:1,P=e.extrudePath,L=!1,N=void 0!==e.UVGenerator?e.UVGenerator:en.WorldUVGenerator;P&&(d=P.getSpacedPoints(C),L=!0,E=!1,// bevels not supported for path extrusion
// SETUP TNB variables
// TODO1 - have a .isClosed in spline?
p=void 0!==e.frames?e.frames:P.computeFrenetFrames(C,!1),
// console.log(splineTube, 'splineTube', splineTube.normals.length, 'steps', steps, 'extrudePts', extrudePts.length);
f=new c,m=new c,g=new c),
// Safeguards if bevels are not enabled
E||(M=0,w=0,S=0);
// Variables initialization
var I,O,R,D=this,B=t.extractPoints(T),j=B.shape,U=B.holes,k=!Vs.isClockWise(j);if(k){
// Maybe we should also check if holes are in the opposite direction, just to be safe ...
for(j=j.reverse(),O=0,R=U.length;O<R;O++)I=U[O],Vs.isClockWise(I)&&(U[O]=I.reverse());k=!1}var V=Vs.triangulateShape(j,U),G=j;// vertices has all points but contour has only points of circumference
for(O=0,R=U.length;O<R;O++)I=U[O],j=j.concat(I);for(var F,z,H,X,W,Y,K=j.length,Z=V.length,q=[],Q=0,J=G.length,$=J-1,tt=Q+1;Q<J;Q++,$++,tt++)$===J&&($=0),tt===J&&(tt=0),
//  (j)---(i)---(k)
// console.log('i,j,k', i, j , k)
q[Q]=i(G[Q],G[$],G[tt]);var et,nt=[],it=q.concat();for(O=0,R=U.length;O<R;O++){for(I=U[O],et=[],Q=0,J=I.length,$=J-1,tt=Q+1;Q<J;Q++,$++,tt++)$===J&&($=0),tt===J&&(tt=0),
//  (j)---(i)---(k)
et[Q]=i(I[Q],I[$],I[tt]);nt.push(et),it=it.concat(et)}
// Loop bevelSegments, 1 for the front, 1 for the back
for(F=0;F<M;F++){
// contract shape
for(
//for ( b = bevelSegments; b > 0; b -- ) {
H=F/M,X=w*Math.cos(H*Math.PI/2),z=S*Math.sin(H*Math.PI/2),Q=0,J=G.length;Q<J;Q++)W=n(G[Q],q[Q],z),a(W.x,W.y,-X);
// expand holes
for(O=0,R=U.length;O<R;O++)for(I=U[O],et=nt[O],Q=0,J=I.length;Q<J;Q++)W=n(I[Q],et[Q],z),a(W.x,W.y,-X)}
// Back facing vertices
for(z=S,Q=0;Q<K;Q++)W=E?n(j[Q],it[Q],z):j[Q],L?(
// v( vert.x, vert.y + extrudePts[ 0 ].y, extrudePts[ 0 ].x );
m.copy(p.normals[0]).multiplyScalar(W.x),f.copy(p.binormals[0]).multiplyScalar(W.y),g.copy(d[0]).add(m).add(f),a(g.x,g.y,g.z)):a(W.x,W.y,0);
// Add stepped vertices...
// Including front facing vertices
var rt;for(rt=1;rt<=C;rt++)for(Q=0;Q<K;Q++)W=E?n(j[Q],it[Q],z):j[Q],L?(
// v( vert.x, vert.y + extrudePts[ s - 1 ].y, extrudePts[ s - 1 ].x );
m.copy(p.normals[rt]).multiplyScalar(W.x),f.copy(p.binormals[rt]).multiplyScalar(W.y),g.copy(d[rt]).add(m).add(f),a(g.x,g.y,g.z)):a(W.x,W.y,A/C*rt);
// Add bevel segments planes
//for ( b = 1; b <= bevelSegments; b ++ ) {
for(F=M-1;F>=0;F--){
// contract shape
for(H=F/M,X=w*Math.cos(H*Math.PI/2),z=S*Math.sin(H*Math.PI/2),Q=0,J=G.length;Q<J;Q++)W=n(G[Q],q[Q],z),a(W.x,W.y,A+X);
// expand holes
for(O=0,R=U.length;O<R;O++)for(I=U[O],et=nt[O],Q=0,J=I.length;Q<J;Q++)W=n(I[Q],et[Q],z),L?a(W.x,W.y+d[C-1].y,d[C-1].x+X):a(W.x,W.y,A+X)}/* Faces */
// Top and bottom faces
!
/////  Internal functions
function(){var t=y.length/3;if(E){var n=0,i=K*n;
// Bottom faces
for(Q=0;Q<Z;Q++)Y=V[Q],s(Y[2]+i,Y[1]+i,Y[0]+i);
// Top faces
for(n=C+2*M,i=K*n,Q=0;Q<Z;Q++)Y=V[Q],s(Y[0]+i,Y[1]+i,Y[2]+i)}else{
// Bottom faces
for(Q=0;Q<Z;Q++)Y=V[Q],s(Y[2],Y[1],Y[0]);
// Top faces
for(Q=0;Q<Z;Q++)Y=V[Q],s(Y[0]+K*C,Y[1]+K*C,Y[2]+K*C)}D.addGroup(t,y.length/3-t,void 0!==e.material?e.material:0)}(),
// Sides faces
// Create faces for the z-sides of the shape
function(){var t=y.length/3,n=0;for(o(G,n),n+=G.length,O=0,R=U.length;O<R;O++)I=U[O],o(I,n),
//, true
n+=I.length;D.addGroup(t,y.length/3-t,void 0!==e.extrudeMaterial?e.extrudeMaterial:1)}(),e.arrays||(this.setIndex(b),this.addAttribute("position",new wt(y,3)),this.addAttribute("uv",new wt(e.arrays.uv,2)))},en.WorldUVGenerator={generateTopUV:function(t,e,n,i,o){var a=e[3*n],s=e[3*n+1],l=e[3*i],u=e[3*i+1],c=e[3*o],h=e[3*o+1];return[new r(a,s),new r(l,u),new r(c,h)]},generateSideWallUV:function(t,e,n,i,o,a){var s=e[3*n],l=e[3*n+1],u=e[3*n+2],c=e[3*i],h=e[3*i+1],d=e[3*i+2],p=e[3*o],f=e[3*o+1],m=e[3*o+2],g=e[3*a],v=e[3*a+1],y=e[3*a+2];return Math.abs(l-h)<.01?[new r(s,1-u),new r(c,1-d),new r(p,1-m),new r(g,1-y)]:[new r(l,1-u),new r(h,1-d),new r(f,1-m),new r(v,1-y)]}},rn.prototype=Object.create(Ct.prototype),rn.prototype.constructor=rn,on.prototype=Object.create(nn.prototype),on.prototype.constructor=on,an.prototype=Object.create(Ct.prototype),an.prototype.constructor=an,sn.prototype=Object.create(Pt.prototype),sn.prototype.constructor=sn,ln.prototype=Object.create(Ct.prototype),ln.prototype.constructor=ln,un.prototype=Object.create(Pt.prototype),un.prototype.constructor=un,cn.prototype=Object.create(Ct.prototype),cn.prototype.constructor=cn,hn.prototype=Object.create(Pt.prototype),hn.prototype.constructor=hn,dn.prototype=Object.create(Ct.prototype),dn.prototype.constructor=dn,pn.prototype=Object.create(Pt.prototype),pn.prototype.constructor=pn,fn.prototype=Object.create(Pt.prototype),fn.prototype.constructor=fn,mn.prototype=Object.create(Ct.prototype),mn.prototype.constructor=mn,gn.prototype=Object.create(Pt.prototype),gn.prototype.constructor=gn,vn.prototype=Object.create(mn.prototype),vn.prototype.constructor=vn,yn.prototype=Object.create(gn.prototype),yn.prototype.constructor=yn,bn.prototype=Object.create(Ct.prototype),bn.prototype.constructor=bn,_n.prototype=Object.create(Pt.prototype),_n.prototype.constructor=_n;var Gs=Object.freeze({WireframeGeometry:Be,ParametricGeometry:je,ParametricBufferGeometry:Ue,TetrahedronGeometry:Ge,TetrahedronBufferGeometry:Fe,OctahedronGeometry:ze,OctahedronBufferGeometry:He,IcosahedronGeometry:Xe,IcosahedronBufferGeometry:We,DodecahedronGeometry:Ye,DodecahedronBufferGeometry:Ke,PolyhedronGeometry:ke,PolyhedronBufferGeometry:Ve,TubeGeometry:Ze,TubeBufferGeometry:qe,TorusKnotGeometry:Qe,TorusKnotBufferGeometry:Je,TorusGeometry:$e,TorusBufferGeometry:tn,TextGeometry:rn,TextBufferGeometry:on,SphereGeometry:an,SphereBufferGeometry:sn,RingGeometry:ln,RingBufferGeometry:un,PlaneGeometry:Ot,PlaneBufferGeometry:Rt,LatheGeometry:cn,LatheBufferGeometry:hn,ShapeGeometry:dn,ShapeBufferGeometry:pn,ExtrudeGeometry:en,ExtrudeBufferGeometry:nn,EdgesGeometry:fn,ConeGeometry:vn,ConeBufferGeometry:yn,CylinderGeometry:mn,CylinderBufferGeometry:gn,CircleGeometry:bn,CircleBufferGeometry:_n,BoxGeometry:Nt,BoxBufferGeometry:It});xn.prototype=Object.create($.prototype),xn.prototype.constructor=xn,xn.prototype.isShadowMaterial=!0,An.prototype=Object.create($.prototype),An.prototype.constructor=An,An.prototype.isRawShaderMaterial=!0,wn.prototype=Object.create(J.prototype),wn.prototype.constructor=wn,wn.prototype.isMeshStandardMaterial=!0,wn.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},Sn.prototype=Object.create(wn.prototype),Sn.prototype.constructor=Sn,Sn.prototype.isMeshPhysicalMaterial=!0,Sn.prototype.copy=function(t){return wn.prototype.copy.call(this,t),this.defines={PHYSICAL:""},this.reflectivity=t.reflectivity,this.clearCoat=t.clearCoat,this.clearCoatRoughness=t.clearCoatRoughness,this},Mn.prototype=Object.create(J.prototype),Mn.prototype.constructor=Mn,Mn.prototype.isMeshPhongMaterial=!0,Mn.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},En.prototype=Object.create(Mn.prototype),En.prototype.constructor=En,En.prototype.isMeshToonMaterial=!0,En.prototype.copy=function(t){return Mn.prototype.copy.call(this,t),this.gradientMap=t.gradientMap,this},Tn.prototype=Object.create(J.prototype),Tn.prototype.constructor=Tn,Tn.prototype.isMeshNormalMaterial=!0,Tn.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},Cn.prototype=Object.create(J.prototype),Cn.prototype.constructor=Cn,Cn.prototype.isMeshLambertMaterial=!0,Cn.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},Pn.prototype=Object.create(J.prototype),Pn.prototype.constructor=Pn,Pn.prototype.isLineDashedMaterial=!0,Pn.prototype.copy=function(t){return J.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Fs=Object.freeze({ShadowMaterial:xn,SpriteMaterial:be,RawShaderMaterial:An,ShaderMaterial:$,PointsMaterial:Pe,MeshPhysicalMaterial:Sn,MeshStandardMaterial:wn,MeshPhongMaterial:Mn,MeshToonMaterial:En,MeshNormalMaterial:Tn,MeshLambertMaterial:Cn,MeshDepthMaterial:tt,MeshBasicMaterial:ft,LineDashedMaterial:Pn,LineBasicMaterial:Me,Material:J}),zs={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(
// console.log( 'THREE.Cache', 'Adding key:', key );
this.files[t]=e)},get:function(t){if(!1!==this.enabled)
// console.log( 'THREE.Cache', 'Checking key:', key );
return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},Hs=new Ln;Object.assign(Nn.prototype,{load:function(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t);var r=this,o=zs.get(t);if(void 0!==o)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;
// Check for data: URI
var a=t.match(/^data:(.*?)(;base64)?,(.*)$/);
// Safari can not handle Data URIs through XMLHttpRequest so process manually
if(a){var s=a[1],l=!!a[2],u=a[3];u=window.decodeURIComponent(u),l&&(u=window.atob(u));try{var c,h=(this.responseType||"").toLowerCase();switch(h){case"arraybuffer":case"blob":c=new ArrayBuffer(u.length);for(var d=new Uint8Array(c),p=0;p<u.length;p++)d[p]=u.charCodeAt(p);"blob"===h&&(c=new Blob([c],{type:s}));break;case"document":var f=new DOMParser;c=f.parseFromString(u,s);break;case"json":c=JSON.parse(u);break;default:// 'text' or other
c=u}
// Wait for next browser tick
window.setTimeout(function(){e&&e(c),r.manager.itemEnd(t)},0)}catch(e){
// Wait for next browser tick
window.setTimeout(function(){i&&i(e),r.manager.itemEnd(t),r.manager.itemError(t)},0)}}else{var m=new XMLHttpRequest;m.open("GET",t,!0),m.addEventListener("load",function(n){var o=n.target.response;zs.add(t,o),200===this.status?(e&&e(o),r.manager.itemEnd(t)):0===this.status?(e&&e(o),r.manager.itemEnd(t)):(i&&i(n),r.manager.itemEnd(t),r.manager.itemError(t))},!1),void 0!==n&&m.addEventListener("progress",function(t){n(t)},!1),m.addEventListener("error",function(e){i&&i(e),r.manager.itemEnd(t),r.manager.itemError(t)},!1),void 0!==this.responseType&&(m.responseType=this.responseType),void 0!==this.withCredentials&&(m.withCredentials=this.withCredentials),m.overrideMimeType&&m.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(var g in this.requestHeader)m.setRequestHeader(g,this.requestHeader[g]);m.send(null)}return r.manager.itemStart(t),m},setPath:function(t){return this.path=t,this},setResponseType:function(t){return this.responseType=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setMimeType:function(t){return this.mimeType=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}}),Object.assign(In.prototype,{load:function(t,e,n,i){var r=this,o=[],a=new Oe;a.image=o;var s=new Nn(this.manager);if(s.setPath(this.path),s.setResponseType("arraybuffer"),Array.isArray(t))for(var l=0,u=0,c=t.length;u<c;++u)!function(u){s.load(t[u],function(t){var n=r._parser(t,!0);o[u]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},6===(l+=1)&&(1===n.mipmapCount&&(a.minFilter=Aa),a.format=n.format,a.needsUpdate=!0,e&&e(a))},n,i)}(u);else
// compressed cubemap texture stored in a single DDS file
s.load(t,function(t){var n=r._parser(t,!0);if(n.isCubemap)for(var i=n.mipmaps.length/n.mipmapCount,s=0;s<i;s++){o[s]={mipmaps:[]};for(var l=0;l<n.mipmapCount;l++)o[s].mipmaps.push(n.mipmaps[s*n.mipmapCount+l]),o[s].format=n.format,o[s].width=n.width,o[s].height=n.height}else a.image.width=n.width,a.image.height=n.height,a.mipmaps=n.mipmaps;1===n.mipmapCount&&(a.minFilter=Aa),a.format=n.format,a.needsUpdate=!0,e&&e(a)},n,i);return a},setPath:function(t){return this.path=t,this}}),Object.assign(On.prototype,{load:function(t,e,n,i){var r=this,o=new d,a=new Nn(this.manager);return a.setResponseType("arraybuffer"),a.load(t,function(t){var n=r._parser(t);n&&(void 0!==n.image?o.image=n.image:void 0!==n.data&&(o.image.width=n.width,o.image.height=n.height,o.image.data=n.data),o.wrapS=void 0!==n.wrapS?n.wrapS:va,o.wrapT=void 0!==n.wrapT?n.wrapT:va,o.magFilter=void 0!==n.magFilter?n.magFilter:Aa,o.minFilter=void 0!==n.minFilter?n.minFilter:Sa,o.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.format&&(o.format=n.format),void 0!==n.type&&(o.type=n.type),void 0!==n.mipmaps&&(o.mipmaps=n.mipmaps),1===n.mipmapCount&&(o.minFilter=Aa),o.needsUpdate=!0,e&&e(o,n))},n,i),o}}),Object.assign(Rn.prototype,{load:function(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t);var r=this,o=zs.get(t);if(void 0!==o)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;var a=document.createElementNS("http://www.w3.org/1999/xhtml","img");/*
		image.addEventListener( 'progress', function ( event ) {

			if ( onProgress ) onProgress( event );

		}, false );
		*/
return a.addEventListener("load",function(){zs.add(t,this),e&&e(this),r.manager.itemEnd(t)},!1),a.addEventListener("error",function(e){i&&i(e),r.manager.itemEnd(t),r.manager.itemError(t)},!1),"data:"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),Object.assign(Dn.prototype,{load:function(t,e,n,i){var r=new p,o=new Rn(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);for(var a=0,s=0;s<t.length;++s)!function(n){o.load(t[n],function(t){r.images[n]=t,6==++a&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}(s);return r},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),Object.assign(Bn.prototype,{load:function(t,e,n,i){var r=new Rn(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);var a=new o;return a.image=r.load(t,function(){
// JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
var n=t.search(/\.(jpg|jpeg)$/)>0||0===t.search(/^data\:image\/jpeg/);a.format=n?Ua:ka,a.needsUpdate=!0,void 0!==e&&e(a)},n,i),a},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),jn.prototype=Object.assign(Object.create(ct.prototype),{constructor:jn,isLight:!0,copy:function(t){return ct.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){var e=ct.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}),Un.prototype=Object.assign(Object.create(jn.prototype),{constructor:Un,isHemisphereLight:!0,copy:function(t){return jn.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}),Object.assign(kn.prototype,{copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var t={};return 0!==this.bias&&(t.bias=this.bias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}),Vn.prototype=Object.assign(Object.create(kn.prototype),{constructor:Vn,isSpotLightShadow:!0,update:function(t){var e=this.camera,n=2*As.RAD2DEG*t.angle,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix())}}),Gn.prototype=Object.assign(Object.create(jn.prototype),{constructor:Gn,isSpotLight:!0,copy:function(t){return jn.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),Fn.prototype=Object.assign(Object.create(jn.prototype),{constructor:Fn,isPointLight:!0,copy:function(t){return jn.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}),zn.prototype=Object.assign(Object.create(kn.prototype),{constructor:zn}),Hn.prototype=Object.assign(Object.create(jn.prototype),{constructor:Hn,isDirectionalLight:!0,copy:function(t){return jn.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),Xn.prototype=Object.assign(Object.create(jn.prototype),{constructor:Xn,isAmbientLight:!0}),
// TODO (abelnation): RectAreaLight update when light shape is changed
Wn.prototype=Object.assign(Object.create(jn.prototype),{constructor:Wn,isRectAreaLight:!0,copy:function(t){return jn.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){var e=jn.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});/**
 * @author tschw
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 */
var Xs={
// same as Array.prototype.slice, but also works on typed arrays
arraySlice:function(t,e,n){return Xs.isTypedArray(t)?new t.constructor(t.subarray(e,void 0!==n?n:t.length)):t.slice(e,n)},
// converts an array to a specific type
convertArray:function(t,e,n){// let 'undefined' and 'null' pass
return!t||!n&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},
// returns an array by which times and values can be sorted
getKeyframeOrder:function(t){function e(e,n){return t[e]-t[n]}for(var n=t.length,i=new Array(n),r=0;r!==n;++r)i[r]=r;return i.sort(e),i},
// uses the array previously returned by 'getKeyframeOrder' to sort data
sortedArray:function(t,e,n){for(var i=t.length,r=new t.constructor(i),o=0,a=0;a!==i;++o)for(var s=n[o]*e,l=0;l!==e;++l)r[a++]=t[s+l];return r},
// function for parsing AOS keyframe formats
flattenJSON:function(t,e,n,i){for(var r=1,o=t[0];void 0!==o&&void 0===o[i];)o=t[r++];if(void 0!==o){// no data
var a=o[i];if(void 0!==a)// no data
if(Array.isArray(a))do{a=o[i],void 0!==a&&(e.push(o.time),n.push.apply(n,a)),o=t[r++]}while(void 0!==o);else if(void 0!==a.toArray)
// ...assume THREE.Math-ish
do{a=o[i],void 0!==a&&(e.push(o.time),a.toArray(n,n.length)),o=t[r++]}while(void 0!==o);else
// otherwise push as-is
do{a=o[i],void 0!==a&&(e.push(o.time),n.push(a)),o=t[r++]}while(void 0!==o)}}};Object.assign(Yn.prototype,{evaluate:function(t){var e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{var o;n:{
//- See http://jsperf.com/comparison-to-undefined/3
//- slower code:
//-
//- 				if ( t >= t1 || t1 === undefined ) {
i:if(!(t<i)){for(var a=n+2;;){if(void 0===i){if(t<r)break i;
// after end
return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===a)break;if(// this loop
r=i,i=e[++n],t<i)
// we have arrived at the sought interval
break e}
// prepare binary search on the right side of the index
o=e.length;break n}
//- slower code:
//-					if ( t < t0 || t0 === undefined ) {
{if(t>=r)
// the interval is valid
break t;
// looping?
var s=e[1];t<s&&(n=2,// + 1, using the scan for the details
r=s);
// linear reverse scan
for(var a=n-2;;){if(void 0===r)
// before start
return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(// this loop
i=r,r=e[--n-1],t>=r)
// we have arrived at the sought interval
break e}
// prepare binary search on the left side of the index
o=n,n=0}}// linear scan
// binary search
for(;n<o;){var l=n+o>>>1;t<e[l]?o=l:n=l+1}
// check boundary cases, again
if(i=e[n],void 0===(r=e[n-1]))return this._cachedIndex=0,this.beforeStart_(0,t,i);if(void 0===i)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}// seek
this._cachedIndex=n,this.intervalChanged_(n,r,i)}// validate_interval
return this.interpolate_(n,r,t,i)},settings:null,// optional, subclass-specific settings structure
// Note: The indirection allows central control of many interpolants.
// --- Protected interface
DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){for(var e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i,o=0;o!==i;++o)e[o]=n[r+o];return e},
// Template methods for derived classes:
interpolate_:function(t,e,n,i){throw new Error("call to abstract method")},intervalChanged_:function(t,e,n){}}),
//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(Yn.prototype,{
//( 0, t, t0 ), returns this.resultBuffer
beforeStart_:Yn.prototype.copySampleValue_,
//( N-1, tN-1, t ), returns this.resultBuffer
afterEnd_:Yn.prototype.copySampleValue_}),Kn.prototype=Object.assign(Object.create(Yn.prototype),{constructor:Kn,DefaultSettings_:{endingStart:as,endingEnd:as},intervalChanged_:function(t,e,n){var i=this.parameterPositions,r=t-2,o=t+1,a=i[r],s=i[o];if(void 0===a)switch(this.getSettings_().endingStart){case ss:
// f'(t0) = 0
r=t,a=2*e-n;break;case ls:
// use the other end of the curve
r=i.length-2,a=e+i[r]-i[r+1];break;default:// ZeroCurvatureEnding
// f''(t0) = 0 a.k.a. Natural Spline
r=t,a=n}if(void 0===s)switch(this.getSettings_().endingEnd){case ss:
// f'(tN) = 0
o=t,s=2*n-e;break;case ls:
// use the other end of the curve
o=1,s=n+i[1]-i[0];break;default:// ZeroCurvatureEnding
// f''(tN) = 0, a.k.a. Natural Spline
o=t-1,s=e}var l=.5*(n-e),u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(s-n),this._offsetPrev=r*u,this._offsetNext=o*u},interpolate_:function(t,e,n,i){
// combine data linearly
for(var r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,s=t*a,l=s-a,u=this._offsetPrev,c=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),f=p*p,m=f*p,g=-h*m+2*h*f-h*p,v=(1+h)*m+(-1.5-2*h)*f+(-.5+h)*p+1,y=(-1-d)*m+(1.5+d)*f+.5*p,b=d*m-d*f,_=0;_!==a;++_)r[_]=g*o[u+_]+v*o[l+_]+y*o[s+_]+b*o[c+_];return r}}),Zn.prototype=Object.assign(Object.create(Yn.prototype),{constructor:Zn,interpolate_:function(t,e,n,i){for(var r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,s=t*a,l=s-a,u=(n-e)/(i-e),c=1-u,h=0;h!==a;++h)r[h]=o[l+h]*c+o[s+h]*u;return r}}),qn.prototype=Object.assign(Object.create(Yn.prototype),{constructor:qn,interpolate_:function(t,e,n,i){return this.copySampleValue_(t-1)}});var Ws;Ws={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:rs,InterpolantFactoryMethodDiscrete:function(t){return new qn(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Zn(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new Kn(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){var e;switch(t){case is:e=this.InterpolantFactoryMethodDiscrete;break;case rs:e=this.InterpolantFactoryMethodLinear;break;case os:e=this.InterpolantFactoryMethodSmooth}if(void 0!==e)this.createInterpolant=e;else{var n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){
// fall back to default, unless the default itself is messed up
if(t===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}}},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return os}},getValueSize:function(){return this.values.length/this.times.length},
// move all keyframes either forwards or backwards in time
shift:function(t){if(0!==t)for(var e=this.times,n=0,i=e.length;n!==i;++n)e[n]+=t;return this},
// scale all keyframe times by a factor (useful for frame <-> seconds conversions)
scale:function(t){if(1!==t)for(var e=this.times,n=0,i=e.length;n!==i;++n)e[n]*=t;return this},
// removes keyframes before and after animation without changing any values within the range [startTime, endTime].
// IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
trim:function(t,e){for(var n=this.times,i=n.length,r=0,o=i-1;r!==i&&n[r]<t;)++r;for(;-1!==o&&n[o]>e;)--o;// inclusive -> exclusive bound
if(++o,0!==r||o!==i){
// empty tracks are forbidden, so keep at least one keyframe
r>=o&&(o=Math.max(o,1),r=o-1);var a=this.getValueSize();this.times=Xs.arraySlice(n,r,o),this.values=Xs.arraySlice(this.values,r*a,o*a)}return this},
// ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
validate:function(){var t=!0,e=this.getValueSize();e-Math.floor(e)!=0&&(t=!1);var n=this.times,i=this.values,r=n.length;0===r&&(t=!1);for(var o=null,a=0;a!==r;a++){var s=n[a];if("number"==typeof s&&isNaN(s)){t=!1;break}if(null!==o&&o>s){t=!1;break}o=s}if(void 0!==i&&Xs.isTypedArray(i))for(var a=0,l=i.length;a!==l;++a){var u=i[a];if(isNaN(u)){t=!1;break}}return t},
// removes equivalent sequential keys as common in morph target sequences
// (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
optimize:function(){for(var t=this.times,e=this.values,n=this.getValueSize(),i=this.getInterpolation()===os,r=1,o=t.length-1,a=1;a<o;++a){var s=!1,l=t[a];
// remove adjacent keyframes scheduled at the same time
if(l!==t[a+1]&&(1!==a||l!==l[0]))if(i)s=!0;else for(var u=a*n,c=u-n,h=u+n,d=0;d!==n;++d){var p=e[u+d];if(p!==e[c+d]||p!==e[h+d]){s=!0;break}}
// in-place compaction
if(s){if(a!==r){t[r]=t[a];for(var f=a*n,m=r*n,d=0;d!==n;++d)e[m+d]=e[f+d]}++r}}
// flush last keyframe (compaction looks ahead)
if(o>0){t[r]=t[o];for(var f=o*n,m=r*n,d=0;d!==n;++d)e[m+d]=e[f+d];++r}return r!==t.length&&(this.times=Xs.arraySlice(t,0,r),this.values=Xs.arraySlice(e,0,r*n)),this}},Jn.prototype=Object.assign(Object.create(Ws),{constructor:Jn,ValueTypeName:"vector"}),$n.prototype=Object.assign(Object.create(Yn.prototype),{constructor:$n,interpolate_:function(t,e,n,i){for(var r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,s=t*a,l=(n-e)/(i-e),c=s+a;s!==c;s+=4)u.slerpFlat(r,0,o,s-a,o,s,l);return r}}),ti.prototype=Object.assign(Object.create(Ws),{constructor:ti,ValueTypeName:"quaternion",
// ValueBufferType is inherited
DefaultInterpolation:rs,InterpolantFactoryMethodLinear:function(t){return new $n(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0}),ei.prototype=Object.assign(Object.create(Ws),{constructor:ei,ValueTypeName:"number"}),ni.prototype=Object.assign(Object.create(Ws),{constructor:ni,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:is,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),ii.prototype=Object.assign(Object.create(Ws),{constructor:ii,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:is,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),ri.prototype=Object.assign(Object.create(Ws),{constructor:ri,ValueTypeName:"color"}),oi.prototype=Ws,Ws.constructor=oi,
// Static methods:
Object.assign(oi,{
// Serialization (in static context, because of constructor invocation
// and automatic invocation of .toJSON):
parse:function(t){if(void 0===t.type)throw new Error("track type undefined, can not parse");var e=oi._getTrackTypeForValueTypeName(t.type);if(void 0===t.times){var n=[],i=[];Xs.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}
// derived classes can define a static parse method
// derived classes can define a static parse method
return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)},toJSON:function(t){var e,n=t.constructor;
// derived classes can define a static toJSON method
if(void 0!==n.toJSON)e=n.toJSON(t);else{
// by default, we assume the data can be serialized as-is
e={name:t.name,times:Xs.convertArray(t.times,Array),values:Xs.convertArray(t.values,Array)};var i=t.getInterpolation();i!==t.DefaultInterpolation&&(e.interpolation=i)}// mandatory
return e.type=t.ValueTypeName,e},_getTrackTypeForValueTypeName:function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ei;case"vector":case"vector2":case"vector3":case"vector4":return Jn;case"color":return ri;case"quaternion":return ti;case"bool":case"boolean":return ii;case"string":return ni}throw new Error("Unsupported typeName: "+t)}}),Object.assign(ai,{parse:function(t){for(var e=[],n=t.tracks,i=1/(t.fps||1),r=0,o=n.length;r!==o;++r)e.push(oi.parse(n[r]).scale(i));return new ai(t.name,t.duration,e)},toJSON:function(t){for(var e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e},r=0,o=n.length;r!==o;++r)e.push(oi.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){for(var r=e.length,o=[],a=0;a<r;a++){var s=[],l=[];s.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);var u=Xs.getKeyframeOrder(s);s=Xs.sortedArray(s,1,u),l=Xs.sortedArray(l,1,u),
// if there is a key at the first frame, duplicate it as the
// last frame as well for perfect loop.
i||0!==s[0]||(s.push(r),l.push(l[0])),o.push(new ei(".morphTargetInfluences["+e[a].name+"]",s,l).scale(1/n))}return new ai(t,-1,o)},findByName:function(t,e){var n=t;if(!Array.isArray(t)){var i=t;n=i.geometry&&i.geometry.animations||i.animations}for(var r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){
// sort morph target names into animation groups based
// patterns like Walk_001, Walk_002, Run_001, Run_002
for(var i={},r=0,o=t.length;r<o;r++){var a=t[r],s=a.name.match(/^([\w-]*?)([\d]+)$/);if(s&&s.length>1){var l=s[1],u=i[l];u||(i[l]=u=[]),u.push(a)}}var c=[];for(var l in i)c.push(ai.CreateFromMorphTargetSequence(l,i[l],e,n));return c},
// parse the animation.hierarchy format
parseAnimation:function(t,e){if(!t)return null;for(var n=function(t,e,n,i,r){
// only return track if there are actually keys.
if(0!==n.length){var o=[],a=[];Xs.flattenJSON(n,o,a,i),
// empty keys are filtered out, so check again
0!==o.length&&r.push(new t(e,o,a))}},i=[],r=t.name||"default",o=t.length||-1,a=t.fps||30,s=t.hierarchy||[],l=0;l<s.length;l++){var u=s[l].keys;
// skip empty tracks
if(u&&0!==u.length)
// process morph targets in a way exactly compatible
// with AnimationHandler.init( animation )
if(u[0].morphTargets){for(var c={},h=0;h<u.length;h++)if(u[h].morphTargets)for(var d=0;d<u[h].morphTargets.length;d++)c[u[h].morphTargets[d]]=-1;
// create a track for each morph target with all zero
// morphTargetInfluences except for the keys in which
// the morphTarget is named.
for(var p in c){for(var f=[],m=[],d=0;d!==u[h].morphTargets.length;++d){var g=u[h];f.push(g.time),m.push(g.morphTarget===p?1:0)}i.push(new ei(".morphTargetInfluence["+p+"]",f,m))}o=c.length*(a||1)}else{
// ...assume skeletal animation
var v=".bones["+e[l].name+"]";n(Jn,v+".position",u,"pos",i),n(ti,v+".quaternion",u,"rot",i),n(Jn,v+".scale",u,"scl",i)}}return 0===i.length?null:new ai(r,o,i)}}),Object.assign(ai.prototype,{resetDuration:function(){for(var t=this.tracks,e=0,n=0,i=t.length;n!==i;++n){var r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}this.duration=e},trim:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},optimize:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}}),Object.assign(si.prototype,{load:function(t,e,n,i){var r=this,o=new Nn(r.manager);o.setResponseType("json"),o.load(t,function(t){e(r.parse(t))},n,i)},setTextures:function(t){this.textures=t},parse:function(t){function e(t){return n[t],n[t]}var n=this.textures,i=new Fs[t.type];if(void 0!==t.uuid&&(i.uuid=t.uuid),void 0!==t.name&&(i.name=t.name),void 0!==t.color&&i.color.setHex(t.color),void 0!==t.roughness&&(i.roughness=t.roughness),void 0!==t.metalness&&(i.metalness=t.metalness),void 0!==t.emissive&&i.emissive.setHex(t.emissive),void 0!==t.specular&&i.specular.setHex(t.specular),void 0!==t.shininess&&(i.shininess=t.shininess),void 0!==t.clearCoat&&(i.clearCoat=t.clearCoat),void 0!==t.clearCoatRoughness&&(i.clearCoatRoughness=t.clearCoatRoughness),void 0!==t.uniforms&&(i.uniforms=t.uniforms),void 0!==t.vertexShader&&(i.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(i.fragmentShader=t.fragmentShader),void 0!==t.vertexColors&&(i.vertexColors=t.vertexColors),void 0!==t.fog&&(i.fog=t.fog),void 0!==t.shading&&(i.shading=t.shading),void 0!==t.blending&&(i.blending=t.blending),void 0!==t.side&&(i.side=t.side),void 0!==t.opacity&&(i.opacity=t.opacity),void 0!==t.transparent&&(i.transparent=t.transparent),void 0!==t.alphaTest&&(i.alphaTest=t.alphaTest),void 0!==t.depthTest&&(i.depthTest=t.depthTest),void 0!==t.depthWrite&&(i.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(i.colorWrite=t.colorWrite),void 0!==t.wireframe&&(i.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(i.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(i.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(i.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.skinning&&(i.skinning=t.skinning),void 0!==t.morphTargets&&(i.morphTargets=t.morphTargets),
// for PointsMaterial
void 0!==t.size&&(i.size=t.size),void 0!==t.sizeAttenuation&&(i.sizeAttenuation=t.sizeAttenuation),
// maps
void 0!==t.map&&(i.map=e(t.map)),void 0!==t.alphaMap&&(i.alphaMap=e(t.alphaMap),i.transparent=!0),void 0!==t.bumpMap&&(i.bumpMap=e(t.bumpMap)),void 0!==t.bumpScale&&(i.bumpScale=t.bumpScale),void 0!==t.normalMap&&(i.normalMap=e(t.normalMap)),void 0!==t.normalScale){var o=t.normalScale;!1===Array.isArray(o)&&(
// Blender exporter used to export a scalar. See #7459
o=[o,o]),i.normalScale=(new r).fromArray(o)}return void 0!==t.displacementMap&&(i.displacementMap=e(t.displacementMap)),void 0!==t.displacementScale&&(i.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(i.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(i.roughnessMap=e(t.roughnessMap)),void 0!==t.metalnessMap&&(i.metalnessMap=e(t.metalnessMap)),void 0!==t.emissiveMap&&(i.emissiveMap=e(t.emissiveMap)),void 0!==t.emissiveIntensity&&(i.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(i.specularMap=e(t.specularMap)),void 0!==t.envMap&&(i.envMap=e(t.envMap)),void 0!==t.reflectivity&&(i.reflectivity=t.reflectivity),void 0!==t.lightMap&&(i.lightMap=e(t.lightMap)),void 0!==t.lightMapIntensity&&(i.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(i.aoMap=e(t.aoMap)),void 0!==t.aoMapIntensity&&(i.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(i.gradientMap=e(t.gradientMap)),i}}),Object.assign(li.prototype,{load:function(t,e,n,i){var r=this,o=new Nn(r.manager);o.setResponseType("json"),o.load(t,function(t){e(r.parse(t))},n,i)},parse:function(t){var e=new Pt,n=t.data.index;if(void 0!==n){var i=new Ys[n.type](n.array);e.setIndex(new mt(i,1))}var r=t.data.attributes;for(var o in r){var a=r[o],i=new Ys[a.type](a.array);e.addAttribute(o,new mt(i,a.itemSize,a.normalized))}var s=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==s)for(var l=0,u=s.length;l!==u;++l){var h=s[l];e.addGroup(h.start,h.count,h.materialIndex)}var d=t.data.boundingSphere;if(void 0!==d){var p=new c;void 0!==d.center&&p.fromArray(d.center),e.boundingSphere=new nt(p,d.radius)}return e}});var Ys={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};ui.Handlers={handlers:[],add:function(t,e){this.handlers.push(t,e)},get:function(t){for(var e=this.handlers,n=0,i=e.length;n<i;n+=2){var r=e[n],o=e[n+1];if(r.test(t))return o}return null}},Object.assign(ui.prototype,{crossOrigin:void 0,extractUrlBase:function(t){var e=t.split("/");return 1===e.length?"./":(e.pop(),e.join("/")+"/")},initMaterials:function(t,e,n){for(var i=[],r=0;r<t.length;++r)i[r]=this.createMaterial(t[r],e,n);return i},createMaterial:function(){var t={NoBlending:So,NormalBlending:Mo,AdditiveBlending:Eo,SubtractiveBlending:To,MultiplyBlending:Co,CustomBlending:Po},e=new K,n=new Bn,i=new si;return function(r,o,a){function s(t,e,i,r,s){var u,c=o+t,h=ui.Handlers.get(c);null!==h?u=h.load(c):(n.setCrossOrigin(a),u=n.load(c)),void 0!==e&&(u.repeat.fromArray(e),1!==e[0]&&(u.wrapS=ga),1!==e[1]&&(u.wrapT=ga)),void 0!==i&&u.offset.fromArray(i),void 0!==r&&("repeat"===r[0]&&(u.wrapS=ga),"mirror"===r[0]&&(u.wrapS=ya),"repeat"===r[1]&&(u.wrapT=ga),"mirror"===r[1]&&(u.wrapT=ya)),void 0!==s&&(u.anisotropy=s);var d=As.generateUUID();return l[d]=u,d}
// convert from old material format
var l={},u={uuid:As.generateUUID(),type:"MeshLambertMaterial"};for(var c in r){var h=r[c];switch(c){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":u.name=h;break;case"blending":u.blending=t[h];break;case"colorAmbient":case"mapAmbient":break;case"colorDiffuse":u.color=e.fromArray(h).getHex();break;case"colorSpecular":u.specular=e.fromArray(h).getHex();break;case"colorEmissive":u.emissive=e.fromArray(h).getHex();break;case"specularCoef":u.shininess=h;break;case"shading":"basic"===h.toLowerCase()&&(u.type="MeshBasicMaterial"),"phong"===h.toLowerCase()&&(u.type="MeshPhongMaterial"),"standard"===h.toLowerCase()&&(u.type="MeshStandardMaterial");break;case"mapDiffuse":u.map=s(h,r.mapDiffuseRepeat,r.mapDiffuseOffset,r.mapDiffuseWrap,r.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapEmissive":u.emissiveMap=s(h,r.mapEmissiveRepeat,r.mapEmissiveOffset,r.mapEmissiveWrap,r.mapEmissiveAnisotropy);break;case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;case"mapLight":u.lightMap=s(h,r.mapLightRepeat,r.mapLightOffset,r.mapLightWrap,r.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":u.aoMap=s(h,r.mapAORepeat,r.mapAOOffset,r.mapAOWrap,r.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":u.bumpMap=s(h,r.mapBumpRepeat,r.mapBumpOffset,r.mapBumpWrap,r.mapBumpAnisotropy);break;case"mapBumpScale":u.bumpScale=h;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":u.normalMap=s(h,r.mapNormalRepeat,r.mapNormalOffset,r.mapNormalWrap,r.mapNormalAnisotropy);break;case"mapNormalFactor":u.normalScale=[h,h];break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":u.specularMap=s(h,r.mapSpecularRepeat,r.mapSpecularOffset,r.mapSpecularWrap,r.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapMetalness":u.metalnessMap=s(h,r.mapMetalnessRepeat,r.mapMetalnessOffset,r.mapMetalnessWrap,r.mapMetalnessAnisotropy);break;case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;case"mapRoughness":u.roughnessMap=s(h,r.mapRoughnessRepeat,r.mapRoughnessOffset,r.mapRoughnessWrap,r.mapRoughnessAnisotropy);break;case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;case"mapAlpha":u.alphaMap=s(h,r.mapAlphaRepeat,r.mapAlphaOffset,r.mapAlphaWrap,r.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":u.side=vo;break;case"doubleSided":u.side=yo;break;case"transparency":u.opacity=h;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":u[c]=h;break;case"vertexColors":!0===h&&(u.vertexColors=wo),"face"===h&&(u.vertexColors=Ao)}}return"MeshBasicMaterial"===u.type&&delete u.emissive,"MeshPhongMaterial"!==u.type&&delete u.specular,u.opacity<1&&(u.transparent=!0),i.setTextures(l),i.parse(u)}}()}),Object.assign(ci.prototype,{load:function(t,e,n,i){var r=this,o=this.texturePath&&"string"==typeof this.texturePath?this.texturePath:ui.prototype.extractUrlBase(t),a=new Nn(this.manager);a.setResponseType("json"),a.setWithCredentials(this.withCredentials),a.load(t,function(t){var n=t.metadata;if(void 0!==n){var i=n.type;if(void 0!==i){if("object"===i.toLowerCase())return;if("scene"===i.toLowerCase())return}}var a=r.parse(t,o);e(a.geometry,a.materials)},n,i)},setTexturePath:function(t){this.texturePath=t},parse:function(){function t(t,e){function n(t,e){return t&1<<e}var i,o,a,s,l,u,h,d,p,f,m,g,v,y,b,_,x,A,w,S,M,E,T,C,P,L,N,I=t.faces,O=t.vertices,R=t.normals,D=t.colors,B=t.scale,j=0;if(void 0!==t.uvs){
// disregard empty arrays
for(i=0;i<t.uvs.length;i++)t.uvs[i].length&&j++;for(i=0;i<j;i++)e.faceVertexUvs[i]=[]}for(s=0,l=O.length;s<l;)A=new c,A.x=O[s++]*B,A.y=O[s++]*B,A.z=O[s++]*B,e.vertices.push(A);for(s=0,l=I.length;s<l;)
// console.log("type", type, "bits", isQuad, hasMaterial, hasFaceVertexUv, hasFaceNormal, hasFaceVertexNormal, hasFaceColor, hasFaceVertexColor);
if(f=I[s++],m=n(f,0),g=n(f,1),v=n(f,3),y=n(f,4),b=n(f,5),_=n(f,6),x=n(f,7),m){if(S=new pt,S.a=I[s],S.b=I[s+1],S.c=I[s+3],M=new pt,M.a=I[s+1],M.b=I[s+2],M.c=I[s+3],s+=4,g&&(p=I[s++],S.materialIndex=p,M.materialIndex=p),
// to get face <=> uv index correspondence
a=e.faces.length,v)for(i=0;i<j;i++)for(C=t.uvs[i],e.faceVertexUvs[i][a]=[],e.faceVertexUvs[i][a+1]=[],o=0;o<4;o++)d=I[s++],L=C[2*d],N=C[2*d+1],P=new r(L,N),2!==o&&e.faceVertexUvs[i][a].push(P),0!==o&&e.faceVertexUvs[i][a+1].push(P);if(y&&(h=3*I[s++],S.normal.set(R[h++],R[h++],R[h]),M.normal.copy(S.normal)),b)for(i=0;i<4;i++)h=3*I[s++],T=new c(R[h++],R[h++],R[h]),2!==i&&S.vertexNormals.push(T),0!==i&&M.vertexNormals.push(T);if(_&&(u=I[s++],E=D[u],S.color.setHex(E),M.color.setHex(E)),x)for(i=0;i<4;i++)u=I[s++],E=D[u],2!==i&&S.vertexColors.push(new K(E)),0!==i&&M.vertexColors.push(new K(E));e.faces.push(S),e.faces.push(M)}else{if(w=new pt,w.a=I[s++],w.b=I[s++],w.c=I[s++],g&&(p=I[s++],w.materialIndex=p),
// to get face <=> uv index correspondence
a=e.faces.length,v)for(i=0;i<j;i++)for(C=t.uvs[i],e.faceVertexUvs[i][a]=[],o=0;o<3;o++)d=I[s++],L=C[2*d],N=C[2*d+1],P=new r(L,N),e.faceVertexUvs[i][a].push(P);if(y&&(h=3*I[s++],w.normal.set(R[h++],R[h++],R[h])),b)for(i=0;i<3;i++)h=3*I[s++],T=new c(R[h++],R[h++],R[h]),w.vertexNormals.push(T);if(_&&(u=I[s++],w.color.setHex(D[u])),x)for(i=0;i<3;i++)u=I[s++],w.vertexColors.push(new K(D[u]));e.faces.push(w)}}function e(t,e){var n=void 0!==t.influencesPerVertex?t.influencesPerVertex:2;if(t.skinWeights)for(var i=0,r=t.skinWeights.length;i<r;i+=n){var o=t.skinWeights[i],s=n>1?t.skinWeights[i+1]:0,l=n>2?t.skinWeights[i+2]:0,u=n>3?t.skinWeights[i+3]:0;e.skinWeights.push(new a(o,s,l,u))}if(t.skinIndices)for(var i=0,r=t.skinIndices.length;i<r;i+=n){var c=t.skinIndices[i],h=n>1?t.skinIndices[i+1]:0,d=n>2?t.skinIndices[i+2]:0,p=n>3?t.skinIndices[i+3]:0;e.skinIndices.push(new a(c,h,d,p))}e.bones=t.bones,e.bones&&e.bones.length>0&&(e.skinWeights.length!==e.skinIndices.length||(e.skinIndices.length,e.vertices.length))}function n(t,e){var n=t.scale;if(void 0!==t.morphTargets)for(var i=0,r=t.morphTargets.length;i<r;i++){e.morphTargets[i]={},e.morphTargets[i].name=t.morphTargets[i].name,e.morphTargets[i].vertices=[];for(var o=e.morphTargets[i].vertices,a=t.morphTargets[i].vertices,s=0,l=a.length;s<l;s+=3){var u=new c;u.x=a[s]*n,u.y=a[s+1]*n,u.z=a[s+2]*n,o.push(u)}}if(void 0!==t.morphColors&&t.morphColors.length>0)for(var h=e.faces,d=t.morphColors[0].colors,i=0,r=h.length;i<r;i++)h[i].color.fromArray(d,3*i)}function i(t,e){var n=[],i=[];void 0!==t.animation&&i.push(t.animation),void 0!==t.animations&&(t.animations.length?i=i.concat(t.animations):i.push(t.animations));for(var r=0;r<i.length;r++){var o=ai.parseAnimation(i[r],e.bones);o&&n.push(o)}
// parse implicit morph animations
if(e.morphTargets){
// TODO: Figure out what an appropraite FPS is for morph target animations -- defaulting to 10, but really it is completely arbitrary.
var a=ai.CreateClipsFromMorphTargetSequences(e.morphTargets,10);n=n.concat(a)}n.length>0&&(e.animations=n)}return function(r,o){void 0!==r.data&&(
// Geometry 4.0 spec
r=r.data),void 0!==r.scale?r.scale=1/r.scale:r.scale=1;var a=new Ct;return t(r,a),e(r,a),n(r,a),i(r,a),a.computeFaceNormals(),a.computeBoundingSphere(),void 0===r.materials||0===r.materials.length?{geometry:a}:{geometry:a,materials:ui.prototype.initMaterials(r.materials,o,this.crossOrigin)}}}()}),Object.assign(hi.prototype,{load:function(t,e,n,i){""===this.texturePath&&(this.texturePath=t.substring(0,t.lastIndexOf("/")+1));var r=this;new Nn(r.manager).load(t,function(t){var n=null;try{n=JSON.parse(t)}catch(t){return void(void 0!==i&&i(t))}var o=n.metadata;void 0!==o&&void 0!==o.type&&"geometry"!==o.type.toLowerCase()&&r.parse(n,e)},n,i)},setTexturePath:function(t){this.texturePath=t},setCrossOrigin:function(t){this.crossOrigin=t},parse:function(t,e){var n=this.parseGeometries(t.geometries),i=this.parseImages(t.images,function(){void 0!==e&&e(a)}),r=this.parseTextures(t.textures,i),o=this.parseMaterials(t.materials,r),a=this.parseObject(t.object,n,o);return t.animations&&(a.animations=this.parseAnimations(t.animations)),void 0!==t.images&&0!==t.images.length||void 0!==e&&e(a),a},parseGeometries:function(t){var e={};if(void 0!==t)for(var n=new ci,i=new li,r=0,o=t.length;r<o;r++){var a,s=t[r];switch(s.type){case"PlaneGeometry":case"PlaneBufferGeometry":a=new Gs[s.type](s.width,s.height,s.widthSegments,s.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":// backwards compatible
a=new Gs[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":a=new Gs[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":a=new Gs[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":a=new Gs[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":a=new Gs[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);break;case"DodecahedronGeometry":case"IcosahedronGeometry":case"OctahedronGeometry":case"TetrahedronGeometry":a=new Gs[s.type](s.radius,s.detail);break;case"RingGeometry":case"RingBufferGeometry":a=new Gs[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":a=new Gs[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":a=new Gs[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);break;case"LatheGeometry":case"LatheBufferGeometry":a=new Gs[s.type](s.points,s.segments,s.phiStart,s.phiLength);break;case"BufferGeometry":a=i.parse(s);break;case"Geometry":a=n.parse(s,this.texturePath).geometry;break;default:continue}a.uuid=s.uuid,void 0!==s.name&&(a.name=s.name),e[s.uuid]=a}return e},parseMaterials:function(t,e){var n={};if(void 0!==t){var i=new si;i.setTextures(e);for(var r=0,o=t.length;r<o;r++){var a=t[r];if("MultiMaterial"===a.type){for(var s=[],l=0;l<a.materials.length;l++)s.push(i.parse(a.materials[l]));n[a.uuid]=s}else n[a.uuid]=i.parse(a)}}return n},parseAnimations:function(t){for(var e=[],n=0;n<t.length;n++){var i=ai.parse(t[n]);e.push(i)}return e},parseImages:function(t,e){var n=this,i={};if(void 0!==t&&t.length>0){var r=new Ln(e),o=new Rn(r);o.setCrossOrigin(this.crossOrigin);for(var a=0,s=t.length;a<s;a++){var l=t[a],u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:n.texturePath+l.url;i[l.uuid]=function(t){return n.manager.itemStart(t),o.load(t,function(){n.manager.itemEnd(t)},void 0,function(){n.manager.itemEnd(t),n.manager.itemError(t)})}(u)}}return i},parseTextures:function(t,e){function n(t,e){return"number"==typeof t?t:e[t]}var i={};if(void 0!==t)for(var r=0,a=t.length;r<a;r++){var s=t[r];s.image,e[s.image];var l=new o(e[s.image]);l.needsUpdate=!0,l.uuid=s.uuid,void 0!==s.name&&(l.name=s.name),void 0!==s.mapping&&(l.mapping=n(s.mapping,Ks)),void 0!==s.offset&&l.offset.fromArray(s.offset),void 0!==s.repeat&&l.repeat.fromArray(s.repeat),void 0!==s.wrap&&(l.wrapS=n(s.wrap[0],Zs),l.wrapT=n(s.wrap[1],Zs)),void 0!==s.minFilter&&(l.minFilter=n(s.minFilter,qs)),void 0!==s.magFilter&&(l.magFilter=n(s.magFilter,qs)),void 0!==s.anisotropy&&(l.anisotropy=s.anisotropy),void 0!==s.flipY&&(l.flipY=s.flipY),i[s.uuid]=l}return i},parseObject:function(){var t=new h;return function(e,n,i){function r(t){return n[t],n[t]}function o(t){if(void 0!==t){if(Array.isArray(t)){for(var e=[],n=0,r=t.length;n<r;n++){var o=t[n];i[o],e.push(i[o])}return e}return i[t],i[t]}}var a;switch(e.type){case"Scene":a=new ve,void 0!==e.background&&Number.isInteger(e.background)&&(a.background=new K(e.background)),void 0!==e.fog&&("Fog"===e.fog.type?a.fog=new ge(e.fog.color,e.fog.near,e.fog.far):"FogExp2"===e.fog.type&&(a.fog=new me(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":a=new Bt(e.fov,e.aspect,e.near,e.far),void 0!==e.focus&&(a.focus=e.focus),void 0!==e.zoom&&(a.zoom=e.zoom),void 0!==e.filmGauge&&(a.filmGauge=e.filmGauge),void 0!==e.filmOffset&&(a.filmOffset=e.filmOffset),void 0!==e.view&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new jt(e.left,e.right,e.top,e.bottom,e.near,e.far);break;case"AmbientLight":a=new Xn(e.color,e.intensity);break;case"DirectionalLight":a=new Hn(e.color,e.intensity);break;case"PointLight":a=new Fn(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Wn(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Gn(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new Un(e.color,e.groundColor,e.intensity);break;case"SkinnedMesh":case"Mesh":var s=r(e.geometry),l=o(e.material);a=s.bones&&s.bones.length>0?new Se(s,l):new Lt(s,l);break;case"LOD":a=new xe;break;case"Line":a=new Ee(r(e.geometry),o(e.material),e.mode);break;case"LineLoop":a=new Ce(r(e.geometry),o(e.material));break;case"LineSegments":a=new Te(r(e.geometry),o(e.material));break;case"PointCloud":case"Points":a=new Le(r(e.geometry),o(e.material));break;case"Sprite":a=new _e(o(e.material));break;case"Group":a=new Ne;break;default:a=new ct}if(a.uuid=e.uuid,void 0!==e.name&&(a.name=e.name),void 0!==e.matrix?(t.fromArray(e.matrix),t.decompose(a.position,a.quaternion,a.scale)):(void 0!==e.position&&a.position.fromArray(e.position),void 0!==e.rotation&&a.rotation.fromArray(e.rotation),void 0!==e.quaternion&&a.quaternion.fromArray(e.quaternion),void 0!==e.scale&&a.scale.fromArray(e.scale)),void 0!==e.castShadow&&(a.castShadow=e.castShadow),void 0!==e.receiveShadow&&(a.receiveShadow=e.receiveShadow),e.shadow&&(void 0!==e.shadow.bias&&(a.shadow.bias=e.shadow.bias),void 0!==e.shadow.radius&&(a.shadow.radius=e.shadow.radius),void 0!==e.shadow.mapSize&&a.shadow.mapSize.fromArray(e.shadow.mapSize),void 0!==e.shadow.camera&&(a.shadow.camera=this.parseObject(e.shadow.camera))),void 0!==e.visible&&(a.visible=e.visible),void 0!==e.userData&&(a.userData=e.userData),void 0!==e.children)for(var u in e.children)a.add(this.parseObject(e.children[u],n,i));if("LOD"===e.type)for(var c=e.levels,h=0;h<c.length;h++){var d=c[h],u=a.getObjectByProperty("uuid",d.object);void 0!==u&&a.addLevel(u,d.distance)}return a}}()});var Ks={UVMapping:la,CubeReflectionMapping:ua,CubeRefractionMapping:ca,EquirectangularReflectionMapping:ha,EquirectangularRefractionMapping:da,SphericalReflectionMapping:pa,CubeUVReflectionMapping:fa,CubeUVRefractionMapping:ma},Zs={RepeatWrapping:ga,ClampToEdgeWrapping:va,MirroredRepeatWrapping:ya},qs={NearestFilter:ba,NearestMipMapNearestFilter:_a,NearestMipMapLinearFilter:xa,LinearFilter:Aa,LinearMipMapNearestFilter:wa,LinearMipMapLinearFilter:Sa};Object.assign(Ai.prototype,{
// Virtual base class method to overwrite and implement in subclasses
//	- t [0 .. 1]
getPoint:function(){return null},
// Get point at relative position in curve according to arc length
// - u [0 .. 1]
getPointAt:function(t){var e=this.getUtoTmapping(t);return this.getPoint(e)},
// Get sequence of points using getPoint( t )
getPoints:function(t){void 0===t&&(t=5);for(var e=[],n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},
// Get sequence of points using getPointAt( u )
getSpacedPoints:function(t){void 0===t&&(t=5);for(var e=[],n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},
// Get total curve arc length
getLength:function(){var t=this.getLengths();return t[t.length-1]},
// Get list of cumulative segment lengths
getLengths:function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var e,n,i=[],r=this.getPoint(0),o=0;for(i.push(0),n=1;n<=t;n++)e=this.getPoint(n/t),o+=e.distanceTo(r),i.push(o),r=e;return this.cacheArcLengths=i,i},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},
// Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
getUtoTmapping:function(t,e){var n,i=this.getLengths(),r=0,o=i.length;// The targeted u distance value to get
n=e||t*i[o-1];for(
// binary search for the index with largest value smaller than target u distance
var a,s=0,l=o-1;s<=l;)if(r=Math.floor(s+(l-s)/2),(// less likely to overflow, though probably not issue here, JS doesn't really have integers, all numbers are floats
a=i[r]-n)<0)s=r+1;else{if(!(a>0)){l=r;break}l=r-1}if(r=l,i[r]===n)return r/(o-1);
// we could get finer grain at lengths, or use simple interpolation between two points
var u=i[r];return(r+(n-u)/(i[r+1]-u))/(o-1)},
// Returns a unit vector tangent at t
// In case any sub curve does not implement its tangent derivation,
// 2 points a small delta apart will be used to find its gradient
// which seems to give a reasonable approximation
getTangent:function(t){var e=t-1e-4,n=t+1e-4;
// Capping in case of danger
e<0&&(e=0),n>1&&(n=1);var i=this.getPoint(e);return this.getPoint(n).clone().sub(i).normalize()},getTangentAt:function(t){var e=this.getUtoTmapping(t);return this.getTangent(e)},computeFrenetFrames:function(t,e){
// see http://www.cs.indiana.edu/pub/techreports/TR425.pdf
var n,i,r,o=new c,a=[],s=[],l=[],u=new c,d=new h;
// compute the tangent vectors for each segment on the curve
for(n=0;n<=t;n++)i=n/t,a[n]=this.getTangentAt(i),a[n].normalize();
// select an initial normal vector perpendicular to the first tangent vector,
// and in the direction of the minimum tangent xyz component
s[0]=new c,l[0]=new c;var p=Number.MAX_VALUE,f=Math.abs(a[0].x),m=Math.abs(a[0].y),g=Math.abs(a[0].z);
// compute the slowly-varying normal and binormal vectors for each segment on the curve
for(f<=p&&(p=f,o.set(1,0,0)),m<=p&&(p=m,o.set(0,1,0)),g<=p&&o.set(0,0,1),u.crossVectors(a[0],o).normalize(),s[0].crossVectors(a[0],u),l[0].crossVectors(a[0],s[0]),n=1;n<=t;n++)s[n]=s[n-1].clone(),l[n]=l[n-1].clone(),u.crossVectors(a[n-1],a[n]),u.length()>Number.EPSILON&&(u.normalize(),r=Math.acos(As.clamp(a[n-1].dot(a[n]),-1,1)),// clamp for floating pt errors
s[n].applyMatrix4(d.makeRotationAxis(u,r))),l[n].crossVectors(a[n],s[n]);
// if the curve is closed, postprocess the vectors so the first and last normal vectors are the same
if(!0===e)for(r=Math.acos(As.clamp(s[0].dot(s[t]),-1,1)),r/=t,a[0].dot(u.crossVectors(s[0],s[t]))>0&&(r=-r),n=1;n<=t;n++)
// twist a little...
s[n].applyMatrix4(d.makeRotationAxis(a[n],r*n)),l[n].crossVectors(a[n],s[n]);return{tangents:a,normals:s,binormals:l}}}),wi.prototype=Object.create(Ai.prototype),wi.prototype.constructor=wi,wi.prototype.isLineCurve=!0,wi.prototype.getPoint=function(t){if(1===t)return this.v2.clone();var e=this.v2.clone().sub(this.v1);return e.multiplyScalar(t).add(this.v1),e},
// Line curve is linear, so we can overwrite default getPointAt
wi.prototype.getPointAt=function(t){return this.getPoint(t)},wi.prototype.getTangent=function(t){return this.v2.clone().sub(this.v1).normalize()},Si.prototype=Object.assign(Object.create(Ai.prototype),{constructor:Si,add:function(t){this.curves.push(t)},closePath:function(){
// Add a line curve if start and end of lines are not connected
var t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new wi(e,t))},
// To get accurate point with reference to
// entire path distance at time t,
// following has to be done:
// 1. Length of each sub path have to be known
// 2. Locate and identify type of curve
// 3. Get t for the curve
// 4. Return curve.getPointAt(t')
getPoint:function(t){
// To think about boundaries points.
for(var e=t*this.getLength(),n=this.getCurveLengths(),i=0;i<n.length;){if(n[i]>=e){var r=n[i]-e,o=this.curves[i],a=o.getLength(),s=0===a?0:1-r/a;return o.getPointAt(s)}i++}return null},
// We cannot use the default THREE.Curve getPoint() with getLength() because in
// THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
// getPoint() depends on getLength
getLength:function(){var t=this.getCurveLengths();return t[t.length-1]},
// cacheLengths must be recalculated.
updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},
// Compute lengths and cache them
// We cannot overwrite getLengths() because UtoT mapping uses it.
getCurveLengths:function(){
// We use cache values if curves and cache array are same length
if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var t=[],e=0,n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){void 0===t&&(t=40);for(var e=[],n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;for(var e,n=[],i=0,r=this.curves;i<r.length;i++)for(var o=r[i],a=o&&o.isEllipseCurve?2*t:o&&o.isLineCurve?1:o&&o.isSplineCurve?t*o.points.length:t,s=o.getPoints(a),l=0;l<s.length;l++){var u=s[l];e&&e.equals(u)||(// ensures no consecutive points are duplicates
n.push(u),e=u)}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n},/**************************************************************
	 *	Create Geometries Helpers
	 **************************************************************/
/// Generate geometry from path points (for Line or Points objects)
createPointsGeometry:function(t){var e=this.getPoints(t);return this.createGeometry(e)},
// Generate geometry from equidistant sampling along the path
createSpacedPointsGeometry:function(t){var e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){for(var e=new Ct,n=0,i=t.length;n<i;n++){var r=t[n];e.vertices.push(new c(r.x,r.y,r.z||0))}return e}}),Mi.prototype=Object.create(Ai.prototype),Mi.prototype.constructor=Mi,Mi.prototype.isEllipseCurve=!0,Mi.prototype.getPoint=function(t){
// ensures that deltaAngle is 0 .. 2 PI
for(var e=2*Math.PI,n=this.aEndAngle-this.aStartAngle,i=Math.abs(n)<Number.EPSILON;n<0;)n+=e;for(;n>e;)n-=e;n<Number.EPSILON&&(n=i?0:e),!0!==this.aClockwise||i||(n===e?n=-e:n-=e);var o=this.aStartAngle+t*n,a=this.aX+this.xRadius*Math.cos(o),s=this.aY+this.yRadius*Math.sin(o);if(0!==this.aRotation){var l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),c=a-this.aX,h=s-this.aY;
// Rotate the point about the center of the ellipse.
a=c*l-h*u+this.aX,s=c*u+h*l+this.aY}return new r(a,s)},Ei.prototype=Object.create(Ai.prototype),Ei.prototype.constructor=Ei,Ei.prototype.isSplineCurve=!0,Ei.prototype.getPoint=function(t){var e=this.points,n=(e.length-1)*t,i=Math.floor(n),o=n-i,a=e[0===i?i:i-1],s=e[i],l=e[i>e.length-2?e.length-1:i+1],u=e[i>e.length-3?e.length-1:i+2];return new r(di(o,a.x,s.x,l.x,u.x),di(o,a.y,s.y,l.y,u.y))},Ti.prototype=Object.create(Ai.prototype),Ti.prototype.constructor=Ti,Ti.prototype.getPoint=function(t){var e=this.v0,n=this.v1,i=this.v2,o=this.v3;return new r(xi(t,e.x,n.x,i.x,o.x),xi(t,e.y,n.y,i.y,o.y))},Ci.prototype=Object.create(Ai.prototype),Ci.prototype.constructor=Ci,Ci.prototype.getPoint=function(t){var e=this.v0,n=this.v1,i=this.v2;return new r(gi(t,e.x,n.x,i.x),gi(t,e.y,n.y,i.y))};var Qs=Object.assign(Object.create(Si.prototype),{fromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(var e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y)},moveTo:function(t,e){this.currentPoint.set(t,e)},lineTo:function(t,e){var n=new wi(this.currentPoint.clone(),new r(t,e));this.curves.push(n),this.currentPoint.set(t,e)},quadraticCurveTo:function(t,e,n,i){var o=new Ci(this.currentPoint.clone(),new r(t,e),new r(n,i));this.curves.push(o),this.currentPoint.set(n,i)},bezierCurveTo:function(t,e,n,i,o,a){var s=new Ti(this.currentPoint.clone(),new r(t,e),new r(n,i),new r(o,a));this.curves.push(s),this.currentPoint.set(o,a)},splineThru:function(t){var e=[this.currentPoint.clone()].concat(t),n=new Ei(e);this.curves.push(n),this.currentPoint.copy(t[t.length-1])},arc:function(t,e,n,i,r,o){var a=this.currentPoint.x,s=this.currentPoint.y;this.absarc(t+a,e+s,n,i,r,o)},absarc:function(t,e,n,i,r,o){this.absellipse(t,e,n,n,i,r,o)},ellipse:function(t,e,n,i,r,o,a,s){var l=this.currentPoint.x,u=this.currentPoint.y;this.absellipse(t+l,e+u,n,i,r,o,a,s)},absellipse:function(t,e,n,i,r,o,a,s){var l=new Mi(t,e,n,i,r,o,a,s);if(this.curves.length>0){
// if a previous curve is present, attempt to join
var u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);var c=l.getPoint(1);this.currentPoint.copy(c)}});Pi.prototype=Qs,Qs.constructor=Pi,Li.prototype=Object.assign(Object.create(Qs),{constructor:Li,getPointsHoles:function(t){for(var e=[],n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},
// Get points of shape and holes (keypoints based on segments parameter)
extractAllPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},extractPoints:function(t){return this.extractAllPoints(t)}}),Object.assign(Ni.prototype,{moveTo:function(t,e){this.currentPath=new Pi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e)},lineTo:function(t,e){this.currentPath.lineTo(t,e)},quadraticCurveTo:function(t,e,n,i){this.currentPath.quadraticCurveTo(t,e,n,i)},bezierCurveTo:function(t,e,n,i,r,o){this.currentPath.bezierCurveTo(t,e,n,i,r,o)},splineThru:function(t){this.currentPath.splineThru(t)},toShapes:function(t,e){function n(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n],o=new Li;o.curves=r.curves,e.push(o)}return e}var i=Vs.isClockWise,r=this.subPaths;if(0===r.length)return[];if(!0===e)return n(r);var o,a,s,l=[];if(1===r.length)return a=r[0],s=new Li,s.curves=a.curves,l.push(s),l;var u=!i(r[0].getPoints());u=t?!u:u;
// console.log("Holes first", holesFirst);
var c,h=[],d=[],p=[],f=0;d[f]=void 0,p[f]=[];for(var m=0,g=r.length;m<g;m++)a=r[m],c=a.getPoints(),o=i(c),o=t?!o:o,o?(!u&&d[f]&&f++,d[f]={s:new Li,p:c},d[f].s.curves=a.curves,u&&f++,p[f]=[]):p[f].push({h:a,p:c[0]});
// only Holes? -> probably all Shapes with wrong orientation
if(!d[0])return n(r);if(d.length>1){for(var v=!1,y=[],b=0,_=d.length;b<_;b++)h[b]=[];for(var b=0,_=d.length;b<_;b++)for(var x=p[b],A=0;A<x.length;A++){for(var w=x[A],S=!0,M=0;M<d.length;M++)(function(t,e){for(var n=e.length,i=!1,r=n-1,o=0;o<n;r=o++){var a=e[r],s=e[o],l=s.x-a.x,u=s.y-a.y;if(Math.abs(u)>Number.EPSILON){if(
// not parallel
u<0&&(a=e[o],l=-l,s=e[r],u=-u),t.y<a.y||t.y>s.y)continue;if(t.y===a.y){if(t.x===a.x)return!0}else{var c=u*(t.x-a.x)-l*(t.y-a.y);if(0===c)return!0;// inPt is on contour ?
if(c<0)continue;i=!i}}else{
// parallel or collinear
if(t.y!==a.y)continue;// parallel
// edge lies on the same horizontal line as inPt
if(s.x<=t.x&&t.x<=a.x||a.x<=t.x&&t.x<=s.x)return!0}}return i})(w.p,d[M].p)&&(b!==M&&y.push({froms:b,tos:M,hole:A}),S?(S=!1,h[M].push(w)):v=!0);S&&h[b].push(w)}
// console.log("ambiguous: ", ambiguous);
y.length>0&&(
// console.log("to change: ", toChange);
v||(p=h))}for(var E,m=0,T=d.length;m<T;m++){s=d[m].s,l.push(s),E=p[m];for(var C=0,P=E.length;C<P;C++)s.holes.push(E[C].h)}
//console.log("shape", shapes);
return l}}),Object.assign(Ii.prototype,{isFont:!0,generateShapes:function(t,e,n){function i(t,e,i,o){var a=r.glyphs[t]||r.glyphs["?"];if(a){var s,l,u,c,h,d,p,f,m,g,v,y=new Ni,b=[];if(a.o)for(var _=a._cachedOutline||(a._cachedOutline=a.o.split(" ")),x=0,A=_.length;x<A;){var w=_[x++];switch(w){case"m":// moveTo
s=_[x++]*e+i,l=_[x++]*e+o,y.moveTo(s,l);break;case"l":// lineTo
s=_[x++]*e+i,l=_[x++]*e+o,y.lineTo(s,l);break;case"q":if(// quadraticCurveTo
u=_[x++]*e+i,c=_[x++]*e+o,p=_[x++]*e+i,f=_[x++]*e+o,y.quadraticCurveTo(p,f,u,c),v=b[b.length-1]){h=v.x,d=v.y;for(var S=1;S<=n;S++){var M=S/n;gi(M,h,p,u),gi(M,d,f,c)}}break;case"b":if(// bezierCurveTo
u=_[x++]*e+i,c=_[x++]*e+o,p=_[x++]*e+i,f=_[x++]*e+o,m=_[x++]*e+i,g=_[x++]*e+o,y.bezierCurveTo(p,f,m,g,u,c),v=b[b.length-1]){h=v.x,d=v.y;for(var S=1;S<=n;S++){var M=S/n;xi(M,h,p,m,u),xi(M,d,f,g,c)}}}}return{offsetX:a.ha*e,path:y}}}
//
void 0===e&&(e=100),void 0===n&&(n=4);for(var r=this.data,o=function(t){for(var n=String(t).split(""),o=e/r.resolution,a=(r.boundingBox.yMax-r.boundingBox.yMin+r.underlineThickness)*o,s=0,l=0,u=[],c=0;c<n.length;c++){var h=n[c];if("\n"===h)s=0,l-=a;else{var d=i(h,o,s,l);s+=d.offsetX,u.push(d.path)}}return u}(t),a=[],s=0,l=o.length;s<l;s++)Array.prototype.push.apply(a,o[s].toShapes());return a}}),Object.assign(Oi.prototype,{load:function(t,e,n,i){var r=this;new Nn(this.manager).load(t,function(t){var n;try{n=JSON.parse(t)}catch(e){n=JSON.parse(t.substring(65,t.length-2))}var i=r.parse(n);e&&e(i)},n,i)},parse:function(t){return new Ii(t)}});var Js,$s={getContext:function(){return void 0===Js&&(Js=new(window.AudioContext||window.webkitAudioContext)),Js},setContext:function(t){Js=t}};Object.assign(Ri.prototype,{load:function(t,e,n,i){var r=new Nn(this.manager);r.setResponseType("arraybuffer"),r.load(t,function(t){$s.getContext().decodeAudioData(t,function(t){e(t)})},n,i)}}),Object.assign(Di.prototype,{update:function(){var t,e,n,i,r,o,a,s,l=new h,u=new h;return function(c){if(t!==this||e!==c.focus||n!==c.fov||i!==c.aspect*this.aspect||r!==c.near||o!==c.far||a!==c.zoom||s!==this.eyeSep){t=this,e=c.focus,n=c.fov,i=c.aspect*this.aspect,r=c.near,o=c.far,a=c.zoom;
// Off-axis stereoscopic effect based on
// http://paulbourke.net/stereographics/stereorender/
var h=c.projectionMatrix.clone();s=this.eyeSep/2;var d,p,f=s*r/e,m=r*Math.tan(As.DEG2RAD*n*.5)/a;
// translate xOffset
u.elements[12]=-s,l.elements[12]=s,
// for left eye
d=-m*i+f,p=m*i+f,h.elements[0]=2*r/(p-d),h.elements[8]=(p+d)/(p-d),this.cameraL.projectionMatrix.copy(h),
// for right eye
d=-m*i-f,p=m*i-f,h.elements[0]=2*r/(p-d),h.elements[8]=(p+d)/(p-d),this.cameraR.projectionMatrix.copy(h)}this.cameraL.matrixWorld.copy(c.matrixWorld).multiply(u),this.cameraR.matrixWorld.copy(c.matrixWorld).multiply(l)}}()}),Bi.prototype=Object.create(ct.prototype),Bi.prototype.constructor=Bi,ji.prototype=Object.assign(Object.create(Bt.prototype),{constructor:ji,isArrayCamera:!0}),Ui.prototype=Object.assign(Object.create(ct.prototype),{constructor:Ui,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(t){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(t){this.gain.gain.value=t},updateMatrixWorld:function(){var t=new c,e=new u,n=new c,i=new c;return function(r){ct.prototype.updateMatrixWorld.call(this,r);var o=this.context.listener,a=this.up;this.matrixWorld.decompose(t,e,n),i.set(0,0,-1).applyQuaternion(e),o.positionX?(o.positionX.setValueAtTime(t.x,this.context.currentTime),o.positionY.setValueAtTime(t.y,this.context.currentTime),o.positionZ.setValueAtTime(t.z,this.context.currentTime),o.forwardX.setValueAtTime(i.x,this.context.currentTime),o.forwardY.setValueAtTime(i.y,this.context.currentTime),o.forwardZ.setValueAtTime(i.z,this.context.currentTime),o.upX.setValueAtTime(a.x,this.context.currentTime),o.upY.setValueAtTime(a.y,this.context.currentTime),o.upZ.setValueAtTime(a.z,this.context.currentTime)):(o.setPosition(t.x,t.y,t.z),o.setOrientation(i.x,i.y,i.z,a.x,a.y,a.z))}}()}),ki.prototype=Object.assign(Object.create(ct.prototype),{constructor:ki,getOutput:function(){return this.gain},setNodeSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this},setBuffer:function(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(){if(!0!==this.isPlaying&&!1!==this.hasPlaybackControl){var t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.onended=this.onEnded.bind(this),t.playbackRate.setValueAtTime(this.playbackRate,this.startTime),t.start(0,this.startTime),this.isPlaying=!0,this.source=t,this.connect()}},pause:function(){if(!1!==this.hasPlaybackControl)return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(!1!==this.hasPlaybackControl)return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(t){return t||(t=[]),!0===this.isPlaying?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this},getFilter:function(){return this.getFilters()[0]},setFilter:function(t){return this.setFilters(t?[t]:[])},setPlaybackRate:function(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1!==this.hasPlaybackControl&&this.loop},setLoop:function(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(t){return this.gain.gain.value=t,this}}),Vi.prototype=Object.assign(Object.create(ki.prototype),{constructor:Vi,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(t){this.panner.refDistance=t},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(t){this.panner.rolloffFactor=t},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(t){this.panner.distanceModel=t},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(t){this.panner.maxDistance=t},updateMatrixWorld:function(){var t=new c;return function(e){ct.prototype.updateMatrixWorld.call(this,e),t.setFromMatrixPosition(this.matrixWorld),this.panner.setPosition(t.x,t.y,t.z)}}()}),Object.assign(Gi.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var t=0,e=this.getFrequencyData(),n=0;n<e.length;n++)t+=e[n];return t/e.length}}),Object.assign(Fi.prototype,{
// accumulate data in the 'incoming' region into 'accu<i>'
accumulate:function(t,e){
// note: happily accumulating nothing when weight = 0, the caller knows
// the weight and shouldn't have made the call in the first place
var n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(0===o){
// accuN := incoming * weight
for(var a=0;a!==i;++a)n[r+a]=n[a];o=e}else{
// accuN := accuN + incoming * weight
o+=e;var s=e/o;this._mixBufferRegion(n,r,0,s,i)}this.cumulativeWeight=o},
// apply the state of 'accu<i>' to the binding when accus differ
apply:function(t){var e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.binding;if(this.cumulativeWeight=0,r<1){
// accuN := accuN + original * ( 1 - cumulativeWeight )
var a=3*e;this._mixBufferRegion(n,i,a,1-r,e)}for(var s=e,l=e+e;s!==l;++s)if(n[s]!==n[s+e]){
// value has changed -> update scene graph
o.setValue(n,i);break}},
// remember the state of the bound property and copy it to both accus
saveOriginalState:function(){var t=this.binding,e=this.buffer,n=this.valueSize,i=3*n;t.getValue(e,i);
// accu[0..1] := orig -- initially detect changes against the original
for(var r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this.cumulativeWeight=0},
// apply the state previously taken via 'saveOriginalState' to the binding
restoreOriginalState:function(){var t=3*this.valueSize;this.binding.setValue(this.buffer,t)},
// mix functions
_select:function(t,e,n,i,r){if(i>=.5)for(var o=0;o!==r;++o)t[e+o]=t[n+o]},_slerp:function(t,e,n,i){u.slerpFlat(t,e,t,e,t,n,i)},_lerp:function(t,e,n,i,r){for(var o=1-i,a=0;a!==r;++a){var s=e+a;t[s]=t[s]*o+t[n+a]*i}}}),Object.assign(zi.prototype,{getValue:function(t,e){this.bind();// bind all binding
var n=this._targetGroup.nCachedObjects_,i=this._bindings[n];
// and only call .getValue on the first
void 0!==i&&i.getValue(t,e)},setValue:function(t,e){for(var n=this._bindings,i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}),Object.assign(Hi,{Composite:zi,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new Hi.Composite(t,e,n):new Hi(t,e,n)},parseTrackName:function(){
// Parent directories, delimited by '/' or ':'. Currently unused, but must
// be matched to parse the rest of the track name.
var t=new RegExp("^"+/((?:[\w-]+[\/:])*)/.source+/([\w-\.]+)?/.source+/(?:\.([\w-]+)(?:\[(.+)\])?)?/.source+/\.([\w-]+)(?:\[(.+)\])?/.source+"$"),e=["material","materials","bones"];return function(n){var i=t.exec(n);if(!i)throw new Error("PropertyBinding: Cannot parse trackName: "+n);var r={
// directoryName: matches[ 1 ], // (tschw) currently unused
nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],// required
propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(void 0!==o&&-1!==o){var a=r.nodeName.substring(o+1);
// Object names must be checked against a whitelist. Otherwise, there
// is no way to parse 'foo.bar.baz': 'baz' must be a property, but
// 'bar' could be the objectName, or part of a nodeName (which can
// include '.' characters).
-1!==e.indexOf(a)&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=a)}if(null===r.propertyName||0===r.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return r}}(),findNode:function(t,e){if(!e||""===e||"root"===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;
// search into skeleton bones.
if(t.skeleton){var n=function(t){for(var n=0;n<t.bones.length;n++){var i=t.bones[n];if(i.name===e)return i}return null}(t.skeleton);if(n)return n}
// search into node subtree.
if(t.children){var i=function(t){for(var n=0;n<t.length;n++){var r=t[n];if(r.name===e||r.uuid===e)return r;var o=i(r.children);if(o)return o}return null},r=i(t.children);if(r)return r}return null}}),Object.assign(Hi.prototype,{// prototype, continued
// these are used to "bind" a nonexistent property
_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,e){t[e]=this.node[this.propertyName]},function(t,e){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)t[e++]=n[i]},function(t,e){t[e]=this.resolvedProperty[this.propertyIndex]},function(t,e){this.resolvedProperty.toArray(t,e)}],SetterByBindingTypeAndVersioning:[[
// Direct
function(t,e){this.node[this.propertyName]=t[e]},function(t,e){this.node[this.propertyName]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.node[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[
// EntireArray
function(t,e){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=t[e++]},function(t,e){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0},function(t,e){for(var n=this.resolvedProperty,i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}],[
// ArrayElement
function(t,e){this.resolvedProperty[this.propertyIndex]=t[e]},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[
// HasToFromArray
function(t,e){this.resolvedProperty.fromArray(t,e)},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,e){this.bind(),this.getValue(t,e)},setValue:function(t,e){this.bind(),this.setValue(t,e)},
// create getter / setter pair for a property in the scene graph
bind:function(){var t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;
// ensure there is a value node
if(t||(t=Hi.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),
// set fail state so we can just 'return' on error
this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,t){if(n){var o=e.objectIndex;
// special cases were we need to reach deeper into the hierarchy to get the face materials....
switch(n){case"materials":if(!t.material)return;if(!t.material.materials)return;t=t.material.materials;break;case"bones":if(!t.skeleton)return;
// potential future optimization: skip this if propertyIndex is already an integer
// and convert the integer string to a true integer.
t=t.skeleton.bones;
// support resolving morphTarget names into indices.
for(var a=0;a<t.length;a++)if(t[a].name===o){o=a;break}break;default:if(void 0===t[n])return;t=t[n]}if(void 0!==o){if(void 0===t[o])return;t=t[o]}}
// resolve property
var s=t[i];if(void 0!==s){
// determine versioning scheme
var l=this.Versioning.None;void 0!==t.needsUpdate?(// material
l=this.Versioning.NeedsUpdate,this.targetObject=t):void 0!==t.matrixWorldNeedsUpdate&&(// node transform
l=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=t);
// determine how the property gets bound
var u=this.BindingType.Direct;if(void 0!==r){
// access a sub element of the property array (only primitives are supported right now)
if("morphTargetInfluences"===i){
// potential optimization, skip this if propertyIndex is already an integer, and convert the integer string to a true integer.
// support resolving morphTarget names into indices.
if(!t.geometry)return;if(!t.geometry.morphTargets)return;for(var a=0;a<this.node.geometry.morphTargets.length;a++)if(t.geometry.morphTargets[a].name===r){r=a;break}}u=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else void 0!==s.fromArray&&void 0!==s.toArray?(
// must use copy for Object3D.Euler/Quaternion
u=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(u=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;
// select getter / setter
this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}else{e.nodeName}}},unbind:function(){this.node=null,
// back to the prototype version of getValue / setValue
// note: avoiding to mutate the shape of 'this' via 'delete'
this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),
//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(Hi.prototype,{
// initial state of these methods that calls 'bind'
_getValue_unbound:Hi.prototype.getValue,_setValue_unbound:Hi.prototype.setValue}),Object.assign(Xi.prototype,{isAnimationObjectGroup:!0,add:function(t){for(var e=this._objects,n=e.length,i=this.nCachedObjects_,r=this._indicesByUUID,o=this._paths,a=this._parsedPaths,s=this._bindings,l=s.length,u=0,c=arguments.length;u!==c;++u){var h=arguments[u],d=h.uuid,p=r[d];if(void 0===p){
// unknown object -> add it to the ACTIVE region
p=n++,r[d]=p,e.push(h);
// accounting is done, now do the same for all bindings
for(var f=0,m=l;f!==m;++f)s[f].push(new Hi(h,o[f],a[f]))}else if(p<i){e[p];
// move existing object to the ACTIVE region
var g=--i,v=e[g];r[v.uuid]=p,e[p]=v,r[d]=g,e[g]=h;
// accounting is done, now do the same for all bindings
for(var f=0,m=l;f!==m;++f){var y=s[f],b=y[g],_=y[p];y[p]=b,void 0===_&&(
// since we do not bother to create new bindings
// for objects that are cached, the binding may
// or may not exist
_=new Hi(h,o[f],a[f])),y[g]=_}}else e[p]}// for arguments
this.nCachedObjects_=i},remove:function(t){for(var e=this._objects,n=this.nCachedObjects_,i=this._indicesByUUID,r=this._bindings,o=r.length,a=0,s=arguments.length;a!==s;++a){var l=arguments[a],u=l.uuid,c=i[u];if(void 0!==c&&c>=n){
// move existing object into the CACHED region
var h=n++,d=e[h];i[d.uuid]=c,e[c]=d,i[u]=h,e[h]=l;
// accounting is done, now do the same for all bindings
for(var p=0,f=o;p!==f;++p){var m=r[p],g=m[h],v=m[c];m[c]=g,m[h]=v}}}// for arguments
this.nCachedObjects_=n},
// remove & forget
uncache:function(t){for(var e=this._objects,n=e.length,i=this.nCachedObjects_,r=this._indicesByUUID,o=this._bindings,a=o.length,s=0,l=arguments.length;s!==l;++s){var u=arguments[s],c=u.uuid,h=r[c];if(void 0!==h)if(delete r[c],h<i){
// object is cached, shrink the CACHED region
var d=--i,p=e[d],f=--n,m=e[f];
// last cached object takes this object's place
r[p.uuid]=h,e[h]=p,
// last object goes to the activated slot and pop
r[m.uuid]=d,e[d]=m,e.pop();
// accounting is done, now do the same for all bindings
for(var g=0,v=a;g!==v;++g){var y=o[g],b=y[d],_=y[f];y[h]=b,y[d]=_,y.pop()}}else{
// object is active, just swap with the last and pop
var f=--n,m=e[f];r[m.uuid]=h,e[h]=m,e.pop();
// accounting is done, now do the same for all bindings
for(var g=0,v=a;g!==v;++g){var y=o[g];y[h]=y[f],y.pop()}}}// for arguments
this.nCachedObjects_=i},
// Internal interface used by befriended PropertyBinding.Composite:
subscribe_:function(t,e){
// returns an array of bindings for the given path that is changed
// according to the contained objects in the group
var n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(void 0!==i)return r[i];var o=this._paths,a=this._parsedPaths,s=this._objects,l=s.length,u=this.nCachedObjects_,c=new Array(l);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(c);for(var h=u,d=s.length;h!==d;++h){var p=s[h];c[h]=new Hi(p,t,e)}return c},unsubscribe_:function(t){
// tells the group to forget about a property path and no longer
// update the array previously obtained with 'subscribe_'
var e=this._bindingsIndicesByPath,n=e[t];if(void 0!==n){var i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,s=o[a];e[t[a]]=n,o[n]=s,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}),Object.assign(Wi.prototype,{
// State & Scheduling
play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){// forget scheduling
// restart clip
// forget previous loops
return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},
// return true when play has been called
isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(t){return this._startTime=t,this},setLoop:function(t,e){return this.loop=t,this.repetitions=e,this},
// Weight
// set the weight stopping any scheduled fading
// although .enabled = false yields an effective weight of zero, this
// method does *not* change .enabled, because it would be confusing
setEffectiveWeight:function(t){
// note: same logic as when updated at runtime
return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},
// return the weight considering fading and .enabled
getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(t){return this._scheduleFading(t,0,1)},fadeOut:function(t){return this._scheduleFading(t,1,0)},crossFadeFrom:function(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){var i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this},crossFadeTo:function(t,e,n){return t.crossFadeFrom(this,e,n)},stopFading:function(){var t=this._weightInterpolant;return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},
// Time Scale Control
// set the time scale stopping any scheduled warping
// although .paused = true yields an effective time scale of zero, this
// method does *not* change .paused, because it would be confusing
setEffectiveTimeScale:function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},
// return the time scale considering warping and .paused
getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},syncWith:function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},halt:function(t){return this.warp(this._effectiveTimeScale,0,t)},warp:function(t,e,n){var i=this._mixer,r=i.time,o=this._timeScaleInterpolant,a=this.timeScale;null===o&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);var s=o.parameterPositions,l=o.sampleValues;return s[0]=r,s[1]=r+n,l[0]=t/a,l[1]=e/a,this},stopWarping:function(){var t=this._timeScaleInterpolant;return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},
// Object Accessors
getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},
// Interna
_update:function(t,e,n,i){
// called by the mixer
if(!this.enabled)
// call ._updateWeight() to update ._effectiveWeight
return void this._updateWeight(t);var r=this._startTime;if(null!==r){
// check for scheduled start of action
var o=(t-r)*n;if(o<0||0===n)return;
// start
this._startTime=null,// unschedule
e=n*o}
// apply time scale and advance time
e*=this._updateTimeScale(t);var a=this._updateTime(e),s=this._updateWeight(t);if(s>0)for(var l=this._interpolants,u=this._propertyBindings,c=0,h=l.length;c!==h;++c)l[c].evaluate(a),u[c].accumulate(i,s)},_updateWeight:function(t){var e=0;if(this.enabled){e=this.weight;var n=this._weightInterpolant;if(null!==n){var i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),0===i&&(
// faded out, disable
this.enabled=!1))}}return this._effectiveWeight=e,e},_updateTimeScale:function(t){var e=0;if(!this.paused){e=this.timeScale;var n=this._timeScaleInterpolant;if(null!==n){e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),0===e?
// motion has halted, pause
this.paused=!0:
// warp done - apply final time scale
this.timeScale=e)}}return this._effectiveTimeScale=e,e},_updateTime:function(t){var e=this.time+t;if(0===t)return e;var n=this._clip.duration,i=this.loop,r=this._loopCount;if(i===ts){-1===r&&(
// just started
this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(e>=n)e=n;else{if(!(e<0))break t;e=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{// repetitive Repeat or PingPong
var o=i===ns;if(-1===r&&(
// just started
t>=0?(r=0,this._setEndings(!0,0===this.repetitions,o)):
// when looping in reverse direction, the initial
// transition through zero counts as a repetition,
// so leave loopCount at -1
this._setEndings(0===this.repetitions,!0,o)),e>=n||e<0){
// wrap around
var a=Math.floor(e/n);// signed
e-=n*a,r+=Math.abs(a);var s=this.repetitions-r;if(s<0)
// have to stop (switch state, clamp time, fire event)
this.clampWhenFinished?this.paused=!0:this.enabled=!1,e=t>0?n:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{
// keep running
if(0===s){
// entering the last round
var l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}if(o&&1==(1&r))
// invert time for the "pong round"
return this.time=e,n-e}return this.time=e,e},_setEndings:function(t,e,n){var i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(
// assuming for LoopOnce atStart == atEnd == true
i.endingStart=t?this.zeroSlopeAtStart?ss:as:ls,i.endingEnd=e?this.zeroSlopeAtEnd?ss:as:ls)},_scheduleFading:function(t,e,n){var i=this._mixer,r=i.time,o=this._weightInterpolant;null===o&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);var a=o.parameterPositions,s=o.sampleValues;return a[0]=r,s[0]=e,a[1]=r+t,s[1]=n,this}}),Object.assign(Yi.prototype,i.prototype,{_bindAction:function(t,e){var n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,s=n.uuid,l=this._bindingsByRootAndName,u=l[s];void 0===u&&(u={},l[s]=u);for(var c=0;c!==r;++c){var h=i[c],d=h.name,p=u[d];if(void 0!==p)o[c]=p;else{if(void 0!==(p=o[c])){
// existing binding, make sure the cache knows
null===p._cacheIndex&&(++p.referenceCount,this._addInactiveBinding(p,s,d));continue}var f=e&&e._propertyBindings[c].binding.parsedPath;p=new Fi(Hi.create(n,d,f),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,s,d),o[c]=p}a[c].resultBuffer=p.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){
// this action has been forgotten by the cache, but the user
// appears to be still using it -> rebind
var e=(t._localRoot||this._root).uuid,n=t._clip.uuid,i=this._actionsByClip[n];this._bindAction(t,i&&i.knownActions[0]),this._addInactiveAction(t,n,e)}
// increment reference counts / sort out state
for(var r=t._propertyBindings,o=0,a=r.length;o!==a;++o){var s=r[o];0==s.useCount++&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){
// decrement reference counts / sort out state
for(var e=t._propertyBindings,n=0,i=e.length;n!==i;++n){var r=e[n];0==--r.useCount&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},
// Memory manager
_initMemoryManager:function(){this._actions=[],// 'nActiveActions' followed by inactive ones
this._nActiveActions=0,this._actionsByClip={},
// inside:
// {
// 		knownActions: Array< AnimationAction >	- used as prototypes
// 		actionByRoot: AnimationAction			- lookup
// }
this._bindings=[],// 'nActiveBindings' followed by inactive ones
this._nActiveBindings=0,this._bindingsByRootAndName={},// inside: Map< name, PropertyMixer >
this._controlInterpolants=[],// same game as above
this._nActiveControlInterpolants=0;var t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},
// Memory management for AnimationAction objects
_isActiveAction:function(t){var e=t._cacheIndex;return null!==e&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){var i=this._actions,r=this._actionsByClip,o=r[e];if(void 0===o)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{var a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t},_removeInactiveAction:function(t){var e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;var r=t._clip.uuid,o=this._actionsByClip,a=o[r],s=a.knownActions,l=s[s.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,s[u]=l,s.pop(),t._byClipCacheIndex=null,delete a.actionByRoot[(t._localRoot||this._root).uuid],0===s.length&&delete o[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){for(var e=t._propertyBindings,n=0,i=e.length;n!==i;++n){var r=e[n];0==--r.referenceCount&&this._removeInactiveBinding(r)}},_lendAction:function(t){
// [ active actions |  inactive actions  ]
// [  active actions >| inactive actions ]
//                 s        a
//                  <-swap->
//                 a        s
var e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){
// [  active actions  | inactive actions ]
// [ active actions |< inactive actions  ]
//        a        s
//         <-swap->
//        s        a
var e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},
// Memory management for PropertyMixer objects
_addInactiveBinding:function(t,e,n){var i=this._bindingsByRootAndName,r=i[e],o=this._bindings;void 0===r&&(r={},i[e]=r),r[n]=t,t._cacheIndex=o.length,o.push(t)},_removeInactiveBinding:function(t){var e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],s=e[e.length-1],l=t._cacheIndex;s._cacheIndex=l,e[l]=s,e.pop(),delete a[r];t:{for(var u in a)break t;delete o[i]}},_lendBinding:function(t){var e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){var e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},
// Memory management of Interpolants for weight and time scale
_lendControlInterpolant:function(){var t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return void 0===n&&(n=new Zn(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){var e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),
// return an action for a clip optionally using a custom root target
// object (this method allocates a lot of dynamic memory in case a
// previously unknown clip/root combination is specified)
clipAction:function(t,e){var n=e||this._root,i=n.uuid,r="string"==typeof t?ai.findByName(n,t):t,o=null!==r?r.uuid:t,a=this._actionsByClip[o],s=null;if(void 0!==a){var l=a.actionByRoot[i];if(void 0!==l)return l;
// we know the clip, so we don't have to parse all
// the bindings again but can just copy
s=a.knownActions[0],
// also, take the clip from the prototype action
null===r&&(r=s._clip)}
// clip must be known when specified via string
if(null===r)return null;
// allocate all resources required to run it
var u=new Wi(this,r,e);
// and make the action known to the memory manager
return this._bindAction(u,s),this._addInactiveAction(u,o,i),u},
// get an existing action
existingAction:function(t,e){var n=e||this._root,i=n.uuid,r="string"==typeof t?ai.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return void 0!==a?a.actionByRoot[i]||null:null},
// deactivates all previously scheduled actions
stopAllAction:function(){var t=this._actions,e=this._nActiveActions,n=this._bindings,i=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var r=0;r!==e;++r)t[r].reset();for(var r=0;r!==i;++r)n[r].useCount=0;return this},
// advance the time and update apply the animation
update:function(t){t*=this.timeScale;
// run active actions
for(var e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1,a=0;a!==n;++a){e[a]._update(i,t,r,o)}for(var s=this._bindings,l=this._nActiveBindings,a=0;a!==l;++a)s[a].apply(o);return this},
// return this mixer's root target object
getRoot:function(){return this._root},
// free all resources specific to a particular clip
uncacheClip:function(t){var e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(void 0!==r){for(var o=r.knownActions,a=0,s=o.length;a!==s;++a){var l=o[a];this._deactivateAction(l);var u=l._cacheIndex,c=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=u,e[u]=c,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}},
// free all resources specific to a particular root target object
uncacheRoot:function(t){var e=t.uuid,n=this._actionsByClip;for(var i in n){var r=n[i].actionByRoot,o=r[e];void 0!==o&&(this._deactivateAction(o),this._removeInactiveAction(o))}var a=this._bindingsByRootAndName,s=a[e];if(void 0!==s)for(var l in s){var u=s[l];u.restoreOriginalState(),this._removeInactiveBinding(u)}},
// remove a targeted clip from the cache
uncacheAction:function(t,e){var n=this.existingAction(t,e);null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}}),Ki.prototype.clone=function(){return new Ki(void 0===this.value.clone?this.value:this.value.clone())},Zi.prototype=Object.assign(Object.create(Pt.prototype),{constructor:Zi,isInstancedBufferGeometry:!0,addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:n})},copy:function(t){var e=t.index;null!==e&&this.setIndex(e.clone());var n=t.attributes;for(var i in n){var r=n[i];this.addAttribute(i,r.clone())}for(var o=t.groups,a=0,s=o.length;a<s;a++){var l=o[a];this.addGroup(l.start,l.count,l.materialIndex)}return this}}),Object.defineProperties(qi.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}}),Object.assign(qi.prototype,{isInterleavedBufferAttribute:!0,setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}}),Object.defineProperty(Qi.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(Qi.prototype,{isInterleavedBuffer:!0,setArray:function(t){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==t?t.length/this.stride:0,this.array=t},setDynamic:function(t){return this.dynamic=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.dynamic=t.dynamic,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(var i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(t){return this.onUploadCallback=t,this}}),Ji.prototype=Object.assign(Object.create(Qi.prototype),{constructor:Ji,isInstancedInterleavedBuffer:!0,copy:function(t){return Qi.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this}}),$i.prototype=Object.assign(Object.create(mt.prototype),{constructor:$i,isInstancedBufferAttribute:!0,copy:function(t){return mt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this}}),Object.assign(tr.prototype,{linePrecision:1,set:function(t,e){
// direction is assumed to be normalized (for accurate distance calculations)
this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize()):e&&e.isOrthographicCamera&&(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),// set origin in plane of camera
this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld))},intersectObject:function(t,e){var n=[];return nr(t,this,n,e),n.sort(er),n},intersectObjects:function(t,e){var n=[];if(!1===Array.isArray(t))return n;for(var i=0,r=t.length;i<r;i++)nr(t[i],this,n,e);return n.sort(er),n}}),Object.assign(ir.prototype,{start:function(){this.startTime=("undefined"==typeof performance?Date:performance).now(),// see #10732
this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var e=("undefined"==typeof performance?Date:performance).now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}),Object.assign(rr.prototype,{set:function(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},
// restrict phi to be betwee EPS and PI-EPS
makeSafe:function(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this},setFromVector3:function(t){// equator angle around y-up axis
return this.radius=t.length(),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t.x,t.z),this.phi=Math.acos(As.clamp(t.y/this.radius,-1,1))),this}}),Object.assign(or.prototype,{set:function(t,e,n){return this.radius=t,this.theta=e,this.y=n,this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},setFromVector3:function(t){return this.radius=Math.sqrt(t.x*t.x+t.z*t.z),this.theta=Math.atan2(t.x,t.z),this.y=t.y,this}}),ar.prototype=Object.create(Lt.prototype),ar.prototype.constructor=ar,ar.prototype.createAnimation=function(t,e,n,i){var r={start:e,end:n,length:n-e+1,fps:i,duration:(n-e)/i,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[t]=r,this.animationsList.push(r)},ar.prototype.autoCreateAnimations=function(t){for(var e,n={},i=this.geometry,r=0,o=i.morphTargets.length;r<o;r++){var a=i.morphTargets[r],s=a.name.match(/([a-z]+)_?(\d+)/i);if(s&&s.length>1){var l=s[1];n[l]||(n[l]={start:1/0,end:-1/0});var u=n[l];r<u.start&&(u.start=r),r>u.end&&(u.end=r),e||(e=l)}}for(var l in n){var u=n[l];this.createAnimation(l,u.start,u.end,t)}this.firstAnimation=e},ar.prototype.setAnimationDirectionForward=function(t){var e=this.animationsMap[t];e&&(e.direction=1,e.directionBackwards=!1)},ar.prototype.setAnimationDirectionBackward=function(t){var e=this.animationsMap[t];e&&(e.direction=-1,e.directionBackwards=!0)},ar.prototype.setAnimationFPS=function(t,e){var n=this.animationsMap[t];n&&(n.fps=e,n.duration=(n.end-n.start)/n.fps)},ar.prototype.setAnimationDuration=function(t,e){var n=this.animationsMap[t];n&&(n.duration=e,n.fps=(n.end-n.start)/n.duration)},ar.prototype.setAnimationWeight=function(t,e){var n=this.animationsMap[t];n&&(n.weight=e)},ar.prototype.setAnimationTime=function(t,e){var n=this.animationsMap[t];n&&(n.time=e)},ar.prototype.getAnimationTime=function(t){var e=0,n=this.animationsMap[t];return n&&(e=n.time),e},ar.prototype.getAnimationDuration=function(t){var e=-1,n=this.animationsMap[t];return n&&(e=n.duration),e},ar.prototype.playAnimation=function(t){var e=this.animationsMap[t];e&&(e.time=0,e.active=!0)},ar.prototype.stopAnimation=function(t){var e=this.animationsMap[t];e&&(e.active=!1)},ar.prototype.update=function(t){for(var e=0,n=this.animationsList.length;e<n;e++){var i=this.animationsList[e];if(i.active){var r=i.duration/i.length;i.time+=i.direction*t,i.mirroredLoop?(i.time>i.duration||i.time<0)&&(i.direction*=-1,i.time>i.duration&&(i.time=i.duration,i.directionBackwards=!0),i.time<0&&(i.time=0,i.directionBackwards=!1)):(i.time=i.time%i.duration,i.time<0&&(i.time+=i.duration));var o=i.start+As.clamp(Math.floor(i.time/r),0,i.length-1),a=i.weight;o!==i.currentFrame&&(this.morphTargetInfluences[i.lastFrame]=0,this.morphTargetInfluences[i.currentFrame]=1*a,this.morphTargetInfluences[o]=0,i.lastFrame=i.currentFrame,i.currentFrame=o);var s=i.time%r/r;i.directionBackwards&&(s=1-s),i.currentFrame!==i.lastFrame?(this.morphTargetInfluences[i.currentFrame]=s*a,this.morphTargetInfluences[i.lastFrame]=(1-s)*a):this.morphTargetInfluences[i.currentFrame]=a}}},sr.prototype=Object.create(ct.prototype),sr.prototype.constructor=sr,sr.prototype.isImmediateRenderObject=!0,lr.prototype=Object.create(Te.prototype),lr.prototype.constructor=lr,lr.prototype.update=function(){var t=new c,e=new c,n=new it;return function(){var i=["a","b","c"];this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);var r=this.object.matrixWorld,o=this.geometry.attributes.position,a=this.object.geometry;if(a&&a.isGeometry)for(var s=a.vertices,l=a.faces,u=0,c=0,h=l.length;c<h;c++)for(var d=l[c],p=0,f=d.vertexNormals.length;p<f;p++){var m=s[d[i[p]]],g=d.vertexNormals[p];t.copy(m).applyMatrix4(r),e.copy(g).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),o.setXYZ(u,t.x,t.y,t.z),u+=1,o.setXYZ(u,e.x,e.y,e.z),u+=1}else if(a&&a.isBufferGeometry)
// for simplicity, ignore index and drawcalls, and render every normal
for(var v=a.attributes.position,y=a.attributes.normal,u=0,p=0,f=v.count;p<f;p++)t.set(v.getX(p),v.getY(p),v.getZ(p)).applyMatrix4(r),e.set(y.getX(p),y.getY(p),y.getZ(p)),e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),o.setXYZ(u,t.x,t.y,t.z),u+=1,o.setXYZ(u,e.x,e.y,e.z),u+=1;o.needsUpdate=!0}}(),ur.prototype=Object.create(ct.prototype),ur.prototype.constructor=ur,ur.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},ur.prototype.update=function(){var t=new c,e=new c;return function(){var n=this.light.distance?this.light.distance:1e3,i=n*Math.tan(this.light.angle);this.cone.scale.set(i,i,n),t.setFromMatrixPosition(this.light.matrixWorld),e.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(e.sub(t)),this.cone.material.color.copy(this.light.color)}}(),cr.prototype=Object.create(Te.prototype),cr.prototype.constructor=cr,cr.prototype.getBoneList=function(t){var e=[];t&&t.isBone&&e.push(t);for(var n=0;n<t.children.length;n++)e.push.apply(e,this.getBoneList(t.children[n]));return e},cr.prototype.update=function(){var t=new c,e=new h,n=new h;return function(){var i=this.geometry,r=i.getAttribute("position");n.getInverse(this.root.matrixWorld);for(var o=0,a=0;o<this.bones.length;o++){var s=this.bones[o];s.parent&&s.parent.isBone&&(e.multiplyMatrices(n,s.matrixWorld),t.setFromMatrixPosition(e),r.setXYZ(a,t.x,t.y,t.z),e.multiplyMatrices(n,s.parent.matrixWorld),t.setFromMatrixPosition(e),r.setXYZ(a+1,t.x,t.y,t.z),a+=2)}i.getAttribute("position").needsUpdate=!0}}(),hr.prototype=Object.create(Lt.prototype),hr.prototype.constructor=hr,hr.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},hr.prototype.update=function(){this.material.color.copy(this.light.color)},dr.prototype=Object.create(ct.prototype),dr.prototype.constructor=dr,dr.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},dr.prototype.update=function(){var t=this.children[0];
// update material
t.material.color.copy(this.light.color);
// calculate new dimensions of the helper
var e=.5*this.light.width,n=.5*this.light.height,i=t.geometry.attributes.position,r=i.array;
// update vertices
r[0]=e,r[1]=-n,r[2]=0,r[3]=e,r[4]=n,r[5]=0,r[6]=-e,r[7]=n,r[8]=0,r[9]=-e,r[10]=-n,r[11]=0,r[12]=e,r[13]=-n,r[14]=0,i.needsUpdate=!0},pr.prototype=Object.create(ct.prototype),pr.prototype.constructor=pr,pr.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},pr.prototype.update=function(){var t=new c,e=new K,n=new K;return function(){var i=this.children[0],r=i.geometry.getAttribute("color");e.copy(this.light.color),n.copy(this.light.groundColor);for(var o=0,a=r.count;o<a;o++){var s=o<a/2?e:n;r.setXYZ(o,s.r,s.g,s.b)}i.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()),r.needsUpdate=!0}}(),fr.prototype=Object.create(Te.prototype),fr.prototype.constructor=fr,mr.prototype=Object.create(Te.prototype),mr.prototype.constructor=mr,gr.prototype=Object.create(Te.prototype),gr.prototype.constructor=gr,gr.prototype.update=function(){var t=new c,e=new c,n=new it;return function(){this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);for(var i=this.object.matrixWorld,r=this.geometry.attributes.position,o=this.object.geometry,a=o.vertices,s=o.faces,l=0,u=0,c=s.length;u<c;u++){var h=s[u],d=h.normal;t.copy(a[h.a]).add(a[h.b]).add(a[h.c]).divideScalar(3).applyMatrix4(i),e.copy(d).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),r.setXYZ(l,t.x,t.y,t.z),l+=1,r.setXYZ(l,e.x,e.y,e.z),l+=1}r.needsUpdate=!0}}(),vr.prototype=Object.create(ct.prototype),vr.prototype.constructor=vr,vr.prototype.dispose=function(){var t=this.children[0],e=this.children[1];t.geometry.dispose(),t.material.dispose(),e.geometry.dispose(),e.material.dispose()},vr.prototype.update=function(){var t=new c,e=new c,n=new c;return function(){t.setFromMatrixPosition(this.light.matrixWorld),e.setFromMatrixPosition(this.light.target.matrixWorld),n.subVectors(e,t);var i=this.children[0],r=this.children[1];i.lookAt(n),i.material.color.copy(this.light.color),r.lookAt(n),r.scale.z=n.length()}}(),yr.prototype=Object.create(Te.prototype),yr.prototype.constructor=yr,yr.prototype.update=function(){function t(t,o,a,s){i.set(o,a,s).unproject(r);var l=n[t];if(void 0!==l)for(var u=e.getAttribute("position"),c=0,h=l.length;c<h;c++)u.setXYZ(l[c],i.x,i.y,i.z)}var e,n,i=new c,r=new Dt;return function(){e=this.geometry,n=this.pointMap;
// we need just camera projection matrix
// world matrix must be identity
r.projectionMatrix.copy(this.camera.projectionMatrix),
// center / target
t("c",0,0,-1),t("t",0,0,1),
// near
t("n1",-1,-1,-1),t("n2",1,-1,-1),t("n3",-1,1,-1),t("n4",1,1,-1),
// far
t("f1",-1,-1,1),t("f2",1,-1,1),t("f3",-1,1,1),t("f4",1,1,1),
// up
t("u1",.7,1.1,-1),t("u2",-.7,1.1,-1),t("u3",0,2,-1),
// cross
t("cf1",-1,0,1),t("cf2",1,0,1),t("cf3",0,-1,1),t("cf4",0,1,1),t("cn1",-1,0,-1),t("cn2",1,0,-1),t("cn3",0,-1,-1),t("cn4",0,1,-1),e.getAttribute("position").needsUpdate=!0}}(),br.prototype=Object.create(Te.prototype),br.prototype.constructor=br,br.prototype.update=function(){var t=new et;return function(e){if(void 0!==this.object&&t.setFromObject(this.object),!t.isEmpty()){var n=t.min,i=t.max,r=this.geometry.attributes.position,o=r.array;o[0]=i.x,o[1]=i.y,o[2]=i.z,o[3]=n.x,o[4]=i.y,o[5]=i.z,o[6]=n.x,o[7]=n.y,o[8]=i.z,o[9]=i.x,o[10]=n.y,o[11]=i.z,o[12]=i.x,o[13]=i.y,o[14]=n.z,o[15]=n.x,o[16]=i.y,o[17]=n.z,o[18]=n.x,o[19]=n.y,o[20]=n.z,o[21]=i.x,o[22]=n.y,o[23]=n.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}}}(),br.prototype.setFromObject=function(t){return this.object=t,this.update(),this};/**
 * @author WestLangley / http://github.com/WestLangley
 * @author zz85 / http://github.com/zz85
 * @author bhouston / http://clara.io
 *
 * Creates an arrow for visualizing directions
 *
 * Parameters:
 *  dir - Vector3
 *  origin - Vector3
 *  length - Number
 *  color - color in hex value
 *  headLength - Number
 *  headWidth - Number
 */
var tl,el;_r.prototype=Object.create(ct.prototype),_r.prototype.constructor=_r,_r.prototype.setDirection=function(){var t,e=new c;return function(n){
// dir is assumed to be normalized
n.y>.99999?this.quaternion.set(0,0,0,1):n.y<-.99999?this.quaternion.set(1,0,0,0):(e.set(n.z,0,-n.x).normalize(),t=Math.acos(n.y),this.quaternion.setFromAxisAngle(e,t))}}(),_r.prototype.setLength=function(t,e,n){void 0===e&&(e=.2*t),void 0===n&&(n=.2*e),this.line.scale.set(1,Math.max(0,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()},_r.prototype.setColor=function(t){this.line.material.color.copy(t),this.cone.material.color.copy(t)},xr.prototype=Object.create(Te.prototype),xr.prototype.constructor=xr;
//
var nl=new c,il=new Ar,rl=new Ar,ol=new Ar;wr.prototype=Object.create(Ai.prototype),wr.prototype.constructor=wr,wr.prototype.getPoint=function(t){var e=this.points,n=e.length,i=(n-(this.closed?0:1))*t,r=Math.floor(i),o=i-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/e.length)+1)*e.length:0===o&&r===n-1&&(r=n-2,o=1);var a,s,l,u;if(// 4 points
this.closed||r>0?a=e[(r-1)%n]:(
// extrapolate first point
nl.subVectors(e[0],e[1]).add(e[0]),a=nl),s=e[r%n],l=e[(r+1)%n],this.closed||r+2<n?u=e[(r+2)%n]:(
// extrapolate last point
nl.subVectors(e[n-1],e[n-2]).add(e[n-1]),u=nl),void 0===this.type||"centripetal"===this.type||"chordal"===this.type){
// init Centripetal / Chordal Catmull-Rom
var h="chordal"===this.type?.5:.25,d=Math.pow(a.distanceToSquared(s),h),p=Math.pow(s.distanceToSquared(l),h),f=Math.pow(l.distanceToSquared(u),h);
// safety check for repeated points
p<1e-4&&(p=1),d<1e-4&&(d=p),f<1e-4&&(f=p),il.initNonuniformCatmullRom(a.x,s.x,l.x,u.x,d,p,f),rl.initNonuniformCatmullRom(a.y,s.y,l.y,u.y,d,p,f),ol.initNonuniformCatmullRom(a.z,s.z,l.z,u.z,d,p,f)}else if("catmullrom"===this.type){var m=void 0!==this.tension?this.tension:.5;il.initCatmullRom(a.x,s.x,l.x,u.x,m),rl.initCatmullRom(a.y,s.y,l.y,u.y,m),ol.initCatmullRom(a.z,s.z,l.z,u.z,m)}return new c(il.calc(o),rl.calc(o),ol.calc(o))},Sr.prototype=Object.create(Ai.prototype),Sr.prototype.constructor=Sr,Sr.prototype.getPoint=function(t){var e=this.v0,n=this.v1,i=this.v2,r=this.v3;return new c(xi(t,e.x,n.x,i.x,r.x),xi(t,e.y,n.y,i.y,r.y),xi(t,e.z,n.z,i.z,r.z))},Mr.prototype=Object.create(Ai.prototype),Mr.prototype.constructor=Mr,Mr.prototype.getPoint=function(t){var e=this.v0,n=this.v1,i=this.v2;return new c(gi(t,e.x,n.x,i.x),gi(t,e.y,n.y,i.y),gi(t,e.z,n.z,i.z))},Er.prototype=Object.create(Ai.prototype),Er.prototype.constructor=Er,Er.prototype.getPoint=function(t){if(1===t)return this.v2.clone();var e=new c;// diff
return e.subVectors(this.v2,this.v1),e.multiplyScalar(t),e.add(this.v1),e},Tr.prototype=Object.create(Mi.prototype),Tr.prototype.constructor=Tr;/**
 * @author alteredq / http://alteredqualia.com/
 */
var al={createMultiMaterialObject:function(t,e){for(var n=new Ne,i=0,r=e.length;i<r;i++)n.add(new Lt(t,e[i]));return n},detach:function(t,e,n){t.applyMatrix(e.matrixWorld),e.remove(t),n.add(t)},attach:function(t,e,n){var i=new h;i.getInverse(n.matrixWorld),t.applyMatrix(i),e.remove(t),n.add(t)}},sl=0,ll=1;
//
Ai.create=function(t,e){return t.prototype=Object.create(Ai.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Kr.prototype=Object.create(wr.prototype),Zr.prototype=Object.create(wr.prototype),qr.prototype=Object.create(wr.prototype),Object.assign(qr.prototype,{initFromArray:function(t){},getControlPointsArray:function(t){},reparametrizeByArcLength:function(t){}}),fr.prototype.setColors=function(){},
//
Object.assign(Z.prototype,{center:function(t){return this.getCenter(t)},empty:function(){return this.isEmpty()},isIntersectionBox:function(t){return this.intersectsBox(t)},size:function(t){return this.getSize(t)}}),Object.assign(et.prototype,{center:function(t){return this.getCenter(t)},empty:function(){return this.isEmpty()},isIntersectionBox:function(t){return this.intersectsBox(t)},isIntersectionSphere:function(t){return this.intersectsSphere(t)},size:function(t){return this.getSize(t)}}),ht.prototype.center=function(t){return this.getCenter(t)},As.random16=function(){return Math.random()},Object.assign(it.prototype,{flattenToArrayOffset:function(t,e){return this.toArray(t,e)},multiplyVector3:function(t){return t.applyMatrix3(this)},multiplyVector3Array:function(t){return this.applyToVector3Array(t)},applyToBuffer:function(t,e,n){return this.applyToBufferAttribute(t)},applyToVector3Array:function(t,e,n){}}),Object.assign(h.prototype,{extractPosition:function(t){return this.copyPosition(t)},flattenToArrayOffset:function(t,e){return this.toArray(t,e)},getPosition:function(){var t;return function(){return void 0===t&&(t=new c),t.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(t){return this.makeRotationFromQuaternion(t)},multiplyToArray:function(){},multiplyVector3:function(t){return t.applyMatrix4(this)},multiplyVector4:function(t){return t.applyMatrix4(this)},multiplyVector3Array:function(t){return this.applyToVector3Array(t)},rotateAxis:function(t){t.transformDirection(this)},crossVector:function(t){return t.applyMatrix4(this)},translate:function(){},rotateX:function(){},rotateY:function(){},rotateZ:function(){},rotateByAxis:function(){},applyToBuffer:function(t,e,n){return this.applyToBufferAttribute(t)},applyToVector3Array:function(t,e,n){},makeFrustum:function(t,e,n,i,r,o){return this.makePerspective(t,e,i,n,r,o)}}),rt.prototype.isIntersectionLine=function(t){return this.intersectsLine(t)},u.prototype.multiplyVector3=function(t){return t.applyQuaternion(this)},Object.assign(st.prototype,{isIntersectionBox:function(t){return this.intersectsBox(t)},isIntersectionPlane:function(t){return this.intersectsPlane(t)},isIntersectionSphere:function(t){return this.intersectsSphere(t)}}),Object.assign(Li.prototype,{extrude:function(t){return new en(this,t)},makeGeometry:function(t){return new dn(this,t)}}),Object.assign(r.prototype,{fromAttribute:function(t,e,n){return this.fromBufferAttribute(t,e,n)}}),Object.assign(c.prototype,{setEulerFromRotationMatrix:function(){},setEulerFromQuaternion:function(){},getPositionFromMatrix:function(t){return this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return this.setFromMatrixColumn(e,t)},applyProjection:function(t){return this.applyMatrix4(t)},fromAttribute:function(t,e,n){return this.fromBufferAttribute(t,e,n)}}),Object.assign(a.prototype,{fromAttribute:function(t,e,n){return this.fromBufferAttribute(t,e,n)}}),
//
Ct.prototype.computeTangents=function(){},Object.assign(ct.prototype,{getChildByName:function(t){return this.getObjectByName(t)},renderDepth:function(){},translate:function(t,e){return this.translateOnAxis(e,t)}}),Object.defineProperties(ct.prototype,{eulerOrder:{get:function(){return this.rotation.order},set:function(t){this.rotation.order=t}},useQuaternion:{get:function(){},set:function(){}}}),Object.defineProperties(xe.prototype,{objects:{get:function(){return this.levels}}}),Object.defineProperty(Ae.prototype,"useVertexTexture",{get:function(){},set:function(){}}),Object.defineProperty(Ai.prototype,"__arcLengthDivisions",{get:function(){return this.arcLengthDivisions},set:function(t){this.arcLengthDivisions=t}}),
//
Bt.prototype.setLens=function(t,e){void 0!==e&&(this.filmGauge=e),this.setFocalLength(t)},
//
Object.defineProperties(jn.prototype,{onlyShadow:{set:function(){}},shadowCameraFov:{set:function(t){this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){}},shadowBias:{set:function(t){this.shadow.bias=t}},shadowDarkness:{set:function(){}},shadowMapWidth:{set:function(t){this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){this.shadow.mapSize.height=t}}}),
//
Object.defineProperties(mt.prototype,{length:{get:function(){return this.array.length}}}),Object.assign(Pt.prototype,{addIndex:function(t){this.setIndex(t)},addDrawCall:function(t,e,n){this.addGroup(t,e)},clearDrawCalls:function(){this.clearGroups()},computeTangents:function(){},computeOffsets:function(){}}),Object.defineProperties(Pt.prototype,{drawcalls:{get:function(){return this.groups}},offsets:{get:function(){return this.groups}}}),
//
Object.defineProperties(Ki.prototype,{dynamic:{set:function(){}},onUpdate:{value:function(){return this}}}),
//
Object.defineProperties(J.prototype,{wrapAround:{get:function(){},set:function(){}},wrapRGB:{get:function(){return new K}}}),Object.defineProperties(Mn.prototype,{metal:{get:function(){return!1},set:function(){}}}),Object.defineProperties($.prototype,{derivatives:{get:function(){return this.extensions.derivatives},set:function(t){this.extensions.derivatives=t}}}),
//
Object.assign(fe.prototype,{getCurrentRenderTarget:function(){return this.getRenderTarget()},supportsFloatTextures:function(){return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return this.capabilities.vertexTextures},supportsInstancedArrays:function(){return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){this.setScissorTest(t)},initMaterial:function(){},addPrePlugin:function(){},addPostPlugin:function(){},updateShadowMap:function(){}}),Object.defineProperties(fe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){this.shadowMap.type=t}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(t){this.shadowMap.cullFace=t}}}),Object.defineProperties(at.prototype,{cullFace:{get:function(){return this.renderReverseSided?lo:so},set:function(t){var e=t!==so;this.renderReverseSided=e}}}),
//
Object.defineProperties(s.prototype,{wrapS:{get:function(){return this.texture.wrapS},set:function(t){this.texture.wrapS=t}},wrapT:{get:function(){return this.texture.wrapT},set:function(t){this.texture.wrapT=t}},magFilter:{get:function(){return this.texture.magFilter},set:function(t){this.texture.magFilter=t}},minFilter:{get:function(){return this.texture.minFilter},set:function(t){this.texture.minFilter=t}},anisotropy:{get:function(){return this.texture.anisotropy},set:function(t){this.texture.anisotropy=t}},offset:{get:function(){return this.texture.offset},set:function(t){this.texture.offset=t}},repeat:{get:function(){return this.texture.repeat},set:function(t){this.texture.repeat=t}},format:{get:function(){return this.texture.format},set:function(t){this.texture.format=t}},type:{get:function(){return this.texture.type},set:function(t){this.texture.type=t}},generateMipmaps:{get:function(){return this.texture.generateMipmaps},set:function(t){this.texture.generateMipmaps=t}}}),
//
ki.prototype.load=function(t){var e=this;return(new Ri).load(t,function(t){e.setBuffer(t)}),this},Gi.prototype.getData=function(){return this.getFrequencyData()};
//
var ul={merge:function(t,e,n){var i;e.isMesh&&(e.matrixAutoUpdate&&e.updateMatrix(),i=e.matrix,e=e.geometry),t.merge(e,i,n)},center:function(t){return t.center()}},cl={crossOrigin:void 0,loadTexture:function(t,e,n,i){var r=new Bn;r.setCrossOrigin(this.crossOrigin);var o=r.load(t,n,void 0,i);return e&&(o.mapping=e),o},loadTextureCube:function(t,e,n,i){var r=new Dn;r.setCrossOrigin(this.crossOrigin);var o=r.load(t,n,void 0,i);return e&&(o.mapping=e),o},loadCompressedTexture:function(){},loadCompressedTextureCube:function(){}}},/***/
"./src/app.js":/***/
function(t,e,n){"use strict";
// console.log(require.resolve('./glsl/semFrag.glsl'))
// const shaders = {
//   semVert,
//   semFrag
// }
function i(t){function e(t){if(v)return t.onComplete&&t.onComplete();d.load("matcap",t.matcap,"texture").onComplete(function(e){if(e)return t.onError&&t.onError(e);v=!0,t.onComplete&&t.onComplete()})}function i(){v&&(p.matcap=d.get("matcap"),m.cube=new c.TorusKnotGeometry(13,4,64,32),f.matcap=n.i(a.a)(c,{uniforms:{tMatCap:{type:"t",value:p.matcap}},shading:c.SmoothShading}),g.cube=new c.Mesh(m.cube,f.matcap),h.add(g.cube),y=!0)}function s(t){if(v&&y){var e=n.i(r.a)(t);b+=t,g.cube.rotation.x+=.02*_.speed*e}}function l(t,e){}function u(){b=0,y=!1,v=!1,d=n.i(o.a)();for(var t in f)f[t].dispose();for(var e in m)m[e].dispose();for(var i in p)p[i].dispose();h.traverse(function(t){return t instanceof c.Mesh&&h.remove(t)})}t=t||{};var c=t.three,h=new c.Group,d=n.i(o.a)(c),p={},f={},m={},g={},v=!1,y=!1,b=0,_={speed:1};return{params:_,group:h,preload:e,setup:i,update:s,resize:l,dispose:u}}/* harmony import */
var r=n("./src/utils/timeAdjust.js"),o=n("./src/utils/preloader.js"),a=n("./src/materials.js");/* harmony default export */
e.a=i},/***/
"./src/materials.js":/***/
function(t,e,n){"use strict";
// bonjour
function i(t,e){var i=new t.ShaderMaterial(o()({},{vertexShader:n("./src/shaders/sem.vert"),fragmentShader:n("./src/shaders/sem.frag")},e));return i}/* harmony export (binding) */
n.d(e,"a",function(){return i});/* harmony import */
var r=n("./node_modules/babel-runtime/core-js/object/assign.js"),o=n.n(r)},/***/
"./src/shaders/sem.frag":/***/
function(t,e){t.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D tMatCap;\n\nvarying vec3 e;\nvarying vec3 n;\n\nvoid main() {\n\n  vec3 r = reflect( e, n );\n  float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );\n  vec2 vN = r.xy / m + .5;\n\n  vec3 base = texture2D( tMatCap, vN ).rgb;\n\n  gl_FragColor = vec4( base, 1. );\n\n}"},/***/
"./src/shaders/sem.vert":/***/
function(t,e){t.exports="#define GLSLIFY 1\nvarying vec3 e;\nvarying vec3 n;\n\nvoid main() {\n\n  e = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );\n  n = normalize( normalMatrix * normal );\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );\n\n}"},/***/
"./src/utils/preloader.js":/***/
function(t,e,n){"use strict";function i(t){function e(t){if(l[t])return l[t]}function n(e,n,i){
// already loaded, loading or wrong loader/url, we skip this asset
return n=s+n,!l[e]&&!~u.indexOf(e)&&a[i]&&n&&(u.push(e),c.push(a[i]({url:n,three:t,onComplete:function(t){l[e]=t}}))),h}function i(t){return o.a.all(c).then(function(){u=[],c=[],t(null)}).catch(function(e){u=[],c=[],t(e)}),h}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=r.basePath||"",l={},u=[],c=[],h={get:e,load:n,onComplete:i};return h}/* harmony import */
var r=n("./node_modules/babel-runtime/core-js/promise.js"),o=n.n(r),a={texture:function(t){return new o.a(function(e,n){(new t.three.TextureLoader).load(t.url,function(n){t.onComplete(n),e(n)},function(){},function(){n(new Error("Error loading "+t.url))})})}};/* harmony default export */
e.a=i},/***/
"./src/utils/timeAdjust.js":/***/
function(t,e,n){"use strict";
// Return a factor to adjust value based on delta time
function i(t){return t/16.67}/* harmony default export */
e.a=i}});