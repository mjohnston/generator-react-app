/** @jsx React.DOM */

"use strict";

require('./app.less');

var React = require('react');

var App = React.createClass({

  // React spec
  // ==========

  render: function () {
    return (
      <h1>Generated by React App Generator</h1>
    );
  }

});

React.initializeTouchEvents(true);
React.renderComponent(<App />, document.getElementById('main'));

