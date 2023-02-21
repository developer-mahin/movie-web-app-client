import React, { useEffect, useState } from 'react';
import AllMovieCard from '../../Components/AllMovieCard/AllMovieCard';
import Skeleton from '../../Components/Skelaton/Skeleton';


const AllMovieSection = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:5000/get-all")
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                setLoading(false)
            })
    }, [])


    return (
        <div className='container mx-auto px-3'>
            {
                loading ? <Skeleton /> : <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-10'>

                    {
                        movies.map(movie => <AllMovieCard key={movie._id} movie={movie} />)
                    }

                </div>
            }
        </div>
    );
};

export default AllMovieSection;