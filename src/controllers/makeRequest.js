import axios from 'axios';


export async function makeRequest(method, url, body = {}) {
    const requestConfig = {
        headers: {
            authorisation: `Bearer ${localStorage.getItem("token")}`
        }
    }

    let apiResponse;
    switch (method.toLowerCase()) {
        case 'post':
            apiResponse = await axios.post(url, requestConfig, body);
            break;
        case 'put':
            apiResponse = await axios.put(url, requestConfig, body);
            break;
        case 'delete':
            apiResponse = await axios.delete(url, requestConfig, body);
            break;
        case 'get':
            apiResponse = await axios.get(url, requestConfig);
            break;
    }

    if (apiResponse.status === 403) {
        localStorage.removeItem("token");
        // TODO : il faut qu'il se passe qqch (notif, changement de page, affichage de la modale d'authent)
    }

    localStorage.setItem("token", apiResponse.headers['x-access-token']);

    return apiResponse;
}

