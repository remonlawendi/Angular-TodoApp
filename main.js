(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\" >\n    <div class=\"form-group\">\n      <h1 class=\"text-center \">Todo App</h1>\n      <div class=\"input-group-prepend\">\n        <input [formControlName]=\"'todo'\" type=\"text\"  class=\"form-control\" placeholder=\"Add Todo\" name=\"todo\">\n        <span class=\"input-group-text\" (click)=\"onSubmit()\">\n    <i class=\"material-icons\">add</i></span>\n      </div>\n    </div>\n    <div class=\"data\">\n      <ul class=\"list-unstyled\">\n        <li [@moveInLeft]  *ngFor=\"let todo of todoArray; let i = index\">{{todo}} <i (click)=\"onDeleteItem(i)\" class=\"material-icons\">delete</i></li>\n      </ul>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Raleway\");\n/*Google fonts*/\nbody {\n  padding: 0;\n  margin: 0; }\nform {\n  max-width: 30em;\n  margin: 4em auto;\n  position: relative;\n  background: #f4f4f4;\n  padding: 2em 3em;\n  overflow: hidden; }\nform h1 {\n  font-family: \"Raleway\";\n  color: #F97300; }\nform input[type=text]::-webkit-input-placeholder {\n  font-family: \"Raleway\";\n  color: #666; }\nform input[type=text]::-ms-input-placeholder {\n  font-family: \"Raleway\";\n  color: #666; }\nform input[type=text]::placeholder {\n  font-family: \"Raleway\";\n  color: #666; }\nform .data {\n  margin-top: 1em; }\nform .data li {\n  background: #fff;\n  border-left: 4px solid #F97300;\n  padding: 1em;\n  margin: 1em auto;\n  color: #666;\n  font-family: \"Raleway\"; }\nform .data li i {\n  float: right;\n  color: #888;\n  cursor: pointer; }\nform .input-group-text {\n  background: #F97300;\n  border-radius: 50%;\n  width: 5em;\n  height: 5em;\n  padding: 1em 23px;\n  color: #fff;\n  position: absolute;\n  right: 13px;\n  top: 68px;\n  cursor: pointer; }\nform .input-group-text i {\n  font-size: 2em; }\nform .form-control {\n  height: 3em;\n  font-family: \"Raleway\"; }\nform .form-control:focus {\n  box-shadow: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSZW1vblxcRGVza3RvcFxcdG9kby1hcHAtYW5ndWxhci03LW1hc3Rlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrREFBWTtBQURaLGdCQUFnQjtBQUVoQjtFQUNFLFdBQVU7RUFDVixVQUFTLEVBQ1Y7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UsdUJBQXNCO0VBQ3RCLGVBQWEsRUFDZDtBQUNEO0VBQ0UsdUJBQXNCO0VBQ3RCLFlBQVUsRUFDWDtBQUhEO0VBQ0UsdUJBQXNCO0VBQ3RCLFlBQVUsRUFDWDtBQUhEO0VBQ0UsdUJBQXNCO0VBQ3RCLFlBQVUsRUFDWDtBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQiwrQkFBOEI7RUFDOUIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsdUJBQXNCLEVBQ3ZCO0FBQ0Q7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLGdCQUFlLEVBQ2hCO0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFVBQVM7RUFDVCxnQkFBZSxFQUNoQjtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsdUJBQXNCLEVBQ3ZCO0FBQ0Q7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkdvb2dsZSBmb250cyovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXknKTtcbmJvZHl7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbmZvcm17XG4gIG1heC13aWR0aDogMzBlbTtcbiAgbWFyZ2luOiA0ZW0gYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBwYWRkaW5nOiAyZW0gM2VtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuZm9ybSBoMXtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBjb2xvcjojRjk3MzAwO1xufVxuZm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlcntcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBjb2xvcjojNjY2O1xufVxuZm9ybSAuZGF0YXtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuZm9ybSAuZGF0YSBsaXtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjRjk3MzAwO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XG59XG5mb3JtIC5kYXRhIGxpIGl7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4ODg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmZvcm0gLmlucHV0LWdyb3VwLXRleHR7XG4gIGJhY2tncm91bmQ6ICNGOTczMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIHBhZGRpbmc6IDFlbSAyM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiA2OHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5mb3JtIC5pbnB1dC1ncm91cC10ZXh0IGl7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuZm9ybSAuZm9ybS1jb250cm9se1xuICBoZWlnaHQ6IDNlbTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xufVxuZm9ybSAuZm9ybS1jb250cm9sOmZvY3Vze1xuICBib3gtc2hhZG93OiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.todoArray = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.constructForm();
    };
    AppComponent.prototype.constructForm = function () {
        this.form = this.fb.group({
            todo: this.fb.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    AppComponent.prototype.onSubmit = function () {
        if (this.form.invalid) {
            return;
        }
        this.todoArray.push(this.form.get('todo').value);
        this.form.reset();
    };
    AppComponent.prototype.onDeleteItem = function (index) {
        this.todoArray.splice(index, 1);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('moveInLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(300px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(300px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })
                        ]))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-20px)', opacity: 1, offset: 0.2 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(250px)', opacity: 0, offset: 1 })
                        ]))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Remon\Desktop\todo-app-angular-7-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map