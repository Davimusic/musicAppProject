import React from 'react';
import { useEffect } from "react";
import RenderElement from '@/functions/renderElement';
import LoginMold from '@/molds/login';
import '../estilos/general/general.css'

export function Content() {  
    return 'hola mundo'  
    return (
        <div style={{height:'100%'}}>
            {RenderElement(LoginMold())}
        </div>
    );
}



