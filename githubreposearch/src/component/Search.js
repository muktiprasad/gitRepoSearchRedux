import React,  { useState } from 'react';
import { useDispatch } from 'react-redux';
import ResultComponent from './ResultComponent';
import { fetchRepoRequest } from './../redux/Repo/RepoAction';
import Dropdown from './Dropdown';
import './../ProductThumbnail.css';
import { fetchRepos } from '../redux'

function Search(props) {
    const [inputVal, setInputVal] = useState("");
    const [lang, setLang] = useState('javascript');
    const [err, setErr] = useState('');
    const dispatch = useDispatch();
    
    const changeValue = (value) => {
        setErr('');
        setInputVal(value)

      }
    
    const searchRepos = (e,keyword) => {
        e.preventDefault();
        if(!keyword.length) {
          dispatch(fetchRepoRequest([]));
            setErr('Please enter Search Text');
            return;
        }
        
        fetchRepos({lang,keyword})(dispatch);
       
        } 
    
      const onSelect = (e) => {
         setLang(e.target.value);
      }
     return (
        <div>
            <h2>{props.header}</h2>
           <input
          type="text"
          placeholder={props.inputText}
          value={inputVal}
          onChange={event => changeValue(event.target.value)}
        />
       
        <Dropdown onSelect={onSelect} lang={lang}  />
        <button className="buttonClass" onClick={(e) => searchRepos(e,inputVal)}>
          {props.buttonText}
        </button>  
        <div className="error">{err}</div>
        <ResultComponent />
        </div>
    )
}
export default Search
