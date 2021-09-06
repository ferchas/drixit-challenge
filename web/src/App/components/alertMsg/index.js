
import './style.scss';

const AlertMsg = ({ msg = '', typeMsg = 'success'}) => {
  return (
    <>
      {
        msg !== '' && (
          <div className={`alert alert-${typeMsg}`}>
            {msg}
          </div>
        )
      }
    </>
    )
  ;
}

export default AlertMsg;