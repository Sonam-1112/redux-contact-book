import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch} from 'react-redux'
import Contact from './Contact';
import '../../styles/App.scss';
import { clearAllContacts, selectAllContact,deleteAllContacts } from '../../actions/contactAction';

const Contacts = () => {
    const [selectAll,setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contacts.contacts);
    const dispatch = useDispatch();
    const selectedContacts = useSelector((state) => state.contacts.selectedContacts);

    useEffect(()=>{
        if(selectAll){
            dispatch(selectAllContact(contacts.map(contact=>contact.id)));
        }
        else{
            dispatch(clearAllContacts());
        }
    },[selectAll]);

    return (
        <div> 
            {
                selectedContacts.length >0 ? (
                    <button className="btn btn-danger mb-3" onClick={()=>dispatch(deleteAllContacts())}>Delete All</button>
                ):null
            }
            <table className="table shadow">
                <thead className="bg-danger text-white">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input id="selectAll" value={selectAll} type="checkbox" className="custom-control-input" onClick={()=> 
                                    setSelectAll(!selectAll)} />
                                <label htmlFor="selectAll" className="custom-control-label" />
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Contact contact={contact} key={contact.id} selectAll={selectAll}/>
                    )
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
