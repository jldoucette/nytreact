// Include React
var React = require("react");


var Saved = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Article Name</h1>
        </div>
           <div className="panel-body text-center">
          <h1>Notes</h1>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;