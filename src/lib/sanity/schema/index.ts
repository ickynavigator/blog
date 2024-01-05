import documentTypes from '~/lib/sanity/schema/document';
import objectTypes from '~/lib/sanity/schema/object';

export const schema = [...documentTypes, ...objectTypes];
