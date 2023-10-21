const { Console } = require('console');
const express = require('express')
const { exec } = require('child_process');
// const nodemailer = require('nodemailer');
const path = require('path');
const app = express () 
const port = 5000

// nampilin tanggal
function getFullTime(time) {
  
    let monthName = [
      "Jan",
      "Feb",
      "Mar", 
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // console.log(monthName[4]);
  
    let date = time.getDate();
    // console.log(date);
  
    let monthIndex = time.getMonth();
    // console.log(monthName[monthIndex]);
  
    let year = time.getFullYear();
    // console.log(year);
  
    let hours = time.getHours();
    let minutes = time.getMinutes();
  
    if (hours <= 9) {
      hours = "0" + hours;
    } else if (minutes <= 9) {
      minutes = "0" + minutes;
    }
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WITA`;
  }

// // Konfigurasi Contactme
// const transporter = nodemailer.createTransport({
//   service: 'outlook', // Misalnya 'outlook', 'gmail', 'yahoo', dll.
//   auth: {
//     user: 'wiranto1997@outlook.com',
//     pass: 'fkip2015',
//   },
// });

const config = require('./src/config/config.json')
const { Sequelize, QueryTypes } = require("sequelize")
const sequelize = new Sequelize(config.development)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

app.use(express.static('src/aset'))

app.use(express.urlencoded({extended: false})) //parsing data


// routing
app.get('/index1', home)
app.get('/addblog', formblog)
app.get('/blog1', blog1)
app.get('/blog-detail', blogDetail)
app.get('/testimonial', testimonial)
app.get('/contact1', contact)
app.get('/edit', edit)
app.get('/register', formRegister)
app.get('/login', formLogin)
app.get('/editblog/:id', editblog)
app.get('/blog-detail/:id', blogdetail)
app.get('/delete-blog/:id', deleteBlog)
app.get('/delete-homeblog/:id', deleteHome)
// app.get('/edithome/:id', editHome)
app.post('/add-blog', addblog)
app.post('/editblog', editblog)
app.post('/contact-1',formContact)



app.listen(port,() => {
    console.log("App Listen on port 5000");
})

const blogs = [
    {
        title: "Pasar Coding di Indonesia Dinilai Masih Menjanjikan",
        content: "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, molestiae numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta, eligendi debitis?",
        penulis: "Joko",
        date: getFullTime(new Date()),
    
    },

    {
        title: "Generasi Emas 2045",
        content: "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, molestiae numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta, eligendi debitis?",
        penulis: "Widodo",
        date: getFullTime(new Date()),
    },
    
    
]

function home(req,res) {
    res.render('index1')
}

function formblog(req,res) {
    res.render('addblog')
}

function contact(req,res) {
    res.render('contact1')
}

function blogDetail (req,res) {
    res.render('blog-detail')
}

function testimonial(req,res) {
    res.render('testimonial')
}

function blogdetail(req,res) {
    res.render('blog-detail')
}

function edit(req,res) {
    res.render('edit')
}

function formRegister(req,res) {
    res.render('register')
}

function formLogin(req,res) {
    res.render('login')
}


// ambil dari db
async function blog1(req, res) {
    try {
      const query = `SELECT id, title, "startDate", "endDate", technologies, image, content, "createdAt" FROM blogs`
      let obj = await sequelize.query(query, { type: QueryTypes.SELECT })
        console.log(obj);
      const data = obj.map((res) => ({
        ...res,
        author: "Wiranto"
      }))
  
      res.render('blog1', { blogs: data })
    } catch (error) {
      console.log(error);
    }
  }

  // async function blog1(req, res) {
  //     try {
  //       const data = await blog.findAll()
    
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

function home(req,res) {
    res.render('index1',{blogs})
}

function blogDetail(req,res) {
    res.render('blog-detail',{blogs})
}



// menampilkan hasil inputan dan durasi
function addblog(req,res) {
    let {
        "title" : title,
        "content" : content,
        "startDate" : startDate,
        "endDate" : endDate,
        "nodeJs" : nodeJs,
        "reactJs" : reactJs,
        "java" : java,
        "php" : php,
    } = req.body;

   startDate = new Date(req.body.startDate);
    endDate = new Date(req.body.endDate);
        let projectDuration= endDate - startDate;
        let days = Math.floor(projectDuration / (1000 * 60 * 60 * 24));
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days/30);
        let adddays = days % 7;

  if (days > 0 ) {
    projectDuration = days + " " + "Hari";}
  if (days < 7 ) {
    projectDuration = days + " " + "Hari";}
  if (days > 7) {
    projectDuration = weeks + " " + "Minggu" + 
    " " + adddays + " " + "Hari";}
  if (days >= 30) {
    projectDuration = months + " " + "Bulan" + " " + 
    adddays + " " + "Hari";
  }

    const blog = {
        title,
        content,
        nodeJs,
        reactJs,
        java,
        php,
        startDate,
        endDate,
        projectDuration,
        writter: "Mega Hazelnut",
        date: getFullTime(new Date ())
      
    }

    blogs.unshift(blog)
    res.redirect('/blog1')

}
// menghapus blog
function deleteBlog (req, res) {
    const { id } = req.params
    blogs.splice(id,1)
    res.redirect('/blog1')
}
// menghapus card pada home
function deleteHome (req, res) {
    const { id } = req.params
    blogs.splice(id,1)
    res.redirect('/index1')
}


// resubmit
function editblog(req,res) {
    const {title,content,nodeJs, reactJs,java,php,startDate, endDate, projectDuration} = req.body

    const blog = {
        title,
        content,
        nodeJs,
        reactJs,
        java,
        php,
        startDate,
        endDate,
        projectDuration,
        author,
        date: getFullTime(new Date ()),
    }

    blogs.unshift(blog)

    res.redirect('/blog1')
}

// edit blog
function editblog(req,res) {
    const { id } = req.params;
    // console.log(id);
    let data = blogs[id]
    console.log(data);

    // originalstartDate = new Date (data.startDate);
    // originalendDate = new Date (data.endDate);
    // const dateStart = originalstartDate.split('-');
    // const dateEnd = originalendDate.split('-');
    // const formatstartDate = `${dateStart[0]}/${dateStart[1]}/${dateStart[2]}`;
    // const formatendDate = `${dateEnd[0]}/${dateEnd[1]}/${dateEnd[2]}`;

    // console.log(formatstartDate);
    // console.log(formatendDate);

    res.render('edit',{
       
        data
    })
}

// menangani form contact
function formContact(req,res) {
  const { "name":name, "email":email, "phone":phone, "message" : message, subject} = req.body;
  const contact = {name, email, phone, message, subject}
  const toEmail = 'leonkmoena@gmail.com'
  console.log(contact);
  exec(`start mailto:${toEmail}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Hubungi saya di nomor ${phone} atau hubungi saya di email ${email}`);
  
}

