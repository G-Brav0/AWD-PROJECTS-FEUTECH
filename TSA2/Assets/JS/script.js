function show(color) {
    var boxes = document.getElementById('right_panel');
    boxes.style.backgroundColor = color;
    boxes.style.transform = 'translateY(0)';
    boxes.style.opacity = 1;
    setTimeout(function() {
        boxes.style.transform = 'translateY(-100%)';
        boxes.style.opacity = 0;
    }, 4000); 
}