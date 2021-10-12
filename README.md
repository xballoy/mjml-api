# MJML API

[![CI](https://github.com/xballoy/mjml-api/actions/workflows/ci.yml/badge.svg)](https://github.com/xballoy/mjml-api/actions/workflows/ci.yml)

> An API to send MJML and get the transpiled responsive HTML output in return.

## Getting started

### Requirements

- [Yarn Classic](https://classic.yarnpkg.com/en/docs/install)
- [Node.js](https://nodejs.org)

### Start the API

```shell
$ yarn install
$ yarn build
$ yarn start
```

The server will listen at `http://127.0.0.1:3000`.

## API documentation

### Render

Render a MJML template

```shell
POST http://localhost:3000/render
```

**Parameters**

- **mjml** (required): the MJML markup to transpile to HTML.

**Returns**

- mjml: the original MJML markup
- html: the transpiled HTML
- errors: a list of error in the MJML markup

```json
{
  "errors": [],
  "html": "",
  "mjml": ""
}
```

## License

This project is licenced under [MIT License](./LICENSE.md).
