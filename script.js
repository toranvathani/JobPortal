document.addEventListener('DOMContentLoaded', () => {
    const jobListings = [
        {
            title: 'Frontend Developer',
            company: 'Tech Corp',
            location: 'Bangalore, India',
            description: 'Should have good technical skills, handle tasks with full integrity and posses a good spirit.',
            link: 'job_details.html'
        },
        {
            title: 'Backend Developer',
            company: 'Innovatech',
            location: 'Noida, India',
            description: 'Should have good technical skills, handle tasks with full integrity and posses a good spirit.',
            link: 'job_details.html'
        },
        // More job listings
    ];

    const jobContainer = document.getElementById('job-listings');
    jobListings.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job-listing');
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <a href="${job.link}">View Details</a>
        `;
        jobContainer.appendChild(jobElement);
    });

    // Search functionality
    document.getElementById('search-form').addEventListener('submit', event => {
        event.preventDefault();
        const title = document.getElementById('job-title').value.toLowerCase();
        const location = document.getElementById('location').value.toLowerCase();

        const filteredJobs = jobListings.filter(job =>
            job.title.toLowerCase().includes(title) &&
            job.location.toLowerCase().includes(location)
        );

        jobContainer.innerHTML = '';
        filteredJobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job-listing');
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p>${job.description}</p>
                <a href="${job.link}">View Details</a>
            `;
            jobContainer.appendChild(jobElement);
        });
    });
});
