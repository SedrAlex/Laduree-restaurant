import React, { createContext, useContext, useEffect, createRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button
} from "reactstrap";
import './Modal.css';
import Table from "./table";
import "./table.css"

import { IoPersonAddOutline, IoPersonRemoveOutline } from 'react-icons/io5'
// import Table from "../../container/Table/Table";

//create modal context to allow any component to use onCloseModal function
//modal can be closed with escape key as well as buttons
const modalContext = createContext();

export default function Modal({ children, onModalClose }) {



  useEffect(() => {
    function keyListener(e) {
      //get listener of key pressed
      const listener = keyListenersMap.get(e.keyCode);
      //call listener if it exists
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  const modalRef = createRef();

  //pressing tab or shift + tab allows user to navigate within the modal
  const handleTabKey = e => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'button, input[type="text"], input[type="select"], input[type="submit"], input[type="date"], input[type="email"], input[type="tel"]'
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };
 
  //keyboard listeners, ESCAPE KEY, and TAB KEY
  const keyListenersMap = new Map([[27, onModalClose], [9, handleTabKey]]);


  //allows render of modal directly in the body of document
  return createPortal(
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal-content" ref={modalRef}>
        <modalContext.Provider value={{ onModalClose }}>
          {children}
        </modalContext.Provider>
      </div>
    </div>,
    document.body
  );
}

//modal header component
Modal.Header = function ModalHeader(props) {
  const { onModalClose } = useContext(modalContext);

  return (
    <div className="modal-header">
      {props.children}
      <button className="cross-btn" title="close modal" onClick={onModalClose}>
      &times;
      </button>
    </div>
  );
};

//modal body component
Modal.Body = function ModalBody(props) {

  




  // return <div className="modal-body">{props.children}
  //           <form className="reserve-form" id="hook-form" onSubmit={handleSubmit(onSubmit)}>
  //               <input 
  //                 className="form-control"
  //                 type="text"
  //                 placeholder="First Name"
  //                 name="FirstName"
  //                 {...register("FirstName", {
  //                   required: true
  //                 })}
  //               />
  //               {errors.FirstName?.type === "required" && <span className="required">First name is required</span>}
  //               <input
  //                 className="form-control"
  //                 type="tel"
  //                 placeholder="Phone Number"
  //                 name="PhoneNumber"
  //                 {...register("PhoneNumber", {
  //                   required: true
  //                 })} 
  //               />
  //               {errors.PhoneNumber?.type === "required" && <span className="required">Phone number is required</span>}       
  //               <input
  //                 className="form-control"
  //                 type="email"
  //                 placeholder="Email"
  //                 name="Email"
  //                 {...register("Email", {
  //                   required: true
  //                 })}
  //               />
  //               {errors.Email?.type === "required" && <span className="required">Email is required</span>}        
                
  //                 <span className="date-time">Date
  //                 <input
  //                   className="date-control"
  //                   type="date"
  //                   name="Date"
  //                   {...register("Date", {
  //                     required: true
  //                   })}
  //                 /> 
  //               </span>
  //               <span className="date-time">Time
  //                 <select 
  //                   className="select-time"
  //                   name="Time"
  //                   type="time"
  //                   {...register("Time", {
  //                     required: true
  //                   })}
  //                 >
  //                   <option value="11:00 AM">11:00 AM</option>
  //                   <option value="11:15 AM">11:15 AM</option>
  //                   <option value="11:30 AM">11:30 AM</option>
  //                   <option value="11:45 AM">11:45 AM</option>
 
  //                   <option value="12:00 PM">12:00 PM</option>
  //                   <option value="12:15 PM">12:15 PM</option>
  //                   <option value="12:30 PM">12:30 PM</option>
  //                   <option value="12:45 PM">12:45 PM</option>
 
  //                   <option value="1:00 PM">1:00 PM</option>
  //                   <option value="1:15 PM">1:15 PM</option>
  //                   <option value="1:30 PM">1:30 PM</option>
  //                   <option value="1:45 PM">1:45 PM</option>
                            
  //                   <option value="2:00 PM">2:00 PM</option>
  //                   <option value="2:15 PM">2:15 PM</option>
  //                   <option value="2:30 PM">2:30 PM</option>
  //                   <option value="2:45 PM">2:45 PM</option>
                            
  //                   <option value="3:00 PM">3:00 PM</option>
  //                   <option value="3:15 PM">3:15 PM</option>
  //                   <option value="3:30 PM">3:30 PM</option>
  //                   <option value="3:45 PM">3:45 PM</option>
                            
  //                   <option value="4:00 PM">4:00 PM</option>
  //                   <option value="4:15 PM">4:15 PM</option>
  //                   <option value="4:30 PM">4:30 PM</option>
  //                   <option value="4:45 PM">4:45 PM</option>
                            
  //                   <option value="5:00 PM">5:00 PM</option>
  //                   <option value="5:15 PM">5:15 PM</option>
  //                   <option value="5:30 PM">5:30 PM</option>
  //                   <option value="5:45 PM">5:45 PM</option>
                            
  //                   <option value="6:00 PM">6:00 PM</option>
  //                   <option value="6:15 PM">6:15 PM</option>
  //                   <option value="6:30 PM">6:30 PM</option>
  //                   <option value="6:45 PM">6:45 PM</option>
                            
  //                   <option value="7:00 PM">7:00 PM</option>
  //                   <option value="7:15 PM">7:15 PM</option>
  //                   <option value="7:30 PM">7:30 PM</option>
  //                   <option value="7:45 PM">7:45 PM</option>
                            
  //                   <option value="8:00 PM">8:00 PM</option>
  //                   <option value="8:15 PM">8:15 PM</option>
  //                   <option value="8:30 PM">8:30 PM</option>
  //                   <option value="8:45 PM">8:45 PM</option>
  //                 </select>
  //               </span>
  //             </form>
  //               <div className="reserve-people">
  //                   <button className="decrease" onClick={decrement}><IoPersonRemoveOutline></IoPersonRemoveOutline></button>
  //                     <span className="count" name="count"> {`${count}`}</span>
  //                   <button className="increase" onClick={increment}><IoPersonAddOutline></IoPersonAddOutline></button>
  //               </div>
  //               <Modal.Footer>
  //               <Modal.Footer.SubmitBtn>Submit</Modal.Footer.SubmitBtn>
  //               <Modal.Footer.CloseBtn>Cancel</Modal.Footer.CloseBtn>
  //               </Modal.Footer>


              


             
  //        </div>;
  const [totalTables, setTotalTables] = useState([]);

  // User's selections
  const [selection, setSelection] = useState({
    table: {
      name: null,
      id: null
    },
    date: new Date(),
    time: null,
    location: "Any Location",
    size: 0
  });
    // User's booking details
    const [booking, setBooking] = useState({
      name: "",
      phone: "",
      email: ""
    });
// List of potential locations
const [locations] = useState(["Any Location", "Terrace", "Inside", "Bar"]);
const [times] = useState([
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM"
]);
// Basic reservation "validation"
const [reservationError, setReservationError] = useState(false);

const getDate = _ => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  const date =
      months[selection.date.getMonth()] +
      " " +
      selection.date.getDate() +
      " " +
      selection.date.getFullYear();
    let time = selection.time.slice(0, -2);
    time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
    console.log(time);
    const datetime = new Date(date + " " + time);
    return datetime;
  };

  const getEmptyTables = _ => {
    let tables = totalTables.filter(table => table.isAvailable);
    return tables.length;
  };
  useEffect(() => {
    // Check availability of tables from DB when a date and time is selected
    if (selection.time && selection.date) {
      (async _ => {
        let datetime = getDate();
        let res = await fetch("http://localhost:5000/api/availability", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            date: datetime
          })
        });
        res = await res.json();
        // Filter available tables with location and group size criteria
        let tables = res.tables.filter(
          table =>
            (selection.size > 0 ? table.capacity >= selection.size : true) &&
            (selection.location !== "Any Location"
              ? table.location === selection.location
              : true)
        );
        setTotalTables(tables);
      })();
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection.time, selection.date, selection.size, selection.location]);
// Make the reservation if all details are filled out
const reserve = async _ => {
  if (
    (booking.name.length === 0) |
    (booking.phone.length === 0) |
    (booking.email.length === 0)
  ) {
    console.log("Incomplete Details");
    setReservationError(true);
  } else {
    const datetime = getDate();
    let res = await fetch("http://localhost:5000/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...booking,
        date: datetime,
        table: selection.table.id
      })
    });
    res = await res.text();
    console.log("Reserved: " + res);
  }
};
 // Clicking on a table sets the selection state
 const selectTable = (table_name, table_id) => {
  setSelection({
    ...selection,
    table: {
      name: table_name,
      id: table_id
    }
  });
};

