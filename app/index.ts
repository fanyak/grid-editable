
        interface Todo {
                id: string; 
                userId: string; 
                completed: boolean;
                title: string;
        };

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response: Response) => response.json())
        .then((todos: Todo[]) => {
                const table: HTMLElement = document.body.querySelector('.table')
                todos.slice(0,50).forEach((todo: Todo, index: number) => {
                       Object.keys(todo).forEach((key: string) => {
                               const span = document.createElement('span');
                               span.setAttribute('data-key', key);
                               span.setAttribute('data-row-index', `${index}`);
                               span.setAttribute('tabindex', '0');
                               const text = document.createTextNode(todo[key]);
                               span.appendChild(text);                               
                               table.appendChild(span);
                       })
                });
                return table;
        }).then((table: HTMLElement) => {
                table.addEventListener('click', (event) => {
                        console.log(event.target);
                        const target = event.target as HTMLElement;
                        const col = target.dataset.key;
                        
                        if (col === 'completed') {
                                let value = target.textContent;
                                target.removeChild(target.childNodes[0]);
                                const editable = document.createElement('span');
                                editable.setAttribute('contenteditable', 'true');
                                editable.innerHTML = value;
                                target.appendChild(editable)
                                editable.focus();
                        }
                }, false);
        });       
        

       
