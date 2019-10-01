import {clientID, clientSecret, reposCount, reposSort} from '../config'

export default class Search {
    constructor(query){
        this.query = query
    }

    async getUser() {
        try {
            const url = `https://api.github.com/users/${this.query}`
            const profileRes = await fetch(`${url}?client_id=${clientID}&client_secret=${clientSecret}`);
            const profileRepos = await fetch(`${url}/repos?per_page=${reposCount}&sort=${reposSort}&client_id=${clientID}&client_secret=${clientSecret}`);
            this.profile = await profileRes.json();
            this.repos = await profileRepos.json();
        }catch(error) {
        //    console.log(error);
        }
    }
}