// Generate party size dropdown
const getSizes = _ => {
  let newSizes = [];

  for (let i = 1; i < 8; i++) {
    newSizes.push(
      <DropdownItem
        key={i}
        className="booking-dropdown-item"
        onClick={e => {
          let newSel = {
            ...selection,
            table: {
              ...selection.table
            },
            size: i
          };
          setSelection(newSel);
        }}
      >
        {i}
      </DropdownItem>
    );
  }
  return newSizes;
};

// Generate locations dropdown
const getLocations = _ => {
  let newLocations = [];
  locations.forEach(loc => {
    newLocations.push(
      <DropdownItem
        key={loc}
        className="booking-dropdown-item"
        onClick={_ => {
          let newSel = {
            ...selection,
            table: {
              ...selection.table
            },
            location: loc
          };
          setSelection(newSel);
        }}
      >
        {loc}
      </DropdownItem>
    );
  });
  return newLocations;
};

// Generate 
const getTimes = _ => {
  let newTimes = [];
  times.forEach(time => {
    newTimes.push(
      <DropdownItem
        key={time}
        className="booking-dropdown-item"
        onClick={_ => {
          let newSel = {
            ...selection,
            table: {
              ...selection.table
            },
            time: time
          };
          setSelection(newSel);
        }}
      >
        {time}
      </DropdownItem>
    );
  });
  return newTimes;
};

