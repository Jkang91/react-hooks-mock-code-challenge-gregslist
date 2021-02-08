import React from "react";
import { useState } from "react"

function ListingCard({ listingItem, onRemoveListing }) {
  const { id, image, description, location } = listingItem
  const [favorite, setFavorite] = useState(false)

  function deleteClick () {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={() => setFavorite(false)}>★</button>
        ) : (
            <button
              className="emoji-button favorite" onClick={() => setFavorite(true)}>
              ☆
            </button>
          )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          onClick={deleteClick}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
