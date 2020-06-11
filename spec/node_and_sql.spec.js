let queryTests = require('../src/index');


fit('should create a table called visitor', async(done) => {
    if(!queryTests.createTable) {
          expect(queryTests.createTable).toBeNull();  
    }else {
        expect(queryTests.createTable).not.toBeNull();
    }
    done()
})

fit('should add some data to table', async(done) => {
    let visName = queryTests.addNewVisitor(arguments[0]);
    let visAge = queryTests.addNewVisitor(arguments[1]);
    let d_visist = queryTests.addNewVisitor(arguments[2]);
    let t_visit = queryTests.addNewVisitor(arguments[3]);
    let a_name = queryTests.addNewVisitor(arguments[4])
    let comm = queryTests.addNewVisitor(arguments[5])

    expect(visName).not.toBeNull();
    expect(visAge).not.toBeNull();
    expect(d_visist).not.toBeNull();
    expect(t_visit).not.toBeNull();
    expect(a_name).not.toBeNull();
    expect(comm).not.toBeNull();
    done()
});

it('should list all visitors', () => {
    expect(queryTests.listAllVisitors).toBeDefined();

});

it('should delete a visitor', async (done) => {
    let del_visitor = queryTests.deleteAvisitor();
    let numBefore;
    if(numBefore = 2){
        expect(del_visitor).toBeLessThan(numBefore)
    }
    done();
});

it('should update a visitor', async (done) => {
    expect(queryTests.updateAvisitor).toBeGreaterThan('number before');
    done();
});

it('should return data for a visitor', async(id, done) => {
    expect(queryTests.viewOnevisitor).toBeDefined();
    done();
});

fit('should delete all visitors', async(done) => {

    queryTests.deleteAllVisitors;
       expect(queryTests.deleteAllVisitors).toBeNull();
    done();
});
