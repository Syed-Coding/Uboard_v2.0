import "react-toastify/dist/ReactToastify.css";
import { IfPriorityStatus } from "./IfPriorityStatus";
import { IfNoPriorityStatus } from "./IfNoPriorityStatus";
import { handleMoveBack } from "../handlers/handleMoveBack";
import { handleTrash } from "../handlers/handleTrash";
export const DeletedTask = ({
  taskItem: {
    id,
    task,
    delete_date_time,
    create_date_time,
    priority_status,
    reCreated,
  },
  setAddTask,
  addTask,
  setPoints,
  setCele,
}) => {
  return (
    <>
      <ul>
        <li className="Task-manager-board-right-container">
          {priority_status ? (
            <IfPriorityStatus
              task={task}
              delete_date_time={delete_date_time}
              create_date_time={create_date_time}
              reCreated={reCreated}
            ></IfPriorityStatus>
          ) : (
            <IfNoPriorityStatus
              task={task}
              delete_date_time={delete_date_time}
              create_date_time={create_date_time}
              reCreated={reCreated}
            ></IfNoPriorityStatus>
          )}

          <div className="flex gap-10">
            {/* <button
              className="btn btn-move"
              onClick={() => handleMoveBack(id, setAddTask)}
            >
              move
            </button> */}
            {delete_date_time && (
              <button
                title="Move Back To Ongoing Task"
                className="btn btn-move"
                onClick={() => handleMoveBack(id, setAddTask)}
              >
                Move
              </button>
            )}
            <button
              className="btn btn-delete"
              onClick={() => {
                handleTrash(id, setAddTask, addTask, setPoints, setCele);
              }}
            >
              Trash
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};
