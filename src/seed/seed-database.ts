import { initialData } from "./seed";

async function main(){



    console.log(initialData)
}
(()=>{

    if(process.env.NODE_ENV === 'product') return;

    main();
})();