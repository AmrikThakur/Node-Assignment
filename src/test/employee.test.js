const { getAllEmployee, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee')
// mock data
const req = {}
const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
const next = jest.fn()


test('check Get All Employee api give success status', async () => {
    await getAllEmployee(req, res, next);
    expect(res.status).toBeCalledWith(200);
});

test('check Create Employee api give success status', async () => {
    await createEmployee(req, res, next);
    expect(res.status).toBeCalledWith(200);
});

test('check Update Employee api give success status', async () => {
    await updateEmployee(req, res, next);
    expect(res.status).toBeCalledWith(200);
});
test('check Delete Employee api give success status', async () => {
    await deleteEmployee(req, res, next);
    expect(res.status).toBeCalledWith(200);
});
