import React from 'react'
import { useParams } from 'react-router-dom'

const mobileDetails = [{
    name: "nokia",
    cost: "5000",
    quality: "Good"
}, {
    name: "Techno",
    cost: 2000,
    quality: "very Good"
},
{
    name: "Infinix",
    cost: 5000,
    quality: "very very Good"
}
]

function Mobiles() {
    const { brand, cost } = useParams();
    const avialable = mobileDetails.filter((i) => {
        if (i.name.toLowerCase() == brand && i.cost == cost) {
            return i
        }
    })
    {
        if (avialable.length == 0) {
            return (
                <h1>Unavialable</h1>
            )
        } else {
            return (
                <div>
                    {
                        avialable.map((i) => {
                           return <div>
                                <h1>{i.name}</h1>
                                <p>{i.cost}</p>
                                <p>{i.quality}</p>
                            </div>
                        })
                    }
                </div>
            )
        }
    }
}

export default Mobiles