### What is this?
This is an example set of test for demo purposes. In comparison to the real app, the build process is
simplified by having angular code directly in the app, so there are no steps concating that they are
just referenced directly. Additionally, there is no styling, the UI is kept to a bare minimum so you
can see what it does rather than being fancy. t
The main thing here are the unit and end to end test - designed to demo how these work.

### Prerequisites

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).
You will need the Grunt CLI install, The Karma CLI and PhantomJS installed on your machine. Google for these.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/`.



## Directory Layout

```
.grunt/                 --> the files for the indivdual grunt tasks
app/                    --> all of the source files for the application
  bower_components/     --> The bower components used by the app - angular and angular mocks
  scripts/              --> scripts for the angular app
      directives/            --> angular directives are placed here
      filters/               --> angular filters are placed here
      services/              --> angular services are placed here
      modules.js             --> The modules are initialised in this file
      controller.js          --> The controller lives here
      interpolate-filter_test.js --> interpolate filter tests
  index.html            --> app layout file (the main html template file of the app)
bower.json            --> bower config file showing which bower components are needed
package.json          --> information about the current package, including its npm dependencies
karma.conf.js         --> config file for running unit tests with Karma
tests/                --> test code folder
  e2e-tests           --> contains the code for the end to end tests
  unit-tests          --> contains the code for the unit tests
    mocks.js              --> The mocks used by the unit tests.

```

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

These are written in
[Mocha] and use the [chai] assertion library, which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them and define what it executed in the grunt task

* the configuration is found at `karma.conf.js`
* the grunt tasks can be found in `.grunt/grunt-karma-tasks.js` and `.grunt/grunt-protractor-runner.js`


To start the server run
grunt
```

To run the unit tests
grunt unit-test
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.





### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
