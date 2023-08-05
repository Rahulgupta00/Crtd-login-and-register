const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nodeapp:nodeapp@cluster0.repk0lx.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));

    