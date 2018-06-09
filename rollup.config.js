import buble from "rollup-plugin-buble";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

export default [
  {
    input: "src/index.jsx",
    output: {
      format: "cjs",
      dir: "dist",
      file: "microhelmet.min.js",
      interop: false,
      strict: false,
      exports: "named"
    },
    plugins: [
      buble({ jsx: "h", objectAssign: "Object.assign" }),
      uglify({
        mangle: {
          toplevel: true
        }
      }),
      sizeSnapshot()
    ],
    external: ["preact", "preact-portal"]
  },
  {
    input: "src/index.jsx",
    output: {
      format: "es",
      dir: "dist",
      file: "microhelmet.esm.js"
    },
    plugins: [
      buble({ jsx: "h", objectAssign: "Object.assign" }),
      terser({
        mangle: {
          toplevel: true
        }
      }),
      sizeSnapshot()
    ],
    external: ["preact", "preact-portal"]
  },
  {
    input: "src/server.jsx",
    output: {
      format: "cjs",
      dir: "dist",
      file: "microhelmet-server.js"
    },
    plugins: [buble({ jsx: "h" })],
    external: ["preact", "preact-render-to-string"]
  }
];
