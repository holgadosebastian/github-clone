'use strict';

angular.module('gitCloneApp')
  .controller('MainCtrl', [
    'GithubSrv',
    function (GithubSrv) {
      var vm = this;

      this.issues = [];
      this.loadingIssues = true;

      GithubSrv.getIssues()
        .then( function onSuccess(response) {
          console.log(response);
          vm.issues = response.data;
        }, function onError() {
          console.log('There was an error fetching the issues');
        })
        .finally( function() {
          vm.loadingIssues = false;
        });
    }
  ]);
