# Distributed Micro-Frontends Sample
This is the mono-repo for cfryerdev's article: Distributed (Multi-Language) Microfrontends [DFE]

Demo: [www.cfryerdev-mfe.info](http://www.cfryerdev-mfe.info/)

## What is this
This is a functional example of distributed micro-frontends hosted in AWS Cloud. The application is broken up into 4 parts written in Angular, React, Vanill JS, and Vue. Please see article [TBD] for more information about this sample application.

## Application Folders

* **app-login**: (VueJS) This is the application that stores a username in state so that other apps and components can use it. This uses cookies, simply for simplicity sake.
* **app-home**: (React) This is the application that users land on when first visiting the app.
* **app-about**: (Angular 9) ...
* **app-products**: (React) This is a portion of the app that requires you to be logged in and displays days from a mock api.

## Package Folders

* **_package-js-cookiestate**: (Vanilla JS) This is a library built to manage state via cookies.
* **_package-react-footer**: (React) This is a npm package for a footer component written in react.
* **_package-angular-footer**: (Angular 9) This is a npm package for a footer component written in angular.
* **_package-react-navigation**: (React) This is a npm package for a navigation component written in react.
* **_package-angular-navigation**: (Angular 9) This is a npm package for a navigation component written in angular.

## Deploying from local

1) Install AWS CLI
2) Install Terraform
3) Install Node / NPM
4) Log into aws cli by running: `aws configure` -> [Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
5) Clone this directory and navigate to it
6) Navigate to each package directory and edit `deploy.sh` for your requirements then execute `./deploy.sh`
7) Navigate to each app directory and edit `main.tf` & `deploy.sh` for your domain requirements then execute `./deploy.sh`