(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: !!navigator.standalone || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].useHash })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: !!navigator.standalone || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].useHash })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-grow: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _play_play_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./play/play.module */ "./src/app/play/play.module.ts");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./social/social.module */ "./src/app/social/social.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");













class CustomHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_2__["DIRECTION_ALL"] }
        };
    }
}
CustomHammerConfig.ɵfac = function CustomHammerConfig_Factory(t) { return ɵCustomHammerConfig_BaseFactory(t || CustomHammerConfig); };
CustomHammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomHammerConfig, factory: CustomHammerConfig.ɵfac });
const ɵCustomHammerConfig_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomHammerConfig);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomHammerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
            useClass: CustomHammerConfig
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _play_play_module__WEBPACK_IMPORTED_MODULE_7__["PlayModule"],
            _social_social_module__WEBPACK_IMPORTED_MODULE_8__["SocialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _play_play_module__WEBPACK_IMPORTED_MODULE_7__["PlayModule"],
        _social_social_module__WEBPACK_IMPORTED_MODULE_8__["SocialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _play_play_module__WEBPACK_IMPORTED_MODULE_7__["PlayModule"],
                    _social_social_module__WEBPACK_IMPORTED_MODULE_8__["SocialModule"],
                ],
                providers: [
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                        useClass: CustomHammerConfig
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/gamemode-base.ts":
/*!**********************************!*\
  !*** ./src/app/gamemode-base.ts ***!
  \**********************************/
/*! exports provided: GameModeBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModeBase", function() { return GameModeBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/server/server.service */ "./src/app/services/server/server.service.ts");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");






class GameModeBase {
    constructor(route, router, server, storage) {
        this.route = route;
        this.router = router;
        this.server = server;
        this.storage = storage;
        this.name = '';
        this.role = 'host';
        this.defaultRouteCommand = [];
        this.currentRouteCommand = [];
    }
    determineRoute(game, client) {
        return null;
    }
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f;
        console.log(`[${this.name}] OnDestroy`);
        (_a = this.gameStateSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.clientStateSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.connectionSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        // tear down the socket but leave the stored state - accidental back button can then come forward again
        // @TODO: not ideal that the "Join" button on homescreen still brings us back here?
        // maybe a 'resume' button added for recent state only with the other buttons clearing state
        (_f = (_e = (_d = this.server) === null || _d === void 0 ? void 0 : _d.activeSession) === null || _e === void 0 ? void 0 : _e.socket) === null || _f === void 0 ? void 0 : _f.close();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(`[${this.name}] OnInit`);
            if (this.route.snapshot.data.role) {
                this.role = this.route.snapshot.data.role;
            }
            this.connectionSubscription = this.server.connected.subscribe(connected => {
                if (!connected)
                    this.onDisconnected();
                else
                    this.onConnected();
            });
            // assumption below is that there is NEVER an active session upon reaching this page
            const { lastRole, lastSession, lastToken, lastId } = this.storage;
            if (lastRole && lastRole !== this.role) {
                console.log(`[${this.name}] role changed, clearing stored conn`);
                this.storage.clear(); // clear the no-longer-relevant state. might want to clear only certain items
            }
            else if (lastSession && lastRole) {
                console.log(`[${this.name}] stored conn detected, attempting reconnect`);
                try {
                    const reconnect = (lastToken && lastId) ? { token: lastToken, id: lastId } : undefined;
                    // unfortunately errors below will cause an error log even though caught
                    // circumventing this would require a different method of refusing ws connections server side
                    yield this.server.connectSession(lastSession, lastRole, reconnect);
                    // determineRoute will now kick in and determine where we should go
                }
                catch (_a) {
                    this.storage.clear(); // might want to clear only certain items
                    console.log(`[${this.name}] reconnect failed, routing to default (${this.defaultRouteCommand[0]})`);
                    this.router.navigate(this.defaultRouteCommand, { skipLocationChange: true, relativeTo: this.route });
                }
            }
            else {
                console.log(`[${this.name}] no stored conn, routing to default (${this.defaultRouteCommand[0]})`);
                this.router.navigate(this.defaultRouteCommand, { skipLocationChange: true, relativeTo: this.route });
            }
        });
    }
    processPossibleRouteChange() {
        const routeCommand = this.determineRoute(this.server.activeSession.state, this.server.activeClient.state);
        if (!routeCommand)
            return;
        if (this.currentRouteCommand[0] === routeCommand[0])
            return;
        this.currentRouteCommand = routeCommand;
        console.log(`[${this.name}] routing to ${routeCommand[0]}`);
        this.router.navigate(routeCommand, { skipLocationChange: true, relativeTo: this.route });
    }
    onDisconnected() {
        console.log(`[${this.name}] disconnected`);
        // may need to appropriately handle different circumstances e.g closed for a reason vs closed due to error?
        // might just want to revert to connect route with a message (triggered by server close)
        // might want to try refresh (socket error that a refresh will fix) - and message somehow only if *that* fails
        // might want to return home (user exit?)
        // if the session is really gone the failed reconnect after reload will take care of clearing storage
        // forced reload is not ideal if this was user-driven action though
        location.reload();
    }
    onConnected() {
        console.log(`[${this.name}] connected`);
        this.processPossibleRouteChange();
        this.gameStateSubscription = this.server.activeSession.observableState.subscribe(() => this.processPossibleRouteChange());
        this.clientStateSubscription = this.server.activeClient.observableState.subscribe(() => this.processPossibleRouteChange());
    }
    exit() {
        // deliberate exit, clear the stored state so we don't attempt to reconnect on reload
        this.storage.clear();
    }
}
GameModeBase.ɵfac = function GameModeBase_Factory(t) { return new (t || GameModeBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
GameModeBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GameModeBase });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameModeBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] }, { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 10, vars: 0, consts: [[1, "page-title"], [1, "flex-pad"], ["src", "../../assets/TrollFace.jpg", 2, "max-width", "300px"], [1, "page-explanation"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welp! I haven't written any help yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remind me later \u00AF\\_(\u30C4)_/\u00AF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 1);
    } }, styles: [".page-default[_ngcontent-%COMP%], [_nghost-%COMP%], .page-default-narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\n.page-default[_ngcontent-%COMP%], [_nghost-%COMP%], .page-default-narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\n[_nghost-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFFSSxnQkFkZ0I7QUNXcEI7O0FEVEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNZSjs7QURUQTtFQUVJLGdCQWRnQjtBQ3lCcEI7O0FBdEJBO0VBRUksbUJBQUE7QUF3QkoiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiRuYXJyb3ctcGFnZS13aWR0aDogNjAwcHg7XG5cbi5wYWdlLWRlZmF1bHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1kZWZhdWx0LW5hcnJvdyB7XG4gICAgQGV4dGVuZCAucGFnZS1kZWZhdWx0O1xuICAgIG1heC13aWR0aDogJG5hcnJvdy1wYWdlLXdpZHRoO1xufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xuXG5AaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeComponent {
    constructor(storage) {
        this.storage = storage;
    }
    ngOnInit() {
        this.storage.clear();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 35, vars: 0, consts: [[1, "page-title"], [1, "page-explanation"], [1, "flex-pad"], [1, "button-container"], ["routerLink", "/social", 1, "big-button"], [1, "button-caption"], ["routerLink", "/play", 1, "big-button"], ["routerLink", "/mirror", 1, "big-button"], ["routerLink", "/help", 1, "big-button"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IsoCards!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IsoCards is the card game for the modern social distancer! It seeks to retain the social elements of playing cards while supporting contact-free gameplay within a single household and easy extension across multiple households");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "(Do this on your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "social screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Join Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(Do this on your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Extend Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "(Extend social screen to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "other places");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Help!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(Do this if you're thinking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "WTF is this?!?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".page-default[_ngcontent-%COMP%], .page-default-narrow[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  max-width: 600px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-caption[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 5px;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFFSSxnQkFkZ0I7QUNXcEI7O0FBTkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBU0o7O0FBTkE7RUFDSSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQ6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kbmFycm93LXBhZ2Utd2lkdGg6IDYwMHB4O1xuXG4ucGFnZS1kZWZhdWx0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtZGVmYXVsdC1uYXJyb3cge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdDtcbiAgICBtYXgtd2lkdGg6ICRuYXJyb3ctcGFnZS13aWR0aDtcbn0iLCJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdC1uYXJyb3c7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1jYXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/play/deal/deal.component.ts":
/*!*********************************************!*\
  !*** ./src/app/play/deal/deal.component.ts ***!
  \*********************************************/
/*! exports provided: PlayerDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDealComponent", function() { return PlayerDealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/server/server.service */ "./src/app/services/server/server.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/prompt/prompt.pipe */ "./src/app/shared/pipes/prompt/prompt.pipe.ts");






function PlayerDealComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flash", ctx_r0.statusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.statusText);
} }
function PlayerDealComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipedown", function PlayerDealComponent_div_4_Template_div_swipedown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.drawPromptCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Your deal ", ctx_r1.player.state.name, "! Grab a prompt card. ");
} }
function PlayerDealComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fly-out.done", function PlayerDealComponent_div_5_Template_div_animation_fly_out_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.promptRevealOn = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerDealComponent_div_5_Template_div_swipeup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.revealPromptCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fly-in", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r2.player.state.promptCard.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PlayerDealComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Waiting for players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerDealComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipedown", function PlayerDealComponent_div_7_Template_div_swipedown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.gatherCards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Gather response cards. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerDealComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r21.cardSetRevealIndex + 1, "/", ctx_r21.session.state.promptCard.responses, "");
} }
function PlayerDealComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDealComponent_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.bumpSetIndex(); })("swipeup", function PlayerDealComponent_div_8_Template_div_swipeup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.revealPlayerCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerDealComponent_div_8_div_2_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fly-in", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.session.state.promptCard.responses > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r5.player.state.responseOptions[ctx_r5.currentRevealCard].cards[ctx_r5.cardSetRevealIndex] == null ? null : ctx_r5.player.state.responseOptions[ctx_r5.currentRevealCard].cards[ctx_r5.cardSetRevealIndex].content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PlayerDealComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDealComponent_div_9_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const card_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.selectWinner(card_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r27 + 1);
} }
function PlayerDealComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerDealComponent_div_9_div_1_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.player.state.responseOptions);
} }
function PlayerDealComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flash", ctx_r7.subStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.subStatusText);
} }
function PlayerDealComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.endTurnSeconds);
} }
function PlayerDealComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ready to Proceed?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerDealComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDealComponent_div_11_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.endTurn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerDealComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerDealComponent_div_11_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerDealComponent_div_11_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerDealComponent_div_11_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerDealComponent_div_11_div_3_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.endTurnSeconds > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.endTurnSeconds === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.endTurnSeconds === 0);
} }
function PlayerDealComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerDealComponent_div_12_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your deal! Swipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to draw a prompt card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDealComponent_div_12_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r39.helpScreensDone["draw-prompt"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerDealComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerDealComponent_div_13_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Read out your card then swipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to reveal it");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDealComponent_div_13_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r42.helpScreensDone["read-prompt"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerDealComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerDealComponent_div_14_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Everyone has played a card. Swipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to gather the responses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDealComponent_div_14_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r45.helpScreensDone["gather"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerDealComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerDealComponent_div_15_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Read out each prompt/response combo. For each player ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TAP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to cycle through cards (if more than one) and then swipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to reveal the set");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDealComponent_div_15_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r48.helpScreensDone["announce"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerDealComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerDealComponent_div_16_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Time to pick a winner! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TAP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to pick your fave");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDealComponent_div_16_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r51.helpScreensDone["browse"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
const flashFrames = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "initial", offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "hotpink", offset: 0.2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "hotpink", offset: 0.8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "initial", offset: 1 }),
]);
class PlayerDealComponent {
    constructor(server) {
        this.server = server;
        this.currentRevealCard = 0;
        this.endTurnCountdown = 3;
        // animation state
        this.promptRevealOn = false;
        this.responseRevealOn = false;
        this.cardSetRevealIndex = 0;
        this.cardSetEndReached = false;
        this.endTurnSeconds = 0;
        // tutorial state
        this.helpScreensDone = {
            'draw-prompt': true,
            'read-prompt': true,
            'gather': true,
            'announce': true,
            'browse': true,
            'award': true,
        };
    }
    captureSwipe() { }
    ngOnInit() {
        this.session = this.server.activeSession;
        this.player = this.server.activeClient;
        const hasDoneTutorials = localStorage.getItem('dealer-tutorial-complete');
        // enable tutorial screens
        if (!hasDoneTutorials) {
            for (const key in this.helpScreensDone) {
                this.helpScreensDone[key] = false;
            }
        }
        this.stateSubscription = this.session.observableState.subscribe((state) => {
            if (state.subphase === "turn-begin" /* TurnBegin */) {
                // reset animation state
                this.promptRevealOn = false;
                this.responseRevealOn = false;
                this.endTurnSeconds = 0;
                // save tutorial progress
                if (!hasDoneTutorials) {
                    localStorage.setItem('dealer-tutorial-complete', 'true');
                }
            }
            if (state.subphase === "dealer-announcing-player-cards" /* DealerAnnouncingPlayerCards */) {
                this.cardSetRevealIndex = 0;
                this.cardSetEndReached = this.session.state.promptCard.responses === 1;
            }
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.stateSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    get statusText() {
        switch (this.session.state.subphase) {
            case "turn-begin" /* TurnBegin */:
                return 'Draw a Prompt';
            case "dealer-talking" /* DealerAnnouncingCard */:
                return 'Read and Reveal';
            case "dealer-announcing-player-cards" /* DealerAnnouncingPlayerCards */:
                if (this.session.state.promptCard.responses === 1) {
                    return 'Read and Reveal';
                }
                else {
                    return `Read and Reveal (${this.session.state.promptCard.responses} cards/player)`;
                }
            case "players-playing" /* PlayersPlaying */:
                return 'Waiting on Players';
            case "awaiting-dealer-gather" /* AwaitingDealerGather */:
                return 'Gather Responses';
            case "dealer-judging" /* DealerJudging */:
                return 'Pick a Winner!';
            case "turn-results" /* TurnResults */:
                return 'Results';
            default:
                return this.session.state.subphase;
        }
    }
    get subStatusText() {
        if (this.session.state.subphase === "dealer-announcing-player-cards" /* DealerAnnouncingPlayerCards */) {
            return `${this.currentRevealCard + 1} of ${this.player.state.responseOptions.length}`;
        }
        else
            return 'Dealer';
    }
    drawPromptCard() {
        this.server.drawPromptCard();
    }
    revealPromptCard() {
        this.promptRevealOn = true;
        this.server.revealPromptCard();
    }
    gatherCards() {
        this.server.gatherCards();
    }
    bumpSetIndex() {
        this.cardSetRevealIndex = ++this.cardSetRevealIndex % this.session.state.promptCard.responses;
        if (this.cardSetRevealIndex === this.session.state.promptCard.responses - 1) {
            this.cardSetEndReached = true;
        }
    }
    revealPlayerCard() {
        if (!this.cardSetEndReached) {
            return;
        }
        this.cardSetRevealIndex = 0;
        this.server.revealPlayerCards(this.player.state.responseOptions[this.currentRevealCard].id);
        this.currentRevealCard = ++this.currentRevealCard % this.player.state.responseOptions.length;
    }
    selectWinner(cardset) {
        this.server.selectWinner(cardset.id);
        this.endTurnSeconds = this.endTurnCountdown;
        const interval = setInterval(() => {
            this.endTurnSeconds--;
            if (this.endTurnSeconds === 0) {
                clearInterval(interval);
            }
        }, 1000);
    }
    endTurn() {
        this.server.endTurn();
    }
    debugAnim(event, stage) {
        console.log(`${event.triggerName} ${stage} (${event.fromState} => ${event.toState})`);
    }
}
PlayerDealComponent.ɵfac = function PlayerDealComponent_Factory(t) { return new (t || PlayerDealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"])); };
PlayerDealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerDealComponent, selectors: [["app-deal"]], decls: 17, vars: 16, consts: [[1, "page-title", "session-name", "dealer-variant"], [1, "section", "dealer-variant"], ["class", "hint", 4, "ngIf"], ["style", "display: flex; align-items: stretch;", 4, "ngIf"], [4, "ngIf"], ["style", "align-items: center;", 4, "ngIf"], ["class", "grid-container", 4, "ngIf"], ["class", "help-modal", 3, "swipeup", 4, "ngIf"], [1, "hint"], [2, "display", "flex", "align-items", "stretch"], [1, "card", "ghost", 3, "swipedown"], [1, "card", "prompt", 3, "swipeup"], [3, "innerHtml"], [2, "align-items", "center"], [1, "flex-pad"], [1, "spinner", "invert"], [1, "double-bounce1"], [1, "double-bounce2"], [1, "card", "response", 3, "click", "swipeup"], ["class", "index", 4, "ngIf"], [1, "index"], [1, "grid-container"], ["class", "card response tiny", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "response", "tiny", 3, "click"], [1, "number"], [1, "help-modal", 3, "swipeup"], ["class", "done", 3, "click", 4, "ngIf"], [1, "done", 3, "click"]], template: function PlayerDealComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerDealComponent_span_3_Template, 2, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerDealComponent_div_4_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayerDealComponent_div_5_Template, 4, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerDealComponent_div_6_Template, 8, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayerDealComponent_div_7_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerDealComponent_div_8_Template, 7, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlayerDealComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayerDealComponent_span_10_Template, 2, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlayerDealComponent_div_11_Template, 4, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayerDealComponent_div_12_Template, 8, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerDealComponent_div_13_Template, 8, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerDealComponent_div_14_Template, 8, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlayerDealComponent_div_15_Template, 11, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PlayerDealComponent_div_16_Template, 8, 1, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.session.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@noop", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase !== "turn-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase === "turn-begin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase === "dealer-talking" && ctx.player.state.promptCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.promptRevealOn && ctx.session.state.subphase === "players-playing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase === "awaiting-dealer-gather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase === "dealer-announcing-player-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase === "dealer-judging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase !== "turn-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase === "turn-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["draw-prompt"] && ctx.session.state.subphase === "turn-begin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["read-prompt"] && ctx.session.state.subphase === "dealer-talking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["gather"] && ctx.session.state.subphase === "awaiting-dealer-gather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["announce"] && ctx.session.state.subphase === "dealer-announcing-player-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["browse"] && ctx.session.state.subphase === "dealer-judging");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_shared_pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_4__["PromptPipe"]], styles: [".page-default[_ngcontent-%COMP%], .page-default-narrow[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  max-width: 600px;\n}\n\n[_nghost-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: center;\n}\n\n.section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.session-name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.hint[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background-color: black;\n}\n\n.card[_ngcontent-%COMP%] {\n  --margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  font-size: 2em;\n  text-align: center;\n  border: 2px solid white;\n  border-radius: 20px;\n  margin: var(--margin);\n  flex-grow: 1;\n  flex-direction: column;\n  line-height: 1.3em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 999;\n}\n\n.card.response[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.card.prompt[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.card.ghost[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  border-style: dashed;\n}\n\n.card[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -5px;\n}\n\n.card.tiny[_ngcontent-%COMP%] {\n  width: 100px;\n  max-width: 100px;\n  height: 150px;\n  max-height: 150px;\n  cursor: pointer;\n}\n\n.card.tiny[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  font-size: 30px;\n  font-weight: bold;\n  border: 3px solid black;\n  border-radius: 50%;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n  flex-wrap: wrap;\n  align-items: center !important;\n  align-content: center !important;\n  justify-content: center !important;\n  justify-items: center !important;\n  background-color: black;\n}\n\n.help-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  background-color: black;\n  z-index: 999;\n  opacity: 0.9;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  text-align: center;\n}\n\n.help-modal[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.help-modal[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border-color: white;\n  color: black;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.spinner.invert[_ngcontent-%COMP%] {\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGxheS9kZWFsL2RlYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUVJLGdCQWRnQjtBQ1dwQjs7QUFWQTtFQUVJLHVCQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVRBO0VBQ0ksWUFBQTtBQVlKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBWUo7O0FBVEE7RUFDSSwwQkFBQTtBQVlKOztBQVRBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQVlKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FBWUo7O0FBVEE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUFZSjs7QUFUQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVRBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFZSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVlKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFUQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFZSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVRBO0VBQ0ksWUFBQTtBQVlKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFUQTtFQUNJLDRCQUFBO1VBQUEsb0JBQUE7QUFZSiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvZGVhbC9kZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQ6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kbmFycm93LXBhZ2Utd2lkdGg6IDYwMHB4O1xuXG4ucGFnZS1kZWZhdWx0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtZGVmYXVsdC1uYXJyb3cge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdDtcbiAgICBtYXgtd2lkdGg6ICRuYXJyb3ctcGFnZS13aWR0aDtcbn0iLCJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdC1uYXJyb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uID4gZGl2IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uc2Vzc2lvbi1uYW1lIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmhpbnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZCB7XG4gICAgLS1tYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luOiB2YXIoLS1tYXJnaW4pO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5jYXJkLnJlc3BvbnNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLnByb21wdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC5naG9zdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufVxuXG4uY2FyZCAuaW5kZXgge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uY2FyZC50aW55IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQudGlueSAubnVtYmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmhlbHAtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC0wcHg7XG4gICAgYm90dG9tOiAtMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgei1pbmRleDogOTk5O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlbHAtbW9kYWwgPiAqIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5oZWxwLW1vZGFsIC5kb25lIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNwaW5uZXIuaW52ZXJ0IHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('noop', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s'))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flash', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', flashFrames)]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('modal', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fly-in', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fly-out', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerDealComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deal',
                templateUrl: './deal.component.html',
                styleUrls: ['./deal.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('noop', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s'))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flash', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', flashFrames)]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('modal', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fly-in', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                        ]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fly-out', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
                        ]),
                    ])
                ],
            }]
    }], function () { return [{ type: src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/play/game/player-game.component.ts":
/*!****************************************************!*\
  !*** ./src/app/play/game/player-game.component.ts ***!
  \****************************************************/
/*! exports provided: PlayerGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerGameComponent", function() { return PlayerGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/server/server.service */ "./src/app/services/server/server.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/prompt/prompt.pipe */ "./src/app/shared/pipes/prompt/prompt.pipe.ts");






function PlayerGameComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function PlayerGameComponent_div_5_Template_div_swipeleft_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.nextCard(); })("swiperight", function PlayerGameComponent_div_5_Template_div_swiperight_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.previousCard(); })("swipeup", function PlayerGameComponent_div_5_Template_div_swipeup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.playCurrentCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fly-in", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.cards[ctx_r0.currentCard] == null ? null : ctx_r0.cards[ctx_r0.currentCard].content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PlayerGameComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipedown", function PlayerGameComponent_div_6_Template_div_swipedown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.drawPlayerCards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Draw ", ctx_r1.session.state.promptCard.responses, " new card(s) ");
} }
function PlayerGameComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerGameComponent_div_9_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Listen to the Dealer's prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerGameComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerGameComponent_div_10_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Swipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LEFT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to browse your response cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerGameComponent_div_10_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r18.helpScreensDone["browse-response"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerGameComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerGameComponent_div_11_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Swipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to play your best response(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerGameComponent_div_11_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r21.helpScreensDone["select-response"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerGameComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerGameComponent_div_12_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nice one! Now swipe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to pick up from the deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerGameComponent_div_12_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r24.helpScreensDone["draw-new"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerGameComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerGameComponent_div_13_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enjoy the other responses and wait for the dealer to pick a winner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerGameComponent_div_13_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r27.helpScreensDone["enjoy"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
function PlayerGameComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayerGameComponent_div_14_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "That's it. Dealer passes on and we go again. Have fun!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerGameComponent_div_14_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r30.helpScreensDone["finish"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
const flashFrames = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "initial", offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "hotpink", offset: 0.2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "hotpink", offset: 0.8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "initial", offset: 1 }),
]);
class PlayerGameComponent {
    constructor(server) {
        this.server = server;
        // transient state, won't perisist through a reload
        this.currentCard = 0;
        this.playerHasPlayed = false; // = 'players-playing' AND not dealer AND not isPlayersTurn
        this.playerHasRedrawn = false;
        this.cardsPlayed = [];
        // tutorial state
        this.browseCount = 0;
        this.helpScreensDone = {
            'browse-response': true,
            'select-response': true,
            'draw-new': true,
            'enjoy': true,
            'finish': true,
        };
    }
    captureSwipe() { }
    ngOnInit() {
        this.session = this.server.activeSession;
        this.player = this.server.activeClient;
        const hasDoneTutorials = localStorage.getItem('player-tutorial-complete');
        // enable tutorial screens
        if (!hasDoneTutorials) {
            for (const key in this.helpScreensDone) {
                this.helpScreensDone[key] = false;
            }
        }
        this.stateSubscription = this.session.observableState.subscribe((state) => {
            // this doesn't occur when transitioning from dealer, or first visit state has already been handled before the route change
            if (state.subphase === "turn-begin" /* TurnBegin */) {
                // reset client-managed state
                this.playerHasPlayed = false;
                this.playerHasRedrawn = false;
                this.cardsPlayed = [];
                // save tutorial progress
                if (!hasDoneTutorials) {
                    localStorage.setItem('player-tutorial-complete', 'true');
                }
            }
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.stateSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    get statusText() {
        switch (this.session.state.subphase) {
            case "turn-begin" /* TurnBegin */:
            case "awaiting-dealer-gather" /* AwaitingDealerGather */:
                return 'Waiting on Dealer';
            case "dealer-talking" /* DealerAnnouncingCard */:
            case "dealer-announcing-player-cards" /* DealerAnnouncingPlayerCards */:
                return 'Listen to Dealer';
            case "players-playing" /* PlayersPlaying */:
                return this.player.state.isPlayersTurn ?
                    `Playing card ${this.cardsPlayed.length + 1} of ${this.session.state.promptCard.responses}` :
                    `Waiting for other Players`;
            case "dealer-judging" /* DealerJudging */:
                return 'Dealer Passing Judgement';
            case "turn-results" /* TurnResults */:
                return 'Results';
            default:
                return this.session.state.subphase;
        }
    }
    get subStatusText() {
        if (this.playerHasPlayed && !this.playerHasRedrawn) {
            return `Need ${this.session.state.promptCard.responses} card(s)`;
        }
        return `${this.currentCard + 1} of ${this.cards.length}`;
    }
    get cards() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.player.state) === null || _a === void 0 ? void 0 : _a.cards) === null || _b === void 0 ? void 0 : _b.filter(c => !this.cardsPlayed.includes(c))) !== null && _c !== void 0 ? _c : [];
    }
    nextCard() {
        this.browseCount++;
        this.currentCard = ++this.currentCard % this.cards.length;
    }
    previousCard() {
        this.browseCount++;
        this.currentCard--;
        if (this.currentCard < 0) {
            this.currentCard += this.cards.length;
        }
    }
    playCurrentCard() {
        const cards = this.cards;
        if (!this.player.state.isPlayersTurn)
            return;
        this.cardsPlayed.push(cards[this.currentCard]);
        if (this.cardsPlayed.length === this.session.state.promptCard.responses) {
            this.server.playCards(this.cardsPlayed.map(c => c.id));
            this.playerHasPlayed = true;
            this.currentCard = this.player.state.cards.length - this.session.state.promptCard.responses;
            this.cardsPlayed = [];
        }
        else if (this.currentCard === (cards.length - 1)) {
            this.currentCard = ++this.currentCard % cards.length;
        }
    }
    drawPlayerCards() {
        if (this.player.state.isPlayersTurn || !this.playerHasPlayed || this.playerHasRedrawn)
            return;
        this.playerHasRedrawn = true;
    }
}
PlayerGameComponent.ɵfac = function PlayerGameComponent_Factory(t) { return new (t || PlayerGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"])); };
PlayerGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerGameComponent, selectors: [["app-player-game"]], decls: 15, vars: 14, consts: [[1, "page-title", "session-name"], [1, "section"], [1, "hint"], [4, "ngIf"], ["class", "help-modal", 3, "swipeup", 4, "ngIf"], [1, "card", "reponse", 3, "swipeleft", "swiperight", "swipeup"], [3, "innerHtml"], [1, "card", "ghost", 3, "swipedown"], [1, "help-modal", 3, "swipeup"], [1, "done", 3, "click"]], template: function PlayerGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayerGameComponent_div_5_Template, 4, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerGameComponent_div_6_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlayerGameComponent_div_9_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayerGameComponent_div_10_Template, 11, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlayerGameComponent_div_11_Template, 8, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayerGameComponent_div_12_Template, 8, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerGameComponent_div_13_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerGameComponent_div_14_Template, 5, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.session.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@noop", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flash", ctx.statusText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statusText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playerHasPlayed || ctx.playerHasRedrawn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerHasPlayed && !ctx.playerHasRedrawn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flash-fast", ctx.currentCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subStatusText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["browse-response"] && (ctx.session.state.subphase === "turn-begin" || ctx.session.state.subphase === "dealer-talking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["browse-response"] && ctx.session.state.subphase === "players-playing" && ctx.player.state.isPlayersTurn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["select-response"] && ctx.browseCount === 2 && ctx.player.state.isPlayersTurn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["draw-new"] && ctx.playerHasPlayed && !ctx.playerHasRedrawn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["enjoy"] && ctx.playerHasPlayed && ctx.playerHasRedrawn && ctx.session.state.subphase !== "turn-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.helpScreensDone["finish"] && ctx.session.state.subphase === "turn-results");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_shared_pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_4__["PromptPipe"]], styles: [".page-default[_ngcontent-%COMP%], .page-default-narrow[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  max-width: 600px;\n}\n\n.section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: center;\n}\n\n.section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.session-name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.hint[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.card[_ngcontent-%COMP%] {\n  --margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10%;\n  font-size: 2em;\n  text-align: center;\n  border: 2px solid black;\n  border-radius: 20px;\n  margin: var(--margin);\n  flex-grow: 1;\n  line-height: 1.3em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 999;\n}\n\n.card.response[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.card.prompt[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.card.ghost[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border-style: dashed;\n}\n\n.help-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  background-color: black;\n  z-index: 999;\n  opacity: 0.9;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  text-align: center;\n}\n\n.help-modal[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.help-modal[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border-color: white;\n  color: black;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGxheS9nYW1lL3BsYXllci1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFFSSxnQkFkZ0I7QUNXcEI7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBU0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFMQTtFQUNJLDBCQUFBO0FBUUo7O0FBTEE7RUFDSSxpQkFBQTtBQVFKOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQVFKOztBQUxBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTEE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUFRSjs7QUFMQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFMQTtFQUNJLFlBQUE7QUFRSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBUUoiLCJmaWxlIjoic3JjL2FwcC9wbGF5L2dhbWUvcGxheWVyLWdhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiRuYXJyb3ctcGFnZS13aWR0aDogNjAwcHg7XG5cbi5wYWdlLWRlZmF1bHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1kZWZhdWx0LW5hcnJvdyB7XG4gICAgQGV4dGVuZCAucGFnZS1kZWZhdWx0O1xuICAgIG1heC13aWR0aDogJG5hcnJvdy1wYWdlLXdpZHRoO1xufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICAgQGV4dGVuZCAucGFnZS1kZWZhdWx0LW5hcnJvdztcbn1cblxuLnNlY3Rpb24ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uID4gZGl2IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uc2Vzc2lvbi1uYW1lIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmhpbnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZCB7XG4gICAgLS1tYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwJTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IHZhcigtLW1hcmdpbik7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5jYXJkLnJlc3BvbnNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLnByb21wdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC5naG9zdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufVxuXG4uaGVscC1tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogLTBweDtcbiAgICBib3R0b206IC0wcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVscC1tb2RhbCA+ICoge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmhlbHAtbW9kYWwgLmRvbmUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('noop', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s'))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flash', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', flashFrames)]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flash-fast', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', flashFrames)]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('modal', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fly-in', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-game',
                templateUrl: './player-game.component.html',
                styleUrls: ['./player-game.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('noop', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s'))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flash', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', flashFrames)]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flash-fast', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', flashFrames)]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('modal', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fly-in', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                        ]),
                    ]),
                ],
            }]
    }], function () { return [{ type: src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/play/lobby/player-lobby.component.ts":
/*!******************************************************!*\
  !*** ./src/app/play/lobby/player-lobby.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerLobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerLobbyComponent", function() { return PlayerLobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/server/server.service */ "./src/app/services/server/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_play_lobby_snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/play/lobby/snapshot/snapshot.component */ "./src/app/play/lobby/snapshot/snapshot.component.ts");







function PlayerLobbyComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PlayerLobbyComponent_form_2_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Set how you appear to every one on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "social screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-snapshot", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("photo", function PlayerLobbyComponent_form_2_Template_app_snapshot_photo_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.player.photo = $event; })("active", function PlayerLobbyComponent_form_2_Template_app_snapshot_active_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.snapActive = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerLobbyComponent_form_2_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.player.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.player.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.player.name || !ctx_r0.player.photo || ctx_r0.snapActive);
} }
function PlayerLobbyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Waiting for host");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.client.state.name);
} }
class PlayerLobbyComponent {
    constructor(server, router) {
        this.server = server;
        this.router = router;
        this.session = null;
        this.client = null;
        this.player = {
            name: '',
            photo: ''
        };
        this.session = server.activeSession;
        this.client = server.activeClient;
        // @TODO: listen for game state annd then V
        // this.router.navigateByUrl('play', { skipLocationChange: true });
    }
    ngOnInit() {
    }
    submit() {
        if (!this.player.name || !this.player.photo)
            return;
        this.server.enrollPlayer(this.player.name, this.player.photo);
    }
}
PlayerLobbyComponent.ɵfac = function PlayerLobbyComponent_Factory(t) { return new (t || PlayerLobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PlayerLobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerLobbyComponent, selectors: [["app-player-lobby"]], decls: 4, vars: 3, consts: [[1, "page-title", "session-name"], ["class", "container", 3, "submit", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container", 3, "submit"], [1, "page-explanation"], [1, "flex-pad"], ["type", "image/png", 2, "margin", "15px", 3, "photo", "active"], ["placeholder", "Name", "autocapitalize", "off", "autocomplete", "off", "spellcheck", "false", "name", "notname", 1, "big-input", "subtle", 3, "ngModel", "ngModelChange"], [1, "big-button", 3, "disabled"], [1, "container"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"], [1, "name-display"]], template: function PlayerLobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerLobbyComponent_form_2_Template, 11, 2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerLobbyComponent_div_3_Template, 11, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.session.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.client.state.enrolled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.client.state.enrolled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], src_app_play_lobby_snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_5__["SnapshotComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".page-default[_ngcontent-%COMP%], .page-default-narrow[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  max-width: 600px;\n}\n\n.session-name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\napp-snapshot[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.name-display[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGxheS9sb2JieS9wbGF5ZXItbG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUVJLGdCQWRnQjtBQ1dwQjs7QUFOQTtFQUNJLDBCQUFBO0FBU0o7O0FBTkE7RUFDSSxZQUFBO0FBU0o7O0FBTkE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFOQTtFQUNJLGNBQUE7QUFTSiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvbG9iYnkvcGxheWVyLWxvYmJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQ6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kbmFycm93LXBhZ2Utd2lkdGg6IDYwMHB4O1xuXG4ucGFnZS1kZWZhdWx0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtZGVmYXVsdC1uYXJyb3cge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdDtcbiAgICBtYXgtd2lkdGg6ICRuYXJyb3ctcGFnZS13aWR0aDtcbn0iLCJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdC1uYXJyb3c7XG59XG5cbi5zZXNzaW9uLW5hbWUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5hcHAtc25hcHNob3Qge1xuICAgIG1hcmdpbjogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hbWUtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerLobbyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-lobby',
                templateUrl: './player-lobby.component.html',
                styleUrls: ['./player-lobby.component.scss']
            }]
    }], function () { return [{ type: src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/play/lobby/snapshot/snapshot.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/play/lobby/snapshot/snapshot.component.ts ***!
  \***********************************************************/
/*! exports provided: SnapshotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapshotComponent", function() { return SnapshotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["video"];
const _c1 = ["canvas"];
const _c2 = ["image"];
function SnapshotComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Camera Unavailable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SnapshotComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tap to ", ctx_r2.videoActive ? "Save" : "Snap", "!");
} }
function SnapshotComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7, 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.currentPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class SnapshotComponent {
    constructor() {
        this.imageType = 'image/jpg';
        this.photo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.active = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.videoActive = false;
        this.disabled = false;
    }
    emitPlaceholderPhoto() {
        // 1x1 black pixel
        this.currentPhoto = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAAaADAAQAAAABAAAAAQAAAAD5Ip3+AAAADUlEQVQIHWNgYGD4DwABBAEAHnOcQAAAAABJRU5ErkJggg==';
        this.photo.emit(this.currentPhoto);
    }
    disable() {
        this.disabled = true;
        this.emitPlaceholderPhoto();
    }
    ngOnInit() {
        if ((!window.isSecureContext && location.protocol !== 'https:') || !navigator.mediaDevices) {
            this.disable();
        }
        else if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            this.emitPlaceholderPhoto();
        }
    }
    toggle() {
        if (!this.videoActive)
            this.start();
        else
            this.takePhoto();
    }
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.stream = yield navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                this.video.nativeElement.srcObject = this.stream;
                this.video.nativeElement.play();
                this.videoActive = true;
                this.active.emit(true);
                this.disabled = false;
            }
            catch (_a) {
                this.videoActive = false;
                this.active.emit(false);
                this.disable();
            }
        });
    }
    takePhoto() {
        const width = this.video.nativeElement.videoWidth;
        const height = this.video.nativeElement.videoHeight;
        const size = Math.min(width, height);
        this.canvas.nativeElement.width = this.canvas.nativeElement.height = size;
        const context = this.canvas.nativeElement.getContext('2d');
        context.drawImage(this.video.nativeElement, (width - size) / 2, (height - size) / 2, size, size, 0, 0, size, size);
        this.currentPhoto = this.canvas.nativeElement.toDataURL(this.imageType);
        this.photo.emit(this.currentPhoto);
        this.video.nativeElement.srcObject = null;
        for (const track of this.stream.getTracks()) {
            track.stop();
        }
        this.videoActive = false;
        this.active.emit(false);
    }
}
SnapshotComponent.ɵfac = function SnapshotComponent_Factory(t) { return new (t || SnapshotComponent)(); };
SnapshotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SnapshotComponent, selectors: [["app-snapshot"]], viewQuery: function SnapshotComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
    } }, inputs: { imageType: ["type", "imageType"] }, outputs: { photo: "photo", active: "active" }, decls: 10, vars: 7, consts: [[1, "click-container", 3, "click"], ["playsinline", ""], ["video", ""], [1, "content"], [4, "ngIf"], ["class", "photo", 3, "src", 4, "ngIf"], ["canvas", ""], [1, "photo", 3, "src"], ["image", ""]], template: function SnapshotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SnapshotComponent_Template_div_click_0_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Video stream not available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SnapshotComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SnapshotComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SnapshotComponent_img_7_Template, 2, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "canvas", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.videoActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.videoActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.disabled && !ctx.currentPhoto || ctx.videoActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.disabled && ctx.currentPhoto && !ctx.videoActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".click-container[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 250px;\n  height: 250px;\n  overflow: hidden;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n}\n\n.click-container.active[_ngcontent-%COMP%] {\n  border: 3px solid lime;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  color: white;\n  z-index: 99999;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1em;\n  border-radius: 50%;\n  top: 0;\n}\n\n.photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n\n.content.active[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: lime;\n}\n\nvideo[_ngcontent-%COMP%] {\n  background-color: black;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n  position: absolute;\n  border-radius: 50%;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9sb2JieS9zbmFwc2hvdC9zbmFwc2hvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLFdBdkNJO0FBc0NSOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvbG9iYnkvc25hcHNob3Qvc25hcHNob3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3I6IGxpbWU7XG5cbi5jbGljay1jb250YWluZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2xpY2stY29udGFpbmVyLmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJGNvbG9yO1xufVxuXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0b3A6IDA7XG59XG5cbi5waG90byB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJGNvbG9yO1xufVxuXG52aWRlbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmNhbnZhcyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SnapshotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-snapshot',
                templateUrl: './snapshot.component.html',
                styleUrls: ['./snapshot.component.scss']
            }]
    }], function () { return []; }, { imageType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['type']
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['video']
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas']
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['image']
        }], photo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['photo']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['active']
        }] }); })();


/***/ }),

/***/ "./src/app/play/play-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/play/play-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PlayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayRoutingModule", function() { return PlayRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _play_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.component */ "./src/app/play/play.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _lobby_player_lobby_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lobby/player-lobby.component */ "./src/app/play/lobby/player-lobby.component.ts");
/* harmony import */ var _game_player_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/player-game.component */ "./src/app/play/game/player-game.component.ts");
/* harmony import */ var _deal_deal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deal/deal.component */ "./src/app/play/deal/deal.component.ts");









