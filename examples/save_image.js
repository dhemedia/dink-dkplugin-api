/*
This example requires some html, with a canvas called 'myCanvas'
*/
var G = {};

G.success = function(result) {
    console.log("success : " + result);
};

G.failure = function(result) {
    console.log("failure : " + result);
};

var doImageTest = function() {
    if (canvas == null) {
        canvas = document.getElementById('myCanvas');
        context = canvas.getContext('2d');
    }

    var randy = Math.floor(Math.random() * 1001) + 1;
    var img = new Image();
    img.onload = function() {
        context.drawImage(this, 0, 0);
        var url = canvas.toDataURL();
        var rep = 'data:image/png;base64,';
        url = url.substr(rep.length);
        DKPlugin.storeLocalFile('', 'tester', 'jpg', url, 0, G.success, G.failure);

    };
    img.src = "http://a.tgcdn.net/images/products/zoom/ebb8_cat_scratch_dj.jpg?" + randy;
}
