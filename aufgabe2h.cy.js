describe('Amazona Login Test', function() {
    it('Login', function() {
      cy.visit('https://localhost:/login') // Ändern Sie die URL zu Ihrer echten Amazona-Login-Seite
      cy.get('#BenutzernameFeldID').type('user@example.com') // Benutzen Sie die richtige ID für das Benutzername-Feld
      cy.get('#PasswortFeldID').type('1234') // Benutzen Sie die richtige ID für das Passwort-Feld
      cy.get('#LoginButtonID').click() // Benutzen Sie die richtige ID für den Login-Button
    })
  })
  
  