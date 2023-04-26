interface desCriptionProps {
  isClicked: boolean;
  des: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Description({ handleInputChange, isClicked, des }: desCriptionProps) {
  if (isClicked) {
    return (
      <div className="description">
        <h2>Description</h2>
        <p className="description_content">{des}</p>
      </div>
    );
  } else {
    return (
      <div className="description">
        <h2>Description</h2>
        <textarea className="textArea" onChange={handleInputChange}>
          {des}
        </textarea>
      </div>
    );
  }
}

export default Description;
