import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import RestaurantController from "./controller/RestaurantController";


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.status(200);
    response.sendFile(path.resolve(__dirname, "index.html"));
});


app.get("/list", (request, response) => {
    const results = RestaurantController.getList();
    if (results.error) {
        response.status(404);
    } else {
        response.status(200);
    }
    response.json(results);
});

app.get("/detail/:id", (request, response) => {
    const results = RestaurantController.getRestaurantById(request.params.id);
    if(results.error) {
        response.status(400);
    } else {
        response.status(200);
    }
    response.json(results);
});

app.post("/review", (request, response) => {
    const review = {
        id: request.body.id,
        name: request.body.name,
        review: request.body.review,
        date: "13 November 2019"
    };

    const results = RestaurantController.addReview(review);
    if(results.error) {
        response.status(404);
    } else {
        response.status(200);
    }
    response.json(results);
});

app.listen(process.env.PORT || 5000);
