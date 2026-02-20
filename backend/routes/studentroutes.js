import express from "express";
import { addStudent, deleteStudent, getStudent, getStudents, updateStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);

router.post("/", addStudent);

router.post("/getinfo", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;