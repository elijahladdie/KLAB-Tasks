
import { useEffect, useState } from 'react';
import Form from './components/Form';
import ListItems from './components/List';
import img from './assets/bg-todo.jpg'
import Nav from './components/Nav';
import { Button, Typography } from '@material-tailwind/react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [items, setItems] = useState(()=>{
    if(localStorage.getItem("items")){
      return JSON.parse(localStorage.getItem("items"))
    }else{
      return []
    }
  });
  const handleOpen = () => setOpen((cur) => !cur);
  const [open, setOpen] = useState(false);

useEffect(()=>{
  localStorage.setItem("items",JSON.stringify(items))
},[items])
  return (
    <div style={{
      background: `url(${img})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }} className="min-h-screen">
      <div class="w-full min-h-screen flex pb-5   items-center backdrop-blur-md flex-col">
        <Nav>

          <Button onClick={handleOpen} className="m-5 bg-white text-black">Add new</Button>
        </Nav>

        <Form setItems={setItems} items={items} handleOpen={handleOpen} setOpen={setOpen} open={open} />
        {items.length ?
          <div className='flex w-[80%] justify-evenly relative flex-col lg:flex-row items-center'>

            <ListItems items={items} completed={false} setItems={setItems} />
            <hr className='w-2 my-6 transparent' />
            <ListItems items={items} completed={true} setItems={setItems} />
          </div>
          : <Typography variant='h3' color='white'>😊 It's Good to have scheduled day start now ↖️</Typography>}
      </div>
    </div>
  );
}

export default App;
