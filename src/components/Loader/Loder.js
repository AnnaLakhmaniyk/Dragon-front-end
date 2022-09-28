import s from './Loader.module.css';
function Loader() {
  return (
    <div id="preloader" className={s.preloader}>
      <div className={s.loader}></div>
    </div>
  );
}
export default Loader;
