export class NgBishopsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-bishops-app h1')).getText();
  }
}
