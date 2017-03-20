import { SmallAppPage } from './app.po';

describe('small-app App', () => {
  let page: SmallAppPage;

  beforeEach(() => {
    page = new SmallAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
