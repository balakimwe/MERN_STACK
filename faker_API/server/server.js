const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();

//intialize the port to 8000
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//hardcoded data for the api (for now, until we get a database)
// const users = [
//   {
//     name: "fullName",
//     password: "password",
//     phone: "number",
//     id: "",
//   },
// ];

const createUser = () => {
    const newUser = {
      id: faker.database.mongodbObjectId(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    return newUser;
};

console.log(createUser())

// const company = [
//   { name: "bs", id: "", adress: { street: "", city: "", zipCode: "" } },
// ];

const createCompany = () => {
  const newCompany = {
    id: faker.datatype.uuid(), 
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    }
  };
  return newCompany;
};

console.log(createCompany())

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

//Return all Users
app.get("/api/users", (req, res) => {
  res.json(createUser());
});


//Return a new compay
app.get("/api/company", (req, res) => {
  res.json(createCompany());
});

//Return Bothe users and company
app.post("/api/user/company", (req, res) => {
  console.log(req, res);
  res.json({user: createUser(), company: createCompany()});
});

app.listen(port, () =>
  console.log(`Welcome to the Death Star! You are on bridge port: ${port}`)
);
