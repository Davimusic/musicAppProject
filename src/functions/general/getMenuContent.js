import { useRouter } from 'next/navigation';
import handleMultipleFunctions from '../general/handleMultipleFunctions';
import localStorageAcces from '../security/localStorageAcces';

export default function getMenuContent(){
    const router = useRouter();

    return( <>
                <button className="botones" onClick={handleMultipleFunctions(
                () => localStorageAcces('POST', 'loggingStatus', false),                     
                () => router.push('/')
                )}>SALIR</button>
            </>
    )
}