import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Playerlist.css';

const Playerlist = (props) => {
    const { name, image, price, phone } = props.player;
    const handleAddBtn = props.handleAddBtn;
    const [mobile, setMobile] = useState('');
    const setPhoneNumber = () => setMobile(phone);
    const btnstyle ={
        backgroundColor:'#DBE7F2',
        padding:'3px',
        marginBottom:'10px',
        border:'none',

    }
    return (
        <div>
            <div className="card-add-friend">
                <div className="card-img">
                    <img className="image" src={image} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4>{name}</h4>
                        <p>Phone : {mobile}</p>
                        <p style={{ color: "#65676B" }}>Price : ${price}</p>
                        <button style={btnstyle} onClick={setPhoneNumber}>Show phone Number</button>

                    </div>
                    <div className="btn">
                        <button onClick={() => handleAddBtn(props.player)} className="button-desgin">
                            <FontAwesomeIcon className="icon" icon={faUserPlus} />Add Player</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Playerlist;