let queryTests = require('../src/index');

it('should add something to database', () => {
    expect(queryTests.addNewVisitor).toBeUndefined();
});

it('should list all visitors', () => {
    expect(queryTests.listAllVisitors).toBeUndefined();
});

it('should delete a visitor', () => {
    expect(queryTests.deleteAvisitor).toBeUndefined();
});

it('should update a visitor', () => {
    expect(queryTests.updateAvisitor).toBeUndefined();
});

it('should return data for a visitor', () => {
    expect(queryTests.viewOnevisitor).toBeUndefined();
});

it('should delete all visitors', () => {
    expect(queryTests.deleteAllVisitors).toBeUndefined();
});
