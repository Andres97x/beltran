import { FC, useState } from 'react';
import { IconType } from 'react-icons';
import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineTimer } from 'react-icons/md';
import './contact.css';

const Contact: FC = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    formData.append('access_key', 'c9c7b58b-d058-47b5-adc4-6997a7f3581a');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      formElement.reset();
      console.log('form submitted');
    } else {
      console.error('Error', data);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-cards'>
        <ContactCard
          Icon={HiOutlinePhone}
          cardTitle='Contacto'
          firstTextSnippet='3108061540'
          secondTextSnippet='contacto@beltran-group.com'
        />
        <ContactCard
          Icon={HiOutlineLocationMarker}
          cardTitle='Dirección'
          firstTextSnippet='Carrera 19B # 92 - 80 Oficina 13'
          secondTextSnippet='Bogotá D.C, Colombia'
        />
        <ContactCard
          Icon={MdOutlineTimer}
          cardTitle='Horario'
          firstTextSnippet='Abierto de lunes - sábado'
          secondTextSnippet='Horario de oficina: 8 AM - 6:00 PM'
        />
      </div>

      <div className='contact-form-container'>
        <div className='contact-form-heading'>
          <span className='sub-heading'>Contáctanos</span>
          <h2 className='h2'>Listo para empezar</h2>
          <p>
            Háblanos sobre tus ideas y dejemos que nuestro equipo te ayude a dar
            el primer paso hacia el éxito.
          </p>
        </div>
        <form className='contact-form' onSubmit={onSubmit}>
          <div>
            <label htmlFor='nombre'>Nombre</label>
            <input
              required
              type='text'
              name='nombre'
              id='nombre'
              placeholder='Juan Pérez'
            />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input
              required
              type='email'
              name='email'
              id='email'
              placeholder='juan@testmail.com'
              autoComplete='email'
            />
          </div>

          <div>
            <label htmlFor='telefono'>
              Teléfono <span>opcional</span>
            </label>
            <input
              type='text'
              inputMode='numeric'
              name='telefono'
              id='telefono'
              placeholder='312345678'
            />
          </div>

          <div>
            <label htmlFor='asunto'>
              Asunto <span>opcional</span>
            </label>
            <input
              type='text'
              name='asunto'
              id='asunto'
              placeholder='Diseño estructural'
            />
          </div>

          <div className='message-input-container'>
            <label htmlFor='mensaje'>Mensaje</label>
            <textarea
              name='mensaje'
              id='mensaje'
              placeholder='Escribe tu mensaje'
            />
          </div>

          <button>Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
};

interface ContactCardProps {
  Icon: IconType;
  cardTitle: string;
  firstTextSnippet: string;
  secondTextSnippet: string;
}

function ContactCard({
  Icon,
  cardTitle,
  firstTextSnippet,
  secondTextSnippet,
}: ContactCardProps) {
  return (
    <div className='contact-card'>
      <div className='contact-svg-container'>
        <Icon />
      </div>
      <div>
        <h6>{cardTitle}</h6>
        <span>{firstTextSnippet}</span>
        <span>{secondTextSnippet}</span>
      </div>
    </div>
  );
}

export default Contact;
