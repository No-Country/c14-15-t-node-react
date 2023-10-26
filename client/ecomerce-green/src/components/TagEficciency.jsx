import "./../styles/tagEfficiency.css";
const TagEfficiency =({ letter })=>{
    const colors={
        "A":"#15A14C",
        "B":"#8DBC40",
        "C":"#C0D036",
        "D":"#FDEA16",
        "E":"#F9B914",
        "F":"#EA7327",
        "G":"#E32430",
    };
    const color=colors[letter];
    return <span className="item__efficiency" style={{backgroundColor: `${color}`}}>
        {letter}
    </span>
    
}
export default TagEfficiency;