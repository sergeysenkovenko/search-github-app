export const elements = {
    searchInput: document.querySelector("#searchUser"),
    profile: document.querySelector('#profile'),
}

export const renderLoader = () => {
    const markup = `
                    <div class="loader d-flex justify-content-center mt-2">
                        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                   `
    elements.profile.insertAdjacentHTML("afterbegin", markup);
}

export const removeLoader = () => {
    const loader = document.querySelector(".loader");
    if(loader){
        loader.parentElement.removeChild(loader);
    }
}