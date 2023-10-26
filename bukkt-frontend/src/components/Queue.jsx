import { useState } from 'react';
import {Dialog, DialogHeader, DialogBody, DialogFooter, Button} from '@material-tailwind/react';
const Queue = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [preferredServiceTime, setPreferredServiceTime] = useState('');
    const [openModal, setOpenModal] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your logic to handle the form submission
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
    };

    const handleOpen = ()=> setOpenModal(!openModal)

    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold mb-4'>Join the Queue</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-bold mb-2'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-bold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='phoneNumber'
              className='block text-gray-700 font-bold mb-2'
            >
              Phone Number
            </label>
            <input
              type='tel'
              id='phoneNumber'
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your phone number'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='serviceTime'
              className='block text-gray-700 font-bold mb-2'
            >
              Preferred Service Time
            </label>
            <input
              type='time'
              id='serviceTime'
              value={preferredServiceTime}
              onChange={(event) => setPreferredServiceTime(event.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>

          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleOpen}
          >
            Join Queue
          </button>
          {openModal && (
            <>
              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                  <h2 className='text-center w-full'>waiting in line</h2>
                </DialogHeader>
                <DialogBody>
                  <div className='text-center'>
                      
                       <p className='py-4' >10</p>
                       <p className='py-4'>estimated waiting time</p>
                       <p className='py-4'>00:12:00</p>  
                       
                  </div>
                </DialogBody>
                <DialogFooter>
                  <div className=' flex justify-center w-full text-center '>

                  <Button className='mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                    <span>BOOK</span>
                  </Button>

                  <Button
                    variant='text'
                    color='red'
                    onClick={handleOpen}
                    className='mr-1'
                  >
                    <span>CANCEL</span>
                  </Button>
                 
                  </div>
                </DialogFooter>
              </Dialog>
            </>
          )}
        </form>
      </div>
    )
};

export default Queue;