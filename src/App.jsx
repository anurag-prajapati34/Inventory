import { useState } from 'react'

import './App.css'
import './index.css'
import { Sidebar } from './components/Sidebar'

import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-full h-full flex min-h-[100vh] '>
    
<Sidebar/>
<Outlet/>

  </div>
  )
}

export default App


// import React, { useState } from 'react';
// import InventoryTable from './components/InventoryTable';
// import ItemForm from './components/ItemForm';

// function App() {
//   const [inventory, setInventory] = useState([
//     { id: 1, name: 'Apple', category: 'Fruit', quantity: 20 },
//     { id: 2, name: 'Milk', category: 'Dairy', quantity: 5 },
//   ]);
//   const [editingItem, setEditingItem] = useState(null);

//   const addItem = (item) => {
//     setInventory([...inventory, { ...item, id: Date.now() }]);
//   };

//   const editItem = (updatedItem) => {
//     setInventory(
//       inventory.map((item) =>
//         item.id === updatedItem.id ? updatedItem : item
//       )
//     );
//   };

//   const deleteItem = (id) => {
//     setInventory(inventory.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-2xl font-bold text-center mb-6">Inventory Manager</h1>
//       <div className="flex gap-6">
//         <ItemForm
//           addItem={addItem}
//           editItem={editItem}
//           editingItem={editingItem}
//           setEditingItem={setEditingItem}
//         />
//         <InventoryTable
//           inventory={inventory}
//           deleteItem={deleteItem}
//           setEditingItem={setEditingItem}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
