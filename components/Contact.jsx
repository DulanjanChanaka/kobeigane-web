"use client"
import { useState } from 'react';
import Headline from './Headline';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/firebase';



export default function Contact() {

    const [name, setName] = useState("")
    const [cno, setCno] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'contact'), {
                name,
                cno,
                message,



            });
            console.log('Document written with ID: ', docRef.id);
            // Reset form fields
            setName('');
            setMessage('')
            setCno('')

        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div id='contact' className='w-full  '>
            <Headline title={"Contact"} />
            <div className='bg-[url(/Assets/hero-contact.jpg)] bg-cover bg-center mt-3 lg:pl-32'>
            <div className='lg:w-[600px] mb-10 px-5 pt-8 pb-10 '>
                <div className='col-span-3 w-full h-auto shadow-lg  rounded-xl lg:px-4 pb-5 backdrop-blur-sm bg-white/70  '>
                    <div className='p-4 '>
                        <form
                            onSubmit={handleSubmit}

                        >
                            <div className='grid md:grid-cols-2 gap-4 w-full  py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input
                                        className='border-2 rounded-lg p-2 flex border-gray-300'
                                        type='text'
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Phone Number
                                    </label>
                                    <input
                                        className='border-2 rounded-lg p-2 flex border-gray-300'
                                        type='text'
                                        name='phone'
                                        value={cno}
                                        onChange={(e) => setCno(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col '>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea
                                    className='border-2 rounded-lg p-3 border-gray-300'
                                    rows='3'
                                    name='message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button className='w-full p-2 text-gray-100 mt-4'>
                                Send 
                            </button>
                        </form>

                    </div>


                </div>



            </div>
            </div>
        </div>
    );
}