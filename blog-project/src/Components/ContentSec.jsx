const ContentSec = () => {
    return (
        <section
            className="px-4 max-w-screen-xl text-center lg:px-12">
            <div
                className={''}>
                <h2
                    className="mb-4 text-xl tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl ">
                    Diseñador multimedia y desarrollador full stack.
                </h2>
                <p
                    className="text-md font-normal text-gray-500 lg:text-lg text-blackRob mb-10">
                    Combino creatividad y tecnología para desarrollar soluciones digitales efectivas, desde el diseño
                    hasta
                    la implementación.
                </p>
            </div>
            <div className={'grid grid-cols-4 gap-4 *:rounded-lg'}>
                <figure className={'bg-redRob h-44'}></figure>
                <figure className={'bg-redRob h-44'}></figure>
                <figure className={'bg-redRob h-44 col-span-2'}></figure>

                <figure className={'bg-redRob h-44'}></figure>
                <figure className={'bg-redRob h-44 col-span-2'}></figure>
                <figure className={'bg-redRob h-44'}></figure>

            </div>
        </section>
    )
};
export default ContentSec