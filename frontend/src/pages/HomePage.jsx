// import { useState } from "react";
// // import { useSearchParams } from "react-router-dom"
// import Navbar from "../components/Navbar";
// import RateLimitedUI from "../components/RateLimitedUI";
// import { useEffect } from "react";
// import axios from "axios"
// import toast from "react-hot-toast";
// import NoteCard from "../components/NoteCard";
// import NotesNotFound from "../components/NotesNotFound";
// import api from "../lib/axios";
// const HomePage = () => {

//     const [isRateLimited,setRateLimited]=useState(true);
//     const [notes,setNotes]=useState([]);
//     const [loading,setLoading]=useState(true);

//     useEffect(()=>{
//         const fetchNotes=async()=>{
//             try {
//                 const res = await api.get("/notes");
//                 // const data=await res.json();
//                 // console.log(data);
//                 console.log(res.data);
//                 setNotes(res.data);
//                 setRateLimited(false);
                
//             } catch (error) {
//                 console.log("error in fetching notes");
//                 console.log(error)
//                 if(error.response?.status===429){
//                     setRateLimited(true);
//                 }
//                 else{
//                     toast.error("failed to load the note")
//                 }
//             } finally{
//                 setLoading(false);
//             }
//         }

//         fetchNotes();
//     },[])
//   return (
//     <div className="min-h-screen">
//         <Navbar/>
//        {isRateLimited && <RateLimitedUI/>}

//        <div className="max-w-7xl mx-auto p-4 mt-6">
          
//           {loading && <div className="text-center text-primary py-10">Loading Notes...</div>}
          
//           {notes.length===0 && !isRateLimited && <NotesNotFound/>}

//           {notes.length>0 && !isRateLimited && (

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {notes.map((note)=>(

//                     <NoteCard key={note._id} note={note} setNotes={setNotes}/>
//                     // <div>
                     
//                     //  {note.title} |  {note.content}

//                     // </div>
//                 ))

//                 }
//             </div>

//           )}

//        </div>
//     </div>
//   )
// }

// export default HomePage
import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
