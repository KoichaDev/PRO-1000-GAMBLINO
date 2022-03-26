// Wordpress dependencies
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";

// WordPress component
import "../../BlockConfiguration/BlockConfigurationSidebar";
import InspectorControlPadding from "../../../block-wordpress-components/block-inspector-controls/Padding/Padding";
import InspectorControlBorderRadius from "../../../block-wordpress-components/block-inspector-controls/BorderRadius/BorderRadius";

// Hooks Inspector Controls
import useSelectorsBorderRadius from "../../../block-wordpress-components/block-inspector-controls/BorderRadius/hooks/useSelectorsBorderRadius";
import useActionBorderRadius from "../../../block-wordpress-components/block-inspector-controls/BorderRadius/hooks/useActionBorderRadius";
import useSelectorsPadding from "../../../block-wordpress-components/block-inspector-controls/Padding/hooks/useSelectorsPadding";

// React component
import { ButtonPrimary } from "../../../../UI/Button";

import "./ButtonEdit.scss";

const ButtonEdit = ({ attributes, setAttributes }) => {
	const { text, borderRadiusBtn } = attributes;

	// prettier-ignore
	const { borderRadius } = useSelectorsBorderRadius("blocks-control/score-info-border-radius");
	// prettier-ignore
	const { setBorderRadius } = useActionBorderRadius("blocks-control/score-info-border-radius");

	const {
		paddingValue,
		paddingUnit,
		paddingVerticalValue,
		paddingVerticalUnit,
		paddingHorizontalValue,
		paddingHorizontalUnit,
		isPaddingLinkedSides,
	} = useSelectorsPadding("blocks-control/score-info-padding");

	// padding styling
	const padding = `${paddingValue === "" ? 0 : paddingValue}${paddingUnit}`;
	const paddingVertical = `${
		paddingVerticalValue === "" ? 0 : paddingVerticalValue
	}${paddingVerticalUnit}`;
	const paddingHorizontal = `${
		paddingHorizontalValue === "" ? 0 : paddingHorizontalValue
	}${paddingHorizontalUnit}`;

	// prettier-ignore
	const buttonStyle = {
        borderRadius: borderRadiusBtn === undefined ? `${borderRadius}px` : `${borderRadiusBtn}px`,
		padding: !isPaddingLinkedSides
			? padding
			: `${paddingVertical} ${paddingHorizontal}`,
	};

	const onChangeBorderRadiusHandler = (value) => {
		setBorderRadius(value);
		setAttributes({ borderRadiusBtn: value });
	};

	return (
		<div
			{...useBlockProps({
				className: "wp-block-gamblino-block-general-information__button",
			})}
		>
			<InspectorControlBorderRadius
				label={__("Border Radius", "block-gamblino")}
				blockName="blocks-control/score-info-border-radius"
				value={borderRadiusBtn === undefined ? borderRadius : borderRadiusBtn}
				onChange={onChangeBorderRadiusHandler}
				min={1}
				max={100}
			/>

			<InspectorControlPadding blockName="blocks-control/score-info-padding" />

			<ButtonPrimary style={buttonStyle}>
				<RichText
					value={text}
					onChange={(value) => setAttributes({ text: value })}
					tagName="p"
					placeholder={__("text...", "block-gamblino")}
				/>
			</ButtonPrimary>
		</div>
	);
};

export default ButtonEdit;
