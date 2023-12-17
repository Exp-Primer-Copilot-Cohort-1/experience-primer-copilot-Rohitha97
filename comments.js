// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
app.get('/comments', function(req, res) {
    res.send('GET request to the comments');
});

app.post('/comments', function(req, res) {
    res.send('POST request to the comments');
});

app.put('/comments/:id', function(req, res) {
    res.send('PUT request to the comments');
});

app.delete('/comments/:id', function(req, res) {
    res.send('DELETE request to the comments');
});

// Path: users.js
// Create web server
// http://localhost:3000/users
// http://localhost:3000/users/1
app.get('/users', function(req, res) {
    res.send('GET request to the users');
});

app.post('/users', function(req, res) {
    res.send('POST request to the users');
});

app.put('/users/:id', function(req, res) {
    res.send('PUT request to the users');
});

app.delete('/users/:id', function(req, res) {
    res.send('DELETE request to the users');
});

// Path: index.js
// Create web server
// http://localhost:3000
app.get('/', function(req, res) {
    res.send('GET request to the homepage');
});

app.post('/', function(req, res) {
    res.send('POST request to the homepage');
});

app.put('/', function(req, res) {
    res.send('PUT request to the homepage');
});

app.delete('/', function(req, res) {
    res.send('DELETE request to the homepage');
});

// Path: *
// Create web server
// http://localhost:3000/*
app.get('*', function(req, res) {
    res.send('GET request to the any');
});

app.post('*', function(req, res) {
    res.send('POST request to the any');
});

app.put('*', function(req, res) {
    res.send('PUT request to the any');
});

app.delete('*', function(req, res) {
    res.send('DELETE request to the any');
});

// Create web server
// http://localhost:3000
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
