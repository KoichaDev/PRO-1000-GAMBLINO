// React dependency:
import { v4 as uuidv4 } from "uuid";

// Wordpress dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import { useState, useEffect } from "@wordpress/element";

import { Icon, Tooltip } from "@wordpress/components";

import "./Table.scss";

const TableColumn = ({ attributes, setAttributes }) => {
	const { tableBodyData } = attributes;
	const [selectedTableRow, setSelectedTableRow] = useState(undefined);

	console.log(tableBodyData);

	const onChangeTextColumnOneHandler = (selectedIndexPosition, value) => {
		const tableBodyCopy = [...tableBodyData];

		[(tableBodyCopy[selectedIndexPosition]['textColumnOne'] = value)];

		setAttributes({ tableBodyData: tableBodyCopy });
	};

	// prettier-ignore
	const onChangeTextColumnTwoHandler = (selectedIndexPosition, value) => {
		const tableBodyCopy = [...tableBodyData];

		[(tableBodyCopy[selectedIndexPosition]['textColumnTwo'] = value)];

		setAttributes({ tableBodyData: tableBodyCopy });
	};

	const newTableRowHandler = () => {
		setAttributes({
			tableBodyData: [
				...tableBodyData,
				{
					textColumnOne: "",
					textColumnTwo: ""
				},
			],
		});
	};

	const removeTableRowHandler = (selectedTextIndexPosition) => {
		setAttributes({
			tableBodyData: [
				/* This is a JavaScript method called `splice`. It allows you to remove an item from an array and
				replace it with another item. */
				...tableBodyData.slice(0, selectedTextIndexPosition),
				...tableBodyData.slice(selectedTextIndexPosition + 1),
			],
		});
	};

	return (
		<>
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
							<>
								{tableBodyData[selectedTableRow] && (
									<BlockControls
										controls={[
											{
												title: __("Delete Row", "block-gamblino"),
												icon: "trash",
												onClick: removeTableRowHandler.bind(
													null,
													selectedTableRow
												),
											},
										]}
									></BlockControls>
								)}

								<tr
									key={index}
									onKeyDown={(e) =>
										e.key === "enter" && setSelectedTableRow(index)
									}
									onClick={() => setSelectedTableRow(index)}
								>
									<td>
										<RichText
											className="p.text-column-one"
											value={info.textColumnOne}
											onChange={(value) => {
												// prettier-ignore
												onChangeTextColumnOneHandler(index, value);
											}}
											tagName="p"
											placeholder="Feature text..."
										/>
									</td>
									<td>
										<RichText
											className='text-column-two"'
											value={info.textColumnTwo}
											onChange={(value) => {
												// prettier-ignore
												onChangeTextColumnTwoHandler(index, value);
											}}
											tagName="div"
											placeholder="Description text..."
										/>
									</td>
								</tr>
							</>
						);
					})}
				</tbody>
				<Tooltip text={__("Add feature text", "block-gamblino")}>
					<button
						type="button"
						aria-label={__("Add feature text", "block-gamblino")}
						onClick={newTableRowHandler}
					>
						<Icon icon="plus" />
					</button>
				</Tooltip>
			</table>
		</>
	);
};

export default TableColumn;