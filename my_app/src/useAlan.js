import React,{useCallback, useEffect,useState} from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import {useHistory} from "react-router-dom";




const COMMANDS={
    OPEN_CART: "open-cart",
    OPEN_HOME: "go-to-main-page",
    OPEN_LOGIN: "go-to-login-page"
}

function useAlan(){
    
    const[alanInstance, setAlanInstance]=useState();
    
    

    
      const openCart=useCallback(()=>{
        
          alanInstance.playText("Opening the cart");
            
             
            // eslint-disable-next-line no-restricted-globals
            
             window.location.replace("/checkout");
        //   window.location.href = "/checkout";
        //   window.location.assign("/checkout");
        
      },[alanInstance])

      const gotoMain=useCallback(()=>{
        alanInstance.playText("Going to main");
          //  history.push("/checkout");
           
          // eslint-disable-next-line no-restricted-globals
          
           window.location.replace("/");
      //   window.location.href = "/checkout";
      //   window.location.assign("/checkout");
      
    },[alanInstance])

    const gotoLogin=useCallback(()=>{
        alanInstance.playText("Going to login");
          //  history.push("/checkout");
           
          // eslint-disable-next-line no-restricted-globals
          
           window.location.replace("/login");
      //   window.location.href = "/checkout";
      //   window.location.assign("/checkout");
      
    },[alanInstance])
      


     useEffect(()=>{
         
         window.addEventListener(COMMANDS.OPEN_CART, openCart)
         window.addEventListener(COMMANDS.OPEN_HOME, gotoMain)
         window.addEventListener(COMMANDS.OPEN_LOGIN, gotoLogin)
         return () =>{
             window.removeEventListener(COMMANDS.OPEN_CART, openCart)   
             window.removeEventListener(COMMANDS.OPEN_HOME, gotoMain)   
             window.removeEventListener(COMMANDS.OPEN_LOGIN, gotoLogin)    
            }
     },[openCart,gotoMain,gotoLogin])
    useEffect(()=>{
        
        if(alanInstance != null) return

        setAlanInstance(
            alanBtn({
            key: '4096edb74f98092a0553c3995e4851402e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command})=>{
                

               window.dispatchEvent(new CustomEvent(command))
            }
        })
        )
    },[])
    return null
}

export default useAlan;