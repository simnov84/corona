function foo() {
    let cc = document.getElementById("cname").value;
    console.log(cc);

    async function foo1() {
        let data = await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);
        let result = await data.json();
        console.log(result);
       
        let div3 = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
       
        for(var i in result){
            div3.innerHTML =
            `<div>Confirmed cases</div>
            <div>${result[i].Confirmed}</div>`;
            div1.innerHTML =
            `<div>Death cases</div>
            <div>${result[i].Deaths}</div>`;
            div2.innerHTML =
            `<div>Active cases</div>
            <div>${result[i].Active}</div>`;

        main.append(div3);
        main.append(div1);
        main.append(div2);}
    }
    
    let main = document.getElementById('content');
    main.innerHTML = "";
    foo1();
}