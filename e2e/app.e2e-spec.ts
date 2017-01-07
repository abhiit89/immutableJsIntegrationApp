import { ImmutableJsIntegrationAppPage } from './app.po';

describe('immutable-js-integration-app App', function() {
  let page: ImmutableJsIntegrationAppPage;

  beforeEach(() => {
    page = new ImmutableJsIntegrationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
