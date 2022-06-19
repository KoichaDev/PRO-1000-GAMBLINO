import { __ } from "@wordpress/i18n";
import { ToggleControl } from "@wordpress/components";

const ToggleFollowSEO = ({ ...props }) => {
	const { attributes, setAttributes } = props;
	const { isFollowToggled } = attributes;
	return (
		<>
			<ToggleControl
				label={!isFollowToggled ? __('Not following', 'block-gamblino') : __("Following", 'block-gamblino')}
				checked={isFollowToggled}
				onChange={() => setAttributes({ isFollowToggled: !isFollowToggled })}
			/>
		</>
	);
};

export default ToggleFollowSEO;
