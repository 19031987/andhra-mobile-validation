(function () {
    'use strict';

    angular
        .module('cafvalidityV2App')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
