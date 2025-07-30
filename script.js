function showSubject(subject) {
    const tabs = document.querySelectorAll('.tab');
    const subjects = document.querySelectorAll('.chapters');

    tabs.forEach(tab => tab.classList.remove('active'));
    subjects.forEach(section => (section.style.display = 'none'));

    document.querySelector(`#${subject}`).style.display = 'block';
    document.querySelector(`.tab[onclick="showSubject('${subject}')"]`).classList.add('active');
}