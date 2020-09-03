const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.use(verifytime=(req,res,next)=>{
    const date =new Date();
    console.log(date);
    if (date.getDay() !== 0 && date.getDay() !== 6 && date.getHours()>=9 && date.getHours()<=17) {next()}
    else {res.send("page not available : you are outside of working time..........")}
})
app.use(date=(req,res,next)=>{
 let requestAt=new Date()
 console.log(requestAt)
 next()
})
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    
    
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page'});
});
app.get('/contactus', (req, res) => {
    res.render('contactus', { msg: 'This is contact page'});
});
app.get('/ourservice', (req, res) => {
    res.render('ourservice', { msg: 'This is service page'});
});
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});