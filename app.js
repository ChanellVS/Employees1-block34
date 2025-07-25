import express from "express";
const app = express();
export default app;
import employeesRouter from "./api/employees.js"

app.use(express.json());

app.use("/",employeesRouter);

app.use((err, req, res, next) =>{
    console.error(err);
    res.status(500).send("Something malfunctioned")
})
