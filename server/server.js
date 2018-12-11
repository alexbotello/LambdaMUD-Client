import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

let app = express();

// 3rd party middleware
app.use(cors());
app.use(bodyParser());

app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

export default app;
