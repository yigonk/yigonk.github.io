import React,{useState} from "react";

const Contact=()=> {
  const [form,setForm]=useState({name:"",email:"",message:""});
  const onChange=(e)=> {setForm({...form,[e.target.name]:e.target.value});};
  const onSubmit=(e)=> {e.preventDefault();alert("Message captured locally. Wire backend later.");};

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email • LinkedIn • Phone (replace with your details)</p>
      <form className="form" onSubmit={onSubmit}>
        <input className="input" type="text" name="name" placeholder="Name" value={form.name} onChange={onChange} required/>
        <input className="input" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required/>
        <textarea className="textarea" name="message" placeholder="Message" value={form.message} onChange={onChange} required/>
        <button className="btn btn--primary" type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
