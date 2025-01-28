const express = require('express');
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: 'Positive Newsletter, a newsletter that only shares uplifting news',
    tag: 'Technology',
    username: 'Dr House',
    date: '28-01-2025',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older the milk is',
    tag: 'Technology',
    username: 'Dr Foreman',
    date: '16-01-2025',
  },
  {
    id: 3,
    text: 'Vicodin pills that dont make you high',
    tag: 'Technology',
    username: 'Dr Cuddy',
    date: '13-12-2024',
  },
];

app.get('/', (request, response) => {
  response.json({ message: 'Welcome, this is the randomideas api' });
});

// get all ideas
app.get('/api/ideas', (request, response) => {
  response.json({ success: true, data: ideas });
});

// get idea by id
app.get('/api/ideas/:id', (request, response) => {
  const idea = ideas.find((idea) => idea.id === +request.params.id);

  if (!idea) {
    return response
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  response.json({ success: true, data: idea });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
