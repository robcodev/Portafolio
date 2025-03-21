import LeftEntry from "../Components/leftEntry.jsx";
import RightEntry from "../Components/rightEntry.jsx";

export default function Index() {

    return (
        <>
            <main className={'grid grid-cols-3 h-screen gap-10 content-center'}>
                        <LeftEntry/>
                        <RightEntry/>
            </main>

        </>
    );
}
