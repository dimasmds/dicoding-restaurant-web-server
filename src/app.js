import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import RestaurantController from './controller/RestaurantController';
import { getTodayDate } from './utils/date-generator';
import store from './redux/store';

const restaurantController = new RestaurantController(store);

const app = express();

app.use(cors());
app.use(express.static('images'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.status(200);
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/images/small/:imageId', (request, response) => {
  response.status(200);
  response.set('Cache-Control', 'public, max-age=31557600');
  response.set({ 'Content-Type': 'image/jpeg' });
  response.sendFile(path.resolve(__dirname, `images/small/${request.params.imageId}.jpg`));
});

app.get('/images/medium/:imageId', (request, response) => {
  response.status(200);
  response.set('Cache-Control', 'public, max-age=31557600');
  response.set({ 'Content-Type': 'image/jpeg' });
  response.sendFile(path.resolve(__dirname, `images/medium/${request.params.imageId}.jpg`));
});

app.get('/images/large/:imageId', (request, response) => {
  response.status(200);
  response.set('Cache-Control', 'public, max-age=31557600');
  response.set({ 'Content-Type': 'image/jpeg' });
  response.sendFile(path.resolve(__dirname, `images/large/${request.params.imageId}.jpg`));
});

app.get('/list', (request, response) => {
  const results = restaurantController.getList();
  if (results.error) {
    response.status(404);
  } else {
    response.status(200);
  }
  response.json(results);
});

app.get('/detail/:id', (request, response) => {
  const results = restaurantController.getRestaurantById(request.params.id);
  if (results.error) {
    response.status(400);
  } else {
    response.status(200);
  }
  response.json(results);
});

app.post('/review', (request, response) => {
  const review = {
    id: request.body.id,
    name: request.body.name,
    review: request.body.review,
    date: getTodayDate(),
  };

  const results = restaurantController.addReview(review);
  if (results.error) {
    response.status(404);
  } else {
    response.status(200);
  }
  response.json(results);
});

app.get('/search', (request, response) => {
  const query = request.query.q;

  const result = restaurantController.searchRestaurants(query);

  response.status(200);
  response.json(result);
});

app.get('/restart', () => {
  process.exit(1);
});

app.listen(process.env.PORT || 5000);
