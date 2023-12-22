import React from 'react';

import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
  Tooltip,
  Typography
} from "@material-tailwind/react";


const ListItems = ({ items, completed, setItems }) => {

  const toggleComplete = (id) => {
    setItems(items.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }
  const toggleDelete = (id) => {
    setItems(items.filter((task) =>
      task.id !== id
    ));
  }
  return (
    <Card className="lg:w-1/2 h-fit bg-white fit-content ">
      <List>
        <h1 className='text-xl text-center py-1 capitalize text-sky-400'>

          {!completed ? "todos" : "completed"}
        </h1>

        {
          !completed &&
          items.filter(item => item.completed !== true).map((item) =>

            <ListItem ripple={false} className="py-1 pr-1 pl-4 bg-white shadow hover:shadow-indigo-500/40">
              <Tooltip content={
                <div className="w-80">
                  <Typography color="" className="font-medium">
                    <h1 className='underline'>Task Name:</h1>
                    {item.taskName}
                  </Typography>
                  <Typography
                    variant="small"
                    color=""
                    className="font-normal opacity-80"
                  >
                    <h1 className='underline decoration-neutral-900'>Task Description:</h1>

                    {item.description}
                  </Typography>
                </div>} placement="top" animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}>
                <h1 className=' w-full h-full'>

                  {item.taskName}
                </h1>
              </Tooltip>


              <ListItemSuffix className='flex'>
                <IconButton variant="text" color="blue-gray" onClick={() => toggleDelete(item.id)}>
                  <TrashIcon />

                </IconButton>
                <IconButton variant="text" color="blue-gray" onClick={() => toggleComplete(item.id)}>
                  <DoneIcon/>
                </IconButton>
              </ListItemSuffix>
            </ListItem>
          )}

        {
          completed &&
          items.filter(item => item.completed === true).map((item) =>

            <ListItem ripple={false} className="py-1 pr-1 pl-4 bg-white shadow hover:shadow-indigo-500/40">
              <Tooltip content={
                <div className="w-80">
                  <Typography color="" className="font-medium">
                    {item.taskName}
                  </Typography>
                  <Typography
                    variant="small"
                    color=""
                    className="font-normal opacity-80"
                  >{item.description}
                  </Typography>
                </div>} placement="top" animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}>
                <h1 className=' w-full h-full'>

                  {item.taskName}
                </h1>
              </Tooltip>


              <ListItemSuffix className='flex'>
                <IconButton variant="text" color="blue-gray" onClick={() => toggleDelete(item.id)}>
                  <TrashIcon />

                </IconButton>
                <IconButton variant="text" color="blue-gray" onClick={() => toggleComplete(item.id)}>
                <UnIcon />
                </IconButton>
              </ListItemSuffix>
            </ListItem>

          )}




      </List>
    </Card>
  );
}



export default ListItems;



function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
      <title>Delete</title>
    </svg>
  );
}

function DoneIcon() {
  return (
    <svg fill="blue" className="h-5 w-5" viewBox="-2.4 -2.4 28.80 28.80" id="d9090658-f907-4d85-8bc1-743b70378e93" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" stroke="#17d283"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Progress</title><path id="70fa6808-131f-4233-9c3a-fc089fd0c1c4" data-name="done circle" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"></path></g></svg>
  );
}
function UnIcon() {
  return (
    <svg fill="green" className="h-5 w-5" viewBox="-2.4 -2.4 28.80 28.80" id="d9090658-f907-4d85-8bc1-743b70378e93" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" stroke="#17d283"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Done</title><path id="70fa6808-131f-4233-9c3a-fc089fd0c1c4" data-name="done circle" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"></path></g></svg>
  );
}
