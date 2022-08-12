const { getAllCompanies, createCompany, updateCompany, deleteCompanyAPI } = require('../controllers/companies')
// mock data
const req = { body: { emai: "amrikthakur1996@gmail.com" } }
const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
const next = jest.fn()


test('check Get All Companies api give success status', async () => {
    await getAllCompanies(req, res, next);
    expect(res.status).toBeCalledWith(200);
});
test('check Create Company api include email Id', async () => {
    const { email } = req.body;
    expect(email).not.toBe('')
});

test('check Create Company api give success status', async () => {
    await createCompany(req, res, next);
    expect(res.status).toBeCalledWith(200);
});

test('check Update Company api give success status', async () => {
    await updateCompany(req, res, next);
    expect(res.status).toBeCalledWith(200);
});
test('check Delete Company api give success status', async () => {
    await deleteCompanyAPI(req, res, next);
    expect(res.status).toBeCalledWith(200);
});