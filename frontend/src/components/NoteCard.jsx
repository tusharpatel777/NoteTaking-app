// import { Trash2Icon } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { formatDate } from '../lib/utils'
// import { PenSquareIcon } from 'lucide-react'
// import toast from 'react-hot-toast'
// import axios from 'axios'
// import api from '../lib/axios'

// const NoteCard = ({note,setNotes}) => {


//     const handleDelete=async(e,id)=>{
//         e.preventDefault(); //get rid of the navigation behavior

//         if(!window.confirm("are you sure you want to delete"))return;

//         try {
//             await api.delete(`/notes/${id}`)
//             toast.success("Note deleted successfully")
//             setNotes((prev)=>prev.filter(node=>node._id!=id)) //get rid of deleted one 
            
//         } catch (error) {
//             console.log("error arah hai",error);
//             toast.error("error in deleting the note")
            
//         }

//     }
//   return (
//    <Link to={`/note/${note._id}`} className='card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00ff9D]'>

//     <div className='card-only flex-col items-center justify-between p-5'>
//         <h3 className='card-title text-base-content '>{note.title}</h3>
//         <p className='text-base-content/70 line-champ-3'>{note.content}</p>
//         <div className='card-actions justofy-between items-center mt-4'>

//             <span className='text-sm text-base-content/60'>
//                 {formatDate(new Date(note.createdAt))}
//             </span>

//             <div className='flex items-center gap-1'>

//                 <PenSquareIcon className="size-4"/>

//                 <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>handleDelete(e,note._id)}>
//                     <Trash2Icon className='size-4'/>
//                 </button>
//             </div>
//         </div>

//     </div>
//    </Link>

//   )
// }

// export default NoteCard


import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;