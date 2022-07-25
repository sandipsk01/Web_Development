var info = [
    {
        'Name':'Sandip',
        'Profession':'Developer',
        'Qualification':'B.tech',
        'Company':'TCS'
    },
    {
        'Name':'Sumit',
        'Profession':'Banker',
        'Qualification':'Bsc',
        'Company':'ICICI'
    },
    {
        'Name':'Shiva',
        'Profession':'Developer',
        'Qualification':'B.tech',
        'Company':'TCS'
    }
]

function putData(){
    var dynamicData=''

    for(var i=0; i<info.length; i++){
            dynamicData +=`
            <div>
                <p>${info[i].Name}</p>
                <p>${info[i].Profession}</p>
                <p>${info[i].Qualification}</p>
                <p>${info[i].Company}</p>
            </div>
            `;
    }
    document.getElementById("info").innerHTML=dyanamicHTML
}