const routes = [
    {
        path: 'play',
        component: _play_component__WEBPACK_IMPORTED_MODULE_2__["PlayComponent"],
        children: [
            { path: 'connect', component: _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["ConnectComponent"], data: { role: 'player' } },
            { path: 'lobby', component: _lobby_player_lobby_component__WEBPACK_IMPORTED_MODULE_4__["PlayerLobbyComponent"] },
            { path: 'game', component: _game_player_game_component__WEBPACK_IMPORTED_MODULE_5__["PlayerGameComponent"] },
            { path: 'deal', component: _deal_deal_component__WEBPACK_IMPORTED_MODULE_6__["PlayerDealComponent"] },
        ]
    },
];
class PlayRoutingModule {
}
PlayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlayRoutingModule });
PlayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlayRoutingModule_Factory(t) { return new (t || PlayRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlayRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/play/play.component.ts":
/*!****************************************!*\
  !*** ./src/app/play/play.component.ts ***!
  \****************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gamemode_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gamemode-base */ "./src/app/gamemode-base.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { dealer: a0 }; };
function PlayComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.exitPending = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.server == null ? null : ctx_r0.server.activeClient == null ? null : ctx_r0.server.activeClient.state == null ? null : ctx_r0.server.activeClient.state.isDealer));
} }
function PlayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeup", function PlayComponent_div_2_Template_div_swipeup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.captureSwipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Really exit? It's permanent, you know?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_div_2_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.exit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_div_2_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.exitPending = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@modal", undefined);
} }
class PlayComponent extends _gamemode_base__WEBPACK_IMPORTED_MODULE_1__["GameModeBase"] {
    constructor() {
        super(...arguments);
        this.name = 'PlayComponent';
        this.role = 'player';
        this.defaultRouteCommand = ['connect'];
        this.exitPending = false;
    }
    determineRoute() {
        if (this.server.activeSession.state.phase === 'lobby' ||
            !this.server.activeClient.state.enrolled)
            return ['lobby'];
        else if (this.server.activeSession.state.phase === 'game') {
            if (this.server.activeSession.state.dealer === this.server.activeClient.id)
                return ['deal'];
            else
                return ['game'];
        }
        return null;
    }
    captureSwipe() { }
    exit() {
        // deliberate exit, clear the stored state so we don't attempt to reconnect on reload
        this.storage.clear();
        this.server.withdraw(); // server will close us
    }
}
PlayComponent.ɵfac = function PlayComponent_Factory(t) { return ɵPlayComponent_BaseFactory(t || PlayComponent); };
PlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayComponent, selectors: [["app-play"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "exit dealer", "style", "position: absolute; top: 0; left: 0;", 3, "ngClass", "click", 4, "ngIf"], ["class", "help-modal", 3, "swipeup", 4, "ngIf"], [1, "exit", "dealer", 2, "position", "absolute", "top", "0", "left", "0", 3, "ngClass", "click"], ["src", "../../assets/close.png"], [1, "help-modal", 3, "swipeup"], [2, "display", "flex", "flex-direction", "row"], [1, "done", 3, "click"], [2, "width", "10px"]], template: function PlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayComponent_button_1_Template, 2, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayComponent_div_2_Template, 9, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.server.activeSession);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exitPending);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-grow: 1;\n  align-items: stretch;\n  max-width: 100%;\n  height: 100%;\n}\n\n.help-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  background-color: black;\n  z-index: 99999;\n  opacity: 0.9;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  text-align: center;\n}\n\n.help-modal[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.help-modal[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border-color: white;\n  color: black;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.exit.dealer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9wbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7VUFBQSxvQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGxheS9wbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhlbHAtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC0wcHg7XG4gICAgYm90dG9tOiAtMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVscC1tb2RhbCA+ICoge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmhlbHAtbW9kYWwgLmRvbmUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhpdC5kZWFsZXIgaW1nIHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn0iXX0= */"] });
const ɵPlayComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PlayComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-play',
                templateUrl: './play.component.html',
                styleUrls: ['./play.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/play/play.module.ts":
/*!*************************************!*\
  !*** ./src/app/play/play.module.ts ***!
  \*************************************/
/*! exports provided: PlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayModule", function() { return PlayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _play_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play-routing.module */ "./src/app/play/play-routing.module.ts");
/* harmony import */ var _play_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play.component */ "./src/app/play/play.component.ts");
/* harmony import */ var _lobby_player_lobby_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lobby/player-lobby.component */ "./src/app/play/lobby/player-lobby.component.ts");
/* harmony import */ var _game_player_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/player-game.component */ "./src/app/play/game/player-game.component.ts");
/* harmony import */ var src_app_play_lobby_snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/play/lobby/snapshot/snapshot.component */ "./src/app/play/lobby/snapshot/snapshot.component.ts");
/* harmony import */ var _deal_deal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deal/deal.component */ "./src/app/play/deal/deal.component.ts");











