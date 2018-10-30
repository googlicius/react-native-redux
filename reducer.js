export const GET_REPOS = 'app/GET_REPOS';
export const GET_REPOS_SUCCESS = 'app/GET_REPOS_SUCCESS';
export const GET_REPOS_FAIL = 'app/GET_REPOS_FAIL';

const initState = {
    repos: []
}

export default function reducer(state = initState, action = {}) {
    switch (action.type) {
        case GET_REPOS:
            return {
                ...state,
                loading: true
            }
            
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                repos: action.payload.data
            }

        case GET_REPOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state;
    }
}

export function listRepos(user) {
    return {
        type: GET_REPOS,
        payload: {
            request: {
                url: '/users/' + user + '/starred'
            }
        }
    }
}