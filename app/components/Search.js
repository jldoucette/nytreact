var React = require("react");
var Results = require("./Results");

var Search = React.createClass({
      // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { searchterm: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ searchterm: event.target.value });

  },

 handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.searchterm);
    this.setState({ searchterm: "" });
  },
  render: function() {
    return (
      <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
                </div>
         
                <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">

              <label for="searchterm">Topic</label>
              <input 
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="searchterm"
                onChange={this.handleChange}
                required
              />
              {/* <label for="startyear">Start Year</label>
                 <input 
              value="TempValue"
                type="text"
                className="form-control text-center"
                id="startyear"
                onChange={this.handleChange}
                required
              />
              <label for="endyear">End Year</label>
                 <input 
              value="TempValue"
                type="text"
                className="form-control text-center"
                id="endyear"
                onChange={this.handleChange}
                required
              /> */}

              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
            </div>
            <Results />
      </div>
    );
  }
});

module.exports = Search;
