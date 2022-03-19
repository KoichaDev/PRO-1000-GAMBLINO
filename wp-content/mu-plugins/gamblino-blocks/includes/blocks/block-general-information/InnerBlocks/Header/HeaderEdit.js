import { __ } from "@wordpress/i18n";
import {useEffect} from '@wordpress/element'

import { useBlockProps, RichText } from "@wordpress/block-editor";

import {useGetCurrentPostAuthorName} from '../../../../hooks/useSelectCore'


// styles
import "./HeaderEdit.scss";

const HeaderEdit = ({ attributes, setAttributes }) => {
    const { author } = attributes;
    const { name: authorNameState } = useGetCurrentPostAuthorName() ?? {}

    useEffect(() => {
        if (authorNameState !== undefined) {
            setAttributes({ author: authorNameState })
        }
    }, [authorNameState])


    return (
        <div {...useBlockProps()}>
            <dl>
                <dt>Author Name:</dt>
                <RichText
                    value={author}
                    tagName="dd"
                    placeholder={__("author name...", "block-gamblino")}
                />

                {/* <dt>Last Updated On</dt>
                <RichText
                    value={author}
                    onChange={(values) => setAttributes({ author: values })}
                    tagName="dd"
                    placeholder={__("author name...", "block-gamblino")}
                /> */}
            </dl>
        </div>
    );
};

export default HeaderEdit;
