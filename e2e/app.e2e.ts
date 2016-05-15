import { TiniolPage } from './app.po';

describe('tiniol App', function() {
  let page: TiniolPage;

  beforeEach(() => {
    page = new TiniolPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tiniol works!');
  });
});
