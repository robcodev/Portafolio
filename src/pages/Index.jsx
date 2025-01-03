import HeroSec from "../Components/HeroSec.jsx";
import IndexContentSec from "../Components/indexContentSec.jsx";
import IndexCasosExito from "../Components/indexCasosExito.jsx";
import IndexCtaBanner from "../Components/indexCtaBanner.jsx";

import {TextMarquee} from "../Components/Marquee.jsx";

const Index = () => {


    return (
        <>

            <HeroSec/>
            <TextMarquee/>
            <IndexContentSec/>
            <IndexCasosExito/>
            <IndexCtaBanner/>
        </>
    );
}
export default Index;