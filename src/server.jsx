import { Component } from "preact";
import renderToString from "preact-render-to-string";

export class TagCollector extends Component {
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
