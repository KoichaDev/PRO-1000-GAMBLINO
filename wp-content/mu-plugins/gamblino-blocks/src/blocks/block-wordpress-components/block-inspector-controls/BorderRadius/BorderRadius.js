// Wordpress dependencies
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";

// hooks
import useActionBorderRadius from "./hooks/useActionBorderRadius";
import useSelectorsBorderRadius from "./hooks/useSelectorsBorderRadius";

// Wordpress Components
import ControlsRangeControl from "../ControlsRangeControl";

// Redux Store
import reduxControlPaddingStore from "./stores/index";

// styling
import "./BorderRadius.scss";

const BorderRadius = ({ controlName, ...rest }) => {
	// We have to use the useEffect in order to trigger the store's reducer, otherwise, this block doesn't get the chance to render fast enough
	useEffect(() => reduxControlPaddingStore(controlName), []);
	// we have to make sure to not render on the first render, otherwise, the dispatch of padding Linked Sides will not work, since the function doesn't exist yet.

	return <ControlsRangeControl {...rest} />;
};

export default BorderRadius;
