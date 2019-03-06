/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'about-us') {
    return '/about-us/' + doc.id
  }

  if (doc.type === 'blog') {
    return '/post/' + doc.id
  }

  if (doc.type === 'about-us') {
    return '/' + doc.type
  }

  return '/not-found'
}
