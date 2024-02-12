import React, { useState } from 'react';
import css from './Form.module.css';
import { ReactComponent as Loupe } from '../img/Loupe.svg';

const Form = () => {
  const [checkOptVideo, setCheckOptVideo] = useState(false);
  const [checkOptDet, setCheckOptDet] = useState(false);
  const [checkOptColor, setCheckOptColor] = useState(false);
  const [checkOptBackg, setCheckOptBackg] = useState(false);
  const [checkOptLoop, setCheckOptLoop] = useState(false);

  return (
    <>
      <form action="" className={css.form_search}>
        <div className={css.info}>
          <label for="search-name" className={css.input_label}>
            Обрати відео
            <div className={css.container_change}>
              <input
                className={css.input_search}
                type="text"
                name="search-name"
                required
              />
              <button className={css.btn_add}>Додати</button>
            </div>
            <Loupe className={css.loupe_input} />
          </label>
          <p>Параметри відео</p>
          <label className={css.label_form} for="">
            Оптимізувати відео
            <span
              onClick={() => {
                setCheckOptVideo(!checkOptVideo);
              }}
              className={checkOptVideo ? css.btn_check_active : css.btn_check}
            >
              <span
                className={checkOptVideo ? css.switching_active : css.switching}
              ></span>{' '}
            </span>
          </label>
          <label className={css.label_form} for="">
            Деталізувати
            <span
              onClick={() => {
                setCheckOptDet(!checkOptDet);
              }}
              className={checkOptDet ? css.btn_check_active : css.btn_check}
            >
              {' '}
              <span
                className={checkOptDet ? css.switching_active : css.switching}
              ></span>{' '}
            </span>
          </label>
          <label className={css.label_form} for="">
            Оптимізувати колір
            <span
              onClick={() => {
                setCheckOptColor(!checkOptColor);
              }}
              className={checkOptColor ? css.btn_check_active : css.btn_check}
            >
              {' '}
              <span
                className={checkOptColor ? css.switching_active : css.switching}
              ></span>{' '}
            </span>
          </label>
          <label className={css.label_form} for="">
            Оптимізувати фон
            <span
              onClick={() => {
                setCheckOptBackg(!checkOptBackg);
              }}
              className={checkOptBackg ? css.btn_check_active : css.btn_check}
            >
              {' '}
              <span
                className={checkOptBackg ? css.switching_active : css.switching}
              ></span>{' '}
            </span>
          </label>
          <p className={css.text_op}>Керувати відтворенням</p>
          <label className={css.label_form} for="">
            Зациклити відео
            <span
              onClick={() => {
                setCheckOptLoop(!checkOptLoop);
              }}
              className={checkOptLoop ? css.btn_check_active : css.btn_check}
            >
              <span
                className={checkOptLoop ? css.switching_active : css.switching}
              ></span>{' '}
            </span>
          </label>
          <label className={css.label_form} for="">
            Вивести на екран{' '}
            <button className={css.btn_submit}>Запустити</button>
          </label>
          <button className={css.btn_information}>Інформація</button>
        </div>
        <div className={css.line}></div>
        <div className={css.video_box}></div>
      </form>
    </>
  );
};

export default Form;
