import React from 'react'
import "../styles/Contact.css"
function Contact() {
    
  return (
    <div className='contact'>
<h1 className='center' style={{textAlign: "center" , fontFamily : "serif"} }>Feel Free to Contact Me !!</h1>
<div className='contact_box'>
    <form action='https://formspree.io/f/xdovdvdq' method ="POST"
    className='contact_input'>
        <label>NAME</label>
        <input type="text" name="username" required />
        <label>EMAIL</label>
        <input type="text" name="email"  required />
        <label>MESSAGE</label>
        <textarea name="message"  cols='30' rows ="6"  required />
<input type="submit" value="Contact"  />
       
        
    </form>
</div>

    </div>
  )
}

export default Contact