
import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

const port = 4444;

const router = express.Router();

const _Department_master = [
  {
    id: "IT",
    Name: "Information Tech",
  },
  {
    id: "HR",
    Name: "Human Resources",
  },
  {
    id: "MET",
    Name: "Merchandising",
  },
  {
    id: "MAN",
    Name: "manufacturing"
  }
];

const _Department_details = [
  {
    id: "IT",
    description:"",
    numberOfEmployees: 100,
    location: "Atlanta"
  },
  {
    id: "HR",
    description:"",
    numberOfEmployees: 20,
    location: "New York"
  },
  {
    id: "MET",
    description:"",
    numberOfEmployees: 500,
    location: "Philadelphia"
  },
  {
    id: "MAN",
    description:"",
    numberOfEmployees: 100,
    location: "Delaware"
  }
];


router.get("/departments", (req, res) => {
  const filters = req.query;
  console.log("GET /departments", );
  res.json(_Department_master);
});

// const talks = filteredTalks.reduce((acc, t) => (acc[t.id] = t, acc), {});
// const list = filteredTalks.map(t => t.id);

// res.json({ talks, list });
// });

router.get("/department", (req, res) => {
  const id = +req.query.id;
  console.log("GET /department", "id:", id);
  const department = _Department_details.filter(dept => dept.id === id.toString())[0];
  res.json({ department });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(port);

console.log(`Server port: ${port}`);