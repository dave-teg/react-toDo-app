import ItemList from "./ItemList";

const Content = ({items, setItems}) => {
  
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  }

  return (
    <main>
      { items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
