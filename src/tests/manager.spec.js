import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import mockData from "./mockData";

chai.use(chaiHttp);
chai.should();

const runManagerTests = () => {
    describe("Create a new manager account", () => {
         it("Should register a non registered Manager", (done) => {
           chai
             .request(app)
             .post("/api/v1/auth/signup")
             .send(mockData.managerComplete)
             .end((err, res) => {
               expect(res.statusCode).to.equal(201);
               done();
             });
         });

          it("Should not register a  Manager that already exists", (done) => {
            chai
              .request(app)
              .post("/api/v1/auth/signup")
              .send(mockData.managerAlreadyExists)
              .end((err, res) => {
                expect(res.statusCode).to.equal(409);
                done();
              });
          });
           it("Should not register a Manager with invalid email", (done) => {
             chai
               .request(app)
               .post("/api/v1/auth/signup")
               .send(mockData.managerInvalidEmail)
               .end((err, res) => {
                 expect(res.statusCode).to.equal(422);
                 done();
               });
           });
           it("Should not register a Manager with invalid National ID", (done) => {
             chai
               .request(app)
               .post("/api/v1/auth/signup")
               .send(mockData.managerInvalidId)
               .end((err, res) => {
                 expect(res.statusCode).to.equal(422);
                 done();
               });
           });
    })
    


}

export default runManagerTests;