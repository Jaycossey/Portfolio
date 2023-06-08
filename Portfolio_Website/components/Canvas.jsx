import PropTypes from 'prop-types'

const Canvas = ( {draw, width, height}) => {
    const canvas = React.useRef();

    React.useEffect(() => {
        const context = canvas.current.getContext('2d');
        draw(context);
    });

    return (
        <canvas ref={canvas} width={width} height={height} />
    );
};

Canvas.propTypes = {
    draw: PropTypes.func.isRequired,
    width: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
};

export default Canvas;

/* Right, so my next steps are to check using canvas against react hooks, read how this code works in assigning a canvas. Then what I need to do is add the draw (player animate)
functions. create the animation loop by using contect.draw/clear etc then I can assign the spritesheets that way. 
this is a reusable canvas component that can be resized and referenced. the draw={reference} is the function that is called on it. so I can simply create a new animation for each of 
these canvases.  */