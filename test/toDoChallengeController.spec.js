describe('toDoChallengeController', function() {
 
  beforeEach(module('ToDoList'));

  var ctrl, scope;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDo', {
    	$scope: scope
    });

  // beforeEach(inject(function($controller) {
  //   ctrl = $controller('ToDo');
  // }));

  it('initialises with an empty list', function() {
    expect(scope.agenda.length).toBe(0);
	});  

 //  it('initialises with an empty search result and term', function() {
	// 	//expect(ctrl.addToList).toBeUndefined();
 //    expect(scope.ctrl.agenda.length).toBe(0);
	// });

	// it('add activity to the list', function() {
	// 	scope.newActivity = 'Test';
	// 	scope.addToAgenda();
	// 	expect(scope.ctrl.agenda.length).toBe(1);
	// });

});