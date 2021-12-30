import { useRef ,useState } from 'react';
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const onFocusFormHandler=()=>{
    console.log('Fuck!')
    setIsEntering(true);
  }
  function isEmpty(str){
    if(str===null||str.trim()===""){
      return true;
    }
    return false;

  }
  const finshEnteringHandler=()=>{
    const author=authorInputRef.current.value;
    const text=textInputRef.current.value;
    if(isEmpty(author)){
      setIsEntering(true);
    }
    else{
      setIsEntering(false);
    }
    if(isEmpty(text)){
      setIsEntering(true);
    }
    else{
      setIsEntering(false);
    }


    
  }

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <><Prompt when={isEntering} message="Are you sure you want to leave without entering valid data in the form fields?" />
    <Card>
      <form onFocus={onFocusFormHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finshEnteringHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card></>
  );
};

export default QuoteForm;
