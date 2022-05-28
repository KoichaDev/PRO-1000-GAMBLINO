// React dependency
import { MdOutlineLink, MdOutlineLinkOff } from "react-icons/md";

// Wordpress dependencies
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { PaddingIcon } from "@/common/Icons/Spaces";

// UI Component
import { ButtonIcon } from "@/common/UI/Button";

// Redux Store
import reduxControlPaddingStore from "./stores/index";

// styling
import "./Padding.scss";

const ControlsRangeControl = (props) => {
	const {
		controlName,
		padding,
		paddingSelectUnit,
		paddingVertical,
		paddingVerticalSelectUnit,
		paddingHorizontal,
		paddingHorizontalSelectUnit,
		isClicked,
		onClick,
	} = props;

	// We have to use the useEffect in order to trigger the store's reducer, otherwise, this block doesn't get the chance to render fast enough
	useEffect(() => reduxControlPaddingStore(controlName), []);

	return (
		<InspectorControls>
			<PanelBody>
				<p>Padding</p>
				<div className="controls-padding">
					<PaddingIcon
						fillLeft={isClicked ? "#C5C7C9" : ""}
						fillRight={isClicked ? "#C5C7C9" : ""}
					/>

					{!isClicked && (
						<div className="controls-padding_input-component">
							<input type="number" {...padding} />
							<select
								aria-label={__("Select unit", "block-gamblino")}
								{...paddingSelectUnit}
							>
								<option value="px">px</option>
								<option value="em">em</option>
							</select>
						</div>
					)}

					{isClicked && (
						<div className="controls-padding_input-component">
							<input
								type="number"
								aria-label="Vertical"
								title="Vertical"
								{...paddingVertical}
							/>
							<select
								aria-label={__("Select unit", "block-gamblino")}
								{...paddingVerticalSelectUnit}
							>
								<option value="px">px</option>
								<option value="em">em</option>
							</select>
						</div>
					)}

					{isClicked && (
						<div className="controls-padding_input-component">
							<input
								type="number"
								aria-label="Horizontal"
								title="Horizontal"
								{...paddingHorizontal}
							/>
							<select
								aria-label={__("Select unit", "block-gamblino")}
								{...paddingHorizontalSelectUnit}
							>
								<option value="px">px</option>
								<option value="em">em</option>
							</select>
						</div>
					)}

					<ButtonIcon onClick={onClick}>
						{isClicked ? <MdOutlineLinkOff /> : <MdOutlineLink />}
					</ButtonIcon>
				</div>
			</PanelBody>
		</InspectorControls>
	);
};

export default ControlsRangeControl;
