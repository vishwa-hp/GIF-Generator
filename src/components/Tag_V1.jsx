import React, {useState} from 'react';

import useGif from '../useGif';

const Tag = () => {
    const [tag, setTag] = useState('Dogs');
    const {gif, fetchGif} = useGif(tag);
   
   
    return (
        <div className="container-1">
            <h1 className = 'new' >Random {tag} Gif</h1>
            <img width = '500' height='350' src={gif} alt='random_GIF' />
            <input value={tag} onChange = {(e)=> setTag(e.target.value)} />
            <button onClick = {()=> fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    )
};

export default Tag;