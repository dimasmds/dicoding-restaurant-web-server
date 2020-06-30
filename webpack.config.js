const path = require("path");
const WebpackImagesResizer = require("webpack-images-resizer");

const small = [{
    src: path.resolve(__dirname, "images"),
    dest: "/images/small",
}];

const medium = [{
    src: path.resolve(__dirname, "images"),
    dest: "/images/medium",
}];

const large = [{
    src: path.resolve(__dirname, "images"),
    dest: "/images/large",
}];

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "src")
    },
    plugins: [
        new WebpackImagesResizer(small, {width: "25%"}),
        new WebpackImagesResizer(medium, {width: "50%"}),
        new WebpackImagesResizer(large, {width: "75%"})
    ]
};
