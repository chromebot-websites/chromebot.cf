[![NPM](https://nodei.co/npm/ls-all.png)](https://nodei.co/npm/ls-all/)

[![Build Status](https://travis-ci.org/cantidio/node-ls-all.svg?branch=master)](https://travis-ci.org/cantidio/node-ls-all)
[![Code Climate](https://codeclimate.com/github/cantidio/node-ls-all/badges/gpa.svg)](https://codeclimate.com/github/cantidio/node-ls-all)
[![Test Coverage](https://codeclimate.com/github/cantidio/node-ls-all/badges/coverage.svg)](https://codeclimate.com/github/cantidio/node-ls-all/coverage)
[![Dependencies](https://david-dm.org/cantidio/node-ls-all.svg)](https://david-dm.org/cantidio/node-ls-all)
[![devDependencies Status](https://david-dm.org/cantidio/node-ls-all/dev-status.svg)](https://david-dm.org/cantidio/node-ls-all#info=devDependencies)


# LS-ALL

A simplistic deep file listing module for node (ls -Rla)

## Install
```
  npm install --save ls-all
```
## Usage
### CLI
```
  ls-all --help
```
```
  Usage
    $ ls-all [options] ...folders

    Options
    -f, --flatten
    -r, --recurse

  Examples
    $ ls-all ./folder-1 ./folder-2
      folder-1:
        file-1
        file-2
```
List all files in a dir. Recursive optional. Flatten optional.

### API
#### list(paths, [options])
Returns a promise with an array of files.

##### options
Type: object
* recurse: true|false
* flatten: true|false

### Examples
```js
const list = require('ls-all');
list([
  './src',
  './tests'
], { recurse: true }).then((files)=>{
  console.log('files');
  console.log(JSON.stringify(files,null,2));
});
```
Logs the file tree of the given paths.

### License
MIT
