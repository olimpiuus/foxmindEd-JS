/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/component/country.ts":
/*!*************************************!*\
  !*** ./src/ts/component/country.ts ***!
  \*************************************/
/***/ (() => {

"use strict";

// interface ICountryAnswer {
//   capital:string
//   flags : {
//     svg:string
//   }
//   name:{ official: string}
//   population:number
//   region:string
// }
// class Country {
//   constructor(public name:string, public population:number,public region:string,public capital:string,public img:string){
//   }
//   getCountry = ()=>{
//     return this
//   }
// }


/***/ }),

/***/ "./src/ts/component/getData.ts":
/*!*************************************!*\
  !*** ./src/ts/component/getData.ts ***!
  \*************************************/
/***/ (function() {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Country {
    constructor(name, population, region, capital, img) {
        this.name = name;
        this.population = population;
        this.region = region;
        this.capital = capital;
        this.img = img;
        this.getCountry = () => {
            return this;
        };
    }
}
class GetData {
    constructor() {
        this.requestByName = (nameCountry) => __awaiter(this, void 0, void 0, function* () {
            const answer = yield fetch(`https://restcountries.com/v3.1/name/${nameCountry}`);
            const data = yield answer.json();
            return data;
        });
        this.requestByRegion = (region) => __awaiter(this, void 0, void 0, function* () {
            const answer = yield fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = yield answer.json();
            return data;
        });
        this.getCountryObjFromAnswer = (answer) => {
            const { capital, name: { official: name }, population, region, flags: { svg: img } } = answer;
            return new Country(name, population, region, capital, img);
        };
        this.getCountry = (nameCountry) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.requestByName(nameCountry);
            return this.getCountryObjFromAnswer(data[0]);
        });
        this.getSearchResults = (nameCountry) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.requestByName(nameCountry);
            const searchList = data.map(elem => elem.name.official);
            return searchList;
        });
        this.getDataByRegions = (region) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.requestByRegion(region);
            const new1 = data.map((countryObj) => this.getCountryObjFromAnswer(countryObj));
        });
    }
}
new GetData().getDataByRegions('Europe');


/***/ }),

/***/ "./src/ts/component/multiselect-dropdown.js":
/*!**************************************************!*\
  !*** ./src/ts/component/multiselect-dropdown.js ***!
  \**************************************************/
