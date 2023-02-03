import mainPic from '../../img/image-web-3-desktop.jpg';
import mainPicMobile from '../../img/image-web-3-mobile.jpg';
import './picHome.scss';

const PicHome = () => {
    return (
        <div className='pic-home'>
            <img loading='lazy' className='pic-home-desktop' src={mainPic} alt="" />
            <img loading='lazy' className='pic-home-mobile' src={mainPicMobile} alt="" />
        </div>
    )
}

export default PicHome
