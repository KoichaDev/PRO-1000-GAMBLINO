import React from 'react'

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";


const SaveCardBlock = () => {
	return (
		<section {...useBlockProps.save()}>
			<InnerBlocks.Content />
		</section>
	)
}

export default SaveCardBlock