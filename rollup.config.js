import buble from "rollup-plugin-buble";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

const plugins = [
  buble({ jsx: "h", objectAssign: "Object.assign" }),
  babel({ plugins: ["@babel/plugin-transform-object-assign"] }),
  terser({
    mangle: {
      toplevel: true
    }
  }),
  sizeSnapshot()
];

export default [
  {
    input: "src/index.jsx",
    output: {
      format: "cjs",
      dir: "dist",
      file: "preact-head-tag.min.js",
      interop: false,
      strict: false,
      exports: "named"
    },
    plugins,
    external: ["preact", "preact-portal"]
  },
  {
    input: "src/index.jsx",
    output: {
      format: "es",
      dir: "dist",
      file: "preact-head-tag.esm.js"
    },
    plugins,
    external: ["preact", "preact-portal"]
  },
  {
    input: "src/server.jsx",
    output: {
      format: "cjs",
      dir: "dist",
      file: "server.js"
    },
    plugins: [buble({ jsx: "h" })],
    external: ["preact", "preact-render-to-string"]
  }
];
