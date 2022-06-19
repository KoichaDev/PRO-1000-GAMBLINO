import { MdOutlineLinkOff, MdOutlineLink } from "react-icons/md";
import { ButtonIcon } from "@/common/UI/Button";

const ButtonLinkSideMargin = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { IsClickedLinkSidesMargin } = attributes;
    return (
        <div className="controls-padding">
            <ButtonIcon
                onClick={() => {
                    setAttributes({
                        IsClickedLinkSidesMargin: !IsClickedLinkSidesMargin,
                    });
                }}
            >
                {IsClickedLinkSidesMargin ? <MdOutlineLinkOff /> : <MdOutlineLink />}
            </ButtonIcon>
        </div>
    );
};

export default ButtonLinkSideMargin;
