// Wordpress dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

const TableColumn = ({ className, attributes, setAttributes }) => {
	const { tableTitle, tableTitleAlignment, tableList } = attributes;

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={tableTitleAlignment}
					onChange={(value) => setAttributes({ tableTitleAlignment: value })}
				/>
			</BlockControls>

			<div className={className}>
				<RichText
					{...useBlockProps({
						style: {
							textAlign: tableTitleAlignment,
							color: "#825261",
							fontSize: "1.6875rem",
						},
					})}
					value={tableTitle}
					onChange={(value) => setAttributes({ tableTitle: value })}
					tagName="h2"
					placeholder={__("Table title...", "block-gamblino")}
				/>

				<table>
					<thead>
						<tr>
							<th>{__("Features", "block-gamblino")}</th>
							<th>{__("Description", "block-gamblino")}</th>
						</tr>
					</thead>
					<tbody>
						{tableList.map((item, index) => {
							// prettier-ignore
							const {id, url, alt, textColor, textDescription, textFeature  } = item
							return (
								<tr>
									<td>{item.textFeature}</td>
									<td>{item.textDescription}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TableColumn;
