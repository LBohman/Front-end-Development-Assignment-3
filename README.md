# Pokémon Trainer App
This project is a web application for Pokémon Trainers using the Angular Framework. The app allows users to collect Pokémon and view their collection.
## Features
1. Login page: The first page the user sees is the “Login page” where the user must enter their “Trainer” name. The app saves the Trainer name to the Trainer API and in local or session storage. The app then redirects to the main page, the Pokémon Catalogue page.
2. Trainer Page: The Trainer page lists the Pokémon that the trainer has collected. For each collected Pokémon, the name and image is displayed. Users can also remove a Pokémon from their collection from the Trainer page.
3. Pokémon Catalogue Page: The Catalogue page lists the Pokémon name and avatar. It is recommended to store all the Pokémon in session storage to reduce the number of requests to the PokeAPI. The Catalogue page includes a button for each Pokémon that, when clicked, adds the Pokémon to the trainer’s collection and updates the Trainer API.
4. Show More Info: You can optionally add a details section to each Pokémon that is only shown when a “Show more info” button is clicked. Here you can add information like the Pokémon's base stats and abilities.

## Getting Started
- Clone the repository
- bashCopy code
- git clone https://github.com/[username]/pokemon-trainer-app.git
- Install the dependencies
- Copy code
- npm install
- Run the app
- Copy code
- ng serve

## Note
This app uses the PokeAPI for data and requires an internet connection.

## License
This project is licensed under the MIT License.

# NgPokemonArifLovisa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
