const Router = (pages, id_base, name) => {
    const item = pages.filter(item => item.name === name);

    if (item[0]) {
        const item_current = item[0];

        fetch(item_current.component)
            .then(response => response.text())
            .then(html => {
                fetch(item_current.script)
                    .then(response => response.text())
                    .then(js => {
                        const base = document.getElementById(id_base);

                        const item_script = document.createElement('script');

                        item_script.type = 'text/javascript';
                        item_script.text = js;

                        base.innerHTML = html;
                        base.appendChild(item_script);
                    })
            })
    } else {
        alert("Erro ao inserir página");
    }
};