import { useBlockProps, RichText } from '@wordpress/block-editor';

const ProsConsSave = ({ attributes }) => {
  const {
    titlePros,
    titleProsTextColor,
    prosTextLists,
    titleCons,
    titleConsTextColor,
    consTextLists
  } = attributes

  return (
    <section {...useBlockProps.save({
      className: 'wp-block-gamblino-block-general-information__review-1'
    })}>

      <div className='wp-block-gamblino-block-general-information__review-2-column-one'>
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
          <div className="wp-block-gamblino-block-general-information__review-3-pros-list">
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

      <div className='wp-block-gamblino-block-general-information__review-2-column-two'>
        {titleCons && (
          <RichText.Content
            {...useBlockProps.save({
              style: { color: titleConsTextColor },
            })}
            value={titleCons}
            tagName="h3"
          />
        )}

        {consTextLists.length > 0 && (
          <div className="wp-block-gamblino-block-general-information__review-3-cons-list">
            <ul>
              {consTextLists.map((list, index) => {
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
    </section>
  )
}

export default ProsConsSave