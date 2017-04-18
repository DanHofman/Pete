import { StoryPagePage } from './app.po';

describe('story-page App', () => {
  let page: StoryPagePage;

  beforeEach(() => {
    page = new StoryPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SP works!');
  });
});
