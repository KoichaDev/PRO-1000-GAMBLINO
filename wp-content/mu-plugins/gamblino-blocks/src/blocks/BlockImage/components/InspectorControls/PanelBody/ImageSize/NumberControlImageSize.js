import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { __experimentalNumberControl as NumberControl } from "@wordpress/components";
import useImageStore from "@/blocks/BlockImage/store/imageStore";

const NumberControlImageSize = ({ ...props }) => {
    const { setAttributes } = props;

    // prettier-ignore
    const setNumberControlClicked = useImageStore((state) => state.setNumberControlClicked);
    // prettier-ignore
    const setBtnDimensionClicked = useImageStore(state => state.setBtnDimensionClicked);

    const width = useImageStore((state) => state.width);
    const height = useImageStore((state) => state.height);
    const setWidth = useImageStore((state) => state.setWidth);
    const setHeight = useImageStore((state) => state.setHeight);

    useEffect(() => {
        setAttributes({
            imageDimension: {
                type: "none",
                width: width,
                height: height,
            },
        });
    }, [width, height]);

    const onClickWidthHandler = () => {
        setNumberControlClicked(true);
        setBtnDimensionClicked(false);
    };

    const onClickHeightHandler = () => {
        setNumberControlClicked(false);
        setBtnDimensionClicked(true);
    };

    return (
        <div className="flex-row gap-10 mb-7">
            <NumberControl
                label={__("Width", "block-gamblino")}
                isShiftStepEnabled={true}
                value={width}
                onChange={(value) => setWidth(+value)}
                shiftStep={10}
                onClick={onClickWidthHandler}
            />

            <NumberControl
                label={__("Height", "block-gamblino")}
                isShiftStepEnabled={true}
                value={height}
                onChange={(value) => setHeight(+value)}
                shiftStep={10}
                onClick={onClickHeightHandler}
            />
        </div>
    );
};

export default NumberControlImageSize;
