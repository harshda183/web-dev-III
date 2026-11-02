use("GoogleDB")

db.employee.insert([
    {
        empID: 101,
        Name: "Suresh",
        salary: 65000,
        department: "Finance",
        contact: 6877557064,
        age: 25
    },
    {
        empID: 102,
        Name: "Mukesh",
        salary: 65000,
        department: "Finance",
        contact: 6877557764,
        age: 25
    },
    {
        empID: 103,
        Name: "Kusum",
        salary: 65000,
        department: "Finance",
        contact: 6877557564,
        age: 27
    },
    {
        empID: 104,
        Name: "Mahendra",
        salary: 65000,
        department: "Finance",
        contact: 6877557964,
        age: 25
    }

] )

db.employee.insert

db.employee.aggregate(
    [
        {
            $match: {department: "Finance"}
        },
        {
            $project:{
                Name: 1,
                salary: 1,
                department: 1,
                _id:0
            }
        },
        {
            $group: {
                _id: $location,
                totalSalary:{$sum: $salary},
                avgSalary: {$avg: $salary},
                maxSalary: {$max: $salary},
                minSalary: {$min: $salary},
                totalEmployee: {$sum: 1}
            }
        },
        {
            $sort:{totalSalary: -1}
        },
        // {
        //     $limit: 1
        // },
        {
            $count: "totalSalary"
        }
    ]
)

//db.employee.getIndexes()

//db.employee.find({_id: ObjectId("64a7e1f0c3b8d5e4f8a9b123")}) //default way to find document by id where index is automatically created by mongodb which is 1.

//db.employee.find({contact: 7566086378}) // given by us which should be given carefully

//db.employee.createIndex({contact: 1})

//sharding is imp question for interview


