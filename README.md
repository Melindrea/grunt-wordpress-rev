
Forked from grunt-rev, WIP to also have it update a file with the new filenames.
# grunt-wordpress-rev

> Static file asset revisioning through content hashing, updating a given file with the new filenames

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-wordpress-rev --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-rev');
```

Another way is to use the `matchdep` plugin:

```bash
npm install matchdep --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

## The "wpRev" task

Use the **wpRev** task together with [yeoman/grunt-usemin](https://github.com/yeoman/grunt-usemin) for cache busting of static files in your app. This allows them to be cached forever by the browser.

### Overview
In your project's Gruntfile, add a section named `wpRev` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  wpRev: {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 8,
      file: 'file/to/update.php'
    },
    assets: {
      files: [{
        src: [
          'scripts/{,*/}*.js',
          'styles/{,*/}*.css'
          'img/**/*.{jpg,jpeg,gif,png}',
          'fonts/**/*.{eot,svg,ttf,woff}'
        ]
      }]
    }
  },
})
```

### Options

#### options.encoding
Type: `String`
Default value: `'utf8'`

The encoding of the file contents.

#### options.algorithm
Type: `String`
Default value: `'md5'`

`algorithm` is dependent on the available algorithms supported by the version of OpenSSL on the platform. Examples are `'sha1'`, `'md5'`, `'sha256'`, `'sha512'`, etc. On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms.

#### options.length
Type: `Number`
Default value: `8`

The number of characters of the file content hash to prefix the file name with.

#### options.file
Type: `String`

#### options.revert
Type: `Bool`
Default value: false

### Usage Examples

#### Basic Asset Revving
This will rename `app.js` and `app.css` with an 8 character long hash prefix. For example `js/9becff3a.app.js` and `css/ae35dd05.app.css`. The hash value depends on the file contents. The file where these are called upon is the core theme file `functions.php`.

```js
grunt.initConfig({
  wpRev: {
    options: {
      file: 'functions.php'
    },
    files: {
      src: ['scripts/app.js', 'css/app.css']
    }
  }
})
```

#### Custom Options
Change the algorithm or length to style the generated asset file names. Note that the `usemin` companion task requires at least one anycase hexadecimal character to prefix the file name.

```js
grunt.initConfig({
  rev: {
    options: {
      algorithm: 'sha1',
      length: 4,
      file: 'functions.php'
    },
    files: {
      src: ['**/*.{js,css,png,jpg}']
    }
  }
})
```
#### Reverting filenames
Setting the `revert` option to `true` will generate the new files reverting the hash with the file name. Use this option if you want to generate files like main.min.50a592.css instead of 50a592.main.min.css
```js
grunt.initConfig({
  rev: {
    options: {
      revert: true,
      file: 'header.php'
    },
    files: {
      src: [
        'js/**/*.js',
        'css/**/*.css'
        ]
    }
  },
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using [grunt][].

## Release History
_(Nothing yet)_
