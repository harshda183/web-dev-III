use("GoogleDB")

// db.employee.insert(
//     {
//         empID: 101,
//         Name: "Suresh",
//         salary: 65000,
//         department: "Finance",
//         contact: 6877557864,
//         age: 25
//     }
// )

// db.employee.insertOne(
//     {
//         empID: 102,
//         Name: "Mahi",
//         salary: 65000,
//         department: "Finance",
//         contact: 6877557864,
//         age: 28

//     }
// )

// db.employee.insertMany(
//     [
//         {
//             empID: 103,
//             Name: "Ritu",
//             salary: 65000,
//             department: "Finance",
//             contact: 6877557164,
//             age: 25
//         },
//         {
//             empID: 105,
//         Name: "Mukesh",
//         salary: 65000,
//         department: "Finance",
//         contact: 687757864,
//         age: 25
//         }

//     ]
// )

// db.employee.find()
// db.employee.findOne()
// db.employee.find({department: "IT"})
// db.employee.findOne({department: "IT"})

// db.employee,updateOne(
//     {id: "objectid karke string hogi"}, //kisko update karna hai
//     {// kahan update karna hai
//         $set:{
//             age: 28,
//             salary: 900000
//         }
//     }
// )
// db.employee.updateMany[
//     {department: "Finance"},
//     {
//         $set:{
//             salary:950000
//         }
//     }
// ]

// delete operation 1. deleteOne()

// db.employee.deleteOne({_id:ObjectId('75864nbk4i32yh')})

// db.employee.deleteMany()

// db.employee.find(
//     {
//         department:($eq:"IT")
//     }
// )

// db.employee.find(
//     {deaprtment: "Finance", age:{$gte:25}}
// )

// db.employee.find(
//     {
//         $or:[
//             {department:"Finance"},
//             {age:{$gt:25}}
//         ]
//     }
// )
//db.employee.find({},{Name:1, salary:1,department:1,_id:0}) //Projection

//db.employee.find({department: "Finance"},{Name:1, salary:1,department:1,_id:0}) //only Finance data will come

//db.employee.find().limit(2) //first two data

//db.employee.find().skip(2) //skip first two data
//db.employee.find().skip(0).limit(2)

//db.employee.find().sort({salary:1}) //ascending order
//db.employee.find().sort({empId:-1}) //descending order





