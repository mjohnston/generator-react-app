"use strict";

require('./<%= _.slugify(name) %>.less');

var React = require('react');

var <%= _.classify(name) %> = React.createClass({

    // React spec
    // ==========

    render: function () {
      return (
        <div className='<%= _.slugify(name) %>'>

        </div>
      );
    }

});

module.exports = <%= _.classify(name) %>;
