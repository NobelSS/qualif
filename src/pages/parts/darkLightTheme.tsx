import React, { useState } from "react";
import { css } from "@emotion/css";

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 50px;
    border-radius: 25px;
    position: relative;
    background-color: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
  `,
  handle: css`
    position: absolute;
    top: 1px;
    left: 1px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  `
};

const theme = {
    light: css`
    ${styles.handle};
    transform: translateX(25px);
  `,
  dark: css`
    ${styles.handle};
    transform: translateX(0px);
  `
}

type Props = {
    onLight: boolean;
    onChange: (e: boolean) => void;
};

export default function ThemeSlider({ onLight, onChange }: Props){
  const [checked, setChecked] = useState(onLight);

  const handleToggle = () => {
    setChecked(!checked)
    onChange(!checked);
  };

  return (
    <div className={styles.container} onClick={handleToggle}>
      <div className={checked ? theme.light : theme.dark} />
    </div>
  );
};
