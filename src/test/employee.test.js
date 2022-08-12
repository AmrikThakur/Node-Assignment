const { getAllEmployee, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee')

// mock data
const req = { body: { emai: "amrikthakur1996@gmail.com" } }
const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
const next = jest.fn()

describe('Testing Employee API\'s', () => {
    
    test('check Get All Employee api give success status', async () => {
        await getAllEmployee(req, res, next);
        expect(res.status).toBeCalledWith(200);
    });

    test('check Create Company api include email Id', async () => {
        const { email } = req.body;
        expect(email).not.toBe('')
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

})
