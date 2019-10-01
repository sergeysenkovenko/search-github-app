import Search from './models/Search';
import * as appView from './views/appView'
import { elements, renderLoader, removeLoader } from './views/elements';

const state = {}

const controlSearch = async () => {
    const query = appView.getInput()
    if(query && query!== ' ') {
        state.search = new Search(query);
        try{
            appView.clearResult();
            renderLoader();
            await state.search.getUser();
            removeLoader();
            if(!state.search.profile.message){
                appView.renderProfile(state.search.profile);
                renderReposList();
            }else{
                appView.profileNotFound();
            }  
        }
        catch (error){
            // console.log(error)
        }
    }else {
        appView.clearResult();
    }
}

const renderReposList = () => {
    state.search.repos.forEach(el => {
        const repo = {
            url: el.html_url,
            name: el.name,
            stars: el.stargazers_count,
            watchers: el.watchers_count,
            forks: el.forks_count
        }
        appView.renderRepo(repo)
    });
}

elements.searchInput.addEventListener("keyup", () => {
    controlSearch();
});