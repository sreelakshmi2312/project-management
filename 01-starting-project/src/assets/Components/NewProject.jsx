import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd ,onCancel}) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const [selectedDate, setSelectedDate] = useState(null);

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || !selectedDate) {
      modal.current.open();
      return; // Return early if validation fails
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: selectedDate,
    });


  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Oops.. looks like you forgot to enter a value.</p>
        <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end">
          <li>
            <button onClick={onCancel}className="text-stone-800 hover:text-stone-950 flex mr-4">Cancel</button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 flex ml-4"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div className="mt-4">
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
            <div className="relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
