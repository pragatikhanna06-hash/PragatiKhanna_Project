const container = document.getElementById("cardContainer");

    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.forEach(project => {

        const card = document.createElement("div");
        card.className = "card";

        let tagsHTML = "";
        const tagsArray = project.tags.split(",");
        tagsArray.forEach(tag => {
            tagsHTML += `<span>${tag.trim()}</span>`;
        });

        card.innerHTML = `
            <div class="card-header">
                <span class="category">${project.category}</span>
                <span class="level">${project.level}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${tagsHTML}</div>
            <button class="btn-view">View Project</button>
        `;

        container.appendChild(card);
    });

    const container = document.getElementById("projects-wrapper");