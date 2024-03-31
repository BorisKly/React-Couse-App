
function CostDate(props) { 
 
    const month = props.date.toLocaleString("en-EN", { month: "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-En", {day: "2-digit"})
   
    return (
        <div className="cost-date">
            <div>{month}</div>
             <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default CostDate;