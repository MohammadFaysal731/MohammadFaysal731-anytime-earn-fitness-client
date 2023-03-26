import { useEffect } from "react";

const useTitle = title =>{

  useEffect(()=>{
    document.title =`${title} - Earn Fitness`;
  },[title])
}

export default useTitle;