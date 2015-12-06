toDoChallenge.controller('ToDo', ["$scope", "localStorageService", function($scope, localStorageService) {
	
	if (localStorageService.get("list")) {
		$scope.agenda = localStorageService.get("list");
		$scope.listDone = localStorageService.get("listDone");
	} else {
		$scope.agenda = [];
		$scope.listDone = [];
	}
	
	$scope.addToAgenda = function() {
		$scope.agenda.push($scope.newActivity);
		$scope.newActivity = {};
		localStorageService.set("list", $scope.agenda);
	}

	$scope.clearAgenda = function() {
		localStorageService.clearAll("list", $scope.agenda);
		$scope.agenda = [];
	}

	$scope.removeAct = function(index) {
		$scope.listDone.push($scope.agenda.splice(index, 1).shift());
		localStorageService.set("listDone", $scope.listDone);

		localStorageService.set("list", $scope.agenda);
	}

	$scope.clearListDone = function() {
		localStorageService.clearAll("listDone", $scope.listDone);
		$scope.listDone = [];
	}
	
	$scope.removeActDone = function(index) {
		$scope.listDone.splice(index, 1);
		localStorageService.set("listDone", $scope.listDone);
	}
}]);