var Base = {}
  , MetaTags = require('./meta-tags.js')
  , _ = require('underscore');

_.extend(Base, MetaTags);

/**
 * Check if section item is resource item
 *
 * @param {String} section_item
 * @param {Array} resources
 * @return {Boolean}
 */
Base.isCurrentSection = function (section_item, resources) {
  var resource
    , resource_name;

  if (!resources.length) {
    return false;
  }

  resource = resources[0];
  resource_name = resource.name.toLowerCase();

  switch(resource_name) {
  case 'user information':
    return section_item === 'me';
    break;
  case 'tasklists':
    return section_item === 'task list';
    break;
  default:
    return resource_name === section_item;
  }
}

module.exports = Base;
