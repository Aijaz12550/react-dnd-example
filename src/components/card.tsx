import { FC, memo } from "react"
import { useDrag } from "react-dnd";

export const Card: FC<any> = (props) => {
    const [collected, drag, dragPreview] = useDrag(() => ({
        type:"CARD",
        item: { id:"test" }
      }))
    return (
        <div ref={drag} className="card">
           {props.title}
        </div>
    )
}
export default memo(Card)