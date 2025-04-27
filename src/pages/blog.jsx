import EditorJS from "@editorjs/editorjs";
import {useEffect, useRef} from "react";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

export default function BlogDashboard() {
    const ref = useRef(null)

    class SimpleImage {
        static get toolbox(){
            return {
                title : 'imagen',
                icon: '\'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
            }
        }
        // eslint-disable-next-line react/prop-types
        constructor({data}) {
            this.data = data;
            this.wrapper = undefined;
        }
        render(){
            this.wrapper = document.createElement('div');
            this.wrapper.classList.add('simple-image');

            if(this.data && this.data.url){
                this._createImage(this.data.url, this.data.caption);
                return this.wrapper
            }

            const input = document.createElement('input');

            this.wrapper.appendChild(input);

            input.placeholder = 'Insertar url de la imagen';
            input.value = this.data && this.data.url ? this.data.url : '';

            input.addEventListener('paste', (event) => {
                this._createImage(event.clipboardData.getData('text/plain'));
            })

            return this.wrapper;
        }

        _createImage(url, captionText){
            const image = document.createElement('img')
            const caption = document.createElement('input')

            image.src = url;
            caption.placeholder = 'Insertar texto de la imagen';
            caption.value = captionText || '';

            this.wrapper.innerHTML = '';
            this.wrapper.appendChild(image);
            this.wrapper.appendChild(caption);
        }

        save(blockContent){

            const caption = blockContent.querySelector('input');
            const image = blockContent.querySelector('img');


            return {
                url: image.src,
                caption: caption.value
            }
        }
        validate(savedData){
           if(!savedData.url.trim()){
               return false;
           }
           return true;
        }
    }


    useEffect(() => {
        if (!ref.current) {
            ref.current = new EditorJS({
                holder: 'editorjs',
                autofocus: true,
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: ['link']
                    },
                    list: {
                        class: List,
                        inlineToolbar: true
                    },
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: true,
                    },
                    image: SimpleImage,
                }
            })
        }

        const saveData = document.getElementById('saveData');
        const output = document.getElementById('output');

        saveData.addEventListener('click', ()=>{
            ref.current.save().then( savedData => {
                output.innerHTML = JSON.stringify(savedData, null, 2);
            })
        })

        return ()=>{
            if(ref.current?.destroy){
                ref.current.destroy();
                ref.current = null;
            }
        }
    }, [])
    return (
        <>
            <section id={'editorjs'} className={'text-whiteRob text-handjet-regular'}>

                <button
                    id={'saveData'}
                >guardar</button>
            </section>
            <pre
            className={'text-whiteRob text-handjet-regular'}
                id={'output'}></pre>
        </>
    )
}
