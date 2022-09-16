import './App.css'
import {FC} from "react";
import {useTranslation, Trans} from "react-i18next";


const Card: FC = () => {
  const {t} = useTranslation();
  return (
    <>
      <h1> {t('application-name')} </h1>
      <p> {t('application-briefing')} </p>
      <p> {t('application-description')} </p>
      <p> {t('application-second-header', {
        defaultValue: 'This is the second header'
      })} </p>
    </>
  )
}

const app: FC = () => {

  // pode ser definido com base no país do usuário
  sessionStorage.setItem('i18nextLng', 'pt-BR');

  const {i18n} = useTranslation();

  return (
    <>
      <Card/>
      <button onClick={() => i18n.changeLanguage('es-AR')}>🇦🇷</button>
      <button onClick={() => i18n.changeLanguage('pt-br')}>🇧🇷</button>
      <button onClick={() => i18n.changeLanguage('en')}>🇺🇸</button>
      <button onClick={() => i18n.changeLanguage('pt')}>🇵🇹</button>
    </>
  );
}

export default app;