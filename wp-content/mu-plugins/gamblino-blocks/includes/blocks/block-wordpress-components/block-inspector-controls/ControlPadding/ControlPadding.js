// React dependency
import { MdOutlineLink, MdOutlineLinkOff } from 'react-icons/md'

// Wordpress dependencies
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { PaddingIcon } from '../../../../UI/Icons/Spaces'
import { useSelect, useDispatch } from '@wordpress/data'

// hooks
import useSelectorsPadding from './hooks/useSelectorsPadding'
import useActionPadding from './hooks/useActionPadding'

// UI Component
import { ButtonIcon } from '../../../../UI/Button';

// Redux Store
import reduxControlPaddingStore from './stores/index';

// styling
import './ControlPadding.scss';

const ControlsRangeControl = ({ blockName }) => {
    const [isClicked, setIsClicked] = useState(false)

    const { paddingValue, paddingUnit } = useSelectorsPadding(blockName)
    const { setPaddingValue, setPaddingUnit } = useActionPadding(blockName)

    // We have to use the useEffect in order to trigger the store's reducer, otherwise, this block doesn't get the chance to render fast enough
    useEffect(() => reduxControlPaddingStore(blockName), [])

    const borderRadiusValue = useSelect(select => {
        const borderRadiusStore = select(blockName)
        return borderRadiusStore && borderRadiusStore.getBorderRadiusValue().value
    }, [])



    const onChangePaddingHandler = (e) => setPaddingValue({ value: e.target.value })

    const onChangeSelectPaddingHandler = (e) => setPaddingUnit({ value: e.target.value })


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

                    {!isClicked &&
                        <div className='controls-padding_input-component'>
                            <input type="number" value={paddingValue} onChange={onChangePaddingHandler} />
                            <select name="" id="" aria-label={__('Select unit', 'block-gamblino')} onChange={onChangeSelectPaddingHandler}>
                                <option value='px'>px</option>
                                <option value='em'>em</option>
                            </select>
                        </div>}


                    {isClicked &&
                        <div className='controls-padding_input-component'>
                            <input type="number" {...restInput} aria-label='Vertical' />
                            <select name="" id="" aria-label={__('Select unit', 'block-gamblino')}>
                                <option value="px">px</option>
                                <option value="px">em</option>
                            </select>
                        </div>
                    }

                    {isClicked &&
                        <div className='controls-padding_input-component'>
                            <input type="number" {...restInput} aria-label='Horizontal' />
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
