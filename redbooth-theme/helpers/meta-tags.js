var MetaTags = {}
  , SEO_TAGS
  , _ = require('underscore');

SEO_TAGS = ['NAME', 'META_DESCRIPTION', 'META_KEYWORDS'];

/**
 * Parse aglio api meta information and extract SEO info for that page
 *
 * @param {Array} metadata
 * @return {Array}
 */
MetaTags.parseMetadata = function (metadata) {
  var tags;
  tags = _.filter(metadata, function (meta_object) {
    if (_.contains(SEO_TAGS, meta_object.name)) {
      meta_object.tag_name = meta_object.name.replace(/META_/i, '').toLowerCase();
      return meta_object;
    }
  });

  return _.uniq(tags.reverse(), false, _.iteratee('name'));
}

module.exports = MetaTags;
