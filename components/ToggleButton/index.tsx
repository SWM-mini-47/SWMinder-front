import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

interface ToggleButtonProps {
  text: string;
  color: string;
  value: boolean;
  onToggle: (flag: boolean) => void;
}

const style = (enabled: boolean, color: string) => css`
  box-sizing: border-box;
  border: solid ${color} 2px;
  display: inline-block;
  height: 30px;
  padding: 0 10px;
  background-color: ${enabled ? color : 'white'};
  border-radius: 15px;
  p {
    margin: 0;
    text-align: center;
    line-height: 26px;
    color: ${enabled ? 'white' : color};
    font-size: 15px;
  }
`;

export default function ToggleButton({ text, color, onToggle, value }: ToggleButtonProps) {
  const [enabled, setEnabled] = useState<boolean>(value);

  useEffect(() => {
    onToggle(enabled);
  }, [enabled]);

  return (
    <div
      css={style(enabled, color)}
      onClick={() => {
        setEnabled(!enabled);
      }}
    >
      <p>{text}</p>
    </div>
  );
}
