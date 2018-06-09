import { h, Component } from "preact";
import Portal from "preact-portal";

// TODO: Look up screen reader integration
export default class HeadTag extends Component {
  render({ tag: Tag, ...rest }) {
    if (this.context.head) {
      this.context.head.add(<Tag data-microhelmet="" {...rest} />);
    }

    return (
      <Portal into="head">
        <Tag {...rest} />
      </Portal>
    );
  }
}

export const Title = props => <HeadTag tag="title" {...props} />;
export const Style = props => <HeadTag tag="style" {...props} />;
export const Meta = props => <HeadTag tag="meta" {...props} />;
export const Link = props => <HeadTag tag="link" {...props} />;
