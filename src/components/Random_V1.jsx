import React from 'react';

import useGif from '../useGif';

const Random = () => {
    const {gif, fetchGif} = useGif();
   
   
    return (
        <div className="container-2">
            <h1 className= 'new'>Random Gif</h1>
            <img width = '500' height = '350' src={gif} alt='random_GIF' />
            <button onClick = { fetchGif }>CLICK FOR NEW</button>
        </div>
    )
};

export default Random;