import { format } from 'date-fns'
import { __ } from "@wordpress/i18n";
import {useEffect} from '@wordpress/element';

import { useBlockProps, RichText } from "@wordpress/block-editor";

// hooks
import { useGetCurrentPostAuthorName } from "../../../../hooks/useSelectCore";
import { useGetCurrentPost } from "../../../../hooks/useSelectCoreEditor";

// styles
import "./HeaderEdit.scss";

const HeaderEdit = ({ attributes, setAttributes }) => {
    const { author, postLastUpdated, topicName, experiences } = attributes;
	const { name: authorNamePostPublished } = useGetCurrentPostAuthorName() ?? {};
	const { date: postDatePublished } = useGetCurrentPost() ?? {};

    useEffect(() => {
		if (authorNamePostPublished === undefined) return;
		setAttributes({ author: authorNamePostPublished });
	}, [authorNamePostPublished]);

    useEffect(() => { 
        if(postDatePublished === undefined) return;
        const currentPostDate = format(new Date(postDatePublished), 'dd-MM-yyyy')
        setAttributes({ postLastUpdated: currentPostDate });
    }, [postDatePublished])

	return (
		<header {...useBlockProps()}>
			<dl className="wp-block-gamblino-block-general-information__header">
                <dt className="wp-block-gamblino-block-general-information__header__dt-author-key">{__('Author Name:', 'block-gamblino')}</dt>
                <dd className='wp-block-gamblino-block-general-information__header__dd-author-value'>{author}</dd>

                <dt className="wp-block-gamblino-block-general-information__header__dt-post-date-key">{__('Last Updated On:', 'block-gamblino')}</dt>
                <dd className="wp-block-gamblino-block-general-information__header__dt-post-date-value">{postLastUpdated}</dd>
				
                <dt className="wp-block-gamblino-block-general-information__header__dt-topic-key">{__('Topic:', 'block-gamblino')}</dt>
                <RichText
                    className="wp-block-gamblino-block-general-information__header__dt-topic-value"
                    value={topicName}
                    onChange={(value) => setAttributes({ topicName: value })}
                    tagName="dd"
                    placeholder={__('Topic name...', 'block-gamblino')}
                />
                <dt>{__('Experiences:', 'block-gamblino')}</dt>
                <RichText
                    value={experiences}
                    onChange={(value) => setAttributes({ experiences: value })}
                    tagName="dd"
                    placeholder={__('Type Experiences...', 'block-gamblino')}
                />
			</dl>
		</header>
	);
};

export default HeaderEdit;
