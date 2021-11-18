import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link"; 
import FeaturedMedia from "./featured-media";
import { getPostsGroupedByCategory } from "./helper";
// import eventGroupedByCategory from "./helper/eventGroupedByCategory";
import initiatives from "./list/images/initiative.png";
/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const PerCatPost = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategory(state.source);
  //const NewsPerCategory = eventGroupedByCategory(state.source);
  console.log(postsPerCategory) 

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */

  // Load the post, but only if the data is ready.
   
  return data.isReady ? (
    <FlexContainer>
       <Container>
         {postsPerCategory.map(({ posts, category, isNotHeader }, index) => (
           
            <CategoryGP key={index} className="GroupCategory col-12 align-self-strech">
                  {isNotHeader?<HeadingGroupCategory  className={`${category.slug}`}>  <Illust src={`/static/images/${category.slug}.png`} title={category.link}/> {category.name}</HeadingGroupCategory>:<span/>}
                <div className="GroupCategory-box col-md-12">
                {posts.map((post, index) => (
                  <article key={index}>
                    <div>
                        <div px={2}>
                         {  <Link link={post.link}>
                            <h2>
                              <Html2React html={post.title.rendered} />
                            </h2>
                          </Link> }
                          <Html2React html={post.excerpt.rendered} />
                        </div>
                      
                    </div>
                  </article>
                  ))}
                  </div>
                  {isNotHeader?<Link link={category.link}>
                  <p>&gt;&gt; See more <strong>{category.name}</strong> related posts </p>
                </Link>:<span/>}
            </CategoryGP>
          ))
        }
    </Container>
    </FlexContainer>
  ) : null;
};

export default connect(PerCatPost);
const FlexContainer = styled.div`
  display: flex;
`
const Illust = styled.img`
  max-width: 50px;
  border-radius: 25px;
  margin-right: 25px;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  background-color: #fff;
  color: #444;  
  min-width: 400px;
  margin: 0 auto;
  padding-right: 8px;
  padding-left: 8px;
  list-style: none;
  @media (max-width: 800px) {
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  background-color: #fff;
  color: #444;  
  min-width: 400px;
  margin: 0 auto;
  padding-right: 10px;
  padding-left: 10px;
  list-style: none;
}
`;

const HeadGroupCategory = styled.article`
  max-width:771px;
  margin:0 auto;
  position: relative;
  margin-bottom:3.5rem;
  .article-title {    
    &:hover {
      h1 {
        color:var(--brand);
      }
    }
  }
`;
 

const CategoryGP = styled.article`
max-width:771px;
margin:0 auto;
position: relative;
/**Job articles**/
&.newscategory {
  max-width: 100%;
  margin: 0;
  margin-bottom: 1 rem;
  display: flex;
  flex-direction: column;
  .categorybox {
    padding: 2rem;
    background: var(--grey);
    box-shadow: 0px 2px 16px -9px rgba(0,0,0,0.5);
    border: 1px solid #ececec;
    border-radius:5px;
    transition: all .4s ease;
    display: flex;
    flex-grow: 1;      
    flex-direction: column;
    .articletitle {
      text-decoration:none;
      h4 {
        transition: all .3s ease;
      }        
      &:hover {
        h4 {
          color:var(--brand);
        }          
      }
    }
  }
}
`;

const Header = styled.h3`
  text-align:left;
  margin-bottom:1rem;
  margin-left:1rem;
`;

const HeadingGroupCategory = styled.h2`
  font-size: 60px;
  padding: 5px;
  &.culture{
    background-color: #fff2cc;
  }
  &.initiative{
    background-color: #f4cccc;
  }
  &.lifestyle{
    background-color: #cfe2f3;
  }
  &.science{
    background-color: #d9ead3;
  }
`
