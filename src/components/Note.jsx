import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromNote } from '../redux/noteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import { FaTrash, FaCopy, FaShare, FaEdit, FaEye } from 'react-icons/fa';
import { IoCalendarClear } from "react-icons/io5";
import { FormatDate } from '../utlis/formatdate';

const Note = () => {

  const notes = useSelector((state) => state.note.notes)

  const [searchTerm, setSearchTerm] = useState('');

  console.log(notes)
  const dispatch = useDispatch();

  const filterData = notes.filter(
    (note) => note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(noteId) {
    dispatch(removeFromNote(noteId))
  }



  function handleShare(note) {
    if (navigator.share) {
      navigator.share({
        title: note.title,
        text: note.content,
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      toast("Sharing not supported on this device", {
        duration: 500,
      });
    }
  }

  return (
    <>
      <div className='m-2'>
        <div >
          {/* <div className='bg-gray-800 p-10 rounded-b-xl'> */}
          <input className='bg-gray-300 min-w-[600px] border  focus:ring-2 focus:ring-yellow-400 rounded-[5px] p-2 mt-3'
            type="search"
            placeholder='Search here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* all notes */}
        <div className=" mt-3 flex flex-col border bg-gray-700  py-4 rounded-[0.4rem]">
          <h2 className="px-4 text-4xl font-bold border-b text-gray-400 pb-4">
            All Notes
          </h2>

          <div className="w-full px-4 bg-gray-600 h-[500px]  pt-4 flex flex-col gap-y-5 overflow-y-auto">

            {
              filterData.length > 0 ? (
                filterData.map(
                  (notes) => {
                    return (
                      <div className='border p-2 flex flex-row place-content-between  rounded-[5px] bg-gray-500 ' key={notes._id} >

                        {/* title & content */}
                        <div className="w-[50%] flex flex-col space-y-3   rounded-[5px] border pl-2 bg-gray-400">
                          <p className="text-3xl font-semibold ">{notes?.title}</p>
                          <p className="text-sm font-normal line-clamp-3 max-w-[80%] text-[#000000] p-1">
                            {notes?.content}
                          </p>
                        </div>

                        <div className='flex flex-col pr-2 '>
                          {/* functionality and buttons */}
                          <div className='flex flex-row gap-3 place-content-evenly mt-5'>
                            <button className='text-gray-400 text-2xl      hover:text-yellow-400 '>
                              <Link to={`/?noteId=${notes?._id}`}>
                                {/* Edit */}
                                <FaEdit />
                              </Link>
                            </button>
                            <button className=' text-gray-400 text-2xl hover:text-yellow-400'>
                              <Link to={`/notes/${notes?._id}`}>
                                {/* View */}
                                <FaEye />
                              </Link>
                            </button >
                            <button className='text-gray-400 text-2xl hover:text-yellow-400' onClick={() => handleDelete(notes?._id)}>
                              {/* Delete */}
                              <FaTrash />
                            </button>
                            <button className='text-gray-400 text-2xl hover:text-yellow-400' onClick={() => {
                              navigator.clipboard.writeText(notes.content)
                              toast("copied to clipboard", {
                                duration: 500
                              })
                            }}>
                              {/* Copy */}
                              <FaCopy />
                            </button>
                            <button className='text-gray-400 text-2xl hover:text-yellow-400' onClick={() => handleShare(notes)}>
                              {/* Share */}
                              <FaShare />
                            </button>
                          </div>
                          <div className="gap-x-2 flex pt-2 items-center">
                            <IoCalendarClear className='text-black text-xl hover:text-yellow-400' size={20} />
                            {FormatDate(notes.createAt)}
                          </div>
                        </div>
                      </div>
                    )
                  }
                )
              ) : (
                <div className="text-3xl  text-center w-full font-bold ">
                  No Data Found
                </div>
              )
            }

          </div>
        </div>
      </div>
    </>

  )
}

export default Note
