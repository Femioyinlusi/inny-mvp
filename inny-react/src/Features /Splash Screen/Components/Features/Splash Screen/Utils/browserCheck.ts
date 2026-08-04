/**  * ====================================================================== ======  * browserSupported()  * ====================================================================== ======  *  * Description:  * Determines whether the browser supports  * all required technologies.  *  * Inputs:  * None  *  * Outputs:  * boolean  *  * Assumptions:  * Modern browser.  */ 
 
export function browserSupported(): boolean { 
 
    return ( 
 
        typeof Storage !== "undefined" &&         typeof fetch !== "undefined" &&         typeof Promise !== "undefined" 
 
    ); 
 
} 