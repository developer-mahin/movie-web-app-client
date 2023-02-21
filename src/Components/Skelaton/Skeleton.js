import React from 'react';

const Skeleton = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-20'>
            <div className="flex flex-col rounded shadow-md w-full animate-pulse h-[533px]">
                <div className="h-48 rounded-t dark:bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                </div>
            </div>
            <div className="flex flex-col rounded shadow-md w-full animate-pulse h-[533px]">
                <div className="h-48 rounded-t dark:bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                </div>
            </div>
            <div className="flex flex-col rounded shadow-md w-full animate-pulse h-[533px]">
                <div className="h-48 rounded-t dark:bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                </div>
            </div>
            <div className="flex flex-col rounded shadow-md w-full animate-pulse h-[533px]">
                <div className="h-48 rounded-t dark:bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;