// React dependency
import { MdOutlineLink, MdOutlineLinkOff } from 'react-icons/md'

// Wordpress dependencies
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { PaddingIcon } from '../../../../UI/Icons/Spaces'

// hooks
import useSelectorsPadding from './hooks/useSelectorsPadding'
import useActionPadding from './hooks/useActionPadding'
import useUpdateEffect from '../../../../hooks/utilities/useUpdateEffect'

// UI Component
import { ButtonIcon } from '../../../../UI/Button';

// Redux Store
import reduxControlPaddingStore from './stores/index';

// styling
import './Padding.scss';

const ControlsRangeControl = ({ blockName }) => {
    const [isClicked, setIsClicked] = useState(false)
    const {
        paddingValue,
        paddingUnit,
        paddingVerticalUnit,
        paddingVerticalValue,
        paddingHorizontalUnit,
        paddingHorizontalValue,

    } = useSelectorsPadding(blockName)

    const {
        setPaddingValue,
        setPaddingUnit,
        setIsPaddingLinkedSides,
        setPaddingVerticalValue,
        setPaddingVerticalUnit,
        setPaddingHorizontalValue,
        setPaddingHorizontalUnit
    } = useActionPadding(blockName)

    // We have to use the useEffect in order to trigger the store's reducer, otherwise, this block doesn't get the chance to render fast enough
    useEffect(() => reduxControlPaddingStore(blockName), [])
    // we have to make sure to not render on the first render, otherwise, the dispatch of padding Linked Sides will not work, since the function doesn't exist yet.
    useUpdateEffect(() => setIsPaddingLinkedSides(isClicked), [isClicked])

    const onChangePaddingHandler = (e) => setPaddingValue(e.target.value);

    const onChangeSelectPaddingHandler = (e) => setPaddingUnit(e.target.value);

    const onChangeVerticalPaddingHandler = e => setPaddingVerticalValue(e.target.value);

    const onChangeSelectVerticalPaddingHandler = e => setPaddingVerticalUnit(e.target.value);

    const onChangeHorizontalPaddingHandler = e => setPaddingHorizontalValue(e.target.value);

    const onChangeSelectHorizontalPaddingHandler = e => setPaddingHorizontalUnit(e.target.value);

    const onClickButtonHandler = () => setIsClicked(prevClicked => !prevClicked);

    return (
        <InspectorControls>
            <PanelBody>
                <p>Padding</p>
                <div className='controls-padding'>
                    <PaddingIcon fillLeft={isClicked ? '#C5C7C9' : ''} fillRight={isClicked ? '#C5C7C9' : ''} />

                    {!isClicked &&
                        <div className='controls-padding_input-component'>
                            <input
                                type="number"
                                value={paddingValue}
                                onChange={onChangePaddingHandler}
                            />
                            <select aria-label={__('Select unit', 'block-gamblino')} value={paddingUnit} onChange={onChangeSelectPaddingHandler}>
                                <option value='px'>px</option>
                                <option value='em'>em</option>
                            </select>
                        </div>}


                    {isClicked &&
                        <div className='controls-padding_input-component'>
                            <input
                                type="number"
                                aria-label='Vertical'
                                title='Vertical'
                                value={paddingVerticalValue}
                                onChange={onChangeVerticalPaddingHandler}
                            />
                            <select aria-label={__('Select unit', 'block-gamblino')} value={paddingVerticalUnit} onChange={onChangeSelectVerticalPaddingHandler}>
                                <option value="px">px</option>
                                <option value="em">em</option>
                            </select>
                        </div>
                    }

                    {isClicked &&
                        <div className='controls-padding_input-component'>
                            <input
                                type="number"
                                aria-label='Horizontal'
                                title='Horizontal'
                                value={paddingHorizontalValue}
                                onChange={onChangeHorizontalPaddingHandler}
                            />
                            <select aria-label={__('Select unit', 'block-gamblino')} value={paddingHorizontalUnit} onChange={onChangeSelectHorizontalPaddingHandler}>
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
