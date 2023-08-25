import "./formaStyles.css";

import React from 'react'

const Forms = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your massage here"/>
            <butto className="btn">Submit</butto>
        </form>      
    </div>
  )
}

export default Forms
