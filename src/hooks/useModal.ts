import { useState } from "react"


function useModal() {
    const [isOpenModal,setIsopenModal]= useState(false)

    const openModal = ()=>setIsopenModal(true);
    const closeModal =()=>setIsopenModal(false)


    return {isOpenModal,openModal,closeModal}
}

export default useModal
