class Google {
  visit(url) {
    cy.visit(url);
  }

  typeSearchText(text) {
    cy.get('#APjFqb').type(`${text}{enter}`);
  }

  getFirstSearchResultLink() {
    return cy.get('#search').find('a').first();
  }
}

export default Google;