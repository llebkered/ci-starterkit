# Starter project for CodeIgniter base web site template


V 2.1.1


This is a bare bones set up for a website using Codeigniter and HTML5 boilerplate. Contains a simple controller for a static site.

## Contains
* Bourbon http://http://bourbon.io/, Bitters http://bitters.bourbon.io/ and Neat http://neat.bourbon.io/.
* Browser Sync https://www.browsersync.io/
* Codeigniter 3 http://www.codeigniter.com
* Compass  http://compass-style.org
* Composer https://getcomposer.org/
* HTML5 Boilerplate https://html5boilerplate.com/
* Gulp.js http://gulpjs.com/
* Modernizr http://modernizr.com/
* Normalize.css  https://necolas.github.io/normalize.css/
* SASS http://sass-lang.com/
* SMACSS https://smacss.com/
* Twig https://twig.sensiolabs.org/
* Yarn http://yarnpkg.com/

### Bourbon, Neat and Bitters

This template uses Bourbon http://http://bourbon.io/, Bitters http://bitters.bourbon.io/ and Neat http://neat.bourbon.io/ as a base for the SASS.

Bourbon, Neat and Bitters are stored in node_modules


* SASS files live in /assets/sass
* Added some extra variables in /assets/base/_variables.scss for headings.
* Added heading size variables to /assets/base/_typography.scss
* Commented out resets in /assets/base/_lists.scss

### Browser Sync

Browser sync to reload browser after any changes to CSS.

### Codeigniter

There is a bare bones Codeigniter installation to handle the backend.



### Compass

The project has been initialised for Compass. Use it if you want. There is also a gulp.js set up.

### Composer

Composer is set up for extra PHP pagackages

### HTML5 Boilerplate

Used as a starter for the html template

### Gulp.js

* Compiles SASS
* Adds browser prefixes.
* Compresses image files and places them in assets/build/images folder.
* Outputs display using browsersync


### Modernizr

The same version that comes with HTML5 Boilerplate. You may want to get a custom build from [Modernir](http://modernizr.com/).

### Normalize

It uses normalize.css as the reset.

### SASS
You can use either Compass or Gulp to compile the SASS.

### SMACSS
Based on Mina Markham's Sassy Starter
https://github.com/minamarkham/sassy-starter

### Twig
Added Twig templating


### Yarn
Yarn is used to manage packages

## File Structure

```
application
-- cache
-- config
-- controllers
-- core
-- helpers
-- hooks
-- languages
-- libraries
-- logs
-- migrations
-- models
-- sql
-- third_party
-- views
assets
-- build
-- css
-- images
-- js
-- sass
-- svgs
index.php
gulpfile.js
node_modules
package.json
system
vendor
yarn.lock
```
