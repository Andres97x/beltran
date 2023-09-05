import { FC } from 'react';
import './SectionInfo.css';

interface Props {
  subheading: string;
  h2: string;
  classes?: { color?: string; center?: string; wide?: string };
  number: string;
}

const SectionInfo: FC<Props> = ({ subheading, h2, classes, number }) => {
  return (
    <div
      className={`section-info ${classes?.center || ''} ${classes?.wide || ''}`}
      id={`section-${number}`}
    >
      <span className={`sub-heading ${classes?.center || ''}`}>
        {subheading}
      </span>
      <h2 className={`h2 ${classes?.color || ''}`}>{h2}</h2>
    </div>
  );
};

export default SectionInfo;
