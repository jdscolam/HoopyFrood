(function ()
{
    'use strict';

    var controllerId = 'main';

    angular.module('app').controller(controllerId, ['common', 'datacontext', main]);

    function main(common, datacontext)
    {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        
        vm.title = 'Dashboard';

        vm.foo = {};

        vm.init = init;

        activate();

        function activate()
        {
            var promises = [init()];

            common.activateController(promises, controllerId);
        }

        function init()
        {
            return datacontext.getFoo().then(function (data)
            {
                return vm.foo = data;
            });
        }
    }
})();