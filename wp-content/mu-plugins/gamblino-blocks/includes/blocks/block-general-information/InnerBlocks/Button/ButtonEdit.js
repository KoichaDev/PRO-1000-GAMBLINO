// Wordpress dependencies
import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data'

// WordPress component
import '../../BlockConfiguration/BlockConfigurationSidebar';
import InspectorControlsControlsPadding from '../../../block-wordpress-components/block-inspector-controls/ControlPadding/ControlPadding';
import InspectorControlsRangeControl from '../../../block-wordpress-components/block-inspector-controls/ControlsRangeControl'

// React component
import { ButtonPrimary } from '../../../../UI/Button';

import './ButtonEdit.scss';

const ButtonEdit = ({ attributes, setAttributes }) => {
    const { text, borderRadius } = attributes;

    const paddingValue = useSelect(select => {
        const paddingStore = select('blocks-control/padding')
        return paddingStore && paddingStore.getPaddingValue().value
    }, [])

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

            <InspectorControlsControlsPadding blockName='blocks-control/padding' />

            <ButtonPrimary style={{ borderRadius: `${borderRadius}px`, padding: `${paddingValue}px` }}>
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