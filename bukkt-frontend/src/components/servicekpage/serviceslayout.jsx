import {  NavLink, useNavigate } from 'react-router-dom';
import ServiceCard from './serviceCard';

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

        <div className='flex flex-row flex-wrap  my-8 gap-8 mx-auto justify-center'>
          {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Services;


const services = [
  {
    id: 1,
    title: 'Servicing',
    icon: '',
    subtitle:
      'lorem ipsum dolor sit amet consectetur adipisicing elit loremlorem ipsum dolor sit amet consectetur adipisicing elit lo',
  },
  {
    id: 2,
    title: 'Brake System Inspection',
    icon: '',
    subtitle:
      'lorem ipsum dolor sit amet consectetur adipisicing elit loremlorem ipsum dolor sit amet consectetur adipisicing elit lo',
  },
  {
    id: 3,
    title: 'Tire Services',
    icon: '',
    subtitle:
      'lorem ipsum dolor sit amet consectetur adipisicing elit loremlorem ipsum dolor sit amet consectetur adipisicing elit lo',
  },
  {
    id: 4,
    title: 'Engine Diagnostics',
    icon: '',
    subtitle:
      'lorem ipsum dolor sit amet consectetur adipisicing elit loremlorem ipsum dolor sit amet consectetur adipisicing elit lo',
  },
  {
    id: 5,
    title: 'Battery Services',
    icon: '',
    subtitle:
      'lorem ipsum dolor sit amet consectetur adipisicing elit loremlorem ipsum dolor sit amet consectetur adipisicing elit lo',
  },
]