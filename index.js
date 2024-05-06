const express = require ("express")
const server = express ()
const port =5000
server.listen(port,() => {
    console.log('servidor rodando na porta ${port}')
})
//
server.get("/health",(req,res) => {
    res.send(
    {status:"running"} 
)
})


