import React from "react";
import classes from './Store.module.css'


const Store= ()=>{
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

    return (
        <div className={classes.container}>
        {productsArr.map((item)=>(
            <div key={item.album} className={classes.item}>
                <h2 className={classes.heading}>{item.album}</h2>
                <img src={item.imageUrl}  alt=""/>
                <p className={classes.price}>${item.price}.00</p>
                <button className={classes.button}>Add to Cart</button>

            </div>

        ))}

        </div>

    )

}

export default Store;