class PlayModule {
}
PlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlayModule, bootstrap: [_play_component__WEBPACK_IMPORTED_MODULE_5__["PlayComponent"]] });
PlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlayModule_Factory(t) { return new (t || PlayModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _play_routing_module__WEBPACK_IMPORTED_MODULE_4__["PlayRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlayModule, { declarations: [_play_component__WEBPACK_IMPORTED_MODULE_5__["PlayComponent"],
        _lobby_player_lobby_component__WEBPACK_IMPORTED_MODULE_6__["PlayerLobbyComponent"],
        _game_player_game_component__WEBPACK_IMPORTED_MODULE_7__["PlayerGameComponent"],
        src_app_play_lobby_snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_8__["SnapshotComponent"],
        _deal_deal_component__WEBPACK_IMPORTED_MODULE_9__["PlayerDealComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _play_routing_module__WEBPACK_IMPORTED_MODULE_4__["PlayRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _play_component__WEBPACK_IMPORTED_MODULE_5__["PlayComponent"],
                    _lobby_player_lobby_component__WEBPACK_IMPORTED_MODULE_6__["PlayerLobbyComponent"],
                    _game_player_game_component__WEBPACK_IMPORTED_MODULE_7__["PlayerGameComponent"],
                    src_app_play_lobby_snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_8__["SnapshotComponent"],
                    _deal_deal_component__WEBPACK_IMPORTED_MODULE_9__["PlayerDealComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _play_routing_module__WEBPACK_IMPORTED_MODULE_4__["PlayRoutingModule"]
                ],
                providers: [],
                bootstrap: [_play_component__WEBPACK_IMPORTED_MODULE_5__["PlayComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/server/client.ts":
/*!*******************************************!*\
  !*** ./src/app/services/server/client.ts ***!
  \*******************************************/
/*! exports provided: Client, PlayerClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerClient", function() { return PlayerClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

class Client {
    constructor() {
        this.state = {};
        // state emitter
        this.observableState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
class PlayerClient extends Client {
    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            photo: '',
            connected: false,
            enrolled: false,
            cards: [],
            isDealer: false,
            score: 0,
            isPlayersTurn: false,
            promptCard: null,
            responseOptions: []
        };
        // state emitter
        this.observableState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}



/***/ }),

/***/ "./src/app/services/server/server.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/server/server.service.ts ***!
  \***************************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session */ "./src/app/services/server/session.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client */ "./src/app/services/server/client.ts");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/services/storage/storage.service.ts");








const WS_URI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secureServer ? 'wss' : 'ws'}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUri}`;
const HTTP_URI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secureServer ? 'https' : 'http'}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUri}`;
class SessionInitData {
}
class ServerService {
    constructor(storage) {
        this.storage = storage;
        this._hasReceivedClientState = false;
        this._hasReceivedGameState = false;
        this.connected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.session = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.client = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get isConnected() {
        return this._hasReceivedGameState && this._hasReceivedClientState;
    }
    createSession(settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch(`${HTTP_URI}/session`, { method: 'POST', body: JSON.stringify(settings), headers: { 'Content-Type': 'application/json' } });
            const result = (yield response.json()); // need to check status
            return result;
        });
    }
    getSession(sessionId, hostToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch(`${HTTP_URI}/session/${sessionId}?token=${hostToken}`, { method: 'GET' });
            const result = (yield response.json()); // need to check status
            return result;
        });
    }
    connectSession(sessionId, role, reconnect) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if there's already a session in place it needs to be torn down (otherwise we end up with multiple websocket connections)
            let url = `${WS_URI}/session/${sessionId}?role=${role}`;
            if (reconnect) {
                url = `${url}&id=${reconnect.id}&token=${reconnect.token}`;
            }
            this.socket = yield this._connectWebSocket(url);
            this.socket.addEventListener('error', err => this._handleSocketError(err));
            this.socket.addEventListener('message', ev => this._handleSocketMessage(ev));
            this.socket.addEventListener('close', ev => this._handleSocketClose(ev));
            this.activeSession = new _session__WEBPACK_IMPORTED_MODULE_4__["Session"](sessionId, this.socket);
            this.activeClient = role === 'player' ? new _client__WEBPACK_IMPORTED_MODULE_5__["PlayerClient"]() : new _client__WEBPACK_IMPORTED_MODULE_5__["Client"]();
            // until this happens activeSession/activeClient are in an undefined state
            yield this.connected.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).toPromise();
            this.storage.lastSession = sessionId;
            this.storage.lastRole = role;
            if (reconnect) {
                this.storage.lastId = reconnect.id;
                this.storage.lastToken = reconnect.token;
            }
        });
    }
    _connectWebSocket(url) {
        return new Promise((resolve, reject) => {
            const socket = new WebSocket(url);
            function onOpen(ev) {
                socket.removeEventListener('open', onOpen);
                socket.removeEventListener('error', onError);
                resolve(socket);
            }
            function onError(err) {
                socket.removeEventListener('open', onOpen);
                socket.removeEventListener('error', onError);
                reject(err);
            }
            socket.addEventListener('open', onOpen);
            socket.addEventListener('error', onError);
        });
    }
    enrollPlayer(name, photo) {
        this.socket.send(JSON.stringify({ type: "register-player" /* PlayerEnroll */, name, photo }));
    }
    withdraw() {
        this.socket.send(JSON.stringify({ type: "withdraw-player" /* Withdraw */ }));
    }
    startGame() {
        this.socket.send(JSON.stringify({ type: "start-game" /* StartGame */ }));
    }
    endGame() {
        this.socket.send(JSON.stringify({ type: "end-game" /* EndGame */ }));
    }
    drawPromptCard() {
        this.socket.send(JSON.stringify({ type: "draw-prompt-card" /* DrawDealerCard */ }));
    }
    revealPromptCard() {
        this.socket.send(JSON.stringify({ type: "reveal-prompt-card" /* RevealDealerCard */ }));
    }
    playCards(cards) {
        this.socket.send(JSON.stringify({ type: "play-response-cards" /* PlayCards */, cards }));
    }
    gatherCards() {
        this.socket.send(JSON.stringify({ type: "gather-response-cards" /* GatherCards */ }));
    }
    revealPlayerCards(cardSetId) {
        this.socket.send(JSON.stringify({ type: "reveal-response-cards" /* RevealPlayerCards */, cardSetId }));
    }
    selectWinner(cardSetId) {
        this.socket.send(JSON.stringify({ type: "select-winner" /* SelectWinner */, cardSetId }));
    }
    endTurn() {
        this.socket.send(JSON.stringify({ type: "end-turn" /* EndTurn */ }));
    }
    _finishConnect() {
        // emit first, crucial details available (ids etc)
        this.connected.emit(true);
    }
    _handleSocketError(ev) {
        console.log('socket error');
        this.connected.emit(false);
        this._hasReceivedClientState = false;
        this._hasReceivedGameState = false;
        this.activeSession = null;
        this.activeClient = null;
    }
    _handleSocketClose(ev) {
        console.log('socket closed');
        this.connected.emit(false);
        this._hasReceivedClientState = false;
        this._hasReceivedGameState = false;
        this.activeSession = null;
        this.activeClient = null;
    }
    _handleSocketMessage(ev) {
        console.log(`Message received: ${ev.data}`);
        const message = JSON.parse(ev.data);
        if (message.type === 'game-state-full') {
            this._handleGameStateFull(message.game);
        }
        else if (message.type === 'game-state-patch') {
            this._handleGameStatePatch(message.state);
        }
        else if (message.type === 'client-state-full') {
            this._handleClientStateFull(message.client);
        }
        else if (message.type === 'client-state-patch') {
            this._handleClientStatePatch(message.state);
        }
        else if (message.type === 'player-add') {
            this._handlePlayerAdd(message.player);
        }
        else if (message.type === 'player-update') {
            this._handlePlayerUpdate(message.id, message.state);
        }
        else if (message.type === 'player-remove') {
            this._handlePlayerRemove(message.id);
        }
    }
    _handlePlayerAdd(player) {
        const playerData = {
            id: player.id,
            connected: player.state.connected,
            enrolled: player.state.enrolled,
            name: player.state.name,
            photo: player.state.photo,
            score: player.state.score,
        };
        this.activeSession.players = [...this.activeSession.players, playerData];
        this.activeSession.observablePlayers.emit(this.activeSession.players);
    }
    _handlePlayerRemove(id) {
        this.activeSession.players = this.activeSession.players.filter(p => p.id !== id);
        this.activeSession.observablePlayers.emit(this.activeSession.players);
    }
    _handlePlayerUpdate(id, state) {
        // this is ugly but for now the received info Partial<PlayerClientState> is a superset of the PlayerData we're interested in
        const player = this.activeSession.players.find(p => p.id === id);
        if (!player) {
            console.warn('Received player update for a player not currently tracked. Ignoring');
            return;
        }
        if ('enrolled' in state) {
            player.enrolled = state.enrolled;
        }
        if ('connected' in state) {
            player.connected = state.connected;
        }
        if ('name' in state) {
            player.name = state.name;
        }
        if ('photo' in state) {
            player.photo = state.photo;
        }
        if ('score' in state) {
            player.score = state.score;
        }
        // forces updates so anything that applies a pipe to the player list will be re-run
        this.activeSession.players = [...this.activeSession.players];
    }
    _handleGameStatePatch(patch) {
        const state = Object.assign(this.activeSession.state, patch);
        this.activeSession.state = Object.assign(this.activeSession.state, patch);
        this.activeSession.observableState.emit(this.activeSession.state);
    }
    _handleGameStateFull(details) {
        // happens once on first connect
        this.activeSession.name = details.name;
        this.activeSession.id = details.id;
        this._handleGameStatePatch(details.state);
        // if we've already received client state but weren't already connected we now are
        if (!this.isConnected) {
            this._hasReceivedGameState = true;
            if (this.isConnected)
                this._finishConnect();
        }
    }
    _handleClientStatePatch(patch) {
        if (this.activeClient.role === 'player') {
            this._handlePlayerClientStatePatch(patch);
        }
        // none of the others have state yet
    }
    _handlePlayerClientStatePatch(patch) {
        const client = this.activeClient;
        client.state = Object.assign(client.state, patch);
        // store reconnect details
        // @TODO storage service should be in charge of listening for and actioning this. not server's job
        if (patch.enrolled === true) {
            this.storage.lastId = client.id;
            this.storage.lastToken = client.token;
        }
        this.activeClient.observableState.emit(this.activeClient.state);
    }
    _handleClientStateFull(details) {
        this.activeClient.id = details.id;
        this.activeClient.role = details.role;
        this.activeClient.token = details.token;
        this._handleClientStatePatch(details.state);
        // store reconnect details if host (mirror doesn't store reconnect details at all and player stores later once enrolled)
        // @TODO storage service should be in charge of listening for and actioning this. not server's job
        if (this.activeClient.role === 'host') {
            this.storage.lastId = details.id;
            this.storage.lastToken = details.token;
        }
        if (this.activeClient.role === 'player') {
            this._handlePlayerClientStatePatch(details.state);
        }
        // if we've already received game state but weren't already connected we now are
        if (!this.isConnected) {
            this._hasReceivedClientState = true;
            if (this.isConnected)
                this.connected.emit(true);
        }
    }
}
ServerService.ɵfac = function ServerService_Factory(t) { return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"])); };
ServerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServerService, factory: ServerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/server/session.ts":
/*!********************************************!*\
  !*** ./src/app/services/server/session.ts ***!
  \********************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

// import { GameState, Phase, PlayerData } from './server.service';
class Session {
    constructor(id, socket) {
        this.id = id;
        this.socket = socket;
        this.name = '';
        this.players = [];
        this.state = {
            hostConnected: false,
            phase: 'unknown',
            numLurkers: 0,
            numMirrors: 0,
            responseDeckCount: 0,
            promptDeckCount: 0,
            dealer: '',
            subphase: "turn-begin" /* TurnBegin */,
            revealedResponseCards: [],
            playersResponded: [],
            promptCard: null,
            winningCard: null
        };
        // player list emitter
        this.observablePlayers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // state emitter
        this.observableState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}



