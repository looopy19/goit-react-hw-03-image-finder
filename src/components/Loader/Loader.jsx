import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function LoaderSpinner() {
  return (
    <Loader
      className={s.Loader}
      type="Circles"
      color="#00BFFF"
      height={300}
      width={300}
      timeout={3000} //3 secs
    />
  );
}