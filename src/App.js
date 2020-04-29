import React from "react";
import Table from "./components/Table"

function App() {

  const arrObjEmployees = 
    [
      {
        first_name: "John",
        last_name: "Doe",
        role: "Sales Lead",
        salary: "10000",
        department: "Sales"
      },
      {
        first_name: "Mike",
        last_name: "Chan",
        role: "Salesperson",
        salary: "8000",
        department: "Sales"
      },
      {
        first_name: "Ashley",
        last_name: "Rodriquez",
        role: "Lead Engineer",
        salary: "15000",
        department: "Engineering"
      },
      {
        first_name: "Kevin",
        last_name: "Tupik",
        role: "Software Engineer",
        salary: "12000",
        department: "Engineering"
      },
      {
        first_name: "Malia",
        last_name: "Brown",
        role: "Accountant",
        salary: "12500",
        department: "Finance"
      },
      {
        first_name: "Sarah",
        last_name: "Lourd",
        role: "Legal Team Lead",
        salary: "25000",
        department: "Legal"
      },
      {
        first_name: "Tom",
        last_name: "Allen",
        role: "Lawyer",
        salary: "18000",
        department: "Legal"
      }
    ]

  return <Table employees={arrObjEmployees}/>;
}

export default App;
