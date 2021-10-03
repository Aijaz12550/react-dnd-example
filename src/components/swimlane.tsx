import { FC, memo } from "react";
import Card from "./card";
import { useDrop } from "react-dnd";
import { nanoid } from 'nanoid'

const Swimlane: FC<any> = (props) => {

    const [collectedProps, drop] = useDrop({
        accept:"CARD"
    })

    console.log("collectedProps",collectedProps)

    return(
        <div ref={drop} className="swimlane" >
        <h2>{props.title}</h2>
        <div className="tickets-container">
            {
                props.tickets.map((ticket:any,index:any)=>{
                    return (
                        <Card key={nanoid()} title={ticket.tname} />
                    )
                })
            }

        </div>
    </div>
    )
}

export default memo(Swimlane);