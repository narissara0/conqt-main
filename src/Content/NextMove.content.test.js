const { NextMoveContent } = require('./NextMove.content');

describe('NextMoveContent', () => {
  test('has the correct properties', () => {
    expect(NextMoveContent).toHaveProperty('HEADER1');
    expect(NextMoveContent).toHaveProperty('HEADER2');
    expect(NextMoveContent).toHaveProperty('HEADER3');
    expect(NextMoveContent).toHaveProperty('PARA1');
    expect(NextMoveContent).toHaveProperty('PARA2');
    expect(NextMoveContent).toHaveProperty('PARA3');
  });

  test('has the correct values for the properties', () => {
    expect(NextMoveContent.HEADER1).toBe('Create Project');
    expect(NextMoveContent.HEADER2).toBe('Find Vendor');
    expect(NextMoveContent.HEADER3).toBe('Start Project');
    expect(NextMoveContent.PARA1).toBe('Required scope, timeline and ape. Price will be included if you provide us with detail information about a project.');
    expect(NextMoveContent.PARA2).toBe('Let’s get acquainted and discuss all the possible variants and options. Google Hangouts or Skype usually works great.');
    expect(NextMoveContent.PARA3).toBe('When the contract is signed, and all goals are set we can start the first sprint.');
  });
});
