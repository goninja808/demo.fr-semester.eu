
import { connect, styled } from "frontity";
import Straps from "./strap/images/straps.png"
import Link from "./link";
import { BandContainer } from "./styles/bandeau"


const WrapPostTitle = ({ post,libraries, index, resultF }) => { 
    const Html2React = libraries.html2react.Component;
   // if (!media) return null;

    // const srcset =
    //     Object.values(media.media_details.sizes)
    //         // Get the url and width of each size.
    //         .map((item) => [item.source_url, item.width])
    //         // Recude them to a string with the format required by `srcset`.
    //         .reduce(
    //             (final, current, index, array) =>
    //                 final.concat(
    //                     `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
    //                 ),
    //             ""
    //         ) || null;

    return (
        <Link link={post.link}>
            <BandContainer className={`${resultF[5][index]} `}>
                <div className={`Image`}>
                    <div className="OverlayT1"> {(((resultF[1][index]) == 1)) ? (((resultF[0][index]) == 1) ? <span >Regions of the Month</span> : <span >Centre Val de Loire – Bourgogne Franche Comté</span>) : null}</div>
                    <div className="OverlayT2">  {((resultF[0][index]) == 0) ? ["", "Culture: ", "Life Style: ", "Science: ", "Initiative: "][(resultF[4][index])] : <Html2React html={post.title.rendered} />}</div>
                </div>
                <div className="TitleT3">  {(((resultF[1][index]) == 1)) ? ((resultF[0][index]) == 0) ? <Html2React html={post.title.rendered} /> : <span ></span> : <Html2React html={post.title.rendered} /> }</div>
            </BandContainer>
        </Link>
    );
};

export default connect(WrapPostTitle);
