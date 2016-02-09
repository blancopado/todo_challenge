describe('toDoChallengeController', function() {
 
  beforeEach(module('ToDoList'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDo', {
      $scope: scope
    });
    scope.clearAgenda();
    scope.clearListDone();
  }));

  it('initialises with an empty list', function() {
    expect(scope.agenda.length).toBe(0);
  });  

  it('add activity to the list', function() {
    scope.newActivity = 'Test';
    scope.addToAgenda();
    expect(scope.agenda.length).toBe(1);
    expect(scope.agenda[0]).toBe('Test');
  });

  it('deletes all items', function() {
    scope.newActivity = 'Test';
    scope.addToAgenda();
    expect(scope.agenda.length).toBe(1);
    scope.clearAgenda();
    expect(scope.agenda.length).toBe(0);
  });

  it('deletes just one item from the list', function() {
    scope.newActivity = 'Test';
    scope.addToAgenda();
    expect(scope.agenda.length).toBe(1);
    scope.newActivity = 'Test2';
    scope.addToAgenda();
    expect(scope.agenda.length).toBe(2);
    scope.removeAct(1);
    expect(scope.agenda.length).toBe(1);
  });

  it('moves tasks to the list of done activities when deleting from the main list', function() {
    scope.newActivity = 'Test';
    scope.addToAgenda();
    scope.removeAct(0);
    expect(scope.listDone.length).toBe(1);
  });

  it('deletes all items from the list of tasks completed', function() {
    scope.newActivity = 'Test';
    scope.addToAgenda();
    scope.removeAct(0);
    scope.newActivity = 'Test2';
    scope.addToAgenda();
    scope.removeAct(0);
    expect(scope.listDone.length).toBe(2);
    scope.clearListDone();
    expect(scope.listDone.length).toBe(0);
  });

  it('deletes just one item from the list of tasks completed', function() {
    scope.newActivity = 'Test';
    scope.addToAgenda();
    scope.removeAct(0);
    scope.newActivity = 'Test2';
    scope.addToAgenda();
    scope.removeAct(0);
    expect(scope.listDone.length).toBe(2);
    scope.removeActDone(1);
    expect(scope.listDone[0]).toBe('Test');
  });
});