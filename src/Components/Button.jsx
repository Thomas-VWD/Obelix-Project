function Button({ next, previous }) {

    return <>
        <button onClick={next}>Next</button>
        <button onClick={previous}>Previous</button>
    </>
}

export default Button