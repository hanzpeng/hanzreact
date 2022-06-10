const Draw = (props) => {
    return (
        <div>
            <h1>Draw</h1>
            <hr></hr>
            <canvas id="canvas"></canvas>
        </div>
    )
}

// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// canvas.height = 800;
// canvas.width = 800;
// let painting = false;
// function startPosition(e){
//   painting = true;
//   ctx.beginPath();
// }
// function finishedPosition(){
//   painting = false;
//   ctx.closePath();
// }
// function draw(e){
//   if(!painting) return;
//   ctx.lineWidth = 2;
//   ctx.lineCap = "round";
//   ctx.lineTo(e.clientX, e.clientY);
//   ctx.stroke();
// }
// canvas.addEventListener("mousedown", startPosition);
// canvas.addEventListener("mouseup", finishedPosition);
// canvas.addEventListener("mousemove", draw);    


export default Draw