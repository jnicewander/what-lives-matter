document.getElementById('findOut').addEventListener('click', function() {
    const initialState = document.getElementById('initial');
    const afterState = document.getElementById('after');
    const initialChilds = initialState.children;
    const afterChilds = afterState.children;

    initialState.style.display = 'none';
    for(let elements of initialChilds) {
       elements.style.display = 'none';
    }

    afterState.style.display = 'block';
    document.body.style.background
    document.body.style.backgroundImage = "url('flames.png')";
    for(let elements of afterChilds) {
       elements.style.display = 'block';
    }
})

document.getElementById('again').addEventListener('click', function(){
    window.location.reload();
})