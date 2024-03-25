import { useState } from "react";
import { TbMoodSad } from "react-icons/tb";
import "./bucketTransfer.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function BucketTransfer() {
  const [leftBucket, setLeftBucket] = useState([
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5",
    "Item6",
  ]);
  const [rightBucket, setRightBucket] = useState([]);
  const [addItems, setAddItems] = useState([]);
  const [removeItems, setRemoveItems] = useState([]);

  let removeItemsfromArray = (removeItemsArray, add) => {
    if (add) {
      removeItemsArray.forEach((element) => {
        const index = leftBucket.findIndex((obj) => {
          return obj === element;
        });
        leftBucket.splice(index, 1);
        setLeftBucket([...leftBucket]);
      });
    } else {
      removeItemsArray.forEach((element) => {
        const index = rightBucket.findIndex((obj) => {
          return obj === element;
        });
        rightBucket.splice(index, 1);
        setRightBucket([...rightBucket]);
      });
    }
  };

  let add = (item) => {
    removeItemsfromArray(item, true);
    setRightBucket([...rightBucket, ...item]);
    setAddItems([]);
  };
  let remove = (item) => {
    removeItemsfromArray(item, false);
    let cart = [...leftBucket, ...item];
    setLeftBucket(cart.sort());
    setRemoveItems([]);
  };
  let addAll = () => {
    let cart = [...rightBucket, ...leftBucket];
    setRightBucket(cart);
    setLeftBucket([]);
  };

  let removeAll = () => {
    let cart = [...leftBucket, ...rightBucket];
    setLeftBucket(cart.sort());
    setRightBucket([]);
  };

  return (
    <> 
    <div>
    <Navbar/>
      <div>
        <h3 className="title">Element Transfer</h3>
      </div>
      <div className="bucket_container">
        <div className="bucket_row">
          <div className="LeftBuket">
          <Col1
            leftBucket={leftBucket}
            setLeftBucket={setLeftBucket}
            addItems={addItems}
            setAddItems={setAddItems}
          />
          </div>
          <div>
            <div className="buttonDiv">
              <button
                className="btnAdd"
                onClick={() => add(addItems)}
                disabled={addItems.length === 0 ? true : false}
              >
                Add+
              </button>
              <button
                className="btnRemove"
                onClick={() => remove(removeItems)}
                disabled={removeItems.length === 0 ? true : false}
              >
               Remove - 
              </button>
              <button
                className="btnAddAll"
                onClick={() => addAll()}
                disabled={leftBucket.length === 0 ? true : false}
              >
                 Add All +
              </button>
              <button
                className="btnRemoveAll"
                onClick={() => removeAll()}
                disabled={rightBucket.length === 0 ? true : false}
              >
                Remove All -
              </button>
            </div>
          </div>
          <div className="rightbuket">
          <Col2
            rightBucket={rightBucket}
            removeItems={removeItems}
            setRemoveItems={setRemoveItems}
          />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function Col1({ leftBucket, addItems, setAddItems }) {
  return (
    <div >
      <div>
           <h2>Bucket 1</h2>
        </div> 
       <div>
       <ul className="list-group">
        {leftBucket.length === 0 ? (
          <p className="emptyText">
            <TbMoodSad className="buttonIcon" />
            Oops..! Empty
          </p>
        ) : (
          leftBucket.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
                <input
                  type="checkbox"
                  checked={addItems.includes(item)}
                  disabled={addItems.includes(item)}
                  onChange={() => setAddItems([...addItems, item])}
                />
                {" " + item}
              </li>
            );
          })
        )}
      </ul>
       </div>
      
    </div>
  );
}
function Col2({ rightBucket, removeItems, setRemoveItems }) {
  return (
    <div>
      <h2>Bucket 2</h2>
      <ul className="list-group">
        {rightBucket.length === 0 ? (
          <p className="emptyText">
            <TbMoodSad className="buttonIcon" />
            Oops..! Empty
          </p>
        ) : (
          rightBucket.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
                <input
                  type="checkbox"
                  checked={removeItems.includes(item)}
                  disabled={removeItems.includes(item)}
                  onChange={() => {
                    setRemoveItems([...removeItems, item]);
                  }}
                />
                {" " + item}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
export default BucketTransfer;