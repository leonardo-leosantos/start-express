const express = require('express') // importando express
const app = express() // iniciando o express na variavel app

app.get('/', function(req, res){
    // req = dados enviados pelo client
    // res = resposta a ser enviada pelo server
    res.send('<h1>Bem vindo ao express</h1>')
})

app.get('/blog/:artigo', (req, res) =>{
    var artigo = req.params.artigo

    if(artigo){
        res.send(`<h1>Bem vindo ao ${artigo}!</h1>`)
    } else{
        res.send('<h1>Bem vindo ao blog!</h1>')
    }
})

app.get('/ola/:nome/:empresa?', (req, res) => {
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send(`<h1>Oi ${nome} da empresa ${empresa}!</h1>`)
})

app.get('/canal/youtube', (req, res) => {
    var canal = req.query['canal']
    res.send(`<h1>Bem vindo ao youtube ${canal ? canal : ''}!</h1>`)
})


app.listen(4000, (erro) => {
    if(erro){
        console.log('ocorreu um erro')
    } else{
        console.log('servidor no ar')
    }
})