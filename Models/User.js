// const express = require("express");
// const pool =require("../Config/Dbnode");

// class UserModel {
//   static async getUser() {
//     return new Promise (resolve => {
//       pool.query("select * from users" ,[],(error, result) => {
//         if (!error)
//         resolve(result);
//       });
//     }
//   )
  
// }
// static async addnewuser(name , email , password)
// {
//   return new Promise(resolve =>{
//     pool.query("insert into users (name,email,password) values (?,?,?)",[name,email,password],(err,result)=>{
//       if(!err)resolve(true)
//       else{
//     console.log("error",err);
//     resolve(false)
//     }
//     })
//   })

// }

// static async deleteuser(id){
//   return new Promise(resolve =>{
//     pool.query("delete from users where id=?",[id],(errore , result)=>{
//       if(errore){
//         resolve(false)
//       }

//       else{
//       resolve(true)
//       }
//     })
//   })
// }

// static async editeuser(id , name , email , password){
//   return new Promise(resolve => {
//   pool.query("update users set name=? , email=? , password=? where id=?",[name , email , password , id],(err , res) =>{
//       if(!err)resolve(res)
//       else resolve(err)
//     })
//   })
// }

// }
// module.exports=UserModel;






// const pool = require("../Config/Dbnode");

// class UserModel {
//   static async getUser() {
//       return new Promise (resolve => {
//         pool.query("select * from users" ,[],(error, result) => {
//           if (!error)
//           resolve(result);
//         });
//       }
//     )
// }
//     static async addNewUser(name , details, more) {
//         return new Promise((resolve, reject) => {
//             pool.query(
//                 "INSERT INTO users (name , details, more) VALUES (?, ?, ?)",
//                 [name , details, more],
//                 (error, result) => {
//                     if (error) {
//                         console.error("Error adding info to database:", error);
//                         reject(error);
//                     } else {
//                         resolve(result);
//                     }
//                 }
//             );
//         });
//     }
//     static async deleteuser(id){
//           return new Promise(resolve =>{
//             pool.query("delete from users where id=?",[id],(errore , result)=>{
//               if(errore){
//                 resolve(false)
//               }
        
//               else{
//               resolve(true)
//               }
//             })
//           })
//         }
        
// }
// module.exports = UserModel;


// const pool = require("../Config/Dbnode");

// class UserModel {
//   static async getUser() {
//     return new Promise((resolve, reject) => {
//       pool.query("SELECT * FROM users", (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   }

//   static async addNewUser(name, details, more) {
//     return new Promise((resolve, reject) => {
//       pool.query(
//         "INSERT INTO users (name, details, more) VALUES (?, ?, ?)",
//         [name, details, more],
//         (error, result) => {
//           if (error) {
//             reject(error);
//           } else {
//             resolve(result);
//           }
//         }
//       );
//     });
//   }

  // static async deleteuser(id) {
  //   return new Promise((resolve, reject) => {
  //     pool.query("DELETE FROM users WHERE id = ?", [id], (error, result) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         resolve(result.affectedRows > 0);
  //       }
  //     });
  //   });
  // }

  // static async editeuser(id, name, details, more) {
  //   return new Promise((resolve, reject) => {
  //     pool.query(
  //       "UPDATE users SET name = ?, details = ?, more = ? WHERE id = ?",
  //       [name, details, more, id],
  //       (error, result) => {
  //         if (error) {
  //           reject(error);
  //         } else {
  //           resolve(result.affectedRows > 0);
  //         }
  //       }
  //     );
  //   });
  // }
// }

// module.exports = UserModel;



const pool = require("../Config/Dbnode");

class UserModel {
  static async getUser() {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM users", (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async addNewUser(name, details, more) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO users (name, details, more) VALUES (?, ?, ?)",
        [name, details, more],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static async deleteuser(id) {
    return new Promise((resolve, reject) => {
      pool.query("DELETE FROM users WHERE id = ?", [id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.affectedRows > 0);
        }
      });
    });
  }

  static async editeuser(id, name, details, more) {
    return new Promise((resolve, reject) => {
      pool.query(
        "UPDATE users SET name = ?, details = ?, more = ? WHERE id = ?",
        [name, details, more, id],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.affectedRows > 0);
          }
        }
      );
    });
  }
}

module.exports = UserModel;
