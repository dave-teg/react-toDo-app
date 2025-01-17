import { useState } from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("toDoList")) || []);
  const [search, setSearch] = useState('');

  const setAndSaveItems = (listItems) => {
    setItems(listItems);
    localStorage.setItem("toDoList", JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="ToDo List"/>
      <AddItem 
        items={items}
        setItems={setAndSaveItems}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items && items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))}
        setItems={setAndSaveItems}
      />
      <Footer
        length={items ? items.length : 0}
      />
    </div>
  );
}

export default App;
