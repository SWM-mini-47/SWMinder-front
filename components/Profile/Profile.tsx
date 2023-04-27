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
import ProfileDetail from './profiledetail';
import ProfileImage from './profileImage';
import React, { useEffect, useState, useRef } from 'react';
import Description from './description';
import Skills from './skills';
interface ProfileProps {
  name: string;
  phone: string;
  school: string;
  birth: Date;
  email: string;
  address: string;
  skills: string[];
  description: string;
}

export default function Profile({
  name: initialName,
  phone: initialPhone,
  school: initialSchool,
  birth: initialBirth,
  email: initialEmail,
  address: initialAddress,
  skills: initialSkills,
  description: initialDescription,
}: ProfileProps) {
  const [name, setName] = useState<string>(initialName);
  const [phone, setPhone] = useState<string>(initialPhone);
  const [school, setSchool] = useState<string>(initialSchool);
  const [birth, setBirth] = useState<Date>(initialBirth);
  const [email, setEmail] = useState<string>(initialEmail);
  const [address, setAddress] = useState<string>(initialAddress);
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [description, setDescription] = useState<string>(initialDescription);

  const [isClicked, setIsClicked] = useState(false);

  //편집버튼
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const buttonStyle = {
    backgroundColor: !isClicked ? 'grey' : 'lightgrey',
    color: !isClicked ? 'white' : 'black',

    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    width: '150px',
    cursor: 'pointer',
  };

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleInputPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleInputSchool = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(event.target.value);
  };

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleInputAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleInputDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const [profileImage, setProfileImage] = useState<string>('/images/profile_basic.png');

  const handleImageChange = (image: File) => {
    // Upload the image to the server and update the profileImage state
    setProfileImage(URL.createObjectURL(image));
  };

  return (
    <div className="profile_page">
      <div className="profile">
        <ProfileImage currentImage={profileImage} onImageChange={handleImageChange} />

        <button onClick={handleClick} className="editButton" style={buttonStyle}>
          {!isClicked ? '프로필 편집하기' : '저장'}
        </button>
      </div>
      <div className="main">
        <div className="about_me">
          <h2>about me</h2>
          <div className="about_me_Box">
            <ProfileDetail
              isClicked={isClicked}
              icon={faUser}
              title={'이름'}
              content={name}
              handleInputChange={handleInputName}
            />
            <ProfileDetail
              isClicked={isClicked}
              icon={faPhone}
              title={'연락처'}
              content={phone}
              handleInputChange={handleInputPhone}
            />
            <ProfileDetail
              isClicked={isClicked}
              icon={faGraduationCap}
              title={'학력'}
              content={school}
              handleInputChange={handleInputSchool}
            />
            <ProfileDetail
              isClicked={isClicked}
              icon={faCalendar}
              title={'생년월일'}
              content={birth.toDateString()}
              handleInputChange={handleInputName}
            />
            <ProfileDetail
              isClicked={isClicked}
              icon={faEnvelope}
              title={'이메일'}
              content={email}
              handleInputChange={handleInputEmail}
            />
            <ProfileDetail
              isClicked={isClicked}
              icon={faLocationDot}
              title={'주소'}
              content={address}
              handleInputChange={handleInputAdress}
            />
          </div>
        </div>

        <div className="skills">
          <Skills isClicked={isClicked} stack={skills} />
        </div>

        <Description
          isClicked={isClicked}
          des={description}
          handleInputChange={handleInputDescription}
        />
      </div>
    </div>
  );
}
