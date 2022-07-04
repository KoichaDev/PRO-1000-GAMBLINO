import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { ToggleControl } from "@wordpress/components";

const ToggledDuplicatedImageSettings = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isToggledImageDuplication } = attributes;

    useEffect(() => {
        if (isToggledImageDuplication === false) {
            setAttributes({ imageDuplication: [{ count: 1 }] });
            setAttributes({ countImageFilterOpacity: 0 });
            setAttributes({ imageOpacityValue: 0.35 });

        }
    }, [isToggledImageDuplication]);

    return (
        <>
            <p className="mb-10" style={{ color: "#1e1e1e", fontSize: "13px" }}>
                Toggled Duplicated Image functionality
            </p>

            <p className="mb-10" style={{ color: "#BF1622", fontSize: "12px" }}>
                If You toggle it to inactive, then the value of the duplicated images,
                opacity filtered and opacity level will reset to default value
            </p>
            <ToggleControl
                label={
                    !isToggledImageDuplication
                        ? __("Inactive", "block-gamblino")
                        : __("Active", "block-gamblino")
                }
                checked={isToggledImageDuplication}
                onChange={() =>
                    setAttributes({
                        isToggledImageDuplication: !isToggledImageDuplication,
                    })
                }
            />
        </>
    );
};

export default ToggledDuplicatedImageSettings;
