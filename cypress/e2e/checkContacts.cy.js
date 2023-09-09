import Google from '../pageObjects/google.pageObject';
import Byndyusoft from '../pageObjects/byndyusoft.pageObject';

describe("Check contacts on 'Know more' pop-up", () => {
  it("Assertion email", () => {
    const searchText = "Byndyusoft";
    const url = "https://www.google.ru/";
    const assertionEmail = "sales@byndyusoft.com";

    const google = new Google();
    google.visit(url);
    google.typeSearchText(`${searchText}{enter}`);

    google.getFirstSearchResultLink().then(($a) => {
      const href = $a.attr('href');
      const byndyusoft = new Byndyusoft();
      byndyusoft.visit(href);
      byndyusoft.clickKnowMoreButton(href).then((email) => {
        const trimmedEmail = email.trim();
        expect(trimmedEmail).to.equal(assertionEmail);
      });
    });
  });
});