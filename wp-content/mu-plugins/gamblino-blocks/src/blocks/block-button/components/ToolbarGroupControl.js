import { __ } from "@wordpress/i18n";

import { BlockControls, AlignmentToolbar } from "@wordpress/block-editor";

import { CgFormatColor, CgColorBucket } from "react-icons/cg";
import { SiShadow } from "react-icons/Si";
import { AiOutlineBorder } from "react-icons/ai";

import { PaddingIcon } from "@/common/Icons/Spaces";

import {
    ToolbarGroup,
    ToolbarButton,
} from "@wordpress/components";

const ToolbarGroupControl = (props) => {
    const {
        attributes,
        setAttributes,
        onClickBackgrouncColor,
        onClickTextColor,
    } = props;

    const {
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
