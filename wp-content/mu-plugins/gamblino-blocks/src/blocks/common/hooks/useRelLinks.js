const useRelLinks = (attributes) => {
    const { isFollowToggled, isSponsoredToggled, isUGCToggled } = attributes;

    const relContent = {};

    if (isFollowToggled) {
        Object.assign(relContent, {
            rel: "follow",
        });
    }

    if (isFollowToggled) {
        Object.assign(relContent, {
            rel: "follow noreferrer noopener",
        });
    }

    if (!isFollowToggled) {
        Object.assign(relContent, {
            rel: "nofollow noreferrer noopener",
        });
    }

    if (isUGCToggled) {
        Object.assign(relContent, {
            rel: "ugc",
        });
    }

    if (isSponsoredToggled) {
        Object.assign(relContent, {
            rel: "sponsored noreferrer noopener",
        });
    }

    if (isFollowToggled && isSponsoredToggled) {
        Object.assign(relContent, {
            rel: "follow sponsored noreferrer noopener",
        });
    }

    if (isFollowToggled && isUGCToggled) {
        Object.assign(relContent, {
            rel: "follow ugc noreferrer noopener",
        });
    }

    if (isSponsoredToggled && isUGCToggled) {
        Object.assign(relContent, {
            rel: "sponsored ugc noreferrer noopener",
        });
    }

    if (isFollowToggled && isSponsoredToggled && isUGCToggled) {
        Object.assign(relContent, {
            rel: "follow sponsored ugc noreferrer noopener",
        });
    }

    return { relContent };
};

export default useRelLinks;
