import React from 'react'

export default function CustomButton({ type, link, text, target }) {
    const target_value = target == "no" ? "": "_blank"
    
    if (type == "one") {
        return (
            <div>
                <a href={link} target={target_value} className="btn btn-primary">{text}</a>
            </div>
        )
    }
    else if (type == "two") {
        return (
            <div>
                <a href={link} target={target_value} className="btn">{text}</a>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}
