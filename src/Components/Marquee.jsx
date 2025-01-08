import Marquee from 'react-fast-marquee'

export const TextMarquee = () => {

    let index = 0

    let keywords = ["DISEÑO MULTIMEDIA", "MARKETING", "DESARROLLO WEB", "UX/UI", "SEO", "BRANDING", "E-COMMERCE", "ESTRATEGIA", "CREATIVIDAD"]
    let colors = ["bg-redRob", "bg-blueRob", "bg-brownRob", "bg-yellowRob", "bg-[#C5A1F0]", "bg-[#C5F1FF]", "bg-[#C5A1FF]", "bg-[#C5A1FF]", "bg-[#C5A1FF]"]


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
                    {keywords.map((keyword) => (
                            <div key={keyword}
                                 className={`text-nowrap text-justify border rounded-lg p-2 px-10 text-ms font-light m-2`}>
                                {keyword.toLowerCase()}
                            </div>

                        )
                    )}

                </div>
            </Marquee>
        </>
    )
}