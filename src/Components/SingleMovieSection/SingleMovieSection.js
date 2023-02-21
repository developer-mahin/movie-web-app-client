import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMovieSection = () => {

    const movie = useLoaderData()
    const { image, title, Casts, director, quality, releaseYear, runtime, summery } = movie;

    return (
        <div className='lg:w-[1024px] w-full mx-auto px-3 py-10'>
            <h2 className='font-semibold text-2xl mb-4'>{title}</h2>
            <img className='lg:w-1/2 w-full' src={image} alt="" />
            <div className='mt-6'>
                <h2 className='font-medium my-2 lg:text-lg text-base'>Title: {title}</h2>
                <h2 className='font-medium my-2 lg:text-lg text-base'>Runtime: {runtime}</h2>
                <h2 className='font-medium my-2 lg:text-lg text-base'>Quality: {quality}</h2>
                <h2 className='font-medium my-2 lg:text-lg text-base'>Director: {director}</h2>
                <h2 className='font-medium my-2 lg:text-lg text-base'>ReleaseYear: {releaseYear}</h2>
                <h2 className='font-medium my-2 lg:text-lg text-base'>Casts: {Casts}</h2>
                <h2 className='font-medium my-2 lg:text-lg text-base'>Summery: {summery}</h2>
            </div>
        </div>
    );
};

export default SingleMovieSection;