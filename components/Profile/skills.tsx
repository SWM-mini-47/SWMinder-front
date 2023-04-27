import react, { useState, useEffect } from 'react';

function Skills({ isClicked, stack }: skillProps) {
  //skill list출력
  const skillList = stack.map((number) => <li>{number}</li>);

  const items = [
    'Python(파이썬)',
    'C',
    'C++',
    'C#',
    'JAVA(자바)',
    'JavaScript(자바스크립트)',
    'PHP',
    'Kotlin(코틀린)',
    'Swift(스위프트)',
    'Angular(앵귤러)',
    'React(리액트)',
    'Vue.js(뷰)',
    'Spring(스프링)',
    'Django(장고)',
    'Node.js(노드제이에스)',
    'Pandas(판다스)',
    'Docker(도커)',
    'Kubernetes(쿠버네티스)',
  ];
  var [newItem, setNewItem] = useState<string[]>([]);
  var [uniqueItems, setUniqueItems] = useState<string[]>([]);
  var temp = '';

  const handleClick = (item: string) => {
    setNewItem((prevItems) => [...prevItems, item]); // use a callback function to update previous state
  };

  useEffect(() => {
    setUniqueItems(Array.from(new Set(newItem))); // update uniqueItems state after newItem has been updated
  }, [newItem]);

  const cancelClick = (item: string) => {
    setNewItem(newItem.filter((newItem) => newItem !== item));
    setUniqueItems(uniqueItems.filter((uniqueItem) => uniqueItem !== item));
  };

  if (!isClicked) {
    return (
      <div className="skills">
        <h2>skills</h2>
        <ul className="skill_list">
          {uniqueItems.map((item, index) => (
            <li onClick={() => handleClick(item)} key={index}>
              <img src={`/images/stack_img/${item}.png`} alt={item} width="80px" height="80px" />
              <p className="txt">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="skills">
        <h2>skills</h2>
        <div className="skillbox">
          <div className="container">
            <ul>
              {items.map((item, index) => (
                <li onClick={() => handleClick(item)} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ul className="selected_list">
            {uniqueItems.map((item, index) => (
              <li key={index} onClick={() => cancelClick(item)} className="stack_selected">
                × {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

interface skillProps {
  isClicked: boolean;
  stack: string[];
}

export default Skills;
