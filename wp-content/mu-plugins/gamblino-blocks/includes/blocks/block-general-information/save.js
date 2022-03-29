// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

function save({ attributes }) {
	const {
		author,
		postLastUpdated,
		topicName,
		experiences,
		url,
		alt,
		id,
		tableTitle,
		tableBodyData,
	} = attributes;
	return (
		<section {...useBlockProps.save()}>
			<header className="wp-block-gamblino-block-general-information__header">
				{url && (
					<img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
				)}
				<dl>
					<dt>{__("Author Name:", "block-gamblino")}</dt>
					{author && <dd>{author}</dd>}

					<dt>{__("Last Updated On:", "block-gamblino")}</dt>
					{postLastUpdated && <dd>{postLastUpdated}</dd>}

					<dt>{__("Topic:", "block-gamblino")}</dt>
					{topicName && <RichText.Content tagName="dd" value={topicName} />}

					<dt>{__("Topic:", "block-gamblino")}</dt>
					{experiences && <RichText.Content tagName="dd" value={experiences} />}
				</dl>
			</header>

			<div className="wp-block-gamblino-block-general-information-container">
				<div className="wp-block-gamblino-block-general-information__column-one">
					<InnerBlocks.Content />
				</div>

				<div className="wp-block-gamblino-block-general-information__column-two">
					{tableTitle && <RichText.Content tagName="h2" value={tableTitle} />}

					{tableBodyData.length > 0 && (
						<table>
							<thead>
								<tr>
									<th scope="col">{__("Features", "block-gamblino")}</th>
									<th scope="col">{__("Description", "block-gamblino")}</th>
								</tr>
							</thead>
							<tbody>
								{tableBodyData.map((info, index) => {
									return (
										<tr key={index}>
											<td>
												<RichText.Content
													className="text-column-one"
													tagName="p"
													value={info.textColumnOne}
												/>
											</td>
											<td>
												<RichText.Content
													role="paragraph"
													className="text-column-two"
													tagName="div"
													value={info.textColumnTwo}
												/>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</section>
	);
}

export default save;
