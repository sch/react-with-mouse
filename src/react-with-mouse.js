import React from 'react';
import throttle from 'lodash.throttle';

// A hiher-order component that provides the mouse's position over the child
// as a ratio of the parent's width and height.
export default function withMouseRatio (WrappedComponent) {
  return React.createClass({
    componentWillMount: function () {
      this.setMouseRatio = throttle(this.setMouseRatio, 16);
    },

    getInitialState: function () {
      return {
        ratio: { x: 0, y: 0 }
      };
    },

    handleMouseMove: function (event) {
      this.setMouseRatio(event.clientX, event.clientY);
    },

    setMouseRatio: function (clientX, clientY) {
      var element = this.element.getBoundingClientRect();
      this.setState({
        ratio: {
          x: clientX / element.width,
          y: clientY / element.height
        }
      });
    },

    setRef: function (instance) {
      this.element = instance;
    },

    render: function () {
      var props = Object.assign({ mouse: this.state }, this.props);
      var wrappedComponent = React.createElement(WrappedComponent, props);
      return React.createElement('div', {
        onMouseMove: this.handleMouseMove,
        ref: this.setRef
      }, wrappedComponent);
    }
  });
}
