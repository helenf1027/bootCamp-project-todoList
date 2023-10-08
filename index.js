import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(req.body);
  res.render("index.ejs");
});

app.post("/today", (req, res) => {
  let title = req.body.todayTodo;
  console.log(req.body, title);
  res.render("index.ejs", { title: title });
});

app.post("/workTodo", (req, res) => {
  res.locals.workTodo = req.body.workTodo;
  let title = req.body.workTodo;
  res.render("index.ejs", { title: title });
});

// app.post("/homeList", (req, res) => {
//   console.log(req.body, req.body["homeItem"], req.body["workItem"]);
//   res.locals;

//   // if work item add, the home item will be undifined
//   if (req.body.hasOwnProperty("homeItem") && req.body["homeItem"].length > 0) {
//     hItemList.push(req.body["homeItem"]);
//   } else if (
//     req.body.hasOwnProperty("workItem") &&
//     req.body["workItem"].length > 0
//   ) {
//     wItemList.push(req.body["workItem"]);
//   }

//   res.render("index.ejs", { hItemList, wItemList });
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
