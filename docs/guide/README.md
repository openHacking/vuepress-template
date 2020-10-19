# Guide

## Introduction
This entire website shows a simple VuePress template. The purpose is that users can directly clone this repository as a startup project for initializing a VuePress website, and then add custom configurations and functions based on this project.

In addition, some plugins use cases are also shown, refer to [plugins](./plugin)

## Why build this template website?
Some beginners who are new to VuePress will encounter large or small problems after following the official tutorial, especially the file directory, packaging, and plugin installation. If you copy the official repository directly, it is large, so if there is such a simple initial template, it will be very convenient to start it directly.

And the corresponding plugin can directly see the effect, making it easier to use.

## Usage

### Step 1

Download the repository code of Vuepress Template
```sh
git clone https://github.com/openHacking/vuepress-template.git
```

### Step 2
Installation dependencies
```sh
cd vuepress-template
yarn # or npm i
```

### Step 3
Start the project, then you can modify the configuration and write document content according to your needs
```sh
npm run docs:dev
```

### Step 4
Packaged project
```sh
npm run docs:build
```
As a result, a `dist` folder will be generated in the `docs/.vuepress/` directory, which contains the packaged code