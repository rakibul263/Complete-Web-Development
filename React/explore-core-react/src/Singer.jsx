export default function Singer({singer}){
    return (
        <div className="singer">
            <h4>Name : {singer.name}</h4>
            <h4>Age : {singer.age}</h4>
        </div>
    )
}