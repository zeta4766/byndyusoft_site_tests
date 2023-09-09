class Byndyusoft {
  visit(url) {
    cy.visit(url);
    cy.origin(url, () => { });
  }

  clickKnowMoreButton(url) {
    return cy.origin(url, () => {
      cy.get('.knowMore').find('.btn').click();
      return cy.get('.popup-callback__content').find('a').first().invoke('text');
    });
  }
}

export default Byndyusoft;