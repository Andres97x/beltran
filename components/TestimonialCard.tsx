import { FC } from 'react';

interface Props {
  src: string;
  styles: { bg: string; reverse?: string };
  author: { text: string; name: string; job: string };
}

const TestimonialCard: FC<Props> = ({ src, styles, author }) => {
  return (
    <div className={`testimonial-card ${styles.reverse || ''}`}>
      <div className={`testimonial-card_image ${styles.bg}`}>
        <img src={src} />
      </div>
      <div className='testimonial-card_text'>
        <p>{author.text}</p>
        <span className='testimonial-name'>{author.name}</span>
        <span className='testimonial-job'>{author.job}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
