import Table from 'react-bootstrap/Table'

import styles from "./Modal.module.css";
import React, { useState } from 'react';
import Modal from '../Modal';






const Admin = () => {
 
  const [showModal, setState] = useState(false)

  var example = [{title: "firstObj", price: "15$", description: "great thing to buy",imgUrl: "www.google.com" }, {title: "secondObj", price: "105$", description: "greater thing to buy",imgUrl: "www.google.com" }, {title: "thirdObj", price: "15$", description: "great thing to buy",imgUrl: "www.google.com" }, {title: "fourthObj", price: "105$", description: "greater thing to buy",imgUrl: "www.google.com" }]
  var headers = ["Title", "Price", "Options"]
 
    return <>
    <Modal show = {showModal} ></Modal>
    <main>
        <button className={styles.primaryBtn} onClick={() =>{setState(!showModal)}}>
          Open Modal
        </button>
      </main>
    </>
  };

  
  export  default Admin;
  