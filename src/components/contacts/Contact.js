import React from 'react'
import Avatar from 'react-avatar';
import '../../styles/App.scss';
import {deleteContact} from '../../actions/contactAction'
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

const Contact = ({contact,selectAll}) => {
    const dispatch = useDispatch();
    const  {name,phone,email,id} = contact;
    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label" />
                </div>
            </th>
            <td>
                <Avatar name={name} size="45" round={true}/>{name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}><span className="material-icons px-2">edit</span></Link>
                <Link onClick={()=>dispatch(deleteContact(id))}><span className="material-icons text-danger">remove_circle</span></Link>
            </td>
        </tr>
    )
}

export default Contact
