const Express= require('express')
const app= Express()
const PORT= 3000
app.use((req,res,next)=>{
    var date= new Date();
    if (date.getDay()==7 || date.getDay()==6|| date.getHours()<9|| date.getHours()>17)
    {
        res.status(400).end("we are not available")
    }
    else {
        return next();
    }

}
)
app.use(Express.static("folder1"))
app.listen(PORT,(err)=>{
    err ? console.log(err) : console.log('server is runnig')
})
