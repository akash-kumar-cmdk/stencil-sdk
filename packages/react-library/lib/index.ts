'use strict';

module.exports = reactLibrary;
export * from './components/stencil-generated';
export { defineCustomElements } from "stencil-library/loader";

function reactLibrary() {
  return 'Hello from reactLibrary';
}
