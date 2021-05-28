import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { getContact,updateContact } from '../../actions/contactAction';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const EditContact = () => {
    let {id} = useParams();
    let history = useHistory()
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contacts.contact)
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");

    const onUpdateContact = e =>{
        e.preventDefault();
        const update_contact =Object.assign(contact,{name:name,phone:phone,email:email})      //use for overwriting to same id
        dispatch(updateContact(update_contact));
        history.push("/");
    }

    useEffect(()=>{
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id))
    },[contact]);

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                <h4>Edit Contact</h4>
            </div>            
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group py-2">
                        <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group py-2">
                        <input type="text" className="form-control" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group py-2">
                        <input type="text" className="form-control" placeholder="Enter your e-mail address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary my-2" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
