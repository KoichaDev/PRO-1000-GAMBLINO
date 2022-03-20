import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from "@wordpress/block-editor";

const AboutBodyEdit = ({ attributes, setAttributes }) => {
    const { aboutTitle, aboutBodyText } = attributes

    return (
        <section {...useBlockProps()}>
            <RichText
                value={aboutTitle}
                onChange={(value) => setAttributes({ aboutTitle: value })}
                tagName="h2"
                placeholder={__('Add title...', 'block-gamblino')}
            />
            <RichText
                value={aboutBodyText}
                onChange={(value) => setAttributes({ aboutBodyText: value })}
                tagName="p"
                placeholder={__('Add text...', 'block-gamblino')}
            />
        </section>
    )
}

export default AboutBodyEdit