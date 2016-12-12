React With Mouse
================

A higher order component for returning the mouse position as a ratio of the
component's size.

Installation and usage
----------------------

Add `react-with-mouse` to your package.json dependencies.

When defining your component, use the `withMouse` function to wrap the
declaration. This will provide your component with a `mouse` object, that has
a `ratio` property with `x` and `y` offsets as a decimal fraction representing
the mouse postion relative to the size of the containing element.

```js
import React from "react";
import withMouse from "react-with-mouse";

var DisplayRatio = withMouse(function (props) {
  var left = props.mouse.ratio.x * 100 + "%";
  var top = props.mouse.ratio.y * 100 + "%";
  return React.createElement("div", null, "(", left, ", ", top, ")");
});
```
