(function ()
{
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['$q', 'fooModel', datacontext]);

    function datacontext($q, fooModel)
    {
        var service = {
            getFoo: getFoo
        };

        return service;

        function getFoo()
        {
             return $q.when(new fooModel.Foo());
        }
    }
})();