A very tiny SSR-compatible head component for Preact using preact-portal.

It's around 1.5 kB including preact-portal and only ~500 bytes by itself.

Heavily inspired by [react-head](https://github.com/tizmagik/react-head) by **tizmagic**.

## Installation

```bash
npm install preact-head-tag
```

## Usage

### Client

```javascript
import { h, Component } from "preact";
import HeadTag from "preact-head-tag";

const HelloWorld = () => (
  <div>
    <HeadTag tag="title">About this website</HeadTag>
    <HeadTag tag="meta" name="example" content="whatever" />
    <h1>Hello world!</h1>
  </div>
);
```

```javascript
// Alternatively you can use the following components for convenience:
import { Title, Meta, Style, Link } from "preact-head-tag";

const HelloWorld = () => (
  <div>
    <Title>About this website</Title>
    <Meta name="example" content="whatever" />
    <h1>Hello world!</h1>
  </div>
);
```

### Server

```javascript
import { h } from "preact";
import renderToString from "preact-render-to-string";
import { TagCollector } from "preact-head-tag/server";

const headTags = [];

// Wrap you App component in the TagCollector
const app = renderToString(
  <TagCollector headTags={headTags}>
    <App />
  </TagCollector>
);

// Put the extracted headTags inside the head of the html.
// headTags is an array of strings so use headTags.join("")
res.send(`
  <!doctype html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      ${headTags.join("")}
    </head>
    <body>
      <div id="root">${app}</div>
    </body>
  </html>
`);
```

## License

MIT
