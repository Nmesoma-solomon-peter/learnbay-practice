import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from './firestore'
import { documentId } from 'firebase/firestore';

function Header() {
    const navigate = useNavigate()
    const [contacts, setContacts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // logic to read all info from the database
        db.collection("contact-app").onSnapshot(function (snapshot) {
            setContacts(snapshot.docs.map(function (i) {
                return { documentId: i.id, documentData: i.data() };
            }))
        })
    }, [])

    // function to read filtered info
    function collectFilterData(event) {
        setFilteredData(
            contacts.filter(function (i) {
                if (i.documentData.name.toLowerCase().includes(event.target.value.toLowerCase())) {
                    return i.documentData;
                }
            }));
    }

    return (
        <div>
            <input type="text" onChange={collectFilterData} />
            <button onClick={() => navigate("/add")}>Create New Contact</button>
            {
                filteredData.length == 0 ?
                    <div>{contacts.map(function (i) {
                        return <div>
                            <h1>{i.documentData.name}</h1>
                            <h2>{i.documentData.number}</h2>
                            <h2>{i.documentData.email}</h2>
                            <button onClick={() => {
                                db.collection("contact-app").doc(i.documentId).delete()
                                alert("document deleted successfully");
                            }}>Delete</button>
                        </div>
                    })
                    } </div>
                    : <div>{filteredData.map(function (i) {
                        return <div key={i.documentData.name}>
                            <h1>{i.documentData.name}</h1>
                            <h2>{i.documentData.number}</h2>
                            <h2>{i.documentData.email}</h2>
                            <button onClick={() => {
                                db.collection("contact-app").doc(i.documentId).delete()
                                alert("document deleted successfully");
                            }}>Delete</button>
                        </div>
                    }) 
                    }</div>



        }

        </div>
    )
}

export default Header