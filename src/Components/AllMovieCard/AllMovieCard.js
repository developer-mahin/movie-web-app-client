import React from 'react';
import { Link } from 'react-router-dom';

const AllMovieCard = ({ movie }) => {

    const { _id, image, title } = movie


    return (
        <Link
            to={`/get-single/${_id}`}
            className='py-2'>
            <img className='w-full h-[532px]' src={image} alt="" />
            <h3 className='text-xl font-semibold text-center'>
                <span>Movie: {title}</span>
            </h3>
        </Link>
    );
};

export default AllMovieCard;