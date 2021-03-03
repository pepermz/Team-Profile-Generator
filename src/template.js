const generateCards = teamData => {

    const engineer = teamData.engineer.map(function(job) {
        let engineerData = `
        <div class="card" style="width: 800px ; margin-top: 20px; background-color: rgb(197, 197, 197); margin-left: 335px; text-align: center">
            <h2>${job.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
        </div>
        `
        return engineerData
    })

    const manager = teamData.manager.map(function(job) {
        let managerData = `
        <div class="card" style="width: 800px ; margin-top: 20px; background-color: rgb(197, 197, 197); margin-left: 335px; text-align: center">
            <h2>${job.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.office}</p>
        </div>
        `
        return managerData
    });

    const intern = teamData.intern.map(function(job) {
        let internData = `
        <div class="card" style="width: 800px ; margin-top: 20px; background-color: rgb(197, 197, 197); margin-left: 335px; text-align: center">
            <h2>${job.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> School: ${job.school}</p>
        </div>
        `
        return internData
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Generator</span>
                </div>
            </nav>
            ${generateCards(templateData)}
        </body>
        </html>    
        `
}