import { __ } from "@wordpress/i18n";

import { BlockControls, MediaReplaceFlow } from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";

import { MdLink } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

import { ImageReplaceIcon } from "../../icon/ImageIcon";

const ToolbarGroupControl = ({
	onSelect,
	onSelectURL,
	onError,
	notices,
	...props
}) => {
	const { attributes, setAttributes } = props;
	const { id, url, isLinkToolbarButtonOpen } = attributes;

	const removeImageHandler = () => {
		setAttributes({
			id: undefined,
			url: undefined,
			alt: "",
		});
	};

	return (
		<BlockControls group="inline">
			<ToolbarButton
				title={__("Link Configuration", "block-gamblino")}
				icon={MdLink}
				value={isLinkToolbarButtonOpen}
				onClick={() =>
					setAttributes({
						isLinkToolbarButtonOpen: !isLinkToolbarButtonOpen,
					})
				}
			/>
			{url && (
				<>
					<MediaReplaceFlow
						name={
							<>
								<ImageReplaceIcon />
							</>
						}
						mediaId={id}
						mediaURL={url}
						onSelect={onSelect}
						onSelectURL={onSelectURL}
						onError={onError}
						notices={notices}
						accept="image/*"
						allowedTypes={["image"]}
					/>
					<ToolbarButton
						title={__('Delete Image', 'block-gamblino')}
						onClick={removeImageHandler}>
						{__(
							<>
								<FaTrash />
							</>,
							"block-gamblino"
						)}
					</ToolbarButton>
				</>
			)}
		</BlockControls>
	);
};

export default ToolbarGroupControl;
