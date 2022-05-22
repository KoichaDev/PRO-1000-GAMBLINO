// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

function save({ attributes }) {
	const {
		title,
		description,
		lists,
		isShadowMenuOpen,
		shadowOpacity,
		buttonText,
		buttonBorderRadius,
		buttonBackgroundColor,
		buttonColor,
		buttonIsClickedLinkSides,
		buttonPadding,
		paddingSelectUnit,
		buttonPaddingHorizontal,
		paddingHorizontalSelectUnit,
		buttonPaddingVertical,
		paddingVerticalSelectUnit
	} = attributes;


	let paddingType = "";

	if (!buttonIsClickedLinkSides) {
		paddingType = `${+buttonPadding}${paddingSelectUnit}`;
	} else {
		paddingType = `${+buttonPaddingVertical}${paddingVerticalSelectUnit} ${+buttonPaddingHorizontal}${paddingHorizontalSelectUnit}`;
	}

	const shadowClass = isShadowMenuOpen === true ? "has-shadow" : "";

	return (
		<section {...useBlockProps.save()}>
			{title ? <RichText.Content tagName="h2" value={title} /> : null}

			{description ? (
				<RichText.Content tagName="p" value={description} />
			) : null}

			{lists.length > 0 && (
				<ul className="block-insert-review__lists">
					{lists.map((list, index) => {
						return (
							<li key={index}>
								<RichText.Content tagName="p" value={list.content} />
							</li>
						);
					})}
				</ul>
			)}

			{buttonText ? (
				<RichText.Content
					{...useBlockProps.save({
						className: `${shadowClass} shadow-opacity-${shadowOpacity}`,
						style: {
							display: "inline-block",
							padding: paddingType,
							color: buttonColor,
							backgroundColor: buttonBackgroundColor,
							borderRadius: `${buttonBorderRadius}px`,
						},
					})}
					tagName="a"
					value={buttonText}
				/>
			) : null}
		</section>
	);
}

export default save;
