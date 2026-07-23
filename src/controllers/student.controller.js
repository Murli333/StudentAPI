const students = [
    {
        id: 1,
        name: "Murli",
        course: "Backend"
    },
    {
        id: 2,
        name: "Rahul",
        course: "Frontend"
    }
];

// GET /
function welcome(req, res) {
    res.send("Welcome");
}

// GET /about
function about(req, res) {
    res.send("Backend Bootcamp");
}

// GET /student
function studentInfo(req, res) {
    res.json({
        name: "MURLI",
        Course: "Backend"
    });
}

// GET /info
function info(req, res) {
    console.log(req.method);
    console.log(req.url);

    res.send("Check Terminal");
}

// GET /students
function getStudents(req, res) {
    res.json(students);
}

// GET /students/:i
function getStudentById(req, res) {
    const id = Number(req.params.i);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
}

// POST /students
function createStudent(req, res) {
    const { id, name, course } = req.body;

    if (!id || !name || !course) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    if (students.find(s => s.id === id)) {
        return res.status(409).json({
            message: "Student already exists"
        });
    }

    students.push({
        id,
        name,
        course
    });

    res.status(201).json({
        message: "Student added successfully"
    });
}

// DELETE /students/:id
function deleteStudent(req, res) {
    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully"
    });
}

// PUT /students/:id
function updateStudent(req, res) {
    const id = Number(req.params.id);

    const { name, course } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = name;
    student.course = course;

    res.status(200).json({
        message: "Student updated successfully"
    });
}

module.exports = {
    welcome,
    about,
    studentInfo,
    info,
    getStudents,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent
};