/***/ }),

/***/ "./src/app/services/storage/storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _lastSession, _lastRole, _lastToken, _lastId;


class StorageService {
    constructor() {
        _lastSession.set(this, null);
        _lastRole.set(this, null);
        _lastToken.set(this, null);
        _lastId.set(this, null);
        __classPrivateFieldSet(this, _lastSession, localStorage.getItem('lastSession'));
        __classPrivateFieldSet(this, _lastRole, localStorage.getItem('lastRole'));
        __classPrivateFieldSet(this, _lastToken, localStorage.getItem('lastToken'));
        __classPrivateFieldSet(this, _lastId, localStorage.getItem('lastId'));
    }
    set lastSession(value) {
        __classPrivateFieldSet(this, _lastSession, value);
        localStorage.setItem('lastSession', __classPrivateFieldGet(this, _lastSession));
    }
    get lastSession() {
        return __classPrivateFieldGet(this, _lastSession);
    }
    set lastRole(value) {
        __classPrivateFieldSet(this, _lastRole, value);
        localStorage.setItem('lastRole', __classPrivateFieldGet(this, _lastRole));
    }
    get lastRole() {
        return __classPrivateFieldGet(this, _lastRole);
    }
    set lastToken(value) {
        __classPrivateFieldSet(this, _lastToken, value);
        localStorage.setItem('lastToken', __classPrivateFieldGet(this, _lastToken) || '');
    }
    get lastToken() {
        return __classPrivateFieldGet(this, _lastToken);
    }
    set lastId(value) {
        __classPrivateFieldSet(this, _lastId, value);
        localStorage.setItem('lastId', __classPrivateFieldGet(this, _lastId) || '');
    }
    get lastId() {
        return __classPrivateFieldGet(this, _lastId);
    }
    clear() {
        localStorage.removeItem('lastId');
        localStorage.removeItem('lastToken');
        localStorage.removeItem('lastRole');
        localStorage.removeItem('lastSession');
    }
}
_lastSession = new WeakMap(), _lastRole = new WeakMap(), _lastToken = new WeakMap(), _lastId = new WeakMap();
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/connect/connect.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/connect/connect.component.ts ***!
  \****************************************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/server/server.service */ "./src/app/services/server/server.service.ts");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class ConnectComponent {
    constructor(serverService, storageService, router, route) {
        this.serverService = serverService;
        this.storageService = storageService;
        this.router = router;
        this.route = route;
        this.isoCode = '';
        this.role = 'player';
        this.role = route.snapshot.data.role;
    }
    ngOnInit() { }
    startSession() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (((_a = this.isoCode) === null || _a === void 0 ? void 0 : _a.length) !== 6)
                return;
            if (this.role === 'mirror') {
                yield this.serverService.connectSession(this.isoCode.toUpperCase(), 'mirror');
            }
            else {
                yield this.serverService.connectSession(this.isoCode.toUpperCase(), 'player');
            }
        });
    }
    tryPasteCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // shortcut for dev
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production)
                return;
            try {
                const code = yield navigator.clipboard.readText();
                if (code.length === 6)
                    this.isoCode = code;
            }
            catch (_a) { }
        });
    }
}
ConnectComponent.ɵfac = function ConnectComponent_Factory(t) { return new (t || ConnectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
ConnectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConnectComponent, selectors: [["app-connect"]], decls: 15, vars: 4, consts: [[1, "banner"], [1, "narrow-container"], [1, "page-title"], [1, "page-explanation"], [1, "form-container", 3, "submit"], ["placeholder", "ISOCODE", "autocapitalize", "off", "autocomplete", "off", "autofocus", "", "maxlength", "6", "name", "isocode", 1, "big-input", "isocode-entry", 3, "ngModel", "ngModelChange", "focus"], [1, "flex-pad"], ["type", "submit", 1, "big-button", 3, "disabled"]], template: function ConnectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enter IsoCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The IsoCode for your game can be found on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Social Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " (or one of it's mirrors)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ConnectComponent_Template_form_submit_10_listener() { return ctx.startSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConnectComponent_Template_input_ngModelChange_11_listener($event) { return ctx.isoCode = $event; })("focus", function ConnectComponent_Template_input_focus_11_listener() { return ctx.tryPasteCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isoCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx.isoCode == null ? null : ctx.isoCode.length) !== 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.role === "player" ? "Join" : "Mirror");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".page-default[_ngcontent-%COMP%], [_nghost-%COMP%], .page-default-narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\n[_nghost-%COMP%] {\n  padding: 0;\n  align-items: center;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: center;\n}\n\n.isocode-entry[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.banner[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: black;\n  color: white;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFFSSxnQkFkZ0I7QUNXcEI7O0FBVkE7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7QUFMSjs7QUFRQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQ6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kbmFycm93LXBhZ2Utd2lkdGg6IDYwMHB4O1xuXG4ucGFnZS1kZWZhdWx0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtZGVmYXVsdC1uYXJyb3cge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdDtcbiAgICBtYXgtd2lkdGg6ICRuYXJyb3ctcGFnZS13aWR0aDtcbn0iLCJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIEBleHRlbmQgLnBhZ2UtZGVmYXVsdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIC8vIEBleHRlbmQgLnBhZ2UtZGVmYXVsdC1uYXJyb3c7XG4gICAgLy8gcGFkZGluZzogMTBweDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyBtYXgtd2lkdGg6ICRuYXJyb3ctcGFnZS13aWR0aDtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBmbGV4LWdyb3c6IDE7XG4gICAgLy8gcGFkZGluZzogMTBweDtcbiAgICAvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlzb2NvZGUtZW50cnkge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5iYW5uZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConnectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-connect',
                templateUrl: './connect.component.html',
                styleUrls: ['./connect.component.scss']
            }]
    }], function () { return [{ type: src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] }, { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/prompt/prompt.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/prompt/prompt.pipe.ts ***!
  \****************************************************/
/*! exports provided: PromptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptPipe", function() { return PromptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PromptPipe {
    transform(value) {
        return value ? value.replace(/\*\*\*/g, '________') : '';
    }
}
PromptPipe.ɵfac = function PromptPipe_Factory(t) { return new (t || PromptPipe)(); };
PromptPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "prompt", type: PromptPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromptPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'prompt'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/truthy/truthy.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/truthy/truthy.pipe.ts ***!
  \****************************************************/
