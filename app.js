const firstBtn = document.getElementById('boton1')

firstBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'empleado.json', true)

    xhr.onload = () => {
        if (this.status === 200) {
            let p = JSON.parse(this.responseText)

            let HTML = `
                <ul>
                    <li>ID: ${p.id}</li>
                    <li>NAME: ${p.nombre}</li>
                    <li>BUSINESS: ${p.empresa}</li>
                    <li>JOB: ${p.trabajo}</li>
                </ul>
            `
            document.getElementById('empleado').innerHTML = HTML
        }
    }

    xhr.send()
})

const secondBtn = document.getElementById('boton2')

secondBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'empleados.json', true)

    xhr.onload = () => {
        if (this.status === 200) {
            const people = JSON.parse(this.responseText)
            let HTML = ''

            people.forEach( p => {
                HTML += `
                <ul>
                    <li>ID: ${p.id}</li>
                    <li>NAME: ${p.nombre}</li>
                    <li>BUSINESS: ${p.empresa}</li>
                    <li>JOB: ${p.trabajo}</li>
                </ul>
                `
            })

            document.getElementById('empleados').innerHTML = HTML
        }
    }

    xhr.send()
})