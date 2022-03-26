// Wordpress dependencies
import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data'

// WordPress component
import '../../BlockConfiguration/BlockConfigurationSidebar';
import InspectorControlPadding from '../../../block-wordpress-components/block-inspector-controls/Padding/Padding';
import InspectorControlsRangeControl from '../../../block-wordpress-components/block-inspector-controls/ControlsRangeControl'

// Hooks ControlPadding
import useActionPadding from '../../../block-wordpress-components/block-inspector-controls/Padding/hooks/useActionPadding';
import useSelectorsPadding from '../../../block-wordpress-components/block-inspector-controls/Padding/hooks/useSelectorsPadding';

// React component
import { ButtonPrimary } from '../../../../UI/Button';

import './ButtonEdit.scss';

const ButtonEdit = ({ attributes, setAttributes }) => {
    const { text, borderRadius } = attributes;

    const {
        paddingValue,
        paddingUnit,
        paddingVerticalValue,
        paddingVerticalUnit,
        paddingHorizontalValue,
        paddingHorizontalUnit,
        isPaddingLinkedSides,
    } = useSelectorsPadding('blocks-control/padding')

    // padding styling
    const padding = `${paddingValue === '' ? 0 : paddingValue}${paddingUnit}`
    const paddingVertical = `${paddingVerticalValue === '' ? 0 : paddingVerticalValue}${paddingVerticalUnit}`
    const paddingHorizontal = `${paddingHorizontalValue === '' ? 0 : paddingHorizontalValue}${paddingHorizontalUnit}`

    const styles = {
        borderRadius: `${borderRadius}px`,
        padding: !isPaddingLinkedSides ? padding : `${paddingVertical} ${paddingHorizontal}`,
    }

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

            <InspectorControlPadding blockName='blocks-control/padding' />

            <ButtonPrimary style={styles}>
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