/*! exports provided: TruthyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthyPipe", function() { return TruthyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TruthyPipe {
    transform(items, property) {
        return items.filter(item => item[property]);
    }
}
TruthyPipe.ɵfac = function TruthyPipe_Factory(t) { return new (t || TruthyPipe)(); };
TruthyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truthy", type: TruthyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruthyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truthy'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule, ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/connect/connect.component */ "./src/app/shared/components/connect/connect.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_3__["ConnectComponent"]; });

/* harmony import */ var _pipes_truthy_truthy_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/truthy/truthy.pipe */ "./src/app/shared/pipes/truthy/truthy.pipe.ts");
/* harmony import */ var _pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/prompt/prompt.pipe */ "./src/app/shared/pipes/prompt/prompt.pipe.ts");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_connect_connect_component__WEBPACK_IMPORTED_MODULE_3__["ConnectComponent"],
        _pipes_truthy_truthy_pipe__WEBPACK_IMPORTED_MODULE_4__["TruthyPipe"],
        _pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_5__["PromptPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_components_connect_connect_component__WEBPACK_IMPORTED_MODULE_3__["ConnectComponent"],
        _pipes_truthy_truthy_pipe__WEBPACK_IMPORTED_MODULE_4__["TruthyPipe"],
        _pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_5__["PromptPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_3__["ConnectComponent"],
                    _pipes_truthy_truthy_pipe__WEBPACK_IMPORTED_MODULE_4__["TruthyPipe"],
                    _pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_5__["PromptPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                exports: [
                    _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_3__["ConnectComponent"],
                    _pipes_truthy_truthy_pipe__WEBPACK_IMPORTED_MODULE_4__["TruthyPipe"],
                    _pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_5__["PromptPipe"],
                ]
            }]
    }], null, null); })();



/***/ }),

/***/ "./src/app/social/game/social-game.component.ts":
/*!******************************************************!*\
  !*** ./src/app/social/game/social-game.component.ts ***!
  \******************************************************/
/*! exports provided: SocialGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialGameComponent", function() { return SocialGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/server/server.service */ "./src/app/services/server/server.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/prompt/prompt.pipe */ "./src/app/shared/pipes/prompt/prompt.pipe.ts");






function SocialGameComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (tmp_0_0 = ctx_r0.getPlayerById(ctx_r0.session.state.dealer)) == null ? null : tmp_0_0.name, "'s Deal");
} }
const _c0 = function (a0, a1) { return { flip: a0, fliphack: a1 }; };
function SocialGameComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r3.dealerFlipped, ctx_r3.useFlipAnimationHack));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (tmp_1_0 = ctx_r3.getPlayerById(ctx_r3.session.state.dealer)) == null ? null : tmp_1_0.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx_r3.session.state.promptCard == null ? null : ctx_r3.session.state.promptCard.content) || "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SocialGameComponent_div_6_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playerId_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (tmp_0_0 = ctx_r7.getPlayerById(playerId_r6)) == null ? null : tmp_0_0.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SocialGameComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialGameComponent_div_6_div_2_div_1_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showPlayerResponses);
} }
function SocialGameComponent_div_6_div_3_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r12.index + 1, "/", ctx_r12.session.state.promptCard.responses, "");
} }
function SocialGameComponent_div_6_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.getPlayerById(ctx_r13.session.state.winningCard.player).photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1) { return { fullflip: a0, fliphack: a1 }; };
function SocialGameComponent_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SocialGameComponent_div_6_div_3_div_1_div_3_Template, 2, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SocialGameComponent_div_6_div_3_div_1_div_10_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const cardSet_r9 = ctx_r14.$implicit;
    const i_r10 = ctx_r14.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, (ctx_r11.session.state.winningCard == null ? null : ctx_r11.session.state.winningCard.cardSetId) === cardSet_r9.id, ctx_r11.useFlipAnimationHack));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.session.state.promptCard.responses > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, cardSet_r9.cards[ctx_r11.index].content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.session.state.winningCard == null ? null : ctx_r11.session.state.winningCard.cardSetId) === cardSet_r9.id);
} }
function SocialGameComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialGameComponent_div_6_div_3_div_1_Template, 11, 10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showResponseCards);
} }
function SocialGameComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialGameComponent_div_6_div_1_Template, 7, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SocialGameComponent_div_6_div_2_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SocialGameComponent_div_6_div_3_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.session.state.subphase === "dealer-talking" || ctx_r1.session.state.promptCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.session.state.playersResponded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.session.state.revealedResponseCards);
} }
const _c2 = function (a0) { return { dealer: a0 }; };
function SocialGameComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r15.session.state.dealer === player_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", player_r16.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", player_r16.name, " (", player_r16.score, " pts)");
} }
function SocialGameComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SocialGameComponent_div_7_div_5_Template, 4, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flash", ctx_r2.session.state.responseDeckCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.session.state.responseDeckCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.players);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flash", ctx_r2.session.state.promptDeckCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.session.state.promptDeckCount);
} }
const flashFrames = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "initial", offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "hotpink", offset: 0.2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "hotpink", offset: 0.8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "initial", offset: 1 }),
]);
class SocialGameComponent {
    constructor(server) {
        this.server = server;
        this.useFlipAnimationHack = navigator.userAgent.match('PlayStation 4');
        this.index = 0;
    }
    get dealer() {
        return this.session.players.find(p => this.session.state.dealer === p.id);
    }
    get otherPlayers() {
        return this.session.players.find(p => this.session.state.dealer !== p.id);
    }
    ngOnInit() {
        this.session = this.server.activeSession;
        this.client = this.server.activeClient;
        this.index = 0;
        // @TODO only have this active while in the right phase. Reset index to zero and timer everytime a new card is added?
        setInterval(() => {
            if (this.session.state.promptCard) {
                this.index = ++this.index % this.session.state.promptCard.responses;
            }
            else {
                this.index = 0;
            }
        }, 1500);
        setInterval(() => {
            // keep server alive
            this.server.getSession(this.session.id, this.client.token);
        }, 60000);
    }
    getPlayerById(id) {
        return this.session.players.find(p => p.id === id);
    }
    get players() {
        return this.session.players.filter(p => p.enrolled);
    }
    get dealerFlipped() {
        return !!this.session.state.promptCard;
    }
    get showPlayerResponses() {
        return !this.showResponseCards;
    }
    get showResponseCards() {
        return ["dealer-announcing-player-cards" /* DealerAnnouncingPlayerCards */, "dealer-judging" /* DealerJudging */, "turn-results" /* TurnResults */].includes(this.session.state.subphase);
    }
}
SocialGameComponent.ɵfac = function SocialGameComponent_Factory(t) { return new (t || SocialGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"])); };
SocialGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialGameComponent, selectors: [["app-social-game"]], decls: 8, vars: 5, consts: [[1, "header-row"], [1, "page-title", "session-name"], [1, "isocode-box"], ["class", "turn-begin", 4, "ngIf"], ["class", "game-section", 4, "ngIf"], ["class", "stats-section", 4, "ngIf"], [1, "turn-begin"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"], [1, "game-section"], ["class", "flip-card responsive-card", 3, "ngClass", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "flip-card", "responsive-card", 3, "ngClass"], [1, "flip-card-inner"], [1, "flip-card-content", "card", "dealer", "prompt"], [1, "card-image", 2, "box-sizing", "border-box", "border", "2px solid white", 3, "src"], [1, "flip-card-content", "card", "dealer", "prompt", "back"], [3, "innerHtml"], ["class", "flip-card responsive-card", 4, "ngIf"], [1, "flip-card", "responsive-card"], [1, "flip-card-content", "card", "dealer", "response"], [1, "card-image", 3, "src"], ["class", "index", 4, "ngIf"], [1, "flex-pad"], [1, "number"], ["class", "flip-card-content card dealer response back", 4, "ngIf"], [1, "index"], [1, "flip-card-content", "card", "dealer", "response", "back"], [1, "stats-section"], [1, "card", "response", "deck"], [1, "player-row"], ["class", "player", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", "prompt", "deck"], [1, "player", 3, "ngClass"], [3, "src"], [1, "name"]], template: function SocialGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SocialGameComponent_div_5_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SocialGameComponent_div_6_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SocialGameComponent_div_7_Template, 9, 5, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.session.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.session.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase === "turn-begin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session.state.subphase !== "turn-begin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dealer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_shared_pipes_prompt_prompt_pipe__WEBPACK_IMPORTED_MODULE_4__["PromptPipe"]], styles: [".page-default[_ngcontent-%COMP%], .page-default-narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\n.flip-card.fullflip.fliphack[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  -webkit-animation: fullflipfrontface infinite 2s linear;\n          animation: fullflipfrontface infinite 2s linear;\n}\n\n.flip-card.fullflip.fliphack[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation: fullflipbackface infinite 2s linear;\n          animation: fullflipbackface infinite 2s linear;\n  opacity: 0;\n}\n\n@-webkit-keyframes fullflipfrontface {\n  0% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  74% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fullflipfrontface {\n  0% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  74% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fullflipbackface {\n  0% {\n    opacity: 0;\n  }\n  24% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fullflipbackface {\n  0% {\n    opacity: 0;\n  }\n  24% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.flip-card.fliphack[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  opacity: 1;\n}\n\n.flip-card.flip.fliphack[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  -webkit-animation: flipfrontface 0.8s linear;\n          animation: flipfrontface 0.8s linear;\n  opacity: 0;\n}\n\n.flip-card.fliphack[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n\n.flip-card.flip.fliphack[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation: flipbackface 0.8s linear;\n          animation: flipbackface 0.8s linear;\n  opacity: 1;\n}\n\n@-webkit-keyframes flipfrontface {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes flipfrontface {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes flipbackface {\n  0% {\n    opacity: 0;\n  }\n  49% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes flipbackface {\n  0% {\n    opacity: 0;\n  }\n  49% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n[_nghost-%COMP%] {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow-x: hidden;\n  max-height: 100%;\n}\n\n.session-name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.stats-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.player-row[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.player[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.player[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.dealer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 3px solid black;\n  box-sizing: border-box;\n}\n\n.dealer[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.game-section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n}\n\n.turn-begin[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.responsive-card[_ngcontent-%COMP%] {\n  width: 30vw;\n  height: 45vw;\n  margin: 5px;\n  max-width: 200px;\n  max-height: 300px;\n  min-width: 133px;\n  min-height: 200px;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid black;\n  border-radius: 8%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: center;\n  font-size: 2vw;\n  padding: 10%;\n  box-sizing: border-box;\n}\n\n@media screen and (min-width: 1000px), (min-height: 1000px) {\n  .card[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n}\n\n.card.deck[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 40px;\n  font-size: 14px;\n  padding: 5px !important;\n}\n\n.card.response[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.card.prompt[_ngcontent-%COMP%] {\n  color: white;\n  background-color: black;\n}\n\n.card-image[_ngcontent-%COMP%] {\n  width: 60%;\n  border-radius: 50%;\n}\n\n.card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  font-size: 12px;\n  font-weight: bold;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-bottom: -5px;\n}\n\n.card[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: -5px;\n}\n\n.flip-card[_ngcontent-%COMP%] {\n  perspective: 1000px;\n  position: relative;\n}\n\n.flip-card.fullflip[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%] {\n  -webkit-animation: fullflip infinite 2s linear;\n          animation: fullflip infinite 2s linear;\n}\n\n@-webkit-keyframes flip {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(180deg);\n  }\n}\n\n@keyframes flip {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(180deg);\n  }\n}\n\n@-webkit-keyframes fullflip {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(360deg);\n  }\n}\n\n@keyframes fullflip {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(360deg);\n  }\n}\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.8s linear;\n  transform-style: preserve-3d;\n}\n\n.flip-card.flip[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.flip-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute !important;\n}\n\n.flip-card-content.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.header-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n.header-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.isocode-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: grey;\n  font-size: 2em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc29jaWFsL2dhbWUvc29jaWFsLWdhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NvY2lhbC9nYW1lL3BzNC1oYWNrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUVJLGdCQWRnQjtBQ1dwQjs7QUNUQTtFQUNJLHVEQUFBO1VBQUEsK0NBQUE7QURZSjs7QUNUQTtFQUNJLHNEQUFBO1VBQUEsOENBQUE7RUFDQSxVQUFBO0FEWUo7O0FDVEE7RUFDSTtJQUNJLFVBQUE7RURZTjtFQ1ZFO0lBQ0ksVUFBQTtFRFlOO0VDVkU7SUFDSSxVQUFBO0VEWU47RUNWRTtJQUNJLFVBQUE7RURZTjtFQ1ZFO0lBQ0ksVUFBQTtFRFlOO0VDVkU7SUFDSSxVQUFBO0VEWU47QUFDRjs7QUM5QkE7RUFDSTtJQUNJLFVBQUE7RURZTjtFQ1ZFO0lBQ0ksVUFBQTtFRFlOO0VDVkU7SUFDSSxVQUFBO0VEWU47RUNWRTtJQUNJLFVBQUE7RURZTjtFQ1ZFO0lBQ0ksVUFBQTtFRFlOO0VDVkU7SUFDSSxVQUFBO0VEWU47QUFDRjs7QUNUQTtFQUNJO0lBQ0ksVUFBQTtFRFdOO0VDVEU7SUFDSSxVQUFBO0VEV047RUNURTtJQUNJLFVBQUE7RURXTjtFQ1RFO0lBQ0ksVUFBQTtFRFdOO0VDVEU7SUFDSSxVQUFBO0VEV047RUNURTtJQUNJLFVBQUE7RURXTjtBQUNGOztBQzdCQTtFQUNJO0lBQ0ksVUFBQTtFRFdOO0VDVEU7SUFDSSxVQUFBO0VEV047RUNURTtJQUNJLFVBQUE7RURXTjtFQ1RFO0lBQ0ksVUFBQTtFRFdOO0VDVEU7SUFDSSxVQUFBO0VEV047RUNURTtJQUNJLFVBQUE7RURXTjtBQUNGOztBQ1JBO0VBQ0ksVUFBQTtBRFVKOztBQ1BBO0VBQ0ksNENBQUE7VUFBQSxvQ0FBQTtFQUNBLFVBQUE7QURVSjs7QUNQQTtFQUNJLFVBQUE7QURVSjs7QUNQQTtFQUNJLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxVQUFBO0FEVUo7O0FDUEE7RUFDSTtJQUNJLFVBQUE7RURVTjtFQ1JFO0lBQ0ksVUFBQTtFRFVOO0VDUkU7SUFDSSxVQUFBO0VEVU47RUNSRTtJQUNJLFVBQUE7RURVTjtBQUNGOztBQ3RCQTtFQUNJO0lBQ0ksVUFBQTtFRFVOO0VDUkU7SUFDSSxVQUFBO0VEVU47RUNSRTtJQUNJLFVBQUE7RURVTjtFQ1JFO0lBQ0ksVUFBQTtFRFVOO0FBQ0Y7O0FDUEE7RUFDSTtJQUNJLFVBQUE7RURTTjtFQ1BFO0lBQ0ksVUFBQTtFRFNOO0VDUEU7SUFDSSxVQUFBO0VEU047RUNQRTtJQUNJLFVBQUE7RURTTjtBQUNGOztBQ3JCQTtFQUNJO0lBQ0ksVUFBQTtFRFNOO0VDUEU7SUFDSSxVQUFBO0VEU047RUNQRTtJQUNJLFVBQUE7RURTTjtFQ1BFO0lBQ0ksVUFBQTtFRFNOO0FBQ0Y7O0FBekdBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMkdKOztBQXhHQTtFQUNJLDBCQUFBO0FBMkdKOztBQXhHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUEyR0o7O0FBeEdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTJHSjs7QUF4R0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUEyR0o7O0FBeEdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTJHSjs7QUF4R0E7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0FBMkdKOztBQXhHQTtFQUNJLGlCQUFBO0FBMkdKOztBQXhHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQTJHSjs7QUF4R0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTJHSjs7QUF4R0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTJHSjs7QUF4R0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBMkdKOztBQXhHQTtFQUNJO0lBQ0ksZ0JBQUE7RUEyR047QUFDRjs7QUF4R0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQTBHSjs7QUF2R0E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUEwR0o7O0FBdkdBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBMEdKOztBQXZHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQTBHSjs7QUF2R0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBMEdKOztBQXZHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQTBHSjs7QUF2R0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBMEdKOztBQXZHQTtFQUNJLDhDQUFBO1VBQUEsc0NBQUE7QUEwR0o7O0FBdkdBO0VBQ0k7SUFDSSx3QkFBQTtFQTBHTjtFQXhHRTtJQUNJLDBCQUFBO0VBMEdOO0FBQ0Y7O0FBaEhBO0VBQ0k7SUFDSSx3QkFBQTtFQTBHTjtFQXhHRTtJQUNJLDBCQUFBO0VBMEdOO0FBQ0Y7O0FBdkdBO0VBQ0k7SUFDSSx3QkFBQTtFQXlHTjtFQXZHRTtJQUNJLDBCQUFBO0VBeUdOO0FBQ0Y7O0FBL0dBO0VBQ0k7SUFDSSx3QkFBQTtFQXlHTjtFQXZHRTtJQUNJLDBCQUFBO0VBeUdOO0FBQ0Y7O0FBdEdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QUF3R0o7O0FBckdBO0VBQ0ksMEJBQUE7QUF3R0o7O0FBckdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsNkJBQUE7QUF3R0o7O0FBckdBO0VBQ0ksMEJBQUE7QUF3R0o7O0FBckdBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBd0dKOztBQXJHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUF3R0o7O0FBckdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBd0dKIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsL2dhbWUvc29jaWFsLWdhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiRuYXJyb3ctcGFnZS13aWR0aDogNjAwcHg7XG5cbi5wYWdlLWRlZmF1bHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1kZWZhdWx0LW5hcnJvdyB7XG4gICAgQGV4dGVuZCAucGFnZS1kZWZhdWx0O1xuICAgIG1heC13aWR0aDogJG5hcnJvdy1wYWdlLXdpZHRoO1xufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vcHM0LWhhY2suc2Nzc1wiO1xuXG46aG9zdCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zZXNzaW9uLW5hbWUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc3RhdHMtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnBsYXllci1yb3cge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGxheWVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucGxheWVyIGltZyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmRlYWxlciBpbWcge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kZWFsZXIgLm5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ2FtZS1zZWN0aW9uIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50dXJuLWJlZ2luIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZXNwb25zaXZlLWNhcmQge1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIGhlaWdodDogNDV2dztcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG1pbi13aWR0aDogMTMzcHg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgcGFkZGluZzogMTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCksIChtaW4taGVpZ2h0OiAxMDAwcHgpIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgfVxufVxuXG4uY2FyZC5kZWNrIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50OyAvLyByZWFsbHkgYnJva2VuIGlmIGxlZnQgYXQgMTAlXG59XG5cbi5jYXJkLnJlc3BvbnNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLnByb21wdCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC1pbWFnZSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jYXJkIC5udW1iZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xufVxuXG4uY2FyZCAuaW5kZXgge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uZmxpcC1jYXJkIHtcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZsaXAtY2FyZC5mdWxsZmxpcCAuZmxpcC1jYXJkLWlubmVyIHtcbiAgICBhbmltYXRpb246IGZ1bGxmbGlwIGluZmluaXRlIDJzIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmdWxsZmxpcCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgICB9XG59XG5cbi5mbGlwLWNhcmQtaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgbGluZWFyO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5mbGlwLWNhcmQuZmxpcCAuZmxpcC1jYXJkLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZsaXAtY2FyZC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufVxuXG4uZmxpcC1jYXJkLWNvbnRlbnQuYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5oZWFkZXItcm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItcm93IC5wYWdlLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmlzb2NvZGUtYm94IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4iLCIvLyB0aGVzZSBzdHlsZXMgYXJlIGZvciBzaW11bGF0aW5nIGJhY2tmYWNlLXZpc2liaWxpdHkgc2luY2Ugc29tZSBwbGF0Zm9ybXMgZG9uJ3Qgc3VwcG9ydCAqY291Z2gqIFBTNCAqY291Z2gqXG4vLyB0aGlzIGFwcHJvYWNoIHJlbGllcyBvbiB0aWdodGx5IHN5bmNlZCBhbmltYXRpb25zIHdoaWNoIGRvZXNuJ3QgYWx3YXlzIGhhcHBlbiAoZS5nLiBDaHJvbWUpIHNvIGRvbid0IHVzZSB3aGVyZSBub3QgcmVxdWlyZWRcblxuLmZsaXAtY2FyZC5mdWxsZmxpcC5mbGlwaGFjayAuZmxpcC1jYXJkLWlubmVyID4gOmZpcnN0LWNoaWxkIHtcbiAgICBhbmltYXRpb246IGZ1bGxmbGlwZnJvbnRmYWNlIGluZmluaXRlIDJzIGxpbmVhcjtcbn1cblxuLmZsaXAtY2FyZC5mdWxsZmxpcC5mbGlwaGFjayAuZmxpcC1jYXJkLWlubmVyID4gOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uOiBmdWxsZmxpcGJhY2tmYWNlIGluZmluaXRlIDJzIGxpbmVhcjtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGZ1bGxmbGlwZnJvbnRmYWNlIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDI2JSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDc0JSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmdWxsZmxpcGJhY2tmYWNlIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDI0JSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDc2JSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuLmZsaXAtY2FyZC5mbGlwaGFjayAuZmxpcC1jYXJkLWlubmVyID4gOmZpcnN0LWNoaWxkIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZmxpcC1jYXJkLmZsaXAuZmxpcGhhY2sgLmZsaXAtY2FyZC1pbm5lciA+IDpmaXJzdC1jaGlsZCB7XG4gICAgYW5pbWF0aW9uOiBmbGlwZnJvbnRmYWNlIDAuOHMgbGluZWFyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5mbGlwLWNhcmQuZmxpcGhhY2sgLmZsaXAtY2FyZC1pbm5lciA+IDpudGgtY2hpbGQoMikge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5mbGlwLWNhcmQuZmxpcC5mbGlwaGFjayAuZmxpcC1jYXJkLWlubmVyID4gOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uOiBmbGlwYmFja2ZhY2UgMC44cyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuQGtleWZyYW1lcyBmbGlwZnJvbnRmYWNlIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUxJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmbGlwYmFja2ZhY2Uge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNDklIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flash', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', flashFrames)]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-game',
                templateUrl: './social-game.component.html',
                styleUrls: ['./social-game.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flash', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', flashFrames)]),
                    ]),
                ]
            }]
    }], function () { return [{ type: src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/social/lobby/social-lobby.component.ts":
/*!********************************************************!*\
  !*** ./src/app/social/lobby/social-lobby.component.ts ***!
  \********************************************************/
/*! exports provided: SocialLobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLobbyComponent", function() { return SocialLobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/server/server.service */ "./src/app/services/server/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_truthy_truthy_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/truthy/truthy.pipe */ "./src/app/shared/pipes/truthy/truthy.pipe.ts");







function SocialLobbyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.role, " (", ctx_r0.session.state.numMirrors, " mirrors)");
} }
function SocialLobbyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.role, " (", ctx_r1.session.state.numMirrors, " total)");
} }
function SocialLobbyComponent_div_21_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const player_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", player_r4.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SocialLobbyComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialLobbyComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialLobbyComponent_div_21_img_1_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SocialLobbyComponent_div_21_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r2.bubbleTransform(i_r5))("--i", i_r5)("--n", ctx_r2.session.players.length)("--offset", ctx_r2.bubbleOffset(i_r5))("--radius", ctx_r2.animationRadius);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("animate", ctx_r2.animate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r4.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !player_r4.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r4.name || "Lurker");
} }
function SocialLobbyComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialLobbyComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "truthy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r3.session.players, "enrolled").length < ctx_r3.minPlayers);
} }
class SocialLobbyComponent {
    constructor(serverService, route) {
        this.serverService = serverService;
        this.session = null;
        this.role = 'host';
        this.animate = true;
        this.animationRadius = '140px';
        this.minPlayers = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? 3 : 2; // this should be server-side
        this.session = serverService.activeSession;
        this.role = route.snapshot.data.role;
    }
    ngOnInit() {
        this.session.observablePlayers.subscribe(() => {
            // reset the animation class on all elements to keep them in sync
            this.animate = false;
            // time value here is hit and miss. 10 usually not enough to trigger anim restart
            setTimeout(() => { this.animate = true; }, 50);
        });
    }
    copyCode() {
        navigator.clipboard.writeText(this.session.id);
    }
    startGame() {
        this.serverService.startGame();
    }
    cancelGame() {
        this.serverService.endGame();
    }
    bubbleTransform(index) {
        const offset = this.bubbleOffset(index);
        return `rotate(${offset}) translateX(${this.animationRadius}) rotate(-${offset})`;
    }
    bubbleOffset(index) {
        const sliceSize = 360 / this.session.players.length;
        return `${sliceSize * index}deg`;
    }
}
SocialLobbyComponent.ɵfac = function SocialLobbyComponent_Factory(t) { return new (t || SocialLobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SocialLobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialLobbyComponent, selectors: [["app-social-lobby"]], decls: 29, vars: 11, consts: [["class", "banner", 4, "ngIf"], [1, "header-row"], [1, "page-title", "session-name"], [1, "isocode-box", 3, "click"], [1, "narrow-element", "page-explanation"], [1, "flex-pad"], [1, "player-box"], [1, "spinner"], ["class", "bubble", 3, "animate", "transform", "--i", "--n", "--offset", "--radius", 4, "ngFor", "ngForOf"], [1, "double-bounce1"], [1, "double-bounce2"], [1, "spinner-text"], ["class", "big-button", 3, "disabled", "click", 4, "ngIf"], [1, "banner"], [1, "bubble"], [3, "src", 4, "ngIf"], ["class", "lurker", 4, "ngIf"], [3, "src"], [1, "lurker"], [1, "big-button", 3, "disabled", "click"]], template: function SocialLobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SocialLobbyComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialLobbyComponent_div_1_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialLobbyComponent_Template_div_click_5_listener() { return ctx.copyCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This is the social lobby where we wait for everyone to join the game using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "IsoCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " above. As you can see, games are given ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "fun names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " so everyone knows they're in the right place. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lurkers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " are the peasants who've connected but haven't yet registered to play.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SocialLobbyComponent_div_21_Template, 5, 15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "truthy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SocialLobbyComponent_button_28_Template, 3, 4, "button", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role === "host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role === "mirror");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.session.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.session.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.session.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 8, ctx.session.players, "enrolled").length, " / ", ctx.minPlayers, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role === "host");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_shared_pipes_truthy_truthy_pipe__WEBPACK_IMPORTED_MODULE_5__["TruthyPipe"]], styles: [".page-default[_ngcontent-%COMP%], [_nghost-%COMP%], .page-default-narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\n[_nghost-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  padding: 10px;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n.header-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.isocode-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: grey;\n  font-size: 2em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: copy;\n}\n\n.banner[_ngcontent-%COMP%] {\n  padding: 5px;\n  top: 0px;\n  right: 0px;\n  text-align: right;\n  text-transform: uppercase;\n  position: absolute;\n  font-weight: bold;\n}\n\n.session-name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.player-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n  position: relative;\n}\n\n.bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  font-size: 0.8em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.bubble[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 65px;\n  height: 65px;\n}\n\n.bubble[_ngcontent-%COMP%]   .lurker[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 65px;\n  height: 65px;\n  background-color: black;\n  font-size: 2em;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bubble.animate[_ngcontent-%COMP%] {\n  -webkit-animation: rotation 25s infinite linear, pulse 2s infinite ease-in-out;\n          animation: rotation 25s infinite linear, pulse 2s infinite ease-in-out;\n}\n\n@-webkit-keyframes rotation {\n  from {\n    transform: rotate(var(--offset)) translateX(var(--radius)) rotate(calc(var(--offset) * -1));\n  }\n  to {\n    transform: rotate(calc(var(--offset) + 360deg)) translateX(var(--radius)) rotate(calc(calc(var(--offset) + 360deg) * -1));\n  }\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(var(--offset)) translateX(var(--radius)) rotate(calc(var(--offset) * -1));\n  }\n  to {\n    transform: rotate(calc(var(--offset) + 360deg)) translateX(var(--radius)) rotate(calc(calc(var(--offset) + 360deg) * -1));\n  }\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  margin: 20px;\n}\n\n.spinner-text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n          animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.8);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.8);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc29jaWFsL2xvYmJ5L3NvY2lhbC1sb2JieS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBRUksZ0JBZGdCO0FDV3BCOztBQVZBO0VBRUksbUJBQUE7QUFZSjs7QUFUQTtFQUNJLGdCRFBnQjtFQ1FoQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBWUo7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFZSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUFZSjs7QUFUQTtFQUNJLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVEE7RUFDSSwwQkFBQTtBQVlKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFUQTtFQUNJLGtCQUFBO0VBR0EsU0FBQTtFQUNBLFFBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFTSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFTSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFTSjs7QUFOQTtFQUNJLDhFQUFBO1VBQUEsc0VBQUE7QUFTSjs7QUFOQztFQUNHO0lBQ0ksMkZBQUE7RUFTTjtFQVBFO0lBQ0kseUhBQUE7RUFTTjtBQUNGOztBQWZDO0VBQ0c7SUFDSSwyRkFBQTtFQVNOO0VBUEU7SUFDSSx5SEFBQTtFQVNOO0FBQ0Y7O0FBTEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0FBT0o7O0FBSkE7RUFDSSw0QkFBQTtVQUFBLG9CQUFBO0FBT0o7O0FBSkE7RUFDSTtJQUNJLHFCQUFBO0VBT047RUFOSTtJQUNFLHFCQUFBO0VBUU47QUFDRjs7QUFiQTtFQUNJO0lBQ0kscUJBQUE7RUFPTjtFQU5JO0lBQ0UscUJBQUE7RUFRTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsL2xvYmJ5L3NvY2lhbC1sb2JieS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuJG5hcnJvdy1wYWdlLXdpZHRoOiA2MDBweDtcblxuLnBhZ2UtZGVmYXVsdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlLWRlZmF1bHQtbmFycm93IHtcbiAgICBAZXh0ZW5kIC5wYWdlLWRlZmF1bHQ7XG4gICAgbWF4LXdpZHRoOiAkbmFycm93LXBhZ2Utd2lkdGg7XG59IiwiQGltcG9ydCBcInZhcmlhYmxlcy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgICBAZXh0ZW5kIC5wYWdlLWRlZmF1bHQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAkbmFycm93LXBhZ2Utd2lkdGg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5oZWFkZXItcm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItcm93IC5wYWdlLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmlzb2NvZGUtYm94IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBjb3B5O1xufVxuXG4uYmFubmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlc3Npb24tbmFtZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wbGF5ZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnViYmxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAvLyBub3Qgc3VyZSB3aGVyZSB0aGVzZSBudW1iZXJzIGNvbWUgZnJvbSwgYnV0IHJlbGF0ZSB0byB0aGUgNjVweFxuICAgIGxlZnQ6IDhweDtcbiAgICB0b3A6IDhweDtcblxuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idWJibGUgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xufVxuXG4uYnViYmxlIC5sdXJrZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1YmJsZS5hbmltYXRlIHtcbiAgICBhbmltYXRpb246IHJvdGF0aW9uIDI1cyBpbmZpbml0ZSBsaW5lYXIsIHB1bHNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4gQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLW9mZnNldCkpIHRyYW5zbGF0ZVgodmFyKC0tcmFkaXVzKSkgcm90YXRlKGNhbGModmFyKC0tb2Zmc2V0KSAqIC0xKSk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoY2FsYyh2YXIoLS1vZmZzZXQpICsgMzYwZGVnKSkgdHJhbnNsYXRlWCh2YXIoLS1yYWRpdXMpKSByb3RhdGUoY2FsYyhjYWxjKHZhcigtLW9mZnNldCkgKyAzNjBkZWcpICogLTEpKTtcbiAgICB9XG59XG5cbi8vIGN1c3RvbSB2ZXJzaW9uIG9mIGdsb2JhbCBzcGlubmVyIHN0eWxlXG4uc3Bpbm5lciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5zcGlubmVyLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRvdWJsZS1ib3VuY2UxLCAuZG91YmxlLWJvdW5jZTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb3VibGUtYm91bmNlMiB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIH0gNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialLobbyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-lobby',
                templateUrl: './social-lobby.component.html',
                styleUrls: ['./social-lobby.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/social/setup/setup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/social/setup/setup.component.ts ***!
  \*************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/server/server.service */ "./src/app/services/server/server.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["fileinput"];
function SetupComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No custom deck loaded. Drag one here or click to select.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupComponent_div_17_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_div_17_button_18_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r5.clear(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " prompt cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " response cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Stored since:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SetupComponent_div_17_button_18_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.cardDeck.name, " (", ctx_r1.cardDeck.filename, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.cardDeck.prompts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.cardDeck.responses.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 6, ctx_r1.cardDeck.date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cardDeck);
} }
function SetupComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Using default deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Courtesy of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_div_18_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cards Against Humanity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_div_18_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Creative Commons BY-NC-SA 2.0 License");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const STORAGE_KEY = 'isocard-deck';
class SetupComponent {
    constructor(router, serverService) {
        this.router = router;
        this.serverService = serverService;
        this.cardDeck = null;
        this.useCustomDeck = false;
    }
    ngOnInit() {
        this.load();
    }
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const session = yield this.serverService.createSession({ deck: this.useCustomDeck ? this.cardDeck : undefined });
            yield this.serverService.connectSession(session.id, 'host', session.hostDetails);
        });
    }
    select() {
        this.fileInput.nativeElement.click();
    }
    dragover(event) {
        event.preventDefault();
    }
    fileDrop(event) {
        event.preventDefault();
        if (event.dataTransfer.files.length === 1) {
            this.tryLoadDeck(event.dataTransfer.files[0]);
        }
    }
    tryLoadDeck(file) {
        try {
            const reader = new FileReader();
            reader.addEventListener('load', (ev) => {
                const cards = JSON.parse(reader.result);
                if (cards.prompts instanceof Array && cards.responses instanceof Array && typeof cards.name === 'string') {
                    if (cards.prompts.length > 10 && cards.responses.length > 20) {
                        this.cardDeck = { name: cards.name, filename: file.name, date: Date.now(), prompts: cards.prompts, responses: cards.responses };
                        this.useCustomDeck = true;
                        this.save(this.cardDeck);
                    }
                }
            });
            reader.readAsText(file);
            event.preventDefault();
        }
        catch (_a) {
            console.warn('[SetupComponent] Unable to load deck file');
        }
    }
    fileSelect() {
        if (this.fileInput.nativeElement.files.length === 1) {
            this.tryLoadDeck(this.fileInput.nativeElement.files[0]);
        }
    }
    save(cardDeck) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cardDeck));
    }
    clear() {
        localStorage.removeItem(STORAGE_KEY);
        this.fileInput.nativeElement.value = "";
        this.cardDeck = null;
        this.useCustomDeck = false;
    }
    load() {
        const deckVal = localStorage.getItem(STORAGE_KEY);
        if (deckVal !== null) {
            this.cardDeck = JSON.parse(deckVal);
            this.useCustomDeck = true;
        }
    }
}
SetupComponent.ɵfac = function SetupComponent_Factory(t) { return new (t || SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"])); };
SetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupComponent, selectors: [["app-setup"]], viewQuery: function SetupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 24, vars: 5, consts: [[1, "page-title"], [1, "page-explanation"], [2, "display", "flex", "align-items", "center", "margin", "10px"], ["name", "custom", "type", "checkbox", 3, "checked", "change"], ["for", "custom"], [1, "flex-pad"], [1, "dropzone", 3, "click", "dragover", "drop"], [4, "ngIf"], ["style", "margin: 5px;", 4, "ngIf"], ["type", "file", "multiple", "false", "accept", ".json,.cards", "id", "file-input", 3, "change"], ["fileinput", ""], [1, "big-button", 3, "disabled", "click"], [2, "margin", "5px"], ["class", "inverse", "style", "font-size: 0.8em; margin: 5px;", 3, "click", 4, "ngIf"], [1, "inverse", 2, "font-size", "0.8em", "margin", "5px", 3, "click"], ["target", "_", "href", "https://cardsagainsthumanity.com", 2, "color", "white", 3, "click"], ["target", "_", "href", "https://creativecommons.org/licenses/by-nc-sa/2.0/", 2, "color", "white", "font-size", "0.7em", 3, "click"]], template: function SetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Game Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You can provide your own custom deck if you don't want to play with the peasant default deck. This will be stored locally in your browser to save some dicking around next time. It ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "won't");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " be stored anywhere other than your browser.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "We don't have any other settings yet. Soz...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SetupComponent_Template_input_change_10_listener() { return ctx.useCustomDeck = !ctx.useCustomDeck; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Use custom deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_Template_div_click_15_listener() { return ctx.select(); })("dragover", function SetupComponent_Template_div_dragover_15_listener($event) { return ctx.dragover($event); })("drop", function SetupComponent_Template_div_drop_15_listener($event) { return ctx.fileDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SetupComponent_div_16_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SetupComponent_div_17_Template, 19, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SetupComponent_div_18_Template, 10, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SetupComponent_Template_input_change_19_listener() { return ctx.fileSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_Template_button_click_22_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.useCustomDeck);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.useCustomDeck && !ctx.cardDeck);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.useCustomDeck && ctx.cardDeck);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.useCustomDeck);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.useCustomDeck && !ctx.cardDeck);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".page-default[_ngcontent-%COMP%], .page-default-narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.page-default-narrow[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n#file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dropzone[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  width: 75%;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  justify-content: center;\n  font-size: 1.3em;\n  cursor: pointer;\n  background-color: black;\n  color: white;\n  text-align: center;\n  min-width: 75%;\n  min-height: 150px;\n  border-radius: 10px;\n}\n\n.control-box[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc29jaWFsL3NldHVwL3NldHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFFSSxnQkFkZ0I7QUNXcEI7O0FBVkE7RUFDSSxXQUFBO0VBQ0EsZ0JESGdCO0VDSWhCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBYUo7O0FBVkE7RUFDSSxhQUFBO0FBYUo7O0FBVkE7RUFDSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBYUo7O0FBVkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFhSiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zZXR1cC9zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuJG5hcnJvdy1wYWdlLXdpZHRoOiA2MDBweDtcblxuLnBhZ2UtZGVmYXVsdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlLWRlZmF1bHQtbmFycm93IHtcbiAgICBAZXh0ZW5kIC5wYWdlLWRlZmF1bHQ7XG4gICAgbWF4LXdpZHRoOiAkbmFycm93LXBhZ2Utd2lkdGg7XG59IiwiQGltcG9ydCBcInZhcmlhYmxlcy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6ICRuYXJyb3ctcGFnZS13aWR0aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNmaWxlLWlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHJvcHpvbmUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDc1JTtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udHJvbC1ib3gge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-setup',
                templateUrl: './setup.component.html',
                styleUrls: ['./setup.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_server_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] }]; }, { fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fileinput']
        }] }); })();


