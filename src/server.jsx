import { Component } from "preact";
import renderToString from "preact-render-to-string";

export default class HeadCollector extends Component {
  // TODO: Read up on getChildContext and context in general.
  getChildContext() {
    return {
      head: {
        add: tag => this.props.headTags.push(renderToString(tag))
      }
    };
  }

  render({ children }) {
    return children[0];
  }
}
