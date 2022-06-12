// Wordpress components
import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

// React Icons
import { MdOutlineLink, MdOutlineLinkOff } from "react-icons/md";

// UI Icons
import { PaddingIcon } from "@/common/Icons/Spaces";
import { ButtonIcon } from "@/common/UI/Button";

const PaddingPanelBody = ({ ...props }) => {
    const { attributes, setAttributes } = props;

    const {
        buttonIsClickedLinkSides,
        isButtonPaddingMenuOpen,
        buttonPadding,
        paddingSelectUnit,
        buttonPaddingVertical,
        paddingVerticalSelectUnit,
        buttonPaddingHorizontal,
        paddingHorizontalSelectUnit,
    } = attributes;

    // prettier-ignore
    const [isClickedHorizontalField, setIsClickedHorizontalField] = useState(false);
    const [isClickedVerticalField, setIsClickedVerticalField] = useState(false);

    let paddingIconContent = "";
    if (!buttonIsClickedLinkSides) {
        paddingIconContent = <PaddingIcon />;
    } else {
        if (isClickedVerticalField) {
            paddingIconContent = (
                <PaddingIcon
                    fillTop={isClickedVerticalField ? "#C5C7C9" : ""}
                    fillBottom={isClickedVerticalField ? "#C5C7C9" : ""}
                />
            );
        } else {
            paddingIconContent = (
                <PaddingIcon
                    fillTop="#1e1e1e"
                    fillBottom="#1e1e1e"
                    fillLeft={isClickedHorizontalField ? "#C5C7C9" : ""}
                    fillRight={isClickedHorizontalField ? "#C5C7C9" : ""}
                />
            );
        }
    }

    return (
        <>
            {isButtonPaddingMenuOpen && (
                <PanelBody title={__("Padding", 'block-gamblino')}>
                    <div className="controls-padding">
                        {paddingIconContent}

                        {!buttonIsClickedLinkSides && (
                            <div className="controls-padding_input-component">
                                <input
                                    type="number"
                                    value={buttonPadding}
                                    onChange={(e) =>
                                        setAttributes({ buttonPadding: +e.target.value })
                                    }
                                />
                                <select
                                    aria-label={__("Select unit", "block-gamblino")}
                                    value={paddingSelectUnit}
                                    onChange={(e) =>
                                        setAttributes({ paddingSelectUnit: e.target.value })
                                    }
                                >
                                    <option value="px">px</option>
                                    <option value="em">em</option>
                                </select>
                            </div>
                        )}
                        {buttonIsClickedLinkSides && (
                            <div className="controls-padding_input-component">
                                <input
                                    type="number"
                                    aria-label="Vertical"
                                    title="Vertical"
                                    value={buttonPaddingVertical}
                                    onChange={(e) => {
                                        setAttributes({
                                            buttonPaddingVertical: +e.target.value,
                                        });
                                    }}
                                    onClick={() => {
                                        setIsClickedVerticalField(true);
                                        setIsClickedHorizontalField(false);
                                    }}
                                />
                                <select
                                    aria-label={__("Select unit", "block-gamblino")}
                                    value={paddingVerticalSelectUnit}
                                    onChange={(e) =>
                                        setAttributes({
                                            paddingVerticalSelectUnit: e.target.value,
                                        })
                                    }
                                >
                                    <option value="px">px</option>
                                    <option value="em">em</option>
                                </select>
                            </div>
                        )}
                        {buttonIsClickedLinkSides && (
                            <div className="controls-padding_input-component">
                                <input
                                    type="number"
                                    aria-label="Horizontal"
                                    title="Horizontal"
                                    value={buttonPaddingHorizontal}
                                    onChange={(e) => {
                                        setAttributes({
                                            buttonPaddingHorizontal: +e.target.value,
                                        });
                                    }}
                                    onClick={() => {
                                        setIsClickedHorizontalField(true);
                                        setIsClickedVerticalField(false);
                                    }}
                                />
                                <select
                                    aria-label={__("Select unit", "block-gamblino")}
                                    value={paddingHorizontalSelectUnit}
                                    onChange={(e) =>
                                        setAttributes({
                                            paddingHorizontalSelectUnit: e.target.value,
                                        })
                                    }
                                >
                                    <option value="px">px</option>
                                    <option value="em">em</option>
                                </select>
                            </div>
                        )}
                        <ButtonIcon
                            onClick={() => {
                                setAttributes({
                                    buttonIsClickedLinkSides: !buttonIsClickedLinkSides,
                                });
                            }}
                        >
                            {buttonIsClickedLinkSides ? (
                                <MdOutlineLinkOff />
                            ) : (
                                <MdOutlineLink />
                            )}
                        </ButtonIcon>
                    </div>
                </PanelBody>
            )}
        </>
    );
};

export default PaddingPanelBody;
