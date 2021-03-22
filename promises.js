const posts=[
    {
        title:'Post one',
        body: 'This is post one'
    },
    {
        title:'Post two',
        body: 'This is post two'
    }
];

function getPosts(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((post)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            //const err = true;
            const err = false;

            if(!err) {
                resolve();
            }
            else {
                reject('Error! something is wrrong');
            }
        }, 2000);
    });  
};

// createPost({title:'Post three',
//      body: 'This is post 3'})
//      .then(getPosts)
//         .catch(err=>console.log(err));


//==============Assync Await===============

// async function init(){
//     await createPost({title:'Post three',body: 'This is post 3'});

//     getPosts(); //waits till await statement is completed
// }
// init();


//=============Assync await with fetch()============

async function fetchUsers(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUsers();



//==============promise.all==============

// const promise1= Promise.resolve("Hello world");
// const promise2= 10;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 2000, "Goodbye");
// })
// const promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values=>{
//     console.log(values);
// })


