<div align="center">

Vuepress Template

![GitHub package.json version](https://img.shields.io/github/package-json/v/openHacking/vuepress-template?style=flat-square)
[![GitHub license](https://img.shields.io/github/license/openHacking/vuepress-template?style=flat-square)](https://github.com/openHacking/vuepress-template)
</div>

English| [简体中文](./README-zh.md)

## Introduction

vuepress-template is a simple VuePress case template. The purpose is to allow users to directly clone this repository as a startup project for initializing a VuePress website, and then add custom configurations and functions based on this project.

## Documentation

[Online Documentation](https://openhacking.github.io/vuepress-template/)

## Content

Some niche templates, themes, and plugins are specially displayed in the project, and I recommend everyone to pay attention and use them

### Theme

- [vuepress-theme-blogplus](https://github.com/Dushusir/vuepress-theme-blogplus) A concise blog theme

### Plugin

- [vuepress-plugin-qrocde](https://github.com/openHacking/vuepress-plugin-qrcode) Display the current URL QR code for mobile devices to scan

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