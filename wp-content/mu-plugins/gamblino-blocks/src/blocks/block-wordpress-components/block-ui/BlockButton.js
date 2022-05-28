// Wordpress dependencies
import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

// WordPress component
import InspectorControlsRangeControl from '../block-inspector-controls/ControlsRangeControl'

const BlockButton = (props) => {
    const { 
        classNameUseBlockProps, 
        ...richTextProps 
    } = props

    return (
        <div {...useBlockProps({
            className: classNameUseBlockProps
        })}>
            <InspectorControlsRangeControl
                label={__("Button Border Radius", "block-gamblino")}
                value={+borderRadius}
                onChange={(value) => setAttributes({ borderRadius: value })}
                min={1}
                max={55}
            />

            <RichText
              {...richTextProps}
            />
        </div>
    )
}

export default BlockButton