import { __ } from '@wordpress/i18n'
import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

const BodySave = ({ attributes }) => {
  const { aboutTitle, aboutTitleTextColor, aboutBodyText, aboutBodyTextColor } = attributes

  return (
    <div {...useBlockProps.save({
      className: 'wp-block-gamblino-block-general-information__body'
    })}>
      <RichText.Content
        {...useBlockProps.save({
          style: { color: aboutTitleTextColor},
        })}
        value={aboutTitle}
        tagName="h2"
      />
      <RichText.Content
        {...useBlockProps.save({
          style: { color: aboutBodyTextColor },
        })}
        value={aboutBodyText}
        tagName="p"
      />
    </div>
  );
};

export default BodySave;
