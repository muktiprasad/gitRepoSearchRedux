import {FETCH_REPO_REQUEST} from './RepoType';
import { updateLoader } from './LoaderAction';
import axios from 'axios';

export const fetchRepoRequest = (result) => {
    return {
        type: FETCH_REPO_REQUEST,
        payload: result
        
    }
}

export const fetchRepos = ({lang,keyword}) => {
    return (dispatch) => {
        dispatch(updateLoader(true));
        axios.get(`https://api.github.com/search/repositories?q=language:${lang}&${keyword}`)
        .then (result => {
            dispatch(updateLoader(false));
            dispatch(fetchRepoRequest(result.data.items));
        })
        .catch(error => {
             console.log(error);
        })
    }
}