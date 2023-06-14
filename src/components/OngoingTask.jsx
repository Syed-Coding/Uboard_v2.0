import { useState } from "react";
import { handleEdit } from "../handlers/handleEdit";
import "react-toastify/dist/ReactToastify.css";
import { IfEdittedInput } from "./IfEdittedInput";
import { IfNoEdittedInput } from "./IfNoEdittedInput";
import { handleDelete } from "../handlers/handleDelete";

export const OngoingTask = ({
  taskItem: {
    id,
    task,
    create_date_time,
    edit_date_time,
    priority_status,
    edittedStatus,
    reCreated,
    user_expected_task_completionDays,
  },
  setCele,
  setAddTask,
}) => {
  const [edittedinput, setEdittedInput] = useState(task);
  const [edittedinputstatus, setEdittedInputstatus] = useState(false);
  const [editted, setEditted] = useState(edittedStatus ? edittedStatus : false);

  return (
    <>
      <ul>
        <li className="Task-manager-board-left-container | flex gap-15 align-flex-start">
          {edittedinputstatus ? (
            <IfEdittedInput
              id={id}
              edittedinput={edittedinput}
              setEdittedInput={setEdittedInput}
              setEditted={setEditted}
              setAddTask={setAddTask}
              editted={editted}
              setEdittedInputstatus={setEdittedInputstatus}
            />
          ) : (
            <IfNoEdittedInput
              priority_status={priority_status}
              edit_date_time={edit_date_time}
              reCreated={reCreated}
              create_date_time={create_date_time}
              editted={editted}
              edittedinput={edittedinput}
              user_expected_task_completionDays={
                user_expected_task_completionDays
              }
            />
          )}
          <div className="flex gap-10">
            <button
              className="btn btn-edit"
              onClick={() => handleEdit(setEdittedInputstatus)}
            >
              Edit
            </button>
            <button
              className="btn btn-delete"
              title="Move To Completed Task"
              onClick={() => handleDelete(id, setAddTask, setCele)}
            >
              Done
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};
