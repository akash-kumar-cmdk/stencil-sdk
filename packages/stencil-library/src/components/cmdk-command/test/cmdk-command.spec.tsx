import { newSpecPage } from '@stencil/core/testing';
import { CmdkCommand } from '../cmdk-command';

describe('cmdk-command', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmdkCommand],
      html: `<cmdk-command></cmdk-command>`,
    });
    expect(page.root).toEqualHtml(`
      <cmdk-command>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmdk-command>
    `);
  });
});