// Generating tables from available tables state
const getTables = _ => {
  console.log("Getting tables");
  if (getEmptyTables() > 0) {
    let tables = [];
    totalTables.forEach(table => {
      if (table.isAvailable) {
        tables.push(
          <Table
            key={table._id}
            id={table._id}
            chairs={table.capacity}
            name={table.name}
            empty
            selectTable={selectTable}
          />
        );
      } else {
        tables.push(
          <Table
            key={table._id}
            id={table._id}
            chairs={table.capacity}
            name={table.name}
            selectTable={selectTable}
          />
        );
      }
    });
    return tables;
  }
};


  return  <div>
  <Row  className="text-center align-items-center rese-cta gx-0">
    <Col>
      <p className="looking-for-rese">
        {!selection.table.id ? "Book a Table" : "Confirm Reservation"}
        <i
          className={
            !selection.table.id
              ? "fas fa-chair rese-slice"
              : "fas fa-clipboard-check rese-slice"
          }
        ></i>
      </p>
      <p className="selected-table">
        {selection.table.id
          ? "You are booking table " + selection.table.name
          : null}
      </p>

      {reservationError ? (
        <p className="reservation-error">
          * Please fill out all of the details.
        </p>
      ) : null}
    </Col>
  </Row>

  {!selection.table.id ? (
    <div id="reservation-stuff">
      <Row  className="text-center align-items-center gx-0">
        <Col xs="12" sm="3">
          <input
            type="date"
            required="required"
            className="booking-dropdown"
            value={selection.date.toISOString().split("T")[0]}
            onChange={e => {
              if (!isNaN(new Date(new Date(e.target.value)))) {
                let newSel = {
                  ...selection,
                  table: {
                    ...selection.table
                  },
                  date: new Date(e.target.value)
                };
                setSelection(newSel);
              } else {
                console.log("Invalid date");
                let newSel = {
                  ...selection,
                  table: {
                    ...selection.table
                  },
                  date: new Date()
                };
                setSelection(newSel);
              }
            }}
          ></input>
        </Col>
        <Col xs="12" sm="3">
          <UncontrolledDropdown>
            <DropdownToggle color="none" caret className="booking-dropdown">
              {selection.time === null ? "Select a Time" : selection.time}
            </DropdownToggle>
            <DropdownMenu right className="booking-dropdown-menu">
              {getTimes()}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col xs="12" sm="3">
          <UncontrolledDropdown>
            <DropdownToggle color="none" caret className="booking-dropdown">
              {selection.location}
            </DropdownToggle>
            <DropdownMenu right className="booking-dropdown-menu">
              {getLocations()}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col xs="12" sm="3">
          <UncontrolledDropdown>
            <DropdownToggle color="none" caret className="booking-dropdown">
              {selection.size === 0
                ? "Select a Party Size"
                : selection.size.toString()}
            </DropdownToggle>
            <DropdownMenu right className="booking-dropdown-menu">
              {getSizes()}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
      </Row>
      <Row  className="tables-display gx-0">
        <Col>
          {getEmptyTables() > 0 ? (
            <p className="available-tables">{getEmptyTables()} available</p>
          ) : null}

          {selection.date && selection.time ? (
            getEmptyTables() > 0 ? (
              <div>
                <div className="table-key">
                  <span className="empty-table"></span> &nbsp; Available
                  &nbsp;&nbsp;
                  <span className="full-table"></span> &nbsp; Unavailable
                  &nbsp;&nbsp;
                </div>
                <Row className="gx-0">{getTables()}</Row>
              </div>
            ) : (
              <p className="table-display-message">No Available Tables</p>
            )
          ) : (
            <p className="table-display-message">
              Please select a date and time for your reservation.
            </p>
          )}
        </Col>
      </Row>
    </div>
  ) : (
    <div id="confirm-reservation-stuff">
      <Row
        
        className="text-center justify-content-center reservation-details-container gx-0"
      >
        <Col xs="12" sm="3" className="reservation-details">
          <Input
            type="text"
            bsSize="lg"
            placeholder="Name"
            className="reservation-input"
            value={booking.name}
            onChange={e => {
              setBooking({
                ...booking,
                name: e.target.value
              });
            }}
          />
        </Col>
        <Col xs="12" sm="3" className="reservation-details">
          <Input
            type="text"
            bsSize="lg"
            placeholder="Phone Number"
            className="reservation-input"
            value={booking.phone}
            onChange={e => {
              setBooking({
                ...booking,
                phone: e.target.value
              });
            }}
          />
        </Col>
        <Col xs="12" sm="3" className="reservation-details">
          <Input
            type="text"
            bsSize="lg"
            placeholder="Email"
            className="reservation-input"
            value={booking.email}
            onChange={e => {
              setBooking({
                ...booking,
                email: e.target.value
              });
            }}
          />
        </Col>
      </Row>
      <Row  className="text-centergx-0 ">
        <Col>
          <Button
            color="none"
            className="custom__button"
            onClick={_ => {
              reserve();
            }}
          >
            Book Now
          </Button>
        </Col>
      </Row>
    </div>
  )}
</div>
};



//modal footer component
Modal.Footer = function ModalFooter(props) {
  return <div className="modal-footer">{props.children}</div>;
};

Modal.Footer.SubmitBtn = function SubmitBtn(props) {
  return (
    <button 
      {...props}
      className="submit-btn"
      type="submit" 
      form="hook-form">
    </button>
  );
};

Modal.Footer.CloseBtn = function CloseBtn(props) {
  const { onModalClose } = useContext(modalContext);
  return (
    <button
      {...props}
      className="close-btn"
      title="close modal"
      onClick={onModalClose}
    />
  );
};