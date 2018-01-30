webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    width:  100% !important;\r\n}\r\n.row{\r\n    width: 100% !important;\r\n}\r\n.testResults{\r\n    margin-top: 20px;\r\n}\r\n.testData{\r\n    padding: 5px;\r\n}\r\n.tableData{\r\n    margin-top: 20px;\r\n}\r\ntable:hover{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h2 class=\"text-center\">\n        Chatbot Testing Tool\n        <blockquote class=\"blockquote text-center\">\n            <footer class=\"blockquote-footer\">Automate testing of\n                <cite title=\"Source Title\">Chatbot</cite>\n            </footer>\n        </blockquote>\n    </h2>\n\n    <div class=\"container\">\n        <h4>\n            <mark>Instruction for Testing</mark>\n        </h4>\n        <ol>\n            <li>Upload a file which containes the test data for Chatbot</li>\n            <li>Click on\n                <mark>Start Testing</mark> button to start the testing</li>\n            <li>Once testing is complete, you will see the results in form of table</li>\n            <li>This table can be exported as an Excel file</li>\n            <small>\n                <p>\n                    The file upload functionality can either be used with a text file that contains test data in form of json, or with an excel\n                    file.\n                </p>\n                The enteries in the text file should be in following format:\n                <p>\n                    {{ '{' }} \"query 1\": \"expected Response 1\", \"query 2\": \"expected Response 2\" {{ '}' }}\n                </p>\n            </small>\n        </ol>\n    </div>\n\n    <div class=\"form-inline\">\n        <div class=\"form-group\">\n            <input type=\"file\" class=\"form-control-file mb-2 mr-sm-2\" id=\"fileForUpload\" (change)=\"upload()\">\n        </div>\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"startTesting()\">Start testing</button>\n    </div>\n\n    <div class=\"container testResults\" id=\"testData\">\n        <ng-container *ngIf=\"tableView\">\n            <h5>Test reults</h5>\n            <div class=\"row border rounded testData\">\n                <div class=\"col-md-4\">\n                    <b>Test cases:</b> {{testResult.totalTests}}\n                </div>\n                <div class=\"col-md-4\">\n                    <b>Test cases passed:</b> {{testResult.passedTests}}\n                </div>\n                <div class=\"col-md-4\">\n                    <b>Test cases failed:</b> {{testResult.failedTests}}\n                </div>\n                <div class=\"col-md-4\">\n                    <b>Accuarcy% of Chatbot:</b> {{((testResult.passedTests/testResult.totalTests) * 100).toFixed(2)}}%\n                </div>\n                <div class=\"col-md-4\">\n                    <a href=\"\" (click)=\"generatePDF($event)\">Export to Excel</a>\n                </div>\n            </div>\n        </ng-container>\n        <div class=\"row\">\n            <table class=\"table table-responsive table-hover rounded tableData\" *ngIf=\"tableView\" id=\"resultTable\">\n                <thead class=\"thead-dark\">\n                    <tr>\n                        <th scope=\"col\">Query</th>\n                        <th scope=\"col\">Expected Result</th>\n                        <th scope=\"col\">Actual Result</th>\n                        <th scope=\"col\">Result</th>\n                    </tr>\n                </thead>\n                <ng-container *ngFor=\"let data of resultVal\">\n                    <ng-container *ngIf=\"data.resultValue == 'success' \">\n                        <tr class=\"table-success\">\n                            <td scope=\"col\">{{data.queryText}}</td>\n                            <td scope=\"col\">{{data.expectedResult}}</td>\n                            <td scope=\"col\">{{data.actualResult}}</td>\n                            <td scope=\"col\">{{data.resultValue}}</td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"data.resultValue == 'failure' \">\n                        <tr class=\"table-danger\">\n                            <td scope=\"col\">{{data.queryText}}</td>\n                            <td scope=\"col\">{{data.expectedResult}}</td>\n                            <td scope=\"col\">{{data.actualResult}}</td>\n                            <td scope=\"col\">{{data.resultValue}}</td>\n                        </tr>\n                    </ng-container>\n                </ng-container>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__ = __webpack_require__("../../../../ts-xlsx/lib/main.browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.baseUrl = 'https://api.dialogflow.com/v1/query?v=20150910';
        this.accessToken = '4d93317815ac459da6f2783287b5f375';
        this.testSet = {};
        this.resultVal = [];
        this.counter = 0;
        this.tableView = false;
        this.testResult = {
            'totalTests': 0,
            'passedTests': 0,
            'failedTests': 0,
            'accuracyPercentage': 0.0
        };
    }
    AppComponent.prototype.startTesting = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.accessToken);
        var _loop_1 = function (key) {
            if (this_1.testSet.hasOwnProperty(key)) {
                this_1.http.post(this_1.baseUrl, JSON.stringify({ query: key, lang: 'en', sessionId: 'abc123' }), { headers: headers })
                    .subscribe(function (res) {
                    _this.validateResults(res, _this.testSet[key], key);
                }, function (err) { return console.log(err); });
            }
        };
        var this_1 = this;
        for (var key in this.testSet) {
            _loop_1(key);
        }
        this.tableView = true;
    };
    AppComponent.prototype.validateResults = function (res, eR, query) {
        this.counter = 0;
        this.testResult.totalTests = this.testResult.totalTests + 1;
        if (res.result.fulfillment.speech == eR) {
            var jsonRes = {
                'queryText': query,
                'expectedResult': eR,
                'actualResult': res.result.fulfillment.speech,
                'resultValue': 'success'
            };
            this.resultVal.push(jsonRes);
            this.testResult.passedTests = this.testResult.passedTests + 1;
        }
        else {
            var jsonRes = {
                'queryText': query,
                'expectedResult': eR,
                'actualResult': res.result.fulfillment.messages[0].speech,
                'resultValue': 'failure'
            };
            this.resultVal.push(jsonRes);
            this.testResult.failedTests = this.testResult.failedTests + 1;
        }
        this.counter++;
    };
    AppComponent.prototype.generatePDF = function (e) {
        e.preventDefault();
        var date = new Date().toDateString();
        var head = ['Query', 'Expected Result', 'Actual Result', 'Result'];
        var title = 'Chatbot testing report';
        var options = {
            showTitle: true,
            showLabels: true,
            headers: head,
            title: title
        };
        // tslint:disable-next-line:no-unused-expression
        new __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__["Angular2Csv"](this.resultVal, 'Chatbot report ' + date, options);
    };
    AppComponent.prototype.upload = function () {
        var point = this;
        var file = document.getElementById('fileForUpload').files[0];
        if (file && file.type === 'text/plain') {
            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = function (evt) {
                point.testSet = JSON.parse(evt.target['result']);
            };
            reader.onerror = function (evt) {
                console.log(evt.error);
            };
        }
        else if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onloadend = function (evt) {
                var wb = Object(__WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["read"])(evt.target['result'], { type: 'binary' });
                var strlen = (wb.Sheets.Sheet1['!ref']).split('B');
                for (var i = 1; i <= strlen[1]; i++) {
                    var jsonKey = (wb.Sheets.Sheet1['A' + i]).v;
                    var jsonValue = (wb.Sheets.Sheet1['B' + i]).v;
                    point.testSet[jsonKey] = jsonValue;
                }
            };
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map