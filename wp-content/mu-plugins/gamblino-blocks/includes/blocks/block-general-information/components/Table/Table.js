// Wordpress dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import "./Table.scss";

const TableColumn = ({ className, attributes, setAttributes }) => {
	const { tableTitle, tableTitleAlignment, tableList } = attributes;

	return (
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
	);
};

export default TableColumn;
