import { __ } from "@wordpress/i18n";
import { ToggleControl } from "@wordpress/components";

const OrientationDuplicatedImageSetting = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isOrientedImage } = attributes;
    return (
        <>
            <p className="mb-10" style={{ color: '#1e1e1e', fontSize: '13px' }}>Image Orientation</p>
            <ToggleControl
                label={
                    !isOrientedImage
                        ? __("Vertical", "block-gamblino")
                        : __("Horizontal", "block-gamblino")
                }
                checked={isOrientedImage}
                onChange={() =>
                    setAttributes({
                        isOrientedImage: !isOrientedImage,
                    })
                }
            />
        </>
    );
};

export default OrientationDuplicatedImageSetting;
