import express from 'express'

const app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000!!')
})



// npm install -D nodemon
// npm install -D typescript @types/express
// npm install -D ts-node