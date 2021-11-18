import {categoriesWidgetsHome} from '../config'
const MAXIMUM_POSTS = 5
const TAG_ID = "47"

const getPostsFromCategory = ({ post }, categoryId, _tagId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(parseInt(categoryId)) ).filter(({tags}) => tags.includes(parseInt(_tagId)) )

    export const getPostsGroupedByCategory = source =>  {
      return Object.values(categoriesWidgetsHome)
        .reduce((acc, categoryId) => {
          const posts = getPostsFromCategory(source, categoryId,TAG_ID).slice(0,MAXIMUM_POSTS)
          const category = source.category[categoryId]
          return [...acc, {posts, category}]
        }, [])


}
