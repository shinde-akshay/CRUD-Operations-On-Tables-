var FlowerController=require("./controllers/flowerscontroller");
var OrderDetailController=require("./controllers/orderdetailscontroller");
var OrderController = require("./controllers/ordercontroller");
var CustomerController = require("./controllers/customerscontroller");

module.exports=function(app){
    app.route("/api/Orders")
    .get(OrderController.getAll)
    .post(OrderController.insert)

    app.route("/api/Orders/:id")
    .get(OrderController.getBy)
    .put(OrderController.update)
    .delete(OrderController.remove)
    
   
    app.route("/api/Orderdetails")
    .get(OrderDetailController.getAll)
    .post(OrderDetailController.insert);

    app.route("/api/Orderdetails/:id")
    .get(OrderDetailController.getBy)
    .put(OrderDetailController.update)
    .delete(OrderDetailController.remove);

    app.route("/api/Customers")
    .get(CustomerController.getAll)
    .post(CustomerController.insert)

    app.route("/api/Customers/:id")
    .get(CustomerController.getBy)
    .put(CustomerController.update)
    .delete(CustomerController.remove)

    app.route("/api/Flowers")
    .get(FlowerController.getAll)
    .post(FlowerController.insert)

    app.route("/api/Flowers/:id")
    .get(FlowerController.getBy)
    .put(FlowerController.update)
    .delete(FlowerController.remove)

};