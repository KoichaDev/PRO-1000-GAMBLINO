// React dependency
import { MdOutlineLink, MdOutlineLinkOff } from 'react-icons/md'

// Wordpress dependencies
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { PaddingIcon } from '../../../../UI/Icons/Spaces'

// UI Component
import { ButtonIcon } from '../../../../UI/Button';

import './ControlsPadding.scss';

const ControlsRangeControl = ({ ...restInput }) => {
    const [isClicked, setIsClicked] = useState(false)
    const [paddingUnit, setPaddingUnit] = useState()

    return (
        <InspectorControls>
            <PanelBody>
                <h2>
                    <strong>
                        Dimensions
                    </strong>
                </h2>
                <div className='controls-padding'>
                    <PaddingIcon fillLeft={isClicked ? '#C5C7C9' : ''} fillRight={isClicked ? '#C5C7C9' : ''} />
                    <div className='controls-padding_input-component'>
                        <input type="number" {...restInput} />
                        <select name="" id="" aria-label={__('Select unit', 'block-gamblino')}>
                            <option value="px">px</option>
                            <option value="px">em</option>
                        </select>
                    </div>

                    {isClicked &&
                        <div className='controls-padding_input-component'>
                            <input type="number" {...restInput} />
                            <select name="" id="" aria-label={__('Select unit', 'block-gamblino')}>
                                <option value="px">px</option>
                                <option value="px">em</option>
                            </select>
                        </div>
                    }



                    <ButtonIcon onClick={() => setIsClicked(prevClicked => !prevClicked)}>
                        {isClicked ? <MdOutlineLinkOff /> : <MdOutlineLink />}
                    </ButtonIcon>
                </div>
            </PanelBody>
        </InspectorControls>
    );
};

export default ControlsRangeControl;
