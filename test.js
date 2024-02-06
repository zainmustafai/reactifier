useEffect(() => {

    sum(a,b){
        return a + b;
    }
    sum();
    //cleanup function
    () => {
        sum();
    };
},[]);