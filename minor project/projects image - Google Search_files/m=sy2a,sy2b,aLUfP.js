try{
var s_GKb=function(a){this.Xk=a};

}catch(e){_DumpException(e)}
try{
var s_zm=function(a){s_J.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.Xk();this.oa=window.orientation;this.ka=function(){var c=b.Xk(),d=b.zib()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=s_e(b.Ge);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new s_GKb(c);try{e(f)}catch(g){s_ca(g)}}}};this.Ge=new Set;this.window.addEventListener("resize",this.ka);this.zib()&&this.window.addEventListener("orientationchange",
this.ka)};s_w(s_zm,s_J);s_zm.nb=s_J.nb;s_zm.Ea=function(){return{service:{window:s_oj}}};s_zm.prototype.addListener=function(a){this.Ge.add(a)};s_zm.prototype.removeListener=function(a){this.Ge.delete(a)};
s_zm.prototype.Xk=function(){if(s_HKb()){var a=s_Fh(this.window);a=new s_mh(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.xc()||(s_na()?s_HKb():this.window.visualViewport)?s_Fh(this.window):new s_mh(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};s_zm.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};
var s_HKb=function(){return s_na()&&s_nf.oG()&&!navigator.userAgent.includes("GSA")};s_zm.prototype.xc=function(){return s_IKb};s_zm.prototype.zib=function(){return"orientation"in window};var s_IKb=!1;s_pj(s_MKa,s_zm);

s_IKb=!0;

}catch(e){_DumpException(e)}
try{
s_a("aLUfP");


s_b();

}catch(e){_DumpException(e)}
// Google Inc.
