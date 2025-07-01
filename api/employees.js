import express from "express";
const router = express.Router();
export default router;
import { createEmployee,getEmployees,getEmployee, updateEmployee, deleteEmployee } from "#db/queries/employees";

//Route sends the message "Welcome to the fullstack Employees API"
router.route("/").get(async (req, res)=> {
    const message = "Welcome to the Fullstack Employees API."
    res.send(message);
})

//Route send an array of all fullsatck employees
router.route("/employees").get(async(req, res) =>{
    const employees = await getEmployees();
    res.send(employees);
})

//Route create and adds new employye to the fullstack employee table
router.route("/employees").post(async(req, res) =>{
    if(!req.body){
       return res.status(400).send("Request body is not provided.")
    }

    const{name, birthday, salary} = req.body;

    if(!name || !birthday || !salary){
        return res.status(400).send("Request boddy is missing a required field.")
    }

    const employee = await createEmployee({name, birthday, salary});

    res.status(201).send(employee);
})



router.route("/employees/:id").get(async(req, res) => {
    const id = req.params.id

    if(!Number.isInteger(id) && id < 0){
        return res.status(400).send({error:"ID is not a positive number."})
    }

    const employee = await getEmployee(id);

    if(!employee){
        return res.status(404).send({error: "Employee was not found."})
    }

    res.send(employee);
})



router.route("/employees/:id").delete(async(req, res) => {
    const id = req.params.id

    if(!Number.isInteger(id) && id < 0){
        return res.status(400).send({error:"ID is not a positive number."})
    }

    const employee = await getEmployee(id)

    if(!employee){
        return res.status(404).send({error: "Employee not found."})
    }

    if(employee){
        const delEmp = await deleteEmployee(id)
        return res.sendStatus(204)
    }
})


router.route("/employees/:id").put(async(req, res) => {
    const id = req.params.id

    if(!req.body){
        return res.status(400).send("Please provide request body.")
    }

    const{name, birthday, salary} = req.body

    if(!name || !birthday || !salary){
        return res.status(400).send("Please provide all params.")
    }

    if(!Number.isInteger(id) && id < 0){
        return res.status(400).send({error:"ID is not a positive number."})
    }

    const employee = await getEmployee(id)

    if(!employee){
        return res.status(404).send({error: "Employee not found."})
    }

    const updated = await updateEmployee({id, name, birthday, salary})

    res.status(200).send(updated)
})