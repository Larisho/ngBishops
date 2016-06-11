import { NgBishopsPage } from './app.po';

describe('ng-bishops App', function() {
  let page: NgBishopsPage;

  beforeEach(() => {
    page = new NgBishopsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-bishops works!');
  });
});
