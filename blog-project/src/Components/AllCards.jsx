import {CardsPortfolio} from "./cardsPortfolio.jsx";

export function AllCards() {
    return <>
        <div className={'grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-8 mx-10 justify-between'}>
            <CardsPortfolio/>

        </div>
    </>
}