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
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one from the array
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

return (
    <Link
  to={`/note/${note._id}`}
  className="card bg-base-100 transition-all duration-300 hover:scale-[1.02]
  border-t-4 border-solid border-[#6d3cff]
  shadow-[0_10px_20px_rgba(109,60,255,0.5),0_-4px_10px_rgba(109,60,255,0.3)]
  hover:border-[#22c55e]
  hover:shadow-[0_15px_25px_rgba(34,197,94,0.6),0_-6px_15px_rgba(34,197,94,0.4)]"
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
      onClick={(e) => handleDelete(e, note._id)}>
      <Trash2Icon className="size-4" />
    </button>
  </div>
  </div>
  </div>
</Link>

  );
};
export default NoteCard;