// React dependency
import { CgColorPicker } from 'react-icons/cg'

// Wordpress dependencies
import {__} from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

const BlockTextColorPicker = ({ title, isVisible, onClick }) => {
    return (
        <>
            <BlockControls group="inline">
                <ToolbarGroup>
                    {isVisible && (
                        <ToolbarButton
                            icon={CgColorPicker}
                            onClick={onClick}>
                            {__(title, "block-gamblino")}
                        </ToolbarButton>
                    )}
               
                </ToolbarGroup>
            </BlockControls>
        </>
    )
}

export default BlockTextColorPicker