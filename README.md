## Available Scripts

In the project directory, you can run:

### `npm run dev`

# node_assignment

## Project setup
```
npm install
```

Server will run on PORT 4400.

Command is used for running server.js inside src folder.<br/>

The server will restart if you make edits.<br />
You will also see errors if any in the console.

### `node start`

Run the app on PORT 4400 but server will not restart if you make changes. <br />
Command is used for executing code in javascript which is available inside dist folder,
that runs server.js

### `npm run build`

Command for making build file that compiles to Javascript
### Compiles and hot-reloads
```
npm run dev
```

### run test cases 
```
npm test


```
### Environment Variables Used
```

DB_PASS - database password
DB_USER - database username
PORT - runing port
JWT_SECRET - jws secret key


```
### API's EndPoints Company API's
```
GetCompanies -(get)  http://localhost:4400/api/v1/company

CreateCompany -(post) 

  POST http://localhost:4400/api/v1/company/

| Body Payload | Type     | Description   |
| :----------- | :------- | :------------ |
| `name`  | `string` | *Required*. |
| `email`  | `string` | *Required*. |
| `phone`   | `string` | *Required*. |
| `website`      | `string` | *Required*. |

UpdateCompany -(put) http://localhost:4400/api/v1/company/id

DeleteCompany -(delete) http://localhost:4400/api/v1/company/id



```
### API's EndPoints Employee API's
```
```
### Note - All Employee API's need  AuthToken,which we generate on Creation of Company API.

```

GetEmployee -(get) http://localhost:4400/api/v1/employee/

CreateEmployee -
  POST http://localhost:4400/api/v1/employee/

| Body Payload | Type     | Description   |
| :----------- | :------- | :------------ |
| `companyId`  | `number` | *Required*. |
| `firstName`  | `string` | *Required*. |
| `lastName`   | `string` | *Required*. |
| `email`      | `string` | *Required*. |
| `phone`      | `string` | *OPTIONAL*. |


UpdateEmployee -(put) http://localhost:4400/api/v1/company/id

DeleteEmployee -(delete) http://localhost:4400/api/v1/employee/id
