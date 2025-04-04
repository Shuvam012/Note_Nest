import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router';
import { addToNote, updateToNote } from '../redux/noteSlice';

const ViewNote = () => {
  const {id} = useParams()
  const allNotes = useSelector((state) => state.note.notes);
  const note = allNotes.filter((n) => n._id === id)[0]

  return (
    // <div>
    //     <div>
    //         <div className='flex flex-row gap-7 place-content-between'>
    //             <input
    //                 className='bg-black p-2 rounded-xl w-[75%] mt-2 pl-4'
    //                 type="text"
    //                 placeholder='Enter Title Here'
    //                 value={note.title}
    //                 disabled
    //                 onChange={(e) => setTitle(e.target.value)}
    //             />
    //             {/* <button
    //                 onClick={createNote}
    //                 className='p-2 rounded-xl  mt-2'>
    //                 {
    //                     noteId ? "Update" : "Create Note"
    //                 }
    //             </button> */}
    //         </div>
    //         <div className='mt-8'>
    //             <textarea
    //                 className='bg-black p-2 rounded-xl w-2xl mt-4 pl-4'
    //                 value={note.content}
    //                 placeholder='Enter Content Here'
    //                 disabled
    //                 onChange={(e) => setValue(e.target.value)}
    //                 rows={20}
    //             />
    //         </div>
    //     </div>
    // </div>

    <div className='max-w-2xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-xl'>
      <h2 className='text-2xl font-bold mb-4 text-center'>View Note</h2>
      <input
        className='w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400 mb-4'
        type='text'
        placeholder='Enter Title Here'
        value={note?.title || ''}
        disabled
      />
      <textarea
        className='w-full h-60 p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400'
        value={note?.content || ''}
        placeholder='Enter Content Here'
        disabled
      ></textarea>
    </div>
  )
}

export default ViewNote
