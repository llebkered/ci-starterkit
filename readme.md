# Starter project for CodeIgniter base web site template

V 1.2.0

This is a bare bones set up for a website using Codeigniter and HTML5 boilerplate. Contains a simple controller for a static site.

## Contains
* Bourbon http://http://bourbon.io/, Bitters http://bitters.bourbon.io/ and Neat http://neat.bourbon.io/.
* Browser Sync https://www.browsersync.io/
* Codeigniter 3 http://www.codeigniter.com
* Compass  http://compass-style.org
* HTML5 Boilerplate https://html5boilerplate.com/
* Gulp.js http://gulpjs.com/
* Modernizr http://modernizr.com/
* Normalize.css  https://necolas.github.io/normalize.css/
* SASS http://sass-lang.com/
* SMACSS https://smacss.com/

### Bourbon, Neat and Bitters

This template uses Bourbon http://http://bourbon.io/, Bitters http://bitters.bourbon.io/ and Neat http://neat.bourbon.io/ as a base for the SASS.

* SASS files live in /assets/sass
* Added some extra variables in /assets/base/_variables.scss for headings.
* Added heading size variables to /assets/base/_typography.scss
* Commented out resets in /assets/base/_lists.scss

### Browser Sync

Browser sync to reload browser after any changes to CSS.

### Codeigniter

There is a bare bones Codeigniter installation to handle the backend.

* Moved views folder out to the top level and changed the name to public.
* Pages class load header, content and footer views.
* Contains base home & about views in the public/pages folder. You can add extra static views here.

### Compass

The project has been initialised for Compass. Use it if you want. There is also a gulp.js set up.

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


## File Structure

```
application
assets
-- cache
-- config
-- controllers
index.php
gulpfile.js
node_modules
package.json
public
system
```
