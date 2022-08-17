import React from "react";
import { BsTrash, BsExclamationCircle } from "react-icons/bs";
import './style.css'
import './style-priority.css'

function Notes({data}) {
    return (
        <>

            <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
                <div>
                    <strong>{data.title.toUpperCase()}</strong>
                    <div>
                        <BsTrash size="20"/>
                    </div>
                </div>
                <textarea defaultValue={data.notes}/> 

                <span>
                    <BsExclamationCircle size="20"/>
                </span>
            </li>

        </>
    )
}


export default Notes;