import { ConciergeAppPage } from './app.po';

describe('concierge-app App', () => {
  let page: ConciergeAppPage;

  beforeEach(() => {
    page = new ConciergeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
