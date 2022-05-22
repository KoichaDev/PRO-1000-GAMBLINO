// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

function save({ attributes }) {
	const { title, description, lists } = attributes;
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
		</section>
	);
}

export default save;
