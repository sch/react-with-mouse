import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

var pkg = require('./package.json')

export default {
  moduleName: 'ReactWithMouse',
  external: ['react'],
  entry: 'src/react-with-mouse.js',
  plugins: [nodeResolve(), commonjs()],
  sourceMap: true,
  targets: [
    { dest: pkg['main'], format: 'umd' },
    { dest: pkg['jsnext:main'], format: 'es' },
  ]
};
