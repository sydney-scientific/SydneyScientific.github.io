import{E as r}from"./chunk-VH5225LI.js";var e=(()=>{class o{constructor(){this.platforms=["macOS","Linux","Windows"],localStorage.getItem("platform")==null&&(this._platform=this.platforms[1])}getPlatform(){let t=localStorage.getItem("platform");return t??this._platform}is(t){return this.getPlatform()===t}setPlatform(t){this._platform=t,localStorage.setItem("platform",t)}static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275prov=r({token:o,factory:o.\u0275fac})}}return o})();export{e as a};
