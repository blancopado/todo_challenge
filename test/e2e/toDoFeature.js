describe('To do challenge', function() {
  
  var agenda = [];

  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('ToDo list');
  });

  it('has an input field to add an activity', function() {
    browser.get('http://localhost:8080');

    element(by.model('newActivity.description')).sendKeys('cleaning');
    element(by.className("btn1")).click();
    expect(element(by.repeater('actv in agenda')).getText()).toContain('cleaning');
  });

  it('has an input field to add a second activity', function() {
    browser.get('http://localhost:8080');

    element(by.model('newActivity.description')).sendKeys('test2');
    element(by.className("btn1")).click();
    expect(element(by.repeater('actv in agenda').row(1)).getText()).toContain('test2');
  });

  it('has an input field to add the date', function() {
    browser.get('http://localhost:8080');

    element(by.model('newActivity.date')).sendKeys('01-30-2015');
    element(by.className("btn1")).click();
    expect(element(by.repeater('actv in agenda')).getText()).toContain('01-30-2015');
  });
});