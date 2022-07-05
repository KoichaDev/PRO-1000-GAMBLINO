import { __ } from "@wordpress/i18n";

import { useState, useEffect, useRef } from "@wordpress/element";

import { useBlockProps, MediaPlaceholder } from "@wordpress/block-editor";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { Spinner, withNotices } from "@wordpress/components";

import { BsImage } from "react-icons/bs";

import ElementWithFocusOutside from "@/hoc/ElementWithFocusOutside";

import PanelInspectorControls from "./components/InspectorControls/PanelInspectorControls";
import ToolbarGroupControl from "./components/Toolbar/ToolbarGroupControl";

import LinkTargetConfig from "./components/Toolbar/LinkTargetConfig/LinkTargetConfig";

const EditBlockImage = (props) => {
	const {
		attributes,
		setAttributes,
		noticeOperations,
		noticeUI,
		isFocusOutside,
		setIsFocusOutside,
	} = props;
	const {
		id,
		url,
		alt,
		imageDuplication,
		countImageFilterOpacity,
		imageDimension,
		imageGapSizeValue,
		positionType,
		positionValue,
		imageOpacityValue,
		margin,
		marginUnit,
		marginAuto,
		isResetMargin,
		isLinkToolbarButtonOpen,
		isOrientedImage,
	} = attributes;
	const imageRef = useRef();

	const [isClickedImage, setIsClickedImage] = useState(false);
	const [blobURL, setblobURL] = useState(undefined);

	useEffect(() => {
		if (isFocusOutside) {
			setAttributes({ isLinkToolbarButtonOpen: false });
		}
	}, [isFocusOutside]);

	// Checking if the image is a blob url and if it is, it is setting the url to undefined and the alt
	// to an empty string. This is to avoid the spinner logo to "hang up" when reloading the current window of our block.
	// This edge case will happen if the user is trying to upload an image and reload the website right away
	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({
				url: undefined,
				alt: "",
			});
		}
	}, []);

	useEffect(() => {
		if (isBlobURL(url)) {
			setblobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setblobURL();
		}
	}, [url]);

	const onSelectImageHandler = (image) => {
		if (!image || !image.url) {
			setAttributes({
				id: undefined,
				url: undefined,
				alt: "",
			});
		}

		setAttributes({
			id: image.id,
			url: image.url,
			alt: image.alt,
		});
	};

	const onSelectURLHandler = (newUrl) => {
		setAttributes({
			id: undefined,
			url: newUrl,
			alt: "",
		});
	};

	const onUploadErrorHandler = (message) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	};

	useEffect(() => {
		const { width, height } = imageRef.current ?? {};
	}, [isClickedImage]);

	const onImgLoad = ({ target: img }) => {
		const { width, height } = img;
	};

	const positionStyle = positionType === "absolute" && {
		top: `${positionValue.top}%`,
		right: `${positionValue.right}%`,
		bottom: `${positionValue.bottom}%`,
		left: `${positionValue.left}%`,
	};

	const marginStyle =
		isResetMargin === true
			? marginAuto
			: {
				marginTop: `${margin.top}${marginUnit}`,
				marginRight: `${margin.right}${marginUnit}`,
				marginBottom: `${margin.bottom}${marginUnit}`,
				marginLeft: `${margin.left}${marginUnit}`,
			};

	let blockImageContent = "";

	if (url) {
		// const countImageFilterColor = imageFilterColor.length;

		// prettier-ignore
		blockImageContent = <>
			{imageDuplication.map((_, (index) => {
				const { count } = index

				return (
					<img
						key={index.count}
						ref={imageRef}
						src={url}
						alt={alt}
						style={{
							width: imageDimension,
							position: positionType,
							...positionStyle,
							...marginStyle,
							opacity: count <= countImageFilterOpacity ? imageOpacityValue : ''
						}}
						onLoad={onImgLoad}
						onClick={() => setIsClickedImage(true)}
					/>
				);
			}))}
		</>
	}

	const isOrientationClassName = isOrientedImage ? "flex-row" : "flex-column";

	return (
		<div {...useBlockProps()} onClick={() => setIsFocusOutside(false)}>
			<PanelInspectorControls {...props} />

			<ToolbarGroupControl
				onSelect={onSelectImageHandler}
				onSelectURL={onSelectURLHandler}
				onError={onUploadErrorHandler}
				notices={noticeUI}
				{...props}
			/>

			{url && (
				<div
					className={`[ media-image ] [ ${isOrientationClassName}  mt-6 ] ${isBlobURL(url) ? " [ is-loading ]" : ""
						}`}
					style={{ gap: `${imageGapSizeValue}em` }}
				>
					{blockImageContent}

					{isBlobURL(url) && <Spinner />}
				</div>
			)}

			<MediaPlaceholder
				icon={BsImage}
				onSelect={onSelectImageHandler}
				onSelectURL={onSelectURLHandler}
				onError={onUploadErrorHandler}
				notices={noticeUI}
				accept="image/*"
				allowedTypes={["image"]}
				disableMediaButtons={url ? true : false}
				onClick={() => setIsFocusOutside(false)}
			/>

			{isLinkToolbarButtonOpen && <LinkTargetConfig {...props} />}
		</div>
	);
};

export default withNotices(ElementWithFocusOutside(EditBlockImage));
