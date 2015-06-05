/*var app = angular.module("MyApp", []).config(function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider.
		when("/persons", { templateUrl: "partials/person_list.html" }).
		when("/persons/:id", { templateUrl: "partials/person_details.html",
			controller: "myController" }).
			otherwise( { redirectTo: "/persons" });
});
*/

function myController ($scope){
	$scope.visible = true;
	$scope.fullName = "";

	prospectDetails = {
			firstName: "",
			lastName: "",
			fatherName: "",
			motherName: "",
			dateOfBirth: "",
			lastSchool: "",
			address: "",
			city: "",
			district: "",
			picode: "",
			phone: ""
	};
	$scope.propspectDetails = prospectDetails;
	
	$scope.toggle  = function(){
		$scope.visible = !$scope.visible;
		alert($scope.visible);
	};

	$scope.showName  = function(){
		alert("Hello Haroon");
		$scope.fullName  = "Hello dear " + $scope.firstName  + "  " + $scope.lastName;
	};
	$scope.resetForm  = function(){
		$scope.propspectDetails = prospectDetails;

// $scope.registrationForm.$setPristine();
	};

	


}

