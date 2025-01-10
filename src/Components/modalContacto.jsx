
export default function ModalContacto({open, onClose, children}){


    return (

       <section id="modalFondo" className="modalFondo">
           {/*backdrop*/}
           <div onClick={onClose}
                className={`fixed inset-0 z-10 flex justify-center items-center transition-colors duration-700 ${open ? 'visible bg-whiteRob' : 'invisible'}`}>

               {/*Modal*/}

               <div id="modalContent"
                    onClick={(e)=> e.stopPropagation()}
                    className={`w-5/6 h-5/6 bg-whiteRob grid grid-cols-2 border-4 gap-8 border-blackRob rounded-lg p-10 ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                   <div className={'p-4'}>
                       <div>
                           <h3 className={'text-start text-redRob text-2xl'}>conversemos</h3>
                           <p className={'font-mono text-start text-blackRob'}>Llámame o envíame un whatsapp:</p>
                           <h5 className={'font-mono font-bold text-start'}>+569 7531 5683</h5>
                       </div>
                       <div>
                           <h3 className={'text-start text-redRob text-2xl'}>escríbeme</h3>
                           <p className={'font-mono text-start text-blackRob'}>Si no te gusta conversar:</p>
                           <h5 className={'font-mono font-bold text-start'}>ranireto@gmail.com</h5>
                       </div>
                       <div>
                           <h3 className={'text-start text-redRob text-2xl'}>curriculum</h3>
                           <p className={'font-mono text-start text-blackRob'}>Si </p>
                           <a href="">
                           <h5 className={'font-mono font-bold text-start uppercase'}>descargar</h5>
                           </a>
                       </div>
                   </div>


                   <div className={'w-full bg-blueRob rounded-xl p-10'}>
                       <h1 className={'text-7xl text-[#B5C7FF] text-start'}>algún texto para el contacto</h1>
                       <p className={'font-mono text-start mb-8'}>Cuéntame un poco de qué se trata</p>

                       <form>
                       <label>
                               <input className={'text-start font-mono bg-blueRob border-b-2 border-b-[#B5C7FF] p-4 placeholder:text-whiteRob placeholder:text-xs w-full text-whiteRob font-bold focus:bg-[#B5C7FF] focus:text-blackRob focus:rounded-lg focus:placeholder:text-blackRob'} type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                           </label>
                           <label>
                               <input className={'text-start font-mono bg-blueRob border-b-2 border-b-[#B5C7FF] p-4 placeholder:text-whiteRob placeholder:text-xs w-full text-whiteRob font-bold focus:bg-[#B5C7FF] focus:text-blackRob focus:rounded-lg focus:placeholder:text-blackRob'} type="email" name="email" id="email" placeholder="Email"/>
                           </label>
                           <label>
                               <input className={'text-start font-mono bg-blueRob border-b-2 border-b-[#B5C7FF] p-4 placeholder:text-whiteRob placeholder:text-xs w-full text-whiteRob font-bold focus:bg-[#B5C7FF] focus:text-blackRob focus:rounded-lg focus:placeholder:text-blackRob'} type="tel" name="telefono" id="telefono" placeholder="Teléfono"/>
                           </label>
                           <label>
                               <input className={'text-start font-mono bg-blueRob border-b-2 border-b-[#B5C7FF] p-4 placeholder:text-whiteRob placeholder:text-xs w-full text-whiteRob font-bold focus:bg-[#B5C7FF] focus:text-blackRob focus:rounded-lg focus:placeholder:text-blackRob'} type="text" name="consulta" id="consulta" placeholder="De qué se trata"/>
                           </label>
                       </form>

                       <form className={''}>
                           <div >
                               <input className={' border-2 rounded-lg border-whiteRob '} type="checkbox" name="uxui"
                                      id="uxui"/>
                               <label className={'text-whiteRob font-mono uppercase font-bold p-2'}
                                      htmlFor="uxui">UX/UI</label>
                               <input type="checkbox" name="webdev" id="webdev"/>
                               <label className={'text-whiteRob font-mono uppercase font-bold p-2'} htmlFor="webdev">WEB
                                   DEV</label>
                               <input type="checkbox" name="branding" id="branding"/>
                               <label className={'text-whiteRob font-mono uppercase font-bold p-2'}
                                      htmlFor="branding">BRANDING</label>
                           </div>
                           <div>

                               <input type="checkbox" name="contenido" id="contenido"/>
                               <label className={'text-whiteRob font-mono uppercase font-bold p-2'}
                                      htmlFor="contenido">CONTENIDO</label>
                               <input type="checkbox" name="estrategia" id="estrategia"/>
                               <label className={'text-whiteRob font-mono uppercase font-bold p-2'}
                                      htmlFor="estrategia">ESTRATEGIA</label>
                               <input type="checkbox" name="otros" id="otros"/>
                               <label className={'text-whiteRob font-mono uppercase font-bold p-2'}
                                      htmlFor="otros">OTROS</label>
                           </div>


                       </form>
                       <button className={'w-full bg-[#FCE36C] rounded'}>Enviar</button>
                   </div>


                   {children}
               </div>
           </div>
       </section>
    );
};