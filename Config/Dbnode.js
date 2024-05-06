const  mysql =require('mysql')
const db= mysql.createPool({
    host: 'beoy2tydjht5tw7paovl-mysql.services.clever-cloud.com',
    port:'3306',
    user: 'uyugzedpltjeofpl',
    password: 'd8FnSH2SCppUsZIITwo8',
    database: 'beoy2tydjht5tw7paovl'
});

 db.getConnection(()=>{
console.log("connected good");
})

module.exports=db;