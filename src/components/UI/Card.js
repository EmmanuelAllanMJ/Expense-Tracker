import './Card.css'

function Card(props){
    //To also include other classes with the Card class we use this
    //whitespace is important
    const classes = 'card ' + props.className;
    //Children is a reserved word- this is the content between opening and closing component 
    return <div className={classes}>{props.children}</div>
}

export default Card