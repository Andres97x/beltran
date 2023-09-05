import { FC, useState } from 'react';
import './contact.css';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name } = e.target;
    const { value } = e.target;

    setFormData(prevData => {
      return { ...prevData, [name]: value };
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
    });
  }

  return (
    <div className='contact'>
      <form className='form' onSubmit={onSubmit}>
        <div>
          <label htmlFor='first-name'>Name</label>
          <div className='name-container'>
            <input
              required
              onChange={onChange}
              name='firstName'
              value={formData.firstName}
              id='first-name'
              placeholder='First Name'
            />
            <input
              required
              onChange={onChange}
              name='lastName'
              value={formData.lastName}
              id='last-name'
              placeholder='Last Name'
            />
          </div>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            required
            onChange={onChange}
            name='email'
            value={formData.email}
            id='email'
            placeholder='andresguerra@dev.com'
          />
        </div>

        <div>
          <label htmlFor='phone'>
            Phone <span>optional</span>
          </label>
          <input
            onChange={onChange}
            name='phone'
            value={formData.phone}
            id='phone'
            placeholder='312345678'
          />
        </div>

        <div>
          <label htmlFor='company'>
            Company <span>optional</span>
          </label>
          <input
            onChange={onChange}
            name='company'
            value={formData.company}
            id='company'
            placeholder='Acme Bank'
          />
        </div>

        <button>Contact now</button>
      </form>
    </div>
  );
};

export default Contact;
