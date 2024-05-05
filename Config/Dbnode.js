const  mysql =require('mysql')
const db= mysql.createPool({
    host: 'localhost',
    port:'3307',
    user: 'root',
    password: '',
    database: 'db'
});

 db.getConnection(()=>{
console.log("connected good");
})

module.exports=db;