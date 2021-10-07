## My TodesDemo_209410793

### 1.

![](https://i.imgur.com/5LcPwwG.png)

#### app.js code

```app.js code
import './App.css';

function App_93() {
  return (
    <div>
    <h1>My Todos</h1>
      <div className='card'>
        <h2>Learn React</h2>
        <div className='actions'>
          <button className='btn'>Delete</button>
        </div>
      </div>
  </div>
  );
}

export default App_93;
```

---

### 2.

![](https://i.imgur.com/qpxWt7S.png)

#### app.js code

```app.js code
import Todo from './components/Todo_93';
import './App.css';
import Todo_93 from './components/Todo_93';

function App_93() {
  return (
    <div>
    <h1>My Todos</h1>
      <Todo_93 text='Learn React'/>
      <Todo_93 text='Learn SQL'/>
      <Todo_93 text='Learn NextJS'/>
  </div>
  );
}

export default App_93;
```

#### Todo.js code

```Todo.js code
import React from 'react'

function Todo_93(props) {
    return (
        <div>
        <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
      <button className='btn'>Delete</button>
    </div>
    </div>
    </div>
    );
}

export default Todo_93;
```

---

### 3.

![](https://i.imgur.com/Yuwu1oS.png)
![](https://i.imgur.com/tlyBXFt.png)
![](https://i.imgur.com/szYBIqS.png)

---

### 4.

![](https://i.imgur.com/fWxdmbh.png)

![](https://i.imgur.com/KEzy5dN.png)

---

### 5.

![](https://i.imgur.com/7WwpISe.png)

### Modal.js code

```Modal.js
function Modal_93(props){

    return (
        <div className="modal">
            <p>{props.text}</p>
            <button className="btn btn--alt" onClick={props.onClose}>Cancel</button>
            <button className="btn" onClick={props.onClose}>Confirm</button>
        </div>
    )
}

export default Modal_93;
```

### Backdrop.js

```
function Backdrop_93(props){
    return(
        <div className="backdrop" onClick={props.onclose}></div>
    )
}

export default Backdrop_93;
```
