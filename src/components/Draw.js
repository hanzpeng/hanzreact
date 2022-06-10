import { useEffect, useRef, useState} from "react";

const Draw = (props) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing,setIsDrawing] = useState(false);
    useEffect(
        () => {
            const canvas = canvasRef.current;
            canvas.width = window.innerWidth*2;
            canvas.height = window.innerHeight*2;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
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

    return (

        <div>
            <h1>Draw</h1>
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
