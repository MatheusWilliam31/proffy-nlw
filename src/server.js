//DADOS DA APLICAÇÃO
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
        whatsapp: "61993214313", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." , 
        subject:"Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1120]
    },

    {
        name: "Daniele Moura", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
        whatsapp: "61993214313", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." , 
        subject:"Química", 
        cost:"20", 
        weekday:[5], 
        time_from:[720], 
        time_to:[1120]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]
//FUNCIONALIDADES DAS APLICAÇÃO

function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects [position]
}


function pageLandig(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays})
}

function pageGiveClass(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length != 0 

    if(isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirecte("/study")
    }
    return res.render("give-classes.html", { subjects, weekdays }) 
}

//SERVEIDO DA APLICAÇÃO
const express = require('express')
const server = express()

//Config Nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true
})
//Inicio e configuraçao do SERVER
server 
//Configure file statics (CSS, HTML, IMAGENS)
.use(express.static("public"))
//Routes App 
.get("/", pageLandig)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClass)
//START SERVER
.listen(5500)