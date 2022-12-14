/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/component/country.ts":
/*!*************************************!*\
  !*** ./src/ts/component/country.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = Country;


/***/ }),

/***/ "./src/ts/component/getData.ts":
/*!*************************************!*\
  !*** ./src/ts/component/getData.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const country_1 = __importDefault(__webpack_require__(/*! ./country */ "./src/ts/component/country.ts"));
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
            return new country_1.default(name, population, region, capital, img);
        };
        this.getCountriesFromRequest = (data) => {
            return data.map((countryObj) => this.getCountryObjFromAnswer(countryObj));
        };
        this.getCountry = (nameCountry) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.requestByName(nameCountry);
            return this.getCountriesFromRequest(data)[0];
        });
        this.getCountiesFromRegionsRequest = (region) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.requestByRegion(region);
            return this.getCountriesFromRequest(data);
        });
        this.getSearchResults = (nameCountry) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.requestByName(nameCountry);
            const searchList = data.map(elem => elem.name.official);
            return searchList;
        });
    }
}
exports["default"] = GetData;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./component/multiselect-dropdown */ "./src/ts/component/multiselect-dropdown.js");
const getData_1 = __importDefault(__webpack_require__(/*! ./component/getData */ "./src/ts/component/getData.ts"));
console.log('hi');
console.log(getData_1.default);


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVQSxNQUFxQixPQUFPO0lBQzFCLFlBQW1CLElBQVcsRUFBUyxVQUFpQixFQUFRLE1BQWEsRUFBUSxPQUFjLEVBQVEsR0FBVTtRQUFsRyxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBTztRQUFRLFdBQU0sR0FBTixNQUFNLENBQU87UUFBUSxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVEsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUVySCxlQUFVLEdBQUcsR0FBRSxFQUFFO1lBQ2YsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUhELENBQUM7Q0FJRjtBQU5ELDZCQU1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZELHlHQUErQjtBQUcvQixNQUFxQixPQUFPO0lBQzFCO1FBRUEsa0JBQWEsR0FBRyxDQUFPLFdBQWtCLEVBQUUsRUFBRTtZQUMzQyxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyx1Q0FBdUMsV0FBVyxFQUFFLENBQUM7WUFDaEYsTUFBTSxJQUFJLEdBQW9CLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRTtZQUNqRCxPQUFPLElBQUk7UUFDYixDQUFDO1FBRUQsb0JBQWUsR0FBRSxDQUFPLE1BQWEsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxNQUFNLEVBQUUsQ0FBQztZQUM3RSxNQUFNLElBQUksR0FBb0IsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2pELE9BQU8sSUFBSTtRQUNiLENBQUM7UUFFRCw0QkFBdUIsR0FBRyxDQUFDLE1BQXFCLEVBQUMsRUFBRTtZQUNqRCxNQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxVQUFVLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBQyxHQUFHLE1BQU07WUFDakYsT0FBTyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQztRQUN4RCxDQUFDO1FBRUQsNEJBQXVCLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7WUFDbEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFDLEVBQUUsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFFRCxlQUFVLEdBQUcsQ0FBTyxXQUFrQixFQUFFLEVBQUU7WUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUNsRCxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELGtDQUE2QixHQUFHLENBQU8sTUFBYSxFQUFDLEVBQUU7WUFDckQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUMvQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7UUFDM0MsQ0FBQztRQUVELHFCQUFnQixHQUFHLENBQU8sV0FBa0IsRUFBRSxFQUFFO1lBQzlDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFDbEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckQsT0FBTyxVQUFVO1FBQ25CLENBQUM7SUFyQ2MsQ0FBQztDQXNDakI7QUF2Q0QsNkJBdUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRCwwR0FBeUM7QUFDekMsbUhBQXlDO0FBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ0xyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwQkFBMEIsaUNBQWlDO0FBQzNEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9DQUFvQyxrRkFBa0Y7QUFDL0k7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBMEM7QUFDeEUsMEJBQTBCLHlDQUF5QyxzQkFBc0I7QUFDekYsOEJBQThCLGlHQUFpRyx3RkFBd0YsOEJBQThCO0FBQ3JQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBLHNDQUFzQyxtQkFBbUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkJBQTZCLHFDQUFxQyxxQkFBcUI7QUFDaEg7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHNDQUFzQztBQUNsRSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0Esc0NBQXNDLFlBQVk7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVFQUF1RTtBQUMvRztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUNBQXlDO0FBQ3pFO0FBQ0EsMENBQTBDLGdFQUFnRSx5REFBeUQsY0FBYyx1QkFBdUI7O0FBRXhNO0FBQ0EsV0FBVztBQUNYO0FBQ0EsdUVBQXVFLGlGQUFpRjtBQUN4SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7VUMvT0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9jb3VudHJ5LnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9nZXREYXRhLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9tdWx0aXNlbGVjdC1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2pzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJQ291bnRyeUFuc3dlciB7XG4gIGNhcGl0YWw6c3RyaW5nXG4gIGZsYWdzIDoge1xuICAgIHN2ZzpzdHJpbmdcbiAgfVxuICBuYW1lOnsgb2ZmaWNpYWw6IHN0cmluZ31cbiAgcG9wdWxhdGlvbjpudW1iZXJcbiAgcmVnaW9uOnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudHJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nLCBwdWJsaWMgcG9wdWxhdGlvbjpudW1iZXIscHVibGljIHJlZ2lvbjpzdHJpbmcscHVibGljIGNhcGl0YWw6c3RyaW5nLHB1YmxpYyBpbWc6c3RyaW5nKXtcbiAgfVxuICBnZXRDb3VudHJ5ID0gKCk9PntcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG4iLCJcbmltcG9ydCBDb3VudHJ5IGZyb20gXCIuL2NvdW50cnlcIlxuaW1wb3J0IHsgSUNvdW50cnlBbnN3ZXIgfSBmcm9tIFwiLi9jb3VudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldERhdGEge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcmVxdWVzdEJ5TmFtZSA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtuYW1lQ291bnRyeX1gKVxuICAgIGNvbnN0IGRhdGE6SUNvdW50cnlBbnN3ZXJbXSA9IGF3YWl0IGFuc3dlci5qc29uKClcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcmVxdWVzdEJ5UmVnaW9uID1hc3luYyAocmVnaW9uOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvcmVnaW9uLyR7cmVnaW9ufWApXG4gICAgY29uc3QgZGF0YTpJQ291bnRyeUFuc3dlcltdID0gYXdhaXQgYW5zd2VyLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBnZXRDb3VudHJ5T2JqRnJvbUFuc3dlciA9IChhbnN3ZXI6SUNvdW50cnlBbnN3ZXIpPT57XG4gICAgY29uc3Qge2NhcGl0YWwsIG5hbWU6e29mZmljaWFsOm5hbWV9LCBwb3B1bGF0aW9uLHJlZ2lvbixmbGFnczp7c3ZnOmltZ319ID0gYW5zd2VyXG4gICAgcmV0dXJuIG5ldyBDb3VudHJ5KG5hbWUscG9wdWxhdGlvbixyZWdpb24sY2FwaXRhbCxpbWcpXG4gIH1cblxuICBnZXRDb3VudHJpZXNGcm9tUmVxdWVzdCA9IChkYXRhOklDb3VudHJ5QW5zd2VyW10pID0+IHtcbiAgICByZXR1cm4gZGF0YS5tYXAoKGNvdW50cnlPYmopPT50aGlzLmdldENvdW50cnlPYmpGcm9tQW5zd2VyKGNvdW50cnlPYmopKVxuICB9XG4gIFxuICBnZXRDb3VudHJ5ID0gYXN5bmMgKG5hbWVDb3VudHJ5OnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnJlcXVlc3RCeU5hbWUobmFtZUNvdW50cnkpXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnRyaWVzRnJvbVJlcXVlc3QoZGF0YSlbMF1cbiAgfVxuXG4gIGdldENvdW50aWVzRnJvbVJlZ2lvbnNSZXF1ZXN0ID0gYXN5bmMgKHJlZ2lvbjpzdHJpbmcpPT57XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMucmVxdWVzdEJ5UmVnaW9uKHJlZ2lvbilcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudHJpZXNGcm9tUmVxdWVzdChkYXRhKVxuICB9XG5cbiAgZ2V0U2VhcmNoUmVzdWx0cyA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5yZXF1ZXN0QnlOYW1lKG5hbWVDb3VudHJ5KVxuICAgIGNvbnN0IHNlYXJjaExpc3QgPSBkYXRhLm1hcChlbGVtPT5lbGVtLm5hbWUub2ZmaWNpYWwpXG4gICAgcmV0dXJuIHNlYXJjaExpc3RcbiAgfVxufVxuXG5cblxuXG4gIFxuICBcbiAgIiwiaW1wb3J0IFwiLi9jb21wb25lbnQvbXVsdGlzZWxlY3QtZHJvcGRvd25cIlxuaW1wb3J0IEdldERhdGEgZnJvbSBcIi4vY29tcG9uZW50L2dldERhdGFcIlxuXG5jb25zb2xlLmxvZygnaGknKVxuXG5jb25zb2xlLmxvZyhHZXREYXRhKTtcbiIsIi8vIE1JVCBMaWNlbnNlXG5cbi8vIENvcHlyaWdodCAoYykgMjAyMSBhZG1pcmhvZHppY1xuXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hZG1pcmhvZHppYy9tdWx0aXNlbGVjdC1kcm9wZG93blxuXG5cbnZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibXVsdGlzZWxlY3RfZHJvcGRvd25fc3R5bGVzXCIpO1xuc3R5bGUuaW5uZXJIVE1MID0gYFxuLm11bHRpc2VsZWN0LWRyb3Bkb3due1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA1cHggMHB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2VkNGRhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyUzZSUzY3BhdGggZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMzNDNhNDAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNMiA1bDYgNiA2LTYnLyUzZSUzYy9zdmclM2VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC43NXJlbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTZweCAxMnB4O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIHNwYW4ub3B0ZXh0LCAubXVsdGlzZWxlY3QtZHJvcGRvd24gc3Bhbi5wbGFjZWhvbGRlcntcbiAgbWFyZ2luLXJpZ2h0OjAuNWVtOyBcbiAgbWFyZ2luLWJvdHRvbToycHg7XG4gIHBhZGRpbmc6MXB4IDA7IFxuICBib3JkZXItcmFkaXVzOiA0cHg7IFxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93biBzcGFuLm9wdGV4dHtcbiAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XG4gIHBhZGRpbmc6MXB4IDAuNzVlbTsgXG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gc3Bhbi5vcHRleHQgLm9wdGRlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIC02cHggMXB4IDVweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjY2O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIHNwYW4ub3B0ZXh0IC5vcHRkZWw6aG92ZXIgeyBjb2xvcjogI2M2Njt9XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gc3Bhbi5wbGFjZWhvbGRlcntcbiAgY29sb3I6I2NlZDRkYTtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93bi1saXN0LXdyYXBwZXJ7XG4gIGJveC1zaGFkb3c6IGdyYXkgMCAzcHggOHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6MnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjZWQ0ZGE7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbjogLTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duLWxpc3Qtd3JhcHBlciAubXVsdGlzZWxlY3QtZHJvcGRvd24tc2VhcmNoe1xuICBtYXJnaW4tYm90dG9tOjVweDtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93bi1saXN0e1xuICBwYWRkaW5nOjJweDtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgb3ZlcmZsb3cteTphdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlYzRjYTtcbiAgYm9yZGVyLXJhZGl1czozcHg7XG59XG5cbi5tdWx0aXNlbGVjdC1kcm9wZG93bi1saXN0IGRpdntcbiAgcGFkZGluZzogNXB4O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duLWxpc3QgaW5wdXR7XG4gIGhlaWdodDogMS4xNWVtO1xuICB3aWR0aDogMS4xNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMzVlbTsgIFxufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duLWxpc3QgZGl2LmNoZWNrZWR7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24tbGlzdCBkaXY6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWQ0ZGE7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gc3Bhbi5tYXhzZWxlY3RlZCB7d2lkdGg6MTAwJTt9XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24tYWxsLXNlbGVjdG9yIHtib3JkZXItYm90dG9tOnNvbGlkIDFweCAjOTk5O31cbmA7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuZnVuY3Rpb24gTXVsdGlzZWxlY3REcm9wZG93bihvcHRpb25zKXtcbiAgdmFyIGNvbmZpZz17XG4gICAgc2VhcmNoOnRydWUsXG4gICAgaGVpZ2h0OicxNXJlbScsXG4gICAgcGxhY2Vob2xkZXI6J3NlbGVjdCcsXG4gICAgdHh0U2VsZWN0ZWQ6J3NlbGVjdGVkJyxcbiAgICB0eHRBbGw6J0FsbCcsXG4gICAgdHh0UmVtb3ZlOiAnUmVtb3ZlJyxcbiAgICB0eHRTZWFyY2g6J3NlYXJjaCcsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBmdW5jdGlvbiBuZXdFbCh0YWcsYXR0cnMpe1xuICAgIHZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZihhdHRycyE9PXVuZGVmaW5lZCkgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goaz0+e1xuICAgICAgaWYoaz09PSdjbGFzcycpIHsgQXJyYXkuaXNBcnJheShhdHRyc1trXSkgPyBhdHRyc1trXS5mb3JFYWNoKG89Pm8hPT0nJz9lLmNsYXNzTGlzdC5hZGQobyk6MCkgOiAoYXR0cnNba10hPT0nJz9lLmNsYXNzTGlzdC5hZGQoYXR0cnNba10pOjApfVxuICAgICAgZWxzZSBpZihrPT09J3N0eWxlJyl7ICBcbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cnNba10pLmZvckVhY2goa3M9PntcbiAgICAgICAgICBlLnN0eWxlW2tzXT1hdHRyc1trXVtrc107XG4gICAgICAgIH0pO1xuICAgICAgIH1cbiAgICAgIGVsc2UgaWYoaz09PSd0ZXh0Jyl7YXR0cnNba109PT0nJz9lLmlubmVySFRNTD0nJm5ic3A7JzplLmlubmVyVGV4dD1hdHRyc1trXX1cbiAgICAgIGVsc2UgZVtrXT1hdHRyc1trXTtcbiAgICB9KTtcbiAgICByZXR1cm4gZTtcbiAgfVxuXG4gIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W211bHRpcGxlXVwiKS5mb3JFYWNoKChlbCxrKT0+e1xuICAgIFxuICAgIHZhciBkaXY9bmV3RWwoJ2Rpdicse2NsYXNzOidtdWx0aXNlbGVjdC1kcm9wZG93bicsc3R5bGU6e3dpZHRoOmNvbmZpZy5zdHlsZT8ud2lkdGg/P2VsLmNsaWVudFdpZHRoKydweCcscGFkZGluZzpjb25maWcuc3R5bGU/LnBhZGRpbmc/PycnfX0pO1xuICAgIGVsLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdixlbC5uZXh0U2libGluZyk7XG4gICAgdmFyIGxpc3RXcmFwPW5ld0VsKCdkaXYnLHtjbGFzczonbXVsdGlzZWxlY3QtZHJvcGRvd24tbGlzdC13cmFwcGVyJ30pO1xuICAgIHZhciBsaXN0PW5ld0VsKCdkaXYnLHtjbGFzczonbXVsdGlzZWxlY3QtZHJvcGRvd24tbGlzdCcsc3R5bGU6e2hlaWdodDpjb25maWcuaGVpZ2h0fX0pO1xuICAgIHZhciBzZWFyY2g9bmV3RWwoJ2lucHV0Jyx7Y2xhc3M6WydtdWx0aXNlbGVjdC1kcm9wZG93bi1zZWFyY2gnXS5jb25jYXQoW2NvbmZpZy5zZWFyY2hJbnB1dD8uY2xhc3M/Pydmb3JtLWNvbnRyb2wnXSksc3R5bGU6e3dpZHRoOicxMDAlJyxkaXNwbGF5OmVsLmF0dHJpYnV0ZXNbJ211bHRpc2VsZWN0LXNlYXJjaCddPy52YWx1ZT09PSd0cnVlJz8nYmxvY2snOidub25lJ30scGxhY2Vob2xkZXI6Y29uZmlnLnR4dFNlYXJjaH0pO1xuICAgIGxpc3RXcmFwLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxpc3RXcmFwKTtcbiAgICBsaXN0V3JhcC5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGVsLmxvYWRPcHRpb25zPSgpPT57XG4gICAgICBsaXN0LmlubmVySFRNTD0nJztcbiAgICAgIFxuICAgICAgaWYoZWwuYXR0cmlidXRlc1snbXVsdGlzZWxlY3Qtc2VsZWN0LWFsbCddPy52YWx1ZT09J3RydWUnKXtcbiAgICAgICAgdmFyIG9wPW5ld0VsKCdkaXYnLHtjbGFzczonbXVsdGlzZWxlY3QtZHJvcGRvd24tYWxsLXNlbGVjdG9yJ30pXG4gICAgICAgIHZhciBpYz1uZXdFbCgnaW5wdXQnLHt0eXBlOidjaGVja2JveCd9KTtcbiAgICAgICAgb3AuYXBwZW5kQ2hpbGQoaWMpO1xuICAgICAgICBvcC5hcHBlbmRDaGlsZChuZXdFbCgnbGFiZWwnLHt0ZXh0OmNvbmZpZy50eHRBbGx9KSk7XG4gIFxuICAgICAgICBvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICBvcC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICAgICAgb3AucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmNoZWNrZWQ9IW9wLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkO1xuICAgICAgICAgIFxuICAgICAgICAgIHZhciBjaD1vcC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZDtcbiAgICAgICAgICBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgPiBkaXY6bm90KC5tdWx0aXNlbGVjdC1kcm9wZG93bi1hbGwtc2VsZWN0b3IpXCIpXG4gICAgICAgICAgICAuZm9yRWFjaChpPT57aWYoaS5zdHlsZS5kaXNwbGF5IT09J25vbmUnKXtpLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkPWNoOyBpLm9wdEVsLnNlbGVjdGVkPWNofX0pO1xuICBcbiAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldik9PntcbiAgICAgICAgICBpYy5jaGVja2VkPSFpYy5jaGVja2VkO1xuICAgICAgICB9KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KT0+e1xuICAgICAgICAgIGxldCBpdG1zPUFycmF5LmZyb20obGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlID4gZGl2Om5vdCgubXVsdGlzZWxlY3QtZHJvcGRvd24tYWxsLXNlbGVjdG9yKVwiKSkuZmlsdGVyKGU9PmUuc3R5bGUuZGlzcGxheSE9PSdub25lJylcbiAgICAgICAgICBsZXQgZXhpc3RzTm90U2VsZWN0ZWQ9aXRtcy5maW5kKGk9PiFpLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkKTtcbiAgICAgICAgICBpZihpYy5jaGVja2VkICYmIGV4aXN0c05vdFNlbGVjdGVkKSBpYy5jaGVja2VkPWZhbHNlO1xuICAgICAgICAgIGVsc2UgaWYoaWMuY2hlY2tlZD09ZmFsc2UgJiYgZXhpc3RzTm90U2VsZWN0ZWQ9PT11bmRlZmluZWQpIGljLmNoZWNrZWQ9dHJ1ZTtcbiAgICAgICAgfSk7XG4gIFxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKG9wKTtcbiAgICAgIH1cblxuICAgICAgQXJyYXkuZnJvbShlbC5vcHRpb25zKS5tYXAobz0+e1xuICAgICAgICB2YXIgb3A9bmV3RWwoJ2Rpdicse2NsYXNzOm8uc2VsZWN0ZWQ/J2NoZWNrZWQnOicnLG9wdEVsOm99KVxuICAgICAgICB2YXIgaWM9bmV3RWwoJ2lucHV0Jyx7dHlwZTonY2hlY2tib3gnLGNoZWNrZWQ6by5zZWxlY3RlZH0pO1xuICAgICAgICBvcC5hcHBlbmRDaGlsZChpYyk7XG4gICAgICAgIG9wLmFwcGVuZENoaWxkKG5ld0VsKCdsYWJlbCcse3RleHQ6by50ZXh0fSkpO1xuXG4gICAgICAgIG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgIG9wLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICBvcC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZD0hb3AucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmNoZWNrZWQ7XG4gICAgICAgICAgb3Aub3B0RWwuc2VsZWN0ZWQ9ISEhb3Aub3B0RWwuc2VsZWN0ZWQ7XG4gICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXYpPT57XG4gICAgICAgICAgaWMuY2hlY2tlZD0haWMuY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIG8ubGlzdGl0ZW1FbD1vcDtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChvcCk7XG4gICAgICB9KTtcbiAgICAgIGRpdi5saXN0RWw9bGlzdFdyYXA7XG5cbiAgICAgIGRpdi5yZWZyZXNoPSgpPT57XG4gICAgICAgIGRpdi5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuLm9wdGV4dCwgc3Bhbi5wbGFjZWhvbGRlcicpLmZvckVhY2godD0+ZGl2LnJlbW92ZUNoaWxkKHQpKTtcbiAgICAgICAgdmFyIHNlbHM9QXJyYXkuZnJvbShlbC5zZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgICBpZihzZWxzLmxlbmd0aD4oZWwuYXR0cmlidXRlc1snbXVsdGlzZWxlY3QtbWF4LWl0ZW1zJ10/LnZhbHVlPz81KSl7XG4gICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5ld0VsKCdzcGFuJyx7Y2xhc3M6WydvcHRleHQnLCdtYXhzZWxlY3RlZCddLHRleHQ6c2Vscy5sZW5ndGgrJyAnK2NvbmZpZy50eHRTZWxlY3RlZH0pKTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBzZWxzLm1hcCh4PT57XG4gICAgICAgICAgICB2YXIgYz1uZXdFbCgnc3Bhbicse2NsYXNzOidvcHRleHQnLHRleHQ6eC50ZXh0LCBzcmNPcHRpb246IHh9KTtcbiAgICAgICAgICAgIGlmKChlbC5hdHRyaWJ1dGVzWydtdWx0aXNlbGVjdC1oaWRlLXgnXT8udmFsdWUgIT09ICd0cnVlJykpXG4gICAgICAgICAgICAgIGMuYXBwZW5kQ2hpbGQobmV3RWwoJ3NwYW4nLHtjbGFzczonb3B0ZGVsJyx0ZXh0Oifwn5eZJyx0aXRsZTpjb25maWcudHh0UmVtb3ZlLCBvbmNsaWNrOihldik9PntjLnNyY09wdGlvbi5saXN0aXRlbUVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtkaXYucmVmcmVzaCgpO2V2LnN0b3BQcm9wYWdhdGlvbigpO319KSk7XG5cbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZigwPT1lbC5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoKSBkaXYuYXBwZW5kQ2hpbGQobmV3RWwoJ3NwYW4nLHtjbGFzczoncGxhY2Vob2xkZXInLHRleHQ6ZWwuYXR0cmlidXRlc1sncGxhY2Vob2xkZXInXT8udmFsdWU/P2NvbmZpZy5wbGFjZWhvbGRlcn0pKTtcbiAgICAgIH07XG4gICAgICBkaXYucmVmcmVzaCgpO1xuICAgIH1cbiAgICBlbC5sb2FkT3B0aW9ucygpO1xuICAgIFxuICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKCk9PntcbiAgICAgIGxpc3QucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSBkaXY6bm90KC5tdWx0aXNlbGVjdC1kcm9wZG93bi1hbGwtc2VsZWN0b3IpXCIpLmZvckVhY2goZD0+e1xuICAgICAgICB2YXIgdHh0PWQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpLmlubmVyVGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBkLnN0eWxlLmRpc3BsYXk9dHh0LmluY2x1ZGVzKHNlYXJjaC52YWx1ZS50b1VwcGVyQ2FzZSgpKT8nYmxvY2snOidub25lJztcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgZGl2Lmxpc3RFbC5zdHlsZS5kaXNwbGF5PSdibG9jayc7XG4gICAgICBzZWFyY2guZm9jdXMoKTtcbiAgICAgIHNlYXJjaC5zZWxlY3QoKTtcbiAgICB9KTtcbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoIWRpdi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGxpc3RXcmFwLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuICAgICAgICBkaXYucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH0pOyAgICBcbiAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+e1xuICBNdWx0aXNlbGVjdERyb3Bkb3duKHdpbmRvdy5NdWx0aXNlbGVjdERyb3Bkb3duT3B0aW9ucyk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=