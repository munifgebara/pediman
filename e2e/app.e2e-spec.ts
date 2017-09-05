import { PedimanPage } from './app.po';

describe('pediman App', () => {
  let page: PedimanPage;

  beforeEach(() => {
    page = new PedimanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
