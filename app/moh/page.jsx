"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

import { collection, doc, getDocs, query, where } from 'firebase/firestore';

import { db} from '../../firebase/firebase'
import Navbar from '@/components/Navbar';

function Moh() {


    const [personPost, setPersonPost] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);



    useEffect(() => {
        const fetchPersonPost = async () => {

            try {
                const returnPostQuery = query(collection(db, 'moh'));
                const returnPostCollection = await getDocs(returnPostQuery);
                const returnPostData = returnPostCollection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPersonPost(returnPostData);
            } catch (error) {
                console.error('Error fetching item posts:', error);
            }
        };
        fetchPersonPost();
    }, []);



    return (
        <div>
            <div className="top-0 left-0 sticky">
                <Navbar />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-[90px] md:pt-[100px] lg:grid-cols-4 gap-4 p-4">
                {personPost.map((item) => {
                    // Check if the item's date is equal to today's date


                    return (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden ">
                            <div className='text-center pt-5 '>
                            <h3 className='font-bold'>{item.title}</h3>
                            </div>
                            

                            <div className="p-6">
                                
                                <button
                                    onClick={() => {
                                        setSelectedPost(item);
                                        setModalVisible(true);
                                    }}
                                    className="bg-blue-500 hover-bg-blue-600 text-white py-2 px-4 mt-4 rounded"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            {modalVisible && selectedPost && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="modal-bg fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <div className="modal-container bg-white w-3/4 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto pb-5">
                        <div className="modal-content py-4 text-left px-6">
                          <h3 className='pb-5'>{selectedPost.title}</h3>


                            <p className="text-gray-600 text-sm pb-5">
                                january: {selectedPost.january}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            february: {selectedPost.february}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            march: {selectedPost.march}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            april: {selectedPost.april}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            may: {selectedPost.may}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            june: {selectedPost.march}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            july: {selectedPost.july}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            august: {selectedPost.august}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            september: {selectedPost.september}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            october: {selectedPost.october}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            november: {selectedPost.november}
                            </p>
                            <p className="text-gray-600 text-sm pb-5">
                            december: {selectedPost.december}
                            </p>

                            <button
                                onClick={() => setModalVisible(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded float-right"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Moh