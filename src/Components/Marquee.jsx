import Marquee from 'react-fast-marquee'

export const TextMarquee = () => {


    return (
        <>
            <Marquee
                gradient={true}
                gradientColor={'#FAF7EB'}
                gradientWidth={300}
                speed={25}

            >
                <div className="marquee mb-28 flex">
                    {/*<motion.img*/}
                    {/*    src={gato}*/}
                    {/*    alt=""*/}
                    {/*    className={'h-8 px-20'}*/}
                    {/*    animate={{*/}
                    {/*        rotate: 360,*/}
                    {/*        transition: {duration: 100},*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <h3 className={' text-nowrap text-justify'}>
                        DISEÑO MULTIMEDIA - ESTRATEGIAS DE MARKETING - DESARROLLO WEB - UX/UI - SEO - BRANDING -
                        E-COMMERCE -&nbsp;
                    </h3>
                    <h3 className={' text-nowrap text-justify'}>
                        DISEÑO MULTIMEDIA - ESTRATEGIAS DE MARKETING - DESARROLLO WEB - UX/UI - SEO - BRANDING -
                        E-COMMERCE -&nbsp;
                    </h3>

                </div>
            </Marquee>
        </>
    )
}