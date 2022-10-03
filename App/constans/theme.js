
import { Dimensions } from "react-native";
const {width, height}=Dimensions.get('window');

const REFERENCE_WIDTH = 414;
const REFERENCE_HEIGHT = 736;

const horizScale = val => width * (val / REFERENCE_WIDTH);
const vertScale = val => height * (val / REFERENCE_HEIGHT);

export { horizScale, vertScale };


export const COLORS ={
    black:"#1E1F20",
    white:"#FFFFFF",
    gray:"#6A6A6A",
    blue:"#0682FE",
    Atlantis :"#88bf40",
    green:"#457437",
    silver:"#C5C5C5",
    blue:"#0000FF",
    red:"#FF0000",
    grey:"#808080",
    floralwhite:"#f5f4f2"
}
    export const SIZES = {
        //Global sizes
        base:8,
        font:14,
        radius:12,
        padding:24,

        //Font sizes
        h1:30,
        h2:22,
        h3:16,
        h4:14,
        h5:18,
        p1:26,
        p2:12,
        p3:13,
        p4:24,
        p5:21,

        //App dimensions
        width,
        height
            };

export const FONTS ={
    h1:{fontFamily:'Roboto-Black',fontSize:SIZES.h1, lineHeight:36},
    h2:{fontFamily:'Roboto-Bold',fontSize:SIZES.h2, lineHeight:30},
    h3:{fontFamily:'Roboto-Bold',fontSize:SIZES.h3, lineHeight:22},
    h4:{fontFamily:'Roboto-Bold',fontSize:SIZES.h4, lineHeight:22},
    body1:{fontFamily:'Roboto-Reqular',fontSize:SIZES.body1, lineHeight:36},
    body2:{fontFamily:'Roboto-Reqular',fontSize:SIZES.body2, lineHeight:30},
    body3:{fontFamily:'Roboto-Reqular',fontSize:SIZES.body3, lineHeight:22},
    body4:{fontFamily:'Roboto-Reqular',fontSize:SIZES.body4, lineHeight:22},

};

const appTheme={COLORS,SIZES,FONTS}

export default appTheme;

