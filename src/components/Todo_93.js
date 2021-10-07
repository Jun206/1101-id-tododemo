import {useState} from 'react'
import Modal_93 from '../components/Modal_93';
import Backdrop_93 from '../components/Backdrop_93';

function Todo_93(props) {
  const [showModal, setshowModal] = useState();

  function showModalHandler(){
    setshowModal(true);
  }

  function closeModalHandler(){
    setshowModal(false);
  }
    return (
        <div>
        <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
      <button className='btn' onClick={showModalHandler}>Delete</button>
    </div>
    </div>
    {showModal && <Backdrop_93/>}
    {showModal && <Modal_93 text='Are you sure?' onClose={closeModalHandler}/>}
      </div>
    );
}

export default Todo_93;