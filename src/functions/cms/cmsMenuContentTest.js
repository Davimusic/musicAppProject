import { useRouter } from 'next/navigation';
import handleMultipleFunctions from '../general/handleMultipleFunctions';
import localStorageAcces from '../security/localStorageAcces';

export default function CmsMenuContent(){
    const router = useRouter();

    return( <>//location?
                <button className="botones" onClick={handleMultipleFunctions(
                () => localStorageAcces('POST', 'loggingStatus', false),                     
                () => router.push('/')
                )}>SALIR</button>
            </>
    )
}