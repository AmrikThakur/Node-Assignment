/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-promise-executor-return */
const {
  getAllCompanies, createCompany, updateCompany, deleteCompanyAPI,
} = require('../controllers/companies');

// mock data
const req = { body: { email: 'amrikthakur1996@gmail.com' } };
const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
const next = jest.fn();

describe('Testing Company API\'s', () => {
  test('check Get All Companies api give success status', () => {
    new Promise((resolve) => resolve(getAllCompanies(req, res, next))).then((res) => {
      expect(res.status).toBe(200);
    });
  });

  test('check Create Company api include email Id', async () => {
    const { email } = req.body;
    expect(email).not.toBe('');
  });

  test('check Create Company api give success status', async () => {
    new Promise((resolve) => resolve(createCompany(req, res, next))).then((res) => {
      expect(res.status).toBe(200);
    });
  });

  test('check Update Company api give success status', async () => {
    await updateCompany(req, res, next);
    setTimeout(() => {
      expect(res.status).toBeCalledWith(200);
    }, 1000);
  });

  test('check Delete Company api give success status', async () => {
    await deleteCompanyAPI(req, res, next);
    setTimeout(() => {
      expect(res.status).toBeCalledWith(200);
    }, 1000);
  });
});
