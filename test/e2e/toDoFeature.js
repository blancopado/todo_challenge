describe('To do challenge', function() {
  
  beforeEach( function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo list');
  });

  it('has an input field to add an activity', function() {
    element(by.model('newActivity.description')).sendKeys('test1');
    element(by.className("btn1")).click();
    expect(element(by.repeater('actv in agenda')).getText()).toContain('test1');
  });

  it('has an input field to add a second activity', function() {
    element(by.model('newActivity.description')).sendKeys('test2');
    element(by.className("btn1")).click();
    expect(element(by.repeater('actv in agenda').row(1)).getText()).toContain('test2');
  });

  it('can delete all items from the list', function() {
    element(by.className("btn2")).click(); //delete previous tests
    element(by.model('newActivity.description')).sendKeys('test3');
    element(by.className("btn1")).click();
    expect(element(by.repeater('actv in agenda')).getText()).toContain('test3');
  });

});