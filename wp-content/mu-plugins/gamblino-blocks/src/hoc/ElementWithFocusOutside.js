import { withFocusOutside } from "@wordpress/components";

const ElementWithFocusOutside = (WrappedComponent) => {
    return withFocusOutside(
        class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    focusOutside: true,
                };
            }

            handleFocusOutside() {
                this.setState({ focusOutside: true });
            }

            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                        isFocusOutside={this.state.focusOutside}
                        setIsFocusOutside={(focusOutside) => {
                            this.setState({ focusOutside });
                        }}
                    />
                );
            }
        }
    );
};

export default ElementWithFocusOutside;
