'use strict';

var githubEndPoint = 'https://api.github.com';
var projectOwner = 'angular';
var projectName = 'angular.js';

angular.module('gitCloneApp')
  .service('GithubSrv', function ($http) {

      this.getIssues = function getIssues ( aProjectId ) {
        var url = githubEndPoint + '/' + projectOwner + '/' + projectName + '/issues';

        return $http.get( url );
      };
	});
