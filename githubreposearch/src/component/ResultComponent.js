import React from 'react'
import { useSelector } from 'react-redux';
import ProductThumbnail from './ProductThumbnail';
import Loader from './Loader';
function ResultComponent() {
    const repos = useSelector(state => state.repos);
    const loaded = useSelector(state => state.loaded);
    const repoResults = repos.length ? repos.map(item => (
        <ProductThumbnail
          key={item.id}
          link={item.html_url}
          title={item.name}
          description={item.description}
          image={item.owner.avatar_url}
        /> 
      )) : '';
    return ( 
        <>
            <div className="wrapperClass">
                {
                    loaded ?  <Loader /> : repoResults
                }   
            </div>  
            </>
    )
}

export default ResultComponent
