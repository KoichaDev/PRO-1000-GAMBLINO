// React dependency
import { format } from "date-fns";

// WordPress dependencies
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";

// WordPress components
import BlockMediaPlaceholder from "@/blocks/block-wordpress-components/block-media/BlockMediaPlaceholder";

// hooks
import { useGetCurrentPostAuthorName } from "@/hooks/useSelectCore";
import { useGetCurrentPost } from "@/hooks/useSelectCoreEditor";

// styles
import "./HeaderEdit.scss";

const Header = ({ attributes, setAttributes }) => {
	const {
		author,
		postLastUpdated,
		topicName,
		experiences,
		id,
		url,
		alt,
		noticeUI,
	} = attributes;
	const { name: authorNamePostPublished } = useGetCurrentPostAuthorName() ?? {};
	const { date: postDatePublished } = useGetCurrentPost() ?? {};

	useEffect(() => {
		if (authorNamePostPublished === undefined) return;
		setAttributes({ author: authorNamePostPublished });
	}, [authorNamePostPublished]);

	useEffect(() => {
		if (postDatePublished === undefined) return;
		const currentPostDate = format(new Date(postDatePublished), "dd-MM-yyyy");
		setAttributes({ postLastUpdated: currentPostDate });
	}, [postDatePublished]);

	return (
		<header>
			<ul className="wp-block-gamblino-block-general-information__header">
				<BlockMediaPlaceholder
					id={id}
					url={url}
					alt={alt}
					noticeUI={noticeUI}
					setAttributes={setAttributes}
				/>

				<li>
					<p>{__("Author Name:", "block-gamblino")}</p>
					<p>
						<strong>{author}</strong>
					</p>
				</li>

				<li>
					<p>{__("Last Updated On:", "block-gamblino")}</p>
					<p>
						<strong>{postLastUpdated}</strong>
					</p>
				</li>

				<li>
					<p>{__("Topic:", "block-gamblino")}</p>
					<RichText
						value={topicName}
						onChange={(value) => setAttributes({ topicName: value })}
						tagName="p"
						placeholder={__("Topic name...", "block-gamblino")}
					/>
				</li>

				<li>
					<p>{__("Experiences:", "block-gamblino")}</p>
					<RichText
						value={experiences}
						onChange={(value) => setAttributes({ experiences: value })}
						tagName="p"
						placeholder={__("Type Experiences...", "block-gamblino")}
					/>
				</li>
			</ul>
		</header>
	);
};

export default Header;
