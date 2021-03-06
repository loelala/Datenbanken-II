import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "sans-serif",
        "WebkitTextSizeAdjust": "100%",
        "MsTextSizeAdjust": "100%",
        "fontSize": 10,
        "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": 14,
        "lineHeight": 1.42857143,
        "color": "#333",
        "backgroundColor": "#fff"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block",
        "paddingLeft": 0,
        "marginBottom": 0,
        "listStyle": "none"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline",
        "height": 20,
        "marginBottom": 20,
        "overflow": "hidden",
        "backgroundColor": "#f5f5f5",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0, 0, 0, .1)",
        "boxShadow": "inset 0 1px 2px rgba(0, 0, 0, .1)"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent",
        "color": "#4CAF50",
        "textDecoration": "none"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0,
        "color": "#4CAF50",
        "textDecoration": "underline"
    },
    "abbr[title]": {
        "borderBottom": "1px dotted #777",
        "cursor": "help"
    },
    "b": {
        "fontWeight": "bold"
    },
    "strong": {
        "fontWeight": "bold"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontSize": 36,
        "fontFamily": "inherit",
        "fontWeight": 500,
        "lineHeight": 1.1,
        "color": "inherit"
    },
    "mark": {
        "color": "#000",
        "background": "#ff0",
        "paddingTop": 0.2,
        "paddingRight": 0.2,
        "paddingBottom": 0.2,
        "paddingLeft": 0.2,
        "backgroundColor": "#fcf8e3"
    },
    "small": {
        "fontSize": "85%"
    },
    "sub": {
        "position": "relative",
        "fontSize": "75%",
        "lineHeight": 0,
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "position": "relative",
        "fontSize": "75%",
        "lineHeight": 0,
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0,
        "verticalAlign": "middle"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "height": 0,
        "WebkitBoxSizing": "content-box",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "marginTop": 20,
        "marginBottom": 20,
        "border": 0,
        "borderTop": "1px solid #eee"
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "Menlo, Monaco, Consolas, \"Courier New\", monospace",
        "fontSize": 13,
        "display": "block",
        "paddingTop": 9.5,
        "paddingRight": 9.5,
        "paddingBottom": 9.5,
        "paddingLeft": 9.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "lineHeight": 1.42857143,
        "color": "#333",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #ccc",
        "borderRadius": 4
    },
    "code": {
        "fontFamily": "Menlo, Monaco, Consolas, \"Courier New\", monospace",
        "fontSize": "90%",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#c7254e",
        "backgroundColor": "#f9f2f4",
        "borderRadius": 4
    },
    "kbd": {
        "fontFamily": "Menlo, Monaco, Consolas, \"Courier New\", monospace",
        "fontSize": "90%",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#fff",
        "backgroundColor": "#333",
        "borderRadius": 3,
        "WebkitBoxShadow": "inset 0 -1px 0 rgba(0, 0, 0, .25)",
        "boxShadow": "inset 0 -1px 0 rgba(0, 0, 0, .25)"
    },
    "samp": {
        "fontFamily": "Menlo, Monaco, Consolas, \"Courier New\", monospace",
        "fontSize": 1
    },
    "button": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "font": "inherit",
        "color": "inherit",
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "input": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "font": "inherit",
        "color": "inherit",
        "lineHeight": "inherit",
        "fontFamily": "inherit",
        "fontSize": "inherit"
    },
    "optgroup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "font": "inherit",
        "color": "inherit",
        "fontWeight": "bold"
    },
    "select": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "font": "inherit",
        "color": "inherit",
        "textTransform": "none",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "textarea": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "font": "inherit",
        "color": "inherit",
        "overflow": "auto",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "input::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "input[type=\"checkbox\"]": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "1px \\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "input[type=\"radio\"]": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "1px \\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": 0,
        "minWidth": 0
    },
    "legend": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "display": "block",
        "width": "100%",
        "marginBottom": 20,
        "fontSize": 21,
        "lineHeight": "inherit",
        "color": "#333",
        "borderBottom": "1px solid #e5e5e5"
    },
    "table": {
        "borderSpacing": 0,
        "borderCollapse": "collapse",
        "backgroundColor": "transparent",
        "width": "100%",
        "maxWidth": "100%",
        "marginBottom": 20
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "left"
    },
    "glyphicon": {
        "position": "relative",
        "top": 1,
        "display": "inline-block",
        "fontFamily": "'Glyphicons Halflings'",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "glyphicon-asterisk:before": {
        "content": "\\002a"
    },
    "glyphicon-plus:before": {
        "content": "\\002b"
    },
    "glyphicon-euro:before": {
        "content": "\\20ac"
    },
    "glyphicon-eur:before": {
        "content": "\\20ac"
    },
    "glyphicon-minus:before": {
        "content": "\\2212"
    },
    "glyphicon-cloud:before": {
        "content": "\\2601"
    },
    "glyphicon-envelope:before": {
        "content": "\\2709"
    },
    "glyphicon-pencil:before": {
        "content": "\\270f"
    },
    "glyphicon-glass:before": {
        "content": "\\e001"
    },
    "glyphicon-music:before": {
        "content": "\\e002"
    },
    "glyphicon-search:before": {
        "content": "\\e003"
    },
    "glyphicon-heart:before": {
        "content": "\\e005"
    },
    "glyphicon-star:before": {
        "content": "\\e006"
    },
    "glyphicon-star-empty:before": {
        "content": "\\e007"
    },
    "glyphicon-user:before": {
        "content": "\\e008"
    },
    "glyphicon-film:before": {
        "content": "\\e009"
    },
    "glyphicon-th-large:before": {
        "content": "\\e010"
    },
    "glyphicon-th:before": {
        "content": "\\e011"
    },
    "glyphicon-th-list:before": {
        "content": "\\e012"
    },
    "glyphicon-ok:before": {
        "content": "\\e013"
    },
    "glyphicon-remove:before": {
        "content": "\\e014"
    },
    "glyphicon-zoom-in:before": {
        "content": "\\e015"
    },
    "glyphicon-zoom-out:before": {
        "content": "\\e016"
    },
    "glyphicon-off:before": {
        "content": "\\e017"
    },
    "glyphicon-signal:before": {
        "content": "\\e018"
    },
    "glyphicon-cog:before": {
        "content": "\\e019"
    },
    "glyphicon-trash:before": {
        "content": "\\e020"
    },
    "glyphicon-home:before": {
        "content": "\\e021"
    },
    "glyphicon-file:before": {
        "content": "\\e022"
    },
    "glyphicon-time:before": {
        "content": "\\e023"
    },
    "glyphicon-road:before": {
        "content": "\\e024"
    },
    "glyphicon-download-alt:before": {
        "content": "\\e025"
    },
    "glyphicon-download:before": {
        "content": "\\e026"
    },
    "glyphicon-upload:before": {
        "content": "\\e027"
    },
    "glyphicon-inbox:before": {
        "content": "\\e028"
    },
    "glyphicon-play-circle:before": {
        "content": "\\e029"
    },
    "glyphicon-repeat:before": {
        "content": "\\e030"
    },
    "glyphicon-refresh:before": {
        "content": "\\e031"
    },
    "glyphicon-list-alt:before": {
        "content": "\\e032"
    },
    "glyphicon-lock:before": {
        "content": "\\e033"
    },
    "glyphicon-flag:before": {
        "content": "\\e034"
    },
    "glyphicon-headphones:before": {
        "content": "\\e035"
    },
    "glyphicon-volume-off:before": {
        "content": "\\e036"
    },
    "glyphicon-volume-down:before": {
        "content": "\\e037"
    },
    "glyphicon-volume-up:before": {
        "content": "\\e038"
    },
    "glyphicon-qrcode:before": {
        "content": "\\e039"
    },
    "glyphicon-barcode:before": {
        "content": "\\e040"
    },
    "glyphicon-tag:before": {
        "content": "\\e041"
    },
    "glyphicon-tags:before": {
        "content": "\\e042"
    },
    "glyphicon-book:before": {
        "content": "\\e043"
    },
    "glyphicon-bookmark:before": {
        "content": "\\e044"
    },
    "glyphicon-print:before": {
        "content": "\\e045"
    },
    "glyphicon-camera:before": {
        "content": "\\e046"
    },
    "glyphicon-font:before": {
        "content": "\\e047"
    },
    "glyphicon-bold:before": {
        "content": "\\e048"
    },
    "glyphicon-italic:before": {
        "content": "\\e049"
    },
    "glyphicon-text-height:before": {
        "content": "\\e050"
    },
    "glyphicon-text-width:before": {
        "content": "\\e051"
    },
    "glyphicon-align-left:before": {
        "content": "\\e052"
    },
    "glyphicon-align-center:before": {
        "content": "\\e053"
    },
    "glyphicon-align-right:before": {
        "content": "\\e054"
    },
    "glyphicon-align-justify:before": {
        "content": "\\e055"
    },
    "glyphicon-list:before": {
        "content": "\\e056"
    },
    "glyphicon-indent-left:before": {
        "content": "\\e057"
    },
    "glyphicon-indent-right:before": {
        "content": "\\e058"
    },
    "glyphicon-facetime-video:before": {
        "content": "\\e059"
    },
    "glyphicon-picture:before": {
        "content": "\\e060"
    },
    "glyphicon-map-marker:before": {
        "content": "\\e062"
    },
    "glyphicon-adjust:before": {
        "content": "\\e063"
    },
    "glyphicon-tint:before": {
        "content": "\\e064"
    },
    "glyphicon-edit:before": {
        "content": "\\e065"
    },
    "glyphicon-share:before": {
        "content": "\\e066"
    },
    "glyphicon-check:before": {
        "content": "\\e067"
    },
    "glyphicon-move:before": {
        "content": "\\e068"
    },
    "glyphicon-step-backward:before": {
        "content": "\\e069"
    },
    "glyphicon-fast-backward:before": {
        "content": "\\e070"
    },
    "glyphicon-backward:before": {
        "content": "\\e071"
    },
    "glyphicon-play:before": {
        "content": "\\e072"
    },
    "glyphicon-pause:before": {
        "content": "\\e073"
    },
    "glyphicon-stop:before": {
        "content": "\\e074"
    },
    "glyphicon-forward:before": {
        "content": "\\e075"
    },
    "glyphicon-fast-forward:before": {
        "content": "\\e076"
    },
    "glyphicon-step-forward:before": {
        "content": "\\e077"
    },
    "glyphicon-eject:before": {
        "content": "\\e078"
    },
    "glyphicon-chevron-left:before": {
        "content": "\\e079"
    },
    "glyphicon-chevron-right:before": {
        "content": "\\e080"
    },
    "glyphicon-plus-sign:before": {
        "content": "\\e081"
    },
    "glyphicon-minus-sign:before": {
        "content": "\\e082"
    },
    "glyphicon-remove-sign:before": {
        "content": "\\e083"
    },
    "glyphicon-ok-sign:before": {
        "content": "\\e084"
    },
    "glyphicon-question-sign:before": {
        "content": "\\e085"
    },
    "glyphicon-info-sign:before": {
        "content": "\\e086"
    },
    "glyphicon-screenshot:before": {
        "content": "\\e087"
    },
    "glyphicon-remove-circle:before": {
        "content": "\\e088"
    },
    "glyphicon-ok-circle:before": {
        "content": "\\e089"
    },
    "glyphicon-ban-circle:before": {
        "content": "\\e090"
    },
    "glyphicon-arrow-left:before": {
        "content": "\\e091"
    },
    "glyphicon-arrow-right:before": {
        "content": "\\e092"
    },
    "glyphicon-arrow-up:before": {
        "content": "\\e093"
    },
    "glyphicon-arrow-down:before": {
        "content": "\\e094"
    },
    "glyphicon-share-alt:before": {
        "content": "\\e095"
    },
    "glyphicon-resize-full:before": {
        "content": "\\e096"
    },
    "glyphicon-resize-small:before": {
        "content": "\\e097"
    },
    "glyphicon-exclamation-sign:before": {
        "content": "\\e101"
    },
    "glyphicon-gift:before": {
        "content": "\\e102"
    },
    "glyphicon-leaf:before": {
        "content": "\\e103"
    },
    "glyphicon-fire:before": {
        "content": "\\e104"
    },
    "glyphicon-eye-open:before": {
        "content": "\\e105"
    },
    "glyphicon-eye-close:before": {
        "content": "\\e106"
    },
    "glyphicon-warning-sign:before": {
        "content": "\\e107"
    },
    "glyphicon-plane:before": {
        "content": "\\e108"
    },
    "glyphicon-calendar:before": {
        "content": "\\e109"
    },
    "glyphicon-random:before": {
        "content": "\\e110"
    },
    "glyphicon-comment:before": {
        "content": "\\e111"
    },
    "glyphicon-magnet:before": {
        "content": "\\e112"
    },
    "glyphicon-chevron-up:before": {
        "content": "\\e113"
    },
    "glyphicon-chevron-down:before": {
        "content": "\\e114"
    },
    "glyphicon-retweet:before": {
        "content": "\\e115"
    },
    "glyphicon-shopping-cart:before": {
        "content": "\\e116"
    },
    "glyphicon-folder-close:before": {
        "content": "\\e117"
    },
    "glyphicon-folder-open:before": {
        "content": "\\e118"
    },
    "glyphicon-resize-vertical:before": {
        "content": "\\e119"
    },
    "glyphicon-resize-horizontal:before": {
        "content": "\\e120"
    },
    "glyphicon-hdd:before": {
        "content": "\\e121"
    },
    "glyphicon-bullhorn:before": {
        "content": "\\e122"
    },
    "glyphicon-bell:before": {
        "content": "\\e123"
    },
    "glyphicon-certificate:before": {
        "content": "\\e124"
    },
    "glyphicon-thumbs-up:before": {
        "content": "\\e125"
    },
    "glyphicon-thumbs-down:before": {
        "content": "\\e126"
    },
    "glyphicon-hand-right:before": {
        "content": "\\e127"
    },
    "glyphicon-hand-left:before": {
        "content": "\\e128"
    },
    "glyphicon-hand-up:before": {
        "content": "\\e129"
    },
    "glyphicon-hand-down:before": {
        "content": "\\e130"
    },
    "glyphicon-circle-arrow-right:before": {
        "content": "\\e131"
    },
    "glyphicon-circle-arrow-left:before": {
        "content": "\\e132"
    },
    "glyphicon-circle-arrow-up:before": {
        "content": "\\e133"
    },
    "glyphicon-circle-arrow-down:before": {
        "content": "\\e134"
    },
    "glyphicon-globe:before": {
        "content": "\\e135"
    },
    "glyphicon-wrench:before": {
        "content": "\\e136"
    },
    "glyphicon-tasks:before": {
        "content": "\\e137"
    },
    "glyphicon-filter:before": {
        "content": "\\e138"
    },
    "glyphicon-briefcase:before": {
        "content": "\\e139"
    },
    "glyphicon-fullscreen:before": {
        "content": "\\e140"
    },
    "glyphicon-dashboard:before": {
        "content": "\\e141"
    },
    "glyphicon-paperclip:before": {
        "content": "\\e142"
    },
    "glyphicon-heart-empty:before": {
        "content": "\\e143"
    },
    "glyphicon-link:before": {
        "content": "\\e144"
    },
    "glyphicon-phone:before": {
        "content": "\\e145"
    },
    "glyphicon-pushpin:before": {
        "content": "\\e146"
    },
    "glyphicon-usd:before": {
        "content": "\\e148"
    },
    "glyphicon-gbp:before": {
        "content": "\\e149"
    },
    "glyphicon-sort:before": {
        "content": "\\e150"
    },
    "glyphicon-sort-by-alphabet:before": {
        "content": "\\e151"
    },
    "glyphicon-sort-by-alphabet-alt:before": {
        "content": "\\e152"
    },
    "glyphicon-sort-by-order:before": {
        "content": "\\e153"
    },
    "glyphicon-sort-by-order-alt:before": {
        "content": "\\e154"
    },
    "glyphicon-sort-by-attributes:before": {
        "content": "\\e155"
    },
    "glyphicon-sort-by-attributes-alt:before": {
        "content": "\\e156"
    },
    "glyphicon-unchecked:before": {
        "content": "\\e157"
    },
    "glyphicon-expand:before": {
        "content": "\\e158"
    },
    "glyphicon-collapse-down:before": {
        "content": "\\e159"
    },
    "glyphicon-collapse-up:before": {
        "content": "\\e160"
    },
    "glyphicon-log-in:before": {
        "content": "\\e161"
    },
    "glyphicon-flash:before": {
        "content": "\\e162"
    },
    "glyphicon-log-out:before": {
        "content": "\\e163"
    },
    "glyphicon-new-window:before": {
        "content": "\\e164"
    },
    "glyphicon-record:before": {
        "content": "\\e165"
    },
    "glyphicon-save:before": {
        "content": "\\e166"
    },
    "glyphicon-open:before": {
        "content": "\\e167"
    },
    "glyphicon-saved:before": {
        "content": "\\e168"
    },
    "glyphicon-import:before": {
        "content": "\\e169"
    },
    "glyphicon-export:before": {
        "content": "\\e170"
    },
    "glyphicon-send:before": {
        "content": "\\e171"
    },
    "glyphicon-floppy-disk:before": {
        "content": "\\e172"
    },
    "glyphicon-floppy-saved:before": {
        "content": "\\e173"
    },
    "glyphicon-floppy-remove:before": {
        "content": "\\e174"
    },
    "glyphicon-floppy-save:before": {
        "content": "\\e175"
    },
    "glyphicon-floppy-open:before": {
        "content": "\\e176"
    },
    "glyphicon-credit-card:before": {
        "content": "\\e177"
    },
    "glyphicon-transfer:before": {
        "content": "\\e178"
    },
    "glyphicon-cutlery:before": {
        "content": "\\e179"
    },
    "glyphicon-header:before": {
        "content": "\\e180"
    },
    "glyphicon-compressed:before": {
        "content": "\\e181"
    },
    "glyphicon-earphone:before": {
        "content": "\\e182"
    },
    "glyphicon-phone-alt:before": {
        "content": "\\e183"
    },
    "glyphicon-tower:before": {
        "content": "\\e184"
    },
    "glyphicon-stats:before": {
        "content": "\\e185"
    },
    "glyphicon-sd-video:before": {
        "content": "\\e186"
    },
    "glyphicon-hd-video:before": {
        "content": "\\e187"
    },
    "glyphicon-subtitles:before": {
        "content": "\\e188"
    },
    "glyphicon-sound-stereo:before": {
        "content": "\\e189"
    },
    "glyphicon-sound-dolby:before": {
        "content": "\\e190"
    },
    "glyphicon-sound-5-1:before": {
        "content": "\\e191"
    },
    "glyphicon-sound-6-1:before": {
        "content": "\\e192"
    },
    "glyphicon-sound-7-1:before": {
        "content": "\\e193"
    },
    "glyphicon-copyright-mark:before": {
        "content": "\\e194"
    },
    "glyphicon-registration-mark:before": {
        "content": "\\e195"
    },
    "glyphicon-cloud-download:before": {
        "content": "\\e197"
    },
    "glyphicon-cloud-upload:before": {
        "content": "\\e198"
    },
    "glyphicon-tree-conifer:before": {
        "content": "\\e199"
    },
    "glyphicon-tree-deciduous:before": {
        "content": "\\e200"
    },
    "glyphicon-cd:before": {
        "content": "\\e201"
    },
    "glyphicon-save-file:before": {
        "content": "\\e202"
    },
    "glyphicon-open-file:before": {
        "content": "\\e203"
    },
    "glyphicon-level-up:before": {
        "content": "\\e204"
    },
    "glyphicon-copy:before": {
        "content": "\\e205"
    },
    "glyphicon-paste:before": {
        "content": "\\e206"
    },
    "glyphicon-alert:before": {
        "content": "\\e209"
    },
    "glyphicon-equalizer:before": {
        "content": "\\e210"
    },
    "glyphicon-king:before": {
        "content": "\\e211"
    },
    "glyphicon-queen:before": {
        "content": "\\e212"
    },
    "glyphicon-pawn:before": {
        "content": "\\e213"
    },
    "glyphicon-bishop:before": {
        "content": "\\e214"
    },
    "glyphicon-knight:before": {
        "content": "\\e215"
    },
    "glyphicon-baby-formula:before": {
        "content": "\\e216"
    },
    "glyphicon-tent:before": {
        "content": "\\26fa"
    },
    "glyphicon-blackboard:before": {
        "content": "\\e218"
    },
    "glyphicon-bed:before": {
        "content": "\\e219"
    },
    "glyphicon-apple:before": {
        "content": "\\f8ff"
    },
    "glyphicon-erase:before": {
        "content": "\\e221"
    },
    "glyphicon-hourglass:before": {
        "content": "\\231b"
    },
    "glyphicon-lamp:before": {
        "content": "\\e223"
    },
    "glyphicon-duplicate:before": {
        "content": "\\e224"
    },
    "glyphicon-piggy-bank:before": {
        "content": "\\e225"
    },
    "glyphicon-scissors:before": {
        "content": "\\e226"
    },
    "glyphicon-bitcoin:before": {
        "content": "\\e227"
    },
    "glyphicon-btc:before": {
        "content": "\\e227"
    },
    "glyphicon-xbt:before": {
        "content": "\\e227"
    },
    "glyphicon-yen:before": {
        "content": "\\00a5"
    },
    "glyphicon-jpy:before": {
        "content": "\\00a5"
    },
    "glyphicon-ruble:before": {
        "content": "\\20bd"
    },
    "glyphicon-rub:before": {
        "content": "\\20bd"
    },
    "glyphicon-scale:before": {
        "content": "\\e230"
    },
    "glyphicon-ice-lolly:before": {
        "content": "\\e231"
    },
    "glyphicon-ice-lolly-tasted:before": {
        "content": "\\e232"
    },
    "glyphicon-education:before": {
        "content": "\\e233"
    },
    "glyphicon-option-horizontal:before": {
        "content": "\\e234"
    },
    "glyphicon-option-vertical:before": {
        "content": "\\e235"
    },
    "glyphicon-menu-hamburger:before": {
        "content": "\\e236"
    },
    "glyphicon-modal-window:before": {
        "content": "\\e237"
    },
    "glyphicon-oil:before": {
        "content": "\\e238"
    },
    "glyphicon-grain:before": {
        "content": "\\e239"
    },
    "glyphicon-sunglasses:before": {
        "content": "\\e240"
    },
    "glyphicon-text-size:before": {
        "content": "\\e241"
    },
    "glyphicon-text-color:before": {
        "content": "\\e242"
    },
    "glyphicon-text-background:before": {
        "content": "\\e243"
    },
    "glyphicon-object-align-top:before": {
        "content": "\\e244"
    },
    "glyphicon-object-align-bottom:before": {
        "content": "\\e245"
    },
    "glyphicon-object-align-horizontal:before": {
        "content": "\\e246"
    },
    "glyphicon-object-align-left:before": {
        "content": "\\e247"
    },
    "glyphicon-object-align-vertical:before": {
        "content": "\\e248"
    },
    "glyphicon-object-align-right:before": {
        "content": "\\e249"
    },
    "glyphicon-triangle-right:before": {
        "content": "\\e250"
    },
    "glyphicon-triangle-left:before": {
        "content": "\\e251"
    },
    "glyphicon-triangle-bottom:before": {
        "content": "\\e252"
    },
    "glyphicon-triangle-top:before": {
        "content": "\\e253"
    },
    "glyphicon-console:before": {
        "content": "\\e254"
    },
    "glyphicon-superscript:before": {
        "content": "\\e255"
    },
    "glyphicon-subscript:before": {
        "content": "\\e256"
    },
    "glyphicon-menu-left:before": {
        "content": "\\e257"
    },
    "glyphicon-menu-right:before": {
        "content": "\\e258"
    },
    "glyphicon-menu-down:before": {
        "content": "\\e259"
    },
    "glyphicon-menu-up:before": {
        "content": "\\e260"
    },
    "*": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "a:focus": {
        "color": "#4CAF50",
        "textDecoration": "underline",
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "img-responsive": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto"
    },
    "thumbnail > img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "thumbnail a > img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "carousel-inner > item > img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "lineHeight": 1
    },
    "carousel-inner > item > a > img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "lineHeight": 1
    },
    "img-rounded": {
        "borderRadius": 6
    },
    "img-thumbnail": {
        "display": "inline-block",
        "maxWidth": "100%",
        "height": "auto",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "lineHeight": 1.42857143,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderRadius": 4,
        "WebkitTransition": "all .2s ease-in-out",
        "OTransition": "all .2s ease-in-out",
        "transition": "all .2s ease-in-out"
    },
    "img-circle": {
        "borderRadius": "50%"
    },
    "sr-only": {
        "position": "absolute",
        "width": 1,
        "height": 1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "overflow": "hidden",
        "clip": "rect(0, 0, 0, 0)",
        "border": 0
    },
    "sr-only-focusable:active": {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "sr-only-focusable:focus": {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "[role=\"button\"]": {
        "cursor": "pointer"
    },
    "h2": {
        "fontFamily": "inherit",
        "fontWeight": 500,
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 30
    },
    "h3": {
        "fontFamily": "inherit",
        "fontWeight": 500,
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 24
    },
    "h4": {
        "fontFamily": "inherit",
        "fontWeight": 500,
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 18
    },
    "h5": {
        "fontFamily": "inherit",
        "fontWeight": 500,
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 14
    },
    "h6": {
        "fontFamily": "inherit",
        "fontWeight": 500,
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 12
    },
    "h1 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h2 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h3 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h4 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "h5 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "h6 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "lead": {
        "marginBottom": 20,
        "fontSize": 16,
        "fontWeight": 300,
        "lineHeight": 1.4
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-justify": {
        "textAlign": "justify"
    },
    "text-nowrap": {
        "whiteSpace": "nowrap"
    },
    "text-lowercase": {
        "textTransform": "lowercase"
    },
    "text-uppercase": {
        "textTransform": "uppercase"
    },
    "text-capitalize": {
        "textTransform": "capitalize"
    },
    "text-muted": {
        "color": "#777"
    },
    "text-primary": {
        "color": "#337ab7"
    },
    "atext-primary:hover": {
        "color": "#286090"
    },
    "atext-primary:focus": {
        "color": "#286090"
    },
    "text-success": {
        "color": "#3c763d"
    },
    "atext-success:hover": {
        "color": "#2b542c"
    },
    "atext-success:focus": {
        "color": "#2b542c"
    },
    "text-info": {
        "color": "#31708f"
    },
    "atext-info:hover": {
        "color": "#245269"
    },
    "atext-info:focus": {
        "color": "#245269"
    },
    "text-warning": {
        "color": "#8a6d3b"
    },
    "atext-warning:hover": {
        "color": "#66512c"
    },
    "atext-warning:focus": {
        "color": "#66512c"
    },
    "text-danger": {
        "color": "#a94442"
    },
    "atext-danger:hover": {
        "color": "#843534"
    },
    "atext-danger:focus": {
        "color": "#843534"
    },
    "bg-primary": {
        "color": "#fff",
        "backgroundColor": "#337ab7"
    },
    "abg-primary:hover": {
        "backgroundColor": "#286090"
    },
    "abg-primary:focus": {
        "backgroundColor": "#286090"
    },
    "bg-success": {
        "backgroundColor": "#dff0d8"
    },
    "abg-success:hover": {
        "backgroundColor": "#c1e2b3"
    },
    "abg-success:focus": {
        "backgroundColor": "#c1e2b3"
    },
    "bg-info": {
        "backgroundColor": "#d9edf7"
    },
    "abg-info:hover": {
        "backgroundColor": "#afd9ee"
    },
    "abg-info:focus": {
        "backgroundColor": "#afd9ee"
    },
    "bg-warning": {
        "backgroundColor": "#fcf8e3"
    },
    "abg-warning:hover": {
        "backgroundColor": "#f7ecb5"
    },
    "abg-warning:focus": {
        "backgroundColor": "#f7ecb5"
    },
    "bg-danger": {
        "backgroundColor": "#f2dede"
    },
    "abg-danger:hover": {
        "backgroundColor": "#e4b9b9"
    },
    "abg-danger:focus": {
        "backgroundColor": "#e4b9b9"
    },
    "page-header": {
        "paddingBottom": 9,
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "ul": {
        "marginTop": 0,
        "marginBottom": 10
    },
    "ol": {
        "marginTop": 0,
        "marginBottom": 10
    },
    "ul ul": {
        "marginBottom": 0
    },
    "ol ul": {
        "marginBottom": 0
    },
    "ul ol": {
        "marginBottom": 0
    },
    "ol ol": {
        "marginBottom": 0
    },
    "list-unstyled": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-inline": {
        "paddingLeft": 0,
        "marginLeft": -5,
        "listStyle": "none"
    },
    "list-inline > li": {
        "display": "inline-block",
        "paddingRight": 5,
        "paddingLeft": 5
    },
    "dl": {
        "marginTop": 0,
        "marginBottom": 20
    },
    "dt": {
        "lineHeight": 1.42857143,
        "fontWeight": "bold"
    },
    "dd": {
        "lineHeight": 1.42857143,
        "marginLeft": 0
    },
    "abbr[data-original-title]": {
        "cursor": "help",
        "borderBottom": "1px dotted #777"
    },
    "initialism": {
        "fontSize": "90%",
        "textTransform": "uppercase"
    },
    "blockquote": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontSize": 17.5,
        "borderLeft": "5px solid #eee"
    },
    "blockquote p:last-child": {
        "marginBottom": 0
    },
    "blockquote ul:last-child": {
        "marginBottom": 0
    },
    "blockquote ol:last-child": {
        "marginBottom": 0
    },
    "blockquote footer": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.42857143,
        "color": "#777"
    },
    "blockquote small": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.42857143,
        "color": "#777"
    },
    "blockquote footer:before": {
        "content": "'\\2014 \\00A0'"
    },
    "blockquote small:before": {
        "content": "'\\2014 \\00A0'"
    },
    "blockquote-reverse": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "textAlign": "right",
        "borderRight": "5px solid #eee",
        "borderLeft": 0
    },
    "blockquotepull-right": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "textAlign": "right",
        "borderRight": "5px solid #eee",
        "borderLeft": 0
    },
    "blockquote-reverse footer:before": {
        "content": "''"
    },
    "blockquotepull-right footer:before": {
        "content": "''"
    },
    "blockquote-reverse small:before": {
        "content": "''"
    },
    "blockquotepull-right small:before": {
        "content": "''"
    },
    "blockquote-reverse footer:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquotepull-right footer:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquote-reverse small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquotepull-right small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "address": {
        "marginBottom": 20,
        "fontStyle": "normal",
        "lineHeight": 1.42857143
    },
    "kbd kbd": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "100%",
        "fontWeight": "bold",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "pre code": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "inherit",
        "color": "inherit",
        "whiteSpace": "pre-wrap",
        "backgroundColor": "transparent",
        "borderRadius": 0
    },
    "pre-scrollable": {
        "maxHeight": 340,
        "overflowY": "scroll"
    },
    "container": {
        "paddingRight": 15,
        "paddingLeft": 15,
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "container-fluid": {
        "paddingRight": 15,
        "paddingLeft": 15,
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "row": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "col-xs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "8.33333333%"
    },
    "col-sm-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "16.66666667%"
    },
    "col-sm-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "25%"
    },
    "col-sm-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "33.33333333%"
    },
    "col-sm-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "41.66666667%"
    },
    "col-sm-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "50%"
    },
    "col-sm-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "58.33333333%"
    },
    "col-sm-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "66.66666667%"
    },
    "col-sm-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "75%"
    },
    "col-sm-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "83.33333333%"
    },
    "col-sm-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "91.66666667%"
    },
    "col-sm-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left",
        "width": "100%"
    },
    "col-sm-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-md-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-lg-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "col-xs-pull-12": {
        "right": "100%"
    },
    "col-xs-pull-11": {
        "right": "91.66666667%"
    },
    "col-xs-pull-10": {
        "right": "83.33333333%"
    },
    "col-xs-pull-9": {
        "right": "75%"
    },
    "col-xs-pull-8": {
        "right": "66.66666667%"
    },
    "col-xs-pull-7": {
        "right": "58.33333333%"
    },
    "col-xs-pull-6": {
        "right": "50%"
    },
    "col-xs-pull-5": {
        "right": "41.66666667%"
    },
    "col-xs-pull-4": {
        "right": "33.33333333%"
    },
    "col-xs-pull-3": {
        "right": "25%"
    },
    "col-xs-pull-2": {
        "right": "16.66666667%"
    },
    "col-xs-pull-1": {
        "right": "8.33333333%"
    },
    "col-xs-pull-0": {
        "right": "auto"
    },
    "col-xs-push-12": {
        "left": "100%"
    },
    "col-xs-push-11": {
        "left": "91.66666667%"
    },
    "col-xs-push-10": {
        "left": "83.33333333%"
    },
    "col-xs-push-9": {
        "left": "75%"
    },
    "col-xs-push-8": {
        "left": "66.66666667%"
    },
    "col-xs-push-7": {
        "left": "58.33333333%"
    },
    "col-xs-push-6": {
        "left": "50%"
    },
    "col-xs-push-5": {
        "left": "41.66666667%"
    },
    "col-xs-push-4": {
        "left": "33.33333333%"
    },
    "col-xs-push-3": {
        "left": "25%"
    },
    "col-xs-push-2": {
        "left": "16.66666667%"
    },
    "col-xs-push-1": {
        "left": "8.33333333%"
    },
    "col-xs-push-0": {
        "left": "auto"
    },
    "col-xs-offset-12": {
        "marginLeft": "100%"
    },
    "col-xs-offset-11": {
        "marginLeft": "91.66666667%"
    },
    "col-xs-offset-10": {
        "marginLeft": "83.33333333%"
    },
    "col-xs-offset-9": {
        "marginLeft": "75%"
    },
    "col-xs-offset-8": {
        "marginLeft": "66.66666667%"
    },
    "col-xs-offset-7": {
        "marginLeft": "58.33333333%"
    },
    "col-xs-offset-6": {
        "marginLeft": "50%"
    },
    "col-xs-offset-5": {
        "marginLeft": "41.66666667%"
    },
    "col-xs-offset-4": {
        "marginLeft": "33.33333333%"
    },
    "col-xs-offset-3": {
        "marginLeft": "25%"
    },
    "col-xs-offset-2": {
        "marginLeft": "16.66666667%"
    },
    "col-xs-offset-1": {
        "marginLeft": "8.33333333%"
    },
    "col-xs-offset-0": {
        "marginLeft": 0
    },
    "caption": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "color": "#777",
        "textAlign": "left"
    },
    "table > thead > tr > th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "bottom",
        "borderTop": "1px solid #ddd",
        "borderBottom": "2px solid #ddd"
    },
    "table > tbody > tr > th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table > tfoot > tr > th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table > thead > tr > td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table > tbody > tr > td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table > tfoot > tr > td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table > caption + thead > tr:first-child > th": {
        "borderTop": 0
    },
    "table > colgroup + thead > tr:first-child > th": {
        "borderTop": 0
    },
    "table > thead:first-child > tr:first-child > th": {
        "borderTop": 0
    },
    "table > caption + thead > tr:first-child > td": {
        "borderTop": 0
    },
    "table > colgroup + thead > tr:first-child > td": {
        "borderTop": 0
    },
    "table > thead:first-child > tr:first-child > td": {
        "borderTop": 0
    },
    "table > tbody + tbody": {
        "borderTop": "2px solid #ddd"
    },
    "table table": {
        "backgroundColor": "#fff"
    },
    "table-condensed > thead > tr > th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > tbody > tr > th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > tfoot > tr > th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > thead > tr > td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > tbody > tr > td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed > tfoot > tr > td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-bordered": {
        "border": "1px solid #ddd"
    },
    "table-bordered > thead > tr > th": {
        "border": "1px solid #ddd",
        "borderBottomWidth": 2
    },
    "table-bordered > tbody > tr > th": {
        "border": "1px solid #ddd"
    },
    "table-bordered > tfoot > tr > th": {
        "border": "1px solid #ddd"
    },
    "table-bordered > thead > tr > td": {
        "border": "1px solid #ddd",
        "borderBottomWidth": 2
    },
    "table-bordered > tbody > tr > td": {
        "border": "1px solid #ddd"
    },
    "table-bordered > tfoot > tr > td": {
        "border": "1px solid #ddd"
    },
    "table-striped > tbody > tr:nth-of-type(odd)": {
        "backgroundColor": "#f9f9f9"
    },
    "table-hover > tbody > tr:hover": {
        "backgroundColor": "#f5f5f5"
    },
    "table col[class*=\"col-\"]": {
        "position": "static",
        "display": "table-column",
        "float": "none"
    },
    "table td[class*=\"col-\"]": {
        "position": "static",
        "display": "table-cell",
        "float": "none"
    },
    "table th[class*=\"col-\"]": {
        "position": "static",
        "display": "table-cell",
        "float": "none"
    },
    "table > thead > tr > tdactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table > tbody > tr > tdactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table > tfoot > tr > tdactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table > thead > tr > thactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table > tbody > tr > thactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table > tfoot > tr > thactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table > thead > tractive > td": {
        "backgroundColor": "#f5f5f5"
    },
    "table > tbody > tractive > td": {
        "backgroundColor": "#f5f5f5"
    },
    "table > tfoot > tractive > td": {
        "backgroundColor": "#f5f5f5"
    },
    "table > thead > tractive > th": {
        "backgroundColor": "#f5f5f5"
    },
    "table > tbody > tractive > th": {
        "backgroundColor": "#f5f5f5"
    },
    "table > tfoot > tractive > th": {
        "backgroundColor": "#f5f5f5"
    },
    "table-hover > tbody > tr > tdactive:hover": {
        "backgroundColor": "#e8e8e8"
    },
    "table-hover > tbody > tr > thactive:hover": {
        "backgroundColor": "#e8e8e8"
    },
    "table-hover > tbody > tractive:hover > td": {
        "backgroundColor": "#e8e8e8"
    },
    "table-hover > tbody > tr:hover > active": {
        "backgroundColor": "#e8e8e8"
    },
    "table-hover > tbody > tractive:hover > th": {
        "backgroundColor": "#e8e8e8"
    },
    "table > thead > tr > tdsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table > tbody > tr > tdsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table > tfoot > tr > tdsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table > thead > tr > thsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table > tbody > tr > thsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table > tfoot > tr > thsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table > thead > trsuccess > td": {
        "backgroundColor": "#dff0d8"
    },
    "table > tbody > trsuccess > td": {
        "backgroundColor": "#dff0d8"
    },
    "table > tfoot > trsuccess > td": {
        "backgroundColor": "#dff0d8"
    },
    "table > thead > trsuccess > th": {
        "backgroundColor": "#dff0d8"
    },
    "table > tbody > trsuccess > th": {
        "backgroundColor": "#dff0d8"
    },
    "table > tfoot > trsuccess > th": {
        "backgroundColor": "#dff0d8"
    },
    "table-hover > tbody > tr > tdsuccess:hover": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover > tbody > tr > thsuccess:hover": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover > tbody > trsuccess:hover > td": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover > tbody > tr:hover > success": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover > tbody > trsuccess:hover > th": {
        "backgroundColor": "#d0e9c6"
    },
    "table > thead > tr > tdinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table > tbody > tr > tdinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table > tfoot > tr > tdinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table > thead > tr > thinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table > tbody > tr > thinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table > tfoot > tr > thinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table > thead > trinfo > td": {
        "backgroundColor": "#d9edf7"
    },
    "table > tbody > trinfo > td": {
        "backgroundColor": "#d9edf7"
    },
    "table > tfoot > trinfo > td": {
        "backgroundColor": "#d9edf7"
    },
    "table > thead > trinfo > th": {
        "backgroundColor": "#d9edf7"
    },
    "table > tbody > trinfo > th": {
        "backgroundColor": "#d9edf7"
    },
    "table > tfoot > trinfo > th": {
        "backgroundColor": "#d9edf7"
    },
    "table-hover > tbody > tr > tdinfo:hover": {
        "backgroundColor": "#c4e3f3"
    },
    "table-hover > tbody > tr > thinfo:hover": {
        "backgroundColor": "#c4e3f3"
    },
    "table-hover > tbody > trinfo:hover > td": {
        "backgroundColor": "#c4e3f3"
    },
    "table-hover > tbody > tr:hover > info": {
        "backgroundColor": "#c4e3f3"
    },
    "table-hover > tbody > trinfo:hover > th": {
        "backgroundColor": "#c4e3f3"
    },
    "table > thead > tr > tdwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table > tbody > tr > tdwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table > tfoot > tr > tdwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table > thead > tr > thwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table > tbody > tr > thwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table > tfoot > tr > thwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table > thead > trwarning > td": {
        "backgroundColor": "#fcf8e3"
    },
    "table > tbody > trwarning > td": {
        "backgroundColor": "#fcf8e3"
    },
    "table > tfoot > trwarning > td": {
        "backgroundColor": "#fcf8e3"
    },
    "table > thead > trwarning > th": {
        "backgroundColor": "#fcf8e3"
    },
    "table > tbody > trwarning > th": {
        "backgroundColor": "#fcf8e3"
    },
    "table > tfoot > trwarning > th": {
        "backgroundColor": "#fcf8e3"
    },
    "table-hover > tbody > tr > tdwarning:hover": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover > tbody > tr > thwarning:hover": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover > tbody > trwarning:hover > td": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover > tbody > tr:hover > warning": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover > tbody > trwarning:hover > th": {
        "backgroundColor": "#faf2cc"
    },
    "table > thead > tr > tddanger": {
        "backgroundColor": "#f2dede"
    },
    "table > tbody > tr > tddanger": {
        "backgroundColor": "#f2dede"
    },
    "table > tfoot > tr > tddanger": {
        "backgroundColor": "#f2dede"
    },
    "table > thead > tr > thdanger": {
        "backgroundColor": "#f2dede"
    },
    "table > tbody > tr > thdanger": {
        "backgroundColor": "#f2dede"
    },
    "table > tfoot > tr > thdanger": {
        "backgroundColor": "#f2dede"
    },
    "table > thead > trdanger > td": {
        "backgroundColor": "#f2dede"
    },
    "table > tbody > trdanger > td": {
        "backgroundColor": "#f2dede"
    },
    "table > tfoot > trdanger > td": {
        "backgroundColor": "#f2dede"
    },
    "table > thead > trdanger > th": {
        "backgroundColor": "#f2dede"
    },
    "table > tbody > trdanger > th": {
        "backgroundColor": "#f2dede"
    },
    "table > tfoot > trdanger > th": {
        "backgroundColor": "#f2dede"
    },
    "table-hover > tbody > tr > tddanger:hover": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover > tbody > tr > thdanger:hover": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover > tbody > trdanger:hover > td": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover > tbody > tr:hover > danger": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover > tbody > trdanger:hover > th": {
        "backgroundColor": "#ebcccc"
    },
    "table-responsive": {
        "minHeight": ".01%",
        "overflowX": "auto"
    },
    "label": {
        "display": "inline",
        "maxWidth": "100%",
        "marginBottom": 5,
        "fontWeight": "bold",
        "paddingTop": 0.2,
        "paddingRight": 0.6,
        "paddingBottom": 0.3,
        "paddingLeft": 0.6,
        "fontSize": "75%",
        "lineHeight": 1,
        "color": "#fff",
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "verticalAlign": "baseline",
        "borderRadius": 0.25
    },
    "input[type=\"file\"]": {
        "display": "block"
    },
    "input[type=\"range\"]": {
        "display": "block",
        "width": "100%"
    },
    "select[multiple]": {
        "height": "auto"
    },
    "select[size]": {
        "height": "auto"
    },
    "input[type=\"file\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "input[type=\"radio\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "input[type=\"checkbox\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "output": {
        "display": "block",
        "paddingTop": 7,
        "fontSize": 14,
        "lineHeight": 1.42857143,
        "color": "#555"
    },
    "form-control": {
        "display": "block",
        "width": "100%",
        "height": 34,
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "fontSize": 14,
        "lineHeight": 1.42857143,
        "color": "#555",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "border": "1px solid #ccc",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)",
        "WebkitTransition": "border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s",
        "OTransition": "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
        "transition": "border-color ease-in-out .15s, box-shadow ease-in-out .15s"
    },
    "form-control:focus": {
        "borderColor": "#66afe9",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)"
    },
    "form-control::-moz-placeholder": {
        "color": "#999",
        "opacity": 1
    },
    "form-control:-ms-input-placeholder": {
        "color": "#999"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "#999"
    },
    "form-control::-ms-expand": {
        "backgroundColor": "transparent",
        "border": 0
    },
    "form-control[disabled]": {
        "backgroundColor": "#eee",
        "opacity": 1,
        "cursor": "not-allowed"
    },
    "form-control[readonly]": {
        "backgroundColor": "#eee",
        "opacity": 1
    },
    "fieldset[disabled] form-control": {
        "backgroundColor": "#eee",
        "opacity": 1,
        "cursor": "not-allowed"
    },
    "textareaform-control": {
        "height": "auto"
    },
    "form-group": {
        "marginBottom": 15
    },
    "radio": {
        "position": "relative",
        "display": "block",
        "marginTop": 10,
        "marginBottom": 10
    },
    "checkbox": {
        "position": "relative",
        "display": "block",
        "marginTop": 10,
        "marginBottom": 10
    },
    "radio label": {
        "minHeight": 20,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "checkbox label": {
        "minHeight": 20,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "radio input[type=\"radio\"]": {
        "position": "absolute",
        "marginTop": "4px \\9",
        "marginLeft": -20
    },
    "radio-inline input[type=\"radio\"]": {
        "position": "absolute",
        "marginTop": "4px \\9",
        "marginLeft": -20
    },
    "checkbox input[type=\"checkbox\"]": {
        "position": "absolute",
        "marginTop": "4px \\9",
        "marginLeft": -20
    },
    "checkbox-inline input[type=\"checkbox\"]": {
        "position": "absolute",
        "marginTop": "4px \\9",
        "marginLeft": -20
    },
    "radio + radio": {
        "marginTop": -5
    },
    "checkbox + checkbox": {
        "marginTop": -5
    },
    "radio-inline": {
        "position": "relative",
        "display": "inline-block",
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "normal",
        "verticalAlign": "middle",
        "cursor": "pointer"
    },
    "checkbox-inline": {
        "position": "relative",
        "display": "inline-block",
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "normal",
        "verticalAlign": "middle",
        "cursor": "pointer"
    },
    "radio-inline + radio-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "checkbox-inline + checkbox-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "input[type=\"radio\"][disabled]": {
        "cursor": "not-allowed"
    },
    "input[type=\"checkbox\"][disabled]": {
        "cursor": "not-allowed"
    },
    "input[type=\"radio\"]disabled": {
        "cursor": "not-allowed"
    },
    "input[type=\"checkbox\"]disabled": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] input[type=\"radio\"]": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] input[type=\"checkbox\"]": {
        "cursor": "not-allowed"
    },
    "radio-inlinedisabled": {
        "cursor": "not-allowed"
    },
    "checkbox-inlinedisabled": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] radio-inline": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] checkbox-inline": {
        "cursor": "not-allowed"
    },
    "radiodisabled label": {
        "cursor": "not-allowed"
    },
    "checkboxdisabled label": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] radio label": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] checkbox label": {
        "cursor": "not-allowed"
    },
    "form-control-static": {
        "minHeight": 34,
        "paddingTop": 7,
        "paddingBottom": 7,
        "marginBottom": 0
    },
    "form-control-staticinput-lg": {
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "form-control-staticinput-sm": {
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "input-sm": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "selectinput-sm": {
        "height": 30,
        "lineHeight": 30
    },
    "textareainput-sm": {
        "height": "auto"
    },
    "select[multiple]input-sm": {
        "height": "auto"
    },
    "form-group-sm form-control": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "form-group-sm selectform-control": {
        "height": 30,
        "lineHeight": 30
    },
    "form-group-sm textareaform-control": {
        "height": "auto"
    },
    "form-group-sm select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-sm form-control-static": {
        "height": 30,
        "minHeight": 32,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5
    },
    "input-lg": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "selectinput-lg": {
        "height": 46,
        "lineHeight": 46
    },
    "textareainput-lg": {
        "height": "auto"
    },
    "select[multiple]input-lg": {
        "height": "auto"
    },
    "form-group-lg form-control": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "form-group-lg selectform-control": {
        "height": 46,
        "lineHeight": 46
    },
    "form-group-lg textareaform-control": {
        "height": "auto"
    },
    "form-group-lg select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-lg form-control-static": {
        "height": 46,
        "minHeight": 38,
        "paddingTop": 11,
        "paddingRight": 16,
        "paddingBottom": 11,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333
    },
    "has-feedback": {
        "position": "relative"
    },
    "has-feedback form-control": {
        "paddingRight": 42.5
    },
    "form-control-feedback": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "zIndex": 2,
        "display": "block",
        "width": 34,
        "height": 34,
        "lineHeight": 34,
        "textAlign": "center",
        "pointerEvents": "none"
    },
    "input-lg + form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "input-group-lg + form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "form-group-lg form-control + form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "input-sm + form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "input-group-sm + form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "form-group-sm form-control + form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "has-success help-block": {
        "color": "#3c763d"
    },
    "has-success control-label": {
        "color": "#3c763d"
    },
    "has-success radio": {
        "color": "#3c763d"
    },
    "has-success checkbox": {
        "color": "#3c763d"
    },
    "has-success radio-inline": {
        "color": "#3c763d"
    },
    "has-success checkbox-inline": {
        "color": "#3c763d"
    },
    "has-successradio label": {
        "color": "#3c763d"
    },
    "has-successcheckbox label": {
        "color": "#3c763d"
    },
    "has-successradio-inline label": {
        "color": "#3c763d"
    },
    "has-successcheckbox-inline label": {
        "color": "#3c763d"
    },
    "has-success form-control": {
        "borderColor": "#3c763d",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)"
    },
    "has-success form-control:focus": {
        "borderColor": "#2b542c",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168"
    },
    "has-success input-group-addon": {
        "color": "#3c763d",
        "backgroundColor": "#dff0d8",
        "borderColor": "#3c763d"
    },
    "has-success form-control-feedback": {
        "color": "#3c763d"
    },
    "has-warning help-block": {
        "color": "#8a6d3b"
    },
    "has-warning control-label": {
        "color": "#8a6d3b"
    },
    "has-warning radio": {
        "color": "#8a6d3b"
    },
    "has-warning checkbox": {
        "color": "#8a6d3b"
    },
    "has-warning radio-inline": {
        "color": "#8a6d3b"
    },
    "has-warning checkbox-inline": {
        "color": "#8a6d3b"
    },
    "has-warningradio label": {
        "color": "#8a6d3b"
    },
    "has-warningcheckbox label": {
        "color": "#8a6d3b"
    },
    "has-warningradio-inline label": {
        "color": "#8a6d3b"
    },
    "has-warningcheckbox-inline label": {
        "color": "#8a6d3b"
    },
    "has-warning form-control": {
        "borderColor": "#8a6d3b",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)"
    },
    "has-warning form-control:focus": {
        "borderColor": "#66512c",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b"
    },
    "has-warning input-group-addon": {
        "color": "#8a6d3b",
        "backgroundColor": "#fcf8e3",
        "borderColor": "#8a6d3b"
    },
    "has-warning form-control-feedback": {
        "color": "#8a6d3b"
    },
    "has-error help-block": {
        "color": "#a94442"
    },
    "has-error control-label": {
        "color": "#a94442"
    },
    "has-error radio": {
        "color": "#a94442"
    },
    "has-error checkbox": {
        "color": "#a94442"
    },
    "has-error radio-inline": {
        "color": "#a94442"
    },
    "has-error checkbox-inline": {
        "color": "#a94442"
    },
    "has-errorradio label": {
        "color": "#a94442"
    },
    "has-errorcheckbox label": {
        "color": "#a94442"
    },
    "has-errorradio-inline label": {
        "color": "#a94442"
    },
    "has-errorcheckbox-inline label": {
        "color": "#a94442"
    },
    "has-error form-control": {
        "borderColor": "#a94442",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)"
    },
    "has-error form-control:focus": {
        "borderColor": "#843534",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483"
    },
    "has-error input-group-addon": {
        "color": "#a94442",
        "backgroundColor": "#f2dede",
        "borderColor": "#a94442"
    },
    "has-error form-control-feedback": {
        "color": "#a94442"
    },
    "has-feedback label ~ form-control-feedback": {
        "top": 25
    },
    "has-feedback labelsr-only ~ form-control-feedback": {
        "top": 0
    },
    "help-block": {
        "display": "block",
        "marginTop": 5,
        "marginBottom": 10,
        "color": "#737373"
    },
    "form-horizontal radio": {
        "paddingTop": 7,
        "marginTop": 0,
        "marginBottom": 0,
        "minHeight": 27
    },
    "form-horizontal checkbox": {
        "paddingTop": 7,
        "marginTop": 0,
        "marginBottom": 0,
        "minHeight": 27
    },
    "form-horizontal radio-inline": {
        "paddingTop": 7,
        "marginTop": 0,
        "marginBottom": 0
    },
    "form-horizontal checkbox-inline": {
        "paddingTop": 7,
        "marginTop": 0,
        "marginBottom": 0
    },
    "form-horizontal form-group": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "form-horizontal has-feedback form-control-feedback": {
        "right": 15
    },
    "btn": {
        "display": "inline-block",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "marginBottom": 0,
        "fontSize": 14,
        "fontWeight": "normal",
        "lineHeight": 1.42857143,
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "MsTouchAction": "manipulation",
        "touchAction": "manipulation",
        "cursor": "pointer",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "backgroundImage": "none",
        "border": "1px solid transparent",
        "borderRadius": 4
    },
    "btn:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#333",
        "textDecoration": "none"
    },
    "btn:active:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactive:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnfocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#333",
        "textDecoration": "none"
    },
    "btn:activefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactivefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btn:hover": {
        "color": "#333",
        "textDecoration": "none"
    },
    "btn:active": {
        "backgroundImage": "none",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, .125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, .125)"
    },
    "btnactive": {
        "backgroundImage": "none",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, .125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, .125)"
    },
    "btndisabled": {
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "opacity": 0.65
    },
    "btn[disabled]": {
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "opacity": 0.65
    },
    "fieldset[disabled] btn": {
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "opacity": 0.65
    },
    "abtndisabled": {
        "pointerEvents": "none"
    },
    "fieldset[disabled] abtn": {
        "pointerEvents": "none"
    },
    "btn-default": {
        "color": "#333",
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default:focus": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultfocus": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#8c8c8c"
    },
    "btn-default:hover": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "btn-default:active": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "btn-defaultactive": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-default": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "btn-default:active:hover": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultactive:hover": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "open > dropdown-togglebtn-default:hover": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-default:active:focus": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultactive:focus": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "open > dropdown-togglebtn-default:focus": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-default:activefocus": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultactivefocus": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "open > dropdown-togglebtn-defaultfocus": {
        "color": "#333",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultdisabled:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-default:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabled:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-default:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabledfocus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-defaultfocus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default badge": {
        "color": "#fff",
        "backgroundColor": "#333"
    },
    "btn-primary": {
        "color": "#fff",
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary:focus": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#122b40"
    },
    "btn-primaryfocus": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#122b40"
    },
    "btn-primary:hover": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74"
    },
    "btn-primary:active": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74",
        "backgroundImage": "none"
    },
    "btn-primaryactive": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-primary": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74",
        "backgroundImage": "none"
    },
    "btn-primary:active:hover": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "btn-primaryactive:hover": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "open > dropdown-togglebtn-primary:hover": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "btn-primary:active:focus": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "btn-primaryactive:focus": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "open > dropdown-togglebtn-primary:focus": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "btn-primary:activefocus": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "btn-primaryactivefocus": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "open > dropdown-togglebtn-primaryfocus": {
        "color": "#fff",
        "backgroundColor": "#204d74",
        "borderColor": "#122b40"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primarydisabledfocus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]focus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primaryfocus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary badge": {
        "color": "#337ab7",
        "backgroundColor": "#fff"
    },
    "btn-success": {
        "color": "#fff",
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success:focus": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#255625"
    },
    "btn-successfocus": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#255625"
    },
    "btn-success:hover": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439"
    },
    "btn-success:active": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439",
        "backgroundImage": "none"
    },
    "btn-successactive": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-success": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439",
        "backgroundImage": "none"
    },
    "btn-success:active:hover": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "btn-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "open > dropdown-togglebtn-success:hover": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "btn-success:active:focus": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "btn-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "open > dropdown-togglebtn-success:focus": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "btn-success:activefocus": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "btn-successactivefocus": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "open > dropdown-togglebtn-successfocus": {
        "color": "#fff",
        "backgroundColor": "#398439",
        "borderColor": "#255625"
    },
    "btn-successdisabled:hover": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]:hover": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-success:hover": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-successdisabled:focus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]:focus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-success:focus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-successdisabledfocus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]focus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-successfocus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success badge": {
        "color": "#5cb85c",
        "backgroundColor": "#fff"
    },
    "btn-info": {
        "color": "#fff",
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info:focus": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#1b6d85"
    },
    "btn-infofocus": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#1b6d85"
    },
    "btn-info:hover": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc"
    },
    "btn-info:active": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc",
        "backgroundImage": "none"
    },
    "btn-infoactive": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-info": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc",
        "backgroundImage": "none"
    },
    "btn-info:active:hover": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "btn-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "open > dropdown-togglebtn-info:hover": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "btn-info:active:focus": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "btn-infoactive:focus": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "open > dropdown-togglebtn-info:focus": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "btn-info:activefocus": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "btn-infoactivefocus": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "open > dropdown-togglebtn-infofocus": {
        "color": "#fff",
        "backgroundColor": "#269abc",
        "borderColor": "#1b6d85"
    },
    "btn-infodisabled:hover": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]:hover": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-info:hover": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-infodisabled:focus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]:focus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-info:focus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-infodisabledfocus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]focus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-infofocus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info badge": {
        "color": "#5bc0de",
        "backgroundColor": "#fff"
    },
    "btn-warning": {
        "color": "#fff",
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning:focus": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#985f0d"
    },
    "btn-warningfocus": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#985f0d"
    },
    "btn-warning:hover": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512"
    },
    "btn-warning:active": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512",
        "backgroundImage": "none"
    },
    "btn-warningactive": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-warning": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512",
        "backgroundImage": "none"
    },
    "btn-warning:active:hover": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "btn-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "open > dropdown-togglebtn-warning:hover": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "btn-warning:active:focus": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "btn-warningactive:focus": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "open > dropdown-togglebtn-warning:focus": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "btn-warning:activefocus": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "btn-warningactivefocus": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "open > dropdown-togglebtn-warningfocus": {
        "color": "#fff",
        "backgroundColor": "#d58512",
        "borderColor": "#985f0d"
    },
    "btn-warningdisabled:hover": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]:hover": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warning:hover": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warningdisabled:focus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]:focus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warning:focus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warningdisabledfocus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]focus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warningfocus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning badge": {
        "color": "#f0ad4e",
        "backgroundColor": "#fff"
    },
    "btn-danger": {
        "color": "#fff",
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger:focus": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#761c19"
    },
    "btn-dangerfocus": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#761c19"
    },
    "btn-danger:hover": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925"
    },
    "btn-danger:active": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925",
        "backgroundImage": "none"
    },
    "btn-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-danger": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925",
        "backgroundImage": "none"
    },
    "btn-danger:active:hover": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "btn-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "open > dropdown-togglebtn-danger:hover": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "btn-danger:active:focus": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "btn-dangeractive:focus": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "open > dropdown-togglebtn-danger:focus": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "btn-danger:activefocus": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "btn-dangeractivefocus": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "open > dropdown-togglebtn-dangerfocus": {
        "color": "#fff",
        "backgroundColor": "#ac2925",
        "borderColor": "#761c19"
    },
    "btn-dangerdisabled:hover": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]:hover": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-danger:hover": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-dangerdisabled:focus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]:focus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-danger:focus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-dangerdisabledfocus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]focus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-dangerfocus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger badge": {
        "color": "#d9534f",
        "backgroundColor": "#fff"
    },
    "btn-link": {
        "fontWeight": "normal",
        "color": "#337ab7",
        "borderRadius": 0,
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderColor": "transparent"
    },
    "btn-link:active": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderColor": "transparent"
    },
    "btn-linkactive": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-link[disabled]": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "fieldset[disabled] btn-link": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-link:hover": {
        "borderColor": "transparent",
        "color": "#23527c",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link:focus": {
        "borderColor": "transparent",
        "color": "#23527c",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link[disabled]:hover": {
        "color": "#777",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:hover": {
        "color": "#777",
        "textDecoration": "none"
    },
    "btn-link[disabled]:focus": {
        "color": "#777",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:focus": {
        "color": "#777",
        "textDecoration": "none"
    },
    "btn-lg": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "btn-group-lg > btn": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "btn-sm": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-group-sm > btn": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-xs": {
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-group-xs > btn": {
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-block": {
        "display": "block",
        "width": "100%"
    },
    "btn-block + btn-block": {
        "marginTop": 5
    },
    "input[type=\"submit\"]btn-block": {
        "width": "100%"
    },
    "input[type=\"reset\"]btn-block": {
        "width": "100%"
    },
    "input[type=\"button\"]btn-block": {
        "width": "100%"
    },
    "fade": {
        "opacity": 0,
        "WebkitTransition": "opacity .15s linear",
        "OTransition": "opacity .15s linear",
        "transition": "opacity .15s linear"
    },
    "fadein": {
        "opacity": 1
    },
    "collapse": {
        "display": "none"
    },
    "collapsein": {
        "display": "block"
    },
    "trcollapsein": {
        "display": "table-row"
    },
    "tbodycollapsein": {
        "display": "table-row-group"
    },
    "collapsing": {
        "position": "relative",
        "height": 0,
        "overflow": "hidden",
        "WebkitTransitionTimingFunction": "ease",
        "OTransitionTimingFunction": "ease",
        "transitionTimingFunction": "ease",
        "WebkitTransitionDuration": ".35s",
        "OTransitionDuration": ".35s",
        "transitionDuration": ".35s",
        "WebkitTransitionProperty": "height, visibility",
        "OTransitionProperty": "height, visibility",
        "transitionProperty": "height, visibility"
    },
    "caret": {
        "display": "inline-block",
        "width": 0,
        "height": 0,
        "marginLeft": 2,
        "verticalAlign": "middle",
        "borderTop": "4px solid \\9",
        "borderRight": "4px solid transparent",
        "borderLeft": "4px solid transparent"
    },
    "dropup": {
        "position": "relative"
    },
    "dropdown": {
        "position": "relative"
    },
    "dropdown-toggle:focus": {
        "outline": 0
    },
    "dropdown-menu": {
        "position": "absolute",
        "top": "100%",
        "left": 0,
        "zIndex": 1000,
        "display": "none",
        "float": "left",
        "minWidth": 160,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "textAlign": "left",
        "listStyle": "none",
        "backgroundColor": "#fff",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box",
        "border": "1px solid rgba(0, 0, 0, .15)",
        "borderRadius": 4,
        "WebkitBoxShadow": "0 6px 12px rgba(0, 0, 0, .175)",
        "boxShadow": "0 6px 12px rgba(0, 0, 0, .175)"
    },
    "dropdown-menupull-right": {
        "right": 0,
        "left": "auto"
    },
    "dropdown-menu divider": {
        "height": 1,
        "marginTop": 9,
        "marginRight": 0,
        "marginBottom": 9,
        "marginLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#e5e5e5"
    },
    "dropdown-menu > li > a": {
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "clear": "both",
        "fontWeight": "normal",
        "lineHeight": 1.42857143,
        "color": "#333",
        "whiteSpace": "nowrap"
    },
    "dropdown-menu > li > a:hover": {
        "color": "#262626",
        "textDecoration": "none",
        "backgroundColor": "#f5f5f5"
    },
    "dropdown-menu > li > a:focus": {
        "color": "#262626",
        "textDecoration": "none",
        "backgroundColor": "#f5f5f5"
    },
    "dropdown-menu > active > a": {
        "color": "#fff",
        "textDecoration": "none",
        "backgroundColor": "#337ab7",
        "outline": 0
    },
    "dropdown-menu > active > a:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "backgroundColor": "#337ab7",
        "outline": 0
    },
    "dropdown-menu > active > a:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "backgroundColor": "#337ab7",
        "outline": 0
    },
    "dropdown-menu > disabled > a": {
        "color": "#777"
    },
    "dropdown-menu > disabled > a:hover": {
        "color": "#777",
        "textDecoration": "none",
        "cursor": "not-allowed",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)"
    },
    "dropdown-menu > disabled > a:focus": {
        "color": "#777",
        "textDecoration": "none",
        "cursor": "not-allowed",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)"
    },
    "open > dropdown-menu": {
        "display": "block"
    },
    "open > a": {
        "outline": 0
    },
    "dropdown-menu-right": {
        "right": 0,
        "left": "auto"
    },
    "dropdown-menu-left": {
        "right": "auto",
        "left": 0
    },
    "dropdown-header": {
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "fontSize": 12,
        "lineHeight": 1.42857143,
        "color": "#777",
        "whiteSpace": "nowrap"
    },
    "dropdown-backdrop": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 990
    },
    "pull-right > dropdown-menu": {
        "right": 0,
        "left": "auto"
    },
    "dropup caret": {
        "content": "",
        "borderTop": 0,
        "borderBottom": "4px solid \\9"
    },
    "navbar-fixed-bottom dropdown caret": {
        "content": "",
        "borderTop": 0,
        "borderBottom": "4px solid \\9"
    },
    "dropup dropdown-menu": {
        "top": "auto",
        "bottom": "100%",
        "marginBottom": 2
    },
    "navbar-fixed-bottom dropdown dropdown-menu": {
        "top": "auto",
        "bottom": "100%",
        "marginBottom": 2
    },
    "btn-group": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "btn-group-vertical": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "btn-group > btn": {
        "position": "relative",
        "float": "left"
    },
    "btn-group-vertical > btn": {
        "position": "relative",
        "float": "none",
        "display": "block",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group > btn:hover": {
        "zIndex": 2
    },
    "btn-group-vertical > btn:hover": {
        "zIndex": 2
    },
    "btn-group > btn:focus": {
        "zIndex": 2
    },
    "btn-group-vertical > btn:focus": {
        "zIndex": 2
    },
    "btn-group > btn:active": {
        "zIndex": 2
    },
    "btn-group-vertical > btn:active": {
        "zIndex": 2
    },
    "btn-group > btnactive": {
        "zIndex": 2
    },
    "btn-group-vertical > btnactive": {
        "zIndex": 2
    },
    "btn-group btn + btn": {
        "marginLeft": -1
    },
    "btn-group btn + btn-group": {
        "marginLeft": -1
    },
    "btn-group btn-group + btn": {
        "marginLeft": -1
    },
    "btn-group btn-group + btn-group": {
        "marginLeft": -1
    },
    "btn-toolbar": {
        "marginLeft": -5
    },
    "btn-toolbar btn": {
        "float": "left"
    },
    "btn-toolbar btn-group": {
        "float": "left"
    },
    "btn-toolbar input-group": {
        "float": "left"
    },
    "btn-toolbar > btn": {
        "marginLeft": 5
    },
    "btn-toolbar > btn-group": {
        "marginLeft": 5
    },
    "btn-toolbar > input-group": {
        "marginLeft": 5
    },
    "btn-group > btn:not(:first-child):not(:last-child):not(dropdown-toggle)": {
        "borderRadius": 0
    },
    "btn-group > btn:first-child": {
        "marginLeft": 0
    },
    "btn-group > btn:first-child:not(:last-child):not(dropdown-toggle)": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "btn-group > btn:last-child:not(:first-child)": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group > dropdown-toggle:not(:first-child)": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group > btn-group": {
        "float": "left"
    },
    "btn-group > btn-group:not(:first-child):not(:last-child) > btn": {
        "borderRadius": 0
    },
    "btn-group > btn-group:first-child:not(:last-child) > btn:last-child": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "btn-group > btn-group:first-child:not(:last-child) > dropdown-toggle": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "btn-group > btn-group:last-child:not(:first-child) > btn:first-child": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group dropdown-toggle:active": {
        "outline": 0
    },
    "btn-groupopen dropdown-toggle": {
        "outline": 0,
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, .125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, .125)"
    },
    "btn-group > btn + dropdown-toggle": {
        "paddingRight": 8,
        "paddingLeft": 8
    },
    "btn-group > btn-lg + dropdown-toggle": {
        "paddingRight": 12,
        "paddingLeft": 12
    },
    "btn-groupopen dropdown-togglebtn-link": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn caret": {
        "marginLeft": 0
    },
    "btn-lg caret": {
        "borderWidth": "5px 5px 0",
        "borderBottomWidth": 0
    },
    "dropup btn-lg caret": {
        "borderWidth": "0 5px 5px"
    },
    "btn-group-vertical > btn-group": {
        "display": "block",
        "float": "none",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group-vertical > btn-group > btn": {
        "display": "block",
        "float": "none",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group-vertical > btn + btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical > btn + btn-group": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical > btn-group + btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical > btn-group + btn-group": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical > btn:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "btn-group-vertical > btn:first-child:not(:last-child)": {
        "borderTopLeftRadius": 4,
        "borderTopRightRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical > btn:last-child:not(:first-child)": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "btn-group-vertical > btn-group:not(:first-child):not(:last-child) > btn": {
        "borderRadius": 0
    },
    "btn-group-vertical > btn-group:first-child:not(:last-child) > btn:last-child": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical > btn-group:first-child:not(:last-child) > dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical > btn-group:last-child:not(:first-child) > btn:first-child": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group-justified": {
        "display": "table",
        "width": "100%",
        "tableLayout": "fixed",
        "borderCollapse": "separate"
    },
    "btn-group-justified > btn": {
        "display": "table-cell",
        "float": "none",
        "width": "1%"
    },
    "btn-group-justified > btn-group": {
        "display": "table-cell",
        "float": "none",
        "width": "1%"
    },
    "btn-group-justified > btn-group btn": {
        "width": "100%"
    },
    "btn-group-justified > btn-group dropdown-menu": {
        "left": "auto"
    },
    "[data-toggle=\"buttons\"] > btn input[type=\"radio\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"] > btn-group > btn input[type=\"radio\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"] > btn input[type=\"checkbox\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "[data-toggle=\"buttons\"] > btn-group > btn input[type=\"checkbox\"]": {
        "position": "absolute",
        "clip": "rect(0, 0, 0, 0)",
        "pointerEvents": "none"
    },
    "input-group": {
        "position": "relative",
        "display": "table",
        "borderCollapse": "separate"
    },
    "input-group[class*=\"col-\"]": {
        "float": "none",
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "input-group form-control": {
        "position": "relative",
        "zIndex": 2,
        "float": "left",
        "width": "100%",
        "marginBottom": 0,
        "display": "table-cell"
    },
    "input-group form-control:focus": {
        "zIndex": 3
    },
    "input-group-lg > form-control": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "input-group-lg > input-group-addon": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "input-group-lg > input-group-btn > btn": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "selectinput-group-lg > form-control": {
        "height": 46,
        "lineHeight": 46
    },
    "selectinput-group-lg > input-group-addon": {
        "height": 46,
        "lineHeight": 46
    },
    "selectinput-group-lg > input-group-btn > btn": {
        "height": 46,
        "lineHeight": 46
    },
    "textareainput-group-lg > form-control": {
        "height": "auto"
    },
    "textareainput-group-lg > input-group-addon": {
        "height": "auto"
    },
    "textareainput-group-lg > input-group-btn > btn": {
        "height": "auto"
    },
    "select[multiple]input-group-lg > form-control": {
        "height": "auto"
    },
    "select[multiple]input-group-lg > input-group-addon": {
        "height": "auto"
    },
    "select[multiple]input-group-lg > input-group-btn > btn": {
        "height": "auto"
    },
    "input-group-sm > form-control": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm > input-group-addon": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm > input-group-btn > btn": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "selectinput-group-sm > form-control": {
        "height": 30,
        "lineHeight": 30
    },
    "selectinput-group-sm > input-group-addon": {
        "height": 30,
        "lineHeight": 30
    },
    "selectinput-group-sm > input-group-btn > btn": {
        "height": 30,
        "lineHeight": 30
    },
    "textareainput-group-sm > form-control": {
        "height": "auto"
    },
    "textareainput-group-sm > input-group-addon": {
        "height": "auto"
    },
    "textareainput-group-sm > input-group-btn > btn": {
        "height": "auto"
    },
    "select[multiple]input-group-sm > form-control": {
        "height": "auto"
    },
    "select[multiple]input-group-sm > input-group-addon": {
        "height": "auto"
    },
    "select[multiple]input-group-sm > input-group-btn > btn": {
        "height": "auto"
    },
    "input-group-addon": {
        "display": "table-cell",
        "width": "1%",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "fontSize": 14,
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#555",
        "textAlign": "center",
        "backgroundColor": "#eee",
        "border": "1px solid #ccc",
        "borderRadius": 4
    },
    "input-group-btn": {
        "display": "table-cell",
        "width": "1%",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "position": "relative",
        "fontSize": 0
    },
    "input-group-addon:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group-btn:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group form-control:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group-addoninput-sm": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "borderRadius": 3
    },
    "input-group-addoninput-lg": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "borderRadius": 6
    },
    "input-group-addon input[type=\"radio\"]": {
        "marginTop": 0
    },
    "input-group-addon input[type=\"checkbox\"]": {
        "marginTop": 0
    },
    "input-group form-control:first-child": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "input-group-addon:first-child": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderRight": 0
    },
    "input-group-btn:first-child > btn": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "marginRight": -1
    },
    "input-group-btn:first-child > btn-group > btn": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "input-group-btn:first-child > dropdown-toggle": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "input-group-btn:last-child > btn:not(:last-child):not(dropdown-toggle)": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "input-group-btn:last-child > btn-group:not(:last-child) > btn": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "input-group form-control:last-child": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "input-group-addon:last-child": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0,
        "borderLeft": 0
    },
    "input-group-btn:last-child > btn": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0,
        "zIndex": 2,
        "marginLeft": -1
    },
    "input-group-btn:last-child > btn-group > btn": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "input-group-btn:last-child > dropdown-toggle": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "input-group-btn:first-child > btn:not(:first-child)": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "input-group-btn:first-child > btn-group:not(:first-child) > btn": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "input-group-btn > btn": {
        "position": "relative"
    },
    "input-group-btn > btn + btn": {
        "marginLeft": -1
    },
    "input-group-btn > btn:hover": {
        "zIndex": 2
    },
    "input-group-btn > btn:focus": {
        "zIndex": 2
    },
    "input-group-btn > btn:active": {
        "zIndex": 2
    },
    "input-group-btn:first-child > btn-group": {
        "marginRight": -1
    },
    "input-group-btn:last-child > btn-group": {
        "zIndex": 2,
        "marginLeft": -1
    },
    "nav > li": {
        "position": "relative",
        "display": "block"
    },
    "nav > li > a": {
        "position": "relative",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "nav > li > a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "nav > li > a:focus": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "nav > lidisabled > a": {
        "color": "#777"
    },
    "nav > lidisabled > a:hover": {
        "color": "#777",
        "textDecoration": "none",
        "cursor": "not-allowed",
        "backgroundColor": "transparent"
    },
    "nav > lidisabled > a:focus": {
        "color": "#777",
        "textDecoration": "none",
        "cursor": "not-allowed",
        "backgroundColor": "transparent"
    },
    "nav open > a": {
        "backgroundColor": "#eee",
        "borderColor": "#337ab7"
    },
    "nav open > a:hover": {
        "backgroundColor": "#eee",
        "borderColor": "#337ab7"
    },
    "nav open > a:focus": {
        "backgroundColor": "#eee",
        "borderColor": "#337ab7"
    },
    "nav nav-divider": {
        "height": 1,
        "marginTop": 9,
        "marginRight": 0,
        "marginBottom": 9,
        "marginLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#e5e5e5"
    },
    "nav > li > a > img": {
        "maxWidth": "none"
    },
    "nav-tabs": {
        "borderBottom": "1px solid #ddd"
    },
    "nav-tabs > li": {
        "float": "left",
        "marginBottom": -1
    },
    "nav-tabs > li > a": {
        "marginRight": 2,
        "lineHeight": 1.42857143,
        "border": "1px solid transparent",
        "borderRadius": "4px 4px 0 0"
    },
    "nav-tabs > li > a:hover": {
        "borderColor": "#eee #eee #ddd"
    },
    "nav-tabs > liactive > a": {
        "color": "#555",
        "cursor": "default",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent"
    },
    "nav-tabs > liactive > a:hover": {
        "color": "#555",
        "cursor": "default",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent"
    },
    "nav-tabs > liactive > a:focus": {
        "color": "#555",
        "cursor": "default",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent"
    },
    "nav-tabsnav-justified": {
        "width": "100%",
        "borderBottom": 0
    },
    "nav-tabsnav-justified > li": {
        "float": "none"
    },
    "nav-tabsnav-justified > li > a": {
        "marginBottom": 5,
        "textAlign": "center",
        "marginRight": 0,
        "borderRadius": 4
    },
    "nav-tabsnav-justified > dropdown dropdown-menu": {
        "top": "auto",
        "left": "auto"
    },
    "nav-tabsnav-justified > active > a": {
        "border": "1px solid #ddd"
    },
    "nav-tabsnav-justified > active > a:hover": {
        "border": "1px solid #ddd"
    },
    "nav-tabsnav-justified > active > a:focus": {
        "border": "1px solid #ddd"
    },
    "nav-pills > li": {
        "float": "left"
    },
    "nav-pills > li > a": {
        "borderRadius": 4
    },
    "nav-pills > li + li": {
        "marginLeft": 2
    },
    "nav-pills > liactive > a": {
        "color": "#fff",
        "backgroundColor": "#337ab7"
    },
    "nav-pills > liactive > a:hover": {
        "color": "#fff",
        "backgroundColor": "#337ab7"
    },
    "nav-pills > liactive > a:focus": {
        "color": "#fff",
        "backgroundColor": "#337ab7"
    },
    "nav-stacked > li": {
        "float": "none"
    },
    "nav-stacked > li + li": {
        "marginTop": 2,
        "marginLeft": 0
    },
    "nav-justified": {
        "width": "100%"
    },
    "nav-justified > li": {
        "float": "none"
    },
    "nav-justified > li > a": {
        "marginBottom": 5,
        "textAlign": "center"
    },
    "nav-justified > dropdown dropdown-menu": {
        "top": "auto",
        "left": "auto"
    },
    "nav-tabs-justified": {
        "borderBottom": 0
    },
    "nav-tabs-justified > li > a": {
        "marginRight": 0,
        "borderRadius": 4
    },
    "nav-tabs-justified > active > a": {
        "border": "1px solid #ddd"
    },
    "nav-tabs-justified > active > a:hover": {
        "border": "1px solid #ddd"
    },
    "nav-tabs-justified > active > a:focus": {
        "border": "1px solid #ddd"
    },
    "tab-content > tab-pane": {
        "display": "none"
    },
    "tab-content > active": {
        "display": "block"
    },
    "nav-tabs dropdown-menu": {
        "marginTop": -1,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0
    },
    "navbar": {
        "position": "relative",
        "minHeight": 50,
        "marginBottom": 20,
        "border": "1px solid transparent"
    },
    "navbar-collapse": {
        "paddingRight": 15,
        "paddingLeft": 15,
        "overflowX": "visible",
        "WebkitOverflowScrolling": "touch",
        "borderTop": "1px solid transparent",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, .1)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, .1)"
    },
    "navbar-collapsein": {
        "overflowY": "auto"
    },
    "navbar-fixed-top navbar-collapse": {
        "maxHeight": 340
    },
    "navbar-fixed-bottom navbar-collapse": {
        "maxHeight": 340
    },
    "container > navbar-header": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container-fluid > navbar-header": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container > navbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container-fluid > navbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "navbar-static-top": {
        "zIndex": 1000,
        "borderWidth": "0 0 1px"
    },
    "navbar-fixed-top": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "top": 0,
        "borderWidth": "0 0 1px"
    },
    "navbar-fixed-bottom": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "bottom": 0,
        "marginBottom": 0,
        "borderWidth": "1px 0 0"
    },
    "navbar-brand": {
        "float": "left",
        "height": 50,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "fontSize": 18,
        "lineHeight": 20
    },
    "navbar-brand:hover": {
        "textDecoration": "none"
    },
    "navbar-brand:focus": {
        "textDecoration": "none"
    },
    "navbar-brand > img": {
        "display": "block"
    },
    "navbar-toggle": {
        "position": "relative",
        "float": "right",
        "paddingTop": 9,
        "paddingRight": 10,
        "paddingBottom": 9,
        "paddingLeft": 10,
        "marginTop": 8,
        "marginRight": 15,
        "marginBottom": 8,
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "border": "1px solid transparent",
        "borderRadius": 4
    },
    "navbar-toggle:focus": {
        "outline": 0
    },
    "navbar-toggle icon-bar": {
        "display": "block",
        "width": 22,
        "height": 2,
        "borderRadius": 1
    },
    "navbar-toggle icon-bar + icon-bar": {
        "marginTop": 4
    },
    "navbar-nav": {
        "marginTop": 7.5,
        "marginRight": -15,
        "marginBottom": 7.5,
        "marginLeft": -15
    },
    "navbar-nav > li > a": {
        "paddingTop": 10,
        "paddingBottom": 10,
        "lineHeight": 20
    },
    "navbar-form": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "marginTop": 8,
        "marginRight": -15,
        "marginBottom": 8,
        "marginLeft": -15,
        "borderTop": "1px solid transparent",
        "borderBottom": "1px solid transparent",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1)"
    },
    "navbar-nav > li > dropdown-menu": {
        "marginTop": 0,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0
    },
    "navbar-fixed-bottom navbar-nav > li > dropdown-menu": {
        "marginBottom": 0,
        "borderTopLeftRadius": 4,
        "borderTopRightRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "navbar-btn": {
        "marginTop": 8,
        "marginBottom": 8
    },
    "navbar-btnbtn-sm": {
        "marginTop": 10,
        "marginBottom": 10
    },
    "navbar-btnbtn-xs": {
        "marginTop": 14,
        "marginBottom": 14
    },
    "navbar-text": {
        "marginTop": 15,
        "marginBottom": 15
    },
    "navbar-default": {
        "backgroundColor": "#f8f8f8",
        "borderColor": "#e7e7e7"
    },
    "navbar-default navbar-brand": {
        "color": "#777"
    },
    "navbar-default navbar-brand:hover": {
        "color": "#5e5e5e",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-brand:focus": {
        "color": "#5e5e5e",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-text": {
        "color": "#777"
    },
    "navbar-default navbar-nav > li > a": {
        "color": "#777"
    },
    "navbar-default navbar-nav > li > a:hover": {
        "color": "#333",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > li > a:focus": {
        "color": "#333",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > active > a": {
        "color": "#555",
        "backgroundColor": "#e7e7e7"
    },
    "navbar-default navbar-nav > active > a:hover": {
        "color": "#555",
        "backgroundColor": "#e7e7e7"
    },
    "navbar-default navbar-nav > active > a:focus": {
        "color": "#555",
        "backgroundColor": "#e7e7e7"
    },
    "navbar-default navbar-nav > disabled > a": {
        "color": "#ccc",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > disabled > a:hover": {
        "color": "#ccc",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > disabled > a:focus": {
        "color": "#ccc",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-toggle": {
        "borderColor": "#ddd"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "#ddd"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "#ddd"
    },
    "navbar-default navbar-toggle icon-bar": {
        "backgroundColor": "#888"
    },
    "navbar-default navbar-collapse": {
        "borderColor": "#e7e7e7"
    },
    "navbar-default navbar-form": {
        "borderColor": "#e7e7e7"
    },
    "navbar-default navbar-nav > open > a": {
        "color": "#555",
        "backgroundColor": "#e7e7e7"
    },
    "navbar-default navbar-nav > open > a:hover": {
        "color": "#555",
        "backgroundColor": "#e7e7e7"
    },
    "navbar-default navbar-nav > open > a:focus": {
        "color": "#555",
        "backgroundColor": "#e7e7e7"
    },
    "navbar-default navbar-link": {
        "color": "#777"
    },
    "navbar-default navbar-link:hover": {
        "color": "#333"
    },
    "navbar-default btn-link": {
        "color": "#777"
    },
    "navbar-default btn-link:hover": {
        "color": "#333"
    },
    "navbar-default btn-link:focus": {
        "color": "#333"
    },
    "navbar-default btn-link[disabled]:hover": {
        "color": "#ccc"
    },
    "fieldset[disabled] navbar-default btn-link:hover": {
        "color": "#ccc"
    },
    "navbar-default btn-link[disabled]:focus": {
        "color": "#ccc"
    },
    "fieldset[disabled] navbar-default btn-link:focus": {
        "color": "#ccc"
    },
    "navbar-inverse": {
        "backgroundColor": "#222",
        "borderColor": "#080808"
    },
    "navbar-inverse navbar-brand": {
        "color": "#9d9d9d"
    },
    "navbar-inverse navbar-brand:hover": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-brand:focus": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-text": {
        "color": "#9d9d9d"
    },
    "navbar-inverse navbar-nav > li > a": {
        "color": "#9d9d9d"
    },
    "navbar-inverse navbar-nav > li > a:hover": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav > li > a:focus": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav > active > a": {
        "color": "#fff",
        "backgroundColor": "#080808"
    },
    "navbar-inverse navbar-nav > active > a:hover": {
        "color": "#fff",
        "backgroundColor": "#080808"
    },
    "navbar-inverse navbar-nav > active > a:focus": {
        "color": "#fff",
        "backgroundColor": "#080808"
    },
    "navbar-inverse navbar-nav > disabled > a": {
        "color": "#444",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav > disabled > a:hover": {
        "color": "#444",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav > disabled > a:focus": {
        "color": "#444",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-toggle": {
        "borderColor": "#333"
    },
    "navbar-inverse navbar-toggle:hover": {
        "backgroundColor": "#333"
    },
    "navbar-inverse navbar-toggle:focus": {
        "backgroundColor": "#333"
    },
    "navbar-inverse navbar-toggle icon-bar": {
        "backgroundColor": "#fff"
    },
    "navbar-inverse navbar-collapse": {
        "borderColor": "#101010"
    },
    "navbar-inverse navbar-form": {
        "borderColor": "#101010"
    },
    "navbar-inverse navbar-nav > open > a": {
        "color": "#fff",
        "backgroundColor": "#080808"
    },
    "navbar-inverse navbar-nav > open > a:hover": {
        "color": "#fff",
        "backgroundColor": "#080808"
    },
    "navbar-inverse navbar-nav > open > a:focus": {
        "color": "#fff",
        "backgroundColor": "#080808"
    },
    "navbar-inverse navbar-link": {
        "color": "#9d9d9d"
    },
    "navbar-inverse navbar-link:hover": {
        "color": "#fff"
    },
    "navbar-inverse btn-link": {
        "color": "#9d9d9d"
    },
    "navbar-inverse btn-link:hover": {
        "color": "#fff"
    },
    "navbar-inverse btn-link:focus": {
        "color": "#fff"
    },
    "navbar-inverse btn-link[disabled]:hover": {
        "color": "#444"
    },
    "fieldset[disabled] navbar-inverse btn-link:hover": {
        "color": "#444"
    },
    "navbar-inverse btn-link[disabled]:focus": {
        "color": "#444"
    },
    "fieldset[disabled] navbar-inverse btn-link:focus": {
        "color": "#444"
    },
    "breadcrumb": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "marginBottom": 20,
        "listStyle": "none",
        "backgroundColor": "#f5f5f5",
        "borderRadius": 4
    },
    "breadcrumb > li": {
        "display": "inline-block"
    },
    "breadcrumb > li + li:before": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "color": "#ccc",
        "content": "/\\00a0"
    },
    "breadcrumb > active": {
        "color": "#777"
    },
    "pagination": {
        "display": "inline-block",
        "paddingLeft": 0,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "borderRadius": 4
    },
    "pagination > li": {
        "display": "inline"
    },
    "pagination > li > a": {
        "position": "relative",
        "float": "left",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "marginLeft": -1,
        "lineHeight": 1.42857143,
        "color": "#337ab7",
        "textDecoration": "none",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd"
    },
    "pagination > li > span": {
        "position": "relative",
        "float": "left",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "marginLeft": -1,
        "lineHeight": 1.42857143,
        "color": "#337ab7",
        "textDecoration": "none",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd"
    },
    "pagination > li:first-child > a": {
        "marginLeft": 0,
        "borderTopLeftRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "pagination > li:first-child > span": {
        "marginLeft": 0,
        "borderTopLeftRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "pagination > li:last-child > a": {
        "borderTopRightRadius": 4,
        "borderBottomRightRadius": 4
    },
    "pagination > li:last-child > span": {
        "borderTopRightRadius": 4,
        "borderBottomRightRadius": 4
    },
    "pagination > li > a:hover": {
        "zIndex": 2,
        "color": "#23527c",
        "backgroundColor": "#eee",
        "borderColor": "#ddd"
    },
    "pagination > li > span:hover": {
        "zIndex": 2,
        "color": "#23527c",
        "backgroundColor": "#eee",
        "borderColor": "#ddd"
    },
    "pagination > li > a:focus": {
        "zIndex": 2,
        "color": "#23527c",
        "backgroundColor": "#eee",
        "borderColor": "#ddd"
    },
    "pagination > li > span:focus": {
        "zIndex": 2,
        "color": "#23527c",
        "backgroundColor": "#eee",
        "borderColor": "#ddd"
    },
    "pagination > active > a": {
        "zIndex": 3,
        "color": "#fff",
        "cursor": "default",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "pagination > active > span": {
        "zIndex": 3,
        "color": "#fff",
        "cursor": "default",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "pagination > active > a:hover": {
        "zIndex": 3,
        "color": "#fff",
        "cursor": "default",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "pagination > active > span:hover": {
        "zIndex": 3,
        "color": "#fff",
        "cursor": "default",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "pagination > active > a:focus": {
        "zIndex": 3,
        "color": "#fff",
        "cursor": "default",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "pagination > active > span:focus": {
        "zIndex": 3,
        "color": "#fff",
        "cursor": "default",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "pagination > disabled > span": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff",
        "borderColor": "#ddd"
    },
    "pagination > disabled > span:hover": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff",
        "borderColor": "#ddd"
    },
    "pagination > disabled > span:focus": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff",
        "borderColor": "#ddd"
    },
    "pagination > disabled > a": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff",
        "borderColor": "#ddd"
    },
    "pagination > disabled > a:hover": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff",
        "borderColor": "#ddd"
    },
    "pagination > disabled > a:focus": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff",
        "borderColor": "#ddd"
    },
    "pagination-lg > li > a": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333
    },
    "pagination-lg > li > span": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333
    },
    "pagination-lg > li:first-child > a": {
        "borderTopLeftRadius": 6,
        "borderBottomLeftRadius": 6
    },
    "pagination-lg > li:first-child > span": {
        "borderTopLeftRadius": 6,
        "borderBottomLeftRadius": 6
    },
    "pagination-lg > li:last-child > a": {
        "borderTopRightRadius": 6,
        "borderBottomRightRadius": 6
    },
    "pagination-lg > li:last-child > span": {
        "borderTopRightRadius": 6,
        "borderBottomRightRadius": 6
    },
    "pagination-sm > li > a": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5
    },
    "pagination-sm > li > span": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5
    },
    "pagination-sm > li:first-child > a": {
        "borderTopLeftRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "pagination-sm > li:first-child > span": {
        "borderTopLeftRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "pagination-sm > li:last-child > a": {
        "borderTopRightRadius": 3,
        "borderBottomRightRadius": 3
    },
    "pagination-sm > li:last-child > span": {
        "borderTopRightRadius": 3,
        "borderBottomRightRadius": 3
    },
    "pager": {
        "paddingLeft": 0,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "textAlign": "center",
        "listStyle": "none"
    },
    "pager li": {
        "display": "inline"
    },
    "pager li > a": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderRadius": 15
    },
    "pager li > span": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderRadius": 15
    },
    "pager li > a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "pager li > a:focus": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "pager next > a": {
        "float": "right"
    },
    "pager next > span": {
        "float": "right"
    },
    "pager previous > a": {
        "float": "left"
    },
    "pager previous > span": {
        "float": "left"
    },
    "pager disabled > a": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff"
    },
    "pager disabled > a:hover": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff"
    },
    "pager disabled > a:focus": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff"
    },
    "pager disabled > span": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#fff"
    },
    "alabel:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "alabel:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "label:empty": {
        "display": "none"
    },
    "btn label": {
        "position": "relative",
        "top": -1
    },
    "label-default": {
        "backgroundColor": "#777"
    },
    "label-default[href]:hover": {
        "backgroundColor": "#5e5e5e"
    },
    "label-default[href]:focus": {
        "backgroundColor": "#5e5e5e"
    },
    "label-primary": {
        "backgroundColor": "#337ab7"
    },
    "label-primary[href]:hover": {
        "backgroundColor": "#286090"
    },
    "label-primary[href]:focus": {
        "backgroundColor": "#286090"
    },
    "label-success": {
        "backgroundColor": "#5cb85c"
    },
    "label-success[href]:hover": {
        "backgroundColor": "#449d44"
    },
    "label-success[href]:focus": {
        "backgroundColor": "#449d44"
    },
    "label-info": {
        "backgroundColor": "#5bc0de"
    },
    "label-info[href]:hover": {
        "backgroundColor": "#31b0d5"
    },
    "label-info[href]:focus": {
        "backgroundColor": "#31b0d5"
    },
    "label-warning": {
        "backgroundColor": "#f0ad4e"
    },
    "label-warning[href]:hover": {
        "backgroundColor": "#ec971f"
    },
    "label-warning[href]:focus": {
        "backgroundColor": "#ec971f"
    },
    "label-danger": {
        "backgroundColor": "#d9534f"
    },
    "label-danger[href]:hover": {
        "backgroundColor": "#c9302c"
    },
    "label-danger[href]:focus": {
        "backgroundColor": "#c9302c"
    },
    "badge": {
        "display": "inline-block",
        "minWidth": 10,
        "paddingTop": 3,
        "paddingRight": 7,
        "paddingBottom": 3,
        "paddingLeft": 7,
        "fontSize": 12,
        "fontWeight": "bold",
        "lineHeight": 1,
        "color": "#fff",
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "backgroundColor": "#777",
        "borderRadius": 10
    },
    "badge:empty": {
        "display": "none"
    },
    "btn badge": {
        "position": "relative",
        "top": -1
    },
    "btn-xs badge": {
        "top": 0,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5
    },
    "btn-group-xs > btn badge": {
        "top": 0,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5
    },
    "abadge:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "abadge:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "list-group-itemactive > badge": {
        "color": "#337ab7",
        "backgroundColor": "#fff"
    },
    "nav-pills > active > a > badge": {
        "color": "#337ab7",
        "backgroundColor": "#fff"
    },
    "list-group-item > badge": {
        "float": "right"
    },
    "list-group-item > badge + badge": {
        "marginRight": 5
    },
    "nav-pills > li > a > badge": {
        "marginLeft": 3
    },
    "jumbotron": {
        "paddingTop": 30,
        "paddingBottom": 30,
        "marginBottom": 30,
        "color": "inherit",
        "backgroundColor": "#eee"
    },
    "jumbotron h1": {
        "color": "inherit"
    },
    "jumbotron p": {
        "marginBottom": 15,
        "fontSize": 21,
        "fontWeight": 200
    },
    "jumbotron > hr": {
        "borderTopColor": "#d5d5d5"
    },
    "container jumbotron": {
        "paddingRight": 15,
        "paddingLeft": 15,
        "borderRadius": 6
    },
    "container-fluid jumbotron": {
        "paddingRight": 15,
        "paddingLeft": 15,
        "borderRadius": 6
    },
    "jumbotron container": {
        "maxWidth": "100%"
    },
    "thumbnail": {
        "display": "block",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "marginBottom": 20,
        "lineHeight": 1.42857143,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderRadius": 4,
        "WebkitTransition": "border .2s ease-in-out",
        "OTransition": "border .2s ease-in-out",
        "transition": "border .2s ease-in-out"
    },
    "athumbnail:hover": {
        "borderColor": "#337ab7"
    },
    "athumbnail:focus": {
        "borderColor": "#337ab7"
    },
    "athumbnailactive": {
        "borderColor": "#337ab7"
    },
    "thumbnail caption": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "color": "#333"
    },
    "alert": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginBottom": 20,
        "border": "1px solid transparent",
        "borderRadius": 4
    },
    "alert h4": {
        "marginTop": 0,
        "color": "inherit"
    },
    "alert alert-link": {
        "fontWeight": "bold"
    },
    "alert > p": {
        "marginBottom": 0
    },
    "alert > ul": {
        "marginBottom": 0
    },
    "alert > p + p": {
        "marginTop": 5
    },
    "alert-dismissable": {
        "paddingRight": 35
    },
    "alert-dismissible": {
        "paddingRight": 35
    },
    "alert-dismissable close": {
        "position": "relative",
        "top": -2,
        "right": -21,
        "color": "inherit"
    },
    "alert-dismissible close": {
        "position": "relative",
        "top": -2,
        "right": -21,
        "color": "inherit"
    },
    "alert-success": {
        "color": "#3c763d",
        "backgroundColor": "#dff0d8",
        "borderColor": "#d6e9c6"
    },
    "alert-success hr": {
        "borderTopColor": "#c9e2b3"
    },
    "alert-success alert-link": {
        "color": "#2b542c"
    },
    "alert-info": {
        "color": "#31708f",
        "backgroundColor": "#d9edf7",
        "borderColor": "#bce8f1"
    },
    "alert-info hr": {
        "borderTopColor": "#a6e1ec"
    },
    "alert-info alert-link": {
        "color": "#245269"
    },
    "alert-warning": {
        "color": "#8a6d3b",
        "backgroundColor": "#fcf8e3",
        "borderColor": "#faebcc"
    },
    "alert-warning hr": {
        "borderTopColor": "#f7e1b5"
    },
    "alert-warning alert-link": {
        "color": "#66512c"
    },
    "alert-danger": {
        "color": "#a94442",
        "backgroundColor": "#f2dede",
        "borderColor": "#ebccd1"
    },
    "alert-danger hr": {
        "borderTopColor": "#e4b9c0"
    },
    "alert-danger alert-link": {
        "color": "#843534"
    },
    "progress-bar": {
        "float": "left",
        "width": 0,
        "height": "100%",
        "fontSize": 12,
        "lineHeight": 20,
        "color": "#fff",
        "textAlign": "center",
        "backgroundColor": "#337ab7",
        "WebkitBoxShadow": "inset 0 -1px 0 rgba(0, 0, 0, .15)",
        "boxShadow": "inset 0 -1px 0 rgba(0, 0, 0, .15)",
        "WebkitTransition": "width .6s ease",
        "OTransition": "width .6s ease",
        "transition": "width .6s ease"
    },
    "progress-striped progress-bar": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)",
        "WebkitBackgroundSize": "40px 40px",
        "backgroundSize": "40px 40px"
    },
    "progress-bar-striped": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)",
        "WebkitBackgroundSize": "40px 40px",
        "backgroundSize": "40px 40px"
    },
    "progressactive progress-bar": {
        "WebkitAnimation": "progress-bar-stripes 2s linear infinite",
        "OAnimation": "progress-bar-stripes 2s linear infinite",
        "animation": "progress-bar-stripes 2s linear infinite"
    },
    "progress-baractive": {
        "WebkitAnimation": "progress-bar-stripes 2s linear infinite",
        "OAnimation": "progress-bar-stripes 2s linear infinite",
        "animation": "progress-bar-stripes 2s linear infinite"
    },
    "progress-bar-success": {
        "backgroundColor": "#5cb85c"
    },
    "progress-striped progress-bar-success": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-info": {
        "backgroundColor": "#5bc0de"
    },
    "progress-striped progress-bar-info": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-warning": {
        "backgroundColor": "#f0ad4e"
    },
    "progress-striped progress-bar-warning": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-danger": {
        "backgroundColor": "#d9534f"
    },
    "progress-striped progress-bar-danger": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)"
    },
    "media": {
        "marginTop": 15,
        "overflow": "hidden",
        "zoom": 1
    },
    "media:first-child": {
        "marginTop": 0
    },
    "media-body": {
        "overflow": "hidden",
        "zoom": 1,
        "width": 10000,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media-object": {
        "display": "block"
    },
    "media-objectimg-thumbnail": {
        "maxWidth": "none"
    },
    "media-right": {
        "paddingLeft": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media > pull-right": {
        "paddingLeft": 10
    },
    "media-left": {
        "paddingRight": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media > pull-left": {
        "paddingRight": 10
    },
    "media-middle": {
        "verticalAlign": "middle"
    },
    "media-bottom": {
        "verticalAlign": "bottom"
    },
    "media-heading": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "media-list": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-group": {
        "paddingLeft": 0,
        "marginBottom": 20
    },
    "list-group-item": {
        "position": "relative",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "marginBottom": -1,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd"
    },
    "list-group-item:first-child": {
        "borderTopLeftRadius": 4,
        "borderTopRightRadius": 4
    },
    "list-group-item:last-child": {
        "marginBottom": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "alist-group-item": {
        "color": "#555"
    },
    "buttonlist-group-item": {
        "color": "#555",
        "width": "100%",
        "textAlign": "left"
    },
    "alist-group-item list-group-item-heading": {
        "color": "#333"
    },
    "buttonlist-group-item list-group-item-heading": {
        "color": "#333"
    },
    "alist-group-item:hover": {
        "color": "#555",
        "textDecoration": "none",
        "backgroundColor": "#f5f5f5"
    },
    "buttonlist-group-item:hover": {
        "color": "#555",
        "textDecoration": "none",
        "backgroundColor": "#f5f5f5"
    },
    "alist-group-item:focus": {
        "color": "#555",
        "textDecoration": "none",
        "backgroundColor": "#f5f5f5"
    },
    "buttonlist-group-item:focus": {
        "color": "#555",
        "textDecoration": "none",
        "backgroundColor": "#f5f5f5"
    },
    "list-group-itemdisabled": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "list-group-itemdisabled:hover": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "list-group-itemdisabled:focus": {
        "color": "#777",
        "cursor": "not-allowed",
        "backgroundColor": "#eee"
    },
    "list-group-itemdisabled list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled:hover list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled:focus list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled list-group-item-text": {
        "color": "#777"
    },
    "list-group-itemdisabled:hover list-group-item-text": {
        "color": "#777"
    },
    "list-group-itemdisabled:focus list-group-item-text": {
        "color": "#777"
    },
    "list-group-itemactive": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "list-group-itemactive:hover": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "list-group-itemactive:focus": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "list-group-itemactive list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive:hover list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive:focus list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive list-group-item-heading > small": {
        "color": "inherit"
    },
    "list-group-itemactive:hover list-group-item-heading > small": {
        "color": "inherit"
    },
    "list-group-itemactive:focus list-group-item-heading > small": {
        "color": "inherit"
    },
    "list-group-itemactive list-group-item-text": {
        "color": "#c7ddef"
    },
    "list-group-itemactive:hover list-group-item-text": {
        "color": "#c7ddef"
    },
    "list-group-itemactive:focus list-group-item-text": {
        "color": "#c7ddef"
    },
    "list-group-item-success": {
        "color": "#3c763d",
        "backgroundColor": "#dff0d8"
    },
    "alist-group-item-success": {
        "color": "#3c763d"
    },
    "buttonlist-group-item-success": {
        "color": "#3c763d"
    },
    "alist-group-item-success list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-success list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-success:hover": {
        "color": "#3c763d",
        "backgroundColor": "#d0e9c6"
    },
    "buttonlist-group-item-success:hover": {
        "color": "#3c763d",
        "backgroundColor": "#d0e9c6"
    },
    "alist-group-item-success:focus": {
        "color": "#3c763d",
        "backgroundColor": "#d0e9c6"
    },
    "buttonlist-group-item-success:focus": {
        "color": "#3c763d",
        "backgroundColor": "#d0e9c6"
    },
    "alist-group-item-successactive": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "buttonlist-group-item-successactive": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "alist-group-item-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "buttonlist-group-item-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "alist-group-item-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "buttonlist-group-item-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "list-group-item-info": {
        "color": "#31708f",
        "backgroundColor": "#d9edf7"
    },
    "alist-group-item-info": {
        "color": "#31708f"
    },
    "buttonlist-group-item-info": {
        "color": "#31708f"
    },
    "alist-group-item-info list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-info list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-info:hover": {
        "color": "#31708f",
        "backgroundColor": "#c4e3f3"
    },
    "buttonlist-group-item-info:hover": {
        "color": "#31708f",
        "backgroundColor": "#c4e3f3"
    },
    "alist-group-item-info:focus": {
        "color": "#31708f",
        "backgroundColor": "#c4e3f3"
    },
    "buttonlist-group-item-info:focus": {
        "color": "#31708f",
        "backgroundColor": "#c4e3f3"
    },
    "alist-group-item-infoactive": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "buttonlist-group-item-infoactive": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "alist-group-item-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "buttonlist-group-item-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "alist-group-item-infoactive:focus": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "buttonlist-group-item-infoactive:focus": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "list-group-item-warning": {
        "color": "#8a6d3b",
        "backgroundColor": "#fcf8e3"
    },
    "alist-group-item-warning": {
        "color": "#8a6d3b"
    },
    "buttonlist-group-item-warning": {
        "color": "#8a6d3b"
    },
    "alist-group-item-warning list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-warning list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-warning:hover": {
        "color": "#8a6d3b",
        "backgroundColor": "#faf2cc"
    },
    "buttonlist-group-item-warning:hover": {
        "color": "#8a6d3b",
        "backgroundColor": "#faf2cc"
    },
    "alist-group-item-warning:focus": {
        "color": "#8a6d3b",
        "backgroundColor": "#faf2cc"
    },
    "buttonlist-group-item-warning:focus": {
        "color": "#8a6d3b",
        "backgroundColor": "#faf2cc"
    },
    "alist-group-item-warningactive": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "buttonlist-group-item-warningactive": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "alist-group-item-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "buttonlist-group-item-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "alist-group-item-warningactive:focus": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "buttonlist-group-item-warningactive:focus": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "list-group-item-danger": {
        "color": "#a94442",
        "backgroundColor": "#f2dede"
    },
    "alist-group-item-danger": {
        "color": "#a94442"
    },
    "buttonlist-group-item-danger": {
        "color": "#a94442"
    },
    "alist-group-item-danger list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-danger list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-danger:hover": {
        "color": "#a94442",
        "backgroundColor": "#ebcccc"
    },
    "buttonlist-group-item-danger:hover": {
        "color": "#a94442",
        "backgroundColor": "#ebcccc"
    },
    "alist-group-item-danger:focus": {
        "color": "#a94442",
        "backgroundColor": "#ebcccc"
    },
    "buttonlist-group-item-danger:focus": {
        "color": "#a94442",
        "backgroundColor": "#ebcccc"
    },
    "alist-group-item-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "buttonlist-group-item-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "alist-group-item-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "buttonlist-group-item-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "alist-group-item-dangeractive:focus": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "buttonlist-group-item-dangeractive:focus": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "list-group-item-heading": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "list-group-item-text": {
        "marginBottom": 0,
        "lineHeight": 1.3
    },
    "panel": {
        "marginBottom": 20,
        "backgroundColor": "#fff",
        "border": "1px solid transparent",
        "borderRadius": 4,
        "WebkitBoxShadow": "0 1px 1px rgba(0, 0, 0, .05)",
        "boxShadow": "0 1px 1px rgba(0, 0, 0, .05)"
    },
    "panel-body": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "panel-heading": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "borderBottom": "1px solid transparent",
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel-heading > dropdown dropdown-toggle": {
        "color": "inherit"
    },
    "panel-title": {
        "marginTop": 0,
        "marginBottom": 0,
        "fontSize": 16,
        "color": "inherit"
    },
    "panel-title > a": {
        "color": "inherit"
    },
    "panel-title > small": {
        "color": "inherit"
    },
    "panel-title > small > a": {
        "color": "inherit"
    },
    "panel-footer": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "backgroundColor": "#f5f5f5",
        "borderTop": "1px solid #ddd",
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > list-group": {
        "marginBottom": 0
    },
    "panel > panel-collapse > list-group": {
        "marginBottom": 0
    },
    "panel > list-group list-group-item": {
        "borderWidth": "1px 0",
        "borderRadius": 0
    },
    "panel > panel-collapse > list-group list-group-item": {
        "borderWidth": "1px 0",
        "borderRadius": 0
    },
    "panel > list-group:first-child list-group-item:first-child": {
        "borderTop": 0,
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > panel-collapse > list-group:first-child list-group-item:first-child": {
        "borderTop": 0,
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > list-group:last-child list-group-item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > panel-collapse > list-group:last-child list-group-item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > panel-heading + panel-collapse > list-group list-group-item:first-child": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0
    },
    "panel-heading + list-group list-group-item:first-child": {
        "borderTopWidth": 0
    },
    "list-group + panel-footer": {
        "borderTopWidth": 0
    },
    "panel > table": {
        "marginBottom": 0
    },
    "panel > table-responsive > table": {
        "marginBottom": 0
    },
    "panel > panel-collapse > table": {
        "marginBottom": 0
    },
    "panel > table caption": {
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "panel > table-responsive > table caption": {
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "panel > panel-collapse > table caption": {
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "panel > table:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child": {
        "borderTopLeftRadius": 3,
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > thead:first-child > tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > thead:first-child > tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table:first-child > tbody:first-child > tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table-responsive:first-child > table:first-child > tbody:first-child > tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel > table:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table:last-child > tbody:last-child > tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tbody:last-child > tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table:last-child > tfoot:last-child > tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > table-responsive:last-child > table:last-child > tfoot:last-child > tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel > panel-body + table": {
        "borderTop": "1px solid #ddd"
    },
    "panel > panel-body + table-responsive": {
        "borderTop": "1px solid #ddd"
    },
    "panel > table + panel-body": {
        "borderTop": "1px solid #ddd"
    },
    "panel > table-responsive + panel-body": {
        "borderTop": "1px solid #ddd"
    },
    "panel > table > tbody:first-child > tr:first-child th": {
        "borderTop": 0
    },
    "panel > table > tbody:first-child > tr:first-child td": {
        "borderTop": 0
    },
    "panel > table-bordered": {
        "border": 0
    },
    "panel > table-responsive > table-bordered": {
        "border": 0
    },
    "panel > table-bordered > thead > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > thead > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > tbody > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > tfoot > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr > th:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > thead > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > thead > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > tbody > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > tfoot > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr > td:first-child": {
        "borderLeft": 0
    },
    "panel > table-bordered > thead > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > thead > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > tbody > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > tfoot > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr > th:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > thead > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > thead > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > tbody > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > tfoot > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr > td:last-child": {
        "borderRight": 0
    },
    "panel > table-bordered > thead > tr:first-child > td": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > thead > tr:first-child > td": {
        "borderBottom": 0
    },
    "panel > table-bordered > tbody > tr:first-child > td": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr:first-child > td": {
        "borderBottom": 0
    },
    "panel > table-bordered > thead > tr:first-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > thead > tr:first-child > th": {
        "borderBottom": 0
    },
    "panel > table-bordered > tbody > tr:first-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr:first-child > th": {
        "borderBottom": 0
    },
    "panel > table-bordered > tbody > tr:last-child > td": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr:last-child > td": {
        "borderBottom": 0
    },
    "panel > table-bordered > tfoot > tr:last-child > td": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr:last-child > td": {
        "borderBottom": 0
    },
    "panel > table-bordered > tbody > tr:last-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tbody > tr:last-child > th": {
        "borderBottom": 0
    },
    "panel > table-bordered > tfoot > tr:last-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive > table-bordered > tfoot > tr:last-child > th": {
        "borderBottom": 0
    },
    "panel > table-responsive": {
        "marginBottom": 0,
        "border": 0
    },
    "panel-group": {
        "marginBottom": 20
    },
    "panel-group panel": {
        "marginBottom": 0,
        "borderRadius": 4
    },
    "panel-group panel + panel": {
        "marginTop": 5
    },
    "panel-group panel-heading": {
        "borderBottom": 0
    },
    "panel-group panel-heading + panel-collapse > panel-body": {
        "borderTop": "1px solid #ddd"
    },
    "panel-group panel-heading + panel-collapse > list-group": {
        "borderTop": "1px solid #ddd"
    },
    "panel-group panel-footer": {
        "borderTop": 0
    },
    "panel-group panel-footer + panel-collapse panel-body": {
        "borderBottom": "1px solid #ddd"
    },
    "panel-default": {
        "borderColor": "#ddd"
    },
    "panel-default > panel-heading": {
        "color": "#333",
        "backgroundColor": "#f5f5f5",
        "borderColor": "#ddd"
    },
    "panel-default > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#ddd"
    },
    "panel-default > panel-heading badge": {
        "color": "#f5f5f5",
        "backgroundColor": "#333"
    },
    "panel-default > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#ddd"
    },
    "panel-primary": {
        "borderColor": "#337ab7"
    },
    "panel-primary > panel-heading": {
        "color": "#fff",
        "backgroundColor": "#337ab7",
        "borderColor": "#337ab7"
    },
    "panel-primary > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#337ab7"
    },
    "panel-primary > panel-heading badge": {
        "color": "#337ab7",
        "backgroundColor": "#fff"
    },
    "panel-primary > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#337ab7"
    },
    "panel-success": {
        "borderColor": "#d6e9c6"
    },
    "panel-success > panel-heading": {
        "color": "#3c763d",
        "backgroundColor": "#dff0d8",
        "borderColor": "#d6e9c6"
    },
    "panel-success > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#d6e9c6"
    },
    "panel-success > panel-heading badge": {
        "color": "#dff0d8",
        "backgroundColor": "#3c763d"
    },
    "panel-success > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#d6e9c6"
    },
    "panel-info": {
        "borderColor": "#bce8f1"
    },
    "panel-info > panel-heading": {
        "color": "#31708f",
        "backgroundColor": "#d9edf7",
        "borderColor": "#bce8f1"
    },
    "panel-info > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#bce8f1"
    },
    "panel-info > panel-heading badge": {
        "color": "#d9edf7",
        "backgroundColor": "#31708f"
    },
    "panel-info > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#bce8f1"
    },
    "panel-warning": {
        "borderColor": "#faebcc"
    },
    "panel-warning > panel-heading": {
        "color": "#8a6d3b",
        "backgroundColor": "#fcf8e3",
        "borderColor": "#faebcc"
    },
    "panel-warning > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#faebcc"
    },
    "panel-warning > panel-heading badge": {
        "color": "#fcf8e3",
        "backgroundColor": "#8a6d3b"
    },
    "panel-warning > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#faebcc"
    },
    "panel-danger": {
        "borderColor": "#ebccd1"
    },
    "panel-danger > panel-heading": {
        "color": "#a94442",
        "backgroundColor": "#f2dede",
        "borderColor": "#ebccd1"
    },
    "panel-danger > panel-heading + panel-collapse > panel-body": {
        "borderTopColor": "#ebccd1"
    },
    "panel-danger > panel-heading badge": {
        "color": "#f2dede",
        "backgroundColor": "#a94442"
    },
    "panel-danger > panel-footer + panel-collapse > panel-body": {
        "borderBottomColor": "#ebccd1"
    },
    "embed-responsive": {
        "position": "relative",
        "display": "block",
        "height": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "embed-responsive embed-responsive-item": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "border": 0
    },
    "embed-responsive iframe": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "border": 0
    },
    "embed-responsive embed": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "border": 0
    },
    "embed-responsive object": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "border": 0
    },
    "embed-responsive video": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "border": 0
    },
    "embed-responsive-16by9": {
        "paddingBottom": "56.25%"
    },
    "embed-responsive-4by3": {
        "paddingBottom": "75%"
    },
    "well": {
        "minHeight": 20,
        "paddingTop": 19,
        "paddingRight": 19,
        "paddingBottom": 19,
        "paddingLeft": 19,
        "marginBottom": 20,
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #e3e3e3",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .05)",
        "boxShadow": "inset 0 1px 1px rgba(0, 0, 0, .05)"
    },
    "well blockquote": {
        "borderColor": "rgba(0, 0, 0, .15)"
    },
    "well-lg": {
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 24,
        "paddingLeft": 24,
        "borderRadius": 6
    },
    "well-sm": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "borderRadius": 3
    },
    "close": {
        "float": "right",
        "fontSize": 21,
        "fontWeight": "bold",
        "lineHeight": 1,
        "color": "#000",
        "textShadow": "0 1px 0 #fff",
        "filter": "alpha(opacity=20)",
        "opacity": 0.2
    },
    "close:hover": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "filter": "alpha(opacity=50)",
        "opacity": 0.5
    },
    "close:focus": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "filter": "alpha(opacity=50)",
        "opacity": 0.5
    },
    "buttonclose": {
        "WebkitAppearance": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "cursor": "pointer",
        "background": "transparent",
        "border": 0
    },
    "modal-open": {
        "overflow": "hidden"
    },
    "modal": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1050,
        "display": "none",
        "overflow": "hidden",
        "WebkitOverflowScrolling": "touch",
        "outline": 0
    },
    "modalfade modal-dialog": {
        "WebkitTransition": "-webkit-transform .3s ease-out",
        "OTransition": "-o-transform .3s ease-out",
        "transition": "transform .3s ease-out",
        "WebkitTransform": "translate(0, -25%)",
        "MsTransform": "translate(0, -25%)",
        "OTransform": "translate(0, -25%)",
        "transform": "translate(0, -25%)"
    },
    "modalin modal-dialog": {
        "WebkitTransform": "translate(0, 0)",
        "MsTransform": "translate(0, 0)",
        "OTransform": "translate(0, 0)",
        "transform": "translate(0, 0)"
    },
    "modal-open modal": {
        "overflowX": "hidden",
        "overflowY": "auto"
    },
    "modal-dialog": {
        "position": "relative",
        "width": "auto",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "modal-content": {
        "position": "relative",
        "backgroundColor": "#fff",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box",
        "border": "1px solid rgba(0, 0, 0, .2)",
        "borderRadius": 6,
        "outline": 0,
        "WebkitBoxShadow": "0 3px 9px rgba(0, 0, 0, .5)",
        "boxShadow": "0 3px 9px rgba(0, 0, 0, .5)"
    },
    "modal-backdrop": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1040,
        "backgroundColor": "#000"
    },
    "modal-backdropfade": {
        "filter": "alpha(opacity=0)",
        "opacity": 0
    },
    "modal-backdropin": {
        "filter": "alpha(opacity=50)",
        "opacity": 0.5
    },
    "modal-header": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderBottom": "1px solid #e5e5e5"
    },
    "modal-header close": {
        "marginTop": -2
    },
    "modal-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.42857143
    },
    "modal-body": {
        "position": "relative",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "modal-footer": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textAlign": "right",
        "borderTop": "1px solid #e5e5e5"
    },
    "modal-footer btn + btn": {
        "marginBottom": 0,
        "marginLeft": 5
    },
    "modal-footer btn-group btn + btn": {
        "marginLeft": -1
    },
    "modal-footer btn-block + btn-block": {
        "marginLeft": 0
    },
    "modal-scrollbar-measure": {
        "position": "absolute",
        "top": -9999,
        "width": 50,
        "height": 50,
        "overflow": "scroll"
    },
    "tooltip": {
        "position": "absolute",
        "zIndex": 1070,
        "display": "block",
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": 12,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "lineHeight": 1.42857143,
        "textAlign": "start",
        "textDecoration": "none",
        "textShadow": "none",
        "textTransform": "none",
        "letterSpacing": "normal",
        "wordBreak": "normal",
        "wordSpacing": "normal",
        "wordWrap": "normal",
        "whiteSpace": "normal",
        "filter": "alpha(opacity=0)",
        "opacity": 0,
        "lineBreak": "auto"
    },
    "tooltipin": {
        "filter": "alpha(opacity=90)",
        "opacity": 0.9
    },
    "tooltiptop": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": -3
    },
    "tooltipright": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "marginLeft": 3
    },
    "tooltipbottom": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": 3
    },
    "tooltipleft": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "marginLeft": -3
    },
    "tooltip-inner": {
        "maxWidth": 200,
        "paddingTop": 3,
        "paddingRight": 8,
        "paddingBottom": 3,
        "paddingLeft": 8,
        "color": "#fff",
        "textAlign": "center",
        "backgroundColor": "#000",
        "borderRadius": 4
    },
    "tooltip-arrow": {
        "position": "absolute",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid"
    },
    "tooltiptop tooltip-arrow": {
        "bottom": 0,
        "left": "50%",
        "marginLeft": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#000"
    },
    "tooltiptop-left tooltip-arrow": {
        "right": 5,
        "bottom": 0,
        "marginBottom": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#000"
    },
    "tooltiptop-right tooltip-arrow": {
        "bottom": 0,
        "left": 5,
        "marginBottom": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#000"
    },
    "tooltipright tooltip-arrow": {
        "top": "50%",
        "left": 0,
        "marginTop": -5,
        "borderWidth": "5px 5px 5px 0",
        "borderRightColor": "#000"
    },
    "tooltipleft tooltip-arrow": {
        "top": "50%",
        "right": 0,
        "marginTop": -5,
        "borderWidth": "5px 0 5px 5px",
        "borderLeftColor": "#000"
    },
    "tooltipbottom tooltip-arrow": {
        "top": 0,
        "left": "50%",
        "marginLeft": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#000"
    },
    "tooltipbottom-left tooltip-arrow": {
        "top": 0,
        "right": 5,
        "marginTop": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#000"
    },
    "tooltipbottom-right tooltip-arrow": {
        "top": 0,
        "left": 5,
        "marginTop": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#000"
    },
    "popover": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1060,
        "display": "none",
        "maxWidth": 276,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": 14,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "lineHeight": 1.42857143,
        "textAlign": "start",
        "textDecoration": "none",
        "textShadow": "none",
        "textTransform": "none",
        "letterSpacing": "normal",
        "wordBreak": "normal",
        "wordSpacing": "normal",
        "wordWrap": "normal",
        "whiteSpace": "normal",
        "backgroundColor": "#fff",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box",
        "border": "1px solid rgba(0, 0, 0, .2)",
        "borderRadius": 6,
        "WebkitBoxShadow": "0 5px 10px rgba(0, 0, 0, .2)",
        "boxShadow": "0 5px 10px rgba(0, 0, 0, .2)",
        "lineBreak": "auto"
    },
    "popovertop": {
        "marginTop": -10
    },
    "popoverright": {
        "marginLeft": 10
    },
    "popoverbottom": {
        "marginTop": 10
    },
    "popoverleft": {
        "marginLeft": -10
    },
    "popover-title": {
        "paddingTop": 8,
        "paddingRight": 14,
        "paddingBottom": 8,
        "paddingLeft": 14,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 14,
        "backgroundColor": "#f7f7f7",
        "borderBottom": "1px solid #ebebeb",
        "borderRadius": "5px 5px 0 0"
    },
    "popover-content": {
        "paddingTop": 9,
        "paddingRight": 14,
        "paddingBottom": 9,
        "paddingLeft": 14
    },
    "popover > arrow": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 11
    },
    "popover > arrow:after": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "content": "",
        "borderWidth": 10
    },
    "popovertop > arrow": {
        "bottom": -11,
        "left": "50%",
        "marginLeft": -11,
        "borderTopColor": "rgba(0, 0, 0, .25)",
        "borderBottomWidth": 0
    },
    "popovertop > arrow:after": {
        "bottom": 1,
        "marginLeft": -10,
        "content": " ",
        "borderTopColor": "#fff",
        "borderBottomWidth": 0
    },
    "popoverright > arrow": {
        "top": "50%",
        "left": -11,
        "marginTop": -11,
        "borderRightColor": "rgba(0, 0, 0, .25)",
        "borderLeftWidth": 0
    },
    "popoverright > arrow:after": {
        "bottom": -10,
        "left": 1,
        "content": " ",
        "borderRightColor": "#fff",
        "borderLeftWidth": 0
    },
    "popoverbottom > arrow": {
        "top": -11,
        "left": "50%",
        "marginLeft": -11,
        "borderTopWidth": 0,
        "borderBottomColor": "rgba(0, 0, 0, .25)"
    },
    "popoverbottom > arrow:after": {
        "top": 1,
        "marginLeft": -10,
        "content": " ",
        "borderTopWidth": 0,
        "borderBottomColor": "#fff"
    },
    "popoverleft > arrow": {
        "top": "50%",
        "right": -11,
        "marginTop": -11,
        "borderRightWidth": 0,
        "borderLeftColor": "rgba(0, 0, 0, .25)"
    },
    "popoverleft > arrow:after": {
        "right": 1,
        "bottom": -10,
        "content": " ",
        "borderRightWidth": 0,
        "borderLeftColor": "#fff"
    },
    "carousel": {
        "position": "relative"
    },
    "carousel-inner": {
        "position": "relative",
        "width": "100%",
        "overflow": "hidden"
    },
    "carousel-inner > item": {
        "position": "relative",
        "display": "none",
        "WebkitTransition": ".6s ease-in-out left",
        "OTransition": ".6s ease-in-out left",
        "transition": ".6s ease-in-out left"
    },
    "carousel-inner > active": {
        "display": "block",
        "left": 0
    },
    "carousel-inner > next": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "100%"
    },
    "carousel-inner > prev": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "-100%"
    },
    "carousel-inner > nextleft": {
        "left": 0
    },
    "carousel-inner > prevright": {
        "left": 0
    },
    "carousel-inner > activeleft": {
        "left": "-100%"
    },
    "carousel-inner > activeright": {
        "left": "100%"
    },
    "carousel-control": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "width": "15%",
        "fontSize": 20,
        "color": "#fff",
        "textAlign": "center",
        "textShadow": "0 1px 2px rgba(0, 0, 0, .6)",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "filter": "alpha(opacity=50)",
        "opacity": 0.5
    },
    "carousel-controlleft": {
        "backgroundImage": "linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)",
        "backgroundRepeat": "repeat-x"
    },
    "carousel-controlright": {
        "right": 0,
        "left": "auto",
        "backgroundImage": "linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)",
        "backgroundRepeat": "repeat-x"
    },
    "carousel-control:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "filter": "alpha(opacity=90)",
        "outline": 0,
        "opacity": 0.9
    },
    "carousel-control:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "filter": "alpha(opacity=90)",
        "outline": 0,
        "opacity": 0.9
    },
    "carousel-control icon-prev": {
        "position": "absolute",
        "top": "50%",
        "zIndex": 5,
        "display": "inline-block",
        "marginTop": -10,
        "left": "50%",
        "marginLeft": -10,
        "width": 20,
        "height": 20,
        "fontFamily": "serif",
        "lineHeight": 1
    },
    "carousel-control icon-next": {
        "position": "absolute",
        "top": "50%",
        "zIndex": 5,
        "display": "inline-block",
        "marginTop": -10,
        "right": "50%",
        "marginRight": -10,
        "width": 20,
        "height": 20,
        "fontFamily": "serif",
        "lineHeight": 1
    },
    "carousel-control glyphicon-chevron-left": {
        "position": "absolute",
        "top": "50%",
        "zIndex": 5,
        "display": "inline-block",
        "marginTop": -10,
        "left": "50%",
        "marginLeft": -10
    },
    "carousel-control glyphicon-chevron-right": {
        "position": "absolute",
        "top": "50%",
        "zIndex": 5,
        "display": "inline-block",
        "marginTop": -10,
        "right": "50%",
        "marginRight": -10
    },
    "carousel-control icon-prev:before": {
        "content": "'\\2039'"
    },
    "carousel-control icon-next:before": {
        "content": "'\\203a'"
    },
    "carousel-indicators": {
        "position": "absolute",
        "bottom": 10,
        "left": "50%",
        "zIndex": 15,
        "width": "60%",
        "paddingLeft": 0,
        "marginLeft": "-30%",
        "textAlign": "center",
        "listStyle": "none"
    },
    "carousel-indicators li": {
        "display": "inline-block",
        "width": 10,
        "height": 10,
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "textIndent": -999,
        "cursor": "pointer",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "border": "1px solid #fff",
        "borderRadius": 10
    },
    "carousel-indicators active": {
        "width": 12,
        "height": 12,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "#fff"
    },
    "carousel-caption": {
        "position": "absolute",
        "right": "15%",
        "bottom": 20,
        "left": "15%",
        "zIndex": 10,
        "paddingTop": 20,
        "paddingBottom": 20,
        "color": "#fff",
        "textAlign": "center",
        "textShadow": "0 1px 2px rgba(0, 0, 0, .6)"
    },
    "carousel-caption btn": {
        "textShadow": "none"
    },
    "clearfix:before": {
        "display": "table",
        "content": " "
    },
    "clearfix:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "dl-horizontal dd:before": {
        "display": "table",
        "content": " "
    },
    "dl-horizontal dd:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "container:before": {
        "display": "table",
        "content": " "
    },
    "container:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "container-fluid:before": {
        "display": "table",
        "content": " "
    },
    "container-fluid:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "row:before": {
        "display": "table",
        "content": " "
    },
    "row:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "form-horizontal form-group:before": {
        "display": "table",
        "content": " "
    },
    "form-horizontal form-group:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "btn-toolbar:before": {
        "display": "table",
        "content": " "
    },
    "btn-toolbar:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "btn-group-vertical > btn-group:before": {
        "display": "table",
        "content": " "
    },
    "btn-group-vertical > btn-group:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "nav:before": {
        "display": "table",
        "content": " "
    },
    "nav:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "navbar:before": {
        "display": "table",
        "content": " "
    },
    "navbar:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "navbar-header:before": {
        "display": "table",
        "content": " "
    },
    "navbar-header:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "navbar-collapse:before": {
        "display": "table",
        "content": " "
    },
    "navbar-collapse:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "pager:before": {
        "display": "table",
        "content": " "
    },
    "pager:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "panel-body:before": {
        "display": "table",
        "content": " "
    },
    "panel-body:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "modal-header:before": {
        "display": "table",
        "content": " "
    },
    "modal-header:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "modal-footer:before": {
        "display": "table",
        "content": " "
    },
    "modal-footer:after": {
        "display": "table",
        "content": " ",
        "clear": "both"
    },
    "center-block": {
        "display": "block",
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "pull-right": {
        "float": "right !important"
    },
    "pull-left": {
        "float": "left !important"
    },
    "hide": {
        "display": "none !important"
    },
    "show": {
        "display": "block !important"
    },
    "invisible": {
        "visibility": "hidden"
    },
    "text-hide": {
        "font": "0/0 a",
        "color": "transparent",
        "textShadow": "none",
        "backgroundColor": "transparent",
        "border": 0
    },
    "hidden": {
        "display": "none !important"
    },
    "affix": {
        "position": "fixed"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "visible-xs": {
        "display": "none !important"
    },
    "visible-sm": {
        "display": "none !important"
    },
    "visible-md": {
        "display": "none !important"
    },
    "visible-lg": {
        "display": "none !important"
    },
    "visible-xs-block": {
        "display": "none !important"
    },
    "visible-xs-inline": {
        "display": "none !important"
    },
    "visible-xs-inline-block": {
        "display": "none !important"
    },
    "visible-sm-block": {
        "display": "none !important"
    },
    "visible-sm-inline": {
        "display": "none !important"
    },
    "visible-sm-inline-block": {
        "display": "none !important"
    },
    "visible-md-block": {
        "display": "none !important"
    },
    "visible-md-inline": {
        "display": "none !important"
    },
    "visible-md-inline-block": {
        "display": "none !important"
    },
    "visible-lg-block": {
        "display": "none !important"
    },
    "visible-lg-inline": {
        "display": "none !important"
    },
    "visible-lg-inline-block": {
        "display": "none !important"
    },
    "visible-print": {
        "display": "none !important"
    },
    "visible-print-block": {
        "display": "none !important"
    },
    "visible-print-inline": {
        "display": "none !important"
    },
    "visible-print-inline-block": {
        "display": "none !important"
    }
});