import React, { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

const Form = ({ handleOpen, open, setItems ,items}) => {

  const [TaskName, setTaskName] = useState('')
  const [TaskDesc, setTaskDesc] = useState('')
  const handleAdd = () => {
    if (TaskName === "" && TaskDesc === "") {
      toast.error('Please provide task details :(', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setItems((item) => { return [{ id: Math.floor(Math.random() * 1000) + 1, taskName: TaskName, description: TaskDesc, completed: false }, ...item] })
      toast.success('Woow, You\'ve added new task!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

        handleOpen();
        setTaskName('')

        setTaskDesc('')
      

    }
  }
  return (
    <>
    {items && 
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="colored"
        />
    }
      <Dialog
        size="xxs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <Card className="mx-auto w-full max-w-[30rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Add new task
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              What do you plan to do?🤔
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Task Name
            </Typography>
            <Input label="Tell me! what's your goal today?" size="lg" required onChange={(e) => setTaskName(e.target.value)} />
            <Typography className="-mb-2" variant="h6">
              Task Description
            </Typography>
            <Input label="How would you do it?" size="lg" required onChange={(e) => setTaskDesc(e.target.value)} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleAdd} fullWidth>
              Add Task
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default Form