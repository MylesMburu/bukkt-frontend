import {  useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/queue`);
  };

  return (
    <div>
   
      <div>
        <h2 className='text-center'>WELCOME TO JAMHURI MOTORS</h2>
        <h3 className='text-center'>Choose your service </h3>
      </div>
      <div>
        <div className='flex flex-col justify-center'>
          {services.map((service) => (
            <div
              key={service.id}
              className='flex flex-col justify-center items-center m-4'
            >
              <button
                onClick={handleClick}
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded`}
              >
                {service.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;


const services = [{
  id: 1, 
  name: 'Servicing',

},
{
  id: 2, 
  name: 'Brake System Inspection',
},
{
  id: 3, 
  name: 'Tire Services',
},
{
  id: 4, 
  name: 'Engine Diagnostics',
},
{
  id: 5, 
  name: 'Battery Services',
}
]