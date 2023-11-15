"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

import { collection, doc, getDocs, query, where } from 'firebase/firestore';

import { db} from '../../firebase/firebase'
import Navbar from '@/components/Navbar';

function Hospital() {


const [personPost, setPersonPost] = useState([]);
const [selectedPost, setSelectedPost] = useState(null);
const [modalVisible, setModalVisible] = useState(false);



useEffect(() => {
    const fetchPersonPost = async () => {
     
        try {
            const returnPostQuery = query(collection(db, 'hospital'));
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
        <div className="pt-[80px] ">
            {personPost.map((item) => {
                // Check if the item's date is equal to today's date
                

                return (
                    <div key={item.id} className=" overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>January: {item.january}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>february: {item.february}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>march: {item.march}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>april: {item.april}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>may: {item.may}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>june: {item.june}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>july: {item.july}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>august: {item.august}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>september: {item.september}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>october: {item.october}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>november: {item.november}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>december: {item.december}</p>
                        </div>
                    </div>
                ) 
            })}
        </div>


    </div>
);
}


export default Hospital