const Markdoc = require('@markdoc/markdoc');

const config = {
    nodes: {


    }
};
export default function convertMD2Html(sourceMD) {

    const ast = Markdoc.parse(sourceMD);
    const content = Markdoc.transform(ast, config/* config */);

    var html = Markdoc.renderers.html(content);
    html=html.replaceAll('<a ' , '<a target="_blank" ');
    return html;
}

//module.export = { convertMD2Html };