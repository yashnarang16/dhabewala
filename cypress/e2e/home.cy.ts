describe('Home page', function () {
  it('renders correctly', function () {
    // Go to home page
    cy.visit('/');

    // Verify that the correct title is rendered
    cy.contains('Dhabewala');

    // Verify that 10 movies are rendered
    const card = cy.get('div>.max-h-80');
    card.should('have.length', 5);
  });
});

describe('Home page > ItemCard Component', function () {
  it('click on "Add to Cart" button to add in cart list', function () {
    // Go to home page
    cy.visit('/');
    const cardButton = cy.get('button.bg-amber-800:first');
    cardButton.click();
    // check cart list

    const cart = cy.get('ul>li')
    cart.should('have.length', 1);
    cart.should('contain.text','Burger');
  });
});

describe('Home page > Cart Component', function () {
  it('click on Add icon to add item in cart itself - cart value will change', function () {
    // Go to home page
    cy.visit('/');
    const cardButton = cy.get('button.bg-amber-800:first');
    cardButton.click();
    const cartAddButton = cy.get('svg.cursor-pointer:last');
    cartAddButton.click();
    // check cart list

    const cart = cy.get('ul>li')
    cart.should('have.length', 1);
    cart.should('contain.text','2');
  });
});
