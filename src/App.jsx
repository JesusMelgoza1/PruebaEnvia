import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import TableComponent from './components/TableComponent'


function App() {

  const [ordersPlaced, setOrdersPlaced] = useState([]);
  const [orderNumber, setOrderNumber] = useState(1430); // Estado para el número de orden

  // Función para aumentar el número de orden y devolver el nuevo número
  const getNextOrderNumber = () => {
      const nextOrderNumber = orderNumber + 1;
      setOrderNumber(nextOrderNumber);
      return nextOrderNumber;
  };

    // Función para añadir una orden a la tabla
    const addOrderToTable = (newOrder) => {
      setOrdersPlaced((prevOrders) => [newOrder, ...prevOrders]);
    };
  
  return (
     
      <>
        <Header/>
        <div className="mt-20 mb-10 my-36 px-56">
            <TableComponent  ordersPlaced={ordersPlaced} />          
        </div>
        <div className="mt-20 mb-10 my-36 px-56">
            <Form
              addOrderToTable={addOrderToTable}
              getNextOrderNumber={getNextOrderNumber}
              // setOrdersPlaced={setOrdersPlaced}
              />
        </div>

      </>

    
  )
}

export default App
