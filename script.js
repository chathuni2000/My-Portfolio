document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const reposSection = document.createElement('section');
    reposSection.id = 'repos';
    document.body.appendChild(reposSection);

    fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos')
        .then(response => response.json())
        .then(repos => {
            reposSection.innerHTML = '<h2>My GitHub Repositories</h2>';
            repos.forEach(repo => {
                const repoElement = document.createElement('div');
                repoElement.className = 'repo';
                repoElement.innerHTML = `<h3>${repo.name}</h3><p>${repo.description}</p>`;
                reposSection.appendChild(repoElement);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
});
