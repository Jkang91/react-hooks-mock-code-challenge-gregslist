import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingItems, setListingItems] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then((listingArray) => {
        setListingItems(listingArray)
      })
  }, [])

  function removeListing(id) {
    const newListings = listingItems.filter((listing) => listing.id !== id)
    setListingItems(newListings)
  }

  const displayedItems = listingItems.filter((item) => 
    item.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <Header 
        onSearch={setSearch}
      />
      <ListingsContainer
        listingItems={displayedItems}
        onRemoveListing={removeListing}
      />
    </div>
  );
}

export default App;
