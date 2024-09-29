const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('Skills') as HTMLElement;

// Initially show the skills section
skills.style.display = 'block';

toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        toggleButton.innerHTML = '<b>Hide Skills</b>'; // Change button text
    } else {
        skills.style.display = 'none';
        toggleButton.innerHTML = '<b>Show Skills</b>'; // Change button text
    }
});