/***/ (() => {

// MIT License

// Copyright (c) 2021 admirhodzic

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// https://github.com/admirhodzic/multiselect-dropdown


var style = document.createElement('style');
style.setAttribute("id","multiselect_dropdown_styles");
style.innerHTML = `
.multiselect-dropdown{
  display: inline-block;
  padding: 2px 5px 0px 5px;
  border-radius: 4px;
  border: solid 1px #ced4da;
  background-color: white;
  position: relative;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;
}
.multiselect-dropdown span.optext, .multiselect-dropdown span.placeholder{
  margin-right:0.5em; 
  margin-bottom:2px;
  padding:1px 0; 
  border-radius: 4px; 
  display:inline-block;
}
.multiselect-dropdown span.optext{
  background-color:lightgray;
  padding:1px 0.75em; 
}
.multiselect-dropdown span.optext .optdel {
  float: right;
  margin: 0 -6px 1px 5px;
  font-size: 0.7em;
  margin-top: 2px;
  cursor: pointer;
  color: #666;
}
.multiselect-dropdown span.optext .optdel:hover { color: #c66;}
.multiselect-dropdown span.placeholder{
  color:#ced4da;
}
.multiselect-dropdown-list-wrapper{
  box-shadow: gray 0 3px 8px;
  z-index: 100;
  padding:2px;
  border-radius: 4px;
  border: solid 1px #ced4da;
  display: none;
  margin: -1px;
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  background: white;
}
.multiselect-dropdown-list-wrapper .multiselect-dropdown-search{
  margin-bottom:5px;
}
.multiselect-dropdown-list{
  padding:2px;
  height: 15rem;
  overflow-y:auto;
  overflow-x: hidden;
}
.multiselect-dropdown-list::-webkit-scrollbar {
  width: 6px;
}
.multiselect-dropdown-list::-webkit-scrollbar-thumb {
  background-color: #bec4ca;
  border-radius:3px;
}

.multiselect-dropdown-list div{
  padding: 5px;
}
.multiselect-dropdown-list input{
  height: 1.15em;
  width: 1.15em;
  margin-right: 0.35em;  
}
.multiselect-dropdown-list div.checked{
}
.multiselect-dropdown-list div:hover{
  background-color: #ced4da;
}
.multiselect-dropdown span.maxselected {width:100%;}
.multiselect-dropdown-all-selector {border-bottom:solid 1px #999;}
`;
document.head.appendChild(style);

function MultiselectDropdown(options){
  var config={
    search:true,
    height:'15rem',
    placeholder:'select',
    txtSelected:'selected',
    txtAll:'All',
    txtRemove: 'Remove',
    txtSearch:'search',
    ...options
  };
  function newEl(tag,attrs){
    var e=document.createElement(tag);
    if(attrs!==undefined) Object.keys(attrs).forEach(k=>{
      if(k==='class') { Array.isArray(attrs[k]) ? attrs[k].forEach(o=>o!==''?e.classList.add(o):0) : (attrs[k]!==''?e.classList.add(attrs[k]):0)}
      else if(k==='style'){  
        Object.keys(attrs[k]).forEach(ks=>{
          e.style[ks]=attrs[k][ks];
        });
       }
      else if(k==='text'){attrs[k]===''?e.innerHTML='&nbsp;':e.innerText=attrs[k]}
      else e[k]=attrs[k];
    });
    return e;
  }

  
  document.querySelectorAll("select[multiple]").forEach((el,k)=>{
    
    var div=newEl('div',{class:'multiselect-dropdown',style:{width:config.style?.width??el.clientWidth+'px',padding:config.style?.padding??''}});
    el.style.display='none';
    el.parentNode.insertBefore(div,el.nextSibling);
    var listWrap=newEl('div',{class:'multiselect-dropdown-list-wrapper'});
    var list=newEl('div',{class:'multiselect-dropdown-list',style:{height:config.height}});
    var search=newEl('input',{class:['multiselect-dropdown-search'].concat([config.searchInput?.class??'form-control']),style:{width:'100%',display:el.attributes['multiselect-search']?.value==='true'?'block':'none'},placeholder:config.txtSearch});
    listWrap.appendChild(search);
    div.appendChild(listWrap);
    listWrap.appendChild(list);

    el.loadOptions=()=>{
      list.innerHTML='';
      
      if(el.attributes['multiselect-select-all']?.value=='true'){
        var op=newEl('div',{class:'multiselect-dropdown-all-selector'})
        var ic=newEl('input',{type:'checkbox'});
        op.appendChild(ic);
        op.appendChild(newEl('label',{text:config.txtAll}));
  
        op.addEventListener('click',()=>{
          op.classList.toggle('checked');
          op.querySelector("input").checked=!op.querySelector("input").checked;
          
          var ch=op.querySelector("input").checked;
          list.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)")
            .forEach(i=>{if(i.style.display!=='none'){i.querySelector("input").checked=ch; i.optEl.selected=ch}});
  
          el.dispatchEvent(new Event('change'));
        });
        ic.addEventListener('click',(ev)=>{
          ic.checked=!ic.checked;
        });
        el.addEventListener('change', (ev)=>{
          let itms=Array.from(list.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)")).filter(e=>e.style.display!=='none')
          let existsNotSelected=itms.find(i=>!i.querySelector("input").checked);
          if(ic.checked && existsNotSelected) ic.checked=false;
          else if(ic.checked==false && existsNotSelected===undefined) ic.checked=true;
        });
  
        list.appendChild(op);
      }

      Array.from(el.options).map(o=>{
        var op=newEl('div',{class:o.selected?'checked':'',optEl:o})
        var ic=newEl('input',{type:'checkbox',checked:o.selected});
        op.appendChild(ic);
        op.appendChild(newEl('label',{text:o.text}));

        op.addEventListener('click',()=>{
          op.classList.toggle('checked');
          op.querySelector("input").checked=!op.querySelector("input").checked;
          op.optEl.selected=!!!op.optEl.selected;
          el.dispatchEvent(new Event('change'));
        });
        ic.addEventListener('click',(ev)=>{
          ic.checked=!ic.checked;
        });
        o.listitemEl=op;
        list.appendChild(op);
      });
      div.listEl=listWrap;

      div.refresh=()=>{
        div.querySelectorAll('span.optext, span.placeholder').forEach(t=>div.removeChild(t));
        var sels=Array.from(el.selectedOptions);
        if(sels.length>(el.attributes['multiselect-max-items']?.value??5)){
          div.appendChild(newEl('span',{class:['optext','maxselected'],text:sels.length+' '+config.txtSelected}));          
        }
        else{
          sels.map(x=>{
            var c=newEl('span',{class:'optext',text:x.text, srcOption: x});
            if((el.attributes['multiselect-hide-x']?.value !== 'true'))
              c.appendChild(newEl('span',{class:'optdel',text:'🗙',title:config.txtRemove, onclick:(ev)=>{c.srcOption.listitemEl.dispatchEvent(new Event('click'));div.refresh();ev.stopPropagation();}}));

            div.appendChild(c);
          });
        }
        if(0==el.selectedOptions.length) div.appendChild(newEl('span',{class:'placeholder',text:el.attributes['placeholder']?.value??config.placeholder}));
      };
      div.refresh();
    }
    el.loadOptions();
    
    search.addEventListener('input',()=>{
      list.querySelectorAll(":scope div:not(.multiselect-dropdown-all-selector)").forEach(d=>{
        var txt=d.querySelector("label").innerText.toUpperCase();
        d.style.display=txt.includes(search.value.toUpperCase())?'block':'none';
      });
    });

    div.addEventListener('click',()=>{
      div.listEl.style.display='block';
      search.focus();
      search.select();
    });
    
    document.addEventListener('click', function(event) {
      if (!div.contains(event.target)) {
        listWrap.style.display='none';
        div.refresh();
      }
    });    
  });
}

window.addEventListener('load',()=>{
  MultiselectDropdown(window.MultiselectDropdownOptions);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./component/multiselect-dropdown */ "./src/ts/component/multiselect-dropdown.js");
__webpack_require__(/*! ./component/country */ "./src/ts/component/country.ts");
__webpack_require__(/*! ./component/getData */ "./src/ts/component/getData.ts");
console.log('hi');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QixxQ0FBcUMscUJBQXFCO0FBQ2hIO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixzQ0FBc0M7QUFDbEUsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBLHNDQUFzQyxZQUFZOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx1RUFBdUU7QUFDL0c7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlDQUF5QztBQUN6RTtBQUNBLDBDQUEwQyxnRUFBZ0UseURBQXlELGNBQWMsdUJBQXVCOztBQUV4TTtBQUNBLFdBQVc7QUFDWDtBQUNBLHVFQUF1RSxpRkFBaUY7QUFDeEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O1VDL09EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkEsMEdBQXlDO0FBQ3pDLGdGQUE0QjtBQUM1QixnRkFBNEI7QUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvY291bnRyeS50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvZ2V0RGF0YS50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvbXVsdGlzZWxlY3QtZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW50ZXJmYWNlIElDb3VudHJ5QW5zd2VyIHtcbi8vICAgY2FwaXRhbDpzdHJpbmdcbi8vICAgZmxhZ3MgOiB7XG4vLyAgICAgc3ZnOnN0cmluZ1xuLy8gICB9XG4vLyAgIG5hbWU6eyBvZmZpY2lhbDogc3RyaW5nfVxuLy8gICBwb3B1bGF0aW9uOm51bWJlclxuLy8gICByZWdpb246c3RyaW5nXG4vLyB9XG5cbi8vIGNsYXNzIENvdW50cnkge1xuLy8gICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTpzdHJpbmcsIHB1YmxpYyBwb3B1bGF0aW9uOm51bWJlcixwdWJsaWMgcmVnaW9uOnN0cmluZyxwdWJsaWMgY2FwaXRhbDpzdHJpbmcscHVibGljIGltZzpzdHJpbmcpe1xuLy8gICB9XG4vLyAgIGdldENvdW50cnkgPSAoKT0+e1xuLy8gICAgIHJldHVybiB0aGlzXG4vLyAgIH1cbi8vIH1cbiIsImludGVyZmFjZSBJQ291bnRyeUFuc3dlciB7XG4gIGNhcGl0YWw6c3RyaW5nXG4gIGZsYWdzIDoge1xuICAgIHN2ZzpzdHJpbmdcbiAgfVxuICBuYW1lOnsgb2ZmaWNpYWw6IHN0cmluZ31cbiAgcG9wdWxhdGlvbjpudW1iZXJcbiAgcmVnaW9uOnN0cmluZ1xufVxuXG5jbGFzcyBDb3VudHJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nLCBwdWJsaWMgcG9wdWxhdGlvbjpudW1iZXIscHVibGljIHJlZ2lvbjpzdHJpbmcscHVibGljIGNhcGl0YWw6c3RyaW5nLHB1YmxpYyBpbWc6c3RyaW5nKXtcbiAgfVxuICBnZXRDb3VudHJ5ID0gKCk9PntcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmNsYXNzIEdldERhdGEge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcmVxdWVzdEJ5TmFtZSA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtuYW1lQ291bnRyeX1gKVxuICAgIGNvbnN0IGRhdGE6SUNvdW50cnlBbnN3ZXJbXSA9IGF3YWl0IGFuc3dlci5qc29uKClcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcmVxdWVzdEJ5UmVnaW9uID1hc3luYyAocmVnaW9uOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvcmVnaW9uLyR7cmVnaW9ufWApXG4gICAgY29uc3QgZGF0YTpJQ291bnRyeUFuc3dlcltdID0gYXdhaXQgYW5zd2VyLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBnZXRDb3VudHJ5T2JqRnJvbUFuc3dlciA9IChhbnN3ZXI6SUNvdW50cnlBbnN3ZXIpPT57XG4gICAgY29uc3Qge2NhcGl0YWwsIG5hbWU6e29mZmljaWFsOm5hbWV9LCBwb3B1bGF0aW9uLHJlZ2lvbixmbGFnczp7c3ZnOmltZ319ID0gYW5zd2VyXG4gICAgcmV0dXJuIG5ldyBDb3VudHJ5KG5hbWUscG9wdWxhdGlvbixyZWdpb24sY2FwaXRhbCxpbWcpXG4gIH1cblxuICBnZXRDb3VudHJ5ID0gYXN5bmMgKG5hbWVDb3VudHJ5OnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnJlcXVlc3RCeU5hbWUobmFtZUNvdW50cnkpXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnRyeU9iakZyb21BbnN3ZXIoZGF0YVswXSlcbiAgfVxuXG4gIGdldFNlYXJjaFJlc3VsdHMgPSBhc3luYyAobmFtZUNvdW50cnk6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMucmVxdWVzdEJ5TmFtZShuYW1lQ291bnRyeSlcbiAgICBjb25zdCBzZWFyY2hMaXN0ID0gZGF0YS5tYXAoZWxlbT0+ZWxlbS5uYW1lLm9mZmljaWFsKVxuICAgIHJldHVybiBzZWFyY2hMaXN0XG4gIH1cblxuICBnZXREYXRhQnlSZWdpb25zID1hc3luYyAocmVnaW9uOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnJlcXVlc3RCeVJlZ2lvbihyZWdpb24pXG4gICAgY29uc3QgbmV3MSA9IGRhdGEubWFwKChjb3VudHJ5T2JqKT0+dGhpcy5nZXRDb3VudHJ5T2JqRnJvbUFuc3dlcihjb3VudHJ5T2JqKSlcbiAgfVxufVxuXG5uZXcgR2V0RGF0YSgpLmdldERhdGFCeVJlZ2lvbnMoJ0V1cm9wZScpXG5cbiAgXG4gIFxuICAiLCIvLyBNSVQgTGljZW5zZVxuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMjEgYWRtaXJob2R6aWNcblxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWRtaXJob2R6aWMvbXVsdGlzZWxlY3QtZHJvcGRvd25cblxuXG52YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUuc2V0QXR0cmlidXRlKFwiaWRcIixcIm11bHRpc2VsZWN0X2Ryb3Bkb3duX3N0eWxlc1wiKTtcbnN0eWxlLmlubmVySFRNTCA9IGBcbi5tdWx0aXNlbGVjdC1kcm9wZG93bntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggNXB4IDBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NlZDRkYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNiclM2UlM2NwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMzQzYTQwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTIgNWw2IDYgNi02Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuNzVyZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTJweDtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93biBzcGFuLm9wdGV4dCwgLm11bHRpc2VsZWN0LWRyb3Bkb3duIHNwYW4ucGxhY2Vob2xkZXJ7XG4gIG1hcmdpbi1yaWdodDowLjVlbTsgXG4gIG1hcmdpbi1ib3R0b206MnB4O1xuICBwYWRkaW5nOjFweCAwOyBcbiAgYm9yZGVyLXJhZGl1czogNHB4OyBcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gc3Bhbi5vcHRleHR7XG4gIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5O1xuICBwYWRkaW5nOjFweCAwLjc1ZW07IFxufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIHNwYW4ub3B0ZXh0IC5vcHRkZWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMCAtNnB4IDFweCA1cHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzY2Njtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93biBzcGFuLm9wdGV4dCAub3B0ZGVsOmhvdmVyIHsgY29sb3I6ICNjNjY7fVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIHNwYW4ucGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiNjZWQ0ZGE7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24tbGlzdC13cmFwcGVye1xuICBib3gtc2hhZG93OiBncmF5IDAgM3B4IDhweDtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOjJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2VkNGRhO1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IC0xcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93bi1saXN0LXdyYXBwZXIgLm11bHRpc2VsZWN0LWRyb3Bkb3duLXNlYXJjaHtcbiAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24tbGlzdHtcbiAgcGFkZGluZzoycHg7XG4gIGhlaWdodDogMTVyZW07XG4gIG92ZXJmbG93LXk6YXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93bi1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWM0Y2E7XG4gIGJvcmRlci1yYWRpdXM6M3B4O1xufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24tbGlzdCBkaXZ7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93bi1saXN0IGlucHV0e1xuICBoZWlnaHQ6IDEuMTVlbTtcbiAgd2lkdGg6IDEuMTVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjM1ZW07ICBcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93bi1saXN0IGRpdi5jaGVja2Vke1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duLWxpc3QgZGl2OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkNGRhO1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIHNwYW4ubWF4c2VsZWN0ZWQge3dpZHRoOjEwMCU7fVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duLWFsbC1zZWxlY3RvciB7Ym9yZGVyLWJvdHRvbTpzb2xpZCAxcHggIzk5OTt9XG5gO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbmZ1bmN0aW9uIE11bHRpc2VsZWN0RHJvcGRvd24ob3B0aW9ucyl7XG4gIHZhciBjb25maWc9e1xuICAgIHNlYXJjaDp0cnVlLFxuICAgIGhlaWdodDonMTVyZW0nLFxuICAgIHBsYWNlaG9sZGVyOidzZWxlY3QnLFxuICAgIHR4dFNlbGVjdGVkOidzZWxlY3RlZCcsXG4gICAgdHh0QWxsOidBbGwnLFxuICAgIHR4dFJlbW92ZTogJ1JlbW92ZScsXG4gICAgdHh0U2VhcmNoOidzZWFyY2gnLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgZnVuY3Rpb24gbmV3RWwodGFnLGF0dHJzKXtcbiAgICB2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYoYXR0cnMhPT11bmRlZmluZWQpIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGs9PntcbiAgICAgIGlmKGs9PT0nY2xhc3MnKSB7IEFycmF5LmlzQXJyYXkoYXR0cnNba10pID8gYXR0cnNba10uZm9yRWFjaChvPT5vIT09Jyc/ZS5jbGFzc0xpc3QuYWRkKG8pOjApIDogKGF0dHJzW2tdIT09Jyc/ZS5jbGFzc0xpc3QuYWRkKGF0dHJzW2tdKTowKX1cbiAgICAgIGVsc2UgaWYoaz09PSdzdHlsZScpeyAgXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzW2tdKS5mb3JFYWNoKGtzPT57XG4gICAgICAgICAgZS5zdHlsZVtrc109YXR0cnNba11ba3NdO1xuICAgICAgICB9KTtcbiAgICAgICB9XG4gICAgICBlbHNlIGlmKGs9PT0ndGV4dCcpe2F0dHJzW2tdPT09Jyc/ZS5pbm5lckhUTUw9JyZuYnNwOyc6ZS5pbm5lclRleHQ9YXR0cnNba119XG4gICAgICBlbHNlIGVba109YXR0cnNba107XG4gICAgfSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFttdWx0aXBsZV1cIikuZm9yRWFjaCgoZWwsayk9PntcbiAgICBcbiAgICB2YXIgZGl2PW5ld0VsKCdkaXYnLHtjbGFzczonbXVsdGlzZWxlY3QtZHJvcGRvd24nLHN0eWxlOnt3aWR0aDpjb25maWcuc3R5bGU/LndpZHRoPz9lbC5jbGllbnRXaWR0aCsncHgnLHBhZGRpbmc6Y29uZmlnLnN0eWxlPy5wYWRkaW5nPz8nJ319KTtcbiAgICBlbC5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXYsZWwubmV4dFNpYmxpbmcpO1xuICAgIHZhciBsaXN0V3JhcD1uZXdFbCgnZGl2Jyx7Y2xhc3M6J211bHRpc2VsZWN0LWRyb3Bkb3duLWxpc3Qtd3JhcHBlcid9KTtcbiAgICB2YXIgbGlzdD1uZXdFbCgnZGl2Jyx7Y2xhc3M6J211bHRpc2VsZWN0LWRyb3Bkb3duLWxpc3QnLHN0eWxlOntoZWlnaHQ6Y29uZmlnLmhlaWdodH19KTtcbiAgICB2YXIgc2VhcmNoPW5ld0VsKCdpbnB1dCcse2NsYXNzOlsnbXVsdGlzZWxlY3QtZHJvcGRvd24tc2VhcmNoJ10uY29uY2F0KFtjb25maWcuc2VhcmNoSW5wdXQ/LmNsYXNzPz8nZm9ybS1jb250cm9sJ10pLHN0eWxlOnt3aWR0aDonMTAwJScsZGlzcGxheTplbC5hdHRyaWJ1dGVzWydtdWx0aXNlbGVjdC1zZWFyY2gnXT8udmFsdWU9PT0ndHJ1ZSc/J2Jsb2NrJzonbm9uZSd9LHBsYWNlaG9sZGVyOmNvbmZpZy50eHRTZWFyY2h9KTtcbiAgICBsaXN0V3JhcC5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0V3JhcCk7XG4gICAgbGlzdFdyYXAuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBlbC5sb2FkT3B0aW9ucz0oKT0+e1xuICAgICAgbGlzdC5pbm5lckhUTUw9Jyc7XG4gICAgICBcbiAgICAgIGlmKGVsLmF0dHJpYnV0ZXNbJ211bHRpc2VsZWN0LXNlbGVjdC1hbGwnXT8udmFsdWU9PSd0cnVlJyl7XG4gICAgICAgIHZhciBvcD1uZXdFbCgnZGl2Jyx7Y2xhc3M6J211bHRpc2VsZWN0LWRyb3Bkb3duLWFsbC1zZWxlY3Rvcid9KVxuICAgICAgICB2YXIgaWM9bmV3RWwoJ2lucHV0Jyx7dHlwZTonY2hlY2tib3gnfSk7XG4gICAgICAgIG9wLmFwcGVuZENoaWxkKGljKTtcbiAgICAgICAgb3AuYXBwZW5kQ2hpbGQobmV3RWwoJ2xhYmVsJyx7dGV4dDpjb25maWcudHh0QWxsfSkpO1xuICBcbiAgICAgICAgb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgb3AuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgICAgIG9wLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkPSFvcC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZDtcbiAgICAgICAgICBcbiAgICAgICAgICB2YXIgY2g9b3AucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmNoZWNrZWQ7XG4gICAgICAgICAgbGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlID4gZGl2Om5vdCgubXVsdGlzZWxlY3QtZHJvcGRvd24tYWxsLXNlbGVjdG9yKVwiKVxuICAgICAgICAgICAgLmZvckVhY2goaT0+e2lmKGkuc3R5bGUuZGlzcGxheSE9PSdub25lJyl7aS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZD1jaDsgaS5vcHRFbC5zZWxlY3RlZD1jaH19KTtcbiAgXG4gICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXYpPT57XG4gICAgICAgICAgaWMuY2hlY2tlZD0haWMuY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldik9PntcbiAgICAgICAgICBsZXQgaXRtcz1BcnJheS5mcm9tKGxpc3QucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSA+IGRpdjpub3QoLm11bHRpc2VsZWN0LWRyb3Bkb3duLWFsbC1zZWxlY3RvcilcIikpLmZpbHRlcihlPT5lLnN0eWxlLmRpc3BsYXkhPT0nbm9uZScpXG4gICAgICAgICAgbGV0IGV4aXN0c05vdFNlbGVjdGVkPWl0bXMuZmluZChpPT4haS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZCk7XG4gICAgICAgICAgaWYoaWMuY2hlY2tlZCAmJiBleGlzdHNOb3RTZWxlY3RlZCkgaWMuY2hlY2tlZD1mYWxzZTtcbiAgICAgICAgICBlbHNlIGlmKGljLmNoZWNrZWQ9PWZhbHNlICYmIGV4aXN0c05vdFNlbGVjdGVkPT09dW5kZWZpbmVkKSBpYy5jaGVja2VkPXRydWU7XG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChvcCk7XG4gICAgICB9XG5cbiAgICAgIEFycmF5LmZyb20oZWwub3B0aW9ucykubWFwKG89PntcbiAgICAgICAgdmFyIG9wPW5ld0VsKCdkaXYnLHtjbGFzczpvLnNlbGVjdGVkPydjaGVja2VkJzonJyxvcHRFbDpvfSlcbiAgICAgICAgdmFyIGljPW5ld0VsKCdpbnB1dCcse3R5cGU6J2NoZWNrYm94JyxjaGVja2VkOm8uc2VsZWN0ZWR9KTtcbiAgICAgICAgb3AuYXBwZW5kQ2hpbGQoaWMpO1xuICAgICAgICBvcC5hcHBlbmRDaGlsZChuZXdFbCgnbGFiZWwnLHt0ZXh0Om8udGV4dH0pKTtcblxuICAgICAgICBvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICBvcC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICAgICAgb3AucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmNoZWNrZWQ9IW9wLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkO1xuICAgICAgICAgIG9wLm9wdEVsLnNlbGVjdGVkPSEhIW9wLm9wdEVsLnNlbGVjdGVkO1xuICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2KT0+e1xuICAgICAgICAgIGljLmNoZWNrZWQ9IWljLmNoZWNrZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBvLmxpc3RpdGVtRWw9b3A7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQob3ApO1xuICAgICAgfSk7XG4gICAgICBkaXYubGlzdEVsPWxpc3RXcmFwO1xuXG4gICAgICBkaXYucmVmcmVzaD0oKT0+e1xuICAgICAgICBkaXYucXVlcnlTZWxlY3RvckFsbCgnc3Bhbi5vcHRleHQsIHNwYW4ucGxhY2Vob2xkZXInKS5mb3JFYWNoKHQ9PmRpdi5yZW1vdmVDaGlsZCh0KSk7XG4gICAgICAgIHZhciBzZWxzPUFycmF5LmZyb20oZWwuc2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgICAgaWYoc2Vscy5sZW5ndGg+KGVsLmF0dHJpYnV0ZXNbJ211bHRpc2VsZWN0LW1heC1pdGVtcyddPy52YWx1ZT8/NSkpe1xuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChuZXdFbCgnc3Bhbicse2NsYXNzOlsnb3B0ZXh0JywnbWF4c2VsZWN0ZWQnXSx0ZXh0OnNlbHMubGVuZ3RoKycgJytjb25maWcudHh0U2VsZWN0ZWR9KSk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgc2Vscy5tYXAoeD0+e1xuICAgICAgICAgICAgdmFyIGM9bmV3RWwoJ3NwYW4nLHtjbGFzczonb3B0ZXh0Jyx0ZXh0OngudGV4dCwgc3JjT3B0aW9uOiB4fSk7XG4gICAgICAgICAgICBpZigoZWwuYXR0cmlidXRlc1snbXVsdGlzZWxlY3QtaGlkZS14J10/LnZhbHVlICE9PSAndHJ1ZScpKVxuICAgICAgICAgICAgICBjLmFwcGVuZENoaWxkKG5ld0VsKCdzcGFuJyx7Y2xhc3M6J29wdGRlbCcsdGV4dDon8J+XmScsdGl0bGU6Y29uZmlnLnR4dFJlbW92ZSwgb25jbGljazooZXYpPT57Yy5zcmNPcHRpb24ubGlzdGl0ZW1FbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7ZGl2LnJlZnJlc2goKTtldi5zdG9wUHJvcGFnYXRpb24oKTt9fSkpO1xuXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoMD09ZWwuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCkgZGl2LmFwcGVuZENoaWxkKG5ld0VsKCdzcGFuJyx7Y2xhc3M6J3BsYWNlaG9sZGVyJyx0ZXh0OmVsLmF0dHJpYnV0ZXNbJ3BsYWNlaG9sZGVyJ10/LnZhbHVlPz9jb25maWcucGxhY2Vob2xkZXJ9KSk7XG4gICAgICB9O1xuICAgICAgZGl2LnJlZnJlc2goKTtcbiAgICB9XG4gICAgZWwubG9hZE9wdGlvbnMoKTtcbiAgICBcbiAgICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCgpPT57XG4gICAgICBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgZGl2Om5vdCgubXVsdGlzZWxlY3QtZHJvcGRvd24tYWxsLXNlbGVjdG9yKVwiKS5mb3JFYWNoKGQ9PntcbiAgICAgICAgdmFyIHR4dD1kLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKS5pbm5lclRleHQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgZC5zdHlsZS5kaXNwbGF5PXR4dC5pbmNsdWRlcyhzZWFyY2gudmFsdWUudG9VcHBlckNhc2UoKSk/J2Jsb2NrJzonbm9uZSc7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgIGRpdi5saXN0RWwuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xuICAgICAgc2VhcmNoLmZvY3VzKCk7XG4gICAgICBzZWFyY2guc2VsZWN0KCk7XG4gICAgfSk7XG4gICAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKCFkaXYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBsaXN0V3JhcC5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICAgICAgZGl2LnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9KTsgICAgXG4gIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PntcbiAgTXVsdGlzZWxlY3REcm9wZG93bih3aW5kb3cuTXVsdGlzZWxlY3REcm9wZG93bk9wdGlvbnMpO1xufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCBcIi4vY29tcG9uZW50L211bHRpc2VsZWN0LWRyb3Bkb3duXCJcbmltcG9ydCBcIi4vY29tcG9uZW50L2NvdW50cnlcIlxuaW1wb3J0IFwiLi9jb21wb25lbnQvZ2V0RGF0YVwiXG5cbmNvbnNvbGUubG9nKCdoaScpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==