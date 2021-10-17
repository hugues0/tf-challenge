import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import mockData from "./mockData";
import generateToken from '../helpers/tokenGen'

chai.use(chaiHttp);
chai.should();

const runEmployeeTests = () => {
    describe("Create a new Employee account", () => {
         it("Should register a non registered Employee", (done) => {
             const signed = mockData.managerComplete.nId
             const token = generateToken({signed})
           chai
             .request(app)
             .post("/api/v1/employees")
             .set("token",token)
             .send(mockData.EmployeeComplete)
             .end((err, res) => {
               expect(res.statusCode).to.equal(201);
               done();
             });
         });
        })

         describe("Search an Employee ", () => {
           it("Should return 404 if Employee is not found", (done) => {
             const signed = mockData.managerComplete.nId;
             const token = generateToken({ signed });
             chai
               .request(app)
               .get("/api/v1/employees/100")
               .set("token", token)
               .send(mockData.EmployeeComplete)
               .end((err, res) => {
                 expect(res.statusCode).to.equal(404);
                 done();
               });
           });
         });
    }

export default runEmployeeTests;