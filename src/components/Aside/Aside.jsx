import React from 'react';
import './aside.css';
import Copy from './AsideComponents/Copy/Copy';
import List from './AsideComponents/List/List';
import Offer from './AsideComponents/Offer/Offer';

function Aside() {
  return (
    <div className="aside">
      <Copy />
      <Offer />
      <List />
    </div>
  );
}

export default Aside;
