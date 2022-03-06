import { MediaPlaceholder } from "@wordpress/block-editor";
import { Spinner } from "@wordpress/components";
import { isBlobURL } from "@wordpress/blob";

const HeaderImage = ({ onSelect, onSelectURL, onError, ...attributes }) => {
    const { url, alt, noticeUI } = attributes;

    return (
        <>
            {url && (
                <div
                    className={`wp-block-blocks-course-team-member-img ${isBlobURL(url) ? " is-loading" : ""
                        }`}
                >
                    <img src={url} alt={alt} />
                    {isBlobURL(url) && <Spinner />}
                </div>
            )}
            <MediaPlaceholder
                icon="admin-users"
                onSelect={onSelect}
                onSelectURL={onSelectURL}
                onError={onError}
                accept={"image/*"} //Will disable files that is not image
                allowedTypes={["image"]} // This will show on the computer the files are not image will be disabled (can't be selected)
                disableMediaButtons={url} // This will disable the media upload if there is a image being selected
                notices={noticeUI}
            />
        </>
    );
};

export default HeaderImage;
