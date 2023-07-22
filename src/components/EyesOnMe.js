// Code EyesOnMe Component Here
function EyesOnMe() {
    function hanleFocus(){
        console.log('Good!');
    }
    function handleBlur(){
        console.log('Hey! Eyes on me!');
    }
    return(
      <button onFocus={hanleFocus} onBlur={handleBlur}>Eyes on me</button>  
    )
}
export default EyesOnMe