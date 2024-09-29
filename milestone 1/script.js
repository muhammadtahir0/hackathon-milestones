var toggleButtonOption = document.getElementById('toggle-skills');
var skillsOption = document.getElementById('skills');
toggleButtonOption.addEventListener('click', function () {
    if (skillsOption.style.display === 'none') {
        skillsOption.style.display = 'block';
    }
    else {
        skillsOption.style.display === 'none';
    }
});
