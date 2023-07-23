import React from "react";
import './directory.style.css'
import MenuItem from "../menu-item/MenuItem.component";

class Directory extends React.Component{

    constructor(){
        super();

        this.state={
            section:[
                {
                    title:"HATS",
                    imageUrl:"https://i.ibb.co/cvpntL1/hats.png",
                    id:1
                },
                {
                    title:"Jackets",
                    imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",
                    id:2
                },
                {
                    title:"Sneakers",
                    imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",
                    id:3
                },
                {
                    title:"Womens",
                    imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",
                    size:'large',
                    id:4
                },
                {
                    title:"Mens",
                    imageUrl:"https://i.ibb.co/R70vBrQ/mens.png",
                    size:'large',
                    id:5
                },
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.section.map((section)=>{
                        return(<MenuItem size={section.size} key={section.id} imageUrl={section.imageUrl} title={section.title}/>)
                    })
                }
            </div>
        );
    }
}

export default Directory;