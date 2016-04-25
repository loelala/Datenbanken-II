import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "a": {
        "color": "#4CAF50"
    },
    "h1": {
        "fontFamily": "'Poiret One', cursive"
    },
    "h2": {
        "fontFamily": "'Poiret One', cursive"
    },
    "h3": {
        "fontFamily": "'Poiret One', cursive"
    },
    "p": {
        "fontFamily": "'Poiret One', cursive"
    }
});