import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router';
import { addToNote, updateToNote } from '../redux/noteSlice';
import { FaGithub, } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const noteId = searchParams.get("noteId");
    const dispatch = useDispatch()
    const allNotes = useSelector((state) => state.note.notes)


    useEffect(() => {
        if (noteId) {
            const note = allNotes.find((n) => n._id === noteId)
            setTitle(note.title)
            setValue(note.content)
        }
    }, [noteId]);

    function createNote() {
        const note = {
            title: title,
            content: value,
            _id: noteId ||
                Date.now().toString(36),
            createAt: new Date().toISOString()
        }


        if (noteId) {
            //update
            dispatch(updateToNote(note))


        } else {
            //create
            dispatch(addToNote(note))
        }

        //after creation or Updation
        setTitle("");
        setValue("");
        setSearchParams({})
    }

    return (
        <>

            <div className='m-2'>
                <div className=' mx-auto mt-5 p-6 bg-gray-800 text-white rounded-lg shadow-xl h-auto '>
                    <h2 className='text-2xl font-bold mb-4 text-center'>Create or Update Note</h2>
                    <input
                        className='w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400'
                        type='text'
                        placeholder='Enter Title Here'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className='w-full h-[400px] p-3 rounded-lg bg-gray-700 text-white mt-4 outline-none focus:ring-2 focus:ring-yellow-400'
                        placeholder='Enter Content Here'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    >
                    </textarea>
                    <button
                        onClick={createNote}
                        className='w-full mt-4 bg-yellow-500 text-black p-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 cursor-pointer'
                    >
                        {noteId ? 'Update Note' : 'Create Note'}
                    </button>
                </div>
                <div className="flex items-center gap-1 justify-center text-black font-bold " >
                    &copy; 2025 Shuvam Biswal
                    <Link to="https://github.com/Shuvam012" target="_blank">
                        <FaGithub />
                    </Link>
                </div>
            </div>


        </>
    )
}

export default Home
