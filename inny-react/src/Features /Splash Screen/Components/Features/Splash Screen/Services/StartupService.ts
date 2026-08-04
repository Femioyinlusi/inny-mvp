/**  * ====================================================================== ======  * initializeApplication()  * ====================================================================== ======  *  * Description:  * Coordinates every startup operation.  *  * Inputs:  * setStatus()  *  * Output:  * {  *    success:boolean  *    authenticated:boolean  *    message:string  * }  *  * Assumptions:  * - Browser supports Fetch API.  * - Backend services exist.  */ 
 
import { browserSupported } from "../Utils/browserCheck";

export async function initializeApplication(
    setStatus: (value: string) => void
) {

    try {
 
        //--------------------------------------------------         // Internet Check         //-------------------------------------------------- 
 
        setStatus("Checking Internet Connection..."); 
 
        if (!navigator.onLine) {

            return {
                success: false,
                authenticated: false,
                message: "No internet connection"
            };
 
        } 
 
        //--------------------------------------------------         // Browser Compatibility         //-------------------------------------------------- 
 
        setStatus("Checking Browser Compatibility..."); 
 
        if (!browserSupported()) { 
 
            return { 
 
                success: false,                 authenticated: false,                 message: "Browser not supported." 
 
            }; 
 
        } 
 
        //--------------------------------------------------         // Simulate Resource Loading         //-------------------------------------------------- 
 
        setStatus("Loading Resources..."); 
 
        await delay(1500); 
 
        //--------------------------------------------------         // Check Authentication         //-------------------------------------------------- 
 
        setStatus("Authenticating User..."); 
 
        const token = localStorage.getItem("token"); 
 
        const authenticated = token !== null; 
 
        //--------------------------------------------------         // Check Updates         //-------------------------------------------------- 
 
        setStatus("Checking for Updates..."); 
 
        await delay(1000); 

         //--------------------------------------------------         // Complete         //-------------------------------------------------- 
 
        setStatus("Launching INNY..."); 
 
        await delay(1000); 
 
        return { 
 
            success: true,             authenticated,             message: "" 
 
        }; 
 
    } 
 
    catch { 
 
        return { 
 
            success: false,             authenticated: false,             message: "Unexpected startup error." 
 
        }; 
 
    } 
 
} 
 
/**  * Creates a short delay.  *  * Input:  * milliseconds  *  * Output:  * Promise<void>  */ function delay(ms: number) { 
 
    return new Promise(resolve => setTimeout(resolve, ms)); 
 
} 