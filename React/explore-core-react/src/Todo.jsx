/* export default function Todo({learn, isDone}){
    if(isDone === true){
        return(
            <li>Done: {learn}</li>
        )
    }
    else{
        return (
            <li>Do Now : {learn}</li>
        )
    }
} */

/* export default function Todo({learn, isDone}){
    return isDone ? <li>Done: {learn}</li> : <li>Pandding : {learn}</li>
} */

export default function Todo({learn, isDone}){
    return isDone || <li>Pandding: {learn}</li>
}