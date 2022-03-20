import { useBlockProps, RichText } from '@wordpress/block-editor';

const ProsConsSave = ({ attributes }) => {
  const { titlePros, titleProsTextColor } = attributes

  return (
    <div {...useBlockProps.save({
      className: 'wp-block-gamblino-block-general-information__list'
    })}>

      <RichText.Content
        {...useBlockProps.save({
          style: { color: titleProsTextColor },
        })}
        value={titlePros}
        tagName="h3"
      />
    </div>
  )
}

export default ProsConsSave