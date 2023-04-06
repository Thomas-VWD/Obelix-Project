function Button ({next, previous}){

    return <>
    <button onClick={next}>Next</button>
    <Button onClick={previous}>Previous</Button>
    </>
}

export default Button