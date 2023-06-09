
function htmlTemplate(response) {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <title>About Me Generator</title>
</head>
<body>
    <section id="container">
        <h1>All About Me:</h1>
        <div id="info">
        <h2>My name is ${response.name}</h2>
        <h2>My location is ${response.location}</h2>
        <h3>My GitHub Profile is: ${response.Github}</h3>
        <h3>My Linkdin Profile is: ${response.linkdin}</h3>
    </div>
    </section>
</body>
</html>` };

module.exports =  htmlTemplate;