export default function Post(){
    function handleSubmit(){

    }
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder={'Titulo'}
                    name={'titulo'}
                    onChange={handleSubmit}
                />
            </form>
        </>
    )
}