import React from "react";


const Modal = ({show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (<>test</>
        // <div className={showHideClassName}>
        //     <section className="modal-main">
        //         {
        //             show ?
        //                 <>
        //                     <div>
        //                         <div
        //                             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        //                         >
        //                             <div className="relative w-auto my-6 mx-auto max-w-3xl">
        //                                 {/*content*/}
        //                                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        //                                     {/*header*/}
        //                                     <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        //                                         <h3 className="text-3xl font-semibold">
        //                                             Modal Title
        //                                         </h3>
        //                                         <button
        //                                             className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        //                                             onClick={() => setShowModal(false)}
        //                                         >
        //                                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
        //                                       X
        //                                     </span>
        //                                         </button>
        //                                     </div>
        //                                     {/*body*/}
        //                                     <div className="relative p-6 flex-auto">
        //                                         <div className={"flex "}>
        //                                             <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
        //                                                 <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-45 bg-gray-500" />
        //                                                 <div className="mt-6 mb-2">
        //                                                     <h2 className="text-xl font-semibold tracki">Nam maximus purus</h2>
        //                                                 </div>
        //                                                 <p className="text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        //                                             </div>
        //                                             <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
        //                                                 <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-45 bg-gray-500" />
        //                                                 <div className="mt-6 mb-2">
        //
        //                                                     <h2 className="text-xl font-semibold tracki">Nam maximus purus</h2>
        //                                                 </div>
        //                                                 <p className="text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                     {/*footer*/}
        //                                     <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        //                                         <button
        //                                             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //                                             type="button"
        //                                             onClick={() => setShowModal(false)}
        //                                         >
        //                                             Close
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </>
        //                 :
        //                 null
        //         }
        //     </section>
        // </div>
    );
}

export default Modal;