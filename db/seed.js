import db from "./client.js";
import { createEmployee } from "./queries/employees.js";

console.log("🌱 Database seeded.");

async function seedEmployees(){
  
  await db.connect()

await createEmployee("Liora Thandrel", '2001-11-03', 60000)
await createEmployee("Kaelrin Vossa", '1995-03-05', 90000)
await createEmployee("Amira Dornez", '2000-05-11', 65950)
await createEmployee("Thalen Morvek", '1980-12-01', 38588)
await createEmployee("Seris Halowen", '1975-01-02', 86084)
await createEmployee("Eryndor Caelis", '1999-07-27', 55035)
await createEmployee("Nyra Velthane", '1986-06-12', 72800)
await createEmployee("Jorik Fenmere", '1993-01-19', 36450)
await createEmployee("Tavina Quellor", '1977-04-07', 40566)
await createEmployee("Malric Ostrell", '1995-04-04', 100000)

await db.end();
}


seedEmployees();