import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as id } from 'uuid';

export const TodoList = ({ newListItems, checkboxChecked }) => {
  const [res, setres] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/")
      console.log(response)
      setres(response.data);
    } catch (error) {
      console.error(error, "you are wrong");
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const MyComponent = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent form submission
      console.log(inputValue);

      try {
        console.log("sdsfgghfjfhjkgk", inputValue);

        const response = await axios.post("http://localhost:5000/", {
          newItems: inputValue, 
          id : id()
        
        });
        const dataValues = response.data;
        console.log("responsDATA", response.data);
        setres(response.data);

        // Log the response from the server
      } catch (error) {
        console.error(error, "An error occurred while posting data");
      }
    };

    const handleDelete = async (itemId) => {
      console.log(itemId.id);
      try {
        const response = await axios.delete(`http://localhost:5000/items/${itemId.id}`);
        setres(response.data)
        console.log(response)
      } catch (error) {
        console.error(error, "An error occurred while deleting the item");
      }
    };

    return (
      <>
        <div style={{ marginTop: "25px" }}>
          <h1
            style={{
              backgroundColor: "blueviolet",
              textAlign: "center",
              width: "50%",
              margin: "0 auto",
              borderRadius: "5px",
              paddingTop: "25px",
              paddingBottom: "25px",
              color: "black",
            }}
          >
            {day}
          </h1>

          <div
            className="main"
            style={{
              borderRadius: "5px",
              backgroundColor: "white",
              width: "50%",
              margin: "0 auto",
              marginTop: "50px",
              paddingTop: "25px",
              paddingBottom: "15px",
            }}
          >
            {
              <ul>
                {res.map((value, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        marginTop: "25px",
                        listStyle: "none",
                        textDecoration: value.checked ? "line-through" : "none",
                        fontSize: value.checked ? "18px" : "inherit",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{ marginRight: "15px" }}
                        checked={value.checked}
                      ></input>
                      {value.newItems}


                     
        <button onClick={() => handleDelete(value)}>Delete</button>
                    </li>
                  );
                })}
              </ul>
            }

            <form
              onSubmit={handleSubmit}
              action="/"
              method="post"
              style={{
                marginTop: "35px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                name="newItem"
                autoComplete="off"
                placeholder="New Item"
                onChange={handleInputChange}
                value={inputValue}
                style={{ border: 0 }}
              />
              
  {/* <button onClick={() => handleDelete(value.id)}>Delete</button> */}

              <button
                type="submit"
                style={{
                  backgroundColor: "blueviolet",
                  outline: "none",
                  border: 0,
                  fontSize: "30px",
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              >
                +
              </button>
            </form>
          </div>
        </div>
      </>
    );
  };
  return <MyComponent />;
};
