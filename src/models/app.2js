const express=require("express")
const app=express()
const hbs =require("hbs")
const path=require("path")

app.set('views', path.join(__dirname, 'views'));
require("./db/conn")


const Register=require("./models/registrationSchema")
const Teacher = require("./models/teacherlogin"); 
const Admission =require('./models/admission')
const { log } = require("console")

const partials_path=path.join(__dirname,"../template/partials");
const publicPath = path.join(__dirname, "../public");


app.use(express.urlencoded({extended:true}))
const port=process.env.Port || 8000;

const staticpath=path.join(__dirname,"../template/views")
app.set("views", staticpath);
app.use(express.static(staticpath))
app.use(express.static(publicPath))


app.set("view engine","hbs")

hbs.registerPartials(partials_path)


app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/student",(req,res)=>{
    res.render("loginstudent.hbs")
})

app.get("/loginstudent",(req,res)=>{
    res.render("loginstudent.hbs")
})


// admission
app.get("/addmision",(req,res)=>{
    res.render("addmision")
})

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); 
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post("/addmision", upload.single('img'), async (req, res) => {
    try {
        // Check if a file was uploaded
        if (!req.file) {
            throw new Error('No file uploaded');
        }

        // Create a new Admission object with form data
        const data = new Admission({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age,
            gender: req.body.gender,
            course: req.body.course,
            img: req.file.filename // Save the filename to the database
        });
        await data.save();
        res.render("conf", {
            success: "Successfully added admission",
            data: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                gender: req.body.gender,
                course: req.body.course,
                img: req.file.filename
            }
        });
    } catch (e) {
        console.error("Error saving data:");
        res.status(400).render("error", {
            error: "An error occurred while saving data"
        });
    }
});




// teacher
app.get("/teacher",(req,res)=>{
    res.render("loginteacher.hbs")
})



app.post("/loginteacher", async (req, res) => {
    const { username, password } = req.body; 
    try {
        const teacher = await Teacher.findOne({ username });

        if (teacher) {
            if (teacher.password === password) {
                res.render("teacher", { teacher , success: "SUCCESFULLY" });
            } else {
                res.render("loginteacher.hbs", {
                    wrong: "Incorrect Password teacher what are you doing"});
            }
        } else {
            res.render("loginteacher.hbs", {
                notfound: " Incorrect Teacher User I'D what are you doing"});
        }
    } catch (error) {
        res.render("loginteacher.hbs", {
            wrong: "Internal Server Error"});

    }
});



   



// stydent data save by teacher
app.post("/teacher", async (req, res) => {
    try {
        const data = new Register(req.body);
        await data.save();
        console.log("Data saved successfully:", data);
        res.render("teacher", {
            success: "Marks stored successfully"
        });
    } catch (err) {
        console.error("Error saving data:", err);
        res.status(400).render("teacher", {
            error: "An error occurred while saving data"
        });
    }
});


// student login with there rollnumber and addhar number
app.post("/loginstudent", async (req, res) => {
    const roll_number = req.body.roll_number;
    const addhar_number = parseInt(req.body.addhar_number);

    try {
        const userdetails = await Register.findOne({ roll_number: roll_number });
        if (userdetails) {
            if (userdetails.addhar_number === addhar_number) {
                res.render("studenthome", {
                    username: userdetails.fname,
                    hindi:userdetails.hindi,
                    english:userdetails.english,
                    Maths:userdetails.Maths,
                    Result:userdetails.Result,
                    TOTAL:userdetails.TOTAL,

                });
            } else {
                res.render("loginstudent.hbs", { roll_number: "Incorrect addhar_number" });
            }
        } else {
            res.render("loginstudent.hbs", {
             wrong: " Incorrect Roll_number"});
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).render("loginstudent.hbs", { error: "Internal Server Error" });
    }
});



app.listen(port,()=>{
    console.log(`listening to port no ${port}`)
})