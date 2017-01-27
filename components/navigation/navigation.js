(function(){
   'use strict';
    angular.module("application")
        .component("navigation" ,{
            templateUrl: "components/navigation/navigation.htm",
            controller: "navigationController",
            controllerAs:"vm"
        });
}());