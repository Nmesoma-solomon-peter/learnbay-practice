import React from 'react'
import { useSearchParams } from 'react-router-dom'

const contactDetails = [{
    name: "Nmesoma",
    address: "kigali"
}, {
    name: "techno",
    address: "very good"
},
{
    name: "Infinix",
    address: "very very Good"
}
]

function Contact() {
    const [info, setInfo] = useSearchParams()
    let contactName = info.get("name");
    let contactAddress = info.get("address");

    const validate = contactDetails.filter((i) => {
        if(i.name.toLowerCase() == contactName && i.address.toLowerCase() == contactAddress) {
            return i;
        }
    })


    if (validate.length == 0) {
        return (
            <div>
                No contact found
            </div>
        )
    } else {
        return (
            <div>
                {
                    validate.map((i) => {
                        return (
                            <div>
                                <h1>{i.name}</h1>
                                <p>{i.address}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default Contact