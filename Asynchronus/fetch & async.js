const getPost = async () => {
    try{
        console.log('loading...');
        await new Promise (resolve => setTimeout(resolve,2000));
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const firstFivePosts = data.slice(0, 5);
        console.log("--- Post Titles ---");
        firstFivePosts.map((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
    } catch{
        console.log('Error Fetching Data', error);
    }
}

getPost();
