'use strict';

angular.module('gitCloneApp')
  .controller('MainCtrl', [
    'GithubSrv',
    function (GithubSrv) {
      var vm = this;

      GithubSrv.getIssues()
        .then( function onSuccess(response) {
          console.log(response);
        }, function onError() {
          console.log('There was an error fetching the issues');
        });
    }
  ]);
