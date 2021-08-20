import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import FormHandling from './components/FormHandling';
import FragmentDemo from './components/FragmentDemo';
import MemoDemo from './components/MemoDemo';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/*  component with props */}
      {/* <Greet name="deepak"></Greet>
      <Greet name="jyo"></Greet>
      <Welcome name="deepak"></Welcome>
      <Welcome name="jyo"></Welcome>
      <Hello></Hello>
      <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet /> */}
      {/* <Inline></Inline> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <FormHandling /> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <MemoDemo></MemoDemo> */}
      {/* <PortalDemo /> */}
      <ClickCounter></ClickCounter>
    </div>
  );
}

export default App;
