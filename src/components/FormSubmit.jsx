import React, { useState } from "react";
import { handleSubmit } from "../handlers/handleSubmit";
import { handlePriorityChange } from "../handlers/handlePriorityChange";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export const FormSubmit = ({
  Addinput,
  setUserSort,
  setAddTask,
  switchVal,
  setAddInput,
  completionDays,
  priorityCheck,
  setpriorityCheck,
  setsearchQuery,
  setCompletionDays,
  setFilterpriorityTaskStatus,
}) => {
  const handleEmoji = (emojiObject) => {
    setAddInput((prev) => prev + emojiObject.native);
    setEmojiPicker(false);
  };
  const [showPicker, setEmojiPicker] = useState(false);

  return (
    <form
      className="main-form | flex align-center flex-between gap-10"
      onSubmit={(e) =>
        handleSubmit(
          e,
          setAddInput,
          completionDays,
          setsearchQuery,
          setCompletionDays,
          setFilterpriorityTaskStatus,
          Addinput,
          switchVal,
          priorityCheck,
          setAddTask,
          setpriorityCheck,
          setUserSort
        )
      }
    >
      <div className="inputFeildWEmoji">
        <input
          type="text"
          value={Addinput}
          className="inputTask"
          placeholder={
            switchVal
              ? "Write your Completed task here and hit enter!"
              : "Write your task here and hit enter!"
          }
          onChange={(e) => {
            setAddInput(e.target.value);
          }}
          autoFocus
        />
        <span
          className="emojiIcon"
          title=" Click Here To Add ME"
          onClick={() => setEmojiPicker((val) => !val)}
        >
          😊
        </span>

        {showPicker && (
          <div className="pickerClass">
            <Picker data={data} onEmojiSelect={handleEmoji} />
          </div>
        )}
      </div>

      <label className="form-control | flex align-center">
        <input
          type="checkbox"
          checked={priorityCheck}
          onChange={() => handlePriorityChange(setpriorityCheck)}
        />
        Prioritize Task
      </label>
    </form>
  );
};
