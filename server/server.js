import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

let app = express();

// 3rd party middleware
app.use(cors());
app.use(bodyParser());

app.listen(5003, () => {
  console.log("Server listening on port 5005");
  console.log("lets test if this linter commit works");
  console.log("hellosds");
  console.log("blah");
})

export default app;
