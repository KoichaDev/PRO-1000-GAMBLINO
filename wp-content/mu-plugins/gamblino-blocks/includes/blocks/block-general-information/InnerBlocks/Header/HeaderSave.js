import { __ } from '@wordpress/i18n'
import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

const HeaderSave = ({ attributes }) => {
    const { author, postLastUpdated, topicName, experiences } = attributes;

    return (
        <header {...useBlockProps.save()}>
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
    );
};

export default HeaderSave;
