console.log("Routes");

var users = require("./../controllers/users.js");

module.exports = function(app){
app.get('/user', function(req, res) {
  customers.index(req, res);
});
app.post('/customers', function(req, res) {
  customers.create(req, res);
});
app.delete('/customers/:id/destroy', function(req, res) {
  customers.destroy(req, res);
});
app.get('/products', function(req, res) {
  products.retrieve(req, res);
});
app.get('/orders', function(req, res) {
  orders.retrieve(req, res);
});
app.post('/products', function(req, res) {
  products.create(req, res);
});
app.post('/orders', function(req, res) {
  orders.create(req, res);
});
}
