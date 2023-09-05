import { Component, Element, h } from '@stencil/core';
import ReactDOM from 'react-dom';
import { Command } from '../../../../react-library'; // Import your existing React component

@Component({
  tag: 'cmdk-command',
})

export class CmdkCommand {
  @Element() hostElement: HTMLElement;

  componentDidLoad() {
    const container = this.hostElement.querySelector('.react-container');
    ReactDOM.render(<Command />, container);
  }

  render() {
    return <div class="react-container"></div>;
  }
}
