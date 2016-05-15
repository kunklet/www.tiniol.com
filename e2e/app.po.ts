export class TiniolPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tiniol-app h1')).getText();
  }
}
