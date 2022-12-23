import app from "./src/app.js";
const port = process.env.Port  || 3000;



app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});