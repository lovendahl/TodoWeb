function updateNewTodo(headline,beskrivelse,clickEvent)
    {
    console.log("New todo created... Sending request to backend.")
    console.log("ClickEvent is: " + clickEvent)
    postData();
    async function postData(){
        
        clickEvent.preventDefault();
        console.log("sending new todo");

        const res = await fetch('http://localhost:8010/new',
            {
                method:'POST',
                headers: {
                    "Content-type":'application/json'
                },
                body: JSON.stringify({
                    parcel: headline
                })
            })
        };
        postData();
    }

    /*
    async function postData(){
        
        clickEvent.preventDefault();
        console.log("sending new todo");

        const res = await fetch('http://localhost:8010/new',
            {
                method:'POST',
                headers: {
                    "Content-type":'application/json'
                },
                body: JSON.stringify({
                    parcel: headline
                })
            })
        };
        postData();
    }*/
