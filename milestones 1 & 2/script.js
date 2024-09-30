var togglButton = document.getElementById('toggle-skills');
var skills = document.getElementById('Skills');
// Initially show the skills section
skills.style.display = 'block';
togglButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        togglButton.innerHTML = '<b>Hide Skills</b>'; // Change button text
    }
    else {
        skills.style.display = 'none';
        togglButton.innerHTML = '<b>Show Skills</b>'; // Change button text
    }
});
