const Joi = require("joi");
const express = require("express"); 
const app = express();

app.use(express.json());

const employees = [
  { name: "sidra", id: 1, dep: "Information Technology" },
  { name: "yousaf", id: 2, dep: "Designing" },
  { name: "sid", id: 3, dep: "Marketing" },
];
//GET METHOD
app.get("/api/employees/", (req, res) => {
  res.send(employees);
});

app.get("/api/employees/:id", (req, res) => {
  const employee = employees.find((e) => e.id === parseInt(req.params.id));
  if (!employee)
    res.status(404).send("The Employee was not found with the given ID");
  res.send(employee);
});

//Handeling POST Method
app.post("/api/employees", (req, res) => {
  // Define the Schema of Joi
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    dep: Joi.string().min(6).required(),
  });

  // validate the request body against the schema
  const { error } = schema.validate(req.body);

  // input validations using Joi
  if (error) return res.status(400).send(error.details[0].message);
  // 400 bad request

  const employee = {
    id: employees.length + 1,
    name: req.body.name,
    dep: req.body.dep,
  };

  employees.push(employee);
  res.send(employee);
});

// Handeling PUT Method
app.put("/api/employees/:id", (req, res) => {
  //Look up the Employee
  //if not existing then return 404
  const employee = employees.find((e) => e.id === parseInt(req.params.id));
  if (!employee)
    return res.status(404).send("The Employee was not found with the given ID");

  //if Validate
  // If invalid, return 400 -bad request
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    dep: Joi.string().min(6).required(),
  });
  // const { error } = schema.validate(req.body);
  // if (error) {
  const { error } = schema.validate(req.body);
  // 400 bad request
  if (error) return res.status(400).send(error.details[0].message);

  //Update the Employee
  employee.name = req.body.name;
  //Return the Updated Course
  res.send(employee);
});

//Handeling the Delete Method
app.delete("/api/employees/:id", (req, res) => {
  //Look Up the Course
  //Not existing return 404
  const employee = employees.find((e) => e.id === parseInt(req.params.id));
  if (!employee)
    return res.status(404).send("The Employee was not found with the given ID");

  //Delete
  const index = employees.indexOf(employee);
  employees.splice(index, 1);

  //Return the same course
  res.send(employee);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on port ${port}`));
