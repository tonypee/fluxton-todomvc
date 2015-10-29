# Fluxton TodoMVC Example

A copy of [flux-todomvc](https://github.com/facebook/flux/tree/master/examples/flux-todomvc) using [Fluxton](https://github.com/tonypee/fluxton)

## Overview

Fluxton forces a store to only have a single immutatble value, and a single action. This means that a 'change' can be generated and pass through the flux Dispatcher with less boilerplate. Stores can still listen for eachother and 'waitFor' the change actions of other stores if needed (no in this simple example).

This is what a running Flux TodoMVC example looks like:
<img src="screenshot.png" style="width: 100%;" />

## TodoMVC Example Implementation

In this TodoMVC example application, we can see the elements of Flux in our directory structure. Views here are referred to as "components" as they are React components. Flux 'Actions' and 'Stores' are managed by in a 'model' class.

<pre>
./
  index.html
  js/
    app.js
    bundle.js
    components/
      Footer.react.js
      Header.react.js
      MainSection.react.js
      TodoApp.react.js
      TodoItem.react.js
      TodoTextInput.react.js
    models/
      todos.js
</pre>

todos.js contains the logic for generating 'change' actions which will modify the state. As the store uses immutatble.js, the store's value is not mutated until the change has passed through the flux Dispatcher. This is handled by fluxton via calling the 'change' method on the store.

## Running

You must have [npm](https://www.npmjs.org/) installed on your computer.
From the root project directory run these commands from the command line:

    npm install

This will install all dependencies.

To build the project, first run this command:

    npm start

This will perform an initial build and start a watcher process that will update bundle.js with any changes you wish to make.  This watcher is based on [Browserify](http://browserify.org/) and [Watchify](https://github.com/substack/watchify), and it transforms React's JSX syntax into standard JavaScript with [Reactify](https://github.com/andreypopp/reactify).

To run the app, spin up an HTTP server and visit http://localhost/.../todomvc-flux/.  Or simply open the index.html file in a browser.


## License
Flux is BSD-licensed. We also provide an additional patent grant.
