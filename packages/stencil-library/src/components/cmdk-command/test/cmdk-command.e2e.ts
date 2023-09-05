import { newE2EPage } from '@stencil/core/testing';

describe('cmdk-command', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmdk-command></cmdk-command>');

    const element = await page.find('cmdk-command');
    expect(element).toHaveClass('hydrated');
  });
});
