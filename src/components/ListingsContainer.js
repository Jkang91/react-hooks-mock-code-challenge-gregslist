import ListingCard from "./ListingCard";


function ListingsContainer({listingItems, onRemoveListing}) {

  const listingCards = listingItems.map((listingItem) => (
    <ListingCard 
      key={listingItem.id} 
      listingItem={listingItem}
      onRemoveListing={onRemoveListing}
     />
  ))

  
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
