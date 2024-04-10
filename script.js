document.addEventListener('DOMContentLoaded', function () {
    const mentorsYes = document.getElementById('mentors_yes');
    const mentorsNo = document.getElementById('mentors_no');
    const sponsorshipOptions = document.getElementById('sponsorshipOptions');
    const resourcesTextarea = document.getElementById('resources');
    mentorsYes.addEventListener('change', function () {
        if (this.checked) {
            sponsorshipOptions.style.display = 'block';
            resourcesTextarea.style.display = 'block';
        }
    });

    mentorsNo.addEventListener('change', function () {
        if (this.checked) {
            sponsorshipOptions.style.display = 'none';
            resourcesTextarea.style.display = 'none';
        }
    });
});