import buble from "rollup-plugin-buble";
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
      strict: false
    },
    plugins: [
      buble({ jsx: "h", objectAssign: "Object.assign" }),
      sizeSnapshot()
    ],
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
    external: ["preact"]
  }
];
