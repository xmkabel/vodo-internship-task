import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
export default function MoviesDetalis() {
    const [searchparams, setSearchparams] = useSearchParams();
    const [detalis, setDetalis] = useState([])
    let imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    let currentID = searchparams.get('id')
    async function getAllDetalis(MediaType) {
        let { data } = await
            axios.get(`https://api.themoviedb.org/3/movie/${currentID}?api_key=27fb0ae37ae46dd602c6da31ffc81d5f&language=en-US`);
        setDetalis(data);
    }
    useEffect(() => {
        getAllDetalis('movie')
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-md-4 my-4">
                    <div className="displayImg">
                        <img src={imgBaseUrl + detalis.poster_path} className='w-100' alt='' />
                    </div>
                </div>
                <div className="col-md-8 my-4">
                    <h2>{detalis.title}</h2>
                    <h3 className='h5 text-muted'>{detalis.tagline}</h3>
                    {detalis.genres?.map((genre) =>
                        <button className='btn btn-info mx-2' key={genre.id}>{genre.name}</button>
                    )}
                    <ul className='mt-5'>
                        <li className='list-unstyled mb-3' >Popularity: {detalis.popularity}</li>
                        <li className='list-unstyled mb-3'>Vote Average : {detalis.vote_average}</li>
                        <li className='list-unstyled mb-3'>Vote Count : {detalis.vote_count}</li>
                        <li className='list-unstyled mb-3'>Release date : {detalis.release_date}</li>
                    </ul>
                    <p className='text-muted fs-5 mt-5'>{detalis.overview}</p>
                </div>
            </div>
        </>
    )
}