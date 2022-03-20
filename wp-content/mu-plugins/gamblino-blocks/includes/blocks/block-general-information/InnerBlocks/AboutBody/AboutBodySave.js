import { __ } from '@wordpress/i18n'
import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

const AboutBodySave = ({ attributes }) => {
  const { aboutTitle, aboutBodyText } = attributes

  return (
    <section {...useBlockProps.save()}>
      <RichText.Content
        value={aboutTitle}
        tagName="h2"
      />
      <RichText.Content
        value={aboutBodyText}
        tagName="p"
      />
    </section>
  );
};

export default AboutBodySave;
