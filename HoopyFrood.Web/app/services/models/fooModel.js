(function ()
{
    'use strict';

    var serviceId = 'fooModel';
    angular.module('app').factory(serviceId, [fooModel]);

    function fooModel()
    {
        var service = {
            Foo: newFoo
        };

        return service;

        function newFoo()
        {
             return {
                 bar: 'BAR',
                 baz: null
             };
        }
    }
})();