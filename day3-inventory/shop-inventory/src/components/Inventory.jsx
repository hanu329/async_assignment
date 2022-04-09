import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 15,
  });
    // Create add and remove functions here that changes the
    // state.
    
    const handleBooks = (v) =>{
     
      if(v==1){
        setInv({inv, books:inv.books+1, notebooks:inv.notebooks, pens:inv.pens, inkpens:inv.inkpens})
      } 
      if(v==-1 && inv.books !==0){
        
        setInv({inv, books:inv.books-1, notebooks:inv.notebooks, pens:inv.pens, inkpens:inv.inkpens})
      }
    }

    const handleNoteBooks = (v) =>{
     
      if(v==1){
        setInv({inv, books:inv.books, notebooks:inv.notebooks+1, pens:inv.pens, inkpens:inv.inkpens})
      } 
      if(v==-1 && inv.books !==0){
        
        setInv({inv, books:inv.books, notebooks:inv.notebooks-1, pens:inv.pens, inkpens:inv.inkpens})
      }
    }

    const handlePens = (v) =>{
     
      if(v==1){
        setInv({inv, books:inv.books, notebooks:inv.notebooks, pens:inv.pens+1, inkpens:inv.inkpens})
      } 
      if(v==-1 && inv.books !==0){
        
        setInv({inv, books:inv.books, notebooks:inv.notebooks, pens:inv.pens-1, inkpens:inv.inkpens})
      }
    }

    const handleInkPens = (v) =>{
     
      if(v==1){
        setInv({inv, books:inv.books, notebooks:inv.notebooks, pens:inv.pens, inkpens:inv.inkpens+1})
      } 
      if(v==-1 && inv.books !==0){
        
        setInv({inv, books:inv.books, notebooks:inv.notebooks, pens:inv.pens,inkpens:inv.inkpens-1})
      }
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button id="books" className="circlularButton" onClick={()=>handleBooks(1)}>+</button>
        <button className="circlularButton" onClick={()=>handleBooks(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handleNoteBooks(1)}>+</button>
        <button className="circlularButton" onClick={()=>handleNoteBooks(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handlePens(1)}>+</button>
        <button className="circlularButton" onClick={()=>handlePens(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>handleInkPens(1)}>+</button>
        <button className="circlularButton" onClick={()=>handleInkPens(-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div>
  );
};
