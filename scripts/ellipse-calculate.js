function calculateEllipse() {

    const majorRadius = getInputValueBy('ellipse-one');
    const minorRadius = getInputValueBy('ellipse-two');

    const area = 3.1416 * majorRadius * minorRadius;
    setInnerTextById('pentagon-area', area);

}


