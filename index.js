const express = require('express')
const app = express()
const port =process.env.PORT||5000;

app.get('/', (req, res) => {
  res.send('Hello i am hi jahid vai  from my over smart  World!')
})

const users =[
    {id: 1 ,name: 'sabana',email: 'sabana@gmail.com',phone:'01738383838'},
    {id: 2 ,name: 'moyori',email: 'moyori@gmail.com',phone:'017383834838'},
    {id: 3 ,name: 'shabnur',email: 'shabnur@gmail.com',phone:'01733483838'},
    {id: 4 ,name: 'tamanna',email: 'tamanna@gmail.com',phone:'0173838356838'},
    {id: 5 ,name: 'labonu',email: 'labonu@gmail.com',phone:'017383rte838'},
    {id: 6 ,name: 'bibinaji',email: 'bibinaji@gmail.com',phone:'01775383838'},
    {id: 7 ,name: 'mamai',email: 'mamai@gmail.com',phone:'017386573838'},
    {id: 8 ,name: 'sraboni',email: 'sraboni@gmail.com',phone:'017357583838'},
    {id: 9 ,name: 'aliabatt',email: 'aliabatt@gmail.com',phone:'015678383838'},
]

app.get('/users',(req,res)=>{
    // res.send({id: 1 ,name: 'abdul alim',job : 'khay sudu halim'});
    res.send(users);
});
app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id =req.params.id;
    // const user=users[id];
    // eta onno vabe find diyeo kora jay 
    const user =users.find(u=>u.id==id);
    res.send(user);


})
app.listen(port, () => {
  console.log('Listening to port ',port);
})