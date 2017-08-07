var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Main = require("./components/Main");
// import Search from "../components/Saved";
// import Saved from "../components/Search";

module.exports  = (

  <Router history={hashHistory}>

    <Route path="/" component={Main}>


      <Route path="Main" component={Main} >

        {/* <Route path="Saved" component={Saved} />
        <Route path="GrandChild2" component={Search} />

        <IndexRoute component={Saved} /> */}

      {/* </Route> */}

      <IndexRoute component={Main} />

    </Route>
  </Router>
);
