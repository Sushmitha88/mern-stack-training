import './App.css';
import Employee from './Excer/excercise1/Employee';
import ProductList from './Excer/excercise2/products';
import UserList from './Excer/excercise2/users';
import Counter from './Excer/excercise3/counter';


const App = () => {
  return (
    <div className='App'>
      <div className='excercise1'>
        <h1>Task 1</h1>
        <Employee />
      </div>

    <div className='excercise2'>
      <h1>Task 2</h1>
      <ProductList/>
      <UserList/>
    </div>

    <div className='excercise3'>
      <h1>Task 3</h1>
      <Counter/>
    </div>

      

    </div>
  )
}

export default App;
