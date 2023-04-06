
function Hero({ name, imgSrc, desc }) {
    return (
        <div>
        <h1 className ="title">{name}</h1>
        <img src={imgSrc}  className ="img"/>
        <p className ="p">{desc}</p>
        <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Hero