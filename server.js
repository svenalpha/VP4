


import { resolve } from 'path';
import express from "express";
import ViteExpress from "vite-express";
import handlebars from "vite-plugin-handlebars";
// import express-handlebars from "express-handlebars";

const app = express();              //  5173                   4173         
  ViteExpress.config({ mode: "production"}); //    test"}) // development,  production, test     
 //  ViteExpress.config({ mode: "test"});    
// command in terminal:       NODE_ENV=production node server      .ts/js  // for deployment version
import pkg from "vite-plugin-handlebars"; 


import {engine} from "express-handlebars";
//app.use(express.static('public'));
app.use(express.static(resolve('./dist')));
app.set('view engine','hbs');  
//app.set('views', path.join(__dirname, 'views'));
//app.set('public', path.join(__dirname, '/public'));

app.engine('hbs',engine({
    //layoutsDir:`${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    //partialsDir:`${__dirname}/partials`,
    helpers : { counter: (index) => index +1,
                speak: () => 'hello Earth'
    }
  })); 

//   do send to render  
app.get("/", (_, res) => res.send("in / of   express!"));
//app.get('/',(req,res) => {
//    res.render('/',{titlex:' about page title'});   
//  }); 
//

app.get('/about',(req,res) => {
   //res.render('c:\\web\\a4\\vp4\\views\\about',{titlex:'about page title'}); 
   res.render('\about',{titlex:'about      cccontext  page titlex'});  
  });  

  app.get('/extra',(req,res) => {
    //res.render('c:\\web\\a4\\vp4\\views\\about',{titlex:'about page title'}); 
    res.render('\extra',{titlex:'extra context    page titlex'});  
   });  
 
app.get("/message", (_, res) => res.send("in message Hello from express!"));

app.get('*',(req,res) => {       
  res.render('404',{titlex:'404 page title'});        
});   



//ViteExpress.listen(app, 3000, () => console.log("Server is listening on 3000...")); 
ViteExpress.listen(app,(process.env.PORT || 3000), () => console.log("Server is listening on process.env.PORT or 3000...")); 
//  app.listen(process.env.PORT || 3000);   // 5173 dev port, 4173 test


