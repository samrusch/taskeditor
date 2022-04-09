const TaskReader = (props) => {
  console.log(props.task.name)

  return (
    <>
      <div className='text-xl mb-2'> 
        {props.task.name}
      </div>
      <div className='mb-2'>
        {props.task.description}
      </div>
    </>
  )
}

export default TaskReader
