// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

function save({attributes}) {

	const { author, postLastUpdated, topicName, experiences, url, alt, id, } = attributes;
	return (
		<section {...useBlockProps.save()}>

			<header>
				{url && (
					<img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
				)}
				<dl>
					<dt>{__('Author Name:', 'block-gamblino')}</dt>
					{author && <dd>{author}</dd>}

					<dt>{__('Last Updated On:', 'block-gamblino')}</dt>
					{postLastUpdated && <dd>{postLastUpdated}</dd>}

					<dt>{__('Topic:', 'block-gamblino')}</dt>
					{topicName && <RichText.Content tagName="dd" value={topicName} />}

					<dt>{__('Topic:', 'block-gamblino')}</dt>
					{experiences && <RichText.Content tagName="dd" value={experiences} />}
				</dl>
			</header>

			<InnerBlocks.Content />
		</section>
	);
}

export default save;
