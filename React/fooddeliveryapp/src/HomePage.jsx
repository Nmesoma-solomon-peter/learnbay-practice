import React, { useEffect, useState } from 'react'
import './Homepage.css'
import { foodDetails } from './utils/heroSectionImg'
import { foods } from './utils/foods'
import { useDispatch } from 'react-redux'
import { AddFood } from './Redux'

function HomePage() {
    const [selectedFood, setSelectedFood] = useState("");
    const [cart, setCart]= useState([]);
    const dispatch = useDispatch();

    function callFoodCategory(event) {
        setSelectedFood(event);
    }

    function increase(providedFoodDetails){
        setCart(function(previousCartItems){
            // logic to find if item is in cart previously or not
            const isInCart = previousCartItems.find((i)=>providedFoodDetails.id == i.id);
        if(isInCart){
            return previousCartItems.map((i)=>{
                return i.id == providedFoodDetails.id ? { ...i,quantity:i.quantity +1} : i
            })
        }else{
            return [...previousCartItems , {...providedFoodDetails, quantity:1}]
        }
        })
    }
    function decrease(providedFoodDetails){
        setCart(function(previousCartItems){
            // logic to find if item is in cart previously or not
            const isInCart = previousCartItems.find((i)=>providedFoodDetails.id == i.id);
        if(isInCart){
            return previousCartItems.map((i)=>{
                return i.id == providedFoodDetails.id ? { ...i,quantity:i.quantity - 1} : i
            })
        }
        })
    }

    useEffect(()=>{
        dispatch(AddFood(cart))
    },[cart])
    

    

    return (
        <>
            <div className='hero'>Hero</div>

            <div className='heroFoodContainer'>
                {
                    foodDetails.map((i) => {
                        return <div key={i.foodName} onClick={() => callFoodCategory(i.foodName)}>
                            <img src={i.foodUrl} alt={i.foodName} id='heroFood' className={selectedFood.includes(i.foodName) ? "selected" : " "} />
                            <h3 className='heroFoodName'>{i.foodName}</h3>
                        </div>
                    })
                }
            </div>

            {/* food list */}
            <div className='foodContainer'>
                {
                    selectedFood ? foods.filter((food) => food.name.includes(selectedFood)).map((food) => {
                        return <div key={food.id} className='food_div'>
                            <img src={food.imageSrc} alt={food.imageAlt} className='food_img' />
                            <h2 className='food_name'>{food.name}</h2>
                            <div className='food_outer_div'>
                                    <h5 className='food_price'>Rwf {food.price}</h5>
                                    <div className='plus_minus_div'>
                                        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_960_720.png" alt="plus Image" className='plus_minus'  onClick={()=>increase(food)}/>

                                        <img src="https://as1.ftcdn.net/v2/jpg/01/44/94/30/1000_F_144943043_JgBVkNVFoPYf228zqRYW6UFBuMJPS4Ub.jpg" alt="minus image" className='plus_minus' onClick={()=>decrease(food)}/>
                                        {
                                            cart.map((i)=>{
                                                return i.name === food.name ? <span className='quantity'>{i.quantity}</span>:""
                                            })
                                        }  
                                    </div>
                                </div>
                        </div>
                    }
                    ) :
                        foods.map((food) => {
                            return <div key={food.id} className='food_div'>
                                <img src={food.imageSrc} alt={food.imageAlt} className='food_img' />
                                <h2 className='food_name'>{food.name}</h2>
                                <div className='food_outer_div'>
                                    <h5 className='food_price'>Rwf {food.price}</h5>
                                    <div className='plus_minus_div'>
                                        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_960_720.png" alt="plus Image" className='plus_minus'  onClick={()=>increase(food)}/>

                                        {
                                            cart.map((i)=>{
                                                return i.name === food.name ? <span className='quantity'>{i.quantity}</span>:""
                                            })
                                        }<img src="https://as1.ftcdn.net/v2/jpg/01/44/94/30/1000_F_144943043_JgBVkNVFoPYf228zqRYW6UFBuMJPS4Ub.jpg" alt="minus image" className='plus_minus'  onClick={()=>decrease(food)} />
                                    </div>
                                </div>
                            </div>
                        })

                }
            </div>
        </>
    )
}

export default HomePage