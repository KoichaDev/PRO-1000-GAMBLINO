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
import useUpdateEffect from '../../../../hooks/utilities/useUpdateEffect'

// UI Component
import { ButtonIcon } from '../../../../UI/Button';

// Redux Store
import reduxControlPaddingStore from './stores/index';

// styling
import './ControlPadding.scss';

const ControlsRangeControl = ({ blockName }) => {
    const [isClicked, setIsClicked] = useState(false)
    const { paddingValue, paddingVerticalValue, paddingVerticalUnit } = useSelectorsPadding(blockName)
    const { setPaddingValue, setPaddingUnit, setIsPaddingLinkedSides, setPaddingVerticalValue, setPaddingVerticalUnit } = useActionPadding(blockName)

    // We have to use the useEffect in order to trigger the store's reducer, otherwise, this block doesn't get the chance to render fast enough
    useEffect(() => reduxControlPaddingStore(blockName), [])
    useUpdateEffect(() => setIsPaddingLinkedSides(isClicked), [isClicked])

    const onChangePaddingHandler = (e) => setPaddingValue(e.target.value);

    const onChangeSelectPaddingHandler = (e) => setPaddingUnit(e.target.value);

    const onChangeVerticalPaddingHandler = e => setPaddingVerticalValue(e.target.value);

    const onChangeSelectVerticalPaddingHandler = e => setPaddingVerticalUnit(e.target.value);

    const onClickButtonHandler = () => setIsClicked(prevClicked => !prevClicked);

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
                            <input 
                                type="number" 
                                value={paddingValue} 
                                onChange={onChangePaddingHandler} 
                            />
                            <select id="" aria-label={__('Select unit', 'block-gamblino')} onChange={onChangeSelectPaddingHandler}>
                                <option value='px'>px</option>
                                <option value='em'>em</option>
                            </select>
                        </div>}


                    {isClicked &&
                        <div className='controls-padding_input-component'>
                            <input 
                                type="number" 
                                aria-label='Vertical' 
                                value={paddingVerticalValue} 
                                onChange={onChangeVerticalPaddingHandler} 
                            />
                            <select  id="" aria-label={__('Select unit', 'block-gamblino')} onChange={onChangeSelectVerticalPaddingHandler}>
                                <option value="px">px</option>
                                <option value="em">em</option>
                            </select>
                        </div>
                    }

                    {isClicked &&
                        <div className='controls-padding_input-component'>
                            <input type="number" aria-label='Horizontal' />
                            <select name="" id="" aria-label={__('Select unit', 'block-gamblino')}>
                                <option value="px">px</option>
                                <option value="em">em</option>
                            </select>
                        </div>
                    }



                    <ButtonIcon onClick={onClickButtonHandler}>
                        {isClicked ? <MdOutlineLinkOff /> : <MdOutlineLink />}
                    </ButtonIcon>
                </div>
            </PanelBody>
        </InspectorControls>
    );
};

export default ControlsRangeControl;
