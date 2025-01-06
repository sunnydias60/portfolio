// import React from 'react'
import React, { useState } from "react";
import './card.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import CustomButton from '../button/CustomButton'



export const Card = ({ type, heading, icon, points_items, date, position, company, location, button_text, link, image }) => {

    const points = points_items;

    const [isFlipped, setIsFlipped] = useState(false);
    // Toggle flip on hover
    const toggleFlip = () => setIsFlipped(!isFlipped);

    if (type === "one") {
        return (

            <article className="card__one">
                {React.createElement(icon, { className: "card__one-icon" })}
                <h5>{heading}</h5>
                <div className="card__one-text">
                    <small>
                        <ul>
                            {points.map(point => (
                                <li>{point}</li>
                            ))}
                        </ul>

                    </small>
                </div>

            </article>

        )
    }
    else if (type === "two") {
        return (
            <article className='card__two'>
                <div className="card__two-date">
                    <small>{date}</small>
                </div>
                <div className="card__two-position">
                    <h4>{position}</h4>
                </div>
                <div className="card__two-company">
                    <h4>{company}<small> | {location}</small></h4>

                </div>
                <div className="card__two-text">
                    <small>
                        <ul className='text-ul'>
                            {points.map(point => (
                                <li>{point}</li>
                            ))}
                        </ul>
                    </small>
                </div>
            </article>
        )
    }
    else if (type === "three") {
        return (
            <article className="card__three">
                <div className="card__three-head">
                    <h3>{heading}</h3>
                </div>

                <ul className="card__three-list">
                    {points.map(point => (
                        <li> <BsPatchCheckFill className='card__three-list-icon' /> {point}</li>
                    ))}

                </ul>
            </article>
        )
    }
    else if (type === "four") {
        return (
            <article className="card__four">
                <div className="card__four-image">
                    <img src={image} alt={heading} />
                </div>
                <h3>{heading}</h3>
                <div className="card__four-cta">
                    <CustomButton type="one" text={button_text} link={link} />
                </div>
            </article>
        )
    }
    else if (type === "five") {
        return (
            <article className="card__five">
            <div
                className={`flip-card-container ${isFlipped ? "flipped" : ""}`}
                onMouseEnter={toggleFlip}
                onMouseLeave={toggleFlip}
            >
            <div className="flip-card">
                {/* Front of the card */}
                <div className="flip-card-front">
                    <h2>{company}</h2>
                    <p>Role: {position}</p>
                    <p>Duration: {date}</p>
                </div>
                {/* Back of the card */}
                <div className="flip-card-back">
                    <ul>
                        {points_items.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
            </article>
        )
    }

}
