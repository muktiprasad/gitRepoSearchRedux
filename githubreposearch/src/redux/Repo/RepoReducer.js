const { FETCH_REPO_REQUEST} = require("./RepoType")
const { UPDATE_LOADER} = require("./LoaderType")

const initialState = {
    loaded: false,
    repos: []
}

const repoReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_REPO_REQUEST:
            return {
                ...state,
                loaded: false,
                repos: action.payload
            }
            case UPDATE_LOADER:
            return {
                ...state,
                loaded: true
            }
            default: return state
    }
}

export default repoReducer