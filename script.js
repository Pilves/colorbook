// script.js

// Color picker for Layer 1
document.getElementById('colorPickerLayer1').addEventListener('input', function(event) {
    const selectedColor = event.target.value;
    const layer1 = document.getElementById('Layer_1');
    layer1.querySelectorAll('.cls-1').forEach(path => path.style.fill = selectedColor);
});

// Color picker for Layer 2
document.getElementById('colorPickerLayer2').addEventListener('input', function(event) {
    const selectedColor = event.target.value;
    const layer2 = document.getElementById('Layer_2');
    layer2.querySelectorAll('.cls-1').forEach(path => path.style.fill = selectedColor);
});
