import { h, Component } from "preact";
import Portal from "preact-portal";

export default class HeadTag extends Component {
  constructor() {
    this.state = {
      isClient: false
    };
  }

  componentDidMount() {
    this.setState({ isClient: true });
  }

  render({ tag: Tag, ...props }, { isClient }) {
    if (isClient) {
      return (
        <Portal into="head">
          <Tag {...props} />
        </Portal>
      );
    }
    return null;
  }
}

export const Title = props => <HeadTag tag="title" {...props} />;
export const Style = props => <HeadTag tag="style" {...props} />;
export const Meta = props => <HeadTag tag="meta" {...props} />;
export const Link = props => <HeadTag tag="link" {...props} />;
