// Wordpress dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

// WordPress component
import InspectorControlPadding from "../../../../block-wordpress-components/block-inspector-controls/Padding/Padding";
import InspectorControlBorderRadius from "../../../../block-wordpress-components/block-inspector-controls/BorderRadius/BorderRadius";

// Hooks Inspector Controls
import useSelectorsBorderRadius from "../../../../block-wordpress-components/block-inspector-controls/BorderRadius/hooks/useSelectorsBorderRadius";
import useActionBorderRadius from "../../../../block-wordpress-components/block-inspector-controls/BorderRadius/hooks/useActionBorderRadius";

import useActionPadding from "../../../../block-wordpress-components/block-inspector-controls/Padding/hooks/useActionPadding";
import useSelectorsPadding from "../../../../block-wordpress-components/block-inspector-controls/Padding/hooks/useSelectorsPadding";

// React component
import { ButtonPrimary } from "../../../../../UI/Button";

import "./ButtonEdit.scss";

const ButtonEdit = ({ attributes, setAttributes }) => {
	const {
		text,
		btnBorderRadius,
		btnPadding,
		btnPaddingUnit,
		btnPaddingVertical,
		btnPaddingVerticalUnit,
		btnPaddingHorizontal,
		btnPaddingHorizontalUnit,
		btnIsClickedLinkedSides,
	} = attributes;

	const [isClicked, setIsClicked] = useState(false);

	// prettier-ignore
	const { borderRadius } = useSelectorsBorderRadius("blocks-control/score-info-border-radius");
	// prettier-ignore
	const { setBorderRadius } = useActionBorderRadius("blocks-control/score-info-border-radius");

	const {
		padding,
		paddingUnit,
		paddingVertical,
		paddingVerticalUnit,
		paddingHorizontal,
		paddingHorizontalUnit,
	} = useSelectorsPadding("blocks-control/score-info-padding");

	const {
		setPadding,
		setPaddingUnit,
		setPaddingVertical,
		setPaddingVerticalUnit,
		setPaddingHorizontal,
		setPaddingHorizontalUnit,
	} = useActionPadding("blocks-control/score-info-padding");


	// prettier-ignore
	const paddingStyling = btnPadding !== undefined ? `${btnPadding}${btnPaddingUnit}` : `${padding}${paddingUnit}`;

	// prettier-ignore
	const paddingVerticalStyling = btnPaddingVertical !== undefined ? `${btnPaddingVertical}${btnPaddingVerticalUnit}` : `${paddingVertical}${paddingVerticalUnit}`;

	// prettier-ignore
	const paddingHorizontalStyling = btnPaddingHorizontal !== undefined ? `${btnPaddingHorizontal}${btnPaddingHorizontalUnit}` : `${paddingHorizontal}${paddingHorizontalUnit}`;

	// prettier-ignore
	const buttonStyle = {
        borderRadius: btnBorderRadius === undefined ? `${borderRadius}px` : `${btnBorderRadius}px`,
        padding: !btnIsClickedLinkedSides ? paddingStyling : `${paddingVerticalStyling} ${paddingHorizontalStyling}`,
	};

	const onChangeBorderRadiusHandler = (value) => {
		setBorderRadius(value);
		setAttributes({ btnBorderRadius: value });
	};

	const onChangePaddingHandler = (e) => {
		const paddingValue = e.target.value;
		setPadding(paddingValue);
		setAttributes({ btnPadding: paddingValue });
	};

	const onChangeSelectPaddingHandler = (e) => {
		const selectedValue = e.target.value;
		setPaddingUnit(selectedValue);
		setAttributes({ btnPaddingUnit: selectedValue });
	};

	const onChangeVerticalPaddingHandler = (e) => {
		const paddingVerticalValue = e.target.value;
		setPaddingVertical(paddingVerticalValue);
		setAttributes({ btnPaddingVertical: paddingVerticalValue });
	};

	const onChangeSelectVerticalPaddingHandler = (e) => {
		const paddingVerticalUnitValue = e.target.value;
		setPaddingVerticalUnit(paddingVerticalUnitValue);
		setAttributes({ btnPaddingVerticalUnit: paddingVerticalUnitValue });
	};

	const onChangeHorizontalPaddingHandler = (e) => {
		const paddingHorizontalValue = e.target.value;
		setPaddingHorizontal(paddingHorizontal);
		setAttributes({ btnPaddingHorizontal: paddingHorizontalValue });
	};

	const onChangeSelectHorizontalPaddingHandler = (e) => {
		const paddingHorizontalUnitValue = e.target.value;
		setPaddingHorizontalUnit(paddingHorizontalUnitValue);
		setAttributes({ btnPaddingHorizontalUnit: paddingHorizontalUnitValue });
	};

	const onClickLinkedSidesHandler = () => {
		setIsClicked((prevClicked) => !prevClicked);
		setAttributes({ btnIsClickedLinkedSides: isClicked });
	};

	return (
		<>
			<InspectorControlBorderRadius
				label={__("Border Radius", "block-gamblino")}
				controlName="blocks-control/score-info-border-radius"
				value={btnBorderRadius === undefined ? borderRadius : btnBorderRadius}
				onChange={onChangeBorderRadiusHandler}
				min={1}
				max={100}
			/>

			<InspectorControlPadding
				controlName="blocks-control/score-info-padding"
				padding={{
					value: btnPadding === undefined ? padding : btnPadding,
					onChange: onChangePaddingHandler,
				}}
				paddingSelectUnit={{
					value: btnPaddingUnit === undefined ? paddingUnit : btnPaddingUnit,
					onChange: onChangeSelectPaddingHandler,
				}}
				paddingVertical={{
					value:
						btnPaddingVertical === undefined
							? paddingVertical
							: btnPaddingVertical,
					onChange: onChangeVerticalPaddingHandler,
				}}
				paddingVerticalSelectUnit={{
					value:
						btnPaddingVerticalUnit === undefined
							? paddingVerticalUnit
							: btnPaddingVerticalUnit,
					onChange: onChangeSelectVerticalPaddingHandler,
				}}
				paddingHorizontal={{
					value:
						btnPaddingHorizontal === undefined
							? paddingHorizontal
							: btnPaddingHorizontal,
					onChange: onChangeHorizontalPaddingHandler,
				}}
				paddingHorizontalSelectUnit={{
					value:
						btnPaddingHorizontalUnit === undefined
							? paddingHorizontalUnit
							: btnPaddingHorizontalUnit,
					onChange: onChangeSelectHorizontalPaddingHandler,
				}}
				isClicked={
					btnIsClickedLinkedSides === undefined
						? isClicked
						: btnIsClickedLinkedSides
				}
				onClick={onClickLinkedSidesHandler}
			/>

			<div
				{...useBlockProps({
					className: "wp-block-gamblino-block-general-information__button",
				})}
			>
				<ButtonPrimary style={buttonStyle}>
					<RichText
						value={text}
						onChange={(value) => setAttributes({ text: value })}
						tagName="p"
						placeholder={__("text...", "block-gamblino")}
					/>
				</ButtonPrimary>
			</div>
		</>
	);
};

export default ButtonEdit;
