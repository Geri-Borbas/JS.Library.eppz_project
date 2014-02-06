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
Untrack temporary files.


Folders
-------
Create directory structure like below.
```
root
-assets
-build
 -derived
 -UI // Same relative position to `assets` as `UI/scss`
-Classes
 -eppz!js
  -eppz!js.min.js
 -app.js
-UI
--scss
---index.scss
.gitignore
Gruntfile.js
index.html
package.json
README.md
```


Start watching
--------------
```
grunt
```



