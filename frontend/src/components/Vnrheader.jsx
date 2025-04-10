// import './styles.css';
import image from '../assets/image.png';

function Vnrheader(){
    return(
        <div className="shadow-lg h-auto justify-center fixed top-0 left-0 w-full bg-gradient-to-r from-white to-gray-50 z-50 px-5 py-2">
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <div className='flex items-center'>
                    <img className="w-12 h-12 mx-3" src={image} alt="VNR Logo" />
                    <p className="text-red-600 text-3xl font-bold tracking-wide">VNRVJIET</p>
                </div>
                <h3 className="text-gray-700 text-xl font-medium">Data extraction from Certificates</h3>
            </div>
        </div>
    )
}

export default Vnrheader;