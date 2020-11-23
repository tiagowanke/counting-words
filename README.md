# CountingWords

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Run with docker
Run `docker build -t counting-words-image .` to build an image.
Run `docker run -p 4200:4200 --rm -it --name counting-words-app counting-words-image` to run a container.
Navigate to `http://localhost:4200`.
