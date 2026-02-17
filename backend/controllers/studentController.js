import express from "express";
import Student from "../models/student.js";

/* ===== Create Student ===== */
export const addStudent = async (req, res)=>{
    const {name, email, password} = req.body;

    if(!name)
        res.status(404).json({message:"Name field is required."});

    if(!email)
        res.status(404).json({message:"Email field is required."});

    if(!password)
        res.status(404).json({message:"Password field is required."})

    try {
        const isExists = await Student.findOne({email});
        
        if(isExists)
            res.status(201).json({message:"Email already exists"});

        const createStudent = await Student.create(req.body);

        res.json(createStudent);

    } catch (error) {
        res.send(error.message)
    }    
}

/*===== Get Students List ===== */
export const getStudents = async (req, res)=>{
    const students = await Student.find();
    res.status(500).json(students);
}

/*===== Update  Student =====*/
export const updateStudent = async (req, res)=>{
    try {
        const studentId = req.params.id;

        const studentdata = await Student.findByIdAndUpdate(
            studentId,
            req.body,
            {new:true}
        );    

        if(!studentdata)
            return res.status(400).json({message:"Student not found"});

        res.json(studentdata);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

/* ===== Delete Student ===== */
export const deleteStudent = async (req, res)=>{
    try {
        const studentId = req.params.id;
        const student = await Student.findByIdAndDelete(studentId);

        if(!student)
            return res.status(404).json({message:"Student not found"});

        res.status(201).json({message:"Student record deleted"});   
    } catch (error) {
        res.status(500).json({message:error.message});
    }
     
}