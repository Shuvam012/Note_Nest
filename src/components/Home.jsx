import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';
import { addToNote, updateToNote } from '../redux/noteSlice';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const noteId = searchParams.get("noteId");
    const dispatch = useDispatch()

    function createNote (){
        const note = {
            title: title,
            content: value,
            _id: noteId || 
            Date.now().toString(36),
            createAt:new Date().toISOString()
        }
        if(noteId){
            //update
            dispatch(  updateToNote(note))
        }else{
            //create
            dispatch(addToNote(note))
        }

        //after creation or Updation
        setTitle("");
        setValue("");
        setSearchParams({})
    }

    return (
        <div>
            <div className='flex flex-row gap-7 place-content-between'>
                <input
                    className='bg-black p-2 rounded-xl w-[75%] mt-2 pl-4'
                    type="text"
                    placeholder='Enter Title Here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={createNote}
                    className='p-2 rounded-xl  mt-2'>
                    {
                        noteId ? "Update" : "Create Note"
                    }
                </button>
            </div>
            <div className='mt-8'>
                <textarea
                    className='bg-black p-2 rounded-xl w-2xl mt-4 pl-4'
                    value={value}
                    placeholder='Enter Content Here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>
        </div>
    )
}

export default Home
