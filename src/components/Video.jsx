import Video from 'next-video';
import vid from '../../videos/shaker.mp4';

export default function VideoComponent() {
  return <div className=' w-fit h-full py-36 pb-72'><Video src={vid} className={" w-fit h-64 mx-auto"} /></div>;
}