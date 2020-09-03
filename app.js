const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

  // Starting Monday not friday
 /* app.use(date=(req,res,next)=>{
function dates(current) {
    var week= new Array(); 
     current.setDate((current.getDate() - current.getDay() +1));
    for (var i = 0; i < 5; i++) {
        week.push(
            new Date(current)
        ); 
        current.setDate(current.getDate() +1);
    }
    return week; 
    console.log(week)
    next()
}})*/
//starting 08.00 to 17.00
app.use(date=(req,res,next)=>{
    var date1 = new Date(  9); // 8:00 AM
    var date2 = new Date( 17); // 17:00 PM
    if (date2< date1) {
        date1.setDate(date1.getDate() + 1);
    }
    var diff = date2 - date1;
    console.log(diff)
next()
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