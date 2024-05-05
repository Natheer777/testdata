const  mysql =require('mysql')
const db= mysql.createPool({
    host: 'bvkosdzx1dt9f9x4dws9-mysql.services.clever-cloud.com',
    port:'3306',
    user: 'ubupobfmgyd4muvw',
    password: 'lvpOj9F6gz6klDFQY3iR',
    database: 'bvkosdzx1dt9f9x4dws9'
});

 db.getConnection(()=>{
console.log("connected good");
})

module.exports=db;