const express = require("express")
const app = express()

console.log('He')

app.use("/", (req, res) => {
    console.log("hey this is")
})

app.listen("5000", () => {
    console.log("Back end is running")
})
