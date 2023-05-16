/**
 * spin-wheel (ESM) v4.0.0
 * https://github.com/CrazyTim/spin-wheel#readme
 * Copyright (c) CrazyTim 2023.
 * Distributed under the MIT License.
 */
var D=Object.defineProperty;var L=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var b=Math.pow,S=(s,e,t)=>e in s?D(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,_=(s,e)=>{for(var t in e||(e={}))O.call(e,t)&&S(s,t,e[t]);if(L)for(var t of L(e))j.call(e,t)&&S(s,t,e[t]);return s};function w(s=0,e=0,t=14){return parseFloat((Math.random()*(e-s)+s).toFixed(t))}function d(s=0){return s*Math.PI/180}function M(s,e,t){return e<t?e<=s&&s<t:e<=s||s<t}function x(s,e,t,i){i.save(),i.font=`1px ${e}`;let n=i.measureText(s).width;return i.restore(),t/n}function I(s={x:0,y:0},e,t,i){return b(s.x-e,2)+b(s.y-t,2)<=b(i,2)}function p(s={x:0,y:0},e={},t=1){let i=e.getBoundingClientRect();return{x:(s.x-i.left)*t,y:(s.y-i.top)*t}}function y(s,e,t,i){let n=s-t,r=e-i,a=Math.atan2(-r,-n);return a*=180/Math.PI,a<0&&(a+=360),a}function N(s=0,e=0){let t=s+e,i;return t>0?i=t%360:i=360+t%360,i===360&&(i=0),i}function A(s=0,e=0){let t=180-e;return 180-N(s,t)}function E(s=0,e=0,t=1){let i=(s%360+e)%360;return i=H(i),i=(t===1?360-i:360+i)%360,i*=t,s+i}function f(s){return typeof s=="object"&&!Array.isArray(s)&&s!==null}function u(s){return typeof s=="number"&&!Number.isNaN(s)}function h({val:s,isValid:e,errorMessage:t,defaultValue:i,action:n=null}){if(e)return n?n():s;if(s===void 0)return i;throw new Error(t)}function C(s){return s&&s.complete&&s.naturalWidth!==0&&s.naturalHeight!==0}function H(s=0){return Number(s.toFixed(9))}function W(s){return Math.sin(s*Math.PI/2)}var X=Object.freeze({left:"left",right:"right",center:"center"}),o=Object.freeze({wheel:{borderColor:"#000",borderWidth:1,debug:!1,image:null,isInteractive:!0,itemBackgroundColors:["#fff"],itemLabelAlign:X.right,itemLabelBaselineOffset:0,itemLabelColors:["#000"],itemLabelFont:"sans-serif",itemLabelFontSizeMax:500,itemLabelRadius:.85,itemLabelRadiusMax:.2,itemLabelRotation:0,items:[],lineColor:"#000",lineWidth:1,pixelRatio:0,radius:.95,rotation:0,rotationResistance:-35,rotationSpeed:0,rotationSpeedMax:250,offset:{w:0,h:0},onCurrentIndexChange:null,onRest:null,onSpin:null,overlayImage:null,pointerAngle:0},item:{backgroundColor:null,image:null,imageRadius:.5,imageRotation:0,imageScale:1,label:"",labelColor:null,labelFont:null,weight:1}}),c=Object.freeze({pointerLineColor:"#ff00ff",labelOutlineColor:"#ff00ff",labelRadiusColor:"#00ff00",dragEventHue:200});function T(s={}){let e=s.canvas;s._handler_onPointerMoveRefreshCursor=(i={})=>{let n={x:i.clientX,y:i.clientY};s.isCursorOverWheel=s.wheelHitTest(n),s.refreshCursor()},s._handler_onMouseMoveRefreshCursor=(i={})=>{let n={x:i.clientX,y:i.clientY};s.isCursorOverWheel=s.wheelHitTest(n),s.refreshCursor()},s._handler_onPointerDown=(i={})=>{let n={x:i.clientX,y:i.clientY};if(!s.isInteractive||!s.wheelHitTest(n))return;i.preventDefault(),s.dragStart(n),e.setPointerCapture(i.pointerId),e.addEventListener("pointermove",r),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a);function r(l={}){l.preventDefault(),s.dragMove({x:l.clientX,y:l.clientY})}function a(l={}){l.preventDefault(),e.releasePointerCapture(l.pointerId),e.removeEventListener("pointermove",r),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a),s.dragEnd()}},s._handler_onMouseDown=(i={})=>{let n={x:i.clientX,y:i.clientY};if(!s.isInteractive||!s.wheelHitTest(n))return;s.dragStart(n),document.addEventListener("mousemove",r),document.addEventListener("mouseup",a);function r(l={}){l.preventDefault(),s.dragMove({x:l.clientX,y:l.clientY})}function a(l={}){l.preventDefault(),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a),s.dragEnd()}},s._handler_onTouchStart=(i={})=>{let n={x:i.targetTouches[0].clientX,y:i.targetTouches[0].clientY};if(!s.isInteractive||!s.wheelHitTest(n))return;i.preventDefault(),s.dragStart(n),e.addEventListener("touchmove",r),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a);function r(l={}){l.preventDefault(),s.dragMove({x:l.targetTouches[0].clientX,y:l.targetTouches[0].clientY})}function a(l={}){l.preventDefault(),e.removeEventListener("touchmove",r),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",a),s.dragEnd()}},"PointerEvent"in window?(e.addEventListener("pointerdown",s._handler_onPointerDown),e.addEventListener("pointermove",s._handler_onPointerMoveRefreshCursor)):(e.addEventListener("touchstart",s._handler_onTouchStart),e.addEventListener("mousedown",s._handler_onMouseDown),e.addEventListener("mousemove",s._handler_onMouseMoveRefreshCursor)),s._handler_onResize=s.resize.bind(s),window.addEventListener("resize",s._handler_onResize);let t=()=>{s.resize(),matchMedia(`(resolution: ${pr}dppx)`).addEventListener("change",t,{once:!0})}}function V(s={}){let e=s.canvas;"PointerEvent"in window?(e.removeEventListener("pointerdown",s._handler_onPointerDown),e.removeEventListener("pointermove",s._handler_onPointerMoveRefreshCursor)):(e.removeEventListener("touchstart",s._handler_onTouchStart),e.removeEventListener("mousedown",s._handler_onMouseDown),e.removeEventListener("mousemove",s._handler_onMouseMoveRefreshCursor)),window.removeEventListener("resize",s._handler_onResize)}var R=class{constructor(e,t={}){if(!f(e))throw new Error("wheel must be an instance of Wheel");if(!f(t)&&t!==null)throw new Error("props must be an Object or null");this._wheel=e;for(let i of Object.keys(o.item))this["_"+i]=o.item[i];t?this.init(t):this.init(o.item)}init(e={}){this.backgroundColor=e.backgroundColor,this.image=e.image,this.imageRadius=e.imageRadius,this.imageRotation=e.imageRotation,this.imageScale=e.imageScale,this.label=e.label,this.labelColor=e.labelColor,this.value=e.value,this.weight=e.weight}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){typeof e=="string"?this._backgroundColor=e:this._backgroundColor=o.item.backgroundColor,this._wheel.refresh()}get image(){return this._image}set image(e){let t;typeof e=="string"?(t=new Image,t.src=e,t.onload=i=>this._wheel.refresh()):t=o.item.image,this._image=t,this._wheel.refresh()}get imageRadius(){return this._imageRadius}set imageRadius(e){typeof e=="number"?this._imageRadius=e:this._imageRadius=o.item.imageRadius,this._wheel.refresh()}get imageRotation(){return this._imageRotation}set imageRotation(e){typeof e=="number"?this._imageRotation=e:this._imageRotation=o.item.imageRotation,this._wheel.refresh()}get imageScale(){return this._imageScale}set imageScale(e){typeof e=="number"?this._imageScale=e:this._imageScale=o.item.imageScale,this._wheel.refresh()}get label(){return this._label}set label(e){typeof e=="string"?this._label=e:this._label=o.item.label,this._wheel.refresh()}get labelColor(){return this._labelColor}set labelColor(e){typeof e=="string"?this._labelColor=e:this._labelColor=o.item.labelColor,this._wheel.refresh()}get value(){return this._value}set value(e){this._value=e}get weight(){return this._weight}set weight(e){typeof e=="number"?this._weight=e:this._weight=o.item.weight}getIndex(){let e=this._wheel.items.findIndex(t=>t===this);if(e===-1)throw new Error("Item not found in parent Wheel");return e}getCenterAngle(){let e=this._wheel.getItemAngles()[this.getIndex()];return e.start+(e.end-e.start)/2}getStartAngle(){return this._wheel.getItemAngles()[this.getIndex()].start}getEndAngle(){return this._wheel.getItemAngles()[this.getIndex()].end}getRandomAngle(){return w(this.getStartAngle(),this.getEndAngle())}};var F=class{constructor(e,t={}){if(this._frameRequestId=null,!(e instanceof Element))throw new Error("container must be an instance of Element");if(!f(t)&&t!==null)throw new Error("props must be an Object or null");this._canvasContainer=e,this.canvas=document.createElement("canvas"),this._context=this.canvas.getContext("2d"),this.addCanvas(),T(this);for(let i of Object.keys(o.wheel))this["_"+i]=o.wheel[i];t?this.init(t):this.init(o.wheel)}init(e={}){this._isInitialising=!0,this.borderColor=e.borderColor,this.borderWidth=e.borderWidth,this.debug=e.debug,this.image=e.image,this.isInteractive=e.isInteractive,this.itemBackgroundColors=e.itemBackgroundColors,this.itemLabelAlign=e.itemLabelAlign,this.itemLabelBaselineOffset=e.itemLabelBaselineOffset,this.itemLabelColors=e.itemLabelColors,this.itemLabelFont=e.itemLabelFont,this.itemLabelFontSizeMax=e.itemLabelFontSizeMax,this.itemLabelRadius=e.itemLabelRadius,this.itemLabelRadiusMax=e.itemLabelRadiusMax,this.itemLabelRotation=e.itemLabelRotation,this.items=e.items,this.lineColor=e.lineColor,this.lineWidth=e.lineWidth,this.pixelRatio=e.pixelRatio,this.rotationSpeedMax=e.rotationSpeedMax,this.radius=e.radius,this.rotation=e.rotation,this.rotationResistance=e.rotationResistance,this.rotationSpeed=e.rotationSpeed,this.offset=e.offset,this.onCurrentIndexChange=e.onCurrentIndexChange,this.onRest=e.onRest,this.onSpin=e.onSpin,this.overlayImage=e.overlayImage,this.pointerAngle=e.pointerAngle}addCanvas(){this._canvasContainer.appendChild(this.canvas)}removeCanvas(){this._canvasContainer.removeChild(this.canvas)}remove(){window.cancelAnimationFrame(this._frameRequestId),V(this),this.removeCanvas()}resize(){let[e,t]=[this._canvasContainer.clientWidth*this.getActualPixelRatio(),this._canvasContainer.clientHeight*this.getActualPixelRatio()],i=Math.min(e,t),n={w:i-i*this.offset.w,h:i-i*this.offset.h},r=Math.min(e/n.w,t/n.h);this._size=Math.max(n.w*r,n.h*r),this.canvas.style.width=this._canvasContainer.clientWidth+"px",this.canvas.style.height=this._canvasContainer.clientHeight+"px",this.canvas.width=e,this.canvas.height=t,this._center={x:e/2+e*this.offset.w,y:t/2+t*this.offset.h},this._actualRadius=this._size/2*this.radius,this.itemLabelFontSize=this.itemLabelFontSizeMax*(this._size/500),this.labelMaxWidth=this._actualRadius*(this.itemLabelRadius-this.itemLabelRadiusMax);for(let a of this._items)this.itemLabelFontSize=Math.min(this.itemLabelFontSize,x(a.label,this.itemLabelFont,this.labelMaxWidth,this._context));this.refresh()}draw(e=0){this._frameRequestId=null;let t=this._context;t.clearRect(0,0,this.canvas.width,this.canvas.height),this.animateRotation(e);let i=this.getItemAngles(this.rotation),n=this.getActualBorderWidth();t.textBaseline="middle",t.textAlign=this.itemLabelAlign,t.font=this.itemLabelFontSize+"px "+this.itemLabelFont,t.save();for(let[r,a]of i.entries()){let l=new Path2D;l.moveTo(this._center.x,this._center.y),l.arc(this._center.x,this._center.y,this._actualRadius-n/2,d(a.start+-90),d(a.end+-90)),this._items[r].path=l}this.drawItemBackgrounds(t,i),this.drawItemImages(t,i),this.drawItemLines(t,i),this.drawItemLabels(t,i),this.drawBorder(t),this.drawImage(t,this._image,!1),this.drawImage(t,this._overlayImage,!0),this.drawPointerLine(t),this.drawDragEvents(t),this._isInitialising=!1}drawItemBackgrounds(e,t=[]){var i;for(let[n,r]of t.entries()){let a=this._items[n];e.fillStyle=(i=a.backgroundColor)!=null?i:this.itemBackgroundColors[n%this.itemBackgroundColors.length],e.fill(a.path)}}drawItemImages(e,t=[]){for(let[i,n]of t.entries()){let r=this._items[i];if(!C(r.image))return;e.save(),e.clip(r.path);let a=n.start+(n.end-n.start)/2;e.translate(this._center.x+Math.cos(d(a+-90))*(this._actualRadius*r.imageRadius),this._center.y+Math.sin(d(a+-90))*(this._actualRadius*r.imageRadius)),e.rotate(d(a+r.imageRotation));let l=this._size/500*r.image.width*r.imageScale,g=this._size/500*r.image.height*r.imageScale,k=-l/2,B=-g/2;e.drawImage(r.image,k,B,l,g),e.restore()}}drawImage(e,t,i=!1){if(!C(t))return;e.translate(this._center.x,this._center.y),i||e.rotate(d(this.rotation));let n=i?this._size:this._size*this.radius,r=-(n/2);e.drawImage(t,r,r,n,n),e.resetTransform()}drawPointerLine(e){!this.debug||(e.translate(this._center.x,this._center.y),e.rotate(d(this._pointerAngle+-90)),e.beginPath(),e.moveTo(0,0),e.lineTo(this._actualRadius*2,0),e.strokeStyle=c.pointerLineColor,e.lineWidth=2,e.stroke(),e.resetTransform())}drawBorder(e){if(this.borderWidth<=0)return;let t=this.getActualBorderWidth(),i=this._borderColor||"transparent";e.beginPath(),e.strokeStyle=i,e.lineWidth=t,e.arc(this._center.x,this._center.y,this._actualRadius-t/2,0,2*Math.PI),e.stroke(),this.debug&&(e.beginPath(),e.strokeStyle=e.strokeStyle=c.labelRadiusColor,e.lineWidth=1,e.arc(this._center.x,this._center.y,this._actualRadius*this.itemLabelRadius,0,2*Math.PI),e.stroke(),e.beginPath(),e.strokeStyle=e.strokeStyle=c.labelRadiusColor,e.lineWidth=1,e.arc(this._center.x,this._center.y,this._actualRadius*this.itemLabelRadiusMax,0,2*Math.PI),e.stroke())}drawItemLines(e,t=[]){if(this.lineWidth<=0)return;let i=this.lineWidth/500*this._size,n=this.getActualBorderWidth();e.translate(this._center.x,this._center.y);for(let r of t)e.rotate(d(r.start+-90)),e.beginPath(),e.moveTo(0,0),e.lineTo(this._actualRadius-n,0),e.strokeStyle=this.lineColor,e.lineWidth=i,e.stroke(),e.rotate(-d(r.start+-90));e.resetTransform()}drawItemLabels(e,t=[]){let i=this.itemLabelFontSize*-this.itemLabelBaselineOffset;for(let[n,r]of t.entries()){let a=this._items[n],l=a.labelColor||this._itemLabelColors[n%this._itemLabelColors.length]||"transparent";if(a.label.trim()===""||l==="transparent")continue;e.save(),e.clip(a.path);let g=r.start+(r.end-r.start)/2;e.translate(this._center.x+Math.cos(d(g+-90))*(this._actualRadius*this.itemLabelRadius),this._center.y+Math.sin(d(g+-90))*(this._actualRadius*this.itemLabelRadius)),e.rotate(d(g+-90)),e.rotate(d(this.itemLabelRotation)),this.debug&&(e.beginPath(),e.moveTo(0,0),e.lineTo(-this.labelMaxWidth,0),e.strokeStyle=c.labelOutlineColor,e.lineWidth=1,e.stroke(),e.strokeRect(0,-this.itemLabelFontSize/2,-this.labelMaxWidth,this.itemLabelFontSize)),e.fillStyle=l,e.fillText(a.label,0,i),e.restore()}}drawDragEvents(e){var i;if(!this.debug||!((i=this.dragEvents)!=null&&i.length))return;let t=[...this.dragEvents].reverse();for(let[n,r]of t.entries()){let a=n/this.dragEvents.length*100;e.beginPath(),e.arc(r.x,r.y,5,0,2*Math.PI),e.fillStyle=`hsl(${c.dragEventHue},100%,${a}%)`,e.strokeStyle="#000",e.lineWidth=.5,e.fill(),e.stroke()}}animateRotation(e=0){if(this._spinToTimeEnd){if(e>=this._spinToTimeEnd){this.rotation=this._spinToEndRotation,this._spinToTimeEnd=void 0,this.raiseEvent_onRest();return}this.rotationSpeed=0,this.refresh();let t=this._spinToTimeEnd-this._spinToTimeStart,i=(e-this._spinToTimeStart)/t;i=i<0?0:i;let n=this._spinToEndRotation-this._spinToStartRotation;this.rotation=this._spinToStartRotation+n*this._spinToEasingFunction(i);return}if(this.rotationSpeed!==0){this.refresh(),this._lastFrameTime===void 0&&(this._lastFrameTime=e);let t=e-this._lastFrameTime;t>0&&(this.rotation+=t/1e3*this.rotationSpeed%360,this.rotationSpeed=this.getRotationSpeedPlusDrag(t),this.rotationSpeed===0&&this.raiseEvent_onRest(),this._lastFrameTime=e);return}this._lastFrameTime=void 0}getRotationSpeedPlusDrag(e=0){let t=this._rotationSpeed+this.rotationResistance*(e/1e3)*this._rotationDirection;return this._rotationDirection===1&&t<0||this._rotationDirection===-1&&t>=0?0:t}spinTo(e=0,t=0,i=null){if(Number.isNaN(e))throw new Error("Error: newRotation parameter is NaN");this.animate(e,t,i),this.raiseEvent_onSpin({method:"spinto",targetRotation:e,duration:t})}spinToItem(e=0,t=0,i=!0,n=1,r=1,a=null){let l=i?this.items[e].getCenterAngle():this.items[e].getRandomAngle(),g=E(this.rotation,l-this._pointerAngle,r);g+=n*360*r,this.animate(g,t,a),this.raiseEvent_onSpin({method:"spintoitem",targetItemIndex:e,targetRotation:g,duration:t})}animate(e,t,i){this._spinToStartRotation=this.rotation,this._spinToEndRotation=e,this._spinToTimeStart=performance.now(),this._spinToTimeEnd=this._spinToTimeStart+t,this._spinToEasingFunction=i||W,this.refresh()}stop(){this._rotationSpeed=0,this._spinToTimeEnd=void 0}getActualBorderWidth(){return this.borderWidth/500*this._size}getActualPixelRatio(){return this._pixelRatio!==0?this._pixelRatio:window.devicePixelRatio}wheelHitTest(e={x:0,y:0}){let t=p(e,this.canvas,this.getActualPixelRatio());return I(t,this._center.x,this._center.y,this._actualRadius)}refreshCursor(){if(this.isDragging){this.canvas.style.cursor="grabbing";return}if(this.isInteractive&&this.isCursorOverWheel){this.canvas.style.cursor="grab";return}this.canvas.style.cursor=""}getAngleFromCenter(e={x:0,y:0}){return(y(this._center.x,this._center.y,e.x,e.y)+90)%360}getCurrentIndex(){return this._currentIndex}refreshCurrentIndex(e=[]){this._items.length===0&&(this._currentIndex=-1);for(let[t,i]of e.entries())if(!!M(this._pointerAngle,i.start%360,i.end%360)){if(this._currentIndex===t)break;this._currentIndex=t,this._isInitialising||this.raiseEvent_onCurrentIndexChange();break}}getItemAngles(e=0){let t=0;for(let l of this.items)t+=l.weight;let i=360/t,n,r=e,a=[];for(let l of this._items)n=l.weight*i,a.push({start:r,end:r+n}),r+=n;return this._items.length>1&&(a[a.length-1].end=a[0].start+360),a}refresh(){this._frameRequestId===null&&(this._frameRequestId=window.requestAnimationFrame(this.draw.bind(this)))}get borderColor(){return this._borderColor}set borderColor(e){this._borderColor=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.borderColor must be a string",defaultValue:o.wheel.borderColor}),this.refresh()}get borderWidth(){return this._borderWidth}set borderWidth(e){this._borderWidth=h({val:e,isValid:u(e),errorMessage:"Wheel.borderWidth must be a number",defaultValue:o.wheel.borderWidth}),this.refresh()}get debug(){return this._debug}set debug(e){this._debug=h({val:e,isValid:typeof e=="boolean",errorMessage:"Wheel.debug must be a boolean",defaultValue:o.wheel.debug}),this.refresh()}get image(){var e,t;return(t=(e=this._image)==null?void 0:e.src)!=null?t:null}set image(e){this._image=h({val:e,isValid:typeof e=="string"||e===null,errorMessage:"Wheel.image must be a url (string) or null",defaultValue:o.wheel.image,action:()=>{if(e===null)return null;let t=new Image;return t.src=e,t.onload=i=>this.refresh(),t}}),this.refresh()}get isInteractive(){return this._isInteractive}set isInteractive(e){this._isInteractive=h({val:e,isValid:typeof e=="boolean",errorMessage:"Wheel.isInteractive must be a boolean",defaultValue:o.wheel.isInteractive}),this.refresh()}get itemBackgroundColors(){return this._itemBackgroundColors}set itemBackgroundColors(e){this._itemBackgroundColors=h({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.itemBackgroundColors must be an array",defaultValue:o.wheel.itemBackgroundColors}),this.refresh()}get itemLabelAlign(){return this._itemLabelAlign}set itemLabelAlign(e){this._itemLabelAlign=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelAlign must be a string",defaultValue:o.wheel.itemLabelAlign}),this.refresh()}get itemLabelBaselineOffset(){return this._itemLabelBaselineOffset}set itemLabelBaselineOffset(e){this._itemLabelBaselineOffset=h({val:e,isValid:u(e),errorMessage:"Wheel.itemLabelBaselineOffset must be a number",defaultValue:o.wheel.itemLabelBaselineOffset}),this.resize()}get itemLabelColors(){return this._itemLabelColors}set itemLabelColors(e){this._itemLabelColors=h({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.itemLabelColors must be an array",defaultValue:o.wheel.itemLabelColors}),this.refresh()}get itemLabelFont(){return this._itemLabelFont}set itemLabelFont(e){this._itemLabelFont=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelFont must be a string",defaultValue:o.wheel.itemLabelFont}),this.resize()}get itemLabelFontSizeMax(){return this._itemLabelFontSizeMax}set itemLabelFontSizeMax(e){this._itemLabelFontSizeMax=h({val:e,isValid:u(e),errorMessage:"Wheel.itemLabelFontSizeMax must be a number",defaultValue:o.wheel.itemLabelFontSizeMax}),this.resize()}get itemLabelRadius(){return this._itemLabelRadius}set itemLabelRadius(e){this._itemLabelRadius=h({val:e,isValid:u(e),errorMessage:"Wheel.itemLabelRadius must be a number",defaultValue:o.wheel.itemLabelRadius}),this.resize()}get itemLabelRadiusMax(){return this._itemLabelRadiusMax}set itemLabelRadiusMax(e){this._itemLabelRadiusMax=h({val:e,isValid:u(e),errorMessage:"Wheel.itemLabelRadiusMax must be a number",defaultValue:o.wheel.itemLabelRadiusMax}),this.resize()}get itemLabelRotation(){return this._itemLabelRotation}set itemLabelRotation(e){this._itemLabelRotation=h({val:e,isValid:u(e),errorMessage:"Wheel.itemLabelRotation must be a number",defaultValue:o.wheel.itemLabelRotation}),this.refresh()}get items(){return this._items}set items(e){this._items=h({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.items must be an array of Items",defaultValue:o.wheel.items,action:()=>{let t=[];for(let i of e)t.push(new R(this,{backgroundColor:i.backgroundColor,image:i.image,imageRadius:i.imageRadius,imageRotation:i.imageRotation,imageScale:i.imageScale,label:i.label,labelColor:i.labelColor,value:i.value,weight:i.weight}));return t}}),this.refreshCurrentIndex(this.getItemAngles(this.rotation))}get lineColor(){return this._lineColor}set lineColor(e){this._lineColor=h({val:e,isValid:typeof e=="string",errorMessage:"Wheel.lineColor must be a string",defaultValue:o.wheel.lineColor}),this.refresh()}get lineWidth(){return this._lineWidth}set lineWidth(e){this._lineWidth=h({val:e,isValid:u(e),errorMessage:"Wheel.lineWidth must be a number",defaultValue:o.wheel.lineWidth}),this.refresh()}get radius(){return this._radius}set radius(e){this._radius=h({val:e,isValid:u(e),errorMessage:"Wheel.radius must be a number",defaultValue:o.wheel.radius}),this.resize()}get rotation(){return this._rotation}set rotation(e){this._rotation=h({val:e,isValid:u(e),errorMessage:"Wheel.rotation must be a number",defaultValue:o.wheel.rotation}),this.refreshCurrentIndex(this.getItemAngles(this.rotation)),this.refresh()}get rotationResistance(){return this._rotationResistance}set rotationResistance(e){this._rotationResistance=h({val:e,isValid:u(e),errorMessage:"Wheel.rotationResistance must be a number",defaultValue:o.wheel.rotationResistance})}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){this._pixelRatio=h({val:e,isValid:u(e),errorMessage:"Wheel.pixelRatio must be a number",defaultValue:o.wheel.pixelRatio}),this.resize()}get rotationSpeed(){return this._rotationSpeed}set rotationSpeed(e){this._rotationSpeed=h({val:e,isValid:u(e),errorMessage:"Wheel.rotationSpeed must be a number",defaultValue:o.wheel.rotationSpeed,action:()=>{let t=Math.min(e,this.rotationSpeedMax);return t=Math.max(t,-this.rotationSpeedMax),t}}),this._rotationDirection=this._rotationSpeed>=0?1:-1,this.refresh()}get rotationSpeedMax(){return this._rotationSpeedMax}set rotationSpeedMax(e){this._rotationSpeedMax=h({val:e,isValid:u(e),errorMessage:"Wheel.rotationSpeedMax must be a number",defaultValue:o.wheel.rotationSpeedMax})}get offset(){return this._offset}set offset(e){this._offset=h({val:e,isValid:f(e),errorMessage:"Wheel.offset must be an object",defaultValue:o.wheel.offset}),this.resize()}get onCurrentIndexChange(){return this._onCurrentIndexChange}set onCurrentIndexChange(e){this._onCurrentIndexChange=h({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onCurrentIndexChange must be a function or null",defaultValue:o.wheel.onCurrentIndexChange})}get onRest(){return this._onRest}set onRest(e){this._onRest=h({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onRest must be a function or null",defaultValue:o.wheel.onRest})}get onSpin(){return this._onSpin}set onSpin(e){this._onSpin=h({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onSpin must be a function or null",defaultValue:o.wheel.onSpin})}get overlayImage(){var e,t;return(t=(e=this._overlayImage)==null?void 0:e.src)!=null?t:null}set overlayImage(e){this._overlayImage=h({val:e,isValid:typeof e=="string"||e===null,errorMessage:"Wheel.overlayImage must be a url (string) or null",defaultValue:o.wheel.overlayImage,action:()=>{if(e===null)return null;let t=new Image;return t.src=e,t.onload=i=>this.refresh(),t}}),this.refresh()}get pointerAngle(){return this._pointerAngle}set pointerAngle(e){this._pointerAngle=h({val:e,isValid:u(e)&&e>=0,errorMessage:"Wheel.pointerAngle must be a number between 0 and 360",defaultValue:o.wheel.pointerAngle,action:()=>e%360}),this.debug&&this.refresh()}dragStart(e={x:0,y:0}){let t=p(e,this.canvas,this.getActualPixelRatio());this.isDragging=!0,this.stop(),this.dragEvents=[{distance:0,x:t.x,y:t.y,now:performance.now()}],this.refreshCursor()}dragMove(e={x:0,y:0}){let t=p(e,this.canvas,this.getActualPixelRatio()),i=this.getAngleFromCenter(t),n=this.dragEvents[0],r=this.getAngleFromCenter(n),a=A(r,i);this.dragEvents.unshift({distance:a,x:t.x,y:t.y,now:performance.now()}),this.debug&&this.dragEvents.length>=40&&this.dragEvents.pop(),this.rotation+=a}dragEnd(){this.isDragging=!1;let e=0,t=performance.now();for(let[i,n]of this.dragEvents.entries()){if(!this.isDragEventTooOld(t,n)){e+=n.distance;continue}this.dragEvents.length=i;break}this.refreshCursor(),e!==0&&(this.rotationSpeed=e*(1e3/250),this.raiseEvent_onSpin({method:"interact",rotationSpeed:this.rotationSpeed}))}isDragEventTooOld(e=0,t={}){return e-t.now>250}raiseEvent_onCurrentIndexChange(e={}){var t;(t=this.onCurrentIndexChange)==null||t.call(this,_({type:"currentIndexChange",currentIndex:this._currentIndex},e))}raiseEvent_onRest(e={}){var t;(t=this.onRest)==null||t.call(this,_({type:"rest",currentIndex:this._currentIndex,rotation:this._rotation},e))}raiseEvent_onSpin(e={}){var t;(t=this.onSpin)==null||t.call(this,_({type:"spin"},e))}};export{F as Wheel};
