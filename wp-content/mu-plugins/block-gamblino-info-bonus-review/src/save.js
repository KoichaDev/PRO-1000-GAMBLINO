// WP Block Dependencies
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{__(
				'Block Gamblino Info Bonus Review – hello from the saved content!',
				'block-gamblino-info-bonus-review'
			)}
		</p>
	);
}
