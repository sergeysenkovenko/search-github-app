import { elements } from './elements';

export const getInput = () => elements.searchInput.value

const defaults = {
    value: "No info",
    image: "https://avatars.dicebear.com/v2/avataaars/.svg?options[topChance]=0&options[facialHair][]=light&options[facialHairChance]=67&options[facialHairColor][]=black&options[mouth][]=sad"
}

export const renderProfile = user =>{
        const markup = 
                `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid mb-2" src="${!user.avatar_url ? defaults.image : user.avatar_url}">
                            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                        </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${!user.company ? defaults.value : user.company}</li>
                    <li class="list-group-item">Website/Blog: ${!user.blog ? defaults.value : user.blog}</li>
                    <li class="list-group-item">Location: ${!user.location ? defaults.value : user.location}</li>
                    <li class="list-group-item">Member Since: ${formatDate(user.created_at)}</li>
                </ul>
                </div>
                </div>
                </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
                `;
    
    elements.profile.insertAdjacentHTML("beforeend", markup);
}

export const renderRepo = repo => {
    const markup = `
    <div class="card card-body mb-2">
        <div class="row">
            <div class="col-md-6">
                 <a href="${repo.url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stars}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
            <span class="badge badge-success">Forks: ${repo.forks}</span>
        </div>
        </div>
    </div>`
    document.getElementById("repos").insertAdjacentHTML("beforeend", markup);
}

export const profileNotFound = () => {
    const markup = `<h2 class="d-flex justify-content-center mt-2">User not found =(</h2>`
    elements.profile.insertAdjacentHTML("beforeend", markup);
}

export const clearResult = () => {
    elements.profile.innerHTML = '';
}

function formatDate (str) {
    let ns = str.split("T")
    return ns[0].split("-").reverse().join("-");
}