/***/ }),

/***/ "./src/app/social/social-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/social/social-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SocialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRoutingModule", function() { return SocialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/social/setup/setup.component.ts");
/* harmony import */ var _lobby_social_lobby_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lobby/social-lobby.component */ "./src/app/social/lobby/social-lobby.component.ts");
/* harmony import */ var _game_social_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/social-game.component */ "./src/app/social/game/social-game.component.ts");
/* harmony import */ var _shared_components_connect_connect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/connect/connect.component */ "./src/app/shared/components/connect/connect.component.ts");









const routes = [
    {
        path: 'social',
        component: _social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"],
        children: [
            { path: 'setup', component: _setup_setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"] },
            { path: 'lobby', component: _lobby_social_lobby_component__WEBPACK_IMPORTED_MODULE_4__["SocialLobbyComponent"], data: { role: 'host' } },
            { path: 'game', component: _game_social_game_component__WEBPACK_IMPORTED_MODULE_5__["SocialGameComponent"], data: { role: 'host' } },
        ],
        data: { role: 'host' }
    },
    {
        path: 'mirror',
        component: _social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"],
        children: [
            { path: 'setup', component: _shared_components_connect_connect_component__WEBPACK_IMPORTED_MODULE_6__["ConnectComponent"], data: { role: 'mirror' } },
            { path: 'lobby', component: _lobby_social_lobby_component__WEBPACK_IMPORTED_MODULE_4__["SocialLobbyComponent"], data: { role: 'mirror' } },
            { path: 'game', component: _game_social_game_component__WEBPACK_IMPORTED_MODULE_5__["SocialGameComponent"], data: { role: 'mirror' } },
        ],
        data: { role: 'mirror' }
    },
];
class SocialRoutingModule {
}
SocialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialRoutingModule });
SocialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialRoutingModule_Factory(t) { return new (t || SocialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gamemode_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gamemode-base */ "./src/app/gamemode-base.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SocialComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.exit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SocialComponent extends _gamemode_base__WEBPACK_IMPORTED_MODULE_1__["GameModeBase"] {
    constructor() {
        super(...arguments);
        this.name = 'SocialComponent';
        this.role = 'host'; // will be overriden by route data in base class
        this.defaultRouteCommand = ['setup'];
    }
    determineRoute(state) {
        if (state.phase === 'lobby')
            return ['lobby'];
        else if (state.phase === 'game')
            return ['game'];
        return null;
    }
    exit() {
        var _a;
        super.exit();
        if (this.role === 'host') {
            this.server.endGame();
        }
        else {
            (_a = this.server.socket) === null || _a === void 0 ? void 0 : _a.close();
        }
    }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return ɵSocialComponent_BaseFactory(t || SocialComponent); };
SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [["class", "exit", "style", "position: absolute; top: 0; left: 0;", 3, "click", 4, "ngIf"], [1, "exit", 2, "position", "absolute", "top", "0", "left", "0", 3, "click"], ["src", "../../assets/close.png"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialComponent_button_1_Template, 2, 0, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.server.activeSession);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-grow: 1;\n  align-items: stretch;\n  max-width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
const ɵSocialComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SocialComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social',
                templateUrl: './social.component.html',
                styleUrls: ['./social.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/social/social.module.ts":
/*!*****************************************!*\
  !*** ./src/app/social/social.module.ts ***!
  \*****************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _social_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-routing.module */ "./src/app/social/social-routing.module.ts");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/social/setup/setup.component.ts");
/* harmony import */ var _lobby_social_lobby_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lobby/social-lobby.component */ "./src/app/social/lobby/social-lobby.component.ts");
/* harmony import */ var _game_social_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/social-game.component */ "./src/app/social/game/social-game.component.ts");










