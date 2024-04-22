const getElemento = (selector) => {
    return new Promise(resolve => {
        if(document.querySelector(selector)){
            return resolve(document.querySelector(selector));
        } else{
            console.log('1');
        }

        const observer = new MutationObserver(mutations => {
            if(document.querySelector(selector)){
                resolve(document.querySelector(selector));
                observer.disconnect();
            } else{
                console.log('2');
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};


export default getElemento;