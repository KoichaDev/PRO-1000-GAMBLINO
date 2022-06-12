// Wordpress components
import { __ } from "@wordpress/i18n";
import { BlockControls, AlignmentToolbar } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";

// React Icons
import { CgFormatColor, CgColorBucket } from "react-icons/cg";
import { BiLink, BiUnlink } from "react-icons/bi";
import { SiShadow } from "react-icons/Si";
import { MdLink } from "react-icons/md";
import { AiOutlineBorder } from "react-icons/ai";

// UI Icon
import { PaddingIcon } from "@/common/Icons/Spaces";

const ToolbarGroupControl = (props) => {
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
        <BlockControls
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
                    icon: AiOutlineBorder,
                    title: __("Border Radius", "block-gamblino"),
                    onClick: () => {
                        setAttributes({
                            isBorderRadiusMenuOpen: !isBorderRadiusMenuOpen,
                        });
                    },
                    isActive: isBorderRadiusMenuOpen,
                },
            ]}
        >
            <AlignmentToolbar
                value={buttonTextAlignment}
                onChange={(value) => setAttributes({ buttonTextAlignment: value })}
            />
            <ToolbarGroup>
                <ToolbarButton
                    title={__("Link Configuration", "block-gamblino")}
                    icon={MdLink}
                    value={isLinkToolbarButtonOpen}
                    onClick={() => setAttributes({ isLinkToolbarButtonOpen: !isLinkToolbarButtonOpen })}
                ></ToolbarButton>
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarButton
                    icon={CgFormatColor}
                    onClick={onClickTextColor}
                ></ToolbarButton>
                <ToolbarButton
                    icon={CgColorBucket}
                    onClick={onClickBackgrouncColor}
                ></ToolbarButton>
            </ToolbarGroup>
        </BlockControls>
    );
};

export default ToolbarGroupControl;
