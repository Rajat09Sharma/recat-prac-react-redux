import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/reduxstore';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const counterActive = useSelector((state) => state.counter.isCounterActive);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  }

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  }

  const increaseHandler = () => {
    dispatch(counterAction.increasse(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterActive && <div className={classes.value}>{counter}</div>}
      <div className='counter-btn'>
        <button className="counter-btn" onClick={incrementHandler}>Increment</button>
        <button className="counter-btn" onClick={increaseHandler}>Increase by 5</button>
        <button className="counter-btn" onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
