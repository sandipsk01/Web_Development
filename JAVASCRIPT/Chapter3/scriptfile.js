var people= [
    {
        'name':'anubhav gattani',
        'class':'8',
        'gender':'M',
        'fees':'3000',
        'Subject':'maths/Science'
    },
    {
        'name':'anwesha gupta',
        'class':'8',
        'gender':'F',
        'fees':'1500',
        'Subject':'All'
    },
    {
        'name':'Yash Bajaj',
        'class':'8',
        'gender':'M',
        'fees':'1500',
        'Subject':'All'
    },
    {
        'name':'Mrinal baid',
        'class':'8',
        'gender':'M',
        'fees':'1500',
        'Subject':'maths/Science'
    },
    {
        'name':'Eveleen',
        'class':'8',
        'gender':'F',
        'fees':'1500',
        'Subject':'All'
    },
    {
        'name':'Biprojit',
        'class':'8',
        'gender':'M',
        'fees':'1500',
        'Subject':'All'
    }
]



//To filter whether they are boy or girl



//filter logic
function filter_boys(item)
{
    return item.gender =='M';
}
function filter_girls(item)
{
    return item.gender=='F';
}
function filter_people(type)
{
    var filtered_data;
    type=='M'?filtered_data=people.filter(filter_boys):filtered_data=people.filter(filter_girls)
    console.info(filtered_data);
    const_html(filtered_data);
}
    function const_html(filtered_data)
    {
        var people_data=filtered_data?filtered_data:people;
        var dynamic_data='';
        console.log(people_data);


        //starting for loop to take in info one at a time
        for(var i=0;i<people_data.length;i++)
        {
            dynamic_data+=`
            <div style=" height: 200px;
            padding: 20px;
            background-color: #ccc;
            display:inline-block;
            border: solid 1px #333;
            margin:20px;">

            <p>${people_data[i].name}</p>
            <p>${people_data[i].class}</p>
            <p>${people_data[i].fees}</p>
            <p>${people_data[i].Subject}</p>
            </div>

            
            `
        }

    


    //by which id i am reffering this js to html page.....also in that id , what is variable of js acting
    document.getElementById("here").innerHTML=dynamic_data;
    

    }

//function const_html2()
    //{
       // var people_data=people;
      //  var dynamic_data='';


        //starting for loop to take in info one at a time
       // for(var i=0;i<people_data.length;i++)
//{
            // dynamic_data+=`
            // <div style=" height: 200px;
            // padding: 20px;
            // background-color: #ccc;
            // display:inline-block;
            // border: solid 1px #333;
            // margin:20px;">

            // <p>${people[i].name}</p>
            // <p>${people[i].class}</p>
            // <p>${people[i].fees}</p>
            // <p>${people[i].Subject}</p>
            // </div>

            
            // `
        // }

    


   
