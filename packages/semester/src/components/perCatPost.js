import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import HeaderMedia from "./header-media";
import { getPostsGroupedByCategoryAndTag, getEventsForRegionPeriod } from "./helper";
import band01 from './header/images/central.bandeau.png';
import { Calendar, DateObject } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import colors from "react-multi-date-picker/plugins/colors";
import post from "./post";
import Straps from "./strap/images/straps.png"

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
const PerCatPost = ({ state, actions, libraries, tagId, period }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategoryAndTag(state.source, tagId);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  // Get dynamic inicial list (event / fact main pages)
  const resultEventInPeriod = getEventsForRegionPeriod(state.source, tagId, period);
  var resultDateObjectInPeriod = [];
  var countEventCategory = resultEventInPeriod.length;
  const categColor = ["grey", "grey", "yellow", "pink", "blue", "green"]

  for (let i = 0; i < countEventCategory; i++) {
    var element = resultEventInPeriod[i]
    var inPeriodEvents = element.dateprefix;
    if (inPeriodEvents.length > 0) {
      inPeriodEvents.forEach(eventDate => {
        var aday = new DateObject(eventDate);
        aday.color = categColor[i];
        resultDateObjectInPeriod.push(aday);
      }
      )
    }
  };
  const eventDatesref = resultDateObjectInPeriod;

  // Load the post, but only if the data is ready.

  return data.isReady ? (
    <FlexContainer>
      <Container>
        {postsPerCategory.map(({ posts, category, isNotHeader, resultF }, index) => (
          <CategoryGP key={index} className="GroupCategory col-12 align-self-strech">
            {/*isNotHeader ? (<HeadingGroupCategory  className={`${category.slug}`}>{category.name}</HeadingGroupCategory>):(<span/>)*/}
            {category.name == 'Events' ?
              <Calendar relativePosition='top-center'
                numberOfMonths={1}
                disableMonthPicker="true"
                disableYearPicker="true"
                displayWeekNumbers="true"
                value={eventDatesref}
                plugins={[
                  <DatePanel sort="color" markFocused />,
                ]} />
              : null}
            {(isNotHeader && posts.length > 0) ? <PostCount>{posts.length} posts </PostCount> in {category} : <span />}
            <div className="GroupCategory-box col-md-12">
              {posts.map((post, index) => (
                <article key={index}>

                  <div>
                    <div px={2}>

                      {<Link link={post.link}>
                        <BandContainer className={`${resultF[5][index]} `}>
                          <div className={`Image `}>
                            <div className="OverlayT1"> {(((resultF[1][index])==1)) ? (isNotHeader?<span >The name of the region limited to 35c</span>:<span >Region of the Month</span>) : null }</div>
                            <div className="OverlayT2">  {(isNotHeader) ? ["","Culture: ","Life Style: ","Science: ","Initiative: "][(resultF[4][index])] : <Html2React html={post.title.rendered} />}</div>
                          </div>
                        </BandContainer>

                      </Link>}

                      {!(isNotHeader) ? <HeaderMedia id={post.featured_media} /> : <span />}
                      <Html2React html={post.excerpt.rendered} />
                    </div>

                  </div>
                </article>
              ))}
            </div>
            <p />
            {posts.length == 0 ? <p><span />No Region Related {category.name} this month.</p> : null}
            {isNotHeader ? <Link link={category.link}>
              <p>&gt;&gt; See more <strong>{category.name}</strong> related posts </p>
            </Link> : <span />}
          </CategoryGP>
        ))
        }
      </Container>
    </FlexContainer>
  ) : null;
};

export default connect(PerCatPost);

const BandContainer = styled.div`
  position: relative;
  max-width: 1000px; 
  height:58px;
  background: 
  url('/static/images/straps.png') no-repeat;
  padding: 5px;
 
  &.b100{
    background-position-y:0px;
  }
  &.b000{
    background-position-y:-58px;
  }
  &.b001{
    background-position-y:-406px;
  }
  &.b011{
    background-position-y:-116px;
  }
  &.b002{
    background-position-y:-464px;
  }
  &.b012{
    background-position-y:-174px;
  }
  &.b003{
    background-position-y:-522px;
  }
  &.b013{
    background-position-y:-232px;
  }  
  &.b004
  {
    background-position-y:-580px;
  }
  &.b014{
    background-position-y:-290px;
  }
  .image {
    object-fit: cover;
    }
  .OverlayT1 {
    position: relative;
    display: block;
    text-align: center;
    padding-top:-2px;
    margin-top:-2px;
    font-size:small;
    margin-left: 69px;
  }
  .OverlayT2 {
    position: relative;
    display: block;
    text-align: left;
    padding-bottom: 4px;
    padding-left: 30px;
    font-size:medium;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`
const Illust = styled.img`
  max-width: 50px;
  border-radius: 25px;
  margin-right: 25px;
`;

const BigImage = styled.img`
  max-width: 320px;
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


const PostCount = styled.span`
  font-size: 10px;
  font-style: italic;
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
  &.header{
    background-color: white;
  }  
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
