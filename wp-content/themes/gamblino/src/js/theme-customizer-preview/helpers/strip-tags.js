/**
 * It removes all HTML tags from a string, except for the tags you specify
 * @param str - The string to be stripped of tags.
 * @param allow - a string containing allowed tags. If it's empty, no tags are allowed.
 * @returns A function that takes two arguments, str and allow.
 */
const stripHtmlTags = (str, allow) => {
    // making sure the allow arg is a string containing only tags in lowercase (<a><b><c>)
    allow = (((allow || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return str.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allow.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
};

export default stripHtmlTags;