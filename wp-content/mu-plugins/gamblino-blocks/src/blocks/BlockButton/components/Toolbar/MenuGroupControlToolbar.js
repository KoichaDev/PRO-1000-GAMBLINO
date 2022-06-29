// Wordpress components
import { __ } from "@wordpress/i18n";
import { BlockControls, AlignmentToolbar } from "@wordpress/block-editor";
import {
    ToolbarGroup,
    ToolbarButton,
    DropdownMenu,
} from "@wordpress/components";

// React Icons
import { CgFormatColor, CgColorBucket } from "react-icons/cg";
import { SiShadow } from "react-icons/si";
import { MdLink } from "react-icons/md";

// UI Icon
import { PaddingIcon } from "@/common/Icons/Spaces";
import ButtonStylingIcon from "../../icons/ButtonStylingIcon";
import BorderRadiusIcon from "../../icons/BordeRadiusIcon";

const MenuGroupControlToolbar = (props) => {
    const {
        attributes,
        setAttributes,
        onClickBackgrouncColor,
        onClickTextColor,
    } = props;

    const {
        isLinkToolbarButtonOpen,
        isBorderRadiusMenuOpen,
        isShadowMenuOpen,
        buttonTextAlignment,
        isButtonPaddingMenuOpen,
    } = attributes;

    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={buttonTextAlignment}
                    onChange={(value) => setAttributes({ buttonTextAlignment: value })}
                />
                <ToolbarGroup>
                    <ToolbarButton
                        title={__("Link Configuration", "block-gamblino")}
                        icon={MdLink}
                        value={isLinkToolbarButtonOpen}
                        onClick={() =>
                            setAttributes({
                                isLinkToolbarButtonOpen: !isLinkToolbarButtonOpen,
                            })
                        }
                    />
                    <DropdownMenu
                        icon={ButtonStylingIcon}
                        label={__("Styling", "block-gamblino")}
                        controls={[
                            {
                                icon: PaddingIcon,
                                title: __("Padding", "block-gamblino"),
                                onClick: () => {
                                    setAttributes({
                                        isButtonPaddingMenuOpen: !isButtonPaddingMenuOpen,
                                    });
                                },
                                isActive: isButtonPaddingMenuOpen,
                            },
                            {
                                icon: SiShadow,
                                title: __("Shadow", "block-gamblino"),
                                onClick: () => {
                                    setAttributes({ isShadowMenuOpen: !isShadowMenuOpen });
                                },
                                isActive: isShadowMenuOpen,
                            },
                            {
                                icon: BorderRadiusIcon,
                                title: __("Border Radius", "block-gamblino"),
                                onClick: () => {
                                    setAttributes({
                                        isBorderRadiusMenuOpen: !isBorderRadiusMenuOpen,
                                    });
                                },
                                isActive: isBorderRadiusMenuOpen,
                            },
                            {
                                icon: CgColorBucket,
                                title: __("Background Color", "block-gamblino"),
                                onClick: onClickBackgrouncColor,
                            },
                            {
                                icon: CgFormatColor,
                                title: __("Text color", "block-gamblino"),
                                onClick: onClickTextColor,
                            },
                        ]}
                    />
                </ToolbarGroup>
            </BlockControls>
        </>
    );
};

export default MenuGroupControlToolbar;
