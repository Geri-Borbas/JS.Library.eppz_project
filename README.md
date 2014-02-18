One time
========


Ruby
----
[Ruby](https://www.ruby-lang.org/en/downloads/)
```
# Test Ruby
ruby -v
```


Node.js
-------
[Node.js](http://nodejs.org/)


SASS
----
```
[sudo] gem install sass
```


Compass
-------
```
[sudo] gem install compass
```


Grunt
-----
```
[sudo] npm install -g grunt-cli
```



Per project
===========


[`package.json`](https://github.com/eppz/eppz-project/blob/master/package.json)
----------------
Configuration file for Node package manager (override project specific stuff).


Grunt
-----
```
[sudo] npm install
```


[`Grunfile.js`](https://github.com/eppz/eppz-project/blob/master/Gruntfile.js)
---------------
Configuration file for GruntJS (override project specific stuff).


[`.gitignore`](https://github.com/eppz/eppz-project/blob/master/.gitignore)
--------------
Untrack temporary files.


Mocha
-----
Create `Tests` folder like below. Put test into `Suite` folder.


Folders
-------
Create directory structure like below.
```
.
├── assets
├── build
|   ├── derived
|   └── UI // Same relative position to `assets` as `UI/scss`
├── Classes
|   ├── eppz!js
|   |   └── eppz!js.min.js // optional
|   └── <ProjectName>!app.js
├── Tests
|   ├── js
|   |   ├── chai.js // required
|   |   └── mocha.js // required
|   ├── Suite
|   |   └── <Test>.js
|   └── <ProjectName>!app.js
├── UI
|   └── scss
|       └── index.scss
├── .gitignore
├── Gruntfile.js
├── index.html
├── package.json
└── README.md
```

> Or create a copy of this repo (per project).


Start watching
--------------
```
grunt
```


Goodies
=======

Simply use `include` at the top of sources (even in tests).
```
include('AwesomeClassToUse.js');

// With spectacular Objective-JavaScript tools from eppz!js.
var AlreadyAwesoemClass = Class.extend
({
	...
});
```
