import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faCalendar,
  faEnvelope,
  faGraduationCap,
  faLocationDot,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import exp from 'constants';

function ProfileDetail({ isClicked, icon, title, content, handleInputChange }: ProfileDetailProps) {
  if (!isClicked) {
    return (
      <div className="profile_comp">
        <div>
          <FontAwesomeIcon className="profile_icon" icon={icon} size="2x" />
        </div>
        <div className="profile_box">
          <p className="profile_title">{title}</p>
          <input type="text" value={content} onChange={handleInputChange} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="profile_comp">
        <div>
          <FontAwesomeIcon className="profile_icon" icon={icon} size="2x" />
        </div>
        <div className="profile_box">
          <p className="profile_title">{title}</p>
          <p className="profile_content">{content}</p>
        </div>
      </div>
    );
  }
}

interface ProfileDetailProps {
  icon: IconDefinition;
  title: string;
  content: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isClicked: boolean;
}

export default ProfileDetail;
