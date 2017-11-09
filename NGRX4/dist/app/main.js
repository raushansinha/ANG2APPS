//Main ts file is used to bootstap root module in browser using SystemJS
System.register(["@angular/platform-browser-dynamic", "./app.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1, platformBrowser;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {//Main ts file is used to bootstap root module in browser using SystemJS
            platformBrowser = platform_browser_dynamic_1.platformBrowserDynamic();
            platformBrowser.bootstrapModule(app_module_1.AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map