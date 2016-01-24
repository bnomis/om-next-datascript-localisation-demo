# Om Next DataScript Localisation Demo

https://bnomis.github.io/om-next-datascript-localisation-demo/

Demo of localisation with [Om Next][om] and [DataScript][ds].

There's a video demo here: https://youtu.be/-E2Z9bca4-w

A blog post about this project is here: http://www.simonb.com/blog/2016/01/24/om-next-datascript-localisation-demo/

### Hire Me

*ps:* I'm available for hire remotely or in Shanghai. Thanks.

## About

[Om Next][om] is a [ClojureScript][cljs] wrapper around [React][react].

[DataScript][ds] is a [ClojureScript][cljs] implementation of [Datomic][datomic].

This project uses:

* [Leiningen][lein] for building and running tests
* [Figwheel][fig] for interactive development
* [doo][doo] to provide a JavaScript environment for non-ui testing

## Running

To run in development mode:

`lein figwheel`

Point your browser at http://127.0.0.1:3449/

## Building

To build everything:

`lein cljsbuild once`

To build just the production (prod) build:

`lein cljsbuild once prod`


## Logging

There is extensive logging in the code. This is useful for development and figuring out how Om Next works. But...

When logging is on...

* there will be a lot of output to the console
* the app runs slower

### To Turn Logging On/Off

Edit the file `logging.cljc` to set the `logging-is-on` variable to true/false.

## Testing

Currently only string interpolation is tested.

To run the tests (in this example using [node][node] as the JavaScript engine):

`lein doo node test`


[doo]: https://github.com/bensu/doo
[node]: https://nodejs.org/en/
[om]: https://github.com/omcljs/om
[ds]: https://github.com/tonsky/datascript
[react]: http://facebook.github.io/react/
[cljs]: https://github.com/clojure/clojurescript
[datomic]: http://docs.datomic.com/
[lein]: https://github.com/technomancy/leiningen/
[fig]: https://github.com/bhauman/lein-figwheel
