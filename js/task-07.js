const fontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControl.addEventListener('input', onFontSizeControl);
function onFontSizeControl(evt) {
    textForZoom.style.fontSize = evt.currentTarget.value + 'px';
}