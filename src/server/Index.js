var express = require("express");
var app = express();
var mongoose = require("mongoose");

//Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/admin", { useNewUrlParser: true });
var Schema = mongoose.Schema;
var userDetailsSchema = new Schema({
    name: {type: String},
    location: {type: String},
    Company: {type: String},
    doj: {type: String}
});
var users = mongoose.model('users', userDetailsSchema);

//GraphQL
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id: String
        name: String
        Company: String
        location: String
        doj: String
    }
    type Query {
        getUsers: [User]
    }
`;
const resolvers = {
    Query: {
        getUsers: async () => await users.find({}).exec()
    }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

var port = process.env.PORT || 8084;
app.listen(port, function() {
    console.log("Running vueApp on port " + port);
});




