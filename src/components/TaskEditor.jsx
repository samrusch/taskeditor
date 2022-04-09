import { useState } from 'react'

const TaskEditor = (props) => {
  const [name, setName] = useState(props.task.name)
  const [description, setDescription] = useState(props.task.description)

  const handleSave = () => {
    const updatedTask = {
      "name": name,
      "description": description
    }

    props.setTask(updatedTask)

    props.setEditing(false)
  }

  const handleCancel = () => {
    props.setEditing(false)
  }

  return (
    <>
      <div className='mb-2'>
        <input
          className='w-full text-xl p-1 bg-gray-100 border border-gray-300'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <input
          className='w-full p-1 bg-gray-100 border border-gray-300'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex space-x-2 justify-end'>
        <button
          className='px-4 py-2 bg-green-200 border border-green-300'
          onClick={() => handleSave()}
        >
          Save
        </button>
        <button
          className='px-4 py-2 bg-red-200 border border-red-300'
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default TaskEditor
