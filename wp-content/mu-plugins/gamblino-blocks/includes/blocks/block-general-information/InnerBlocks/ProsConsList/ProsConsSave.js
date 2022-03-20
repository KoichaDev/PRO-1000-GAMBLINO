import { useBlockProps, RichText } from '@wordpress/block-editor';

const ProsConsSave = ({ attributes }) => {
  const { titlePros, titleProsTextColor, prosTextLists } = attributes

  return (
    <div {...useBlockProps.save({
      className: 'wp-block-gamblino-block-general-information__list'
    })}>

      {titlePros && (
        <RichText.Content
          {...useBlockProps.save({
            style: { color: titleProsTextColor },
          })}
          value={titlePros}
          tagName="h3"
        />
      )}

      {prosTextLists.length > 0 && (
        <div className="wp-block-gamblino-list-pros">
          <ul>
            {prosTextLists.map((list, index) => {
              return (
                <li key={index}>
                  <RichText.Content tagName="p" value={list.text} />
                </li>
              );
            })}
          </ul>
        </div>
      )}

    </div>
  )
}

export default ProsConsSave