const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModal = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/DBproject4?directConnection=true');

app.get('/', (req, res) => {
  UserModal.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err));
})

app.post('/createUser', (req, res) => {
  UserModal.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err));
});

app.get('/getUser/:id', (req, res) => {
  const { id } = req.params.id;
  UserModal.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err));
})

app.put('/updateUser/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  UserModal.findByIdAndUpdate(id, { name, email, age }, { new: true })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const { id } = req.params;
  UserModal.findByIdAndDelete({ _id: id })
    .then(deletedUser => res.json(deletedUser))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log('Server has started!');
})