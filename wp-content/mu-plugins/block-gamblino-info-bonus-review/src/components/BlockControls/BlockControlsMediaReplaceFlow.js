import { __ } from "@wordpress/i18n";
import { ToolbarButton } from "@wordpress/components";
import { BlockControls, MediaReplaceFlow } from "@wordpress/block-editor";

const BlockControlsMediaReplaceFlow = (props) => {
    const { imageUrl, imageId, mediaUrl, onSelectImage, onSelectURL, onClickRemoveImage, onError } = props;

    return (
        <>
            {imageUrl && (
                <BlockControls group="inline">
                    {/* This component will ensure we can replace the old image value with new one */}
                    <MediaReplaceFlow
                        name={__("Replace Image", "team-member")}
                        onSelect={onSelectImage}
                        onSelectURL={onSelectURL}
                        onError={onError}
                        accept={"image/*"} //Will disable files that is not image
                        mediaId={imageId}
                        mediaUrl={imageUrl}
                    />

                    <ToolbarButton onClick={onClickRemoveImage}>
                        {__("Remove Image", "team-members")}
                    </ToolbarButton>
                </BlockControls>
            )}
        </>
    );
};

export default BlockControlsMediaReplaceFlow;
