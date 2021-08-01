const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        equired: [true, "Please check your data entry, no name specified!"]   
    },
    rating: {
      type:  Number,
      min: 1,
      max: 10
    },
    review: String  
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    rating: 10, 
    review: "Peaches are so yummy!."
});

// fruit.save();

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const People = new mongoose.model("People", peopleSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
});

// pineapple.save();
const raspberry = new Fruit({
    name: "Raspberry",
    rating: 10,
    review: "the yummy's fruits ever!"
});

raspberry.save();

People.updateOne({name: "Nicoleta"},{favouriteFruit: raspberry}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully update the fruit.");
    }
})

// const people = new People ({
//  name: "Amy",
//  age: 12,
//  favouriteFruit: pineapple
// });

//   people.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!"
// })

// const orange = new Fruit({
//     name: "Orange",
//     score: 4,
//     review: "To sour for me"
// })

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Wierd texture."
// })

// Fruit.insertMany([kiwi,orange,banana], function(err){
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });


Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{

        mongoose.connection.close(); 

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "6103f2fd3dad710670f9f90d"}, {name: "Peach"}, function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Successfully updated the document.");
//     }
// });

// Fruit.deleteMany({review: "Peaches are so yummy!."}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted the document.");
//     }
// });

// People.deleteMany({name: "Nicoleta"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted many of Nico's!");
//     }
// });