class SocialModule {
}
SocialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialModule, bootstrap: [_social_component__WEBPACK_IMPORTED_MODULE_5__["SocialComponent"]] });
SocialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialModule_Factory(t) { return new (t || SocialModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _social_routing_module__WEBPACK_IMPORTED_MODULE_4__["SocialRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialModule, { declarations: [_social_component__WEBPACK_IMPORTED_MODULE_5__["SocialComponent"],
        _setup_setup_component__WEBPACK_IMPORTED_MODULE_6__["SetupComponent"],
        _lobby_social_lobby_component__WEBPACK_IMPORTED_MODULE_7__["SocialLobbyComponent"],
        _game_social_game_component__WEBPACK_IMPORTED_MODULE_8__["SocialGameComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _social_routing_module__WEBPACK_IMPORTED_MODULE_4__["SocialRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _social_component__WEBPACK_IMPORTED_MODULE_5__["SocialComponent"],
                    _setup_setup_component__WEBPACK_IMPORTED_MODULE_6__["SetupComponent"],
                    _lobby_social_lobby_component__WEBPACK_IMPORTED_MODULE_7__["SocialLobbyComponent"],
                    _game_social_game_component__WEBPACK_IMPORTED_MODULE_8__["SocialGameComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _social_routing_module__WEBPACK_IMPORTED_MODULE_4__["SocialRoutingModule"],
                ],
                providers: [],
                bootstrap: [_social_component__WEBPACK_IMPORTED_MODULE_5__["SocialComponent"]]
            }]
    }], null, null); })();


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
const environment = {
    production: true,
    serverUri: 'isocards-staging.herokuapp.com',
    secureServer: true,
    useHash: true,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/IsoCards/IsoCards/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map