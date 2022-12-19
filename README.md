# LAB - 401-D49 Lab-16

## Project: Cloud-server

### Author: Lewis Benson

### Problem Domain

Build a basic express server, and deploy it to AWS using GUI, and beanstalk CLI

### Links and Resources

- [ci/cd]() (GitHub Actions)
- [server-prod]()

### Setup

#### `.env` requirements (where applicable)

There are no env requirements

- PORT is set to process.env or 3001.
  Application will run locally or deployed to AWS without setting any parameters manually

#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature one: Deploy to AWS

- GET : `/` - specific route to hit
- GET : `/bad` - specific route to hit
- GET : `/people?name=string` - specific route to hit (string can be replaced with a name)

- Feature two: Deploy with Beanstalk CLI

#### Tests

- How do you run tests?
  - npm test
- Any tests of note?
  - handles root path
  - handles invalid paths
  - handles error code 500
- Describe any tests that you did not complete, skipped, etc

#### UML

![UML](./assets/uml.png)
Link to an image of the UML for your application and response to events
# cloud-server
