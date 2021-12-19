
import { connect, styled } from "frontity";

export const BandContainer = styled.div`
  position: relative;
  max-width: 1000px; 
  height:58px;
  background: 
  url('/static/images/straps.png') no-repeat;
  padding: 5px;
  line-height: 1.5rem;
 
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
    line-height: 1rem;
    position: relative;
    display: block;
    text-align: center;
    padding-top:-2px;
    margin-top:-2px;
    font-size:small;
    margin-left: 69px;
  }
  .OverlayT2 {
    line-height: 1rem;
    position: relative;
    display: block;
    text-align: left;
    padding-bottom: 4px;
    padding-left: 30px;
    font-size:medium;
  }
  .TitleT3 {
    line-height: 1.5rem;
    text-indent: 31px;
    color: #ffffff;
    text-shadow: 1px 1px 5px black;
    font-size:medium;
  }
`;