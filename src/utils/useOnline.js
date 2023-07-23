import { useEffect, useState } from "react";

const useOnline = () => {

    const[isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        // we'll extract our function so whatever we're setting in eventlistener we're removing the same fun. also 
        const handleOnline = () =>{
            setIsOnline(true);
        }
        const handleOffline = () =>{
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () =>   {    //we will unmount functions because if we route within different pages (like about, contact), the addEventlistener will be there which is not good
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, [])
  return isOnline;  //it will return boolean value i.e. if online ? true : false, 
}

export default useOnline;
