const Showdata = (props) => {
    return (
        <p>
            {props.children}<br/>
            User name: {props.name}<br/>
            Age: {props.age}
        </p>
    )

}

export default Showdata;