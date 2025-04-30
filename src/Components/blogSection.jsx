import arrow from '../assets/imgs/arrow.png'
import {useEffect, useState} from "react";
export default function BlogSection(){

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect( ()=>{
        const fetchData = async () => {
           try {
               const response = await fetch('/api/route', {
                   method: 'GET'
               });
               console.log(response, '1');
               const text = await response.text();
               console.log(text, '2');

               const data = JSON.parse(text);
               console.log(data, '3');
               setBlogPosts(data);

               } catch (error) {
                   console.log(error, '4');
               }
        }
        fetchData()
    }, [])

    return(
        <>
            <section className={' my-32 '}>

                <h3 className={'text-whiteRob text-3xl text-start text-handjet-bold my-4'}>
                    / Blog
                </h3>
                {blogPosts.map(post => (
                    <div key={post.id}
                         className={'flex justify-between gap-4'}>
                        <article className={'border-2 border-whiteRob rounded-lg p-4 w-1/3'}>
                            <h3 className={'text-start text-whiteRob capitalize text-handjet-regular text-2xl'}>
                                {post.title}
                            </h3>
                            <p className={'text-whiteRob text-handjet-regular text-start mt-4'}>
                                {post.blocks.data.text}
                            </p>
                            <div className={'flex justify-start mt-4'}>
                                <h4 className={'text-sm h-fit text-center align-baseline bg-whiteRob px-12 py-1 text-handjet-regular rounded-full'}>Leer
                                    más...</h4>
                                <img
                                    className={'ms-2'}
                                    src={arrow} alt=""/>
                            </div>

                        </article>
                    </div>
                ))}

            </section>
        </>
    )
}