import { connect, styled } from "frontity";


export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PostCount = styled.div`
justify-content: left;
`


export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.3em;
  background-color: #fff;
  color: #444;  
  min-width: 400px;
  margin: 0 auto; 
  list-style: none;
  @media (max-width: 410px) {
    min-width: 280px;
    grid-gap: 0em; 
    grid-template-columns: repeat(1, 1fr); 
    padding: 0 -10px;
  }  
  @media (max-width: 800px) {
    min-width: 370px;
    grid-gap: 0.2em;
    grid-template-columns: repeat(1, 1fr); 
}
`;


export const CategoryGP = styled.article`
max-width:771px;
margin:0 auto;
position: relative;
.divider {
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  border: 0;
  border-top: 1px solid #a7a7a7;
}
&.count0{
       visibility: hidden;
       display: none;
}
.rmdp-arrow{
      visibility: hidden;
      border: solid #000000;
} 
.Culture_p{
  color: #ffcc02;
  text-align: center;
}
.Initiative_p{
  color: #813d9c;
  text-align: center;
}
.LifeStyle_p{
  color: #669901;
  text-align: center;
}
.Science_p{
  color: #cc0000;
  text-align: center;
}   
.Events_p{
  color: #3366cc;
  text-align: center;
}
.Groupcategory {
  max-width: 100%; 
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  display: flex;
  flex-direction: column;
  background-color: #fff2cc;
  
}
`;


