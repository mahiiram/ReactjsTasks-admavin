import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { childA, parent, childB } from "./data";
import "./nestedcomponents.css";

function NestedComponents() {
  const [category, setCategory] = useState({ name: "phones" });
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let newItems;
    newItems = childA.filter((item) => {
      return item.category.toLowerCase() === category.name;
    });
    setItems(newItems);
  }, [category]);

  const handleClick = (event, index) => {
    setCategory({ name: event.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <>
      <div className="container nestedcompoContainer">
        <div className="row nestedcompoRow">
          <div className="col-3 nestedcompoCol">
            {parent.map((item, index) => {
              return (
                <div
                  onClick={(event) => {
                    handleClick(event, index);
                  }}
                  className={`${active === index ? "active-pane" : ""} items`}
                  key={index}
                >
                  {item.name}
                  <FaArrowRight className="ncIcon" />
                </div>
              );
            })}
          </div>

          <ChildComponentA items={items} />
        </div>
      </div>
    </>
  );
}

//Child Component 1

function ChildComponentA({ items }) {
  const [subcategory, setSubCategory] = useState({ name: "samsung" });
  const [itemsA, setItemsA] = useState([]);
  const [active, setActive] = useState(0);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    let newItems;
    newItems = childB.filter((item) => {
      return item.subcategory.toLowerCase() === subcategory.name;
    });
    setItemsA(newItems);
  }, [subcategory]);

  const handleClick = (event, index) => {
    setSubCategory({ name: event.target.textContent.toLowerCase() });
    setActive(index);
    setVisibility(true);
  };
  return (
    <>
      <div className={`col-3 nestedcompoCol`}>
        {items.map((item, index) => {
          return (
            <div
              onClick={(event) => {
                handleClick(event, index);
              }}
              onMouseEnter={(event) => {
                setVisibility(true);
                handleClick(event, index);
                return;
              }}
              onMouseLeave={(event) => {
                setVisibility(false);
                return;
              }}
              className={`${active === index ? "active-pane" : ""} items`}
              key={index}
            >
              {item.name}
              <FaArrowRight className="ncIcon" />
            </div>
          );
        })}
      </div>
      <ChildComponentB subItems={itemsA} visibility={visibility} />
    </>
  );
}

//Child Component 2

function ChildComponentB({ subItems, visibility }) {
  return (
    <div
      className="col-3 nestedcompoCol"
      style={{ visibility: visibility ? "visible" : "hidden" }}
    >
      {subItems.map((item) => {
        return <div className="items">{item.name}</div>;
      })}
    </div>
  );
}

export default NestedComponents;