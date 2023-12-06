//MIddlewares
//Middleware are used to act as a middle part in Express routes. Like other Routes where is req, and
// res in middleware there's a third parameter which is a next, when we define the middleware and then
// call it into the route then if there are multiples middlewares then middleware call itself in order.
//like first middleware will call then when second middleware will call itself the in first middleware
// it will use next parameter call.
//The other way to call the middleware is to app.use method through this method we will not have need to
//pass it again and again into the route path we can call it directly,
// third thig is error handleing in middleware we will create the functiona and then will pass it into
//app.use if any incorect code will pass into the middleware code then it throws the error.
//third thing is we can even pass any custom value using req.varivable name and then call it into our
//res.send or console.log///
// //

const express = require("express");
const app = express();

// Middleware Starts

const middleWareStarts = (reqObject, resObject, next) => {
  reqObject.custom = 200;
  resObject.send(
    `This is MiddleWare Function value is ${reqObject.custom} OK Status`
  );
  console.log(`I am middleware start`);

  next();
};

//List of MiddleWares

const middleWareOne = (req, res, next) => {
  console.log(`I am middleware one`);
  //next is used to stop the renderinng if we do not call the next function then it will not show the next middleware
  //and continusely the render the first one.
  next();
};
const middleWareTwo = (req, res, next) => {
  console.log(`I am middleware two`);
  next();
};

//Error Handler in Express Middleware
const errHandler = (err, req, res, next) => {
  if (err) {
    res.send(`Error is Occuring..........`);
  }
};

app.use(middleWareOne);
app.use(middleWareTwo);
app.use(middleWareStarts);
app.use(errHandler);

app.get("/", middleWareStarts);

const PORT = 4000;
app.listen(PORT);

// const express = require("express");
// const app = express();

// const middlewareone = (req, res, next) => {
//   console.log("I am middleware one");
//   req.customValue = 500;
//   next();
// };
// const middlewaretwo = (req, res, next) => {
//   console.log(`I am middleware two ${req.customValue}`);
//   req.customValue = 800;
//   next();
// };
// const middlewarethree = (req, res, next) => {
//   console.log("I am middleware three");
//   next();
// };

// const errorHandler = (err, req, res, next) => {
//   if (err) {
//     res.send(`<h1>There is a Error</h1>`);
//   }
// };
// app.use(middlewareone);
// app.use(middlewaretwo);

// // const standardExpressCallback = (
// //   requestObject,
// //   responseObject,
// //   nextMiddleware
// // ) => {
// //   responseObject.send(`<h2>Hellow MiddleWare</h2>`);
// //   console.log("I am standard middleware");
// //   nextMiddleware();
// // };

// app.get("/", middlewarethree, (req, res) => {
//   res.send(`The value is ${req.customValue}`);
//   console.log("standard middleware");
// });

// app.use(errorHandler);

// const PORT = 4000;
// app.listen(PORT);
