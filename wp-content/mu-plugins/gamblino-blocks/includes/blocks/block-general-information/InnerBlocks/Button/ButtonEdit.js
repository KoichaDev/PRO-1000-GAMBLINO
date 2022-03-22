// Wordpress dependencies
import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'
import { useState, useEffect } from '@wordpress/element';

// WordPress component
import '../../BlockConfiguration/BlockConfigurationSidebar';
import InspectorControlsControlsPadding from '../../../block-wordpress-components/block-inspector-controls/ControlsPadding/ControlsPadding';
import InspectorControlsRangeControl from '../../../block-wordpress-components/block-inspector-controls/ControlsRangeControl'

// React component
import { ButtonPrimary } from '../../../../UI/Button';

import './ButtonEdit.scss';

const ButtonEdit = ({ attributes, setAttributes }) => {
    const { text, borderRadius } = attributes;
    console.log(attributes);

    return (
        <div {...useBlockProps({
            className: 'wp-block-gamblino-block-general-information__button'
        })}>

            <InspectorControlsRangeControl
                label={__("Button Border Radius", "team-members")}
                value={+borderRadius}
                onChange={(value) => setAttributes({ borderRadius: value })}
                min={1}
                max={55}
            />

            <InspectorControlsControlsPadding />

            <ButtonPrimary style={{ borderRadius: `${borderRadius}px` }}>
                <RichText
                    value={text}
                    onChange={(value) => setAttributes({ text: value })}
                    tagName="p"
                    placeholder={__('text...', 'block-gamblino')}
                />
            </ButtonPrimary>
        </div>
    )
}

export default ButtonEdit