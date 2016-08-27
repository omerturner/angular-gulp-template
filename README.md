# Angular-Gulp Template

This repository holds the TypeScript source code of an angular2 project template which using gulp as a build tool.

## Prerequisites

Node.js and npm are essential to Angular 2 development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/omerturner/angular-gulp-template  my-proj
cd my-proj
```

Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
```

## Build project with gulp.js

Run the default gulp tasks specified in the `gulpfile.js`:

```bash
gulp
```