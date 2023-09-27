import './Popup.scss';

const Popup = (props) => {
  return (
    <div className="popup">
      <p className="popup__title">
        {props.title}
      </p>
      {
        props.children &&
        <div className="popup__content">
          {props.children}
        </div>
      }
    </div>
  )
};

export default Popup;