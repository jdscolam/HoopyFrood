﻿(function () {
    'use strict';

    var app = angular.module('app');

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        spinnerToggle: 'spinner.toggle'
    };

    var config = {
        appErrorPrefix: '[App Error] ', //Configure the exceptionHandler decorator
        docTitle: 'App: ',
        events: events,
        version: '0.0.1'
    };

    app.value('config', config);
    
    app.config(['$logProvider', function ($logProvider)
    {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) 
            $logProvider.debugEnabled(true);
    }]);
    
    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', function (cfg)
    {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
    }]);
    //#endregion
})();