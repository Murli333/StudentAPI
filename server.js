const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome");
});
app.get("/about",(req,res)=>{
    res.send("Backend Bootcamp");
});
app.get("/student",(req,res)=>{
    res.json({
        "name" : "MURLI",
        "Course" : "BAckend"
    });
});

app.get("/info",(req,res)=>{
    console.log(req.method);

    console.log(req.url);

    res.send("Check Terminal");
});

const students = [
    {
        id:1,
        name: "Murli",
        course : "Backend"
    },
    {
        id:2,
        name :"Rahul",
        course : "Frontend"
    }
];
app.get("/students",(req,res)=>{
    res.json(students);
});
app.get("/students/:i",(req,res)=>{
    const i = Number(req.params.i);
    if(!students.find(s=>s.id==i)){
        return res.status(404).json({
            "message" : "Student not found"
    });
    }
    
    res.send(students.find(s=>s.id==i));
});

app.post("/students",(req,res)=>{
    const {id,name,course} = req.body;
    if(!(id && name && course))return res.status(404).json({
        message : "All fields are required"
    });
    if(students.find(s => s.id===id)) {
        return res.status(409).json({
            message : "value is already present"
        });
    }
    res.status(201).json({
        message : "Student added successfully"
    });
});
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});