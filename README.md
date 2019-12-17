# zeitplan

A precise timetable of tasks for the German within every one of us.

## Description

_Zeitplan_ is a simple webpage that keeps track of your tasks down to the minute. To set it up, you add individual tasks with durations to the timetable, adjusting the start time if necessary. Once it has been set up, _Zeitplan_ will notify the user when a new task has started; it will also highlight the currently active task in the timetable.

## Setup

Most of the following scripts require `rlwrap` (on OS X installable via brew).

Build your project once in dev mode with the following script and then open `index.html` in your browser.

    ./scripts/build

To auto build your project in dev mode:

    ./scripts/watch

To start an auto-building Node REPL:

    ./scripts/repl

To get source map support in the Node REPL:

    lein npm install
    
To start a browser REPL:
    
1. Uncomment the following lines in src/zeitplan/core.cljs:
```clojure
;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))
```
2. Run `./scripts/brepl`
3. Browse to `http://localhost:9000` (you should see `Hello world!` in the web console)
4. (back to step 3) you should now see the REPL prompt: `cljs.user=>`
5. You may now evaluate ClojureScript statements in the browser context.
    
For more info using the browser as a REPL environment, see
[this](https://github.com/clojure/clojurescript/wiki/The-REPL-and-Evaluation-Environments#browser-as-evaluation-environment).
    
Clean project specific out:

    lein clean
     
Build a single release artifact with the following script and then open `index_release.html` in your browser.

    ./scripts/release

## Why is there compiled JS in the repo?

Because this repo is directly connected to Netlify, which hosts it on https://zeitplan.netlify.com. Maybe I can eventually figure out how to have Netlify build it instead.

## License

Distributed under the MIT License.