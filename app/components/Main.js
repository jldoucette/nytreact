
var React = require("react");


var Saved = require("./Saved");
var Search = require("./Search");
var helpers = require("./utils/helpers")

// var helpers = require("./utils/helpers");

var Main = React.createClass({


  getInitialState: function() {
    return { searchTerm: "", results: "", articles: [] };
  },

  componentDidMount: function() {

    console.log("componentDidMount ran");
    // helpers.runSearch().then(function(response) {
    //   console.log(response);
    //   if (response !== this.state.articles) {
    //     console.log("Articles", response.data);
    //     this.setState({ articles: response.data });
    //   }
    // }.bind(this));
  },

  componentDidUpdate: function() {

    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Articles", data);
        this.setState({ results: data });

        helpers.postArticles(this.state.searchTerm).then(function() {
          console.log("Updated!");

          helpers.getSaved().then(function(response) {
            console.log("Saved articles", response.data);

            this.setState({ articles: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },

  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">NYTArticles!</h2>
          </div>
     </div>
    
         <div className="row">
   <Search />
          </div>

  
        <div className="row">
        <Saved />
        </div>

      </div>
    );
  }
});

module.exports = Main;
