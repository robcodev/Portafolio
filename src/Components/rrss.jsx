import githubIcon from "../assets/imgs/gitHub.png";
import linkedinIcon from "../assets/imgs/linkedIn.png";
import instagramIcon from "../assets/imgs/instagram.png";

export default function Rrss() {

    return (
        <>

            <div className={'grid grid-cols-3 gap-2 my-8'}>
                <a className={'flex gap-1 w-full rounded-full justify-center items-center border-2 border-whiteRob px-2 py-1 '}
                   href="#">
                    <img
                        src={githubIcon}
                        alt={''}
                        className={'h-5'}/>
                    <span className={'uppercase text-whiteRob text-lg'}>github</span>
                </a>

                <a className={'flex w-full border-2 gap-1 border-whiteRob rounded-full justify-center items-center  px-2 py-1'}
                   href="#">
                    <img
                        src={linkedinIcon}
                        alt={''}
                        className={' h-4'}/>
                    <span className={'uppercase text-whiteRob text-lg'}>linkedin</span>
                </a>
                <a className={'flex w-full gap-1 rounded-full justify-center items-center border-2 border-whiteRob px-2 py-1'}
                   href="#">
                    <img
                        src={instagramIcon}
                        alt={''}
                        className={'h-4'}/>
                    <span className={'uppercase text-whiteRob text-lg'}>instagram</span>
                </a>
            </div>
        </>
    )
}