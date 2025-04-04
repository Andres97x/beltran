import { FC, useState, useRef } from 'react';
import { IconType } from 'react-icons';
import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { TbHeartHandshake } from 'react-icons/tb';
import { MdOutlineTimer } from 'react-icons/md';
import { LuCheckCircle } from 'react-icons/lu';
import './contact.css';

type ContactCardProps = {
  Icon: IconType;
  cardTitle: string;
  firstTextSnippet: string;
  secondTextSnippet: string;
};

const Contact: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [submitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const nameRef = useRef<null | HTMLInputElement>(null);
  const emailRef = useRef<null | HTMLInputElement>(null);
  const messageRef = useRef<null | HTMLTextAreaElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // checks
    if (
      !nameRef.current?.value.trim() ||
      !emailRef.current?.value.trim() ||
      !messageRef.current?.value.trim()
    ) {
      setError('Por favor completa los campos faltantes');
      return;
    }

    if (emailRef.current?.value.trim()) {
      const hasAtSymbol = /@/;
      if (!hasAtSymbol.test(emailRef.current.value)) {
        setError('Por favor usa un email válido');
        return;
      }
    }

    // send
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    formData.append('access_key', '2ba5fb14-e5df-46d3-ae14-33734c467a63');

    setIsSubmitting(true);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      formElement.reset();
      setIsSubmitting(false);
      setStatus('submitted');

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
      setError(null);
    } else {
      setError('Hubo un error al enviar el email.');
      setIsSubmitting(false);
    }
  }

  return (
    <div className='contact'>
      <div className='contact-cards'>
        <ContactCard
          Icon={HiOutlinePhone}
          cardTitle='Contacto'
          firstTextSnippet='3108061540/(601)7225790'
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
        <div className='contact-card'>
          <div className='contact-svg-container'>
            <TbHeartHandshake />
          </div>
          <div>
            <h6>Únetenos</h6>
            <span>Convierte en cliente o proovedor</span>
            <div className='forms-buttons-container'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdc8zOkQxZpqSx9ZDQMpwiv-xiVIJmyLlrxnViIWQ8s4vQGAA/viewform' target='_blank'>Formulario de clientes</a>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeDQcuZ7gRDuH4yhxpOE4VsMCbfrEhnry71SmsxvyBi9BZ6YQ/viewform' target='_blank'>
                Formulario para proveedores
              </a>
            </div>
          </div>
        </div>
      </div>

      {status === 'idle' ? (
        <div className='contact-form-container'>
          <div className='contact-form-heading'>
            <span className='sub-heading'>Contáctanos</span>
            <h2 className='h2'>Listo para empezar</h2>
            <p>
              Háblanos sobre tus ideas y dejemos que nuestro equipo te ayude a
              dar el primer paso hacia el éxito.
            </p>
          </div>
          <form className='contact-form' onSubmit={onSubmit}>
            <div>
              <label htmlFor='nombre'>Nombre</label>
              <input
                ref={nameRef}
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
                ref={emailRef}
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
                ref={messageRef}
                required
                name='mensaje'
                id='mensaje'
                placeholder='Escribe tu mensaje'
              />
            </div>

            {error && (
              <p className='error-message contact-error'>
                Por favor completa los campos obligatorios
              </p>
            )}

            <button disabled={submitting}>
              {submitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      ) : (
        <SubmittedView />
      )}
    </div>
  );
};

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

function SubmittedView() {
  return (
    <div className='submitted-view'>
      <div>
        <div className='submitted-icon'>
          <LuCheckCircle />
        </div>
        <div className='submitted-message'>
          <p>Gracias!</p>
          <span>Tu mensaje ha sido enviado.</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
