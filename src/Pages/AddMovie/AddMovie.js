import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AddMovie = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const runtime = form.runtime.value;
        const director = form.director.value;
        const releaseYear = form.releaseYear.value;
        const quality = form.quality.value;
        const summery = form.summery.value
        const cast = form.cast.value;
        const image = form.image.files[0]

        const formData = new FormData()
        formData.append("image", image)

        const url = `https://api.imgbb.com/1/upload?key=e6715828d226108de92f2bc703211a4e`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const movieInfo = {
                        image: data.data.display_url,
                        title,
                        runtime,
                        director,
                        releaseYear,
                        quality,
                        summery,
                        Casts: cast
                    }
                    fetch("http://localhost:5000/add-movie", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(movieInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Successfully added movie")
                                form.reset()
                                setLoading(false)
                            }
                        })
                        .catch(error => {
                            toast.error(error.message)
                            setLoading(false)
                        })
                }

            })
    }



    return (
        <section className="lg:w-[1000px] w-full mx-auto px-3 py-6">
            <h2 className='lg:text-4xl text-xl text-center'>Add a movie</h2>
            <form
                onSubmit={handleSubmit}
                className='py-4'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                    <div>
                        <input
                            className='px-4 py-3 rounded-md w-full border focus:outline-none'
                            type="text"
                            name="title"
                            id=""
                            required
                            placeholder='Movie Title'
                        />
                    </div>
                    <div>
                        <input
                            className='px-4 py-3 rounded-md w-full border'
                            type="file"
                            name="image"
                            id=""
                            accept="image/*"
                            required
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 py-6'>
                    <div>
                        <input
                            className='px-4 py-3 rounded-md w-full border focus:outline-none'
                            type="text"
                            name="runtime"
                            id=""
                            required
                            placeholder='Runtime'
                        />
                    </div>
                    <div>
                        <input
                            className='px-4 py-3 rounded-md w-full border focus:outline-none'
                            type="text"
                            name="director"
                            id=""
                            required
                            placeholder='Director'
                        />
                    </div>
                    <div>
                        <input
                            className='px-4 py-3 rounded-md w-full border focus:outline-none'
                            type="text"
                            name="releaseYear"
                            id=""
                            required
                            placeholder='ReleaseYear'
                        />
                    </div>

                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                    <div>
                        <input
                            className='px-4 py-3 rounded-md w-full border focus:outline-none'
                            type="text"
                            name="cast"
                            id=""
                            required
                            placeholder='Casts'
                        />
                    </div>
                    <div>
                        <select
                            className='px-4 py-3 rounded-md w-full border focus:outline-none'
                            name="quality"
                            id=""
                            required
                        >
                            <option value="HD">HD</option>
                            <option value="MP4">MP4</option>
                            <option value="VGA">VGA</option>
                        </select>
                    </div>
                </div>
                <div>
                    <textarea
                        className='px-4 py-3 rounded-md w-full lg:h-40 h-32 border focus:outline-none mt-6'
                        type="text"
                        name="summery"
                        id=""
                        required
                        placeholder='Movie summery'></textarea>
                </div>
                <div className='mt-4'>
                    <button
                        className='px-8 py-3 bg-indigo-600 rounded-lg text-white font-medium'
                        type="submit">
                        {loading ? "Loading..." : "Add Movie"}
                    </button>
                </div>
            </form>
        </section >
    );
};

export default AddMovie;