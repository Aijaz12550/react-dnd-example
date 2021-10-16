import { FC, memo } from "react"
import { useDrag } from "react-dnd";

export const Card: FC<any> = (props) => {
    const [, drag ] = useDrag(() => ({
        type:"CARD",
        item: { id:props.ticket_id, swimlane_id: props.swimlane_id, tname:props.title }
      }))
    return (
        <div ref={drag} className="card">
           {props.title}
        </div>
    )
}
export default memo(Card)