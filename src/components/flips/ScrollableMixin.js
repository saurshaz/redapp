let ScrollableMixin = require('react-native-scrollable-mixin');

let InfiniteScrollView = React.createClass({
  mixins: [ScrollableMixin],

  propTypes: {
    ...ScrollView.propTypes,
    renderScrollComponent: PropTypes.func.isRequired,
  },

  /**
   * IMPORTANT: You must return the scroll responder of the underlying
   * scrollable component from getScrollResponder() when using ScrollableMixin.
   */
  getScrollResponder() {
    return this._scrollView.getScrollResponder();
  },

  setNativeProps(props) {
    this._scrollView.setNativeProps(props);
  },

  render() {
    var {
      renderScrollComponent,
      ...props
    } = this.props;
    return React.cloneElement(renderScrollComponent(props), {
      ref: component => { this._scrollView = component; },
    });
  },
});