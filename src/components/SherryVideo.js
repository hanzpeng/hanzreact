import sherry from './../images/IMG_6502.jpg';
import sherryvideo from './../videos/video1.mp4';

const SherryVideo = (props) => {
    return (
        <div>
            <h1>Sherry Video</h1>
            <img src = {sherry} width="300" alt="Sherry" />
            <hr></hr>
            <video src={sherryvideo} autoPlay controls poster='sherry' width="800" style={{padding: 20, margin: 20}}></video>

        </div>

    )
}

export default SherryVideo