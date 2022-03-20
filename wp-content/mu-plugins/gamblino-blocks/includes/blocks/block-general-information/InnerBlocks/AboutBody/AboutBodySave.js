import { __ } from '@wordpress/i18n'
import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

const AboutBodySave = ({ attributes }) => {
  const { aboutTitle, aboutTitleTextColor, aboutBodyText, aboutBodyTextColor } = attributes

  return (
    <section {...useBlockProps.save()}>
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
    </section>
  );
};

export default AboutBodySave;
