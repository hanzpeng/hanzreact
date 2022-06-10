import { useEffect, useRef, useState} from "react";

const Draw = (props) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing,setIsDrawing] = useState(false);
    useEffect(
        () => {
            const canvas = canvasRef.current;
            let canvas_style_width = window.innerWidth;
            let canvas_style_height = window.innerHeight;
            canvas_style_width = 1000;
            canvas_style_height = 1000;
            canvas.width = canvas_style_width*2;
            canvas.height = canvas_style_height*2;
            canvas.style.width = `${canvas_style_width}px`;
            canvas.style.height = `${canvas_style_height}px`;
            canvas.style.border = "2px solid blue";
            const context = canvas.getContext("2d");
            context.scale(2,2);
            context.lineWidth = 5;
            context.lineCap = "round";
            context.strokeStyle = "black";
            contextRef.current = context;           
        }, []
    )
    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX,offsetY);
      setIsDrawing(true);
    }

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    const draw = ({nativeEvent}) => {
        const { offsetX, offsetY } = nativeEvent;      
        if (!isDrawing) {
            return
        };
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }

    const saveDrawing = () => {
        const canvas = canvasRef.current;
        // save canvas image as data url (png format by default)
        const dataURL = canvas.toDataURL();
        // set canvasImg image src to dataURL
        document.getElementById('canvasImg').src = dataURL;
    }

    return (

        <div>
            <h1>Draw below</h1>
            <button onClick={saveDrawing}>Save</button>
            <div style={{margin: 5}}>
            <img id="canvasImg" alt="Right click to save me!" style={{width: 100, height:100, border: '2px solid blue'}}></img>
            </div>
            <hr></hr>
            <canvas id="canvas"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref = {canvasRef}
            ></canvas>
        </div>
    )
}

export default Draw
