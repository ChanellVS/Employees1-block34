import db from "./client.js";
import { createEmployee } from "./queries/employees.js";

console.log("🌱 Database seeded.");

async function seedEmployees(){
  
  await db.connect()

await createEmployee({name:"Liora Thandrel", birthday: '2001-11-03', salary: 60000})
await createEmployee({name: "Kaelrin Vossa", birthday:'1995-03-05', salary: 90000})
await createEmployee({name: "Amira Dornez", birthday:'2000-05-11', salary: 65950})
await createEmployee({name: "Thalen Morvek", birthday:'1980-12-01', salary:38588})
await createEmployee({name: "Seris Halowen", birthday:'1975-01-02', salary:86084})
await createEmployee({name: "Eryndor Caelis", birthday:'1999-07-27', salary:55035})
await createEmployee({name: "Nyra Velthane", birthday:'1986-06-12', salary:72800})
await createEmployee({name: "Jorik Fenmere", birthday:'1993-01-19', salary:36450})
await createEmployee({name: "Tavina Quellor", birthday:'1977-04-07', salary:40566})
await createEmployee({name: "Malric Ostrell", birthday:'1995-04-04', salary:100000})

await db.end();
}


seedEmployees();