function recolorImage(img, oldRed, oldGreen, oldBlue, newRed, newGreen, newBlue, c) {

    var ctx = c.getContext("2d");
    var w = img.width;
    var h = img.height;

    c.width = w;
    c.height = h;

    // draw the image on the temporary canvas
    ctx.drawImage(img, 0, 0, w, h);

    // pull the entire image into an array of pixel data
    var imageData = ctx.getImageData(0, 0, w, h);

    // examine every pixel, 
    // change any old rgb to the new-rgb
    for (var i = 0; i < imageData.data.length; i += 4) {
        // is this pixel the old rgb?
        if (imageData.data[i] == oldRed &&
            imageData.data[i + 1] == oldGreen &&
            imageData.data[i + 2] == oldBlue
        ) {
            // change to your new rgb
            imageData.data[i] = newRed;
            imageData.data[i + 1] = newGreen;
            imageData.data[i + 2] = newBlue;
        }
    }
    // put the altered data back on the canvas  
    ctx.putImageData(imageData, 0, 0);
    // put the re-colored image back on the image

    img.src = c.toDataURL('image/png');

}